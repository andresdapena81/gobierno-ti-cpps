"""
LA SOMBRA — el gemelo digital propiamente dicho.

Orquesta las cuatro capacidades que, juntas, hacen que esto sea un gemelo y
no un tablero:

    1. SOMBRA      · mantiene el último estado conocido de la planta
    2. MODELO      · predice lo que debería estar pasando        (modelo.py)
    3. RESIDUAL    · resta realidad − predicción y diagnostica  (residual.py)
    4. WHAT-IF     · simula futuros alternativos                 (whatif.py)

Quitá cualquiera de las cuatro y lo que queda es un dashboard. En
particular, quitá la 3 y ya no hay forma de saber si el modelo sigue siendo
válido — que es la pregunta que un gemelo tiene que responderse a sí mismo
todo el tiempo.

--------------------------------------------------------------------------
LA FRONTERA
--------------------------------------------------------------------------
Esta clase recibe `Telemetria` y nada más. No importa `planta.proceso` para
espiar el estado real: si lo hiciera, el laboratorio entero sería una
mentira. Todo lo que el gemelo "sabe" del desgaste de la válvula lo INFIERE
del volumen de las botellas.

(La única excepción es `verdad_oculta`, que la API expone por separado y
sólo para la vista "ojo de Dios" que se proyecta en clase. El gemelo nunca
la consulta.)
"""

from __future__ import annotations

from collections import deque

from .modelo import Creencia, Modelo
from .residual import AnalizadorResidual
from . import oee as oee_mod


class GemeloDigital:

    # Suavizado de la estimación de Cv. Más alto = reacciona antes pero
    # tiembla más con el ruido de medición. Otro compromiso para discutir.
    ALFA_CV = 0.15

    def __init__(self, creencia: Creencia | None = None):
        self.c = creencia or Creencia()
        self.modelo = Modelo(self.c)
        self.analizador = AnalizadorResidual()
        self.ventana = oee_mod.VentanaMovil(n=40)

        # --- estado sombra: lo último que llegó por telemetría ---
        self.ultima_telemetria: dict = {}
        self.t = 0.0

        # --- memoria para la predicción a un paso ---
        self._nivel_previo: float | None = None
        self._estacion_previa: str = ""
        self._total_previo: int = 0
        self._buenas_previo: int = 0

        # Nivel medido en el instante en que arrancó el llenado en curso.
        # Es la condición inicial que necesita `volumen_esperado`.
        self._nivel_inicio_llenado: float = self.c.nivel_min_operativo

        # --- trazas para el front ---
        self.traza_nivel: deque[dict] = deque(maxlen=240)
        self.traza_cv: deque[dict] = deque(maxlen=240)
        self.traza_volumen: deque[dict] = deque(maxlen=60)

        self.metricas = oee_mod.calcular(0, 0, 0, 0, 0, 0, self.c.tiempo_ciclo_ideal())

    # ======================================================================
    #  Entrada de telemetría
    # ======================================================================
    def observar(self, tel: dict, dt: float) -> None:
        """
        Procesa una muestra de telemetría. Es el único punto de entrada de
        información desde la planta.
        """
        self.ultima_telemetria = tel
        self.t = tel["t"]
        nivel = tel["nivel_tanque"]

        # ---------------------------------------------------------------
        # 1 · RESIDUAL DE BALANCE DE MASA (a un paso)
        # ---------------------------------------------------------------
        # Predecimos el nivel de AHORA a partir del nivel ANTERIOR, usando
        # el caudal que el modelo cree que está saliendo. Si la medida se
        # aparta de lo que permite el balance de masa, algo no cuadra:
        # o la bomba no da lo que debería, o el transmisor miente.
        if self._nivel_previo is not None:
            caudal_modelo = (self.modelo.caudal(self._nivel_previo)
                             if self._estacion_previa == "llenando" else 0.0)
            nivel_predicho = self.modelo.siguiente_nivel(
                self._nivel_previo, caudal_modelo, dt)
            self.analizador.observar_paso(nivel, nivel_predicho, dt, self.t)

        # ---------------------------------------------------------------
        # 2 · ¿TERMINÓ UNA BOTELLA?
        # ---------------------------------------------------------------
        # Ojo al orden: la botella que acaba de terminar empezó a llenarse
        # con el nivel guardado en `_nivel_inicio_llenado`, NO con el nivel
        # actual. Por eso se procesa el cierre ANTES de rearmar la marca
        # para la botella siguiente.
        if tel["botellas_totales"] > self._total_previo:
            self._cerrar_botella(tel)

        if tel["estacion"] == "llenando" and self._estacion_previa != "llenando":
            self._nivel_inicio_llenado = nivel

        # ---------------------------------------------------------------
        # 3 · MÉTRICAS
        # ---------------------------------------------------------------
        self.metricas = oee_mod.calcular(
            t_planificado=tel["t_planificado"],
            t_produciendo=tel["t_produciendo"],
            t_parada=tel["t_parada"],
            botellas_totales=tel["botellas_totales"],
            botellas_buenas=tel["botellas_buenas"],
            botellas_rechazadas=tel["botellas_rechazadas"],
            ciclo_ideal=self.c.tiempo_ciclo_ideal(),
        )

        # ---------------------------------------------------------------
        # 4 · TRAZAS
        # ---------------------------------------------------------------
        self._nivel_previo = nivel
        self._estacion_previa = tel["estacion"]
        self._total_previo = tel["botellas_totales"]
        self._buenas_previo = tel["botellas_buenas"]

    def _cerrar_botella(self, tel: dict) -> None:
        """Se ejecuta una vez por botella terminada: aquí el gemelo aprende."""
        volumen = tel["ultimo_volumen"]
        nivel0 = self._nivel_inicio_llenado

        # --- residual de volumen: realidad − predicción ---
        # La predicción usa el Cv de PLACA a propósito. El residual mide
        # cuánto se ha apartado la planta de su condición de diseño; si
        # usáramos el Cv ya estimado, el residual se anularía solo y el
        # gemelo dejaría de avisar. Es un error clásico: un modelo que se
        # adapta a todo nunca detecta nada.
        vol_nominal = self.modelo.volumen_esperado(
            nivel0, t_set=self.c.t_set, cv=self.c.cv_nominal)
        self.analizador.observar_botella(volumen, vol_nominal)

        # --- estimación del parámetro: ¿qué Cv explica lo que vi? ---
        cv_obs = self.modelo.cv_implicito(volumen, nivel0, t_set=self.c.t_set)
        if cv_obs is not None and 0.1 < cv_obs < 5.0:
            self.c.cv_estimado = (self.ALFA_CV * cv_obs
                                  + (1 - self.ALFA_CV) * self.c.cv_estimado)

        buena = tel["botellas_buenas"] > self._buenas_previo
        self.ventana.registrar(buena, volumen)

        self.analizador.registrar(self.t)
        self.traza_cv.append({"t": round(self.t, 1),
                              "cv_estimado": round(self.c.cv_estimado, 4),
                              "cv_nominal": round(self.c.cv_nominal, 4)})
        self.traza_volumen.append({"t": round(self.t, 1),
                                   "volumen": round(volumen, 4),
                                   "objetivo": self.c.volumen_objetivo,
                                   "buena": buena})
        self.traza_nivel.append({"t": round(self.t, 1),
                                 "nivel": round(tel["nivel_tanque"], 4)})

    # ======================================================================
    #  Salida
    # ======================================================================
    def diagnostico(self) -> list[dict]:
        hs = self.analizador.diagnosticar(
            desgaste_pct=self.c.desgaste_pct,
            disponibilidad=self.metricas.disponibilidad,
            nivel=self.ultima_telemetria.get("nivel_tanque", self.c.nivel_sp),
            nivel_sp=self.c.nivel_sp,
        )
        return [h.dict() for h in hs]

    def estado(self) -> dict:
        """Instantánea completa del gemelo, lista para enviar al front."""
        return {
            "t": round(self.t, 1),
            "telemetria": self.ultima_telemetria,
            "creencia": {
                "cv_nominal": round(self.c.cv_nominal, 4),
                "cv_estimado": round(self.c.cv_estimado, 4),
                "desgaste_pct": round(self.c.desgaste_pct, 2),
                "t_set": round(self.c.t_set, 3),
                "t_set_nominal": round(self.c.t_set_nominal, 3),
                "volumen_objetivo": self.c.volumen_objetivo,
                "tolerancia": self.c.tolerancia,
                "ciclo_ideal": round(self.c.tiempo_ciclo_ideal(), 3),
                "ciclo_actual": round(self.c.ciclo_actual(), 3),
            },
            "residual": {
                "r_volumen": round(self.analizador.r_volumen_ewma, 4),
                "r_balance": round(self.analizador.r_balance_ewma, 5),
                "salto_detectado": self.analizador.salto_detectado,
                "salto_t": self.analizador.salto_t,
                "salto_magnitud": round(self.analizador.salto_magnitud, 4),
                "alerta": self.analizador.alerta,
                "umbral_volumen": self.analizador.UMBRAL_VOLUMEN,
                "historia": list(self.analizador.historia),
            },
            "oee": self.metricas.dict(),
            "ventana": self.ventana.dict(),
            "diagnostico": self.diagnostico(),
            "trazas": {
                "cv": list(self.traza_cv),
                "volumen": list(self.traza_volumen),
                "nivel": list(self.traza_nivel),
            },
        }
