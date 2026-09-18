// deck_lib.js — Sistema de diseño "brutalista terminal" para el curso
// Gobierno de TI y Sistemas Ciber-Físicos de Producción.
// Replica el formato de la muestra (S01 Hacking Ético): fondo negro,
// monoespaciada tipo terminal, acento lima, pie de página por slide.
// API declarativa: cada slide es un objeto {type, ...campos}.

const PptxGenJS = require("pptxgenjs");

// ---- Paleta (idéntica a la muestra) --------------------------------------
const C = {
  BG:    "0B0B0B", // fondo principal
  BG2:   "151515", // tarjeta
  BG3:   "1E1E1E", // tarjeta alterna
  BG4:   "101010", // panel muy oscuro
  LINE:  "333333", // bordes
  LINE2: "242424", // bordes sutiles
  INK:   "F4F4F4", // texto principal
  MUT:   "8C8C8C", // texto muted
  DIM:   "5A5A5A", // aún más tenue
  LIME:  "C6FF00", // acento primario  -> GOBIERNO / TI
  CYAN:  "27E5E5", // acento secundario -> OT / CIBER-FÍSICO
  RED:   "FF3B30", // alerta / riesgo
  AMBER: "FFB000", // advertencia
  GREEN: "22E06B", // ok / valor
  ORANGE:"FF6B35",
  PURPLE:"9D6BFF",
  DOT_R: "FF5F56", DOT_Y: "FFBD2E", DOT_G: "27C93F", // botones terminal
};
const ACCENTS = [C.LIME, C.CYAN, C.AMBER, C.GREEN, C.PURPLE, C.ORANGE];

// ---- Tipografías (seguras en Windows/Office) -----------------------------
const F = { DISPLAY: "Arial Black", MONO: "Courier New", BODY: "Arial" };

// ---- Geometría (LAYOUT_WIDE 13.333 x 7.5) --------------------------------
const PW = 13.333, PH = 7.5, MX = 0.55;
const CW = PW - 2 * MX;              // ancho de contenido
const KICK_Y = 0.40, HEAD_Y = 0.74, SUB_Y = 1.66;
const BODY_TOP = 1.95, BODY_BOT = 6.86;
const FOOT_Y = 6.98;

function shadow() { return { type: "outer", color: "000000", opacity: 0.55, blur: 7, offset: 3, angle: 90 }; }

// ==========================================================================
class Deck {
  constructor(meta) {
    this.meta = meta; // {code, program, sessionNum, total, unitLabel, week, tag, docente, inst, courseTitle}
    const p = new PptxGenJS();
    p.defineLayout({ name: "W", width: PW, height: PH });
    p.layout = "W";
    p.author = meta.docente || "Docente";
    p.company = meta.inst || "";
    p.title = meta.courseTitle || "";
    this.p = p;
    this._page = 0;
  }

  _bg(s, color) { s.background = { color: color || C.BG }; }

  _footer(s, page) {
    const tag = this.meta.tag || "";
    s.addText("GOBIERNO DE TI · CPPS", { x: MX, y: FOOT_Y, w: 4.5, h: 0.3, fontFace: F.MONO, fontSize: 8, color: C.DIM, align: "left", valign: "middle", margin: 0 });
    s.addText(`S${String(this.meta.sessionNum).padStart(2,"0")} · ${tag}`, { x: PW/2 - 3, y: FOOT_Y, w: 6, h: 0.3, fontFace: F.MONO, fontSize: 8, color: C.MUT, align: "center", valign: "middle", margin: 0 });
    s.addText(`${String(page).padStart(2,"0")} / ${String(this.meta.total).padStart(2,"0")}`, { x: PW - MX - 3, y: FOOT_Y, w: 3, h: 0.3, fontFace: F.MONO, fontSize: 8, color: C.MUT, align: "right", valign: "middle", margin: 0 });
  }

  // marco estándar de una slide de contenido: kicker + título + subtítulo
  _frame(s, kicker, title, sub) {
    if (kicker) s.addText(kicker.toUpperCase(), { x: MX, y: KICK_Y, w: CW, h: 0.3, fontFace: F.MONO, fontSize: 11, color: C.LIME, bold: true, align: "left", valign: "middle", charSpacing: 1, margin: 0 });
    if (title) {
      // tamaño adaptativo: los títulos largos se reducen para no envolver a dos líneas
      const L = title.length;
      const ts = L > 46 ? 24 : L > 40 ? 27 : L > 34 ? 30 : 33;
      s.addText(title.toUpperCase(), { x: MX, y: HEAD_Y, w: CW, h: 0.9, fontFace: F.DISPLAY, fontSize: ts, color: C.INK, align: "left", valign: "top", margin: 0, lineSpacingMultiple: 0.95 });
    }
    if (sub) s.addText(sub, { x: MX, y: SUB_Y, w: CW, h: 0.5, fontFace: F.BODY, fontSize: 13.5, color: C.MUT, align: "left", valign: "top", margin: 0 });
  }

  _slide() { this._page++; const s = this.p.addSlide(); this._bg(s); return s; }
  _notes(s, spec) { if (spec.notes) s.addNotes(spec.notes); }

  // ---- Router ------------------------------------------------------------
  add(spec) {
    const s = this._slide();
    // auto-numeración del kicker "// NN  ETIQUETA" en slides de contenido
    const NUMBERED = new Set(["agenda","stats","objectives","callouts","grid","concepts3","twocol","terminal","matrix","process","phase","compare","warning","keypoints","glossary","refs","quote"]);
    if (NUMBERED.has(spec.type)) {
      this._cnum = (this._cnum || 0) + 1;
      let label = spec.sec || spec.kicker || "";
      label = String(label).replace(/^\/\/\s*/, "").replace(/^\d+\s+/, "").trim();
      spec.kicker = `// ${String(this._cnum).padStart(2, "0")}  ${label.toUpperCase()}`;
    }
    const fn = this["_t_" + spec.type];
    if (!fn) throw new Error("Tipo de slide desconocido: " + spec.type);
    fn.call(this, s, spec);
    // pie: portada/sección/cierre lo dibujan aparte
    if (!["cover", "closing"].includes(spec.type)) this._footer(s, this._page);
    this._notes(s, spec);
    return s;
  }

  build(specs) { specs.forEach((sp) => this.add(sp)); return this; }
  async save(path) { await this.p.writeFile({ fileName: path }); return path; }

  // ======================================================================
  //  TIPOS DE SLIDE
  // ======================================================================

  // -- Portada -----------------------------------------------------------
  _t_cover(s, spec) {
    this._bg(s, C.BG);
    // franja binaria superior
    const bits = "01000111 01001111 01000010 01001001 01000101 01010010 01001110 01001111  01000100 01000101  01010100 01001001";
    s.addText(bits, { x: MX, y: 0.35, w: CW, h: 0.3, fontFace: F.MONO, fontSize: 9.5, color: C.LINE, align: "left", margin: 0 });
    s.addText(`${this.meta.code} · ${this.meta.program || "PREGRADO"}`, { x: MX, y: 1.15, w: 8, h: 0.35, fontFace: F.MONO, fontSize: 12, color: C.LIME, bold: true, charSpacing: 2, margin: 0 });
    s.addText(this.meta.coverBadge || `SESIÓN ${String(this.meta.sessionNum).padStart(2,"0")} / ${this.meta.totalSessions || 16}`, { x: PW - MX - 5, y: 1.15, w: 5, h: 0.35, fontFace: F.MONO, fontSize: 12, color: C.MUT, align: "right", charSpacing: 1, margin: 0 });
    // título grande
    s.addText(spec.title.toUpperCase(), { x: MX, y: 1.95, w: CW, h: 2.2, fontFace: F.DISPLAY, fontSize: 52, color: C.INK, align: "left", valign: "top", margin: 0, lineSpacingMultiple: 0.92 });
    // subtítulo con >
    s.addText([
      { text: "> ", options: { color: C.LIME, bold: true } },
      { text: spec.subtitle, options: { color: C.INK } },
    ], { x: MX, y: 4.35, w: CW, h: 0.8, fontFace: F.MONO, fontSize: 15, valign: "top", margin: 0, lineSpacingMultiple: 1.05 });
    // bloque de metadatos inferior
    s.addShape("line", { x: MX, y: 5.55, w: CW, h: 0, line: { color: C.LINE, width: 1 } });
    const rows = [
      ["DOCENTE", this.meta.docente || "—"],
      ["UNIDAD", `${this.meta.unitLabel || "—"}    ·    SEMANA ${this.meta.week || "—"}`],
      ["INSTITUCIÓN", this.meta.inst || "—"],
    ];
    let yy = 5.75;
    rows.forEach(([k, v]) => {
      s.addText(k, { x: MX, y: yy, w: 2.1, h: 0.32, fontFace: F.MONO, fontSize: 10, color: C.LIME, bold: true, valign: "middle", margin: 0 });
      s.addText(v, { x: MX + 2.15, y: yy, w: CW - 2.15, h: 0.32, fontFace: F.BODY, fontSize: 12, color: C.INK, valign: "middle", margin: 0 });
      yy += 0.42;
    });
    // pie de portada
    s.addText(`${this.meta.courseTitle}`, { x: MX, y: FOOT_Y, w: CW, h: 0.3, fontFace: F.MONO, fontSize: 8, color: C.DIM, align: "left", valign: "middle", margin: 0 });
  }

  // -- Divisor de sección ------------------------------------------------
  _t_section(s, spec) {
    this._bg(s, C.BG4);
    s.addText("SECCIÓN", { x: MX, y: 2.2, w: 6, h: 0.4, fontFace: F.MONO, fontSize: 14, color: C.LIME, bold: true, charSpacing: 3, margin: 0 });
    // número gigante a la derecha
    s.addText(String(spec.num).padStart(2, "0"), { x: PW - MX - 4.2, y: 1.2, w: 4.2, h: 4.2, fontFace: F.DISPLAY, fontSize: 200, color: C.BG2, align: "right", valign: "middle", margin: 0 });
    s.addText(spec.title.toUpperCase(), { x: MX, y: 2.65, w: CW - 1, h: 1.9, fontFace: F.DISPLAY, fontSize: 40, color: C.INK, valign: "top", margin: 0, lineSpacingMultiple: 0.96 });
    s.addText([
      { text: "> ", options: { color: C.LIME, bold: true } },
      { text: spec.sub || "", options: { color: C.MUT } },
    ], { x: MX, y: 4.75, w: CW, h: 0.6, fontFace: F.MONO, fontSize: 13, valign: "top", margin: 0 });
    this._footer(s, this._page);
  }

  // -- Agenda (A..F) -----------------------------------------------------
  _t_agenda(s, spec) {
    this._frame(s, spec.kicker || "// 01  INICIO", spec.title || "Agenda de la sesión", spec.sub);
    const items = spec.items.slice(0, 6);
    const letters = ["A", "B", "C", "D", "E", "F"];
    const colW = (CW - 0.5) / 2, rowH = 1.42, gap = 0.28;
    items.forEach((it, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = MX + col * (colW + 0.5), y = BODY_TOP + 0.05 + row * (rowH + gap);
      s.addShape("roundRect", { x, y, w: colW, h: rowH, rectRadius: 0.06, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      s.addText(letters[i], { x: x + 0.18, y: y + 0.18, w: 0.7, h: 0.7, fontFace: F.DISPLAY, fontSize: 26, color: C.LIME, align: "left", valign: "top", margin: 0 });
      s.addText(it.title, { x: x + 1.0, y: y + 0.22, w: colW - 1.2, h: 0.5, fontFace: F.BODY, fontSize: 14.5, bold: true, color: C.INK, valign: "top", margin: 0 });
      s.addText(it.desc, { x: x + 1.0, y: y + 0.72, w: colW - 1.2, h: 0.55, fontFace: F.BODY, fontSize: 10.5, color: C.MUT, valign: "top", margin: 0 });
    });
  }

  // -- Cifras (big stats + key/value) ------------------------------------
  _t_stats(s, spec) {
    this._frame(s, spec.kicker || "// 02  CURSO", spec.title || "La asignatura en cifras", spec.sub);
    const bs = spec.bigstats || [];
    const n = bs.length, cw = (CW - (n - 1) * 0.3) / n;
    bs.forEach((b, i) => {
      const x = MX + i * (cw + 0.3), y = BODY_TOP;
      s.addShape("roundRect", { x, y, w: cw, h: 1.5, rectRadius: 0.06, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      const fig = String(b.n);
      const nLines = fig.split("\n").length;
      const longest = Math.max.apply(null, fig.split("\n").map((t) => t.length));
      const byW = Math.floor((cw * 72) / (longest * 0.70));
      const byH = Math.floor((0.85 * 72) / (nLines * 1.35));
      const figFs = Math.max(16, Math.min(40, byW, byH));
      s.addText(fig, { x, y: y + 0.1, w: cw, h: 0.85, fontFace: F.DISPLAY, fontSize: figFs, color: b.color || C.LIME, align: "center", valign: "middle", margin: 0 });
      s.addText(b.label, { x, y: y + 0.98, w: cw, h: 0.4, fontFace: F.MONO, fontSize: 9.5, color: C.MUT, align: "center", valign: "middle", margin: 0 });
    });
    const kvs = spec.kvs || [];
    const kcw = (CW - 0.5) / 2, kh = 0.62, kgap = 0.16;
    kvs.forEach((kv, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = MX + col * (kcw + 0.5), y = BODY_TOP + 1.75 + row * (kh + kgap);
      s.addText(kv.k, { x, y, w: 3.0, h: kh, fontFace: F.MONO, fontSize: 10.5, color: C.LIME, bold: true, valign: "middle", margin: 0 });
      s.addText(kv.v, { x: x + 3.05, y, w: kcw - 3.05, h: kh, fontFace: F.BODY, fontSize: 12, color: C.INK, valign: "middle", margin: 0 });
    });
  }

  // -- Objetivos numerados -----------------------------------------------
  _t_objectives(s, spec) {
    this._frame(s, spec.kicker || "// 03  CURSO", spec.title || "Objetivos de la sesión", spec.sub);
    const items = spec.items;
    const h = Math.min(1.02, (BODY_BOT - BODY_TOP - (items.length - 1) * 0.18) / items.length);
    let y = BODY_TOP;
    items.forEach((it, i) => {
      s.addShape("roundRect", { x: MX, y, w: CW, h, rectRadius: 0.05, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      s.addText(String(i + 1).padStart(2, "0"), { x: MX + 0.2, y, w: 1.0, h, fontFace: F.DISPLAY, fontSize: 26, color: C.LIME, valign: "middle", align: "left", margin: 0 });
      s.addText([
        { text: (it.lead ? it.lead + "  " : ""), options: { bold: true, color: C.INK } },
        { text: it.rest || it, options: { color: C.INK } },
      ], { x: MX + 1.3, y, w: CW - 1.6, h, fontFace: F.BODY, fontSize: 13.5, valign: "middle", margin: 0 });
      y += h + 0.18;
    });
  }

  // -- Callouts (stats grandes + nota) -----------------------------------
  _t_callouts(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const bs = spec.stats || [];
    const n = bs.length, cw = (CW - (n - 1) * 0.3) / n;
    bs.forEach((b, i) => {
      const x = MX + i * (cw + 0.3), y = BODY_TOP;
      s.addShape("roundRect", { x, y, w: cw, h: 2.0, rectRadius: 0.06, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      // cifra con tamaño auto-ajustado: los valores largos (p. ej. RESPONSABILIDAD) se
      // reducen para caber en una línea en Arial Black dentro del ancho de la tarjeta.
      const fig = String(b.n);
      const nLines = fig.split("\n").length;
      const longest = Math.max.apply(null, fig.split("\n").map((t) => t.length));
      const byW = Math.floor(((cw - 0.3) * 72) / (longest * 0.80));  // 0.80: Arial Black es muy ancha; evita que una cifra de 1 línea se parta en 2
      const byH = Math.floor((0.95 * 72) / (nLines * 1.35));   // cabe en alto (multi-línea)
      const figFs = Math.max(15, Math.min(38, byW, byH));
      s.addText(fig, { x: x + 0.15, y: y + 0.2, w: cw - 0.3, h: 0.95, fontFace: F.DISPLAY, fontSize: figFs, color: b.color || C.LIME, align: "center", valign: "middle", margin: 0 });
      s.addText(b.label, { x: x + 0.2, y: y + 1.15, w: cw - 0.4, h: 0.75, fontFace: F.BODY, fontSize: 11, color: C.MUT, align: "center", valign: "top", margin: 0 });
    });
    if (spec.note) {
      const y = BODY_TOP + 2.3;
      s.addText(spec.note.title || "// LECTURA CLAVE", { x: MX, y, w: CW, h: 0.35, fontFace: F.MONO, fontSize: 11, color: C.LIME, bold: true, margin: 0 });
      s.addText(spec.note.body, { x: MX, y: y + 0.42, w: CW, h: 1.6, fontFace: F.BODY, fontSize: 13, color: C.INK, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    }
  }

  // -- Grid de tarjetas etiquetadas (2 o 3 col) --------------------------
  _t_grid(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    if (spec.lead) s.addText(spec.lead, { x: MX, y: SUB_Y + 0.02, w: CW, h: 0.5, fontFace: F.BODY, fontSize: 12.5, color: C.MUT, valign: "top", margin: 0 });
    const cards = spec.cards;
    const cols = spec.cols || 3;
    const rows = Math.ceil(cards.length / cols);
    const topY = spec.lead ? BODY_TOP + 0.15 : BODY_TOP;
    const gap = 0.28;
    const cw = (CW - (cols - 1) * gap) / cols;
    const ch = Math.min(1.72, (BODY_BOT - topY - (rows - 1) * gap) / rows);
    cards.forEach((c, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const x = MX + col * (cw + gap), y = topY + row * (ch + gap);
      const ac = c.color || ACCENTS[i % ACCENTS.length];
      s.addShape("roundRect", { x, y, w: cw, h: ch, rectRadius: 0.06, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 }, shadow: shadow() });
      s.addText(c.tag.toUpperCase(), { x: x + 0.2, y: y + 0.16, w: cw - 0.4, h: 0.45, fontFace: F.DISPLAY, fontSize: c.tag.length > 14 ? 13 : 16, color: ac, valign: "top", margin: 0 });
      s.addText(c.desc, { x: x + 0.2, y: y + 0.66, w: cw - 0.4, h: ch - 0.8, fontFace: F.BODY, fontSize: 11, color: C.INK, valign: "top", margin: 0, lineSpacingMultiple: 1.05 });
    });
  }

  // -- 3 conceptos con ejemplo (DATO/INFO/ACTIVO) ------------------------
  _t_concepts3(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const items = spec.items;
    const n = items.length, gap = 0.3;
    const cw = (CW - (n - 1) * gap) / n;
    items.forEach((it, i) => {
      const x = MX + i * (cw + gap), y = BODY_TOP;
      const ac = it.color || ACCENTS[i % ACCENTS.length];
      s.addShape("roundRect", { x, y, w: cw, h: 2.5, rectRadius: 0.06, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 }, shadow: shadow() });
      s.addText(it.k.toUpperCase(), { x: x + 0.2, y: y + 0.2, w: cw - 0.4, h: 0.5, fontFace: F.DISPLAY, fontSize: 17, color: ac, valign: "top", margin: 0 });
      s.addText(it.desc, { x: x + 0.2, y: y + 0.78, w: cw - 0.4, h: 1.1, fontFace: F.BODY, fontSize: 11.5, color: C.INK, valign: "top", margin: 0, lineSpacingMultiple: 1.05 });
      if (it.ex) s.addText(it.ex, { x: x + 0.2, y: y + 1.95, w: cw - 0.4, h: 0.5, fontFace: F.MONO, fontSize: 9.5, color: C.MUT, valign: "top", margin: 0 });
    });
    if (spec.note) s.addText(spec.note, { x: MX, y: BODY_TOP + 2.75, w: CW, h: 1.2, fontFace: F.BODY, fontSize: 12.5, color: C.INK, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
  }

  // -- Dos columnas de listas (mecanismos/amenazas) ----------------------
  _t_twocol(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const colW = (CW - 0.5) / 2;
    const cols = [
      { title: spec.leftTitle, items: spec.leftItems, color: spec.leftColor || C.GREEN, x: MX },
      { title: spec.rightTitle, items: spec.rightItems, color: spec.rightColor || C.RED, x: MX + colW + 0.5 },
    ];
    const topY = BODY_TOP, h = BODY_BOT - topY;
    cols.forEach((col) => {
      s.addShape("roundRect", { x: col.x, y: topY, w: colW, h, rectRadius: 0.05, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      s.addText(col.title.toUpperCase(), { x: col.x + 0.22, y: topY + 0.18, w: colW - 0.44, h: 0.45, fontFace: F.DISPLAY, fontSize: 14, color: col.color, valign: "top", margin: 0 });
      const bullets = col.items.map((t, k) => ({ text: t, options: { bullet: { code: "2013" }, color: C.INK, breakLine: k < col.items.length - 1, paraSpaceAfter: 7 } }));
      s.addText(bullets, { x: col.x + 0.22, y: topY + 0.72, w: colW - 0.44, h: h - 0.9, fontFace: F.BODY, fontSize: 12, valign: "top", margin: 0 });
    });
  }

  // -- Bloque terminal ---------------------------------------------------
  _t_terminal(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const y = BODY_TOP, h = spec.note ? 3.05 : 4.4;
    s.addShape("roundRect", { x: MX, y, w: CW, h, rectRadius: 0.05, fill: { color: "0A0A0A" }, line: { color: C.LINE, width: 1 }, shadow: shadow() });
    // barra de título con dots
    s.addShape("rect", { x: MX, y, w: CW, h: 0.4, fill: { color: C.BG3 }, line: { color: C.LINE, width: 1 } });
    [C.DOT_R, C.DOT_Y, C.DOT_G].forEach((c, i) => s.addShape("ellipse", { x: MX + 0.22 + i * 0.28, y: y + 0.14, w: 0.13, h: 0.13, fill: { color: c }, line: { type: "none" } }));
    s.addText(spec.term || "root@planta:~#", { x: MX + 1.3, y, w: CW - 1.5, h: 0.4, fontFace: F.MONO, fontSize: 9.5, color: C.MUT, valign: "middle", margin: 0 });
    const lines = spec.lines.map((ln) => {
      const o = typeof ln === "string" ? { t: ln } : ln;
      let color = C.INK;
      if (o.cls === "cmd") color = C.LIME;
      else if (o.cls === "out") color = C.MUT;
      else if (o.cls === "ok") color = C.GREEN;
      else if (o.cls === "err") color = C.RED;
      else if (o.cls === "cmt") color = C.DIM;
      else if (o.cls === "hi") color = C.CYAN;
      return { text: o.t || " ", options: { color, breakLine: true, fontSize: o.sz || 11.5 } };
    });
    s.addText(lines, { x: MX + 0.3, y: y + 0.55, w: CW - 0.6, h: h - 0.7, fontFace: F.MONO, valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
    if (spec.note) {
      const ny = y + h + 0.22;
      s.addText([
        { text: (spec.note.tag || "NOTA") + "  ", options: { color: C.LIME, bold: true } },
        { text: spec.note.body, options: { color: C.INK } },
      ], { x: MX, y: ny, w: CW, h: 1.2, fontFace: F.BODY, fontSize: 12.5, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    }
  }

  // -- Matriz / tabla ----------------------------------------------------
  _t_matrix(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const cols = spec.cols;        // encabezados
    const rows = spec.rows;        // filas: [ [c0, c1, ...], ... ]  celda = string o {t,color}
    const nC = cols.length;
    const firstW = spec.firstW || 3.6;
    const restW = (CW - firstW) / (nC - 1);
    const topY = BODY_TOP;
    const rowH = Math.min(0.62, (BODY_BOT - topY - 0.5) / rows.length);
    // encabezado
    const hx = (i) => (i === 0 ? MX : MX + firstW + (i - 1) * restW);
    const cwOf = (i) => (i === 0 ? firstW : restW);
    cols.forEach((c, i) => {
      s.addShape("rect", { x: hx(i), y: topY, w: cwOf(i), h: 0.5, fill: { color: C.BG3 }, line: { color: C.LINE, width: 1 } });
      s.addText(c.toUpperCase(), { x: hx(i) + 0.08, y: topY, w: cwOf(i) - 0.16, h: 0.5, fontFace: F.MONO, fontSize: 10.5, bold: true, color: C.LIME, align: i === 0 ? "left" : "center", valign: "middle", margin: 0 });
    });
    rows.forEach((r, ri) => {
      const y = topY + 0.5 + ri * rowH;
      r.forEach((cell, ci) => {
        const o = typeof cell === "string" ? { t: cell } : cell;
        s.addShape("rect", { x: hx(ci), y, w: cwOf(ci), h: rowH, fill: { color: ri % 2 ? C.BG : C.BG2 }, line: { color: C.LINE2, width: 1 } });
        s.addText(o.t, { x: hx(ci) + 0.08, y, w: cwOf(ci) - 0.16, h: rowH, fontFace: ci === 0 ? F.BODY : F.MONO, fontSize: ci === 0 ? 11.5 : 11, bold: ci === 0, color: o.color || (ci === 0 ? C.INK : C.MUT), align: ci === 0 ? "left" : "center", valign: "middle", margin: 0 });
      });
    });
  }

  // -- Proceso numerado (fila o grid) ------------------------------------
  _t_process(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const steps = spec.steps;
    const cols = spec.cols || (steps.length <= 4 ? steps.length : Math.ceil(steps.length / 2));
    const rows = Math.ceil(steps.length / cols);
    const gap = 0.25;
    const cw = (CW - (cols - 1) * gap) / cols;
    const topY = BODY_TOP + (spec.lead ? 0.5 : 0);
    if (spec.lead) s.addText(spec.lead, { x: MX, y: SUB_Y + 0.02, w: CW, h: 0.5, fontFace: F.BODY, fontSize: 12.5, color: C.MUT, valign: "top", margin: 0 });
    const ch = Math.min(1.7, (BODY_BOT - topY - (rows - 1) * gap) / rows);
    steps.forEach((st, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const x = MX + col * (cw + gap), y = topY + row * (ch + gap);
      const ac = st.color || C.LIME;
      s.addShape("roundRect", { x, y, w: cw, h: ch, rectRadius: 0.06, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      s.addText(String(st.n || i + 1).padStart(2, "0"), { x: x + 0.16, y: y + 0.12, w: 1.0, h: 0.55, fontFace: F.DISPLAY, fontSize: 22, color: ac, valign: "top", margin: 0 });
      s.addText(st.title.toUpperCase(), { x: x + 0.16, y: y + 0.66, w: cw - 0.32, h: 0.5, fontFace: F.MONO, fontSize: 11, bold: true, color: C.INK, valign: "top", margin: 0 });
      if (st.desc) s.addText(st.desc, { x: x + 0.16, y: y + 1.06, w: cw - 0.32, h: ch - 1.15, fontFace: F.BODY, fontSize: 10, color: C.MUT, valign: "top", margin: 0, lineSpacingMultiple: 1.02 });
    });
  }

  // -- Detalle de fase / componente --------------------------------------
  _t_phase(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const y = BODY_TOP;
    s.addShape("roundRect", { x: MX, y, w: CW, h: 1.4, rectRadius: 0.06, fill: { color: C.BG3 }, line: { color: C.LINE, width: 1 } });
    s.addText(spec.badge || "", { x: MX + 0.25, y: y + 0.2, w: 3, h: 0.4, fontFace: F.MONO, fontSize: 12, color: C.LIME, bold: true, valign: "top", margin: 0 });
    s.addText(spec.name.toUpperCase(), { x: MX + 0.25, y: y + 0.55, w: CW - 0.5, h: 0.8, fontFace: F.DISPLAY, fontSize: 26, color: C.INK, valign: "top", margin: 0 });
    const y2 = y + 1.65;
    s.addText(spec.whatTag || "// QUÉ SE HACE", { x: MX, y: y2, w: CW, h: 0.35, fontFace: F.MONO, fontSize: 11, color: C.LIME, bold: true, margin: 0 });
    s.addText(spec.what, { x: MX, y: y2 + 0.4, w: CW, h: 1.4, fontFace: F.BODY, fontSize: 13, color: C.INK, valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
    // dos cajas inferiores
    const by = BODY_BOT - 1.0, bw = (CW - 0.5) / 2;
    const boxes = [
      { t: spec.leftTag || "HERRAMIENTAS / MARCOS", v: spec.tools || "", x: MX, c: C.CYAN },
      { t: spec.rightTag || "SE APLICA EN", v: spec.seen || "", x: MX + bw + 0.5, c: C.AMBER },
    ];
    boxes.forEach((b) => {
      s.addShape("roundRect", { x: b.x, y: by, w: bw, h: 1.0, rectRadius: 0.05, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      s.addText(b.t, { x: b.x + 0.2, y: by + 0.14, w: bw - 0.4, h: 0.35, fontFace: F.MONO, fontSize: 9.5, color: b.c, bold: true, margin: 0 });
      s.addText(b.v, { x: b.x + 0.2, y: by + 0.46, w: bw - 0.4, h: 0.5, fontFace: F.BODY, fontSize: 12, color: C.INK, valign: "top", margin: 0 });
    });
  }

  // -- Comparación dos columnas (con títulos coloreados) -----------------
  _t_compare(s, spec) {
    this._frame(s, spec.kicker, spec.title, spec.sub);
    const colW = (CW - 0.5) / 2;
    const topY = BODY_TOP, h = BODY_BOT - topY - (spec.foot ? 0.55 : 0);
    const cols = [
      { title: spec.leftTitle, items: spec.leftItems, color: spec.leftColor || C.GREEN, x: MX, mark: "+" },
      { title: spec.rightTitle, items: spec.rightItems, color: spec.rightColor || C.RED, x: MX + colW + 0.5, mark: "−" },
    ];
    cols.forEach((col) => {
      s.addShape("roundRect", { x: col.x, y: topY, w: colW, h, rectRadius: 0.05, fill: { color: C.BG2 }, line: { color: col.color, width: 1.25 } });
      s.addText(col.title.toUpperCase(), { x: col.x + 0.22, y: topY + 0.18, w: colW - 0.44, h: 0.5, fontFace: F.DISPLAY, fontSize: 15, color: col.color, valign: "top", margin: 0 });
      const bullets = col.items.map((t, k) => ({ text: t, options: { bullet: { characterCode: col.mark === "+" ? "002B" : "2212" }, color: C.INK, breakLine: k < col.items.length - 1, paraSpaceAfter: 8 } }));
      s.addText(bullets, { x: col.x + 0.22, y: topY + 0.78, w: colW - 0.44, h: h - 0.95, fontFace: F.BODY, fontSize: 12, valign: "top", margin: 0 });
    });
    if (spec.foot) s.addText([{ text: "// ", options: { color: C.LIME, bold: true } }, { text: spec.foot, options: { color: C.MUT } }], { x: MX, y: BODY_BOT - 0.45, w: CW, h: 0.4, fontFace: F.MONO, fontSize: 11, valign: "middle", margin: 0 });
  }

  // -- Advertencia / mensaje solemne -------------------------------------
  _t_warning(s, spec) {
    this._bg(s, C.BG);
    this._frame(s, spec.kicker || "// CLAVE", "", "");
    s.addShape("roundRect", { x: MX, y: 1.7, w: CW, h: 4.6, rectRadius: 0.06, fill: { color: "160B0B" }, line: { color: C.RED, width: 1.5 } });
    s.addText([{ text: "⚠  ", options: { color: C.AMBER } }, { text: (spec.title || "ADVERTENCIA").toUpperCase(), options: { color: C.INK } }], { x: MX + 0.4, y: 2.05, w: CW - 0.8, h: 0.7, fontFace: F.DISPLAY, fontSize: 26, valign: "top", margin: 0 });
    const paras = (spec.paras || []).map((p, k) => ({ text: p, options: { color: C.INK, breakLine: true, paraSpaceAfter: 12 } }));
    s.addText(paras, { x: MX + 0.4, y: 2.95, w: CW - 0.8, h: 2.2, fontFace: F.BODY, fontSize: 14, valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
    if (spec.quote) s.addText([{ text: "> ", options: { color: C.LIME, bold: true } }, { text: spec.quote, options: { color: C.LIME, italic: true } }], { x: MX + 0.4, y: 5.5, w: CW - 0.8, h: 0.7, fontFace: F.MONO, fontSize: 13, valign: "top", margin: 0 });
  }

  // -- Puntos clave ------------------------------------------------------
  _t_keypoints(s, spec) {
    this._frame(s, spec.kicker || "// CIERRE", spec.title || "Puntos clave", spec.sub);
    const items = spec.items;
    const h = Math.min(0.92, (BODY_BOT - BODY_TOP - (items.length - 1) * 0.16) / items.length);
    let y = BODY_TOP;
    items.forEach((it) => {
      s.addShape("roundRect", { x: MX, y, w: CW, h, rectRadius: 0.05, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 } });
      s.addText(it.label.toUpperCase(), { x: MX + 0.25, y, w: 3.8, h, fontFace: F.MONO, fontSize: 12, bold: true, color: C.LIME, valign: "middle", margin: 0 });
      s.addText(it.desc, { x: MX + 4.1, y, w: CW - 4.35, h, fontFace: F.BODY, fontSize: 12.5, color: C.INK, valign: "middle", margin: 0 });
      y += h + 0.16;
    });
  }

  // -- Glosario ----------------------------------------------------------
  _t_glossary(s, spec) {
    this._frame(s, spec.kicker || "// CIERRE", spec.title || "Glosario esencial", spec.sub);
    const pairs = spec.pairs;
    const cols = 2, gap = 0.5;
    const cw = (CW - gap) / cols;
    const rows = Math.ceil(pairs.length / cols);
    const rowH = Math.min(0.86, (BODY_BOT - BODY_TOP - (rows - 1) * 0.14) / rows);
    pairs.forEach((p, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const x = MX + col * (cw + gap), y = BODY_TOP + row * (rowH + 0.14);
      s.addShape("roundRect", { x, y, w: cw, h: rowH, rectRadius: 0.04, fill: { color: C.BG2 }, line: { color: C.LINE2, width: 1 } });
      s.addText(p.t, { x: x + 0.18, y: y + 0.08, w: cw - 0.36, h: 0.34, fontFace: F.MONO, fontSize: 12, bold: true, color: C.CYAN, valign: "top", margin: 0 });
      s.addText(p.d, { x: x + 0.18, y: y + 0.42, w: cw - 0.36, h: rowH - 0.46, fontFace: F.BODY, fontSize: 10.5, color: C.MUT, valign: "top", margin: 0 });
    });
  }

  // -- Referencias -------------------------------------------------------
  //  Items: string  ó  { t, url, acc:"libre"|"pago" }. Si trae url, se dibuja
  //  una segunda línea con el enlace clicable (mono, cian). Máx. ~7 items.
  _t_refs(s, spec) {
    this._frame(s, spec.kicker || "// CIERRE", spec.title || "Referencias y recursos", spec.sub || "Toca el enlace para abrir la fuente · libre = acceso gratuito · de pago = compra o biblioteca");
    s.addShape("roundRect", { x: MX, y: BODY_TOP, w: CW, h: BODY_BOT - BODY_TOP, rectRadius: 0.05, fill: { color: C.BG2 }, line: { color: C.LINE, width: 1 }, shadow: shadow() });
    const list = spec.items;
    const runs = [];
    list.forEach((it, k) => {
      const o = typeof it === "string" ? { t: it } : it;
      const last = k === list.length - 1;
      // línea del título (con viñeta) + etiqueta de acceso
      runs.push({ text: o.t, options: { bullet: { code: "2013" }, color: C.INK, fontFace: F.BODY, fontSize: 11.5, bold: false, breakLine: !(o.acc), paraSpaceAfter: o.url ? 1 : (last ? 0 : 7) } });
      if (o.acc) runs.push({ text: "   · " + (o.acc === "pago" ? "de pago" : "libre"), options: { color: o.acc === "pago" ? C.AMBER : C.GREEN, fontFace: F.MONO, fontSize: 8.5, bold: true, breakLine: true, paraSpaceAfter: o.url ? 1 : (last ? 0 : 7) } });
      if (o.url) runs.push({ text: o.url, options: { color: C.CYAN, fontFace: F.MONO, fontSize: 8.5, hyperlink: { url: o.url }, breakLine: true, paraSpaceAfter: last ? 0 : 7 } });
    });
    s.addText(runs, { x: MX + 0.35, y: BODY_TOP + 0.22, w: CW - 0.7, h: BODY_BOT - BODY_TOP - 0.4, valign: "top", margin: 0, lineSpacingMultiple: 1.02 });
  }

  // -- Cita / afirmación grande ------------------------------------------
  _t_quote(s, spec) {
    this._bg(s, C.BG4);
    this._frame(s, spec.kicker, "", "");
    s.addText([{ text: "“", options: { color: C.LIME } }, { text: spec.text, options: { color: C.INK } }, { text: "”", options: { color: C.LIME } }], { x: 1.1, y: 2.1, w: PW - 2.2, h: 3.0, fontFace: F.DISPLAY, fontSize: 28, align: "left", valign: "middle", margin: 0, lineSpacingMultiple: 1.05 });
    if (spec.cite) s.addText("— " + spec.cite, { x: 1.1, y: 5.3, w: PW - 2.2, h: 0.5, fontFace: F.MONO, fontSize: 12, color: C.MUT, margin: 0 });
  }

  // -- Cierre ------------------------------------------------------------
  _t_closing(s, spec) {
    this._bg(s, C.BG);
    s.addText(`FIN SESIÓN ${String(this.meta.sessionNum).padStart(2,"0")}`, { x: MX, y: 1.3, w: CW, h: 0.6, fontFace: F.MONO, fontSize: 15, color: C.MUT, charSpacing: 2, margin: 0 });
    if (spec.nextNum) {
      s.addText("PRÓXIMA", { x: MX, y: 2.2, w: CW, h: 0.5, fontFace: F.MONO, fontSize: 13, color: C.LIME, bold: true, charSpacing: 2, margin: 0 });
      s.addText(`SESIÓN ${String(spec.nextNum).padStart(2,"0")}`, { x: MX, y: 2.6, w: CW, h: 1.3, fontFace: F.DISPLAY, fontSize: 46, color: C.INK, valign: "top", margin: 0 });
      s.addText([{ text: "> ", options: { color: C.LIME, bold: true } }, { text: spec.nextTitle || "", options: { color: C.INK } }], { x: MX, y: 4.0, w: CW, h: 0.6, fontFace: F.MONO, fontSize: 15, valign: "top", margin: 0 });
      if (spec.nextDesc) s.addText(spec.nextDesc, { x: MX, y: 4.55, w: CW, h: 0.9, fontFace: F.BODY, fontSize: 13, color: C.MUT, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    } else {
      s.addText("CURSO COMPLETO", { x: MX, y: 2.6, w: CW, h: 1.3, fontFace: F.DISPLAY, fontSize: 46, color: C.INK, valign: "top", margin: 0 });
    }
    s.addText(spec.prompt || "root@planta:~# _", { x: MX, y: 5.8, w: CW, h: 0.5, fontFace: F.MONO, fontSize: 14, color: C.LIME, margin: 0 });
    this._footer(s, this._page);
  }
}

module.exports = { Deck, C, F, ACCENTS };
