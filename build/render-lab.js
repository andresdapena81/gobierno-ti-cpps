// Renderiza el deck acompañante del laboratorio del gemelo digital.
// No es una de las 16 sesiones: es la guía para PRESENTAR el Lab 7 (S12).
//
//     node render-lab.js
//
const { Deck } = require("./deck_lib");
const { BASE } = require("./meta");

const OUT = "D:/GOBIERNO DE TI/presentaciones";
const ARCHIVO = "LAB - Gemelo digital (guia de presentacion)";

(async () => {
  const specs = require("./sessions/lab-gemelo");

  // Se cuelga de la S12 (Gemelos digitales, semana 12), que es donde vive el
  // laboratorio. `coverBadge` reemplaza el "SESIÓN NN / 16" de la portada,
  // porque este deck acompaña a una sesión en vez de ser una de ellas.
  const meta = Object.assign({}, BASE, {
    sessionNum: 12,
    tag: "LAB 7 · GEMELO DIGITAL",
    unitLabel: "U3 · Convergencia IT/OT",
    week: 12,
    coverBadge: "LAB 7 · DEMO",
    total: specs.length,
  });

  const d = new Deck(meta);
  d.build(specs);
  const file = `${OUT}/${ARCHIVO}.pptx`;
  await d.save(file);
  console.log(`OK  LAB  ${specs.length} slides  -> ${file}`);
})().catch((e) => {
  console.error("ERR:", e.message);
  process.exitCode = 1;
});
