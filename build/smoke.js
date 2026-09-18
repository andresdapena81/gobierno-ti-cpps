const { Deck } = require("./deck_lib");
const d = new Deck({ code: "8 50155-3M", program: "PREGRADO", sessionNum: 1, total: 20, totalSessions: 16, unitLabel: "U1 · Test", week: 1, tag: "TEST", docente: "Jorge Andrés Dapena — MSc.", inst: "Universidad de San Buenaventura — Medellín", courseTitle: "GOBIERNO DE TI Y SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN 2026" });
d.build([
  { type: "cover", title: "PRUEBA\nDE MOTOR", subtitle: "Verificación de todos los layouts" },
  { type: "agenda", items: [ {title:"A uno",desc:"desc"},{title:"B dos",desc:"desc"},{title:"C tres",desc:"desc"},{title:"D cuatro",desc:"desc"},{title:"E cinco",desc:"desc"},{title:"F seis",desc:"desc"} ] },
  { type: "stats", bigstats: [ {n:3,label:"CRÉDITOS"},{n:144,label:"HORAS"},{n:16,label:"SEMANAS"},{n:48,label:"HADD"} ], kvs: [ {k:"CÓDIGO",v:"027227"},{k:"ÁREA",v:"Ingeniería"},{k:"MODALIDAD",v:"Presencial"},{k:"EVALUACIÓN",v:"30/30/40"} ] },
  { type: "objectives", items: [ {lead:"Distinguir",rest:"gobierno de gestión."},{lead:"Aplicar",rest:"ISO 38500."},{lead:"Construir",rest:"cascada COBIT."},{lead:"Evaluar",rest:"riesgo IT/OT."} ] },
  { type: "section", num: 1, title: "SECCIÓN DE PRUEBA", sub: "subtítulo de sección" },
  { type: "callouts", kicker:"// PANORAMA", title:"Cifras", stats: [ {n:"10.5 B$",label:"costo"},{n:"75%",label:"algo"},{n:"2×",label:"otro"} ], note: { body: "Texto de lectura clave para verificar el bloque inferior de nota." } },
  { type: "grid", kicker:"// GRID", title:"Grid 2x3", lead:"Un lead opcional.", cols:3, cards: [ {tag:"RED",desc:"desc uno"},{tag:"APLICACIÓN",desc:"desc dos"},{tag:"HUMANO",desc:"desc"},{tag:"FÍSICO",desc:"desc"},{tag:"CADENA SUMINISTRO",desc:"desc"},{tag:"NUBE",desc:"desc"} ] },
  { type: "concepts3", kicker:"// CONCEPTOS", title:"Tres conceptos", items: [ {k:"DATO",desc:"hecho crudo",ex:"ej: 400"},{k:"INFORMACIÓN",desc:"con contexto",ex:"ej: saldo"},{k:"ACTIVO",desc:"tiene valor",ex:"ej: BD"} ], note:"Nota inferior." },
  { type: "twocol", kicker:"// DOS COL", title:"Mecanismos vs amenazas", leftTitle:"Mecanismos", leftItems:["uno","dos","tres","cuatro"], rightTitle:"Amenazas", rightItems:["uno","dos","tres"] },
  { type: "terminal", kicker:"// TERMINAL", title:"Bloque terminal", term:"root@plc:~#", lines:[ {t:"$ opcua browse",cls:"cmd"},{t:"NodeId=ns=2;s=Temp",cls:"out"},{t:"OK 200",cls:"ok"} ], note:{ body:"Nota del terminal." } },
  { type: "matrix", kicker:"// MATRIZ", title:"Matriz", cols:["Ataque","C","I","A"], rows:[ ["Sniffing",{t:"●",color:"FF3B30"},"—","—"],["DDoS","—","—",{t:"●",color:"FF3B30"}] ] },
  { type: "process", kicker:"// PROCESO", title:"Proceso 7 pasos", steps:[ {n:1,title:"Uno",desc:"d"},{n:2,title:"Dos",desc:"d"},{n:3,title:"Tres",desc:"d"},{n:4,title:"Cuatro",desc:"d"},{n:5,title:"Cinco",desc:"d"},{n:6,title:"Seis",desc:"d"},{n:7,title:"Siete",desc:"d"} ] },
  { type: "phase", kicker:"// FASE", title:"Detalle de fase", badge:"NIVEL 3 / 5", name:"MES / MOM", what:"Qué se hace en esta capa del sistema.", tools:"ISA-95 · B2MML", seen:"Semana 7" },
  { type: "compare", kicker:"// COMPARA", title:"IT vs OT", leftTitle:"IT", leftItems:["conf primero","parcheo rápido","ciclo 3-5 años"], rightTitle:"OT", rightItems:["disp primero","no parchea","ciclo 20 años"], foot:"La prioridad CIA se invierte." },
  { type: "warning", title:"Seguridad OT", paras:["Párrafo uno de advertencia.","Párrafo dos."], quote:"Disponibilidad ante todo." },
  { type: "keypoints", items:[ {label:"ISO 38500",desc:"seis principios"},{label:"COBIT 2019",desc:"cascada"},{label:"ISA-95",desc:"niveles"} ] },
  { type: "glossary", pairs:[ {t:"CPPS",d:"sistema ciber-físico de producción"},{t:"OPC UA",d:"protocolo"},{t:"MQTT",d:"pub/sub"},{t:"OEE",d:"eficiencia global"} ] },
  { type: "refs", items:["ISO/IEC 38500.","COBIT 2019.","NIST SP 800-82."] },
  { type: "quote", kicker:"// IDEA", text:"Gobernar es decidir quién decide sobre la tecnología.", cite:"Weill & Ross" },
  { type: "closing", nextNum: 2, nextTitle:"ISO/IEC 38500", nextDesc:"Principios de gobierno corporativo de TI.", prompt:"root@planta:~# next _" },
]);
d.save("D:/GOBIERNO DE TI/build/_smoke.pptx").then((p) => console.log("OK", p)).catch((e) => { console.error("ERR", e); process.exit(1); });
