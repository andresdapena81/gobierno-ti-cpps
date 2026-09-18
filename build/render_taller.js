// Renderiza la PPTX del Taller S01 — Construye tu empresa.
const { Deck } = require("./deck_lib");
const specs = require("./sessions/taller01");

const meta = {
  code: "8 50155-3M",
  program: "TALLER PRÁCTICO",
  sessionNum: 1,
  totalSessions: 16,
  total: specs.length,
  unitLabel: "U1 · Proyecto integrador",
  week: 1,
  tag: "TALLER · EMPRESA",
  docente: "Jorge Andrés Dapena — MSc.",
  inst: "Universidad de San Buenaventura — Medellín (Bello)",
  courseTitle: "GOBIERNO DE TI Y SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN · 2026-2",
  coverBadge: "TALLER · SESIÓN 01",
};

const out = "D:/GOBIERNO DE TI/ejercicios/S01 - Taller (PPTX) - Construye tu empresa.pptx";
const d = new Deck(meta);
d.build(specs);
d.save(out).then(() => console.log(`OK  Taller S01  ${specs.length} slides  -> ${out}`)).catch((e) => { console.error("ERR", e); process.exit(1); });
