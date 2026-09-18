"""
Transporte en memoria — una cola asyncio dentro del mismo proceso.

Es el modo por defecto: `pip install` y `npm install`, y la clase corre. Sin
Docker, sin broker, sin puertos abiertos, sin que treinta portátiles con
antivirus distintos decidan que Mosquitto es sospechoso.

La cola tiene tamaño acotado y descarta lo más viejo cuando se llena. Es
deliberado: en telemetría de proceso, una muestra de hace treinta segundos
no vale nada. Prefiere perder datos viejos antes que retrasar los nuevos —
la misma decisión que toma un broker MQTT con QoS 0, y vale la pena
señalarlo en clase cuando se compare con la cola de una base de datos, donde
la decisión correcta es la contraria.
"""

from __future__ import annotations

import asyncio


class TransporteMemoria:

    nombre = "memoria"

    def __init__(self, capacidad: int = 64):
        self._cola: asyncio.Queue[tuple[str, dict]] = asyncio.Queue(maxsize=capacidad)

    async def publicar(self, topico: str, carga: dict) -> None:
        try:
            self._cola.put_nowait((topico, carga))
        except asyncio.QueueFull:
            # Descartar la muestra más antigua y quedarse con la nueva.
            try:
                self._cola.get_nowait()
            except asyncio.QueueEmpty:
                pass
            try:
                self._cola.put_nowait((topico, carga))
            except asyncio.QueueFull:
                pass

    async def recibir(self) -> tuple[str, dict]:
        return await self._cola.get()

    async def cerrar(self) -> None:
        return None
