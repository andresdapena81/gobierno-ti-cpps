// S10 — OPC UA y protocolos industriales (inicio de la Unidad 3)
module.exports = [
  { type: "cover", title: "OPC UA\n& PROTOCOLOS", subtitle: "Interoperabilidad industrial: el idioma común entre máquinas, IT y OT",
    notes: "Inicio de la Unidad 3. OPC UA es el estándar que unifica el dato del CPPS. Primer laboratorio práctico de integración." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Panorama de protocolos", desc: "Modbus, PROFINET, EtherNet/IP y compañía" },
    { title: "OPC UA", desc: "Modelo de información, espacio de direcciones y servicios" },
    { title: "Seguridad OPC UA", desc: "Modos, certificados y perfiles" },
    { title: "PubSub, TSN y companion specs", desc: "OPC UA hacia el tiempo real" },
    { title: "Laboratorio", desc: "Servidor y cliente OPC UA" },
    { title: "Cierre", desc: "Gobierno de la interoperabilidad y referencias" },
  ], notes: "De la torre de Babel de protocolos a OPC UA como idioma común. Sesión técnica con laboratorio." },

  { type: "stats", sec: "OPCUA", title: "OPC UA en cifras",
    bigstats: [ {n:"UA",label:"UNIFIED ARCHITECTURE"},{n:"IEC",label:"62541"},{n:4,label:"PILARES"},{n:"SL 1-4",label:"SEGURIDAD"} ],
    kvs: [ {k:"AUTOR",v:"OPC Foundation"},{k:"NORMA",v:"IEC 62541"},{k:"MODELO",v:"Orientado a objetos, semántico"},{k:"TRANSPORTE",v:"Cliente/servidor y PubSub"},{k:"PLATAFORMA",v:"Independiente de SO y fabricante"},{k:"ROL",v:"Interoperabilidad IT/OT del CPPS"} ],
    notes: "OPC UA (IEC 62541) es el estándar clave de interoperabilidad industrial. Su fuerte: modelo semántico y seguridad integrada." },

  { type: "objectives", sec: "OPCUA", title: "Objetivos de la sesión", items: [
    { lead: "Ubicar", rest: "los protocolos industriales según su capa y propósito." },
    { lead: "Explicar", rest: "el modelo de información y el espacio de direcciones de OPC UA." },
    { lead: "Describir", rest: "los modos y perfiles de seguridad de OPC UA." },
    { lead: "Distinguir", rest: "cliente/servidor de PubSub y el rol de TSN." },
    { lead: "Operar", rest: "un servidor y un cliente OPC UA en el laboratorio." },
  ], notes: "Objetivo práctico: entender y usar OPC UA como base de la integración del CPPS." },

  // -------- SECCIÓN 1: PROTOCOLOS --------
  { type: "section", num: 1, title: "PANORAMA DE PROTOCOLOS INDUSTRIALES", sub: "La torre de Babel del piso de planta" },

  { type: "concepts3", sec: "PROTOCOLOS", title: "Tres generaciones", items: [
      { k: "FIELDBUS", desc: "Buses de campo clásicos: Modbus, PROFIBUS, DeviceNet. Seriales, deterministas, propietarios.", ex: "Modbus RTU", color: "FFB000" },
      { k: "ETHERNET INDUSTRIAL", desc: "Sobre Ethernet: PROFINET, EtherNet/IP, EtherCAT. Más ancho de banda y determinismo.", ex: "PROFINET", color: "27E5E5" },
      { k: "IIoT / SEMÁNTICO", desc: "OPC UA y MQTT: interoperables, seguros, con significado del dato.", ex: "OPC UA", color: "C6FF00" },
    ], note: "La planta acumula tres generaciones de protocolos coexistiendo. OPC UA no reemplaza los buses de control: los unifica hacia arriba, dándoles un idioma común.",
    notes: "Tres generaciones conviven. OPC UA es la capa de interoperabilidad, no un reemplazo del control determinista del fieldbus." },

  { type: "grid", sec: "PROTOCOLOS", title: "Los protocolos que verás en planta", cols: 3, lead: "El zoológico de protocolos industriales más común.",
    cards: [
      { tag: "MODBUS", desc: "Simple, ubicuo, sin seguridad. RTU (serial) y TCP.", color: "FFB000" },
      { tag: "PROFINET", desc: "Ethernet industrial de Siemens; muy extendido.", color: "27E5E5" },
      { tag: "ETHERNET/IP", desc: "Ethernet industrial de Rockwell (CIP).", color: "C6FF00" },
      { tag: "ETHERCAT", desc: "Ultra baja latencia para motion control.", color: "22E06B" },
      { tag: "PROFIBUS", desc: "Fieldbus serial clásico, aún muy presente.", color: "FF6B35" },
      { tag: "OPC UA / MQTT", desc: "Interoperabilidad y datos hacia IT (S10-11).", color: "9D6BFF" },
    ], notes: "No hay que dominarlos todos; sí reconocerlos. Cada fabricante empuja el suyo: fuente de lock-in y de complejidad." },

  { type: "grid", sec: "PROTOCOLOS", title: "El problema que resuelve OPC UA", cols: 2, lead: "Por qué se necesitaba un estándar de interoperabilidad.",
    cards: [
      { tag: "FRAGMENTACIÓN", desc: "Cada protocolo habla distinto; integrar exige convertidores a medida.", color: "FF3B30" },
      { tag: "SIN SEMÁNTICA", desc: "Modbus da 'el registro 40001 = 72', pero no qué significa 72.", color: "FFB000" },
      { tag: "SIN SEGURIDAD", desc: "Los protocolos clásicos no cifran ni autentican.", color: "FF6B35" },
      { tag: "OPC UA RESUELVE", desc: "Semántica, seguridad e independencia de plataforma en un solo estándar.", color: "C6FF00" },
    ], note: "OPC UA nació para dar lo que faltaba: significado del dato, seguridad y neutralidad de fabricante. Es el 'traductor universal' del CPPS.",
    notes: "OPC UA resuelve tres carencias: semántica, seguridad, neutralidad. Por eso es el estándar de interoperabilidad del CPPS." },

  { type: "matrix", sec: "PROTOCOLOS", title: "Comparación rápida", firstW: 3.0,
    cols: ["Protocolo", "Semántica", "Seguridad", "Uso"],
    rows: [
      ["Modbus", {t:"No",color:"FF3B30"}, {t:"No",color:"FF3B30"}, "Control simple"],
      ["PROFINET", {t:"Parcial",color:"FFB000"}, {t:"Limitada",color:"FFB000"}, "Control"],
      ["OPC UA", {t:"Sí",color:"22E06B"}, {t:"Sí",color:"22E06B"}, "Interoperar"],
      ["MQTT", {t:"Con Sparkplug",color:"FFB000"}, {t:"Sí (TLS)",color:"22E06B"}, "Telemetría"],
    ], notes: "OPC UA destaca por semántica + seguridad. MQTT brilla en telemetría ligera (S11). Se complementan." },

  { type: "callouts", sec: "PROTOCOLOS", title: "Interoperabilidad como decisión de gobierno",
    stats: [ {n:"LOCK-IN",label:"protocolos propietarios atan a un fabricante por décadas",color:"FF3B30"},{n:"ESTÁNDAR",label:"exigir OPC UA reduce dependencia y costo de integración",color:"C6FF00"},{n:"APO03",label:"la elección de protocolos es arquitectura, no solo ingeniería",color:"27E5E5"} ],
    note: { body: "Elegir protocolos abiertos y semánticos (OPC UA) es una decisión de gobierno de arquitectura (APO03): reduce el lock-in, baja el costo de integración y prepara la planta para la analítica. Dejar que cada área elija su protocolo genera deuda." },
    notes: "La interoperabilidad conecta con el gobierno (APO03, adquisición). Exigir OPC UA en compras es una palanca de gobierno." },

  { type: "grid", sec: "PROTOCOLOS", title: "Redes OT frente a redes IT", cols: 2, lead: "La red industrial tiene exigencias distintas a la ofimática.",
    cards: [
      { tag: "DETERMINISMO", desc: "OT exige latencia y jitter garantizados; IT tolera variabilidad.", color: "27E5E5" },
      { tag: "DISPONIBILIDAD", desc: "Una red OT caída detiene la producción; se prioriza sobre todo.", color: "C6FF00" },
      { tag: "LONGEVIDAD", desc: "Equipos de red OT de 15+ años; IT se renueva cada 3–5.", color: "FFB000" },
      { tag: "PROTOCOLOS", desc: "OT usa protocolos industriales; IT, TCP/IP genérico. OPC UA los une.", color: "9D6BFF" },
    ], note: "Diseñar la red del CPPS exige entender que OT no es 'IT en la planta': el determinismo y la disponibilidad mandan.",
    notes: "Las redes OT tienen requisitos propios. TSN busca llevar determinismo al Ethernet estándar (sección 4)." },

  // -------- SECCIÓN 2: MODELO DE INFORMACIÓN --------
  { type: "section", num: 2, title: "OPC UA — MODELO DE INFORMACIÓN", sub: "No solo datos: datos con significado" },

  { type: "concepts3", sec: "MODELO", title: "Los pilares de OPC UA", items: [
      { k: "MODELO DE INFORMACIÓN", desc: "Representa datos como objetos con tipos, propiedades y relaciones. Semántica, no solo valores.", ex: "Una bomba es un objeto", color: "C6FF00" },
      { k: "ESPACIO DE DIRECCIONES", desc: "El grafo de nodos navegable donde vive toda la información del servidor.", ex: "Address space", color: "27E5E5" },
      { k: "SERVICIOS", desc: "Operaciones estándar: leer, escribir, suscribirse, llamar métodos, navegar.", ex: "Read, Subscribe", color: "FFB000" },
    ], note: "La gran diferencia de OPC UA: no expone 'registros' sino objetos con significado. Un cliente puede navegar el servidor y entender qué es cada cosa sin documentación externa.",
    notes: "El modelo de información es lo que distingue a OPC UA. Autodescriptivo: el cliente descubre y entiende la estructura." },

  { type: "grid", sec: "MODELO", title: "El espacio de direcciones", cols: 2, lead: "Todo en OPC UA es un nodo en un grafo navegable.",
    cards: [
      { tag: "NODOS", desc: "Objetos, variables, métodos, tipos: cada uno un nodo con NodeId único.", color: "C6FF00" },
      { tag: "REFERENCIAS", desc: "Relaciones entre nodos (contiene, es-tipo-de, organiza): forman el grafo.", color: "27E5E5" },
      { tag: "ATRIBUTOS", desc: "Cada nodo tiene atributos (valor, tipo de dato, calidad, timestamp).", color: "FFB000" },
      { tag: "NAVEGACIÓN", desc: "El cliente recorre el grafo (Browse) y descubre la estructura del servidor.", color: "22E06B" },
    ], note: "El espacio de direcciones es un grafo autodescriptivo: el cliente navega y descubre objetos, variables y sus relaciones sin conocer el servidor de antemano.",
    notes: "El address space es un grafo de nodos y referencias. El cliente lo explora con Browse. Se verá en el laboratorio." },

  { type: "grid", sec: "MODELO", title: "Los servicios de OPC UA", cols: 3, lead: "Las operaciones estándar que ofrece un servidor OPC UA.",
    cards: [
      { tag: "BROWSE", desc: "Navegar el espacio de direcciones.", color: "C6FF00" },
      { tag: "READ / WRITE", desc: "Leer y escribir valores de nodos.", color: "27E5E5" },
      { tag: "SUBSCRIBE", desc: "Recibir notificaciones ante cambios (monitored items).", color: "FFB000" },
      { tag: "CALL", desc: "Invocar métodos expuestos por el servidor.", color: "22E06B" },
      { tag: "HISTORY", desc: "Acceder a datos históricos (HA).", color: "9D6BFF" },
      { tag: "EVENTS", desc: "Recibir eventos y alarmas.", color: "FF6B35" },
    ], notes: "Los servicios son estándar y ricos. Subscribe (suscripción a cambios) es más eficiente que sondear (polling)." },

  { type: "phase", sec: "MODELO", title: "Modelado de información — companion specs", badge: "SEMÁNTICA",
    name: "Vocabularios por dominio", what: "OPC UA permite definir modelos de información estándar por industria (companion specifications): cómo se representa una máquina-herramienta (umati), una línea de empaque (PackML/OMAC), un robot, un dispositivo de laboratorio. Así, dos máquinas de fabricantes distintos exponen su información de la misma forma: interoperabilidad real.",
    leftTag: "EJEMPLOS", tools: "umati · PackML · OPC UA for Robotics", rightTag: "VALOR", seen: "Plug-and-produce entre fabricantes",
    notes: "Las companion specs son el mecanismo de interoperabilidad semántica. umati (máquina-herramienta) es el caso emblemático." },

  { type: "grid", sec: "MODELO", title: "OPC UA frente a OPC Classic", cols: 2, lead: "OPC UA superó las limitaciones del OPC clásico (OPC DA).",
    cards: [
      { tag: "OPC CLASSIC (DA)", desc: "Basado en COM/DCOM de Windows: atado a la plataforma, difícil de asegurar y de cruzar firewalls.", color: "FF6B35" },
      { tag: "OPC UA", desc: "Independiente de plataforma, con seguridad integrada, semántica y transporte moderno.", color: "C6FF00" },
      { tag: "MIGRACIÓN", desc: "Muchas plantas migran de OPC Classic a UA por seguridad e interoperabilidad.", color: "27E5E5" },
      { tag: "LEGADO", desc: "Existen wrappers/gateways OPC Classic ↔ UA para la transición.", color: "FFB000" },
    ], note: "OPC UA reemplaza el frágil OPC Classic (DCOM). La migración a UA es una decisión de modernización y seguridad.",
    notes: "OPC Classic (DCOM) era frágil e inseguro. OPC UA lo moderniza. La migración es común y recomendable." },

  { type: "callouts", sec: "MODELO", title: "Por qué la semántica cambia el juego",
    stats: [ {n:"AUTO-DESCRIPTIVO",label:"el cliente entiende el servidor sin documentación externa",color:"C6FF00"},{n:"MENOS INTEGRACIÓN",label:"con companion specs, conectar una máquina nueva es casi plug-and-play",color:"27E5E5"},{n:"ANALÍTICA",label:"datos con contexto habilitan IA y gemelos fiables",color:"FFB000"} ],
    note: { body: "La semántica de OPC UA transforma el dato de 'número anónimo' a 'información con contexto'. Eso reduce el costo de integración, habilita el plug-and-produce y hace posible una analítica confiable. Es la base del gobierno del dato (S13)." },
    notes: "La semántica es el gran diferenciador. Conecta con gobierno del dato (S13): datos con contexto son datos gobernables." },

  // -------- SECCIÓN 3: SEGURIDAD --------
  { type: "section", num: 3, title: "SEGURIDAD DE OPC UA", sub: "Seguridad integrada por diseño" },

  { type: "grid", sec: "SEGURIDAD", title: "Seguridad integrada, no añadida", cols: 3, lead: "OPC UA incorpora seguridad en el estándar, no como parche.",
    cards: [
      { tag: "AUTENTICACIÓN", desc: "De aplicación (certificados) y de usuario (usuario/clave, certificado, token).", color: "C6FF00" },
      { tag: "CIFRADO", desc: "Los mensajes se cifran para confidencialidad en tránsito.", color: "27E5E5" },
      { tag: "INTEGRIDAD", desc: "Firma de mensajes para detectar manipulación.", color: "FFB000" },
      { tag: "AUTORIZACIÓN", desc: "Control de acceso a nodos por usuario/rol.", color: "22E06B" },
      { tag: "AUDITORÍA", desc: "Eventos de auditoría para trazabilidad.", color: "9D6BFF" },
      { tag: "CERTIFICADOS", desc: "PKI: cada aplicación tiene su certificado; confianza gestionada.", color: "FF6B35" },
    ], notes: "OPC UA fue diseñado con seguridad desde el inicio, a diferencia de Modbus/PROFINET. Es una ventaja clave para OT conectada." },

  { type: "grid", sec: "SEGURIDAD", title: "Modos de seguridad de mensaje", cols: 3, lead: "OPC UA ofrece tres modos según la necesidad.",
    cards: [
      { tag: "NONE", desc: "Sin seguridad. Solo para pruebas en red aislada. Nunca en producción.", color: "FF3B30" },
      { tag: "SIGN", desc: "Mensajes firmados: integridad y autenticidad, sin cifrado.", color: "FFB000" },
      { tag: "SIGN & ENCRYPT", desc: "Firmados y cifrados: integridad, autenticidad y confidencialidad. Recomendado.", color: "22E06B" },
    ], note: "En producción se usa Sign & Encrypt. 'None' solo es aceptable en un laboratorio en red interna aislada. El modo es una decisión de política de seguridad.",
    notes: "Regla de gobierno: prohibir modo None en producción. El laboratorio del curso lo usa solo en red aislada." },

  { type: "phase", sec: "SEGURIDAD", title: "Certificados y confianza (PKI)", badge: "GESTIÓN DE CONFIANZA",
    name: "Quién confía en quién", what: "Cada aplicación OPC UA (cliente y servidor) tiene un certificado. Para comunicarse, deben confiar mutuamente en sus certificados. Esto exige una gestión de PKI: emitir, distribuir, renovar y revocar certificados. En una planta con cientos de dispositivos, gestionar la confianza es un reto operativo y de gobierno.",
    leftTag: "IMPLICA", tools: "Emisión · distribución · renovación · revocación", rightTag: "RIESGO SI FALLA", seen: "Certificados vencidos que paran la comunicación",
    notes: "La gestión de certificados (PKI) es el reto operativo de la seguridad OPC UA. Certificados vencidos = comunicación caída." },

  { type: "grid", sec: "SEGURIDAD", title: "Seguridad OPC UA y el modelo Purdue", cols: 2, lead: "La seguridad del protocolo no reemplaza la arquitectura de red segura.",
    cards: [
      { tag: "DEFENSA EN CAPAS", desc: "OPC UA seguro + segmentación de red + DMZ industrial (S14).", color: "C6FF00" },
      { tag: "NO BASTA EL PROTOCOLO", desc: "Un OPC UA cifrado en una red plana sigue siendo vulnerable a movimiento lateral.", color: "FF3B30" },
      { tag: "MENOR SUPERFICIE", desc: "Exponer solo los nodos necesarios; principio de mínimo privilegio.", color: "27E5E5" },
      { tag: "GOBIERNO", desc: "Política de seguridad OPC UA como parte del programa de ciberseguridad OT.", color: "FFB000" },
    ], note: "La seguridad de OPC UA es necesaria pero no suficiente: se combina con segmentación de red y defensa en profundidad (S14). El protocolo seguro no sustituye la arquitectura segura.",
    notes: "Enlaza con S14. OPC UA seguro es una capa; la segmentación y la DMZ son otra. Defensa en profundidad." },

  { type: "callouts", sec: "SEGURIDAD", title: "La seguridad que otros protocolos no tienen",
    stats: [ {n:"MODBUS",label:"sin autenticación ni cifrado: cualquiera en la red puede leer/escribir",color:"FF3B30"},{n:"OPC UA",label:"autenticación, cifrado, firma y auditoría en el estándar",color:"C6FF00"},{n:"MIGRAR",label:"pasar de protocolos inseguros a OPC UA reduce el riesgo OT",color:"27E5E5"} ],
    note: { body: "La mayoría de los protocolos industriales clásicos no tienen seguridad: fueron diseñados para redes aisladas que ya no existen. OPC UA la incorpora nativamente. Migrar hacia OPC UA seguro es una de las mejoras de seguridad OT de mayor impacto." },
    notes: "Argumento de seguridad para adoptar OPC UA. Los protocolos clásicos asumen red aislada; el mundo conectado los expone." },

  { type: "phase", sec: "SEGURIDAD", title: "Descubrimiento y gestión centralizada", badge: "OPERACIÓN A ESCALA",
    name: "GDS y confianza gestionada", what: "En una planta con cientos de aplicaciones OPC UA, gestionar certificados uno a uno es inviable. El Global Discovery Server (GDS) centraliza el descubrimiento de servidores y la gestión de certificados (emisión, renovación, listas de confianza y revocación). Es la pieza que hace operable la seguridad OPC UA a escala.",
    leftTag: "RESUELVE", tools: "Descubrimiento · PKI centralizada · revocación", rightTag: "SIN ÉL", seen: "Gestión manual inviable a escala",
    notes: "El GDS es clave para operar OPC UA seguro en plantas grandes. Sin gestión centralizada, la PKI colapsa." },

  { type: "matrix", sec: "SEGURIDAD", title: "Política de seguridad OPC UA (modelo)", firstW: 3.6,
    cols: ["Entorno", "Modo", "Autenticación"],
    rows: [
      ["Producción", {t:"Sign & Encrypt",color:"22E06B"}, "Certificado + usuario"],
      ["Integración", {t:"Sign & Encrypt",color:"22E06B"}, "Certificado"],
      ["Laboratorio aislado", {t:"None (temporal)",color:"FFB000"}, "Anónimo"],
      ["Internet/remoto", {t:"Prohibido directo",color:"FF3B30"}, "Vía VPN/DMZ"],
    ], notes: "Ejemplo de política de seguridad OPC UA por entorno. El proyecto puede adoptar una tabla así como control de gobierno." },

  // -------- SECCIÓN 4: PUBSUB Y TSN --------
  { type: "section", num: 4, title: "OPC UA HACIA EL TIEMPO REAL", sub: "PubSub, TSN y el futuro del estándar" },

  { type: "compare", sec: "PUBSUB", title: "Cliente/servidor vs PubSub",
    leftTitle: "Cliente/servidor", leftItems: ["Conexión punto a punto","Petición-respuesta y suscripción","Bueno para SCADA-máquina","Mayor sobrecarga por conexión","Modelo tradicional de OPC UA"],
    rightTitle: "PubSub (publicación/suscripción)", rightItems: ["Muchos a muchos vía broker/multicast","Desacoplado y escalable","Bueno para telemetría masiva","Menor latencia y sobrecarga","Acerca OPC UA al mundo MQTT"],
    leftColor: "27E5E5", rightColor: "C6FF00",
    foot: "OPC UA PubSub puede correr sobre MQTT o UDP/multicast, combinando semántica UA con la eficiencia de pub/sub.",
    notes: "OPC UA PubSub añade el patrón pub/sub al estándar. Puede correr sobre MQTT: semántica UA + eficiencia MQTT." },

  { type: "phase", sec: "PUBSUB", title: "OPC UA sobre TSN — control determinista", badge: "TIEMPO REAL",
    name: "Semántica y determinismo juntos", what: "TSN (Time-Sensitive Networking) lleva determinismo al Ethernet estándar. OPC UA PubSub sobre TSN permite comunicación con latencia garantizada y semántica rica: apto incluso para control en tiempo real. Es la convergencia hacia una única red industrial que sirve del sensor a la nube.",
    leftTag: "HABILITA", tools: "Control determinista con semántica UA", rightTag: "TENDENCIA", seen: "Una sola red del sensor a la nube",
    notes: "OPC UA + TSN es la visión de una red industrial unificada y determinista. Tendencia fuerte 2024-2026." },

  { type: "grid", sec: "PUBSUB", title: "Companion specifications destacadas", cols: 3, lead: "Modelos de información estándar por dominio.",
    cards: [
      { tag: "UMATI", desc: "Máquinas-herramienta: interoperabilidad entre fabricantes.", color: "C6FF00" },
      { tag: "PACKML / OMAC", desc: "Máquinas de empaque: estados y modos estándar.", color: "27E5E5" },
      { tag: "OPC UA ROBOTICS", desc: "Robots industriales: datos y capacidades comunes.", color: "FFB000" },
      { tag: "AutoID", desc: "Identificación automática (RFID, códigos).", color: "22E06B" },
      { tag: "OPC UA FX", desc: "Field eXchange: comunicación controlador-a-controlador.", color: "9D6BFF" },
      { tag: "+ INDUSTRIA", desc: "Decenas de especificaciones por sector y por dispositivo.", color: "FF6B35" },
    ], notes: "Las companion specs son el ecosistema que hace real la interoperabilidad. umati es el faro; OPC UA FX extiende al control." },

  { type: "grid", sec: "PUBSUB", title: "OPC UA y MQTT — ¿rivales?", cols: 2, lead: "Dos estándares que se complementan más de lo que compiten.",
    cards: [
      { tag: "OPC UA", desc: "Rico en semántica y seguridad; ideal servidor-máquina y modelado.", color: "27E5E5" },
      { tag: "MQTT", desc: "Ligero y desacoplado; ideal telemetría masiva a la nube (S11).", color: "C6FF00" },
      { tag: "JUNTOS", desc: "OPC UA PubSub puede usar MQTT como transporte: lo mejor de ambos.", color: "FFB000" },
      { tag: "DECISIÓN", desc: "No 'uno u otro': se eligen por caso de uso dentro de la arquitectura.", color: "22E06B" },
    ], note: "OPC UA y MQTT no son rivales: OPC UA aporta semántica y seguridad; MQTT, ligereza. Muchas arquitecturas usan ambos (S11).",
    notes: "Desactivar el falso debate OPC UA vs MQTT. Se complementan; incluso OPC UA PubSub puede correr sobre MQTT." },

  { type: "callouts", sec: "PUBSUB", title: "OPC UA como columna del CPPS",
    stats: [ {n:"VERTICAL",label:"del sensor (FX) al MES y la nube: un solo estándar",color:"C6FF00"},{n:"SEMÁNTICA",label:"datos con significado en toda la pila",color:"27E5E5"},{n:"SEGURO",label:"seguridad integrada de extremo a extremo",color:"FFB000"} ],
    note: { body: "Con PubSub, TSN, FX y companion specs, OPC UA aspira a ser la columna vertebral de datos del CPPS: del control al negocio, con semántica y seguridad. Adoptarlo como estándar de referencia es una decisión de arquitectura estratégica." },
    notes: "OPC UA se posiciona como estándar transversal del CPPS. Adoptarlo es una decisión de arquitectura (APO03)." },

  // -------- SECCIÓN 5: LABORATORIO --------
  { type: "section", num: 5, title: "LABORATORIO — OPC UA EN ACCIÓN", sub: "Servidor, cliente y espacio de direcciones" },

  { type: "terminal", sec: "LAB", title: "Explorar un servidor OPC UA", term: "python · asyncua", lines: [
      { t: "# Cliente OPC UA con la librería asyncua (Python)", cls: "cmt" },
      { t: "$ pip install asyncua", cls: "cmd" },
      { t: "from asyncua import Client", cls: "hi" },
      { t: "async with Client('opc.tcp://localhost:4840') as c:", cls: "cmd" },
      { t: "    root = c.nodes.root", cls: "cmd" },
      { t: "    objs = await c.nodes.objects.get_children()", cls: "cmd" },
      { t: "    print(objs)   # descubre el espacio de direcciones", cls: "cmd" },
      { t: "[Temperatura, Presion, Motor, ...]", cls: "out" },
      { t: "    temp = await c.get_node('ns=2;s=Temperatura').read_value()", cls: "cmd" },
      { t: "72.4  # valor leído con contexto y timestamp", cls: "ok" },
    ], note: { tag: "LAB 5", body: "El laboratorio levanta un servidor OPC UA simulado (Prosys/open62541) y lo explora con un cliente (UaExpert o Python asyncua): navegar el grafo, leer/escribir nodos y suscribirse a cambios." },
    notes: "El código muestra lo esencial: conectar, navegar (Browse), leer. En clase se usa UaExpert y/o asyncua contra un servidor simulado." },

  { type: "grid", sec: "LAB", title: "Anatomía de un NodeId", cols: 2, lead: "Cómo se identifica cada nodo del espacio de direcciones.",
    cards: [
      { tag: "NAMESPACE (ns)", desc: "Índice del espacio de nombres: separa los nodos del servidor de los del estándar.", color: "C6FF00" },
      { tag: "IDENTIFICADOR", desc: "Numérico (i=), cadena (s=), GUID o ByteString. Ej.: ns=2;s=Temperatura.", color: "27E5E5" },
      { tag: "ATRIBUTOS", desc: "Value, DataType, StatusCode (calidad), SourceTimestamp.", color: "FFB000" },
      { tag: "CALIDAD", desc: "Cada valor viene con calidad y timestamp: fundamental para confiar en el dato.", color: "22E06B" },
    ], note: "Un valor OPC UA no es solo un número: trae tipo, calidad y timestamp. Esa riqueza es lo que habilita la analítica confiable (S13).",
    notes: "El NodeId y los atributos (calidad, timestamp) son la base de la confianza en el dato. Clave para S13." },

  { type: "grid", sec: "LAB", title: "OPC UA en la arquitectura del proyecto", cols: 2, lead: "Dónde encaja OPC UA en lo que ya diseñaron.",
    cards: [
      { tag: "CAPA COMMUNICATION", desc: "OPC UA es la capa de comunicación de RAMI (S08).", color: "C6FF00" },
      { tag: "MÁQUINA → BORDE", desc: "Las máquinas exponen OPC UA; el borde lo consume.", color: "27E5E5" },
      { tag: "HACIA EL UNS", desc: "El borde traduce OPC UA a MQTT/Sparkplug (S11).", color: "FFB000" },
      { tag: "SEGURIDAD", desc: "OPC UA seguro + segmentación de red (S14).", color: "FF3B30" },
    ], note: "OPC UA se ubica en la capa de comunicación entre la máquina y el borde. Del borde hacia arriba, MQTT/UNS (S11) toma el relevo. Así encaja en la arquitectura del proyecto.",
    notes: "Ubica OPC UA en la arquitectura completa. Enlaza S08 (RAMI), S11 (MQTT) y S14 (seguridad)." },

  { type: "grid", sec: "LAB", title: "Herramientas del laboratorio", cols: 3, lead: "Pila abierta para practicar OPC UA sin licencias.",
    cards: [
      { tag: "PROSYS SIM SERVER", desc: "Servidor OPC UA de simulación gratuito para pruebas.", color: "C6FF00" },
      { tag: "open62541", desc: "Implementación open source de OPC UA en C.", color: "27E5E5" },
      { tag: "UaExpert", desc: "Cliente gráfico para navegar y probar servidores.", color: "FFB000" },
      { tag: "python-asyncua", desc: "Librería Python para clientes y servidores OPC UA.", color: "22E06B" },
      { tag: "Wireshark", desc: "Analizar el tráfico OPC UA (y ver por qué cifrar).", color: "9D6BFF" },
      { tag: "Node-RED", desc: "Nodos OPC UA para orquestar flujos (S11).", color: "FF6B35" },
    ], notes: "Toda la pila es gratuita/abierta. Permite montar un entorno OPC UA completo sin depender de un fabricante." },

  { type: "phase", sec: "LAB", title: "Guía del Lab 5", badge: "SEGUIMIENTO",
    name: "Operar OPC UA", what: "1) Levanta un servidor OPC UA simulado. 2) Con UaExpert/asyncua, navega su espacio de direcciones y documenta la estructura. 3) Lee y escribe nodos; configura una suscripción a cambios. 4) Captura tráfico en modo None con Wireshark y compáralo con Sign&Encrypt. Entregable: documentación del servidor + evidencia de la suscripción.",
    leftTag: "HERRAMIENTAS", tools: "Prosys/open62541 · UaExpert · asyncua · Wireshark", rightTag: "ENTREGABLE", seen: "Documentación + evidencia",
    notes: "El Lab 5 hace tangible OPC UA. La captura Wireshark en modo None demuestra por qué cifrar. Guía en el PDF de ejercicios." },

  { type: "keypoints", sec: "LAB", title: "Ideas para el proyecto", items: [
      { label: "Exige OPC UA", desc: "Especifica OPC UA en las compras de maquinaria nueva." },
      { label: "Usa companion specs", desc: "Aprovecha modelos estándar (umati, PackML) si aplican." },
      { label: "Cifra siempre", desc: "Sign & Encrypt en producción; None solo en laboratorio aislado." },
      { label: "Gestiona certificados", desc: "Planea la PKI: emisión, renovación y revocación." },
      { label: "Combina con MQTT", desc: "OPC UA para máquina, MQTT para telemetría (S11)." },
    ], notes: "Orientaciones prácticas para el proyecto. La interoperabilidad es también una decisión de gobierno." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "OPC UA", desc: "Interoperabilidad con semántica, seguridad y neutralidad (IEC 62541)." },
      { label: "Modelo de información", desc: "Objetos con significado en un espacio de direcciones navegable." },
      { label: "Seguridad", desc: "Sign & Encrypt en producción; gestión de certificados." },
      { label: "PubSub/TSN", desc: "OPC UA hacia el tiempo real y una red unificada." },
      { label: "Companion specs", desc: "Modelos estándar por dominio (umati, PackML)." },
    ], notes: "Repaso. Verificar la diferencia entre dato (Modbus) e información con semántica (OPC UA)." },

  { type: "grid", sec: "CIERRE", title: "OPC UA — mitos y realidades", cols: 2, lead: "Aclarar confusiones frecuentes.",
    cards: [
      { tag: "'ES LENTO'", desc: "Cliente/servidor tiene overhead, pero PubSub/TSN alcanza tiempo real.", color: "FFB000" },
      { tag: "'REEMPLAZA A MQTT'", desc: "No: se complementan; incluso corren juntos (S11).", color: "27E5E5" },
      { tag: "'ES INSEGURO'", desc: "Al contrario: seguridad integrada, a diferencia de Modbus.", color: "22E06B" },
      { tag: "'ES SOLO SIEMENS'", desc: "Es un estándar abierto y neutral (OPC Foundation).", color: "C6FF00" },
    ], note: "OPC UA es un estándar abierto, seguro y capaz de tiempo real con PubSub/TSN. Los mitos vienen de experiencias con OPC Classic o con implementaciones mal configuradas.",
    notes: "Desmontar mitos comunes sobre OPC UA. Es abierto, seguro y moderno. Cierra la sesión con claridad." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 3", cols: 4, steps: [
      { n:"S10", title:"OPC UA", desc:"Interoperabilidad · hoy.", color:"C6FF00" },
      { n:"S11", title:"MQTT / UNS", desc:"Pub/sub y namespace unificado.", color:"27E5E5" },
      { n:"S12", title:"Gemelos digitales", desc:"Simulación y réplica.", color:"FFB000" },
      { n:"S13", title:"Datos / OEE", desc:"Gobierno de datos y analítica.", color:"22E06B" },
    ], notes: "S11 complementa OPC UA con MQTT y el Unified Namespace, cerrando la capa de integración." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "OPC UA", d: "Open Platform Communications Unified Architecture (IEC 62541)." },
      { t: "Espacio de direcciones", d: "Grafo de nodos navegable del servidor." },
      { t: "NodeId", d: "Identificador único de un nodo." },
      { t: "Companion spec", d: "Modelo de información estándar por dominio." },
      { t: "Sign & Encrypt", d: "Modo de seguridad con integridad y confidencialidad." },
      { t: "PubSub", d: "Patrón publicación/suscripción de OPC UA." },
      { t: "TSN", d: "Time-Sensitive Networking: Ethernet determinista." },
      { t: "umati", d: "Companion spec de máquinas-herramienta." },
    ], notes: "Vocabulario de OPC UA e interoperabilidad." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "OPC Foundation — OPC UA (tecnología y especificaciones)", url: "https://opcfoundation.org/about/opc-technologies/opc-ua/", acc: "libre" },
      { t: "OPC UA — especificaciones online (reference)", url: "https://reference.opcfoundation.org/", acc: "libre" },
      { t: "OPC Foundation — companion specs (umati, PackML, FX)", url: "https://opcfoundation.org/", acc: "libre" },
      { t: "open62541 — implementación abierta de OPC UA", url: "https://www.open62541.org/", acc: "libre" },
      { t: "python-asyncua — librería OPC UA (docs)", url: "https://opcua-asyncio.readthedocs.io/", acc: "libre" },
      { t: "IEC 62541 — OPC UA (texto normativo)", url: "https://webstore.iec.ch/", acc: "pago" },
    ], notes: "Fuentes de OPC UA y protocolos industriales." },

  { type: "closing", nextNum: 11, nextTitle: "MQTT, SPARKPLUG B Y EL UNIFIED NAMESPACE", nextDesc: "Publicación/suscripción ligera, Sparkplug B y el diseño del namespace unificado de la planta.", prompt: "root@planta:~# next --session 11 _",
    notes: "S11 completa la integración con MQTT y el UNS, la arquitectura de datos moderna de planta." },
];
