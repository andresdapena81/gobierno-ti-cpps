# Pendientes — brechas frente al estándar (CLAUDE.md)

Estado del material vs. el estándar. ✅ cumple · 🟡 parcial · 🔴 falta.

## Contenido
- 🟡 **Pregunta de verificación por bloque + agenda con tiempo real** en los decks. Hoy hay notas
  del ponente en todas las láminas, pero no la pregunta de cierre sistemática. → Añadir un tipo de
  lámina `check` y una agenda temporizada en `build/deck_lib.js`, y aplicarlo a las 16 sesiones.
- 🟡 **Guías de lab a nivel comando+salida+errores.** Varias guías traen objetivos/pasos/rúbrica,
  pero falta el detalle "comando exacto → salida esperada → cómo sé que funcionó" + tabla de errores.
  El gemelo digital (S12) es el modelo a seguir. → Reescribir S05/S07/S09/S10/S11/S13/S15 en `exercises_data.py`.
- ✅ **Código de laboratorio con pruebas automáticas** (solución + andamiaje con TODO) para S10 OPC UA,
  S11 MQTT y S13 OEE, más el gemelo digital. Ver `build/labs/` (patrón `IMPL=solucion|andamiaje pytest`).
- ✅ **Modelo de evaluación por casos, proyectos y reflexión** (sin quizzes ni selección múltiple).
  No aplica banco de exámenes: las "Evaluaciones de caso 1/2" son análisis abiertos. Ver `Plan-de-estudio.md` §5.
  Un entregable para el estudiante (enunciado del caso, público) y una guía de calificación del docente (privada)
  cubren cada caso; la guía docente va en el repo privado.

## Calidad
- ✅ **`qa_deck.py` consolidado** (texto fuera de marco / sobre el pie / bloques que se pisan) en una
  sola herramienta (LibreOffice→PDF→PyMuPDF, nivel de línea). Última corrida: **0 problemas** en los 20 decks.
- ✅ **Aviso de cifras `callouts`:** el tamaño de la cifra se autoajusta por ancho y alto en `deck_lib.js`
  (factor Arial Black 0.80) para no envolver a 2 líneas ni pisar la etiqueta. Verificado con `qa_deck.py`.

## Veracidad
- 🟡 **Verificación en vivo del 100 % de URLs** de las referencias (se hizo parcial). → Script que abra
  cada enlace y reporte los caídos; reemplazar los que fallen.
- 🟡 **Ejemplos numéricos calculados con código** (p. ej. el OEE de S13) en vez de a mano en la lámina.
- 🔴 **Marcado `⚠ VERIFICAR ANTES DE DICTAR`** en notas donde un dato no se pudo verificar.

## Publicación
- ✅ `publicar.py` + `.gitignore` + `LICENSE` (MIT) + `LICENSE-CONTENIDO.md` (CC BY 4.0) + fail-safe.
- 🟡 **Push a GitHub** de los dos repos (`gobierno-ti-cpps` público con el gemelo digital incluido,
  `gobierno-ti-cpps-docente` privado). `gh` **ya está autenticado** (andresdapena81, scope repo). Falta el
  visto bueno de nombre/logo USB y ejecutar `publicar.py` + push.
- ⚠ **Visto bueno de la USB** para publicar con su nombre/logo (lo exige el propio estándar).

## Confirmaciones al docente
- ⚠ Programa y semestre exactos del pregrado (para `CLAUDE.md` / `Plan-de-estudio.md`).
- ⚠ Que la distribución de cortes (30/30/40) coincide con el Plan de Calificación de Pregrado vigente.
- ⚠ ¿Se mantiene el tema brutalista/terminal o se migra a la marca oficial USB?
