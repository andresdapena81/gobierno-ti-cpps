# -*- coding: utf-8 -*-
# Genera las 16 guías de ejercicios (PDF) del curso.
# Tema imprimible: fondo claro, banda oscura de encabezado, acento lima, mono para código.
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
                                Table, TableStyle, ListFlowable, ListItem, KeepTogether)
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas

from exercises_data import SESSIONS, COURSE

OUT = r"D:/GOBIERNO DE TI/ejercicios"
os.makedirs(OUT, exist_ok=True)

# ---- Paleta (identidad del curso, versión imprimible) ----
INK    = colors.HexColor("#151515")
MUT    = colors.HexColor("#5A5A5A")
LIME   = colors.HexColor("#5B8A00")   # lima oscurecida para legibilidad en papel
LIMEBG = colors.HexColor("#EAF3D0")
DARK   = colors.HexColor("#0B0B0B")
CYAN   = colors.HexColor("#0E7C8B")
RED    = colors.HexColor("#B3261E")
LINE   = colors.HexColor("#D6D6D6")
BG2    = colors.HexColor("#F4F6EE")

MONO = "Courier-Bold"
MONOR = "Courier"
BODY = "Helvetica"
BOLD = "Helvetica-Bold"

# ---- Estilos ----
def styles():
    return {
        "kicker": ParagraphStyle("kicker", fontName=MONO, fontSize=8.5, textColor=LIME, spaceAfter=2, leading=11),
        "h1":     ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=19, textColor=INK, leading=22, spaceAfter=2),
        "h2":     ParagraphStyle("h2", fontName=MONO, fontSize=11.5, textColor=DARK, leading=15, spaceBefore=12, spaceAfter=5),
        "body":   ParagraphStyle("body", fontName=BODY, fontSize=10, textColor=INK, leading=14, spaceAfter=3),
        "muted":  ParagraphStyle("muted", fontName=BODY, fontSize=9, textColor=MUT, leading=12),
        "li":     ParagraphStyle("li", fontName=BODY, fontSize=10, textColor=INK, leading=14, spaceAfter=2),
        "step":   ParagraphStyle("step", fontName=BODY, fontSize=10, textColor=INK, leading=14, spaceAfter=1),
        "code":   ParagraphStyle("code", fontName=MONOR, fontSize=8.5, textColor=colors.HexColor("#E8E8E8"), leading=12, backColor=DARK, borderPadding=6, leftIndent=2),
        "cell":   ParagraphStyle("cell", fontName=BODY, fontSize=9, textColor=INK, leading=12),
        "cellb":  ParagraphStyle("cellb", fontName=BOLD, fontSize=9, textColor=INK, leading=12),
        "cellh":  ParagraphStyle("cellh", fontName=MONO, fontSize=8.5, textColor=colors.white, leading=11),
        "foot":   ParagraphStyle("foot", fontName=MONOR, fontSize=7.5, textColor=MUT),
    }

S = styles()

def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

class ExDoc(BaseDocTemplate):
    def __init__(self, filename, meta, **kw):
        super().__init__(filename, pagesize=letter, topMargin=3.7*cm, bottomMargin=1.8*cm,
                         leftMargin=2.0*cm, rightMargin=2.0*cm, **kw)
        self.meta = meta
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="main")
        self.addPageTemplates([PageTemplate(id="t", frames=[frame], onPage=self._deco)])

    def _deco(self, cv, doc):
        w, h = letter
        m = doc.meta
        # banda superior oscura
        cv.setFillColor(DARK); cv.rect(0, h-2.9*cm, w, 2.9*cm, fill=1, stroke=0)
        cv.setFillColor(LIME); cv.rect(0, h-2.92*cm, w, 0.06*cm, fill=1, stroke=0)
        cv.setFillColor(LIME); cv.setFont(MONO, 8.5)
        cv.drawString(2.0*cm, h-1.15*cm, "// TALLER · GUÍA DE EJERCICIOS")
        cv.setFillColor(colors.white); cv.setFont("Helvetica-Bold", 15)
        cv.drawString(2.0*cm, h-1.85*cm, ("S%02d — %s" % (m["n"], m["title"]))[:64])
        cv.setFillColor(colors.HexColor("#B8B8B8")); cv.setFont(MONOR, 8)
        cv.drawString(2.0*cm, h-2.45*cm, "%s  ·  %s  ·  Sem. %s" % (m["unit"], m["tag"], m["week"]))
        cv.setFillColor(colors.HexColor("#8C8C8C")); cv.setFont(MONOR, 7.5)
        cv.drawRightString(w-2.0*cm, h-2.45*cm, m.get("time", ""))
        # pie
        cv.setStrokeColor(LINE); cv.setLineWidth(0.5); cv.line(2.0*cm, 1.5*cm, w-2.0*cm, 1.5*cm)
        cv.setFillColor(MUT); cv.setFont(MONOR, 7.5)
        cv.drawString(2.0*cm, 1.1*cm, COURSE["footer"])
        cv.drawRightString(w-2.0*cm, 1.1*cm, "pág. %d" % doc.page)


def chip(text, color=LIME, bg=LIMEBG):
    st = ParagraphStyle("chip", fontName=MONO, fontSize=8, textColor=color, leading=12)
    t = Table([[Paragraph(text, st)]], colWidths=[None])
    t.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), bg), ("LEFTPADDING",(0,0),(-1,-1),6),
                           ("RIGHTPADDING",(0,0),(-1,-1),6), ("TOPPADDING",(0,0),(-1,-1),3),
                           ("BOTTOMPADDING",(0,0),(-1,-1),3)]))
    return t

def h2(text):
    return Paragraph("// " + esc(text.upper()), S["h2"])

def bullets(items, sty="li"):
    return ListFlowable([ListItem(Paragraph(esc(x), S[sty]), value="–", leftIndent=12) for x in items],
                        bulletType="bullet", bulletColor=LIME, start="–", leftIndent=10)

def steps(items):
    data = []
    for i, x in enumerate(items, 1):
        num = Paragraph("<font name='Courier-Bold' color='#5B8A00'>%02d</font>" % i, S["step"])
        data.append([num, Paragraph(esc(x), S["step"])])
    t = Table(data, colWidths=[1.0*cm, None])
    t.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("TOPPADDING",(0,0),(-1,-1),3),
                           ("BOTTOMPADDING",(0,0),(-1,-1),3), ("LEFTPADDING",(0,0),(0,-1),0)]))
    return t

def codeblock(lines):
    txt = "<br/>".join(esc(ln).replace(" ", "&nbsp;") for ln in lines)
    st = ParagraphStyle("cb", fontName=MONOR, fontSize=8.5, textColor=colors.HexColor("#C6FF00"), leading=13)
    inner = Paragraph(txt, st)
    t = Table([[inner]], colWidths=[None])
    t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1), DARK), ("LEFTPADDING",(0,0),(-1,-1),10),
                           ("RIGHTPADDING",(0,0),(-1,-1),10), ("TOPPADDING",(0,0),(-1,-1),8),
                           ("BOTTOMPADDING",(0,0),(-1,-1),8)]))
    return t

def rubric(rows):
    data = [[Paragraph("Criterio", S["cellh"]), Paragraph("Descripción", S["cellh"]), Paragraph("%", S["cellh"])]]
    for r in rows:
        data.append([Paragraph(esc(r[0]), S["cellb"]), Paragraph(esc(r[1]), S["cell"]), Paragraph(str(r[2]), S["cellb"])])
    t = Table(data, colWidths=[4.2*cm, None, 1.4*cm])
    ts = [("BACKGROUND",(0,0),(-1,0), DARK), ("GRID",(0,0),(-1,-1),0.5, LINE),
          ("VALIGN",(0,0),(-1,-1),"MIDDLE"), ("TOPPADDING",(0,0),(-1,-1),5),
          ("BOTTOMPADDING",(0,0),(-1,-1),5), ("LEFTPADDING",(0,0),(-1,-1),6),
          ("ALIGN",(2,0),(2,-1),"CENTER")]
    for i in range(1, len(data)):
        if i % 2 == 0:
            ts.append(("BACKGROUND",(0,i),(-1,i), BG2))
    t.setStyle(TableStyle(ts))
    return t

def kvbox(pairs):
    data = [[Paragraph(esc(k), S["cellb"]), Paragraph(esc(v), S["cell"])] for k, v in pairs]
    t = Table(data, colWidths=[3.6*cm, None])
    t.setStyle(TableStyle([("GRID",(0,0),(-1,-1),0.5, LINE), ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
                           ("BACKGROUND",(0,0),(0,-1), BG2), ("TOPPADDING",(0,0),(-1,-1),4),
                           ("BOTTOMPADDING",(0,0),(-1,-1),4), ("LEFTPADDING",(0,0),(-1,-1),6)]))
    return t

def stepblocks(items):
    """Pasos detallados: cada uno con título, descripción, ejemplo y resultado esperado.
    Cada item es un dict {t, d, ej?, esperado?}."""
    st_t = ParagraphStyle("stpt", fontName=BOLD, fontSize=10, textColor=INK, leading=13, spaceAfter=1)
    st_d = ParagraphStyle("stpd", fontName=BODY, fontSize=9.5, textColor=INK, leading=13, spaceAfter=1)
    st_ej = ParagraphStyle("stpej", fontName=BODY, fontSize=9, textColor=CYAN, leading=12, spaceAfter=1)
    st_ok = ParagraphStyle("stpok", fontName=BOLD, fontSize=9, textColor=LIME, leading=12)
    data = []
    for i, x in enumerate(items, 1):
        num = Paragraph("<font name='Courier-Bold' color='#5B8A00'>%02d</font>" % i, st_t)
        cell = [Paragraph(esc(x["t"]), st_t), Paragraph(esc(x["d"]), st_d)]
        if x.get("ej"):
            cell.append(Paragraph("<b>Ejemplo:</b> " + esc(x["ej"]), st_ej))
        if x.get("esperado"):
            cell.append(Paragraph("&#10003; <b>Resultado esperado:</b> " + esc(x["esperado"]), st_ok))
        data.append([num, cell])
    t = Table(data, colWidths=[1.0*cm, None])
    t.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("TOPPADDING",(0,0),(-1,-1),5),
                           ("BOTTOMPADDING",(0,0),(-1,-1),5), ("LEFTPADDING",(0,0),(0,-1),0),
                           ("LINEBELOW",(0,0),(-1,-2),0.4, LINE)]))
    return t

def _cell(txt, sty):
    return Paragraph(esc(txt).replace("\n", "<br/>"), sty)

def datatable(cols, rows, widths=None):
    """Tabla genérica con encabezado oscuro (para ejemplo trabajado / errores).
    widths: números = cm; None = automático."""
    data = [[_cell(c, S["cellh"]) for c in cols]]
    for r in rows:
        data.append([_cell(c, S["cell"]) for c in r])
    cw = None
    if widths:
        cw = [(w*cm if isinstance(w, (int, float)) else None) for w in widths]
    t = Table(data, colWidths=cw or ([None] * len(cols)))
    ts = [("BACKGROUND",(0,0),(-1,0), DARK), ("GRID",(0,0),(-1,-1),0.5, LINE),
          ("VALIGN",(0,0),(-1,-1),"TOP"), ("TOPPADDING",(0,0),(-1,-1),5),
          ("BOTTOMPADDING",(0,0),(-1,-1),5), ("LEFTPADDING",(0,0),(-1,-1),6),
          ("RIGHTPADDING",(0,0),(-1,-1),6)]
    for i in range(1, len(data)):
        if i % 2 == 0:
            ts.append(("BACKGROUND",(0,i),(-1,i), BG2))
    t.setStyle(TableStyle(ts))
    return t

def checklist(items):
    st = ParagraphStyle("chk", fontName=BODY, fontSize=10, textColor=INK, leading=15, spaceAfter=1)
    return ListFlowable(
        [ListItem(Paragraph(esc(x), st), value="☐", leftIndent=12) for x in items],
        bulletType="bullet", bulletColor=INK, start="☐", leftIndent=10)

def build(sess):
    fn = os.path.join(OUT, "S%02d - Ejercicios - %s.pdf" % (sess["n"], sess["file"]))
    doc = ExDoc(fn, sess)
    story = []
    story.append(chip("OBJETIVO DEL TALLER"))
    story.append(Spacer(1, 5))
    story.append(Paragraph(esc(sess["intro"]), S["body"]))
    story.append(Spacer(1, 4))

    story.append(h2("Datos del taller"))
    story.append(kvbox([
        ("Modalidad", sess["modalidad"]),
        ("Duración", sess["time"]),
        ("Evaluación", sess["eval"]),
        ("Alimenta", sess["alimenta"]),
    ]))

    story.append(h2("Objetivos de aprendizaje"))
    story.append(bullets(sess["objetivos"]))

    story.append(h2("Materiales y herramientas"))
    story.append(bullets(sess["materiales"]))

    if sess.get("preparacion"):
        story.append(h2("Preparación (desde cero)"))
        story.append(bullets(sess["preparacion"]))

    story.append(h2("Actividades paso a paso"))
    if sess.get("pasos_detallados"):
        story.append(stepblocks(sess["pasos_detallados"]))
    else:
        story.append(steps(sess["pasos"]))

    if sess.get("code"):
        story.append(Spacer(1, 6))
        story.append(codeblock(sess["code"]))

    if sess.get("ejemplo"):
        ej = sess["ejemplo"]
        story.append(h2(ej.get("titulo", "Ejemplo trabajado completo")))
        if ej.get("intro"):
            story.append(Paragraph(esc(ej["intro"]), S["body"]))
            story.append(Spacer(1, 4))
        story.append(datatable(ej["cols"], ej["filas"], ej.get("widths")))
        if ej.get("nota"):
            story.append(Spacer(1, 3))
            story.append(Paragraph(esc(ej["nota"]), S["muted"]))

    if sess.get("errores"):
        story.append(h2("Errores frecuentes"))
        story.append(datatable(["Síntoma / error típico", "Cómo lo detecto y lo corrijo"],
                               sess["errores"], widths=[6.2, None]))

    story.append(h2("Entregable"))
    story.append(Paragraph(esc(sess["entregable"]), S["body"]))
    if sess.get("entrega_checklist"):
        story.append(Spacer(1, 4))
        story.append(checklist(sess["entrega_checklist"]))

    if sess.get("preguntas"):
        story.append(h2("Preguntas que exigen mirar el artefacto"))
        story.append(bullets(sess["preguntas"]))

    story.append(h2("Rúbrica de evaluación"))
    story.append(rubric(sess["rubrica"]))

    story.append(h2("Conexión con el proyecto"))
    story.append(Paragraph(esc(sess["proyecto"]), S["muted"]))

    doc.build(story)
    return fn, doc

if __name__ == "__main__":
    import sys
    which = [int(x) for x in sys.argv[1:]] or list(range(1, 17))
    for n in which:
        s = SESSIONS[n]
        s["n"] = n
        fn, doc = build(s)
        print("OK  S%02d  -> %s  (%d pág.)" % (n, os.path.basename(fn), doc.page))
