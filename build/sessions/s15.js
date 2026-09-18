// S15 — Ciberseguridad industrial II: riesgo, cumplimiento y continuidad
module.exports = [
  { type: "cover", title: "CIBERSEGURIDAD\nINDUSTRIAL II", subtitle: "NIST CSF 2.0, riesgo IT/OT, cumplimiento y continuidad del negocio",
    notes: "Segunda de ciberseguridad. Del control técnico (S14) a la gestión: riesgo, cumplimiento y continuidad. Lab 9 y Evaluación de caso 2." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "NIST CSF 2.0", desc: "Las seis funciones y su articulación con COBIT" },
    { title: "Evaluación de riesgo IT/OT", desc: "Probabilidad, impacto y controles" },
    { title: "Cumplimiento", desc: "Marco legal colombiano y sectorial" },
    { title: "Continuidad del negocio", desc: "RTO/RPO y respuesta a incidentes OT" },
    { title: "Lab 9 y síntesis", desc: "Evaluación de riesgo del proyecto" },
    { title: "Cierre", desc: "Referencias y Evaluación de caso 2" },
  ], notes: "De gobernar el riesgo (CSF) a cumplir (legal) y a resistir (continuidad)." },

  { type: "stats", sec: "GESTIÓN", title: "Gestión del riesgo OT en cifras",
    bigstats: [ {n:6,label:"FUNCIONES NIST CSF 2.0"},{n:"P×I",label:"RIESGO"},{n:"RTO/RPO",label:"CONTINUIDAD"},{n:"1581",label:"LEY COLOMBIANA"} ],
    kvs: [ {k:"CSF 2.0",v:"Gobernar, Identificar, Proteger, Detectar, Responder, Recuperar"},{k:"NOVEDAD 2.0",v:"Función 'Gobernar' añadida (2024)"},{k:"RIESGO",v:"Impacto en producción, personas y ambiente"},{k:"LEGAL",v:"Ley 1581, Decreto 1074, CONPES 3995, Ley 1273"},{k:"CONTINUIDAD",v:"RTO/RPO en líneas de producción"},{k:"COBIT",v:"EDM03, APO12, DSS04"} ],
    notes: "NIST CSF 2.0 (2024) añadió la función 'Gobernar', alineándose con COBIT. Riesgo, cumplimiento y continuidad son el foco." },

  { type: "objectives", sec: "GESTIÓN", title: "Objetivos de la sesión", items: [
    { lead: "Aplicar", rest: "las seis funciones de NIST CSF 2.0 a un entorno OT." },
    { lead: "Construir", rest: "una evaluación de riesgo IT/OT con controles." },
    { lead: "Identificar", rest: "las obligaciones legales aplicables en Colombia." },
    { lead: "Definir", rest: "RTO/RPO y un plan de respuesta a incidentes OT." },
    { lead: "Elaborar", rest: "el registro de riesgos del proyecto (Lab 9)." },
  ], notes: "El entregable: la evaluación de riesgo IT/OT del proyecto, insumo del documento final." },

  // -------- SECCIÓN 1: NIST CSF 2.0 --------
  { type: "section", num: 1, title: "NIST CYBERSECURITY FRAMEWORK 2.0", sub: "Un lenguaje común de gestión del riesgo cibernético" },

  { type: "grid", sec: "CSF", title: "Las seis funciones", cols: 3, lead: "NIST CSF 2.0 organiza la ciberseguridad en seis funciones.",
    cards: [
      { tag: "GOBERNAR (NUEVA)", desc: "Estrategia, roles, política y supervisión del riesgo cibernético.", color: "C6FF00" },
      { tag: "IDENTIFICAR", desc: "Conocer activos, riesgos y contexto (no se protege lo que no se conoce).", color: "27E5E5" },
      { tag: "PROTEGER", desc: "Salvaguardas: acceso, cifrado, segmentación, formación.", color: "FFB000" },
      { tag: "DETECTAR", desc: "Identificar eventos y anomalías a tiempo.", color: "22E06B" },
      { tag: "RESPONDER", desc: "Actuar ante un incidente: contener, comunicar, mitigar.", color: "9D6BFF" },
      { tag: "RECUPERAR", desc: "Restaurar servicios y aprender del incidente.", color: "FF6B35" },
    ], notes: "Las seis funciones dan un ciclo completo. 'Gobernar' es nueva en 2.0 (2024) y envuelve a las otras cinco: es el puente con COBIT." },

  { type: "phase", sec: "CSF", title: "Por qué se añadió 'Gobernar'", badge: "NOVEDAD 2.0",
    name: "El puente con el gobierno de TI", what: "NIST CSF 2.0 (2024) añadió la función Gobernar porque la ciberseguridad no es solo técnica: necesita estrategia, roles, política y supervisión de la dirección. Es exactamente lo que vimos en la Unidad 1 (EDM, apetito de riesgo, responsabilidad). Con 'Gobernar', el CSF se articula naturalmente con COBIT y 38500.",
    leftTag: "GOBERNAR CUBRE", tools: "Estrategia · roles · política · supervisión", rightTag: "SE ALINEA CON", seen: "COBIT EDM03, ISO 38500",
    notes: "'Gobernar' cierra el círculo del curso: la seguridad es materia de gobierno. Alinea CSF con COBIT y 38500." },

  { type: "matrix", sec: "CSF", title: "Las funciones aplicadas a OT", firstW: 3.0,
    cols: ["Función", "En un CPPS", "Ejemplo"],
    rows: [
      ["Identificar", {t:"Inventario OT",color:"27E5E5"}, "Activos, zonas, riesgos"],
      ["Proteger", {t:"Segmentar/endurecer",color:"FFB000"}, "DMZ, MFA remoto"],
      ["Detectar", {t:"Monitoreo OT",color:"22E06B"}, "IDS de red OT"],
      ["Responder", {t:"Plan de incidentes",color:"9D6BFF"}, "Aislar la celda"],
      ["Recuperar", {t:"Continuidad",color:"FF6B35"}, "Restaurar desde backup"],
    ], notes: "Cada función se aterriza en OT. 'Identificar' (el inventario de activos OT) suele ser el punto de partida más débil." },

  { type: "grid", sec: "CSF", title: "El inventario: no se protege lo invisible", cols: 2, lead: "Identificar es el cimiento; casi siempre incompleto en OT.",
    cards: [
      { tag: "ACTIVOS OCULTOS", desc: "Muchas plantas no tienen inventario completo de sus dispositivos OT.", color: "FF3B30" },
      { tag: "DESCUBRIMIENTO PASIVO", desc: "Herramientas que mapean OT sin interferir el proceso.", color: "C6FF00" },
      { tag: "CRITICIDAD", desc: "Clasificar cada activo por su impacto en producción y seguridad.", color: "FFB000" },
      { tag: "BASE DE TODO", desc: "Sin inventario no hay segmentación, ni parcheo, ni respuesta.", color: "27E5E5" },
    ], note: "El inventario de activos OT es el cimiento invisible de toda la seguridad. Su ausencia es la debilidad más común y la primera que el proyecto debe señalar.",
    notes: "El inventario OT es el punto de partida. Su ausencia bloquea todos los demás controles. Debilidad frecuentísima." },

  { type: "callouts", sec: "CSF", title: "CSF, COBIT y 62443 — el mapa completo",
    stats: [ {n:"COBIT/38500",label:"gobierno: apetito, responsabilidad, programa (U1)",color:"C6FF00"},{n:"NIST CSF 2.0",label:"funciones de gestión del riesgo cibernético (hoy)",color:"27E5E5"},{n:"IEC 62443",label:"controles técnicos específicos de OT (S14)",color:"FFB000"} ],
    note: { body: "Los tres marcos encajan: COBIT/38500 gobiernan, NIST CSF organiza la gestión del riesgo cibernético, e IEC 62443 da los controles técnicos de OT. El curso los ha recorrido en orden: gobernar (U1), integrar (U2-3) y proteger (U4)." },
    notes: "El mapa completo de marcos de seguridad. Coherencia del curso: gobierno → gestión → técnica." },

  { type: "grid", sec: "CSF", title: "Perfiles y niveles del CSF", cols: 2, lead: "El CSF se adapta a cada organización con perfiles.",
    cards: [
      { tag: "PERFIL ACTUAL", desc: "Cómo está hoy la organización en cada función y categoría.", color: "FFB000" },
      { tag: "PERFIL OBJETIVO", desc: "A dónde quiere llegar según su riesgo y recursos.", color: "C6FF00" },
      { tag: "BRECHA", desc: "La diferencia entre ambos define el plan de mejora priorizado.", color: "FF3B30" },
      { tag: "NIVELES (TIERS)", desc: "De parcial a adaptativo: madurez de la gestión del riesgo.", color: "27E5E5" },
    ], note: "El CSF no impone un nivel único: cada organización define su perfil objetivo según su riesgo. La brecha perfil actual→objetivo guía la inversión en seguridad, igual que la madurez en COBIT (S04).",
    notes: "Los perfiles del CSF son análogos al diseño a medida de COBIT. La brecha prioriza. Reutiliza la lógica de S04." },

  // -------- SECCIÓN 2: EVALUACIÓN DE RIESGO --------
  { type: "section", num: 2, title: "EVALUACIÓN DE RIESGO IT/OT", sub: "Medir el riesgo por su impacto físico" },

  { type: "grid", sec: "RIESGO", title: "El riesgo OT se mide distinto", cols: 2, lead: "El impacto no es solo de datos.",
    cards: [
      { tag: "IMPACTO EN PRODUCCIÓN", desc: "Paradas, pérdida de lote, incumplimiento de entregas.", color: "C6FF00" },
      { tag: "IMPACTO EN PERSONAS", desc: "Seguridad física: lesiones, incluso vidas (TRITON).", color: "FF3B30" },
      { tag: "IMPACTO AMBIENTAL", desc: "Derrames, emisiones, daño ambiental.", color: "22E06B" },
      { tag: "IMPACTO EN DATOS", desc: "El clásico de IT: confidencialidad e integridad.", color: "27E5E5" },
    ], note: "Al evaluar riesgo OT, el impacto se mide en producción, seguridad física y ambiente, no solo en datos. Un riesgo 'menor' en datos puede ser 'crítico' en seguridad física.",
    notes: "El impacto OT es multidimensional. La seguridad física puede convertir un riesgo IT 'bajo' en OT 'crítico'." },

  { type: "process", sec: "RIESGO", title: "El proceso de evaluación de riesgo", cols: 3, steps: [
      { n:1, title:"Identificar activos", desc:"Inventario y criticidad.", color:"C6FF00" },
      { n:2, title:"Identificar amenazas", desc:"STRIDE, actores (S14).", color:"27E5E5" },
      { n:3, title:"Analizar", desc:"Probabilidad × impacto.", color:"FFB000" },
      { n:4, title:"Evaluar", desc:"Comparar con el apetito.", color:"22E06B" },
      { n:5, title:"Tratar", desc:"Mitigar, transferir, evitar, aceptar.", color:"9D6BFF" },
      { n:6, title:"Monitorear", desc:"Revisar y actualizar.", color:"FF6B35" },
    ], notes: "El proceso sigue ISO 31000 / IEC 62443-3-2. Es el mismo ciclo de APO12 (S05), aplicado a OT." },

  { type: "matrix", sec: "RIESGO", title: "Mapa de calor — ejemplo", firstW: 3.8,
    cols: ["Riesgo", "Prob", "Impacto", "Nivel"],
    rows: [
      ["Ransomware IT → OT", {t:"Media",color:"FFB000"}, {t:"Crítico",color:"FF3B30"}, {t:"Alto",color:"FF3B30"}],
      ["Acceso remoto sin control", {t:"Alta",color:"FF3B30"}, {t:"Alto",color:"FF3B30"}, {t:"Alto",color:"FF3B30"}],
      ["Falla de sensor crítico", {t:"Media",color:"FFB000"}, {t:"Medio",color:"FFB000"}, {t:"Medio",color:"FFB000"}],
      ["Fuga de recetas", {t:"Baja",color:"22E06B"}, {t:"Alto",color:"FF3B30"}, {t:"Medio",color:"FFB000"}],
    ], notes: "El mapa de calor prioriza. Los riesgos 'Alto' se tratan primero. El proyecto construye el suyo en el Lab 9." },

  { type: "grid", sec: "RIESGO", title: "Controles mapeados a los marcos", cols: 2, lead: "Cada control responde a una amenaza y se ancla en un marco.",
    cards: [
      { tag: "SEGMENTACIÓN", desc: "DMZ y zonas/conductos → IEC 62443-3-3, CSF Proteger.", color: "C6FF00" },
      { tag: "ACCESO REMOTO SEGURO", desc: "VPN, MFA, jump server → CSF Proteger, APO13.", color: "27E5E5" },
      { tag: "MONITOREO OT", desc: "IDS de red OT → CSF Detectar, DSS05.", color: "FFB000" },
      { tag: "RESPALDOS", desc: "Backups probados y aislados → CSF Recuperar, DSS04.", color: "22E06B" },
    ], note: "Cada control se justifica por la amenaza que mitiga y se ancla en un marco (62443, CSF, COBIT). Así la evaluación de riesgo es trazable y defendible ante auditoría.",
    notes: "Mapear controles a marcos hace la evaluación auditable. Es lo que se espera en el Entregable final." },

  { type: "callouts", sec: "RIESGO", title: "El riesgo se gobierna, no se elimina",
    stats: [ {n:"CERO",label:"riesgo cero no existe: siempre queda un riesgo residual",color:"FFB000"},{n:"APETITO",label:"la junta decide cuánto riesgo residual acepta (EDM03)",color:"C6FF00"},{n:"CONSCIENTE",label:"aceptar un riesgo sabiéndolo es gobierno; ignorarlo es negligencia",color:"FF3B30"} ],
    note: { body: "El objetivo no es eliminar el riesgo, sino reducirlo a un nivel aceptable (el apetito, fijado por la junta) y aceptar conscientemente lo que queda. La diferencia entre gobierno y negligencia es saber qué riesgo se está corriendo." },
    notes: "El riesgo residual es inevitable. Gobernarlo es aceptarlo conscientemente dentro del apetito. Conecta con EDM03 (S05)." },

  { type: "grid", sec: "RIESGO", title: "Herramientas de evaluación de riesgo", cols: 3, lead: "Con qué se hace la evaluación en la práctica.",
    cards: [
      { tag: "DESCUBRIMIENTO OT", desc: "Mapeo pasivo de activos sin interferir el proceso.", color: "C6FF00" },
      { tag: "MATRIZ P×I", desc: "Probabilidad × impacto con escalas definidas.", color: "27E5E5" },
      { tag: "MITRE ATT&CK ICS", desc: "Catálogo de tácticas y técnicas de ataque a OT.", color: "FFB000" },
      { tag: "IEC 62443-3-2", desc: "Método formal de evaluación de riesgo para diseño.", color: "22E06B" },
      { tag: "ESCENARIOS", desc: "Análisis de escenarios de ataque plausibles.", color: "9D6BFF" },
      { tag: "MAPA DE CALOR", desc: "Visualización que prioriza la acción.", color: "FF6B35" },
    ], notes: "Las herramientas van del inventario (descubrimiento) al análisis (matriz, ATT&CK) y la comunicación (mapa de calor). MITRE ATT&CK for ICS es el catálogo de referencia." },

  // -------- SECCIÓN 3: CUMPLIMIENTO --------
  { type: "section", num: 3, title: "CUMPLIMIENTO — MARCO LEGAL", sub: "Las obligaciones que aplican en Colombia" },

  { type: "grid", sec: "LEGAL", title: "Marco legal colombiano", cols: 2, lead: "Las normas que un CPPS debe cumplir.",
    cards: [
      { tag: "LEY 1581 DE 2012", desc: "Protección de datos personales (incluye datos de empleados).", color: "C6FF00" },
      { tag: "DECRETO 1074 DE 2015", desc: "Reglamenta la protección de datos (registro, responsable).", color: "27E5E5" },
      { tag: "LEY 1273 DE 2009", desc: "Delitos informáticos: tipifica el acceso abusivo y el daño.", color: "FFB000" },
      { tag: "CONPES 3995 DE 2020", desc: "Política de confianza y seguridad digital.", color: "22E06B" },
    ], note: "El cumplimiento (principio 5 de 38500) abarca protección de datos (1581/1074), delitos informáticos (1273) y política de seguridad digital (CONPES 3995), además de normas sectoriales.",
    notes: "El marco legal colombiano. La Ley 1581 aplica a datos de operarios; la 1273 tipifica los ataques. CONPES 3995 orienta." },

  { type: "grid", sec: "LEGAL", title: "Obligaciones que se derivan", cols: 2, lead: "Qué debe hacer la empresa en la práctica.",
    cards: [
      { tag: "REGISTRO Y CONSENTIMIENTO", desc: "Registrar bases de datos y gestionar el consentimiento (1581).", color: "C6FF00" },
      { tag: "SEGURIDAD DEL DATO", desc: "Medidas de seguridad proporcionales al riesgo del dato.", color: "27E5E5" },
      { tag: "NOTIFICACIÓN", desc: "Reportar incidentes a la autoridad y a los afectados.", color: "FFB000" },
      { tag: "RESPONSABLE", desc: "Designar un responsable del tratamiento de datos.", color: "22E06B" },
    ], note: "Las obligaciones legales se traducen en controles concretos: registro, seguridad, notificación de incidentes y roles. El incumplimiento acarrea sanciones de la SIC y riesgo reputacional.",
    notes: "El cumplimiento se aterriza en controles. La SIC sanciona el incumplimiento de protección de datos. Riesgo real." },

  { type: "phase", sec: "LEGAL", title: "Cumplimiento sectorial y estándares", badge: "MÁS ALLÁ DE LA LEY",
    name: "Normas propias de cada industria", what: "Además de la ley general, cada sector tiene exigencias: alimentos (trazabilidad, INVIMA, exportación), energía (regulación del sector), farma (BPM). Y estándares voluntarios que el mercado exige: ISO 27001 (SGSI), IEC 62443 (seguridad OT). Cumplir habilita mercados (p. ej. exportar) y reduce el riesgo contractual.",
    leftTag: "EJEMPLOS", tools: "INVIMA · ISO 27001 · IEC 62443 · sectoriales", rightTag: "VALOR", seen: "Habilita mercados y reduce riesgo",
    notes: "El cumplimiento no es solo obligación: habilita negocio (exportar exige trazabilidad y a veces certificaciones)." },

  { type: "callouts", sec: "LEGAL", title: "Cumplir es gobierno, no burocracia",
    stats: [ {n:"CONFORMIDAD",label:"principio 5 de ISO 38500 y objetivo MEA03 de COBIT",color:"C6FF00"},{n:"HABILITA",label:"el cumplimiento abre mercados (exportación) y contratos",color:"27E5E5"},{n:"PROTEGE",label:"evita sanciones, litigios y daño reputacional",color:"FFB000"} ],
    note: { body: "El cumplimiento es una función de gobierno (conformidad, principio 5 de 38500; MEA03 de COBIT), no un trámite. Bien gestionado, protege de sanciones y habilita mercados. Mal gestionado, es una bomba de tiempo regulatoria y reputacional." },
    notes: "El cumplimiento es gobierno (MEA03, principio 5). Habilita y protege. El proyecto lo incluye en su evaluación." },

  { type: "phase", sec: "LEGAL", title: "La autoridad y las sanciones", badge: "CONSECUENCIAS",
    name: "El incumplimiento cuesta", what: "En Colombia, la Superintendencia de Industria y Comercio (SIC) vigila la protección de datos y puede imponer sanciones económicas significativas por incumplir la Ley 1581. A ello se suma el riesgo penal (Ley 1273), el reputacional y el contractual (perder clientes que exigen cumplimiento). El cumplimiento se gobierna con MEA03 y auditoría.",
    leftTag: "AUTORIDAD", tools: "SIC · reguladores sectoriales", rightTag: "RIESGO", seen: "Multas, penal, reputación, contratos",
    notes: "Las consecuencias del incumplimiento son reales: multas de la SIC, riesgo penal y pérdida de contratos. Justifica invertir en cumplimiento." },

  // -------- SECCIÓN 4: CONTINUIDAD --------
  { type: "section", num: 4, title: "CONTINUIDAD DEL NEGOCIO", sub: "Cuando el ataque ocurre: resistir y recuperar" },

  { type: "process", sec: "CONTINUIDAD", title: "Ciclo de respuesta a incidentes", cols: 3, steps: [
      { n:1, title:"Preparar", desc:"Plan, roles, ejercicios.", color:"C6FF00" },
      { n:2, title:"Detectar", desc:"Identificar el incidente.", color:"27E5E5" },
      { n:3, title:"Contener", desc:"Aislar la zona afectada.", color:"FFB000" },
      { n:4, title:"Erradicar", desc:"Eliminar la causa.", color:"FF6B35" },
      { n:5, title:"Recuperar", desc:"Restaurar desde backups.", color:"22E06B" },
      { n:6, title:"Aprender", desc:"Post-mortem sin culpar.", color:"9D6BFF" },
    ], notes: "El ciclo de respuesta (NIST SP 800-61 adaptado a OT). En OT, contener puede significar pasar a modo manual, no apagar." },

  { type: "grid", sec: "CONTINUIDAD", title: "Ejercicios de mesa (tabletop)", cols: 2, lead: "Un plan no ensayado no es un plan.",
    cards: [
      { tag: "QUÉ SON", desc: "Simulacros de escritorio: el equipo recorre un escenario de incidente paso a paso.", color: "C6FF00" },
      { tag: "PARA QUÉ", desc: "Descubrir vacíos del plan, aclarar roles y entrenar la decisión bajo presión.", color: "27E5E5" },
      { tag: "FRECUENCIA", desc: "Al menos anual; tras cambios mayores en la planta.", color: "FFB000" },
      { tag: "EN OT", desc: "Incluir el escenario 'ransomware IT que amenaza OT' (Norsk Hydro).", color: "FF3B30" },
    ], note: "Los ejercicios de mesa son la forma más barata de descubrir que un plan no funciona antes de necesitarlo de verdad. En OT, ensayar el paso a modo manual es vital.",
    notes: "Los tabletops validan el plan barato. Ensayar el modo manual (Norsk Hydro) es clave en OT." },

  { type: "concepts3", sec: "CONTINUIDAD", title: "RTO, RPO y continuidad", items: [
      { k: "RTO", desc: "Recovery Time Objective: cuánto tiempo puede estar caído un servicio antes de daño inaceptable.", ex: "Línea: horas", color: "C6FF00" },
      { k: "RPO", desc: "Recovery Point Objective: cuántos datos se puede permitir perder (desde el último respaldo).", ex: "Config: minutos", color: "27E5E5" },
      { k: "BCP / DRP", desc: "Plan de continuidad del negocio y de recuperación ante desastres.", ex: "Modo manual", color: "FFB000" },
    ], note: "RTO y RPO cuantifican la resiliencia: cuánto tiempo y cuántos datos se puede perder. En una línea de producción, un RTO de horas puede significar pérdidas enormes: la continuidad se diseña antes del incidente.",
    notes: "RTO (tiempo) y RPO (datos) son las métricas de continuidad. En OT, el modo manual es a menudo el plan de contingencia." },

  { type: "grid", sec: "CONTINUIDAD", title: "Respuesta a incidentes OT", cols: 2, lead: "Cómo actuar cuando el ataque ocurre.",
    cards: [
      { tag: "PREPARAR", desc: "Plan escrito, roles, contactos y ejercicios de mesa previos.", color: "C6FF00" },
      { tag: "DETECTAR Y AISLAR", desc: "Identificar el incidente y contenerlo (aislar la zona afectada).", color: "27E5E5" },
      { tag: "OPERAR EN CONTINGENCIA", desc: "Modo manual o degradado para no parar del todo (Norsk Hydro).", color: "FFB000" },
      { tag: "RECUPERAR Y APRENDER", desc: "Restaurar desde backups probados; post-mortem sin culpar.", color: "22E06B" },
    ], note: "La respuesta OT tiene una particularidad: a veces conviene mantener la operación en modo manual antes que apagar todo. El plan debe ensayarse: un plan no probado no es un plan.",
    notes: "La respuesta OT prioriza mantener la operación (modo manual). Los ejercicios de mesa son clave: un plan no ensayado falla." },

  { type: "grid", sec: "CONTINUIDAD", title: "Respaldos que funcionan", cols: 2, lead: "El backup es el último recurso; debe ser confiable.",
    cards: [
      { tag: "AISLADOS", desc: "Backups fuera de línea (offline) que el ransomware no pueda cifrar.", color: "C6FF00" },
      { tag: "PROBADOS", desc: "Restauración ensayada: un backup no probado puede no servir.", color: "FF3B30" },
      { tag: "CONFIGURACIONES", desc: "Respaldar también la configuración de PLC, HMI y red OT.", color: "27E5E5" },
      { tag: "DOCUMENTADOS", desc: "Saber cómo reconstruir el sistema, no solo restaurar datos.", color: "FFB000" },
    ], note: "El ransomware busca los backups. Por eso deben estar aislados y probados. En OT, respaldar la configuración del control es tan importante como los datos: sin ella, no se reconstruye la planta.",
    notes: "El backup aislado y probado es la red de seguridad final. En OT, respaldar configuraciones de control es vital." },

  { type: "phase", sec: "CONTINUIDAD", title: "Lab 9 — evaluación de riesgo del proyecto", badge: "SEGUIMIENTO · 5 %",
    name: "El registro de riesgos IT/OT", what: "Para la empresa del proyecto: 1) inventaría los activos OT críticos. 2) Identifica amenazas (STRIDE, S14) y evalúa probabilidad × impacto (físico primero). 3) Construye el mapa de calor y prioriza. 4) Propón controles mapeados a IEC 62443 y NIST CSF 2.0, con RTO/RPO para los críticos. Entregable: registro de riesgos + mapa de calor + controles.",
    leftTag: "FORMATO", tools: "Registro de riesgos + mapa de calor + controles", rightTag: "ALIMENTA", seen: "Documento final del proyecto",
    notes: "El Lab 9 es el núcleo de seguridad del proyecto final. Guía detallada en el PDF de ejercicios." },

  { type: "callouts", sec: "CONTINUIDAD", title: "Evaluación de caso 2 esta semana",
    stats: [ {n:"U2-U3",label:"CPPS, arquitecturas, integración y datos",color:"27E5E5"},{n:"S14",label:"amenazas OT y arquitectura defensiva",color:"FFB000"},{n:"FORMATO",label:"caso de análisis con preguntas abiertas de reflexión y aplicación",color:"C6FF00"} ],
    note: { body: "La Evaluación de caso 2 (10 %) cubre las Unidades 2 y 3 más la sesión 14. Es un caso de análisis: dada una planta, proponer arquitectura, integración y controles de seguridad. Se evalúa el razonamiento de gobierno, no la memorización." },
    notes: "Recordatorio de la Evaluación de caso 2. Formato de caso de análisis, no memorístico ni de selección múltiple. Cubre U2-U3 + S14." },

  // -------- SECCIÓN 5: SÍNTESIS --------
  { type: "section", num: 5, title: "SÍNTESIS DE LA CIBERSEGURIDAD OT", sub: "Del control a la resiliencia gobernada" },

  { type: "keypoints", sec: "SÍNTESIS", title: "El programa de seguridad OT completo", items: [
      { label: "Gobernar", desc: "Apetito de riesgo, roles y política (CSF Gobernar, EDM03)." },
      { label: "Identificar", desc: "Inventario y evaluación de riesgo IT/OT." },
      { label: "Proteger", desc: "Segmentación, acceso, endurecimiento (62443, S14)." },
      { label: "Detectar y responder", desc: "Monitoreo OT y plan de incidentes ensayado." },
      { label: "Recuperar", desc: "Continuidad, RTO/RPO y backups probados." },
    ], notes: "El programa completo integra las seis funciones del CSF. El proyecto debe tocar todas, aunque sea a nivel de diseño." },

  { type: "matrix", sec: "SÍNTESIS", title: "Cada control anclado a un marco", firstW: 3.8,
    cols: ["Control", "IEC 62443", "NIST CSF"],
    rows: [
      ["Segmentación / DMZ", {t:"FR5 flujo restringido",color:"C6FF00"}, "Proteger"],
      ["Acceso remoto MFA", {t:"FR1 control de acceso",color:"27E5E5"}, "Proteger"],
      ["Monitoreo OT (IDS)", {t:"FR6 respuesta oportuna",color:"FFB000"}, "Detectar"],
      ["Backups aislados", {t:"FR7 disponibilidad",color:"22E06B"}, "Recuperar"],
    ], notes: "Anclar cada control a 62443 y CSF hace la evaluación auditable y defendible. Es lo que se espera en el documento final." },

  { type: "grid", sec: "SÍNTESIS", title: "Errores frecuentes en seguridad OT", cols: 2, lead: "Lo que hunde los programas de seguridad industrial.",
    cards: [
      { tag: "COPIAR IT", desc: "Aplicar controles de IT que rompen el tiempo real o la disponibilidad.", color: "FF3B30" },
      { tag: "SOLO TÉCNICA", desc: "Comprar herramientas sin gobernar (política, roles, procesos).", color: "FFB000" },
      { tag: "SIN INVENTARIO", desc: "Intentar proteger sin saber qué activos existen.", color: "27E5E5" },
      { tag: "PLAN NO PROBADO", desc: "Tener un plan de continuidad que nunca se ensayó.", color: "9D6BFF" },
    ], note: "Los errores más comunes son de gobierno, no de tecnología: copiar IT, comprar sin gobernar, no inventariar y no ensayar. El proyecto debe evitarlos explícitamente.",
    notes: "Los errores de seguridad OT son mayormente de gobierno. Cierra la coherencia del curso: gobierno primero." },

  { type: "phase", sec: "SÍNTESIS", title: "De la seguridad al caso de negocio", badge: "PUENTE A S16",
    name: "La seguridad también se justifica", what: "La seguridad OT cuesta; su valor es el riesgo evitado (paradas, sanciones, daño físico). En la práctica hay que justificarla ante la dirección con un caso de negocio: cuánto cuesta el control frente a cuánto cuesta el incidente que previene. La sesión 16 cierra el curso con precisamente esa herramienta: el caso de negocio.",
    leftTag: "JUSTIFICAR", tools: "Costo del control vs costo del incidente", rightTag: "SE VE EN", seen: "Caso de negocio (S16)",
    notes: "Puente a S16. La seguridad, como toda inversión, se justifica con un caso de negocio. Cierra el arco gobierno-técnica-valor." },

  { type: "keypoints", sec: "SÍNTESIS", title: "Ideas para el proyecto", items: [
      { label: "Usa el CSF", desc: "Estructura tu seguridad con las seis funciones." },
      { label: "Evalúa el riesgo", desc: "Impacto físico primero; mapa de calor (Lab 9)." },
      { label: "Cumple", desc: "Identifica las obligaciones legales aplicables." },
      { label: "Planea la continuidad", desc: "RTO/RPO y backups probados." },
      { label: "Justifica", desc: "Prepara el caso de negocio de la seguridad (S16)." },
    ], notes: "Orientaciones para integrar seguridad, cumplimiento y continuidad en el proyecto final." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "NIST CSF 2.0", desc: "Gobernar, Identificar, Proteger, Detectar, Responder, Recuperar." },
      { label: "Riesgo OT", desc: "Impacto físico primero; mapa de calor y controles." },
      { label: "Cumplimiento", desc: "Ley 1581, 1273, CONPES 3995; habilita mercados." },
      { label: "Continuidad", desc: "RTO/RPO, respuesta ensayada, backups aislados." },
      { label: "Gobierno", desc: "La seguridad OT es, ante todo, un problema de gobierno." },
    ], notes: "Repaso y cierre de la ciberseguridad. Verificar las seis funciones del CSF y RTO/RPO." },

  { type: "grid", sec: "CIERRE", title: "Higiene de seguridad OT — lo esencial", cols: 3, lead: "Diez controles básicos que rinden lo máximo.",
    cards: [
      { tag: "INVENTARIO", desc: "Saber qué activos OT existen.", color: "C6FF00" },
      { tag: "SEGMENTAR", desc: "DMZ y zonas/conductos.", color: "27E5E5" },
      { tag: "ACCESO", desc: "MFA y mínimo privilegio; controlar el remoto.", color: "FFB000" },
      { tag: "CREDENCIALES", desc: "Cambiar las de fábrica; nada por defecto.", color: "22E06B" },
      { tag: "MONITOREO", desc: "Detección de anomalías en red OT.", color: "9D6BFF" },
      { tag: "BACKUPS", desc: "Aislados, probados, con configuraciones.", color: "FF6B35" },
    ], notes: "La 'higiene básica' resuelve la mayoría del riesgo con poco costo. Antes de comprar herramientas sofisticadas, hacer bien lo básico." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — cierre del curso", cols: 4, steps: [
      { n:"S14", title:"Ciber OT I", desc:"Amenazas y arquitectura.", color:"8C8C8C" },
      { n:"S15", title:"Ciber OT II", desc:"Riesgo y continuidad · hoy.", color:"C6FF00" },
      { n:"S16", title:"Caso de negocio", desc:"Hoja de ruta.", color:"27E5E5" },
      { n:"FIN", title:"Sustentación", desc:"Proyecto integrador.", color:"FFB000" },
    ], notes: "S16 cierra el curso integrando todo en un caso de negocio y una hoja de ruta de adopción." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "NIST CSF 2.0", d: "Marco de gestión del riesgo cibernético (6 funciones)." },
      { t: "Apetito de riesgo", d: "Riesgo residual que la empresa acepta." },
      { t: "Mapa de calor", d: "Matriz de probabilidad × impacto." },
      { t: "RTO / RPO", d: "Objetivos de tiempo / punto de recuperación." },
      { t: "BCP / DRP", d: "Plan de continuidad / de recuperación ante desastres." },
      { t: "Ley 1581", d: "Protección de datos personales (Colombia)." },
      { t: "CONPES 3995", d: "Política de confianza y seguridad digital." },
      { t: "Riesgo residual", d: "Riesgo que queda tras aplicar controles." },
    ], notes: "Vocabulario de gestión de riesgo, cumplimiento y continuidad." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "NIST — Cybersecurity Framework (CSF) 2.0", url: "https://www.nist.gov/cyberframework", acc: "libre" },
      { t: "NIST SP 800-82 Rev.3 — OT Security", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final", acc: "libre" },
      { t: "Ley 1273 de 2009 — delitos informáticos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html", acc: "libre" },
      { t: "Ley 1581 de 2012 — protección de datos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html", acc: "libre" },
      { t: "CONPES 3995 de 2020 — confianza y seguridad digital (DNP)", url: "https://www.dnp.gov.co/", acc: "libre" },
      { t: "ISO/IEC 27001 · ISO 22301 · IEC 62443-3-2 (textos normativos)", url: "https://www.iso.org/", acc: "pago" },
    ], notes: "Fuentes de gestión de riesgo, cumplimiento colombiano y continuidad." },

  { type: "closing", nextNum: 16, nextTitle: "CASO DE NEGOCIO Y HOJA DE RUTA", nextDesc: "Cierre del curso: del piloto a la escala, caso de negocio (VPN/TIR), hoja de ruta de adopción y gestión del cambio.", prompt: "root@planta:~# next --session 16 _",
    notes: "S16 cierra el curso: cómo justificar y planificar la transformación digital industrial. Recordar la Evaluación de caso 2." },
];
