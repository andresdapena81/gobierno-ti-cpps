"""
EL MODELO — la mitad "digital" del gemelo.

Réplica de la física de la línea construida con los parámetros de PLACA, no
con los reales. El modelo no tiene acceso al interior del simulador: sólo
sabe lo que dicen la hoja de datos del equipo y la telemetría.

Se usa para dos cosas distintas, y conviene no confundirlas:

  1. PREDECIR el próximo instante (paso a paso) para poder comparar con lo
     que efectivamente ocurrió → eso produce el RESIDUAL (`residual.py`).

  2. SIMULAR el futuro más rápido que el tiempo real, con parámetros
     hipotéticos → eso produce el WHAT-IF (`whatif.py`).

Es el mismo modelo en ambos casos. Lo que cambia es el horizonte.
"""

from __future__ import annotations

import math
from dataclasses import dataclass


@dataclass
class Creencia:
    """
    Lo que el gemelo *cree* sobre la planta en este momento.

    A diferencia de `Nominal` (que son los datos de placa, fijos), la
    creencia se actualiza con la evidencia. Es la memoria del gemelo.

    `cv_estimado` es la pieza clave: el gemelo no puede leer el desgaste de
    la válvula, tiene que inferirlo del volumen que salen depositando las
    botellas. Cuando `cv_estimado` se aparta de `cv_nominal`, el gemelo ha
    descubierto algo que ningún sensor le dijo directamente.
    """
    cv_nominal: float = 0.829
    cv_estimado: float = 0.829
    area_tanque: float = 0.08
    # lazo de nivel — el gemelo conoce la ley de control, igual que la
    # conoce cualquiera que tenga acceso a la configuración del PLC
    nivel_sp: float = 1.19
    k_control: float = 6.0
    caudal_bomba_max: float = 1.10
    volumen_objetivo: float = 2.00
    tolerancia: float = 0.05
    t_set: float = 2.30           # consigna ACTUAL (puede haber cambiado)
    t_set_nominal: float = 2.30   # consigna de placa · fija el ciclo ideal
    t_tapado: float = 1.10
    t_indexado: float = 0.45
    nivel_min_operativo: float = 0.15

    @property
    def desgaste_pct(self) -> float:
        """Cuánto se ha degradado la válvula respecto de placa, en %."""
        if self.cv_nominal <= 0:
            return 0.0
        return max(0.0, (1.0 - self.cv_estimado / self.cv_nominal) * 100.0)

    def tiempo_ciclo_ideal(self) -> float:
        """
        Ciclo ideal, con la consigna de PLACA. Fijo durante el turno.

        Si se usara `t_set` actual, alargar la consigna subiría el ciclo
        ideal a la par que el real y el desempeño no se movería: el
        indicador se estaría auto-justificando. Es un error frecuente en
        implantaciones de OEE y vale la pena señalarlo en clase.
        """
        return self.t_set_nominal + self.t_tapado + self.t_indexado

    def ciclo_actual(self) -> float:
        """Ciclo que cabe esperar con la consigna vigente."""
        return self.t_set + self.t_tapado + self.t_indexado


class Modelo:
    """Física nominal de la línea. Sin estado propio: funciones puras."""

    def __init__(self, creencia: Creencia):
        self.c = creencia

    # ----------------------------------------------------------------------
    #  Predicción de un paso — la base del residual
    # ----------------------------------------------------------------------
    def caudal(self, nivel: float, cv: float | None = None) -> float:
        """Ley de descarga Q = Cv·√L, en L/s."""
        cv = self.c.cv_estimado if cv is None else cv
        return cv * math.sqrt(max(nivel, 0.0))

    def caudal_bomba(self, nivel_medido: float) -> float:
        """El lazo P de nivel, tal como el gemelo cree que está configurado."""
        return max(0.0, min(self.c.caudal_bomba_max,
                            self.c.k_control * (self.c.nivel_sp - nivel_medido)))

    def siguiente_nivel(self, nivel: float, caudal_salida: float, dt: float) -> float:
        """
        Balance de masa del tanque, un paso hacia adelante.

            dL/dt = (Q_bomba(L) − Q_salida) / A

        Esta es la ecuación que un transmisor desviado NO puede satisfacer
        en el instante del salto: nada mueve 0.35 m de columna en 50 ms.
        Ahí es donde el gemelo lo pilla, y por eso el detector de saltos
        queda ENCLAVADO — pasado el transitorio, la desviación se vuelve
        indistinguible del desgaste (ver `residual.py`).
        """
        neto = self.caudal_bomba(nivel) - caudal_salida
        return max(0.0, nivel + (neto * 1e-3) / self.c.area_tanque * dt)

    # ----------------------------------------------------------------------
    #  Predicción del volumen de una botella
    # ----------------------------------------------------------------------
    def volumen_esperado(self, nivel: float, t_set: float | None = None,
                         cv: float | None = None) -> float:
        """
        Volumen que debería depositar la llenadora, en litros.

        Integra Q = Cv·√L durante `t_set`, teniendo en cuenta que el nivel
        BAJA mientras se llena (por eso no basta con Q·t):

            dL/dt = (Q_bomba − Cv·√L)/A

        Se integra numéricamente con pasos de 10 ms. Es barato y evita el
        error sistemático de suponer nivel constante.
        """
        t_set = self.c.t_set if t_set is None else t_set
        cv = self.c.cv_estimado if cv is None else cv

        dt = 0.01
        n = max(1, int(t_set / dt))
        L = nivel
        vol = 0.0
        for _ in range(n):
            q = cv * math.sqrt(max(L, 0.0))
            vol += q * dt
            L = max(0.0, L + ((self.caudal_bomba(L) - q) * 1e-3) / self.c.area_tanque * dt)
        return vol

    # ----------------------------------------------------------------------
    #  Estimación inversa — de la evidencia al parámetro
    # ----------------------------------------------------------------------
    def cv_implicito(self, volumen_medido: float, nivel: float,
                     t_set: float | None = None) -> float | None:
        """
        Dado el volumen que REALMENTE salió, ¿qué Cv lo explica?

        Es el problema inverso del anterior. Como `volumen_esperado` es
        monótona creciente en Cv, basta una bisección de una docena de
        iteraciones para invertirla con precisión de sobra.

        Devuelve None si la medida no es utilizable (botella incompleta por
        una parada, por ejemplo).
        """
        if volumen_medido <= 0.01 or nivel <= 0.01:
            return None

        lo, hi = 0.05, 5.0
        for _ in range(40):
            medio = (lo + hi) / 2.0
            if self.volumen_esperado(nivel, t_set, cv=medio) < volumen_medido:
                lo = medio
            else:
                hi = medio
        return (lo + hi) / 2.0
