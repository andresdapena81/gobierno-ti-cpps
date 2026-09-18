// S16 — Caso de negocio de la transformación digital industrial y hoja de ruta
module.exports = [
  { type: "cover", title: "CASO DE NEGOCIO\n& HOJA DE RUTA", subtitle: "Del piloto a la escala: justificar y planificar la transformación digital industrial",
    notes: "Cierre del curso. Se integra todo: gobernar (U1), la técnica (U2-3) y protegerla (U4) se justifican con un caso de negocio y una hoja de ruta." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Del piloto a la escala", desc: "Por qué mueren los pilotos y qué los sostiene" },
    { title: "El caso de negocio", desc: "CAPEX/OPEX, VPN, TIR y beneficios" },
    { title: "Hoja de ruta", desc: "Horizontes, dependencias y capacidades" },
    { title: "Gestión del cambio", desc: "Personas, competencias y adopción" },
    { title: "Cierre y proyecto", desc: "El modelo integrado y la sustentación" },
    { title: "Cierre del curso", desc: "Síntesis final y referencias" },
  ], notes: "El cierre integrador: convertir todo lo aprendido en una decisión de inversión justificada y planificada." },

  { type: "stats", sec: "CIERRE", title: "El caso de negocio en cifras",
    bigstats: [ {n:"VPN",label:"VALOR PRESENTE NETO"},{n:"TIR",label:"TASA INTERNA RETORNO"},{n:"3",label:"HORIZONTES"},{n:"70%",label:"PILOTOS QUE NO ESCALAN"} ],
    kvs: [ {k:"INVERSIÓN",v:"CAPEX + OPEX a lo largo del tiempo"},{k:"RETORNO",v:"Beneficios tangibles e intangibles"},{k:"MÉTRICAS",v:"VPN, TIR, payback, ROI"},{k:"RUTA",v:"Horizontes now / next / later"},{k:"CAMBIO",v:"Gestión del cambio y competencias"},{k:"PROYECTO",v:"Documento final + sustentación"} ],
    notes: "El caso de negocio cierra el arco: valor (S05) → técnica (U2-3) → riesgo (U4) → justificación económica (hoy)." },

  { type: "objectives", sec: "CIERRE", title: "Objetivos de la sesión", items: [
    { lead: "Explicar", rest: "por qué los pilotos de Industria 4.0 no escalan y qué los sostiene." },
    { lead: "Elaborar", rest: "un caso de negocio con CAPEX/OPEX, VPN, TIR y payback." },
    { lead: "Construir", rest: "una hoja de ruta de adopción por horizontes." },
    { lead: "Diseñar", rest: "la gestión del cambio y el desarrollo de competencias." },
    { lead: "Integrar", rest: "todo el curso en el proyecto final y su sustentación." },
  ], notes: "El objetivo final: convertir el conocimiento del curso en una propuesta de inversión defendible." },

  // -------- SECCIÓN 1: DEL PILOTO A LA ESCALA --------
  { type: "section", num: 1, title: "DEL PILOTO A LA ESCALA", sub: "El valle de la muerte de la digitalización" },

  { type: "callouts", sec: "ESCALA", title: "El valle de la muerte del piloto",
    stats: [ {n:"~70%",label:"de los pilotos de Industria 4.0 nunca escalan a producción",color:"FF3B30"},{n:"PILOT PURGATORY",label:"empresas atrapadas probando eternamente sin escalar",color:"FFB000"},{n:"NO ES TÉCNICO",label:"la causa rara vez es la tecnología: es gobierno y organización",color:"C6FF00"} ],
    note: { body: "La mayoría de las iniciativas de digitalización industrial mueren entre el piloto exitoso y la producción a escala. El 'pilot purgatory' es un fenómeno documentado. La causa casi nunca es que la tecnología no funcione, sino que falta gobierno, caso de negocio y gestión del cambio." },
    notes: "El 'pilot purgatory' es el gran problema. La causa es de gobierno, no técnica. Este es el tema central del cierre." },

  { type: "grid", sec: "ESCALA", title: "Por qué mueren los pilotos", cols: 3, lead: "Las causas recurrentes del fracaso al escalar.",
    cards: [
      { tag: "SIN CASO DE NEGOCIO", desc: "El piloto no midió valor; no hay con qué justificar la inversión mayor.", color: "FF3B30" },
      { tag: "SIN DUEÑO", desc: "Nadie responde por escalar ni por realizar el beneficio (EDM02).", color: "FFB000" },
      { tag: "DATOS Y ARQUITECTURA", desc: "El piloto funcionó en un activo; la arquitectura no soporta la escala.", color: "27E5E5" },
      { tag: "SIN ADOPCIÓN", desc: "La tecnología existe, pero las personas no cambiaron su forma de trabajar.", color: "9D6BFF" },
      { tag: "SIN GOBIERNO", desc: "No hay priorización, ni riesgo gestionado, ni ruta clara.", color: "FF6B35" },
      { tag: "TECNOLOGÍA POR MODA", desc: "Se adoptó sin resolver un dolor real del negocio.", color: "C6FF00" },
    ], notes: "Las seis causas son de gobierno y organización, no de ingeniería. El curso completo es la respuesta a estas causas." },

  { type: "grid", sec: "ESCALA", title: "Qué sostiene el escalamiento", cols: 2, lead: "Lo que distingue a los pilotos que sí escalan.",
    cards: [
      { tag: "VALOR MEDIDO", desc: "El piloto probó un retorno concreto y medible.", color: "C6FF00" },
      { tag: "DUEÑO Y GOBIERNO", desc: "Un responsable, priorización y riesgo gestionado (U1).", color: "27E5E5" },
      { tag: "ARQUITECTURA ESCALABLE", desc: "Datos, UNS y estándares que soportan crecer (U2-3).", color: "FFB000" },
      { tag: "GESTIÓN DEL CAMBIO", desc: "Las personas adoptaron la nueva forma de trabajar.", color: "22E06B" },
    ], note: "Los pilotos que escalan tienen las cuatro cosas: valor medido, gobierno, arquitectura escalable y adopción. Justamente lo que el curso ha construido, unidad por unidad.",
    notes: "El escalamiento exitoso reúne todo el curso. Este es el mensaje integrador: gobierno + técnica + personas + valor." },

  { type: "phase", sec: "ESCALA", title: "El curso como respuesta al pilot purgatory", badge: "SÍNTESIS",
    name: "Todo encaja aquí", what: "Unidad 1 dio el gobierno (priorizar, decidir, medir valor y riesgo). Unidades 2-3 dieron la arquitectura escalable (ISA-95, RAMI, OPC UA, UNS, datos gobernados). Unidad 4 dio la seguridad y la continuidad. El caso de negocio y la hoja de ruta (hoy) atan todo en una propuesta que sí puede escalar.",
    leftTag: "APORTA CADA UNIDAD", tools: "U1 gobierno · U2-3 arquitectura · U4 seguridad", rightTag: "HOY", seen: "Caso de negocio + hoja de ruta",
    notes: "Momento de síntesis del curso completo. Cada unidad fue una pieza; hoy se ensamblan en una propuesta escalable." },

  { type: "quote", sec: "ESCALA", text: "El piloto demuestra que se puede; el gobierno demuestra que conviene y logra que suceda.", cite: "Síntesis del curso",
    notes: "Frase que resume el paso de piloto a escala. Puente al caso de negocio." },

  { type: "grid", sec: "ESCALA", title: "Señales de un piloto que sí escalará", cols: 2, lead: "Cómo reconocer, desde el piloto, si tiene futuro.",
    cards: [
      { tag: "DOLOR REAL", desc: "Resuelve un problema que a la dirección le importa y le cuesta dinero.", color: "C6FF00" },
      { tag: "MÉTRICA CLARA", desc: "Tiene una métrica de éxito medible desde el inicio (p. ej. OEE).", color: "27E5E5" },
      { tag: "PATROCINIO", desc: "Un directivo lo respalda y responde por escalarlo.", color: "FFB000" },
      { tag: "REPLICABLE", desc: "La arquitectura y el dato permiten repetirlo en otros activos.", color: "22E06B" },
    ], note: "Un piloto con dolor real, métrica clara, patrocinio y replicabilidad tiene futuro. Sin estos cuatro, es un experimento condenado al 'pilot purgatory'.",
    notes: "Checklist para evaluar pilotos. El proyecto debería diseñar su piloto cumpliendo estos cuatro." },

  { type: "process", sec: "ESCALA", title: "De la idea al escalamiento", cols: 5, steps: [
      { n:1, title:"Idea", desc:"Dolor de negocio.", color:"C6FF00" },
      { n:2, title:"Piloto", desc:"Prueba acotada y medible.", color:"27E5E5" },
      { n:3, title:"Caso", desc:"Business case con datos del piloto.", color:"FFB000" },
      { n:4, title:"Decisión", desc:"La dirección aprueba escalar.", color:"22E06B" },
      { n:5, title:"Escala", desc:"Despliegue gobernado y por fases.", color:"9D6BFF" },
    ], notes: "El puente crítico es del paso 2 al 4: el piloto debe producir el caso de negocio que la dirección necesita para decidir." },

  // -------- SECCIÓN 2: EL CASO DE NEGOCIO --------
  { type: "section", num: 2, title: "EL CASO DE NEGOCIO", sub: "Justificar la inversión con números" },

  { type: "concepts3", sec: "CASO", title: "La estructura del costo", items: [
      { k: "CAPEX", desc: "Inversión de capital: equipos, sensores, plataformas, implementación.", ex: "Compra inicial", color: "FFB000" },
      { k: "OPEX", desc: "Gasto operativo recurrente: nube, licencias, mantenimiento, personas.", ex: "Costo mensual", color: "27E5E5" },
      { k: "TCO", desc: "Costo total de propiedad: CAPEX + OPEX a lo largo de la vida útil.", ex: "5-10 años", color: "C6FF00" },
    ], note: "El error común es mirar solo el CAPEX (la compra) e ignorar el OPEX (operar y mantener). El TCO a varios años es la cifra que importa para decidir.",
    notes: "CAPEX vs OPEX vs TCO. Los proyectos de digitalización suelen subestimar el OPEX (nube, mantenimiento del modelo, S12)." },

  { type: "grid", sec: "CASO", title: "Beneficios: tangibles e intangibles", cols: 2, lead: "El retorno tiene dos caras.",
    cards: [
      { tag: "TANGIBLES", desc: "Cuantificables: menos paradas (OEE), menos scrap, ahorro energético, menos horas.", color: "C6FF00" },
      { tag: "INTANGIBLES", desc: "Difíciles de cuantificar: calidad, marca, seguridad, agilidad, cumplimiento.", color: "27E5E5" },
      { tag: "CUANTIFICAR", desc: "Los tangibles van al VPN/TIR; los intangibles se argumentan y, si se puede, se aproximan.", color: "FFB000" },
      { tag: "RIESGO EVITADO", desc: "La seguridad (U4) se justifica por el costo del incidente que previene.", color: "FF3B30" },
    ], note: "Un buen caso de negocio cuantifica lo tangible (para el VPN) y argumenta sólidamente lo intangible. El 'riesgo evitado' es la clave para justificar la seguridad.",
    notes: "Beneficios tangibles al modelo financiero; intangibles argumentados. La seguridad se justifica por riesgo evitado." },

  { type: "matrix", sec: "CASO", title: "Las métricas de decisión", firstW: 3.0,
    cols: ["Métrica", "Qué dice", "Decisión"],
    rows: [
      ["VPN", {t:"Valor hoy del flujo futuro",color:"C6FF00"}, "VPN > 0 = crea valor"],
      ["TIR", {t:"Rentabilidad del proyecto",color:"27E5E5"}, "TIR > costo capital"],
      ["Payback", {t:"Tiempo de recuperación",color:"FFB000"}, "Riesgo de liquidez"],
      ["ROI", {t:"Retorno relativo",color:"22E06B"}, "Comparar opciones"],
    ], notes: "VPN y TIR son las métricas de decisión de largo plazo. El payback mide el riesgo. El proyecto calculará al menos VPN y payback." },

  { type: "concepts3", sec: "CASO", title: "Cómo cuantificar el valor", items: [
      { k: "MENOS PARADAS", desc: "Cada punto de OEE recuperado se traduce en unidades y pesos.", ex: "+3 pts OEE = X$", color: "C6FF00" },
      { k: "MENOS SCRAP", desc: "Reducción de defectos y reproceso: ahorro directo de material.", ex: "-2% scrap = Y$", color: "27E5E5" },
      { k: "RIESGO EVITADO", desc: "Probabilidad × costo del incidente que la seguridad previene.", ex: "Parada evitada", color: "FF3B30" },
    ], note: "Cuantificar es traducir cada beneficio a pesos con supuestos explícitos. Aun lo intangible (calidad, marca) puede aproximarse con proxies. Lo importante: hacer visible el razonamiento.",
    notes: "Métodos de cuantificación. El 'riesgo evitado' es la clave para justificar la seguridad de la Unidad 4." },

  { type: "phase", sec: "CASO", title: "Construir el modelo financiero", badge: "MÉTODO",
    name: "De los beneficios al VPN", what: "1) Estima la inversión (CAPEX) y el gasto (OPEX) por año. 2) Cuantifica los beneficios tangibles por año (p. ej. +3 puntos de OEE = X pesos). 3) Calcula el flujo de caja neto anual. 4) Descuéntalo a valor presente (VPN) y obtén la TIR y el payback. 5) Haz análisis de sensibilidad: ¿qué pasa si el beneficio es menor?",
    leftTag: "PASOS", tools: "CAPEX/OPEX · beneficios · flujo · VPN/TIR", rightTag: "CLAVE", seen: "Análisis de sensibilidad",
    notes: "El método del modelo financiero. El análisis de sensibilidad (¿y si el beneficio es la mitad?) da credibilidad." },

  { type: "grid", sec: "CASO", title: "Un caso de negocio creíble", cols: 2, lead: "Lo que la dirección espera ver.",
    cards: [
      { tag: "SUPUESTOS EXPLÍCITOS", desc: "Qué se asume y por qué; permite discutir y validar.", color: "C6FF00" },
      { tag: "SENSIBILIDAD", desc: "Escenarios optimista, base y pesimista.", color: "27E5E5" },
      { tag: "RIESGOS", desc: "Qué puede fallar y cómo se mitiga (liga a U4).", color: "FFB000" },
      { tag: "MÉTRICAS DE ÉXITO", desc: "Cómo se medirá si el beneficio se realizó (EDM02).", color: "22E06B" },
    ], note: "Un caso de negocio creíble no promete certezas: expone supuestos, escenarios y riesgos, y define cómo se medirá el éxito. Así la dirección decide con los ojos abiertos.",
    notes: "La credibilidad viene de la honestidad: supuestos, escenarios y riesgos explícitos. Métricas de éxito para EDM02." },

  { type: "matrix", sec: "CASO", title: "Ejemplo de flujo y VPN (simplificado)", firstW: 3.2,
    cols: ["Año", "Inversión/Gasto", "Beneficio", "Flujo neto"],
    rows: [
      ["0", {t:"-100 (CAPEX)",color:"FF3B30"}, "0", {t:"-100",color:"FF3B30"}],
      ["1", {t:"-20 (OPEX)",color:"FFB000"}, "60", {t:"+40",color:"22E06B"}],
      ["2", {t:"-20 (OPEX)",color:"FFB000"}, "80", {t:"+60",color:"22E06B"}],
      ["3", {t:"-20 (OPEX)",color:"FFB000"}, "90", {t:"+70",color:"22E06B"}],
    ], notes: "Ejemplo ilustrativo (cifras relativas). Payback entre año 2 y 3; VPN positivo si la tasa de descuento es razonable. El proyecto hará el suyo." },

  { type: "grid", sec: "CASO", title: "Errores frecuentes del business case", cols: 2, lead: "Lo que hace que la dirección no crea el caso.",
    cards: [
      { tag: "SOLO CAPEX", desc: "Ignorar el OPEX recurrente (nube, mantenimiento del modelo).", color: "FF3B30" },
      { tag: "BENEFICIOS INFLADOS", desc: "Prometer ahorros optimistas sin sustento ni sensibilidad.", color: "FFB000" },
      { tag: "SIN RIESGOS", desc: "No mostrar qué puede fallar; la dirección desconfía.", color: "27E5E5" },
      { tag: "SIN MEDICIÓN", desc: "No definir cómo se comprobará que el beneficio se realizó.", color: "9D6BFF" },
    ], note: "Un business case creíble es conservador y honesto: OPEX incluido, beneficios sustentados, riesgos explícitos y métricas de verificación. La honestidad genera más confianza que el optimismo.",
    notes: "Los errores del business case son de credibilidad. La dirección premia la honestidad, no las promesas." },

  // -------- SECCIÓN 3: HOJA DE RUTA --------
  { type: "section", num: 3, title: "LA HOJA DE RUTA DE ADOPCIÓN", sub: "Por horizontes, dependencias y capacidades" },

  { type: "process", sec: "RUTA", title: "Los tres horizontes", cols: 3, steps: [
      { n:"NOW", title:"Ahora (0–6 m)", desc:"Quick wins: conectar, ver (OEE), asegurar.", color:"C6FF00" },
      { n:"NEXT", title:"Siguiente (6–18 m)", desc:"Predictivo, integración, gemelos piloto.", color:"27E5E5" },
      { n:"LATER", title:"Después (18+ m)", desc:"Optimización, autonomía, escala.", color:"FFB000" },
    ], notes: "La hoja de ruta por horizontes (now/next/later) da una narrativa clara: valor rápido primero, capacidades complejas después." },

  { type: "grid", sec: "RUTA", title: "Principios de una buena hoja de ruta", cols: 2, lead: "Cómo secuenciar la adopción.",
    cards: [
      { tag: "VALOR TEMPRANO", desc: "Empezar por quick wins que financien y motiven lo siguiente.", color: "C6FF00" },
      { tag: "DEPENDENCIAS", desc: "No se puede predecir sin datos; no hay datos sin conectividad.", color: "27E5E5" },
      { tag: "SEGURIDAD DESDE EL INICIO", desc: "La ciberseguridad OT se construye en el horizonte 'ahora', no después.", color: "FF3B30" },
      { tag: "CAPACIDADES", desc: "Cada horizonte exige nuevas competencias que hay que desarrollar en paralelo.", color: "FFB000" },
    ], note: "La ruta respeta las dependencias (conectar → ver → predecir → optimizar), entrega valor temprano, y trata la seguridad y las competencias como parte de cada horizonte, no como un extra.",
    notes: "Las dependencias mandan el orden (S06 ruta de adopción). La seguridad y las competencias van en cada horizonte." },

  { type: "grid", sec: "RUTA", title: "Capacidades organizacionales requeridas", cols: 2, lead: "La tecnología necesita capacidades detrás.",
    cards: [
      { tag: "GOBIERNO", desc: "Comité IT/OT, procesos de decisión, gestión de riesgo (U1).", color: "C6FF00" },
      { tag: "TÉCNICAS", desc: "Datos, integración, ciberseguridad OT, analítica (U2-4).", color: "27E5E5" },
      { tag: "PERSONAS", desc: "El perfil puente IT/OT y la cultura de mejora.", color: "FFB000" },
      { tag: "SOCIOS", desc: "Integradores, academia y proveedores confiables.", color: "22E06B" },
    ], note: "La hoja de ruta no es solo de tecnología: incluye construir capacidades de gobierno, técnicas, de personas y de alianzas. Sin ellas, la tecnología no rinde.",
    notes: "La hoja de ruta desarrolla capacidades, no solo instala tecnología. Gobierno, técnica, personas, socios." },

  { type: "phase", sec: "RUTA", title: "La hoja de ruta del proyecto", badge: "PROYECTO",
    name: "Una narrativa de transformación", what: "Para la empresa del proyecto, la hoja de ruta cuenta la historia: dónde está hoy (diagnóstico de U1-U3), a dónde va (visión), y cómo llega en horizontes now/next/later, con las iniciativas priorizadas (cascada de S03), sus dependencias, su seguridad (U4) y las capacidades a construir. Es el clímax del documento final.",
    leftTag: "INTEGRA", tools: "Diagnóstico · visión · horizontes · capacidades", rightTag: "ES", seen: "El clímax del proyecto final",
    notes: "La hoja de ruta integra todo el proyecto en una narrativa. Es donde se ve si el estudiante entendió el gobierno." },

  { type: "callouts", sec: "RUTA", title: "Priorizar es la esencia del gobierno",
    stats: [ {n:"NO TODO",label:"no se puede hacer todo a la vez: hay que secuenciar",color:"C6FF00"},{n:"VALOR + RIESGO",label:"priorizar por valor de negocio y riesgo, no por novedad tecnológica",color:"27E5E5"},{n:"CASCADA",label:"la cascada de COBIT (S03) es la herramienta para priorizar",color:"FFB000"} ],
    note: { body: "La hoja de ruta es priorización pura, y priorizar es la esencia del gobierno. La cascada de objetivos (S03), los factores de diseño (S04) y la evaluación de riesgo (U4) son las herramientas que convierten una lista de deseos en una secuencia justificada." },
    notes: "La hoja de ruta cierra el círculo con la cascada (S03). Priorizar = gobernar. Coherencia total del curso." },

  { type: "matrix", sec: "RUTA", title: "Ejemplo de hoja de ruta por horizontes", firstW: 3.0,
    cols: ["Horizonte", "Iniciativa", "Depende de"],
    rows: [
      ["Ahora", {t:"Conectar + OEE + segmentar",color:"C6FF00"}, "—"],
      ["Ahora", {t:"Ciberseguridad OT básica",color:"FF3B30"}, "Inventario"],
      ["Siguiente", {t:"Mantenimiento predictivo",color:"27E5E5"}, "Datos + OEE"],
      ["Después", {t:"Gemelo + optimización",color:"FFB000"}, "Predictivo"],
    ], notes: "Ejemplo de roadmap. Las dependencias fijan el orden: no hay predictivo sin datos, ni datos sin conectividad y seguridad." },

  // -------- SECCIÓN 4: GESTIÓN DEL CAMBIO --------
  { type: "section", num: 4, title: "GESTIÓN DEL CAMBIO Y COMPETENCIAS", sub: "La tecnología la usan personas" },

  { type: "grid", sec: "CAMBIO", title: "Por qué falla la adopción", cols: 2, lead: "La barrera final rara vez es técnica.",
    cards: [
      { tag: "MIEDO", desc: "Temor a perder el empleo o a no saber usar lo nuevo.", color: "FF3B30" },
      { tag: "FALTA DE SENTIDO", desc: "No entender para qué sirve ni qué gana el operario.", color: "FFB000" },
      { tag: "SIN FORMACIÓN", desc: "Dar la herramienta sin enseñar a usarla.", color: "27E5E5" },
      { tag: "SIN LIDERAZGO", desc: "La dirección no acompaña ni prioriza el cambio.", color: "9D6BFF" },
    ], note: "La adopción falla por razones humanas: miedo, falta de sentido, de formación y de liderazgo. El principio 6 de ISO 38500 (comportamiento humano) lo anticipó: respetar a las personas es parte del gobierno.",
    notes: "La adopción es humana. Conecta con el principio 6 de 38500 (S02). Ignorar al operario hunde la digitalización." },

  { type: "grid", sec: "CAMBIO", title: "Cómo gestionar el cambio", cols: 3, lead: "Prácticas que sostienen la adopción.",
    cards: [
      { tag: "COMUNICAR EL PORQUÉ", desc: "Explicar el sentido y el beneficio para cada rol.", color: "C6FF00" },
      { tag: "INVOLUCRAR", desc: "Que los operarios participen en el diseño, no lo reciban impuesto.", color: "27E5E5" },
      { tag: "FORMAR", desc: "Desarrollar competencias antes y durante el despliegue.", color: "FFB000" },
      { tag: "LIDERAZGO VISIBLE", desc: "La dirección acompaña y prioriza de forma sostenida.", color: "22E06B" },
      { tag: "CELEBRAR LOGROS", desc: "Mostrar los quick wins para generar impulso.", color: "9D6BFF" },
      { tag: "MEDIR ADOPCIÓN", desc: "Seguir el uso real, no solo el despliegue.", color: "FF6B35" },
    ], notes: "La gestión del cambio es tan crítica como la tecnología. 'Empezar por el porqué' e involucrar a las personas son las claves." },

  { type: "phase", sec: "CAMBIO", title: "Desarrollar el perfil puente", badge: "COMPETENCIAS",
    name: "El ingeniero de gobierno ciber-físico", what: "La transformación exige el perfil que este curso forma: alguien que entiende el gobierno (U1), la arquitectura ciber-física (U2-3) y la seguridad (U4), y sabe traducir entre la dirección, TI, OT y el operario. Desarrollar y retener este talento es, en sí mismo, una iniciativa de la hoja de ruta.",
    leftTag: "INTEGRA", tools: "Gobierno + técnica + seguridad + traducción", rightTag: "ES", seen: "El perfil que el curso forma",
    notes: "Cierre motivacional: el perfil que el curso forma es la capacidad clave de la transformación. Los estudiantes son ese perfil." },

  { type: "callouts", sec: "CAMBIO", title: "La ética del cambio",
    stats: [ {n:"PERSONAS",label:"la automatización afecta empleos y roles reales",color:"FF3B30"},{n:"RECUALIFICAR",label:"formar y reubicar en vez de solo reemplazar",color:"C6FF00"},{n:"RESPONSABILIDAD",label:"gobernar la tecnología incluye responsabilidad social",color:"FFB000"} ],
    note: { body: "La transformación digital tiene una dimensión ética: afecta el trabajo de personas reales. Gobernar bien la tecnología incluye gestionar ese impacto con responsabilidad —recualificar, comunicar, acompañar—, no solo optimizar. Es el principio de comportamiento humano llevado a la práctica." },
    notes: "Cierre ético: la digitalización afecta personas. El gobierno responsable las acompaña. Principio 6 de 38500 en acción." },

  { type: "process", sec: "CAMBIO", title: "Ocho pasos del cambio (Kotter)", cols: 4, steps: [
      { n:1, title:"Urgencia", desc:"Crear sentido de urgencia.", color:"C6FF00" },
      { n:2, title:"Coalición", desc:"Formar un equipo guía.", color:"27E5E5" },
      { n:3, title:"Visión", desc:"Definir visión y estrategia.", color:"FFB000" },
      { n:4, title:"Comunicar", desc:"Comunicar la visión.", color:"22E06B" },
      { n:5, title:"Empoderar", desc:"Remover obstáculos.", color:"9D6BFF" },
      { n:6, title:"Quick wins", desc:"Lograr triunfos tempranos.", color:"FF6B35" },
      { n:7, title:"Consolidar", desc:"Sostener el impulso.", color:"C6FF00" },
      { n:8, title:"Anclar", desc:"Fijar en la cultura.", color:"27E5E5" },
    ], notes: "El modelo de Kotter da una secuencia probada de gestión del cambio. Los quick wins (paso 6) conectan con la hoja de ruta." },

  // -------- SECCIÓN 5: CIERRE E INTEGRACIÓN --------
  { type: "section", num: 5, title: "EL MODELO INTEGRADO Y EL PROYECTO FINAL", sub: "Todo el curso en una propuesta" },

  { type: "grid", sec: "INTEGRACIÓN", title: "Las nueve secciones del documento final", cols: 3, lead: "La estructura exigida del proyecto integrador.",
    cards: [
      { tag: "1 · ORGANIZACIÓN", desc: "Caracterización de la empresa y el proceso.", color: "C6FF00" },
      { tag: "2 · DIAGNÓSTICO", desc: "Madurez digital y de gobierno.", color: "27E5E5" },
      { tag: "3 · GOBIERNO", desc: "Sistema de gobierno (COBIT/38500).", color: "FFB000" },
      { tag: "4 · ARQUITECTURA", desc: "ISA-95 / RAMI / IIoT.", color: "22E06B" },
      { tag: "5-6 · DATOS Y RIESGO", desc: "Integración, tablero y evaluación IT/OT.", color: "9D6BFF" },
      { tag: "7-9 · CASO Y RUTA", desc: "Caso de negocio, hoja de ruta, conclusiones.", color: "FF6B35" },
    ], notes: "Las nueve secciones integran las cuatro unidades. Cada una se nutre de los entregables y talleres del semestre." },

  { type: "process", sec: "INTEGRACIÓN", title: "El modelo de gobierno ciber-físico", cols: 4, steps: [
      { n:"U1", title:"Gobernar", desc:"Decidir, priorizar, medir.", color:"C6FF00" },
      { n:"U2", title:"Arquitecturar", desc:"ISA-95, RAMI, CPPS.", color:"27E5E5" },
      { n:"U3", title:"Integrar", desc:"OPC UA, MQTT, datos, gemelos.", color:"FFB000" },
      { n:"U4", title:"Proteger", desc:"Riesgo, seguridad, continuidad.", color:"FF3B30" },
    ], notes: "El modelo integrado del curso: gobernar, arquitecturar, integrar y proteger un sistema ciber-físico de producción." },

  { type: "phase", sec: "INTEGRACIÓN", title: "Proyecto final — documento", badge: "EVALUACIÓN · 25 %",
    name: "Gobierno de un CPPS", what: "El documento integra los Entregables 1 y 2 y añade la Unidad 4: caracterización, diagnóstico de madurez y gobierno, sistema de gobierno (COBIT/38500), arquitectura ciber-física (ISA-95/RAMI/IIoT), integración de datos y tablero, evaluación de riesgo IT/OT (62443/CSF), caso de negocio (VPN/TIR) y hoja de ruta. Entrega: domingo de la semana 15.",
    leftTag: "ESTRUCTURA", tools: "9 secciones acumulativas", rightTag: "ENTREGA", seen: "Semana 15 (documento)",
    notes: "El proyecto final es la suma del curso. Revisar la estructura de 9 secciones con los estudiantes." },

  { type: "grid", sec: "INTEGRACIÓN", title: "La sustentación", cols: 2, lead: "Comunicar a dos audiencias.",
    cards: [
      { tag: "EJECUTIVA (8 min)", desc: "Para la 'junta': problema, propuesta, caso de negocio y hoja de ruta. Sin jerga.", color: "C6FF00" },
      { tag: "TÉCNICA (anexo)", desc: "Defender arquitectura, integración y seguridad ante preguntas del docente.", color: "27E5E5" },
      { tag: "DOMINIO INDIVIDUAL", desc: "Cada integrante responde por cualquier parte del trabajo.", color: "FFB000" },
      { tag: "RÚBRICA", desc: "Rigor técnico, coherencia, riesgo, caso de negocio y comunicación.", color: "22E06B" },
    ], note: "La sustentación exige comunicar a dos audiencias: la ejecutiva (valor y decisión) y la técnica (rigor). Saber traducir entre ambas es la competencia que define al ingeniero de gobierno.",
    notes: "La sustentación dual (ejecutiva + técnica) evalúa la capacidad de traducir, el corazón del perfil. Semana 16." },

  { type: "keypoints", sec: "INTEGRACIÓN", title: "Consejos para el proyecto final", items: [
      { label: "Cuenta una historia", desc: "Diagnóstico → visión → propuesta → ruta, coherente." },
      { label: "Justifica con números", desc: "Caso de negocio con VPN/payback y supuestos." },
      { label: "No olvides la seguridad", desc: "El riesgo IT/OT debe estar integrado, no anexo." },
      { label: "Prioriza", desc: "Menos iniciativas, bien gobernadas, en horizontes." },
      { label: "Habla dos idiomas", desc: "Ejecutivo para la junta, técnico para la defensa." },
    ], notes: "Orientaciones finales para el proyecto. La coherencia entre diagnóstico, arquitectura y decisiones es lo más valorado." },

  // -------- SECCIÓN 6: CIERRE DEL CURSO --------
  { type: "section", num: 6, title: "CIERRE DEL CURSO", sub: "Lo que te llevas" },

  { type: "keypoints", sec: "CIERRE", title: "Las cinco ideas que perduran", items: [
      { label: "Gobierno ≠ gestión", desc: "Decidir quién decide sobre la tecnología (U1)." },
      { label: "El CPPS es real", desc: "Cómputo y físico en lazo cerrado, con arquitectura (U2)." },
      { label: "El dato es el activo", desc: "Integración y gobierno del dato crean el valor (U3)." },
      { label: "La seguridad es física", desc: "En OT, un ataque daña equipos y personas (U4)." },
      { label: "Priorizar es gobernar", desc: "Caso de negocio y hoja de ruta convierten todo en acción." },
    ], notes: "Las cinco ideas centrales del curso. Si el estudiante se lleva estas, el curso cumplió su propósito." },

  { type: "grid", sec: "CIERRE", title: "Lo que te llevas como profesional", cols: 2, lead: "Las competencias que este curso desarrolló.",
    cards: [
      { tag: "GOBERNAR", desc: "Decidir sobre tecnología con marcos (38500, COBIT, ITIL).", color: "C6FF00" },
      { tag: "ARQUITECTURAR", desc: "Diseñar sistemas ciber-físicos (ISA-95, RAMI, IIoT).", color: "27E5E5" },
      { tag: "INTEGRAR", desc: "Unificar el dato (OPC UA, MQTT, UNS) y darle valor.", color: "FFB000" },
      { tag: "PROTEGER Y JUSTIFICAR", desc: "Gestionar el riesgo OT y defender la inversión.", color: "FF3B30" },
    ], note: "El perfil puente IT/OT que forma este curso es escaso y estratégico. Estas cuatro competencias, juntas, definen al ingeniero de gobierno ciber-físico que la industria necesita.",
    notes: "Cierre motivacional: las competencias adquiridas y su valor en el mercado. Reforzar el perfil puente." },

  { type: "quote", sec: "CIERRE", text: "Gobernar la tecnología que opera procesos físicos es decidir con evidencia, hacer explícito el riesgo y responder por las decisiones.", cite: "Síntesis del curso",
    notes: "Frase de cierre que resume el propósito formativo. Conecta con la responsabilidad ética del ingeniero (S01)." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "Caso de negocio", d: "Justificación económica de una inversión." },
      { t: "CAPEX / OPEX", d: "Inversión de capital / gasto operativo." },
      { t: "VPN / TIR", d: "Valor presente neto / tasa interna de retorno." },
      { t: "Payback", d: "Periodo de recuperación de la inversión." },
      { t: "Hoja de ruta", d: "Secuencia priorizada de iniciativas por horizontes." },
      { t: "Pilot purgatory", d: "Quedarse en pilotos sin escalar." },
      { t: "Gestión del cambio", d: "Lograr la adopción humana de la tecnología." },
      { t: "Perfil puente", d: "Quien integra gobierno, IT y OT." },
    ], notes: "Vocabulario del caso de negocio y del cierre del curso." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "WEF / McKinsey — Global Lighthouse Network (escalar I4.0)", url: "https://www.weforum.org/projects/global-lighthouse-network/", acc: "libre" },
      { t: "Kotter — 8 pasos del cambio (resumen oficial)", url: "https://www.kotterinc.com/methodology/8-steps/", acc: "libre" },
      { t: "Doerr — Measure What Matters / OKR (recursos abiertos)", url: "https://www.whatmatters.com/", acc: "libre" },
      { t: "ISACA — COBIT 2019 EDM02 (beneficios), APO05 (portafolio)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "BCG / Acatech — escalar Industria 4.0 (informes)", url: "https://www.bcg.com/capabilities/manufacturing/industry-4.0", acc: "libre" },
      { t: "Brealey, Myers & Allen — Principles of Corporate Finance (VPN/TIR)", url: "https://www.mheducation.com/", acc: "pago" },
    ], notes: "Fuentes del caso de negocio, la gestión del cambio y el cierre integrador del curso." },

  { type: "closing", nextTitle: "", nextDesc: "", prompt: "root@planta:~# curso --completado ✓  gracias _",
    notes: "Cierre del curso. Agradecer al grupo. Recordar fechas de entrega del documento (sem 15) y sustentación (sem 16)." },
];
