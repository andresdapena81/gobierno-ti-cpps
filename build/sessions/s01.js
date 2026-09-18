// S01 — Fundamentos de Gobierno de TI y de los Sistemas Ciber-Físicos
module.exports = [
  { type: "cover", title: "GOBIERNO DE TI\n& CPPS", subtitle: "Fundamentos: gobernar la tecnología que opera procesos físicos",
    notes: "Bienvenida. Presentación del docente y del enfoque teórico-práctico. Esta sesión fija el vocabulario y el marco mental de todo el semestre: gobernar TI no es administrarla, y una planta moderna es un problema de gobierno de TI." },

  { type: "agenda", kicker: "// 01  INICIO", items: [
    { title: "El panorama", desc: "Convergencia IT/OT y por qué gobernar la TI en producción" },
    { title: "Gobierno vs gestión", desc: "EDM frente a PBRM; qué es realmente gobernar" },
    { title: "Derechos de decisión", desc: "Quién decide sobre la tecnología (Weill & Ross)" },
    { title: "Marcos de referencia", desc: "ISO/IEC 38500, COBIT 2019, ITIL 4" },
    { title: "Sistemas ciber-físicos", desc: "CPS/CPPS y por qué son un asunto de gobierno" },
    { title: "Cierre y proyecto", desc: "Mapa del curso, taller y referencias" },
  ], notes: "Recorrido de lo conceptual (gobierno) a lo técnico (CPPS). Los dos mundos se integran deliberadamente durante el curso." },

  { type: "stats", kicker: "// 02  CURSO", title: "La asignatura en cifras",
    bigstats: [ {n:3,label:"CRÉDITOS"},{n:144,label:"HORAS THTA"},{n:48,label:"H. ACOMPAÑAM."},{n:96,label:"H. INDEP."} ],
    kvs: [ {k:"ID CURSO",v:"027227 · Nº Clase 6827"},{k:"NIVEL",v:"Pregrado · Obligatoria"},{k:"SEDE",v:"USB Bello · Campus Medellín"},{k:"PERIODO",v:"27/07 – 23/11/2026 (16 sem.)"},{k:"EVALUACIÓN",v:"Corte 1 30% · Corte 2 30% · Corte 3 40%"},{k:"RELACIÓN",v:"1:2 — 2 h independientes por hora en aula"} ],
    notes: "3 créditos = 144 horas totales. El trabajo independiente (96 h) es el doble del acompañamiento: los laboratorios y el proyecto se sostienen fuera del aula." },

  { type: "objectives", kicker: "// 03  CURSO", title: "Objetivos de la sesión", items: [
    { lead: "Distinguir", rest: "gobierno de TI de gestión de TI (modelo EDM vs PBRM)." },
    { lead: "Explicar", rest: "por qué una planta de producción moderna es un problema de gobierno de TI." },
    { lead: "Identificar", rest: "los derechos de decisión y las partes interesadas de la tecnología." },
    { lead: "Ubicar", rest: "los marcos ISO/IEC 38500, COBIT 2019 e ITIL 4 y su alcance." },
    { lead: "Definir", rest: "sistema ciber-físico de producción (CPPS) y la convergencia IT/OT." },
  ], notes: "Objetivos verificables. Al final el estudiante debe poder decir quién decide qué sobre la tecnología y por qué el gobierno importa en el piso de planta." },

  // ---------------- SECCIÓN 1 ----------------
  { type: "section", num: 1, title: "EL PANORAMA — IT SE ENCUENTRA CON OT", sub: "IT (Tecnología de la Información) se encuentra con OT (Tecnología de Operación): por qué la tecnología de la planta hoy se gobierna, no solo se administra" },

  { type: "callouts", kicker: "// 04  PANORAMA", title: "La producción se volvió digital",
    stats: [ {n:"75 %",label:"de las industrias tienen iniciativas de Industria 4.0 en curso",color:"C6FF00"},{n:"€ millones",label:"costo típico de un día de línea detenida en manufactura",color:"FFB000"},{n:"IT + OT",label:"dos mundos con culturas, ciclos y riesgos opuestos que convergen",color:"27E5E5"} ],
    note: { body: "Sensores, PLC (controlador lógico programable), SCADA (supervisión y control del proceso), MES (sistema de ejecución de manufactura) y ERP (sistema de gestión del negocio) dejaron de ser islas. La planta es hoy un sistema de información con actuadores físicos. Eso genera valor, pero traslada al piso de fábrica riesgos antes exclusivos de la TI (Tecnología de la Información): ciberataques e indisponibilidad." },
    notes: "El mensaje de apertura: la tecnología de producción ya no puede administrarse ad hoc; requiere gobierno explícito porque las decisiones sobre ella afectan seguridad física, continuidad y cumplimiento." },

  { type: "process", kicker: "// 05  PANORAMA", title: "Las cuatro revoluciones industriales", cols: 4, steps: [
      { n:"1.0", title:"Mecanización", desc:"Vapor y agua. Fin del s. XVIII.", color:"8C8C8C" },
      { n:"2.0", title:"Producción en masa", desc:"Electricidad, línea de montaje. ~1870.", color:"FFB000" },
      { n:"3.0", title:"Automatización", desc:"Electrónica, PLC, TI. ~1970.", color:"27E5E5" },
      { n:"4.0", title:"Ciber-físico", desc:"IoT, datos, IA, gemelos. Hoy.", color:"C6FF00" },
    ], notes: "La 4ª revolución no añade una máquina nueva: conecta e informatiza lo que ya existe. Por eso el reto es de integración y de gobierno, no solo de ingeniería." },

  { type: "grid", kicker: "// 06  PANORAMA", title: "IT frente a OT — dos mundos", cols: 2, lead: "Information Technology gestiona información; Operational Technology gobierna procesos físicos. Sus prioridades son casi opuestas.",
    cards: [
      { tag: "IT — INFORMACIÓN", desc: "Prioridad: Confidencialidad. Ciclos de vida de 3–5 años, parcheo frecuente, reinicios aceptables. Datos y transacciones.", color: "C6FF00" },
      { tag: "OT — OPERACIÓN", desc: "Prioridad: Disponibilidad y seguridad física. Ciclos de 15–25 años, no se parchea en caliente, cero paradas. Procesos y personas.", color: "27E5E5" },
      { tag: "CONVERGENCIA", desc: "IIoT (internet industrial de las cosas), MES y analítica obligan a conectar ambos. La superficie de ataque de OT se expande y hereda amenazas de IT.", color: "FFB000" },
      { tag: "EL DILEMA", desc: "Quien gobierna debe conciliar innovación (IT) con continuidad y seguridad (OT): más valor sin comprometer la operación.", color: "FF6B35" },
    ], notes: "La prioridad CIA se invierte: en OT, disponibilidad e integridad van antes que confidencialidad. Se profundiza en la Unidad 4." },

  { type: "grid", kicker: "// 07  PANORAMA", title: "Superficie de ataque de la planta conectada", cols: 3, lead: "Al conectar OT, cada vector de IT se vuelve un riesgo para el proceso físico.",
    cards: [
      { tag: "RED IT/OT", desc: "Puertos, protocolos industriales, Wi-Fi, VPN (red privada virtual), celdas mal segmentadas.", color: "27E5E5" },
      { tag: "DISPOSITIVO", desc: "PLC, RTU (unidad terminal remota), HMI (interfaz hombre-máquina) y sensores sin autenticación ni cifrado.", color: "C6FF00" },
      { tag: "APLICACIÓN", desc: "SCADA, MES, historiadores y APIs (interfaces de programación) de integración.", color: "FFB000" },
      { tag: "HUMANO", desc: "Phishing a ingenieros, credenciales, memorias USB en planta.", color: "FF6B35" },
      { tag: "CADENA SUMINISTRO", desc: "Integradores, firmware, actualizaciones y terceros con acceso remoto.", color: "9D6BFF" },
      { tag: "NUBE / REMOTO", desc: "Telemetría a la nube, acceso remoto de fabricantes, tokens.", color: "FF3B30" },
    ], notes: "Cada vector se retomará: red y segmentación en S14, nube en S09. El principio defensivo es reducir la superficie de ataque." },

  { type: "phase", kicker: "// 08  PANORAMA", title: "Caso de apertura — Norsk Hydro (2019)", badge: "INCIDENTE REAL",
    name: "Cuando un ransomware detiene la producción", what: "El ransomware LockerGoga cifró los sistemas IT de la multinacional del aluminio Norsk Hydro. El impacto no fue solo informático: obligó a operar plantas en modo manual, detuvo líneas y costó del orden de 70 millones de dólares. Un problema que nació en IT tumbó la operación de OT.",
    leftTag: "LECCIÓN DE GOBIERNO", tools: "La segmentación IT/OT es una decisión de gobierno, no solo técnica.", rightTag: "SE PROFUNDIZA EN", seen: "Semanas 14–15 (Ciberseguridad OT)",
    notes: "Norsk Hydro es hoy caso de estudio por su transparencia. Muestra que gobernar la TI protege la continuidad del negocio físico, no solo los datos." },

  { type: "callouts", kicker: "// 09  PANORAMA", title: "Adopción de Industria 4.0 en Colombia",
    stats: [ {n:"PYMES",label:"la mayoría del tejido industrial: recursos y competencias limitadas",color:"FFB000"},{n:"Antioquia",label:"clúster manufacturero fuerte: alimentos, textil, energía, cemento",color:"C6FF00"},{n:"BRECHA",label:"conectividad, talento y ciberseguridad OT son las barreras principales",color:"FF3B30"} ],
    note: { body: "El reto colombiano no es tecnológico de punta, sino de adopción y gobierno: priorizar inversiones limitadas, cerrar la brecha de talento y proteger la operación. Ahí es donde el gobierno de TI aporta valor concreto al ingeniero." },
    notes: "Contextualizar al estudiante en su entorno: el valor del curso está en gobernar la digitalización de la industria regional, no en tecnología aspiracional." },

  { type: "quote", kicker: "// 10  PANORAMA", text: "El gobierno de TI ya no trata de proteger datos: trata de proteger la capacidad de la empresa de producir.", cite: "Idea central del curso",
    notes: "Transición hacia la definición formal de gobierno. Este es el gran giro conceptual del curso." },

  // ---------------- SECCIÓN 2 ----------------
  { type: "section", num: 2, title: "GOBIERNO ≠ GESTIÓN", sub: "EDM (Evaluar, Dirigir, Monitorear) vs PBRM (Planear, Construir, Ejecutar, Monitorear)" },

  { type: "concepts3", kicker: "// 11  GOBIERNO", title: "Tres términos que se confunden", items: [
      { k: "GOBIERNO", desc: "Asegura que se atiendan las necesidades de las partes interesadas; fija dirección por priorización y decisión; monitorea desempeño y cumplimiento.", ex: "Responsabilidad: junta / dirección", color: "C6FF00" },
      { k: "GESTIÓN", desc: "Planifica, construye, ejecuta y supervisa actividades alineadas con la dirección fijada por el gobierno, para lograr los objetivos.", ex: "Responsabilidad: gerencia / CIO (director de sistemas)", color: "27E5E5" },
      { k: "OPERACIÓN", desc: "Ejecuta día a día los procesos y servicios tecnológicos según lo planificado por la gestión.", ex: "Responsabilidad: equipos / planta", color: "FFB000" },
    ], note: "COBIT 2019 (Control Objectives for Information and Related Technologies) separa explícitamente gobierno de gestión: son responsabilidades distintas, con roles distintos. Confundirlas es el error más común del curso.",
    notes: "Analogía: el gobierno es la junta directiva de un barco (¿a qué puerto vamos, qué riesgos aceptamos?); la gestión es el capitán y la tripulación (cómo llegamos)." },

  { type: "grid", kicker: "// 12  GOBIERNO", title: "El modelo EDM — el ciclo de gobierno", cols: 3, lead: "ISO/IEC 38500 (norma de gobierno corporativo de TI) y COBIT describen el gobierno con tres verbos.",
    cards: [
      { tag: "EVALUAR", desc: "Valorar de forma continua las necesidades de las partes interesadas, las condiciones y las opciones para el uso de la tecnología. Mirar el presente y el futuro.", color: "C6FF00" },
      { tag: "DIRIGIR", desc: "Asignar responsabilidad y fijar dirección: aprobar estrategias, políticas y planes; priorizar inversiones. Decidir.", color: "27E5E5" },
      { tag: "MONITOREAR", desc: "Vigilar el desempeño y la conformidad frente a la dirección acordada. Cerrar el ciclo con evidencia.", color: "FFB000" },
    ], notes: "EDM es el corazón del gobierno. En COBIT los 5 objetivos del dominio EDM son responsabilidad de la junta." },

  { type: "compare", kicker: "// 13  GOBIERNO", title: "EDM (gobierno) vs PBRM (gestión)",
    leftTitle: "Gobierno — EDM", leftItems: ["Evaluar opciones y necesidades","Dirigir: fijar dirección y prioridades","Monitorear desempeño y cumplimiento","Horizonte estratégico, junta directiva","Pregunta: ¿estamos haciendo lo correcto?"],
    rightTitle: "Gestión — PBRM", rightItems: ["Planificar (Align, Plan, Organize)","Construir (Build, Acquire, Implement)","Ejecutar (Deliver, Service, Support)","Monitorear la operación (Monitor, Evaluate)","Pregunta: ¿lo estamos haciendo bien?"],
    foot: "El gobierno hace lo correcto; la gestión lo hace correctamente. COBIT lo formaliza en 5 + 35 objetivos.",
    notes: "PBRM son los cuatro dominios de gestión de COBIT: APO, BAI, DSS, MEA. EDM es el dominio de gobierno. Se ve en detalle en S03." },

  { type: "matrix", kicker: "// 14  GOBIERNO", title: "Ejercicio en clase — ¿gobierno o gestión?", firstW: 6.2,
    cols: ["Decisión / actividad", "¿Gobierno o gestión?"],
    rows: [
      ["Aprobar el presupuesto anual de digitalización", {t:"GOBIERNO",color:"C6FF00"}],
      ["Configurar el servidor OPC UA de la línea 3", {t:"GESTIÓN",color:"27E5E5"}],
      ["Definir el apetito de riesgo cibernético de la planta", {t:"GOBIERNO",color:"C6FF00"}],
      ["Resolver un incidente en el HMI de empaque", {t:"GESTIÓN",color:"27E5E5"}],
      ["Fijar la política de acceso remoto de proveedores", {t:"GOBIERNO",color:"C6FF00"}],
      ["Instalar el parche mensual del historiador", {t:"GESTIÓN",color:"27E5E5"}],
    ], notes: "Pedir a los estudiantes que clasifiquen antes de revelar. Regla: si fija dirección/prioridad/riesgo = gobierno; si ejecuta = gestión." },

  { type: "grid", kicker: "// 15  GOBIERNO", title: "Síntomas de un gobierno de TI débil", cols: 3, lead: "Cuando nadie gobierna la tecnología, aparecen patrones reconocibles.",
    cards: [
      { tag: "SHADOW IT/OT", desc: "Cada área compra e instala tecnología sin coordinación ni control.", color: "FF3B30" },
      { tag: "PROYECTOS SIN VALOR", desc: "Inversiones que no se miden ni se alinean con el negocio.", color: "FF6B35" },
      { tag: "RIESGO INVISIBLE", desc: "Nadie es dueño del riesgo IT/OT hasta que ocurre el incidente.", color: "FFB000" },
      { tag: "ISLAS DE DATOS", desc: "Sistemas que no se hablan; el dato se reescribe a mano.", color: "9D6BFF" },
      { tag: "DEPENDENCIA", desc: "Cautividad de un proveedor por decisiones no gobernadas.", color: "27E5E5" },
      { tag: "INCUMPLIMIENTO", desc: "Sorpresas regulatorias y de auditoría por falta de control.", color: "C6FF00" },
    ], notes: "Estos síntomas son el 'dolor' que el gobierno resuelve. El diagnóstico del proyecto los buscará en la empresa elegida." },

  { type: "keypoints", kicker: "// 16  GOBIERNO", title: "Los cinco focos del gobierno de TI", items: [
      { label: "Alineamiento", desc: "La tecnología sirve a los objetivos del negocio, no al revés." },
      { label: "Valor", desc: "Se prioriza y mide el retorno de la inversión tecnológica." },
      { label: "Riesgo", desc: "El riesgo tecnológico se identifica, se acepta o se mitiga conscientemente." },
      { label: "Recursos", desc: "Personas, datos e infraestructura se asignan según prioridad." },
      { label: "Cumplimiento", desc: "Se responde ante la ley, los reguladores y los interesados." },
    ], notes: "Los cinco focos clásicos (De Haes & Van Grembergen). Volverán con COBIT como áreas de enfoque." },

  { type: "callouts", sec: "GOBIERNO", title: "Lo que rinde un buen gobierno de TI",
    stats: [ {n:"+20 %",label:"mayor retorno de los activos de TI en empresas con gobierno maduro (Weill & Ross)",color:"C6FF00"},{n:"MENOS",label:"proyectos fallidos y sobrecostos; decisiones trazables y priorizadas",color:"22E06B"},{n:"MÁS",label:"resiliencia ante incidentes y auditorías; riesgo gestionado, no sufrido",color:"27E5E5"} ],
    note: { body: "El gobierno no es burocracia: la evidencia empírica asocia el buen gobierno de TI con mejor desempeño financiero. En un CPPS, ese desempeño se traduce en disponibilidad de la línea, calidad del producto y seguridad de las personas." },
    notes: "Contrarrestar la idea de que gobernar 'frena'. Bien hecho, acelera decisiones correctas y evita retrabajo." },

  // ---------------- SECCIÓN 3 ----------------
  { type: "section", num: 3, title: "¿QUIÉN DECIDE SOBRE LA TECNOLOGÍA?", sub: "Derechos de decisión, arquetipos, mecanismos y partes interesadas" },

  { type: "callouts", kicker: "// 17  DECISIÓN", title: "El gobierno responde dos preguntas",
    stats: [ {n:"¿QUÉ\ndecisiones?",label:"Principios, arquitectura, infraestructura, aplicaciones, inversión",color:"C6FF00"},{n:"¿QUIÉN\ndecide?",label:"El derecho de decisión: quién tiene la autoridad y quién aporta insumo",color:"27E5E5"} ],
    note: { body: "Weill & Ross (MIT): gobernar TI es definir el marco de derechos de decisión y responsabilidades para incentivar comportamientos deseables en el uso de la tecnología. No es un organigrama; es un mapa de quién decide qué." },
    notes: "Distinguir 'decisión' de 'insumo': muchos aportan información, pocos deciden. El gobierno hace explícito ese reparto." },

  { type: "grid", kicker: "// 18  DECISIÓN", title: "Los cinco dominios de decisión de TI", cols: 3, lead: "Weill & Ross: cinco decisiones clave que todo gobierno de TI debe repartir.",
    cards: [
      { tag: "PRINCIPIOS DE TI", desc: "Rol de la tecnología en el negocio; declaraciones de alto nivel.", color: "C6FF00" },
      { tag: "ARQUITECTURA", desc: "Lógica de integración y estandarización de datos y procesos.", color: "27E5E5" },
      { tag: "INFRAESTRUCTURA", desc: "Servicios compartidos que habilitan las capacidades del negocio.", color: "FFB000" },
      { tag: "NECESIDADES DE APPS", desc: "Requisitos de las aplicaciones de negocio (comprar vs construir).", color: "22E06B" },
      { tag: "INVERSIÓN Y PRIORIDAD", desc: "Cuánto y en qué se invierte; cómo se prioriza y justifica.", color: "FF6B35" },
      { tag: "EN CPPS", desc: "Añádanse decisiones OT: qué se envía a la nube, quién accede en remoto.", color: "9D6BFF" },
    ], notes: "En un CPPS los cinco dominios se amplían con decisiones OT específicas. El proyecto las mapeará." },

  { type: "grid", kicker: "// 19  DECISIÓN", title: "Los cinco arquetipos de Weill & Ross", cols: 3, lead: "Patrones de quién tiene el derecho de decisión sobre la TI.",
    cards: [
      { tag: "MONARQUÍA DE NEGOCIO", desc: "Altos ejecutivos del negocio deciden. Buena alineación, riesgo de ignorar lo técnico.", color: "C6FF00" },
      { tag: "MONARQUÍA DE TI", desc: "Profesionales de TI deciden. Coherencia técnica, riesgo de desconexión con el negocio.", color: "27E5E5" },
      { tag: "FEUDAL", desc: "Cada unidad/planta decide por su cuenta. Autonomía local, islas y duplicación.", color: "FF6B35" },
      { tag: "FEDERAL", desc: "Decisión compartida centro-unidades. Equilibrio, pero lenta y negociada.", color: "FFB000" },
      { tag: "DUOPOLIO DE TI", desc: "TI y un grupo de negocio deciden juntos. Buen balance realismo/coherencia.", color: "22E06B" },
      { tag: "ANARQUÍA", desc: "Cada individuo o grupo decide aislado. Máxima flexibilidad, caos y riesgo.", color: "9D6BFF" },
    ], notes: "No hay arquetipo 'correcto': depende de la estrategia. Los mejores suelen combinar duopolio para inversión y monarquía de TI para arquitectura." },

  { type: "matrix", kicker: "// 20  DECISIÓN", title: "Matriz de gobierno — dominios × arquetipo", firstW: 4.6,
    cols: ["Dominio de decisión", "Decide", "Aporta insumo"],
    rows: [
      ["Principios de TI", {t:"Duopolio",color:"C6FF00"}, "Todos"],
      ["Arquitectura de TI", {t:"Monarquía TI",color:"27E5E5"}, "Negocio"],
      ["Infraestructura", {t:"Monarquía TI",color:"27E5E5"}, "Federal"],
      ["Necesidades de apps", {t:"Federal",color:"FFB000"}, "Unidades"],
      ["Inversión y prioridad", {t:"Monarquía negocio",color:"22E06B"}, "TI + unidades"],
    ], notes: "Esta es la 'matriz de gobierno' de Weill & Ross: para cada decisión, un patrón distinto. El proyecto construirá una versión para su empresa." },

  { type: "concepts3", kicker: "// 21  DECISIÓN", title: "Mecanismos de gobierno", items: [
      { k: "ESTRUCTURAS", desc: "Órganos y roles: comité de TI, comité de arquitectura, CIO, CISO (director de seguridad de la información), dueños de proceso.", ex: "Ej: Comité de digitalización", color: "C6FF00" },
      { k: "PROCESOS", desc: "Rutinas de decisión: priorización de portafolio, gestión de riesgo, aprobación de cambios.", ex: "Ej: Stage-gate de proyectos", color: "27E5E5" },
      { k: "RELACIONALES", desc: "Cultura y colaboración: comunicación, lenguaje común IT/OT, incentivos alineados.", ex: "Ej: talleres IT-planta", color: "FFB000" },
    ], note: "De Haes & Van Grembergen: el gobierno se implanta con una mezcla de estructuras, procesos y mecanismos relacionales — no basta un organigrama.",
    notes: "El fallo típico: crear estructuras sin procesos ni cultura. Los tres tipos deben coexistir." },

  { type: "grid", kicker: "// 22  DECISIÓN", title: "Partes interesadas de la TI en planta", cols: 3, lead: "El gobierno atiende necesidades de múltiples interesados con intereses en tensión.",
    cards: [
      { tag: "JUNTA / DIRECCIÓN", desc: "Valor, riesgo aceptable y cumplimiento. Responden ante accionistas.", color: "C6FF00" },
      { tag: "CIO / CTO", desc: "CTO (director de tecnología). Estrategia tecnológica, arquitectura, portafolio de inversión.", color: "27E5E5" },
      { tag: "GERENTE DE PLANTA", desc: "Continuidad, productividad (OEE, eficiencia global del equipo), seguridad de personas.", color: "FFB000" },
      { tag: "DUEÑO DE PROCESO", desc: "Que la tecnología habilite el proceso productivo real.", color: "22E06B" },
      { tag: "CISO / RIESGO", desc: "Ciberseguridad IT/OT, continuidad, cumplimiento normativo.", color: "FF3B30" },
      { tag: "OPERARIO / SINDICATO", desc: "Ergonomía, empleo, competencias, confianza en la automatización.", color: "9D6BFF" },
    ], notes: "La 'cascada de objetivos' de COBIT (S03) parte de las necesidades de estas partes interesadas." },

  { type: "matrix", sec: "DECISIÓN", title: "RACI — quién responde por cada decisión", sub: "RACI = Responsible, Accountable, Consulted, Informed (Responsable, Aprobador, Consultado, Informado).", firstW: 5.0,
    cols: ["Decisión de TI/OT", "R/A", "C", "I"],
    rows: [
      ["Estrategia de digitalización", {t:"Dirección",color:"C6FF00"}, "CIO", "Planta"],
      ["Arquitectura IT/OT", {t:"CIO/CTO",color:"27E5E5"}, "CISO", "Negocio"],
      ["Riesgo cibernético OT", {t:"CISO",color:"FF3B30"}, "Planta", "Junta"],
      ["Prioridad de inversión", {t:"Comité TI",color:"FFB000"}, "Finanzas", "Todos"],
    ], notes: "RACI (Responsible, Accountable, Consulted, Informed) operacionaliza los derechos de decisión. Cada decisión tiene un único 'Accountable'." },

  // ---------------- SECCIÓN 4 ----------------
  { type: "section", num: 4, title: "MARCOS DE GOBIERNO Y GESTIÓN", sub: "ISO/IEC 38500 · COBIT 2019 · ITIL 4 · dónde encaja cada uno" },

  { type: "grid", kicker: "// 23  MARCOS", title: "El mapa de estándares", cols: 3, lead: "Cada marco resuelve una capa distinta. No compiten: se complementan.",
    cards: [
      { tag: "ISO/IEC 38500", desc: "Gobierno corporativo de TI. Seis principios y modelo EDM. El 'qué' y el 'por qué' a nivel dirección.", color: "C6FF00" },
      { tag: "COBIT 2019", desc: "Gobierno y gestión de I&T (información y tecnología). 40 objetivos, factores de diseño, madurez. El 'qué gobernar'.", color: "27E5E5" },
      { tag: "ITIL 4", desc: "Information Technology Infrastructure Library. Gestión de servicios de TI. El 'cómo operar' los servicios.", color: "FFB000" },
      { tag: "ISO/IEC 27001", desc: "Sistema de Gestión de Seguridad de la Información (SGSI). El 'cómo proteger'.", color: "FF3B30" },
      { tag: "ISA-95 / IEC 62443", desc: "ISA-95 (integración empresa-control) e IEC 62443 (ciberseguridad industrial): el 'cómo' del piso de planta.", color: "22E06B" },
      { tag: "TOGAF", desc: "The Open Group Architecture Framework: arquitectura empresarial que alinea negocio, datos, apps y tecnología.", color: "9D6BFF" },
    ], notes: "Fijar la idea de capas: 38500 gobierna, COBIT organiza gobierno+gestión, ITIL opera servicios, 27001 asegura, ISA-95/62443 aterrizan en OT." },

  { type: "process", kicker: "// 24  MARCOS", title: "Breve historia de COBIT", cols: 3, steps: [
      { n:"'96", title:"COBIT 1–3", desc:"Origen en auditoría y control de TI.", color:"8C8C8C" },
      { n:"2005", title:"COBIT 4.x", desc:"Enfoque de procesos y gobierno.", color:"FFB000" },
      { n:"2012", title:"COBIT 5", desc:"Gobierno vs gestión; principios.", color:"27E5E5" },
      { n:"2018", title:"COBIT 2019", desc:"Factores de diseño; sistema a medida.", color:"C6FF00" },
      { n:"—", title:"ISACA", desc:"Cuerpo que mantiene el marco.", color:"9D6BFF" },
      { n:"→", title:"Hoy", desc:"Alineado con NIST, ITIL, ISO.", color:"22E06B" },
    ], notes: "COBIT evolucionó de auditoría a gobierno integral. La versión 2019 introdujo el diseño a medida, clave para CPPS." },

  { type: "phase", kicker: "// 25  MARCOS", title: "ISO/IEC 38500 — vista rápida", badge: "NORMA DE GOBIERNO",
    name: "Gobierno corporativo de la TI", what: "Norma internacional que orienta a los órganos de dirección sobre el uso eficaz, eficiente y aceptable de la TI. Define seis principios y aplica el ciclo EDM. Es breve, de alto nivel y no prescriptiva: dice qué asegurar, no cómo.",
    leftTag: "APORTA", tools: "6 principios + modelo EDM", rightTag: "SE VE EN", seen: "Semana 2 (S02, completa)",
    notes: "Los seis principios (responsabilidad, estrategia, adquisición, desempeño, conformidad, comportamiento humano) se desarrollan en S02." },

  { type: "phase", kicker: "// 26  MARCOS", title: "COBIT 2019 — vista rápida", badge: "GOBIERNO Y GESTIÓN DE I&T",
    name: "Governance & management of I&T", what: "De ISACA. Provee un sistema de gobierno a medida: 40 objetivos de gobierno (dominio EDM) y de gestión —APO (Alinear, Planear, Organizar), BAI (Construir, Adquirir, Implementar), DSS (Entregar, dar Servicio, Soportar) y MEA (Monitorear, Evaluar, Valorar)—, 7 componentes, 11 factores de diseño y niveles de capacidad/madurez.",
    leftTag: "APORTA", tools: "Cascada · 40 objetivos · factores de diseño", rightTag: "SE VE EN", seen: "Semanas 3–4 (S03–S04)",
    notes: "COBIT es el marco central para diseñar el sistema de gobierno del proyecto. Dos sesiones completas." },

  { type: "phase", kicker: "// 27  MARCOS", title: "ITIL 4 — vista rápida", badge: "GESTIÓN DE SERVICIOS",
    name: "Sistema de valor del servicio", what: "De AXELOS. Enfoca la TI como servicios que co-crean valor. Introduce el Service Value System (SVS), la cadena de valor del servicio, 34 prácticas y 7 principios guía. Complementa a COBIT en la capa operativa: cómo entregar y mejorar servicios.",
    leftTag: "APORTA", tools: "SVS · cadena de valor · 7 principios", rightTag: "SE VE EN", seen: "Semana 5 (S05)",
    notes: "COBIT gobierna, ITIL operacionaliza el servicio. En planta: gestión de incidentes de SCADA, cambios en el MES." },

  { type: "twocol", kicker: "// 28  MARCOS", title: "Gobierno de TI vs gobierno de datos",
    leftTitle: "Gobierno de TI", leftItems: ["Decisiones sobre la tecnología y su inversión","Alineación TI–negocio","Riesgo tecnológico y cumplimiento","Marcos: 38500, COBIT, ITIL","Rol: comité de TI, CIO"],
    rightTitle: "Gobierno de datos", rightItems: ["Decisiones sobre el dato como activo","Calidad, linaje, propiedad y acceso","Privacidad y clasificación","Marcos: DAMA-DMBOK (cuerpo de conocimiento de gestión de datos), DCAM (modelo de madurez de datos)","Rol: data steward, CDO (director de datos)"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    notes: "Distintos pero se solapan. En CPPS el dato de planta (señales, OEE) exige gobierno de datos específico; se trata en S13." },

  { type: "twocol", sec: "MARCOS", title: "Cómo se integran los marcos en la práctica",
    leftTitle: "Se apoyan entre sí", leftItems: ["38500 fija principios; COBIT los implementa","COBIT referencia a ITIL, ISO 27001 y NIST (National Institute of Standards and Technology, EE. UU.)","ITIL 4 opera los servicios que COBIT gobierna","27001/62443 aportan los controles de seguridad","ISA-95 estructura el dato que se gobierna"],
    rightTitle: "Evitar el error común", rightItems: ["No 'elegir uno y descartar el resto'","No implementar COBIT como checklist ciego","No copiar el modelo de otra empresa","No separar gobierno de TI del de OT","No confundir certificación con madurez real"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "Mensaje: los marcos son un ecosistema. COBIT actúa de 'paraguas' que referencia a los demás. El diseño a medida (S04) decide cuánto de cada uno." },

  // ---------------- SECCIÓN 5 ----------------
  { type: "section", num: 5, title: "SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN", sub: "Qué son, por qué existen y por qué son un problema de gobierno" },

  { type: "concepts3", kicker: "// 29  CPPS", title: "De la máquina al sistema ciber-físico", items: [
      { k: "SISTEMA FÍSICO", desc: "Máquinas, sensores y actuadores que transforman materia y energía en el mundo real.", ex: "Motor, horno, robot", color: "FFB000" },
      { k: "SISTEMA CIBER-FÍSICO", desc: "Integración profunda de cómputo, red y proceso físico: el software monitorea y controla lo físico en lazo cerrado (CPS, Cyber-Physical System).", ex: "Línea con control adaptativo", color: "27E5E5" },
      { k: "CPPS", desc: "Cyber-Physical Production System: CPS aplicados a producción, colaborando en red y a través del ciclo de vida.", ex: "Fábrica inteligente", color: "C6FF00" },
    ], note: "Definición de Monostori (2014): los CPPS constan de subsistemas autónomos y cooperativos conectados en todos los niveles, desde procesos hasta redes logísticas.",
    notes: "El término CPS lo acuñó Helen Gill (NSF, ~2006). La clave: cómputo + físico en lazo cerrado, no solo 'máquina con sensor'." },

  { type: "compare", kicker: "// 30  CPPS", title: "CPS frente a automatización clásica e IoT",
    leftTitle: "CPPS", leftItems: ["Lazo cerrado cómputo–físico","Colabora en red y con humanos","Consciente del contexto y del ciclo de vida","Se reconfigura y aprende","Gemelo digital como núcleo"],
    rightTitle: "Automatización / IoT clásico", rightItems: ["Control fijo y aislado (PLC/SCADA)","IoT (internet de las cosas) de consumo: solo telemetría","Sin modelo del proceso","Reglas rígidas preprogramadas","Sin réplica virtual sincronizada"],
    leftColor: "C6FF00", rightColor: "8C8C8C",
    foot: "Un CPPS no es 'una máquina con internet': es un sistema que piensa sobre su propio proceso físico.",
    notes: "Aclarar la confusión frecuente CPPS vs IoT. El diferenciador es el lazo cerrado y el modelo (gemelo) del proceso." },

  { type: "grid", kicker: "// 31  CPPS", title: "La arquitectura 5C", cols: 3, lead: "5C = Connection, Conversion, Cyber, Cognition, Configuration (Lee, Bagheri & Kao, 2015): cinco niveles para construir un CPPS.",
    cards: [
      { tag: "1 · CONNECTION", desc: "Conexión inteligente: adquirir datos fiables de máquinas y sensores.", color: "27E5E5" },
      { tag: "2 · CONVERSION", desc: "Conversión de datos a información: características, indicadores de salud.", color: "22E06B" },
      { tag: "3 · CYBER", desc: "Nivel cibernético: gemelo digital, memoria y comparación de flota.", color: "C6FF00" },
      { tag: "4 · COGNITION", desc: "Cognición: diagnóstico, priorización y soporte a la decisión humana.", color: "FFB000" },
      { tag: "5 · CONFIGURATION", desc: "Reconfiguración: la máquina se auto-ajusta y se vuelve resiliente.", color: "FF6B35" },
      { tag: "GOBIERNO 5C", desc: "Cada nivel implica decisiones: qué conectar, dónde procesar, quién actúa.", color: "9D6BFF" },
    ], notes: "La 5C es el 'cómo se construye' un CPPS. Se retoma en S06. Cada nivel es también una decisión de gobierno." },

  { type: "phase", kicker: "// 32  CPPS", title: "Ejemplo — lazo cerrado en una prensa", badge: "CASO CONCRETO",
    name: "Del sensor a la decisión autónoma", what: "Sensores de vibración y temperatura de una prensa envían datos vía OPC UA a un servicio de borde. Un modelo compara la firma actual contra el gemelo digital (nivel Cyber). Si detecta desgaste, prioriza el aviso (Cognition) y ajusta parámetros o agenda mantenimiento (Configuration). El humano decide sobre paradas mayores.",
    leftTag: "PROTOCOLOS / DATOS", tools: "OPC UA · borde · gemelo digital", rightTag: "DECISIONES DE GOBIERNO", seen: "¿Quién autoriza el auto-ajuste?",
    notes: "El ejemplo aterriza la 5C. La pregunta de gobierno: ¿hasta dónde puede actuar el sistema solo, y quién responde si se equivoca?" },

  { type: "keypoints", kicker: "// 33  CPPS", title: "Por qué un CPPS es un problema de gobierno", items: [
      { label: "Seguridad física", desc: "Un fallo o ataque de software puede dañar equipos y personas." },
      { label: "Continuidad", desc: "La disponibilidad del sistema es la disponibilidad de la producción." },
      { label: "Datos críticos", desc: "La integridad de las señales decide calidad, trazabilidad y cumplimiento." },
      { label: "Inversión", desc: "Digitalizar cuesta; alguien debe priorizar y medir el valor." },
      { label: "Convergencia IT/OT", desc: "Sin dueño natural: exige un marco de decisión explícito." },
    ], notes: "El puente conceptual del curso: la tecnología ciber-física no puede quedar sin gobierno porque sus fallos tienen consecuencias físicas, económicas y legales." },

  { type: "grid", kicker: "// 34  CPPS", title: "Tecnologías habilitadoras de Industria 4.0", cols: 3, lead: "El CPPS se apoya en tecnologías que el gobierno debe priorizar y asegurar.",
    cards: [
      { tag: "IIoT", desc: "Internet Industrial de las Cosas: sensórica y conectividad en planta.", color: "27E5E5" },
      { tag: "EDGE / NUBE", desc: "Cómputo en el borde y en la nube; dónde vive el dato y el modelo.", color: "C6FF00" },
      { tag: "GEMELO DIGITAL", desc: "Réplica virtual sincronizada del activo o proceso físico.", color: "FFB000" },
      { tag: "IA / ANALÍTICA", desc: "IA (inteligencia artificial): mantenimiento predictivo, optimización, detección de anomalías.", color: "22E06B" },
      { tag: "OPC UA / MQTT", desc: "OPC UA (Open Platform Communications) y MQTT (protocolo de telemetría): interoperabilidad IT/OT que unifica el dato.", color: "9D6BFF" },
      { tag: "CIBERSEGURIDAD OT", desc: "IEC 62443 y defensa en profundidad para el piso de planta.", color: "FF3B30" },
    ], notes: "Cada tarjeta corresponde a una o varias sesiones. Es el 'índice tecnológico' del curso." },

  { type: "process", kicker: "// 35  CPPS", title: "Mapa del curso — 4 unidades, 16 semanas", cols: 4, steps: [
      { n:"U1", title:"Gobierno de TI", desc:"S01–05 · 38500, COBIT, ITIL", color:"C6FF00" },
      { n:"U2", title:"CPPS", desc:"S06–09 · I4.0, ISA-95, RAMI, IIoT", color:"27E5E5" },
      { n:"U3", title:"Integración IT/OT", desc:"S10–13 · OPC UA, MQTT, gemelos, datos", color:"FFB000" },
      { n:"U4", title:"Riesgo ciber-físico", desc:"S14–16 · 62443, NIST, caso de negocio", color:"FF3B30" },
    ], notes: "Panorámica de las 16 semanas. La progresión va de gobernar (U1) a integrar (U3) y proteger (U4)." },

  // ---------------- SECCIÓN 6 ----------------
  { type: "section", num: 6, title: "CIERRE", sub: "Proyecto, taller, síntesis, glosario y referencias" },

  { type: "phase", kicker: "// 36  CIERRE", title: "El proyecto integrador del curso", badge: "EVALUACIÓN · 25 %",
    name: "Gobierno de un CPPS real", what: "En equipos de 3–4, se elige una organización manufacturera y se desarrolla de forma acumulativa: diagnóstico de gobierno (COBIT), arquitectura ciber-física (ISA-95 y RAMI 4.0, el modelo de arquitectura de referencia de Industria 4.0), integración de datos, evaluación de riesgo IT/OT y caso de negocio. Los entregables 1 y 2 se integran en el documento final.",
    leftTag: "ENTREGABLES", tools: "E1 (sem 5) · E2 (sem 13) · Final (sem 15–16)", rightTag: "SUSTENTACIÓN", seen: "Semana 16 — ejecutiva + técnica",
    notes: "La selección de la empresa y la conformación de equipos son tarea de esta semana." },

  { type: "phase", kicker: "// 37  CIERRE", title: "Taller de la sesión", badge: "SEGUIMIENTO",
    name: "Afianzamiento y arranque del proyecto", what: "1) Con tus palabras, distingue gobierno de gestión de TI con un ejemplo de planta. 2) Elige una empresa manufacturera y describe su proceso en media página. 3) Esboza su matriz de derechos de decisión (5 dominios). 4) Argumenta por qué su operación es un CPPS. Se revisa al inicio de S02.",
    leftTag: "MODALIDAD", tools: "Equipos 3–4 · documento breve", rightTag: "PREPARA", seen: "S02 — ISO/IEC 38500",
    notes: "El taller consolida la teoría y arranca el proyecto. Guía detallada en el PDF de ejercicios de la sesión." },

  { type: "warning", sec: "CIERRE", title: "La responsabilidad del ingeniero de gobierno",
    paras: [
      "En un CPPS, una decisión mal gobernada no solo pierde dinero: puede detener una línea, dañar un equipo o poner en riesgo a un operario.",
      "Gobernar la tecnología de producción es, ante todo, una responsabilidad ética y profesional: decidir con evidencia, hacer explícito el riesgo y responder por las decisiones.",
    ],
    quote: "Con más automatización, más responsabilidad sobre quién decide y quién responde.",
    notes: "Momento reflexivo. Conecta el gobierno con la ética profesional del ingeniero: las decisiones tienen consecuencias físicas." },

  { type: "keypoints", kicker: "// 38  CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Gobierno ≠ gestión", desc: "EDM (hacer lo correcto) vs PBRM (hacerlo bien)." },
      { label: "IT ≠ OT", desc: "La prioridad CIA (Confidencialidad, Integridad, Disponibilidad) se invierte; la convergencia crea el reto." },
      { label: "Derechos de decisión", desc: "Gobernar es definir quién decide qué (Weill & Ross)." },
      { label: "Marcos complementarios", desc: "38500 gobierna, COBIT organiza, ITIL opera." },
      { label: "CPPS = gobierno", desc: "Un fallo de software con consecuencias físicas exige gobierno." },
    ], notes: "Verificar comprensión con preguntas rápidas sobre cada punto antes de cerrar." },

  { type: "glossary", kicker: "// 39  CIERRE", title: "Glosario esencial", pairs: [
      { t: "Gobierno de TI", d: "Marco de derechos de decisión y responsabilidades sobre la tecnología." },
      { t: "EDM", d: "Evaluar, Dirigir, Monitorear — el ciclo de gobierno." },
      { t: "IT / OT", d: "Tecnología de la información / de la operación." },
      { t: "CPS / CPPS", d: "Sistema ciber-físico / de producción." },
      { t: "COBIT", d: "Marco de gobierno y gestión de I&T (ISACA)." },
      { t: "ISO/IEC 38500", d: "Norma de gobierno corporativo de la TI." },
      { t: "Arquetipo de gobierno", d: "Patrón de quién tiene el derecho de decisión." },
      { t: "OEE", d: "Overall Equipment Effectiveness (se ve en S13)." },
    ], notes: "Vocabulario base; se amplía en cada sesión." },

  { type: "refs", kicker: "// 40  CIERRE", title: "Referencias y recursos", items: [
      { t: "ISO/IEC 38500 — gobierno corporativo de TI (norma)", url: "https://www.iso.org/standard/62816.html", acc: "pago" },
      { t: "ISACA — COBIT 2019 (Introduction & Methodology: gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "Weill & Ross — IT Governance (investigación abierta, MIT CISR)", url: "https://cisr.mit.edu/", acc: "libre" },
      { t: "Monostori (2014) — Cyber-physical production systems (Procedia CIRP)", url: "https://doi.org/10.1016/j.procir.2014.03.115", acc: "libre" },
      { t: "Lee, Bagheri & Kao (2015) — Arquitectura 5C (Manufacturing Letters)", url: "https://doi.org/10.1016/j.mfglet.2014.12.001", acc: "libre" },
      { t: "Acatech (2013) — Recomendaciones Industrie 4.0", url: "https://www.acatech.de/", acc: "libre" },
      { t: "AXELOS — ITIL 4 Foundation", url: "https://www.axelos.com/", acc: "pago" },
    ], notes: "Bibliografía base de la Unidad 1 más las fuentes fundacionales de CPPS." },

  { type: "closing", nextNum: 2, nextTitle: "ISO/IEC 38500 — PRINCIPIOS DE GOBIERNO", nextDesc: "Los seis principios del gobierno corporativo de TI y su aplicación a un caso industrial.", prompt: "root@planta:~# next --session 02 _",
    notes: "Recordar: traer elegida la empresa del proyecto y el equipo conformado. Cerrar reforzando gobierno ≠ gestión." },
];
