# -*- coding: utf-8 -*-
"""OEE — andamiaje. Completa los TODO hasta que `IMPL=andamiaje pytest` pase.

Recuerda: OEE = Disponibilidad × Rendimiento × Calidad, todo como fracción 0..1.
"""


def disponibilidad(tiempo_operativo, tiempo_planificado):
    # TODO: devuelve tiempo_operativo / tiempo_planificado (valida > 0).
    raise NotImplementedError("TODO: disponibilidad")


def rendimiento(unidades_totales, tiempo_operativo, ciclo_ideal):
    # TODO: (unidades_totales * ciclo_ideal) / tiempo_operativo.
    raise NotImplementedError("TODO: rendimiento")


def calidad(unidades_buenas, unidades_totales):
    # TODO: unidades_buenas / unidades_totales.
    raise NotImplementedError("TODO: calidad")


def oee(d, r, c):
    # TODO: producto de los tres factores.
    raise NotImplementedError("TODO: oee")


def oee_desde_datos(tiempo_planificado, paradas, unidades_totales,
                    unidades_buenas, ciclo_ideal):
    # TODO: operativo = planificado - paradas; calcula d, r, c y el oee;
    #       devuelve un dict con las claves disponibilidad/rendimiento/calidad/oee.
    raise NotImplementedError("TODO: oee_desde_datos")


def clasificar(valor_oee):
    # TODO: >=0.85 'clase mundial'; >=0.60 'aceptable'; >=0.40 'bajo'; si no 'inaceptable'.
    raise NotImplementedError("TODO: clasificar")
