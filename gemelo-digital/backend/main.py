"""
API — pega la planta, el gemelo y el front.

Arranca tres cosas que corren a la vez:

    · LA PLANTA   · integra la física a 20 Hz y publica telemetría
    · EL GEMELO   · consume esa telemetría y mantiene su modelo
    · LA API      · sirve el estado al front por WebSocket

La planta y el gemelo se comunican SÓLO por el transporte. Se pueden separar
en dos procesos —o dos máquinas— sin tocar una línea de lógica, que es
precisamente el punto de la arquitectura borde/nube de la S09.

--------------------------------------------------------------------------
CÓMO CORRERLO
--------------------------------------------------------------------------
    python main.py                    # transporte en memoria (por defecto)
    python main.py --mqtt             # contra Mosquitto en localhost:1883
    python main.py --mqtt --host 10.0.0.5
    python main.py --velocidad 4      # 4× tiempo real, para demos cortas

La API queda en http://localhost:8000 y el front de React en :5173.
"""

from __future__ import annotations

import argparse
import asyncio
import contextlib
import json

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from planta.proceso import LineaLlenado, Nominal, Falla
from gemelo.modelo import Creencia
from gemelo.sombra import GemeloDigital
from gemelo import whatif, gobierno
from transporte.base import TOPICO_DATOS
from transporte.memoria import TransporteMemoria


# ==========================================================================
#  CONFIGURACIÓN
# ==========================================================================

DT = 0.05                 # s · paso de integración (20 Hz)
PERIODO_PUBLICACION = 4   # publicar 1 de cada 4 pasos → 5 Hz de telemetría
PERIODO_WS = 0.25         # s · refresco del front


class Config:
    velocidad: float = 1.0
    usar_mqtt: bool = False
    host_mqtt: str = "localhost"
    puerto_mqtt: int = 1883


CFG = Config()


# ==========================================================================
#  ESTADO GLOBAL DE LA APLICACIÓN
# ==========================================================================

class Sistema:
    """Contenedor de las tres piezas vivas. Una sola instancia."""

    def __init__(self) -> None:
        self.nominal = Nominal()
        self.linea = LineaLlenado(self.nominal)

        # El gemelo arranca creyendo los datos de PLACA. Todo lo que sepa
        # después lo tendrá que aprender de la telemetría.
        self.gemelo = GemeloDigital(self._creencia_inicial())

        self.bitacora = gobierno.Bitacora()
        self.transporte = None
        self.pausado = False
        self._tareas: list[asyncio.Task] = []

    # ----------------------------------------------------------------------
    def _creencia_inicial(self) -> Creencia:
        """
        El gemelo arranca creyendo los datos de PLACA.

        Todo lo que sepa después lo tendrá que aprender de la telemetría.
        Nótese que copia los parámetros NOMINALES, nunca el estado real del
        simulador: `cv_estimado` parte del valor de catálogo, no del valor
        verdadero de la válvula.
        """
        n = self.nominal
        return Creencia(
            cv_nominal=n.cv_valvula,
            cv_estimado=n.cv_valvula,
            area_tanque=n.area_tanque,
            nivel_sp=n.nivel_sp,
            k_control=n.k_control,
            caudal_bomba_max=n.caudal_bomba_max,
            volumen_objetivo=n.volumen_objetivo,
            tolerancia=n.tolerancia,
            t_set=n.t_set,
            t_set_nominal=n.t_set,
            t_tapado=n.t_tapado,
            t_indexado=n.t_indexado,
            nivel_min_operativo=n.nivel_min_operativo,
        )

    def reiniciar(self) -> None:
        """Turno nuevo: planta y gemelo vuelven a cero. La bitácora NO."""
        self.linea = LineaLlenado(self.nominal)
        self.gemelo = GemeloDigital(self._creencia_inicial())
        # La bitácora sobrevive al reinicio a propósito: el registro de
        # decisiones es evidencia de auditoría y no se borra porque haya
        # empezado un turno nuevo (S15).

    # ----------------------------------------------------------------------
    async def bucle_planta(self) -> None:
        """
        LA PLANTA. Integra la física y publica telemetría.

        La aceleración se consigue dando MÁS PASOS por tick, no durmiendo
        menos. Es un detalle de implementación que cuesta una tarde
        descubrir en clase si no se avisa: en Windows, la resolución del
        temporizador ronda los 15 ms, así que pedir `sleep(6 ms)` para ir a
        8× entrega en realidad unos 3×. El paso de integración (DT) se
        mantiene fijo, de modo que la física no cambia con la velocidad de
        reproducción — que es justo lo que uno quiere de un simulador.
        """
        contador = 0
        try:
            while True:
                if not self.pausado:
                    v = max(0.1, CFG.velocidad)
                    if v >= 1.0:
                        pasos, espera = int(round(v)), DT
                    else:
                        pasos, espera = 1, DT / v

                    for _ in range(pasos):
                        self.linea.paso(DT)
                        contador += 1
                        if contador % PERIODO_PUBLICACION == 0:
                            await self.transporte.publicar(
                                TOPICO_DATOS, self.linea.telemetria().dict())
                    await asyncio.sleep(espera)
                else:
                    await asyncio.sleep(DT)
        except asyncio.CancelledError:
            raise

    async def bucle_gemelo(self) -> None:
        """EL GEMELO. Consume telemetría y actualiza su modelo."""
        dt_muestra = DT * PERIODO_PUBLICACION
        try:
            while True:
                _topico, carga = await self.transporte.recibir()
                self.gemelo.observar(carga, dt_muestra)
                # MONITOREAR: cerrar el seguimiento de decisiones vencidas.
                self.bitacora.cerrar_seguimiento(
                    t_sim=self.gemelo.t,
                    oee_actual=self.gemelo.metricas.oee,
                    calidad_actual=self.gemelo.ventana.calidad,
                )
        except asyncio.CancelledError:
            raise

    # ----------------------------------------------------------------------
    def instantanea(self) -> dict:
        est = self.gemelo.estado()
        est["sistema"] = {
            "pausado": self.pausado,
            "velocidad": CFG.velocidad,
            "transporte": self.transporte.nombre if self.transporte else "?",
            "falla_inyectada": self.linea.falla.value,
            "decisiones": len(self.bitacora),
        }
        # Vista "ojo de Dios": el estado REAL de la planta, que el gemelo no
        # conoce. Está aquí para proyectarlo en clase al lado de la
        # estimación y ver cómo una converge hacia la otra. En una planta
        # real este bloque no existiría.
        est["verdad_oculta"] = self.linea.verdad_oculta()
        return est


SIS = Sistema()


# ==========================================================================
#  APLICACIÓN
# ==========================================================================

@contextlib.asynccontextmanager
async def ciclo_vida(app: FastAPI):
    if CFG.usar_mqtt:
        from transporte.mqtt import TransporteMQTT
        SIS.transporte = TransporteMQTT(CFG.host_mqtt, CFG.puerto_mqtt)
        print(f"  transporte : MQTT → {CFG.host_mqtt}:{CFG.puerto_mqtt}")
    else:
        SIS.transporte = TransporteMemoria()
        print("  transporte : en memoria (usá --mqtt para el broker real)")

    SIS._tareas = [
        asyncio.create_task(SIS.bucle_planta()),
        asyncio.create_task(SIS.bucle_gemelo()),
    ]
    print(f"  velocidad  : {CFG.velocidad}× tiempo real")
    print("  API        : http://localhost:8000")
    print("  front      : http://localhost:5173  (npm run dev en frontend/)")
    yield
    for t in SIS._tareas:
        t.cancel()
    await asyncio.gather(*SIS._tareas, return_exceptions=True)
    if SIS.transporte:
        await SIS.transporte.cerrar()


app = FastAPI(title="Gemelo digital · línea de llenado", lifespan=ciclo_vida)

# CORS abierto: el front de desarrollo corre en otro puerto.
# ⚠ En producción esto sería un hallazgo de seguridad (S14). Aquí es
# aceptable porque todo escucha en localhost y no hay datos reales.
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"],
)


# ==========================================================================
#  WEBSOCKET — el flujo hacia el front
# ==========================================================================

@app.websocket("/ws")
async def ws(sock: WebSocket):
    await sock.accept()
    try:
        while True:
            await sock.send_text(json.dumps(SIS.instantanea()))
            await asyncio.sleep(PERIODO_WS)
    except (WebSocketDisconnect, RuntimeError):
        return


# ==========================================================================
#  CONTROL DE LA SIMULACIÓN
# ==========================================================================

class CuerpoFalla(BaseModel):
    falla: str


@app.post("/api/falla")
def inyectar_falla(cuerpo: CuerpoFalla):
    """Inyecta o retira un modo de falla en la PLANTA (no en el gemelo)."""
    try:
        SIS.linea.inyectar(cuerpo.falla)
    except ValueError:
        return {"ok": False, "error": f"Falla desconocida: {cuerpo.falla}",
                "validas": [f.value for f in Falla]}
    return {"ok": True, "falla": SIS.linea.falla.value}


@app.get("/api/fallas")
def listar_fallas():
    return {"fallas": [
        {"clave": Falla.NINGUNA.value, "nombre": "Sin falla",
         "efecto": "Operación nominal.", "componente_oee": "—"},
        {"clave": Falla.DESGASTE_VALVULA.value, "nombre": "Desgaste de válvula",
         "efecto": "El Cv cae ~0.6 %/min. Las botellas salen cortas.",
         "componente_oee": "Calidad"},
        {"clave": Falla.BOMBA_DEGRADADA.value, "nombre": "Bomba degradada",
         "efecto": "Cae la reposición; el tanque se vacía y con él el caudal.",
         "componente_oee": "Calidad → Disponibilidad"},
        {"clave": Falla.ATASCO_TAPADORA.value, "nombre": "Atasco de tapadora",
         "efecto": "Micro-paradas frecuentes.",
         "componente_oee": "Disponibilidad"},
        {"clave": Falla.SENSOR_DESVIADO.value, "nombre": "Transmisor de nivel desviado",
         "efecto": "El sensor reporta +0.35 m. La física NO cambia: "
                   "un tablero no ve nada, el gemelo sí.",
         "componente_oee": "Ninguna (¡ése es el punto!)"},
    ]}


class CuerpoVelocidad(BaseModel):
    velocidad: float = Field(ge=0.25, le=20.0)


@app.post("/api/velocidad")
def cambiar_velocidad(cuerpo: CuerpoVelocidad):
    CFG.velocidad = cuerpo.velocidad
    return {"ok": True, "velocidad": CFG.velocidad}


@app.post("/api/pausa")
def alternar_pausa():
    SIS.pausado = not SIS.pausado
    return {"ok": True, "pausado": SIS.pausado}


@app.post("/api/reiniciar")
def reiniciar():
    SIS.reiniciar()
    return {"ok": True}


# ==========================================================================
#  EVALUAR — el what-if
# ==========================================================================

class CuerpoWhatIf(BaseModel):
    horizonte_min: float = Field(default=30.0, ge=1.0, le=480.0)


@app.post("/api/whatif")
def ejecutar_whatif(cuerpo: CuerpoWhatIf):
    """
    Corre el barrido de escenarios sobre el MODELO del gemelo.

    No toca la planta. Devuelve la propuesta, la curva completa que la
    sustenta y los supuestos declarados — para que quien decide pueda
    juzgar la recomendación en vez de acatarla.
    """
    nivel = SIS.gemelo.ultima_telemetria.get("nivel_tanque",
                                             SIS.nominal.nivel_inicial)
    disp = SIS.gemelo.metricas.disponibilidad or 1.0
    return whatif.recomendar(
        SIS.gemelo.c, nivel,
        horizonte_s=cuerpo.horizonte_min * 60.0,
        disponibilidad_supuesta=disp,
    )


# ==========================================================================
#  DIRIGIR — la autorización
# ==========================================================================

@app.get("/api/derechos")
def derechos():
    """La matriz de derechos de decisión (S01 · Weill & Ross)."""
    return {"matriz": gobierno.matriz_derechos(),
            "roles": [r.value for r in gobierno.Rol]}


class CuerpoAutorizacion(BaseModel):
    t_set: float = Field(ge=0.5, le=8.0)
    rol: str
    justificacion: str
    solicitado_por: str = "gemelo digital"


@app.post("/api/autorizar")
def autorizar(cuerpo: CuerpoAutorizacion):
    """
    El momento de gobierno del laboratorio.

    Aplicar un cambio a la línea exige: (a) que el rol tenga el derecho de
    decisión que la matriz asigna a esa magnitud de cambio, y (b) una
    justificación escrita. Sin las dos cosas, no se aplica.

    Si se autoriza, el cambio baja a la planta Y al gemelo, y queda abierta
    una ventana de seguimiento para medir después si sirvió.
    """
    try:
        rol = gobierno.Rol(cuerpo.rol)
    except ValueError:
        return {"ok": False, "mensaje": f"Rol desconocido: {cuerpo.rol}"}

    t_actual = SIS.gemelo.c.t_set
    tipo = gobierno.clasificar_ajuste(t_actual, cuerpo.t_set)

    nivel = SIS.gemelo.ultima_telemetria.get("nivel_tanque",
                                             SIS.nominal.nivel_inicial)
    evidencia = whatif.simular(
        SIS.gemelo.c, nivel, cuerpo.t_set,
        horizonte_s=1800.0,
        disponibilidad_supuesta=SIS.gemelo.metricas.disponibilidad or 1.0,
    ).dict()

    ok, mensaje, decision = SIS.bitacora.autorizar(
        tipo=tipo,
        propuesta=f"Cambiar la consigna de llenado de {t_actual:.2f} s "
                  f"a {cuerpo.t_set:.2f} s.",
        justificacion=cuerpo.justificacion,
        solicitado_por=cuerpo.solicitado_por,
        rol=rol,
        t_sim=SIS.gemelo.t,
        oee_antes=SIS.gemelo.metricas.oee,
        calidad_antes=SIS.gemelo.ventana.calidad,
        evidencia=evidencia,
    )

    if ok:
        # El cambio baja a la planta (es una consigna, no un parámetro
        # oculto) y también al gemelo, que debe saber con qué consigna
        # está operando para seguir prediciendo bien.
        SIS.linea.t_set = cuerpo.t_set
        SIS.gemelo.c.t_set = cuerpo.t_set

    return {"ok": ok, "mensaje": mensaje, "tipo": tipo,
            "derecho": gobierno.MATRIZ_DERECHOS[tipo].dict(),
            "decision": decision.dict() if decision else None}


@app.get("/api/bitacora")
def bitacora():
    """Registro de decisiones del turno. Exportable para el Entregable 1."""
    return {"decisiones": SIS.bitacora.lista()}


@app.get("/api/salud")
def salud():
    return {"ok": True, "t": SIS.gemelo.t,
            "transporte": SIS.transporte.nombre if SIS.transporte else None}


# ==========================================================================
if __name__ == "__main__":
    import uvicorn

    ap = argparse.ArgumentParser(
        description="Gemelo digital de una línea de llenado y tapado.")
    ap.add_argument("--mqtt", action="store_true",
                    help="usar un broker MQTT real en vez del transporte en memoria")
    ap.add_argument("--host", default="localhost", help="host del broker MQTT")
    ap.add_argument("--puerto", type=int, default=1883, help="puerto del broker MQTT")
    ap.add_argument("--velocidad", type=float, default=1.0,
                    help="factor de tiempo real (4 = cuatro veces más rápido)")
    ap.add_argument("--api-puerto", type=int, default=8000)
    args = ap.parse_args()

    CFG.usar_mqtt = args.mqtt
    CFG.host_mqtt = args.host
    CFG.puerto_mqtt = args.puerto
    CFG.velocidad = args.velocidad

    print("\n  GEMELO DIGITAL · línea de llenado y tapado")
    print("  Gobierno de TI y Sistemas Ciber-Físicos de Producción · USB Bello\n")

    # Comprobar el puerto ANTES de arrancar: uvicorn falla con un error de
    # socket poco legible, y en un aula con treinta portátiles el 8000 está
    # ocupado con más frecuencia de la que uno esperaría.
    import socket
    with socket.socket() as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            s.bind(("0.0.0.0", args.api_puerto))
        except OSError:
            print(f"  ⚠ El puerto {args.api_puerto} ya está ocupado.\n")
            print(f"    Levantá la API en otro puerto y avisale al front:\n")
            print(f"        python main.py --api-puerto 8010")
            print(f"        API_PUERTO=8010 npm run dev      (bash)")
            print(f"        $env:API_PUERTO=8010; npm run dev  (PowerShell)\n")
            raise SystemExit(1)

    uvicorn.run(app, host="0.0.0.0", port=args.api_puerto, log_level="warning")
