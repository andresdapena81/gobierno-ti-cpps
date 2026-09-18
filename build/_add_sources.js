// Reemplaza el array `items` de la diapositiva `type: "refs"` de cada sesión
// por fuentes reales con enlace clicable y etiqueta de acceso (libre/pago).
const fs = require("fs");

const SRC = {
  "s01.js": [
    { t: "ISO/IEC 38500 — gobierno corporativo de TI (norma)", url: "https://www.iso.org/standard/62816.html", acc: "pago" },
    { t: "ISACA — COBIT 2019 (Introduction & Methodology: gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "Weill & Ross — IT Governance (investigación abierta, MIT CISR)", url: "https://cisr.mit.edu/", acc: "libre" },
    { t: "Monostori (2014) — Cyber-physical production systems (Procedia CIRP)", url: "https://doi.org/10.1016/j.procir.2014.03.115", acc: "libre" },
    { t: "Lee, Bagheri & Kao (2015) — Arquitectura 5C (Manufacturing Letters)", url: "https://doi.org/10.1016/j.mfglet.2014.12.001", acc: "libre" },
    { t: "Acatech (2013) — Recomendaciones Industrie 4.0", url: "https://www.acatech.de/", acc: "libre" },
    { t: "AXELOS — ITIL 4 Foundation", url: "https://www.axelos.com/", acc: "pago" },
  ],
  "s02.js": [
    { t: "ISO/IEC 38500:2015 — gobierno corporativo de TI (norma)", url: "https://www.iso.org/standard/62816.html", acc: "pago" },
    { t: "ISACA — COBIT 2019 (Introduction & Methodology gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "Ley 1581 de 2012 — protección de datos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html", acc: "libre" },
    { t: "SIC — Protección de datos personales (guías)", url: "https://www.sic.gov.co/tema/proteccion-de-datos-personales", acc: "libre" },
    { t: "CONPES 3995 de 2020 — confianza y seguridad digital (DNP)", url: "https://www.dnp.gov.co/", acc: "libre" },
    { t: "De Haes & Van Grembergen (2020) — Enterprise Governance of IT (Springer)", url: "https://link.springer.com/book/10.1007/978-3-030-25918-1", acc: "pago" },
  ],
  "s03.js": [
    { t: "ISACA — Portal COBIT 2019 (overview libre; Intro & Methodology gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "ISACA — COBIT 2019: Governance & Management Objectives (tomo)", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
    { t: "ISACA — COBIT 2019: Design Guide", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
    { t: "De Haes, Van Grembergen et al. (2020) — Enterprise Governance of IT", url: "https://link.springer.com/book/10.1007/978-3-030-25918-1", acc: "pago" },
    { t: "ISO/IEC 38500 — principios de gobierno (relación con COBIT)", url: "https://www.iso.org/standard/62816.html", acc: "pago" },
  ],
  "s04.js": [
    { t: "ISACA — Portal COBIT (overview y Design Toolkit; base gratis con cuenta)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "ISACA — COBIT 2019 Design Guide (diseño a medida)", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
    { t: "ISACA — COBIT 2019 Implementation Guide", url: "https://www.isaca.org/resources/cobit", acc: "pago" },
    { t: "CMMI Institute — modelo CMMI (base de la capacidad)", url: "https://cmmiinstitute.com/", acc: "pago" },
    { t: "De Haes & Van Grembergen (2020) — Enterprise Governance of IT", url: "https://link.springer.com/book/10.1007/978-3-030-25918-1", acc: "pago" },
  ],
  "s05.js": [
    { t: "ITIL 4: resumen del Service Value System (guía abierta)", url: "https://www.atlassian.com/itsm/itil", acc: "libre" },
    { t: "AXELOS — ITIL 4 Foundation (texto oficial)", url: "https://www.axelos.com/", acc: "pago" },
    { t: "ISACA — COBIT 2019 (EDM02/03/04, APO05/12/14)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "Balanced Scorecard — conceptos básicos (recursos abiertos)", url: "https://balancedscorecard.org/bsc-basics-overview/", acc: "libre" },
    { t: "ISO 31000 — gestión del riesgo (norma)", url: "https://www.iso.org/iso-31000-risk-management.html", acc: "pago" },
    { t: "ISO/IEC 20000 — gestión de servicios de TI (norma)", url: "https://www.iso.org/", acc: "pago" },
  ],
  "s06.js": [
    { t: "Acatech (2013) — Recomendaciones Industrie 4.0", url: "https://www.acatech.de/", acc: "libre" },
    { t: "Monostori (2014) — CPPS (Procedia CIRP)", url: "https://doi.org/10.1016/j.procir.2014.03.115", acc: "libre" },
    { t: "Lee, Bagheri & Kao (2015) — 5C (Manufacturing Letters)", url: "https://doi.org/10.1016/j.mfglet.2014.12.001", acc: "libre" },
    { t: "Rüßmann et al. (2015) — Industry 4.0: The Nine Pillars (BCG)", url: "https://www.bcg.com/capabilities/manufacturing/industry-4.0", acc: "libre" },
    { t: "Acatech — Industrie 4.0 Maturity Index", url: "https://www.acatech.de/", acc: "libre" },
    { t: "WEF / McKinsey — Global Lighthouse Network", url: "https://www.weforum.org/projects/global-lighthouse-network/", acc: "libre" },
  ],
  "s07.js": [
    { t: "ISA — Norma ISA-95 (comité, alcance y recursos)", url: "https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa95", acc: "libre" },
    { t: "ANSI/ISA-95 / IEC 62264 — texto normativo", url: "https://www.isa.org/", acc: "pago" },
    { t: "MESA International — modelos de MES/MOM (recursos)", url: "https://www.mesa.org/", acc: "libre" },
    { t: "OPC Foundation — mapeo ISA-95 ↔ OPC UA", url: "https://opcfoundation.org/", acc: "libre" },
    { t: "Unified Namespace — introducción (UMH Learn)", url: "https://learn.umh.app/lesson/chapter-2-the-rise-of-the-unified-namespace/", acc: "libre" },
    { t: "Scholten (2007) — The Road to Integration (aplicar ISA-95)", url: "https://www.isa.org/", acc: "pago" },
  ],
  "s08.js": [
    { t: "Plattform Industrie 4.0 — RAMI 4.0 y AAS (documentos)", url: "https://www.plattform-i40.de/", acc: "libre" },
    { t: "IDTA — Asset Administration Shell (especificaciones)", url: "https://industrialdigitaltwin.org/", acc: "libre" },
    { t: "Industrial Internet Consortium — IIRA", url: "https://www.iiconsortium.org/iira/", acc: "libre" },
    { t: "DIN SPEC 91345 (2016) — RAMI 4.0 (texto normativo)", url: "https://www.dinmedia.de/en/technical-rule/din-spec-91345/250940128", acc: "pago" },
    { t: "IEC 62890 — gestión del ciclo de vida (norma)", url: "https://webstore.iec.ch/", acc: "pago" },
    { t: "IEC 62264 / ISA-95 — jerarquía base (eje 3)", url: "https://www.isa.org/", acc: "pago" },
  ],
  "s09.js": [
    { t: "NIST SP 500-325 — Fog Computing Conceptual Model", url: "https://doi.org/10.6028/NIST.SP.500-325", acc: "libre" },
    { t: "Industrial Internet Consortium — Edge Computing / IIRA", url: "https://www.iiconsortium.org/iira/", acc: "libre" },
    { t: "IEEE 802.1 TSN — Time-Sensitive Networking", url: "https://1.ieee802.org/tsn/", acc: "libre" },
    { t: "5G-ACIA — 5G para la industria (whitepapers)", url: "https://5g-acia.org/", acc: "libre" },
    { t: "Shi et al. (2016) — Edge Computing: Vision and Challenges (IEEE)", url: "https://doi.org/10.1109/JIOT.2016.2579198", acc: "pago" },
    { t: "Docs del laboratorio: Mosquitto, Node-RED, InfluxDB, Grafana", url: "https://nodered.org/docs/", acc: "libre" },
  ],
  "s10.js": [
    { t: "OPC Foundation — OPC UA (tecnología y especificaciones)", url: "https://opcfoundation.org/about/opc-technologies/opc-ua/", acc: "libre" },
    { t: "OPC UA — especificaciones online (reference)", url: "https://reference.opcfoundation.org/", acc: "libre" },
    { t: "OPC Foundation — companion specs (umati, PackML, FX)", url: "https://opcfoundation.org/", acc: "libre" },
    { t: "open62541 — implementación abierta de OPC UA", url: "https://www.open62541.org/", acc: "libre" },
    { t: "python-asyncua — librería OPC UA (docs)", url: "https://opcua-asyncio.readthedocs.io/", acc: "libre" },
    { t: "IEC 62541 — OPC UA (texto normativo)", url: "https://webstore.iec.ch/", acc: "pago" },
  ],
  "s11.js": [
    { t: "OASIS — MQTT v5.0 (especificación oficial, gratis)", url: "https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html", acc: "libre" },
    { t: "Eclipse — Sparkplug B (especificación)", url: "https://sparkplug.eclipse.org/", acc: "libre" },
    { t: "Reynolds, Walker — Unified Namespace (introducción)", url: "https://learn.umh.app/lesson/chapter-2-the-rise-of-the-unified-namespace/", acc: "libre" },
    { t: "Eclipse Mosquitto — broker MQTT (docs)", url: "https://mosquitto.org/", acc: "libre" },
    { t: "Node-RED — orquestación de flujos (docs)", url: "https://nodered.org/docs/", acc: "libre" },
    { t: "HiveMQ / EMQX — MQTT industrial y Sparkplug (recursos)", url: "https://www.hivemq.com/mqtt/", acc: "libre" },
  ],
  "s12.js": [
    { t: "Kritzinger et al. (2018) — Digital Twin en manufactura (IFAC, abierto)", url: "https://doi.org/10.1016/j.ifacol.2018.08.474", acc: "libre" },
    { t: "Rasheed, San & Kvamsdal (2020) — Digital Twin (IEEE Access, abierto)", url: "https://doi.org/10.1109/ACCESS.2020.2970143", acc: "libre" },
    { t: "Digital Twin Consortium — recursos abiertos", url: "https://www.digitaltwinconsortium.org/", acc: "libre" },
    { t: "IDTA — Asset Administration Shell (gemelo administrativo)", url: "https://industrialdigitaltwin.org/", acc: "libre" },
    { t: "Tao et al. (2019) — Digital Twin in Industry (IEEE T-II)", url: "https://doi.org/10.1109/TII.2018.2873186", acc: "pago" },
    { t: "ISO 23247 — marco de gemelo digital para manufactura", url: "https://www.iso.org/", acc: "pago" },
  ],
  "s13.js": [
    { t: "ISACA — COBIT 2019 APO14 (gestión de datos)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "EDM Council — DCAM (modelo de madurez de datos)", url: "https://edmcouncil.org/frameworks/dcam/", acc: "libre" },
    { t: "OEE.com — cálculo e interpretación del OEE (TPM, abierto)", url: "https://www.oee.com/", acc: "libre" },
    { t: "Ley 1581 de 2012 — protección de datos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html", acc: "libre" },
    { t: "DAMA International — DMBOK (cuerpo de conocimiento)", url: "https://www.dama.org/cpages/body-of-knowledge", acc: "pago" },
    { t: "ISO 22400 — KPI de operaciones de manufactura (norma)", url: "https://www.iso.org/", acc: "pago" },
  ],
  "s14.js": [
    { t: "NIST SP 800-82 Rev.3 — OT Security (equivale a 62443 en la práctica)", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final", acc: "libre" },
    { t: "MITRE ATT&CK for ICS — tácticas y técnicas en OT", url: "https://attack.mitre.org/matrices/ics/", acc: "libre" },
    { t: "Langner — To Kill a Centrifuge (análisis de Stuxnet)", url: "https://www.langner.com/to-kill-a-centrifuge/", acc: "libre" },
    { t: "Dragos — informes de amenazas OT (TRITON, Industroyer)", url: "https://www.dragos.com/resources/", acc: "libre" },
    { t: "Williams — Purdue Enterprise Reference Architecture (PERA)", url: "https://en.wikipedia.org/wiki/Purdue_Enterprise_Reference_Architecture", acc: "libre" },
    { t: "IEC 62443 — serie de ciberseguridad industrial (texto normativo)", url: "https://webstore.iec.ch/", acc: "pago" },
  ],
  "s15.js": [
    { t: "NIST — Cybersecurity Framework (CSF) 2.0", url: "https://www.nist.gov/cyberframework", acc: "libre" },
    { t: "NIST SP 800-82 Rev.3 — OT Security", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final", acc: "libre" },
    { t: "Ley 1273 de 2009 — delitos informáticos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html", acc: "libre" },
    { t: "Ley 1581 de 2012 — protección de datos (Colombia)", url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html", acc: "libre" },
    { t: "CONPES 3995 de 2020 — confianza y seguridad digital (DNP)", url: "https://www.dnp.gov.co/", acc: "libre" },
    { t: "ISO/IEC 27001 · ISO 22301 · IEC 62443-3-2 (textos normativos)", url: "https://www.iso.org/", acc: "pago" },
  ],
  "s16.js": [
    { t: "WEF / McKinsey — Global Lighthouse Network (escalar I4.0)", url: "https://www.weforum.org/projects/global-lighthouse-network/", acc: "libre" },
    { t: "Kotter — 8 pasos del cambio (resumen oficial)", url: "https://www.kotterinc.com/methodology/8-steps/", acc: "libre" },
    { t: "Doerr — Measure What Matters / OKR (recursos abiertos)", url: "https://www.whatmatters.com/", acc: "libre" },
    { t: "ISACA — COBIT 2019 EDM02 (beneficios), APO05 (portafolio)", url: "https://www.isaca.org/resources/cobit", acc: "libre" },
    { t: "BCG / Acatech — escalar Industria 4.0 (informes)", url: "https://www.bcg.com/capabilities/manufacturing/industry-4.0", acc: "libre" },
    { t: "Brealey, Myers & Allen — Principles of Corporate Finance (VPN/TIR)", url: "https://www.mheducation.com/", acc: "pago" },
  ],
  "lab-gemelo.js": [
    { t: "Kritzinger et al. (2018) — Digital Twin (IFAC, abierto)", url: "https://doi.org/10.1016/j.ifacol.2018.08.474", acc: "libre" },
    { t: "Rasheed, San & Kvamsdal (2020) — Digital Twin (IEEE Access, abierto)", url: "https://doi.org/10.1109/ACCESS.2020.2970143", acc: "libre" },
    { t: "Digital Twin Consortium — recursos abiertos", url: "https://www.digitaltwinconsortium.org/", acc: "libre" },
    { t: "Isermann (2006) — Fault-Diagnosis Systems (Springer)", url: "https://link.springer.com/book/10.1007/3-540-30368-5", acc: "pago" },
    { t: "ISO 23247 — marco de gemelo digital para manufactura", url: "https://www.iso.org/", acc: "pago" },
    { t: "Código y guía del laboratorio — gemelo-digital/LÉEME.md", acc: "libre" },
  ],
};

function serialize(items) {
  const lines = items.map((o) => {
    const parts = [`t: ${JSON.stringify(o.t)}`];
    if (o.url) parts.push(`url: ${JSON.stringify(o.url)}`);
    if (o.acc) parts.push(`acc: ${JSON.stringify(o.acc)}`);
    return `      { ${parts.join(", ")} },`;
  });
  return "[\n" + lines.join("\n") + "\n    ]";
}

// Reemplaza el primer array `items:` que aparece tras `type: "refs"`.
function replaceRefsItems(content, items) {
  const refIdx = content.indexOf('type: "refs"');
  if (refIdx < 0) throw new Error("no refs slide");
  const itemsKey = content.indexOf("items:", refIdx);
  if (itemsKey < 0) throw new Error("no items key");
  const open = content.indexOf("[", itemsKey);
  let depth = 0, i = open;
  for (; i < content.length; i++) {
    const ch = content[i];
    if (ch === "[") depth++;
    else if (ch === "]") { depth--; if (depth === 0) break; }
  }
  const close = i;
  return content.slice(0, open) + serialize(items) + content.slice(close + 1);
}

let ok = 0;
for (const [file, items] of Object.entries(SRC)) {
  const path = "sessions/" + file;
  let c = fs.readFileSync(path, "utf8");
  try {
    c = replaceRefsItems(c, items);
    fs.writeFileSync(path, c, "utf8");
    console.log("OK  " + file + "  (" + items.length + " fuentes)");
    ok++;
  } catch (e) {
    console.error("ERR " + file + ": " + e.message);
  }
}
console.log(ok + "/" + Object.keys(SRC).length + " archivos actualizados");
