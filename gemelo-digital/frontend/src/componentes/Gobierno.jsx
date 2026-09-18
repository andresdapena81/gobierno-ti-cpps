/*
  EVALUAR → DIRIGIR → MONITOREAR, en tres componentes.

  Es la parte del laboratorio que no existe en casi ningún piloto de
  Industria 4.0, y es exactamente lo que ISO/IEC 38500 exige:

    PanelWhatIf   · EVALUAR   — la propuesta y la evidencia que la sustenta
    (el formulario)· DIRIGIR  — la autorización, con rol y justificación
    Bitacora      · MONITOREAR— el efecto medido, con veredicto

  El detalle importante: el botón que aplica el cambio NO está junto al
  resultado del what-if. Hay que pasar por el formulario de autorización, y
  la matriz de derechos de decisión puede rechazarlo. Esa fricción es el
  punto, no un obstáculo de la interfaz.
*/

import { useState } from "react";
import { CurvaWhatIf } from "./Grafica.jsx";
import { api } from "../api.js";

const pct = (v) => `${((v ?? 0) * 100).toFixed(1)} %`;

/* ====================================================== EVALUAR + DIRIGIR */
export function PanelWhatIf({ creencia, onCambio }) {
  const [horizonte, setHorizonte] = useState(30);
  const [res, setRes] = useState(null);
  const [cargando, setCargando] = useState(false);

  const [rol, setRol] = useState("supervisor");
  const [justificacion, setJustificacion] = useState("");
  const [tSet, setTSet] = useState("");
  const [aviso, setAviso] = useState(null);

  const evaluar = async () => {
    setCargando(true);
    setAviso(null);
    try {
      const r = await api.whatif(horizonte);
      setRes(r);
      setTSet(String(r.recomendado.t_set));
    } catch (e) {
      setAviso({ ok: false, msg: String(e.message) });
    } finally {
      setCargando(false);
    }
  };

  const dirigir = async () => {
    setAviso(null);
    try {
      const r = await api.autorizar({
        t_set: parseFloat(tSet),
        rol,
        justificacion,
        solicitado_por: "gemelo digital",
      });
      setAviso({ ok: r.ok, msg: r.mensaje, derecho: r.derecho });
      if (r.ok) {
        setJustificacion("");
        setRes(null);
        onCambio?.();
      }
    } catch (e) {
      setAviso({ ok: false, msg: String(e.message) });
    }
  };

  const delta = creencia && tSet
    ? Math.abs(parseFloat(tSet) - creencia.t_set) / creencia.t_set
    : 0;
  const tipoPrevisto = delta <= 0.10 ? "ajuste menor" : "ajuste mayor";
  const rolExigido = delta <= 0.10 ? "supervisor" : "ingeniero de proceso";

  return (
    <div className="tarjeta">
      <h2>Evaluar · simulación what-if</h2>
      <p className="sub">
        Corre el modelo hacia adelante con consignas alternativas. No toca la planta:
        convierte un experimento caro e irreversible en uno barato y reversible.
      </p>

      <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 10.5, color: "var(--mudo)" }}>
            HORIZONTE (min)
          </label>
          <input type="number" min="1" max="480" value={horizonte}
                 onChange={(e) => setHorizonte(Number(e.target.value))} />
        </div>
        <button onClick={evaluar} disabled={cargando}>
          {cargando ? "simulando…" : "▶ SIMULAR"}
        </button>
      </div>

      {res && (
        <>
          <div className="reco">
            <div className="titulo">Recomendación del gemelo</div>
            <div className="grande">
              t_set&nbsp;
              <span style={{ color: "var(--tenue)" }}>
                {res.actual.t_set.toFixed(2)} s
              </span>
              {" → "}
              <span style={{ color: "var(--ambar)" }}>
                {res.recomendado.t_set.toFixed(2)} s
              </span>
            </div>
            <div className="kv">
              <span className="k">OEE proyectado</span>
              <span className="v">
                {pct(res.actual.oee)} → {pct(res.recomendado.oee)}
                <strong style={{ color: res.ganancia_oee > 0 ? "var(--verde)" : "var(--rojo)" }}>
                  {" "}({res.ganancia_oee >= 0 ? "+" : ""}
                  {(res.ganancia_oee * 100).toFixed(1)} pts)
                </strong>
              </span>
            </div>
            <div className="kv">
              <span className="k">calidad</span>
              <span className="v">
                {pct(res.actual.calidad)} → {pct(res.recomendado.calidad)}
              </span>
            </div>
            <div className="kv">
              <span className="k">desempeño (el costo del ajuste)</span>
              <span className="v">
                {pct(res.actual.desempeno)} → {pct(res.recomendado.desempeno)}
              </span>
            </div>
            <div className="kv">
              <span className="k">t_set que compensaría el desgaste exacto</span>
              <span className="v">{res.t_set_compensacion?.toFixed(2)} s</span>
            </div>

            <div style={{ marginTop: 12 }}>
              <CurvaWhatIf curva={res.curva} tActual={res.actual.t_set}
                           tOptimo={res.recomendado.t_set} />
            </div>

            <p className="sub" style={{ margin: "9px 0 0" }}>
              Se entrega la curva completa, no sólo el óptimo. Alargar la consigna
              gana calidad y pierde desempeño; dónde está el equilibrio aceptable
              es un juicio de negocio, no un resultado del modelo.
            </p>

            <div className="titulo" style={{ marginTop: 12 }}>Supuestos declarados</div>
            <ul className="supuestos">
              {res.supuestos.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          {/* ------------------------------------------------- DIRIGIR */}
          <div className="autoriza">
            <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--lima)",
                          fontWeight: 700, marginBottom: 10 }}>
              DIRIGIR · AUTORIZACIÓN DEL CAMBIO
            </div>

            <div className="campo">
              <label>Consigna a aplicar (s)</label>
              <input type="number" step="0.05" value={tSet}
                     onChange={(e) => setTSet(e.target.value)} />
            </div>

            <div className="campo">
              <label>Autoriza (rol)</label>
              <select value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="operador">operador</option>
                <option value="supervisor">supervisor</option>
                <option value="ingeniero_proceso">ingeniero de proceso</option>
                <option value="gerente_planta">gerente de planta</option>
              </select>
            </div>

            <div className="campo">
              <label>Justificación (obligatoria)</label>
              <textarea rows="2" value={justificacion}
                        onChange={(e) => setJustificacion(e.target.value)}
                        placeholder="Por qué se aprueba este cambio y con qué evidencia." />
            </div>

            <p className="sub" style={{ margin: "0 0 10px" }}>
              Cambio de {(delta * 100).toFixed(1)} % → la matriz lo clasifica como{" "}
              <strong style={{ color: "var(--ambar)" }}>{tipoPrevisto}</strong>, que
              exige rol <strong style={{ color: "var(--ambar)" }}>{rolExigido}</strong> o superior.
            </p>

            <button onClick={dirigir} disabled={!justificacion.trim()}>
              ⏎ AUTORIZAR Y APLICAR
            </button>
          </div>
        </>
      )}

      {aviso && (
        <div className={`aviso ${aviso.ok ? "ok" : "mal"}`}>
          {aviso.msg}
          {aviso.derecho && !aviso.ok && (
            <div style={{ marginTop: 6, color: "var(--mudo)" }}>
              Dominio: {aviso.derecho.dominio} · principio ISO/IEC 38500:{" "}
              {aviso.derecho.principio_38500}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ============================================================== MONITOREAR */
export function Bitacora({ decisiones }) {
  return (
    <div className="tarjeta">
      <h2>Monitorear · bitácora de decisiones</h2>
      <p className="sub">
        Quién pidió qué, quién lo autorizó, con qué evidencia y qué pasó después.
        Sin este registro no hay rendición de cuentas — y sin rendición de cuentas
        no hay gobierno. Exportable para el Entregable 1.
      </p>

      {(!decisiones || decisiones.length === 0) && (
        <div className="vacio">
          Todavía no se ha autorizado ningún cambio en este turno.
        </div>
      )}

      {(decisiones ?? []).map((d) => {
        const clase = d.veredicto === "EFECTIVA" ? "EFECTIVA"
          : d.veredicto === "CONTRAPRODUCENTE" ? "CONTRAPRODUCENTE"
          : d.veredicto ? "neutro" : "pendiente";
        return (
          <div className="decision" key={d.id}>
            <div className="fila1">
              <span className="id">#{d.id} · {d.dominio}</span>
              <span className={`veredicto ${clase}`}>
                {d.veredicto ?? "EN SEGUIMIENTO"}
              </span>
            </div>
            <div className="prop">{d.propuesta}</div>
            <div className="just">“{d.justificacion}”</div>
            <div className="meta">
              <span>t = {d.t_sim} s</span>
              <span>pidió: {d.solicitado_por}</span>
              <span>autorizó: <strong style={{ color: "var(--lima)" }}>{d.autorizado_por}</strong></span>
              <span>exigía: {d.rol_minimo}</span>
              <span>principio: {d.principio_38500}</span>
            </div>
            <div className="meta" style={{ marginTop: 5 }}>
              <span>
                calidad {pct(d.calidad_antes)} →{" "}
                {d.calidad_despues != null ? pct(d.calidad_despues) : "…"}
              </span>
              <span>
                OEE {pct(d.oee_antes)} →{" "}
                {d.oee_despues != null ? pct(d.oee_despues) : "…"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ========================================================= LA MATRIZ (S01) */
export function MatrizDerechos({ matriz }) {
  if (!matriz?.length) return null;
  return (
    <div className="tarjeta">
      <h2>Matriz de derechos de decisión</h2>
      <p className="sub">
        Weill &amp; Ross (S01) implementado en código: la autoridad se gradúa por
        magnitud del cambio, no por quién esté frente a la pantalla. La última
        columna liga cada dominio al principio de ISO/IEC 38500 que lo rige (S02).
      </p>
      {matriz.map((d) => (
        <div key={d.clave} style={{ borderBottom: "1px solid var(--linea2)", padding: "7px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
            <strong style={{ fontSize: 12 }}>{d.dominio}</strong>
            <span style={{ color: "var(--lima)", whiteSpace: "nowrap", fontSize: 11.5 }}>
              {d.rol_minimo}
            </span>
          </div>
          <div style={{ color: "var(--mudo)", fontSize: 11, marginTop: 2 }}>
            {d.descripcion}
          </div>
          <div style={{ color: "var(--cian)", fontSize: 10.5, marginTop: 2 }}>
            principio: {d.principio_38500}
          </div>
        </div>
      ))}
    </div>
  );
}
