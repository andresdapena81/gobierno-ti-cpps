// Metadatos comunes y registro de las 16 sesiones del curso.
const BASE = {
  code: "8 50155-3M",
  program: "PREGRADO",
  totalSessions: 16,
  docente: "Jorge Andrés Dapena — MSc.",
  inst: "Universidad de San Buenaventura — Medellín (Bello)",
  courseTitle: "GOBIERNO DE TI Y SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN · 2026-2",
};

// n, title, tag, unitLabel, week, next {num,title,desc}
const SESSIONS = {
  1:  { tag: "FUNDAMENTOS",   unitLabel: "U1 · Gobierno de TI",        week: 1 },
  2:  { tag: "ISO 38500",     unitLabel: "U1 · Gobierno de TI",        week: 2 },
  3:  { tag: "COBIT I",       unitLabel: "U1 · Gobierno de TI",        week: 3 },
  4:  { tag: "COBIT II",      unitLabel: "U1 · Gobierno de TI",        week: 4 },
  5:  { tag: "VALOR · ITIL 4",unitLabel: "U1 · Gobierno de TI",        week: 5 },
  6:  { tag: "INDUSTRIA 4.0", unitLabel: "U2 · Sistemas ciber-físicos",week: 6 },
  7:  { tag: "ISA-95",        unitLabel: "U2 · Sistemas ciber-físicos",week: 7 },
  8:  { tag: "RAMI 4.0",      unitLabel: "U2 · Sistemas ciber-físicos",week: 8 },
  9:  { tag: "IIoT · EDGE",   unitLabel: "U2 · Sistemas ciber-físicos",week: 9 },
  10: { tag: "OPC UA",        unitLabel: "U3 · Convergencia IT/OT",    week: 10 },
  11: { tag: "MQTT · UNS",    unitLabel: "U3 · Convergencia IT/OT",    week: 11 },
  12: { tag: "GEMELO DIGITAL",unitLabel: "U3 · Convergencia IT/OT",    week: 12 },
  13: { tag: "DATOS · OEE",   unitLabel: "U3 · Convergencia IT/OT",    week: 13 },
  14: { tag: "CIBER OT I",    unitLabel: "U4 · Riesgo ciber-físico",   week: 14 },
  15: { tag: "CIBER OT II",   unitLabel: "U4 · Riesgo ciber-físico",   week: 15 },
  16: { tag: "CASO NEGOCIO",  unitLabel: "U4 · Riesgo ciber-físico",   week: 16 },
};

function metaFor(n, total) {
  return Object.assign({}, BASE, SESSIONS[n], { sessionNum: n, total });
}
module.exports = { BASE, SESSIONS, metaFor };
