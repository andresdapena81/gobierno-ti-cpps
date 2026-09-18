// LAB 7 (S12) — Guía de presentación del gemelo digital de línea de llenado.
// Deck acompañante del laboratorio ejecutable en gemelo-digital/.
// Renderizar con:  node render-lab.js
module.exports = [
  { type: "cover", title: "GEMELO\nDIGITAL", subtitle: "Línea de llenado y tapado — de la telemetría al gobierno de la decisión",
    notes: "Guía para presentar el laboratorio. La tesis de toda la sesión cabe en una frase: la mayoría de los 'gemelos digitales' son tableros de telemetría, y este demo existe para hacer visible la diferencia. Tener el demo YA CORRIENDO antes de empezar (backend + front), porque la primera slide de sección pide mirarlo." },

  { type: "agenda", sec: "INICIO", items: [
    { title: "El problema", desc: "Por qué casi ningún 'gemelo digital' lo es" },
    { title: "El proceso", desc: "La línea de llenado: física, control y fallas" },
    { title: "La construcción", desc: "Arquitectura, frontera planta/gemelo y stack" },
    { title: "Las cuatro capacidades", desc: "Modelo, residual, diagnóstico y what-if" },
    { title: "El gobierno", desc: "EDM en pantalla: evaluar, dirigir, monitorear" },
    { title: "Guion de demo", desc: "Cómo correrlo y en qué orden mostrarlo" },
  ], notes: "De la crítica conceptual (qué NO es un gemelo) a la demostración práctica. El orden importa: si se abre con la demo, los estudiantes ven un dashboard bonito y se pierde el argumento." },

  { type: "stats", sec: "LAB", title: "El laboratorio en cifras",
    bigstats: [ {n:4,label:"CAPACIDADES"},{n:5,label:"MODOS DE FALLA"},{n:2,label:"DEPENDENCIAS"},{n:"~1400",label:"LÍNEAS"} ],
    kvs: [ {k:"SESIÓN",v:"S12 · Gemelos digitales (Semana 12)"},{k:"ALIMENTA",v:"Lab 8 — OEE (S13)"},{k:"BACKEND",v:"Python · FastAPI · sin numpy"},{k:"FRONT",v:"React + Vite · SVG a mano"},{k:"TRANSPORTE",v:"En memoria o MQTT Sparkplug"},{k:"INSTALACIÓN",v:"pip install + npm install"} ],
    notes: "Dos dependencias en el backend (fastapi y uvicorn) es una decisión deliberada: la física, el modelo, los residuales y el what-if son Python estándar, legibles enteros sin conocer ninguna librería." },

  { type: "objectives", sec: "LAB", title: "Qué debe quedar claro", items: [
    { lead: "Distinguir", rest: "un gemelo digital de un tablero de telemetría." },
    { lead: "Identificar", rest: "la frontera entre el activo físico y su modelo." },
    { lead: "Explicar", rest: "qué es un residual y por qué avisa antes que el OEE." },
    { lead: "Reconocer", rest: "los límites de observabilidad de un diagnóstico." },
    { lead: "Aplicar", rest: "el ciclo EDM de ISO/IEC 38500 a una decisión automatizada." },
  ], notes: "El cuarto objetivo es el menos habitual y el más valioso: enseñar que un gemelo honesto declara lo que NO puede saber." },

  // ==================== SECCIÓN 1: EL PROBLEMA ====================
  { type: "section", num: 1, title: "EL PROBLEMA", sub: "Por qué casi ningún \"gemelo digital\" lo es" },

  { type: "warning", sec: "PROBLEMA", title: "La trampa del tablero bonito",
    paras: [
      "El 90 % de los gemelos digitales que se entregan en un curso —y buena parte de los que se venden— son TABLEROS DE TELEMETRÍA: leen sensores y los pintan en tiempo real. Se ven espectaculares en una demo de diez minutos.",
      "Pero un tablero sólo sabe decir QUÉ PASÓ. No predice, no sabe si sigue siendo válido, no puede responder qué pasaría si, y no tiene forma de devolver una decisión al proceso.",
    ],
    quote: "Si no hay una resta entre lo medido y lo predicho, no hay gemelo.",
    notes: "Éste es el mensaje central. Repetirlo tal cual al final. La 'resta' es el residual, y es la prueba de fuego más simple que un estudiante puede aplicar a cualquier gemelo que le muestren." },

  { type: "concepts3", sec: "PROBLEMA", title: "Qué es un gemelo digital", items: [
      { k: "RÉPLICA", desc: "Un modelo computacional de un activo físico que reproduce su comportamiento, no sólo su apariencia.", ex: "Física, no dibujo", color: "C6FF00" },
      { k: "VINCULADO", desc: "Conectado al activo por un flujo de datos vivo: el modelo se sincroniza con la realidad.", ex: "Telemetría continua", color: "27E5E5" },
      { k: "ACCIONABLE", desc: "Capaz de simular futuros alternativos y devolver decisiones al proceso.", ex: "What-if y comando", color: "FFB000" },
    ], note: "Las tres condiciones son necesarias. Un modelo sin vínculo es una simulación; un vínculo sin modelo es un tablero; y sin capacidad de acción, es sólo un observador.",
    notes: "Definición operativa, deliberadamente exigente. Grieves (2014) y la ISO 23247 usan formulaciones parecidas. Lo importante es que las tres condiciones se puedan verificar en pantalla." },

  { type: "grid", sec: "PROBLEMA", title: "Las cuatro capacidades", cols: 2, lead: "Quitá cualquiera de las cuatro y lo que queda es un dashboard.",
    cards: [
      { tag: "1 · MODELO QUE PREDICE", desc: "Réplica de la física con parámetros de placa. Dice qué DEBERÍA estar pasando ahora mismo.", color: "C6FF00" },
      { tag: "2 · RESIDUAL", desc: "La resta entre lo medido y lo predicho. Es la única forma de saber si el modelo sigue siendo válido.", color: "27E5E5" },
      { tag: "3 · WHAT-IF", desc: "Simular futuros alternativos más rápido que el tiempo real, sin tocar el proceso.", color: "FFB000" },
      { tag: "4 · CAMINO DE VUELTA", desc: "La decisión llega al proceso — y ahí aparece el problema de gobierno: ¿quién la autoriza?", color: "FF6B35" },
    ], notes: "Esta slide es el índice mental del resto de la sesión. Las secciones 4 y 5 desarrollan las cuatro. La cuarta es la que casi nunca existe en pilotos reales." },

  { type: "compare", sec: "PROBLEMA", title: "Tablero frente a gemelo",
    leftTitle: "Un gemelo digital", leftItems: ["Predice el estado esperado","Detecta divergencia modelo–planta","Estima parámetros no medidos","Simula escenarios alternativos","Declara lo que no puede saber","Cierra el lazo con una decisión"],
    rightTitle: "Un tablero de telemetría", rightItems: ["Grafica lo que ya ocurrió","Alarma cuando se cruza un límite","Sólo conoce lo que hay sensado","No puede responder '¿y si...?'","Presenta todo con igual certeza","Termina en la pantalla"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "Pedirles que apliquen esta tabla al último 'gemelo digital' que hayan visto en una feria o en un video de proveedor. Casi siempre cae del lado derecho." },

  { type: "process", sec: "PROBLEMA", title: "Niveles de madurez", cols: 4, lead: "No todo lo que se llama gemelo está en el mismo nivel.",
    steps: [
      { n:1, title:"Modelo digital", desc:"Réplica sin conexión de datos. Se actualiza a mano.", color:"8C8C8C" },
      { n:2, title:"Sombra digital", desc:"Flujo automático planta → modelo. Sólo observa.", color:"FFB000" },
      { n:3, title:"Gemelo digital", desc:"Flujo en los dos sentidos. Puede actuar.", color:"C6FF00" },
      { n:4, title:"Gemelo autónomo", desc:"Decide y actúa sin humano en el lazo.", color:"FF3B30" },
    ], notes: "Kritzinger et al. (2018) proponen esta escala. El demo está en el nivel 3 y NO avanza al 4 a propósito: el nivel 4 es donde el gobierno se vuelve crítico, y ese es el argumento de la sección 5." },

  { type: "callouts", sec: "PROBLEMA", title: "El problema de gobierno",
    stats: [ {n:"AUTORIZA",label:"¿quién permite que la recomendación se aplique a una línea en marcha?",color:"C6FF00"},{n:"EVIDENCIA",label:"¿en qué se sustenta la decisión, y dónde queda registrada?",color:"27E5E5"},{n:"RESPONDE",label:"¿quién rinde cuentas: el modelo, el integrador o la dirección?",color:"FF3B30"} ],
    note: { body: "Un gemelo que puede ESCRIBIR sobre el proceso deja de ser un problema de ingeniería y pasa a ser uno de gobierno. La pregunta ya no es si el modelo acierta, sino quién responde cuando se equivoca. ISO/IEC 38500 tiene una respuesta: el gobierno no se delega." },
    notes: "Puente con la S02. Este demo es el único del curso donde el ciclo EDM se puede ver funcionando en pantalla, no explicado en una lámina." },

  { type: "quote", sec: "PROBLEMA", text: "Un modelo que se adapta a todo nunca detecta nada.", cite: "Principio de diseño del residual",
    notes: "Frase para dejar en el aire antes de la sección técnica. Explica por qué el residual del demo se calcula contra el Cv DE PLACA y no contra el estimado: si el modelo se corrigiera solo, el residual se anularía y el gemelo dejaría de avisar." },

  // ==================== SECCIÓN 2: EL PROCESO ====================
  { type: "section", num: 2, title: "EL PROCESO MODELADO", sub: "Una línea de llenado y tapado, con física de verdad" },

  { type: "process", sec: "PROCESO", title: "Cuatro estaciones en serie", cols: 4, lead: "Un proceso híbrido: física continua más eventos discretos.",
    steps: [
      { n:1, title:"Depósito", desc:"Tanque con lazo P de nivel y bomba de reposición.", color:"27E5E5" },
      { n:2, title:"Llenadora", desc:"Volumétrica por TIEMPO: abre la válvula t_set segundos.", color:"C6FF00" },
      { n:3, title:"Tapadora", desc:"Tiempo fijo con dispersión. Puede atascarse.", color:"FFB000" },
      { n:4, title:"Inspección", desc:"Rechaza toda botella fuera de tolerancia.", color:"22E06B" },
    ], notes: "Estaciones SERIALES, una sola cabeza: el ciclo ideal es la suma (2.30 + 1.10 + 0.45 = 3.85 s), no el máximo. Ese detalle importa para el OEE y se explica dos slides más adelante." },

  { type: "phase", sec: "PROCESO", title: "La física — dos ecuaciones", badge: "MODELO CONTINUO",
    name: "Torricelli más balance de masa", what: "El caudal por la válvula sigue Q = Cv·√L, donde Cv es el coeficiente de descarga y L el nivel del tanque. El tanque, a su vez, obedece dL/dt = (Q_bomba − Q_salida)/A. La bomba la comanda un lazo proporcional: Q_bomba = sat(K·(L_sp − L), 0, Q_max). Es control P puro, así que tiene OFFSET: el nivel se estabiliza cerca de 1.10 m frente a una consigna de 1.19 m.",
    leftTag: "PARÁMETROS DE PLACA", tools: "Cv = 0.829 · t_set = 2.30 s · A = 0.08 m²", rightTag: "PUNTO DE OPERACIÓN", seen: "2.00 L por botella a 1.10 m",
    notes: "El offset del lazo P es un regalo pedagógico: sirve para explicar por qué en planta se usa PI. Y el área pequeña (0.08 m²) es deliberada: hace que cada botella baje el nivel unos 25 mm, así la dinámica SE VE en la gráfica en vez de ser una línea plana." },

  { type: "warning", sec: "PROCESO", title: "Por qué la llenadora es por tiempo",
    paras: [
      "Una llenadora volumétrica POR TIEMPO abre la válvula durante t_set segundos y confía en que el caudal sea el nominal. Es lo común en plantas pequeñas — y es la elección clave de este laboratorio.",
      "El motivo: acopla la física con la calidad. Si el caudal cae (válvula desgastada o tanque bajo), la botella queda CORTA y la rechaza inspección. La calidad del producto se degrada por una causa física rastreable, no por un contador inventado.",
    ],
    quote: "Cada punto de OEE perdido se puede rastrear hasta una variable física.",
    notes: "Ésta es la diferencia entre este simulador y uno que genera números aleatorios. Si un estudiante pregunta '¿por qué no una llenadora por peso?', la respuesta es que una llenadora por peso se autocorrige y ocultaría el desgaste — que es justo lo que queremos que el gemelo descubra." },

  { type: "grid", sec: "PROCESO", title: "Del modelo físico al OEE", cols: 3, lead: "Las tres componentes salen del MISMO modelo, no de tres contadores.",
    cards: [
      { tag: "DISPONIBILIDAD", desc: "Cae por atascos de tapadora y por paradas de protección cuando el tanque llega al nivel mínimo.", color: "27E5E5" },
      { tag: "DESEMPEÑO", desc: "Cae cuando el ciclo real supera al ideal — por ejemplo, al alargar t_set para compensar un desgaste.", color: "9D6BFF" },
      { tag: "CALIDAD", desc: "Cae cuando el caudal baja y las botellas salen fuera de la tolerancia de volumen.", color: "22E06B" },
    ], note: "La diferencia entre \"el OEE bajó\" y \"el OEE bajó 6 puntos porque el Cv perdió 12 % y las botellas se salieron de tolerancia\". Lo segundo es gobernable; lo primero, no.",
    notes: "Enlaza con S13 y el Lab 8. Los estudiantes generan sus propios datos de OEE con este simulador en vez de usar un CSV prestado." },

  { type: "matrix", sec: "PROCESO", title: "Los cinco modos de falla", firstW: 3.4,
    cols: ["Falla inyectable", "Qué toca en la física", "Componente OEE"],
    rows: [
      ["Desgaste de válvula", {t:"Cv cae ~0.6 %/min",color:"C6FF00"}, {t:"Calidad",color:"22E06B"}],
      ["Bomba degradada", {t:"Capacidad de reposición",color:"27E5E5"}, {t:"Calidad → Disponib.",color:"FFB000"}],
      ["Atasco de tapadora", {t:"Micro-paradas Poisson",color:"FFB000"}, {t:"Disponibilidad",color:"27E5E5"}],
      ["Transmisor desviado", {t:"+0.35 m en el sensor",color:"FF3B30"}, {t:"Ninguna, al principio",color:"FF3B30"}],
      ["Sin falla", {t:"Operación nominal",color:"8C8C8C"}, {t:"—",color:"8C8C8C"}],
    ], notes: "La cuarta fila es el plato fuerte y conviene anticiparla: una falla que NO afecta ninguna componente del OEE al principio. Un tablero no ve nada. Ahí se gana el argumento de la sesión." },

  { type: "phase", sec: "PROCESO", title: "La falla latente — bomba degradada", badge: "CASO INSTRUCTIVO",
    name: "Cuando el control esconde el problema", what: "La bomba pierde capacidad poco a poco. Mientras siga por encima del consumo (~0.52 L/s), el lazo de nivel lo compensa solo y NO SE NOTA NADA: ni el nivel, ni el OEE, ni el operador. Cuando la capacidad cruza ese umbral, el lazo satura y el tanque empieza a vaciarse de golpe.",
    leftTag: "LO QUE ENSEÑA", tools: "Un lazo de control bien sintonizado enmascara deterioro", rightTag: "POR QUÉ IMPORTA", seen: "El síntoma aparece tarde y de golpe",
    notes: "Punto no obvio y muy real en planta: los sistemas de control ocultan degradación hasta que agotan su margen. Es un argumento fuerte a favor de monitorear el ESFUERZO de control, no sólo la variable controlada." },

  // ==================== SECCIÓN 3: CONSTRUCCIÓN ====================
  { type: "section", num: 3, title: "CÓMO ESTÁ CONSTRUIDO", sub: "Arquitectura, frontera y decisiones de diseño" },

  { type: "phase", sec: "CÓMO", title: "Arquitectura en cuatro piezas", badge: "FLUJO DE DATOS",
    name: "Planta → transporte → gemelo → interfaz", what: "El simulador (planta/) integra la física a 20 Hz y publica telemetría. El transporte (transporte/) la lleva, en memoria o por MQTT. El gemelo (gemelo/) la consume y mantiene su modelo. FastAPI sirve el estado al front por WebSocket cada 250 ms. Los tres bucles corren concurrentes en asyncio.",
    leftTag: "SEPARABLES", tools: "Planta y gemelo hablan SÓLO por el transporte", rightTag: "CONECTA CON", seen: "Frontera borde/nube (S09)",
    notes: "Recalcar que planta y gemelo se podrían poner en dos máquinas distintas sin tocar una línea de lógica. Eso es exactamente la decisión de arquitectura borde/nube de la S09, hecha tangible." },

  { type: "twocol", sec: "CÓMO", title: "La frontera — lo más importante del código",
    leftTitle: "Lo que el gemelo VE", leftItems: ["Nivel medido por el transmisor","Caudal instantáneo","Estación actual de la línea","Contadores de botellas","Volumen de la última botella","Tiempos de turno y parada"],
    rightTitle: "Lo que el gemelo NO ve", rightItems: ["El Cv real de la válvula","El nivel real del tanque","La capacidad real de la bomba","El sesgo del transmisor","Qué falla está inyectada","Nada del estado interno"],
    leftColor: "C6FF00", rightColor: "FF3B30",
    notes: "SLIDE CLAVE. Si un estudiante puede señalar esta frontera, entendió qué es un gemelo. Todo lo que el gemelo sabe del desgaste lo INFIERE del volumen de las botellas. El método `verdad_oculta()` existe sólo para la vista de clase y el gemelo nunca la consulta." },

  { type: "grid", sec: "CÓMO", title: "Decisiones de diseño explicables", cols: 2, lead: "Cada una es una conversación de clase, no un detalle técnico.",
    cards: [
      { tag: "SIN LIBRERÍA DE GRÁFICAS", desc: "Las gráficas son SVG a mano. Recharts añadiría 150 kB y un árbol de dependencias que auditar. Toda dependencia es una deuda.", color: "C6FF00" },
      { tag: "TRANSPORTE INTERCAMBIABLE", desc: "En memoria por defecto, MQTT con una bandera. Si el broker no levanta el día del lab, la clase sigue.", color: "27E5E5" },
      { tag: "SIN NUMPY", desc: "La física es Python estándar, legible entera sin conocer ninguna librería de terceros.", color: "FFB000" },
      { tag: "DIAGNÓSTICO POR REGLAS", desc: "Reglas explícitas derivadas de la física, no un clasificador entrenado. Se pueden leer, discutir y refutar.", color: "22E06B" },
    ], notes: "La primera y la segunda son argumentos del principio de adquisición de la S02 aplicados a decisiones pequeñas: evitar el lock-in y que toda dependencia sea una decisión consciente, no un reflejo." },

  { type: "matrix", sec: "CÓMO", title: "Mapa de archivos", firstW: 3.4,
    cols: ["Archivo", "Papel", "Qué mirar"],
    rows: [
      ["planta/proceso.py", {t:"El activo físico",color:"FF3B30"}, "telemetria() y verdad_oculta()"],
      ["gemelo/modelo.py", {t:"Física de placa",color:"C6FF00"}, "cv_implicito(): problema inverso"],
      ["gemelo/residual.py", {t:"El corazón",color:"27E5E5"}, "La tabla de firmas de falla"],
      ["gemelo/whatif.py", {t:"Simular futuros",color:"FFB000"}, "Devuelve la curva, no el óptimo"],
      ["gemelo/gobierno.py", {t:"EDM en código",color:"9D6BFF"}, "Matriz de derechos y bitácora"],
      ["main.py", {t:"Los tres bucles",color:"22E06B"}, "Planta, gemelo y API en asyncio"],
    ], notes: "Orden de lectura sugerido para quien quiera meterse en el código. Cada archivo abre con un comentario largo que explica su papel y las decisiones detrás." },

  { type: "terminal", sec: "CÓMO", title: "El nombrado de tópicos (modo MQTT)", term: "root@planta:~# mosquitto_sub -t 'spBv1.0/#' -v",
    lines: [
      { t: "spBv1.0/usb_bello/DBIRTH/linea1/llenadora01", cls: "hi" },
      { t: '  {"estado":"ONLINE","dispositivo":"Línea de llenado 01",', cls: "out" },
      { t: '   "metricas":["nivel_tanque","caudal_instantaneo", ...]}', cls: "out" },
      { t: "", cls: "out" },
      { t: "spBv1.0/usb_bello/DDATA/linea1/llenadora01", cls: "cmd" },
      { t: '  {"t":412.6,"nivel_tanque":1.108,"caudal_instantaneo":0.873,', cls: "out" },
      { t: '   "estacion":"llenando","botellas_totales":98, ...}', cls: "out" },
      { t: "", cls: "out" },
      { t: "# jerarquía: spBv1.0/{grupo}/{tipo}/{nodo_borde}/{dispositivo}", cls: "cmt" },
    ],
    note: { tag: "ALCANCE HONESTO", body: "Se usa el NOMBRADO de Sparkplug B (jerarquía, DBIRTH, last will), pero la carga va en JSON y no en protobuf, y no se llevan los contadores de secuencia. Esto es nombrado Sparkplug, NO conformidad Sparkplug." },
    notes: "Decir la limitación en voz alta. Un proveedor que hiciera esta misma simplificación y la vendiera como 'compatible con Sparkplug B' estaría faltando a la verdad, y detectarlo es la clase de escrutinio que exige el principio de adquisición." },

  // ==================== SECCIÓN 4: LAS CAPACIDADES ====================
  { type: "section", num: 4, title: "LAS CUATRO CAPACIDADES", sub: "Modelo, residual, diagnóstico y what-if" },

  { type: "phase", sec: "CAPACIDADES", title: "1 · El modelo y la estimación", badge: "CAPACIDAD 1 / 4",
    name: "Inferir lo que ningún sensor mide", what: "El gemelo replica la física con los parámetros de PLACA. Pero además resuelve el problema inverso: dado el volumen que realmente salió y el nivel medido, ¿qué Cv lo explica? Una bisección de 40 iteraciones invierte la ecuación, y un promedio exponencial suaviza el resultado. Así el gemelo estima el desgaste de la válvula SIN que ningún instrumento lo mida.",
    leftTag: "EN PANTALLA", tools: "Cv de placa 0.8290 · Cv estimado, en caída", rightTag: "VERIFICADO", seen: "Error de estimación ~2 %",
    notes: "Momento de abrir el 'ojo de Dios' y comparar el Cv estimado contra el real. Ver la estimación converger hacia la verdad es lo que hace que caiga la ficha." },

  { type: "phase", sec: "CAPACIDADES", title: "2 · El residual", badge: "CAPACIDAD 2 / 4",
    name: "La resta que delata al modelo", what: "Dos residuales, a dos escalas de tiempo. El de VOLUMEN se calcula una vez por botella y compara lo medido con lo que predice el modelo de placa. El de BALANCE DE MASA se calcula en cada muestra y verifica que el nivel del tanque evolucione como permite la física. Mientras ambos se queden dentro de su umbral, el modelo describe bien a la planta.",
    leftTag: "POR QUÉ CONTRA PLACA", tools: "Si el modelo se corrigiera solo, el residual se anularía", rightTag: "VENTAJA", seen: "Avisa antes que el OEE acumulado",
    notes: "Insistir en el detalle del código: el residual se calcula contra el Cv de PLACA, nunca contra el estimado. Un modelo que se adapta a todo nunca detecta nada. Es un error de diseño frecuente y sutil." },

  { type: "matrix", sec: "CAPACIDADES", title: "3 · Diagnóstico por firma", firstW: 3.5,
    cols: ["Falla", "Residual de volumen", "Balance de masa"],
    rows: [
      ["Sin anomalía", {t:"≈ 0",color:"22E06B"}, {t:"≈ 0",color:"22E06B"}],
      ["Desgaste de válvula", {t:"negativo, lento",color:"C6FF00"}, {t:"≈ 0",color:"22E06B"}],
      ["Bomba degradada", {t:"negativo",color:"FFB000"}, {t:"negativo sostenido",color:"FFB000"}],
      ["Atasco de tapadora", {t:"≈ 0",color:"22E06B"}, {t:"≈ 0",color:"22E06B"}],
      ["Transmisor desviado", {t:"negativo",color:"FF3B30"}, {t:"SALTO, luego ≈ 0",color:"FF3B30"}],
    ], notes: "Un solo residual no basta para saber QUÉ falló: el desgaste y el sensor desviado producen los dos botellas cortas. Se distinguen por cómo afectan a DOS residuales a la vez. Esto es FDI —detección y aislamiento de fallas— clásico." },

  { type: "warning", sec: "CAPACIDADES", title: "El límite que hay que enseñar",
    paras: [
      "Mirá la última fila de la tabla anterior: pasado el transitorio, el balance de masa vuelve a cuadrar. La razón es que el gemelo alimenta su modelo con el MISMO transmisor desviado, así que predicción y medida se equivocan juntas.",
      "Consecuencia incómoda y verdadera: en régimen permanente, un transmisor desviado y una válvula desgastada son OBSERVACIONALMENTE EQUIVALENTES con esta instrumentación. No se pueden distinguir. Sólo se separan si se atrapa el salto — por eso el detector queda enclavado.",
    ],
    quote: "Un gemelo honesto declara lo que no puede saber.",
    notes: "SLIDE MÁS IMPORTANTE DE LA SESIÓN, después de la de la frontera. Es un problema de OBSERVABILIDAD, no de algoritmo: con esta instrumentación no hay forma. El demo lo dice en pantalla y propone qué evidencia externa haría falta. Un gemelo que devuelve una sola causa con 97 % de confianza cuando la física no permite decidir no está informando a quien decide: lo está engañando." },

  { type: "phase", sec: "CAPACIDADES", title: "4 · El what-if", badge: "CAPACIDAD 4 / 4",
    name: "Un experimento caro convertido en uno barato", what: "El gemelo barre 49 consignas distintas sobre su modelo y proyecta el OEE de la próxima media hora para cada una. Tarda milisegundos y no arriesga una sola botella. Usa el Cv ESTIMADO, no el de placa: proyecta con lo que ha aprendido de la planta, no con lo que dice el catálogo.",
    leftTag: "ENTREGA", tools: "La CURVA completa + los supuestos declarados", rightTag: "NO ENTREGA", seen: "Sólo el número óptimo",
    notes: "Un gemelo que entrega únicamente el óptimo le está pidiendo a la dirección un acto de fe. Uno que entrega la curva le entrega el criterio para decidir. La diferencia es gobierno: quien decide necesita la evidencia, no la conclusión." },

  { type: "callouts", sec: "CAPACIDADES", title: "El intercambio que no hay que esconder",
    stats: [ {n:"GANA",label:"CALIDAD: alargar la consigna corrige las botellas cortas",color:"22E06B"},{n:"PIERDE",label:"DESEMPEÑO: pero alarga el ciclo. No hay almuerzo gratis",color:"FF3B30"},{n:"≠ ÓPTIMO",label:"el óptimo del OEE no coincide con compensar exactamente el desgaste",color:"FFB000"} ],
    note: { body: "Compensar del todo el desgaste exige t_set = 2.49 s, pero el óptimo de OEE está en 2.45 s: el modelo prefiere aceptar algún rechazo antes que pagar ese ciclo. Dónde está el equilibrio aceptable es un juicio de negocio, no un resultado del modelo." },
    notes: "Cifras verificadas en el demo. Preguntar a la clase: ¿quién debería decidir ese equilibrio, el ingeniero o el gerente? Es una pregunta de derechos de decisión (S01)." },

  { type: "warning", sec: "CAPACIDADES", title: "Un parche no es una solución",
    paras: [
      "Verificado en el laboratorio: si se aplica la consigna recomendada mientras el desgaste SIGUE PROGRESANDO, la calidad apenas se recupera del 0 % al 2.5 %. La recomendación ya estaba vencida cuando se aplicó.",
      "Con el deterioro estabilizado, el mismo ajuste lleva la calidad del 0 % al 100 %. La diferencia entre los dos casos es la lección: compensar un deterioro progresivo compra tiempo, no resuelve nada.",
    ],
    quote: "La decisión de fondo sigue siendo parar la línea y cambiar la válvula.",
    notes: "Un gemelo que propone compensaciones sin decir que el deterioro sigue avanzando está desplazando una decisión de mantenimiento hacia el futuro sin que nadie la haya tomado conscientemente. Eso es una falla de gobierno disfrazada de optimización." },

  // ==================== SECCIÓN 5: EL GOBIERNO ====================
  { type: "section", num: 5, title: "EL GOBIERNO", sub: "ISO/IEC 38500 funcionando en pantalla" },

  { type: "grid", sec: "GOBIERNO", title: "El ciclo EDM, visible", cols: 3, lead: "Las tres tareas de la norma, cada una con su pantalla.",
    cards: [
      { tag: "EVALUAR", desc: "El what-if produce la propuesta, la curva que la sustenta y los supuestos declarados.", color: "C6FF00" },
      { tag: "DIRIGIR", desc: "La autorización exige rol con derecho de decisión y justificación escrita. Sin las dos, no se aplica.", color: "27E5E5" },
      { tag: "MONITOREAR", desc: "A los 150 s la bitácora cierra sola el veredicto comparando la calidad antes y después.", color: "FFB000" },
    ], note: "El botón que aplica el cambio NO está junto al resultado del what-if. Hay que pasar por el formulario de autorización, y la matriz puede rechazarlo. Esa fricción es el punto, no un obstáculo de la interfaz.",
    notes: "Este es el único punto del curso donde los estudiantes ven EDM funcionando en vez de explicado. Aprovecharlo: hacer el recorrido completo en vivo." },

  { type: "matrix", sec: "GOBIERNO", title: "Matriz de derechos, en código", firstW: 3.6,
    cols: ["Dominio de decisión", "Rol mínimo", "Principio 38500"],
    rows: [
      ["Consigna · ajuste menor (≤10 %)", {t:"Supervisor",color:"C6FF00"}, {t:"Desempeño",color:"22E06B"}],
      ["Consigna · ajuste mayor (>10 %)", {t:"Ing. de proceso",color:"27E5E5"}, {t:"Desempeño · Adquisición",color:"FFB000"}],
      ["Especificación de producto", {t:"Gerente de planta",color:"FFB000"}, {t:"Conformidad",color:"9D6BFF"}],
      ["Intervención de mantenimiento", {t:"Ing. de proceso",color:"27E5E5"}, {t:"Responsabilidad",color:"C6FF00"}],
    ], notes: "La matriz de Weill & Ross de la S01, implementada en gobierno.py. La autoridad se gradúa por MAGNITUD del cambio, no por quién esté frente a la pantalla. Tocar la especificación del producto sube hasta gerencia porque es un asunto de conformidad." },

  { type: "terminal", sec: "GOBIERNO", title: "La matriz rechaza de verdad", term: "root@planta:~# curl -X POST /api/autorizar",
    lines: [
      { t: "> operador solicita ajuste menor", cls: "cmd" },
      { t: "RECHAZADA. La matriz exige el rol 'supervisor' para", cls: "err" },
      { t: "«Consigna de proceso · ajuste menor»; el solicitante es 'operador'.", cls: "err" },
      { t: "", cls: "out" },
      { t: "> supervisor, sin justificación escrita", cls: "cmd" },
      { t: "RECHAZADA. Toda autorización exige justificación escrita.", cls: "err" },
      { t: "", cls: "out" },
      { t: "> supervisor solicita ajuste MAYOR (+39 %)", cls: "cmd" },
      { t: "RECHAZADA. La matriz exige el rol 'ingeniero_proceso'.", cls: "err" },
      { t: "", cls: "out" },
      { t: "> supervisor, ajuste menor, con justificación", cls: "cmd" },
      { t: "Autorizada por supervisor. Registro #1.", cls: "ok" },
    ],
    note: { tag: "VERIFICADO", body: "Los cuatro casos se comprobaron contra la API en ejecución. No es una maqueta: la lógica de derechos de decisión se aplica en el servidor, no en la interfaz." },
    notes: "Hacer estos cuatro intentos EN VIVO desde el front. El rechazo al operador es el que mejor funciona en clase: los estudiantes esperan que el botón simplemente funcione." },

  { type: "phase", sec: "GOBIERNO", title: "La bitácora — cerrar el lazo", badge: "MONITOREAR",
    name: "Sin registro no hay rendición de cuentas", what: "Cada decisión queda con quién la pidió, quién la autorizó, con qué evidencia (la instantánea del what-if), la calidad y el OEE antes, y —a los 150 s— los mismos valores después con un veredicto: EFECTIVA, CONTRAPRODUCENTE o SIN EFECTO MEDIBLE. El registro es append-only: una bitácora editable no sirve como evidencia.",
    leftTag: "SOBREVIVE A", tools: "El reinicio del turno · es evidencia de auditoría", rightTag: "EXPORTABLE PARA", seen: "El Entregable 1 (S02, Taller 1)",
    notes: "Sin el paso de monitoreo el ciclo EDM queda cojo: se evalúa y se dirige, pero nunca se comprueba si la decisión sirvió. Es el fallo más común de los comités de tecnología, y la S02 lo llama 'gobierno decorativo'." },

  { type: "callouts", sec: "GOBIERNO", title: "Resultados verificados en el demo",
    stats: [ {n:"5 / 5",label:"modos de falla diagnosticados correctamente por el gemelo",color:"22E06B"},{n:"0 → 100 %",label:"la calidad se recupera al aplicar la consigna recomendada",color:"C6FF00"},{n:"4 / 4",label:"intentos de autorización resueltos según la matriz de derechos",color:"27E5E5"} ],
    note: { body: "Todo lo que se afirma en esta presentación está comprobado contra el sistema en ejecución: la prueba de humo recorre los cinco escenarios de falla y el what-if en la terminal, sin necesidad de interfaz. Si el proyector falla, la demostración sigue siendo posible." },
    notes: "Correr `python prueba_rapida.py` como plan B. Sale todo en texto: los cinco diagnósticos con su evidencia y el what-if con el intercambio calidad/desempeño." },

  // ==================== SECCIÓN 6: GUION DE DEMO ====================
  { type: "section", num: 6, title: "GUION DE DEMO", sub: "Cómo correrlo y en qué orden mostrarlo" },

  { type: "terminal", sec: "DEMO", title: "Levantar el laboratorio", term: "root@planta:~# gemelo-digital",
    lines: [
      { t: "# terminal 1 — el backend", cls: "cmt" },
      { t: "cd backend && pip install -r requirements.txt", cls: "cmd" },
      { t: "python main.py --velocidad 4", cls: "cmd" },
      { t: "  transporte : en memoria    velocidad : 4.0x", cls: "ok" },
      { t: "", cls: "out" },
      { t: "# terminal 2 — el front", cls: "cmt" },
      { t: "cd frontend && npm install && npm run dev", cls: "cmd" },
      { t: "  ➜  Local: http://localhost:5173/", cls: "ok" },
      { t: "", cls: "out" },
      { t: "# si el puerto está ocupado, el backend te lo dice y te da la salida", cls: "cmt" },
      { t: "python main.py --api-puerto 8021", cls: "hi" },
      { t: "API_PUERTO=8021 npm run dev", cls: "hi" },
    ],
    note: { tag: "PLAN B", body: "python prueba_rapida.py corre los cinco escenarios y el what-if en la terminal, sin interfaz. Sirve como demostración por sí solo si falla el proyector." },
    notes: "Llegar con el demo YA CORRIENDO. Verificar antes de clase que los puertos estén libres: en algunos equipos el 8000 y el 5173 están ocupados por otros proyectos." },

  { type: "process", sec: "DEMO", title: "Guion de clase — 45 minutos", cols: 3, lead: "El orden importa: si se abre con la demo, se pierde el argumento.",
    steps: [
      { n:1, title:"Nominal · 5 min", desc:"Mirar el mímico. Preguntar: ¿esto es un gemelo? No: es un SCADA.", color:"8C8C8C" },
      { n:2, title:"Residual · 5 min", desc:"Está en cero. AHORA sí hay gemelo: hay con qué comparar.", color:"27E5E5" },
      { n:3, title:"Desgaste · 10 min", desc:"A 8×. El residual avisa antes que el OEE. Abrir el ojo de Dios.", color:"C6FF00" },
      { n:4, title:"What-if · 15 min", desc:"La curva, el intercambio y el rechazo al operador.", color:"FFB000" },
      { n:5, title:"Sensor · 10 min", desc:"El plato fuerte: un tablero no lo ve. Ambigüedad declarada.", color:"FF3B30" },
      { n:6, title:"Cierre", desc:"Volver a la frase: sin resta, no hay gemelo.", color:"9D6BFF" },
    ], notes: "Los tiempos son orientativos. Si hay que recortar, el paso 4 se puede acortar a 8 min, pero NUNCA saltarse el paso 5: es el que justifica toda la sesión." },

  { type: "phase", sec: "DEMO", title: "El momento clave — transmisor desviado", badge: "PASO 5 · NO SALTARSE",
    name: "Lo que un tablero jamás vería", what: "Inyectar la falla y observar en orden: (1) la producción NO se detiene y el OEE tarda en moverse — un tablero no ve nada; (2) el gemelo dispara el salto enclavado, +0.349 m en t = 205 s; (3) propone DOS hipótesis y declara que no puede distinguirlas, diciendo qué evidencia externa haría falta; (4) abrir el ojo de Dios: el tanque tiene 0.765 m y la pantalla dice 1.115 m.",
    leftTag: "EL REMATE", tools: "El lazo de control lee ese MISMO transmisor", rightTag: "CONCLUSIÓN", seen: "No sólo informa mal: mueve el proceso",
    notes: "El remate es la frase clave: un instrumento mal calibrado no sólo engaña a los tableros, mueve el proceso, porque el lazo de nivel se alimenta del mismo transmisor. La planta se vacía de verdad. Eso conecta con S14-15: la integridad del dato es un problema de seguridad, no sólo de calidad." },

  { type: "keypoints", sec: "DEMO", title: "Preguntas para lanzar a la clase", items: [
      { label: "¿Esto es un gemelo?", desc: "Preguntarlo en el minuto 1, viendo sólo el mímico. La respuesta es no." },
      { label: "¿Por qué contra placa?", desc: "¿Qué pasaría si el residual se calculara contra el Cv estimado?" },
      { label: "¿Quién decide el equilibrio?", desc: "Calidad contra desempeño: ¿el ingeniero o el gerente?" },
      { label: "¿Por qué la fricción?", desc: "¿Es un defecto de la interfaz que el operador no pueda aplicar el cambio?" },
      { label: "¿Y si no hubiera salto?", desc: "Si la desviación fuera una deriva lenta, el gemelo diría 'desgaste' y se equivocaría." },
    ], notes: "La última es la más difícil y la más valiosa: obliga a pensar en los límites del método, no en su resultado." },

  { type: "grid", sec: "DEMO", title: "Limitaciones declaradas", cols: 2, lead: "Un gemelo que no declara sus límites no es confiable.",
    cards: [
      { tag: "OBSERVABILIDAD", desc: "Sensor desviado y desgaste son indistinguibles en régimen permanente. Sólo se separan si se atrapa el salto.", color: "FF3B30" },
      { tag: "SESGO DE MODELO", desc: "~0.5 % de error en la estimación de Cv por la diferencia de paso de integración entre planta (50 ms) y modelo (10 ms).", color: "FFB000" },
      { tag: "SUPUESTO DEL WHAT-IF", desc: "No simula las paradas: arrastra la disponibilidad observada. Declarado, no escondido.", color: "27E5E5" },
      { tag: "BITÁCORA EN MEMORIA", desc: "Se pierde al reiniciar el backend. En producción sería un registro persistido y auditable (S15).", color: "9D6BFF" },
    ], notes: "Pedirles a los estudiantes que encuentren una limitación más que no esté en esta lista. Es un buen ejercicio y suele salir alguna: por ejemplo, que la API no tiene autenticación y el CORS está abierto." },

  { type: "matrix", sec: "DEMO", title: "Conexión con el resto del curso", firstW: 2.2,
    cols: ["Sesión", "Qué del demo la aterriza", "Uso"],
    rows: [
      ["S01", {t:"Matriz de derechos en código",color:"C6FF00"}, "Weill & Ross"],
      ["S02", {t:"Ciclo EDM y bitácora",color:"27E5E5"}, "Taller 1"],
      ["S09", {t:"Planta y gemelo separables",color:"FFB000"}, "Borde/nube"],
      ["S11", {t:"MQTT y nombrado Sparkplug",color:"22E06B"}, "Lab 6"],
      ["S13", {t:"OEE con datos propios",color:"9D6BFF"}, "Lab 8"],
      ["S14–15", {t:"Broker abierto · dato que mueve el proceso",color:"FF3B30"}, "Riesgo OT"],
    ], notes: "El demo no es una isla: toca seis sesiones. Vale la pena mencionarlo al inicio para que los estudiantes lo vean como la costura de la Unidad 3, no como una actividad suelta." },

  { type: "keypoints", sec: "CIERRE", title: "Para recordar", items: [
      { label: "La resta", desc: "Sin residual no hay gemelo: sólo un tablero bien dibujado." },
      { label: "La frontera", desc: "Lo que el gemelo ve es sólo la telemetría; el resto lo infiere." },
      { label: "La honestidad", desc: "Un gemelo declara lo que no puede saber y con qué certeza." },
      { label: "El intercambio", desc: "Toda recomendación tiene un costo; entregar la curva, no el número." },
      { label: "El gobierno", desc: "Si el gemelo puede escribir sobre el proceso, alguien debe responder." },
    ], notes: "Cerrar volviendo a la frase del principio. Si los estudiantes se llevan una sola idea, que sea la primera." },

  { type: "refs", sec: "CIERRE", title: "Referencias y recursos", items: [
      { t: "Kritzinger et al. (2018) — Digital Twin (IFAC, abierto)", url: "https://doi.org/10.1016/j.ifacol.2018.08.474", acc: "libre" },
      { t: "Rasheed, San & Kvamsdal (2020) — Digital Twin (IEEE Access, abierto)", url: "https://doi.org/10.1109/ACCESS.2020.2970143", acc: "libre" },
      { t: "Digital Twin Consortium — recursos abiertos", url: "https://www.digitaltwinconsortium.org/", acc: "libre" },
      { t: "Isermann (2006) — Fault-Diagnosis Systems (Springer)", url: "https://link.springer.com/book/10.1007/3-540-30368-5", acc: "pago" },
      { t: "ISO 23247 — marco de gemelo digital para manufactura", url: "https://www.iso.org/", acc: "pago" },
      { t: "Código y guía del laboratorio — gemelo-digital/LÉEME.md", acc: "libre" },
    ], notes: "Kritzinger es la referencia para la escala de madurez (modelo / sombra / gemelo). Isermann es la fuente clásica del diagnóstico por residuales y firmas." },

  { type: "closing", nextNum: 13, nextTitle: "GOBIERNO DE DATOS Y OEE", nextDesc: "El OEE que produce este gemelo alimenta el Lab 8: datos generados por los propios estudiantes.", prompt: "root@planta:~# python main.py --velocidad 8 _",
    notes: "Recordar que el laboratorio queda disponible para que lo corran en casa, y que la bitácora de decisiones se exporta como evidencia del Entregable 1." },
];
