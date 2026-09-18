"""
GOBIERNO — dónde el laboratorio se encuentra con ISO/IEC 38500.

Un gemelo digital que puede ESCRIBIR sobre el proceso deja de ser un
ejercicio de ingeniería y pasa a ser un problema de gobierno. La pregunta ya
no es "¿el modelo acierta?", sino:

    ¿quién autoriza que la recomendación del gemelo se aplique
    a una línea en marcha, y quién responde si sale mal?

Este módulo implementa dos cosas que en la mayoría de los pilotos de
Industria 4.0 no existen, y que son exactamente lo que la norma exige:

  1. UNA MATRIZ DE DERECHOS DE DECISIÓN (S01, Weill & Ross) — no toda
     decisión la puede tomar cualquiera. La autoridad depende de la
     magnitud del cambio, no del cargo de quien esté frente a la pantalla.

  2. UNA BITÁCORA DE DECISIONES — cada cambio queda con quién lo pidió,
     quién lo autorizó, con qué evidencia y qué pasó después. Sin este
     registro no hay rendición de cuentas, y sin rendición de cuentas no
     hay gobierno (S02, principio 1).

--------------------------------------------------------------------------
EL CICLO EDM, COMPLETO Y VISIBLE
--------------------------------------------------------------------------
    EVALUAR    → `whatif.recomendar()` produce la propuesta y su evidencia
    DIRIGIR    → `autorizar()` la aprueba con un responsable identificado
    MONITOREAR → `cerrar_seguimiento()` registra el efecto real medido

La bitácora que sale de aquí es, literalmente, la evidencia que el Taller 1
de la S02 pide para el principio de responsabilidad. Se puede exportar y
pegar en el Entregable 1.
"""

from __future__ import annotations

from dataclasses import dataclass, field, asdict
from enum import Enum


class Rol(str, Enum):
    """Roles de planta con autoridad sobre el proceso."""
    OPERADOR = "operador"
    SUPERVISOR = "supervisor"
    INGENIERO_PROCESO = "ingeniero_proceso"
    GERENTE_PLANTA = "gerente_planta"


# Orden de autoridad. Un rol superior puede autorizar lo de los inferiores.
_JERARQUIA = [Rol.OPERADOR, Rol.SUPERVISOR, Rol.INGENIERO_PROCESO, Rol.GERENTE_PLANTA]


def _nivel(rol: Rol) -> int:
    return _JERARQUIA.index(rol)


# ==========================================================================
#  MATRIZ DE DERECHOS DE DECISIÓN
# ==========================================================================
# Ésta es la traducción a código de la matriz de Weill & Ross del Taller S01,
# y del principio de responsabilidad de la S02: "quien es responsable de una
# acción tiene la autoridad para realizarla".
#
# La autoridad se gradúa por MAGNITUD del cambio, no por conveniencia.
# Un ajuste fino lo hace el supervisor; tocar la especificación del producto
# —que es un asunto de conformidad— sube hasta gerencia.

@dataclass(frozen=True)
class Derecho:
    dominio: str
    descripcion: str
    rol_minimo: Rol
    principio_38500: str

    def dict(self) -> dict:
        d = asdict(self)
        d["rol_minimo"] = self.rol_minimo.value
        return d


MATRIZ_DERECHOS: dict[str, Derecho] = {
    "ajuste_menor": Derecho(
        dominio="Consigna de proceso · ajuste menor",
        descripcion="Cambio de t_set de hasta el 10 % respecto de la consigna vigente.",
        rol_minimo=Rol.SUPERVISOR,
        principio_38500="Desempeño",
    ),
    "ajuste_mayor": Derecho(
        dominio="Consigna de proceso · ajuste mayor",
        descripcion="Cambio de t_set superior al 10 %. Altera el ciclo y el plan de producción.",
        rol_minimo=Rol.INGENIERO_PROCESO,
        principio_38500="Desempeño · Adquisición",
    ),
    "especificacion": Derecho(
        dominio="Especificación de producto",
        descripcion="Cambio de volumen objetivo o de tolerancia. Afecta lo que se le promete al cliente.",
        rol_minimo=Rol.GERENTE_PLANTA,
        principio_38500="Conformidad",
    ),
    "mantenimiento": Derecho(
        dominio="Intervención de mantenimiento",
        descripcion="Parar la línea para reparar. Compromete el plan del turno.",
        rol_minimo=Rol.INGENIERO_PROCESO,
        principio_38500="Responsabilidad · Desempeño",
    ),
}


def clasificar_ajuste(t_set_actual: float, t_set_propuesto: float) -> str:
    """Decide qué derecho aplica según la magnitud del cambio propuesto."""
    if t_set_actual <= 0:
        return "ajuste_mayor"
    delta = abs(t_set_propuesto - t_set_actual) / t_set_actual
    return "ajuste_menor" if delta <= 0.10 else "ajuste_mayor"


# ==========================================================================
#  BITÁCORA DE DECISIONES
# ==========================================================================

@dataclass
class Decision:
    id: int
    t_sim: float                  # s de simulación en que se tomó
    tipo: str                     # clave de MATRIZ_DERECHOS
    dominio: str
    principio_38500: str

    propuesta: str                # qué se pidió, en lenguaje llano
    justificacion: str            # por qué · lo escribe quien autoriza
    solicitado_por: str           # "el gemelo digital" o un humano
    autorizado_por: str           # rol que aprobó
    rol_minimo: str               # rol que la matriz exigía

    # --- MONITOREAR: el efecto real, medido después ---
    oee_antes: float
    calidad_antes: float
    oee_despues: float | None = None
    calidad_despues: float | None = None
    t_cierre: float | None = None
    veredicto: str | None = None

    evidencia: dict = field(default_factory=dict)

    def dict(self) -> dict:
        return asdict(self)


class Bitacora:
    """
    Registro append-only de las decisiones de gobierno del turno.

    Append-only a propósito: una bitácora que se puede editar no sirve como
    evidencia. Es el mismo argumento que sustenta los registros de auditoría
    en la S15 — la integridad del registro es parte del control.
    """

    # Cuánto tiempo de simulación se espera antes de juzgar el efecto de una
    # decisión. Demasiado corto y se juzga con ruido; demasiado largo y la
    # realimentación llega tarde para servir de algo.
    VENTANA_SEGUIMIENTO = 150.0   # s

    def __init__(self) -> None:
        self._decisiones: list[Decision] = []
        self._siguiente_id = 1

    # ----------------------------------------------------------------------
    #  DIRIGIR
    # ----------------------------------------------------------------------
    def autorizar(self, *, tipo: str, propuesta: str, justificacion: str,
                  solicitado_por: str, rol: Rol, t_sim: float,
                  oee_antes: float, calidad_antes: float,
                  evidencia: dict | None = None) -> tuple[bool, str, Decision | None]:
        """
        Intenta registrar una autorización.

        Devuelve (autorizada, mensaje, decisión). Si el rol no alcanza el
        mínimo que exige la matriz, la rechaza y NO la registra como
        aprobada — el intento fallido es en sí mismo información de
        gobierno, y por eso el mensaje explica qué rol habría hecho falta.
        """
        derecho = MATRIZ_DERECHOS.get(tipo)
        if derecho is None:
            return False, f"Tipo de decisión desconocido: {tipo}", None

        if _nivel(rol) < _nivel(derecho.rol_minimo):
            return (
                False,
                f"RECHAZADA. La matriz de derechos de decisión exige el rol "
                f"'{derecho.rol_minimo.value}' para «{derecho.dominio}»; "
                f"el solicitante es '{rol.value}'.",
                None,
            )

        if not justificacion.strip():
            return False, "RECHAZADA. Toda autorización exige justificación escrita.", None

        d = Decision(
            id=self._siguiente_id,
            t_sim=round(t_sim, 1),
            tipo=tipo,
            dominio=derecho.dominio,
            principio_38500=derecho.principio_38500,
            propuesta=propuesta,
            justificacion=justificacion.strip(),
            solicitado_por=solicitado_por,
            autorizado_por=rol.value,
            rol_minimo=derecho.rol_minimo.value,
            oee_antes=round(oee_antes, 4),
            calidad_antes=round(calidad_antes, 4),
            evidencia=evidencia or {},
        )
        self._decisiones.append(d)
        self._siguiente_id += 1
        return True, f"Autorizada por {rol.value}. Registro #{d.id}.", d

    # ----------------------------------------------------------------------
    #  MONITOREAR
    # ----------------------------------------------------------------------
    def cerrar_seguimiento(self, t_sim: float, oee_actual: float,
                           calidad_actual: float) -> None:
        """
        Cierra las decisiones cuya ventana de seguimiento ya venció y emite
        un veredicto comparando el antes y el después.

        Sin este paso el ciclo EDM queda cojo: se evalúa y se dirige, pero
        nunca se comprueba si la decisión sirvió. Es el fallo más común de
        los comités de tecnología, y la S02 lo señala explícitamente
        ("gobierno decorativo": comités que no miden ni deciden).
        """
        for d in self._decisiones:
            if d.veredicto is not None:
                continue
            if t_sim - d.t_sim < self.VENTANA_SEGUIMIENTO:
                continue

            d.oee_despues = round(oee_actual, 4)
            d.calidad_despues = round(calidad_actual, 4)
            d.t_cierre = round(t_sim, 1)

            delta = calidad_actual - d.calidad_antes
            if delta > 0.03:
                d.veredicto = "EFECTIVA"
            elif delta < -0.03:
                d.veredicto = "CONTRAPRODUCENTE"
            else:
                d.veredicto = "SIN EFECTO MEDIBLE"

    # ----------------------------------------------------------------------
    def lista(self) -> list[dict]:
        return [d.dict() for d in reversed(self._decisiones)]

    def __len__(self) -> int:
        return len(self._decisiones)


def matriz_derechos() -> list[dict]:
    """La matriz completa, para pintarla en el front."""
    return [{"clave": k, **v.dict()} for k, v in MATRIZ_DERECHOS.items()]
