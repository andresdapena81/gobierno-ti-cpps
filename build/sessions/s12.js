// S12 — Gemelos digitales
module.exports = [
  { type: "cover", title: "GEMELOS\nDIGITALES", subtitle: "La réplica virtual que da al sistema ciber-físico su lado 'ciber'",
    notes: "El gemelo digital es el nivel Cyber/Cognition de la 5C. Con los datos fluyendo (S10-11), aquí se construye el modelo que piensa." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "Qué es un gemelo", desc: "Modelo, sombra y gemelo digital" },
    { title: "Tipos y fidelidad", desc: "De componente a proceso; cuánta fidelidad" },
    { title: "Ciclo de vida", desc: "Diseño, operación y retiro del gemelo" },
    { title: "Casos de uso", desc: "Validación, optimización, predicción, formación" },
    { title: "Gobierno del gemelo", desc: "Propiedad, validación y responsabilidad" },
    { title: "Cierre", desc: "Lab, síntesis y referencias" },
  ], notes: "De la definición precisa (modelo/sombra/gemelo) al gobierno de la fidelidad y la responsabilidad." },

  { type: "stats", sec: "GEMELO", title: "El gemelo digital en cifras",
    bigstats: [ {n:3,label:"NIVELES DE INTEGRACIÓN"},{n:"5C",label:"NIVEL CYBER"},{n:"↔",label:"SINCRONÍA BIDIRECCIONAL"},{n:"2002",label:"CONCEPTO (GRIEVES)"} ],
    kvs: [ {k:"ORIGEN",v:"Michael Grieves (2002), NASA"},{k:"MODELO",v:"Digital model: sin conexión automática"},{k:"SOMBRA",v:"Digital shadow: físico → virtual"},{k:"GEMELO",v:"Digital twin: físico ↔ virtual"},{k:"BASE",v:"Datos (S10-11) + modelo + simulación"},{k:"GOBIERNO",v:"Fidelidad, validación, responsabilidad"} ],
    notes: "La distinción clave: modelo (manual), sombra (un sentido), gemelo (bidireccional). Muchos llaman 'gemelo' a lo que es solo una sombra." },

  { type: "objectives", sec: "GEMELO", title: "Objetivos de la sesión", items: [
    { lead: "Distinguir", rest: "modelo, sombra y gemelo digital según su nivel de integración." },
    { lead: "Clasificar", rest: "los gemelos por alcance (componente, activo, sistema, proceso)." },
    { lead: "Describir", rest: "el ciclo de vida de un gemelo digital." },
    { lead: "Analizar", rest: "casos de uso de gemelos en manufactura." },
    { lead: "Definir", rest: "el gobierno del gemelo: fidelidad, validación y responsabilidad." },
  ], notes: "Objetivo central: no solo qué es un gemelo, sino cómo se gobierna (fidelidad, validación, quién responde)." },

  // -------- SECCIÓN 1: QUÉ ES --------
  { type: "section", num: 1, title: "MODELO, SOMBRA Y GEMELO", sub: "Tres cosas distintas que se confunden" },

  { type: "concepts3", sec: "DEFINICIÓN", title: "El nivel de integración lo cambia todo", items: [
      { k: "MODELO DIGITAL", desc: "Representación virtual sin intercambio automático de datos con lo físico. Se actualiza a mano.", ex: "Un CAD, una simulación", color: "FFB000" },
      { k: "SOMBRA DIGITAL", desc: "Flujo automático físico → virtual: el virtual refleja al físico, pero no lo controla.", ex: "Un tablero en vivo", color: "27E5E5" },
      { k: "GEMELO DIGITAL", desc: "Flujo bidireccional físico ↔ virtual: el virtual refleja Y actúa sobre el físico.", ex: "Optimización en lazo", color: "C6FF00" },
    ], note: "Kritzinger (2018): la diferencia no es la tecnología, es el flujo de datos. Sin flujo automático es modelo; en un sentido es sombra; en ambos es gemelo. La mayoría de 'gemelos' del mercado son en realidad sombras.",
    notes: "La distinción de Kritzinger es clave para el análisis de casos y para no dejarse engañar por el marketing. Bidireccional = gemelo real." },

  { type: "grid", sec: "DEFINICIÓN", title: "Qué compone un gemelo digital", cols: 2, lead: "Un gemelo es más que un modelo 3D.",
    cards: [
      { tag: "MODELO", desc: "La representación (física, de datos o híbrida) del activo o proceso.", color: "C6FF00" },
      { tag: "DATOS", desc: "El flujo en tiempo real desde el físico (S10-11) que lo mantiene sincronizado.", color: "27E5E5" },
      { tag: "SIMULACIÓN / IA", desc: "La capacidad de predecir, comparar y optimizar sobre el modelo.", color: "FFB000" },
      { tag: "CONEXIÓN", desc: "El lazo que devuelve decisiones al físico (lo que lo hace 'gemelo').", color: "22E06B" },
    ], note: "El gemelo = modelo + datos en vivo + simulación/IA + conexión de vuelta. Sin datos en vivo es un modelo; sin conexión de vuelta, una sombra.",
    notes: "Los cuatro componentes del gemelo. La conexión de vuelta es la que lo distingue de una sombra." },

  { type: "phase", sec: "DEFINICIÓN", title: "El gemelo y la arquitectura 5C", badge: "CONEXIÓN CON S06",
    name: "El nivel Cyber hecho realidad", what: "En la 5C, el gemelo digital ES el nivel 3 (Cyber): la memoria y el modelo donde la máquina se compara consigo misma y con su flota. La cognición (nivel 4) razona sobre el gemelo; la configuración (nivel 5) actúa. El gemelo es, literalmente, el 'lado ciber' del sistema ciber-físico.",
    leftTag: "EN LA 5C", tools: "Cyber (modelo) → Cognition → Configuration", rightTag: "REQUIERE", seen: "Datos en vivo (S10-11)",
    notes: "El gemelo aterriza la 5C de S06. Es el componente que hace 'ciber' al CPPS. Depende de la capa de datos." },

  { type: "grid", sec: "DEFINICIÓN", title: "Gemelo digital vs AAS", cols: 2, lead: "Dos conceptos relacionados de S08 y de hoy.",
    cards: [
      { tag: "AAS (S08)", desc: "Gemelo administrativo: identidad, datos y capacidades estandarizados del activo.", color: "27E5E5" },
      { tag: "GEMELO DE SIMULACIÓN", desc: "Réplica del comportamiento físico: predice y optimiza.", color: "C6FF00" },
      { tag: "COMPLEMENTARIOS", desc: "El AAS es la 'ficha' estándar; el gemelo de simulación, el 'modelo que corre'.", color: "FFB000" },
      { tag: "JUNTOS", desc: "Un CPPS maduro usa el AAS para interoperar y el gemelo para simular.", color: "22E06B" },
    ], note: "El AAS (S08) estandariza la identidad y los datos; el gemelo de simulación modela el comportamiento. Se complementan en un CPPS maduro.",
    notes: "Retoma la distinción de S08. AAS (datos/identidad) + gemelo de simulación (comportamiento) = gemelo completo." },

  { type: "callouts", sec: "DEFINICIÓN", title: "Por qué importa la distinción",
    stats: [ {n:"MARKETING",label:"casi todo se vende como 'gemelo digital', la mayoría son sombras",color:"FF3B30"},{n:"EXPECTATIVA",label:"pagar por un gemelo y recibir un tablero es un fracaso de gobierno",color:"FFB000"},{n:"VALOR",label:"el valor real (optimización, autonomía) requiere el lazo bidireccional",color:"C6FF00"} ],
    note: { body: "Distinguir modelo, sombra y gemelo no es pedantería: es proteger la inversión. Un gemelo real (bidireccional) cuesta y aporta más que una sombra. El gobierno debe especificar qué se compra y qué valor entrega, no dejarse llevar por la etiqueta." },
    notes: "La distinción protege la inversión (principio de adquisición). Especificar bien evita pagar 'gemelo' por una sombra." },

  { type: "matrix", sec: "DEFINICIÓN", title: "Modelo, sombra y gemelo — comparación", firstW: 3.2,
    cols: ["Aspecto", "Modelo", "Sombra", "Gemelo"],
    rows: [
      ["Datos físico→virtual", {t:"Manual",color:"FFB000"}, {t:"Auto",color:"22E06B"}, {t:"Auto",color:"22E06B"}],
      ["Datos virtual→físico", {t:"No",color:"FF3B30"}, {t:"No",color:"FF3B30"}, {t:"Auto",color:"22E06B"}],
      ["Actúa sobre el físico", {t:"No",color:"FF3B30"}, {t:"No",color:"FF3B30"}, {t:"Sí",color:"C6FF00"}],
    ], notes: "La tabla de Kritzinger. El gemelo es el único con flujo bidireccional que actúa sobre el físico. Distinción clave para el análisis de casos." },

  // -------- SECCIÓN 2: TIPOS Y FIDELIDAD --------
  { type: "section", num: 2, title: "TIPOS Y FIDELIDAD", sub: "De un tornillo a una fábrica entera" },

  { type: "grid", sec: "TIPOS", title: "Gemelos por alcance", cols: 2, lead: "El gemelo puede modelar desde un componente hasta un sistema de sistemas.",
    cards: [
      { tag: "COMPONENTE", desc: "Un elemento individual: un rodamiento, una válvula.", color: "C6FF00" },
      { tag: "ACTIVO", desc: "Una máquina completa: una prensa, una llenadora.", color: "27E5E5" },
      { tag: "SISTEMA", desc: "Una línea o celda: varias máquinas interactuando.", color: "FFB000" },
      { tag: "PROCESO / PLANTA", desc: "El proceso productivo completo o la fábrica entera.", color: "22E06B" },
    ], note: "El alcance crece de componente a planta. A mayor alcance, más valor potencial pero más complejidad y datos. Empezar pequeño y escalar es lo prudente.",
    notes: "El alcance define el esfuerzo. La mayoría de proyectos exitosos empiezan por un activo crítico y escalan." },

  { type: "concepts3", sec: "TIPOS", title: "Tipos de modelo subyacente", items: [
      { k: "FÍSICO (WHITE-BOX)", desc: "Basado en ecuaciones físicas del proceso. Preciso, exige conocimiento experto.", ex: "CFD, mecánica", color: "C6FF00" },
      { k: "DATOS (BLACK-BOX)", desc: "Basado en ML sobre datos históricos. Rápido de crear, opaco.", ex: "Red neuronal", color: "27E5E5" },
      { k: "HÍBRIDO (GREY-BOX)", desc: "Combina física y datos: lo mejor de ambos. Tendencia dominante.", ex: "Physics-informed ML", color: "FFB000" },
    ], note: "El modelo puede ser físico (ecuaciones), de datos (ML) o híbrido. El híbrido (physics-informed) es la tendencia: física para la estructura, datos para la precisión.",
    notes: "Los tres enfoques de modelado. El híbrido crece porque combina interpretabilidad (física) y precisión (datos)." },

  { type: "phase", sec: "TIPOS", title: "La fidelidad — cuánta es necesaria", badge: "DECISIÓN CLAVE",
    name: "Ni de más ni de menos", what: "La fidelidad es cuán fielmente el gemelo representa al físico. Más fidelidad da más precisión pero cuesta más (datos, cómputo, desarrollo). La fidelidad adecuada depende del propósito: un gemelo para agendar mantenimiento necesita menos fidelidad que uno para control en lazo cerrado. Sobre-modelar es tan malo como sub-modelar.",
    leftTag: "REGLA", tools: "La fidelidad la fija el propósito, no la ambición", rightTag: "RIESGO", seen: "Gemelo caro que nadie usa",
    notes: "La fidelidad es una decisión económica de gobierno. Se dimensiona por el caso de uso, no por 'hacerlo lo más realista posible'." },

  { type: "matrix", sec: "TIPOS", title: "Fidelidad según el propósito", firstW: 3.8,
    cols: ["Propósito", "Fidelidad", "Frecuencia sinc."],
    rows: [
      ["Agendar mantenimiento", {t:"Baja-media",color:"22E06B"}, "Horas/días"],
      ["Detección de anomalías", {t:"Media",color:"FFB000"}, "Minutos"],
      ["Optimización de parámetros", {t:"Media-alta",color:"27E5E5"}, "Minutos"],
      ["Control en lazo cerrado", {t:"Alta",color:"FF3B30"}, "Segundos/ms"],
    ], notes: "La fidelidad y la frecuencia de sincronización se dimensionan por el propósito. Control en lazo exige lo máximo; mantenimiento, poco." },

  { type: "grid", sec: "TIPOS", title: "Requisitos de datos del gemelo", cols: 2, lead: "Un gemelo vale lo que valen sus datos.",
    cards: [
      { tag: "COBERTURA", desc: "Las señales necesarias deben existir e instrumentarse.", color: "C6FF00" },
      { tag: "CALIDAD", desc: "Datos exactos, completos y a tiempo (garbage in, garbage out).", color: "FF3B30" },
      { tag: "FRECUENCIA", desc: "La tasa de muestreo debe soportar la fidelidad requerida.", color: "27E5E5" },
      { tag: "CONTEXTO", desc: "Semántica (S10) para que el modelo sepa qué es cada señal.", color: "FFB000" },
    ], note: "El gemelo depende por completo de la capa de datos (S10-11) y de su gobierno (S13). Un gemelo sobre datos malos produce decisiones malas con apariencia de rigor.",
    notes: "El gemelo hereda la calidad de sus datos. Enlaza con S13 (gobierno de datos). GIGO." },

  { type: "callouts", sec: "TIPOS", title: "Empezar pequeño, probar valor, escalar",
    stats: [ {n:"1 ACTIVO",label:"empezar por un activo crítico con datos disponibles",color:"C6FF00"},{n:"1 CASO",label:"un caso de uso claro con valor medible (p. ej. menos paradas)",color:"27E5E5"},{n:"ESCALAR",label:"replicar a otros activos solo tras probar el retorno",color:"FFB000"} ],
    note: { body: "El error típico es querer el gemelo de toda la planta de entrada. Lo prudente: un activo crítico, un caso de uso con valor medible, y escalar tras demostrar retorno. Así el gemelo no se vuelve un 'piloto zombi' más (S05)." },
    notes: "Estrategia anti-fracaso: pequeño, medible, escalar. Evita el piloto zombi de S05." },

  // -------- SECCIÓN 3: CICLO DE VIDA --------
  { type: "section", num: 3, title: "CICLO DE VIDA DEL GEMELO", sub: "El gemelo también nace, vive y muere" },

  { type: "process", sec: "CICLO", title: "Las cuatro fases", cols: 4, steps: [
      { n:1, title:"Diseño", desc:"Modelo del tipo (RAMI: tipo).", color:"C6FF00" },
      { n:2, title:"Creación", desc:"Instanciar y conectar datos.", color:"27E5E5" },
      { n:3, title:"Operación", desc:"Sincronizar, simular, decidir.", color:"FFB000" },
      { n:4, title:"Retiro", desc:"Archivar o dar de baja.", color:"9D6BFF" },
    ], notes: "El gemelo sigue el ciclo de vida del eje 2 de RAMI (S08): del tipo (diseño) a la instancia (operación) y al retiro." },

  { type: "grid", sec: "CICLO", title: "Diseño y creación", cols: 2, lead: "Antes de que el gemelo 'corra'.",
    cards: [
      { tag: "DEFINIR PROPÓSITO", desc: "¿Para qué? El propósito fija fidelidad, datos y alcance.", color: "C6FF00" },
      { tag: "CONSTRUIR EL MODELO", desc: "Físico, de datos o híbrido, según el propósito.", color: "27E5E5" },
      { tag: "INSTRUMENTAR", desc: "Asegurar las señales necesarias (sensores, OPC UA).", color: "FFB000" },
      { tag: "CONECTAR", desc: "Enlazar el flujo de datos en vivo (UNS) al modelo.", color: "22E06B" },
    ], note: "El diseño empieza por el propósito, no por el modelo. Instrumentar y conectar datos suele ser el mayor esfuerzo, no el modelo en sí.",
    notes: "El propósito manda. La instrumentación y conexión de datos suele ser el 80% del trabajo." },

  { type: "grid", sec: "CICLO", title: "Operación y mantenimiento del gemelo", cols: 2, lead: "El gemelo vivo requiere cuidado continuo.",
    cards: [
      { tag: "SINCRONIZACIÓN", desc: "Mantener el gemelo alineado con el físico en la frecuencia requerida.", color: "C6FF00" },
      { tag: "DERIVA (DRIFT)", desc: "El físico cambia (desgaste, mantenimiento); el modelo debe recalibrarse.", color: "FF3B30" },
      { tag: "VALIDACIÓN CONTINUA", desc: "Verificar que las predicciones siguen siendo correctas.", color: "FFB000" },
      { tag: "VERSIONADO", desc: "Controlar versiones del modelo como se controla el software.", color: "27E5E5" },
    ], note: "Un gemelo no es 'construir y olvidar': el activo físico cambia y el modelo se desvía (drift). Sin recalibración y validación continua, el gemelo miente con confianza.",
    notes: "El drift es el gran riesgo operativo del gemelo. Exige recalibración y validación continuas. Es un costo recurrente." },

  { type: "phase", sec: "CICLO", title: "El gemelo a lo largo del ciclo del producto", badge: "HILO DIGITAL",
    name: "Del diseño al servicio", what: "El gemelo conecta el diseño (¿cómo debería comportarse?), la producción (¿cómo se fabricó esta instancia?) y la operación (¿cómo se comporta hoy?). Ese hilo digital (S08) permite, por ejemplo, que un dato de diseño ayude a diagnosticar una falla en planta años después. El gemelo es el portador del hilo digital.",
    leftTag: "CONECTA", tools: "Diseño → producción → operación → servicio", rightTag: "HABILITA", seen: "Trazabilidad y mejora de extremo a extremo",
    notes: "El gemelo materializa el hilo digital de S08. Conecta las fases del ciclo de vida del producto." },

  { type: "callouts", sec: "CICLO", title: "El costo total de un gemelo",
    stats: [ {n:"CONSTRUIR",label:"modelo, instrumentación y conexión de datos (una vez)",color:"C6FF00"},{n:"OPERAR",label:"sincronización, cómputo y almacenamiento (recurrente)",color:"27E5E5"},{n:"MANTENER",label:"recalibración, validación y versionado (recurrente)",color:"FFB000"} ],
    note: { body: "El gemelo tiene un TCO: no solo cuesta construirlo, sino operarlo y mantenerlo alineado con un físico que cambia. Ignorar el costo recurrente lleva a gemelos abandonados que se desvían y pierden confiabilidad. El business case (S05, S16) debe incluirlo." },
    notes: "El TCO del gemelo incluye operación y mantenimiento, no solo construcción. Debe entrar en el business case." },

  { type: "grid", sec: "CICLO", title: "Tecnologías para construir un gemelo", cols: 3, lead: "El ecosistema técnico detrás de un gemelo.",
    cards: [
      { tag: "SIMULACIÓN", desc: "CFD, elementos finitos, simulación de procesos.", color: "C6FF00" },
      { tag: "IA / ML", desc: "Modelos de datos para lo difícil de modelar físicamente.", color: "27E5E5" },
      { tag: "PLATAFORMAS", desc: "Entornos de gemelos (Azure Digital Twins, etc.).", color: "FFB000" },
      { tag: "DATOS EN VIVO", desc: "OPC UA / MQTT / UNS (S10-11) para sincronizar.", color: "22E06B" },
      { tag: "VISUALIZACIÓN", desc: "3D, realidad aumentada para inspección.", color: "9D6BFF" },
      { tag: "ESTÁNDARES", desc: "ISO 23247, AAS (S08) para interoperar.", color: "FF6B35" },
    ], notes: "El gemelo integra simulación, IA, datos en vivo y visualización. No es una sola tecnología: es una arquitectura." },

  // -------- SECCIÓN 4: CASOS DE USO --------
  { type: "section", num: 4, title: "CASOS DE USO", sub: "Para qué sirve realmente un gemelo" },

  { type: "matrix", sec: "CASOS", title: "Casos de uso y su retorno", firstW: 4.0,
    cols: ["Caso de uso", "Beneficio principal"],
    rows: [
      ["Mantenimiento predictivo", {t:"Menos paradas no planificadas",color:"C6FF00"}],
      ["Optimización de proceso", {t:"Ahorro de energía/material",color:"27E5E5"}],
      ["Puesta en marcha virtual", {t:"Menos tiempo y riesgo al arrancar",color:"FFB000"}],
      ["Formación de operarios", {t:"Entrenar sin parar la línea",color:"22E06B"}],
    ], notes: "Cada caso de uso tiene un retorno concreto. El proyecto debe elegir el caso con mayor retorno y menor riesgo para su gemelo." },

  { type: "grid", sec: "CASOS", title: "Casos de uso en manufactura", cols: 3, lead: "Dónde el gemelo aporta valor medible.",
    cards: [
      { tag: "VALIDACIÓN VIRTUAL", desc: "Probar un cambio de proceso en el gemelo antes de tocar el físico.", color: "C6FF00" },
      { tag: "OPTIMIZACIÓN", desc: "Buscar los mejores parámetros de operación en el modelo.", color: "27E5E5" },
      { tag: "MANTENIMIENTO PREDICTIVO", desc: "Predecir fallos comparando el estado real con el esperado.", color: "FFB000" },
      { tag: "FORMACIÓN", desc: "Entrenar operarios en el gemelo sin riesgo ni parar la línea.", color: "22E06B" },
      { tag: "WHAT-IF", desc: "Simular escenarios (más demanda, una falla) para decidir.", color: "9D6BFF" },
      { tag: "PUESTA EN MARCHA VIRTUAL", desc: "Validar una línea nueva en virtual antes de construirla.", color: "FF6B35" },
    ], notes: "Seis casos de uso con retorno medible. La puesta en marcha virtual y la validación de cambios evitan costos y paradas reales." },

  { type: "phase", sec: "CASOS", title: "Caso — optimización de un horno", badge: "EJEMPLO",
    name: "Menos energía, misma calidad", what: "Un gemelo híbrido de un horno de cemento combina física térmica y datos de operación. Simula distintas curvas de temperatura y aire para encontrar la que minimiza el consumo de energía manteniendo la calidad del clínker. La recomendación se valida y se aplica. Resultado: ahorro energético medible sin arriesgar la producción.",
    leftTag: "TIPO", tools: "Gemelo híbrido · optimización · what-if", rightTag: "VALOR", seen: "Ahorro energético con calidad estable",
    notes: "Caso realista del sector cemento antioqueño. Muestra el valor concreto: optimizar sin arriesgar el proceso real." },

  { type: "grid", sec: "CASOS", title: "Del gemelo a la decisión autónoma", cols: 2, lead: "El gemelo habilita distintos grados de autonomía.",
    cards: [
      { tag: "INFORMAR", desc: "El gemelo muestra y predice; el humano decide. Nivel de entrada.", color: "22E06B" },
      { tag: "RECOMENDAR", desc: "El gemelo sugiere una acción; el humano aprueba.", color: "FFB000" },
      { tag: "ACTUAR CON SUPERVISIÓN", desc: "El gemelo ajusta parámetros dentro de límites; el humano supervisa.", color: "27E5E5" },
      { tag: "AUTÓNOMO", desc: "El gemelo cierra el lazo solo (nivel 5 de la 5C). Máximo cuidado.", color: "FF3B30" },
    ], note: "A más autonomía, más valor pero más riesgo. El grado de autonomía que se permite al gemelo es una decisión de gobierno: ¿hasta dónde puede actuar solo y quién responde?",
    notes: "La autonomía es un continuo. Cuánta se concede es decisión de gobierno (liga a la sección 5 y a S01)." },

  { type: "callouts", sec: "CASOS", title: "El gemelo no reemplaza el juicio",
    stats: [ {n:"HERRAMIENTA",label:"el gemelo informa y predice; no elimina la responsabilidad humana",color:"C6FF00"},{n:"LÍMITES",label:"opera bien solo dentro del rango con que fue validado",color:"FFB000"},{n:"RESPONSABILIDAD",label:"si el gemelo se equivoca, ¿quién responde? es decisión de gobierno",color:"FF3B30"} ],
    note: { body: "Un gemelo es un asesor muy capaz dentro de sus límites de validez, no un oráculo infalible. Fuera de su rango de validación, puede errar con total confianza. Definir sus límites y quién responde por sus decisiones es gobierno, no técnica." },
    notes: "Advertencia sobre el exceso de confianza. El gemelo tiene límites de validez. La responsabilidad es humana." },

  // -------- SECCIÓN 5: GOBIERNO DEL GEMELO --------
  { type: "section", num: 5, title: "GOBIERNO DEL GEMELO DIGITAL", sub: "Fidelidad, validación, propiedad y responsabilidad" },

  { type: "grid", sec: "GOBIERNO", title: "Las preguntas de gobierno del gemelo", cols: 2, lead: "Lo que hay que decidir antes de confiar en un gemelo.",
    cards: [
      { tag: "PROPIEDAD", desc: "¿Quién es dueño del gemelo y responde por él? (¿ingeniería, TI, proveedor?)", color: "C6FF00" },
      { tag: "FIDELIDAD", desc: "¿Qué fidelidad se exige y cómo se verifica?", color: "27E5E5" },
      { tag: "VALIDACIÓN", desc: "¿Cómo se prueba que el gemelo es correcto y sigue siéndolo?", color: "FFB000" },
      { tag: "RESPONSABILIDAD", desc: "¿Quién responde si una decisión basada en el gemelo causa daño?", color: "FF3B30" },
    ], note: "El gobierno del gemelo responde: quién lo posee, qué fidelidad exige, cómo se valida y quién responde por sus decisiones. Sin estas respuestas, el gemelo es un riesgo, no un activo.",
    notes: "Las cuatro preguntas de gobierno del gemelo. Son la base del taller y del Entregable 2." },

  { type: "phase", sec: "GOBIERNO", title: "Validación y verificación (V&V)", badge: "CONFIANZA",
    name: "¿Podemos confiar en él?", what: "Antes de usar un gemelo para decidir, hay que validarlo: comparar sus predicciones con la realidad en un rango de condiciones y documentar su exactitud y sus límites. La validación se repite en operación (drift). Un gemelo sin V&V documentada no debería soportar decisiones críticas: sería decidir sobre fe.",
    leftTag: "EXIGE", tools: "Comparar predicción vs realidad · documentar límites", rightTag: "RIESGO SI FALTA", seen: "Decisiones sobre un modelo no validado",
    notes: "La V&V es lo que convierte un modelo bonito en una herramienta confiable. Documentar límites es tan importante como validar." },

  { type: "grid", sec: "GOBIERNO", title: "Riesgos específicos del gemelo", cols: 2, lead: "Lo que puede salir mal con un gemelo.",
    cards: [
      { tag: "DRIFT NO DETECTADO", desc: "El modelo se desvía y nadie lo nota: decisiones cada vez peores.", color: "FF3B30" },
      { tag: "USO FUERA DE RANGO", desc: "Confiar en el gemelo en condiciones para las que no fue validado.", color: "FFB000" },
      { tag: "CIBERSEGURIDAD", desc: "Un gemelo comprometido puede inducir decisiones dañinas (S14).", color: "9D6BFF" },
      { tag: "DEPENDENCIA", desc: "Perder la capacidad humana de operar sin el gemelo.", color: "27E5E5" },
    ], note: "El gemelo introduce riesgos nuevos: drift, uso fuera de rango, manipulación y dependencia. Se gestionan con V&V, límites claros, seguridad y planes de contingencia.",
    notes: "Los riesgos del gemelo son de gobierno de riesgo (APO12). Un gemelo comprometido es un vector de ataque OT (S14)." },

  { type: "phase", sec: "GOBIERNO", title: "Lab 7 — especificar un gemelo", badge: "SEGUIMIENTO",
    name: "El gemelo del proyecto", what: "Para un activo o proceso del proyecto: 1) define el propósito y el nivel (modelo/sombra/gemelo). 2) Especifica variables, tipo de modelo y fidelidad requerida. 3) Lista los datos y su frecuencia (conexión con S10-11). 4) Define su gobierno: propiedad, criterios de validación y responsabilidad. Entregable: especificación funcional del gemelo.",
    leftTag: "FORMATO", tools: "Especificación funcional del gemelo", rightTag: "ALIMENTA", seen: "Entregable 2 (semana 13)",
    notes: "El Lab 7 produce la especificación del gemelo para el Entregable 2. Enfatiza la parte de gobierno, no solo la técnica." },

  { type: "keypoints", sec: "GOBIERNO", title: "Ideas para el proyecto", items: [
      { label: "Sé honesto", desc: "¿Es un gemelo, una sombra o un modelo? No infles la etiqueta." },
      { label: "Dimensiona la fidelidad", desc: "Por el propósito, no por la ambición." },
      { label: "Presupuesta el drift", desc: "Incluye recalibración y validación en el TCO." },
      { label: "Define responsabilidad", desc: "Quién responde por las decisiones del gemelo." },
      { label: "Asegúralo", desc: "Un gemelo comprometido induce decisiones dañinas." },
    ], notes: "Orientaciones que integran técnica y gobierno del gemelo para el proyecto." },

  // -------- SECCIÓN 6: CIERRE --------
  { type: "section", num: 6, title: "CIERRE", sub: "Síntesis, glosario y referencias" },

  { type: "keypoints", sec: "CIERRE", title: "Puntos clave para recordar", items: [
      { label: "Modelo/sombra/gemelo", desc: "El flujo de datos define cuál es; bidireccional = gemelo." },
      { label: "Alcance y fidelidad", desc: "Se dimensionan por el propósito, no por la ambición." },
      { label: "Ciclo de vida", desc: "El gemelo se mantiene: el drift lo desvía." },
      { label: "Casos de uso", desc: "Validación, optimización, predicción, formación." },
      { label: "Gobierno", desc: "Propiedad, validación y responsabilidad del gemelo." },
    ], notes: "Repaso. Verificar la distinción modelo/sombra/gemelo y las preguntas de gobierno." },

  { type: "process", sec: "CIERRE", title: "Dónde vamos — Unidad 3", cols: 4, steps: [
      { n:"S10", title:"OPC UA", desc:"Interoperabilidad.", color:"8C8C8C" },
      { n:"S11", title:"MQTT / UNS", desc:"Datos en tiempo real.", color:"8C8C8C" },
      { n:"S12", title:"Gemelos", desc:"Modelo que piensa · hoy.", color:"C6FF00" },
      { n:"S13", title:"Datos / OEE", desc:"Gobierno de datos · cierra U3.", color:"27E5E5" },
    ], notes: "S13 cierra la Unidad 3 con el gobierno de datos y los indicadores que sostienen al gemelo y la analítica." },

  { type: "grid", sec: "CIERRE", title: "El estándar ISO 23247", cols: 2, lead: "Marco de referencia para gemelos en manufactura.",
    cards: [
      { tag: "QUÉ ES", desc: "Framework de gemelo digital para manufactura (ISO 23247).", color: "C6FF00" },
      { tag: "ENTIDAD OBSERVABLE", desc: "El activo/proceso físico que el gemelo representa.", color: "27E5E5" },
      { tag: "ELEMENTOS", desc: "Recolección de datos, gestión, modelado y aplicaciones.", color: "FFB000" },
      { tag: "GOBIERNO", desc: "Estandarizar facilita interoperar y gobernar el gemelo.", color: "22E06B" },
    ], note: "ISO 23247 da un marco común para gemelos en manufactura, útil para especificar y gobernar de forma estándar, evitando soluciones propietarias aisladas.",
    notes: "ISO 23247 es el estándar de referencia. Ayuda a especificar el gemelo del proyecto de forma neutral y gobernable." },

  { type: "glossary", sec: "CIERRE", title: "Glosario esencial", pairs: [
      { t: "Gemelo digital", d: "Réplica virtual con flujo bidireccional con el físico." },
      { t: "Sombra digital", d: "Réplica con flujo solo físico → virtual." },
      { t: "Modelo digital", d: "Réplica sin flujo automático de datos." },
      { t: "Fidelidad", d: "Grado de fidelidad del modelo al físico." },
      { t: "Drift", d: "Desviación del modelo respecto del físico con el tiempo." },
      { t: "V&V", d: "Validación y verificación del gemelo." },
      { t: "Físico/datos/híbrido", d: "Tipos de modelo (white/black/grey-box)." },
      { t: "Hilo digital", d: "Continuidad de datos en el ciclo de vida (S08)." },
    ], notes: "Vocabulario de gemelos digitales." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "Kritzinger et al. (2018) — Digital Twin en manufactura (IFAC, abierto)", url: "https://doi.org/10.1016/j.ifacol.2018.08.474", acc: "libre" },
      { t: "Rasheed, San & Kvamsdal (2020) — Digital Twin (IEEE Access, abierto)", url: "https://doi.org/10.1109/ACCESS.2020.2970143", acc: "libre" },
      { t: "Digital Twin Consortium — recursos abiertos", url: "https://www.digitaltwinconsortium.org/", acc: "libre" },
      { t: "IDTA — Asset Administration Shell (gemelo administrativo)", url: "https://industrialdigitaltwin.org/", acc: "libre" },
      { t: "Tao et al. (2019) — Digital Twin in Industry (IEEE T-II)", url: "https://doi.org/10.1109/TII.2018.2873186", acc: "pago" },
      { t: "ISO 23247 — marco de gemelo digital para manufactura", url: "https://www.iso.org/", acc: "pago" },
    ], notes: "Fuentes fundacionales y estándares de gemelos digitales." },

  { type: "closing", nextNum: 13, nextTitle: "GOBIERNO DE DATOS Y ANALÍTICA (OEE)", nextDesc: "Calidad y propiedad del dato, roles de gobierno de datos, OEE y mantenimiento predictivo; cierre de la Unidad 3.", prompt: "root@planta:~# next --session 13 _",
    notes: "S13 cierra la Unidad 3 con el gobierno del dato que sostiene todo lo visto: gemelos, analítica e indicadores." },
];
