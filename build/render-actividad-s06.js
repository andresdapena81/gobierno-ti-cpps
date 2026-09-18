// Renderiza la PPTX de la Actividad autoguiada de la Sesión 6.
const { Deck } = require("./deck_lib");
const specs = require("./sessions/actividad-s06");

const meta = {
  code: "8 50155-3M",
  program: "ACTIVIDAD EN CLASE",
  sessionNum: 6,
  totalSessions: 16,
  total: specs.length,
  unitLabel: "U2 · Sistemas ciber-físicos",
  week: 6,
  tag: "ACTIVIDAD 4.0",
  docente: "Jorge Andrés Dapena — MSc.",
  inst: "Universidad de San Buenaventura — Medellín (Bello)",
  courseTitle: "GOBIERNO DE TI Y SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN · 2026-2",
  coverBadge: "ACTIVIDAD · SESIÓN 06",
};

const out = "D:/GOBIERNO DE TI/ejercicios/S06 - Actividad (PPTX) - Diagnostico 4.0.pptx";
const d = new Deck(meta);
d.build(specs);
d.save(out).then(() => console.log(`OK  Actividad S06  ${specs.length} slides  -> ${out}`)).catch((e) => { console.error("ERR", e); process.exit(1); });
