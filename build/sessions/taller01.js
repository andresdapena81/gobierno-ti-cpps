// TALLER S01 — Construye tu empresa (base del proyecto integrador)
module.exports = [
  { type: "cover", title: "CONSTRUYE TU\nEMPRESA", subtitle: "Define el alcance de tu empresa ficticia y sienta la base del proyecto integrador",
    notes: "Taller práctico de la Sesión 1. El objetivo no es 'inventar una empresa bonita', sino ACOTAR bien un alcance con el que se pueda trabajar todo el semestre. Se apoya en un ejemplo trabajado." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "El proyecto integrador", desc: "Qué construiremos durante todo el semestre" },
    { title: "Acotar el alcance", desc: "El arte de decir qué SÍ y qué NO entra" },
    { title: "Anatomía de la empresa", desc: "Los campos que hay que definir" },
    { title: "Ejemplo trabajado", desc: "Lácteos La Pradera, una empresa bien acotada" },
    { title: "Ahora ustedes", desc: "Plantilla, pasos y errores a evitar" },
    { title: "Entregable y cierre", desc: "Qué entregar y cómo se evalúa" },
  ], notes: "El corazón del taller es la sección del ejemplo: verán una empresa ficticia con un alcance tan acotado que cabe en una frase." },

  { type: "objectives", sec: "META", title: "Al final de este taller podrás…", items: [
    { lead: "Elegir", rest: "una empresa manufacturera ficticia (o real) con un dolor de negocio claro." },
    { lead: "Acotar", rest: "el alcance a un proceso o línea específica: qué entra y qué NO." },
    { lead: "Definir", rest: "la ficha de la empresa: identidad, proceso, activos, IT/OT y partes interesadas." },
    { lead: "Argumentar", rest: "por qué esa operación es un sistema ciber-físico de producción (CPPS)." },
    { lead: "Entregar", rest: "la base del proyecto integrador que crecerá durante 16 semanas." },
  ], notes: "Objetivos concretos y verificables. El más importante y el más difícil es ACOTAR." },

  // ============ SECCIÓN 1: EL PROYECTO ============
  { type: "section", num: 1, title: "EL PROYECTO INTEGRADOR", sub: "Una empresa, todo el semestre" },

  { type: "callouts", sec: "PROYECTO", title: "Qué es el proyecto integrador",
    stats: [ {n:"25 %",label:"de la nota final: el proyecto es la columna vertebral del curso",color:"C6FF00"},{n:"1",label:"empresa: la misma se desarrolla desde la semana 1 hasta la sustentación",color:"27E5E5"},{n:"3",label:"grandes entregas acumulativas: E1 (sem 5), E2 (sem 13) y documento final",color:"FFB000"} ],
    note: { body: "En equipos de 3–4, eligen UNA organización manufacturera y la desarrollan de forma acumulativa: cada sesión añade una capa (gobierno, arquitectura, integración, seguridad, caso de negocio). No es un trabajo desechable por corte: es un solo proyecto que crece." },
    notes: "Recalcar: es UNA empresa para todo el semestre. Elegir mal o acotar mal se paga durante 16 semanas." },

  { type: "process", sec: "PROYECTO", title: "Cómo crece tu empresa, sesión a sesión", cols: 4, steps: [
      { n:"HOY", title:"La empresa", desc:"Identidad, alcance y proceso foco.", color:"C6FF00" },
      { n:"U1", title:"Gobierno", desc:"Cascada, diseño a medida → E1.", color:"27E5E5" },
      { n:"U2–3", title:"Arquitectura", desc:"ISA-95, IIoT, datos → E2.", color:"FFB000" },
      { n:"U4", title:"Riesgo + caso", desc:"Seguridad y negocio → Final.", color:"FF3B30" },
    ], notes: "Hoy plantamos la semilla. Todo lo demás se construye ENCIMA de la empresa que definan hoy. Por eso importa acotar bien." },

  { type: "grid", sec: "PROYECTO", title: "Por qué trabajamos sobre una empresa", cols: 2, lead: "El proyecto no es un ejercicio abstracto: es un caso que se sostiene todo el curso.",
    cards: [
      { tag: "APRENDER HACIENDO", desc: "Los marcos (COBIT, ISA-95, IEC 62443) se entienden aplicándolos a algo concreto, no memorizándolos.", color: "C6FF00" },
      { tag: "COHERENCIA", desc: "Una sola empresa obliga a que gobierno, arquitectura y seguridad encajen entre sí.", color: "27E5E5" },
      { tag: "PROGRESIÓN", desc: "Cada entrega reutiliza la anterior: no se empieza de cero cada corte.", color: "FFB000" },
      { tag: "SUSTENTACIÓN", desc: "Al final defienden una propuesta completa y creíble ante 'la junta directiva'.", color: "22E06B" },
    ], note: "La empresa es el hilo conductor. Una empresa bien elegida y bien acotada hace fácil todo el semestre; una mal acotada lo hace cuesta arriba.",
    notes: "Motivar: la decisión de hoy determina qué tan fluido será el resto del curso." },

  { type: "phase", sec: "PROYECTO", title: "La regla de oro", badge: "PRINCIPIO",
    name: "Una empresa, un proceso, todo el semestre", what: "No van a gobernar 'toda una multinacional'. Van a elegir una empresa manufacturera y a enfocarse en UN proceso o línea de producción. Esa línea será su sistema ciber-físico de estudio. Todo lo que hagan —gobernar, arquitecturar, integrar, proteger, justificar— gira alrededor de ese foco acotado.",
    leftTag: "SÍ", tools: "Una línea / un proceso, con detalle y profundidad", rightTag: "NO", seen: "Toda la empresa, en superficie y sin foco",
    notes: "Este es el mensaje central del taller. Profundidad sobre una línea, no amplitud sobre todo. Repetirlo." },

  { type: "keypoints", sec: "PROYECTO", title: "Qué NO es este ejercicio", items: [
      { label: "No es marketing", desc: "No buscamos una empresa 'impresionante', sino una con un dolor real y datos verosímiles." },
      { label: "No es ficción libre", desc: "Puede ser ficticia, pero todo debe ser técnicamente creíble y coherente." },
      { label: "No es toda la empresa", desc: "Es UN proceso o línea; el resto es solo contexto." },
      { label: "No es definitivo hoy", desc: "Se puede ajustar, pero cuanto mejor quede hoy, menos retrabajo después." },
    ], notes: "Aclarar expectativas antes de que elijan. El error típico: elegir una empresa gigante y genérica sin foco." },

  // ============ SECCIÓN 2: ACOTAR EL ALCANCE ============
  { type: "section", num: 2, title: "EL ARTE DE ACOTAR EL ALCANCE", sub: "Decir qué SÍ y, sobre todo, qué NO" },

  { type: "quote", sec: "ALCANCE", text: "Un alcance que no cabe en una sola frase todavía no es un alcance: es un deseo.", cite: "Regla del taller",
    notes: "Meta concreta: que puedan describir su alcance en una frase, p. ej. 'la línea de envasado de yogurt bebible de la planta de Rionegro'." },

  { type: "process", sec: "ALCANCE", title: "El embudo: de la empresa al proceso", cols: 5, steps: [
      { n:1, title:"Empresa", desc:"La organización completa.", color:"8C8C8C" },
      { n:2, title:"Planta / sitio", desc:"Una ubicación física.", color:"FF6B35" },
      { n:3, title:"Área", desc:"Una zona funcional.", color:"FFB000" },
      { n:4, title:"Línea / celda", desc:"Un conjunto de máquinas.", color:"27E5E5" },
      { n:5, title:"Proceso foco", desc:"El CPPS de estudio.", color:"C6FF00" },
    ], notes: "Este embudo es, informalmente, la jerarquía de ISA-95 (S07). Aquí solo lo usamos para acotar: bajen del nivel 1 al 5 hasta que quepa en una frase." },

  { type: "concepts3", sec: "ALCANCE", title: "Tres criterios para elegir el foco", items: [
      { k: "DOLOR REAL", desc: "El proceso tiene un problema que le cuesta dinero al negocio: paradas, defectos, falta de trazabilidad.", ex: "¿Qué duele hoy?", color: "FF3B30" },
      { k: "DATOS PLAUSIBLES", desc: "Tiene sensores, PLC o registros: hay datos (o pueden existir) para gobernar y analizar.", ex: "¿Hay señales?", color: "27E5E5" },
      { k: "TAMAÑO MANEJABLE", desc: "Se puede describir, diagramar y analizar en profundidad por un equipo, en un semestre.", ex: "¿Cabe en una línea?", color: "C6FF00" },
    ], note: "El foco ideal cumple los tres: duele, tiene datos y es manejable. Si falla alguno, bajen un nivel más en el embudo o cambien de proceso.",
    notes: "Estos tres criterios son la herramienta de decisión. Un proceso sin dolor no motiva el proyecto; sin datos, no se puede gobernar; muy grande, no se termina." },

  { type: "compare", sec: "ALCANCE", title: "Alcance amplio vs alcance acotado",
    leftTitle: "Amplio (evítenlo)", leftItems: ["'Toda la planta de la empresa X'","Decenas de procesos y sistemas","Imposible de diagramar con detalle","Diagnóstico superficial","El equipo se dispersa y no termina"],
    rightTitle: "Acotado (búsquenlo)", rightItems: ["'La línea de envasado de la planta Y'","Un proceso, sus máquinas y sus datos","Se diagrama en ISA-95 sin problema","Diagnóstico profundo y creíble","El equipo avanza parejo y a fondo"],
    leftColor: "FF3B30", rightColor: "C6FF00",
    foot: "La profundidad sobre un foco pequeño vale más que la superficie sobre todo. Acoten sin miedo.",
    notes: "Contraste clave. Los estudiantes tienden al alcance amplio por 'querer abarcar'. Empújenlos a acotar." },

  { type: "matrix", sec: "ALCANCE", title: "La herramienta: dentro / fuera del alcance", firstW: 6.4,
    cols: ["Elemento", "¿Dentro?"],
    rows: [
      ["El proceso/línea foco y sus máquinas", {t:"DENTRO",color:"22E06B"}],
      ["Los datos y señales de ese proceso", {t:"DENTRO",color:"22E06B"}],
      ["El resto de la planta y otras líneas", {t:"FUERA",color:"FF3B30"}],
      ["Logística, ventas, recursos humanos", {t:"FUERA",color:"FF3B30"}],
      ["Otras plantas o sedes de la empresa", {t:"FUERA",color:"FF3B30"}],
    ], notes: "Escribir explícitamente lo que queda FUERA es tan importante como lo que queda dentro. Esta tabla es parte del entregable." },

  { type: "warning", sec: "ALCANCE", title: "El error #1: morder más de lo que se puede masticar",
    paras: [
      "El error más común y más caro es elegir un alcance demasiado grande. Se siente ambicioso, pero condena al equipo a un diagnóstico superficial que no permite aplicar bien ningún marco del curso.",
      "Si dudan, acoten más. Siempre es más fácil ampliar un alcance pequeño y sólido que rescatar uno enorme y difuso.",
    ],
    quote: "Ante la duda, acoten. Profundidad sobre un foco pequeño, no superficie sobre todo.",
    notes: "Advertencia central de la sección. Vale la pena insistir: un alcance pequeño y bien trabajado siempre gana." },

  { type: "callouts", sec: "ALCANCE", title: "La prueba de la frase",
    stats: [ {n:"1 FRASE",label:"si no pueden describir su alcance en una frase, aún no está acotado",color:"C6FF00"},{n:"1 LÍNEA",label:"apunten a una sola línea o proceso, no a un área completa",color:"27E5E5"},{n:"IN/OUT",label:"escriban explícitamente qué queda fuera; eso es acotar de verdad",color:"FFB000"} ],
    note: { body: "Prueba rápida antes de seguir: completen la frase «Nuestro proyecto se enfoca en ________ de la planta ________ de la empresa ________». Si el primer espacio es un proceso concreto y no 'todo', van bien." },
    notes: "Dar la prueba de la frase como criterio de salida de esta sección. Es memorable y práctica." },

  // ============ SECCIÓN 3: ANATOMÍA DE LA EMPRESA ============
  { type: "section", num: 3, title: "ANATOMÍA DE LA EMPRESA", sub: "La ficha que hay que completar" },

  { type: "grid", sec: "FICHA", title: "Los 8 campos de la ficha de empresa", cols: 4, lead: "Esto es lo que deben definir hoy. Cada campo es una tarjeta de su documento.",
    cards: [
      { tag: "1 · IDENTIDAD", desc: "Nombre, sector, ubicación, tamaño.", color: "C6FF00" },
      { tag: "2 · PRODUCTO", desc: "Qué produce la empresa/línea.", color: "27E5E5" },
      { tag: "3 · ALCANCE", desc: "El proceso foco + tabla dentro/fuera.", color: "FFB000" },
      { tag: "4 · PROCESO", desc: "Los pasos del proceso, en orden.", color: "22E06B" },
      { tag: "5 · ACTIVOS", desc: "Máquinas, sensores, controladores.", color: "9D6BFF" },
      { tag: "6 · IT / OT", desc: "Qué tecnología de información y operación hay.", color: "FF6B35" },
      { tag: "7 · DOLOR", desc: "El problema de negocio que motiva todo.", color: "FF3B30" },
      { tag: "8 · INTERESADOS", desc: "Quién decide y a quién le importa.", color: "27E5E5" },
    ], notes: "Los 8 campos son el esqueleto del entregable. Recorreremos cada uno con el ejemplo." },

  { type: "concepts3", sec: "FICHA", title: "Identidad, producto y tamaño", items: [
      { k: "IDENTIDAD", desc: "Nombre creíble, sector (alimentos, textil, cemento…), ubicación (idealmente Antioquia) y tamaño (pyme suele ser lo más realista).", ex: "Ficticia, pero verosímil", color: "C6FF00" },
      { k: "PRODUCTO", desc: "Qué hace la empresa y, sobre todo, qué produce la LÍNEA foco (el producto concreto que sale de ese proceso).", ex: "Ej: yogurt bebible 200 ml", color: "27E5E5" },
      { k: "TAMAÑO", desc: "Número de empleados, líneas, turnos. Una pyme con 1–2 líneas es más fácil de acotar que una multinacional.", ex: "Realismo > grandeza", color: "FFB000" },
    ], note: "La identidad ancla el proyecto en algo concreto. Prefieran realismo (una pyme antioqueña) sobre grandeza (una multinacional genérica).",
    notes: "Guiar hacia lo verosímil y regional. Una pyme es más fácil de acotar y más cercana a su realidad profesional." },

  { type: "twocol", sec: "FICHA", title: "Activos físicos vs tecnología (IT/OT)",
    leftTitle: "Activos y OT (el mundo físico)", leftItems: ["Máquinas: llenadora, horno, prensa, robot","Sensores: temperatura, nivel, vibración, presencia","Controladores: PLC, RTU","Interfaz: HMI (pantalla del operario)","Supervisión: SCADA de la línea"],
    rightTitle: "IT (el mundo de la información)", rightItems: ["ERP: contabilidad, inventario, compras","MES: ejecución y trazabilidad de producción","Historiador: base de datos de señales","Red de oficina y correo","Acceso remoto de proveedores"],
    leftColor: "27E5E5", rightColor: "C6FF00",
    foot: "El proyecto vive en la FRONTERA entre estos dos mundos: gobernar cómo se conectan es el reto del curso.",
    notes: "Introducir IT/OT de forma tangible con ejemplos. No hace falta que la empresa lo tenga todo; sí que identifiquen qué hay y qué falta." },

  { type: "phase", sec: "FICHA", title: "El dolor de negocio — el motor del proyecto", badge: "CAMPO CLAVE",
    name: "¿Qué problema justifica digitalizar?", what: "Sin un dolor de negocio claro, el proyecto no tiene rumbo. El dolor es lo que hace que valga la pena gobernar y digitalizar el proceso: paradas no programadas, defectos de calidad, falta de trazabilidad para exportar, consumo energético alto, mantenimiento reactivo. Elijan UN dolor principal y háganlo el norte de todo el semestre.",
    leftTag: "EJEMPLOS DE DOLOR", tools: "Paradas · defectos · sin trazabilidad · energía", rightTag: "SIN DOLOR", seen: "El proyecto no tiene por qué existir",
    notes: "Este es el campo más importante después del alcance. El dolor justifica el caso de negocio (S16) y prioriza las decisiones de gobierno." },

  { type: "grid", sec: "FICHA", title: "Partes interesadas típicas", cols: 3, lead: "Quiénes deciden y a quiénes les importa el proceso foco.",
    cards: [
      { tag: "GERENTE GENERAL", desc: "Le importa el resultado del negocio y la inversión.", color: "C6FF00" },
      { tag: "GERENTE DE PLANTA", desc: "Responde por la producción y la continuidad.", color: "27E5E5" },
      { tag: "JEFE DE PRODUCCIÓN", desc: "Opera la línea; conoce el dolor de primera mano.", color: "FFB000" },
      { tag: "MANTENIMIENTO", desc: "Cuida los activos; clave para el predictivo.", color: "22E06B" },
      { tag: "TI / OT", desc: "A veces una sola persona; gestiona la tecnología.", color: "9D6BFF" },
      { tag: "OPERARIOS", desc: "Usan la máquina; su adopción decide el éxito.", color: "FF6B35" },
    ], notes: "En una pyme, varios roles pueden recaer en la misma persona. Identificarlos prepara la matriz de derechos de decisión de S01." },

  { type: "keypoints", sec: "FICHA", title: "Cómo argumentar que es un CPPS", items: [
      { label: "Hay cómputo", desc: "Un PLC o controlador ejecuta lógica sobre el proceso." },
      { label: "Hay físico", desc: "Sensores miden y actuadores modifican el mundo real." },
      { label: "Hay lazo", desc: "El sistema lee, decide y actúa sobre el proceso (o se busca que lo haga)." },
      { label: "Hay datos", desc: "Se generan señales que se pueden gobernar, integrar y analizar." },
      { label: "Hay convergencia", desc: "OT (la línea) se conecta con IT (ERP/MES/nube)." },
    ], notes: "Estos cinco puntos son la plantilla del argumento CPPS del entregable. Si el proceso los cumple, es (o puede ser) un CPPS." },

  // ============ SECCIÓN 4: EJEMPLO TRABAJADO ============
  { type: "section", num: 4, title: "EJEMPLO TRABAJADO", sub: "Lácteos La Pradera S.A.S. — un alcance bien acotado" },

  { type: "phase", sec: "EJEMPLO", title: "La empresa", badge: "IDENTIDAD",
    name: "Lácteos La Pradera S.A.S.", what: "Pyme de alimentos ubicada en Rionegro (Antioquia). Produce yogurt, kumis y avena en varios formatos. Tiene una sola planta con tres líneas de producción y trabaja dos turnos. Vende a supermercados regionales y quiere entrar a una gran cadena que le exige trazabilidad de lote.",
    leftTag: "SECTOR / LUGAR", tools: "Alimentos (lácteos) · Rionegro, Antioquia · pyme", rightTag: "PRODUCTO", seen: "Yogurt, kumis, avena · 3 líneas · 2 turnos",
    notes: "Empresa ficticia pero totalmente verosímil y regional. Fíjense: aún NO hemos acotado; esto es solo la identidad." },

  { type: "callouts", sec: "EJEMPLO", title: "La Pradera en cifras",
    stats: [ {n:"1 planta",label:"en Rionegro, con 3 líneas de producción y ~80 empleados",color:"C6FF00"},{n:"2 turnos",label:"producción diaria; ventas a supermercados regionales",color:"27E5E5"},{n:"1 meta",label:"entrar a una gran cadena que exige trazabilidad de lote",color:"FFB000"} ],
    note: { body: "Es una pyme realista: pequeña, regional, con una ambición concreta (nuevo cliente) que crea presión sobre la producción. Esa presión será el dolor que justifica el proyecto." },
    notes: "Cifras que hacen creíble a la empresa. La ambición de negocio (nuevo cliente) conecta con el dolor de trazabilidad." },

  { type: "matrix", sec: "EJEMPLO", title: "El embudo aplicado a La Pradera", firstW: 3.0,
    cols: ["Nivel", "En La Pradera", "¿Foco?"],
    rows: [
      ["Empresa", {t:"Lácteos La Pradera S.A.S.",color:"8C8C8C"}, "Contexto"],
      ["Planta", {t:"Planta de Rionegro",color:"FF6B35"}, "Contexto"],
      ["Área", {t:"Envasado de bebibles",color:"FFB000"}, "Se acerca"],
      ["Línea", {t:"Línea 2 · yogurt bebible 200 ml", color:"C6FF00"}, "FOCO ✓"],
    ], notes: "Bajamos del nivel empresa al nivel línea. El foco es la LÍNEA 2 de yogurt bebible, no toda la planta ni toda la empresa." },

  { type: "grid", sec: "EJEMPLO", title: "El alcance, en una frase", cols: 1, lead: "La prueba de la frase, superada:",
    cards: [
      { tag: "ALCANCE DEL PROYECTO", desc: "«El proyecto se enfoca en la LÍNEA 2 de envasado de yogurt bebible de 200 ml de la planta de Rionegro de Lácteos La Pradera S.A.S.» — un proceso, una línea, un producto. Todo lo demás es contexto.", color: "C6FF00" },
    ], notes: "Modelo de una frase de alcance bien acotada. Que los estudiantes copien esta estructura para la suya." },

  { type: "matrix", sec: "EJEMPLO", title: "Dentro / fuera del alcance — La Pradera", firstW: 6.4,
    cols: ["Elemento", "¿Dentro?"],
    rows: [
      ["Línea 2: llenado, sellado, codificado, empaque", {t:"DENTRO",color:"22E06B"}],
      ["Sensores, PLC, HMI y datos de la Línea 2", {t:"DENTRO",color:"22E06B"}],
      ["Trazabilidad de lote de ese producto", {t:"DENTRO",color:"22E06B"}],
      ["Producción del yogurt (fermentación, tanques)", {t:"FUERA",color:"FF3B30"}],
      ["Líneas 1 y 3, logística, ventas", {t:"FUERA",color:"FF3B30"}],
    ], notes: "Lo que queda fuera es explícito: NO gobernamos la fermentación ni las otras líneas. Solo el envasado de la Línea 2." },

  { type: "process", sec: "EJEMPLO", title: "El proceso de la Línea 2 (foco)", cols: 5, steps: [
      { n:1, title:"Recepción", desc:"Yogurt llega del tanque.", color:"FF6B35" },
      { n:2, title:"Llenado", desc:"Dosifica 200 ml por envase.", color:"FFB000" },
      { n:3, title:"Sellado", desc:"Sella la tapa.", color:"22E06B" },
      { n:4, title:"Codificado", desc:"Imprime lote y fecha.", color:"27E5E5" },
      { n:5, title:"Empaque", desc:"Agrupa y paletiza.", color:"C6FF00" },
    ], notes: "Cinco pasos concretos y observables. Este nivel de detalle es el que permite diagramarlo en ISA-95 (S07) más adelante." },

  { type: "twocol", sec: "EJEMPLO", title: "Activos y tecnología de la Línea 2",
    leftTitle: "Físico / OT", leftItems: ["Llenadora volumétrica con sensor de nivel","Selladora con sensor de presencia","Codificadora inkjet (lote y fecha)","Banda transportadora con motor","PLC que controla el llenado + HMI","SCADA básico de la línea"],
    rightTitle: "IT", rightItems: ["ERP para inventario y facturación","Registro de producción en hoja de cálculo (MES incipiente)","Sin historiador de datos aún","Red de oficina separada de planta","Proveedor de la llenadora con acceso remoto"],
    leftColor: "27E5E5", rightColor: "C6FF00",
    foot: "Nótese la brecha: hay OT (PLC/SCADA) pero la IT de producción es una hoja de cálculo. Ahí está la oportunidad de gobierno.",
    notes: "El detalle de activos hace el CPPS tangible. La brecha (MES = Excel, sin historiador) es justo lo que el proyecto va a gobernar y mejorar." },

  { type: "phase", sec: "EJEMPLO", title: "El dolor de negocio", badge: "EL MOTOR",
    name: "Paradas y falta de trazabilidad", what: "La Línea 2 sufre microparos frecuentes por atascos en la selladora, que bajan su OEE y generan reprocesos. Además, la trazabilidad de lote se lleva a mano, y la gran cadena a la que quieren venderle exige trazabilidad confiable y automática. Dos dolores concretos —paradas y trazabilidad— que le cuestan dinero y le cierran un mercado.",
    leftTag: "DOLOR PRINCIPAL", tools: "Microparos que bajan el OEE + trazabilidad manual", rightTag: "IMPACTO", seen: "Reprocesos, menos producción y un cliente que no llega",
    notes: "Dolor doble, concreto y cuantificable. Justifica gobernar, medir OEE (S13), asegurar trazabilidad y hacer el caso de negocio (S16)." },

  { type: "matrix", sec: "EJEMPLO", title: "Partes interesadas y quién decide", firstW: 3.6,
    cols: ["Interesado", "Le importa", "Decide sobre…"],
    rows: [
      ["Gerente general", {t:"El nuevo cliente y el ROI",color:"C6FF00"}, "Inversión"],
      ["Gerente de planta", {t:"OEE y continuidad",color:"27E5E5"}, "Prioridades OT"],
      ["Jefe de producción", {t:"Que la Línea 2 no pare",color:"FFB000"}, "Operación"],
      ["Persona de TI", {t:"Integrar datos sin romper nada",color:"9D6BFF"}, "Tecnología"],
    ], notes: "Esboza la matriz de derechos de decisión de S01. En una pyme, TI es una sola persona: dato realista importante." },

  { type: "keypoints", sec: "EJEMPLO", title: "Por qué La Pradera SÍ es un CPPS", items: [
      { label: "Cómputo", desc: "El PLC controla el llenado y el sellado en tiempo real." },
      { label: "Físico", desc: "Sensores de nivel y presencia; actuadores de la llenadora y selladora." },
      { label: "Lazo", desc: "El PLC lee sensores y comanda el llenado; se busca cerrar el lazo con datos." },
      { label: "Datos", desc: "Se pueden capturar OEE, conteos y trazabilidad de lote." },
      { label: "Convergencia", desc: "Conectar la Línea 2 (OT) con el ERP y un futuro tablero (IT)." },
    ], notes: "El argumento CPPS completo y aterrizado. La Línea 2 cumple los cinco puntos: es un CPPS de estudio ideal." },

  { type: "grid", sec: "EJEMPLO", title: "La ficha completa de La Pradera — resumen", cols: 4, lead: "Así se ve una ficha de empresa bien acotada, lista para arrancar el proyecto.",
    cards: [
      { tag: "IDENTIDAD", desc: "Lácteos La Pradera S.A.S. · lácteos · Rionegro · pyme.", color: "C6FF00" },
      { tag: "ALCANCE", desc: "Línea 2 de envasado de yogurt bebible 200 ml.", color: "FFB000" },
      { tag: "PROCESO", desc: "Recepción → llenado → sellado → codificado → empaque.", color: "22E06B" },
      { tag: "IT / OT", desc: "PLC, HMI, SCADA básico; ERP + Excel; sin historiador.", color: "27E5E5" },
      { tag: "DOLOR", desc: "Microparos que bajan el OEE + trazabilidad manual.", color: "FF3B30" },
      { tag: "INTERESADOS", desc: "Gerencia, planta, producción, TI (1 persona).", color: "9D6BFF" },
      { tag: "CPPS", desc: "Cómputo + físico + datos + convergencia IT/OT.", color: "C6FF00" },
      { tag: "FUERA", desc: "Fermentación, líneas 1 y 3, logística, ventas.", color: "FF6B35" },
    ], notes: "Esta es la meta del entregable de cada equipo: una ficha así de clara y acotada. Es su plantilla." },

  // ============ SECCIÓN 5: AHORA USTEDES ============
  { type: "section", num: 5, title: "AHORA USTEDES", sub: "Plantilla, pasos y errores a evitar" },

  { type: "process", sec: "USTEDES", title: "Los pasos del taller", cols: 3, steps: [
      { n:1, title:"Equipo", desc:"Conformen equipo de 3–4 y roles.", color:"C6FF00" },
      { n:2, title:"Empresa", desc:"Elijan sector, empresa y planta.", color:"27E5E5" },
      { n:3, title:"Embudo", desc:"Bajen hasta una línea/proceso foco.", color:"FFB000" },
      { n:4, title:"Ficha", desc:"Completen los 8 campos.", color:"22E06B" },
      { n:5, title:"In/Out", desc:"Escriban qué queda dentro y fuera.", color:"9D6BFF" },
      { n:6, title:"CPPS", desc:"Argumenten los 5 puntos del CPPS.", color:"FF6B35" },
    ], notes: "La secuencia de trabajo. Empiecen por el equipo y el sector; lo más difícil (y valioso) es el paso 3, el embudo." },

  { type: "grid", sec: "USTEDES", title: "Plantilla — completen su ficha", cols: 4, lead: "Copien estas casillas y llénenlas para su empresa. Una tarjeta = un campo.",
    cards: [
      { tag: "IDENTIDAD", desc: "Nombre: ____  Sector: ____  Lugar: ____  Tamaño: ____", color: "C6FF00" },
      { tag: "ALCANCE (1 frase)", desc: "«Nos enfocamos en ____ de la planta ____ de ____».", color: "FFB000" },
      { tag: "PROCESO", desc: "Paso 1 → 2 → 3 → 4 → 5 (nombren cada uno).", color: "22E06B" },
      { tag: "ACTIVOS", desc: "Máquinas: ____  Sensores: ____  Control: ____", color: "9D6BFF" },
      { tag: "IT / OT", desc: "OT: ____  IT: ____  Brecha: ____", color: "27E5E5" },
      { tag: "DOLOR", desc: "Problema principal: ____  Impacto: ____", color: "FF3B30" },
      { tag: "INTERESADOS", desc: "Quién decide: ____  A quién le importa: ____", color: "FF6B35" },
      { tag: "IN / OUT", desc: "Dentro: ____  Fuera: ____", color: "C6FF00" },
    ], notes: "Plantilla lista para copiar. Sugerir que la llenen primero a lápiz y luego la pulan. Es literalmente el entregable." },

  { type: "grid", sec: "USTEDES", title: "Errores frecuentes al acotar", cols: 2, lead: "Lo que hunde el proyecto desde el día uno.",
    cards: [
      { tag: "ALCANCE ENORME", desc: "'Toda la empresa': imposible de trabajar a fondo. → Bajen en el embudo.", color: "FF3B30" },
      { tag: "SIN DOLOR", desc: "Una empresa 'perfecta' sin problema. → Sin dolor no hay proyecto.", color: "FFB000" },
      { tag: "SIN OT", desc: "Un negocio sin proceso físico (una tienda, una app). → No es un CPPS.", color: "9D6BFF" },
      { tag: "INVEROSÍMIL", desc: "Datos o tecnología imposibles. → Realismo ante todo.", color: "27E5E5" },
    ], note: "Los cuatro errores se detectan a tiempo con las herramientas de hoy: el embudo, los tres criterios y la prueba de la frase.",
    notes: "Repasar los errores antes de que trabajen. El más común es el alcance enorme; el más grave es elegir algo sin proceso físico." },

  { type: "keypoints", sec: "USTEDES", title: "Checklist — ¿está bien acotado?", items: [
      { label: "Cabe en una frase", desc: "Pueden describir el alcance en una sola oración." },
      { label: "Es un proceso, no todo", desc: "El foco es una línea o proceso, no un área ni la empresa." },
      { label: "Tiene dolor", desc: "Hay un problema de negocio concreto que lo justifica." },
      { label: "Tiene OT", desc: "Hay proceso físico con sensores/controladores." },
      { label: "Tiene in/out", desc: "Está escrito qué queda dentro y qué queda fuera." },
    ], notes: "Checklist de salida del taller. Si marcan los cinco, su empresa está lista para arrancar el proyecto." },

  // ============ SECCIÓN 6: ENTREGABLE Y CIERRE ============
  { type: "section", num: 6, title: "ENTREGABLE Y CIERRE", sub: "Qué entregar y cómo se evalúa" },

  { type: "phase", sec: "CIERRE", title: "El entregable", badge: "SEGUIMIENTO",
    name: "La ficha de tu empresa (2–3 páginas)", what: "Documento breve con: (a) identidad de la empresa, (b) la frase de alcance + tabla dentro/fuera, (c) el proceso foco paso a paso, (d) activos y tecnología (IT/OT), (e) el dolor de negocio, (f) partes interesadas, (g) el argumento de por qué es un CPPS. Modelo: la ficha de La Pradera que acabamos de construir. Se revisa al inicio de la S02.",
    leftTag: "FORMATO", tools: "2–3 páginas · equipos de 3–4", rightTag: "MODELO", seen: "La ficha de Lácteos La Pradera",
    notes: "El entregable es la ficha de su propia empresa, con el ejemplo de La Pradera como plantilla de calidad." },

  { type: "matrix", sec: "CIERRE", title: "Cómo se evalúa", firstW: 5.0,
    cols: ["Criterio", "Qué buscamos", "%"],
    rows: [
      ["Alcance acotado", {t:"Foco claro, en una frase, con in/out",color:"C6FF00"}, "35"],
      ["Ficha completa", {t:"Los 8 campos, claros y coherentes",color:"27E5E5"}, "30"],
      ["Argumento CPPS", {t:"Los 5 puntos, bien justificados",color:"FFB000"}, "20"],
      ["Realismo", {t:"Empresa y datos creíbles",color:"22E06B"}, "15"],
    ], notes: "El criterio de mayor peso es acotar bien: es la competencia central del taller y la base de todo el semestre." },

  { type: "phase", sec: "CIERRE", title: "Lo que sigue con tu empresa", badge: "PROYECTO",
    name: "De la ficha al proyecto integrador", what: "La ficha de hoy es la semilla. En S01–02 le sumarán la matriz de derechos de decisión y los principios; en S03–04, la cascada COBIT y el diseño de gobierno (Entregable 1); en U2–U3, la arquitectura y los datos (Entregable 2); en U4, la seguridad y el caso de negocio. Todo crece sobre la empresa que definan hoy.",
    leftTag: "PRÓXIMO PASO", tools: "S02 — principios de ISO/IEC 38500 sobre tu empresa", rightTag: "GRAN META", seen: "Sustentación del proyecto (semana 16)",
    notes: "Cerrar mostrando que el trabajo de hoy no se pierde: es el cimiento de todo. Motiva a hacerlo bien." },

  { type: "keypoints", sec: "CIERRE", title: "Para llevar", items: [
      { label: "Acoten", desc: "Profundidad sobre un foco pequeño, no superficie sobre todo." },
      { label: "Una frase", desc: "Si no cabe en una frase, aún no está acotado." },
      { label: "Con dolor", desc: "Elijan un proceso con un problema real de negocio." },
      { label: "In y out", desc: "Escriban qué queda fuera; eso es acotar de verdad." },
      { label: "Es la base", desc: "La empresa de hoy sostiene todo el proyecto integrador." },
    ], notes: "Cinco ideas para llevarse. Cerrar reforzando la prueba de la frase y la regla de acotar." },

  { type: "closing", nextNum: 2, nextTitle: "ISO/IEC 38500 SOBRE TU EMPRESA", nextDesc: "En la S02 aplicarán los seis principios de gobierno a las decisiones tecnológicas de la empresa que definieron hoy.", prompt: "root@planta:~# empresa --definida ✓  siguiente: gobernar _",
    notes: "Recordar traer la ficha lista para la S02. La empresa ya existe; ahora empezamos a gobernarla." },
];
