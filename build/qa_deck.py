# -*- coding: utf-8 -*-
"""
qa_deck.py — control de calidad geométrico de un .pptx sobre el RENDER real.

Convierte el deck a PDF con LibreOffice y mide las cajas de texto con PyMuPDF
(fitz). Reporta, por página:
  · TEXTO FUERA DEL MARCO  — un bloque se sale del área segura (toca/pasa el borde).
  · TEXTO SOBRE EL PIE      — un bloque de contenido invade la banda del pie de página.
  · BLOQUES QUE SE PISAN    — dos bloques de texto se solapan de forma significativa
                             (se ignora el número gigante de marca de agua de los divisores).

Uso:
  python qa_deck.py "../presentaciones/S01 - Fundamentos de Gobierno de TI.pptx"
  python qa_deck.py ../presentaciones/*.pptx
Salida: 0 si no hay problemas; si no, imprime la lista y sale con código != 0.
"""
import sys, os, glob, tempfile, subprocess, shutil

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Falta PyMuPDF: pip install PyMuPDF"); sys.exit(2)

SOFFICE = None
for c in [r"C:\Program Files\LibreOffice\program\soffice.exe",
          r"C:\Program Files (x86)\LibreOffice\program\soffice.exe", "soffice"]:
    if c == "soffice" or os.path.exists(c):
        SOFFICE = c; break

PT = 72.0                 # puntos por pulgada
MARGEN = 0.30 * PT        # margen seguro lateral/superior
BANDA_PIE = 0.52 * PT     # altura de la banda del pie (el pie del curso vive aquí)
TOL = 3.0                 # tolerancia en puntos

def a_pdf(pptx, outdir):
    subprocess.run([SOFFICE, "--headless", "--convert-to", "pdf", "--outdir", outdir, pptx],
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    base = os.path.splitext(os.path.basename(pptx))[0] + ".pdf"
    p = os.path.join(outdir, base)
    return p if os.path.exists(p) else None

def bloques_texto(page):
    # Nivel de LÍNEA (bbox ajustada a los glifos). Evita el artefacto de PyMuPDF
    # que fusiona textos centrados en un bloque gigante que cruza varias tarjetas.
    out = []
    for b in page.get_text("dict").get("blocks", []):
        if b.get("type", 0) != 0:
            continue
        for ln in b.get("lines", []):
            txt = "".join(s.get("text", "") for s in ln.get("spans", [])).strip()
            if txt:
                x0, y0, x1, y1 = ln["bbox"]
                out.append((x0, y0, x1, y1, txt))
    return out

def es_pie(x0, y0, x1, y1, H):
    # el pie legítimo empieza dentro de la banda inferior
    return y0 >= H - BANDA_PIE - TOL

def solapan(a, b):
    ix = max(0, min(a[2], b[2]) - max(a[0], b[0]))
    iy = max(0, min(a[3], b[3]) - max(a[1], b[1]))
    if ix <= 0 or iy <= 0:
        return 0.0
    inter = ix * iy
    menor = min((a[2]-a[0])*(a[3]-a[1]), (b[2]-b[0])*(b[3]-b[1]))
    return inter / menor if menor > 0 else 0.0

def revisar(pdf):
    problemas = []
    doc = fitz.open(pdf)
    for i, page in enumerate(doc, 1):
        W, H = page.rect.width, page.rect.height
        bl = bloques_texto(page)
        for (x0, y0, x1, y1, txt) in bl:
            t = txt.replace("\n", " ")[:40]
            if x1 > W - MARGEN + TOL or x0 < MARGEN - TOL or y0 < MARGEN - TOL:
                problemas.append(f"  pág {i:02d}  FUERA DEL MARCO: \"{t}\"")
            elif (not es_pie(x0, y0, x1, y1, H)) and y1 > H - BANDA_PIE + TOL:
                problemas.append(f"  pág {i:02d}  SOBRE EL PIE: \"{t}\"")
        # solapamiento entre bloques de contenido (ignora divisores: número gigante)
        cont = [b for b in bl if not es_pie(b[0], b[1], b[2], b[3], H)]
        for a in range(len(cont)):
            for c in range(a + 1, len(cont)):
                # ignora bloques decorativos muy altos (número gigante de los divisores)
                if (cont[a][3] - cont[a][1]) > 1.35 * PT or (cont[c][3] - cont[c][1]) > 1.35 * PT:
                    continue
                r = solapan(cont[a], cont[c])
                if r > 0.35:
                    ta = cont[a][4].replace("\n", " ")[:22]
                    tc = cont[c][4].replace("\n", " ")[:22]
                    # marca de agua de sección: un bloque muy corto (número) solapado -> se ignora
                    if min(len(cont[a][4].strip()), len(cont[c][4].strip())) <= 3:
                        continue
                    problemas.append(f"  pág {i:02d}  SE PISAN ({r:.0%}): \"{ta}\" / \"{tc}\"")
    doc.close()
    return problemas

def main():
    args = []
    for a in sys.argv[1:]:
        args += glob.glob(a) if any(ch in a for ch in "*?") else [a]
    if not args:
        print("Uso: python qa_deck.py <deck.pptx> [...]"); sys.exit(2)
    if not SOFFICE:
        print("No se encontró LibreOffice (soffice)."); sys.exit(2)
    tmp = tempfile.mkdtemp(prefix="qa_deck_")
    total = 0
    try:
        for pptx in args:
            if not os.path.exists(pptx):
                print(f"✗ no existe: {pptx}"); total += 1; continue
            pdf = a_pdf(pptx, tmp)
            if not pdf:
                print(f"✗ no se pudo convertir: {pptx}"); total += 1; continue
            probs = revisar(pdf)
            nombre = os.path.basename(pptx)
            if probs:
                print(f"✗ {nombre}  ({len(probs)} problema(s)):")
                for p in probs: print(p)
                total += len(probs)
            else:
                print(f"✓ {nombre}  0 problemas")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    print(f"\nTOTAL problemas: {total}")
    sys.exit(1 if total else 0)

if __name__ == "__main__":
    main()
