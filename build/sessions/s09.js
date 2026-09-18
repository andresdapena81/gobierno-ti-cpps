// S09 — IIoT, computación en el borde y nube (cierre de la Unidad 2)
module.exports = [
  { type: "cover", title: "IIoT, EDGE\n& NUBE", subtitle: "La arquitectura de datos del sistema ciber-físico: del sensor a la nube",
    notes: "Cierre de la Unidad 2. El sustrato de cómputo y conectividad que da vida a ISA-95 y RAMI. Decisiones borde/nube como gobierno." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Arquitectura IIoT", desc: "Del sensor a la aplicación: la cadena de datos" },
    { title: "Edge, fog y cloud", desc: "Dónde procesar y por qué" },
    { title: "Plataformas industriales", desc: "Capacidades y dependencia de proveedor" },
    { title: "Gobierno nube-planta", desc: "Qué va dónde y quién lo decide" },
    { title: "Conectividad y seguridad", desc: "5G, TSN y protección del borde" },
    { title: "Cierre de la Unidad 2", desc: "Lab, síntesis y referencias" },
  ], notes: "De la arquitectura técnica a la decisión de gobierno sobre dónde vive el dato." },

  { type: "stats", sec: "IIoT", title: "El borde y la nube en cifras",
    bigstats: [ {n:"75 %",label:"DATOS PROCESADOS FUERA DEL DC (TENDENCIA)"},{n:"ms",label:"LATENCIA EDGE"},{n:"5",label:"CAPAS IIoT"},{n:"5G/TSN",label:"REDES DETERMINISTAS"} ],
    kvs: [ {k:"EDGE",v:"Cómputo cerca del proceso"},{k:"FOG",v:"Capa intermedia (gateway/planta)"},{k:"CLOUD",v:"Cómputo elástico centralizado"},{k:"CRITERIOS",v:"Latencia, ancho de banda, soberanía, costo"},{k:"DECISIÓN",v:"Qué se queda, qué sube"},{k:"RIESGO",v:"Vendor lock-in y soberanía del dato"} ],
    notes: "La tendencia es procesar más cerca del dato (edge). La decisión borde/nube es de gobierno, no solo técnica." },

  { type: "objectives", sec: "IIoT", title: "Objetivos de la sesión", items: [
    { lead: "Describir", rest: "la arquitectura IIoT de referencia del sensor a la aplicación." },
    { lead: "Distinguir", rest: "edge, fog y cloud y sus criterios de decisión." },
    { lead: "Evaluar", rest: "plataformas industriales y el riesgo de dependencia." },
    { lead: "Decidir", rest: "qué datos se procesan en el borde y cuáles en la nube." },
    { lead: "Relacionar", rest: "la arquitectura con la conectividad y la seguridad." },
  ], notes: "Objetivo central: gobernar la decisión de dónde vive el dato y el modelo." },

  // -------- SECCIÓN 1: ARQUITECTURA IIoT --------
  { type: "section", num: 1, title: "ARQUITECTURA IIoT DE REFERENCIA", sub: "La cadena de datos del sistema ciber-físico" },

  { type: "process", sec: "ARQUITECTURA", title: "Del sensor a la aplicación", cols: 5, steps: [
      { n:1, title:"Dispositivo", desc:"Sensores y actuadores.", color:"FF6B35" },
      { n:2, title:"Gateway", desc:"Traduce protocolos.", color:"FFB000" },
      { n:3, title:"Borde (edge)", desc:"Procesa cerca.", color:"22E06B" },
      { n:4, title:"Plataforma", desc:"Nube/planta.", color:"27E5E5" },
      { n:5, title:"Aplicación", desc:"Tableros, IA, ERP.", color:"C6FF00" },
    ], notes: "Las cinco capas del IIoT. El dato fluye de abajo (físico) a arriba (aplicación), procesándose en el camino." },

  { type: "grid", sec: "ARQUITECTURA", title: "Capa de dispositivo y conectividad", cols: 2, lead: "Donde el mundo físico se vuelve dato.",
    cards: [
      { tag: "SENSORES", desc: "Miden variables: temperatura, vibración, presión, caudal, energía, visión.", color: "FF6B35" },
      { tag: "ACTUADORES", desc: "Ejecutan acciones: válvulas, motores, relés. Cierran el lazo de control.", color: "FFB000" },
      { tag: "GATEWAY", desc: "Traduce protocolos OT (Modbus, PROFINET) a IT (MQTT, OPC UA) y agrega datos.", color: "22E06B" },
      { tag: "CONECTIVIDAD", desc: "Cableada (Ethernet industrial) o inalámbrica (Wi-Fi, 5G, LoRa).", color: "27E5E5" },
    ], notes: "El gateway es el traductor IT/OT. La elección de sensores y conectividad condiciona todo lo que sigue." },

  { type: "grid", sec: "ARQUITECTURA", title: "Capa de procesamiento y aplicación", cols: 2, lead: "Donde el dato se vuelve información y decisión.",
    cards: [
      { tag: "BORDE (EDGE)", desc: "Procesa localmente: filtrado, agregación, inferencia de modelos, control rápido.", color: "C6FF00" },
      { tag: "PLATAFORMA", desc: "Almacena, gestiona dispositivos, ejecuta analítica a escala (nube o planta).", color: "27E5E5" },
      { tag: "APLICACIONES", desc: "Tableros de OEE, mantenimiento predictivo, integración con ERP/MES.", color: "FFB000" },
      { tag: "ANALÍTICA / IA", desc: "Modelos que predicen, optimizan y detectan anomalías (S13).", color: "22E06B" },
    ], notes: "La capa de procesamiento se reparte entre borde y nube: esa repartición es la gran decisión de arquitectura." },

  { type: "matrix", sec: "ARQUITECTURA", title: "Qué pasa en cada capa", firstW: 3.0,
    cols: ["Capa", "Función", "Ejemplo"],
    rows: [
      ["Dispositivo", {t:"Sensar/actuar",color:"FF6B35"}, "Sensor de vibración"],
      ["Gateway", {t:"Traducir/agregar",color:"FFB000"}, "Modbus → MQTT"],
      ["Borde", {t:"Procesar local",color:"22E06B"}, "Detección de anomalía"],
      ["Plataforma", {t:"Escalar/almacenar",color:"27E5E5"}, "Historiador en nube"],
      ["Aplicación", {t:"Decidir/mostrar",color:"C6FF00"}, "Tablero de OEE"],
    ], notes: "Tabla síntesis de la arquitectura IIoT. Cada capa añade valor y también riesgo y costo." },

  { type: "grid", sec: "ARQUITECTURA", title: "IIoT frente a IoT de consumo", cols: 2, lead: "El IIoT tiene exigencias que el IoT doméstico no.",
    cards: [
      { tag: "FIABILIDAD", desc: "Debe operar 24/7 en ambientes duros (calor, polvo, vibración).", color: "C6FF00" },
      { tag: "DETERMINISMO", desc: "Latencia y sincronía predecibles para el control.", color: "27E5E5" },
      { tag: "LONGEVIDAD", desc: "Ciclos de vida de 10–20 años, no 2–3.", color: "FFB000" },
      { tag: "SEGURIDAD", desc: "Un fallo tiene consecuencias físicas, no solo de datos.", color: "FF3B30" },
    ], note: "El IIoT hereda las exigencias de OT: fiabilidad, determinismo, longevidad y seguridad física. No se puede tratar como IoT de consumo.",
    notes: "Recalcar: IIoT ≠ IoT de consumo. Las exigencias industriales cambian todas las decisiones de diseño." },

  { type: "callouts", sec: "ARQUITECTURA", title: "El dato es el nuevo producto de la planta",
    stats: [ {n:"VOLUMEN",label:"un solo activo genera miles de señales por segundo",color:"27E5E5"},{n:"VALOR",label:"el dato bien usado predice, optimiza y prueba cumplimiento",color:"C6FF00"},{n:"COSTO",label:"transmitir y almacenar todo a la nube es caro e innecesario",color:"FFB000"} ],
    note: { body: "El IIoT produce un torrente de datos. No todo debe subir a la nube: el gobierno decide qué se procesa en el borde (rápido y barato) y qué se envía a la nube (para analítica profunda). Enviar todo es un error de costo y de riesgo." },
    notes: "Introduce la decisión edge/cloud desde el ángulo del dato. No todo el dato tiene el mismo valor ni destino." },

  // -------- SECCIÓN 2: EDGE/FOG/CLOUD --------
  { type: "section", num: 2, title: "EDGE, FOG Y CLOUD", sub: "Dónde procesar y por qué" },

  { type: "concepts3", sec: "EDGE", title: "Tres lugares para el cómputo", items: [
      { k: "EDGE (BORDE)", desc: "Cómputo en o junto al dispositivo/máquina. Mínima latencia, opera sin red.", ex: "Gateway, PLC inteligente", color: "22E06B" },
      { k: "FOG (NIEBLA)", desc: "Capa intermedia a nivel de planta: agrega y coordina varios bordes.", ex: "Servidor de planta", color: "27E5E5" },
      { k: "CLOUD (NUBE)", desc: "Cómputo elástico y centralizado. Gran escala, pero con latencia y dependencia de red.", ex: "Plataforma en nube", color: "C6FF00" },
    ], note: "No es 'edge vs cloud': es un continuo. El cómputo se distribuye entre borde, niebla y nube según la necesidad de cada tarea.",
    notes: "El edge y la nube son complementarios, no rivales. La niebla (fog) es la capa de planta que los coordina." },

  { type: "grid", sec: "EDGE", title: "Los cinco criterios de decisión", cols: 3, lead: "Qué determina si una tarea va al borde o a la nube.",
    cards: [
      { tag: "LATENCIA", desc: "Control y seguridad exigen respuesta en ms → borde.", color: "22E06B" },
      { tag: "ANCHO DE BANDA", desc: "Datos masivos que no caben en la red → procesar en borde.", color: "27E5E5" },
      { tag: "SOBERANÍA", desc: "Datos sensibles que no deben salir de planta/país → borde/local.", color: "FF3B30" },
      { tag: "DISPONIBILIDAD", desc: "Debe operar sin conexión a internet → borde.", color: "FFB000" },
      { tag: "COSTO", desc: "Transmitir y almacenar todo en nube es caro → filtrar en borde.", color: "C6FF00" },
      { tag: "ESCALA / IA", desc: "Analítica pesada y entrenamiento de modelos → nube.", color: "9D6BFF" },
    ], notes: "Los cinco criterios (latencia, banda, soberanía, disponibilidad, costo) guían el reparto. La escala favorece la nube." },

  { type: "compare", sec: "EDGE", title: "Edge vs cloud — fortalezas",
    leftTitle: "Borde (edge)", leftItems: ["Latencia mínima (control)","Opera sin conexión","Menos datos transmitidos","Soberanía del dato","Respuesta en tiempo real"],
    rightTitle: "Nube (cloud)", rightItems: ["Cómputo elástico e ilimitado","Entrenamiento de modelos IA","Almacenamiento masivo barato","Vista consolidada de flota","Actualización centralizada"],
    leftColor: "22E06B", rightColor: "C6FF00",
    foot: "La arquitectura moderna es híbrida: inferir en el borde, entrenar en la nube.",
    notes: "Patrón dominante: entrenar modelos en la nube, ejecutarlos (inferir) en el borde. Lo mejor de ambos." },

  { type: "phase", sec: "EDGE", title: "IA en el borde (edge AI)", badge: "TENDENCIA 2024–2026",
    name: "Inferencia junto al proceso", what: "Los modelos de IA se entrenan en la nube (con datos históricos de la flota) pero se ejecutan en el borde (inferencia en tiempo real sobre el proceso). Así se detecta una anomalía en milisegundos sin depender de la red. Es la tendencia que hace viable el mantenimiento predictivo en planta.",
    leftTag: "PATRÓN", tools: "Entrenar en nube · inferir en borde", rightTag: "SE PROFUNDIZA EN", seen: "Analítica y predictivo (S13)",
    notes: "Edge AI es la tendencia que aterriza la analítica en planta. Entrenar en nube, inferir en borde." },

  { type: "matrix", sec: "EDGE", title: "Dónde poner cada tarea", firstW: 4.0,
    cols: ["Tarea", "Dónde", "Por qué"],
    rows: [
      ["Control de la máquina", {t:"Borde/PLC",color:"22E06B"}, "Latencia crítica"],
      ["Detección de anomalía", {t:"Borde",color:"22E06B"}, "Tiempo real"],
      ["Entrenamiento de modelos", {t:"Nube",color:"C6FF00"}, "Escala de cómputo"],
      ["Tablero de flota", {t:"Nube",color:"C6FF00"}, "Vista consolidada"],
    ], notes: "Regla práctica: lo urgente y sensible, al borde; lo pesado y consolidado, a la nube." },

  { type: "callouts", sec: "EDGE", title: "El error de 'todo a la nube'",
    stats: [ {n:"LATENCIA",label:"el control no puede esperar el viaje de ida y vuelta a la nube",color:"FF3B30"},{n:"DEPENDENCIA",label:"si cae internet, la planta no puede quedar ciega o detenida",color:"FFB000"},{n:"COSTO",label:"transmitir y almacenar todo dispara el gasto operativo",color:"27E5E5"} ],
    note: { body: "Enviar todo a la nube parece simple pero falla: el control necesita el borde, la operación no puede depender de internet y el costo se dispara. La nube es para lo que aporta escala, no para todo. El gobierno evita este error." },
    notes: "Advertir contra la moda 'cloud-first' aplicada a OT sin criterio. El borde no es opcional en producción." },

  // -------- SECCIÓN 3: PLATAFORMAS --------
  { type: "section", num: 3, title: "PLATAFORMAS INDUSTRIALES", sub: "Capacidades, elección y dependencia" },

  { type: "grid", sec: "PLATAFORMAS", title: "Qué hace una plataforma IIoT", cols: 3, lead: "Las capacidades típicas de una plataforma industrial.",
    cards: [
      { tag: "CONECTIVIDAD", desc: "Conectar y gestionar miles de dispositivos y protocolos.", color: "27E5E5" },
      { tag: "GESTIÓN DE DATOS", desc: "Ingesta, almacenamiento (series de tiempo) y contexto.", color: "C6FF00" },
      { tag: "ANALÍTICA", desc: "Motores de reglas, ML y visualización.", color: "FFB000" },
      { tag: "GESTIÓN DE DISPOSITIVOS", desc: "Aprovisionar, actualizar y monitorear el parque.", color: "22E06B" },
      { tag: "INTEGRACIÓN", desc: "APIs para conectar con ERP, MES y otras apps.", color: "9D6BFF" },
      { tag: "SEGURIDAD", desc: "Identidad, cifrado y control de acceso de dispositivos.", color: "FF3B30" },
    ], notes: "Las plataformas concentran conectividad, datos, analítica y seguridad. Elegir una es una decisión de arquitectura mayor." },

  { type: "grid", sec: "PLATAFORMAS", title: "Tipos de plataforma", cols: 3, lead: "El mercado ofrece distintos enfoques.",
    cards: [
      { tag: "NUBE HIPERESCALA", desc: "Plataformas IoT de grandes proveedores de nube. Potentes, riesgo de lock-in.", color: "27E5E5" },
      { tag: "ESPECIALISTA INDUSTRIAL", desc: "Proveedores enfocados en OT y manufactura.", color: "C6FF00" },
      { tag: "ABIERTA / OPEN SOURCE", desc: "Componentes abiertos (Node-RED, Grafana, brokers). Flexible, exige capacidad propia.", color: "FFB000" },
      { tag: "DEL FABRICANTE", desc: "Plataforma del fabricante de la maquinaria. Cómoda, fuerte dependencia.", color: "FF6B35" },
      { tag: "HÍBRIDA", desc: "Combinación: núcleo abierto + servicios de nube.", color: "22E06B" },
      { tag: "CRITERIO", desc: "La elección depende de estrategia, talento y apetito de dependencia.", color: "9D6BFF" },
    ], notes: "No hay plataforma 'mejor': depende del contexto. La abierta da control pero exige talento; la del fabricante es cómoda pero ata." },

  { type: "phase", sec: "PLATAFORMAS", title: "El riesgo de vendor lock-in", badge: "RIESGO CLAVE",
    name: "La cautividad de proveedor", what: "Adoptar una plataforma propietaria puede atar a la empresa por décadas: datos en formatos cerrados, integraciones específicas, costos crecientes y dificultad para cambiar. En OT, con ciclos de 15–20 años, el lock-in es un riesgo de gobierno mayor. Se mitiga con estándares abiertos (OPC UA, MQTT), portabilidad de datos y arquitecturas desacopladas.",
    leftTag: "MITIGACIÓN", tools: "Estándares abiertos · portabilidad · UNS", rightTag: "PRINCIPIO", seen: "Adquisición analizada (38500)",
    notes: "El lock-in es el riesgo #1 de las plataformas. La defensa: estándares abiertos y arquitecturas desacopladas (UNS, S11)." },

  { type: "grid", sec: "PLATAFORMAS", title: "Criterios para elegir plataforma", cols: 2, lead: "Qué evaluar antes de comprometerse.",
    cards: [
      { tag: "ESTÁNDARES", desc: "¿Soporta OPC UA, MQTT y formatos abiertos de datos?", color: "C6FF00" },
      { tag: "PORTABILIDAD", desc: "¿Puedo llevarme mis datos y modelos si cambio de proveedor?", color: "27E5E5" },
      { tag: "SOBERANÍA", desc: "¿Dónde se almacenan los datos? ¿Cumple la regulación?", color: "FF3B30" },
      { tag: "TCO", desc: "¿Cuál es el costo total a 10 años, no solo la licencia inicial?", color: "FFB000" },
    ], note: "Elegir plataforma es una decisión de adquisición (principio 3 de 38500) y de arquitectura (APO03): se analiza con business case, no por comodidad.",
    notes: "Los criterios de elección conectan con el gobierno: adquisición analizada y arquitectura. Base del taller." },

  { type: "matrix", sec: "PLATAFORMAS", title: "Herramientas abiertas del laboratorio", firstW: 3.4,
    cols: ["Herramienta", "Función", "Capa"],
    rows: [
      ["Mosquitto", {t:"Broker MQTT",color:"27E5E5"}, "Conectividad"],
      ["Node-RED", {t:"Orquestación de flujos",color:"C6FF00"}, "Borde/integración"],
      ["InfluxDB/Timescale", {t:"Series de tiempo",color:"FFB000"}, "Datos"],
      ["Grafana", {t:"Visualización",color:"22E06B"}, "Aplicación"],
    ], notes: "El laboratorio del curso usa una pila abierta que replica una plataforma IIoT sin lock-in. Se usa en S10-S11." },

  { type: "callouts", sec: "PLATAFORMAS", title: "Comprar capacidad, no dependencia",
    stats: [ {n:"ESTÁNDAR",label:"exigir OPC UA/MQTT y datos portables en cada compra",color:"C6FF00"},{n:"DESACOPLAR",label:"un UNS entre la planta y las apps reduce la dependencia",color:"27E5E5"},{n:"GOBERNAR",label:"la plataforma es una decisión estratégica de 10+ años",color:"FFB000"} ],
    note: { body: "El objetivo del gobierno no es evitar los proveedores, sino comprar capacidad sin quedar cautivo. Estándares abiertos, portabilidad de datos y arquitecturas desacopladas (UNS) mantienen la libertad de elegir a futuro." },
    notes: "Mensaje de gobierno sobre plataformas: capacidad sí, cautividad no. Estándares y desacople." },

  { type: "grid", sec: "PLATAFORMAS", title: "Modelos de servicio en la nube", cols: 3, lead: "Cuánto gestiona el proveedor y cuánto tú.",
    cards: [
      { tag: "IaaS", desc: "Infraestructura: tú gestionas casi todo. Máximo control.", color: "C6FF00" },
      { tag: "PaaS", desc: "Plataforma: el proveedor gestiona el entorno; tú, la app.", color: "27E5E5" },
      { tag: "SaaS", desc: "Software listo: mínimo esfuerzo, máxima dependencia.", color: "FFB000" },
      { tag: "IIoT PaaS", desc: "Plataformas industriales como servicio.", color: "22E06B" },
      { tag: "EDGE-AS-A-SERVICE", desc: "Gestión del borde desde la nube.", color: "9D6BFF" },
      { tag: "CRITERIO", desc: "A más servicio, menos esfuerzo pero más dependencia.", color: "FF6B35" },
    ], notes: "El modelo de servicio (IaaS/PaaS/SaaS) equilibra control y esfuerzo. Más 'as a service' = más comodidad y más lock-in." },

  // -------- SECCIÓN 4: GOBIERNO NUBE-PLANTA --------
  { type: "section", num: 4, title: "GOBIERNO DE LA ARQUITECTURA NUBE-PLANTA", sub: "Qué va dónde y quién lo decide" },

  { type: "phase", sec: "GOBIERNO", title: "La decisión de arquitectura como gobierno", badge: "APO03",
    name: "Qué se queda y qué sube", what: "Decidir qué datos y funciones viven en el borde, la planta o la nube es una decisión de arquitectura empresarial (APO03) con impacto de una década. Afecta latencia, costo, riesgo, soberanía y dependencia. No debe improvisarla un integrador: la gobierna un comité con principios de arquitectura claros.",
    leftTag: "DECIDE", tools: "Comité de arquitectura IT/OT · principios", rightTag: "IMPACTO", seen: "Costo, riesgo y agilidad a 10 años",
    notes: "La arquitectura nube-planta es gobierno (APO03). Requiere principios y un comité, no decisiones ad hoc." },

  { type: "grid", sec: "GOBIERNO", title: "Soberanía y residencia del dato", cols: 2, lead: "Dónde vive el dato tiene implicaciones legales y estratégicas.",
    cards: [
      { tag: "RESIDENCIA", desc: "En qué país/jurisdicción se almacena el dato (regulación aplicable).", color: "C6FF00" },
      { tag: "SOBERANÍA", desc: "Quién tiene jurisdicción legal sobre el dato, aunque esté en la nube.", color: "27E5E5" },
      { tag: "SENSIBILIDAD", desc: "Datos de proceso, recetas y calidad pueden ser secretos industriales.", color: "FF3B30" },
      { tag: "CUMPLIMIENTO", desc: "Ley 1581 (datos personales) y normas sectoriales aplican al dato en nube.", color: "FFB000" },
    ], note: "La soberanía del dato es una decisión de gobierno con dimensión legal: ciertos datos no deberían salir de la planta o del país. Se decide con el CISO y cumplimiento.",
    notes: "La soberanía del dato conecta arquitectura con cumplimiento (S15). Recetas y datos de proceso son secretos industriales." },

  { type: "grid", sec: "GOBIERNO", title: "Principios de arquitectura nube-planta", cols: 2, lead: "Reglas que un comité de arquitectura debería fijar.",
    cards: [
      { tag: "CONTROL EN EL BORDE", desc: "El control y la seguridad crítica no dependen de la nube.", color: "22E06B" },
      { tag: "DATO SENSIBLE LOCAL", desc: "Recetas y datos regulados no salen sin autorización.", color: "FF3B30" },
      { tag: "ESTÁNDARES ABIERTOS", desc: "OPC UA/MQTT y portabilidad para evitar lock-in.", color: "C6FF00" },
      { tag: "OPERACIÓN SIN RED", desc: "La planta sigue operando aunque caiga internet.", color: "FFB000" },
    ], note: "Estos principios de arquitectura son decisiones de gobierno (dirigir, en EDM). Dan reglas estables en vez de decisiones caso a caso.",
    notes: "Los principios de arquitectura son el mecanismo de gobierno (dirigir). El proyecto propondrá los suyos." },

  { type: "phase", sec: "GOBIERNO", title: "Quién aprueba qué cruza a la nube", badge: "DECISIÓN",
    name: "El flujo de aprobación", what: "Antes de enviar un flujo de datos a la nube o dar acceso remoto a un proveedor, debe haber una aprobación explícita: ¿qué dato? ¿a dónde? ¿con qué protección? ¿quién responde? Sin este control, cada área conecta su nube y se pierde la visión (y el control) del riesgo IT/OT.",
    leftTag: "PREGUNTAS", tools: "¿Qué dato, a dónde, con qué control?", rightTag: "RIESGO SI FALTA", seen: "Shadow cloud y fuga de datos",
    notes: "El 'shadow cloud' (cada área con su nube) es un riesgo real. El gobierno pone un flujo de aprobación claro." },

  { type: "matrix", sec: "GOBIERNO", title: "Reparto de responsabilidad (modelo)", firstW: 3.6,
    cols: ["Decisión", "Decide", "Consulta"],
    rows: [
      ["Qué va a la nube", {t:"Comité arquitectura",color:"C6FF00"}, "CISO, planta"],
      ["Acceso remoto proveedor", {t:"CISO",color:"FF3B30"}, "Planta, legal"],
      ["Residencia del dato", {t:"Legal/cumplimiento",color:"FFB000"}, "CIO"],
      ["Elección de plataforma", {t:"CIO/CTO",color:"27E5E5"}, "Comité TI"],
    ], notes: "Reparto de decisiones (liga a la matriz de derechos de decisión de S01). El proyecto lo adaptará." },

  { type: "callouts", sec: "GOBIERNO", title: "Arquitectura sin gobierno = deuda",
    stats: [ {n:"SHADOW",label:"cada área conecta su nube sin coordinación: caos y riesgo",color:"FF3B30"},{n:"LOCK-IN",label:"decisiones ad hoc que atan a la empresa por décadas",color:"FFB000"},{n:"GOBERNAR",label:"principios de arquitectura y aprobación evitan la deuda técnica",color:"C6FF00"} ],
    note: { body: "Una arquitectura nube-planta sin gobierno acumula deuda técnica, riesgo y dependencia. Con principios claros, un comité y un flujo de aprobación, la misma tecnología se vuelve un activo estratégico coherente." },
    notes: "Cierra la sección uniendo arquitectura y gobierno. Sin gobierno, la nube es deuda; con él, ventaja." },

  // -------- SECCIÓN 5: CONECTIVIDAD Y SEGURIDAD --------
  { type: "section", num: 5, title: "CONECTIVIDAD Y SEGURIDAD DEL BORDE", sub: "Redes deterministas y protección de la periferia" },

  { type: "grid", sec: "CONECTIVIDAD", title: "Tecnologías de conectividad", cols: 3, lead: "Cómo se conectan los dispositivos en planta.",
    cards: [
      { tag: "ETHERNET INDUSTRIAL", desc: "PROFINET, EtherNet/IP, EtherCAT: cableado determinista.", color: "C6FF00" },
      { tag: "TSN", desc: "Time-Sensitive Networking: Ethernet estándar con determinismo.", color: "27E5E5" },
      { tag: "5G PRIVADO", desc: "Red celular privada de baja latencia para planta.", color: "FFB000" },
      { tag: "WI-FI 6", desc: "Inalámbrico de alta capacidad para movilidad (AMR, tablets).", color: "22E06B" },
      { tag: "LPWAN", desc: "LoRa, NB-IoT: sensores de bajo consumo y largo alcance.", color: "9D6BFF" },
      { tag: "CRITERIO", desc: "Latencia, determinismo, movilidad y alcance definen la elección.", color: "FF6B35" },
    ], notes: "La conectividad determina qué es posible. TSN y 5G privado habilitan control inalámbrico determinista (tendencia)." },

  { type: "phase", sec: "CONECTIVIDAD", title: "5G y TSN — control determinista", badge: "TENDENCIA",
    name: "Tiempo real sobre red estándar", what: "TSN lleva determinismo (latencia y sincronía garantizadas) al Ethernet estándar; el 5G privado lo hace inalámbrico. Juntos permiten control en tiempo real sin cableado dedicado, habilitando líneas flexibles y móviles. Es una de las tendencias que más cambiará la arquitectura de planta en 2024–2026.",
    leftTag: "HABILITA", tools: "Control inalámbrico · líneas flexibles · AMR", rightTag: "CONSIDERAR", seen: "Nuevas superficies de ataque",
    notes: "TSN + 5G privado es un habilitador clave. Pero cada red inalámbrica nueva es una superficie de ataque nueva." },

  { type: "grid", sec: "CONECTIVIDAD", title: "Seguridad del borde", cols: 2, lead: "El borde amplía la superficie de ataque; hay que protegerlo.",
    cards: [
      { tag: "IDENTIDAD DE DISPOSITIVO", desc: "Cada dispositivo autenticado con certificado; nada anónimo.", color: "C6FF00" },
      { tag: "CIFRADO", desc: "Datos cifrados en tránsito (TLS) y en reposo.", color: "27E5E5" },
      { tag: "SEGMENTACIÓN", desc: "El borde en su zona; nada cruza sin control (modelo Purdue).", color: "FFB000" },
      { tag: "ACTUALIZACIÓN", desc: "Firmware actualizable de forma segura (reto en OT longevo).", color: "FF3B30" },
    ], note: "Cada dispositivo de borde es un punto de entrada potencial. La seguridad del borde (identidad, cifrado, segmentación) se diseña desde el inicio, no después (S14).",
    notes: "Anticipa S14. El borde se asegura desde el diseño: identidad, cifrado, segmentación y actualización." },

  { type: "grid", sec: "CONECTIVIDAD", title: "Costos ocultos de la nube", cols: 2, lead: "El OPEX que sorprende en la factura.",
    cards: [
      { tag: "EGRESO DE DATOS", desc: "Sacar datos de la nube cuesta; el ingreso suele ser gratis.", color: "FF3B30" },
      { tag: "ALMACENAMIENTO", desc: "Guardar todo el histórico crece sin límite si no se gestiona.", color: "FFB000" },
      { tag: "CÓMPUTO", desc: "Entrenar modelos y consultas pesadas se pagan por uso.", color: "27E5E5" },
      { tag: "OPTIMIZAR", desc: "Filtrar en el borde reduce egreso y almacenamiento.", color: "C6FF00" },
    ], note: "La nube parece barata al inicio pero su OPEX (egreso, almacenamiento, cómputo) puede dispararse. Procesar en el borde y gestionar la retención controla el costo. Es parte del gobierno del TCO (S05, S16).",
    notes: "Los costos ocultos de la nube son un punto ciego del business case. El borde y la retención los controlan." },

  { type: "phase", sec: "CONECTIVIDAD", title: "Lab 4 — arquitectura de referencia IIoT", badge: "SEGUIMIENTO",
    name: "Diseñar la arquitectura del proyecto", what: "Para el proyecto: 1) diseña la arquitectura IIoT de referencia (dispositivo→gateway→borde→plataforma→app). 2) Justifica qué se procesa en el borde y qué en la nube con los cinco criterios. 3) Marca los flujos que cruzan la frontera IT/OT y su control. Entregable: diagrama de arquitectura con decisiones justificadas.",
    leftTag: "FORMATO", tools: "Diagrama + tabla de decisiones edge/cloud", rightTag: "ALIMENTA", seen: "Entregable 2 (semana 13)",
    notes: "El Lab 4 produce la arquitectura IIoT del Entregable 2. Debe justificar el reparto borde/nube." },

  { type: "keypoints", sec: "CONECTIVIDAD", title: "Ideas para el proyecto", items: [
      { label: "Reparte con criterio", desc: "Usa los cinco criterios para decidir borde vs nube." },
      { label: "Control al borde", desc: "El control crítico nunca depende de la nube." },
      { label: "Evita el lock-in", desc: "Exige estándares abiertos y portabilidad." },
      { label: "Protege el borde", desc: "Identidad, cifrado y segmentación desde el inicio." },
      { label: "Gobierna el dato", desc: "Decide y aprueba qué cruza a la nube." },
    ], notes: "Orientaciones que conectan arquitectura IIoT con gobierno. Cierran la Unidad 2." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE DE LA UNIDAD 2", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Arquitectura IIoT", desc: "Dispositivo → gateway → borde → plataforma → app." },
      { label: "Edge/fog/cloud", desc: "Un continuo; se reparte con cinco criterios." },
      { label: "Plataformas", desc: "Elegir sin quedar cautivo: estándares abiertos." },
      { label: "Gobierno", desc: "Qué va dónde es una decisión APO03 con impacto de años." },
      { label: "Seguridad del borde", desc: "Se diseña desde el inicio, no después." },
    ], notes: "Repaso y cierre de la Unidad 2. Verificar los criterios edge/cloud." },

  { type: "process", sec: "CIERRE", title: "Cerramos la Unidad 2 — vamos a la 3", cols: 4, steps: [
      { n:"U2 ✓", title:"CPPS", desc:"S06–09 completada.", color:"22E06B" },
      { n:"S10", title:"OPC UA", desc:"Protocolos industriales.", color:"27E5E5" },
      { n:"S11", title:"MQTT / UNS", desc:"Pub/sub y namespace unificado.", color:"FFB000" },
      { n:"U3", title:"Integración IT/OT", desc:"S10–13.", color:"C6FF00" },
    ], notes: "La Unidad 3 aterriza la integración con protocolos concretos: OPC UA (S10) y MQTT (S11)." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "IIoT", d: "Internet Industrial de las Cosas." },
      { t: "Edge / borde", d: "Cómputo junto al proceso físico." },
      { t: "Fog / niebla", d: "Capa intermedia a nivel de planta." },
      { t: "Cloud / nube", d: "Cómputo elástico centralizado." },
      { t: "Gateway", d: "Traductor de protocolos IT/OT." },
      { t: "Vendor lock-in", d: "Dependencia cautiva de un proveedor." },
      { t: "Soberanía del dato", d: "Jurisdicción legal sobre los datos." },
      { t: "TSN / 5G privado", d: "Redes deterministas para control." },
    ], notes: "Vocabulario de arquitectura IIoT y cómputo distribuido." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "NIST SP 500-325 — Fog Computing Conceptual Model", url: "https://doi.org/10.6028/NIST.SP.500-325", acc: "libre" },
      { t: "Industrial Internet Consortium — Edge Computing / IIRA", url: "https://www.iiconsortium.org/iira/", acc: "libre" },
      { t: "IEEE 802.1 TSN — Time-Sensitive Networking", url: "https://1.ieee802.org/tsn/", acc: "libre" },
      { t: "5G-ACIA — 5G para la industria (whitepapers)", url: "https://5g-acia.org/", acc: "libre" },
      { t: "Shi et al. (2016) — Edge Computing: Vision and Challenges (IEEE)", url: "https://doi.org/10.1109/JIOT.2016.2579198", acc: "pago" },
      { t: "Docs del laboratorio: Mosquitto, Node-RED, InfluxDB, Grafana", url: "https://nodered.org/docs/", acc: "libre" },
    ], notes: "Fuentes de edge/fog/cloud y conectividad industrial." },

  { type: "closing", nextNum: 10, nextTitle: "OPC UA Y PROTOCOLOS INDUSTRIALES", nextDesc: "Inicio de la Unidad 3: el modelo de información de OPC UA, seguridad, PubSub y el panorama de protocolos industriales.", prompt: "root@planta:~# next --unit 3 --session 10 _",
    notes: "La Unidad 3 arranca con OPC UA, el estándar de interoperabilidad clave del CPPS." },
];
