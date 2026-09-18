/*
  Gráficas en SVG puro, sin librería.

  Es una decisión deliberada y vale la pena decirla en clase: meter Recharts
  o Chart.js para dibujar cuatro líneas añade ~150 kB y un árbol de
  dependencias que hay que mantener y auditar. Para este alcance, 60 líneas
  de SVG hacen lo mismo, se leen enteras y no envejecen.

  Es el mismo razonamiento que el principio de adquisición de la S02 aplicado
  a una decisión pequeña: toda dependencia es una deuda, y conviene que sea
  una decisión consciente y no un reflejo.
*/

function escala(vals, minForzado, maxForzado) {
  let min = minForzado ?? Math.min(...vals);
  let max = maxForzado ?? Math.max(...vals);
  if (!isFinite(min) || !isFinite(max)) return [0, 1];
  if (max - min < 1e-9) { min -= 0.5; max += 0.5; }
  return [min, max];
}

/** Serie temporal simple. `series` = [{datos, color, punteada}] */
export function Lineas({ series, alto = 90, min, max, cero = false,
                         banda = null, etiquetaMin, etiquetaMax }) {
  const A = 300, H = alto;
  const todos = series.flatMap((s) => s.datos).filter((v) => isFinite(v));
  if (todos.length < 2) {
    return <div className="vacio" style={{ height: alto }}>esperando datos…</div>;
  }
  const [lo, hi] = escala(todos, min, max);
  const y = (v) => H - ((v - lo) / (hi - lo)) * H;

  const camino = (datos) => {
    const n = datos.length;
    return datos
      .map((v, i) => `${i === 0 ? "M" : "L"}${(i / (n - 1)) * A},${y(v).toFixed(2)}`)
      .join(" ");
  };

  return (
    <svg viewBox={`0 0 ${A} ${H}`} preserveAspectRatio="none"
         style={{ width: "100%", height: alto, display: "block" }}>
      {/* banda de tolerancia / umbral */}
      {banda && (
        <rect x="0" y={y(banda[1])} width={A}
              height={Math.max(1, y(banda[0]) - y(banda[1]))}
              fill="#c6ff00" opacity="0.07" />
      )}
      {cero && lo < 0 && hi > 0 && (
        <line x1="0" y1={y(0)} x2={A} y2={y(0)} stroke="#5a5a5a"
              strokeWidth="1" strokeDasharray="3 3" />
      )}
      {series.map((s, i) => (
        <path key={i} d={camino(s.datos)} fill="none" stroke={s.color}
              strokeWidth={s.punteada ? 1.2 : 1.6}
              strokeDasharray={s.punteada ? "4 3" : undefined}
              vectorEffect="non-scaling-stroke" />
      ))}
      <text x="2" y="10" fill="#5a5a5a" fontSize="9" fontFamily="monospace">
        {etiquetaMax ?? hi.toFixed(3)}
      </text>
      <text x="2" y={H - 3} fill="#5a5a5a" fontSize="9" fontFamily="monospace">
        {etiquetaMin ?? lo.toFixed(3)}
      </text>
    </svg>
  );
}

/** Dispersión de volúmenes por botella, con banda de tolerancia. */
export function Botellas({ datos, objetivo, tolerancia, alto = 96 }) {
  const A = 300, H = alto;
  if (!datos?.length) {
    return <div className="vacio" style={{ height: alto }}>esperando botellas…</div>;
  }
  const vals = datos.map((d) => d.volumen);
  const lo = Math.min(objetivo - tolerancia * 3, ...vals) - 0.02;
  const hi = Math.max(objetivo + tolerancia * 3, ...vals) + 0.02;
  const y = (v) => H - ((v - lo) / (hi - lo)) * H;
  const n = datos.length;

  return (
    <svg viewBox={`0 0 ${A} ${H}`} preserveAspectRatio="none"
         style={{ width: "100%", height: alto, display: "block" }}>
      <rect x="0" y={y(objetivo + tolerancia)} width={A}
            height={Math.max(1, y(objetivo - tolerancia) - y(objetivo + tolerancia))}
            fill="#22e06b" opacity="0.11" />
      <line x1="0" y1={y(objetivo)} x2={A} y2={y(objetivo)}
            stroke="#22e06b" strokeWidth="1" strokeDasharray="4 3"
            vectorEffect="non-scaling-stroke" />
      {datos.map((d, i) => (
        <circle key={i} cx={(i / Math.max(1, n - 1)) * A} cy={y(d.volumen)} r="2.6"
                fill={d.buena ? "#22e06b" : "#ff3b30"} />
      ))}
      <text x="2" y="10" fill="#5a5a5a" fontSize="9" fontFamily="monospace">
        {hi.toFixed(2)} L
      </text>
      <text x="2" y={H - 3} fill="#5a5a5a" fontSize="9" fontFamily="monospace">
        {lo.toFixed(2)} L
      </text>
    </svg>
  );
}

/** Curva del barrido de what-if, con el punto actual y el óptimo marcados. */
export function CurvaWhatIf({ curva, tActual, tOptimo, alto = 130 }) {
  const A = 300, H = alto;
  if (!curva?.length) return null;

  const xs = curva.map((e) => e.t_set);
  const xlo = Math.min(...xs), xhi = Math.max(...xs);
  const x = (v) => ((v - xlo) / (xhi - xlo)) * A;
  const y = (v) => H - v * H;

  const serie = (clave) =>
    curva.map((e, i) => `${i === 0 ? "M" : "L"}${x(e.t_set).toFixed(2)},${y(e[clave]).toFixed(2)}`).join(" ");

  return (
    <div>
      <svg viewBox={`0 0 ${A} ${H}`} preserveAspectRatio="none"
           style={{ width: "100%", height: alto, display: "block" }}>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" y1={y(g)} x2={A} y2={y(g)}
                stroke="#242424" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}
        <path d={serie("calidad")} fill="none" stroke="#22e06b" strokeWidth="1.3"
              strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
        <path d={serie("desempeno")} fill="none" stroke="#27e5e5" strokeWidth="1.3"
              strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
        <path d={serie("oee")} fill="none" stroke="#c6ff00" strokeWidth="2"
              vectorEffect="non-scaling-stroke" />
        {tActual != null && (
          <line x1={x(tActual)} y1="0" x2={x(tActual)} y2={H}
                stroke="#8c8c8c" strokeWidth="1" strokeDasharray="2 3"
                vectorEffect="non-scaling-stroke" />
        )}
        {tOptimo != null && (
          <line x1={x(tOptimo)} y1="0" x2={x(tOptimo)} y2={H}
                stroke="#ffb000" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        )}
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between",
                    fontSize: 10, color: "#5a5a5a", marginTop: 3 }}>
        <span>{xlo.toFixed(2)} s</span>
        <span style={{ color: "#c6ff00" }}>— OEE</span>
        <span style={{ color: "#22e06b" }}>-- calidad</span>
        <span style={{ color: "#27e5e5" }}>-- desempeño</span>
        <span>{xhi.toFixed(2)} s</span>
      </div>
    </div>
  );
}
