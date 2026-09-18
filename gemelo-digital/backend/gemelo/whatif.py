"""
WHAT-IF — simular el futuro sin tocar la planta.

La cuarta capacidad que distingue a un gemelo de un tablero. El tablero
responde "¿qué está pasando?". El gemelo responde también:

    "si subo la consigna de llenado a 2.6 s, ¿qué le pasa a mi OEE
     en la próxima hora?"

...y lo responde en milisegundos, sobre el modelo, sin arriesgar una sola
botella. Ésa es la utilidad económica del gemelo: convierte un experimento
caro e irreversible en uno barato y reversible.

--------------------------------------------------------------------------
EL INTERCAMBIO QUE HAY QUE VER
--------------------------------------------------------------------------
Alargar `t_set` corrige las botellas cortas (sube CALIDAD) pero alarga el
ciclo (baja DESEMPEÑO). No hay almuerzo gratis. El barrido de escenarios
encuentra el punto donde el producto de las tres componentes es máximo, y
—esto es lo importante— MUESTRA la curva completa, no sólo el óptimo.

Un gemelo que entrega únicamente el número óptimo le está pidiendo a la
dirección un acto de fe. Un gemelo que entrega la curva le está entregando
el criterio para decidir. La diferencia es gobierno (S02, principio de
responsabilidad: quien decide necesita la evidencia, no la conclusión).
"""

from __future__ import annotations

import math
from dataclasses import dataclass

from .modelo import Creencia, Modelo
from . import oee as oee_mod


@dataclass
class Escenario:
    """Resultado de simular el futuro bajo una hipótesis de ajuste."""
    t_set: float
    disponibilidad: float
    desempeno: float
    calidad: float
    oee: float
    botellas: int
    rechazos: int
    volumen_medio: float

    def dict(self) -> dict:
        return {
            "t_set": round(self.t_set, 3),
            "disponibilidad": round(self.disponibilidad, 4),
            "desempeno": round(self.desempeno, 4),
            "calidad": round(self.calidad, 4),
            "oee": round(self.oee, 4),
            "botellas": self.botellas,
            "rechazos": self.rechazos,
            "volumen_medio": round(self.volumen_medio, 4),
        }


def simular(creencia: Creencia, nivel_inicial: float, t_set: float,
            horizonte_s: float = 1800.0,
            disponibilidad_supuesta: float = 1.0) -> Escenario:
    """
    Corre el MODELO hacia adelante `horizonte_s` segundos con la consigna
    `t_set`, y devuelve el OEE proyectado.

    Puntos a subrayar en clase:

    · Se usa `creencia.cv_estimado`, NO el Cv de placa. El gemelo proyecta
      con lo que ha aprendido de la planta, no con lo que dice el catálogo.
      Si el gemelo no hubiera estimado el desgaste, este what-if daría una
      respuesta optimista y equivocada.

    · La disponibilidad se ARRASTRA del histórico observado en vez de
      simularse. Las paradas son estocásticas y ajenas a la consigna de
      llenado; inventarles un modelo aquí daría una falsa precisión. Es más
      honesto declarar el supuesto que esconderlo dentro de un número.

    · La simulación es determinista: mismas entradas, mismo resultado. Un
      what-if que cambia de respuesta cada vez que se ejecuta no sirve para
      sustentar una decisión ante un comité.
    """
    m = Modelo(creencia)

    ciclo = t_set + creencia.t_tapado + creencia.t_indexado
    ciclo_ideal = creencia.tiempo_ciclo_ideal()

    # Tiempo realmente disponible para producir en el horizonte.
    t_util = horizonte_s * disponibilidad_supuesta
    n_botellas = max(1, int(t_util / ciclo))

    nivel = nivel_inicial
    buenas = 0
    suma_vol = 0.0

    for _ in range(n_botellas):
        vol = m.volumen_esperado(nivel, t_set=t_set, cv=creencia.cv_estimado)
        suma_vol += vol
        if abs(vol - creencia.volumen_objetivo) <= creencia.tolerancia:
            buenas += 1

        # El tanque evoluciona entre botella y botella: sale `vol` durante
        # el llenado y el lazo de nivel repone durante todo el ciclo.
        repuesto = m.caudal_bomba(nivel) * ciclo
        neto = (repuesto - vol) * 1e-3 / creencia.area_tanque
        nivel = max(0.0, min(1.60, nivel + neto))

    calidad = buenas / n_botellas
    desempeno = min(1.0, ciclo_ideal / ciclo)
    disponibilidad = disponibilidad_supuesta

    return Escenario(
        t_set=t_set,
        disponibilidad=disponibilidad,
        desempeno=desempeno,
        calidad=calidad,
        oee=disponibilidad * desempeno * calidad,
        botellas=n_botellas,
        rechazos=n_botellas - buenas,
        volumen_medio=suma_vol / n_botellas,
    )


def barrer(creencia: Creencia, nivel_inicial: float,
           horizonte_s: float = 1800.0,
           disponibilidad_supuesta: float = 1.0,
           t_min: float = 1.80, t_max: float = 4.20,
           paso: float = 0.05) -> list[Escenario]:
    """Barrido de consignas. Devuelve la curva completa, no sólo el óptimo."""
    escenarios: list[Escenario] = []
    n = int(round((t_max - t_min) / paso)) + 1
    for i in range(n):
        t = round(t_min + i * paso, 3)
        escenarios.append(
            simular(creencia, nivel_inicial, t, horizonte_s, disponibilidad_supuesta)
        )
    return escenarios


def recomendar(creencia: Creencia, nivel_inicial: float,
               horizonte_s: float = 1800.0,
               disponibilidad_supuesta: float = 1.0) -> dict:
    """
    Produce la recomendación del gemelo: consigna óptima, ganancia esperada
    y la curva que la sustenta.

    ⚠ Devuelve una PROPUESTA, no una acción. Nada de lo que hay aquí toca
    la planta. Aplicarla exige pasar por `autorizar()` en `gobierno.py`, y
    ése es el punto del laboratorio donde ISO/IEC 38500 deja de ser teoría:

        Evaluar   → este what-if
        Dirigir   → la autorización, con responsable y registro
        Monitorear→ el residual y el OEE después del cambio
    """
    curva = barrer(creencia, nivel_inicial, horizonte_s, disponibilidad_supuesta)
    actual = simular(creencia, nivel_inicial, creencia.t_set,
                     horizonte_s, disponibilidad_supuesta)
    mejor = max(curva, key=lambda e: e.oee)

    ganancia = mejor.oee - actual.oee
    # Una recomendación por debajo de 1 punto de OEE no justifica intervenir
    # una línea en marcha. El umbral es una decisión de gobierno, no técnica.
    vale_la_pena = ganancia > 0.01 and abs(mejor.t_set - creencia.t_set) > 0.02

    # Compensación analítica: qué t_set devuelve el volumen al objetivo con
    # el Cv estimado actual. Sirve de contraste con el óptimo del barrido —
    # no tienen por qué coincidir, porque el óptimo también pesa el ciclo.
    m = Modelo(creencia)
    t_compensa = None
    lo, hi = 0.5, 8.0
    for _ in range(40):
        medio = (lo + hi) / 2.0
        if m.volumen_esperado(nivel_inicial, t_set=medio,
                              cv=creencia.cv_estimado) < creencia.volumen_objetivo:
            lo = medio
        else:
            hi = medio
    t_compensa = round((lo + hi) / 2.0, 3)

    return {
        "actual": actual.dict(),
        "recomendado": mejor.dict(),
        "ganancia_oee": round(ganancia, 4),
        "vale_la_pena": vale_la_pena,
        "t_set_compensacion": t_compensa,
        "horizonte_min": round(horizonte_s / 60.0, 1),
        "disponibilidad_supuesta": round(disponibilidad_supuesta, 4),
        "curva": [e.dict() for e in curva],
        "supuestos": [
            "La disponibilidad se mantiene en el valor observado del turno.",
            f"El Cv de la válvula permanece en el estimado ({creencia.cv_estimado:.3f}).",
            "No hay cambio de formato ni de producto en el horizonte.",
        ],
    }
