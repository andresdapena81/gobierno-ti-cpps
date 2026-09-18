# -*- coding: utf-8 -*-
"""Pruebas del Lab S13 — OEE. Ejemplo trabajado: turno de 480 min, 60 de paradas,
6000 unidades ideales, 5000 producidas, 4800 buenas → OEE = 70.0 %."""
import math
import oee

CICLO = 0.07  # min/unidad → 420 min operativos ⇒ 6000 unidades ideales


def aprox(a, b, tol=1e-3):
    return math.isclose(a, b, abs_tol=tol)


def test_disponibilidad():
    assert aprox(oee.disponibilidad(420, 480), 0.875)


def test_rendimiento():
    assert aprox(oee.rendimiento(5000, 420, CICLO), 5000 / 6000)


def test_calidad():
    assert aprox(oee.calidad(4800, 5000), 0.96)


def test_oee_producto():
    assert aprox(oee.oee(0.875, 5000 / 6000, 0.96), 0.70, tol=2e-3)


def test_oee_desde_datos():
    r = oee.oee_desde_datos(480, 60, 5000, 4800, CICLO)
    assert aprox(r["disponibilidad"], 0.875)
    assert aprox(r["rendimiento"], 5000 / 6000)
    assert aprox(r["calidad"], 0.96)
    assert aprox(r["oee"], 0.70, tol=2e-3)


def test_clasificar():
    assert oee.clasificar(0.70) == "aceptable"
    assert oee.clasificar(0.90) == "clase mundial"
    assert oee.clasificar(0.30) == "inaceptable"


def test_validaciones():
    import pytest
    with pytest.raises(Exception):
        oee.disponibilidad(10, 0)
    with pytest.raises(Exception):
        oee.calidad(1, 0)
