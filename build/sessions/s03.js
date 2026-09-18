// S03 — COBIT 2019 (I): Sistema de gobierno y cascada de objetivos
module.exports = [
  { type: "cover", title: "COBIT 2019\nSISTEMA DE GOBIERNO", subtitle: "Componentes, los 40 objetivos y la cascada de objetivos",
    notes: "Tercera sesión. COBIT es el marco central del curso para diseñar el gobierno del proyecto. Hoy: el sistema de gobierno y la cascada. Revisar la matriz de principios de S02." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Qué es COBIT 2019", desc: "Marco, principios y componentes del sistema de gobierno" },
    { title: "La cascada de objetivos", desc: "De las necesidades de los interesados a los objetivos de TI" },
    { title: "Los 40 objetivos", desc: "Dominios EDM, APO, BAI, DSS, MEA" },
    { title: "Los 7 componentes", desc: "Procesos, estructuras, información, cultura, personas…" },
    { title: "COBIT en un CPPS", desc: "Cascada aplicada a un objetivo de planta" },
    { title: "Cierre y taller", desc: "Construir la cascada del proyecto" },
  ], notes: "De lo estructural (qué es COBIT) a lo aplicado (cascada para la planta)." },

  { type: "stats", sec: "MARCO", title: "COBIT 2019 en cifras",
    bigstats: [ {n:40,label:"OBJETIVOS"},{n:5,label:"DOMINIOS"},{n:7,label:"COMPONENTES"},{n:11,label:"FACTORES DISEÑO"} ],
    kvs: [ {k:"AUTOR",v:"ISACA (2018–2019)"},{k:"PROPÓSITO",v:"Gobierno y gestión de I&T"},{k:"OBJ. GOBIERNO",v:"5 (dominio EDM)"},{k:"OBJ. GESTIÓN",v:"35 (APO, BAI, DSS, MEA)"},{k:"METAS EMPRESA",v:"13 (en 4 dimensiones BSC)"},{k:"METAS ALINEAM.",v:"13 (antes 'IT-related goals')"} ],
    notes: "COBIT es un marco amplio: 40 objetivos son el 'catálogo'; casi nunca se implementan todos. Los factores de diseño (S04) seleccionan cuáles." },

  { type: "objectives", sec: "MARCO", title: "Objetivos de la sesión", items: [
    { lead: "Explicar", rest: "los seis principios de un sistema de gobierno COBIT 2019." },
    { lead: "Recorrer", rest: "la cascada de objetivos de los interesados a los objetivos de TI." },
    { lead: "Ubicar", rest: "los 40 objetivos en sus cinco dominios." },
    { lead: "Describir", rest: "los siete componentes de un sistema de gobierno." },
    { lead: "Construir", rest: "una cascada de objetivos para un objetivo de planta." },
  ], notes: "El entregable de la sesión es una cascada completa, insumo directo del Entregable 1." },

  // -------- SECCIÓN 1 --------
  { type: "section", num: 1, title: "QUÉ ES COBIT 2019", sub: "Marco de gobierno y gestión de la información y la tecnología" },

  { type: "concepts3", sec: "MARCO", title: "Gobierno y gestión de I&T", items: [
      { k: "I&T", desc: "Information & Technology: toda la información que la empresa genera y usa, y la tecnología que la soporta.", ex: "No solo el 'departamento de TI'", color: "C6FF00" },
      { k: "GOBIERNO", desc: "Asegura valor a los interesados; equilibra beneficio, riesgo y recursos; dominio EDM.", ex: "Responsabilidad: junta", color: "27E5E5" },
      { k: "GESTIÓN", desc: "Planifica, construye, ejecuta y monitorea alineada al gobierno; dominios APO/BAI/DSS/MEA.", ex: "Responsabilidad: dirección ejecutiva", color: "FFB000" },
    ], note: "COBIT gobierna y gestiona la I&T de toda la empresa (enterprise-wide), no solo la función de TI. En un CPPS, incluye la información y tecnología del piso de planta.",
    notes: "Clave: I&T es de toda la empresa. COBIT explícitamente separa gobierno de gestión, alineado con 38500." },

  { type: "grid", sec: "MARCO", title: "Los 6 principios de un sistema de gobierno", cols: 3, lead: "COBIT 2019 define seis principios para el sistema de gobierno de una empresa.",
    cards: [
      { tag: "1 · VALOR A INTERESADOS", desc: "El gobierno existe para crear valor equilibrando beneficio, riesgo y recursos.", color: "C6FF00" },
      { tag: "2 · ENFOQUE HOLÍSTICO", desc: "Se construye con varios componentes que actúan juntos, no aislados.", color: "27E5E5" },
      { tag: "3 · SISTEMA DINÁMICO", desc: "Cambia cuando cambia algún factor de diseño; no es estático.", color: "FFB000" },
      { tag: "4 · DISTINTO DE GESTIÓN", desc: "Gobierno y gestión son actividades diferenciadas.", color: "22E06B" },
      { tag: "5 · A MEDIDA", desc: "Se adapta a las necesidades de la empresa mediante factores de diseño.", color: "9D6BFF" },
      { tag: "6 · DE PUNTA A PUNTA", desc: "Cubre toda la empresa, no solo la función de TI.", color: "FF6B35" },
    ], notes: "Estos seis principios son el ADN de COBIT 2019. El 3 y el 5 (dinámico y a medida) son la gran novedad frente a COBIT 5." },

  { type: "grid", sec: "MARCO", title: "Los 3 principios del marco de gobierno", cols: 3, lead: "Además, un buen MARCO de gobierno (como COBIT) debe cumplir tres principios.",
    cards: [
      { tag: "MODELO CONCEPTUAL", desc: "Basarse en un modelo conceptual claro, consistente y no redundante.", color: "C6FF00" },
      { tag: "ABIERTO Y FLEXIBLE", desc: "Permitir añadir contenido y adaptarse a nuevas necesidades.", color: "27E5E5" },
      { tag: "ALINEADO A ESTÁNDARES", desc: "Alinearse con los principales estándares y marcos (ISO, ITIL, NIST).", color: "FFB000" },
    ], notes: "Distinguir: 6 principios del SISTEMA (de la empresa) vs 3 principios del MARCO (de COBIT como producto). Distinción clave para el análisis de casos." },

  { type: "process", sec: "MARCO", title: "COBIT 5 → COBIT 2019: qué cambió", cols: 3, steps: [
      { n:"5", title:"7 enablers", desc:"Habilitadores (2012).", color:"8C8C8C" },
      { n:"→", title:"7 componentes", desc:"Renombrados y ampliados.", color:"27E5E5" },
      { n:"+", title:"Factores diseño", desc:"11 factores para el diseño a medida.", color:"C6FF00" },
      { n:"+", title:"Áreas de enfoque", desc:"Guías temáticas (seguridad, DevOps…).", color:"FFB000" },
      { n:"+", title:"Capacidad CMMI", desc:"Niveles de capacidad basados en CMMI.", color:"22E06B" },
      { n:"=", title:"Diseño a medida", desc:"De 'talla única' a sistema adaptado.", color:"9D6BFF" },
    ], notes: "COBIT 2019 no reemplaza a 5: lo evoluciona hacia el diseño a medida. Los factores de diseño (S04) son la clave." },

  { type: "grid", sec: "MARCO", title: "Vista de los 7 componentes", cols: 3, lead: "El sistema de gobierno se construye con siete tipos de componente que trabajan juntos.",
    cards: [
      { tag: "PROCESOS", desc: "Prácticas y actividades para lograr objetivos.", color: "C6FF00" },
      { tag: "ESTRUCTURAS", desc: "Entidades que toman decisiones (comités, roles).", color: "27E5E5" },
      { tag: "POLÍTICAS Y MARCOS", desc: "Guía traducida en orientación práctica.", color: "FFB000" },
      { tag: "INFORMACIÓN", desc: "Todo lo que el gobierno produce y consume.", color: "22E06B" },
      { tag: "CULTURA Y CONDUCTA", desc: "Comportamientos, ética y cultura.", color: "9D6BFF" },
      { tag: "PERSONAS Y COMPETENCIAS", desc: "Habilidades para decidir y actuar.", color: "FF6B35" },
    ], notes: "Falta el séptimo (Servicios/infraestructura/apps), que se ve en la sección de componentes. Enfoque holístico: los 7 juntos." },

  { type: "callouts", sec: "MARCO", title: "COBIT y 38500 — por qué ambos",
    stats: [ {n:"38500",label:"da los principios y la responsabilidad de la dirección (el porqué)",color:"C6FF00"},{n:"COBIT",label:"aporta objetivos, componentes y madurez para implementarlos (el cómo)",color:"27E5E5"},{n:"JUNTOS",label:"38500 gobierna a la junta; COBIT operacionaliza ese gobierno en la empresa",color:"FFB000"} ],
    note: { body: "No se elige entre 38500 y COBIT: se usan juntos. La norma fija los principios que la junta debe honrar; COBIT los convierte en un sistema de gobierno concreto, medible y a medida. El curso los encadena: S02 dio principios, S03–04 los implementan." },
    notes: "Cierra la pregunta frecuente '¿38500 o COBIT?'. Respuesta: los dos, en capas." },

  { type: "quote", sec: "MARCO", text: "COBIT no es una metodología de implementación: es un marco para diseñar el sistema de gobierno que cada empresa necesita.", cite: "ISACA — COBIT 2019",
    notes: "Puente a la cascada. COBIT ayuda a decidir QUÉ gobernar; la cascada es la herramienta para priorizar." },

  // -------- SECCIÓN 2: CASCADA --------
  { type: "section", num: 2, title: "LA CASCADA DE OBJETIVOS", sub: "De las necesidades de los interesados a los objetivos de gobierno y gestión" },

  { type: "process", sec: "CASCADA", title: "Los cuatro niveles de la cascada", cols: 4, steps: [
      { n:1, title:"Necesidades", desc:"Motores y necesidades de los interesados.", color:"C6FF00" },
      { n:2, title:"Metas empresa", desc:"13 metas empresariales (BSC).", color:"27E5E5" },
      { n:3, title:"Metas alineam.", desc:"13 metas de alineamiento (I&T).", color:"FFB000" },
      { n:4, title:"Objetivos", desc:"Objetivos de gobierno y gestión.", color:"22E06B" },
    ], notes: "La cascada traduce necesidades del negocio en objetivos tecnológicos priorizados. Es la herramienta más usada de COBIT." },

  { type: "phase", sec: "CASCADA", title: "Nivel 4 — Objetivos de gobierno y gestión", badge: "CASCADA 4 / 4",
    name: "El destino de la cascada", what: "Las metas de alineamiento se mapean a un subconjunto de los 40 objetivos de gobierno y gestión, con una relación 'primaria' o 'secundaria'. El resultado no son los 40: son los pocos objetivos que de verdad soportan las necesidades priorizadas. Ese subconjunto es el punto de partida del diseño (S04).",
    leftTag: "SALIDA", tools: "Lista priorizada de objetivos (P/S)", rightTag: "SE REFINA CON", seen: "Factores de diseño (S04)",
    notes: "La cascada da un primer conjunto de objetivos; los factores de diseño lo ajustan. Aclarar la relación primaria/secundaria." },

  { type: "phase", sec: "CASCADA", title: "Nivel 1 — Necesidades de los interesados", badge: "CASCADA 1 / 4",
    name: "El punto de partida", what: "Todo empieza con lo que los interesados necesitan: crecer, cumplir, reducir costos, innovar, gestionar riesgo. Los motores (drivers) —cambios de estrategia, tecnología, regulación— generan estas necesidades. En un CPPS: 'reducir paradas no programadas', 'trazabilidad para exportar', 'ciberseguridad OT'.",
    leftTag: "EJEMPLOS EN PLANTA", tools: "Reducir paradas · calidad · cumplimiento", rightTag: "SE TRADUCE EN", seen: "Metas empresariales (nivel 2)",
    notes: "Empezar por el interesado evita el error de 'tecnología por tecnología'. Las necesidades bajan por la cascada." },

  { type: "grid", sec: "CASCADA", title: "Nivel 2 — Las 13 metas empresariales (BSC)", cols: 4, lead: "Las necesidades se mapean a 13 metas empresariales en cuatro dimensiones del Balanced Scorecard.",
    cards: [
      { tag: "FINANCIERA", desc: "Portafolio de productos, riesgo gestionado, cumplimiento, transparencia financiera.", color: "C6FF00" },
      { tag: "CLIENTE", desc: "Cultura de servicio, continuidad y disponibilidad, decisiones ágiles basadas en datos.", color: "27E5E5" },
      { tag: "INTERNA", desc: "Optimización de procesos, costos, productividad del personal, cumplimiento interno.", color: "FFB000" },
      { tag: "CRECIMIENTO", desc: "Innovación de productos, competencias del personal, cultura de innovación.", color: "22E06B" },
    ], notes: "13 metas empresariales agrupadas en las 4 dimensiones BSC. No hay que memorizarlas todas; sí entender el mapeo." },

  { type: "grid", sec: "CASCADA", title: "Nivel 3 — Las 13 metas de alineamiento", cols: 2, lead: "Las metas empresariales se traducen en 13 metas de alineamiento (antes 'IT-related goals').",
    cards: [
      { tag: "EJEMPLOS", desc: "Alineación TI–negocio; realización de beneficios del portafolio; riesgo de I&T gestionado; seguridad de la información y sistemas.", color: "C6FF00" },
      { tag: "MÁS EJEMPLOS", desc: "Agilidad para responder al negocio; entrega de programas a tiempo y presupuesto; competencias de I&T; cumplimiento de políticas.", color: "27E5E5" },
      { tag: "QUÉ APORTAN", desc: "Conectan el mundo del negocio (metas empresa) con el mundo tecnológico (objetivos de gobierno/gestión).", color: "FFB000" },
      { tag: "EN UN CPPS", desc: "'Riesgo de I&T gestionado' y 'seguridad de sistemas' son críticas por la convergencia IT/OT.", color: "FF3B30" },
    ], notes: "Las metas de alineamiento son el 'traductor' entre negocio y tecnología. 13 en total." },

  { type: "matrix", sec: "CASCADA", title: "Ejemplo — cascada para reducir paradas", firstW: 3.2,
    cols: ["Nivel", "Elemento", "Concreción"],
    rows: [
      ["1 Necesidad", {t:"Interesado",color:"C6FF00"}, "Reducir paradas no programadas"],
      ["2 Meta empresa", {t:"Interna",color:"27E5E5"}, "Optimizar procesos de negocio"],
      ["3 Meta alineam.", {t:"I&T",color:"FFB000"}, "Riesgo de I&T gestionado"],
      ["4 Objetivo", {t:"COBIT",color:"22E06B"}, "APO12 Gestionar el riesgo"],
    ], notes: "Ejemplo completo de cascada de arriba a abajo. El proyecto construirá una cascada así para su objetivo." },

  { type: "callouts", sec: "CASCADA", title: "Cómo usar la cascada sin abusar de ella",
    stats: [ {n:"GUÍA",label:"la cascada orienta la priorización, no es una fórmula mecánica",color:"C6FF00"},{n:"JUICIO",label:"requiere criterio: no todas las metas mapeadas son igual de relevantes",color:"FFB000"},{n:"FOCO",label:"produce un conjunto MANEJABLE de objetivos, no los 40",color:"27E5E5"} ],
    note: { body: "ISACA advierte: la cascada es una guía, no un algoritmo. Su valor es forzar la conversación de negocio antes de hablar de tecnología, y reducir 40 objetivos a los pocos que de verdad importan." },
    notes: "Advertir contra el uso mecánico. La cascada estructura el juicio; no lo sustituye." },

  // -------- SECCIÓN 3: LOS 40 OBJETIVOS --------
  { type: "section", num: 3, title: "LOS 40 OBJETIVOS", sub: "Cinco dominios: EDM, APO, BAI, DSS y MEA" },

  { type: "grid", sec: "OBJETIVOS", title: "Los cinco dominios", cols: 3, lead: "Los 40 objetivos se agrupan en un dominio de gobierno y cuatro de gestión.",
    cards: [
      { tag: "EDM · 5", desc: "Evaluate, Direct, Monitor. GOBIERNO — responsabilidad de la junta.", color: "C6FF00" },
      { tag: "APO · 14", desc: "Align, Plan, Organize. Gestión: estrategia, arquitectura, riesgo, proveedores.", color: "27E5E5" },
      { tag: "BAI · 11", desc: "Build, Acquire, Implement. Gestión: proyectos, requisitos, cambios.", color: "FFB000" },
      { tag: "DSS · 6", desc: "Deliver, Service, Support. Gestión: operación, incidentes, continuidad.", color: "22E06B" },
      { tag: "MEA · 4", desc: "Monitor, Evaluate, Assess. Gestión: desempeño, control interno, cumplimiento.", color: "9D6BFF" },
      { tag: "TOTAL · 40", desc: "5 de gobierno + 35 de gestión. Casi nunca se implementan todos.", color: "FF6B35" },
    ], notes: "Regla mnemotécnica: EDM gobierna; APO planea; BAI construye; DSS opera; MEA vigila. 5+14+11+6+4 = 40." },

  { type: "grid", sec: "OBJETIVOS", title: "Anatomía de un objetivo COBIT", cols: 2, lead: "Cada uno de los 40 objetivos trae una ficha estandarizada de componentes.",
    cards: [
      { tag: "PROPÓSITO Y DESCRIPCIÓN", desc: "Qué persigue el objetivo y por qué importa para el negocio.", color: "C6FF00" },
      { tag: "PRÁCTICAS Y ACTIVIDADES", desc: "Prácticas de gobierno/gestión con sus actividades y niveles de capacidad.", color: "27E5E5" },
      { tag: "MÉTRICAS", desc: "Metas y métricas para el objetivo y para cada meta de alineamiento relacionada.", color: "FFB000" },
      { tag: "COMPONENTES RELACIONADOS", desc: "Estructuras (con RACI), flujos de información, políticas, cultura y habilidades.", color: "22E06B" },
    ], notes: "Saber leer una ficha de objetivo es clave para el proyecto: de ahí salen los procesos, RACI y métricas concretas." },

  { type: "phase", sec: "OBJETIVOS", title: "Dominio EDM — Gobierno", badge: "5 OBJETIVOS · JUNTA",
    name: "Evaluate, Direct, Monitor", what: "EDM01 Marco de gobierno · EDM02 Entrega de beneficios · EDM03 Optimización del riesgo · EDM04 Optimización de recursos · EDM05 Compromiso con los interesados. Son responsabilidad del órgano de dirección: fijan valor, riesgo y recursos.",
    leftTag: "RESPONSABLE", tools: "Junta directiva / órgano de gobierno", rightTag: "EN UN CPPS", seen: "EDM03: riesgo IT/OT de la planta",
    notes: "Los 5 EDM son la implementación directa de las tareas de 38500. EDM03 (riesgo) es crítico en entornos ciber-físicos." },

  { type: "phase", sec: "OBJETIVOS", title: "Dominio APO — Alinear, Planear, Organizar", badge: "14 OBJETIVOS · GESTIÓN",
    name: "El dominio más grande", what: "Incluye APO01 (marco de gestión), APO02 (estrategia), APO03 (arquitectura empresarial), APO04 (innovación), APO05 (portafolio), APO08 (relaciones), APO12 (riesgo), APO13 (seguridad), APO14 (datos). Es donde se planifica y organiza la I&T.",
    leftTag: "CLAVES EN CPPS", tools: "APO03 arquitectura · APO12 riesgo · APO13 seguridad · APO14 datos", rightTag: "SE VE EN", seen: "Arquitectura (S07-08), datos (S13)",
    notes: "APO concentra los objetivos más estratégicos. APO14 (gestión de datos) es nuevo en COBIT 2019 y clave para CPPS." },

  { type: "phase", sec: "OBJETIVOS", title: "Dominios BAI, DSS y MEA", badge: "21 OBJETIVOS · GESTIÓN",
    name: "Construir, operar y vigilar", what: "BAI (11): gestión de programas, requisitos, disponibilidad/capacidad, cambios (BAI06), configuración (BAI10). DSS (6): operaciones (DSS01), incidentes (DSS02), continuidad (DSS04), seguridad (DSS05). MEA (4): desempeño (MEA01), control interno (MEA02), cumplimiento externo (MEA03).",
    leftTag: "CLAVES EN CPPS", tools: "BAI06 cambios · DSS04 continuidad · DSS05 seguridad · MEA03 cumplimiento", rightTag: "SE VE EN", seen: "Riesgo y continuidad (S14-15)",
    notes: "DSS04 (continuidad) y DSS05 (seguridad) son vitales para OT. BAI06 (gestión de cambios) evita que un cambio tumbe la línea." },

  { type: "matrix", sec: "OBJETIVOS", title: "Objetivos críticos para un CPPS", firstW: 3.0,
    cols: ["Objetivo", "Nombre", "Por qué en CPPS"],
    rows: [
      ["EDM03", {t:"Optimizar riesgo",color:"C6FF00"}, "Riesgo IT/OT con dueño"],
      ["APO12", {t:"Gestionar riesgo",color:"27E5E5"}, "Registro de riesgos"],
      ["APO13", {t:"Gestionar seguridad",color:"FFB000"}, "Seguridad de la info"],
      ["DSS04", {t:"Continuidad",color:"22E06B"}, "Producción no para"],
      ["DSS05", {t:"Seguridad servicios",color:"FF3B30"}, "Defensa OT"],
    ], notes: "Estos objetivos son los que el proyecto priorizará. La selección final depende de los factores de diseño (S04)." },

  { type: "compare", sec: "OBJETIVOS", title: "Objetivo de gobierno vs de gestión",
    leftTitle: "Gobierno (EDM)", leftItems: ["Lo ejerce la junta","Fija valor, riesgo, recursos","Evalúa, dirige, monitorea","Ej.: EDM03 optimizar riesgo","Horizonte estratégico"],
    rightTitle: "Gestión (APO/BAI/DSS/MEA)", rightItems: ["Lo ejerce la dirección ejecutiva","Planea, construye, opera, vigila","Ejecuta la dirección del gobierno","Ej.: APO12 gestionar riesgo","Horizonte operativo"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    foot: "EDM03 y APO12 son el mismo tema (riesgo) en dos niveles: gobernar el riesgo vs gestionarlo.",
    notes: "Ejemplo EDM03/APO12 aclara la diferencia gobierno/gestión aplicada al mismo dominio (riesgo)." },

  // -------- SECCIÓN 4: 7 COMPONENTES --------
  { type: "section", num: 4, title: "LOS 7 COMPONENTES DEL SISTEMA DE GOBIERNO", sub: "Con qué se construye realmente el gobierno" },

  { type: "phase", sec: "COMPONENTES", title: "Procesos y estructuras organizativas", badge: "COMPONENTES 1–2",
    name: "El esqueleto operativo", what: "PROCESOS: conjunto de prácticas y actividades para lograr objetivos y producir salidas que soporten metas. ESTRUCTURAS ORGANIZATIVAS: las entidades que toman decisiones (comité de dirección, comité de arquitectura, oficina de proyectos). Definen quién decide y cómo se ejecuta.",
    leftTag: "EN UN CPPS", tools: "Proceso de gestión de cambios OT · comité IT/OT", rightTag: "SE MIDEN CON", seen: "Niveles de capacidad (S04)",
    notes: "Procesos y estructuras son los componentes más 'visibles'. Los procesos se miden con niveles de capacidad." },

  { type: "phase", sec: "COMPONENTES", title: "Políticas, información y cultura", badge: "COMPONENTES 3–5",
    name: "El sistema nervioso", what: "PRINCIPIOS, POLÍTICAS Y MARCOS: traducen el comportamiento deseado en guía práctica. INFORMACIÓN: todo lo que el gobierno produce y consume (p. ej. una política de seguridad OT es a la vez política e información). CULTURA, ÉTICA Y CONDUCTA: los comportamientos, a menudo subestimados y decisivos.",
    leftTag: "EN UN CPPS", tools: "Política de acceso remoto · cultura de seguridad en planta", rightTag: "RIESGO SI FALLA", seen: "Políticas 'de papel' que nadie sigue",
    notes: "La cultura es el componente más difícil de cambiar y el que más hunde iniciativas de digitalización." },

  { type: "phase", sec: "COMPONENTES", title: "Personas y servicios/infraestructura", badge: "COMPONENTES 6–7",
    name: "Las capacidades", what: "PERSONAS, HABILIDADES Y COMPETENCIAS: necesarias para tomar buenas decisiones, ejecutar acciones correctivas y completar actividades. SERVICIOS, INFRAESTRUCTURA Y APLICACIONES: la tecnología y las herramientas que proveen el procesamiento de la I&T (nube, plataformas, historiadores, SCADA).",
    leftTag: "EN UN CPPS", tools: "Competencias IT/OT · plataforma IIoT · historiador", rightTag: "BRECHA TÍPICA", seen: "Falta de talento en ciberseguridad OT",
    notes: "El componente 7 es la infraestructura tecnológica. La brecha de competencias (comp. 6) es la barrera #1 en Colombia." },

  { type: "grid", sec: "COMPONENTES", title: "Componentes genéricos vs a medida", cols: 2, lead: "Cada componente tiene una variante genérica y variantes específicas por contexto.",
    cards: [
      { tag: "GENÉRICO", desc: "El componente base que aplica a cualquier empresa (p. ej. el proceso APO12 estándar).", color: "C6FF00" },
      { tag: "VARIANTE", desc: "El mismo componente adaptado a un contexto (p. ej. gestión de riesgo para OT).", color: "27E5E5" },
      { tag: "ÁREAS DE ENFOQUE", desc: "Guías temáticas que agrupan componentes a medida: seguridad, riesgo, DevOps, pymes.", color: "FFB000" },
      { tag: "EN UN CPPS", desc: "El área de enfoque 'Seguridad de la información' y la lógica OT guían la variante industrial.", color: "FF3B30" },
    ], notes: "Las áreas de enfoque son la forma en que COBIT 2019 entrega contenido a medida. No hay un 'COBIT para OT' oficial, pero la lógica aplica." },

  { type: "grid", sec: "COMPONENTES", title: "Flujos de información del gobierno", cols: 3, lead: "El componente 'información' incluye los artefactos que hacen visible el gobierno.",
    cards: [
      { tag: "POLÍTICAS", desc: "Documentos que fijan las reglas: acceso remoto OT, uso de datos, cambios.", color: "C6FF00" },
      { tag: "REGISTROS", desc: "Registro de riesgos, de cambios, de incidentes, de activos OT.", color: "27E5E5" },
      { tag: "TABLEROS", desc: "Cuadros de mando con KPI/KRI que realimentan la evaluación.", color: "FFB000" },
      { tag: "ARQUITECTURA", desc: "Diagramas ISA-95/RAMI que documentan el sistema ciber-físico.", color: "22E06B" },
      { tag: "INFORMES", desc: "Reportes de auditoría, cumplimiento y desempeño a la junta.", color: "9D6BFF" },
      { tag: "DECISIONES", desc: "Actas y aprobaciones que dejan trazabilidad de quién decidió qué.", color: "FF6B35" },
    ], notes: "La información es a la vez componente y salida del gobierno. Sin estos artefactos, el gobierno no es auditable." },

  { type: "keypoints", sec: "COMPONENTES", title: "El enfoque holístico en la práctica", items: [
      { label: "No basta el proceso", desc: "Un buen proceso sin estructura que decida ni cultura que lo viva, falla." },
      { label: "No basta el comité", desc: "Una estructura sin proceso ni información se vuelve decorativa." },
      { label: "No basta la herramienta", desc: "La mejor plataforma sin competencias ni políticas no gobierna nada." },
      { label: "Los 7 juntos", desc: "El gobierno emerge de la interacción de los siete componentes." },
      { label: "Coherencia", desc: "Todos deben apuntar a los mismos objetivos priorizados." },
    ], notes: "El principio holístico (principio 2) en acción. El error clásico: invertir solo en tecnología (comp. 7) y descuidar el resto." },

  { type: "callouts", sec: "COMPONENTES", title: "Diagnóstico rápido de componentes",
    stats: [ {n:"¿PROCESOS?",label:"¿existen y se siguen procesos de riesgo, cambios y seguridad OT?",color:"C6FF00"},{n:"¿ESTRUCTURA?",label:"¿hay un comité que decida sobre TI/OT y rinda cuentas?",color:"27E5E5"},{n:"¿CULTURA?",label:"¿la seguridad y el dato son valorados en el piso de planta?",color:"FFB000"} ],
    note: { body: "Tres preguntas para diagnosticar la madurez de los componentes en la empresa del proyecto. Un 'no' repetido señala dónde está el mayor riesgo de gobierno." },
    notes: "Herramienta de diagnóstico para el Entregable 1: revisar los 7 componentes, no solo los procesos." },

  // -------- SECCIÓN 5: EN UN CPPS --------
  { type: "section", num: 5, title: "COBIT EN UN SISTEMA CIBER-FÍSICO", sub: "Cascada y objetivos aplicados al piso de planta" },

  { type: "phase", sec: "APLICACIÓN", title: "Caso — trazabilidad para exportación", badge: "CASO COMPLETO",
    name: "De la necesidad al objetivo", what: "Una empresa de alimentos necesita trazabilidad de lote para exportar. Cascada: necesidad (cumplir requisito de exportación) → meta empresa (cumplimiento con leyes externas) → meta alineamiento (I&T conforme y con datos confiables) → objetivos APO14 (gestión de datos), BAI10 (configuración), MEA03 (cumplimiento externo).",
    leftTag: "OBJETIVOS SELECCIONADOS", tools: "APO14 · BAI10 · MEA03 · DSS06", rightTag: "COMPONENTES CLAVE", seen: "Procesos + información + sistemas",
    notes: "Caso realista del sector alimentos antioqueño. Muestra la cascada completa terminando en objetivos concretos." },

  { type: "matrix", sec: "APLICACIÓN", title: "De objetivo a componentes concretos", firstW: 3.4,
    cols: ["Objetivo", "Proceso", "Componente de apoyo"],
    rows: [
      ["APO14 Datos", {t:"Gestión de datos",color:"C6FF00"}, "Data steward · políticas"],
      ["DSS05 Seguridad", {t:"Servicios seguros",color:"FF3B30"}, "Segmentación · IAM"],
      ["BAI06 Cambios", {t:"Gestión de cambios",color:"FFB000"}, "Comité de cambios OT"],
      ["MEA01 Desempeño", {t:"Monitoreo",color:"27E5E5"}, "Tablero OEE/KPI"],
    ], notes: "Cada objetivo se aterriza en un proceso y en componentes de apoyo. Así se pasa de la teoría al diseño." },

  { type: "grid", sec: "APLICACIÓN", title: "Objetivos de gobierno frente a riesgos ciber-físicos", cols: 2, lead: "La convergencia IT/OT hace que ciertos objetivos sean no negociables.",
    cards: [
      { tag: "DISPONIBILIDAD", desc: "DSS04 (continuidad) y BAI04 (disponibilidad/capacidad): la línea no puede parar.", color: "C6FF00" },
      { tag: "SEGURIDAD OT", desc: "APO13 y DSS05: proteger el proceso físico de ciberataques.", color: "FF3B30" },
      { tag: "INTEGRIDAD DEL DATO", desc: "APO14 y DSS06: señales confiables para decisiones y trazabilidad.", color: "27E5E5" },
      { tag: "CAMBIO CONTROLADO", desc: "BAI06 y BAI10: ningún cambio no gobernado toca la producción.", color: "FFB000" },
    ], notes: "Traduce la teoría de COBIT a las cuatro prioridades ineludibles de un CPPS." },

  { type: "matrix", sec: "APLICACIÓN", title: "Mapa de priorización de objetivos", firstW: 3.4,
    cols: ["Objetivo", "Prioridad", "Justificación en planta"],
    rows: [
      ["DSS04 Continuidad", {t:"ALTA",color:"FF3B30"}, "Parada = pérdida directa"],
      ["APO13 Seguridad", {t:"ALTA",color:"FF3B30"}, "Riesgo OT creciente"],
      ["APO14 Datos", {t:"MEDIA",color:"FFB000"}, "Trazabilidad y OEE"],
      ["APO04 Innovación", {t:"BAJA",color:"22E06B"}, "No crítico aún"],
    ], notes: "Priorizar es decir 'no' a la mayoría. Este mapa (alta/media/baja) precede al análisis de factores de diseño de S04." },

  { type: "phase", sec: "APLICACIÓN", title: "Taller de la sesión", badge: "SEGUIMIENTO",
    name: "Construir la cascada del proyecto", what: "Para la empresa del proyecto: 1) enuncia una necesidad real del negocio. 2) Mapea a una meta empresarial y una de alineamiento. 3) Selecciona 4–6 objetivos de gobierno/gestión priorizados. 4) Para cada objetivo, nombra el proceso y dos componentes de apoyo. Entregable: cascada + tabla objetivo→componente.",
    leftTag: "FORMATO", tools: "Diagrama de cascada + tabla", rightTag: "ALIMENTA", seen: "Entregable 1 (semana 5) — núcleo",
    notes: "Este taller es el corazón del Entregable 1. La selección de objetivos se refinará con factores de diseño en S04." },

  { type: "callouts", sec: "APLICACIÓN", title: "Errores al aplicar COBIT en planta",
    stats: [ {n:"TODO",label:"intentar implementar los 40 objetivos: parálisis y desgaste",color:"FF3B30"},{n:"SOLO IT",label:"gobernar la oficina y dejar el piso de planta (OT) sin cobertura",color:"FFB000"},{n:"COPIAR",label:"tomar la cascada de otra empresa en vez de construir la propia",color:"27E5E5"} ],
    note: { body: "COBIT bien usado prioriza pocos objetivos que importan, cubre IT y OT, y se construye a la medida de la empresa. Los factores de diseño (S04) son la herramienta para lograrlo sin caer en estos errores." },
    notes: "Enlaza con S04: el diseño a medida es la respuesta a 'no puedo hacer los 40'." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "warning", sec: "CIERRE", title: "No implementes los 40 objetivos",
    paras: [
      "El error más caro con COBIT es tratarlo como un checklist de 40 objetivos a cumplir todos. Eso agota recursos, genera burocracia y no crea valor.",
      "COBIT bien usado prioriza: la cascada y los factores de diseño seleccionan los pocos objetivos que soportan las necesidades reales de la empresa. Menos, pero bien gobernado.",
    ],
    quote: "Gobernar es priorizar; priorizar es decir 'no' a casi todo.",
    notes: "Mensaje central. Anticipa S04: el diseño a medida es la respuesta a la sobrecarga." },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "6 principios", desc: "Valor, holístico, dinámico, distinto de gestión, a medida, de punta a punta." },
      { label: "Cascada", desc: "Interesados → metas empresa → metas alineamiento → objetivos." },
      { label: "40 objetivos", desc: "EDM(5)+APO(14)+BAI(11)+DSS(6)+MEA(4)." },
      { label: "7 componentes", desc: "Procesos, estructuras, políticas, información, cultura, personas, servicios." },
      { label: "Holístico", desc: "El gobierno emerge de los siete componentes juntos." },
    ], notes: "Repaso. Verificar que distinguen cascada (priorizar) de componentes (construir)." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "COBIT 2019", d: "Marco de gobierno y gestión de I&T (ISACA)." },
      { t: "I&T", d: "Información y tecnología de toda la empresa." },
      { t: "Cascada de objetivos", d: "Mecanismo de priorización de interesados a objetivos." },
      { t: "EDM", d: "Dominio de gobierno: Evaluate, Direct, Monitor." },
      { t: "APO/BAI/DSS/MEA", d: "Dominios de gestión de COBIT." },
      { t: "Componente", d: "Uno de los 7 elementos que forman el gobierno." },
      { t: "Meta de alineamiento", d: "Traductor entre metas de negocio y objetivos de I&T." },
      { t: "Área de enfoque", d: "Guía temática con componentes a medida." },
    ], notes: "Vocabulario de COBIT nivel 1." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 1", cols: 3, steps: [
      { n:"S01", title:"Fundamentos", desc:"Gobierno, IT/OT, CPPS.", color:"8C8C8C" },
      { n:"S02", title:"ISO 38500", desc:"Principios.", color:"8C8C8C" },
      { n:"S03", title:"COBIT I", desc:"Sistema y cascada · hoy.", color:"C6FF00" },
      { n:"S04", title:"COBIT II", desc:"Factores de diseño y madurez.", color:"27E5E5" },
      { n:"S05", title:"Valor · ITIL 4", desc:"Cierre de la Unidad 1.", color:"FFB000" },
      { n:"→", title:"Unidad 2", desc:"Sistemas ciber-físicos.", color:"9D6BFF" },
    ], notes: "S04 refina la selección de objetivos con los 11 factores de diseño." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "ISACA — Portal COBIT 2019 (overview libre; Intro & Methodology gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "ISACA — COBIT 2019: Governance & Management Objectives (tomo)", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
      { t: "ISACA — COBIT 2019: Design Guide", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
      { t: "De Haes, Van Grembergen et al. (2020) — Enterprise Governance of IT", url: "https://link.springer.com/book/10.1007/978-3-030-25918-1", acc: "pago" },
      { t: "ISO/IEC 38500 — principios de gobierno (relación con COBIT)", url: "https://www.iso.org/standard/62816.html", acc: "pago" },
    ], notes: "Los tres volúmenes base de COBIT 2019 más recursos de ISACA." },

  { type: "closing", nextNum: 4, nextTitle: "COBIT 2019 II — FACTORES DE DISEÑO Y MADUREZ", nextDesc: "Los 11 factores de diseño, niveles de capacidad y diseño del sistema de gobierno a medida.", prompt: "root@planta:~# next --session 04 _",
    notes: "Traer la cascada del taller. S04 la refinará con factores de diseño para seleccionar los objetivos definitivos." },
];
