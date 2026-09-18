# -*- coding: utf-8 -*-
"""Pruebas del Lab S10 — OPC UA (NodeId, seguridad y AddressSpace)."""
import pytest
import opcua_lab as ua


def test_parse_nodeid_numerico():
    r = ua.parse_nodeid("ns=2;i=1001")
    assert r == {"ns": 2, "tipo": "i", "valor": 1001}


def test_parse_nodeid_string():
    r = ua.parse_nodeid("ns=3;s=Temperatura")
    assert r == {"ns": 3, "tipo": "s", "valor": "Temperatura"}


def test_parse_nodeid_sin_ns():
    r = ua.parse_nodeid("i=85")
    assert r == {"ns": 0, "tipo": "i", "valor": 85}


def test_parse_nodeid_invalido():
    with pytest.raises(ValueError):
        ua.parse_nodeid("ns=2")


def test_construir_nodeid():
    assert ua.construir_nodeid(2, "i", 1001) == "ns=2;i=1001"
    assert ua.construir_nodeid(3, "s", "Temperatura") == "ns=3;s=Temperatura"


def test_construir_nodeid_invalido():
    with pytest.raises(ValueError):
        ua.construir_nodeid(2, "x", 5)


def test_roundtrip():
    s = "ns=4;s=Linea1.OEE"
    r = ua.parse_nodeid(s)
    assert ua.construir_nodeid(r["ns"], r["tipo"], r["valor"]) == s


def test_modo_seguridad():
    assert ua.modo_seguridad("None") == "None"
    assert ua.modo_seguridad(None) == "None"
    assert ua.modo_seguridad("Basic256Sha256") == "SignAndEncrypt"
    assert ua.modo_seguridad("Aes256_Sha256_RsaPss") == "SignAndEncrypt"


def test_modo_seguridad_desconocida():
    with pytest.raises(ValueError):
        ua.modo_seguridad("Basic128Rsa15_roto")


def test_addressspace_browse():
    a = ua.AddressSpace()
    a.add_node("ns=0;i=85", "Objects")
    a.add_node("ns=2;s=Planta", "Planta", padre="ns=0;i=85")
    a.add_node("ns=2;s=Linea1", "Linea1", padre="ns=2;s=Planta")
    a.add_node("ns=2;s=Linea2", "Linea2", padre="ns=2;s=Planta")
    assert a.browse("ns=0;i=85") == ["ns=2;s=Planta"]
    assert a.browse("ns=2;s=Planta") == ["ns=2;s=Linea1", "ns=2;s=Linea2"]
    assert a.browse("ns=2;s=Linea1") == []
    assert a.nombre("ns=2;s=Linea1") == "Linea1"


def test_addressspace_errores():
    a = ua.AddressSpace()
    a.add_node("ns=0;i=85", "Objects")
    with pytest.raises(ValueError):
        a.add_node("ns=0;i=85", "dup")
    with pytest.raises(KeyError):
        a.browse("ns=9;i=999")
