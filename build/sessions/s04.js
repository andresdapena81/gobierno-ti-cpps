// S04 — COBIT 2019 (II): Factores de diseño, capacidad, madurez y diseño a medida
module.exports = [
  { type: "cover", title: "COBIT 2019\nDISEÑO A MEDIDA", subtitle: "Factores de diseño, niveles de capacidad y madurez del sistema de gobierno",
    notes: "Cuarta sesión. Del catálogo de 40 objetivos al sistema de gobierno concreto que UNA empresa necesita. Revisar la cascada del taller de S03." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Por qué a medida", desc: "El fin de la talla única y el flujo de diseño" },
    { title: "Los 11 factores", desc: "Qué mueve el diseño del sistema de gobierno" },
    { title: "Capacidad y madurez", desc: "Niveles 0–5 y evaluación de brechas" },
    { title: "El flujo de diseño", desc: "Los cuatro pasos del Design Guide" },
    { title: "Diseño para un CPPS", desc: "Factores aplicados al piso de planta" },
    { title: "Cierre y taller", desc: "Diseñar el sistema de gobierno del proyecto" },
  ], notes: "De por qué (talla única falla) a cómo (flujo de diseño) y a la práctica (CPPS)." },

  { type: "stats", sec: "DISEÑO", title: "El diseño a medida en cifras",
    bigstats: [ {n:11,label:"FACTORES DISEÑO"},{n:4,label:"PASOS DE DISEÑO"},{n:"0–5",label:"NIVELES CAPACIDAD"},{n:40,label:"OBJETIVOS A FILTRAR"} ],
    kvs: [ {k:"HERRAMIENTA",v:"COBIT 2019 Design Guide + Toolkit"},{k:"ENTRADA",v:"Contexto y estrategia de la empresa"},{k:"SALIDA",v:"Alcance + niveles objetivo + prioridades"},{k:"CAPACIDAD",v:"Basada en CMMI (procesos)"},{k:"MADUREZ",v:"Por área de enfoque (focus area)"},{k:"NOVEDAD 2019",v:"Sistema dinámico, no estático"} ],
    notes: "El Design Guide es un documento aparte de COBIT 2019, con un toolkit (hoja de cálculo) para el diseño." },

  { type: "objectives", sec: "DISEÑO", title: "Objetivos de la sesión", items: [
    { lead: "Justificar", rest: "por qué el gobierno se diseña a medida y no se copia." },
    { lead: "Enumerar", rest: "los once factores de diseño y su efecto." },
    { lead: "Distinguir", rest: "niveles de capacidad de proceso y madurez de área de enfoque." },
    { lead: "Aplicar", rest: "los cuatro pasos del flujo de diseño de COBIT." },
    { lead: "Diseñar", rest: "el sistema de gobierno a medida de un CPPS." },
  ], notes: "El entregable: un diseño a medida (alcance + niveles objetivo) que completa el Entregable 1." },

  // -------- SECCIÓN 1 --------
  { type: "section", num: 1, title: "POR QUÉ DISEÑAR A MEDIDA", sub: "El fin de la 'talla única' en el gobierno de TI" },

  { type: "concepts3", sec: "DISEÑO", title: "Estático, a medida y dinámico", items: [
      { k: "TALLA ÚNICA", desc: "Copiar el modelo de otra empresa o implementar los 40 objetivos por igual. Fracasa: cada empresa es distinta.", ex: "El error clásico", color: "FF3B30" },
      { k: "A MEDIDA", desc: "Seleccionar y priorizar objetivos y niveles según los factores de diseño de ESTA empresa.", ex: "COBIT 2019", color: "C6FF00" },
      { k: "DINÁMICO", desc: "El diseño se revisa cuando cambia un factor (nueva regulación, nueva amenaza, fusión).", ex: "Principio 3", color: "27E5E5" },
    ], note: "El gobierno no es un traje estándar: es a medida y se re-ajusta. Copiar el sistema de gobierno de otra empresa es como usar su radiografía para tu diagnóstico.",
    notes: "Tres estados. El principio 3 (dinámico) y el 5 (a medida) de S03 se materializan aquí." },

  { type: "callouts", sec: "DISEÑO", title: "El problema que resuelve el diseño",
    stats: [ {n:"40",label:"objetivos en el catálogo: implementarlos todos es inviable",color:"FF3B30"},{n:"POCOS",label:"los que de verdad importan según el contexto de la empresa",color:"C6FF00"},{n:"NIVEL",label:"además, cada objetivo necesita un nivel de capacidad objetivo distinto",color:"27E5E5"} ],
    note: { body: "El diseño responde dos preguntas: ¿QUÉ objetivos priorizar? y ¿a QUÉ nivel de capacidad llevarlos? Sin diseño, se cae en 'todo importa' (parálisis) o en 'copiar al vecino' (irrelevancia)." },
    notes: "El diseño filtra los 40 y fija el nivel objetivo. Dos decisiones, no una." },

  { type: "grid", sec: "DISEÑO", title: "Qué produce el diseño", cols: 3, lead: "El flujo de diseño entrega tres resultados concretos.",
    cards: [
      { tag: "ALCANCE PRIORIZADO", desc: "El subconjunto de objetivos de gobierno/gestión relevantes para la empresa.", color: "C6FF00" },
      { tag: "NIVELES OBJETIVO", desc: "El nivel de capacidad/madurez al que llevar cada objetivo priorizado.", color: "27E5E5" },
      { tag: "COMPONENTES A MEDIDA", desc: "Las variantes de componentes (procesos, estructuras) adaptadas al contexto.", color: "FFB000" },
    ], notes: "Tres salidas. El proyecto debe producir al menos alcance priorizado + niveles objetivo." },

  { type: "process", sec: "DISEÑO", title: "El flujo de diseño en cuatro pasos", cols: 4, steps: [
      { n:1, title:"Contexto", desc:"Entender estrategia y objetivos.", color:"C6FF00" },
      { n:2, title:"Alcance inicial", desc:"Factores 1–4.", color:"27E5E5" },
      { n:3, title:"Refinar", desc:"Factores 5–10.", color:"FFB000" },
      { n:4, title:"Concluir", desc:"Resolver conflictos y priorizar.", color:"22E06B" },
    ], notes: "Visión general del flujo; se detalla en la sección 4. Los factores de diseño alimentan los pasos 2 y 3." },

  { type: "grid", sec: "DISEÑO", title: "Entradas del diseño", cols: 2, lead: "Para diseñar, se necesita conocer bien la empresa.",
    cards: [
      { tag: "ESTRATEGIA Y METAS", desc: "Hacia dónde va la empresa y qué metas persigue.", color: "C6FF00" },
      { tag: "PERFIL DE RIESGO", desc: "Qué riesgos enfrenta y cuánto tolera.", color: "FF3B30" },
      { tag: "PANORAMA DE AMENAZAS", desc: "El entorno de amenazas, alto en OT conectada.", color: "FFB000" },
      { tag: "CONTEXTO OPERATIVO", desc: "Tamaño, rol de la TI, modelo de aprovisionamiento, cumplimiento.", color: "27E5E5" },
    ], notes: "Las entradas son los factores de diseño. Recogerlas bien es la mitad del trabajo." },

  { type: "compare", sec: "DISEÑO", title: "Diseño bien hecho vs mal hecho",
    leftTitle: "Diseño robusto", leftItems: ["Parte de la estrategia real","Prioriza pocos objetivos","Fija niveles objetivo justificados","Cubre IT y OT","Se revisa cuando cambia el contexto","Usa el toolkit con evidencia"],
    rightTitle: "Diseño deficiente", rightItems: ["Copiado de otra empresa","'Todos los 40 importan'","Niveles arbitrarios o máximos","Ignora la planta","Estático, nunca se revisa","Intuición sin datos"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "Contraste que guía el taller. El pecado más común: fijar todos los niveles al máximo (nivel 5)." },

  { type: "quote", sec: "DISEÑO", text: "El nivel de capacidad objetivo no siempre es 5: es el nivel que el riesgo y la estrategia justifican pagar.", cite: "Principio del diseño a medida",
    notes: "Idea contraintuitiva: más capacidad cuesta más. Se busca el nivel adecuado, no el máximo." },

  // -------- SECCIÓN 2: 11 FACTORES --------
  { type: "section", num: 2, title: "LOS 11 FACTORES DE DISEÑO", sub: "Qué determina el sistema de gobierno de una empresa" },

  { type: "grid", sec: "FACTORES", title: "Vista de los once factores", cols: 4, lead: "Once factores agrupan el contexto que moldea el gobierno.",
    cards: [
      { tag: "1 ESTRATEGIA", desc: "Crecimiento, innovación, costo, servicio, estabilidad.", color: "C6FF00" },
      { tag: "2 METAS EMPRESA", desc: "Las 13 metas empresariales priorizadas.", color: "C6FF00" },
      { tag: "3 PERFIL RIESGO", desc: "Categorías de riesgo y su magnitud.", color: "FF3B30" },
      { tag: "4 ISSUES I&T", desc: "Problemas actuales de TI a resolver.", color: "FF3B30" },
      { tag: "5 AMENAZAS", desc: "Panorama de amenazas (normal/alto).", color: "FFB000" },
      { tag: "6 CUMPLIMIENTO", desc: "Requisitos regulatorios (bajo/alto).", color: "FFB000" },
      { tag: "7 ROL DE TI", desc: "Soporte, fábrica, turnaround, estratégico.", color: "27E5E5" },
      { tag: "8 APROVISIONAM.", desc: "Interno, outsourcing, nube, híbrido.", color: "27E5E5" },
      { tag: "9 MÉTODOS IMPL.", desc: "Ágil, DevOps, tradicional, híbrido.", color: "9D6BFF" },
      { tag: "10 ADOPCIÓN TEC.", desc: "Pionero, seguidor, rezagado.", color: "9D6BFF" },
      { tag: "11 TAMAÑO", desc: "Grande o pyme.", color: "22E06B" },
    ], notes: "Los 11 factores. Los 1-4 fijan el alcance inicial; 5-10 lo refinan; 11 (tamaño) ajusta. No memorizar: entender qué mueve cada uno." },

  { type: "phase", sec: "FACTORES", title: "Factores 1–2 — Estrategia y metas", badge: "ALCANCE INICIAL",
    name: "Hacia dónde va la empresa", what: "FACTOR 1 (estrategia): arquetipos como crecimiento/adquisición, innovación/diferenciación, liderazgo en costos, servicio al cliente/estabilidad. FACTOR 2 (metas empresariales): cuáles de las 13 metas son prioritarias. Juntos, orientan qué objetivos de gobierno cobran relevancia.",
    leftTag: "EN UNA MANUFACTURA", tools: "Estrategia de costo + calidad; metas de eficiencia y continuidad", rightTag: "MUEVE", seen: "Objetivos de optimización y riesgo",
    notes: "Una planta con estrategia de costo prioriza eficiencia y continuidad (DSS04), no innovación disruptiva." },

  { type: "phase", sec: "FACTORES", title: "Factores 3–5 — Riesgo, issues y amenazas", badge: "RIESGO",
    name: "Qué puede salir mal", what: "FACTOR 3 (perfil de riesgo): magnitud por categoría (inversión, seguridad, continuidad, cumplimiento…). FACTOR 4 (issues I&T): problemas actuales (deuda técnica, incidentes). FACTOR 5 (panorama de amenazas): normal o alto — en OT conectada es típicamente ALTO. Elevan la prioridad de objetivos de riesgo y seguridad.",
    leftTag: "EN UN CPPS", tools: "Amenaza OT alta · continuidad crítica · seguridad física", rightTag: "MUEVE", seen: "EDM03, APO12, APO13, DSS05 arriba",
    notes: "En un CPPS, factores 3 y 5 casi siempre empujan seguridad y riesgo al tope. La amenaza OT es alta por diseño." },

  { type: "phase", sec: "FACTORES", title: "Factores 6–8 — Cumplimiento, rol y aprovisionamiento", badge: "CONTEXTO OPERATIVO",
    name: "Cómo opera la TI", what: "FACTOR 6 (cumplimiento): entorno regulatorio bajo/normal/alto. FACTOR 7 (rol de TI): soporte, fábrica, turnaround o estratégico. FACTOR 8 (modelo de aprovisionamiento): interno, outsourcing, nube, híbrido. En un CPPS con integradores y nube, el aprovisionamiento es híbrido y aumenta el riesgo de terceros.",
    leftTag: "EN UN CPPS", tools: "Rol de TI 'fábrica/estratégico' · integradores OT · nube industrial", rightTag: "MUEVE", seen: "APO09/APO10 proveedores, MEA03",
    notes: "El rol de TI 'fábrica' (crítica para operar) exige alta disponibilidad; el aprovisionamiento híbrido, gobierno de terceros." },

  { type: "phase", sec: "FACTORES", title: "Factores 9–11 — Métodos, adopción y tamaño", badge: "REFINAMIENTO",
    name: "Cómo construye y qué tan grande es", what: "FACTOR 9 (métodos de implementación): ágil, DevOps, tradicional. FACTOR 10 (estrategia de adopción tecnológica): pionero (first mover), seguidor o rezagado. FACTOR 11 (tamaño): las pymes usan un gobierno más ligero. La mayoría de la industria colombiana es pyme seguidora.",
    leftTag: "EN LA INDUSTRIA REGIONAL", tools: "Pyme · adopción seguidora · métodos tradicionales", rightTag: "MUEVE", seen: "Gobierno ligero pero con foco en riesgo",
    notes: "El tamaño (F11) permite simplificar; pero incluso una pyme industrial no puede escatimar en seguridad OT si está conectada." },

  { type: "matrix", sec: "FACTORES", title: "Cómo cada factor mueve el alcance", firstW: 4.0,
    cols: ["Factor", "Si es alto/crítico…", "Sube la prioridad de"],
    rows: [
      ["Amenazas (F5)", {t:"OT conectada",color:"FF3B30"}, "APO13, DSS05"],
      ["Cumplimiento (F6)", {t:"Regulado",color:"FFB000"}, "MEA03, APO12"],
      ["Rol de TI (F7)", {t:"Fábrica/estratégico",color:"27E5E5"}, "DSS04, BAI04"],
      ["Aprovision. (F8)", {t:"Terceros/nube",color:"9D6BFF"}, "APO10, DSS05"],
    ], notes: "Traducción práctica: cada factor 'empuja' ciertos objetivos hacia arriba en la prioridad." },

  { type: "callouts", sec: "FACTORES", title: "Factores decisivos en la industria",
    stats: [ {n:"AMENAZAS",label:"la conexión IT/OT eleva el panorama de amenazas a 'alto' casi siempre",color:"FF3B30"},{n:"CONTINUIDAD",label:"el rol de TI como 'fábrica' hace la disponibilidad no negociable",color:"C6FF00"},{n:"TERCEROS",label:"integradores y proveedores con acceso remoto disparan el riesgo de suministro",color:"FFB000"} ],
    note: { body: "En un CPPS, tres factores dominan el diseño: panorama de amenazas alto, rol de TI crítico para operar, y aprovisionamiento con terceros. Estos tres explican por qué seguridad, continuidad y gestión de proveedores encabezan el alcance." },
    notes: "Resumen accionable: en industria, estos tres factores casi siempre mandan." },

  // -------- SECCIÓN 3: CAPACIDAD Y MADUREZ --------
  { type: "section", num: 3, title: "CAPACIDAD Y MADUREZ", sub: "Cuánto gobierno es suficiente: niveles 0–5" },

  { type: "grid", sec: "CAPACIDAD", title: "Qué es la capacidad de un proceso", cols: 2, lead: "COBIT 2019 mide cada objetivo por la capacidad de sus procesos, con enfoque CMMI.",
    cards: [
      { tag: "CAPACIDAD DE PROCESO", desc: "Cuán bien un proceso logra su propósito. Se mide por actividades cumplidas, de nivel 0 a 5.", color: "C6FF00" },
      { tag: "ENFOQUE CMMI", desc: "Cada nivel exige las actividades del anterior más las suyas. Progresión acumulativa.", color: "27E5E5" },
      { tag: "NIVEL OBJETIVO", desc: "No siempre 5: el nivel que el riesgo y la estrategia justifican para ESE proceso.", color: "FFB000" },
      { tag: "BRECHA (GAP)", desc: "La diferencia entre el nivel actual y el objetivo define el plan de mejora.", color: "FF3B30" },
    ], notes: "Capacidad se mide por proceso. El nivel objetivo es una decisión de gobierno, no un ideal universal." },

  { type: "process", sec: "CAPACIDAD", title: "Los seis niveles de capacidad", cols: 3, steps: [
      { n:0, title:"Incompleto", desc:"No se logra el propósito.", color:"8C8C8C" },
      { n:1, title:"Inicial", desc:"Se logra, pero informal.", color:"FF6B35" },
      { n:2, title:"Gestionado", desc:"Planificado y monitoreado.", color:"FFB000" },
      { n:3, title:"Establecido", desc:"Proceso estándar definido.", color:"22E06B" },
      { n:4, title:"Predecible", desc:"Medido cuantitativamente.", color:"27E5E5" },
      { n:5, title:"Optimizado", desc:"Mejora continua.", color:"C6FF00" },
    ], notes: "0–5 basados en CMMI. Cada nivel incluye al anterior. La mayoría de procesos maduros de industria viven en 2–3." },

  { type: "grid", sec: "CAPACIDAD", title: "Madurez por área de enfoque", cols: 2, lead: "Además de la capacidad por proceso, COBIT mide la MADUREZ de un área de enfoque completa.",
    cards: [
      { tag: "CAPACIDAD", desc: "Se aplica a un objetivo/proceso individual (p. ej. APO12 en nivel 3).", color: "C6FF00" },
      { tag: "MADUREZ", desc: "Se aplica a un área de enfoque completa (p. ej. 'seguridad de la información'), agregando varios objetivos.", color: "27E5E5" },
      { tag: "RELACIÓN", desc: "Un área alcanza un nivel de madurez cuando todos sus objetivos llegan a la capacidad correspondiente.", color: "FFB000" },
      { tag: "USO", desc: "Madurez para comunicar a la dirección; capacidad para planificar la mejora técnica.", color: "22E06B" },
    ], notes: "Distinguir capacidad (objetivo) de madurez (área). La madurez es más 'ejecutiva'; la capacidad, más operativa." },

  { type: "compare", sec: "CAPACIDAD", title: "Capacidad vs madurez",
    leftTitle: "Nivel de capacidad", leftItems: ["Unidad: proceso/objetivo","Basado en actividades cumplidas","Escala 0–5 (CMMI)","Uso: planificar mejora","Ejemplo: APO12 = 3"],
    rightTitle: "Nivel de madurez", rightItems: ["Unidad: área de enfoque","Agrega varios objetivos","Escala 0–5","Uso: reportar a dirección","Ejemplo: seguridad = 2"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    notes: "Distinción clave para el análisis de casos. Capacidad es granular; madurez, agregada." },

  { type: "matrix", sec: "CAPACIDAD", title: "Evaluación de brechas — ejemplo", firstW: 3.6,
    cols: ["Objetivo", "Actual", "Objetivo", "Brecha"],
    rows: [
      ["EDM03 Riesgo", {t:"1",color:"FF6B35"}, {t:"3",color:"C6FF00"}, {t:"+2",color:"FF3B30"}],
      ["APO13 Seguridad", {t:"1",color:"FF6B35"}, {t:"3",color:"C6FF00"}, {t:"+2",color:"FF3B30"}],
      ["DSS04 Continuidad", {t:"2",color:"FFB000"}, {t:"3",color:"C6FF00"}, {t:"+1",color:"FFB000"}],
      ["MEA01 Desempeño", {t:"2",color:"FFB000"}, {t:"2",color:"C6FF00"}, {t:"0",color:"22E06B"}],
    ], notes: "La brecha prioriza el plan de mejora: primero los +2 en objetivos críticos (riesgo, seguridad)." },

  { type: "phase", sec: "CAPACIDAD", title: "Cómo evaluar el nivel actual", badge: "ASSESSMENT",
    name: "De la evidencia al nivel", what: "Se evalúa cada proceso revisando si cumple las actividades de cada nivel, con evidencia (documentos, registros, entrevistas). No es una autopercepción: exige pruebas. El resultado es un nivel actual por objetivo, que comparado con el objetivo produce la brecha y el plan de mejora priorizado.",
    leftTag: "EVIDENCIA", tools: "Documentos · registros · entrevistas · observación", rightTag: "PRODUCE", seen: "Mapa de brechas y plan de mejora",
    notes: "Recalcar: la evaluación se basa en evidencia, no en opinión. El proyecto puede hacer una evaluación cualitativa fundamentada." },

  { type: "callouts", sec: "CAPACIDAD", title: "Cuánto gobierno es suficiente",
    stats: [ {n:"NIVEL 3",label:"suele bastar para objetivos importantes: proceso establecido y estándar",color:"C6FF00"},{n:"NIVEL 4–5",label:"solo donde el riesgo lo justifica: medición y optimización cuestan caro",color:"FFB000"},{n:"GAP",label:"cerrar de 1 a 3 es más urgente que de 3 a 5 en lo crítico",color:"FF3B30"} ],
    note: { body: "El nivel objetivo se elige por costo-beneficio: llevar la seguridad OT de nivel 1 a 3 rinde mucho; llevar un objetivo secundario de 3 a 5 rara vez se justifica. Gobernar es también no sobre-gobernar." },
    notes: "Mensaje económico: la capacidad tiene costo. Se invierte donde el riesgo lo paga." },

  // -------- SECCIÓN 4: FLUJO DE DISEÑO --------
  { type: "section", num: 4, title: "EL FLUJO DE DISEÑO", sub: "Los cuatro pasos del COBIT Design Guide" },

  { type: "process", sec: "FLUJO", title: "Los cuatro pasos en detalle", cols: 4, steps: [
      { n:1, title:"Contexto", desc:"Estrategia, metas, rol de TI.", color:"C6FF00" },
      { n:2, title:"Alcance inicial", desc:"Aplicar factores 1–4.", color:"27E5E5" },
      { n:3, title:"Refinar alcance", desc:"Aplicar factores 5–10.", color:"FFB000" },
      { n:4, title:"Concluir", desc:"Resolver conflictos y priorizar.", color:"22E06B" },
    ], notes: "Los cuatro pasos del Design Guide. Cada paso usa el toolkit (hoja de cálculo) para calcular sugerencias." },

  { type: "phase", sec: "FLUJO", title: "Paso 1 — Entender el contexto", badge: "PASO 1 / 4",
    name: "Antes de decidir, comprender", what: "Se estudia la estrategia empresarial, las metas, el rol de la TI y el entorno. Sin este paso, los factores se llenan a ciegas. En un CPPS: entender el proceso productivo, la criticidad de la disponibilidad y la exposición OT es imprescindible.",
    leftTag: "ENTRADAS", tools: "Estrategia · metas · rol de TI · entorno", rightTag: "SALIDA", seen: "Comprensión documentada del contexto",
    notes: "El paso más subestimado. Un buen diseño empieza por entender el negocio, no por la herramienta." },

  { type: "phase", sec: "FLUJO", title: "Paso 2 — Alcance inicial", badge: "PASO 2 / 4",
    name: "Factores 1 a 4", what: "Se aplican estrategia (F1), metas empresariales (F2), perfil de riesgo (F3) e issues de I&T (F4). El toolkit sugiere un primer conjunto de objetivos con importancia relativa. Es el 'borrador' del alcance del sistema de gobierno.",
    leftTag: "FACTORES", tools: "1 Estrategia · 2 Metas · 3 Riesgo · 4 Issues", rightTag: "SALIDA", seen: "Alcance inicial con puntajes",
    notes: "El toolkit convierte los factores en puntajes por objetivo. El resultado es orientativo, se refina en el paso 3." },

  { type: "phase", sec: "FLUJO", title: "Paso 3 — Refinar el alcance", badge: "PASO 3 / 4",
    name: "Factores 5 a 10", what: "Se refina con panorama de amenazas (F5), cumplimiento (F6), rol de TI (F7), aprovisionamiento (F8), métodos de implementación (F9) y adopción tecnológica (F10). En un CPPS, F5 y F8 suelen reforzar seguridad y gestión de terceros.",
    leftTag: "FACTORES", tools: "5 Amenazas · 6 Cumplimiento · 7 Rol · 8 Sourcing · 9 Métodos · 10 Adopción", rightTag: "SALIDA", seen: "Alcance refinado y priorizado",
    notes: "El refinamiento ajusta el borrador. Cada factor puede subir o bajar la importancia de objetivos." },

  { type: "phase", sec: "FLUJO", title: "Paso 4 — Concluir el diseño", badge: "PASO 4 / 4",
    name: "Resolver y priorizar", what: "Se consolidan las sugerencias, se resuelven conflictos (factores que empujan en direcciones opuestas) con juicio directivo, y se fija el alcance final con niveles de capacidad objetivo por objetivo. El resultado es el sistema de gobierno a medida, listo para implementar por fases.",
    leftTag: "DECISIONES", tools: "Priorización · niveles objetivo · fases", rightTag: "SALIDA", seen: "Sistema de gobierno a medida",
    notes: "El paso 4 exige juicio: el toolkit sugiere, la dirección decide. Aquí se cierra el diseño." },

  { type: "grid", sec: "FLUJO", title: "El toolkit de diseño (canvas)", cols: 3, lead: "COBIT provee una hoja de cálculo que traduce factores en sugerencias.",
    cards: [
      { tag: "ENTRADA", desc: "Se puntúan los 11 factores según el contexto de la empresa.", color: "C6FF00" },
      { tag: "CÁLCULO", desc: "El toolkit pondera cada factor y genera un puntaje por objetivo.", color: "27E5E5" },
      { tag: "SALIDA", desc: "Mapa de calor de objetivos priorizados y niveles sugeridos.", color: "FFB000" },
    ], notes: "El toolkit es una guía cuantitativa, no un oráculo: sus sugerencias se ajustan con juicio (paso 4)." },

  { type: "matrix", sec: "FLUJO", title: "Resolver conflictos entre factores", firstW: 4.6,
    cols: ["Conflicto típico", "Resolución de gobierno"],
    rows: [
      ["Innovación (F1) vs riesgo alto (F3)", {t:"Innovar en entorno acotado y seguro",color:"C6FF00"}],
      ["Nube (F8) vs cumplimiento (F6)", {t:"Datos sensibles en planta; resto en nube",color:"27E5E5"}],
      ["Ágil (F9) vs continuidad (F7)", {t:"Ágil en IT, controlado en OT",color:"FFB000"}],
    ], notes: "Los conflictos entre factores son normales; el juicio directivo los resuelve. El proyecto documentará al menos uno." },

  // -------- SECCIÓN 5: DISEÑO PARA UN CPPS --------
  { type: "section", num: 5, title: "DISEÑO PARA UN SISTEMA CIBER-FÍSICO", sub: "Los factores aplicados al piso de planta" },

  { type: "phase", sec: "APLICACIÓN", title: "Caso — planta de alimentos mediana", badge: "CASO COMPLETO",
    name: "De factores a sistema de gobierno", what: "Estrategia costo+calidad (F1), riesgo alto en continuidad y seguridad (F3, F5), cumplimiento de exportación (F6), rol de TI 'fábrica' (F7), aprovisionamiento híbrido con integradores (F8), pyme seguidora (F10, F11). El diseño prioriza EDM03, APO12, APO13, DSS04, DSS05, APO14, MEA03, con niveles objetivo 3 en los críticos.",
    leftTag: "ALCANCE FINAL", tools: "7 objetivos priorizados · niveles 2–3", rightTag: "IMPLEMENTACIÓN", seen: "Por fases, empezando por riesgo/seguridad",
    notes: "Caso realista completo. Muestra cómo los factores producen un alcance concreto y manejable." },

  { type: "matrix", sec: "APLICACIÓN", title: "Perfil de factores de una manufactura", firstW: 3.6,
    cols: ["Factor", "Valor típico", "Efecto"],
    rows: [
      ["Estrategia (F1)", {t:"Costo + calidad",color:"C6FF00"}, "Eficiencia, continuidad"],
      ["Amenazas (F5)", {t:"Alto (OT)",color:"FF3B30"}, "Seguridad arriba"],
      ["Rol TI (F7)", {t:"Fábrica",color:"27E5E5"}, "Disponibilidad crítica"],
      ["Tamaño (F11)", {t:"Pyme",color:"FFB000"}, "Gobierno ligero"],
    ], notes: "Perfil orientativo para la industria regional. El proyecto lo ajustará a su empresa." },

  { type: "grid", sec: "APLICACIÓN", title: "Por qué OT eleva el diseño", cols: 2, lead: "La convergencia ciber-física mueve varios factores hacia el extremo crítico.",
    cards: [
      { tag: "AMENAZAS ALTAS", desc: "OT conectada = superficie de ataque física. F5 casi siempre 'alto'.", color: "FF3B30" },
      { tag: "CONTINUIDAD CRÍTICA", desc: "El rol de TI es 'fábrica': su caída detiene la producción. F7 al máximo.", color: "C6FF00" },
      { tag: "TERCEROS EN PLANTA", desc: "Integradores y fabricantes con acceso remoto. F8 híbrido, riesgo alto.", color: "FFB000" },
      { tag: "CUMPLIMIENTO FÍSICO", desc: "Seguridad industrial y ambiental además de datos. F6 amplio.", color: "27E5E5" },
    ], notes: "Estos cuatro efectos explican por qué el diseño de un CPPS siempre prioriza seguridad, continuidad y terceros." },

  { type: "phase", sec: "APLICACIÓN", title: "Taller de la sesión", badge: "SEGUIMIENTO",
    name: "Diseñar el gobierno del proyecto", what: "Para la empresa del proyecto: 1) puntúa cualitativamente los 11 factores de diseño. 2) A partir de la cascada de S03, selecciona el alcance final (6–10 objetivos). 3) Fija un nivel de capacidad objetivo por objetivo. 4) Estima el nivel actual y calcula la brecha. Entregable: mapa de calor de objetivos + tabla de brechas.",
    leftTag: "FORMATO", tools: "Mapa de calor + tabla actual/objetivo/brecha", rightTag: "COMPLETA", seen: "Entregable 1 (semana 5)",
    notes: "Este taller cierra el núcleo del Entregable 1: diagnóstico + diseño a medida del sistema de gobierno." },

  { type: "callouts", sec: "APLICACIÓN", title: "Errores frecuentes de diseño",
    stats: [ {n:"NIVEL 5",label:"fijar todos los objetivos al máximo: costoso e injustificado",color:"FF3B30"},{n:"IGNORAR OT",label:"diseñar solo para IT y dejar la planta sin objetivos de seguridad",color:"FFB000"},{n:"ESTÁTICO",label:"diseñar una vez y no revisar cuando cambia una amenaza o regulación",color:"27E5E5"} ],
    note: { body: "El diseño a medida es dinámico y económico: niveles justificados, cobertura IT+OT y revisión periódica. Estos tres errores vacían de valor el esfuerzo de diseño." },
    notes: "Advertencias antes del taller para que el diseño del proyecto sea realista." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "A medida", desc: "El gobierno se diseña para la empresa; no se copia." },
      { label: "11 factores", desc: "Contexto que moldea qué objetivos y a qué nivel." },
      { label: "Capacidad 0–5", desc: "Por proceso (CMMI); el objetivo no siempre es 5." },
      { label: "Madurez", desc: "Por área de enfoque; agrega varios objetivos." },
      { label: "4 pasos", desc: "Contexto, alcance inicial, refinar, concluir." },
    ], notes: "Repaso. Verificar que distinguen capacidad de madurez y factores de pasos." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "Factor de diseño", d: "Variable de contexto que moldea el sistema de gobierno." },
      { t: "Diseño a medida", d: "Selección y priorización de objetivos según el contexto." },
      { t: "Capacidad", d: "Cuán bien un proceso logra su propósito (0–5)." },
      { t: "Madurez", d: "Nivel agregado de un área de enfoque (0–5)." },
      { t: "CMMI", d: "Modelo base de los niveles de capacidad." },
      { t: "Brecha (gap)", d: "Diferencia entre nivel actual y objetivo." },
      { t: "Design Guide", d: "Documento COBIT con el flujo y el toolkit de diseño." },
      { t: "Panorama de amenazas", d: "Factor 5: entorno de amenazas (normal/alto)." },
    ], notes: "Vocabulario de diseño a medida." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — cierre de la Unidad 1", cols: 3, steps: [
      { n:"S01", title:"Fundamentos", desc:"Gobierno, IT/OT, CPPS.", color:"8C8C8C" },
      { n:"S02", title:"ISO 38500", desc:"Principios.", color:"8C8C8C" },
      { n:"S03", title:"COBIT I", desc:"Sistema y cascada.", color:"8C8C8C" },
      { n:"S04", title:"COBIT II", desc:"Diseño a medida · hoy.", color:"C6FF00" },
      { n:"S05", title:"Valor · ITIL 4", desc:"Cierre U1 · Entregable 1.", color:"27E5E5" },
      { n:"→", title:"Unidad 2", desc:"Sistemas ciber-físicos.", color:"9D6BFF" },
    ], notes: "S05 cierra la Unidad 1 con valor, riesgo, recursos e ITIL 4, y recoge el Entregable 1." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "ISACA — Portal COBIT (overview y Design Toolkit; base gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "ISACA — COBIT 2019 Design Guide (diseño a medida)", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
      { t: "ISACA — COBIT 2019 Implementation Guide", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
      { t: "CMMI Institute — modelo CMMI (base de la capacidad)", url: "https://cmmiinstitute.com/", acc: "pago" },
      { t: "De Haes & Van Grembergen (2020) — Enterprise Governance of IT", url: "https://link.springer.com/book/10.1007/978-3-030-25918-1", acc: "pago" },
    ], notes: "Design Guide e Implementation Guide son los documentos clave de esta sesión." },

  { type: "closing", nextNum: 5, nextTitle: "VALOR, RIESGO Y RECURSOS — ITIL 4", nextDesc: "Sistema de valor del servicio, gestión del portafolio de inversión, KPI/KRI y cierre de la Unidad 1.", prompt: "root@planta:~# next --session 05 _",
    notes: "Recordar: el Entregable 1 se entrega en la semana 5 (S05). Traer el diseño a medida del taller." },
];
