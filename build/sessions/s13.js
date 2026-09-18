// S13 — Gobierno de datos industriales y analítica (OEE) — cierre de la Unidad 3
module.exports = [
  { type: "cover", title: "GOBIERNO DE\nDATOS & OEE", subtitle: "Del dato crudo al indicador que decide: calidad, propiedad y analítica",
    notes: "Cierre de la Unidad 3. El dato es el activo que sostiene gemelos, analítica e indicadores. Se recibe el Entregable 2." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "El dato como activo", desc: "Por qué el dato de planta necesita gobierno propio" },
    { title: "Calidad y roles", desc: "Dimensiones de calidad y gobierno de datos" },
    { title: "De la señal al indicador", desc: "OEE, MTBF, MTTR y las seis grandes pérdidas" },
    { title: "Analítica y predictivo", desc: "Detección de anomalías y por qué mueren los pilotos" },
    { title: "Ética y gobierno", desc: "Responsabilidad algorítmica; Lab 8 y Entregable 2" },
    { title: "Cierre", desc: "Síntesis y referencias" },
  ], notes: "Del gobierno del dato (por qué y cómo) al valor (indicadores y analítica) y a la ética." },

  { type: "stats", sec: "DATOS", title: "El dato de planta en cifras",
    bigstats: [ {n:"OEE",label:"INDICADOR REY"},{n:6,label:"GRANDES PÉRDIDAS"},{n:"APO14",label:"GESTIÓN DE DATOS"},{n:"GIGO",label:"CALIDAD MANDA"} ],
    kvs: [ {k:"ACTIVO",v:"El dato es un activo con valor y costo"},{k:"OBJETIVO",v:"APO14 (COBIT) · gobierno de datos"},{k:"MARCOS",v:"DAMA-DMBOK · DCAM"},{k:"ROLES",v:"Propietario · custodio · steward"},{k:"OEE",v:"Disponibilidad × Rendimiento × Calidad"},{k:"CIERRE",v:"Entregable 2 esta semana"} ],
    notes: "El OEE es el indicador rey de manufactura. Todo lo visto (gemelos, analítica) depende de datos gobernados (APO14)." },

  { type: "objectives", sec: "DATOS", title: "Objetivos de la sesión", items: [
    { lead: "Justificar", rest: "por qué el dato industrial exige gobierno propio (APO14)." },
    { lead: "Aplicar", rest: "las dimensiones de calidad y los roles de gobierno de datos." },
    { lead: "Calcular", rest: "e interpretar el OEE y las seis grandes pérdidas." },
    { lead: "Explicar", rest: "el mantenimiento predictivo y por qué los pilotos no escalan." },
    { lead: "Discutir", rest: "la ética y la responsabilidad algorítmica en producción." },
  ], notes: "Objetivo práctico: calcular OEE (Lab 8) y entender el gobierno del dato que lo sostiene." },

  // -------- SECCIÓN 1: DATO COMO ACTIVO --------
  { type: "section", num: 1, title: "EL DATO COMO ACTIVO", sub: "El recurso que crece solo y decide todo lo demás" },

  { type: "concepts3", sec: "ACTIVO", title: "El dato: activo o pasivo", items: [
      { k: "ACTIVO", desc: "Dato de calidad, gobernado y usado: predice, optimiza, prueba cumplimiento.", ex: "OEE confiable", color: "C6FF00" },
      { k: "PASIVO", desc: "Dato sin gobierno: cuesta almacenar, no se confía, genera riesgo y ruido.", ex: "Datos huérfanos", color: "FF3B30" },
      { k: "APO14", desc: "El objetivo de COBIT 2019 (nuevo) que gobierna el dato como activo empresarial.", ex: "Gestión de datos", color: "27E5E5" },
    ], note: "El mismo dato puede ser activo o pasivo según se gobierne. APO14, nuevo en COBIT 2019, reconoce el dato como un activo que exige gestión propia.",
    notes: "El dato solo es activo si se gobierna. APO14 (nuevo en 2019) formaliza el gobierno del dato en COBIT." },

  { type: "callouts", sec: "ACTIVO", title: "Garbage in, garbage out",
    stats: [ {n:"GIGO",label:"analítica y gemelos sobre datos malos producen decisiones malas",color:"FF3B30"},{n:"CONFIANZA",label:"si nadie confía en el dato, nadie lo usa para decidir",color:"FFB000"},{n:"CIMIENTO",label:"el gobierno del dato es el cimiento de todo el valor del CPPS",color:"C6FF00"} ],
    note: { body: "Todo lo visto —OPC UA, MQTT, gemelos, analítica— se apoya en el dato. Si el dato es malo, la inteligencia construida encima es peor: decide mal con apariencia de rigor. Por eso el gobierno del dato no es un lujo, es el cimiento." },
    notes: "GIGO es la ley del dato. El gobierno del dato es el cimiento de todo el valor construido en las unidades 2-3." },

  { type: "grid", sec: "ACTIVO", title: "Por qué el dato de planta es distinto", cols: 2, lead: "El dato industrial tiene retos que el dato de negocio no.",
    cards: [
      { tag: "VOLUMEN Y VELOCIDAD", desc: "Miles de señales por segundo, 24/7: alta frecuencia.", color: "27E5E5" },
      { tag: "SERIES DE TIEMPO", desc: "El tiempo y la calidad de la señal son parte del dato (OPC UA).", color: "C6FF00" },
      { tag: "CONTEXTO FÍSICO", desc: "Un valor sin contexto (qué máquina, qué lote) no significa nada.", color: "FFB000" },
      { tag: "CRITICIDAD", desc: "El dato erróneo puede causar decisiones con impacto físico.", color: "FF3B30" },
    ], note: "El dato de planta es de alta frecuencia, temporal, contextual y crítico. Gobernarlo exige herramientas y roles específicos, no los del dato transaccional.",
    notes: "El dato OT tiene características propias. Su gobierno requiere historiadores, semántica (S10) y roles específicos." },

  { type: "grid", sec: "ACTIVO", title: "Fuentes del dato en el CPPS", cols: 3, lead: "De dónde nace el dato que hay que gobernar.",
    cards: [
      { tag: "SENSORES", desc: "Señales de proceso: temperatura, vibración, energía.", color: "FF6B35" },
      { tag: "PLC / SCADA", desc: "Estados y comandos del control.", color: "FFB000" },
      { tag: "MES", desc: "Órdenes, tiempos, calidad, genealogía (S07).", color: "27E5E5" },
      { tag: "HISTORIADOR", desc: "Series de tiempo acumuladas.", color: "22E06B" },
      { tag: "CALIDAD / LABORATORIO", desc: "Resultados de inspección y ensayo.", color: "9D6BFF" },
      { tag: "ERP", desc: "Contexto de negocio: producto, cliente, costo.", color: "C6FF00" },
    ], notes: "El dato del CPPS viene de muchas fuentes. El UNS (S11) las unifica; el gobierno de datos les da calidad y significado." },

  { type: "phase", sec: "ACTIVO", title: "APO14 — gobernar el dato", badge: "COBIT 2019",
    name: "El dato como objeto de gobierno", what: "APO14 (Managed Data) es el objetivo de COBIT 2019 que gobierna el dato: define estrategia de datos, arquitectura, calidad, ciclo de vida, metadatos y seguridad del dato. Es la respuesta de gobierno a la avalancha de datos del CPPS. Sin APO14, cada área trata el dato a su manera y se pierde su valor.",
    leftTag: "CUBRE", tools: "Estrategia · calidad · ciclo de vida · metadatos", rightTag: "SE APOYA EN", seen: "DAMA-DMBOK, DCAM",
    notes: "APO14 es el ancla de gobierno del dato en COBIT. Se complementa con marcos especializados (DAMA-DMBOK)." },

  { type: "quote", sec: "ACTIVO", text: "Puedes tener el mejor gemelo y la mejor IA: si tus datos son basura, tus decisiones también.", cite: "Principio del gobierno de datos",
    notes: "Puente a la sección de calidad. El dato es el eslabón que determina todo lo demás." },

  { type: "grid", sec: "ACTIVO", title: "El ciclo de vida del dato", cols: 3, lead: "El dato se gobierna en todo su recorrido.",
    cards: [
      { tag: "CREAR / CAPTURAR", desc: "En origen, con calidad y semántica (OPC UA).", color: "C6FF00" },
      { tag: "ALMACENAR", desc: "Historiador, series de tiempo, data lake.", color: "27E5E5" },
      { tag: "USAR", desc: "Tableros, OEE, gemelos, analítica.", color: "FFB000" },
      { tag: "COMPARTIR", desc: "Vía UNS a los consumidores autorizados.", color: "22E06B" },
      { tag: "ARCHIVAR", desc: "Retención según valor y regulación.", color: "9D6BFF" },
      { tag: "ELIMINAR", desc: "Baja segura al final de la vida útil.", color: "FF6B35" },
    ], notes: "APO14 gobierna todo el ciclo del dato, no solo su captura. La retención y la eliminación segura son puntos ciegos frecuentes." },

  // -------- SECCIÓN 2: CALIDAD Y ROLES --------
  { type: "section", num: 2, title: "CALIDAD Y GOBIERNO DE DATOS", sub: "Dimensiones, linaje y responsabilidades" },

  { type: "grid", sec: "CALIDAD", title: "Dimensiones de calidad del dato", cols: 3, lead: "Qué hace 'bueno' a un dato.",
    cards: [
      { tag: "EXACTITUD", desc: "El dato representa correctamente la realidad.", color: "C6FF00" },
      { tag: "COMPLETITUD", desc: "No faltan valores necesarios.", color: "27E5E5" },
      { tag: "OPORTUNIDAD", desc: "Está disponible a tiempo para decidir.", color: "FFB000" },
      { tag: "CONSISTENCIA", desc: "No se contradice entre fuentes (ERP vs MES).", color: "22E06B" },
      { tag: "VALIDEZ", desc: "Cumple el formato y el rango esperado.", color: "9D6BFF" },
      { tag: "UNICIDAD", desc: "Sin duplicados que distorsionen el análisis.", color: "FF6B35" },
    ], notes: "Las dimensiones de calidad son medibles. Un programa de calidad de datos las monitorea con KPI, como cualquier proceso." },

  { type: "concepts3", sec: "CALIDAD", title: "Roles de gobierno de datos", items: [
      { k: "PROPIETARIO (OWNER)", desc: "Responsable del dato desde el negocio: define reglas y responde por su valor.", ex: "Dueño de proceso", color: "C6FF00" },
      { k: "ADMINISTRADOR (STEWARD)", desc: "Cuida la calidad y el significado del dato en el día a día.", ex: "Data steward", color: "27E5E5" },
      { k: "CUSTODIO (CUSTODIAN)", desc: "Responsable técnico del almacenamiento y la protección (TI).", ex: "DBA / TI", color: "FFB000" },
    ], note: "El dato necesita dueños claros: propietario (negocio), steward (calidad y significado) y custodio (técnico). Sin roles, el dato es de todos y de nadie.",
    notes: "Los tres roles de gobierno de datos (DAMA). El más olvidado es el steward, que cuida el significado y la calidad." },

  { type: "phase", sec: "CALIDAD", title: "Linaje del dato (data lineage)", badge: "TRAZABILIDAD",
    name: "De dónde viene y cómo se transformó", what: "El linaje rastrea el recorrido del dato: qué sensor lo generó, qué transformaciones sufrió, qué cálculos lo produjeron. Es esencial para confiar en un indicador (¿este OEE de dónde salió?), depurar errores y cumplir auditorías. En un CPPS con UNS y gemelos, el linaje es lo que hace el dato auditable.",
    leftTag: "PERMITE", tools: "Confiar · depurar · auditar", rightTag: "SIN ÉL", seen: "Indicadores en los que nadie confía",
    notes: "El linaje responde '¿de dónde salió este número?'. Sin él, los indicadores no se pueden auditar ni defender." },

  { type: "grid", sec: "CALIDAD", title: "Marcos de gobierno de datos", cols: 2, lead: "Referencias para estructurar el gobierno del dato.",
    cards: [
      { tag: "DAMA-DMBOK", desc: "Cuerpo de conocimiento con 11 áreas (calidad, arquitectura, metadatos…).", color: "C6FF00" },
      { tag: "DCAM", desc: "Modelo de capacidad de gestión de datos (EDM Council).", color: "27E5E5" },
      { tag: "COBIT APO14", desc: "El ancla de gobierno; se apoya en DAMA/DCAM para el detalle.", color: "FFB000" },
      { tag: "ISO 8000", desc: "Estándar de calidad de datos.", color: "22E06B" },
    ], note: "COBIT (APO14) gobierna; DAMA-DMBOK y DCAM dan el detalle operativo del gobierno de datos. Se combinan, como 38500 y COBIT.",
    notes: "El patrón de capas se repite: COBIT gobierna, DAMA/DCAM operacionalizan el gobierno de datos." },

  { type: "callouts", sec: "CALIDAD", title: "Calidad de datos: prevenir, no limpiar",
    stats: [ {n:"ORIGEN",label:"la calidad se asegura en la captura (semántica OPC UA), no después",color:"C6FF00"},{n:"COSTO",label:"limpiar datos malos aguas abajo es 10× más caro que capturarlos bien",color:"FFB000"},{n:"CULTURA",label:"la calidad del dato es responsabilidad de todos, no solo de TI",color:"27E5E5"} ],
    note: { body: "La calidad del dato se construye en el origen: buena instrumentación, semántica (S10) y validación en captura. Limpiar aguas abajo es caro e imperfecto. Y es cultural: quien genera el dato es responsable de su calidad, no solo quien lo consume." },
    notes: "Prevenir en origen es más barato que limpiar. La calidad del dato es cultural (componente de COBIT)." },

  { type: "matrix", sec: "CALIDAD", title: "Roles de datos en un CPPS", firstW: 3.4,
    cols: ["Rol", "Responsabilidad", "Ejemplo"],
    rows: [
      ["Propietario", {t:"Valor y reglas del dato",color:"C6FF00"}, "Jefe de producción"],
      ["Steward", {t:"Calidad y significado",color:"27E5E5"}, "Analista de datos"],
      ["Custodio", {t:"Almacenamiento y protección",color:"FFB000"}, "Equipo de TI"],
      ["Consumidor", {t:"Uso conforme a reglas",color:"22E06B"}, "Mantenimiento"],
    ], notes: "Cada dato debería tener estos roles asignados. El proyecto los definirá para sus datos clave (OEE, señales críticas)." },

  // -------- SECCIÓN 3: DE LA SEÑAL AL INDICADOR --------
  { type: "section", num: 3, title: "DE LA SEÑAL AL INDICADOR — OEE", sub: "El indicador rey de la manufactura" },

  { type: "matrix", sec: "OEE", title: "Cálculo de OEE — ejemplo", firstW: 4.6,
    cols: ["Factor", "Cálculo"],
    rows: [
      ["Disponibilidad", {t:"420 / 480 min = 87.5 %",color:"C6FF00"}],
      ["Rendimiento", {t:"5000 / 6000 uds = 83.3 %",color:"27E5E5"}],
      ["Calidad", {t:"4800 / 5000 uds = 96.0 %",color:"FFB000"}],
      ["OEE", {t:"0.875 × 0.833 × 0.960 = 70.0 %",color:"22E06B"}],
    ], notes: "Ejemplo numérico completo. Un OEE del 70 % está por debajo de la clase mundial (85 %); el factor a atacar aquí es el rendimiento." },

  // ---- marcador ----

  { type: "phase", sec: "OEE", title: "Qué es el OEE", badge: "EFICIENCIA GLOBAL DEL EQUIPO",
    name: "Un número que resume la planta", what: "El OEE mide qué tan bien se usa un equipo: OEE = Disponibilidad × Rendimiento × Calidad. Combina cuánto tiempo estuvo disponible, a qué velocidad produjo y cuánto salió bueno. Un OEE del 100% sería producir solo piezas buenas, a máxima velocidad, sin paradas. La referencia de 'clase mundial' ronda el 85%.",
    leftTag: "FÓRMULA", tools: "Disponibilidad × Rendimiento × Calidad", rightTag: "CLASE MUNDIAL", seen: "≈ 85 %",
    notes: "El OEE es el KPI universal de manufactura. Multiplica tres factores: un mal factor hunde el total." },

  { type: "grid", sec: "OEE", title: "Los tres factores del OEE", cols: 3, lead: "Cada factor captura un tipo de pérdida.",
    cards: [
      { tag: "DISPONIBILIDAD", desc: "Tiempo operando / tiempo planificado. Pérdidas por paradas y averías.", color: "C6FF00" },
      { tag: "RENDIMIENTO", desc: "Velocidad real / velocidad ideal. Pérdidas por micro-paradas y baja velocidad.", color: "27E5E5" },
      { tag: "CALIDAD", desc: "Piezas buenas / piezas totales. Pérdidas por defectos y reproceso.", color: "FFB000" },
    ], note: "OEE = D × R × C. Si cada factor es 90%, el OEE es 0,9³ ≈ 73%. Por eso mejorar el factor más bajo es lo más rentable.",
    notes: "El OEE es multiplicativo: tres factores 'buenos' (90%) dan un OEE mediocre (73%). Atacar el más bajo primero." },

  { type: "matrix", sec: "OEE", title: "Las seis grandes pérdidas", firstW: 4.6,
    cols: ["Pérdida", "Afecta a"],
    rows: [
      ["Averías / fallos", {t:"Disponibilidad",color:"C6FF00"}],
      ["Preparación y ajustes (setup)", {t:"Disponibilidad",color:"C6FF00"}],
      ["Micro-paradas", {t:"Rendimiento",color:"27E5E5"}],
      ["Velocidad reducida", {t:"Rendimiento",color:"27E5E5"}],
      ["Defectos y reproceso", {t:"Calidad",color:"FFB000"}],
      ["Pérdidas de arranque", {t:"Calidad",color:"FFB000"}],
    ], notes: "Las seis grandes pérdidas (TPM) se mapean a los tres factores del OEE. Identificarlas guía la mejora." },

  { type: "grid", sec: "OEE", title: "Otros indicadores clave", cols: 3, lead: "El OEE se acompaña de indicadores de mantenimiento y calidad.",
    cards: [
      { tag: "MTBF", desc: "Tiempo medio entre fallos: fiabilidad del equipo.", color: "C6FF00" },
      { tag: "MTTR", desc: "Tiempo medio de reparación: rapidez de respuesta.", color: "27E5E5" },
      { tag: "DISPONIBILIDAD", desc: "MTBF / (MTBF + MTTR): fórmula de disponibilidad.", color: "FFB000" },
      { tag: "FIRST-PASS YIELD", desc: "Piezas buenas a la primera, sin reproceso.", color: "22E06B" },
      { tag: "SCRAP RATE", desc: "Proporción de material desechado.", color: "FF3B30" },
      { tag: "CONSUMO ESPECÍFICO", desc: "Energía o material por unidad producida.", color: "9D6BFF" },
    ], notes: "MTBF/MTTR miden mantenimiento; FPY/scrap, calidad; consumo específico, eficiencia. Todos nacen del dato gobernado." },

  { type: "phase", sec: "OEE", title: "El indicador es tan bueno como su dato", badge: "GOBIERNO",
    name: "Un OEE en el que nadie confía", what: "Un OEE mal calculado (con paradas mal registradas, tiempos manuales, velocidad ideal inventada) es peor que no tenerlo: induce decisiones erróneas. La confianza en el indicador depende del gobierno del dato: captura automática, definiciones claras y linaje. Por eso el gobierno del dato (sección 1-2) precede al indicador.",
    leftTag: "REQUIERE", tools: "Captura automática · definiciones · linaje", rightTag: "RIESGO", seen: "Decidir sobre un OEE inflado",
    notes: "El OEE es tan confiable como su dato. Cierra el círculo: gobierno del dato → indicador confiable → buena decisión." },

  // -------- SECCIÓN 4: ANALÍTICA Y PREDICTIVO --------
  { type: "section", num: 4, title: "ANALÍTICA Y MANTENIMIENTO PREDICTIVO", sub: "De ver a predecir" },

  { type: "process", sec: "ANALÍTICA", title: "La escalera de la analítica", cols: 4, steps: [
      { n:1, title:"Descriptiva", desc:"¿Qué pasó? (tableros, OEE)", color:"C6FF00" },
      { n:2, title:"Diagnóstica", desc:"¿Por qué pasó?", color:"27E5E5" },
      { n:3, title:"Predictiva", desc:"¿Qué pasará?", color:"FFB000" },
      { n:4, title:"Prescriptiva", desc:"¿Qué hacer?", color:"22E06B" },
    ], notes: "La analítica sube de describir a prescribir. La mayoría de plantas están en descriptiva-diagnóstica; el predictivo es el salto de valor." },

  { type: "grid", sec: "ANALÍTICA", title: "Mantenimiento predictivo", cols: 2, lead: "Anticipar el fallo antes de que ocurra.",
    cards: [
      { tag: "DETECCIÓN DE ANOMALÍAS", desc: "Identificar comportamiento anormal antes de la falla.", color: "C6FF00" },
      { tag: "RUL", desc: "Remaining Useful Life: estimar la vida útil remanente de un activo.", color: "27E5E5" },
      { tag: "DATOS", desc: "Requiere sensórica (vibración, temperatura) y datos de fallas históricas.", color: "FFB000" },
      { tag: "VALOR", desc: "Menos paradas no planificadas y mantenimiento solo cuando se necesita.", color: "22E06B" },
    ], note: "El predictivo pasa del mantenimiento por calendario al mantenimiento por condición. Necesita datos de calidad y, a menudo, un gemelo (S12).",
    notes: "El predictivo (detección de anomalías, RUL) es el caso de uso estrella. Depende de datos y a veces de un gemelo." },

  { type: "callouts", sec: "ANALÍTICA", title: "Por qué mueren los pilotos de analítica",
    stats: [ {n:"DATOS",label:"la mayoría fracasa por datos insuficientes o de mala calidad",color:"FF3B30"},{n:"ESCALA",label:"funciona en un activo, no se logra replicar a la planta",color:"FFB000"},{n:"ADOPCIÓN",label:"el modelo funciona pero nadie cambia su forma de trabajar",color:"27E5E5"} ],
    note: { body: "Los pilotos de analítica industrial mueren, sobre todo, por tres razones: datos malos, falta de escalabilidad y falta de adopción. Ninguna es técnica del modelo: son de gobierno del dato, de arquitectura y de gestión del cambio. El gobierno decide si el piloto vive o muere." },
    notes: "El fracaso del piloto es de gobierno, no de algoritmo. Datos, escala y adopción. Conecta con S05 (piloto zombi) y S16." },

  { type: "grid", sec: "ANALÍTICA", title: "IA en planta — con los pies en la tierra", cols: 2, lead: "La analítica avanzada exige realismo.",
    cards: [
      { tag: "EMPEZAR SIMPLE", desc: "Reglas y umbrales antes que redes neuronales.", color: "C6FF00" },
      { tag: "EXPLICABILIDAD", desc: "En OT, entender por qué el modelo decide importa (seguridad).", color: "27E5E5" },
      { tag: "HUMANO EN EL LAZO", desc: "El modelo asiste; el humano decide en lo crítico.", color: "FFB000" },
      { tag: "MANTENIMIENTO DEL MODELO", desc: "Los modelos también se desvían (como el gemelo, S12).", color: "FF3B30" },
    ], note: "En planta, la IA útil suele ser la simple, explicable y con humano en el lazo. La sofisticación sin gobierno del dato ni adopción no crea valor.",
    notes: "Realismo sobre la IA en planta: simple, explicable, supervisada, mantenida. La sofisticación no garantiza valor." },

  { type: "grid", sec: "ANALÍTICA", title: "El pipeline de datos a valor", cols: 3, lead: "Cómo el dato se convierte en decisión.",
    cards: [
      { tag: "CAPTURA", desc: "Sensórica y OPC UA con semántica (S10).", color: "27E5E5" },
      { tag: "TRANSPORTE", desc: "MQTT/UNS hacia consumidores (S11).", color: "C6FF00" },
      { tag: "ALMACÉN", desc: "Series de tiempo e histórico.", color: "FFB000" },
      { tag: "PROCESO", desc: "Limpieza, contexto y cálculo de indicadores.", color: "22E06B" },
      { tag: "MODELO", desc: "Analítica, gemelo, predicción.", color: "9D6BFF" },
      { tag: "DECISIÓN", desc: "Acción humana o automática gobernada.", color: "FF6B35" },
    ], notes: "El pipeline completo integra las sesiones S10–S13. Cada eslabón debe gobernarse para que la decisión final sea confiable." },

  // -------- SECCIÓN 5: ÉTICA Y ENTREGABLE --------
  { type: "section", num: 5, title: "ÉTICA, LAB Y ENTREGABLE 2", sub: "Responsabilidad algorítmica y cierre de la Unidad 3" },

  { type: "grid", sec: "ÉTICA", title: "Ética del dato y del algoritmo", cols: 2, lead: "Decidir con datos y modelos tiene dimensión ética.",
    cards: [
      { tag: "RESPONSABILIDAD", desc: "Una decisión algorítmica sigue teniendo un responsable humano.", color: "C6FF00" },
      { tag: "SESGO", desc: "Modelos entrenados con datos sesgados perpetúan el sesgo.", color: "FF3B30" },
      { tag: "TRANSPARENCIA", desc: "Poder explicar por qué el sistema decidió (sobre todo si afecta personas).", color: "27E5E5" },
      { tag: "PRIVACIDAD", desc: "Datos de operarios y de proceso: Ley 1581 y secreto industrial.", color: "FFB000" },
    ], note: "La analítica en producción no es neutral: sus decisiones afectan a personas (operarios) y bienes. La responsabilidad, el sesgo, la transparencia y la privacidad son parte del gobierno del dato.",
    notes: "La ética del dato conecta con el principio 6 de 38500 (comportamiento humano) y con cumplimiento (S15)." },

  { type: "phase", sec: "ÉTICA", title: "Lab 8 — calcular e interpretar OEE", badge: "SEGUIMIENTO",
    name: "El OEE del proyecto", what: "Con un conjunto de datos de producción (real o simulado): 1) calcula disponibilidad, rendimiento y calidad. 2) Obtén el OEE y compáralo con la clase mundial. 3) Identifica cuál de las seis grandes pérdidas domina. 4) Propón una mejora y estima su impacto en el OEE. Entregable: cálculo documentado + interpretación.",
    leftTag: "HERRAMIENTAS", tools: "Datos de producción · hoja de cálculo/Python", rightTag: "ENTREGABLE", seen: "Cálculo + interpretación + mejora",
    notes: "El Lab 8 hace tangible el OEE. Interpretar (qué pérdida domina) importa más que el número. Guía en el PDF." },

  { type: "phase", sec: "ÉTICA", title: "Entregable 2 — cierre", badge: "EVALUACIÓN · 15 %",
    name: "Arquitectura ciber-física e integración de datos", what: "Se recibe esta semana. Integra: arquitectura de referencia (ISA-95 + RAMI, S07-08), diseño de integración (protocolos, UNS, S10-11), especificación del gemelo (S12), modelo y tablero de datos con OEE (hoy) y evidencia de los laboratorios 5-8. Cierra la Unidad 3.",
    leftTag: "COMPONENTES", tools: "Arquitectura · integración · gemelo · datos · labs", rightTag: "SE INTEGRA EN", seen: "Documento final del proyecto",
    notes: "El Entregable 2 consolida las Unidades 2 y 3. Revisar la rúbrica. Se integra en el proyecto final." },

  { type: "grid", sec: "ÉTICA", title: "Privacidad del dato en planta", cols: 2, lead: "No todo el dato de planta es 'solo técnico'.",
    cards: [
      { tag: "DATOS DE OPERARIOS", desc: "Productividad individual, ubicación, biometría: son datos personales (Ley 1581).", color: "FF3B30" },
      { tag: "SECRETO INDUSTRIAL", desc: "Recetas, parámetros y know-how: activos que proteger.", color: "C6FF00" },
      { tag: "CONSENTIMIENTO", desc: "Monitorear personas exige base legal y transparencia.", color: "27E5E5" },
      { tag: "MINIMIZACIÓN", desc: "Recolectar solo el dato necesario para el fin.", color: "FFB000" },
    ], note: "El dato de planta incluye datos personales (de operarios) y secretos industriales. Su tratamiento debe cumplir la Ley 1581 y proteger el know-how. La privacidad es parte del gobierno del dato.",
    notes: "La privacidad aplica también en planta. Monitorear operarios tiene implicaciones legales (S15). Enlaza con la ética." },

  { type: "keypoints", sec: "ÉTICA", title: "Ideas para el proyecto", items: [
      { label: "Gobierna el dato", desc: "Define propietario, steward y calidad de tus datos clave." },
      { label: "Asegura el linaje", desc: "Que cada indicador sea trazable a su origen." },
      { label: "Calcula el OEE", desc: "Con datos confiables; interpreta las pérdidas." },
      { label: "Sé realista con la IA", desc: "Simple, explicable y con humano en el lazo." },
      { label: "Piensa la ética", desc: "Responsabilidad, sesgo, transparencia, privacidad." },
    ], notes: "Orientaciones que cierran la Unidad 3 integrando dato, indicador, analítica y ética." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE DE LA UNIDAD 3", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Dato = activo", desc: "Solo si se gobierna (APO14); si no, es pasivo." },
      { label: "Calidad y roles", desc: "Dimensiones medibles; propietario, steward, custodio." },
      { label: "OEE", desc: "Disponibilidad × Rendimiento × Calidad; seis grandes pérdidas." },
      { label: "Predictivo", desc: "Anticipar el fallo; los pilotos mueren por gobierno, no por IA." },
      { label: "Ética", desc: "Responsabilidad, sesgo, transparencia, privacidad." },
    ], notes: "Repaso y cierre de la Unidad 3. Verificar la fórmula del OEE y los roles de datos." },

  { type: "process", sec: "CIERRE", title: "Cerramos la U3 — vamos a la 4", cols: 4, steps: [
      { n:"U3 ✓", title:"Integración IT/OT", desc:"S10–13 completada.", color:"22E06B" },
      { n:"S14", title:"Ciber OT I", desc:"Amenazas y arquitectura.", color:"27E5E5" },
      { n:"S15", title:"Ciber OT II", desc:"Riesgo, cumplimiento, continuidad.", color:"FFB000" },
      { n:"S16", title:"Caso de negocio", desc:"Hoja de ruta · cierre.", color:"C6FF00" },
    ], notes: "La Unidad 4 protege todo lo construido: ciberseguridad OT, riesgo, continuidad y el caso de negocio." },

  { type: "grid", sec: "CIERRE", title: "Madurez del gobierno de datos", cols: 2, lead: "Cómo evoluciona una organización.",
    cards: [
      { tag: "REACTIVO", desc: "El dato se arregla cuando falla; sin roles ni calidad.", color: "FF3B30" },
      { tag: "GESTIONADO", desc: "Roles definidos, calidad medida, algunos estándares.", color: "FFB000" },
      { tag: "GOBERNADO", desc: "Políticas, linaje, calidad monitoreada, dueños claros.", color: "27E5E5" },
      { tag: "OPTIMIZADO", desc: "El dato como activo estratégico; mejora continua.", color: "C6FF00" },
    ], note: "La mayoría de las plantas están en 'reactivo' o 'gestionado'. Subir un nivel de madurez de datos suele rendir más que comprar más tecnología.",
    notes: "La madurez de datos es análoga a la de gobierno (COBIT). El proyecto puede ubicar a su empresa en esta escala." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "APO14", d: "Objetivo COBIT de gestión de datos." },
      { t: "Gobierno de datos", d: "Decisiones sobre el dato como activo." },
      { t: "Data steward", d: "Responsable de la calidad y el significado del dato." },
      { t: "Linaje", d: "Trazabilidad del origen y transformación del dato." },
      { t: "OEE", d: "Disponibilidad × Rendimiento × Calidad." },
      { t: "MTBF / MTTR", d: "Tiempo entre fallos / de reparación." },
      { t: "RUL", d: "Remaining Useful Life: vida útil remanente." },
      { t: "Analítica prescriptiva", d: "¿Qué hacer? El nivel más alto." },
    ], notes: "Vocabulario de gobierno de datos y analítica industrial." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "ISACA — COBIT 2019 APO14 (gestión de datos)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "EDM Council — DCAM (modelo de madurez de datos)", url: "https://edmcouncil.org/frameworks/dcam/", acc: "libre" },
      { t: "OEE.com — cálculo e interpretación del OEE (TPM, abierto)", url: "https://www.oee.com/", acc: "libre" },
      { t: "Ley 1581 de 2012 — protección de datos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html", acc: "libre" },
      { t: "DAMA International — DMBOK (cuerpo de conocimiento)", url: "https://www.dama.org/cpages/body-of-knowledge", acc: "pago" },
      { t: "ISO 22400 — KPI de operaciones de manufactura (norma)", url: "https://www.iso.org/", acc: "pago" },
    ], notes: "Fuentes de gobierno de datos, OEE y analítica industrial." },

  { type: "closing", nextNum: 14, nextTitle: "CIBERSEGURIDAD INDUSTRIAL I", nextDesc: "Inicio de la Unidad 4: amenazas OT, incidentes reales, modelo Purdue e IEC 62443.", prompt: "root@planta:~# next --unit 4 --session 14 _",
    notes: "La Unidad 4 protege el CPPS. Recordar entregar el Entregable 2." },
];
