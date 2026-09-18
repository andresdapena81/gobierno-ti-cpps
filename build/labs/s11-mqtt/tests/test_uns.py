# -*- coding: utf-8 -*-
"""Pruebas del Lab S11 — UNS / MQTT (namespace unificado y comodines)."""
import pytest
import uns


def test_construir_topico():
    t = uns.construir_topico("Lácteos La Pradera", "Planta Bello", "Envasado",
                             "Línea 1", "Temperatura")
    assert t == "lácteos_la_pradera/planta_bello/envasado/línea_1/temperatura"


def test_construir_topico_vacio():
    with pytest.raises(ValueError):
        uns.construir_topico("empresa", "", "area", "linea", "metrica")


def test_validar_topico_ok():
    assert uns.validar_topico("empresa/sitio/area/linea/metrica") is True


def test_validar_topico_mal():
    assert uns.validar_topico("empresa/sitio/area/linea") is False       # 4 niveles
    assert uns.validar_topico("Empresa/sitio/area/linea/metrica") is False  # mayúscula
    assert uns.validar_topico("empresa/ sitio/area/linea/metrica") is False  # espacio
    assert uns.validar_topico("empresa//area/linea/metrica") is False    # nivel vacío


def test_coincide_exacto():
    assert uns.coincide("emp/sit/area/lin/temp", "emp/sit/area/lin/temp") is True
    assert uns.coincide("emp/sit/area/lin/temp", "emp/sit/area/lin/hum") is False


def test_coincide_mas():
    # '+' casa un nivel cualquiera
    assert uns.coincide("emp/sit/+/lin/temp", "emp/sit/envasado/lin/temp") is True
    assert uns.coincide("emp/sit/+/lin/temp", "emp/sit/envasado/otra/temp") is False


def test_coincide_almohadilla():
    # '#' casa el resto de la jerarquía
    assert uns.coincide("emp/sit/#", "emp/sit/area/lin/temp") is True
    assert uns.coincide("emp/sit/#", "emp/otro/area/lin/temp") is False
    assert uns.coincide("#", "cualquier/cosa/aqui") is True


def test_sparkplug():
    eventos = [
        {"tipo": "NBIRTH", "nodo": "gw1"},
        {"tipo": "DBIRTH", "nodo": "sensor_a"},
        {"tipo": "DBIRTH", "nodo": "sensor_b"},
        {"tipo": "DDEATH", "nodo": "sensor_a"},
    ]
    assert uns.estado_sparkplug(eventos) == {"gw1", "sensor_b"}
