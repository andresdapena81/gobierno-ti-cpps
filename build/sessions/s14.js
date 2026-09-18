// S14 — Ciberseguridad industrial I: amenazas y arquitectura defensiva
module.exports = [
  { type: "cover", title: "CIBERSEGURIDAD\nINDUSTRIAL I", subtitle: "Amenazas al proceso físico, modelo Purdue e IEC 62443",
    notes: "Inicio de la Unidad 4. La seguridad OT no es la seguridad IT. Aquí se protege el proceso físico, donde un ataque puede dañar equipos y personas." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "OT no es IT", desc: "Por qué la seguridad industrial es distinta" },
    { title: "Amenazas e incidentes", desc: "Stuxnet, Industroyer, TRITON, Colonial, Norsk Hydro" },
    { title: "Modelo Purdue", desc: "Zonas, conductos y DMZ industrial" },
    { title: "IEC 62443", desc: "La norma de ciberseguridad industrial" },
    { title: "Modelado de amenazas", desc: "STRIDE aplicado a una arquitectura OT" },
    { title: "Cierre", desc: "Síntesis y referencias" },
  ], notes: "De por qué OT es distinta a cómo se protege (Purdue, 62443, modelado de amenazas)." },

  { type: "stats", sec: "CIBEROT", title: "La ciberseguridad OT en cifras",
    bigstats: [ {n:"A-I-C",label:"PRIORIDAD INVERTIDA"},{n:"62443",label:"NORMA IEC"},{n:"SL 1-4",label:"NIVELES DE SEGURIDAD"},{n:"20 años",label:"CICLO DE VIDA OT"} ],
    kvs: [ {k:"PRIORIDAD OT",v:"Disponibilidad > Integridad > Confidencialidad"},{k:"NORMA",v:"IEC 62443 (serie)"},{k:"GUÍA",v:"NIST SP 800-82 (S15)"},{k:"MODELO",v:"Purdue / IEC 62443 zonas y conductos"},{k:"RETO",v:"Legado no parcheable, cero paradas"},{k:"COBIT",v:"APO13, DSS05, EDM03" } ],
    notes: "La gran diferencia: en OT la prioridad CIA se invierte y los activos viven 20 años sin poder parchearse en caliente." },

  { type: "objectives", sec: "CIBEROT", title: "Objetivos de la sesión", items: [
    { lead: "Explicar", rest: "por qué la seguridad OT invierte las prioridades de la seguridad IT." },
    { lead: "Analizar", rest: "incidentes reales de ciberseguridad industrial." },
    { lead: "Aplicar", rest: "el modelo Purdue para segmentar una arquitectura IT/OT." },
    { lead: "Ubicar", rest: "la estructura y los niveles de seguridad de IEC 62443." },
    { lead: "Realizar", rest: "un modelado de amenazas STRIDE sobre un sistema OT." },
  ], notes: "Objetivo central: entender que la seguridad OT es un problema propio con soluciones propias." },

  // -------- SECCIÓN 1: OT ≠ IT --------
  { type: "section", num: 1, title: "LA SEGURIDAD OT NO ES LA SEGURIDAD IT", sub: "Prioridades, restricciones y consecuencias invertidas" },

  { type: "compare", sec: "OTvsIT", title: "IT frente a OT en seguridad",
    leftTitle: "Seguridad IT", leftItems: ["Prioridad: Confidencialidad","Parcheo frecuente, reinicios ok","Ciclo de vida 3–5 años","Impacto: datos y dinero","Actualizar es rutina"],
    rightTitle: "Seguridad OT", rightItems: ["Prioridad: Disponibilidad y seguridad física","No se parchea en caliente; cero paradas","Ciclo de vida 15–25 años","Impacto: equipos, ambiente y personas","Actualizar puede detener la producción"],
    leftColor: "27E5E5", rightColor: "FF3B30",
    foot: "La prioridad CIA se invierte: en OT, primero que no pare y no se altere; la confidencialidad va después.",
    notes: "La tabla central de la Unidad 4. La inversión de prioridades explica por qué las soluciones IT no se copian a OT." },

  { type: "concepts3", sec: "OTvsIT", title: "La triada, invertida en OT", items: [
      { k: "DISPONIBILIDAD", desc: "Lo primero: la producción no puede parar. Una parada cuesta y puede ser peligrosa.", ex: "Prioridad #1 OT", color: "C6FF00" },
      { k: "INTEGRIDAD", desc: "El proceso debe operar como se diseñó; un dato o comando alterado puede dañar.", ex: "Prioridad #2 OT", color: "27E5E5" },
      { k: "CONFIDENCIALIDAD", desc: "Importa, pero va después: no sirve un secreto perfecto si la planta explota.", ex: "Prioridad #3 OT", color: "FFB000" },
    ], note: "En IT el orden es C-I-A; en OT es A-I-C. Esta inversión cambia todo: qué se protege primero, qué riesgos se aceptan y cómo se responde a un incidente.",
    notes: "A-I-C en vez de C-I-A. Es la idea más importante de la seguridad OT. Repetirla." },

  { type: "grid", sec: "OTvsIT", title: "Las restricciones propias de OT", cols: 2, lead: "Por qué no se puede 'asegurar OT como IT'.",
    cards: [
      { tag: "LEGADO", desc: "Equipos de 15–20 años con sistemas operativos y protocolos sin seguridad.", color: "FF3B30" },
      { tag: "NO PARCHEABLE", desc: "Parchear exige parar la línea; a veces el fabricante ya no da soporte.", color: "FFB000" },
      { tag: "TIEMPO REAL", desc: "Un antivirus o cifrado no puede añadir latencia al control.", color: "27E5E5" },
      { tag: "SEGURIDAD FÍSICA", desc: "Un fallo de seguridad puede herir personas o dañar el ambiente.", color: "9D6BFF" },
    ], note: "El legado no parcheable, el tiempo real y las consecuencias físicas hacen que la seguridad OT exija compensaciones (segmentar, monitorear) en vez de las soluciones IT clásicas.",
    notes: "Estas restricciones obligan a controles compensatorios: si no puedo parchear, segmento y monitoreo. Base de Purdue." },

  { type: "phase", sec: "OTvsIT", title: "La convergencia que creó el problema", badge: "CONTEXTO",
    name: "OT ya no está aislada", what: "Durante décadas, OT estuvo 'air-gapped' (aislada). La Industria 4.0 (Unidades 2-3) la conectó a IT y a la nube para obtener datos y valor. Esa conexión trajo el valor... y las amenazas de IT al proceso físico. La seguridad OT es la respuesta a esa convergencia: proteger lo físico ahora que está conectado.",
    leftTag: "ANTES", tools: "OT aislada (air gap)", rightTag: "AHORA", seen: "OT conectada = OT expuesta",
    notes: "La convergencia IT/OT (que dio el valor de las unidades 2-3) es también la que creó el problema de seguridad. Trade-off." },

  { type: "callouts", sec: "OTvsIT", title: "El mito del air gap",
    stats: [ {n:"MITO",label:"'nuestra planta está aislada, no necesita seguridad'",color:"FF3B30"},{n:"REALIDAD",label:"USB, laptops de mantenimiento, acceso remoto y IIoT rompen el aislamiento",color:"FFB000"},{n:"STUXNET",label:"saltó un air gap real vía USB: el aislamiento no es una defensa",color:"27E5E5"} ],
    note: { body: "Muchas plantas creen estar aisladas, pero el air gap casi nunca es real: memorias USB, portátiles de proveedores, acceso remoto de fabricantes y sensores IIoT abren brechas. Confiar en el aislamiento es una de las causas más comunes de compromiso OT." },
    notes: "Desmontar el mito del air gap. Stuxnet lo demostró. El aislamiento no es una estrategia de seguridad válida hoy." },

  // -------- SECCIÓN 2: AMENAZAS E INCIDENTES --------
  { type: "section", num: 2, title: "AMENAZAS E INCIDENTES REALES", sub: "Lo que ya pasó en el mundo físico" },

  { type: "phase", sec: "INCIDENTES", title: "Stuxnet (2010)", badge: "EL PRIMERO",
    name: "El malware que rompió máquinas", what: "Un gusano dirigido a los PLC de las centrifugadoras de enriquecimiento de uranio en Irán. Saltó un air gap vía USB, se propagó y alteró la velocidad de las centrifugadoras mientras mostraba a los operadores valores normales. Demostró que el software puede destruir equipo físico: el nacimiento de la guerra ciber-física.",
    leftTag: "LECCIÓN", tools: "El air gap no protege; el software daña lo físico", rightTag: "AFECTÓ", seen: "Integridad y disponibilidad física",
    notes: "Stuxnet es el caso fundacional. Demostró que un ciberataque puede causar daño físico. Sofisticado y dirigido." },

  { type: "phase", sec: "INCIDENTES", title: "Industroyer y TRITON", badge: "INFRAESTRUCTURA CRÍTICA",
    name: "Apagones y sistemas de seguridad", what: "Industroyer/CrashOverride (2016) causó un apagón en Ucrania atacando directamente los protocolos de la red eléctrica. TRITON/TRISIS (2017) fue más allá: atacó los Sistemas Instrumentados de Seguridad (SIS) de una planta petroquímica, los que evitan explosiones. Apuntar al SIS significa apuntar a la vida humana.",
    leftTag: "LECCIÓN", tools: "Los atacantes van por el control y la seguridad", rightTag: "AFECTÓ", seen: "Disponibilidad y seguridad de personas",
    notes: "Industroyer (red eléctrica) y TRITON (sistemas de seguridad) muestran la escalada: de datos a vidas. TRITON es especialmente grave." },

  { type: "phase", sec: "INCIDENTES", title: "Colonial Pipeline y Norsk Hydro", badge: "RANSOMWARE",
    name: "Cuando IT tumba OT", what: "En ambos, el ataque golpeó IT (ransomware), pero detuvo OT: Colonial Pipeline (2021) paró el mayor oleoducto de combustible de EE. UU. por precaución; Norsk Hydro (2019) operó plantas en modo manual. No hubo que hackear el PLC: bastó con cifrar IT y romper la confianza en la frontera IT/OT.",
    leftTag: "LECCIÓN", tools: "Segmentar IT/OT es vital; el ransomware IT para OT", rightTag: "AFECTÓ", seen: "Disponibilidad de la producción",
    notes: "Colonial y Norsk Hydro: no atacaron OT directamente; el ransomware IT bastó. Argumento clave para la segmentación." },

  { type: "grid", sec: "INCIDENTES", title: "Qué enseñan los incidentes", cols: 2, lead: "Patrones que se repiten.",
    cards: [
      { tag: "OBJETIVO FÍSICO", desc: "El fin no es robar datos, es alterar o detener el proceso físico.", color: "FF3B30" },
      { tag: "VECTOR IT", desc: "La entrada suele ser IT (correo, USB, remoto), no OT directamente.", color: "FFB000" },
      { tag: "MOVIMIENTO LATERAL", desc: "El atacante cruza de IT a OT por falta de segmentación.", color: "27E5E5" },
      { tag: "SIGILO", desc: "Los ataques dirigidos (APT) son pacientes y ocultan su presencia.", color: "9D6BFF" },
    ], note: "El patrón: entrar por IT, moverse a OT por la frontera débil, y actuar sobre el proceso físico. La defensa se concentra en esa frontera (Purdue).",
    notes: "El patrón común justifica la arquitectura Purdue (sección 3): controlar la frontera IT/OT." },

  { type: "grid", sec: "INCIDENTES", title: "Actores de amenaza en OT", cols: 3, lead: "Quién ataca la infraestructura industrial.",
    cards: [
      { tag: "ESTADO-NACIÓN", desc: "APT con recursos: sabotaje, espionaje (Stuxnet, TRITON).", color: "FF3B30" },
      { tag: "CIBERCRIMEN", desc: "Ransomware por lucro (Colonial, Norsk Hydro).", color: "FFB000" },
      { tag: "HACKTIVISTA", desc: "Motivación ideológica contra infraestructura.", color: "27E5E5" },
      { tag: "INSIDER", desc: "Empleado o proveedor con acceso, malicioso o negligente.", color: "9D6BFF" },
      { tag: "OPORTUNISTA", desc: "Escaneo masivo que encuentra OT expuesta en internet (Shodan).", color: "FF6B35" },
      { tag: "PROVEEDOR", desc: "Compromiso de la cadena de suministro o del acceso remoto.", color: "C6FF00" },
    ], notes: "El perfil de amenaza (factor de diseño F5 de COBIT) determina contra quién nos defendemos. En OT conectada, es alto." },

  { type: "matrix", sec: "INCIDENTES", title: "Línea de tiempo de incidentes OT", firstW: 3.0,
    cols: ["Año", "Incidente", "Impacto"],
    rows: [
      ["2010", {t:"Stuxnet",color:"FF3B30"}, "Daño físico a centrifugadoras"],
      ["2015-16", {t:"Industroyer",color:"FFB000"}, "Apagón en Ucrania"],
      ["2017", {t:"TRITON",color:"FF3B30"}, "Ataque a sistemas de seguridad"],
      ["2019-21", {t:"Norsk / Colonial",color:"27E5E5"}, "Ransomware detiene producción"],
    ], notes: "La escalada histórica: de daño a equipos (2010) a amenaza a vidas (2017) y ransomware masivo (2021). La tendencia es creciente." },

  { type: "grid", sec: "INCIDENTES", title: "OT expuesta en internet", cols: 2, lead: "El problema no es teórico: hay OT accesible desde la red.",
    cards: [
      { tag: "SHODAN / CENSYS", desc: "Buscadores que indexan dispositivos OT expuestos en internet.", color: "FF3B30" },
      { tag: "PROTOCOLOS ABIERTOS", desc: "PLC y HMI con Modbus/etc. accesibles sin autenticación.", color: "FFB000" },
      { tag: "ACCESO REMOTO", desc: "Conexiones de mantenimiento mal aseguradas.", color: "27E5E5" },
      { tag: "LECCIÓN", desc: "Nunca exponer OT directamente a internet; usar VPN y DMZ.", color: "C6FF00" },
    ], note: "Buscadores como Shodan revelan miles de dispositivos OT expuestos. Un atacante oportunista no necesita ser sofisticado: solo buscar. La regla es simple: OT nunca directo a internet.",
    notes: "La exposición en Shodan es real y común. El control básico: nada de OT accesible desde internet. Base de la segmentación." },

  // -------- SECCIÓN 3: MODELO PURDUE --------
  { type: "section", num: 3, title: "MODELO PURDUE Y SEGMENTACIÓN", sub: "Arquitectura defensiva del piso de planta" },

  { type: "process", sec: "PURDUE", title: "Los niveles del modelo Purdue", cols: 3, steps: [
      { n:"0-1", title:"Proceso/Control", desc:"Sensores, PLC, DCS.", color:"FF6B35" },
      { n:2, title:"Supervisión", desc:"SCADA, HMI.", color:"FFB000" },
      { n:3, title:"Operaciones", desc:"MES, historiador.", color:"27E5E5" },
      { n:"3.5", title:"DMZ industrial", desc:"Zona desmilitarizada IT/OT.", color:"C6FF00" },
      { n:"4-5", title:"Empresa", desc:"ERP, IT corporativa.", color:"22E06B" },
      { n:"—", title:"Internet", desc:"Fuera del perímetro.", color:"9D6BFF" },
    ], notes: "El modelo Purdue (PERA) organiza la seguridad por niveles, como la pirámide ISA-95 (S07). La DMZ 3.5 es la clave." },

  { type: "phase", sec: "PURDUE", title: "La DMZ industrial (nivel 3.5)", badge: "LA FRONTERA",
    name: "Ningún tráfico directo IT↔OT", what: "La zona desmilitarizada industrial es la frontera controlada entre IT (niveles 4-5) y OT (niveles 0-3). Ningún tráfico cruza directamente: pasa por servidores intermedios (historiador espejo, jump server) en la DMZ. Así, un compromiso de IT no llega directo a OT. Es la defensa que faltó en Colonial y Norsk Hydro.",
    leftTag: "PRINCIPIO", tools: "Nada cruza IT↔OT sin pasar por la DMZ", rightTag: "EVITA", seen: "Que el ransomware IT alcance OT",
    notes: "La DMZ 3.5 es la pieza defensiva más importante. Rompe el movimiento lateral IT→OT. Concepto central." },

  { type: "grid", sec: "PURDUE", title: "Zonas y conductos (IEC 62443)", cols: 2, lead: "El modelo formal de segmentación de IEC 62443.",
    cards: [
      { tag: "ZONA", desc: "Agrupación de activos con iguales requisitos de seguridad.", color: "C6FF00" },
      { tag: "CONDUCTO", desc: "Canal controlado de comunicación entre zonas.", color: "27E5E5" },
      { tag: "PRINCIPIO", desc: "Definir zonas por criticidad y controlar todo conducto entre ellas.", color: "FFB000" },
      { tag: "MICROSEGMENTAR", desc: "A más granularidad, menor movimiento lateral posible.", color: "22E06B" },
    ], note: "IEC 62443 formaliza la segmentación en zonas (grupos de activos) y conductos (canales controlados). Es el modelo Purdue hecho norma y granular.",
    notes: "Zonas y conductos es el modelo de segmentación de 62443. Formaliza y refina el Purdue. Base del diseño de red OT." },

  { type: "grid", sec: "PURDUE", title: "Defensa en profundidad OT", cols: 3, lead: "Ninguna capa basta; se apilan.",
    cards: [
      { tag: "PERÍMETRO", desc: "Firewalls entre zonas y hacia IT.", color: "C6FF00" },
      { tag: "SEGMENTACIÓN", desc: "Zonas y conductos; DMZ industrial.", color: "27E5E5" },
      { tag: "CONTROL DE ACCESO", desc: "Identidad, mínimo privilegio, MFA para remoto.", color: "FFB000" },
      { tag: "MONITOREO", desc: "Detección de intrusiones específica de OT (IDS OT).", color: "22E06B" },
      { tag: "ENDURECIMIENTO", desc: "Deshabilitar servicios, cambiar credenciales por defecto.", color: "9D6BFF" },
      { tag: "RESPUESTA", desc: "Plan de respuesta a incidentes OT (S15).", color: "FF6B35" },
    ], notes: "Defensa en profundidad: capas que compensan la imposibilidad de parchear. Si una falla, otra contiene. Se ve el monitoreo y la respuesta en S15." },

  { type: "callouts", sec: "PURDUE", title: "La segmentación es la decisión #1",
    stats: [ {n:"MAYOR IMPACTO",label:"segmentar IT/OT es el control que más reduce el riesgo",color:"C6FF00"},{n:"GOBIERNO",label:"la arquitectura de segmentación es una decisión de gobierno, no solo de red",color:"27E5E5"},{n:"CASOS",label:"Colonial y Norsk Hydro fallaron en la frontera IT/OT",color:"FF3B30"} ],
    note: { body: "Si hubiera que elegir un solo control de seguridad OT, sería la segmentación IT/OT con DMZ. Es lo que impide que un problema de IT se convierta en una parada de producción. Diseñarla es una decisión de gobierno de arquitectura (APO03) y de riesgo (EDM03)." },
    notes: "Mensaje central: la segmentación es el control de mayor impacto. Conecta con gobierno (APO03, EDM03)." },

  { type: "grid", sec: "PURDUE", title: "Controles de red OT", cols: 3, lead: "Cómo se implementa la segmentación en la práctica.",
    cards: [
      { tag: "FIREWALLS OT", desc: "Cortafuegos entre zonas, con reglas de mínimo privilegio.", color: "C6FF00" },
      { tag: "DIODOS DE DATOS", desc: "Flujo unidireccional: el dato sale de OT sin que nada entre.", color: "27E5E5" },
      { tag: "JUMP SERVER", desc: "Único punto controlado para acceso a OT desde la DMZ.", color: "FFB000" },
      { tag: "VLAN / MICROSEG.", desc: "Segmentar hasta el nivel de celda.", color: "22E06B" },
      { tag: "MONITOREO PASIVO", desc: "IDS OT que observan sin interferir el proceso.", color: "9D6BFF" },
      { tag: "VPN + MFA", desc: "Acceso remoto cifrado y con doble factor.", color: "FF6B35" },
    ], notes: "Los controles concretos de segmentación. El diodo de datos es el más estricto: garantiza que nada entre a OT. El jump server controla el acceso." },

  // -------- SECCIÓN 4: IEC 62443 --------
  { type: "section", num: 4, title: "IEC 62443 — LA NORMA DE CIBERSEGURIDAD INDUSTRIAL", sub: "El marco de referencia del mundo OT" },

  { type: "phase", sec: "IEC62443", title: "El programa de seguridad del operador", badge: "62443-2-1",
    name: "Más que tecnología", what: "IEC 62443-2-1 exige al operador (asset owner) un programa de seguridad (CSMS): política, roles, gestión de riesgo, gestión de parches (cuando se pueda), respuesta a incidentes y mejora continua. Es el equivalente OT de un SGSI (ISO 27001). La seguridad no es comprar un firewall: es un programa gobernado.",
    leftTag: "INCLUYE", tools: "Política · roles · riesgo · parches · respuesta", rightTag: "SE ALINEA CON", seen: "ISO 27001, NIST CSF (S15)",
    notes: "62443-2-1 es el 'programa de gobierno' de la seguridad OT. Conecta con el CSF (S15) y con COBIT. La seguridad es un programa, no un producto." },

  { type: "grid", sec: "IEC62443", title: "Estructura de la serie", cols: 2, lead: "IEC 62443 es una familia de normas por audiencia.",
    cards: [
      { tag: "GENERAL (1-x)", desc: "Conceptos, terminología y modelos comunes.", color: "C6FF00" },
      { tag: "POLÍTICAS (2-x)", desc: "Programa de seguridad del operador (asset owner).", color: "27E5E5" },
      { tag: "SISTEMA (3-x)", desc: "Requisitos de seguridad del sistema (3-2 riesgo, 3-3 requisitos).", color: "FFB000" },
      { tag: "COMPONENTE (4-x)", desc: "Desarrollo seguro (4-1) y requisitos de componentes (4-2).", color: "22E06B" },
    ], note: "IEC 62443 cubre a los tres actores: el operador (2-x), el integrador (3-x) y el fabricante (4-x). Cada uno tiene responsabilidades de seguridad.",
    notes: "La serie se organiza por audiencia: operador, integrador, fabricante. La seguridad es responsabilidad compartida." },

  { type: "concepts3", sec: "IEC62443", title: "Los niveles de seguridad (SL)", items: [
      { k: "SL 1", desc: "Protección contra violaciones casuales o accidentales.", ex: "Errores, curiosos", color: "22E06B" },
      { k: "SL 2", desc: "Contra ataques intencionales con medios y motivación bajos.", ex: "Cibercrimen genérico", color: "FFB000" },
      { k: "SL 3 y 4", desc: "Contra ataques con medios sofisticados (SL3) y recursos extendidos, tipo estado-nación (SL4).", ex: "APT", color: "FF3B30" },
    ], note: "IEC 62443 define niveles de seguridad (SL 1-4) según la sofisticación del atacante del que hay que protegerse. El SL objetivo de cada zona se decide por su criticidad y el perfil de amenaza.",
    notes: "Los SL 1-4 escalan con la sofisticación del atacante. El SL objetivo de una zona es una decisión de gobierno de riesgo." },

  { type: "grid", sec: "IEC62443", title: "Los siete requisitos fundamentales (FR)", cols: 2, lead: "Las siete categorías de requisitos de seguridad de 62443.",
    cards: [
      { tag: "CONTROL DE ACCESO", desc: "Identificación, autenticación y control de uso.", color: "C6FF00" },
      { tag: "INTEGRIDAD", desc: "Integridad de sistemas y datos.", color: "27E5E5" },
      { tag: "CONFIDENCIALIDAD", desc: "Protección de la información.", color: "FFB000" },
      { tag: "FLUJO RESTRINGIDO", desc: "Segmentación y control del flujo de datos.", color: "22E06B" },
      { tag: "RESPUESTA OPORTUNA", desc: "Detección y respuesta a eventos.", color: "9D6BFF" },
      { tag: "DISPONIBILIDAD", desc: "Disponibilidad de recursos (lo primero en OT).", color: "FF3B30" },
    ], notes: "Los 7 FR estructuran los requisitos de seguridad. Nótese que 'disponibilidad de recursos' es un requisito propio, reflejando la prioridad OT." },

  { type: "phase", sec: "IEC62443", title: "62443 y COBIT — cómo se conectan", badge: "GOBIERNO + TÉCNICA",
    name: "De la política al control", what: "COBIT (APO13, DSS05, EDM03) gobierna la seguridad: fija el apetito de riesgo, asigna responsabilidad y exige un programa. IEC 62443 aporta el 'cómo' técnico específico de OT: zonas, conductos, niveles de seguridad y requisitos. NIST CSF (S15) los articula. Juntos cubren de la sala de juntas al PLC.",
    leftTag: "COBIT GOBIERNA", tools: "Apetito, responsabilidad, programa", rightTag: "62443 IMPLEMENTA", seen: "Zonas, SL, requisitos técnicos",
    notes: "El patrón de capas otra vez: COBIT gobierna, 62443 implementa en OT. NIST CSF (S15) articula. Coherencia del curso." },

  { type: "callouts", sec: "IEC62443", title: "La seguridad como responsabilidad compartida",
    stats: [ {n:"OPERADOR",label:"define zonas, SL objetivo y opera el programa de seguridad",color:"C6FF00"},{n:"INTEGRADOR",label:"diseña e implementa el sistema cumpliendo los SL",color:"27E5E5"},{n:"FABRICANTE",label:"entrega componentes con desarrollo seguro (62443-4-1)",color:"FFB000"} ],
    note: { body: "IEC 62443 reparte la responsabilidad: el operador la gobierna, el integrador la construye y el fabricante entrega componentes seguros. En las compras, el operador puede EXIGIR cumplimiento de 62443 al integrador y al fabricante: gobierno por contrato." },
    notes: "La seguridad OT es compartida. El operador puede exigir 62443 en compras: gobierno vía adquisición (principio 3 de 38500)." },

  // -------- SECCIÓN 5: MODELADO DE AMENAZAS --------
  { type: "section", num: 5, title: "MODELADO DE AMENAZAS", sub: "Pensar como el atacante, antes que el atacante" },

  { type: "grid", sec: "STRIDE", title: "STRIDE aplicado a OT", cols: 3, lead: "Seis categorías de amenaza para revisar cada componente.",
    cards: [
      { tag: "SPOOFING", desc: "Suplantar un dispositivo o usuario (falso PLC).", color: "C6FF00" },
      { tag: "TAMPERING", desc: "Alterar datos o comandos (cambiar un setpoint).", color: "27E5E5" },
      { tag: "REPUDIATION", desc: "Negar una acción sin trazabilidad (sin logs).", color: "FFB000" },
      { tag: "INFO DISCLOSURE", desc: "Fuga de recetas o datos de proceso.", color: "22E06B" },
      { tag: "DENIAL OF SERVICE", desc: "Detener el proceso (lo más grave en OT).", color: "FF3B30" },
      { tag: "ELEVATION", desc: "Escalar privilegios en el sistema de control.", color: "9D6BFF" },
    ], notes: "STRIDE (Microsoft) da una lista sistemática para buscar amenazas en cada componente. En OT, DoS y Tampering son las más críticas." },

  { type: "phase", sec: "STRIDE", title: "Cómo modelar amenazas de un sistema OT", badge: "MÉTODO",
    name: "Cuatro pasos", what: "1) Dibuja la arquitectura y sus flujos (usa ISA-95/Purdue). 2) Identifica activos críticos y fronteras de confianza. 3) Aplica STRIDE a cada componente y flujo: ¿es vulnerable a cada letra? 4) Prioriza por impacto (físico primero) y define controles. El resultado alimenta el registro de riesgos (APO12) y el diseño de seguridad.",
    leftTag: "ENTRADA", tools: "Diagrama de arquitectura (S07-08)", rightTag: "SALIDA", seen: "Amenazas priorizadas y controles",
    notes: "El modelado de amenazas es una actividad concreta. Parte del diagrama de arquitectura del proyecto. Se practica en clase." },

  { type: "grid", sec: "STRIDE", title: "Actividad en clase — modelar una celda", cols: 2, lead: "Ejercicio guiado sobre una arquitectura OT.",
    cards: [
      { tag: "EL SISTEMA", desc: "Una celda: PLC, HMI, sensor IIoT, acceso remoto de proveedor.", color: "C6FF00" },
      { tag: "LAS FRONTERAS", desc: "Identificar dónde el atacante podría cruzar (remoto, USB, red).", color: "27E5E5" },
      { tag: "STRIDE", desc: "Por componente: ¿spoofing del sensor? ¿DoS del PLC? ¿tampering del setpoint?", color: "FFB000" },
      { tag: "CONTROLES", desc: "Proponer segmentación, autenticación, monitoreo por amenaza.", color: "22E06B" },
    ], note: "En clase se modela una celda OT con STRIDE. El ejercicio conecta la teoría (amenazas) con el diseño (controles) y con el proyecto.",
    notes: "Actividad práctica de la sesión. Los estudiantes modelan amenazas de una celda antes del Lab 9 de S15." },

  { type: "grid", sec: "STRIDE", title: "Herramientas y catálogos de amenazas", cols: 3, lead: "Recursos para el modelado y el análisis.",
    cards: [
      { tag: "MITRE ATT&CK ICS", desc: "Catálogo de tácticas y técnicas reales de ataque a OT.", color: "C6FF00" },
      { tag: "STRIDE", desc: "Heurística de seis categorías para el modelado.", color: "27E5E5" },
      { tag: "DFD", desc: "Diagramas de flujo de datos para ubicar fronteras de confianza.", color: "FFB000" },
      { tag: "ATAQUE-ÁRBOL", desc: "Descomponer un objetivo del atacante en pasos.", color: "22E06B" },
      { tag: "CVE / ICS-CERT", desc: "Vulnerabilidades conocidas de productos OT (CISA).", color: "9D6BFF" },
      { tag: "KILL CHAIN ICS", desc: "Modelo de las etapas de un ataque industrial.", color: "FF6B35" },
    ], notes: "MITRE ATT&CK for ICS es el catálogo de referencia de técnicas reales. Se combina con STRIDE (modelado) y CVE/ICS-CERT (vulnerabilidades conocidas)." },

  { type: "keypoints", sec: "STRIDE", title: "Ideas para el proyecto", items: [
      { label: "Invierte la triada", desc: "En OT, primero disponibilidad e integridad." },
      { label: "No confíes en el air gap", desc: "Asume que la frontera IT/OT es porosa." },
      { label: "Segmenta", desc: "DMZ industrial y zonas/conductos (62443)." },
      { label: "Exige 62443", desc: "En compras de sistemas y componentes OT." },
      { label: "Modela amenazas", desc: "STRIDE sobre tu arquitectura antes de diseñar controles." },
    ], notes: "Orientaciones para el proyecto. La evaluación de riesgo IT/OT (Lab 9) se hace en S15." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "OT ≠ IT", desc: "La prioridad CIA se invierte: A-I-C." },
      { label: "Incidentes", desc: "Stuxnet, TRITON, Colonial: el software daña lo físico." },
      { label: "Purdue / DMZ", desc: "La segmentación IT/OT es el control #1." },
      { label: "IEC 62443", desc: "Zonas, conductos, SL 1-4; responsabilidad compartida." },
      { label: "Modelado", desc: "STRIDE para hallar amenazas antes que el atacante." },
    ], notes: "Repaso. Verificar la inversión de la triada y el papel de la segmentación." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 4", cols: 4, steps: [
      { n:"S13", title:"Datos / OEE", desc:"Cierre U3.", color:"8C8C8C" },
      { n:"S14", title:"Ciber OT I", desc:"Amenazas y arquitectura · hoy.", color:"C6FF00" },
      { n:"S15", title:"Ciber OT II", desc:"Riesgo, cumplimiento, continuidad.", color:"27E5E5" },
      { n:"S16", title:"Caso de negocio", desc:"Hoja de ruta · cierre del curso.", color:"FFB000" },
    ], notes: "S15 completa la ciberseguridad con gestión de riesgo, cumplimiento (normativa colombiana) y continuidad." },

  { type: "grid", sec: "CIERRE", title: "Mitos de la seguridad OT", cols: 2, lead: "Ideas peligrosas que conviene desmontar.",
    cards: [
      { tag: "'ESTAMOS AISLADOS'", desc: "El air gap casi nunca es real (USB, remoto, IIoT).", color: "FF3B30" },
      { tag: "'NADIE NOS ATACARÍA'", desc: "El ransomware y el escaneo son oportunistas, no dirigidos.", color: "FFB000" },
      { tag: "'ES COSA DE TI'", desc: "La seguridad OT es responsabilidad de planta y de gobierno.", color: "27E5E5" },
      { tag: "'UN FIREWALL BASTA'", desc: "Se necesita defensa en profundidad y un programa.", color: "9D6BFF" },
    ], note: "Estos cuatro mitos explican por qué muchas plantas están expuestas. Desmontarlos es el primer paso cultural hacia una seguridad OT real.",
    notes: "Los mitos son barreras culturales. Desmontarlos es parte del gobierno de la seguridad (cultura, componente de COBIT)." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "OT security", d: "Ciberseguridad de la tecnología de operación." },
      { t: "A-I-C", d: "Prioridad OT: disponibilidad, integridad, confidencialidad." },
      { t: "Air gap", d: "Aislamiento físico de la red (a menudo ilusorio)." },
      { t: "Modelo Purdue", d: "Arquitectura de referencia por niveles (PERA)." },
      { t: "DMZ industrial", d: "Zona de frontera controlada IT/OT (nivel 3.5)." },
      { t: "Zona / conducto", d: "Segmentación de IEC 62443." },
      { t: "SL 1-4", d: "Niveles de seguridad de IEC 62443." },
      { t: "STRIDE", d: "Método de modelado de amenazas (6 categorías)." },
    ], notes: "Vocabulario de ciberseguridad industrial." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "NIST SP 800-82 Rev.3 — OT Security (equivale a 62443 en la práctica)", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final", acc: "libre" },
      { t: "MITRE ATT&CK for ICS — tácticas y técnicas en OT", url: "https://attack.mitre.org/matrices/ics/", acc: "libre" },
      { t: "Langner — To Kill a Centrifuge (análisis de Stuxnet)", url: "https://www.langner.com/to-kill-a-centrifuge/", acc: "libre" },
      { t: "Dragos — informes de amenazas OT (TRITON, Industroyer)", url: "https://www.dragos.com/resources/", acc: "libre" },
      { t: "Williams — Purdue Enterprise Reference Architecture (PERA)", url: "https://en.wikipedia.org/wiki/Purdue_Enterprise_Reference_Architecture", acc: "libre" },
      { t: "IEC 62443 — serie de ciberseguridad industrial (texto normativo)", url: "https://webstore.iec.ch/", acc: "pago" },
    ], notes: "Fuentes de ciberseguridad industrial e incidentes reales." },

  { type: "closing", nextNum: 15, nextTitle: "CIBERSEGURIDAD INDUSTRIAL II", nextDesc: "NIST CSF 2.0, evaluación de riesgo IT/OT, marco legal colombiano y continuidad del negocio.", prompt: "root@planta:~# next --session 15 _",
    notes: "S15 completa la seguridad con gestión de riesgo, cumplimiento y continuidad, y el Lab 9 de evaluación de riesgo." },
];
