"""
Transporte MQTT — el camino "de verdad", para el laboratorio de la S11.

Publica contra un broker Mosquitto usando el NOMBRADO de Sparkplug B. Es
importante ser preciso sobre el alcance:

    ✔ se usa la jerarquía de tópicos de Sparkplug B
    ✔ se emite un DBIRTH al conectar, como manda la especificación
    ✔ se declara un LWT (last will) para que la muerte del nodo se note

    ✘ la carga útil va en JSON, NO en protobuf
    ✘ no se llevan los contadores de secuencia (bdSeq/seq)

Sparkplug B real exige protobuf y numeración de secuencia. Aquí se usa JSON
para que los estudiantes puedan leer los mensajes con `mosquitto_sub` y
entender qué está pasando, que es el objetivo pedagógico. La diferencia hay
que decirla en voz alta en clase: esto es *nombrado* Sparkplug, no
*conformidad* Sparkplug. Un proveedor que hiciera esta misma simplificación
y la vendiera como "compatible con Sparkplug B" estaría faltando a la
verdad, y detectarlo es exactamente la clase de escrutinio que el principio
de adquisición (S02) le pide a quien compra tecnología.

--------------------------------------------------------------------------
CÓMO LEVANTAR EL BROKER
--------------------------------------------------------------------------
    docker run -it --rm -p 1883:1883 eclipse-mosquitto:2 \
        mosquitto -c /mosquitto-no-auth.conf

Y para espiar el tráfico desde otra terminal:

    mosquitto_sub -h localhost -t 'spBv1.0/#' -v

⚠ SEGURIDAD (S14–S15): ese broker está SIN AUTENTICACIÓN y escuchando en
todas las interfaces. Es aceptable en una sesión de laboratorio en red
aislada y es inaceptable en cualquier otro sitio. Un broker MQTT abierto en
una red de planta es, literalmente, acceso de escritura a los datos de
proceso. Conviene hacer el ejercicio de buscar "1883" en Shodan durante la
S14 — el resultado suele bastar como argumento.
"""

from __future__ import annotations

import asyncio
import json

from .base import TOPICO_DATOS, TOPICO_NACIMIENTO


class TransporteMQTT:

    nombre = "mqtt"

    def __init__(self, host: str = "localhost", puerto: int = 1883,
                 capacidad: int = 64):
        try:
            import paho.mqtt.client as mqtt
        except ImportError as exc:  # pragma: no cover
            raise RuntimeError(
                "El modo MQTT necesita paho-mqtt. Instalalo con:\n"
                "    pip install paho-mqtt\n"
                "O corré sin la bandera --mqtt para usar el transporte en memoria."
            ) from exc

        self._host, self._puerto = host, puerto
        self._cola: asyncio.Queue[tuple[str, dict]] = asyncio.Queue(maxsize=capacidad)
        self._loop = asyncio.get_event_loop()
        self.conectado = False

        self._cli = mqtt.Client(
            mqtt.CallbackAPIVersion.VERSION2,
            client_id="gemelo-digital-usb",
        )
        # Last will: si el proceso muere sin despedirse, el broker avisa a
        # los suscriptores. Sin LWT, un nodo caído es indistinguible de un
        # nodo que simplemente no tiene novedades — y esa ambigüedad es la
        # que hace que las alarmas por silencio no funcionen.
        self._cli.will_set(TOPICO_NACIMIENTO,
                           json.dumps({"estado": "OFFLINE"}), qos=1, retain=True)
        self._cli.on_connect = self._on_connect
        self._cli.on_message = self._on_message

        self._cli.connect_async(host, puerto, keepalive=30)
        self._cli.loop_start()

    # ----------------------------------------------------------------------
    def _on_connect(self, cli, userdata, flags, rc, properties=None):
        self.conectado = True
        # DBIRTH retenido: cualquier consumidor que se conecte después sabe
        # qué es este dispositivo sin tener que esperar al siguiente dato.
        cli.publish(TOPICO_NACIMIENTO, json.dumps({
            "estado": "ONLINE",
            "dispositivo": "Línea de llenado y tapado 01",
            "metricas": ["nivel_tanque", "caudal_instantaneo", "estacion",
                         "botellas_totales", "botellas_buenas",
                         "botellas_rechazadas", "ultimo_volumen"],
        }), qos=1, retain=True)
        cli.subscribe(TOPICO_DATOS, qos=0)

    def _on_message(self, cli, userdata, msg):
        try:
            carga = json.loads(msg.payload.decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            return
        # El callback de paho corre en su propio hilo: hay que devolver el
        # control al bucle de asyncio de forma segura.
        self._loop.call_soon_threadsafe(self._encolar, msg.topic, carga)

    def _encolar(self, topico: str, carga: dict) -> None:
        try:
            self._cola.put_nowait((topico, carga))
        except asyncio.QueueFull:
            try:
                self._cola.get_nowait()
                self._cola.put_nowait((topico, carga))
            except (asyncio.QueueEmpty, asyncio.QueueFull):
                pass

    # ----------------------------------------------------------------------
    async def publicar(self, topico: str, carga: dict) -> None:
        # QoS 0: en telemetría de proceso a 20 Hz, reintentar una muestra
        # perdida es peor que descartarla — llegaría tarde y desordenada.
        self._cli.publish(topico, json.dumps(carga), qos=0)

    async def recibir(self) -> tuple[str, dict]:
        return await self._cola.get()

    async def cerrar(self) -> None:
        try:
            self._cli.publish(TOPICO_NACIMIENTO,
                              json.dumps({"estado": "OFFLINE"}), qos=1, retain=True)
            self._cli.loop_stop()
            self._cli.disconnect()
        except Exception:
            pass
