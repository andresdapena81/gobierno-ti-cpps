// S05 — Valor, Riesgo, Recursos e ITIL 4 (cierre de la Unidad 1)
module.exports = [
  { type: "cover", title: "VALOR, RIESGO\n& ITIL 4", subtitle: "Gestionar el valor, el riesgo y los recursos de la tecnología en producción",
    notes: "Quinta sesión, cierre de la Unidad 1. Recoge el Entregable 1. Integra valor, riesgo, recursos e ITIL 4 como capa operativa." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Valor de la TI", desc: "Realización de beneficios y portafolio de inversión" },
    { title: "Riesgo tecnológico", desc: "Apetito, tolerancia y registro de riesgos" },
    { title: "Recursos", desc: "Personas, datos e infraestructura" },
    { title: "ITIL 4", desc: "Sistema de valor del servicio y principios guía" },
    { title: "Indicadores", desc: "KPI y KRI; tablero de gobierno" },
    { title: "Cierre de la Unidad 1", desc: "Entregable 1 y síntesis" },
  ], notes: "Cierra el triángulo del gobierno: valor, riesgo y recursos, más ITIL 4 como capa de servicio." },

  { type: "stats", sec: "U1", title: "Valor, riesgo y recursos en cifras",
    bigstats: [ {n:3,label:"OBJETOS DE GOBIERNO"},{n:7,label:"PRINCIPIOS ITIL 4"},{n:34,label:"PRÁCTICAS ITIL 4"},{n:"KPI+KRI",label:"MEDICIÓN"} ],
    kvs: [ {k:"VALOR",v:"EDM02 · realización de beneficios"},{k:"RIESGO",v:"EDM03 · APO12"},{k:"RECURSOS",v:"EDM04 · optimización"},{k:"ITIL 4",v:"AXELOS (2019) — SVS"},{k:"ENTREGABLE 1",v:"Se recibe esta semana"},{k:"CIERRE",v:"Fin de la Unidad 1"} ],
    notes: "Valor, riesgo y recursos son los tres objetos que el gobierno equilibra (principio 1 de COBIT)." },

  { type: "objectives", sec: "U1", title: "Objetivos de la sesión", items: [
    { lead: "Explicar", rest: "cómo se gobierna el valor de la TI (realización de beneficios)." },
    { lead: "Construir", rest: "un registro de riesgos con apetito y tolerancia." },
    { lead: "Describir", rest: "la optimización de recursos (personas, datos, infraestructura)." },
    { lead: "Ubicar", rest: "el Sistema de Valor del Servicio y los principios guía de ITIL 4." },
    { lead: "Diferenciar", rest: "KPI de KRI y diseñar un tablero de gobierno." },
  ], notes: "Cierre integrador de la Unidad 1: los objetos del gobierno y su medición." },

  // -------- SECCIÓN 1: VALOR --------
  { type: "section", num: 1, title: "EL VALOR DE LA TECNOLOGÍA", sub: "Realización de beneficios y portafolio de inversión" },

  { type: "concepts3", sec: "VALOR", title: "Qué significa valor en TI", items: [
      { k: "BENEFICIO", desc: "El resultado positivo esperado: menos paradas, más calidad, nuevo mercado.", ex: "OEE +5 puntos", color: "C6FF00" },
      { k: "COSTO", desc: "La inversión y el gasto total de propiedad (TCO): licencias, hardware, personas, operación.", ex: "CAPEX + OPEX", color: "FFB000" },
      { k: "RIESGO", desc: "La incertidumbre sobre lograr el beneficio al costo previsto.", ex: "Piloto que no escala", color: "FF3B30" },
    ], note: "Valor = beneficios realizados, en relación con el costo y el riesgo asumidos. COBIT EDM02 gobierna la realización de beneficios; no basta invertir, hay que cosechar.",
    notes: "El error común: medir 'implementamos el sistema' en vez de 'realizamos el beneficio'. El valor está en el resultado, no en el entregable." },

  { type: "grid", sec: "VALOR", title: "Gestión del portafolio de inversión", cols: 3, lead: "El portafolio prioriza en qué invertir la capacidad limitada de la empresa.",
    cards: [
      { tag: "IDENTIFICAR", desc: "Reunir todas las iniciativas candidatas (digitalización, mantenimiento, seguridad).", color: "C6FF00" },
      { tag: "EVALUAR", desc: "Beneficio esperado, costo total, riesgo y alineación estratégica.", color: "27E5E5" },
      { tag: "PRIORIZAR", desc: "Comparar y seleccionar; no todo cabe en el presupuesto.", color: "FFB000" },
      { tag: "AUTORIZAR", desc: "Aprobar con business case; asignar recursos y dueño.", color: "22E06B" },
      { tag: "MONITOREAR", desc: "Seguir el avance y la realización de beneficios.", color: "9D6BFF" },
      { tag: "AJUSTAR", desc: "Reasignar o cancelar iniciativas que no rinden.", color: "FF6B35" },
    ], notes: "El portafolio es un ciclo de gobierno (APO05). En un CPPS compite mantenimiento vs digitalización vs seguridad." },

  { type: "grid", sec: "VALOR", title: "El business case de una iniciativa", cols: 2, lead: "Toda inversión tecnológica se justifica con un caso de negocio.",
    cards: [
      { tag: "BENEFICIOS", desc: "Tangibles (ahorro, más producción) e intangibles (calidad, marca, seguridad).", color: "C6FF00" },
      { tag: "COSTOS (TCO)", desc: "Adquisición, implementación, operación, mantenimiento y retiro.", color: "FFB000" },
      { tag: "RIESGOS", desc: "Técnicos, de adopción, de proveedor y de continuidad.", color: "FF3B30" },
      { tag: "SUPUESTOS", desc: "Condiciones que deben cumplirse para que el caso sea válido.", color: "27E5E5" },
    ], notes: "El business case es el instrumento de la adquisición (principio 3 de 38500). Se profundiza en S16 (caso de negocio)." },

  { type: "matrix", sec: "VALOR", title: "Métricas financieras de la inversión", firstW: 3.2,
    cols: ["Métrica", "Qué mide", "Uso"],
    rows: [
      ["TCO", {t:"Costo total de propiedad",color:"FFB000"}, "Comparar opciones"],
      ["ROI", {t:"Retorno sobre inversión",color:"C6FF00"}, "Justificar"],
      ["VPN", {t:"Valor presente neto",color:"27E5E5"}, "Decidir a largo plazo"],
      ["Payback", {t:"Periodo de recuperación",color:"22E06B"}, "Riesgo de liquidez"],
    ], notes: "Estas métricas se calculan en el caso de negocio del proyecto (S16). Aquí se introducen conceptualmente." },

  { type: "phase", sec: "VALOR", title: "EDM02 — Optimización de beneficios", badge: "OBJETIVO DE GOBIERNO",
    name: "Gobernar el valor", what: "La junta debe asegurar que las inversiones en I&T entreguen valor óptimo a un costo aceptable. Evalúa la cartera, dirige la realización de beneficios y monitorea el retorno real frente al prometido. En un CPPS: ¿el piloto de mantenimiento predictivo realmente redujo las paradas?",
    leftTag: "PREGUNTA CLAVE", tools: "¿Se cosechó el beneficio prometido?", rightTag: "RIESGO SI FALLA", seen: "Inversión sin retorno, pilotos zombis",
    notes: "EDM02 combate el 'piloto zombi': proyectos que nunca escalan ni entregan valor. Se gobierna cosechando beneficios." },

  { type: "callouts", sec: "VALOR", title: "Por qué mueren los proyectos de digitalización",
    stats: [ {n:"PILOTO",label:"se queda en prueba de concepto y nunca escala a producción",color:"FF3B30"},{n:"SIN DUEÑO",label:"nadie responde por realizar el beneficio, solo por implementar",color:"FFB000"},{n:"SIN MÉTRICA",label:"no se mide el resultado, así que no se sabe si valió la pena",color:"27E5E5"} ],
    note: { body: "El 'valle de la muerte' del piloto es un problema de gobierno, no técnico. Se resuelve con dueño del beneficio, business case con métricas y monitoreo de la realización. El tema se retoma a fondo en S16." },
    notes: "Adelanta S16. El gobierno del valor evita el desperdicio de la digitalización industrial." },

  // -------- SECCIÓN 2: RIESGO --------
  { type: "section", num: 2, title: "RIESGO TECNOLÓGICO", sub: "Apetito, tolerancia y registro de riesgos" },

  { type: "concepts3", sec: "RIESGO", title: "El lenguaje del riesgo", items: [
      { k: "RIESGO", desc: "Efecto de la incertidumbre sobre los objetivos; combinación de probabilidad e impacto.", ex: "Prob × Impacto", color: "FF3B30" },
      { k: "APETITO", desc: "Cantidad de riesgo que la empresa está dispuesta a aceptar para lograr sus objetivos.", ex: "Decisión de la junta", color: "FFB000" },
      { k: "TOLERANCIA", desc: "Desviación aceptable respecto del apetito antes de actuar.", ex: "Umbral de alerta", color: "27E5E5" },
    ], note: "El apetito de riesgo es una decisión de gobierno (EDM03): fija cuánto riesgo tecnológico acepta la empresa. En un CPPS, el apetito de riesgo de continuidad y seguridad física suele ser muy bajo.",
    notes: "Apetito lo fija la junta; tolerancia es el margen operativo. Sin apetito definido, el riesgo se gestiona a ciegas." },

  { type: "grid", sec: "RIESGO", title: "La ecuación del riesgo", cols: 3, lead: "El riesgo se reduce actuando sobre sus factores.",
    cards: [
      { tag: "AMENAZA", desc: "Actor o evento que puede causar daño. Externo, difícil de controlar.", color: "FF3B30" },
      { tag: "VULNERABILIDAD", desc: "Debilidad que la amenaza aprovecha. Interna: aquí actúa el gobierno.", color: "C6FF00" },
      { tag: "IMPACTO", desc: "Consecuencia si el riesgo se materializa. Se reduce con controles y continuidad.", color: "FFB000" },
    ], note: "Riesgo ≈ Amenaza × Vulnerabilidad × Impacto. El gobierno reduce vulnerabilidad (parcheo, hardening) e impacto (segmentación, backups, continuidad).",
    notes: "Misma ecuación que en ciberseguridad (S14). El gobierno decide dónde invertir para bajar cada factor." },

  { type: "matrix", sec: "RIESGO", title: "Registro de riesgos — ejemplo CPPS", firstW: 3.4,
    cols: ["Riesgo", "Prob", "Impacto", "Respuesta"],
    rows: [
      ["Ransomware en IT tumba OT", {t:"Media",color:"FFB000"}, {t:"Alto",color:"FF3B30"}, "Mitigar: segmentar"],
      ["Falla de sensor crítico", {t:"Alta",color:"FF3B30"}, {t:"Medio",color:"FFB000"}, "Mitigar: redundancia"],
      ["Fuga de datos de proceso", {t:"Baja",color:"22E06B"}, {t:"Alto",color:"FF3B30"}, "Mitigar: cifrado"],
      ["Lock-in de proveedor", {t:"Media",color:"FFB000"}, {t:"Medio",color:"FFB000"}, "Aceptar/vigilar"],
    ], notes: "El registro de riesgos es el corazón de APO12. El proyecto construirá el suyo en el Entregable 2." },

  { type: "grid", sec: "RIESGO", title: "Las cuatro respuestas al riesgo", cols: 2, lead: "Ante cada riesgo, el gobierno elige una respuesta.",
    cards: [
      { tag: "MITIGAR", desc: "Reducir probabilidad o impacto con controles. La respuesta más común.", color: "C6FF00" },
      { tag: "TRANSFERIR", desc: "Trasladar el riesgo (seguro cibernético, contrato con proveedor).", color: "27E5E5" },
      { tag: "EVITAR", desc: "No realizar la actividad que genera el riesgo.", color: "FFB000" },
      { tag: "ACEPTAR", desc: "Asumir el riesgo conscientemente si está dentro del apetito.", color: "22E06B" },
    ], notes: "Aceptar es una decisión legítima si el riesgo está bajo el apetito. Lo grave es aceptar sin saberlo." },

  { type: "phase", sec: "RIESGO", title: "EDM03 y APO12 — gobernar y gestionar el riesgo", badge: "GOBIERNO + GESTIÓN",
    name: "Dos niveles del riesgo", what: "EDM03 (gobierno): la junta fija el apetito de riesgo y asegura que se gestione. APO12 (gestión): identifica, analiza, responde y monitorea los riesgos concretos. En un CPPS, el riesgo abarca IT y OT: un mismo evento (ransomware) puede cruzar del correo corporativo a la línea de producción.",
    leftTag: "GOBIERNO / GESTIÓN", tools: "EDM03 apetito · APO12 registro y tratamiento", rightTag: "SE PROFUNDIZA EN", seen: "Riesgo IT/OT (S14–15)",
    notes: "EDM03 fija el 'cuánto'; APO12 hace el 'cómo'. El proyecto usará ambos en el Entregable 2." },

  { type: "callouts", sec: "RIESGO", title: "El riesgo ciber-físico es distinto",
    stats: [ {n:"FÍSICO",label:"el impacto no es solo de datos: daño a equipos y a personas",color:"FF3B30"},{n:"DISPONIBILIDAD",label:"la prioridad es que la línea no pare, no la confidencialidad",color:"C6FF00"},{n:"LEGADO",label:"activos de 20 años imposibles de parchear en caliente",color:"FFB000"} ],
    note: { body: "El riesgo en un CPPS invierte la lógica de IT: el impacto puede ser físico, la disponibilidad manda y los activos no se pueden actualizar como un servidor. Por eso su gobierno exige un tratamiento propio, no copiar el de IT." },
    notes: "Prepara la Unidad 4. El riesgo OT no se gestiona como el de IT." },

  // -------- SECCIÓN 3: RECURSOS --------
  { type: "section", num: 3, title: "OPTIMIZACIÓN DE RECURSOS", sub: "Personas, datos e infraestructura" },

  { type: "concepts3", sec: "RECURSOS", title: "Los recursos que se gobiernan", items: [
      { k: "PERSONAS", desc: "Competencias y talento IT/OT: la brecha más crítica en la industria.", ex: "Ingeniero IT/OT", color: "C6FF00" },
      { k: "DATOS", desc: "El activo que crece; requiere gobierno propio (calidad, propiedad, acceso).", ex: "Señales, OEE", color: "27E5E5" },
      { k: "INFRAESTRUCTURA", desc: "Servicios, plataformas y aplicaciones (nube, historiador, SCADA).", ex: "Plataforma IIoT", color: "FFB000" },
    ], note: "EDM04 gobierna la optimización de recursos: asegurar que las capacidades adecuadas estén disponibles al costo óptimo. En un CPPS, el recurso escaso suele ser el talento, no el hardware.",
    notes: "EDM04 equilibra los tres recursos. En Colombia, el cuello de botella es el talento en ciberseguridad OT y datos." },

  { type: "grid", sec: "RECURSOS", title: "La brecha de competencias IT/OT", cols: 2, lead: "El perfil que integra gobierno, TI y OT es escaso y muy demandado.",
    cards: [
      { tag: "PERFIL IT", desc: "Sabe de redes, nube, datos y ciberseguridad, pero no de proceso físico.", color: "27E5E5" },
      { tag: "PERFIL OT", desc: "Sabe de PLC, SCADA y proceso, pero no de ciberseguridad ni datos.", color: "FFB000" },
      { tag: "PERFIL PUENTE", desc: "El ingeniero de gobierno ciber-físico: entiende ambos mundos. Escaso.", color: "C6FF00" },
      { tag: "ESTRATEGIA", desc: "Formar, retener y combinar perfiles; alianzas con academia (este curso).", color: "22E06B" },
    ], notes: "El objetivo del curso es formar el 'perfil puente'. La escasez de talento es un riesgo de gobierno de recursos." },

  { type: "grid", sec: "RECURSOS", title: "Sourcing — cómo obtener los recursos", cols: 3, lead: "El modelo de aprovisionamiento es un factor de diseño (F8).",
    cards: [
      { tag: "INTERNO", desc: "Capacidades propias. Control alto, costo fijo, difícil de escalar.", color: "C6FF00" },
      { tag: "OUTSOURCING", desc: "Terceros e integradores. Flexible, pero riesgo de dependencia y acceso.", color: "27E5E5" },
      { tag: "NUBE / SERVICIOS", desc: "Plataformas como servicio. Rápido de escalar; soberanía del dato en juego.", color: "FFB000" },
    ], note: "Cada modelo trae su riesgo de gobierno: el interno cuesta, el outsourcing crea dependencia, la nube plantea soberanía. La mezcla se decide con EDM04 y los factores de diseño.",
    notes: "El sourcing conecta recursos (EDM04) con riesgo de terceros (APO10). En OT, el acceso remoto de integradores es crítico." },

  { type: "phase", sec: "RECURSOS", title: "Los datos como recurso estratégico", badge: "APO14",
    name: "El activo que crece solo", what: "En un CPPS, cada sensor genera datos que pueden crear valor (predicción, optimización) o convertirse en pasivo (almacenamiento, riesgo, ruido). APO14 (gestión de datos, nuevo en COBIT 2019) gobierna su calidad, propiedad, ciclo de vida y acceso. Sin gobierno de datos, la analítica se construye sobre arena.",
    leftTag: "GOBIERNO DEL DATO", tools: "Calidad · propiedad · linaje · acceso", rightTag: "SE PROFUNDIZA EN", seen: "Datos y OEE (S13)",
    notes: "Adelanta S13. 'Garbage in, garbage out': la analítica industrial vale lo que valen sus datos." },

  { type: "keypoints", sec: "RECURSOS", title: "Optimizar no es minimizar", items: [
      { label: "Suficiencia", desc: "El recurso adecuado disponible cuando se necesita, no el mínimo." },
      { label: "Costo óptimo", desc: "Equilibrio entre capacidad y gasto, no recorte ciego." },
      { label: "Talento primero", desc: "En CPPS, las personas son el recurso más escaso." },
      { label: "Dato gobernado", desc: "Datos de calidad valen; datos sin gobierno son pasivo." },
      { label: "Sourcing consciente", desc: "Elegir el modelo por riesgo y estrategia, no por moda." },
    ], notes: "Optimizar recursos (EDM04) es equilibrar, no recortar. Un recorte que deja sin talento de seguridad es mal gobierno." },

  { type: "grid", sec: "RECURSOS", title: "Gobierno de la infraestructura", cols: 2, lead: "La infraestructura tecnológica se gobierna por su criticidad para la operación.",
    cards: [
      { tag: "CAPACIDAD", desc: "Que la infraestructura soporte la demanda actual y futura (BAI04).", color: "C6FF00" },
      { tag: "DISPONIBILIDAD", desc: "Redundancia y resiliencia proporcionales a la criticidad (DSS04).", color: "27E5E5" },
      { tag: "OBSOLESCENCIA", desc: "Gestionar el legado OT: activos de 15–20 años que no se pueden botar.", color: "FFB000" },
      { tag: "SOBERANÍA", desc: "Dónde viven los datos y modelos: planta, nube local o extranjera.", color: "FF3B30" },
    ], notes: "La infraestructura OT plantea retos únicos: legado longevo y soberanía del dato. El gobierno decide qué modernizar y cuándo." },

  { type: "process", sec: "RECURSOS", title: "Ciclo de vida de un recurso tecnológico", cols: 3, steps: [
      { n:1, title:"Planear", desc:"Estimar necesidad de capacidad.", color:"C6FF00" },
      { n:2, title:"Adquirir", desc:"Comprar/contratar con business case.", color:"27E5E5" },
      { n:3, title:"Operar", desc:"Usar y mantener el recurso.", color:"FFB000" },
      { n:4, title:"Optimizar", desc:"Ajustar capacidad y costo.", color:"22E06B" },
      { n:5, title:"Retirar", desc:"Dar de baja de forma segura.", color:"9D6BFF" },
      { n:6, title:"Gobernar", desc:"EDM04 supervisa todo el ciclo.", color:"FF6B35" },
    ], notes: "El recurso se gobierna en todo su ciclo, no solo al comprarlo. El retiro seguro de activos OT es un punto ciego frecuente." },

  // -------- SECCIÓN 4: ITIL 4 --------
  { type: "section", num: 4, title: "ITIL 4 — GESTIÓN DE SERVICIOS", sub: "El sistema de valor del servicio en la operación" },

  { type: "concepts3", sec: "ITIL", title: "Servicio, valor y co-creación", items: [
      { k: "SERVICIO", desc: "Medio para habilitar la co-creación de valor facilitando resultados que el cliente quiere, sin que asuma ciertos costos y riesgos.", ex: "Servicio SCADA gestionado", color: "C6FF00" },
      { k: "VALOR", desc: "Se co-crea entre proveedor y cliente; no lo entrega uno solo.", ex: "TI + planta juntos", color: "27E5E5" },
      { k: "UTILIDAD + GARANTÍA", desc: "Utilidad (apto para el propósito) más garantía (apto para el uso: disponible, seguro).", ex: "Funciona y está disponible", color: "FFB000" },
    ], note: "ITIL 4 (AXELOS) ve la TI como servicios que co-crean valor. Complementa a COBIT: COBIT gobierna, ITIL opera el servicio.",
    notes: "El giro de ITIL 4: valor co-creado, no entregado. En planta, el servicio de TI y la operación crean valor juntos." },

  { type: "grid", sec: "ITIL", title: "El Sistema de Valor del Servicio (SVS)", cols: 3, lead: "El SVS describe cómo los componentes de una organización trabajan juntos para crear valor.",
    cards: [
      { tag: "PRINCIPIOS GUÍA", desc: "Siete recomendaciones que orientan toda decisión.", color: "C6FF00" },
      { tag: "GOBERNANZA", desc: "Dirección y control (aquí conecta con COBIT/38500).", color: "27E5E5" },
      { tag: "CADENA DE VALOR", desc: "Seis actividades para crear y entregar servicios.", color: "FFB000" },
      { tag: "PRÁCTICAS", desc: "34 prácticas (incidentes, cambios, problemas…).", color: "22E06B" },
      { tag: "MEJORA CONTINUA", desc: "Transversal: mejorar siempre, en todo.", color: "9D6BFF" },
      { tag: "ENTRADA/SALIDA", desc: "De la demanda y oportunidad al valor entregado.", color: "FF6B35" },
    ], notes: "El SVS integra gobernanza (COBIT/38500) con operación (cadena de valor y prácticas). Aquí se enlazan gobierno y gestión de servicios." },

  { type: "grid", sec: "ITIL", title: "Los siete principios guía de ITIL 4", cols: 4, lead: "Recomendaciones universales que guían cualquier iniciativa.",
    cards: [
      { tag: "ENFOCARSE EN EL VALOR", desc: "Todo debe aportar valor a algún interesado.", color: "C6FF00" },
      { tag: "EMPEZAR DONDE ESTÁS", desc: "No reinventar; aprovechar lo existente.", color: "27E5E5" },
      { tag: "PROGRESAR ITERANDO", desc: "Avanzar por pasos con retroalimentación.", color: "FFB000" },
      { tag: "COLABORAR Y VISIBILIZAR", desc: "Trabajo conjunto y transparente.", color: "22E06B" },
      { tag: "PENSAR HOLÍSTICO", desc: "Ver el sistema completo, no las partes.", color: "9D6BFF" },
      { tag: "SIMPLICIDAD Y PRÁCTICO", desc: "Mantenerlo simple y práctico.", color: "FF6B35" },
      { tag: "OPTIMIZAR Y AUTOMATIZAR", desc: "Optimizar antes de automatizar.", color: "27E5E5" },
      { tag: "EN CPPS", desc: "'Empezar donde estás' respeta el legado OT existente.", color: "C6FF00" },
    ], notes: "Los 7 principios guía son de sentido común pero potentes. 'Empezar donde estás' es clave: la planta ya tiene sistemas OT que no se botan." },

  { type: "grid", sec: "ITIL", title: "Prácticas de ITIL 4 útiles en planta", cols: 3, lead: "De las 34 prácticas, varias son directamente aplicables a OT.",
    cards: [
      { tag: "GESTIÓN DE INCIDENTES", desc: "Restaurar el servicio rápido: un HMI caído, un historiador sin datos.", color: "FF3B30" },
      { tag: "GESTIÓN DE CAMBIOS", desc: "Autorizar y controlar cambios en OT sin tumbar la línea (liga a BAI06).", color: "C6FF00" },
      { tag: "GESTIÓN DE PROBLEMAS", desc: "Hallar la causa raíz de fallos recurrentes de proceso.", color: "27E5E5" },
      { tag: "NIVEL DE SERVICIO", desc: "SLA de disponibilidad y latencia del control.", color: "FFB000" },
      { tag: "GESTIÓN DE ACTIVOS", desc: "Inventario de activos OT (base para seguridad y continuidad).", color: "22E06B" },
      { tag: "MEJORA CONTINUA", desc: "Ciclos de mejora del OEE y de la postura de seguridad.", color: "9D6BFF" },
    ], notes: "ITIL 4 aterriza en OT vía incidentes, cambios y niveles de servicio. Gestión de cambios (habilitación del cambio) es la más crítica en planta." },

  { type: "compare", sec: "ITIL", title: "COBIT y ITIL 4 — cómo se combinan",
    leftTitle: "COBIT 2019", leftItems: ["Gobierno y gestión de I&T","Qué objetivos priorizar","Niveles de capacidad","Perspectiva de dirección","Marco 'paraguas'"],
    rightTitle: "ITIL 4", rightItems: ["Gestión de servicios","Cómo operar y mejorar","Prácticas concretas","Perspectiva de servicio","Detalle operativo"],
    leftColor: "C6FF00", rightColor: "27E5E5",
    foot: "COBIT dice QUÉ gobernar; ITIL 4 dice CÓMO operar los servicios. Se usan juntos.",
    notes: "No compiten. COBIT gobierna la continuidad (DSS04); ITIL la operacionaliza con gestión de incidentes y cambios." },

  { type: "process", sec: "ITIL", title: "La cadena de valor del servicio", cols: 3, steps: [
      { n:1, title:"Planear", desc:"Visión y dirección compartidas.", color:"C6FF00" },
      { n:2, title:"Mejorar", desc:"Mejora continua transversal.", color:"27E5E5" },
      { n:3, title:"Involucrar", desc:"Relación con interesados.", color:"FFB000" },
      { n:4, title:"Diseñar/Transicionar", desc:"Crear y desplegar servicios.", color:"22E06B" },
      { n:5, title:"Obtener/Construir", desc:"Adquirir y desarrollar componentes.", color:"9D6BFF" },
      { n:6, title:"Entregar/Soportar", desc:"Operar y dar soporte.", color:"FF6B35" },
    ], notes: "Las seis actividades de la cadena de valor de ITIL 4. No es secuencial: se combinan según el flujo de valor." },

  { type: "keypoints", sec: "ITIL", title: "ITIL 4 en el piso de planta", items: [
      { label: "Servicio, no sistema", desc: "El SCADA es un servicio con SLA, no solo un software." },
      { label: "Valor co-creado", desc: "TI y producción crean valor juntas; ninguna sola." },
      { label: "Empezar donde estás", desc: "Respetar el legado OT en vez de reemplazarlo de golpe." },
      { label: "Cambio gobernado", desc: "Habilitación del cambio evita que un ajuste tumbe la línea." },
      { label: "Mejora continua", desc: "El OEE y la seguridad mejoran por ciclos, no de un salto." },
    ], notes: "ITIL 4 aporta disciplina de servicio a OT, tradicionalmente gestionado de forma reactiva." },

  // -------- SECCIÓN 5: INDICADORES Y CIERRE U1 --------
  { type: "section", num: 5, title: "INDICADORES Y CIERRE DE LA UNIDAD 1", sub: "KPI, KRI y el tablero de gobierno" },

  { type: "concepts3", sec: "MEDICIÓN", title: "KPI frente a KRI", items: [
      { k: "KPI", desc: "Key Performance Indicator: mide el desempeño hacia un objetivo. Mira resultados.", ex: "OEE = 78 %", color: "C6FF00" },
      { k: "KRI", desc: "Key Risk Indicator: alerta temprana de que un riesgo aumenta. Mira amenazas.", ex: "Parches OT pendientes", color: "FF3B30" },
      { k: "META", desc: "El valor objetivo del indicador, ligado al apetito y a la estrategia.", ex: "OEE meta = 85 %", color: "FFB000" },
    ], note: "KPI mide si vamos bien; KRI avisa si algo va a salir mal. Un buen tablero de gobierno combina ambos, no solo KPI.",
    notes: "Error común: medir solo desempeño (KPI) y no riesgo (KRI). El KRI es el 'sensor de humo' del gobierno." },

  { type: "grid", sec: "MEDICIÓN", title: "Un tablero de gobierno para la planta", cols: 3, lead: "Qué debería ver la dirección de un vistazo.",
    cards: [
      { tag: "VALOR", desc: "OEE, ROI de iniciativas, beneficios realizados vs prometidos.", color: "C6FF00" },
      { tag: "RIESGO", desc: "Incidentes OT, vulnerabilidades abiertas, parches pendientes.", color: "FF3B30" },
      { tag: "RECURSOS", desc: "Cobertura de competencias, uso de capacidad, dependencia de proveedores.", color: "FFB000" },
      { tag: "SERVICIO", desc: "Disponibilidad, cumplimiento de SLA, incidentes resueltos.", color: "27E5E5" },
      { tag: "CUMPLIMIENTO", desc: "Estado de auditorías, hallazgos abiertos, conformidad legal.", color: "22E06B" },
      { tag: "PROYECTOS", desc: "Avance del portafolio, sobrecostos, entregas a tiempo.", color: "9D6BFF" },
    ], notes: "El tablero cierra el ciclo EDM: sin medición no hay monitoreo. El proyecto propondrá un tablero como este." },

  { type: "matrix", sec: "MEDICIÓN", title: "Ejemplos de KPI y KRI en un CPPS", firstW: 4.2,
    cols: ["Indicador", "Tipo", "Alerta si…"],
    rows: [
      ["OEE de la línea", {t:"KPI",color:"C6FF00"}, "cae bajo la meta"],
      ["Parches OT pendientes", {t:"KRI",color:"FF3B30"}, "crece el backlog"],
      ["Cumplimiento de SLA", {t:"KPI",color:"C6FF00"}, "baja del 99 %"],
      ["Accesos remotos activos", {t:"KRI",color:"FF3B30"}, "hay no autorizados"],
    ], notes: "Combinar KPI (resultado) y KRI (riesgo) da a la dirección una visión completa: cómo vamos y qué se avecina." },

  { type: "phase", sec: "U1", title: "Entregable 1 — cierre", badge: "EVALUACIÓN · 15 %",
    name: "Sistema de gobierno de TI", what: "Se recibe esta semana. Integra: caracterización de la empresa, cascada de objetivos (S03), diseño a medida con factores y niveles (S04), matriz de principios (S02), matriz de derechos de decisión (S01) y un tablero de indicadores propuesto. Extensión 12–18 páginas.",
    leftTag: "COMPONENTES", tools: "Cascada · diseño a medida · matrices · tablero", rightTag: "SE INTEGRA EN", seen: "Documento final del proyecto",
    notes: "El Entregable 1 consolida toda la Unidad 1. Revisar rúbrica con los estudiantes." },

  { type: "keypoints", sec: "U1", title: "Síntesis de la Unidad 1", items: [
      { label: "Gobernar", desc: "EDM: evaluar, dirigir, monitorear (S01)." },
      { label: "Principios", desc: "ISO/IEC 38500: seis principios (S02)." },
      { label: "Sistema", desc: "COBIT: cascada, 40 objetivos, 7 componentes (S03)." },
      { label: "A medida", desc: "Factores de diseño, capacidad y madurez (S04)." },
      { label: "Valor/riesgo/recursos", desc: "El triángulo del gobierno e ITIL 4 (hoy)." },
    ], notes: "Cierre conceptual de la Unidad 1. La Unidad 2 pasa a lo ciber-físico: qué gobernamos técnicamente." },

  { type: "callouts", sec: "U1", title: "Puente a la Unidad 2",
    stats: [ {n:"YA SABEMOS",label:"cómo gobernar la tecnología: quién decide, qué priorizar, cómo medir",color:"C6FF00"},{n:"AHORA",label:"qué es exactamente lo que gobernamos: el sistema ciber-físico",color:"27E5E5"},{n:"U2 →",label:"Industria 4.0, ISA-95, RAMI 4.0 e IIoT: la arquitectura del CPPS",color:"FFB000"} ],
    note: { body: "Con la Unidad 1 tenemos el marco de gobierno. La Unidad 2 abre la 'caja negra' del sistema ciber-físico: su arquitectura, sus niveles y sus tecnologías. Gobernar bien exige entender qué se gobierna." },
    notes: "Transición a la Unidad 2. Pasamos de gobernar a entender la técnica del CPPS." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Valor", desc: "No basta invertir: hay que realizar el beneficio (EDM02)." },
      { label: "Riesgo", desc: "Apetito, registro y respuesta; el riesgo OT es físico." },
      { label: "Recursos", desc: "Personas (escasas), datos y infraestructura (EDM04)." },
      { label: "ITIL 4", desc: "La TI como servicios que co-crean valor." },
      { label: "Medir", desc: "KPI + KRI en un tablero cierran el ciclo EDM." },
    ], notes: "Repaso final de la Unidad 1. Verificar el triángulo valor-riesgo-recursos." },

  { type: "process", sec: "CIERRE", title: "Mapa del curso — cerramos la Unidad 1", cols: 4, steps: [
      { n:"U1 ✓", title:"Gobierno de TI", desc:"S01–05 · completada.", color:"22E06B" },
      { n:"U2", title:"CPPS", desc:"S06–09 · siguiente.", color:"27E5E5" },
      { n:"U3", title:"Integración IT/OT", desc:"S10–13.", color:"8C8C8C" },
      { n:"U4", title:"Riesgo ciber-físico", desc:"S14–16.", color:"8C8C8C" },
    ], notes: "Cerramos la Unidad 1. La Unidad 2 abre el mundo técnico del sistema ciber-físico." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "Realización de beneficios", d: "Cosechar el valor prometido de una inversión (EDM02)." },
      { t: "Apetito de riesgo", d: "Riesgo que la empresa acepta asumir (EDM03)." },
      { t: "Registro de riesgos", d: "Inventario de riesgos con probabilidad, impacto y respuesta." },
      { t: "EDM04", d: "Optimización de recursos: personas, datos, infraestructura." },
      { t: "ITIL 4 / SVS", d: "Gestión de servicios; sistema de valor del servicio." },
      { t: "Utilidad / garantía", d: "Apto para el propósito / apto para el uso." },
      { t: "KPI / KRI", d: "Indicador de desempeño / de riesgo." },
      { t: "TCO / ROI / VPN", d: "Métricas económicas de la inversión." },
    ], notes: "Vocabulario de valor, riesgo, recursos y servicios." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "ITIL 4: resumen del Service Value System (guía abierta)", url: "https://www.atlassian.com/itsm/itil", acc: "libre" },
      { t: "AXELOS — ITIL 4 Foundation (texto oficial)", url: "https://www.axelos.com/", acc: "pago" },
      { t: "ISACA — COBIT 2019 (EDM02/03/04, APO05/12/14)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
      { t: "Balanced Scorecard — conceptos básicos (recursos abiertos)", url: "https://balancedscorecard.org/bsc-basics-overview/", acc: "libre" },
      { t: "ISO 31000 — gestión del riesgo (norma)", url: "https://www.iso.org/iso-31000-risk-management.html", acc: "pago" },
      { t: "ISO/IEC 20000 — gestión de servicios de TI (norma)", url: "https://www.iso.org/", acc: "pago" },
    ], notes: "Fuentes de valor, riesgo, recursos e ITIL 4." },

  { type: "closing", nextNum: 6, nextTitle: "INDUSTRIA 4.0 Y SISTEMAS CIBER-FÍSICOS", nextDesc: "Inicio de la Unidad 2: las cuatro revoluciones, definición de CPPS y la arquitectura 5C.", prompt: "root@planta:~# next --unit 2 --session 06 _",
    notes: "Recordar entregar el Entregable 1. La Unidad 2 abre el mundo técnico del CPPS." },
];
