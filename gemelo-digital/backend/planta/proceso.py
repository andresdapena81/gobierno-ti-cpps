"""
EL ACTIVO FÍSICO — simulador de una línea de llenado y tapado.

    ⚠ ESTE ARCHIVO **NO** ES EL GEMELO DIGITAL.

Es el sustituto de la planta real: hace las veces de las botellas, las
válvulas y los sensores que en una fábrica de verdad estarían del otro lado
de un PLC. El gemelo (paquete `gemelo/`) sólo puede conocer este proceso a
través de lo que se publica por telemetría, exactamente igual que en una
planta real.

Esa frontera es la lección central del laboratorio: si un estudiante puede
señalar dónde termina la realidad y dónde empieza el modelo, entendió qué es
un gemelo digital.

--------------------------------------------------------------------------
EL PROCESO
--------------------------------------------------------------------------
Cuatro estaciones en serie:

    depósito → llenadora → tapadora → inspección

1. DEPÓSITO. Tanque de sección A, alimentado por una bomba de reposición y
   drenado por la llenadora. Nivel L(t) en metros.

2. LLENADORA. Volumétrica **por tiempo**: abre la válvula durante `t_set`
   segundos y confía en que el caudal sea el nominal. Es el tipo de
   llenadora más común en plantas pequeñas, y es la elección deliberada de
   este laboratorio, porque acopla la física con la calidad:

       si el caudal cae (válvula desgastada o tanque bajo),
       la botella queda CORTA y la rechaza inspección.

   El caudal sigue una ley tipo Torricelli:

       Q = Cv · √L · apertura

   donde Cv degrada con el desgaste. Al bajar L o Cv, baja Q, y con `t_set`
   fijo el volumen depositado V = ∫Q·dt cae por debajo de la tolerancia.

3. TAPADORA. Tiempo fijo con dispersión; puede atascarse.

4. INSPECCIÓN. Rechaza toda botella fuera de la tolerancia de volumen.

--------------------------------------------------------------------------
POR QUÉ IMPORTA PARA EL CURSO
--------------------------------------------------------------------------
Las tres componentes del OEE (S13) salen del MISMO modelo físico, no de tres
contadores inventados:

    Disponibilidad ← paradas por atasco y por tanque vacío
    Desempeño      ← tiempo de ciclo real vs. tiempo de ciclo ideal
    Calidad        ← botellas cortas por caída de caudal

Por eso el OEE de este simulador se degrada de forma *causal*: se puede
rastrear cada punto perdido hasta una variable física.
"""

from __future__ import annotations

import math
import random
from dataclasses import dataclass, field, asdict
from enum import Enum


# ==========================================================================
#  PARÁMETROS NOMINALES (los "de placa")
# ==========================================================================
# El gemelo conoce ESTOS valores. La planta puede apartarse de ellos —y de
# hecho lo hace cuando se inyecta una falla—. Esa diferencia es justamente
# lo que el residual del gemelo tiene que detectar.

@dataclass
class Nominal:
    # --- depósito ---
    # El área es pequeña a propósito: con 0.08 m², cada botella de 2 L hace
    # caer el nivel unos 25 mm. Así la dinámica del tanque se VE en la
    # gráfica (un diente de sierra por ciclo) en vez de ser una línea plana.
    area_tanque: float = 0.08        # m²  · sección del tanque
    nivel_inicial: float = 1.10      # m
    nivel_max: float = 1.60          # m
    nivel_min_operativo: float = 0.15  # m · por debajo, se para la línea

    # --- lazo de control de nivel ---
    # Control proporcional sobre la bomba de reposición:
    #     Q_bomba = sat( K·(L_sp − L_medido) , 0 , Q_max )
    #
    # Es P puro, sin integral, así que tiene OFFSET: el nivel se estabiliza
    # por debajo de la consigna, no en ella. Es deliberado — es el
    # comportamiento real de un lazo P y da pie a explicar por qué en planta
    # se usa PI. Con K=6 y un consumo de ~0.52 L/s, el offset es de 87 mm y
    # el nivel se asienta cerca de 1.10 m.
    #
    # ⚠ CLAVE PARA EL LABORATORIO: el controlador lee el MISMO transmisor
    # que el gemelo. Si el sensor se desvía, el lazo de control también se
    # equivoca y vacía el tanque de verdad. Un instrumento mal calibrado no
    # sólo engaña a los tableros: mueve el proceso.
    nivel_sp: float = 1.19           # m · consigna del lazo de nivel
    k_control: float = 6.0           # (L/s)/m · ganancia proporcional
    caudal_bomba_max: float = 1.10   # L/s · capacidad de la bomba

    # --- llenadora ---
    # Cv calibrado para que, a 1.10 m y con t_set = 2.30 s, la botella salga
    # justo en 2.00 L. Verificable con `prueba_rapida.py`.
    cv_valvula: float = 0.829        # coef. de descarga  Q = Cv·√L
    t_set: float = 2.30              # s · tiempo de apertura de válvula
    volumen_objetivo: float = 2.00   # L · nominal por botella
    tolerancia: float = 0.05         # L · ±  (2.5 %)

    # --- tapadora ---
    t_tapado: float = 1.10           # s
    jitter_tapado: float = 0.06      # s · desviación estándar

    # --- transporte entre estaciones ---
    t_indexado: float = 0.45         # s · avanzar una posición

    def tiempo_ciclo_ideal(self) -> float:
        """
        Ciclo ideal de la línea, en segundos por botella.

        Las estaciones son SERIALES (una sola cabeza: llena, luego tapa,
        luego indexa), así que el ciclo ideal es la suma, no el máximo.

        Se calcula con el `t_set` NOMINAL y queda FIJO durante todo el turno.
        Esto tiene una consecuencia deliberada y muy útil para el curso:

            si el operador alarga `t_set` para corregir botellas cortas,
            gana CALIDAD pero pierde DESEMPEÑO.

        El what-if del gemelo tiene que sopesar ese intercambio, y la
        recomendación que produce no es gratis. Un gemelo que sólo optimiza
        una componente del OEE es un gemelo que engaña a quien decide.
        """
        return self.t_set + self.t_tapado + self.t_indexado

    def caudal_nominal(self, nivel: float) -> float:
        """Ley de descarga con los parámetros de placa. L/s."""
        return self.cv_valvula * math.sqrt(max(nivel, 0.0))

    def caudal_bomba(self, nivel_medido: float, q_max: float | None = None) -> float:
        """Salida del lazo P de nivel, saturada por la capacidad de la bomba."""
        q_max = self.caudal_bomba_max if q_max is None else q_max
        return max(0.0, min(q_max, self.k_control * (self.nivel_sp - nivel_medido)))


# ==========================================================================
#  MODOS DE FALLA INYECTABLES
# ==========================================================================
# Cada falla toca la FÍSICA (o la INSTRUMENTACIÓN), nunca los contadores.
# El OEE cae como consecuencia, no por decreto.

class Falla(str, Enum):
    NINGUNA = "ninguna"

    # Desgaste progresivo del asiento de la válvula: Cv cae ~0.6 %/min.
    # Efecto: botellas cada vez más cortas → la CALIDAD se desploma.
    DESGASTE_VALVULA = "desgaste_valvula"

    # La bomba de reposición pierde caudal. El tanque se vacía, √L baja,
    # el caudal de llenado baja con él. Efecto mixto: calidad y, al final,
    # paradas por nivel mínimo → cae DISPONIBILIDAD.
    BOMBA_DEGRADADA = "bomba_degradada"

    # La tapadora se atasca con frecuencia. Micro-paradas.
    # Efecto: DISPONIBILIDAD.
    ATASCO_TAPADORA = "atasco_tapadora"

    # ⭐ LA MÁS INTERESANTE PARA EL CURSO ⭐
    # El transmisor de nivel se desvía: reporta 0.35 m de más. La planta
    # sigue produciendo EXACTAMENTE igual —la física no cambió—, pero el
    # gemelo, que se alimenta del sensor, empieza a predecir mal.
    #
    # Un dashboard no ve nada raro: el OEE sigue perfecto.
    # El gemelo dispara el residual, porque su modelo deja de cuadrar.
    #
    # Es la demostración de que un gemelo detecta problemas de
    # INSTRUMENTACIÓN que ningún tablero de indicadores puede ver.
    SENSOR_DESVIADO = "sensor_desviado"


class Estacion(str, Enum):
    ESPERANDO = "esperando"
    LLENANDO = "llenando"
    TAPANDO = "tapando"
    INDEXANDO = "indexando"
    PARADA = "parada"


# ==========================================================================
#  ESTADO PUBLICADO (lo único que el gemelo llega a ver)
# ==========================================================================

@dataclass
class Telemetria:
    """
    El "cable" entre la planta y el gemelo.

    Todo lo que el gemelo sabe del mundo entra por aquí. Nótese lo que NO
    está: `cv_real`, `falla_activa` ni ninguna variable interna del
    simulador. El gemelo tiene que INFERIR el desgaste, no leerlo.
    """
    t: float = 0.0                    # s desde el arranque del turno
    nivel_tanque: float = 0.0         # m · ¡MEDIDO por el transmisor!
    caudal_instantaneo: float = 0.0   # L/s
    estacion: str = Estacion.ESPERANDO.value
    en_marcha: bool = True

    # contadores del turno
    botellas_totales: int = 0
    botellas_buenas: int = 0
    botellas_rechazadas: int = 0

    # última botella terminada
    ultimo_volumen: float = 0.0       # L
    ultimo_ciclo: float = 0.0         # s

    # tiempos acumulados del turno (para OEE)
    t_planificado: float = 0.0        # s
    t_produciendo: float = 0.0        # s
    t_parada: float = 0.0             # s

    def dict(self) -> dict:
        return asdict(self)


# ==========================================================================
#  EL SIMULADOR
# ==========================================================================

class LineaLlenado:
    """
    Integrador de paso fijo. Mezcla física continua (nivel del tanque, caudal)
    con eventos discretos (avance de botella, atascos).

    Uso:
        linea = LineaLlenado()
        for _ in range(1000):
            linea.paso(0.05)
        print(linea.telemetria())
    """

    def __init__(self, nominal: Nominal | None = None, semilla: int | None = 7):
        self.nom = nominal or Nominal()
        self.rng = random.Random(semilla)

        # --- estado físico REAL (invisible para el gemelo) ---
        self.t = 0.0
        self.nivel_real = self.nom.nivel_inicial
        self.cv_real = self.nom.cv_valvula          # degrada con el desgaste
        self.q_bomba_max = self.nom.caudal_bomba_max  # capacidad, degradable
        self.sesgo_sensor = 0.0                     # m · error del transmisor
        self.caudal_bomba_actual = 0.0              # salida del lazo de nivel

        # --- parámetros OPERATIVOS (los que el operador puede cambiar) ---
        # Son los que el what-if del gemelo propone ajustar.
        self.t_set = self.nom.t_set

        # --- máquina de estados de la línea ---
        self.estacion = Estacion.LLENANDO
        self.t_en_estacion = 0.0
        self.volumen_actual = 0.0        # L acumulados en la botella en curso
        self.t_ciclo_actual = 0.0

        # --- contadores del turno ---
        self.botellas_totales = 0
        self.botellas_buenas = 0
        self.botellas_rechazadas = 0
        self.ultimo_volumen = 0.0
        self.ultimo_ciclo = 0.0

        self.t_planificado = 0.0
        self.t_produciendo = 0.0
        self.t_parada = 0.0

        # --- fallas ---
        self.falla = Falla.NINGUNA
        self.t_falla = 0.0               # s transcurridos con la falla activa
        self.t_restante_parada = 0.0

        self.caudal_instantaneo = 0.0

    # ----------------------------------------------------------------------
    #  Inyección de fallas
    # ----------------------------------------------------------------------
    def inyectar(self, falla: Falla | str) -> None:
        falla = Falla(falla)
        if falla == self.falla:
            return
        self.falla = falla
        self.t_falla = 0.0
        if falla == Falla.NINGUNA:
            # "Reparar": restituye los parámetros de placa.
            self.cv_real = self.nom.cv_valvula
            self.q_bomba_max = self.nom.caudal_bomba_max
            self.sesgo_sensor = 0.0
        elif falla == Falla.SENSOR_DESVIADO:
            # Salto instantáneo del transmisor. La física NO cambia.
            self.sesgo_sensor = 0.35

    def congelar_falla(self) -> None:
        """
        Detiene la PROGRESIÓN de la falla sin reparar el daño ya hecho.

        No es un artificio: modela el caso real de un deterioro que se
        estabiliza (el asiento de la válvula se asienta y deja de erosionar).
        Es necesario para el laboratorio porque separa dos preguntas que
        conviene no mezclar:

          · ¿la compensación funciona?          → con la falla congelada, sí
          · ¿la compensación RESUELVE el problema? → con la falla progresando,
            no: es un parche que compra tiempo, y la decisión de fondo sigue
            siendo parar la línea y cambiar la válvula

        Esa segunda pregunta es la interesante para el curso. Un gemelo que
        propone compensaciones sin decir que el deterioro sigue avanzando
        está desplazando una decisión de mantenimiento hacia el futuro sin
        que nadie la haya tomado conscientemente.
        """
        self.falla = Falla.NINGUNA
        self.t_falla = 0.0

    def _evolucionar_falla(self, dt: float) -> None:
        """Las fallas progresivas empeoran con el tiempo."""
        if self.falla == Falla.NINGUNA:
            return
        self.t_falla += dt

        if self.falla == Falla.DESGASTE_VALVULA:
            # −0.6 % por minuto, con piso en el 55 % del Cv de placa.
            self.cv_real = max(
                self.nom.cv_valvula * 0.55,
                self.cv_real * (1.0 - 0.006 * dt / 60.0),
            )
        elif self.falla == Falla.BOMBA_DEGRADADA:
            # Cae la CAPACIDAD de la bomba. Mientras siga por encima del
            # consumo (~0.52 L/s) el lazo de nivel lo compensa solo y no se
            # nota nada. Cuando cruza ese umbral, el lazo satura y el tanque
            # empieza a vaciarse. Es un buen ejemplo de falla latente: el
            # control la enmascara hasta que ya no puede.
            self.q_bomba_max = max(
                self.nom.caudal_bomba_max * 0.15,
                self.q_bomba_max * (1.0 - 0.15 * dt / 60.0),
            )

    # ----------------------------------------------------------------------
    #  Física
    # ----------------------------------------------------------------------
    def _caudal_llenado(self) -> float:
        """Caudal REAL por la válvula (L/s). Cero si no se está llenando."""
        if self.estacion != Estacion.LLENANDO:
            return 0.0
        return self.cv_real * math.sqrt(max(self.nivel_real, 0.0))

    def _integrar_tanque(self, dt: float, salida: float) -> None:
        """
        dL/dt = (Q_bomba − Q_salida) / A

        Los caudales están en L/s y el área en m²; 1 L = 1e-3 m³.

        El caudal de la bomba lo fija el lazo de nivel a partir de lo que
        MIDE el transmisor, no del nivel verdadero. Es el detalle que hace
        que un sensor desviado tenga consecuencias físicas y no sólo
        informativas.
        """
        nivel_medido = self.nivel_real + self.sesgo_sensor
        self.caudal_bomba_actual = self.nom.caudal_bomba(nivel_medido, self.q_bomba_max)
        neto_litros = self.caudal_bomba_actual - salida
        dL = (neto_litros * 1e-3) / self.nom.area_tanque * dt
        self.nivel_real = min(self.nom.nivel_max, max(0.0, self.nivel_real + dL))

    # ----------------------------------------------------------------------
    #  Máquina de estados
    # ----------------------------------------------------------------------
    def _terminar_botella(self) -> None:
        """Inspección: acepta o rechaza según el volumen depositado."""
        self.botellas_totales += 1
        self.ultimo_volumen = self.volumen_actual
        self.ultimo_ciclo = self.t_ciclo_actual

        desvio = abs(self.volumen_actual - self.nom.volumen_objetivo)
        if desvio <= self.nom.tolerancia:
            self.botellas_buenas += 1
        else:
            self.botellas_rechazadas += 1

        self.volumen_actual = 0.0
        self.t_ciclo_actual = 0.0

    def _prob_atasco(self, dt: float) -> float:
        """Probabilidad de atasco en este paso (proceso de Poisson)."""
        # Tasa base: una micro-parada cada ~12 min. Con la tapadora
        # atascándose, sube a una cada ~50 s.
        tasa = 1.0 / 720.0
        if self.falla == Falla.ATASCO_TAPADORA:
            tasa = 1.0 / 50.0
        return tasa * dt

    def paso(self, dt: float) -> None:
        """Avanza la simulación `dt` segundos."""
        self.t += dt
        self.t_planificado += dt
        self._evolucionar_falla(dt)

        # --- ¿estamos en parada? ---
        if self.estacion == Estacion.PARADA:
            self.t_parada += dt
            self.t_restante_parada -= dt
            # El tanque se sigue llenando mientras la línea está parada.
            self._integrar_tanque(dt, 0.0)
            self.caudal_instantaneo = 0.0
            if self.t_restante_parada <= 0.0 and self.nivel_real > self.nom.nivel_min_operativo:
                self.estacion = Estacion.LLENANDO
                self.t_en_estacion = 0.0
            return

        # --- parada por tanque vacío (protección de bomba) ---
        if self.nivel_real <= self.nom.nivel_min_operativo:
            self.estacion = Estacion.PARADA
            self.t_restante_parada = 25.0     # esperar reposición
            self.volumen_actual = 0.0
            self.t_ciclo_actual = 0.0
            return

        # --- atasco aleatorio ---
        if self.rng.random() < self._prob_atasco(dt):
            self.estacion = Estacion.PARADA
            self.t_restante_parada = self.rng.uniform(8.0, 35.0)
            self.volumen_actual = 0.0
            self.t_ciclo_actual = 0.0
            return

        self.t_produciendo += dt
        self.t_en_estacion += dt
        self.t_ciclo_actual += dt

        caudal = self._caudal_llenado()
        self.caudal_instantaneo = caudal
        self._integrar_tanque(dt, caudal)

        if self.estacion == Estacion.LLENANDO:
            # Volumétrica por TIEMPO: acumula lo que dé el caudal real.
            self.volumen_actual += caudal * dt
            if self.t_en_estacion >= self.t_set:
                self.estacion = Estacion.TAPANDO
                self.t_en_estacion = 0.0

        elif self.estacion == Estacion.TAPANDO:
            objetivo = max(0.2, self.rng.gauss(self.nom.t_tapado, self.nom.jitter_tapado))
            if self.t_en_estacion >= objetivo:
                self.estacion = Estacion.INDEXANDO
                self.t_en_estacion = 0.0

        elif self.estacion == Estacion.INDEXANDO:
            if self.t_en_estacion >= self.nom.t_indexado:
                self._terminar_botella()
                self.estacion = Estacion.LLENANDO
                self.t_en_estacion = 0.0

    # ----------------------------------------------------------------------
    #  Publicación
    # ----------------------------------------------------------------------
    def telemetria(self) -> Telemetria:
        """
        Lo que sale por el cable hacia el gemelo.

        Obsérvese `nivel_tanque`: es el nivel REAL **más el sesgo del
        transmisor**. Si el sensor está desviado, el gemelo recibe una
        mentira, y no tiene forma directa de saberlo. Sólo el residual
        lo delata.
        """
        return Telemetria(
            t=self.t,
            nivel_tanque=self.nivel_real + self.sesgo_sensor,
            caudal_instantaneo=self.caudal_instantaneo,
            estacion=self.estacion.value,
            en_marcha=self.estacion != Estacion.PARADA,
            botellas_totales=self.botellas_totales,
            botellas_buenas=self.botellas_buenas,
            botellas_rechazadas=self.botellas_rechazadas,
            ultimo_volumen=self.ultimo_volumen,
            ultimo_ciclo=self.ultimo_ciclo,
            t_planificado=self.t_planificado,
            t_produciendo=self.t_produciendo,
            t_parada=self.t_parada,
        )

    # Estado interno REAL — sólo para la vista "ojo de Dios" de la clase.
    # En una planta real esto NO EXISTE: es lo que el gemelo intenta estimar.
    def verdad_oculta(self) -> dict:
        return {
            "cv_real": round(self.cv_real, 4),
            "nivel_real": round(self.nivel_real, 4),
            "q_bomba_max": round(self.q_bomba_max, 4),
            "caudal_bomba_actual": round(self.caudal_bomba_actual, 4),
            "sesgo_sensor": round(self.sesgo_sensor, 4),
            "falla": self.falla.value,
            "t_set": round(self.t_set, 3),
        }
