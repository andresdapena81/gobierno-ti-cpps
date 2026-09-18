# -*- coding: utf-8 -*-
"""UNS / MQTT — andamiaje. Completa los TODO hasta que `IMPL=andamiaje pytest` pase.

Pistas:
- Un tópico UNS tiene 5 niveles separados por '/': empresa/sitio/area/linea/metrica.
- '+' comodín de UN nivel; '#' comodín multinivel, sólo válido al final.
- Sparkplug: un evento *BIRTH marca el nodo vivo; *DEATH lo marca muerto.
"""


def construir_topico(empresa, sitio, area, linea, metrica):
    # TODO: normaliza cada nivel (strip, minúsculas, espacios -> '_'),
    #       valida que ninguno quede vacío (ValueError) y únelos con '/'.
    raise NotImplementedError("TODO: construir_topico")


def validar_topico(t):
    # TODO: True si es str, sin espacios, todo en minúsculas, exactamente
    #       5 niveles y ninguno vacío. Si no, False.
    raise NotImplementedError("TODO: validar_topico")


def coincide(suscripcion, topico):
    # TODO: compara nivel a nivel. '+' casa cualquier nivel; '#' (sólo al final)
    #       casa el resto. Sin comodines, longitudes y segmentos deben ser iguales.
    raise NotImplementedError("TODO: coincide")


def estado_sparkplug(eventos):
    # TODO: recorre los eventos {tipo, nodo}; agrega a un set en *BIRTH,
    #       quítalo en *DEATH; devuelve el set final de nodos vivos.
    raise NotImplementedError("TODO: estado_sparkplug")
