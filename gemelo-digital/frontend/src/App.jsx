import { useEffect, useState, useCallback } from "react";
import { api, conectar } from "./api.js";
import { Mimico } from "./componentes/Mimico.jsx";
import { PanelOEE, PanelGemelo, PanelDiagnostico, OjoDeDios } from "./componentes/Paneles.jsx";
import { PanelWhatIf, Bitacora, MatrizDerechos } from "./componentes/Gobierno.jsx";
import { Encabezado, PanelFallas } from "./componentes/Controles.jsx";

export default function App() {
  const [estado, setEstado] = useState(null);
  const [conectado, setConectado] = useState(false);
  const [fallas, setFallas] = useState([]);
  const [derechos, setDerechos] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [verOjo, setVerOjo] = useState(false);

  // El estado en vivo llega por WebSocket; los catálogos, una sola vez.
  useEffect(() => {
    const cerrar = conectar(setEstado, setConectado);
    api.listarFallas().then((r) => setFallas(r.fallas)).catch(() => {});
    api.derechos().then((r) => setDerechos(r.matriz)).catch(() => {});
    return cerrar;
  }, []);

  const refrescarBitacora = useCallback(() => {
    api.bitacora().then((r) => setDecisiones(r.decisiones)).catch(() => {});
  }, []);

  // La bitácora se relee con calma: cambia poco, y sus veredictos tardan
  // más de dos minutos de simulación en cerrarse.
  useEffect(() => {
    refrescarBitacora();
    const id = setInterval(refrescarBitacora, 3000);
    return () => clearInterval(id);
  }, [refrescarBitacora]);

  if (!estado) {
    return (
      <div className="app">
        <div className="vacio" style={{ paddingTop: 80 }}>
          {conectado
            ? "conectado · esperando la primera muestra…"
            : "sin conexión con el backend. ¿Está corriendo `python main.py` en backend/?"}
        </div>
      </div>
    );
  }

  const { telemetria, creencia, residual, oee, ventana, diagnostico,
          trazas, sistema, verdad_oculta } = estado;

  return (
    <div className="app">
      <Encabezado sistema={sistema} conectado={conectado} onAccion={() => {}} />

      <div className="rejilla principal">
        {/* ---------------------------------------------- columna izquierda */}
        <div className="rejilla">
          <div className="tarjeta">
            <h2>Piso de planta · lo que ve el SCADA</h2>
            <p className="sub">
              Todo lo que muestra este mímico viene de la telemetría. Si el
              transmisor de nivel se desvía, esta pantalla miente igual que
              mentiría el SCADA de la planta.
            </p>
            <Mimico tel={telemetria} creencia={creencia} />
          </div>

          <PanelOEE oee={oee} ventana={ventana} />
          <PanelGemelo creencia={creencia} residual={residual} trazas={trazas} />
          <Bitacora decisiones={decisiones} />
        </div>

        {/* ------------------------------------------------ columna derecha */}
        <div className="rejilla">
          <PanelDiagnostico diagnostico={diagnostico} />
          <PanelWhatIf creencia={creencia} onCambio={refrescarBitacora} />
          <PanelFallas fallas={fallas} activa={sistema?.falla_inyectada}
                       onAccion={() => {}} />

          <div>
            <button onClick={() => setVerOjo((v) => !v)}
                    className={verOjo ? "activo" : ""}
                    style={{ width: "100%" }}>
              {verOjo ? "▲ OCULTAR" : "▼ MOSTRAR"} EL ESTADO REAL DE LA PLANTA
              (ojo de Dios)
            </button>
          </div>
          {verOjo && (
            <OjoDeDios verdad={verdad_oculta} creencia={creencia} tel={telemetria} />
          )}

          <MatrizDerechos matriz={derechos} />
        </div>
      </div>

      <div className="pie">
        <strong style={{ color: "var(--mudo)" }}>
          Lo que hace de esto un gemelo y no un tablero:
        </strong>{" "}
        (1) un modelo que predice · (2) un residual que compara predicción con
        realidad · (3) un what-if que simula futuros sin tocar la planta ·
        (4) un camino de vuelta al proceso, gobernado. Quitá cualquiera de los
        cuatro y lo que queda es un dashboard.
        <br />
        Universidad de San Buenaventura · Sede Bello — Gobierno de TI y Sistemas
        Ciber-Físicos de Producción · Lab 7 (Semana 12) · alimenta el Lab 8 (OEE, S13).
      </div>
    </div>
  );
}
