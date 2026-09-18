/*
  Paneles de lectura: OEE, estado del gemelo, diagnóstico y "ojo de Dios".
*/

import { Lineas, Botellas } from "./Grafica.jsx";

const pct = (v) => `${((v ?? 0) * 100).toFixed(1)} %`;

function colorOEE(v) {
  if (v >= 0.85) return "var(--verde)";
  if (v >= 0.60) return "var(--ambar)";
  return "var(--rojo)";
}

/* ====================================================================== */
export function PanelOEE({ oee, ventana }) {
  if (!oee) return null;
  const comps = [
    { k: "Disponibilidad", v: oee.disponibilidad, c: "var(--cian)",
      n: `parada ${(oee.t_parada / 60).toFixed(1)} min` },
    { k: "Desempeño", v: oee.desempeno, c: "var(--morado)",
      n: `ciclo ${oee.ciclo_real?.toFixed(2)} s / ideal ${oee.ciclo_ideal?.toFixed(2)} s` },
    { k: "Calidad", v: oee.calidad, c: "var(--verde)",
      n: `${oee.botellas_rechazadas} rechazos de ${oee.botellas_totales}` },
  ];

  return (
    <div className="tarjeta">
      <h2>OEE del turno</h2>
      <p className="sub">
        Acumulado desde el inicio del turno. Las tres componentes salen del mismo
        modelo físico, así que cada punto perdido se puede rastrear hasta una variable.
      </p>
      <div className="tiles">
        <div className="tile grande">
          <div className="k">OEE</div>
          <div className="v" style={{ color: colorOEE(oee.oee) }}>{pct(oee.oee)}</div>
          <div className="n">D × P × C</div>
          <div className="barra">
            <i style={{ width: `${(oee.oee ?? 0) * 100}%`, background: colorOEE(oee.oee) }} />
          </div>
        </div>
        {comps.map((c) => (
          <div className="tile" key={c.k}>
            <div className="k">{c.k}</div>
            <div className="v" style={{ color: c.c }}>{pct(c.v)}</div>
            <div className="n">{c.n}</div>
            <div className="barra">
              <i style={{ width: `${(c.v ?? 0) * 100}%`, background: c.c }} />
            </div>
          </div>
        ))}
      </div>

      {ventana && (
        <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--linea2)" }}>
          <div className="kv">
            <span className="k">
              Calidad · ventana móvil ({ventana.n} últimas botellas)
            </span>
            <span className="v" style={{ color: colorOEE(ventana.calidad) }}>
              {pct(ventana.calidad)}
            </span>
          </div>
          <p className="sub" style={{ margin: "7px 0 0" }}>
            El acumulado del turno reacciona lento porque arrastra el histórico; la
            ventana móvil dice qué está pasando <em>ahora</em>. Las dos son correctas
            y dicen cosas distintas — elegir el período de agregación es una decisión
            de gobierno de datos, no de cálculo.
          </p>
        </div>
      )}
    </div>
  );
}

/* ====================================================================== */
export function PanelGemelo({ creencia, residual, trazas }) {
  if (!creencia) return null;

  const rV = residual?.historia?.map((h) => h.r_volumen) ?? [];
  const umbral = residual?.umbral_volumen ?? 0.03;
  const desgaste = creencia.desgaste_pct ?? 0;

  return (
    <div className="tarjeta">
      <h2>Estado del gemelo</h2>
      <p className="sub">
        Nada de esto viene de un sensor: el gemelo lo <em>infiere</em> comparando
        lo que mide la planta con lo que predice su modelo.
      </p>

      <div className="kv">
        <span className="k">Cv de placa</span>
        <span className="v">{creencia.cv_nominal?.toFixed(4)}</span>
      </div>
      <div className="kv">
        <span className="k">Cv estimado por el gemelo</span>
        <span className="v" style={{ color: desgaste > 3 ? "var(--ambar)" : "var(--cian)" }}>
          {creencia.cv_estimado?.toFixed(4)}
        </span>
      </div>
      <div className="kv">
        <span className="k">Desgaste inferido</span>
        <span className="v" style={{ color: desgaste > 3 ? "var(--ambar)" : "var(--mudo)" }}>
          {desgaste.toFixed(2)} %
        </span>
      </div>
      <div className="kv">
        <span className="k">Consigna t_set · vigente / placa</span>
        <span className="v">
          {creencia.t_set?.toFixed(2)} s / {creencia.t_set_nominal?.toFixed(2)} s
        </span>
      </div>
      <div className="kv">
        <span className="k">Ciclo · actual / ideal</span>
        <span className="v">
          {creencia.ciclo_actual?.toFixed(2)} s / {creencia.ciclo_ideal?.toFixed(2)} s
        </span>
      </div>

      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between",
                      alignItems: "baseline", marginBottom: 4 }}>
          <span style={{ fontSize: 10.5, color: "var(--mudo)", letterSpacing: "0.08em" }}>
            RESIDUAL DE VOLUMEN (medido − predicho)
          </span>
          <span style={{ fontSize: 12, fontWeight: 700,
                         color: residual?.alerta ? "var(--rojo)" : "var(--verde)" }}>
            {(residual?.r_volumen ?? 0) >= 0 ? "+" : ""}
            {(residual?.r_volumen ?? 0).toFixed(4)} L
          </span>
        </div>
        <Lineas
          series={[{ datos: rV, color: residual?.alerta ? "#ff3b30" : "#22e06b" }]}
          alto={72}
          cero
          banda={[-umbral, umbral]}
          min={Math.min(-umbral * 2, ...(rV.length ? rV : [0]))}
          max={Math.max(umbral * 2, ...(rV.length ? rV : [0]))}
        />
        <p className="sub" style={{ margin: "5px 0 0" }}>
          La banda clara es el umbral (±{umbral} L). Mientras el residual se quede
          dentro, el modelo sigue describiendo bien a la planta. Cuando se sale, algo
          cambió en el mundo real que el modelo no contempla.
        </p>
      </div>

      {residual?.salto_detectado && (
        <div className="aviso mal">
          ⚠ SALTO DE NIVEL ENCLAVADO · {residual.salto_magnitud > 0 ? "+" : ""}
          {residual.salto_magnitud?.toFixed(3)} m en t = {residual.salto_t?.toFixed(0)} s.
          Un cambio así viola el balance de masa: nada mueve esa columna de líquido en
          200 ms. Es la firma de un transmisor desviado.
        </div>
      )}

      <div style={{ marginTop: 14 }}>
        <span style={{ fontSize: 10.5, color: "var(--mudo)", letterSpacing: "0.08em" }}>
          VOLUMEN POR BOTELLA
        </span>
        <Botellas
          datos={trazas?.volumen ?? []}
          objetivo={creencia.volumen_objetivo ?? 2}
          tolerancia={creencia.tolerancia ?? 0.05}
        />
      </div>
    </div>
  );
}

/* ====================================================================== */
export function PanelDiagnostico({ diagnostico }) {
  return (
    <div className="tarjeta">
      <h2>Diagnóstico del gemelo</h2>
      <p className="sub">
        Hipótesis ordenadas por confianza, deducidas del patrón de residuales. Son
        reglas explícitas derivadas de la física — se pueden leer y refutar, que es
        justo lo que una caja negra no permite.
      </p>
      {(diagnostico ?? []).map((h, i) => (
        <div key={i}
             className={`hipotesis ${h.confianza === 0 ? "nota" : i === 0 ? "top" : ""}`}>
          <div className="cabeza">
            <span className="causa"
                  style={{ color: h.confianza === 0 ? "var(--morado)" : undefined }}>
              {h.causa}
            </span>
            {h.confianza > 0 && (
              <span className="conf">{(h.confianza * 100).toFixed(0)} %</span>
            )}
          </div>
          <div className="ev">{h.evidencia}</div>
        </div>
      ))}
    </div>
  );
}

/* ====================================================================== */
export function OjoDeDios({ verdad, creencia, tel }) {
  if (!verdad) return null;
  const errCv = verdad.cv_real
    ? Math.abs(creencia.cv_estimado - verdad.cv_real) / verdad.cv_real * 100
    : 0;
  const errNivel = Math.abs((tel?.nivel_tanque ?? 0) - verdad.nivel_real);

  return (
    <div className="tarjeta ojo-dios">
      <h2>Ojo de Dios · lo que el gemelo NO puede ver</h2>
      <p className="sub">
        En una planta real este panel no existiría: es el estado verdadero del
        simulador. Está aquí sólo para proyectarlo en clase y ver cómo la estimación
        converge —o no— hacia la verdad.
      </p>

      <div className="comparacion"><span className="et">Coeficiente de la válvula</span></div>
      <div className="comparacion">
        <span className="real">{verdad.cv_real?.toFixed(4)}</span>
        <span className="flecha">real → est.</span>
        <span className="est">{creencia?.cv_estimado?.toFixed(4)}</span>
      </div>
      <div className="kv">
        <span className="k">error de estimación</span>
        <span className="v" style={{ color: errCv > 5 ? "var(--rojo)" : "var(--verde)" }}>
          {errCv.toFixed(2)} %
        </span>
      </div>

      <div className="comparacion"><span className="et">Nivel del tanque</span></div>
      <div className="comparacion">
        <span className="real">{verdad.nivel_real?.toFixed(3)} m</span>
        <span className="flecha">real → medido</span>
        <span className="est">{tel?.nivel_tanque?.toFixed(3)} m</span>
      </div>
      <div className="kv">
        <span className="k">sesgo del transmisor</span>
        <span className="v"
              style={{ color: Math.abs(verdad.sesgo_sensor) > 0.01 ? "var(--rojo)" : "var(--tenue)" }}>
          {verdad.sesgo_sensor >= 0 ? "+" : ""}{verdad.sesgo_sensor?.toFixed(3)} m
        </span>
      </div>
      {errNivel > 0.01 && (
        <p className="sub" style={{ margin: "8px 0 0", color: "var(--rojo)" }}>
          El SCADA y el gemelo están viendo {errNivel.toFixed(3)} m de más. Y el lazo
          de control de nivel lee ese mismo transmisor, así que no sólo informa mal:
          está moviendo el proceso hacia donde no debe.
        </p>
      )}

      <div className="comparacion"><span className="et">Bomba de reposición</span></div>
      <div className="kv">
        <span className="k">capacidad máxima</span>
        <span className="v">{verdad.q_bomba_max?.toFixed(3)} L/s</span>
      </div>
      <div className="kv">
        <span className="k">caudal que entrega el lazo</span>
        <span className="v">{verdad.caudal_bomba_actual?.toFixed(3)} L/s</span>
      </div>
    </div>
  );
}
