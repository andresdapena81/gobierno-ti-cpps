"""
OEE — Overall Equipment Effectiveness.

    OEE = Disponibilidad × Desempeño × Calidad

Conecta este laboratorio con la S13 (Gobierno de datos y OEE) y con el
Lab 8. La gracia de calcularlo aquí, y no sobre un CSV prestado, es que cada
punto perdido se puede RASTREAR hasta una variable física del simulador:

    Disponibilidad ↓  ← atascos de tapadora, paradas por tanque vacío
    Desempeño      ↓  ← ciclo real por encima del ciclo ideal
    Calidad        ↓  ← botellas cortas por caída de caudal

Es la diferencia entre "el OEE bajó" y "el OEE bajó 6 puntos porque el Cv de
la válvula perdió 12 % y las botellas se salieron de tolerancia". Lo segundo
es gobernable; lo primero, no.

--------------------------------------------------------------------------
ADVERTENCIA DIDÁCTICA
--------------------------------------------------------------------------
Las tres componentes se calculan sobre el TURNO ACUMULADO. Un OEE acumulado
reacciona lento: si la calidad se desploma en el minuto 20, el acumulado
tarda en reflejarlo porque arrastra los primeros 20 minutos buenos.

Por eso se publican también las métricas de VENTANA MÓVIL (últimas N
botellas). En clase conviene mostrar las dos juntas: es un buen ejemplo de
cómo la elección del período de agregación cambia lo que un indicador
"dice", que es un problema de gobierno de datos, no de matemáticas.
"""

from __future__ import annotations

from collections import deque
from dataclasses import dataclass


@dataclass
class MetricasOEE:
    disponibilidad: float
    desempeno: float
    calidad: float
    oee: float

    # desglose, para poder explicar el número
    t_planificado: float
    t_produciendo: float
    t_parada: float
    botellas_totales: int
    botellas_buenas: int
    botellas_rechazadas: int
    ciclo_ideal: float
    ciclo_real: float

    def dict(self) -> dict:
        return {
            "disponibilidad": round(self.disponibilidad, 4),
            "desempeno": round(self.desempeno, 4),
            "calidad": round(self.calidad, 4),
            "oee": round(self.oee, 4),
            "t_planificado": round(self.t_planificado, 1),
            "t_produciendo": round(self.t_produciendo, 1),
            "t_parada": round(self.t_parada, 1),
            "botellas_totales": self.botellas_totales,
            "botellas_buenas": self.botellas_buenas,
            "botellas_rechazadas": self.botellas_rechazadas,
            "ciclo_ideal": round(self.ciclo_ideal, 3),
            "ciclo_real": round(self.ciclo_real, 3),
        }


def calcular(t_planificado: float, t_produciendo: float, t_parada: float,
             botellas_totales: int, botellas_buenas: int,
             botellas_rechazadas: int, ciclo_ideal: float) -> MetricasOEE:
    """
    Cálculo estándar de las tres componentes.

    Nótese que DESEMPEÑO se acota a 1.0. Un desempeño mayor que uno significa
    que la línea produjo más rápido que el ciclo "ideal", es decir, que el
    ciclo ideal está mal fijado. En una planta real eso es un hallazgo de
    gobierno de datos —el maestro de datos está mal—, no un mérito.
    """
    disponibilidad = (t_produciendo / t_planificado) if t_planificado > 0 else 0.0

    if t_produciendo > 0 and botellas_totales > 0:
        desempeno = min(1.0, (botellas_totales * ciclo_ideal) / t_produciendo)
        ciclo_real = t_produciendo / botellas_totales
    else:
        desempeno = 0.0
        ciclo_real = 0.0

    calidad = (botellas_buenas / botellas_totales) if botellas_totales > 0 else 0.0

    return MetricasOEE(
        disponibilidad=disponibilidad,
        desempeno=desempeno,
        calidad=calidad,
        oee=disponibilidad * desempeno * calidad,
        t_planificado=t_planificado,
        t_produciendo=t_produciendo,
        t_parada=t_parada,
        botellas_totales=botellas_totales,
        botellas_buenas=botellas_buenas,
        botellas_rechazadas=botellas_rechazadas,
        ciclo_ideal=ciclo_ideal,
        ciclo_real=ciclo_real,
    )


class VentanaMovil:
    """
    Calidad y ritmo sobre las últimas N botellas.

    Reacciona en segundos donde el acumulado del turno tarda minutos. Es la
    métrica que un operador necesita para actuar; el acumulado es la que la
    dirección necesita para decidir. Las dos son legítimas y miden lo mismo
    de forma distinta — buen material de discusión para S13.
    """

    def __init__(self, n: int = 40):
        self.n = n
        self.buenas: deque[bool] = deque(maxlen=n)
        self.volumenes: deque[float] = deque(maxlen=n)

    def registrar(self, buena: bool, volumen: float) -> None:
        self.buenas.append(buena)
        self.volumenes.append(volumen)

    @property
    def calidad(self) -> float:
        if not self.buenas:
            return 1.0
        return sum(self.buenas) / len(self.buenas)

    @property
    def volumen_medio(self) -> float:
        if not self.volumenes:
            return 0.0
        return sum(self.volumenes) / len(self.volumenes)

    def dict(self) -> dict:
        return {
            "n": len(self.buenas),
            "calidad": round(self.calidad, 4),
            "volumen_medio": round(self.volumen_medio, 4),
        }
