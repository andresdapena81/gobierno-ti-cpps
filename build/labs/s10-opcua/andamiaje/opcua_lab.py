# -*- coding: utf-8 -*-
"""OPC UA (IEC 62541) — andamiaje. Completa los TODO hasta que `IMPL=andamiaje pytest` pase.

Pistas:
- NodeId textual: 'ns=<n>;<t>=<valor>'. t: i=numérico, s=string, g=guid, b=opaque.
- Modo de seguridad: política 'None' → 'None'; políticas reales → 'SignAndEncrypt'.
- AddressSpace: guarda nombre por nodeid y una lista de hijos por nodeid.
"""


def parse_nodeid(s):
    # TODO: separa por ';'; lee 'ns=' (0 por defecto) y el identificador i/s/g/b.
    #       Devuelve {'ns', 'tipo', 'valor'} (valor int si tipo == 'i').
    raise NotImplementedError("TODO: parse_nodeid")


def construir_nodeid(ns, tipo, valor):
    # TODO: valida tipo ∈ {i,s,g,b} y devuelve 'ns=<n>;<t>=<valor>'.
    raise NotImplementedError("TODO: construir_nodeid")


def modo_seguridad(politica):
    # TODO: 'None'/None → 'None'; Basic256Sha256 / Aes128_Sha256_RsaOaep /
    #       Aes256_Sha256_RsaPss → 'SignAndEncrypt'; otra → ValueError.
    raise NotImplementedError("TODO: modo_seguridad")


class AddressSpace:
    """AddressSpace mínimo: nodos con referencias jerárquicas."""

    def __init__(self):
        # TODO: inicializa las estructuras (nombre por nodeid, hijos por nodeid).
        raise NotImplementedError("TODO: AddressSpace.__init__")

    def add_node(self, nodeid, nombre, padre=None):
        # TODO: registra el nodo; si hay padre, agrega este nodeid a sus hijos.
        raise NotImplementedError("TODO: AddressSpace.add_node")

    def browse(self, nodeid):
        # TODO: devuelve la lista de hijos directos del nodo (KeyError si no existe).
        raise NotImplementedError("TODO: AddressSpace.browse")

    def nombre(self, nodeid):
        # TODO: devuelve el nombre registrado del nodo.
        raise NotImplementedError("TODO: AddressSpace.nombre")
