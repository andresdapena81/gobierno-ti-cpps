// S06 — Industria 4.0 y Sistemas Ciber-Físicos (inicio de la Unidad 2)
module.exports = [
  { type: "cover", title: "INDUSTRIA 4.0\n& CPS", subtitle: "La cuarta revolución industrial y los sistemas ciber-físicos de producción",
    notes: "Inicio de la Unidad 2. Abrimos la 'caja negra' del CPPS: qué es técnicamente el sistema que aprendimos a gobernar." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Cuatro revoluciones", desc: "De la máquina de vapor a la fábrica ciber-física" },
    { title: "Qué es un CPS/CPPS", desc: "Definición y la arquitectura 5C" },
    { title: "Tecnologías habilitadoras", desc: "Los nueve pilares de Industria 4.0" },
    { title: "Madurez digital", desc: "Modelos de madurez y fábrica inteligente" },
    { title: "I4.0 en Colombia", desc: "Adopción, barreras y el ángulo de gobierno" },
    { title: "Cierre", desc: "Síntesis, glosario y referencias" },
  ], notes: "De la historia a la técnica y al contexto regional. Sesión conceptual-técnica." },

  { type: "stats", sec: "U2", title: "La cuarta revolución en cifras",
    bigstats: [ {n:"4.0",label:"REVOLUCIÓN"},{n:9,label:"PILARES TECNOLÓGICOS"},{n:"5C",label:"ARQUITECTURA"},{n:2011,label:"TÉRMINO 'I4.0'"} ],
    kvs: [ {k:"ORIGEN",v:"Alemania, feria de Hannover 2011"},{k:"CONCEPTO",v:"Kagermann, Wahlster, Helbig (2013)"},{k:"NÚCLEO",v:"Sistemas ciber-físicos (CPS)"},{k:"CPS",v:"Helen Gill, NSF (~2006)"},{k:"CPPS",v:"Monostori (2014)"},{k:"META",v:"Fábrica inteligente y conectada"} ],
    notes: "'Industrie 4.0' nació como iniciativa estratégica alemana. Su núcleo tecnológico son los CPS." },

  { type: "objectives", sec: "U2", title: "Objetivos de la sesión", items: [
    { lead: "Situar", rest: "la cuarta revolución en la historia industrial." },
    { lead: "Definir", rest: "CPS y CPPS y distinguirlos de la automatización clásica y el IoT." },
    { lead: "Describir", rest: "la arquitectura 5C y los nueve pilares tecnológicos." },
    { lead: "Evaluar", rest: "la madurez digital de una planta con un modelo de referencia." },
    { lead: "Analizar", rest: "la adopción y las barreras de Industria 4.0 en Colombia." },
  ], notes: "Objetivos que combinan lo conceptual (definir CPPS) con lo diagnóstico (madurez)." },

  // -------- SECCIÓN 1 --------
  { type: "section", num: 1, title: "LAS CUATRO REVOLUCIONES INDUSTRIALES", sub: "De la mecanización a la producción ciber-física" },

  { type: "process", sec: "HISTORIA", title: "Cuatro revoluciones, un patrón", cols: 4, steps: [
      { n:"1.0", title:"Mecanización", desc:"Vapor, agua. ~1784. Telar mecánico.", color:"8C8C8C" },
      { n:"2.0", title:"Producción masa", desc:"Electricidad, línea. ~1870. Ford.", color:"FFB000" },
      { n:"3.0", title:"Automatización", desc:"Electrónica, PLC, TI. ~1969.", color:"27E5E5" },
      { n:"4.0", title:"Ciber-física", desc:"IoT, datos, IA, gemelos. Hoy.", color:"C6FF00" },
    ], notes: "Cada revolución multiplicó la productividad. La 4ª no añade una máquina: informatiza y conecta lo existente." },

  { type: "concepts3", sec: "HISTORIA", title: "Qué cambia en la 4ª revolución", items: [
      { k: "CONECTIVIDAD", desc: "Todo se conecta: máquinas, productos, sistemas y personas en red.", ex: "IIoT", color: "27E5E5" },
      { k: "DATOS", desc: "La producción genera y consume datos masivos en tiempo real.", ex: "Big data industrial", color: "C6FF00" },
      { k: "AUTONOMÍA", desc: "Los sistemas deciden y se ajustan con IA y modelos, no solo con reglas fijas.", ex: "Auto-optimización", color: "FFB000" },
    ], note: "La 3.0 automatizó tareas; la 4.0 conecta e informatiza el sistema completo para que se adapte. Es una diferencia de grado que se vuelve de tipo.",
    notes: "El salto 3.0→4.0: de automatización aislada a sistemas conectados que se auto-ajustan. La clave es datos + conectividad + autonomía." },

  { type: "grid", sec: "HISTORIA", title: "Definición de Industria 4.0", cols: 2, lead: "No hay una única definición; sí un consenso de rasgos.",
    cards: [
      { tag: "INTEGRACIÓN", desc: "Horizontal (cadena de valor), vertical (niveles de la empresa) y de ciclo de vida (ingeniería).", color: "C6FF00" },
      { tag: "TIEMPO REAL", desc: "Capacidad de recolectar y analizar datos al instante para decidir.", color: "27E5E5" },
      { tag: "DESCENTRALIZACIÓN", desc: "Decisiones tomadas lo más cerca posible del proceso (borde).", color: "FFB000" },
      { tag: "SERVITIZACIÓN", desc: "Del producto al servicio: valor por resultado, no solo por venta.", color: "22E06B" },
    ], notes: "Industria 4.0 se define por integración (H/V/ciclo), tiempo real, descentralización y nuevos modelos de negocio." },

  { type: "grid", sec: "HISTORIA", title: "Los tres tipos de integración", cols: 3, lead: "La integración es el corazón de Industria 4.0.",
    cards: [
      { tag: "VERTICAL", desc: "Conectar los niveles de la empresa: sensor → PLC → SCADA → MES → ERP.", color: "C6FF00" },
      { tag: "HORIZONTAL", desc: "Conectar la cadena de valor: proveedores, planta, clientes, logística.", color: "27E5E5" },
      { tag: "CICLO DE VIDA", desc: "Conectar ingeniería, producción y servicio a lo largo de la vida del producto.", color: "FFB000" },
    ], note: "La integración vertical (ISA-95, S07) y el ciclo de vida (RAMI 4.0, S08) son ejes que estructuran la Unidad 2.",
    notes: "Los tres tipos de integración anticipan ISA-95 (vertical) y RAMI 4.0 (los tres ejes). Puente a las próximas sesiones." },

  { type: "callouts", sec: "HISTORIA", title: "Por qué importa gobernar la 4ª revolución",
    stats: [ {n:"OPORTUNIDAD",label:"eficiencia, calidad, personalización y nuevos modelos de negocio",color:"C6FF00"},{n:"RIESGO",label:"complejidad, ciberamenazas y dependencia tecnológica crecientes",color:"FF3B30"},{n:"GOBIERNO",label:"decidir qué adoptar, en qué orden y con qué controles",color:"FFB000"} ],
    note: { body: "Industria 4.0 no es inevitable ni uniforme: cada empresa decide cuánto y cómo adoptarla. Sin gobierno (Unidad 1), la digitalización se vuelve gasto sin retorno o riesgo sin control. Con gobierno, se vuelve ventaja." },
    notes: "Conecta la Unidad 2 con la Unidad 1: la técnica sin gobierno es riesgo; con gobierno, es valor." },

  { type: "grid", sec: "HISTORIA", title: "Beneficios de negocio de Industria 4.0", cols: 3, lead: "Por qué las empresas invierten en la transformación.",
    cards: [
      { tag: "PRODUCTIVIDAD", desc: "Menos paradas, mejor OEE, procesos optimizados.", color: "C6FF00" },
      { tag: "CALIDAD", desc: "Menos defectos, control en línea, trazabilidad total.", color: "27E5E5" },
      { tag: "FLEXIBILIDAD", desc: "Lotes pequeños y personalización sin perder eficiencia.", color: "FFB000" },
      { tag: "TIEMPO", desc: "Ciclos más cortos de diseño a mercado.", color: "22E06B" },
      { tag: "COSTO", desc: "Mantenimiento predictivo y eficiencia energética.", color: "9D6BFF" },
      { tag: "NUEVOS MODELOS", desc: "Servitización: vender resultado, no solo producto.", color: "FF6B35" },
    ], notes: "Los beneficios justifican el business case (S05, S16). Cada uno se debe medir para probar el valor." },

  { type: "quote", sec: "HISTORIA", text: "La fábrica del futuro no es la más automatizada, sino la que mejor convierte datos en decisiones.", cite: "Síntesis de Industria 4.0",
    notes: "Idea que reorienta del 'más robots' al 'mejores decisiones'. Puente hacia el CPS." },

  // -------- SECCIÓN 2: CPS/CPPS --------
  { type: "section", num: 2, title: "SISTEMAS CIBER-FÍSICOS", sub: "El núcleo tecnológico de Industria 4.0" },

  { type: "concepts3", sec: "CPS", title: "CPS y CPPS", items: [
      { k: "CPS", desc: "Cyber-Physical System: integración de cómputo, redes y procesos físicos en lazo cerrado.", ex: "Gill/NSF ~2006", color: "27E5E5" },
      { k: "CPPS", desc: "Cyber-Physical Production System: CPS aplicados a producción, autónomos y cooperativos.", ex: "Monostori 2014", color: "C6FF00" },
      { k: "GEMELO DIGITAL", desc: "La réplica virtual sincronizada que da al CPS su 'lado ciber'.", ex: "Se ve en S12", color: "FFB000" },
    ], note: "Un CPPS consta de subsistemas autónomos y cooperativos, conectados en todos los niveles de producción, de los procesos a las redes logísticas (Monostori).",
    notes: "CPS es el concepto general; CPPS su especialización a manufactura. El gemelo digital es el componente que lo hace 'ciber'." },

  { type: "compare", sec: "CPS", title: "CPPS frente a automatización clásica",
    leftTitle: "CPPS", leftItems: ["Lazo cerrado cómputo–físico","Modelo (gemelo) del proceso","Consciente del contexto","Se reconfigura y aprende","Colabora en red y con humanos"],
    rightTitle: "Automatización clásica", rightItems: ["Control fijo y aislado (PLC)","Sin modelo del proceso","Reglas rígidas preprogramadas","No se adapta solo","Islas sin colaboración"],
    leftColor: "C6FF00", rightColor: "8C8C8C",
    foot: "Un CPPS no es 'un PLC con internet': tiene un modelo de su propio proceso y actúa sobre él.",
    notes: "Distinción clave. La automatización clásica ejecuta; el CPPS razona sobre su proceso mediante un modelo." },

  { type: "compare", sec: "CPS", title: "CPS frente a IoT de consumo",
    leftTitle: "CPS industrial", leftItems: ["Lazo de control con lo físico","Latencia y determinismo críticos","Seguridad y disponibilidad primero","Ciclo de vida de 15–20 años","Consecuencias físicas del fallo"],
    rightTitle: "IoT de consumo", rightItems: ["Telemetría y conveniencia","Latencia tolerante","Confidencialidad primero","Ciclo de vida de 2–3 años","Consecuencias de datos"],
    leftColor: "27E5E5", rightColor: "8C8C8C",
    foot: "El CPS actúa sobre el mundo físico; el IoT de consumo, en general, solo informa.",
    notes: "Otra confusión frecuente. El CPS cierra el lazo con actuadores; el IoT de consumo suele solo sensar." },

  { type: "grid", sec: "CPS", title: "La arquitectura 5C", cols: 3, lead: "Lee, Bagheri & Kao (2015): cinco niveles para construir un CPPS.",
    cards: [
      { tag: "1 · CONNECTION", desc: "Conexión inteligente: datos fiables de máquinas y sensores.", color: "27E5E5" },
      { tag: "2 · CONVERSION", desc: "De datos a información: características e indicadores de salud.", color: "22E06B" },
      { tag: "3 · CYBER", desc: "Gemelo digital, memoria y comparación de flota.", color: "C6FF00" },
      { tag: "4 · COGNITION", desc: "Diagnóstico, priorización y soporte a la decisión.", color: "FFB000" },
      { tag: "5 · CONFIGURATION", desc: "Reconfiguración y resiliencia: el sistema se auto-ajusta.", color: "FF6B35" },
      { tag: "LECTURA", desc: "Cada nivel se construye sobre el anterior; sin datos fiables no hay cognición.", color: "9D6BFF" },
    ], notes: "La 5C es la 'escalera' del CPPS. La mayoría de plantas colombianas están en niveles 1–2 (conectar y convertir)." },

  { type: "phase", sec: "CPS", title: "La 5C aplicada — una fresadora inteligente", badge: "EJEMPLO",
    name: "De la vibración a la decisión", what: "1 Connection: sensores de vibración y corriente. 2 Conversion: se calcula el desgaste de la herramienta. 3 Cyber: se compara con el gemelo y con otras máquinas de la flota. 4 Cognition: se prioriza el aviso y se sugiere cambiar la herramienta. 5 Configuration: se ajusta el avance o se agenda mantenimiento.",
    leftTag: "TECNOLOGÍAS", tools: "Sensórica · OPC UA · gemelo · IA", rightTag: "GOBIERNO", seen: "¿Quién autoriza el auto-ajuste?",
    notes: "Ejemplo concreto de los 5 niveles. La pregunta de gobierno: ¿hasta dónde decide la máquina sola?" },

  { type: "keypoints", sec: "CPS", title: "Características de un CPPS", items: [
      { label: "Interconectado", desc: "Máquinas, productos y sistemas se comunican." },
      { label: "Consciente", desc: "Percibe su estado y su contexto mediante sensores." },
      { label: "Inteligente", desc: "Decide con modelos y datos, no solo reglas fijas." },
      { label: "Autónomo", desc: "Se reconfigura y responde a cambios por sí mismo." },
      { label: "Resiliente", desc: "Tolera fallos y se recupera; degrada con gracia." },
    ], notes: "Los cinco rasgos que definen un CPPS. Cada uno plantea decisiones de gobierno (autonomía, seguridad, datos)." },

  { type: "phase", sec: "CPS", title: "El gemelo digital — el 'lado ciber'", badge: "COMPONENTE CLAVE",
    name: "El modelo que piensa por el sistema", what: "Lo que distingue a un CPS de la automatización es su gemelo digital: una réplica virtual sincronizada del activo o proceso. En él, el sistema simula, compara y decide antes de actuar sobre lo físico. Sin gemelo hay control; con gemelo hay cognición. Es el nivel 3 (Cyber) de la 5C.",
    leftTag: "FUNCIONES", tools: "Simular · comparar · predecir · optimizar", rightTag: "SE PROFUNDIZA EN", seen: "Gemelos digitales (S12)",
    notes: "Adelanta S12. El gemelo es lo que hace 'ciber' al ciber-físico. Marcar bien esta idea." },

  // -------- SECCIÓN 3: TECNOLOGÍAS --------
  { type: "section", num: 3, title: "LAS TECNOLOGÍAS HABILITADORAS", sub: "Los nueve pilares de Industria 4.0" },

  { type: "grid", sec: "PILARES", title: "Los nueve pilares", cols: 3, lead: "El marco clásico (BCG) de las tecnologías que habilitan Industria 4.0.",
    cards: [
      { tag: "IIoT", desc: "Internet Industrial de las Cosas: sensórica y conectividad.", color: "27E5E5" },
      { tag: "NUBE", desc: "Cómputo y almacenamiento elástico; plataformas industriales.", color: "C6FF00" },
      { tag: "BIG DATA / ANALÍTICA", desc: "Procesar y analizar grandes volúmenes de datos de proceso.", color: "FFB000" },
      { tag: "SIMULACIÓN", desc: "Gemelos digitales y simulación de procesos.", color: "22E06B" },
      { tag: "REALIDAD AUMENTADA", desc: "Guía visual para mantenimiento, montaje y formación.", color: "9D6BFF" },
      { tag: "FABRICACIÓN ADITIVA", desc: "Impresión 3D: prototipado y repuestos bajo demanda.", color: "FF6B35" },
      { tag: "ROBOTS AUTÓNOMOS", desc: "Robots colaborativos (cobots) y AGV/AMR.", color: "27E5E5" },
      { tag: "INTEGRACIÓN", desc: "Integración horizontal y vertical de sistemas.", color: "C6FF00" },
      { tag: "CIBERSEGURIDAD", desc: "Proteger el sistema ciber-físico (IEC 62443).", color: "FF3B30" },
    ], notes: "Los 9 pilares (BCG, 2015). Cada uno es una decisión de inversión y de riesgo. La ciberseguridad es transversal." },

  { type: "phase", sec: "PILARES", title: "IIoT, nube y borde", badge: "PILARES 1–3",
    name: "La columna vertebral de datos", what: "El IIoT instrumenta la planta con sensores; la nube provee cómputo y plataformas elásticas; el borde (edge) procesa cerca del proceso para baja latencia. Juntos forman el flujo de datos del CPPS. La decisión de gobierno: qué se procesa en el borde y qué en la nube (soberanía, latencia, costo).",
    leftTag: "DECISIÓN CLAVE", tools: "Borde vs nube · soberanía del dato", rightTag: "SE PROFUNDIZA EN", seen: "IIoT/Edge/Nube (S09)",
    notes: "Adelanta S09. La arquitectura borde-nube es una de las decisiones de gobierno más importantes en un CPPS." },

  { type: "phase", sec: "PILARES", title: "Analítica, simulación y gemelos", badge: "PILARES 4–5",
    name: "De datos a inteligencia", what: "La analítica (incluida IA) convierte datos en predicciones: mantenimiento predictivo, control de calidad, optimización. La simulación y los gemelos digitales permiten probar y optimizar en virtual antes de tocar lo físico. Son el 'nivel Cyber y Cognition' de la 5C.",
    leftTag: "APLICACIONES", tools: "Predictivo · optimización · gemelo", rightTag: "SE PROFUNDIZA EN", seen: "Gemelos (S12), datos (S13)",
    notes: "Adelanta S12 y S13. La analítica y el gemelo son donde el CPPS 'piensa'." },

  { type: "phase", sec: "PILARES", title: "Robótica, aditiva y realidad aumentada", badge: "PILARES 6–8",
    name: "La interfaz físico-digital", what: "Los cobots y AMR flexibilizan la producción; la fabricación aditiva permite repuestos y personalización bajo demanda; la realidad aumentada asiste al operario en mantenimiento y montaje. Amplían la colaboración humano-máquina, un punto sensible del principio de comportamiento humano (38500).",
    leftTag: "IMPACTO HUMANO", tools: "Cobots · AMR · AR · impresión 3D", rightTag: "GOBIERNO", seen: "Seguridad y competencias del operario",
    notes: "Estos pilares tocan directamente al operario. Su adopción exige gestión del cambio y seguridad (principio 6 de 38500)." },

  { type: "grid", sec: "PILARES", title: "Tecnologías emergentes recientes", cols: 3, lead: "El marco de nueve pilares se amplía con tendencias 2024–2026.",
    cards: [
      { tag: "IA GENERATIVA", desc: "Copilotos para ingeniería, documentación y diagnóstico.", color: "C6FF00" },
      { tag: "5G / TSN", desc: "Redes deterministas e inalámbricas para control en tiempo real.", color: "27E5E5" },
      { tag: "GEMELOS DE PLANTA", desc: "Gemelos a escala de fábrica, no solo de máquina.", color: "FFB000" },
      { tag: "IA EN EL BORDE", desc: "Inferencia de modelos directamente en dispositivos de planta.", color: "22E06B" },
      { tag: "SOSTENIBILIDAD", desc: "Gemelos y datos para eficiencia energética y huella de carbono.", color: "9D6BFF" },
      { tag: "OT ZERO TRUST", desc: "Seguridad de confianza cero adaptada a entornos OT.", color: "FF3B30" },
    ], notes: "Actualización 2024-2026. La IA generativa y la IA en el borde son las tendencias más disruptivas para la planta." },

  { type: "callouts", sec: "PILARES", title: "No es adoptar todo, es adoptar con criterio",
    stats: [ {n:"9+",label:"tecnologías: ninguna empresa las adopta todas a la vez",color:"C6FF00"},{n:"PRIORIZAR",label:"empezar por la que resuelve el mayor dolor con menor riesgo",color:"FFB000"},{n:"GOBERNAR",label:"cada pilar es una decisión de inversión, riesgo y competencias",color:"27E5E5"} ],
    note: { body: "Los nueve pilares son un menú, no una lista de tareas. El gobierno (Unidad 1) decide cuáles adoptar, en qué orden y con qué controles. Adoptar tecnología sin priorizar es la receta del fracaso digital." },
    notes: "Reconecta con el gobierno: los pilares se priorizan con la cascada y los factores de diseño de COBIT." },

  { type: "phase", sec: "PILARES", title: "Integración y ciberseguridad", badge: "PILARES 8–9",
    name: "Lo que conecta y lo que protege", what: "La INTEGRACIÓN (pilar 8) une los sistemas vertical y horizontalmente: sin ella, los demás pilares son islas (ISA-95 y RAMI 4.0, S07–08). La CIBERSEGURIDAD (pilar 9) es transversal: cada nueva conexión amplía la superficie de ataque del proceso físico (IEC 62443, S14–15). Integrar sin asegurar es abrir la planta al riesgo.",
    leftTag: "SE PROFUNDIZA EN", tools: "ISA-95, RAMI (S07-08) · IEC 62443 (S14-15)", rightTag: "REGLA", seen: "Integrar y asegurar van juntos",
    notes: "Los dos pilares transversales. La ciberseguridad no es un pilar más: condiciona a todos los demás." },

  // -------- SECCIÓN 4: MADUREZ --------
  { type: "section", num: 4, title: "MADUREZ DIGITAL", sub: "¿Qué tan 4.0 es realmente una planta?" },

  { type: "process", sec: "MADUREZ", title: "Etapas de madurez (modelo Acatech)", cols: 3, steps: [
      { n:1, title:"Informatización", desc:"TI aislada, sin conexión.", color:"8C8C8C" },
      { n:2, title:"Conectividad", desc:"Sistemas conectados.", color:"FF6B35" },
      { n:3, title:"Visibilidad", desc:"'Ver' lo que pasa en tiempo real.", color:"FFB000" },
      { n:4, title:"Transparencia", desc:"Entender por qué pasa.", color:"22E06B" },
      { n:5, title:"Predicción", desc:"Anticipar lo que pasará.", color:"27E5E5" },
      { n:6, title:"Adaptabilidad", desc:"Actuar y auto-ajustarse.", color:"C6FF00" },
    ], notes: "El modelo Acatech (Industrie 4.0 Maturity Index) va de informatizar a adaptarse. La mayoría de plantas están en 2-3." },

  { type: "grid", sec: "MADUREZ", title: "Modelos de madurez digital", cols: 3, lead: "Varios marcos evalúan qué tan 4.0 es una organización.",
    cards: [
      { tag: "ACATECH", desc: "Maturity Index: 6 etapas (informatizar → adaptar) en 4 áreas.", color: "C6FF00" },
      { tag: "IMPULS (VDMA)", desc: "Readiness para pymes: 6 dimensiones y 5 niveles.", color: "27E5E5" },
      { tag: "SIRI (Singapur)", desc: "Smart Industry Readiness Index: 16 dimensiones.", color: "FFB000" },
      { tag: "PROPÓSITO", desc: "Diagnosticar el punto de partida y priorizar la ruta de mejora.", color: "22E06B" },
      { tag: "DIMENSIONES", desc: "Suelen cubrir tecnología, organización, personas y estrategia.", color: "9D6BFF" },
      { tag: "GOBIERNO", desc: "La madurez digital complementa la madurez de gobierno (COBIT).", color: "FF6B35" },
    ], notes: "Los modelos de madurez son la herramienta del diagnóstico del proyecto. SIRI es el más completo; IMPULS, el más apto para pymes." },

  { type: "concepts3", sec: "MADUREZ", title: "La fábrica inteligente", items: [
      { k: "SMART FACTORY", desc: "Planta donde los CPPS, personas y sistemas colaboran para producir de forma flexible y optimizada.", ex: "Meta de la I4.0", color: "C6FF00" },
      { k: "LIGHTHOUSE", desc: "Fábricas 'faro' (WEF/McKinsey): referentes globales de adopción avanzada.", ex: "Benchmarks", color: "27E5E5" },
      { k: "REALIDAD PYME", desc: "La mayoría no es un lighthouse: avanza por pasos priorizados y realistas.", ex: "Colombia", color: "FFB000" },
    ], note: "La 'fábrica inteligente' es un norte, no un requisito de entrada. Para una pyme, el valor está en subir uno o dos escalones de madurez, no en saltar al lighthouse.",
    notes: "Aterrizar expectativas: el objetivo realista es avanzar por etapas, no copiar una fábrica faro alemana." },

  { type: "phase", sec: "MADUREZ", title: "Diagnóstico de madurez — cómo se hace", badge: "MÉTODO",
    name: "De la percepción a la evidencia", what: "Se evalúa cada dimensión (tecnología, datos, procesos, personas, estrategia) con evidencia y entrevistas, asignando un nivel. El resultado es un perfil de madurez que revela brechas y prioridades. Se combina con el diagnóstico de gobierno (COBIT) para una ruta integral.",
    leftTag: "SALIDA", tools: "Perfil de madurez por dimensión", rightTag: "SE USA EN", seen: "Diagnóstico del proyecto (E1/E2)",
    notes: "El diagnóstico de madurez es un insumo del proyecto. Debe basarse en evidencia, no en autopercepción optimista." },

  { type: "matrix", sec: "MADUREZ", title: "Perfil de madurez — ejemplo pyme", firstW: 3.6,
    cols: ["Dimensión", "Nivel", "Prioridad"],
    rows: [
      ["Conectividad de máquinas", {t:"2 / 6",color:"FF6B35"}, "Alta"],
      ["Datos y analítica", {t:"1 / 6",color:"FF3B30"}, "Alta"],
      ["Ciberseguridad OT", {t:"1 / 6",color:"FF3B30"}, "Crítica"],
      ["Competencias digitales", {t:"2 / 6",color:"FF6B35"}, "Media"],
    ], notes: "Perfil típico de una pyme industrial colombiana: conectividad y seguridad como prioridades. El proyecto hará el suyo." },

  { type: "callouts", sec: "MADUREZ", title: "Madurez digital y madurez de gobierno",
    stats: [ {n:"TÉCNICA",label:"madurez digital: qué tecnología y capacidad tiene la planta",color:"27E5E5"},{n:"GOBIERNO",label:"madurez de gobierno (COBIT): qué tan bien decide sobre esa tecnología",color:"C6FF00"},{n:"AMBAS",label:"una planta muy digital sin gobierno acumula riesgo; con gobierno, valor",color:"FFB000"} ],
    note: { body: "Las dos madureces son complementarias. Digitalizar sin gobernar crea sistemas complejos y riesgosos; gobernar sin digitalizar deja valor sobre la mesa. El proyecto evalúa ambas." },
    notes: "Cierra la sección uniendo lo técnico (madurez digital) con lo de gobierno (Unidad 1)." },

  { type: "grid", sec: "MADUREZ", title: "Qué evalúa un modelo de madurez", cols: 3, lead: "Las dimensiones típicas de un diagnóstico digital.",
    cards: [
      { tag: "TECNOLOGÍA", desc: "Conectividad, sistemas, datos e infraestructura de la planta.", color: "27E5E5" },
      { tag: "PROCESOS", desc: "Digitalización y automatización de los procesos productivos.", color: "C6FF00" },
      { tag: "DATOS", desc: "Captura, calidad, integración y uso de los datos.", color: "FFB000" },
      { tag: "PERSONAS", desc: "Competencias digitales y cultura de mejora.", color: "22E06B" },
      { tag: "ESTRATEGIA", desc: "Existencia de una hoja de ruta y liderazgo digital.", color: "9D6BFF" },
      { tag: "GOBIERNO", desc: "Estructuras y decisiones sobre la tecnología (COBIT).", color: "FF6B35" },
    ], notes: "Un buen diagnóstico cubre tecnología, procesos, datos, personas, estrategia y gobierno, no solo máquinas." },

  // -------- SECCIÓN 5: COLOMBIA / GOBIERNO --------
  { type: "section", num: 5, title: "INDUSTRIA 4.0 EN COLOMBIA", sub: "Adopción, barreras y el papel del gobierno de TI" },

  { type: "grid", sec: "CONTEXTO", title: "El tejido industrial colombiano", cols: 3, lead: "El contexto que condiciona la adopción de Industria 4.0.",
    cards: [
      { tag: "PYMES", desc: "La mayoría de las empresas: recursos y talento limitados.", color: "FFB000" },
      { tag: "SECTORES FUERTES", desc: "Alimentos, textil-confección, cemento, energía, química.", color: "C6FF00" },
      { tag: "ANTIOQUIA", desc: "Clúster manufacturero relevante; ecosistema de innovación.", color: "27E5E5" },
      { tag: "POLÍTICA", desc: "CONPES y programas de transformación digital y productividad.", color: "22E06B" },
      { tag: "ACADEMIA", desc: "Universidades y centros que forman talento (este curso).", color: "9D6BFF" },
      { tag: "BRECHA", desc: "Conectividad, talento y ciberseguridad OT como cuellos de botella.", color: "FF3B30" },
    ], notes: "Contexto regional. El valor del curso es formar talento que gobierne la digitalización del tejido industrial local." },

  { type: "grid", sec: "CONTEXTO", title: "Barreras de adopción", cols: 2, lead: "Por qué la adopción es más lenta de lo esperado.",
    cards: [
      { tag: "FINANCIERAS", desc: "Inversión alta y retorno incierto para una pyme.", color: "FF3B30" },
      { tag: "TALENTO", desc: "Escasez de perfiles que integren TI, OT y datos.", color: "FFB000" },
      { tag: "CULTURALES", desc: "Resistencia al cambio y desconfianza en la automatización.", color: "27E5E5" },
      { tag: "TÉCNICAS", desc: "Legado OT, conectividad limitada e integración compleja.", color: "9D6BFF" },
    ], note: "Las barreras son más organizacionales y de talento que puramente técnicas. El gobierno ayuda a superarlas priorizando y gestionando el cambio.",
    notes: "Las barreras principales son financieras y de talento, no de tecnología de punta. El gobierno las aborda." },

  { type: "phase", sec: "CONTEXTO", title: "El rol del gobierno de TI en la adopción", badge: "PUENTE U1↔U2",
    name: "Gobernar la digitalización", what: "El gobierno (Unidad 1) decide qué pilares adoptar, en qué orden y con qué controles, alineando la inversión con la estrategia (costo, calidad, exportación). Prioriza con la cascada y los factores de diseño, gestiona el riesgo IT/OT y asegura las competencias. Convierte la adopción de un gasto en una ventaja.",
    leftTag: "HERRAMIENTAS", tools: "Cascada · factores de diseño · registro de riesgos", rightTag: "RESULTADO", seen: "Ruta de adopción priorizada",
    notes: "Une explícitamente Unidad 1 y 2: el gobierno guía la adopción técnica. Anticipa la hoja de ruta de S16." },

  { type: "grid", sec: "CONTEXTO", title: "Ruta realista de adopción para una pyme", cols: 3, lead: "Un orden sensato de escalones, no un salto al lighthouse.",
    cards: [
      { tag: "1 · CONECTAR", desc: "Instrumentar máquinas críticas y conectar datos básicos.", color: "27E5E5" },
      { tag: "2 · VER (OEE)", desc: "Tableros de OEE y visibilidad del proceso en tiempo real.", color: "C6FF00" },
      { tag: "3 · ASEGURAR", desc: "Segmentación y ciberseguridad OT desde el inicio.", color: "FF3B30" },
      { tag: "4 · PREDECIR", desc: "Mantenimiento predictivo en los activos que más paran.", color: "FFB000" },
      { tag: "5 · OPTIMIZAR", desc: "Analítica y gemelos donde el retorno lo justifique.", color: "22E06B" },
      { tag: "6 · GOBERNAR", desc: "Cada escalón bajo el marco de gobierno de la Unidad 1.", color: "9D6BFF" },
    ], notes: "Ruta pragmática. La seguridad (escalón 3) no es opcional: se construye desde el primer día de conexión." },

  { type: "matrix", sec: "CONTEXTO", title: "Casos de uso por sector", firstW: 3.2,
    cols: ["Sector", "Caso de uso 4.0", "Beneficio"],
    rows: [
      ["Alimentos", {t:"Trazabilidad de lote",color:"C6FF00"}, "Exportación"],
      ["Textil", {t:"Visión artificial calidad",color:"27E5E5"}, "Menos defectos"],
      ["Cemento", {t:"Optimización de horno",color:"FFB000"}, "Ahorro energético"],
      ["Energía", {t:"Mantenimiento predictivo",color:"22E06B"}, "Menos paradas"],
    ], notes: "Casos concretos por sector regional. Ayuda al estudiante a imaginar el caso de uso de su proyecto." },

  { type: "callouts", sec: "CONTEXTO", title: "El talento como factor decisivo",
    stats: [ {n:"BRECHA",label:"faltan perfiles que integren TI, OT, datos y ciberseguridad",color:"FF3B30"},{n:"FORMAR",label:"la academia y la empresa deben cerrar la brecha juntas",color:"C6FF00"},{n:"TÚ",label:"este curso forma el 'perfil puente' que la industria necesita",color:"FFB000"} ],
    note: { body: "La barrera número uno de la adopción no es el dinero ni la tecnología: es el talento. El profesional que entiende gobierno, TI y OT a la vez es escaso y decisivo. Ese es el perfil que este curso construye." },
    notes: "Motivación para el estudiante: el mercado demanda exactamente el perfil que el curso forma." },

  { type: "keypoints", sec: "CONTEXTO", title: "Ideas para el proyecto", items: [
      { label: "Diagnostica", desc: "Evalúa la madurez digital de tu empresa con un modelo (IMPULS/SIRI)." },
      { label: "Prioriza", desc: "Elige 1–2 pilares con mayor dolor y menor riesgo." },
      { label: "Asegura", desc: "Incluye ciberseguridad OT desde el primer escalón." },
      { label: "Alinea", desc: "Liga cada iniciativa a la estrategia (costo, calidad, exportación)." },
      { label: "Gobierna", desc: "Aplica la cascada y los factores de diseño de la Unidad 1." },
    ], notes: "Orientaciones concretas para que el proyecto conecte técnica (U2) con gobierno (U1)." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "4ª revolución", desc: "Conecta e informatiza; no solo automatiza." },
      { label: "CPPS", desc: "Cómputo + físico en lazo cerrado, con modelo del proceso." },
      { label: "5C", desc: "Connection, Conversion, Cyber, Cognition, Configuration." },
      { label: "9 pilares", desc: "Menú de tecnologías; se adoptan con criterio." },
      { label: "Madurez", desc: "Diagnosticar antes de digitalizar; avanzar por etapas." },
    ], notes: "Repaso de la sesión. Verificar la distinción CPPS vs automatización/IoT." },

  { type: "warning", sec: "CIERRE", title: "Digitalizar sin gobernar es acumular riesgo",
    paras: [
      "Conectar máquinas y datos sin un marco de gobierno multiplica la superficie de ataque, la complejidad y la dependencia — sin garantizar retorno.",
      "La Unidad 2 abre la técnica del CPPS, pero la brújula sigue siendo la Unidad 1: qué adoptar, en qué orden, con qué controles y quién responde.",
    ],
    quote: "Primero decidir bien; después conectar. La técnica sin gobierno es deuda.",
    notes: "Mensaje que amarra U1 y U2. Evita que los estudiantes se deslumbren con la tecnología olvidando el gobierno." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 2", cols: 4, steps: [
      { n:"S06", title:"I4.0 y CPS", desc:"Hoy.", color:"C6FF00" },
      { n:"S07", title:"ISA-95", desc:"Pirámide e integración vertical.", color:"27E5E5" },
      { n:"S08", title:"RAMI 4.0", desc:"Arquitectura de referencia y AAS.", color:"FFB000" },
      { n:"S09", title:"IIoT/Edge/Nube", desc:"Cierre de la Unidad 2.", color:"22E06B" },
    ], notes: "La Unidad 2 pasa de la visión (hoy) a las arquitecturas de referencia concretas." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "Industria 4.0", d: "Cuarta revolución industrial; integración ciber-física." },
      { t: "CPS / CPPS", d: "Sistema ciber-físico / de producción." },
      { t: "Arquitectura 5C", d: "Connection, Conversion, Cyber, Cognition, Configuration." },
      { t: "IIoT", d: "Internet Industrial de las Cosas." },
      { t: "Smart factory", d: "Fábrica inteligente, flexible y conectada." },
      { t: "Gemelo digital", d: "Réplica virtual sincronizada de un activo o proceso." },
      { t: "Madurez digital", d: "Grado de adopción de capacidades 4.0." },
      { t: "Lighthouse", d: "Fábrica faro: referente global de adopción." },
    ], notes: "Vocabulario de Industria 4.0 y CPS." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "Acatech (2013) — Recomendaciones Industrie 4.0", url: "https://www.acatech.de/", acc: "libre" },
      { t: "Monostori (2014) — CPPS (Procedia CIRP)", url: "https://doi.org/10.1016/j.procir.2014.03.115", acc: "libre" },
      { t: "Lee, Bagheri & Kao (2015) — 5C (Manufacturing Letters)", url: "https://doi.org/10.1016/j.mfglet.2014.12.001", acc: "libre" },
      { t: "Rüßmann et al. (2015) — Industry 4.0: The Nine Pillars (BCG)", url: "https://www.bcg.com/capabilities/manufacturing/industry-4.0", acc: "libre" },
      { t: "Acatech — Industrie 4.0 Maturity Index", url: "https://www.acatech.de/", acc: "libre" },
      { t: "WEF / McKinsey — Global Lighthouse Network", url: "https://www.weforum.org/projects/global-lighthouse-network/", acc: "libre" },
    ], notes: "Fuentes fundacionales de Industria 4.0 y CPPS más el contexto colombiano." },

  { type: "closing", nextNum: 7, nextTitle: "ISA-95 Y LA PIRÁMIDE DE AUTOMATIZACIÓN", nextDesc: "Los niveles 0–4, el estándar ISA-95/IEC 62264 y la integración vertical empresa-control.", prompt: "root@planta:~# next --session 07 _",
    notes: "S07 aterriza la integración vertical con ISA-95, el primer estándar de arquitectura del curso." },
];
