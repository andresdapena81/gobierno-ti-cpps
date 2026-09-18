"""
TRANSPORTE — el cable entre la planta y el gemelo.

Dos implementaciones intercambiables detrás de la misma interfaz:

    memoria.py  · cola en proceso. Cero instalación. Para el demo de aula.
    mqtt.py     · Mosquitto real, con nombrado Sparkplug B. Para el lab.

Que se pueda cambiar una por otra con una bandera de línea de comandos NO
es un detalle de comodidad: es la demostración práctica del desacoplamiento
que se predica en la S09 y la S11. El gemelo no sabe —ni le importa— por
dónde le llegan los datos. Si el día del laboratorio el broker no levanta,
la clase sigue.

Ese mismo desacoplamiento es lo que en una planta real permite cambiar de
protocolo sin reescribir la capa de analítica, y es un argumento de gobierno
de peso a la hora de decidir una compra (S02, principio de adquisición:
evitar el lock-in).
"""

from __future__ import annotations

from typing import Protocol


class Transporte(Protocol):
    """Interfaz mínima que el resto del sistema conoce."""

    nombre: str

    async def publicar(self, topico: str, carga: dict) -> None:
        """Envía una muestra hacia el gemelo."""
        ...

    async def recibir(self) -> tuple[str, dict]:
        """Espera la siguiente muestra. Devuelve (tópico, carga)."""
        ...

    async def cerrar(self) -> None:
        ...


# --------------------------------------------------------------------------
#  Nombrado de tópicos — espacio de nombres unificado (UNS, S11)
# --------------------------------------------------------------------------
# Estructura Sparkplug B:
#
#     spBv1.0/{grupo}/{tipo_mensaje}/{nodo_borde}/{dispositivo}
#
# · grupo        → la planta
# · tipo_mensaje → NBIRTH/DBIRTH (nacimiento), NDATA/DDATA (datos)
# · nodo_borde   → la pasarela que está en el piso
# · dispositivo  → el equipo concreto
#
# El nombrado jerárquico es lo que permite que un consumidor nuevo encuentre
# los datos sin que nadie le pase un diccionario de tags — que es el problema
# que el UNS resuelve, y una de las razones por las que un espacio de nombres
# es un asunto de gobierno de datos (S13) y no de infraestructura.

GRUPO = "usb_bello"
NODO_BORDE = "linea1"
DISPOSITIVO = "llenadora01"

TOPICO_DATOS = f"spBv1.0/{GRUPO}/DDATA/{NODO_BORDE}/{DISPOSITIVO}"
TOPICO_NACIMIENTO = f"spBv1.0/{GRUPO}/DBIRTH/{NODO_BORDE}/{DISPOSITIVO}"
TOPICO_COMANDO = f"spBv1.0/{GRUPO}/DCMD/{NODO_BORDE}/{DISPOSITIVO}"
