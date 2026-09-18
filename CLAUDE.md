# Curso: Gobierno de TI y Sistemas Ciber-Físicos de Producción

> Estándar de trabajo del repositorio. Manda sobre cómo se produce el material.
> Adaptado al layout REAL de este proyecto (no se renombra nada: ver «Sistema de diseño»).

## Identidad
- Institución: Universidad de San Buenaventura · Sede Bello — Campus Medellín. Nivel: pregrado. `⚠ CONFIRMAR: programa y semestre`.
- 16 sesiones de 3 h (16 semanas). Trabajo en equipos de 3–4 estudiantes.
- Docente: Jorge Andrés Dapena — MSc. Idioma: español de Colombia; se habla a los estudiantes de "ustedes".
- Tesis del curso (idea que atraviesa todas las sesiones): **gobernar la tecnología que opera procesos físicos es decidir, con evidencia, quién decide y qué riesgo se acepta — no solo administrarla.**
- El plan de estudio oficial es `Plan-de-estudio.md`. Manda sobre el contenido. Si algo del
  material lo contradice, se corrige el material o se registra el cambio en el plan.
  (`SYLLABUS.md` es el anexo con el calendario semanal detallado que el plan referencia.)

## Sistema de diseño
- Paleta (tema propio "brutalista/terminal", NO es la marca oficial USB — `⚠ decisión registrada: se mantiene`):
  fondo `#0B0B0B` · tarjeta `#151515` · texto `#F4F4F4` · muted `#8C8C8C` · acentos
  lima `#C6FF00` (primario), cian `#27E5E5`, ámbar `#FFB000`, rojo `#FF3B30`, verde `#22E06B`, morado `#9D6BFF`.
- Tipografías: **Arial Black** (títulos display), **Courier New** (mono/terminal), **Arial** (cuerpo).
- Presentaciones: se GENERAN con código sobre el motor compartido `build/deck_lib.js` (pptxgenjs).
  El contenido de cada sesión es un archivo de datos declarativo `build/sessions/sNN.js`; se
  renderiza con `node build/render.js [NN...]`. **Nunca se editan las .pptx a mano.**
  (Divergencia con la plantilla: aquí el motor es `build/deck_lib.js` y el contenido `sessions/sNN.js`,
  no `material/lib/sistema.js` ni `material/build-sesion-NN.js`. Se documenta, no se renombra.)
- Guías/talleres: por ahora se generan en PDF con `reportlab` (`build/make_pdfs.py` + `build/exercises_data.py`).
  El laboratorio ejecutable del gemelo digital tiene su propio front (React) bajo `gemelo-digital/`.
  (Divergencia: no se usa `html_a_pdf.py`; el pipeline real es reportlab/React.)

## El estándar de cada sesión
1. **Presentación explicada** (44–53 láminas para 3 h). Cada concepto: la idea en lenguaje
   llano, un ejemplo concreto trabajado y el error típico. Un estudiante que repase SOLO con el
   deck debe entenderlo. Notas del orador en TODAS las láminas. `⟳ PENDIENTE: pregunta de
   verificación explícita al cierre de cada bloque y agenda que sume el tiempo real` (ver `PENDIENTES.md`).
2. **Guía de laboratorio muy detallada en PDF**: preparación desde cero, cada paso con el comando
   exacto, la salida esperada y "cómo sé que funcionó", tabla de errores frecuentes, preguntas que
   obliguen a mirar el artefacto real, lista de entrega y rúbrica. `⟳ PARCIAL: las guías traen
   objetivos/pasos/entregable/rúbrica; falta el nivel comando+salida+errores en varias`.
3. **Código de laboratorio con pruebas automáticas**: versión solución y versión andamiaje (con
   TODO) que compila; el lab termina cuando pasan las pruebas. `✓ gemelo-digital/ + build/labs/`
   (S10 OPC UA, S11 MQTT, S13 OEE) con el patrón `IMPL=solucion|andamiaje pytest`.
4. **Evaluaciones por casos, proyectos y reflexión — sin quizzes ni selección múltiple**: cada
   evaluación de caso tiene un enunciado para el estudiante (público) y una guía de calificación
   del docente (privada, repo docente). No hay banco de exámenes ni claves de opción múltiple.

## Controles de calidad (no negociables)
- El generador del deck no debe emitir avisos de ajuste de texto → `node build/_chequeo_desborde.js sessions/sNN.js`.
  `⚠ Aviso conocido abierto`: cifras de `callouts` en Arial Black 38 pt caben ~9 caracteres; valores
  largos (p. ej. `RESPONSABILIDAD`) envuelven a 2 líneas. Corregir antes de proyectar esas sesiones.
- Validación estructural OOXML: `python build/_validate.py <deck>.pptx` = 0 fallos.
- QA visual con imagen (LibreOffice instalado): `soffice --headless --convert-to pdf` + PyMuPDF (`import fitz`).
  `⟳ PENDIENTE: consolidar `build/qa_deck.py` (texto fuera de marco / sobre el pie / bloques que se pisan) en una sola herramienta`.
- PDFs: `python build/make_pdfs.py` debe reportar 0 desbordes y el PDF se abre y se mira.
- Pruebas de la solución pasan; las del andamiaje fallan solo en lo que falta hacer.

## Veracidad
- Toda cifra, fecha, caso, norma, versión o URL se VERIFICA en la web antes de escribirla, y cada
  enlace se abre para confirmar que funciona y no pide usuario y clave. `⟳ PENDIENTE: verificación
  en vivo del 100 % de URLs (hecha parcial; ver PENDIENTES.md)`.
- Los ejemplos numéricos se calculan de verdad con código, no de memoria.
- Lo que no se pueda verificar se marca `⚠ VERIFICAR ANTES DE DICTAR` en las notas del orador.
- Cuando un estudiante reporta un problema con una fuente, se le cree y se reemplaza por una mejor.
- Las referencias de cada deck llevan enlace clicable y etiqueta `libre` / `de pago`.

## Actividades que la IA no resuelve sola
Las tareas de investigación exigen abrir el artefacto real (buscar en un documento original,
comparar una página contra su versión archivada, confrontar una cita con su fuente, medir en una
herramienta). Se piden evidencias verificables (capturas, enlaces, hashes, mediciones), no opiniones.

## Publicación: dos repositorios
- Público `gobierno-ti-cpps`: presentaciones, guías, andamiajes, plan de estudio y el **laboratorio
  del gemelo digital** (`gemelo-digital/`). Código con licencia MIT (`LICENSE`), contenido con
  CC BY 4.0 (`LICENSE-CONTENIDO.md`).
- Privado `gobierno-ti-cpps-docente`: soluciones, claves y solucionarios.
- `python publicar.py` construye ambos árboles (en `dist/publico` y `dist/privado`) desde el árbol
  de trabajo y **FALLA si una solución o clave se cuela en el público**. Los archivos con respuestas
  se nombran con `SOLUCION-DOCENTE` o `CLAVE-DOCENTE`, o viven en carpetas `solucion/`.
- Nunca se suben claves, contraseñas, `.env` ni datos personales de estudiantes.
- **Antes de publicar con el nombre y el logo de la USB, pedir visto bueno.** `⚠ PENDIENTE`.
- `⚠ El push a GitHub requiere autorizar el conector en una sesión interactiva` (o `gh`) y los
  nombres de cuenta/repos; no se puede hacer desde una sesión no interactiva.

## Forma de trabajar
- Ser crítico pero propositivo: si una idea del docente tiene un problema, decirlo y proponer la
  alternativa, no solo ejecutarla.
- Para trabajos grandes, repartir entre agentes con propiedad estricta de archivos: cada agente toca
  solo los archivos de sus sesiones; nadie modifica `build/deck_lib.js` (lib) en paralelo.
- Al terminar, informar con honestidad: qué se verificó, qué no, y qué queda pendiente (`PENDIENTES.md`).
