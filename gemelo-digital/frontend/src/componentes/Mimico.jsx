/*
  MÍMICO de la línea — la vista "de piso".

  Es lo más parecido a un HMI de SCADA que tiene este laboratorio, y por eso
  es donde conviene arrancar la clase: los estudiantes reconocen la pantalla
  y entienden el proceso antes de que aparezca una sola ecuación.

  Dibuja el NIVEL MEDIDO, que es lo único que el gemelo conoce. Cuando el
  transmisor está desviado, esta pantalla miente — igual que mentiría el
  SCADA de la planta. Compararla con el panel "ojo de Dios" es la forma más
  directa de que se vea el problema.
*/

const COLOR_ESTACION = {
  llenando: "#27e5e5",
  tapando: "#ffb000",
  indexando: "#9d6bff",
  parada: "#ff3b30",
  esperando: "#5a5a5a",
};

export function Mimico({ tel, creencia, nivelMax = 1.6 }) {
  if (!tel) return <div className="vacio">esperando telemetría…</div>;

  const nivel = tel.nivel_tanque ?? 0;
  const frac = Math.max(0, Math.min(1, nivel / nivelMax));
  const colorEst = COLOR_ESTACION[tel.estacion] ?? "#5a5a5a";
  const parada = tel.estacion === "parada";

  // Geometría del tanque
  const TX = 20, TY = 18, TW = 74, TH = 128;
  const hAgua = TH * frac;

  return (
    <svg viewBox="0 0 620 200" style={{ width: "100%", height: "auto", display: "block" }}>
      {/* ---------------------------------------------------- DEPÓSITO */}
      <rect x={TX} y={TY} width={TW} height={TH} fill="#0b0b0b"
            stroke="#333" strokeWidth="1.5" />
      <rect x={TX + 1} y={TY + TH - hAgua} width={TW - 2} height={hAgua}
            fill="#27e5e5" opacity="0.28" />
      <line x1={TX + 1} y1={TY + TH - hAgua} x2={TX + TW - 1} y2={TY + TH - hAgua}
            stroke="#27e5e5" strokeWidth="1.5" />

      {/* consigna del lazo de nivel */}
      {creencia && (
        <>
          <line x1={TX - 5} y1={TY + TH - TH * (creencia.nivel_sp ?? 1.19) / nivelMax}
                x2={TX + TW + 5} y2={TY + TH - TH * (creencia.nivel_sp ?? 1.19) / nivelMax}
                stroke="#c6ff00" strokeWidth="1" strokeDasharray="4 3" />
          <text x={TX + TW + 8} y={TY + TH - TH * (creencia.nivel_sp ?? 1.19) / nivelMax + 3}
                fill="#c6ff00" fontSize="8" fontFamily="monospace">SP</text>
        </>
      )}

      <text x={TX} y={TY - 6} fill="#8c8c8c" fontSize="9" fontFamily="monospace">
        DEPÓSITO
      </text>
      <text x={TX + TW / 2} y={TY + TH / 2} fill="#f4f4f4" fontSize="13"
            fontFamily="monospace" textAnchor="middle" fontWeight="bold">
        {nivel.toFixed(3)}
      </text>
      <text x={TX + TW / 2} y={TY + TH / 2 + 12} fill="#5a5a5a" fontSize="8"
            fontFamily="monospace" textAnchor="middle">m (medido)</text>

      {/* tubería tanque → llenadora */}
      <line x1={TX + TW} y1={TY + TH - 16} x2={168} y2={TY + TH - 16}
            stroke="#333" strokeWidth="3" />
      <line x1={168} y1={TY + TH - 16} x2={168} y2={92}
            stroke={tel.estacion === "llenando" ? "#27e5e5" : "#333"} strokeWidth="3" />

      {/* caudal instantáneo */}
      <text x={112} y={TY + TH - 22} fill="#27e5e5" fontSize="9" fontFamily="monospace">
        {(tel.caudal_instantaneo ?? 0).toFixed(3)} L/s
      </text>

      {/* --------------------------------------------------- ESTACIONES */}
      {[
        { x: 140, w: 56, et: "LLENADO", act: tel.estacion === "llenando" },
        { x: 214, w: 56, et: "TAPADO", act: tel.estacion === "tapando" },
        { x: 288, w: 56, et: "INSPECC.", act: tel.estacion === "indexando" },
      ].map((s) => (
        <g key={s.et}>
          <rect x={s.x} y={92} width={s.w} height={44}
                fill={s.act ? "#1a1a1a" : "#0f0f0f"}
                stroke={s.act ? colorEst : "#333"} strokeWidth={s.act ? 2 : 1} />
          <text x={s.x + s.w / 2} y={116} fill={s.act ? colorEst : "#5a5a5a"}
                fontSize="8.5" fontFamily="monospace" textAnchor="middle">
            {s.et}
          </text>
        </g>
      ))}

      {/* transportador */}
      <line x1={140} y1={148} x2={520} y2={148} stroke="#333" strokeWidth="2" />
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={i} x1={146 + i * 29} y1={144} x2={146 + i * 29} y2={152}
              stroke="#242424" strokeWidth="1" />
      ))}

      {/* botella en curso, con su llenado */}
      <g>
        <rect x={158} y={121} width={20} height={26} fill="#0b0b0b"
              stroke="#8c8c8c" strokeWidth="1" rx="2" />
        {tel.estacion === "llenando" && (
          <rect x={159} y={147 - 25 * Math.min(1, (tel.caudal_instantaneo > 0 ? 0.5 : 0) + 0.2)}
                width={18}
                height={25 * Math.min(1, (tel.caudal_instantaneo > 0 ? 0.5 : 0) + 0.2)}
                fill="#27e5e5" opacity="0.5" />
        )}
      </g>

      {/* ------------------------------------------------------ SALIDA */}
      <g>
        <rect x={400} y={92} width={110} height={56} fill="#0f0f0f" stroke="#333" />
        <text x={455} y={107} fill="#8c8c8c" fontSize="8.5" fontFamily="monospace"
              textAnchor="middle">ÚLTIMA BOTELLA</text>
        <text x={455} y={128} fontSize="19" fontFamily="monospace" textAnchor="middle"
              fontWeight="bold"
              fill={
                Math.abs((tel.ultimo_volumen ?? 0) - (creencia?.volumen_objetivo ?? 2)) <=
                (creencia?.tolerancia ?? 0.05) ? "#22e06b" : "#ff3b30"
              }>
          {(tel.ultimo_volumen ?? 0).toFixed(3)}
        </text>
        <text x={455} y={142} fill="#5a5a5a" fontSize="8" fontFamily="monospace"
              textAnchor="middle">
          L · objetivo {(creencia?.volumen_objetivo ?? 2).toFixed(2)} ±{(creencia?.tolerancia ?? 0.05).toFixed(2)}
        </text>
      </g>

      {/* ---------------------------------------------------- CONTADORES */}
      <g fontFamily="monospace">
        <text x={530} y={30} fill="#5a5a5a" fontSize="8.5">TOTAL</text>
        <text x={530} y={46} fill="#f4f4f4" fontSize="16" fontWeight="bold">
          {tel.botellas_totales ?? 0}
        </text>
        <text x={530} y={68} fill="#5a5a5a" fontSize="8.5">BUENAS</text>
        <text x={530} y={84} fill="#22e06b" fontSize="16" fontWeight="bold">
          {tel.botellas_buenas ?? 0}
        </text>
        <text x={530} y={106} fill="#5a5a5a" fontSize="8.5">RECHAZOS</text>
        <text x={530} y={122} fill="#ff3b30" fontSize="16" fontWeight="bold">
          {tel.botellas_rechazadas ?? 0}
        </text>
      </g>

      {/* ------------------------------------------------------- ESTADO */}
      <g>
        <rect x={140} y={166} width={200} height={22}
              fill={parada ? "#1a0a0a" : "#0f0f0f"}
              stroke={colorEst} strokeWidth="1" />
        <text x={240} y={181} fill={colorEst} fontSize="10" fontFamily="monospace"
              textAnchor="middle" fontWeight="bold">
          {(tel.estacion ?? "").toUpperCase()}
        </text>
      </g>
      <text x={356} y={181} fill="#5a5a5a" fontSize="9" fontFamily="monospace">
        t = {Math.floor((tel.t ?? 0) / 60)} min {String(Math.floor((tel.t ?? 0) % 60)).padStart(2, "0")} s
      </text>
    </svg>
  );
}
