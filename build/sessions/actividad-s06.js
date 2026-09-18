// ACTIVIDAD S06 — Diagnóstico 4.0 (autoguiada, para hacer en clase sin docente)
module.exports = [
  { type: "cover", title: "DIAGNÓSTICO 4.0\nDE TU EMPRESA", subtitle: "Actividad autoguiada: ubica tu empresa en la Industria 4.0 y traza su ruta",
    notes: "Actividad de la Sesión 6 para hacer HOY en clase, en equipos, sin acompañamiento del docente. Todo lo necesario está en estas diapositivas." },

  { type: "callouts", sec: "INICIO", title: "Cómo funciona la clase de hoy",
    stats: [ {n:"AUTÓNOMA",label:"el profesor no está hoy: esta actividad se explica sola, síganla en orden",color:"C6FF00"},{n:"EN EQUIPO",label:"trabajen con su equipo del proyecto (3–4); un relator toma nota",color:"27E5E5"},{n:"≈ 90 min",label:"lean el repaso exprés y hagan las 5 partes; al final arman el entregable",color:"FFB000"} ],
    note: { body: "Avancen estas diapositivas a su ritmo. Primero un repaso exprés de los conceptos (para no depender de la clase magistral); luego una actividad de 5 partes aplicada a la empresa de su proyecto. Si necesitan profundizar, abran la presentación completa «S06 — Industria 4.0 y CPS»." },
    notes: "Explicar el formato. Recalcar: la presentación completa S06 está disponible si quieren más detalle. La actividad usa la empresa que definieron en el taller S01." },

  { type: "objectives", sec: "INICIO", title: "Qué van a lograr hoy", items: [
    { lead: "Ubicar", rest: "su empresa en las cuatro revoluciones industriales." },
    { lead: "Diagnosticar", rest: "su madurez digital con una rúbrica simple." },
    { lead: "Mapear", rest: "su proceso foco en la arquitectura 5C." },
    { lead: "Elegir", rest: "1–2 de los nueve pilares que atacan su mayor dolor." },
    { lead: "Trazar", rest: "una ruta de adopción realista por horizontes." },
  ], notes: "Cinco resultados concretos. Cada uno corresponde a una parte de la actividad. Todo se aplica a SU empresa del proyecto." },

  // ============ SECCIÓN 1: REPASO EXPRÉS ============
  { type: "section", num: 1, title: "REPASO EXPRÉS", sub: "Lo que necesitan saber para hacer la actividad (léanlo primero)" },

  { type: "process", sec: "REPASO", title: "Las cuatro revoluciones industriales", cols: 4, steps: [
      { n:"1.0", title:"Mecanización", desc:"Vapor y agua. s. XVIII.", color:"8C8C8C" },
      { n:"2.0", title:"Producción en masa", desc:"Electricidad, línea. ~1870.", color:"FFB000" },
      { n:"3.0", title:"Automatización", desc:"Electrónica, PLC, TI. ~1970.", color:"27E5E5" },
      { n:"4.0", title:"Ciber-físico", desc:"IoT, datos, IA, gemelos. Hoy.", color:"C6FF00" },
    ], notes: "La 4ª revolución no añade una máquina: conecta e informatiza lo que ya existe. La mayoría de las plantas hoy están entre 3.0 y 4.0." },

  { type: "concepts3", sec: "REPASO", title: "Qué es un sistema ciber-físico (CPPS)", items: [
      { k: "CPS", desc: "Cyber-Physical System: cómputo + red + proceso físico integrados; el software monitorea y controla lo físico en lazo cerrado.", ex: "Sensor → PLC → actuador", color: "27E5E5" },
      { k: "CPPS", desc: "Cyber-Physical Production System: los CPS aplicados a la producción, conectados y colaborando en la fábrica.", ex: "Una línea inteligente", color: "C6FF00" },
      { k: "NO ES…", desc: "…un PLC aislado ni un IoT de consumo: el CPPS tiene un modelo de su propio proceso y usa datos para decidir.", ex: "Más que 'máquina con wifi'", color: "FFB000" },
    ], note: "En una frase: un CPPS es una parte de la planta donde lo físico y el cómputo trabajan juntos con datos. Ese será el foco de su diagnóstico.",
    notes: "Aterrizar CPPS. Lo importante para la actividad: identificar el proceso de su empresa donde hay cómputo + físico + datos." },

  { type: "grid", sec: "REPASO", title: "La arquitectura 5C — la escalera del CPPS", cols: 3, lead: "Cinco niveles, de conectar a auto-ajustarse. Sirve para ubicar QUÉ TAN 4.0 está un proceso.",
    cards: [
      { tag: "1 · CONNECTION", desc: "Conectar: adquirir datos fiables de máquinas y sensores.", color: "27E5E5" },
      { tag: "2 · CONVERSION", desc: "Convertir: datos en información (indicadores, salud del equipo).", color: "22E06B" },
      { tag: "3 · CYBER", desc: "Modelar: gemelo digital, memoria, comparación entre máquinas.", color: "C6FF00" },
      { tag: "4 · COGNITION", desc: "Diagnosticar: la información apoya la decisión del humano.", color: "FFB000" },
      { tag: "5 · CONFIGURATION", desc: "Auto-ajustarse: el sistema se reconfigura y se vuelve resiliente.", color: "FF6B35" },
      { tag: "CÓMO SE LEE", desc: "Se sube nivel por nivel: sin datos fiables (1) no hay cognición (4). La mayoría de pymes está en 1–2.", color: "9D6BFF" },
    ], notes: "La 5C es la herramienta de la Parte C. Fíjense: es una escalera, no se salta niveles. Ubicar honestamente su proceso." },

  { type: "grid", sec: "REPASO", title: "Los nueve pilares de Industria 4.0", cols: 3, lead: "El 'menú' de tecnologías. Nadie las adopta todas: se eligen según el dolor.",
    cards: [
      { tag: "IIoT", desc: "Sensórica y conectividad en planta.", color: "27E5E5" },
      { tag: "NUBE / EDGE", desc: "Dónde vive el dato y el cómputo.", color: "C6FF00" },
      { tag: "BIG DATA / IA", desc: "Analítica, predicción, detección de anomalías.", color: "FFB000" },
      { tag: "GEMELO / SIMULACIÓN", desc: "Réplica virtual del proceso.", color: "22E06B" },
      { tag: "ROBÓTICA / AR", desc: "Cobots, AGV, realidad aumentada.", color: "9D6BFF" },
      { tag: "+ CIBERSEGURIDAD", desc: "Aditiva, integración y ciberseguridad (transversal).", color: "FF3B30" },
    ], notes: "Los 9 pilares son el menú de la Parte D. Regla: elegir el pilar que resuelve el mayor dolor con el menor riesgo, no el más llamativo." },

  { type: "matrix", sec: "REPASO", title: "Niveles de madurez digital (para la Parte B)", firstW: 2.4,
    cols: ["Nivel", "Se llama", "Qué significa"],
    rows: [
      ["1", {t:"Informatizar",color:"FF3B30"}, "Hay TI, pero aislada y sin conectar."],
      ["2", {t:"Conectar",color:"FF6B35"}, "Máquinas y sistemas empiezan a comunicarse."],
      ["3", {t:"Ver",color:"FFB000"}, "Se ve en tiempo real lo que pasa (tableros)."],
      ["4", {t:"Entender",color:"27E5E5"}, "Se sabe POR QUÉ pasa (análisis de causas)."],
      ["5", {t:"Predecir / adaptar",color:"C6FF00"}, "Se anticipa y el sistema se ajusta."],
    ], notes: "Escala simplificada (basada en Acatech). La usarán en la Parte B para autoevaluar su empresa por dimensiones. La mayoría de pymes está en nivel 1–2." },

  { type: "callouts", sec: "REPASO", title: "Antes de empezar la actividad",
    stats: [ {n:"PROYECTO",label:"usen la empresa y el proceso foco que definieron en el taller S01",color:"C6FF00"},{n:"REALISMO",label:"diagnostiquen dónde ESTÁ hoy, no dónde les gustaría que estuviera",color:"FFB000"},{n:"EJEMPLO",label:"cada parte trae un ejemplo con «Lácteos La Pradera» para guiarse",color:"27E5E5"} ],
    note: { body: "Si su equipo aún no fijó la empresa del proyecto, usen «Lácteos La Pradera» (una pyme de yogurt cuyo proceso foco es la Línea 2 de envasado) como caso para hoy. Verán su ejemplo resuelto en cada parte." },
    notes: "Puente a la actividad. Dar la salida a equipos sin empresa: usar La Pradera. El ejemplo aparece resuelto en cada parte." },

  // ============ SECCIÓN 2: LA ACTIVIDAD ============
  { type: "section", num: 2, title: "LA ACTIVIDAD — 5 PARTES", sub: "Apliquen cada parte a su empresa del proyecto" },

  { type: "phase", sec: "PARTE A", title: "Parte A — ¿En qué revolución está tu empresa?", badge: "≈ 10 min",
    name: "Ubiquen el punto de partida", what: "En equipo, decidan en qué revolución vive HOY el proceso foco de su empresa y por qué. La mayoría de la industria real está entre 2.0 y 3.0, avanzando hacia 4.0. Justifiquen con evidencia concreta: ¿hay control automático? ¿hay datos conectados? ¿hay modelos que decidan? Escriban una frase con su nivel y una razón.",
    leftTag: "RESPONDAN", tools: "«Nuestro proceso está en X.0 porque…»", rightTag: "EJEMPLO — LA PRADERA", seen: "La Línea 2 está en 3.0: PLC automatiza el llenado, pero los datos no están conectados.",
    notes: "Parte A: calentamiento. Ubicar el punto de partida con honestidad. El ejemplo de La Pradera muestra el nivel de detalle esperado." },

  { type: "phase", sec: "PARTE B", title: "Parte B — Diagnóstico de madurez digital", badge: "≈ 20 min",
    name: "Autoevalúen 5 dimensiones (nivel 1–5)", what: "Con la escala de madurez del repaso, califiquen su proceso foco (1 a 5) en cinco dimensiones: Conectividad de máquinas, Datos y analítica, Ciberseguridad OT, Procesos digitales y Competencias del equipo. Para cada una, anoten el nivel y una frase de por qué. Luego marquen las 2 dimensiones más débiles: ahí está la oportunidad.",
    leftTag: "PRODUCTO", tools: "Tabla de 5 dimensiones × nivel + 2 dimensiones débiles", rightTag: "REGLA", seen: "Nivel = evidencia, no deseo. Si dudan, es más bajo.",
    notes: "Parte B: el corazón del diagnóstico. La tabla de autoevaluación está en la siguiente diapositiva, con el ejemplo resuelto." },

  { type: "matrix", sec: "PARTE B", title: "Plantilla de diagnóstico — ejemplo La Pradera", firstW: 5.2,
    cols: ["Dimensión", "Nivel", "Por qué"],
    rows: [
      ["Conectividad de máquinas", {t:"2 / 5",color:"FF6B35"}, "PLC en la Línea 2, sin red de datos"],
      ["Datos y analítica", {t:"1 / 5",color:"FF3B30"}, "Registro en Excel, sin historiador"],
      ["Ciberseguridad OT", {t:"1 / 5",color:"FF3B30"}, "Sin segmentación IT/OT"],
      ["Procesos digitales", {t:"2 / 5",color:"FF6B35"}, "Órdenes en papel + ERP básico"],
      ["Competencias del equipo", {t:"2 / 5",color:"FF6B35"}, "TI es una sola persona"],
    ], notes: "Modelo de la tabla que cada equipo debe llenar para SU empresa. En La Pradera las más débiles son datos y ciberseguridad OT (nivel 1)." },

  { type: "phase", sec: "PARTE C", title: "Parte C — Mapea tu proceso en la 5C", badge: "≈ 15 min",
    name: "¿Hasta qué nivel de la 5C llega hoy?", what: "Usando la escalera 5C del repaso, ubiquen su proceso foco: ¿llega solo a Connection (1)? ¿Ya convierte datos en información (2)? ¿Tiene algún modelo o gemelo (3)? Marquen el nivel máximo que alcanza HOY y expliquen qué le falta para subir UN escalón. No busquen llegar al 5: busquen el siguiente paso realista.",
    leftTag: "RESPONDAN", tools: "Nivel 5C actual + qué falta para subir uno", rightTag: "EJEMPLO — LA PRADERA", seen: "Llega a nivel 1 (hay señales en el PLC). Para subir a 2: capturar y graficar el OEE.",
    notes: "Parte C: conecta la madurez con la arquitectura técnica. El siguiente paso realista importa más que la meta lejana." },

  { type: "phase", sec: "PARTE D", title: "Parte D — Elige tu pilar (dolor → tecnología)", badge: "≈ 15 min",
    name: "1–2 pilares que ataquen tu mayor dolor", what: "Recuerden el dolor de negocio de su empresa (del taller S01). De los nueve pilares, elijan 1 o 2 que ataquen ese dolor con el menor riesgo. Justifiquen: ¿qué problema resuelve?, ¿qué datos necesita?, ¿por qué ese y no otro? Eviten elegir 'IA' por moda: elijan lo que resuelve el dolor real.",
    leftTag: "RESPONDAN", tools: "Dolor → pilar elegido → por qué", rightTag: "EJEMPLO — LA PRADERA", seen: "Dolor: microparos y trazabilidad. Pilar: IIoT para capturar OEE y trazar lote. IA aún no.",
    notes: "Parte D: la decisión tecnológica. Debe nacer del dolor, no de la moda. Conectar con el dolor definido en S01." },

  { type: "phase", sec: "PARTE E", title: "Parte E — Traza la ruta de adopción", badge: "≈ 20 min",
    name: "Ahora / Siguiente / Después", what: "Ordenen su digitalización en tres horizontes. AHORA (0–6 m): conectar y ver (quick wins) + seguridad básica. SIGUIENTE (6–18 m): analítica o el pilar elegido. DESPUÉS (18+ m): optimización o gemelo. Respeten las dependencias: no hay predicción sin datos, ni datos sin conexión. Una iniciativa por horizonte basta.",
    leftTag: "PRODUCTO", tools: "3 horizontes con 1 iniciativa cada uno", rightTag: "EJEMPLO — LA PRADERA", seen: "Ahora: conectar Línea 2 + OEE. Siguiente: trazabilidad de lote. Después: predictivo de la selladora.",
    notes: "Parte E: la síntesis. La ruta respeta dependencias (conectar → ver → predecir). Una iniciativa por horizonte para que sea realista." },

  { type: "matrix", sec: "PARTE E", title: "La ruta, en una tabla — ejemplo La Pradera", firstW: 3.2,
    cols: ["Horizonte", "Iniciativa", "Depende de"],
    rows: [
      ["Ahora (0–6 m)", {t:"Conectar Línea 2 + tablero OEE",color:"C6FF00"}, "—"],
      ["Ahora (0–6 m)", {t:"Segmentar red IT/OT",color:"FF3B30"}, "Inventario"],
      ["Siguiente (6–18 m)", {t:"Trazabilidad de lote",color:"27E5E5"}, "Datos + OEE"],
      ["Después (18+ m)", {t:"Predictivo de la selladora",color:"FFB000"}, "Datos históricos"],
    ], notes: "Modelo de la tabla de ruta. Cada equipo arma la suya. Nótese que la seguridad va en el primer horizonte, no al final." },

  { type: "keypoints", sec: "ACTIVIDAD", title: "Errores a evitar en la actividad", items: [
      { label: "Inflar el nivel", desc: "Diagnostiquen dónde están, no dónde quisieran estar." },
      { label: "Saltar escalones", desc: "No hay analítica sin datos, ni datos sin conexión." },
      { label: "Pilar por moda", desc: "Elijan la tecnología por el dolor, no porque suene bien." },
      { label: "Ruta irreal", desc: "Una iniciativa por horizonte; respeten dependencias." },
      { label: "Olvidar la seguridad", desc: "La ciberseguridad OT va desde el primer horizonte." },
    ], notes: "Repasar antes de armar el entregable. Estos son los errores típicos que bajan la nota." },

  // ============ SECCIÓN 3: ENTREGA Y CIERRE ============
  { type: "section", num: 3, title: "ENTREGA Y CIERRE", sub: "Qué entregar hoy y cómo se evalúa" },

  { type: "phase", sec: "ENTREGA", title: "El entregable de hoy", badge: "AL FINAL DE LA CLASE",
    name: "Ficha de diagnóstico 4.0 (1–2 páginas)", what: "Un solo documento por equipo con las 5 partes: (A) revolución actual + razón, (B) tabla de madurez de 5 dimensiones + las 2 más débiles, (C) nivel 5C actual + siguiente paso, (D) dolor → pilar elegido + por qué, (E) tabla de ruta por horizontes. Pongan el nombre de la empresa y de todos los integrantes.",
    leftTag: "FORMATO", tools: "1–2 páginas · un documento por equipo", rightTag: "CÓMO ENTREGAR", seen: "Súbanlo al aula virtual / envíenlo al docente hoy mismo",
    notes: "El entregable amarra las 5 partes. Ajustar la vía de entrega (aula virtual, correo) según lo que use el docente. Es evidencia de que trabajaron hoy." },

  { type: "matrix", sec: "ENTREGA", title: "Cómo se evalúa (Seguimiento)", firstW: 5.0,
    cols: ["Criterio", "Qué buscamos", "%"],
    rows: [
      ["Diagnóstico honesto", {t:"Niveles con evidencia, no inflados",color:"C6FF00"}, "30"],
      ["Uso de los conceptos", {t:"5C, madurez y pilares bien aplicados",color:"27E5E5"}, "30"],
      ["Dolor → tecnología", {t:"El pilar responde al dolor real",color:"FFB000"}, "20"],
      ["Ruta realista", {t:"Horizontes con dependencias correctas",color:"22E06B"}, "20"],
    ], notes: "Rúbrica clara para que se autoevalúen. El mayor peso es diagnosticar con honestidad y aplicar bien los conceptos." },

  { type: "keypoints", sec: "CIERRE", title: "Para llevar de la sesión de hoy", items: [
      { label: "Industria 4.0", desc: "No es comprar tecnología: es conectar, ver y decidir con datos." },
      { label: "Madurez real", desc: "La mayoría empieza en nivel 1–2; el valor está en subir un escalón." },
      { label: "5C", desc: "Se sube nivel por nivel: sin datos no hay inteligencia." },
      { label: "Dolor primero", desc: "La tecnología se elige por el problema que resuelve." },
      { label: "Ruta por fases", desc: "Ahora / Siguiente / Después, respetando dependencias." },
    ], notes: "Cierre conceptual. Estas cinco ideas son lo que debían aprender hoy, y las aplicaron en la actividad." },

  { type: "closing", nextNum: 7, nextTitle: "ISA-95 Y LA PIRÁMIDE DE AUTOMATIZACIÓN", nextDesc: "En la próxima sesión modelaremos la arquitectura del proceso por niveles (ISA-95). Traigan su ficha de diagnóstico de hoy.", prompt: "root@planta:~# diagnostico-4.0 --entregado ✓  siguiente: arquitectura _",
    notes: "Recordar entregar la ficha antes de salir. La S07 (ISA-95) construye sobre el proceso foco que diagnosticaron hoy." },
];
