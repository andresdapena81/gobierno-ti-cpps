// S02 — ISO/IEC 38500: Principios de gobierno corporativo de TI
module.exports = [
  { type: "cover", title: "ISO/IEC\n38500", subtitle: "Los seis principios del gobierno corporativo de la tecnología",
    notes: "Segunda sesión. La norma que da el lenguaje de gobierno a la dirección. Base sobre la que COBIT construye. Revisar el taller de S01 al inicio." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Qué es la norma", desc: "Origen, propósito, estructura y alcance de ISO/IEC 38500" },
    { title: "El modelo de gobierno", desc: "EDM aplicado y el marco de la norma" },
    { title: "Principios 1–3", desc: "Responsabilidad, estrategia, adquisición" },
    { title: "Principios 4–6", desc: "Desempeño, conformidad, comportamiento humano" },
    { title: "38500 en la planta", desc: "Aplicación a un CPPS y roles de dirección" },
    { title: "Cierre y taller", desc: "Matriz de principios, síntesis y referencias" },
  ], notes: "De lo normativo (qué exige la norma) a lo práctico (cómo se aplica a una planta)." },

  { type: "stats", sec: "NORMA", title: "La norma en cifras",
    bigstats: [ {n:6,label:"PRINCIPIOS"},{n:3,label:"TAREAS EDM"},{n:"2015",label:"REVISIÓN VIGENTE"},{n:1,label:"MODELO"} ],
    kvs: [ {k:"FAMILIA",v:"ISO/IEC 385xx (gobierno de TI)"},{k:"ORIGEN",v:"AS 8015 (Australia, 2005)"},{k:"PRIMERA ISO",v:"38500:2008"},{k:"ALCANCE",v:"Toda organización, cualquier tamaño"},{k:"CARÁCTER",v:"Principios, no prescriptiva"},{k:"AUDIENCIA",v:"Órganos de dirección (board)"} ],
    notes: "38500 no dice CÓMO hacer las cosas (eso es COBIT/ITIL); da PRINCIPIOS para que la dirección gobierne bien la TI." },

  { type: "objectives", sec: "NORMA", title: "Objetivos de la sesión", items: [
    { lead: "Describir", rest: "el propósito, alcance y estructura de ISO/IEC 38500." },
    { lead: "Explicar", rest: "el modelo de gobierno y las tareas Evaluar–Dirigir–Monitorear." },
    { lead: "Enunciar", rest: "los seis principios y su significado." },
    { lead: "Aplicar", rest: "cada principio a decisiones de un sistema ciber-físico." },
    { lead: "Construir", rest: "una matriz de principios × decisiones para el proyecto." },
  ], notes: "El resultado tangible: la matriz de principios que se entrega como taller y alimenta el Entregable 1." },

  // -------- SECCIÓN 1: QUÉ ES --------
  { type: "section", num: 1, title: "QUÉ ES ISO/IEC 38500", sub: "Propósito, historia, estructura y alcance" },

  { type: "concepts3", sec: "NORMA", title: "Propósito de la norma", items: [
      { k: "GOBERNAR", desc: "Guiar a los que dirigen (junta, dueños, socios) para gobernar el uso de la TI.", ex: "Audiencia: el board", color: "C6FF00" },
      { k: "ASEGURAR", desc: "Uso eficaz, eficiente y aceptable de la tecnología en toda la organización.", ex: "3 criterios de uso", color: "27E5E5" },
      { k: "CONFIAR", desc: "Dar confianza a las partes interesadas de que la TI se usa con responsabilidad.", ex: "Rendición de cuentas", color: "FFB000" },
    ], note: "ISO/IEC 38500 provee principios para el gobierno EFICAZ de la TI, ayudando a la dirección a equilibrar riesgo y oportunidad.",
    notes: "Los tres verbos resumen el espíritu: gobernar el uso, asegurar los tres criterios (eficaz/eficiente/aceptable), y generar confianza." },

  { type: "grid", sec: "NORMA", title: "Definiciones clave de la norma", cols: 2, lead: "38500 fija un vocabulario preciso que conviene no confundir.",
    cards: [
      { tag: "GOBIERNO CORPORATIVO DE TI", desc: "Sistema por el cual se dirige y controla el uso presente y futuro de la TI en la organización.", color: "C6FF00" },
      { tag: "GESTIÓN", desc: "Sistema de controles y procesos para lograr los objetivos fijados por la dirección; opera bajo el gobierno.", color: "27E5E5" },
      { tag: "USO DE LA TI", desc: "El objeto del gobierno: no la tecnología en sí, sino cómo la organización la usa para crear valor.", color: "FFB000" },
      { tag: "PARTE INTERESADA", desc: "Cualquiera cuyos intereses se ven afectados por el uso de la TI: dueños, clientes, empleados, sociedad.", color: "22E06B" },
    ], notes: "Precisión terminológica: se gobierna el USO de la TI, y el gobierno DIRIGE a la gestión, no la reemplaza." },

  { type: "process", sec: "NORMA", title: "Evolución de la norma", cols: 3, steps: [
      { n:"2005", title:"AS 8015", desc:"Estándar australiano, origen.", color:"8C8C8C" },
      { n:"2008", title:"ISO/IEC 38500", desc:"Primera versión internacional.", color:"FFB000" },
      { n:"2015", title:"38500:2015", desc:"Revisión vigente; refina el modelo.", color:"C6FF00" },
      { n:"38501", title:"Implementación", desc:"TS 38501: guía para implantar el gobierno.", color:"27E5E5" },
      { n:"38502", title:"Marco y modelo", desc:"TR 38502: relación gobierno–gestión.", color:"22E06B" },
      { n:"38504+", title:"Familia", desc:"Serie de normas de gobierno de TI.", color:"9D6BFF" },
    ], notes: "38500 es la 'cabeza' de una familia (385xx). Precisión: 38501 es una especificación técnica (TS) y 38502 un informe técnico (TR); solo 38500 es norma plena. Ninguna es certificable." },

  { type: "grid", sec: "NORMA", title: "Los tres criterios del buen uso de TI", cols: 3, lead: "La norma juzga el uso de la tecnología por tres criterios.",
    cards: [
      { tag: "EFICAZ", desc: "La TI cumple su propósito y entrega los resultados esperados por el negocio.", color: "C6FF00" },
      { tag: "EFICIENTE", desc: "Los recursos (dinero, personas, activos) se usan óptimamente para lograrlo.", color: "27E5E5" },
      { tag: "ACEPTABLE", desc: "El uso respeta lo legal, ético, ambiental y las expectativas de los interesados.", color: "FFB000" },
    ], notes: "Aceptable es el criterio más olvidado: incluye ética, ambiente y percepción social — clave en automatización que afecta empleo." },

  { type: "grid", sec: "NORMA", title: "Estructura de una decisión de gobierno", cols: 2, lead: "La norma organiza el gobierno en tres elementos que interactúan.",
    cards: [
      { tag: "MODELO EDM", desc: "El ciclo Evaluar–Dirigir–Monitorear que la dirección aplica sobre el uso de la TI.", color: "C6FF00" },
      { tag: "PRINCIPIOS", desc: "Seis enunciados que guían el juicio de la dirección en cada tarea EDM.", color: "27E5E5" },
      { tag: "COMPORTAMIENTOS", desc: "Los comportamientos deseables que el gobierno busca inducir en la organización.", color: "FFB000" },
      { tag: "ALCANCE", desc: "Cubre las decisiones actuales y futuras sobre el uso de la tecnología, no su operación diaria.", color: "22E06B" },
    ], notes: "Recalcar el alcance: 38500 gobierna el USO de la TI, no la administra. La operación es gestión." },

  { type: "twocol", sec: "NORMA", title: "Qué es y qué NO es la norma",
    leftTitle: "Sí es", leftItems: ["Un marco de principios para la dirección","Aplicable a cualquier organización","Un lenguaje común de gobierno","La base conceptual de COBIT","Guía para rendir cuentas sobre la TI"],
    rightTitle: "No es", rightItems: ["Un manual de procesos (eso es COBIT/ITIL)","Una norma certificable como 27001","Una guía técnica de implementación","Un checklist de auditoría","Un sustituto de la gestión de TI"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "Frecuente confusión: no es certificable ni prescriptiva. Es la 'constitución' del gobierno de TI; COBIT es la 'ley'." },

  { type: "callouts", sec: "NORMA", title: "Por qué a la dirección le importa",
    stats: [ {n:"ACTIVO",label:"la TI dejó de ser soporte: es un activo estratégico que crea o destruye valor",color:"C6FF00"},{n:"RIESGO",label:"un incidente tecnológico puede ser existencial para el negocio industrial",color:"FF3B30"},{n:"CUENTAS",label:"reguladores e interesados exigen rendición de cuentas sobre el uso de la TI",color:"27E5E5"} ],
    note: { body: "38500 nació porque la TI se volvió demasiado importante para dejarla solo en manos técnicas. La dirección debe gobernarla como gobierna las finanzas o la seguridad: con responsabilidad, evidencia y rendición de cuentas." },
    notes: "Justifica la audiencia de la norma: el board, no el área de TI. La TI es materia de gobierno corporativo." },

  { type: "quote", sec: "NORMA", text: "Los directores deberían gobernar la TI mediante tres tareas: evaluar, dirigir y monitorear.", cite: "ISO/IEC 38500 (paráfrasis)",
    notes: "Puente hacia la sección del modelo EDM. La norma pone la responsabilidad en el board, no en el área de TI." },

  // -------- SECCIÓN 2: MODELO EDM --------
  { type: "section", num: 2, title: "EL MODELO DE GOBIERNO — EDM", sub: "Evaluar, Dirigir y Monitorear el uso de la tecnología" },

  { type: "grid", sec: "MODELO", title: "Las tres tareas del director", cols: 3, lead: "El modelo de la norma: la dirección aplica un ciclo continuo sobre el uso de la TI.",
    cards: [
      { tag: "EVALUAR", desc: "Examinar y juzgar el uso presente y futuro de la TI: presiones del negocio, necesidades, opciones y propuestas.", color: "C6FF00" },
      { tag: "DIRIGIR", desc: "Asignar responsabilidad y dirigir la preparación e implementación de planes y políticas hacia los objetivos.", color: "27E5E5" },
      { tag: "MONITOREAR", desc: "Vigilar, con sistemas de medición, el desempeño de la TI y su conformidad con políticas y obligaciones.", color: "FFB000" },
    ], notes: "El ciclo se alimenta de las propuestas (planes de negocio) y produce presión hacia la gestión (planes y políticas)." },

  { type: "phase", sec: "MODELO", title: "El flujo del gobierno", badge: "MODELO DE LA NORMA",
    name: "De la propuesta al desempeño", what: "Las propuestas de negocio entran al ciclo; la dirección EVALÚA opciones, DIRIGE mediante planes y políticas, y MONITOREA el desempeño y la conformidad. La gestión ejecuta (procesos de negocio y proyectos de TI) y devuelve información de desempeño que realimenta la evaluación.",
    leftTag: "ENTRADAS", tools: "Presiones del negocio · propuestas · necesidades", rightTag: "SALIDAS", seen: "Planes · políticas · dirección a la gestión",
    notes: "El modelo es un lazo cerrado: gobierno dirige, gestión ejecuta, el desempeño realimenta. Idéntico en espíritu a COBIT." },

  { type: "twocol", sec: "MODELO", title: "Gobierno frente a gestión en 38500",
    leftTitle: "Gobierno (dirección)", leftItems: ["Evalúa el uso de la TI","Dirige mediante políticas","Monitorea desempeño y conformidad","Responde ante los interesados","Horizonte estratégico"],
    rightTitle: "Gestión (operación)", rightItems: ["Planifica y ejecuta los sistemas","Construye y opera los servicios","Reporta desempeño al gobierno","Responde ante la dirección","Horizonte operativo"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    notes: "38502 detalla esta separación. El error frecuente es que la dirección se meta en la gestión o delegue el gobierno en TI." },

  { type: "matrix", sec: "MODELO", title: "EDM aplicado a una inversión en IIoT", firstW: 3.2,
    cols: ["Tarea", "Pregunta de dirección", "Ejemplo en planta"],
    rows: [
      ["Evaluar", {t:"¿Aporta valor y qué riesgo trae?",color:"C6FF00"}, "Sensórica predictiva"],
      ["Dirigir", {t:"¿Aprobamos y con qué política?",color:"27E5E5"}, "Aprobar piloto acotado"],
      ["Monitorear", {t:"¿Cumple lo esperado?",color:"FFB000"}, "Revisar OEE y ROI"],
    ], notes: "Ejemplo concreto de EDM sobre una decisión ciber-física. El proyecto aplicará este razonamiento." },

  { type: "keypoints", sec: "MODELO", title: "Qué exige el modelo a la dirección", items: [
      { label: "Responsabilizarse", desc: "El gobierno de la TI es indelegable: la dirección responde." },
      { label: "Anticipar", desc: "Evaluar no solo el uso actual, sino el futuro de la tecnología." },
      { label: "Dirigir con política", desc: "Fijar reglas claras, no decisiones caso a caso." },
      { label: "Medir", desc: "Sin sistemas de medición no hay monitoreo real." },
      { label: "Realimentar", desc: "El desempeño observado debe volver a la evaluación." },
    ], notes: "Estas exigencias distinguen gobierno real de gobierno decorativo (comités que no miden ni deciden)." },

  { type: "callouts", sec: "MODELO", title: "El costo de no gobernar",
    stats: [ {n:"70 %",label:"de las transformaciones digitales no alcanza sus objetivos (BCG, 2020)",color:"FF3B30"},{n:"CAUSA",label:"falta de dirección, prioridades difusas y riesgo no gestionado, no fallas técnicas",color:"FFB000"},{n:"EDM",label:"un ciclo de gobierno explícito reduce el fracaso al forzar evaluación y medición",color:"C6FF00"} ],
    note: { body: "La mayoría de los fracasos de digitalización industrial no son técnicos: son de gobierno. Sin EDM, se invierte sin evaluar, se ejecuta sin dirección y se opera sin medir. El modelo de 38500 ataca esa raíz." },
    notes: "Fuente del 70 %: BCG, 'Flipping the Odds of Digital Transformation Success' (2020); McKinsey reporta cifras similares. Advertir que es una estimación de consultoría sobre muestras propias, no un dato censal — usarla como orden de magnitud, no como constante." },

  { type: "phase", sec: "MODELO", title: "Sistemas de medición del gobierno", badge: "MONITOREAR",
    name: "Sin medición no hay gobierno", what: "Monitorear exige sistemas de medición que den a la dirección evidencia del desempeño y la conformidad de la TI. En un CPPS: cuadros de mando con OEE, disponibilidad, incidentes de ciberseguridad OT, cumplimiento de SLA y avance del portafolio de digitalización, reportados a la junta con periodicidad definida.",
    leftTag: "INSTRUMENTOS", tools: "Tablero directivo · KPI/KRI · informes de auditoría", rightTag: "SE PROFUNDIZA EN", seen: "Datos y OEE (S13)",
    notes: "Enlaza monitoreo con métricas. El tablero directivo es el mecanismo relacional que cierra el ciclo EDM." },

  { type: "grid", sec: "MODELO", title: "El lazo de gobierno realimentado", cols: 2, lead: "El modelo de 38500 es un ciclo cerrado entre dirección y gestión.",
    cards: [
      { tag: "PROPUESTAS →", desc: "Los planes de negocio y las necesidades entran al ciclo para ser evaluados.", color: "C6FF00" },
      { tag: "→ DIRECCIÓN", desc: "La evaluación produce planes y políticas que dirigen a la gestión.", color: "27E5E5" },
      { tag: "EJECUCIÓN →", desc: "La gestión ejecuta procesos de negocio y proyectos de TI.", color: "FFB000" },
      { tag: "→ DESEMPEÑO", desc: "Los resultados se miden y realimentan la evaluación. El ciclo se repite.", color: "22E06B" },
    ], notes: "Visualizar el lazo: gobierno ↔ gestión. La realimentación por desempeño es lo que lo hace 'vivo'." },

  // -------- SECCIÓN 3: PRINCIPIOS 1-3 --------
  { type: "section", num: 3, title: "LOS SEIS PRINCIPIOS · 1–3", sub: "Responsabilidad · Estrategia · Adquisición" },

  { type: "grid", sec: "PRINCIPIOS", title: "Vista de los seis principios", cols: 3, lead: "Seis enunciados que guían el juicio de la dirección en cada tarea EDM.",
    cards: [
      { tag: "1 · RESPONSABILIDAD", desc: "Roles y responsabilidades claros sobre la TI.", color: "C6FF00" },
      { tag: "2 · ESTRATEGIA", desc: "La estrategia de negocio considera la capacidad de TI.", color: "27E5E5" },
      { tag: "3 · ADQUISICIÓN", desc: "Las adquisiciones de TI se hacen por razones válidas y analizadas.", color: "FFB000" },
      { tag: "4 · DESEMPEÑO", desc: "La TI da soporte a la organización con el nivel de servicio requerido.", color: "22E06B" },
      { tag: "5 · CONFORMIDAD", desc: "La TI cumple leyes, reglamentos y políticas.", color: "9D6BFF" },
      { tag: "6 · COMPORTAMIENTO HUMANO", desc: "Las políticas respetan a las personas y sus necesidades.", color: "FF6B35" },
    ], notes: "Panorama de los seis. Cada uno se examina con EDM. Los tres primeros se ven ahora." },

  { type: "phase", sec: "PRINCIPIOS", title: "Principio 1 — Responsabilidad", badge: "PRINCIPIO 1 / 6",
    name: "Roles y responsabilidades claros", what: "Individuos y grupos comprenden y aceptan sus responsabilidades respecto de la oferta y la demanda de TI. Quien es responsable de una acción tiene la autoridad para realizarla. En un CPPS: ¿quién responde por la seguridad OT, por el gemelo, por el dato?",
    leftTag: "EVALUAR / DIRIGIR / MONITOREAR", tools: "Definir dueños; RACI; delegación con autoridad", rightTag: "RIESGO SI FALLA", seen: "Nadie responde por el incidente OT",
    notes: "Responsabilidad = accountability + authority. En planta, el vacío típico es la ciberseguridad OT: 'ni IT ni producción'." },

  { type: "matrix", sec: "PRINCIPIOS", title: "Derechos de decisión y los principios", firstW: 3.2,
    cols: ["Dominio de decisión", "Arquetipo (S01)", "Principio 38500"],
    rows: [
      ["Principios de TI", {t:"Duopolio",color:"C6FF00"}, {t:"Estrategia",color:"27E5E5"}],
      ["Arquitectura de TI", {t:"Monarquía TI",color:"27E5E5"}, {t:"Adquisición",color:"FFB000"}],
      ["Infraestructura", {t:"Monarquía TI",color:"27E5E5"}, {t:"Desempeño",color:"22E06B"}],
      ["Necesidades de apps", {t:"Federal",color:"FFB000"}, {t:"Comportamiento",color:"FF6B35"}],
      ["Inversión y prioridad", {t:"Monarquía negocio",color:"22E06B"}, {t:"Responsabilidad",color:"C6FF00"}],
    ], notes: "Puente con S01: la matriz de Weill & Ross dice QUIÉN decide cada dominio; 38500 dice CON QUÉ CRITERIO debe decidirlo. Señalar que Conformidad no aparece en la tabla porque es transversal: rige los cinco dominios. Pedir que revisen la matriz que entregaron en el taller S01 y le añadan esta columna." },

  { type: "phase", sec: "PRINCIPIOS", title: "Principio 2 — Estrategia", badge: "PRINCIPIO 2 / 6",
    name: "TI y estrategia de negocio alineadas", what: "La planificación estratégica del negocio considera las capacidades actuales y futuras de la TI; los planes de TI satisfacen las necesidades presentes y futuras de la estrategia. En un CPPS: la digitalización de la planta debe responder a la estrategia (costo, calidad, tiempo), no a la moda tecnológica.",
    leftTag: "EVALUAR / DIRIGIR / MONITOREAR", tools: "Alinear roadmap de I4.0 con objetivos de negocio", rightTag: "RIESGO SI FALLA", seen: "Tecnología sin retorno estratégico",
    notes: "El error 'compramos IA porque el vecino la tiene'. La estrategia manda; la tecnología habilita." },

  { type: "phase", sec: "PRINCIPIOS", title: "Principio 3 — Adquisición", badge: "PRINCIPIO 3 / 6",
    name: "Adquisiciones válidas y analizadas", what: "Las adquisiciones de TI se hacen por razones válidas, con análisis apropiado y decisión clara y transparente. Hay equilibrio entre beneficios, oportunidades, costos y riesgos, a corto y largo plazo. En un CPPS: elegir un proveedor de SCADA o plataforma IIoT compromete 15–20 años.",
    leftTag: "EVALUAR / DIRIGIR / MONITOREAR", tools: "Business case; TCO; análisis de dependencia", rightTag: "RIESGO SI FALLA", seen: "Cautividad de proveedor (lock-in)",
    notes: "En OT las decisiones de compra tienen ciclos larguísimos; el lock-in es un riesgo de gobierno mayor." },

  { type: "matrix", sec: "PRINCIPIOS", title: "Principios 1–3 en una decisión real", firstW: 3.0,
    cols: ["Principio", "Pregunta clave", "Evidencia esperada"],
    rows: [
      ["Responsabilidad", {t:"¿Quién decide y responde?",color:"C6FF00"}, "RACI del proyecto OT"],
      ["Estrategia", {t:"¿Alinea con el negocio?",color:"27E5E5"}, "Vínculo con objetivos"],
      ["Adquisición", {t:"¿Costo/beneficio/riesgo?",color:"FFB000"}, "Business case y TCO"],
    ], notes: "Cada principio se traduce en una pregunta y una evidencia. Esto estructura el taller." },

  { type: "concepts3", sec: "PRINCIPIOS", title: "Responsabilidad — oferta y demanda", items: [
      { k: "LADO DEMANDA", desc: "El negocio y la planta definen qué necesitan de la TI y responden por su buen uso.", ex: "Dueño de proceso", color: "C6FF00" },
      { k: "LADO OFERTA", desc: "TI/OT provee y opera las capacidades tecnológicas con la calidad acordada.", ex: "CIO · integrador", color: "27E5E5" },
      { k: "PUENTE", desc: "El gobierno hace explícito quién responde en cada lado y con qué autoridad.", ex: "Comité IT/OT", color: "FFB000" },
    ], note: "El principio de responsabilidad cubre ambos lados: quien demanda TI también responde por usarla bien, no solo quien la ofrece.",
    notes: "Muchos vacíos de responsabilidad están en el lado demanda: el negocio pide pero no se apropia del riesgo." },

  // -------- SECCIÓN 4: PRINCIPIOS 4-6 --------
  { type: "section", num: 4, title: "LOS SEIS PRINCIPIOS · 4–6", sub: "Desempeño · Conformidad · Comportamiento humano" },

  { type: "phase", sec: "PRINCIPIOS", title: "Principio 4 — Desempeño", badge: "PRINCIPIO 4 / 6",
    name: "TI adecuada al propósito", what: "La TI da soporte a la organización, proveyendo servicios con la calidad, el nivel de servicio y la capacidad necesarios para cumplir los requisitos presentes y futuros. En un CPPS: el sistema debe sostener la disponibilidad de la línea (OEE), la latencia del control y la calidad del dato.",
    leftTag: "EVALUAR / DIRIGIR / MONITOREAR", tools: "SLA; KPI de OEE, disponibilidad, latencia", rightTag: "RIESGO SI FALLA", seen: "Sistema que frena la producción",
    notes: "Desempeño en OT no es 'uptime del servidor': es disponibilidad de la producción y latencia del control." },

  { type: "phase", sec: "PRINCIPIOS", title: "Principio 5 — Conformidad", badge: "PRINCIPIO 5 / 6",
    name: "Cumplir leyes y políticas", what: "La TI cumple con toda la legislación y regulación obligatoria; las políticas internas se definen, implementan y hacen cumplir. En un CPPS: protección de datos (Ley 1581), seguridad digital (CONPES 3995), normas sectoriales, seguridad industrial y ambiental.",
    leftTag: "EVALUAR / DIRIGIR / MONITOREAR", tools: "Registro legal; auditoría; políticas OT", rightTag: "RIESGO SI FALLA", seen: "Sanción regulatoria y reputacional",
    notes: "Conformidad abarca lo legal Y las políticas internas. En Colombia, ligar a Ley 1581 y CONPES 3995 (se ve en S15)." },

  { type: "phase", sec: "PRINCIPIOS", title: "Principio 6 — Comportamiento humano", badge: "PRINCIPIO 6 / 6",
    name: "Respetar a las personas", what: "Las políticas, prácticas y decisiones de TI respetan el comportamiento humano, incluyendo las necesidades actuales y futuras de todas las personas en el proceso. En un CPPS: la automatización afecta a operarios; su formación, ergonomía y confianza son parte del gobierno.",
    leftTag: "EVALUAR / DIRIGIR / MONITOREAR", tools: "Gestión del cambio; formación; ergonomía", rightTag: "RIESGO SI FALLA", seen: "Rechazo, errores y accidentes",
    notes: "Principio más 'blando' y más olvidado. En manufactura, ignorar al operario hace fracasar la digitalización." },

  { type: "grid", sec: "PRINCIPIOS", title: "Los seis principios frente a un CPPS", cols: 3, lead: "Cada principio se traduce en una pregunta concreta de planta.",
    cards: [
      { tag: "RESPONSABILIDAD", desc: "¿Quién responde por la ciberseguridad OT y por el gemelo digital?", color: "C6FF00" },
      { tag: "ESTRATEGIA", desc: "¿La digitalización responde a costo, calidad y tiempo del negocio?", color: "27E5E5" },
      { tag: "ADQUISICIÓN", desc: "¿El SCADA/IIoT elegido evita el lock-in a 20 años?", color: "FFB000" },
      { tag: "DESEMPEÑO", desc: "¿El sistema sostiene OEE, latencia y calidad del dato?", color: "22E06B" },
      { tag: "CONFORMIDAD", desc: "¿Cumple protección de datos y normas de seguridad industrial?", color: "9D6BFF" },
      { tag: "COMPORTAMIENTO", desc: "¿Se forma y respeta al operario ante la automatización?", color: "FF6B35" },
    ], notes: "Esta es la plantilla del taller: seis preguntas para la empresa del proyecto." },

  { type: "compare", sec: "PRINCIPIOS", title: "Aplicación fuerte vs débil de los principios",
    leftTitle: "Gobierno robusto", leftItems: ["Dueños y RACI explícitos","Roadmap ligado a la estrategia","Business case y TCO por compra","KPI de desempeño monitoreados","Cumplimiento auditado","Gestión del cambio con las personas"],
    rightTitle: "Gobierno débil", rightItems: ["'Todos y nadie' responsables","Tecnología por moda","Compras sin análisis","Sin métricas ni SLA","Cumplimiento reactivo","Automatizar sin formar"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "Contraste que los estudiantes usarán para diagnosticar la empresa del proyecto." },

  { type: "matrix", sec: "PRINCIPIOS", title: "Principios 4–6 — evidencia esperada", firstW: 3.0,
    cols: ["Principio", "Pregunta clave", "Evidencia esperada"],
    rows: [
      ["Desempeño", {t:"¿Sostiene el nivel de servicio?",color:"22E06B"}, "SLA y KPI de OEE"],
      ["Conformidad", {t:"¿Cumple ley y política?",color:"9D6BFF"}, "Registro legal auditado"],
      ["Comportamiento", {t:"¿Respeta a las personas?",color:"FF6B35"}, "Plan de gestión del cambio"],
    ], notes: "Completa la plantilla de evidencia de los seis principios para el taller y el Entregable 1." },

  // -------- SECCIÓN 5: EN LA PLANTA --------
  { type: "section", num: 5, title: "ISO/IEC 38500 EN LA PLANTA", sub: "Aplicar los principios a un sistema ciber-físico" },

  { type: "grid", sec: "APLICACIÓN", title: "Roles de gobierno en la industria", cols: 3, lead: "Quién ejerce cada tarea EDM en una organización manufacturera.",
    cards: [
      { tag: "JUNTA DIRECTIVA", desc: "Responsable último del gobierno de la TI; aprueba estrategia y apetito de riesgo.", color: "C6FF00" },
      { tag: "COMITÉ DE TI/OT", desc: "Evalúa y prioriza inversiones; realimenta a la junta.", color: "27E5E5" },
      { tag: "CIO / CTO", desc: "Traduce dirección en estrategia tecnológica y arquitectura.", color: "FFB000" },
      { tag: "GERENTE DE PLANTA", desc: "Aporta necesidades de producción y monitorea desempeño en piso.", color: "22E06B" },
      { tag: "CISO", desc: "Gobierna el riesgo cibernético IT/OT y la conformidad.", color: "FF3B30" },
      { tag: "AUDITORÍA / RIESGO", desc: "Verifica conformidad y da aseguramiento independiente.", color: "9D6BFF" },
    ], notes: "38500 pone al board como responsable; los demás roles operacionalizan las tres tareas." },

  { type: "process", sec: "APLICACIÓN", title: "Ruta para implantar 38500", cols: 3, steps: [
      { n:1, title:"Mandato", desc:"La junta asume el gobierno de la TI.", color:"C6FF00" },
      { n:2, title:"Roles", desc:"Definir responsabilidades y comités.", color:"27E5E5" },
      { n:3, title:"Políticas", desc:"Fijar políticas por principio.", color:"FFB000" },
      { n:4, title:"Medición", desc:"Instrumentar tableros y KPI/KRI.", color:"22E06B" },
      { n:5, title:"Monitoreo", desc:"Revisar desempeño y conformidad.", color:"9D6BFF" },
      { n:6, title:"Mejora", desc:"Ajustar con COBIT y auditoría.", color:"FF6B35" },
    ], notes: "Ruta pragmática: 38500 da el marco, pero implantarlo requiere estructuras, políticas y medición (mecanismos de gobierno)." },

  { type: "phase", sec: "APLICACIÓN", title: "Caso — decisión de acceso remoto de proveedor", badge: "CASO DE GOBIERNO",
    name: "Los seis principios en una sola decisión", what: "Un fabricante de maquinaria pide acceso remoto permanente para mantenimiento predictivo. Evaluar (¿beneficio vs riesgo OT?), Dirigir (política de acceso, VPN, ventanas), Monitorear (registro y revisión). Se cruzan responsabilidad (¿quién autoriza?), adquisición (contrato), conformidad (datos) y desempeño (disponibilidad).",
    leftTag: "DECISIÓN", tools: "Acceso remoto OT gobernado", rightTag: "SE CONECTA CON", seen: "Ciberseguridad OT (S14–15)",
    notes: "Caso realista: el acceso remoto de proveedores es una de las mayores brechas OT. Muestra los seis principios en acción." },

  { type: "phase", sec: "APLICACIÓN", title: "Contracaso — el MES que nadie gobernó", badge: "LOS SEIS, FALLANDO",
    name: "La misma decisión, sin gobierno", what: "Una planta compra un MES por recomendación del integrador. Responsabilidad: nadie firma como dueño. Estrategia: no se liga a ningún objetivo de negocio. Adquisición: sin business case ni TCO. Desempeño: sin SLA, la línea se detiene en cada actualización. Conformidad: la trazabilidad del dato nunca se revisa. Comportamiento: los operarios, sin formación, siguen registrando en papel en paralelo.",
    leftTag: "RESULTADO", tools: "Inversión hundida · doble digitación · rechazo", rightTag: "CONTRASTE CON", seen: "El acceso remoto gobernado (slide anterior)",
    notes: "Ejemplo deliberadamente fallido: da el patrón completo (uno que cumple, uno que no). Ejercicio de 5 min en aula: marcar los seis como 'no cumple' y proponer la acción correctora con responsable — es exactamente lo que pide el taller." },

  { type: "twocol", sec: "APLICACIÓN", title: "38500 y COBIT — cómo se relacionan",
    leftTitle: "ISO/IEC 38500 aporta", leftItems: ["Principios de alto nivel","Modelo EDM","Responsabilidad del board","Lenguaje de gobierno","El 'por qué' y el 'qué'"],
    rightTitle: "COBIT 2019 aporta", rightItems: ["40 objetivos concretos","Componentes y factores de diseño","Niveles de capacidad/madurez","Métricas y prácticas","El 'cómo' detallado"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    notes: "38500 y COBIT no compiten: 38500 da los principios, COBIT los implementa. Se enlaza con S03." },

  { type: "phase", sec: "APLICACIÓN", title: "Taller de la sesión", badge: "SEGUIMIENTO · 5 %",
    name: "Matriz de principios × decisiones", what: "Para la empresa del proyecto: 1) identifica 5 decisiones tecnológicas reales. 2) Evalúa cada una frente a los 6 principios (¿cumple/parcial/no?). 3) Señala los dos principios más débiles y propone una acción. Entregable: matriz de 6×5 con justificación (2 páginas).",
    leftTag: "FORMATO", tools: "Matriz 6 principios × 5 decisiones", rightTag: "ALIMENTA", seen: "Entregable 1 (semana 5)",
    notes: "Este taller es un insumo directo del Entregable 1. Guía detallada en el PDF de ejercicios." },

  { type: "compare", sec: "APLICACIÓN", title: "Madurez de gobierno — alta vs baja",
    leftTitle: "Gobierno maduro", leftItems: ["Junta activa en TI/OT","Políticas por principio, vigentes","Tablero directivo con KPI/KRI","Riesgo IT/OT con dueño claro","Auditoría independiente periódica","Decisiones trazables y documentadas"],
    rightTitle: "Gobierno inmaduro", rightItems: ["Junta ausente, 'eso es de sistemas'","Sin políticas o desactualizadas","Sin métricas de gobierno","Riesgo huérfano","Sin aseguramiento","Decisiones informales e irrastreables"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "Escala que el diagnóstico del proyecto usará para ubicar a la empresa. Alimenta el Entregable 1." },

  { type: "callouts", sec: "APLICACIÓN", title: "Errores frecuentes al aplicar 38500",
    stats: [ {n:"DELEGAR",label:"la dirección delega el gobierno en TI: viola el principio de responsabilidad",color:"FF3B30"},{n:"CHECKLIST",label:"tratar la norma como lista de verificación en vez de guía de juicio",color:"FFB000"},{n:"OLVIDAR OT",label:"aplicar los principios solo a IT y dejar la planta sin gobierno",color:"27E5E5"} ],
    note: { body: "38500 exige juicio directivo, no cumplimiento mecánico. Los tres errores anteriores vacían la norma de sentido. En un CPPS, el peor es dejar OT fuera del alcance del gobierno." },
    notes: "Advertir estos errores antes del taller para que no los repitan en el proyecto." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "warning", sec: "CIERRE", title: "El gobierno no se delega",
    paras: [
      "El principio de responsabilidad es tajante: la dirección puede delegar la GESTIÓN de la TI, pero nunca su GOBIERNO. La rendición de cuentas se queda arriba.",
      "En un CPPS, esto significa que la junta responde por que la digitalización de la planta sea eficaz, eficiente y aceptable — incluida su seguridad y su impacto en las personas.",
    ],
    quote: "Se delega la ejecución; jamás la responsabilidad de gobernar.",
    notes: "Mensaje central de la sesión. Sella la idea de que el board es el dueño del gobierno." },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Audiencia", desc: "38500 gobierna a la dirección; el gobierno de TI es indelegable." },
      { label: "Modelo EDM", desc: "Evaluar, Dirigir, Monitorear el uso de la tecnología." },
      { label: "Seis principios", desc: "Responsabilidad, estrategia, adquisición, desempeño, conformidad, comportamiento." },
      { label: "Tres criterios", desc: "Uso eficaz, eficiente y aceptable." },
      { label: "38500 → COBIT", desc: "La norma da principios; COBIT los implementa." },
    ], notes: "Repaso rápido. Verificar que distinguen principios de tareas EDM." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "ISO/IEC 38500", d: "Norma de gobierno corporativo de la TI." },
      { t: "EDM", d: "Evaluar, Dirigir, Monitorear." },
      { t: "Principio", d: "Enunciado que guía el juicio de la dirección." },
      { t: "Board / junta", d: "Órgano de dirección responsable del gobierno." },
      { t: "Conformidad", d: "Cumplimiento de leyes, regulación y políticas." },
      { t: "Aceptable", d: "Uso ético, legal y socialmente admisible de la TI." },
      { t: "Lock-in", d: "Dependencia cautiva de un proveedor." },
      { t: "RACI", d: "Responsable, Aprobador, Consultado, Informado." },
    ], notes: "Vocabulario de gobierno normativo." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 1", cols: 3, steps: [
      { n:"S01", title:"Fundamentos", desc:"Gobierno ≠ gestión, IT/OT, CPPS.", color:"8C8C8C" },
      { n:"S02", title:"ISO 38500", desc:"Principios · hoy.", color:"C6FF00" },
      { n:"S03", title:"COBIT I", desc:"Sistema de gobierno y cascada.", color:"27E5E5" },
      { n:"S04", title:"COBIT II", desc:"Factores de diseño y madurez.", color:"FFB000" },
      { n:"S05", title:"Valor · ITIL 4", desc:"Cierre de la Unidad 1.", color:"22E06B" },
      { n:"→", title:"Unidad 2", desc:"Sistemas ciber-físicos.", color:"9D6BFF" },
    ], notes: "Ubicar la sesión en la Unidad 1. COBIT (S03-04) implementará los principios vistos hoy." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "ISO/IEC 38500:2015 — gobierno corporativo de TI (norma)", url: "https://www.iso.org/standard/62816.html", acc: "pago" },
      { t: "ISACA — COBIT 2019 (Introduction & Methodology gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "Ley 1581 de 2012 — protección de datos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html", acc: "libre" },
      { t: "SIC — Protección de datos personales (guías)", url: "https://www.sic.gov.co/tema/proteccion-de-datos-personales", acc: "libre" },
      { t: "CONPES 3995 de 2020 — confianza y seguridad digital (DNP)", url: "https://www.dnp.gov.co/", acc: "libre" },
      { t: "De Haes & Van Grembergen (2020) — Enterprise Governance of IT (Springer)", url: "https://link.springer.com/book/10.1007/978-3-030-25918-1", acc: "pago" },
    ], notes: "Base normativa de la sesión más el contexto colombiano de conformidad." },

  { type: "closing", nextNum: 3, nextTitle: "COBIT 2019 I — SISTEMA DE GOBIERNO Y CASCADA", nextDesc: "Componentes del sistema de gobierno, los 40 objetivos y la cascada de objetivos.", prompt: "root@planta:~# next --session 03 _",
    notes: "Recordar entregar la matriz de principios. Enlazar: COBIT implementará estos principios." },
];
