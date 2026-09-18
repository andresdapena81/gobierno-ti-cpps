// Chequeo heurístico de desbordes de texto en un deck.
// No sustituye la revisión visual, pero atrapa los casos evidentes:
// títulos, celdas de matriz, tarjetas de grid y líneas de terminal que
// exceden el ancho que su tipo de slide puede alojar cómodamente.
//
//     node _chequeo_desborde.js sessions/lab-gemelo.js
//
const ruta = process.argv[2] || "sessions/lab-gemelo.js";
const specs = require("./" + ruta.replace(/^\.\//, ""));

// ---- Geometría real de deck_lib.js --------------------------------------
const PW = 13.333, MX = 0.55;
const CW = PW - 2 * MX;            // 12.233" de contenido

// Ancho medio de carácter, en pulgadas, por fuente y tamaño.
// Courier New es monoespaciada: exactamente 0.6 em.
// Arial ronda 0.55 em en minúsculas; Arial Black, 0.72 em en versales.
const anchoChar = (fuente, pt) =>
  (pt / 72) * (fuente === "mono" ? 0.6 : fuente === "black" ? 0.72 : 0.55);

// Cuántos caracteres caben en `ancho` pulgadas.
const capacidad = (ancho, fuente, pt) => Math.floor(ancho / anchoChar(fuente, pt));

// Límites de una sola línea; los bloques de texto que sí pueden envolver
// se controlan por longitud total contra el alto disponible.
const LIM = {
  titulo: 52,        // _frame reduce a 24pt por encima de 46 caracteres
  what: 430,         // cuerpo de `phase`, envuelve
  cardDesc: 145,     // grid de 2 columnas, envuelve
  cardTag: 28,
  stepDesc: 80,
  kpDesc: 95,
  calloutLabel: 95,
  colItem: 58,       // twocol / compare
  agendaDesc: 76,
};

const problemas = [];
const avisar = (n, tipo, msg) => problemas.push(`  slide ${String(n).padStart(2, "0")}  [${tipo}]  ${msg}`);

specs.forEach((x, i) => {
  const n = i + 1;
  const t = x.type;

  if (x.title && x.title.length > LIM.titulo)
    avisar(n, t, `título de ${x.title.length}: "${x.title}"`);

  if (x.what && x.what.length > LIM.what)
    avisar(n, t, `cuerpo de phase de ${x.what.length} caracteres`);

  // La capacidad de una tarjeta escala con su ancho: a menos columnas, más texto cabe.
  const colsGrid = x.cols || 3;
  const capCardDesc = Math.round((LIM.cardDesc * 3) / colsGrid);
  (x.cards || []).forEach((c) => {
    if (c.desc.length > capCardDesc) avisar(n, t, `card "${c.tag}" desc de ${c.desc.length} (cap ${capCardDesc} a ${colsGrid} col)`);
    if (c.tag.length > LIM.cardTag) avisar(n, t, `tag largo: "${c.tag}"`);
  });

  // `matrix`: el ancho de cada columna depende de firstW, así que la
  // capacidad se calcula, no se asume. La primera columna va en Arial
  // bold 11.5pt; el resto, en Courier New 11pt.
  if (t === "matrix" && x.rows) {
    const nC = x.cols.length;
    const firstW = x.firstW || 3.6;
    const restW = (CW - firstW) / (nC - 1);
    const capPrimera = capacidad(firstW - 0.16, "body", 11.5);
    const capResto = capacidad(restW - 0.16, "mono", 11);
    const capCabecera = capacidad(restW - 0.16, "mono", 10.5);

    x.cols.forEach((c, ci) => {
      const cap = ci === 0 ? capacidad(firstW - 0.16, "mono", 10.5) : capCabecera;
      if (c.length > cap) avisar(n, t, `encabezado "${c}" (${c.length}) excede ${cap}`);
    });

    x.rows.forEach((fila) => {
      fila.forEach((cel, ci) => {
        const txt = typeof cel === "string" ? cel : cel.t;
        const cap = ci === 0 ? capPrimera : capResto;
        if (txt.length > cap) avisar(n, t, `celda "${txt}" (${txt.length}) excede ${cap} en col ${ci}`);
      });
    });
  }

  (x.steps || []).forEach((s) => {
    if (s.desc && s.desc.length > LIM.stepDesc)
      avisar(n, t, `paso "${s.title}" desc de ${s.desc.length}`);
  });

  if (t === "keypoints" || t === "objectives") {
    (x.items || []).forEach((it) => {
      const d = it.desc || it.rest || "";
      if (d.length > LIM.kpDesc) avisar(n, t, `item desc de ${d.length}`);
    });
  }

  if (t === "agenda") {
    (x.items || []).forEach((it) => {
      if (it.desc.length > LIM.agendaDesc) avisar(n, t, `agenda desc de ${it.desc.length}`);
    });
  }

  // `callouts` y `stats`: la cifra va en Arial Black 38pt (o 44 en stats),
  // centrada, en una caja de una sola línea. Es donde más fácil se desborda.
  // La cifra se auto-ajusta (Arial Black, hasta un mínimo de 16 pt en callouts /
  // 18 pt en stats). Solo se avisa si NI SIQUIERA al tamaño mínimo cabe en una línea.
  const lineaMasLarga = (v) => Math.max.apply(null, String(v).split("\n").map((s) => s.length));
  if (x.stats) {
    const cw = (CW - (x.stats.length - 1) * 0.3) / x.stats.length;
    const cap = capacidad(cw - 0.3, "black", 16);
    x.stats.forEach((s) => {
      if (s.label.length > LIM.calloutLabel) avisar(n, t, `label de ${s.label.length}`);
      const L = lineaMasLarga(s.n);
      if (L > cap) avisar(n, t, `cifra "${String(s.n)}" (${L}) excede ${cap} aun a 16pt`);
    });
  }
  if (x.bigstats) {
    const cw = (CW - (x.bigstats.length - 1) * 0.3) / x.bigstats.length;
    const cap = capacidad(cw, "black", 18);
    x.bigstats.forEach((s) => {
      const L = lineaMasLarga(s.n);
      if (L > cap) avisar(n, t, `bigstat "${String(s.n)}" (${L}) excede ${cap} aun a 18pt`);
    });
  }

  // `terminal`: Courier New 11.5pt en CW - 0.6".
  if (x.lines) {
    const cap = capacidad(CW - 0.6, "mono", 11.5);
    x.lines.forEach((l) => {
      const txt = typeof l === "string" ? l : l.t;
      const pt = (typeof l === "object" && l.sz) || 11.5;
      const capL = capacidad(CW - 0.6, "mono", pt);
      if (txt.length > capL) avisar(n, t, `línea de ${txt.length} excede ${capL}: "${txt.slice(0, 42)}…"`);
    });
  }

  [...(x.leftItems || []), ...(x.rightItems || [])].forEach((it) => {
    if (it.length > LIM.colItem) avisar(n, t, `item de columna de ${it.length}: "${it}"`);
  });

  (x.pairs || []).forEach((p) => {
    if (p.d.length > 88) avisar(n, t, `glosario "${p.t}" de ${p.d.length}`);
  });
});

console.log(`\n${ruta} — ${specs.length} slides`);
if (!problemas.length) console.log("  Sin desbordes detectados.\n");
else {
  console.log(`  ${problemas.length} avisos:\n`);
  problemas.forEach((p) => console.log(p));
  console.log();
}
