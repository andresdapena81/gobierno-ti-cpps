// S11 — MQTT, Sparkplug B y el Unified Namespace
module.exports = [
  { type: "cover", title: "MQTT & EL\nUNIFIED NAMESPACE", subtitle: "Publicación/suscripción ligera y una única fuente de verdad para la planta",
    notes: "Complemento de OPC UA. MQTT y el UNS son la arquitectura de datos moderna del CPPS. Laboratorio de cadena de datos completa." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "MQTT", desc: "Publicación/suscripción: tópicos, QoS, retención" },
    { title: "Sparkplug B", desc: "Por qué MQTT crudo no basta en industria" },
    { title: "El Unified Namespace", desc: "Una única fuente de verdad en tiempo real" },
    { title: "OPC UA vs MQTT", desc: "Cuándo cada uno, cuándo ambos" },
    { title: "Laboratorio", desc: "Cadena de datos: sensor → tablero" },
    { title: "Cierre", desc: "Gobierno del namespace y referencias" },
  ], notes: "De MQTT (transporte) a Sparkplug (estructura) y al UNS (arquitectura). Sesión técnica con laboratorio." },

  { type: "stats", sec: "MQTT", title: "MQTT y el UNS en cifras",
    bigstats: [ {n:"pub/sub",label:"PATRÓN"},{n:3,label:"NIVELES QoS"},{n:"B",label:"SPARKPLUG"},{n:"UNS",label:"FUENTE DE VERDAD"} ],
    kvs: [ {k:"MQTT",v:"Message Queuing Telemetry Transport"},{k:"NORMA",v:"OASIS / ISO 20922"},{k:"BROKER",v:"Intermediario pub/sub (Mosquitto, EMQX)"},{k:"SPARKPLUG",v:"Especificación de Eclipse/Cirrus Link"},{k:"UNS",v:"Unified Namespace (Walker, 2020)"},{k:"SEMÁNTICA",v:"Jerarquía ISA-95 como estructura"} ],
    notes: "MQTT es el transporte ligero; Sparkplug le da estructura; el UNS es la arquitectura. Los tres van juntos." },

  { type: "objectives", sec: "MQTT", title: "Objetivos de la sesión", items: [
    { lead: "Explicar", rest: "el patrón publicación/suscripción de MQTT y sus parámetros." },
    { lead: "Justificar", rest: "por qué se necesita Sparkplug B sobre MQTT crudo." },
    { lead: "Diseñar", rest: "la jerarquía semántica de un Unified Namespace." },
    { lead: "Comparar", rest: "OPC UA y MQTT y decidir cuándo usar cada uno." },
    { lead: "Construir", rest: "una cadena de datos completa en el laboratorio." },
  ], notes: "Objetivo práctico: montar un flujo de datos y entender el UNS como arquitectura de gobierno del dato." },

  // -------- SECCIÓN 1: MQTT --------
  { type: "section", num: 1, title: "MQTT — PUBLICACIÓN Y SUSCRIPCIÓN", sub: "El protocolo ligero de telemetría" },

  { type: "concepts3", sec: "MQTT", title: "El patrón pub/sub", items: [
      { k: "PUBLICADOR", desc: "Envía mensajes a un tópico. No sabe quién los recibe.", ex: "Un sensor de temperatura", color: "C6FF00" },
      { k: "BROKER", desc: "Intermediario que recibe publicaciones y las reparte a los suscriptores.", ex: "Mosquitto, EMQX", color: "27E5E5" },
      { k: "SUSCRIPTOR", desc: "Se suscribe a tópicos y recibe los mensajes. No sabe quién publica.", ex: "Un tablero, una IA", color: "FFB000" },
    ], note: "El pub/sub DESACOPLA: publicadores y suscriptores no se conocen; solo comparten el broker y los tópicos. Añadir un consumidor nuevo no toca a los productores.",
    notes: "El desacople es la clave de MQTT: se añaden productores y consumidores sin modificar a los demás. Base del UNS." },

  { type: "grid", sec: "MQTT", title: "Jerarquía de tópicos", cols: 2, lead: "Los mensajes se organizan en tópicos jerárquicos.",
    cards: [
      { tag: "ESTRUCTURA", desc: "Niveles separados por '/': planta1/linea3/llenadora/temperatura.", color: "C6FF00" },
      { tag: "COMODINES", desc: "'+' un nivel, '#' varios: planta1/linea3/# recibe todo de esa línea.", color: "27E5E5" },
      { tag: "SEMÁNTICA", desc: "Una buena jerarquía de tópicos ES un modelo del proceso.", color: "FFB000" },
      { tag: "GOBIERNO", desc: "Definir la jerarquía es una decisión de arquitectura (base del UNS).", color: "22E06B" },
    ], note: "La jerarquía de tópicos no es un detalle técnico: es el modelo semántico de la planta. Diseñarla bien es la base del Unified Namespace.",
    notes: "La jerarquía de tópicos es semántica. Un buen diseño (ISA-95 como guía) es el corazón del UNS." },

  { type: "grid", sec: "MQTT", title: "Parámetros clave de MQTT", cols: 3, lead: "Los mecanismos que dan robustez al protocolo.",
    cards: [
      { tag: "QoS 0", desc: "'A lo sumo una vez': sin garantía. Ligero.", color: "22E06B" },
      { tag: "QoS 1", desc: "'Al menos una vez': puede duplicar. Confiable.", color: "FFB000" },
      { tag: "QoS 2", desc: "'Exactamente una vez': sin duplicados. Más costoso.", color: "27E5E5" },
      { tag: "RETAIN", desc: "El broker guarda el último mensaje de un tópico para nuevos suscriptores.", color: "C6FF00" },
      { tag: "LAST WILL", desc: "Mensaje que el broker publica si un cliente se desconecta abruptamente.", color: "FF6B35" },
      { tag: "KEEP ALIVE", desc: "Latido para detectar clientes caídos.", color: "9D6BFF" },
    ], notes: "QoS, retain y last will dan robustez. Sparkplug (sección 2) usa last will para detectar dispositivos caídos." },

  { type: "grid", sec: "MQTT", title: "Por qué MQTT en la planta", cols: 2, lead: "Ventajas que lo hicieron el estándar de telemetría IIoT.",
    cards: [
      { tag: "LIGERO", desc: "Mínima sobrecarga: apto para dispositivos con pocos recursos y redes pobres.", color: "C6FF00" },
      { tag: "ESCALABLE", desc: "Un broker maneja miles de dispositivos publicando en paralelo.", color: "27E5E5" },
      { tag: "DESACOPLADO", desc: "Añadir consumidores (IA, tableros, ERP) sin tocar los productores.", color: "FFB000" },
      { tag: "SEGURO", desc: "TLS para cifrado y autenticación por cliente.", color: "22E06B" },
    ], note: "MQTT es ligero, escalable y desacoplado: ideal para llevar el torrente de datos de planta a la nube y a las aplicaciones.",
    notes: "MQTT domina la telemetría IIoT por ligero y desacoplado. Complementa a OPC UA (semántica/máquina)." },

  { type: "callouts", sec: "MQTT", title: "El límite de MQTT crudo",
    stats: [ {n:"SIN TIPO",label:"MQTT transporta bytes: no dice si '72' es °C o PSI",color:"FF3B30"},{n:"SIN ESTADO",label:"un suscriptor nuevo no sabe qué dispositivos existen ni su estado",color:"FFB000"},{n:"SIN ORDEN",label:"cada quien inventa su formato de payload: caos semántico",color:"27E5E5"} ],
    note: { body: "MQTT resuelve el transporte, pero no la semántica ni la gestión de estado. Sin una capa encima, cada integración inventa su formato y su jerarquía: se recrea el caos que OPC UA vino a resolver. Ahí entra Sparkplug B." },
    notes: "MQTT crudo carece de tipo, estado y orden. Sparkplug B (sección 2) añade esa estructura." },

  { type: "grid", sec: "MQTT", title: "Robustez del broker en producción", cols: 2, lead: "El broker es el corazón; debe ser confiable.",
    cards: [
      { tag: "ALTA DISPONIBILIDAD", desc: "Clúster de brokers: si uno cae, otro sigue. El UNS no puede detenerse.", color: "C6FF00" },
      { tag: "PERSISTENCIA", desc: "Mensajes retenidos y sesiones persistentes sobreviven reinicios.", color: "27E5E5" },
      { tag: "AUTENTICACIÓN", desc: "TLS mutuo y credenciales por cliente; nada anónimo en producción.", color: "FF3B30" },
      { tag: "ESCALA", desc: "Brokers industriales (EMQX, HiveMQ) manejan millones de conexiones.", color: "FFB000" },
    ], note: "Si el broker es la fuente de verdad (UNS), su disponibilidad es crítica: se despliega en clúster y con seguridad fuerte, como cualquier sistema de misión crítica.",
    notes: "El broker del UNS es infraestructura crítica: alta disponibilidad y seguridad. Su caída ciega a la empresa." },

  // -------- SECCIÓN 2: SPARKPLUG B --------
  { type: "section", num: 2, title: "SPARKPLUG B", sub: "MQTT con estructura, estado y tipado industrial" },

  { type: "concepts3", sec: "SPARKPLUG", title: "Qué añade Sparkplug B", items: [
      { k: "ESTRUCTURA", desc: "Define una jerarquía de tópicos estándar (grupo/nodo/dispositivo) y tipos de mensaje.", ex: "Namespace estándar", color: "C6FF00" },
      { k: "ESTADO", desc: "Mensajes de nacimiento (BIRTH) y muerte (DEATH): se sabe qué está vivo.", ex: "BIRTH/DEATH", color: "27E5E5" },
      { k: "TIPADO", desc: "Payload con tipos de dato y metadatos: '72' es un Float en °C.", ex: "Payload tipado", color: "FFB000" },
    ], note: "Sparkplug B es una especificación sobre MQTT que le da lo que le falta a la industria: estructura, gestión de estado (BIRTH/DEATH) y payload tipado. Convierte MQTT en apto para OT.",
    notes: "Sparkplug B = MQTT + estructura + estado + tipos. Usa el 'last will' de MQTT para el mensaje DEATH." },

  { type: "grid", sec: "SPARKPLUG", title: "El ciclo BIRTH / DEATH", cols: 2, lead: "Cómo Sparkplug sabe qué dispositivos están vivos.",
    cards: [
      { tag: "NBIRTH / DBIRTH", desc: "Al conectarse, el nodo/dispositivo publica su nacimiento con todas sus métricas y tipos.", color: "22E06B" },
      { tag: "NDATA / DDATA", desc: "En operación, publica solo los cambios (report by exception): eficiente.", color: "C6FF00" },
      { tag: "NDEATH / DDEATH", desc: "Si se desconecta, el broker publica su muerte (vía last will).", color: "FF3B30" },
      { tag: "STATE", desc: "El estado de la infraestructura (primary host) también se rastrea.", color: "27E5E5" },
    ], note: "El ciclo BIRTH/DEATH resuelve el problema de estado: cualquier consumidor sabe, en todo momento, qué dispositivos existen, qué métricas ofrecen y si están vivos.",
    notes: "BIRTH declara todo; DATA reporta cambios; DEATH avisa la caída. Report-by-exception ahorra ancho de banda." },

  { type: "phase", sec: "SPARKPLUG", title: "Report by exception", badge: "EFICIENCIA",
    name: "Publicar solo lo que cambia", what: "Tras el BIRTH (que declara todas las métricas), el dispositivo solo publica cuando un valor cambia (DATA). Esto reduce drásticamente el tráfico frente a sondear todo constantemente. Un consumidor nuevo obtiene el estado completo del último BIRTH retenido, sin necesidad de preguntar a cada dispositivo.",
    leftTag: "BENEFICIO", tools: "Menos tráfico · estado siempre disponible", rightTag: "CONTRASTE", seen: "Polling: preguntar todo, siempre",
    notes: "Report-by-exception + BIRTH retenido = eficiencia y estado completo. Ventaja clave sobre el sondeo tradicional." },

  { type: "grid", sec: "SPARKPLUG", title: "Sparkplug B y la interoperabilidad", cols: 2, lead: "Estandarizar el 'cómo' habilita el plug-and-play.",
    cards: [
      { tag: "FORMATO COMÚN", desc: "Todos los dispositivos hablan igual: mismo namespace, mismo payload.", color: "C6FF00" },
      { tag: "AUTO-DESCUBRIMIENTO", desc: "El BIRTH declara las métricas: los consumidores las descubren solos.", color: "27E5E5" },
      { tag: "MENOS INTEGRACIÓN", desc: "Conectar un dispositivo nuevo no exige programar su formato a medida.", color: "FFB000" },
      { tag: "ECOSISTEMA", desc: "Soportado por brokers, historiadores y plataformas del mercado.", color: "22E06B" },
    ], note: "Sparkplug B lleva a MQTT la interoperabilidad semántica que OPC UA tiene por diseño. Ambos convergen en el mismo objetivo: dato con significado y descubrible.",
    notes: "Sparkplug acerca MQTT a la interoperabilidad de OPC UA. Ambos buscan dato descubrible con significado." },

  { type: "callouts", sec: "SPARKPLUG", title: "MQTT crudo vs Sparkplug B",
    stats: [ {n:"CRUDO",label:"flexible pero cada integración inventa su formato y jerarquía",color:"FFB000"},{n:"SPARKPLUG",label:"estructura, estado y tipos estándar: interoperable y gobernable",color:"C6FF00"},{n:"DECISIÓN",label:"para telemetría OT seria, Sparkplug evita el caos semántico",color:"27E5E5"} ],
    note: { body: "MQTT crudo sirve para prototipos; Sparkplug B para producción industrial seria. La estructura estándar convierte un flujo de bytes en información gobernable. Adoptarlo es una decisión de arquitectura de datos." },
    notes: "Regla: prototipo con MQTT crudo, producción con Sparkplug B. La estructura es lo que hace el dato gobernable." },

  { type: "matrix", sec: "SPARKPLUG", title: "Tipos de mensaje Sparkplug B", firstW: 3.0,
    cols: ["Mensaje", "Emisor", "Cuándo"],
    rows: [
      ["NBIRTH/DBIRTH", {t:"Nodo/dispositivo",color:"22E06B"}, "Al conectarse"],
      ["NDATA/DDATA", {t:"Nodo/dispositivo",color:"C6FF00"}, "Al cambiar un valor"],
      ["NDEATH/DDEATH", {t:"Broker (last will)",color:"FF3B30"}, "Al desconectarse"],
      ["STATE", {t:"Primary host",color:"27E5E5"}, "Estado de infraestructura"],
    ], notes: "Los tipos de mensaje Sparkplug. BIRTH declara, DATA reporta cambios, DEATH avisa caídas. Estado siempre conocido." },

  // -------- SECCIÓN 3: UNS --------
  { type: "section", num: 3, title: "EL UNIFIED NAMESPACE", sub: "Una única fuente de verdad en tiempo real" },

  { type: "compare", sec: "UNS", title: "UNS frente a data lake",
    leftTitle: "Unified Namespace", leftItems: ["Estado ACTUAL en tiempo real","Event-driven (push)","Estructura semántica ISA-95","Fuente de verdad operativa","Consumo inmediato"],
    rightTitle: "Data lake / warehouse", rightItems: ["Datos HISTÓRICOS acumulados","Consulta bajo demanda (pull)","Esquema para analítica","Fuente para BI e IA batch","Consumo diferido"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    foot: "No compiten: el UNS alimenta el data lake. Tiempo real (UNS) e histórico (lake) son complementarios.",
    notes: "Distinguir UNS (estado actual, tiempo real) de data lake (histórico, analítica batch). El UNS alimenta al lake." },

  { type: "concepts3", sec: "UNS", title: "Qué es el UNS", items: [
      { k: "IDEA", desc: "Un único espacio de nombres, en tiempo real, donde vive el estado actual de toda la empresa.", ex: "Fuente única de verdad", color: "C6FF00" },
      { k: "EVENT-DRIVEN", desc: "Todo sistema publica su estado y consume el que necesita, vía el broker.", ex: "Pub/sub central", color: "27E5E5" },
      { k: "SEMÁNTICA ISA-95", desc: "La jerarquía (empresa/planta/área/línea/celda) da estructura al namespace.", ex: "ISA-95 como mapa", color: "FFB000" },
    ], note: "El UNS (Walker) es una arquitectura, no un producto: un espacio de nombres central, en tiempo real y con estructura semántica, que se vuelve la única fuente de verdad del estado de la empresa.",
    notes: "El UNS es una filosofía de arquitectura: fuente única de verdad, event-driven, con semántica ISA-95. Se implementa con MQTT/Sparkplug." },

  { type: "grid", sec: "UNS", title: "Por qué el UNS aplana la pirámide", cols: 2, lead: "El UNS reemplaza las integraciones punto a punto por un hub central.",
    cards: [
      { tag: "ANTES (PUNTO A PUNTO)", desc: "Cada sistema se conecta con cada otro: N×N integraciones frágiles.", color: "FF3B30" },
      { tag: "CON UNS (HUB)", desc: "Cada sistema se conecta solo al UNS: N integraciones, no N×N.", color: "C6FF00" },
      { tag: "TIEMPO REAL", desc: "El estado está disponible al instante, no tras subir por la pirámide.", color: "27E5E5" },
      { tag: "ESCALABLE", desc: "Añadir un sistema = una conexión al UNS, sin tocar los demás.", color: "22E06B" },
    ], note: "El UNS convierte N×N integraciones en N: cada sistema publica y consume del namespace central. Es el aplanamiento de la pirámide de S07 hecho realidad.",
    notes: "El UNS mata la 'maraña de espagueti' de integraciones punto a punto. Es el aplanamiento arquitectónico de S07." },

  { type: "grid", sec: "UNS", title: "Diseñar la jerarquía del UNS", cols: 3, lead: "La estructura del namespace es su decisión más importante.",
    cards: [
      { tag: "EMPRESA", desc: "Nivel raíz: la organización.", color: "C6FF00" },
      { tag: "SITIO / PLANTA", desc: "Ubicación física.", color: "27E5E5" },
      { tag: "ÁREA", desc: "Zona funcional de la planta.", color: "FFB000" },
      { tag: "LÍNEA / CELDA", desc: "Línea de producción o celda.", color: "22E06B" },
      { tag: "MÁQUINA / EQUIPO", desc: "Activo individual.", color: "9D6BFF" },
      { tag: "ISA-95", desc: "Esta jerarquía es directamente la de ISA-95 (S07).", color: "FF6B35" },
    ], notes: "La jerarquía del UNS ES la jerarquía de ISA-95. Diseñarla bien (semántica consistente) es la decisión de gobierno de datos más importante del CPPS." },

  { type: "phase", sec: "UNS", title: "Gobierno del Unified Namespace", badge: "GOBIERNO DEL DATO",
    name: "Quién manda en el namespace", what: "El UNS solo funciona si su estructura es consistente y gobernada: quién define la jerarquía, quién autoriza publicar en cada rama, cómo se nombran las métricas, quién es dueño de cada dato. Sin gobierno, el UNS degenera en otro silo desordenado. Con gobierno, es la columna vertebral del dato del CPPS.",
    leftTag: "DECISIONES", tools: "Jerarquía · nomenclatura · propiedad · acceso", rightTag: "SE PROFUNDIZA EN", seen: "Gobierno de datos (S13)",
    notes: "El UNS exige gobierno de datos (S13): estructura, nomenclatura, propiedad y acceso. Sin gobierno, se desordena." },

  { type: "callouts", sec: "UNS", title: "El UNS como estrategia de datos",
    stats: [ {n:"DESACOPLA",label:"sistemas independientes del proveedor de cada aplicación",color:"C6FF00"},{n:"ANTI LOCK-IN",label:"cambiar una app no rompe las demás: solo se reconecta al UNS",color:"27E5E5"},{n:"HABILITA IA",label:"todo el dato en tiempo real y con contexto para analítica y gemelos",color:"FFB000"} ],
    note: { body: "El UNS es más que técnica: es una estrategia de datos que reduce el lock-in, acelera la integración y habilita la analítica. Por eso adoptarlo es una decisión de gobierno de arquitectura (APO03) con impacto de largo plazo." },
    notes: "El UNS es estrategia de datos y anti-lock-in. Decisión de gobierno (APO03), no solo técnica." },

  { type: "grid", sec: "UNS", title: "Buenas prácticas de nomenclatura", cols: 2, lead: "Un namespace consistente es un namespace útil.",
    cards: [
      { tag: "JERARQUÍA ISA-95", desc: "empresa/sitio/área/línea/celda/máquina/métrica.", color: "C6FF00" },
      { tag: "NOMBRES ESTABLES", desc: "Evitar renombrar; los consumidores dependen de la ruta.", color: "27E5E5" },
      { tag: "MINÚSCULAS Y SIN ESPACIOS", desc: "Convención uniforme para evitar errores.", color: "FFB000" },
      { tag: "METADATOS", desc: "Unidad, tipo y calidad junto al valor.", color: "22E06B" },
    ], note: "Una nomenclatura consistente y documentada es lo que hace que el UNS escale sin volverse un caos. Es una decisión de gobierno de datos que debe fijarse antes de publicar.",
    notes: "La nomenclatura es gobierno de datos. Definirla antes de publicar evita el desorden. Enlaza con S13." },

  // -------- SECCIÓN 4: OPC UA vs MQTT --------
  { type: "section", num: 4, title: "OPC UA Y MQTT — CÓMO CONVIVEN", sub: "No es 'uno u otro'" },

  { type: "compare", sec: "COMBINAR", title: "Cuándo cada uno",
    leftTitle: "OPC UA — mejor para", leftItems: ["Servidor–máquina (SCADA)","Modelado semántico rico","Seguridad y auditoría fuertes","Interfaz de dispositivo estándar","Consulta y navegación de estructura"],
    rightTitle: "MQTT — mejor para", rightItems: ["Telemetría masiva a la nube","Muchos a muchos desacoplado","Redes pobres o intermitentes","Arquitectura UNS event-driven","Ligereza y escalabilidad"],
    leftColor: "27E5E5", rightColor: "C6FF00",
    foot: "Patrón común: OPC UA de la máquina al borde; MQTT/Sparkplug del borde al UNS y la nube.",
    notes: "Regla práctica: OPC UA cerca de la máquina; MQTT hacia arriba. Muchas arquitecturas usan ambos en secuencia." },

  { type: "grid", sec: "COMBINAR", title: "Caso — planta de bebidas con UNS", cols: 2, lead: "Cómo se ve la convivencia en la práctica.",
    cards: [
      { tag: "MÁQUINAS (OPC UA)", desc: "Llenadora, etiquetadora y paletizador exponen OPC UA.", color: "27E5E5" },
      { tag: "BORDE (GATEWAY)", desc: "Lee OPC UA y publica en el UNS vía MQTT/Sparkplug.", color: "22E06B" },
      { tag: "UNS (MQTT)", desc: "Jerarquía ISA-95: planta/linea/maquina/metrica.", color: "C6FF00" },
      { tag: "CONSUMIDORES", desc: "Grafana (OEE), MES, IA de calidad y ERP consumen del UNS.", color: "FFB000" },
    ], note: "Un mismo dato (temperatura de llenado) nace en OPC UA, viaja por el UNS y lo consumen el tablero, el MES y la IA — sin integraciones a medida.",
    notes: "Caso concreto de convivencia OPC UA + MQTT + UNS. Un dato, muchos consumidores, cero integraciones punto a punto." },

  { type: "phase", sec: "COMBINAR", title: "Arquitectura de referencia combinada", badge: "PATRÓN",
    name: "OPC UA + MQTT + UNS", what: "Un patrón muy usado: las máquinas exponen OPC UA; un gateway de borde lee OPC UA y publica en MQTT/Sparkplug hacia el UNS; las aplicaciones (tableros, IA, MES, ERP) consumen del UNS. Se combina la semántica y seguridad de OPC UA con la escalabilidad y el desacople de MQTT.",
    leftTag: "FLUJO", tools: "Máquina (OPC UA) → borde → MQTT/Sparkplug → UNS → apps", rightTag: "RESULTADO", seen: "Semántica + escala + desacople",
    notes: "El patrón OPC UA→borde→MQTT→UNS→apps es la arquitectura de datos de referencia del CPPS moderno." },

  { type: "grid", sec: "COMBINAR", title: "Decisiones de arquitectura de datos", cols: 2, lead: "Lo que el gobierno debe definir.",
    cards: [
      { tag: "PROTOCOLOS", desc: "OPC UA para máquina, MQTT/Sparkplug para el UNS. Estándares abiertos.", color: "C6FF00" },
      { tag: "JERARQUÍA UNS", desc: "Estructura semántica basada en ISA-95, gobernada.", color: "27E5E5" },
      { tag: "SEGURIDAD", desc: "TLS/certificados en ambos; segmentación de red.", color: "FF3B30" },
      { tag: "PROPIEDAD DEL DATO", desc: "Quién publica y quién es dueño de cada rama del namespace.", color: "FFB000" },
    ], note: "Estas decisiones de arquitectura de datos son de gobierno: definen la mantenibilidad, la seguridad y el valor futuro del dato del CPPS.",
    notes: "Las decisiones de arquitectura de datos son gobierno. El proyecto las documentará en el Entregable 2." },

  { type: "callouts", sec: "COMBINAR", title: "El dato bien arquitecturado es el activo",
    stats: [ {n:"UNA VEZ",label:"el dato se estructura una vez y sirve a muchas aplicaciones",color:"C6FF00"},{n:"FUTURO",label:"IA, gemelos y optimización dependen de esta base",color:"27E5E5"},{n:"GOBIERNO",label:"la arquitectura de datos es una inversión estratégica, no un detalle",color:"FFB000"} ],
    note: { body: "OPC UA, MQTT/Sparkplug y el UNS son las piezas para construir la arquitectura de datos del CPPS. Bien diseñada y gobernada, se convierte en el activo que habilita toda la inteligencia futura: analítica, gemelos y optimización (S12–S13)." },
    notes: "Cierra la sección: la arquitectura de datos es el cimiento del valor futuro. Conecta con S12-S13." },

  // -------- SECCIÓN 5: LABORATORIO --------
  { type: "section", num: 5, title: "LABORATORIO — CADENA DE DATOS COMPLETA", sub: "Del sensor simulado al tablero" },

  { type: "terminal", sec: "LAB", title: "Publicar y suscribir con MQTT", term: "mosquitto", lines: [
      { t: "# Broker MQTT local (Eclipse Mosquitto)", cls: "cmt" },
      { t: "$ mosquitto -v", cls: "cmd" },
      { t: "# Suscribirse a toda la línea 3", cls: "cmt" },
      { t: "$ mosquitto_sub -t 'planta1/linea3/#' -v", cls: "cmd" },
      { t: "# En otra terminal: publicar una lectura", cls: "cmt" },
      { t: "$ mosquitto_pub -t 'planta1/linea3/llenadora/temp' -m '72.4'", cls: "cmd" },
      { t: "planta1/linea3/llenadora/temp 72.4", cls: "ok" },
      { t: "# El suscriptor recibe el mensaje al instante", cls: "cmt" },
    ], note: { tag: "LAB 6", body: "El laboratorio construye la cadena completa: simulador de proceso → MQTT (Mosquitto) → Node-RED → base de series de tiempo (InfluxDB) → tablero (Grafana). Toda la pila es abierta." },
    notes: "El comando muestra el pub/sub básico. El lab completo encadena simulador→MQTT→Node-RED→InfluxDB→Grafana." },

  { type: "grid", sec: "LAB", title: "Parámetros MQTT que verás en el lab", cols: 3, lead: "Configuraciones a observar durante la práctica.",
    cards: [
      { tag: "TÓPICO", desc: "La ruta jerárquica del mensaje.", color: "C6FF00" },
      { tag: "QoS", desc: "0, 1 o 2 según la garantía requerida.", color: "27E5E5" },
      { tag: "RETAIN", desc: "Guardar el último valor para nuevos suscriptores.", color: "FFB000" },
      { tag: "LAST WILL", desc: "Mensaje si un cliente cae (base del DEATH).", color: "FF3B30" },
      { tag: "CLIENT ID", desc: "Identidad del cliente en el broker.", color: "22E06B" },
      { tag: "TLS", desc: "Cifrado y autenticación en producción.", color: "9D6BFF" },
    ], notes: "Estos parámetros se configuran en el Lab 6. Observar retain y last will ayuda a entender cómo el UNS mantiene el estado." },

  { type: "process", sec: "LAB", title: "La cadena de datos del Lab 6", cols: 5, steps: [
      { n:1, title:"Simulador", desc:"Genera señales.", color:"FF6B35" },
      { n:2, title:"MQTT", desc:"Mosquitto/Sparkplug.", color:"FFB000" },
      { n:3, title:"Node-RED", desc:"Orquesta y transforma.", color:"22E06B" },
      { n:4, title:"InfluxDB", desc:"Series de tiempo.", color:"27E5E5" },
      { n:5, title:"Grafana", desc:"Tablero.", color:"C6FF00" },
    ], notes: "La cadena completa del Lab 6. Cada eslabón es una herramienta abierta. Replica una plataforma IIoT sin lock-in." },

  { type: "grid", sec: "LAB", title: "Herramientas del laboratorio", cols: 3, lead: "Pila abierta de datos IIoT.",
    cards: [
      { tag: "MOSQUITTO / EMQX", desc: "Broker MQTT.", color: "C6FF00" },
      { tag: "NODE-RED", desc: "Orquestación visual de flujos de datos.", color: "27E5E5" },
      { tag: "INFLUXDB / TIMESCALE", desc: "Base de datos de series de tiempo.", color: "FFB000" },
      { tag: "GRAFANA", desc: "Tableros y visualización.", color: "22E06B" },
      { tag: "MQTT EXPLORER", desc: "Ver la jerarquía de tópicos en vivo.", color: "9D6BFF" },
      { tag: "SPARKPLUG", desc: "Librerías para BIRTH/DEATH y payload tipado.", color: "FF6B35" },
    ], notes: "Pila 100% abierta. Permite montar un UNS de práctica y una cadena de datos completa sin licencias." },

  { type: "phase", sec: "LAB", title: "Guía del Lab 6", badge: "SEGUIMIENTO",
    name: "Construir la cadena de datos", what: "1) Levanta Mosquitto y diseña una jerarquía de tópicos ISA-95 para tu proceso. 2) Publica señales simuladas. 3) En Node-RED, enruta y transforma hacia InfluxDB. 4) Crea un tablero en Grafana con OEE o una variable clave. Entregable: diagrama de la cadena + captura del tablero funcionando.",
    leftTag: "HERRAMIENTAS", tools: "Mosquitto · Node-RED · InfluxDB · Grafana", rightTag: "ALIMENTA", seen: "Entregable 2 (semana 13)",
    notes: "El Lab 6 produce evidencia funcional para el Entregable 2. Guía detallada en el PDF de ejercicios." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "MQTT", desc: "Pub/sub ligero y desacoplado vía broker y tópicos." },
      { label: "Sparkplug B", desc: "Estructura, estado (BIRTH/DEATH) y tipos sobre MQTT." },
      { label: "UNS", desc: "Fuente única de verdad, event-driven, con semántica ISA-95." },
      { label: "OPC UA + MQTT", desc: "Máquina con OPC UA; UNS y nube con MQTT." },
      { label: "Gobierno del dato", desc: "La jerarquía del namespace debe gobernarse." },
    ], notes: "Repaso. Verificar el rol de cada capa: transporte (MQTT), estructura (Sparkplug), arquitectura (UNS)." },

  { type: "warning", sec: "CIERRE", title: "El UNS sin gobierno es otro silo",
    paras: [
      "El Unified Namespace promete una fuente única de verdad, pero sin gobierno de datos degenera: nomenclaturas inconsistentes, ramas huérfanas y métricas duplicadas.",
      "Antes de publicar el primer tópico hay que decidir la jerarquía, la nomenclatura, la propiedad de cada rama y las reglas de acceso. La arquitectura de datos es tan buena como su gobierno (S13).",
    ],
    quote: "Una fuente de verdad sin gobierno es solo una nueva forma de desorden.",
    notes: "Advertencia clave: el UNS exige gobierno de datos desde el diseño. Anticipa S13." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 3", cols: 4, steps: [
      { n:"S10", title:"OPC UA", desc:"Interoperabilidad.", color:"8C8C8C" },
      { n:"S11", title:"MQTT / UNS", desc:"Datos en tiempo real · hoy.", color:"C6FF00" },
      { n:"S12", title:"Gemelos digitales", desc:"Simulación y réplica.", color:"27E5E5" },
      { n:"S13", title:"Datos / OEE", desc:"Gobierno de datos y analítica.", color:"FFB000" },
    ], notes: "Con la capa de datos lista (S10-11), S12 y S13 construyen inteligencia encima: gemelos y analítica." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "MQTT", d: "Protocolo de mensajería pub/sub ligero (ISO 20922)." },
      { t: "Broker", d: "Intermediario que reparte mensajes por tópico." },
      { t: "Tópico", d: "Ruta jerárquica de un mensaje MQTT." },
      { t: "QoS", d: "Calidad de servicio de entrega (0, 1, 2)." },
      { t: "Sparkplug B", d: "Especificación de estructura/estado sobre MQTT." },
      { t: "BIRTH / DEATH", d: "Mensajes de vida/muerte de un dispositivo." },
      { t: "UNS", d: "Unified Namespace: fuente única de verdad." },
      { t: "Report by exception", d: "Publicar solo los cambios." },
    ], notes: "Vocabulario de MQTT, Sparkplug y UNS." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "OASIS — MQTT v5.0 (especificación oficial, gratis)", url: "https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html", acc: "libre" },
      { t: "Eclipse — Sparkplug B (especificación)", url: "https://sparkplug.eclipse.org/", acc: "libre" },
      { t: "Reynolds, Walker — Unified Namespace (introducción)", url: "https://learn.umh.app/lesson/chapter-2-the-rise-of-the-unified-namespace/", acc: "libre" },
      { t: "Eclipse Mosquitto — broker MQTT (docs)", url: "https://mosquitto.org/", acc: "libre" },
      { t: "Node-RED — orquestación de flujos (docs)", url: "https://nodered.org/docs/", acc: "libre" },
      { t: "HiveMQ / EMQX — MQTT industrial y Sparkplug (recursos)", url: "https://www.hivemq.com/mqtt/", acc: "libre" },
    ], notes: "Fuentes de MQTT, Sparkplug B y arquitectura UNS." },

  { type: "closing", nextNum: 12, nextTitle: "GEMELOS DIGITALES", nextDesc: "Modelo, sombra y gemelo digital; ciclo de vida, casos de uso y gobierno de la fidelidad del modelo.", prompt: "root@planta:~# next --session 12 _",
    notes: "Con los datos fluyendo (S10-11), S12 construye el gemelo digital: el 'lado ciber' del CPPS." },
];
