// S07 — ISA-95 y la pirámide de automatización
module.exports = [
  { type: "cover", title: "ISA-95\n& LA PIRÁMIDE", subtitle: "Niveles de automatización e integración vertical empresa-control",
    notes: "Séptima sesión. El primer estándar de arquitectura del curso. ISA-95 estructura cómo fluye la información entre el ERP y el piso de planta." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "La pirámide", desc: "Los niveles 0–4 de la automatización industrial" },
    { title: "El estándar ISA-95", desc: "IEC 62264 y sus modelos" },
    { title: "Integración vertical", desc: "ERP ↔ MES y el formato B2MML" },
    { title: "MES / MOM", desc: "Gestión de operaciones de manufactura" },
    { title: "La pirámide se aplana", desc: "UNS, arquitecturas orientadas a eventos" },
    { title: "Cierre", desc: "Gobierno de la arquitectura, glosario y referencias" },
  ], notes: "De la jerarquía clásica (pirámide) a la arquitectura moderna (aplanada), con el gobierno como hilo." },

  { type: "stats", sec: "ISA95", title: "ISA-95 en cifras",
    bigstats: [ {n:"0–4",label:"NIVELES"},{n:"62264",label:"NORMA IEC"},{n:4,label:"MODELOS"},{n:"B2MML",label:"INTERCAMBIO"} ],
    kvs: [ {k:"AUTOR",v:"ISA (International Society of Automation)"},{k:"EQUIVALENTE",v:"IEC/ISO 62264"},{k:"PROPÓSITO",v:"Integrar empresa (ERP) y control (planta)"},{k:"NIVEL 3",v:"MES / MOM — foco del estándar"},{k:"PARTES",v:"Modelos jerárquico, funcional, objetos, operaciones"},{k:"FORMATO",v:"B2MML (XML) para intercambio"} ],
    notes: "ISA-95 es el estándar de integración vertical más usado. Su corazón es el nivel 3 (MES) y el intercambio ERP↔planta." },

  { type: "objectives", sec: "ISA95", title: "Objetivos de la sesión", items: [
    { lead: "Describir", rest: "los niveles 0–4 de la pirámide de automatización." },
    { lead: "Explicar", rest: "los modelos de ISA-95 (jerárquico, funcional, objetos, operaciones)." },
    { lead: "Analizar", rest: "el flujo de información entre ERP y MES (B2MML)." },
    { lead: "Ubicar", rest: "las funciones de un MES/MOM." },
    { lead: "Discutir", rest: "por qué la pirámide se aplana y qué implica para el gobierno." },
  ], notes: "El entregable de la Unidad 2: modelar la arquitectura ISA-95 del proceso del proyecto (Lab 3)." },

  // -------- SECCIÓN 1: LA PIRÁMIDE --------
  { type: "section", num: 1, title: "LA PIRÁMIDE DE AUTOMATIZACIÓN", sub: "Cinco niveles, de la señal al negocio" },

  { type: "process", sec: "PIRÁMIDE", title: "Los cinco niveles", cols: 3, steps: [
      { n:0, title:"Proceso físico", desc:"Sensores y actuadores.", color:"FF6B35" },
      { n:1, title:"Control", desc:"PLC, RTU, DCS.", color:"FFB000" },
      { n:2, title:"Supervisión", desc:"SCADA, HMI.", color:"22E06B" },
      { n:3, title:"MES / MOM", desc:"Operaciones de manufactura.", color:"27E5E5" },
      { n:4, title:"Negocio", desc:"ERP, planificación.", color:"C6FF00" },
    ], notes: "La pirámide clásica. Cada nivel tiene su horizonte temporal: nivel 1 en milisegundos, nivel 4 en meses." },

  { type: "grid", sec: "PIRÁMIDE", title: "Nivel 0 y 1 — el mundo físico y su control", cols: 2, lead: "La base de la pirámide: donde la tecnología toca la materia.",
    cards: [
      { tag: "NIVEL 0 · PROCESO", desc: "El proceso físico real: sensores (temperatura, presión, vibración) y actuadores (válvulas, motores).", color: "FF6B35" },
      { tag: "NIVEL 1 · CONTROL", desc: "PLC, RTU y DCS que leen sensores y comandan actuadores en tiempo real (milisegundos).", color: "FFB000" },
      { tag: "LAZO DE CONTROL", desc: "El PLC ejecuta lógica en lazo cerrado: si temperatura > X, cierra válvula. Determinista.", color: "C6FF00" },
      { tag: "CRITICIDAD", desc: "Un fallo aquí detiene o daña el proceso. La disponibilidad y el determinismo mandan.", color: "FF3B30" },
    ], notes: "Niveles 0-1 son el dominio OT puro: tiempo real, determinismo, consecuencias físicas. Aquí no se experimenta." },

  { type: "grid", sec: "PIRÁMIDE", title: "Nivel 2 — supervisión (SCADA)", cols: 2, lead: "El nivel que hace visible y operable el proceso.",
    cards: [
      { tag: "SCADA", desc: "Supervisory Control and Data Acquisition: supervisa y controla varios PLC desde una sala.", color: "27E5E5" },
      { tag: "HMI", desc: "Human-Machine Interface: la pantalla donde el operario ve y opera el proceso.", color: "C6FF00" },
      { tag: "HISTORIADOR", desc: "Base de datos de series de tiempo que registra las señales del proceso.", color: "FFB000" },
      { tag: "ALARMAS", desc: "Gestión de alarmas y eventos para que el operario reaccione a tiempo.", color: "FF3B30" },
    ], note: "El SCADA es la 'sala de control': agrega los PLC, presenta al operario y guarda la historia. Horizonte: segundos a minutos.",
    notes: "El SCADA es el puente entre control (nivel 1) y gestión (nivel 3). El historiador es clave para la analítica (S13)." },

  { type: "grid", sec: "PIRÁMIDE", title: "Niveles 3 y 4 — operaciones y negocio", cols: 2, lead: "La cima de la pirámide: donde la producción se planifica y se gestiona.",
    cards: [
      { tag: "NIVEL 3 · MES/MOM", desc: "Gestiona la ejecución de la producción: órdenes, lotes, calidad, trazabilidad. Horizonte: turnos y días.", color: "27E5E5" },
      { tag: "NIVEL 4 · ERP", desc: "Planifica el negocio: compras, inventario, finanzas, ventas. Horizonte: días a meses.", color: "C6FF00" },
      { tag: "LA BRECHA", desc: "Entre ERP (nivel 4) y planta (niveles 0-2) hay una brecha semántica y temporal que el MES cierra.", color: "FFB000" },
      { tag: "ISA-95", desc: "El estándar se centra en la interfaz nivel 3 ↔ nivel 4: qué información cruza y cómo.", color: "22E06B" },
    ], notes: "ISA-95 vive sobre todo en la interfaz nivel 3-4. El MES traduce entre el lenguaje del negocio y el de la planta." },

  { type: "matrix", sec: "PIRÁMIDE", title: "Cada nivel, su horizonte y tecnología", firstW: 2.8,
    cols: ["Nivel", "Horizonte", "Tecnología", "Rol"],
    rows: [
      ["4 Negocio", {t:"Meses",color:"C6FF00"}, "ERP", "Planificar"],
      ["3 MES/MOM", {t:"Días",color:"27E5E5"}, "MES", "Ejecutar"],
      ["2 Supervisión", {t:"Minutos",color:"22E06B"}, "SCADA", "Supervisar"],
      ["1 Control", {t:"Milisegundos",color:"FFB000"}, "PLC/DCS", "Controlar"],
      ["0 Proceso", {t:"Tiempo real",color:"FF6B35"}, "Sensores", "Actuar"],
    ], notes: "Tabla síntesis de la pirámide. El horizonte temporal define las prioridades: nivel 1 no tolera latencia; nivel 4 sí." },

  { type: "callouts", sec: "PIRÁMIDE", title: "Por qué importa la pirámide al gobierno",
    stats: [ {n:"CRITICIDAD",label:"cuanto más abajo, más crítico y menos tolerante a fallos",color:"FF3B30"},{n:"FRONTERA",label:"la frontera IT/OT suele estar entre niveles 3 y 4",color:"27E5E5"},{n:"DECISIÓN",label:"qué se integra, qué se aísla y quién accede a cada nivel",color:"C6FF00"} ],
    note: { body: "La pirámide da al gobierno un mapa: dónde está lo crítico, dónde la frontera IT/OT y dónde poner controles. La segmentación de seguridad (S14) se diseña sobre esta jerarquía (modelo Purdue)." },
    notes: "La pirámide es la base del modelo Purdue de seguridad (S14). Marcar la frontera IT/OT entre niveles 3 y 4." },

  { type: "phase", sec: "PIRÁMIDE", title: "La pirámide en una planta de bebidas", badge: "EJEMPLO",
    name: "De la válvula al ERP", what: "Nivel 0: sensor de caudal y válvula de llenado. Nivel 1: PLC que dosifica el líquido. Nivel 2: SCADA que supervisa la línea de embotellado y alarma si hay atasco. Nivel 3: MES que sigue la orden de 10.000 botellas del lote L-238. Nivel 4: ERP que planificó ese lote según la demanda comercial.",
    leftTag: "RECORRIDO", tools: "Sensor → PLC → SCADA → MES → ERP", rightTag: "OBSERVAR", seen: "El mismo dato cambia de forma en cada nivel",
    notes: "Ejemplo concreto que recorre los cinco niveles. Ayuda a fijar la pirámide con un proceso familiar." },

  // -------- SECCIÓN 2: EL ESTÁNDAR --------
  { type: "section", num: 2, title: "EL ESTÁNDAR ISA-95 / IEC 62264", sub: "Modelos para integrar empresa y control" },

  { type: "concepts3", sec: "ESTÁNDAR", title: "Tipos de control de proceso", items: [
      { k: "DISCRETO", desc: "Produce unidades contables (piezas, botellas). Manufactura de ensamble.", ex: "Autopartes, electrónica", color: "C6FF00" },
      { k: "CONTINUO", desc: "Flujo ininterrumpido de material. No hay 'unidades'.", ex: "Cemento, química, energía", color: "27E5E5" },
      { k: "POR LOTES (BATCH)", desc: "Produce cantidades definidas siguiendo una receta.", ex: "Alimentos, farma, pinturas", color: "FFB000" },
    ], note: "ISA-95 aplica a los tres tipos, pero el batch tiene su propio estándar hermano (ISA-88). El tipo de proceso condiciona la arquitectura y los datos.",
    notes: "Distinguir los tres tipos de control ayuda a modelar el proceso del proyecto. ISA-88 (batch) complementa a ISA-95." },

  // -------- SECCIÓN 3 marcador temporal --------

  { type: "grid", sec: "ESTÁNDAR", title: "Qué es ISA-95", cols: 2, lead: "Un estándar internacional para la integración de sistemas empresa-control.",
    cards: [
      { tag: "PROPÓSITO", desc: "Definir la interfaz entre los sistemas de negocio (ERP) y los de manufactura (MES/planta).", color: "C6FF00" },
      { tag: "IEC 62264", desc: "ISA-95 se adoptó como norma internacional IEC/ISO 62264, en varias partes.", color: "27E5E5" },
      { tag: "TERMINOLOGÍA", desc: "Provee un vocabulario común entre TI y producción, reduciendo malentendidos.", color: "FFB000" },
      { tag: "NEUTRAL", desc: "Independiente de fabricante: describe QUÉ intercambiar, no con qué producto.", color: "22E06B" },
    ], notes: "ISA-95 es sobre todo un lenguaje común y una interfaz estándar. Reduce la integración a medida entre ERP y MES." },

  { type: "grid", sec: "ESTÁNDAR", title: "Las partes de ISA-95", cols: 3, lead: "El estándar se organiza en varias partes complementarias.",
    cards: [
      { tag: "PARTE 1", desc: "Modelos y terminología: jerarquía, funciones y objetos.", color: "C6FF00" },
      { tag: "PARTE 2", desc: "Atributos de los objetos: detalle de los modelos de datos.", color: "27E5E5" },
      { tag: "PARTE 3", desc: "Modelos de actividad de gestión de operaciones (MOM).", color: "FFB000" },
      { tag: "PARTE 4", desc: "Objetos y atributos para MOM.", color: "22E06B" },
      { tag: "PARTE 5", desc: "Transacciones entre negocio y manufactura.", color: "9D6BFF" },
      { tag: "B2MML", desc: "Implementación XML del estándar para el intercambio real.", color: "FF6B35" },
    ], notes: "No hay que memorizar las partes; sí saber que ISA-95 cubre modelos, actividades y transacciones, y que B2MML lo implementa." },

  { type: "phase", sec: "ESTÁNDAR", title: "Modelo jerárquico", badge: "MODELO 1",
    name: "Los niveles funcionales", what: "Formaliza los niveles 0–4 y define dónde ocurre cada tipo de decisión. La frontera clave está entre el nivel 3 (operaciones de manufactura) y el nivel 4 (planificación de negocio). Este modelo es el que da origen a la 'pirámide'.",
    leftTag: "DEFINE", tools: "Niveles 0–4 y sus fronteras", rightTag: "USO EN GOBIERNO", seen: "Mapa para segmentar y decidir accesos",
    notes: "El modelo jerárquico es la pirámide formalizada. Fija la frontera IT/OT en el estándar." },

  { type: "phase", sec: "ESTÁNDAR", title: "Modelo funcional y de flujo", badge: "MODELO 2",
    name: "Qué funciones y qué datos cruzan", what: "Describe las funciones empresariales y de manufactura (planificación, programación, control de producción, mantenimiento, calidad, inventario) y los flujos de información entre ellas. Muestra qué datos deben cruzar la frontera nivel 3–4.",
    leftTag: "DEFINE", tools: "Funciones y flujos de información", rightTag: "USO EN GOBIERNO", seen: "Qué integrar y con qué prioridad",
    notes: "El modelo funcional revela los flujos que hay que integrar. Base para diseñar la integración ERP-MES." },

  { type: "phase", sec: "ESTÁNDAR", title: "Modelo de objetos y de operaciones", badge: "MODELOS 3–4",
    name: "El vocabulario de datos", what: "El modelo de objetos define las entidades de información: personal, equipo, material, proceso, producto. El modelo de operaciones (MOM) organiza la gestión de producción, mantenimiento, calidad e inventario. Juntos dan la estructura de datos estándar del nivel 3.",
    leftTag: "OBJETOS", tools: "Personal · equipo · material · producto", rightTag: "OPERACIONES", seen: "Producción · calidad · mantenimiento · inventario",
    notes: "Los objetos ISA-95 son la base del modelo de datos del MES. Alinean el vocabulario entre ERP y planta." },

  { type: "matrix", sec: "ESTÁNDAR", title: "Los objetos de recurso de ISA-95", firstW: 3.2,
    cols: ["Objeto", "Qué representa", "Ejemplo"],
    rows: [
      ["Personal", {t:"Personas y roles",color:"C6FF00"}, "Operario, turno"],
      ["Equipo", {t:"Activos de producción",color:"27E5E5"}, "Línea, máquina"],
      ["Material", {t:"Insumos y productos",color:"FFB000"}, "Lote de harina"],
      ["Proceso/segmento", {t:"Cómo se produce",color:"22E06B"}, "Receta, ruta"],
    ], notes: "Los cuatro recursos (personal, equipo, material, proceso) estructuran cualquier operación. El proyecto los identificará." },

  { type: "callouts", sec: "ESTÁNDAR", title: "Por qué ISA-95 reduce el caos",
    stats: [ {n:"SIN ISA-95",label:"cada integración ERP-MES es a medida, frágil y cara",color:"FF3B30"},{n:"CON ISA-95",label:"lenguaje y objetos comunes; integración estándar y mantenible",color:"C6FF00"},{n:"GOBIERNO",label:"la arquitectura de datos deja de depender de un integrador",color:"27E5E5"} ],
    note: { body: "ISA-95 estandariza la interfaz más problemática de la planta: ERP↔MES. Sin él, cada proyecto reinventa el vocabulario y la integración se vuelve un riesgo de gobierno (dependencia, fragilidad)." },
    notes: "ISA-95 combate el lock-in de integración. Es una decisión de arquitectura (APO03) con impacto de gobierno." },

  // -------- SECCIÓN 3: INTEGRACIÓN VERTICAL --------
  { type: "section", num: 3, title: "INTEGRACIÓN VERTICAL — ERP ↔ MES", sub: "Cómo cruza la información la frontera IT/OT" },

  { type: "grid", sec: "INTEGRACIÓN", title: "Qué información cruza la frontera", cols: 2, lead: "El intercambio ERP↔MES tiene dos sentidos.",
    cards: [
      { tag: "ERP → MES (bajar)", desc: "Órdenes de producción, recetas, programación, materiales asignados.", color: "C6FF00" },
      { tag: "MES → ERP (subir)", desc: "Producción real, consumos, calidad, tiempos, trazabilidad de lote.", color: "27E5E5" },
      { tag: "SINCRONÍA", desc: "El ERP planifica; el MES ejecuta y reporta. La brecha temporal se cierra aquí.", color: "FFB000" },
      { tag: "RIESGO", desc: "Datos inconsistentes entre ERP y planta = decisiones sobre información falsa.", color: "FF3B30" },
    ], notes: "La integración vertical es bidireccional. El error típico: el ERP 'cree' una cosa y la planta hace otra." },

  { type: "phase", sec: "INTEGRACIÓN", title: "B2MML — el idioma del intercambio", badge: "IMPLEMENTACIÓN",
    name: "ISA-95 hecho XML", what: "Business To Manufacturing Markup Language: un esquema XML que implementa los modelos de ISA-95 para el intercambio real de mensajes entre ERP y MES. Estandariza la estructura de órdenes, respuestas de producción, materiales y calidad. Es la forma práctica de 'hablar ISA-95'.",
    leftTag: "QUÉ ES", tools: "Esquema XML basado en ISA-95", rightTag: "ALTERNATIVAS", seen: "APIs REST, OPC UA (S10)",
    notes: "B2MML es la implementación de referencia. Hoy conviven B2MML, APIs REST y modelos de información OPC UA." },

  { type: "grid", sec: "INTEGRACIÓN", title: "Patrones de integración", cols: 3, lead: "Cómo se conectan ERP y MES en la práctica.",
    cards: [
      { tag: "PUNTO A PUNTO", desc: "Conexión directa ERP-MES. Simple al inicio, insostenible al crecer.", color: "FF6B35" },
      { tag: "MIDDLEWARE / ESB", desc: "Un bus de integración media entre sistemas. Escalable y gobernable.", color: "27E5E5" },
      { tag: "UNS / BROKER", desc: "Un namespace unificado por el que todos publican/consumen (S11).", color: "C6FF00" },
      { tag: "API-LED", desc: "APIs reutilizables por capas. Común en integraciones modernas.", color: "FFB000" },
      { tag: "BATCH vs EVENTO", desc: "Sincronización por lotes programados vs en tiempo real por eventos.", color: "22E06B" },
      { tag: "GOBIERNO", desc: "El patrón elegido determina mantenibilidad, costo y dependencia.", color: "9D6BFF" },
    ], notes: "El patrón de integración es una decisión de arquitectura y gobierno. El UNS (S11) es la tendencia moderna." },

  { type: "grid", sec: "INTEGRACIÓN", title: "La frontera IT/OT en la práctica", cols: 2, lead: "Dónde y cómo se cruza la frontera define riesgo y control.",
    cards: [
      { tag: "DMZ INDUSTRIAL", desc: "Zona desmilitarizada entre IT y OT: ningún tráfico directo cruza sin control.", color: "C6FF00" },
      { tag: "HISTORIADOR ESPEJO", desc: "Réplica del historiador en IT para que el negocio consulte sin tocar OT.", color: "27E5E5" },
      { tag: "FLUJO CONTROLADO", desc: "Solo protocolos y puertos autorizados cruzan, en un sentido definido.", color: "FFB000" },
      { tag: "GOBIERNO", desc: "Quién autoriza qué cruza la frontera es una decisión de gobierno de riesgo.", color: "FF3B30" },
    ], note: "La integración vertical y la seguridad OT se diseñan juntas: cada flujo que cruza la frontera IT/OT es una puerta que hay que controlar (S14).",
    notes: "Anticipa el modelo Purdue y la DMZ industrial de S14. Integrar y asegurar son la misma conversación." },

  { type: "matrix", sec: "INTEGRACIÓN", title: "Mensajes ISA-95 típicos", firstW: 3.8,
    cols: ["Mensaje", "Sentido", "Contenido"],
    rows: [
      ["Production Schedule", {t:"ERP→MES",color:"C6FF00"}, "Qué producir y cuándo"],
      ["Production Performance", {t:"MES→ERP",color:"27E5E5"}, "Qué se produjo realmente"],
      ["Material Definition", {t:"ERP→MES",color:"FFB000"}, "Insumos y recetas"],
      ["Product Genealogy", {t:"MES→ERP",color:"22E06B"}, "Trazabilidad de lote"],
    ], notes: "Estos mensajes son el 'contrato' entre ERP y MES. La genealogía de producto habilita la trazabilidad para exportación." },

  { type: "callouts", sec: "INTEGRACIÓN", title: "El valor de la integración vertical",
    stats: [ {n:"TRAZABILIDAD",label:"seguir un lote de la materia prima al cliente final",color:"C6FF00"},{n:"VISIBILIDAD",label:"el negocio ve la producción real, no una estimación",color:"27E5E5"},{n:"AGILIDAD",label:"replanificar rápido ante desviaciones del piso de planta",color:"FFB000"} ],
    note: { body: "La integración vertical convierte la planta en información útil para el negocio: trazabilidad para cumplir, visibilidad para decidir y agilidad para reaccionar. Es el primer gran valor de un CPPS bien arquitecturado." },
    notes: "El valor de negocio de ISA-95: trazabilidad, visibilidad y agilidad. Conecta con el caso de exportación de S03." },

  // -------- SECCIÓN 4: MES / MOM --------
  { type: "section", num: 4, title: "MES / MOM — EL CORAZÓN DEL NIVEL 3", sub: "Gestión de la ejecución de la producción" },

  { type: "concepts3", sec: "MES", title: "MES y MOM", items: [
      { k: "MES", desc: "Manufacturing Execution System: gestiona y sigue la ejecución de la producción en el piso.", ex: "Sistema del nivel 3", color: "27E5E5" },
      { k: "MOM", desc: "Manufacturing Operations Management: concepto más amplio (producción, calidad, mantenimiento, inventario).", ex: "ISA-95 parte 3", color: "C6FF00" },
      { k: "RELACIÓN", desc: "El MES es el sistema; el MOM es el alcance de operaciones que ISA-95 describe.", ex: "MES ⊂ MOM", color: "FFB000" },
    ], note: "El MES ejecuta y registra la producción en tiempo casi real; el MOM (ISA-95) organiza las cuatro áreas de operaciones. El MES es donde el plan del ERP se vuelve producción real.",
    notes: "Distinguir MES (sistema) de MOM (marco de operaciones). El MES es el traductor plan→ejecución." },

  { type: "grid", sec: "MES", title: "Las cuatro áreas de operaciones (MOM)", cols: 2, lead: "ISA-95 parte 3 organiza las operaciones en cuatro dominios.",
    cards: [
      { tag: "PRODUCCIÓN", desc: "Ejecutar órdenes, seguir el avance, registrar lo producido.", color: "C6FF00" },
      { tag: "CALIDAD", desc: "Controlar y registrar la calidad; gestionar no conformidades.", color: "27E5E5" },
      { tag: "MANTENIMIENTO", desc: "Gestionar mantenimiento preventivo, correctivo y predictivo.", color: "FFB000" },
      { tag: "INVENTARIO", desc: "Seguir materiales, consumos y movimientos en planta.", color: "22E06B" },
    ], notes: "Las cuatro áreas MOM. Un MES puede cubrir una o varias. El proyecto identificará cuáles aplican a su proceso." },

  { type: "grid", sec: "MES", title: "Funciones típicas de un MES", cols: 3, lead: "Qué hace un MES en el día a día del piso.",
    cards: [
      { tag: "ÓRDENES", desc: "Recibe y despacha órdenes de producción del ERP.", color: "C6FF00" },
      { tag: "SEGUIMIENTO", desc: "Rastrea el avance en tiempo real (WIP, tiempos).", color: "27E5E5" },
      { tag: "TRAZABILIDAD", desc: "Registra genealogía de lote: qué material, qué máquina, qué operario.", color: "FFB000" },
      { tag: "OEE", desc: "Calcula la eficiencia global del equipo en línea.", color: "22E06B" },
      { tag: "CALIDAD", desc: "Captura resultados de calidad y bloquea lotes no conformes.", color: "FF3B30" },
      { tag: "DOCUMENTACIÓN", desc: "Guía electrónica de trabajo y registros para auditoría.", color: "9D6BFF" },
    ], notes: "El MES es el sistema más rico en datos del nivel 3. De él salen OEE (S13) y trazabilidad (S03)." },

  { type: "phase", sec: "MES", title: "El MES como fuente de datos del CPPS", badge: "DATOS",
    name: "Donde nace la inteligencia", what: "El MES concentra los datos de ejecución: tiempos, consumos, calidad, genealogía. Es la fuente natural para la analítica del CPPS (OEE, predictivo, optimización). Un MES bien gobernado, con datos de calidad, es el cimiento de los niveles Cyber y Cognition de la 5C.",
    leftTag: "ALIMENTA", tools: "OEE · trazabilidad · analítica · gemelo", rightTag: "SE PROFUNDIZA EN", seen: "Datos y OEE (S13)",
    notes: "El MES es la mina de datos del CPPS. Sin gobierno de esos datos (S13), la analítica no es fiable." },

  { type: "matrix", sec: "MES", title: "Indicadores que produce un MES", firstW: 3.4,
    cols: ["Indicador", "Qué mide", "Decisión que habilita"],
    rows: [
      ["OEE", {t:"Eficiencia global",color:"C6FF00"}, "Dónde mejorar"],
      ["Rendimiento", {t:"Buenas / total",color:"27E5E5"}, "Calidad del proceso"],
      ["Tiempo de ciclo", {t:"Velocidad real",color:"FFB000"}, "Cuellos de botella"],
      ["Trazabilidad", {t:"Genealogía de lote",color:"22E06B"}, "Recall y cumplimiento"],
    ], notes: "Los indicadores del MES son la materia prima de la gestión de planta. Se calculan e interpretan en S13." },

  { type: "compare", sec: "MES", title: "MES tradicional vs plataforma moderna",
    leftTitle: "MES tradicional", leftItems: ["Monolítico y propietario","Integración a medida","Difícil de escalar","Datos en silos","Fuerte lock-in"],
    rightTitle: "Plataforma moderna", rightItems: ["Modular y basada en estándares","Integración vía UNS/APIs","Escalable en nube/borde","Datos disponibles y abiertos","Menor dependencia"],
    leftColor: "8C8C8C", rightColor: "C6FF00",
    foot: "La tendencia va de MES monolíticos a plataformas modulares centradas en el dato (UNS).",
    notes: "La modernización del MES es una decisión de arquitectura y gobierno. El UNS (S11) es parte de esta evolución." },

  { type: "callouts", sec: "MES", title: "El MES y el gobierno",
    stats: [ {n:"CRÍTICO",label:"si el MES cae, la ejecución de la producción se detiene o se ciega",color:"FF3B30"},{n:"DATO",label:"es la fuente primaria de datos de negocio de la planta",color:"C6FF00"},{n:"CAMBIO",label:"cambiar el MES es una decisión estratégica de 10+ años",color:"FFB000"} ],
    note: { body: "El MES es un activo de gobierno de primer orden: crítico para operar, fuente del dato y difícil de cambiar. Su selección (adquisición, principio 3 de 38500) y su continuidad (DSS04) son decisiones estratégicas, no técnicas." },
    notes: "El MES ilustra cómo una decisión técnica (qué MES) es en realidad de gobierno (estrategia, riesgo, dependencia)." },

  // -------- SECCIÓN 5: LA PIRÁMIDE SE APLANA --------
  { type: "section", num: 5, title: "LA PIRÁMIDE SE APLANA", sub: "De la jerarquía rígida a la arquitectura orientada a datos" },

  { type: "grid", sec: "APLANAMIENTO", title: "Por qué la pirámide ya no basta", cols: 2, lead: "La jerarquía clásica muestra sus límites en la era del dato.",
    cards: [
      { tag: "SILOS", desc: "Cada nivel habla su protocolo; el dato se transforma y se pierde al subir.", color: "FF3B30" },
      { tag: "LENTITUD", desc: "La información sube nivel por nivel; el negocio la recibe tarde.", color: "FFB000" },
      { tag: "NUEVAS NECESIDADES", desc: "IA, nube y analítica necesitan el dato crudo, no filtrado por la jerarquía.", color: "27E5E5" },
      { tag: "RIGIDEZ", desc: "Añadir una fuente exige tocar varios niveles. Poco ágil.", color: "9D6BFF" },
    ], notes: "La pirámide fue diseñada para control, no para datos. La era del dato exige arquitecturas más planas." },

  { type: "concepts3", sec: "APLANAMIENTO", title: "El Unified Namespace (UNS)", items: [
      { k: "IDEA", desc: "Un único espacio de nombres donde todos los sistemas publican y consumen datos en tiempo real.", ex: "Broker central (MQTT)", color: "C6FF00" },
      { k: "PLANO", desc: "En vez de subir por la pirámide, cada sistema accede al dato que necesita directamente.", ex: "Event-driven", color: "27E5E5" },
      { k: "SEMÁNTICA", desc: "El namespace está organizado por jerarquía física/lógica (empresa/planta/línea/máquina).", ex: "ISA-95 como semántica", color: "FFB000" },
    ], note: "El UNS no borra ISA-95: usa su jerarquía como semántica del namespace. Se profundiza en S11 (MQTT/Sparkplug).",
    notes: "El UNS es la evolución arquitectónica moderna. Usa ISA-95 como estructura semántica, no como camino obligado del dato." },

  { type: "grid", sec: "APLANAMIENTO", title: "Arquitecturas emergentes", cols: 3, lead: "Cómo se está reconfigurando la arquitectura de planta.",
    cards: [
      { tag: "EVENT-DRIVEN", desc: "El dato fluye por eventos en tiempo real, no por consultas jerárquicas.", color: "C6FF00" },
      { tag: "ORIENTADA A SERVICIOS", desc: "Funciones expuestas como servicios reutilizables (SOA/microservicios).", color: "27E5E5" },
      { tag: "EDGE-CENTRIC", desc: "Procesamiento en el borde, cerca del proceso (S09).", color: "FFB000" },
      { tag: "DATA-CENTRIC", desc: "El dato en el centro, no la aplicación. UNS como columna vertebral.", color: "22E06B" },
      { tag: "OPC UA PubSub", desc: "El estándar OT también evoluciona a publicación/suscripción (S10).", color: "9D6BFF" },
      { tag: "HÍBRIDA", desc: "Coexisten pirámide (control) y UNS (datos): lo mejor de ambas.", color: "FF6B35" },
    ], notes: "La realidad es híbrida: el control sigue jerárquico (determinismo), pero los datos fluyen planos. No se bota la pirámide." },

  { type: "phase", sec: "APLANAMIENTO", title: "Gobierno de la arquitectura", badge: "APO03",
    name: "Decidir la arquitectura es gobernar", what: "Elegir entre pirámide clásica, UNS o híbrido es una decisión de arquitectura empresarial (APO03) con impacto de 10+ años: afecta mantenibilidad, costo, dependencia, seguridad y capacidad de analítica. El gobierno fija principios de arquitectura y aprueba la evolución, no la improvisa el integrador de turno.",
    leftTag: "DECISIÓN DE GOBIERNO", tools: "Principios de arquitectura · APO03 · TOGAF", rightTag: "IMPACTO", seen: "Costo, riesgo y agilidad a 10 años",
    notes: "La arquitectura es gobierno (APO03). Conecta la técnica de la Unidad 2 con la Unidad 1." },

  { type: "grid", sec: "APLANAMIENTO", title: "ISA-95 sigue vivo", cols: 2, lead: "El aplanamiento no jubila el estándar: lo reubica.",
    cards: [
      { tag: "COMO SEMÁNTICA", desc: "La jerarquía ISA-95 organiza el namespace del UNS (empresa/planta/línea).", color: "C6FF00" },
      { tag: "COMO MODELO DE DATOS", desc: "Los objetos ISA-95 siguen definiendo qué es un lote, un equipo, un material.", color: "27E5E5" },
      { tag: "COMO INTEGRACIÓN", desc: "B2MML y la interfaz ERP-MES siguen vigentes donde el batch tiene sentido.", color: "FFB000" },
      { tag: "COMO LENGUAJE", desc: "Sigue siendo el vocabulario común entre TI y producción.", color: "22E06B" },
    ], note: "ISA-95 evoluciona de 'camino del dato' a 'lenguaje y semántica del dato'. Sigue siendo la base conceptual de la arquitectura de planta.",
    notes: "Cerrar la sección: ISA-95 no muere, se transforma. Su valor perdura como vocabulario y semántica." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Pirámide 0–4", desc: "Proceso, control, supervisión, MES, negocio." },
      { label: "ISA-95", desc: "Estándar de integración empresa-control (IEC 62264)." },
      { label: "Frontera IT/OT", desc: "Suele estar entre niveles 3 y 4." },
      { label: "MES/MOM", desc: "Ejecuta la producción y es la fuente del dato." },
      { label: "Aplanamiento", desc: "El UNS usa ISA-95 como semántica del dato." },
    ], notes: "Repaso. Verificar que ubican la frontera IT/OT y el rol del MES." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 2", cols: 4, steps: [
      { n:"S06", title:"I4.0 y CPS", desc:"Visión.", color:"8C8C8C" },
      { n:"S07", title:"ISA-95", desc:"Integración vertical · hoy.", color:"C6FF00" },
      { n:"S08", title:"RAMI 4.0", desc:"Arquitectura de referencia y AAS.", color:"27E5E5" },
      { n:"S09", title:"IIoT/Edge/Nube", desc:"Cierre de la Unidad 2.", color:"FFB000" },
    ], notes: "S08 amplía la vista con RAMI 4.0, que añade ciclo de vida y capas a la jerarquía de ISA-95." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "ISA-95 / IEC 62264", d: "Estándar de integración empresa-control." },
      { t: "Pirámide de automatización", d: "Niveles 0–4 de la arquitectura industrial." },
      { t: "PLC / DCS", d: "Controladores del nivel 1." },
      { t: "SCADA / HMI", d: "Supervisión y interfaz del nivel 2." },
      { t: "MES / MOM", d: "Ejecución y gestión de operaciones (nivel 3)." },
      { t: "B2MML", d: "Implementación XML de ISA-95." },
      { t: "Historiador", d: "Base de datos de series de tiempo del proceso." },
      { t: "UNS", d: "Unified Namespace: espacio de datos unificado." },
    ], notes: "Vocabulario de arquitectura de planta." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "ISA — Norma ISA-95 (comité, alcance y recursos)", url: "https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa95", acc: "libre" },
      { t: "ANSI/ISA-95 / IEC 62264 — texto normativo", url: "https://www.isa.org/", acc: "pago" },
      { t: "MESA International — modelos de MES/MOM (recursos)", url: "https://www.mesa.org/", acc: "libre" },
      { t: "OPC Foundation — mapeo ISA-95 ↔ OPC UA", url: "https://opcfoundation.org/", acc: "libre" },
      { t: "Unified Namespace — introducción (UMH Learn)", url: "https://learn.umh.app/lesson/chapter-2-the-rise-of-the-unified-namespace/", acc: "libre" },
      { t: "Scholten (2007) — The Road to Integration (aplicar ISA-95)", url: "https://www.isa.org/", acc: "pago" },
    ], notes: "Fuentes de ISA-95 y arquitectura de integración industrial." },

  { type: "closing", nextNum: 8, nextTitle: "RAMI 4.0 Y EL ASSET ADMINISTRATION SHELL", nextDesc: "El modelo de arquitectura de referencia de Industria 4.0 en tres ejes y el 'gemelo administrativo' del activo.", prompt: "root@planta:~# next --session 08 _",
    notes: "S08 añade a la jerarquía de ISA-95 los ejes de capas y ciclo de vida con RAMI 4.0." },
];
