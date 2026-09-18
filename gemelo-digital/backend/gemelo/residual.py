"""
EL RESIDUAL — lo que separa un gemelo digital de un tablero de indicadores.

    residual = lo que midió la planta − lo que predijo el modelo

Un tablero pinta la primera mitad. Un gemelo calcula la resta. Si el
residual se mantiene en cero, el modelo describe bien a la planta. Cuando se
aparta de cero, algo cambió en el mundo real que el modelo no contempla, y
eso es una alerta *antes* de que el problema aparezca en la producción.

--------------------------------------------------------------------------
DIAGNÓSTICO POR FIRMA (FDI)
--------------------------------------------------------------------------
Un solo residual no basta para saber QUÉ falló: el desgaste de la válvula y
un transmisor de nivel desviado producen los dos botellas cortas. Se
distinguen porque afectan de forma distinta a DOS residuales a la vez:

    falla                 r_volumen        balance de masa
    ------------------    --------------   -----------------
    (ninguna)             ≈ 0              ≈ 0
    desgaste de válvula   negativo, lento  ≈ 0
    bomba degradada       negativo         negativo sostenido
    atasco de tapadora    ≈ 0              ≈ 0   (cae disponibilidad)
    sensor desviado       negativo         SALTO brusco, y luego ≈ 0

La tabla anterior es la "firma" de cada falla. Comparar el patrón observado
contra las firmas conocidas es diagnóstico por modelo, y es exactamente lo
que hace `diagnosticar()`.

--------------------------------------------------------------------------
UN LÍMITE QUE HAY QUE ENSEÑAR, NO ESCONDER
--------------------------------------------------------------------------
Fijate en la última fila: pasado el transitorio, el balance de masa vuelve
a cuadrar. La razón es que el gemelo alimenta su modelo con el MISMO
transmisor desviado, así que predicción y medida se equivocan juntas.

Consecuencia incómoda y verdadera:

    en régimen permanente, un transmisor desviado y una válvula
    desgastada son OBSERVACIONALMENTE EQUIVALENTES con esta
    instrumentación. No se pueden distinguir.

Se distinguen sólo si se atrapa el salto, y por eso el detector queda
ENCLAVADO (no se olvida del salto cuando pasa). Si el gemelo arranca con la
desviación ya presente, o si la desviación es una deriva lenta en vez de un
salto, el gemelo señalará "desgaste" y se equivocará.

Ésta es la clase de limitación que un gemelo honesto DECLARA en vez de
disimular. `diagnosticar()` devuelve las dos hipótesis con una nota de
ambigüedad y dice qué haría falta para resolverla — un contraste de
calibración del transmisor. Un gemelo que devuelve una sola causa con 97 %
de confianza cuando la física no permite decidir no está informando a quien
decide: lo está engañando (S02, principio de responsabilidad).
"""

from __future__ import annotations

from collections import deque
from dataclasses import dataclass, field


def _ewma(anterior: float, muestra: float, alfa: float) -> float:
    return alfa * muestra + (1.0 - alfa) * anterior


@dataclass
class Hipotesis:
    """Una explicación candidata de lo que le pasa a la planta."""
    causa: str
    confianza: float          # 0..1
    evidencia: str

    def dict(self) -> dict:
        return {"causa": self.causa, "confianza": round(self.confianza, 3),
                "evidencia": self.evidencia}


class AnalizadorResidual:
    """
    Mantiene los residuales del gemelo y emite hipótesis de falla.

    Dos residuales, dos escalas de tiempo:

      · `r_volumen`  — una muestra por botella (~4 s). Lento pero directo.
      · `balance`    — una muestra por paso (50 ms). Rápido; detecta saltos
                       físicamente imposibles en el nivel del tanque.
    """

    # Umbrales. Se exponen como atributos para que se puedan discutir en
    # clase: subirlos reduce falsas alarmas y retrasa la detección; bajarlos
    # hace lo contrario. Es un compromiso de diseño, no una constante.
    UMBRAL_VOLUMEN = 0.030        # L · EWMA del residual de volumen
    UMBRAL_BALANCE = 0.020        # m · violación de balance de masa por paso
    ALFA_VOLUMEN = 0.20
    ALFA_BALANCE = 0.10

    def __init__(self, historia: int = 180):
        # residual de volumen (por botella)
        self.r_volumen = 0.0          # instantáneo
        self.r_volumen_ewma = 0.0     # suavizado
        # residual de balance de masa (por paso)
        self.r_balance = 0.0
        self.r_balance_ewma = 0.0

        # --- detector de saltos, ENCLAVADO ---
        # Una vez que se observa un salto físicamente imposible, el hecho no
        # se olvida: queda registrado con su instante y su magnitud hasta
        # que alguien lo reconozca (`reconocer_salto()`). Así funcionan las
        # alarmas enclavadas en planta, y es lo que permite diagnosticar
        # una desviación de sensor mucho después de que ocurrió.
        self.salto_detectado: bool = False
        self.salto_t: float | None = None
        self.salto_magnitud: float = 0.0

        self.historia: deque[dict] = deque(maxlen=historia)
        self._muestras_volumen = 0
        self._pasos = 0

    # ----------------------------------------------------------------------
    #  Alimentación
    # ----------------------------------------------------------------------
    def observar_botella(self, volumen_medido: float, volumen_predicho: float) -> None:
        """Se llama una vez por botella terminada."""
        self.r_volumen = volumen_medido - volumen_predicho
        self._muestras_volumen += 1
        # Las primeras muestras arrancan el EWMA de golpe para no arrastrar
        # el cero inicial durante medio minuto.
        alfa = 1.0 if self._muestras_volumen == 1 else self.ALFA_VOLUMEN
        self.r_volumen_ewma = _ewma(self.r_volumen_ewma, self.r_volumen, alfa)

    def observar_paso(self, nivel_medido: float, nivel_predicho: float,
                      dt: float, t: float = 0.0) -> None:
        """
        Se llama en cada muestra de telemetría.

        `nivel_predicho` es la predicción a UN PASO hecha desde la medida
        anterior. Comparar a un paso (y no acumulando desde el arranque)
        evita que la predicción derive libremente, y hace que un salto del
        sensor destaque como un pico limpio.
        """
        self.r_balance = nivel_medido - nivel_predicho
        self.r_balance_ewma = _ewma(self.r_balance_ewma, self.r_balance, self.ALFA_BALANCE)
        self._pasos += 1

        # Las primeras muestras no cuentan: el gemelo aún no tiene una
        # predicción previa fiable y un falso enclavamiento al arrancar
        # arruinaría el diagnóstico de todo el turno.
        if self._pasos > 5 and abs(self.r_balance) > self.UMBRAL_BALANCE:
            if not self.salto_detectado or abs(self.r_balance) > abs(self.salto_magnitud):
                self.salto_magnitud = self.r_balance
                if not self.salto_detectado:
                    self.salto_t = t
            self.salto_detectado = True

    def reconocer_salto(self) -> None:
        """Rearma el enclavamiento, una vez atendida la alarma."""
        self.salto_detectado = False
        self.salto_t = None
        self.salto_magnitud = 0.0

    def registrar(self, t: float) -> None:
        """Guarda un punto en la historia (para las gráficas del front)."""
        self.historia.append({
            "t": round(t, 1),
            "r_volumen": round(self.r_volumen_ewma, 4),
            "r_balance": round(self.r_balance_ewma, 5),
            "umbral": self.UMBRAL_VOLUMEN,
        })

    # ----------------------------------------------------------------------
    #  Diagnóstico
    # ----------------------------------------------------------------------
    @property
    def alerta(self) -> bool:
        return (abs(self.r_volumen_ewma) > self.UMBRAL_VOLUMEN
                or self.salto_detectado)

    def diagnosticar(self, desgaste_pct: float, disponibilidad: float,
                     nivel: float, nivel_sp: float = 1.19) -> list[Hipotesis]:
        """
        Compara el patrón de residuales observado contra las firmas conocidas
        y devuelve las hipótesis ordenadas por confianza.

        No es un clasificador entrenado: son reglas explícitas derivadas de
        la física. Se pueden leer, discutir y refutar en clase, que es
        justamente lo que se busca en un curso de gobierno. Un modelo de caja
        negra daría un número parecido y ninguna conversación.
        """
        hs: list[Hipotesis] = []
        rv = self.r_volumen_ewma
        volumen_bajo = rv < -self.UMBRAL_VOLUMEN

        # --- Tanque vaciándose: bomba incapaz de sostener el nivel ------
        # Firma: el nivel se aleja de la consigna hacia abajo. El lazo de
        # control está saturado, así que ya no compensa nada.
        tanque_cayendo = nivel < nivel_sp - 0.25
        if tanque_cayendo:
            hs.append(Hipotesis(
                "Bomba de reposición degradada (lazo de nivel saturado)",
                min(0.90, 0.45 + (nivel_sp - nivel)),
                f"Nivel en {nivel:.2f} m frente a una consigna de {nivel_sp:.2f} m: "
                f"la bomba ya no alcanza a reponer lo que consume la llenadora.",
            ))

        # --- Sensor desviado (sólo si se atrapó el salto) ---------------
        if self.salto_detectado and volumen_bajo:
            hs.append(Hipotesis(
                "Transmisor de nivel desviado",
                0.80,
                f"Salto de {self.salto_magnitud:+.3f} m en t={self.salto_t:.0f} s, "
                f"incompatible con el balance de masa. Desde entonces el volumen "
                f"cae {abs(rv):.3f} L sin causa mecánica.",
            ))

        # --- Desgaste de válvula ----------------------------------------
        if volumen_bajo and not tanque_cayendo:
            # La confianza BAJA si hay un salto enclavado: con el salto en
            # la mesa, las dos hipótesis compiten y ninguna es concluyente.
            base = 0.40 if self.salto_detectado else 0.50
            tope = 0.72 if self.salto_detectado else 0.92
            nota = (" Ojo: hay un salto de nivel enclavado, así que esta causa "
                    "NO es distinguible de una desviación del transmisor."
                    if self.salto_detectado else
                    " Balance de masa consistente y sin saltos registrados.")
            hs.append(Hipotesis(
                "Desgaste del asiento de la válvula",
                min(tope, base + desgaste_pct / 40.0),
                f"Cv estimado {desgaste_pct:.1f} % por debajo de placa.{nota}",
            ))

        # --- Atasco de tapadora ------------------------------------------
        if disponibilidad < 0.88:
            hs.append(Hipotesis(
                "Micro-paradas en la tapadora",
                min(0.88, 0.35 + (0.88 - disponibilidad) * 3.0),
                f"Disponibilidad en {disponibilidad*100:.1f} % con residuales de "
                f"proceso dentro de umbral: la pérdida es de paradas, no de física.",
            ))

        if not hs:
            hs.append(Hipotesis(
                "Sin anomalía", 0.90,
                "Modelo y planta concuerdan dentro de los umbrales.",
            ))

        hs.sort(key=lambda h: h.confianza, reverse=True)

        # Declarar la ambigüedad de forma explícita, en vez de dejar que el
        # usuario crea que la hipótesis de arriba es la única.
        if (len(hs) >= 2 and hs[0].confianza - hs[1].confianza < 0.15
                and hs[0].causa != "Sin anomalía"):
            hs.append(Hipotesis(
                "⚠ Diagnóstico NO concluyente",
                0.0,
                "Dos causas explican igual de bien lo observado. Para decidir hace "
                "falta evidencia externa: contrastar el transmisor de nivel contra "
                "una medición independiente (regla o mirilla).",
            ))

        return hs[:4]
