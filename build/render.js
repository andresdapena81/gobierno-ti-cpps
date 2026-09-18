// Renderiza una o varias sesiones: node render.js 1 2 3   (o sin args = todas)
const { Deck } = require("./deck_lib");
const { metaFor } = require("./meta");

const OUT = "D:/GOBIERNO DE TI/presentaciones";
const TITLES = {
  1: "S01 - Fundamentos de Gobierno de TI",
  2: "S02 - ISO IEC 38500",
  3: "S03 - COBIT 2019 I",
  4: "S04 - COBIT 2019 II",
  5: "S05 - Valor Riesgo e ITIL 4",
  6: "S06 - Industria 4.0 y CPS",
  7: "S07 - ISA-95 y la piramide",
  8: "S08 - RAMI 4.0 y AAS",
  9: "S09 - IIoT Edge y Nube",
  10: "S10 - OPC UA y protocolos",
  11: "S11 - MQTT Sparkplug y UNS",
  12: "S12 - Gemelos digitales",
  13: "S13 - Gobierno de datos y OEE",
  14: "S14 - Ciberseguridad industrial I",
  15: "S15 - Ciberseguridad industrial II",
  16: "S16 - Caso de negocio y hoja de ruta",
};

async function renderOne(n) {
  const specs = require(`./sessions/s${String(n).padStart(2, "0")}`);
  const meta = metaFor(n, specs.length);
  const d = new Deck(meta);
  d.build(specs);
  const file = `${OUT}/${TITLES[n]}.pptx`;
  await d.save(file);
  console.log(`OK  S${String(n).padStart(2, "0")}  ${specs.length} slides  -> ${file}`);
}

(async () => {
  let list = process.argv.slice(2).map(Number).filter(Boolean);
  if (!list.length) list = Object.keys(TITLES).map(Number);
  for (const n of list) {
    try { await renderOne(n); }
    catch (e) { console.error(`ERR S${n}:`, e.message); process.exitCode = 1; }
  }
})();
