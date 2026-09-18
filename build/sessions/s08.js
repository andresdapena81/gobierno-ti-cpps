// S08 — RAMI 4.0 y el Asset Administration Shell
module.exports = [
  { type: "cover", title: "RAMI 4.0\n& EL AAS", subtitle: "El modelo de arquitectura de referencia de Industria 4.0 y el gemelo administrativo del activo",
    notes: "Octava sesión. RAMI 4.0 añade a la jerarquía de ISA-95 dos ejes: capas y ciclo de vida. El AAS es el 'pasaporte digital' del activo." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Qué es RAMI 4.0", desc: "El cubo de arquitectura de referencia (DIN SPEC 91345)" },
    { title: "Los tres ejes", desc: "Capas, ciclo de vida y jerarquía" },
    { title: "El AAS", desc: "Asset Administration Shell y sus submodelos" },
    { title: "RAMI frente a otros", desc: "IIRA e ISA-95: cómo se relacionan" },
    { title: "RAMI en la práctica", desc: "Mapear decisiones y el hilo digital" },
    { title: "Cierre", desc: "Síntesis, glosario y referencias" },
  ], notes: "De un modelo abstracto (el cubo) a algo tangible (el AAS) y su uso en gobierno." },

  { type: "stats", sec: "RAMI", title: "RAMI 4.0 en cifras",
    bigstats: [ {n:3,label:"EJES"},{n:6,label:"CAPAS"},{n:"91345",label:"DIN SPEC"},{n:"AAS",label:"COMPONENTE I4.0"} ],
    kvs: [ {k:"ORIGEN",v:"Plattform Industrie 4.0 (Alemania)"},{k:"NORMA",v:"DIN SPEC 91345 (2016)"},{k:"EJE 1",v:"Capas (arquitectura) — 6"},{k:"EJE 2",v:"Ciclo de vida y flujo de valor (IEC 62890)"},{k:"EJE 3",v:"Jerarquía (ISA-95 + IEC 62264) — extendida"},{k:"NÚCLEO",v:"Asset Administration Shell (AAS)"} ],
    notes: "RAMI 4.0 integra tres normas en un cubo: arquitectura (capas), ciclo de vida (62890) y jerarquía (62264 extendida)." },

  { type: "objectives", sec: "RAMI", title: "Objetivos de la sesión", items: [
    { lead: "Explicar", rest: "el propósito y la estructura del cubo RAMI 4.0." },
    { lead: "Describir", rest: "los tres ejes: capas, ciclo de vida y jerarquía." },
    { lead: "Definir", rest: "el Asset Administration Shell y sus submodelos." },
    { lead: "Comparar", rest: "RAMI 4.0 con IIRA y con ISA-95." },
    { lead: "Mapear", rest: "una decisión de gobierno sobre el cubo RAMI 4.0." },
  ], notes: "Objetivo práctico: usar RAMI como mapa para ubicar dónde ocurre cada decisión ciber-física." },

  // -------- SECCIÓN 1: QUÉ ES --------
  { type: "section", num: 1, title: "QUÉ ES RAMI 4.0", sub: "Un mapa tridimensional de la fábrica digital" },

  { type: "concepts3", sec: "RAMI", title: "El problema que resuelve", items: [
      { k: "COMPLEJIDAD", desc: "Industria 4.0 mezcla TI, OT, ciclo de vida y muchos niveles. Nadie ve el todo.", ex: "Caos de siglas", color: "FF3B30" },
      { k: "MAPA COMÚN", desc: "RAMI 4.0 da un marco tridimensional para ubicar cualquier elemento o decisión.", ex: "El 'cubo'", color: "C6FF00" },
      { k: "LENGUAJE", desc: "Permite que ingenieros, TI y negocio hablen del mismo punto del sistema.", ex: "Coordenadas comunes", color: "27E5E5" },
    ], note: "RAMI 4.0 (Reference Architectural Model Industrie 4.0) es un mapa: no dice qué comprar, sino dónde está cada cosa y decisión en el sistema ciber-físico.",
    notes: "RAMI es un marco de orientación, no un producto. Su valor es dar coordenadas comunes a un sistema complejo." },

  { type: "grid", sec: "RAMI", title: "El cubo de tres dimensiones", cols: 3, lead: "RAMI 4.0 se representa como un cubo con tres ejes ortogonales.",
    cards: [
      { tag: "EJE VERTICAL · CAPAS", desc: "Seis capas de la arquitectura: de lo físico (activo) a lo funcional y de negocio.", color: "C6FF00" },
      { tag: "EJE IZQUIERDO · CICLO DE VIDA", desc: "Ciclo de vida y flujo de valor: de tipo a instancia, del diseño al servicio.", color: "27E5E5" },
      { tag: "EJE DERECHO · JERARQUÍA", desc: "Niveles jerárquicos: de producto a mundo conectado (ISA-95 extendido).", color: "FFB000" },
      { tag: "UN PUNTO", desc: "Cualquier elemento se ubica por sus tres coordenadas: capa × fase × nivel.", color: "22E06B" },
      { tag: "PROPÓSITO", desc: "Estructurar, comunicar y estandarizar Industria 4.0.", color: "9D6BFF" },
      { tag: "ORIGEN", desc: "Plattform Industrie 4.0; DIN SPEC 91345 (2016).", color: "FF6B35" },
    ], notes: "El cubo es la imagen icónica de RAMI. Cada punto = una capa, una fase del ciclo de vida y un nivel jerárquico." },

  { type: "grid", sec: "RAMI", title: "Qué NO es RAMI 4.0", cols: 2, lead: "Aclarar el alcance evita malentendidos.",
    cards: [
      { tag: "NO ES ARQUITECTURA CONCRETA", desc: "No es un diseño listo para implementar; es un marco de referencia.", color: "FF3B30" },
      { tag: "NO ES UN PRODUCTO", desc: "Ningún fabricante 'vende RAMI'; es un modelo abierto y neutral.", color: "FFB000" },
      { tag: "NO REEMPLAZA ISA-95", desc: "Lo extiende: la jerarquía de RAMI incluye y amplía la de ISA-95.", color: "27E5E5" },
      { tag: "SÍ ES UN MAPA", desc: "Un sistema de coordenadas para ubicar y comunicar elementos y decisiones.", color: "C6FF00" },
    ], notes: "RAMI complementa a ISA-95, no lo sustituye. Es un mapa conceptual, no un plano de construcción." },

  { type: "phase", sec: "RAMI", title: "Por qué a un ingeniero de gobierno le sirve", badge: "UTILIDAD",
    name: "Ubicar la decisión", what: "Ante una iniciativa (p. ej. un gemelo digital de una línea), RAMI permite preguntar: ¿en qué capa actúa (información, funcional)? ¿en qué fase del ciclo de vida (desarrollo, operación)? ¿en qué nivel jerárquico (estación, planta)? Eso clarifica el alcance, los responsables y los riesgos de la decisión.",
    leftTag: "PREGUNTAS", tools: "¿Qué capa? ¿Qué fase? ¿Qué nivel?", rightTag: "RESULTADO", seen: "Alcance y responsables claros",
    notes: "RAMI como herramienta de gobierno: ubicar la decisión en el cubo revela alcance y stakeholders." },

  { type: "callouts", sec: "RAMI", title: "RAMI en el ecosistema de estándares",
    stats: [ {n:"INTEGRA",label:"tres normas: capas (arquitectura), ciclo de vida (62890), jerarquía (62264)",color:"C6FF00"},{n:"ABIERTO",label:"neutral respecto de fabricantes; base de interoperabilidad",color:"27E5E5"},{n:"EUROPEO",label:"referencia dominante en Europa; IIRA lo es en EE. UU.",color:"FFB000"} ],
    note: { body: "RAMI 4.0 no compite con ISA-95: lo envuelve. Toma la jerarquía de ISA-95, le añade el eje de capas (arquitectura) y el de ciclo de vida, y así cubre toda la vida del activo, no solo la operación." },
    notes: "RAMI extiende ISA-95 con dos ejes nuevos. Es la referencia europea; IIRA la estadounidense (se compara en sección 4)." },

  { type: "quote", sec: "RAMI", text: "RAMI 4.0 no te dice qué construir; te dice dónde estás parado en la fábrica digital.", cite: "Síntesis del modelo",
    notes: "Puente a los tres ejes. RAMI es orientación, no prescripción." },

  { type: "process", sec: "RAMI", title: "El origen de RAMI 4.0", cols: 3, steps: [
      { n:2011, title:"Industrie 4.0", desc:"Iniciativa alemana (Hannover).", color:"8C8C8C" },
      { n:2013, title:"Recomendaciones", desc:"Informe Acatech.", color:"FFB000" },
      { n:2015, title:"RAMI propuesto", desc:"Plattform Industrie 4.0.", color:"27E5E5" },
      { n:2016, title:"DIN SPEC 91345", desc:"Estandarización de RAMI.", color:"C6FF00" },
      { n:"→", title:"AAS / IDTA", desc:"Estandarización del AAS.", color:"22E06B" },
      { n:"hoy", title:"Adopción", desc:"Interoperabilidad plug-and-produce.", color:"9D6BFF" },
    ], notes: "RAMI surge de la iniciativa Industrie 4.0 alemana. El AAS es su desarrollo práctico más reciente." },

  // -------- SECCIÓN 2: LOS TRES EJES --------
  { type: "section", num: 2, title: "LOS TRES EJES DEL CUBO", sub: "Capas, ciclo de vida y jerarquía" },

  { type: "concepts3", sec: "EJES", title: "Las capas como un 'OSI industrial'", items: [
      { k: "ABSTRACCIÓN", desc: "Como el modelo OSI de redes, RAMI apila capas de lo físico a lo abstracto.", ex: "Asset → Business", color: "C6FF00" },
      { k: "SEPARACIÓN", desc: "Cada capa tiene una responsabilidad clara; un cambio en una no rompe las otras.", ex: "Modularidad", color: "27E5E5" },
      { k: "INTEROPERABILIDAD", desc: "Estandarizar por capa permite que sistemas distintos se integren.", ex: "OPC UA en Communication", color: "FFB000" },
    ], note: "Pensar las capas de RAMI como un 'OSI de la fábrica' ayuda: cada capa aísla una preocupación y se estandariza por separado.",
    notes: "La analogía con OSI (redes) hace intuitivas las seis capas. Cada una se estandariza y evoluciona por separado." },

  // ---- marcador ----

  { type: "grid", sec: "EJES", title: "Eje 1 — Las seis capas", cols: 3, lead: "De abajo (lo físico) hacia arriba (el negocio).",
    cards: [
      { tag: "ASSET (ACTIVO)", desc: "El objeto físico real: máquina, sensor, producto, persona.", color: "FF6B35" },
      { tag: "INTEGRATION", desc: "La transición de lo físico a lo digital: sensores, HMI, RFID.", color: "FFB000" },
      { tag: "COMMUNICATION", desc: "Protocolos y redes que transportan los datos (OPC UA).", color: "22E06B" },
      { tag: "INFORMATION", desc: "Los datos y su modelo semántico: qué significan.", color: "27E5E5" },
      { tag: "FUNCTIONAL", desc: "Las funciones y servicios que operan sobre la información.", color: "C6FF00" },
      { tag: "BUSINESS", desc: "Los procesos de negocio, reglas y modelos comerciales.", color: "9D6BFF" },
    ], notes: "Las seis capas van del activo físico al negocio. Recuerdan a un modelo de red (OSI) pero para la fábrica digital." },

  { type: "phase", sec: "EJES", title: "Eje 2 — Ciclo de vida y flujo de valor", badge: "IEC 62890",
    name: "Tipo frente a instancia", what: "Distingue el TIPO (el diseño, la definición del producto o de la máquina) de la INSTANCIA (cada unidad real fabricada y en operación). Cubre desde el desarrollo hasta el mantenimiento y el retiro. Permite gobernar el activo a lo largo de toda su vida, no solo cuando produce.",
    leftTag: "TIPO", tools: "Diseño, desarrollo, prototipo", rightTag: "INSTANCIA", seen: "Producción, uso, mantenimiento, retiro",
    notes: "El eje de ciclo de vida (IEC 62890) es lo que ISA-95 no tiene. Distinguir 'tipo' (el plano) de 'instancia' (la máquina real) es clave para el gemelo y la trazabilidad." },

  { type: "grid", sec: "EJES", title: "Eje 3 — Niveles jerárquicos", cols: 3, lead: "La jerarquía de ISA-95, extendida hacia arriba y hacia abajo.",
    cards: [
      { tag: "PRODUCT", desc: "El producto mismo como parte del sistema (nuevo respecto de ISA-95).", color: "C6FF00" },
      { tag: "FIELD DEVICE", desc: "Dispositivo de campo: sensor, actuador inteligente.", color: "FFB000" },
      { tag: "CONTROL DEVICE", desc: "Controlador: PLC, DCS.", color: "22E06B" },
      { tag: "STATION / WORK CENTER", desc: "Estación o centro de trabajo.", color: "27E5E5" },
      { tag: "WORK UNIT / ENTERPRISE", desc: "Planta y empresa (como en ISA-95).", color: "9D6BFF" },
      { tag: "CONNECTED WORLD", desc: "Mundo conectado: cadenas de valor entre empresas (nuevo).", color: "FF6B35" },
    ], notes: "RAMI extiende ISA-95: añade 'product' abajo y 'connected world' arriba. Reconoce que el producto y la red interempresa importan." },

  { type: "phase", sec: "EJES", title: "Cómo se lee un punto del cubo", badge: "MÉTODO",
    name: "Tres coordenadas", what: "Cualquier elemento se ubica por (capa, fase del ciclo de vida, nivel jerárquico). Ejemplo: el modelo de datos de un sensor de vibración durante la operación de una máquina = (Information, Instancia-Uso, Field Device). Esa terna define qué es, en qué momento de su vida y en qué nivel actúa.",
    leftTag: "EJEMPLO", tools: "(Information, Uso, Field Device)", rightTag: "PARA QUÉ", seen: "Clarificar alcance y responsables",
    notes: "Ejercicio mental: ubicar elementos en el cubo. Refuerza la lógica tridimensional." },

  { type: "matrix", sec: "EJES", title: "Ubicando decisiones en el cubo", firstW: 4.2,
    cols: ["Decisión", "Capa", "Nivel"],
    rows: [
      ["Elegir protocolo OPC UA", {t:"Communication",color:"22E06B"}, "Field/Control"],
      ["Modelo de datos del lote", {t:"Information",color:"27E5E5"}, "Station/Work"],
      ["Regla de negocio de calidad", {t:"Business",color:"9D6BFF"}, "Enterprise"],
      ["Sensor de temperatura", {t:"Asset/Integration",color:"FF6B35"}, "Field Device"],
    ], notes: "Ubicar decisiones en el cubo aclara quién debe participar y qué estándares aplican. Base del taller." },

  { type: "callouts", sec: "EJES", title: "Por qué tres ejes y no uno",
    stats: [ {n:"ISA-95",label:"un solo eje (jerarquía): dónde ocurre, pero no en qué momento ni capa",color:"FFB000"},{n:"RAMI",label:"tres ejes: dónde, cuándo (ciclo de vida) y en qué capa de abstracción",color:"C6FF00"},{n:"GEMELO",label:"el eje de ciclo de vida es lo que hace posible el gemelo digital",color:"27E5E5"} ],
    note: { body: "La gran aportación de RAMI sobre ISA-95 es el eje de ciclo de vida: permite gobernar el activo desde su diseño hasta su retiro, y sincronizar el gemelo digital con su instancia física a lo largo del tiempo." },
    notes: "El eje de ciclo de vida es la clave de RAMI y del gemelo digital (S12). Sin él, no hay 'tipo vs instancia'." },

  // -------- SECCIÓN 3: EL AAS --------
  { type: "section", num: 3, title: "EL ASSET ADMINISTRATION SHELL", sub: "El gemelo administrativo del activo" },

  { type: "concepts3", sec: "AAS", title: "Qué es el AAS", items: [
      { k: "AAS", desc: "Asset Administration Shell: la representación digital estandarizada de un activo, su interfaz con el mundo I4.0.", ex: "Pasaporte digital", color: "C6FF00" },
      { k: "COMPONENTE I4.0", desc: "Activo + AAS = 'componente Industrie 4.0', la unidad básica interoperable.", ex: "Activo + su cáscara", color: "27E5E5" },
      { k: "GEMELO ADMINISTRATIVO", desc: "El AAS es un tipo de gemelo digital centrado en datos, capacidades e identidad, no en la simulación física.", ex: "Se liga a S12", color: "FFB000" },
    ], note: "El AAS es la 'cáscara' digital que envuelve un activo y expone, de forma estándar, su identidad, sus datos y sus capacidades a otros sistemas.",
    notes: "El AAS es el habilitador práctico de la interoperabilidad de RAMI. Es un gemelo 'administrativo' (datos/identidad), complementario al gemelo de simulación (S12)." },

  { type: "grid", sec: "AAS", title: "Anatomía del AAS — submodelos", cols: 3, lead: "El AAS organiza la información del activo en submodelos estandarizados.",
    cards: [
      { tag: "IDENTIFICACIÓN", desc: "Identidad única del activo (fabricante, serie, tipo).", color: "C6FF00" },
      { tag: "DOCUMENTACIÓN", desc: "Manuales, planos, certificados del activo.", color: "27E5E5" },
      { tag: "CAPACIDADES", desc: "Qué puede hacer el activo (skills, funciones).", color: "FFB000" },
      { tag: "ESTADO / DATOS", desc: "Variables operativas y de condición en tiempo real.", color: "22E06B" },
      { tag: "MANTENIMIENTO", desc: "Historial y plan de mantenimiento.", color: "9D6BFF" },
      { tag: "SEGURIDAD", desc: "Certificados y propiedades de seguridad del activo.", color: "FF3B30" },
    ], notes: "Los submodelos son extensibles y estandarizables por dominio. Permiten que máquinas de distintos fabricantes 'se entiendan'." },

  { type: "grid", sec: "AAS", title: "Tipos de AAS", cols: 3, lead: "El AAS existe en distintas formas según su interacción.",
    cards: [
      { tag: "TIPO 1 · PASIVO", desc: "Archivo intercambiable (p. ej. un paquete AASX) que documenta el activo.", color: "27E5E5" },
      { tag: "TIPO 2 · REACTIVO", desc: "Servicio con API que responde consultas sobre el activo en tiempo real.", color: "C6FF00" },
      { tag: "TIPO 3 · PROACTIVO", desc: "Agente que negocia e interactúa autónomamente con otros AAS.", color: "FFB000" },
    ], note: "El AAS evoluciona de un archivo (tipo 1) a un agente autónomo (tipo 3). La visión final: activos que negocian su producción entre sí.",
    notes: "La progresión pasivo→reactivo→proactivo es la visión de la 'fábrica que se auto-organiza'. Hoy dominan tipos 1-2." },

  { type: "phase", sec: "AAS", title: "El AAS y la interoperabilidad", badge: "POR QUÉ IMPORTA",
    name: "Que las máquinas se entiendan", what: "Sin AAS, integrar una máquina nueva exige programar su interfaz a medida. Con AAS, la máquina 'se presenta' con un formato estándar: identidad, capacidades y datos. Esto reduce el costo de integración, el lock-in y el tiempo de puesta en marcha. Es interoperabilidad plug-and-produce.",
    leftTag: "BENEFICIO", tools: "Menos integración a medida · menos lock-in", rightTag: "GOBIERNO", seen: "Exigir AAS en las compras (adquisición)",
    notes: "El AAS ataca el lock-in de integración. El gobierno puede exigirlo en las especificaciones de compra (principio 3 de 38500)." },

  { type: "grid", sec: "AAS", title: "Estado de adopción del AAS", cols: 2, lead: "Dónde está la tecnología en 2024–2026.",
    cards: [
      { tag: "MADURANDO", desc: "Especificaciones IDTA en evolución; herramientas y ejemplos crecientes.", color: "FFB000" },
      { tag: "ADOPCIÓN TEMPRANA", desc: "Fabricantes de maquinaria empiezan a entregar AAS con sus equipos.", color: "27E5E5" },
      { tag: "SUBMODELOS ESTÁNDAR", desc: "Se estandarizan submodelos por dominio (placa de características, huella de carbono).", color: "C6FF00" },
      { tag: "REALIDAD PYME", desc: "Aún incipiente en la pyme; conviene conocerlo y exigirlo a futuro.", color: "9D6BFF" },
    ], note: "El AAS es tecnología emergente pero estratégica: hoy conviene conocerlo y empezar a exigirlo en compras de maquinaria nueva.",
    notes: "Actualizar expectativas: el AAS aún madura. Para el estudiante, lo relevante es conocerlo y anticiparlo en decisiones de compra." },

  { type: "callouts", sec: "AAS", title: "AAS y gemelo digital",
    stats: [ {n:"AAS",label:"gemelo administrativo: identidad, datos, capacidades, documentación",color:"C6FF00"},{n:"GEMELO SIM.",label:"gemelo de simulación: réplica del comportamiento físico (S12)",color:"27E5E5"},{n:"JUNTOS",label:"el AAS es la 'ficha'; el gemelo de simulación, el 'modelo que corre'",color:"FFB000"} ],
    note: { body: "AAS y gemelo digital de simulación son complementarios: el AAS estandariza la identidad y los datos del activo; el gemelo de simulación (S12) modela su comportamiento. Un CPPS maduro usa ambos." },
    notes: "Distinguir AAS (datos/identidad estandarizados) del gemelo de simulación (comportamiento). Anticipa S12." },

  { type: "phase", sec: "AAS", title: "Formatos y herramientas del AAS", badge: "PRÁCTICA",
    name: "AASX y ecosistema", what: "El AAS se materializa en el formato de paquete AASX (un archivo intercambiable) y se manipula con herramientas como el AASX Package Explorer y servidores AAS de referencia. Existen SDK para leer/escribir submodelos. El estudiante debe saber que hay un tooling concreto detrás del concepto.",
    leftTag: "FORMATO", tools: "AASX · AASX Package Explorer · servidores AAS", rightTag: "ESTÁNDARES", seen: "Especificaciones IDTA (Part 1–5)",
    notes: "Aterriza el AAS con herramientas reales. Útil para quien quiera experimentar más allá de la teoría." },

  // -------- SECCIÓN 4: RAMI VS OTROS --------
  { type: "section", num: 4, title: "RAMI 4.0 FRENTE A OTROS MODELOS", sub: "IIRA e ISA-95: cómo encajan" },

  { type: "compare", sec: "COMPARA", title: "RAMI 4.0 vs IIRA",
    leftTitle: "RAMI 4.0 (Europa)", leftItems: ["Origen: Plattform Industrie 4.0","Enfoque: manufactura y producto","Tridimensional (cubo)","Fuerte en ciclo de vida","Núcleo: AAS"],
    rightTitle: "IIRA (EE. UU.)", rightItems: ["Origen: Industrial Internet Consortium","Enfoque: sistemas industriales amplios (IoT)","Basado en viewpoints","Fuerte en interoperabilidad de sistemas","Núcleo: patrones de conectividad"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    foot: "No compiten: RAMI y IIRA se han alineado (mapeo conjunto). Distintos énfasis, objetivos compatibles.",
    notes: "RAMI (manufactura, producto) e IIRA (sistemas industriales, IoT) son complementarios. Existe un mapeo oficial entre ambos." },

  { type: "grid", sec: "COMPARA", title: "RAMI y ISA-95 — la relación", cols: 2, lead: "RAMI no reemplaza a ISA-95; lo integra y lo amplía.",
    cards: [
      { tag: "ISA-95 EN RAMI", desc: "La jerarquía de ISA-95 es el eje 3 de RAMI, extendido con 'product' y 'connected world'.", color: "C6FF00" },
      { tag: "LO QUE AÑADE RAMI", desc: "El eje de capas (arquitectura) y el de ciclo de vida, ausentes en ISA-95.", color: "27E5E5" },
      { tag: "COMPLEMENTO", desc: "ISA-95 detalla la integración vertical; RAMI da el marco tridimensional completo.", color: "FFB000" },
      { tag: "EN LA PRÁCTICA", desc: "Se usan juntos: ISA-95 para integrar ERP-MES, RAMI para ubicar y comunicar.", color: "22E06B" },
    ], notes: "Mensaje clave: RAMI ⊃ ISA-95. La jerarquía de ISA-95 vive dentro de RAMI como uno de sus tres ejes." },

  { type: "grid", sec: "COMPARA", title: "Modelos de referencia — panorama", cols: 3, lead: "El ecosistema de marcos de arquitectura industrial.",
    cards: [
      { tag: "RAMI 4.0", desc: "Marco tridimensional europeo; núcleo AAS.", color: "C6FF00" },
      { tag: "IIRA", desc: "Arquitectura del internet industrial (EE. UU.).", color: "27E5E5" },
      { tag: "ISA-95 / 62264", desc: "Integración empresa-control (vertical).", color: "FFB000" },
      { tag: "ISA-88", desc: "Control por lotes (batch).", color: "22E06B" },
      { tag: "NIST SM SYSTEMS", desc: "Marco de sistemas de manufactura inteligente.", color: "9D6BFF" },
      { tag: "TOGAF", desc: "Arquitectura empresarial general (negocio-TI).", color: "FF6B35" },
    ], notes: "No hay un único marco: se combinan según el propósito. El gobierno decide cuáles adopta como referencia (APO03)." },

  { type: "phase", sec: "COMPARA", title: "El hilo digital (digital thread)", badge: "CONCEPTO CLAVE",
    name: "Continuidad del dato en el ciclo de vida", what: "El hilo digital es el flujo de datos que conecta todas las fases del ciclo de vida de un producto o activo: diseño, producción, operación, servicio. RAMI (con su eje de ciclo de vida) y el AAS son sus habilitadores. Permite, por ejemplo, que un dato de diseño llegue hasta el mantenimiento de la máquina en planta.",
    leftTag: "HABILITADORES", tools: "Eje de ciclo de vida · AAS · gemelo", rightTag: "VALOR", seen: "Trazabilidad y mejora de extremo a extremo",
    notes: "El hilo digital es la promesa de continuidad de datos que RAMI hace posible. Conecta ingeniería, producción y servicio." },

  { type: "callouts", sec: "COMPARA", title: "No caer en la 'guerra de marcos'",
    stats: [ {n:"COMPLEMENTAN",label:"RAMI, IIRA, ISA-95 resuelven aspectos distintos y compatibles",color:"C6FF00"},{n:"MAPEAN",label:"existen mapeos oficiales entre ellos; no hay que elegir uno solo",color:"27E5E5"},{n:"GOBIERNO",label:"la decisión es qué referencias adoptar, no cuál es 'la mejor'",color:"FFB000"} ],
    note: { body: "Discutir cuál marco es 'superior' es estéril: se diseñaron para propósitos distintos y se han alineado. El gobierno de arquitectura (APO03) selecciona un conjunto coherente de referencias, no un único ganador." },
    notes: "Evitar el debate improductivo. Los marcos se combinan; el gobierno decide el conjunto de referencia." },

  // -------- SECCIÓN 5: RAMI EN LA PRÁCTICA --------
  { type: "section", num: 5, title: "RAMI 4.0 EN LA PRÁCTICA", sub: "De modelo abstracto a herramienta de gobierno" },

  { type: "phase", sec: "APLICACIÓN", title: "Caso — gemelo de una línea de empaque", badge: "CASO",
    name: "Ubicar el proyecto en RAMI", what: "Un proyecto de gemelo digital de una línea de empaque se mapea en RAMI: capas Information y Functional; fase Instancia-Uso del ciclo de vida; niveles Station y Work Unit. Ese mapeo revela que participan TI (información), ingeniería (funcional) y planta (operación), y que se apoya en el AAS de las máquinas.",
    leftTag: "COORDENADAS", tools: "(Information/Functional, Uso, Station/Work)", rightTag: "REVELA", seen: "Stakeholders, estándares y riesgos",
    notes: "Caso que muestra RAMI como herramienta de scoping. Mapear el proyecto en el cubo aclara quién y qué participa." },

  { type: "grid", sec: "APLICACIÓN", title: "Cómo usa RAMI el gobierno", cols: 2, lead: "RAMI aporta a varias tareas de gobierno de la tecnología.",
    cards: [
      { tag: "ALCANCE", desc: "Ubicar una iniciativa en el cubo delimita qué cubre y qué no.", color: "C6FF00" },
      { tag: "RESPONSABLES", desc: "Cada capa/nivel sugiere qué áreas y roles deben participar.", color: "27E5E5" },
      { tag: "ESTÁNDARES", desc: "Cada coordenada apunta a los estándares aplicables (OPC UA, ISA-95).", color: "FFB000" },
      { tag: "RIESGO", desc: "La capa de comunicación y el nivel de campo concentran el riesgo OT.", color: "FF3B30" },
    ], notes: "RAMI operacionaliza el gobierno de arquitectura: ubicar en el cubo aclara alcance, responsables, estándares y riesgo." },

  { type: "matrix", sec: "APLICACIÓN", title: "De capa RAMI a estándar del curso", firstW: 3.6,
    cols: ["Capa RAMI", "Qué contiene", "Estándar (sesión)"],
    rows: [
      ["Communication", {t:"Protocolos",color:"22E06B"}, "OPC UA / MQTT (S10-11)"],
      ["Information", {t:"Modelo de datos",color:"27E5E5"}, "ISA-95 (S07)"],
      ["Functional", {t:"Servicios",color:"C6FF00"}, "Gemelo / analítica (S12-13)"],
      ["Business", {t:"Reglas de negocio",color:"9D6BFF"}, "Gobierno (U1)"],
    ], notes: "Las capas de RAMI mapean directamente a las sesiones del curso. RAMI es el 'índice' de la Unidad 2-3." },

  { type: "phase", sec: "APLICACIÓN", title: "Lab de la Unidad 2 — modelar la arquitectura", badge: "SEGUIMIENTO",
    name: "ISA-95 + RAMI del proyecto", what: "Para el proceso del proyecto: 1) modela sus niveles ISA-95 (0–4) y los flujos de información. 2) Ubica sus elementos clave en el cubo RAMI (capa × ciclo de vida × nivel). 3) Identifica qué activos deberían tener AAS. Entregable: diagramas de arquitectura que alimentan el Entregable 2.",
    leftTag: "FORMATO", tools: "Diagrama ISA-95 + mapeo RAMI", rightTag: "ALIMENTA", seen: "Entregable 2 (semana 13)",
    notes: "Este lab (junto con S07) produce la arquitectura del Entregable 2. Herramientas: draw.io/Archi." },

  { type: "callouts", sec: "APLICACIÓN", title: "RAMI, en una frase por eje",
    stats: [ {n:"CAPAS",label:"¿en qué nivel de abstracción actúa? de lo físico al negocio",color:"C6FF00"},{n:"CICLO",label:"¿en qué momento de la vida del activo? tipo o instancia",color:"27E5E5"},{n:"JERARQUÍA",label:"¿en qué nivel de la fábrica? de producto a mundo conectado",color:"FFB000"} ],
    note: { body: "Tres preguntas resumen RAMI. Aplicarlas a cualquier iniciativa ciber-física la ubica en el cubo y revela su alcance, sus responsables y sus estándares. Esa es la utilidad práctica del modelo para el gobierno." },
    notes: "Síntesis operativa de RAMI en tres preguntas. Es la forma de usar el modelo sin perderse en la teoría." },

  { type: "keypoints", sec: "APLICACIÓN", title: "Ideas para el proyecto", items: [
      { label: "Mapea", desc: "Ubica tu proyecto en las tres dimensiones de RAMI." },
      { label: "Extiende ISA-95", desc: "Usa la jerarquía de S07 como el eje 3 de RAMI." },
      { label: "Piensa el ciclo de vida", desc: "No solo la operación: diseño, servicio y retiro." },
      { label: "Exige AAS", desc: "Considera pedir AAS en compras de maquinaria nueva." },
      { label: "Conecta con gobierno", desc: "La arquitectura es una decisión APO03." },
    ], notes: "Orientaciones para aplicar RAMI en el proyecto. Conecta técnica (U2) con gobierno (U1)." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "RAMI 4.0", desc: "Cubo de tres ejes: capas, ciclo de vida, jerarquía." },
      { label: "6 capas", desc: "Asset, Integration, Communication, Information, Functional, Business." },
      { label: "Ciclo de vida", desc: "Tipo vs instancia; lo que ISA-95 no tiene." },
      { label: "AAS", desc: "El gemelo administrativo estandarizado del activo." },
      { label: "Extiende ISA-95", desc: "RAMI envuelve la jerarquía de ISA-95." },
    ], notes: "Repaso. Verificar los tres ejes y el papel del AAS." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 2", cols: 4, steps: [
      { n:"S06", title:"I4.0 y CPS", desc:"Visión.", color:"8C8C8C" },
      { n:"S07", title:"ISA-95", desc:"Integración vertical.", color:"8C8C8C" },
      { n:"S08", title:"RAMI 4.0", desc:"Arquitectura y AAS · hoy.", color:"C6FF00" },
      { n:"S09", title:"IIoT/Edge/Nube", desc:"Cierre de la Unidad 2.", color:"27E5E5" },
    ], notes: "S09 cierra la Unidad 2 con las arquitecturas IIoT, edge y nube que dan sustrato a RAMI." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "RAMI 4.0", d: "Reference Architectural Model Industrie 4.0." },
      { t: "DIN SPEC 91345", d: "Norma que define RAMI 4.0." },
      { t: "AAS", d: "Asset Administration Shell: gemelo administrativo del activo." },
      { t: "Componente I4.0", d: "Activo más su AAS." },
      { t: "Capas RAMI", d: "Asset, Integration, Communication, Information, Functional, Business." },
      { t: "Tipo / instancia", d: "El diseño vs la unidad real (ciclo de vida)." },
      { t: "Hilo digital", d: "Continuidad de datos en todo el ciclo de vida." },
      { t: "IIRA", d: "Industrial Internet Reference Architecture (EE. UU.)." },
    ], notes: "Vocabulario de arquitectura de referencia." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "Plattform Industrie 4.0 — RAMI 4.0 y AAS (documentos)", url: "https://www.plattform-i40.de/", acc: "libre" },
      { t: "IDTA — Asset Administration Shell (especificaciones)", url: "https://industrialdigitaltwin.org/", acc: "libre" },
      { t: "Industrial Internet Consortium — IIRA", url: "https://www.iiconsortium.org/iira/", acc: "libre" },
      { t: "DIN SPEC 91345 (2016) — RAMI 4.0 (texto normativo)", url: "https://www.dinmedia.de/en/technical-rule/din-spec-91345/250940128", acc: "pago" },
      { t: "IEC 62890 — gestión del ciclo de vida (norma)", url: "https://webstore.iec.ch/", acc: "pago" },
      { t: "IEC 62264 / ISA-95 — jerarquía base (eje 3)", url: "https://www.isa.org/", acc: "pago" },
    ], notes: "Fuentes de RAMI 4.0 y del Asset Administration Shell." },

  { type: "closing", nextNum: 9, nextTitle: "IIoT, COMPUTACIÓN EN EL BORDE Y NUBE", nextDesc: "Arquitectura IIoT de referencia, criterios edge/fog/cloud y gobierno de la arquitectura nube-planta.", prompt: "root@planta:~# next --session 09 _",
    notes: "S09 cierra la Unidad 2 con el sustrato de cómputo y conectividad del CPPS." },
];
