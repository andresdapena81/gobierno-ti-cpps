# GOBIERNO DE TI Y SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN
## Microcurrículo — Segundo Periodo Académico 2026

---

## 1. Identificación del curso

| Campo | Valor |
|---|---|
| Denominación | Gobierno de TI y Sistemas Ciber-Físicos de Producción |
| Código de clase | 8 50155-3M - 0153 |
| Nº Clase | 6827 |
| ID Curso / Nº Oferta | 027227 / 1 |
| Institución | Universidad de San Buenaventura |
| Ubicación | Sede Bello (USBBE) — Campus USB Medellín |
| Sesión | Medellín — Dieciséis semanas (M01) |
| Periodo | Segundo periodo académico 2026 |
| Fechas | 27 de julio – 23 de noviembre de 2026 |
| Créditos | 3 |
| Nivel | Pregrado (PREG) |
| Componente | Clase obligatoria |
| Plan de calificación | Plan de Calificación de Pregrado (GRD) |
| Estado | Abierta |

**Dedicación estimada (3 créditos = 144 horas totales):**
- Horas de acompañamiento directo: 48 h (3 h/semana × 16 semanas)
- Horas de trabajo independiente: 96 h (6 h/semana)

---

## 2. Justificación

La manufactura moderna dejó de ser un dominio exclusivamente operativo. Las plantas de producción hoy son **sistemas ciber-físicos**: activos físicos instrumentados, conectados y gobernados por software, datos y modelos. Esa convergencia entre el mundo TI (información) y el mundo OT (operación) genera valor —trazabilidad, mantenimiento predictivo, gemelos digitales, optimización en tiempo real— pero también traslada al piso de planta riesgos que antes eran exclusivos de los sistemas de información: ciberataques, fallas de disponibilidad, pérdida de integridad de datos y exposición regulatoria.

Frente a ese escenario, el ingeniero necesita dos competencias que tradicionalmente se enseñan por separado y que este curso integra deliberadamente:

1. **Gobernar la TI** — decidir quién decide sobre la tecnología, cómo se prioriza la inversión, cómo se mide el valor entregado y cómo se controla el riesgo, usando marcos reconocidos internacionalmente (ISO/IEC 38500, COBIT 2019, ITIL 4).
2. **Entender y diseñar sistemas ciber-físicos de producción** — arquitecturas de referencia (ISA-95, RAMI 4.0), protocolos industriales (OPC UA, MQTT), integración IIoT/edge/nube, gemelos digitales y seguridad industrial (IEC 62443, NIST SP 800-82).

El curso forma profesionales capaces de **tomar decisiones de gobierno sobre tecnología que opera procesos físicos**, un perfil crítico en el tejido industrial antioqueño (manufactura, alimentos, textil, energía, logística).

---

## 3. Competencias

### 3.1 Competencia general
Diseñar, evaluar y proponer esquemas de gobierno de tecnología para entornos de producción ciber-físicos, articulando marcos de gobierno de TI con arquitecturas y riesgos propios de la convergencia IT/OT, y sustentando las decisiones con evidencia técnica, económica y normativa.

### 3.2 Resultados de aprendizaje (RA)

Al finalizar el curso, el estudiante será capaz de:

| RA | Descripción | Evidencia |
|---|---|---|
| **RA1** | Distinguir gobierno de gestión de TI y aplicar los principios de ISO/IEC 38500 a un caso industrial. | Taller S2, Evaluación de caso 1 |
| **RA2** | Construir una cascada de objetivos COBIT 2019 y seleccionar objetivos de gobierno/gestión priorizados según factores de diseño. | Entregable Corte 1 |
| **RA3** | Modelar la arquitectura de un sistema de producción usando ISA-95/RAMI 4.0 e identificar los flujos de información entre niveles. | Lab 3, Evaluación de caso 2 |
| **RA4** | Implementar una integración IIoT funcional (sensor → broker/servidor → almacenamiento → visualización) usando OPC UA y/o MQTT. | Labs 5–7 |
| **RA5** | Evaluar el riesgo cibernético de una arquitectura IT/OT y proponer controles conforme a IEC 62443 y NIST SP 800-82. | Entregable Corte 2 |
| **RA6** | Definir un modelo de gobierno de datos y un tablero de indicadores (KPI/KRI) para una operación de manufactura. | Lab 9, Proyecto |
| **RA7** | Formular el caso de negocio de una iniciativa de digitalización industrial, con costos, beneficios, riesgos y ruta de adopción. | Proyecto final |
| **RA8** | Comunicar decisiones de gobierno tecnológico a audiencias directivas y técnicas, con lenguaje y evidencia apropiados a cada una. | Sustentación final |

---

## 4. Estructura del curso

El curso se organiza en **cuatro unidades**:

```
┌─────────────────────────────────────────────────────────────┐
│ UNIDAD 1 — Fundamentos de Gobierno de TI        (Sem. 1–5)  │
│   Gobierno vs. gestión · ISO/IEC 38500 · COBIT 2019 ·       │
│   ITIL 4 · valor, riesgo y recursos                         │
├─────────────────────────────────────────────────────────────┤
│ UNIDAD 2 — Sistemas Ciber-Físicos de Producción (Sem. 6–9)  │
│   Industria 4.0 · CPPS · ISA-95 / RAMI 4.0 · arquitectura   │
│   5C · IIoT, edge y nube                                     │
├─────────────────────────────────────────────────────────────┤
│ UNIDAD 3 — Integración y Convergencia IT/OT     (Sem. 10–13)│
│   OPC UA · MQTT · gemelos digitales · datos industriales ·  │
│   analítica y mantenimiento predictivo                       │
├─────────────────────────────────────────────────────────────┤
│ UNIDAD 4 — Gobierno del Riesgo Ciber-Físico     (Sem. 14–16)│
│   IEC 62443 · NIST SP 800-82 · NIST CSF 2.0 · cumplimiento  │
│   · continuidad · caso de negocio y hoja de ruta            │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Calendario semanal detallado

> **Convención:** cada semana corre de lunes a domingo. Los festivos colombianos 2026 que caen en semana lectiva están marcados con 🔴.

### UNIDAD 1 — Fundamentos de Gobierno de TI

---

#### **Semana 1** · 27 jul – 2 ago
**Tema:** Presentación del curso. ¿Qué significa *gobernar* la tecnología?

- Encuadre: acuerdos pedagógicos, evaluación, herramientas.
- Diagnóstico de entrada (no calificable): mapa de conceptos previos.
- Gobierno ≠ gestión: el modelo EDM (Evaluar–Dirigir–Monitorear) vs. PBRM (Planear–Construir–Ejecutar–Monitorear).
- Por qué una planta de producción es hoy un problema de gobierno de TI.
- Derechos de decisión (Weill & Ross): los cinco dominios y los seis arquetipos — monarquía de negocio, monarquía de TI, federal, duopolio, feudal, anarquía.
- Caso de apertura: análisis del ataque a Norsk Hydro (2019) — cuando TI tumba la producción.

**Actividad en aula:** debate estructurado — "¿de quién es la responsabilidad cuando un ransomware detiene una línea de producción?"
**Trabajo independiente:** lectura ISO/IEC 38500 (secciones 1–4). Conformación de equipos de proyecto (3–4 personas).

---

#### **Semana 2** · 3 ago – 9 ago · 🔴 vie 7 ago (Batalla de Boyacá)
**Tema:** ISO/IEC 38500 — principios de gobierno corporativo de TI

- Los seis principios: responsabilidad, estrategia, adquisición, desempeño, conformidad, comportamiento humano.
- El modelo EDM aplicado a decisiones reales.
- Roles: junta directiva, alta dirección, CIO/CTO, gerente de planta, dueño de proceso.
- Enlace con la matriz de derechos de decisión (Weill & Ross, Semana 1): qué principio de la norma rige cada dominio de decisión.
- Dos casos trabajados: acceso remoto de proveedor (gobernado) y compra de un MES sin gobierno.

**Taller 1 (calificable — 5 %):** aplicar los 6 principios de ISO/IEC 38500 a un caso de empresa manufacturera entregado en clase. Entrega: matriz de principios × decisiones + justificación (2 páginas).
**Trabajo independiente:** lectura COBIT 2019 — *Introduction and Methodology*, capítulos 1–3.

---

#### **Semana 3** · 10 ago – 16 ago
**Tema:** COBIT 2019 (I) — sistema de gobierno y cascada de objetivos

- Componentes de un sistema de gobierno: procesos, estructuras, flujos de información, personas, cultura, servicios/infraestructura.
- Las 5 áreas de enfoque y los 40 objetivos de gobierno y gestión (EDM, APO, BAI, DSS, MEA).
- Cascada de objetivos: necesidades de las partes interesadas → objetivos empresariales → objetivos de alineamiento → objetivos de gobierno/gestión.
- Ejercicio guiado: cascada completa para "reducir paradas no programadas en 30 %".

**Lab 1 (en aula):** construcción colaborativa de la cascada de objetivos para el caso del proyecto de cada equipo.
**Trabajo independiente:** COBIT 2019 — *Designing an Information and Technology Governance Solution*.

---

#### **Semana 4** · 17 ago – 23 ago · 🔴 lun 17 ago (Asunción de la Virgen)
**Tema:** COBIT 2019 (II) — factores de diseño y niveles de capacidad

- Los 11 factores de diseño (estrategia empresarial, metas, perfil de riesgo, panorama de amenazas, requisitos de cumplimiento, rol de TI, modelo de aprovisionamiento, métodos de implementación, estrategia de adopción, tamaño…).
- Modelo de capacidad de procesos (niveles 0–5) y modelo de madurez por área de enfoque.
- Diseño de un sistema de gobierno a medida: del genérico al específico.
- Discusión: por qué copiar el modelo de gobierno de otra empresa casi siempre falla.

**Actividad:** taller de factores de diseño aplicado al sector industrial colombiano (alimentos, textil, cemento, energía).
**Trabajo independiente:** avance del Entregable 1. Lectura ITIL 4 — *Service Value System*.

---

#### **Semana 5** · 24 ago – 30 ago
**Tema:** Valor, riesgo y recursos. ITIL 4 y la gestión de servicios en entornos productivos

- Sistema de valor del servicio (SVS) y cadena de valor del servicio en ITIL 4.
- Los 7 principios guía de ITIL 4 y su lectura en contexto industrial.
- Gestión del portafolio de inversiones en TI/OT: priorización, TCO, valor esperado.
- Introducción a la gestión de riesgo tecnológico: apetito, tolerancia, registro de riesgos.
- Indicadores: diferencia entre KPI (desempeño) y KRI (riesgo). Errores frecuentes al medir TI.

**Cierre de Unidad 1.** Sesión de consultoría por equipos sobre el Entregable 1.

> 📌 **ENTREGABLE 1 — "Diagnóstico y diseño del sistema de gobierno de TI" (15 %)**
> Fecha límite: **domingo 30 de agosto de 2026, 23:59**
> Contenido: caracterización de la organización, cascada de objetivos COBIT, selección y priorización de 8–10 objetivos de gobierno/gestión con factores de diseño, matriz de derechos de decisión, mapa de partes interesadas. Extensión: 12–18 páginas.

---

### UNIDAD 2 — Sistemas Ciber-Físicos de Producción

---

#### **Semana 6** · 31 ago – 6 sep
**Tema:** Industria 4.0 y sistemas ciber-físicos: fundamentos

- De la mecanización a la producción cognitiva: las cuatro revoluciones industriales.
- Definición de CPS y CPPS (Monostori, 2014). Diferencia con automatización clásica, SCADA e IoT de consumo.
- La arquitectura 5C (Lee, Bagheri & Kao, 2015): conexión, conversión, cibernética, cognición, configuración.
- Tecnologías habilitadoras: sensórica, conectividad, computación en el borde, IA, simulación, aditiva, realidad aumentada.
- Estado de la adopción en Colombia y América Latina: cifras, barreras y brechas.

**Lab 2:** diagnóstico de madurez digital de una planta (aplicación de un modelo de madurez tipo Acatech / IMPULS sobre un caso).
**Trabajo independiente:** lectura Kagermann, Wahlster & Helbig (2013) y Monostori (2014).

---

#### **Semana 7** · 7 sep – 13 sep
**Tema:** Arquitecturas de referencia (I) — la pirámide de automatización e ISA-95

- Niveles 0–4 de la pirámide: campo, control, supervisión (SCADA), MES/MOM, ERP.
- ANSI/ISA-95 (IEC 62264): modelos jerárquico, funcional, de objetos y de intercambio de información.
- B2MML y la integración ERP ↔ MES.
- Por qué la pirámide se está "aplanando": arquitecturas orientadas a servicios, UNS (Unified Namespace), event-driven.

**Lab 3:** modelado ISA-95 de un proceso productivo real (asignado por equipo). Entrega de diagramas de nivel, flujo de información y objetos de datos.
**Trabajo independiente:** preparación de la Evaluación de caso 1.

---

#### **Semana 8** · 14 sep – 20 sep
**Tema:** Arquitecturas de referencia (II) — RAMI 4.0 y el Asset Administration Shell

- RAMI 4.0 (DIN SPEC 91345): los tres ejes — capas, ciclo de vida y flujo de valor, jerarquía.
- El Activo Administrado (AAS): concepto de "gemelo administrativo" y submodelos.
- Comparación RAMI 4.0 vs. IIRA (Industrial Internet Reference Architecture).
- Cómo mapear una decisión de gobierno sobre el cubo RAMI 4.0.

> 📝 **EVALUACIÓN DE CASO 1 (10 %)** — jueves 17 de septiembre.
> Cubre Unidad 1 completa + Semanas 6–7. Formato: caso de análisis con preguntas abiertas de reflexión y aplicación. Se evalúa el razonamiento de gobierno, no la memorización (sin selección múltiple).

---

#### **Semana 9** · 21 sep – 27 sep
**Tema:** IIoT, computación en el borde y arquitecturas nube-planta

- Arquitectura IIoT de referencia: dispositivo → gateway → borde → plataforma → aplicación.
- Edge vs. fog vs. cloud: criterios de decisión (latencia, ancho de banda, soberanía de datos, costo, disponibilidad).
- Plataformas industriales: comparación funcional y consideraciones de dependencia de proveedor (*vendor lock-in*).
- Gobierno de la arquitectura: quién aprueba qué se envía a la nube y qué se queda en planta.

**Lab 4:** diseño y sustentación de una arquitectura de referencia IIoT para el caso del proyecto, con justificación explícita de las decisiones borde/nube.
**Cierre de Unidad 2.**

---

### UNIDAD 3 — Integración y Convergencia IT/OT

---

#### **Semana 10** · 28 sep – 4 oct
**Tema:** Protocolos industriales y OPC UA

- Panorama: Modbus, PROFINET, EtherNet/IP, EtherCAT — qué resuelven y qué no.
- OPC UA: modelo de información, espacio de direcciones, servicios, perfiles de seguridad.
- OPC UA PubSub y TSN: hacia la comunicación determinística sobre Ethernet estándar.
- Companion specifications (p. ej. UMATI, PackML) y su rol en la interoperabilidad.

**Lab 5 (práctico):** levantar un servidor OPC UA simulado, explorar su espacio de direcciones con un cliente, leer/escribir nodos y configurar suscripciones. *Herramientas: Prosys OPC UA Simulation Server / open62541 / Python `asyncua`.*
**Trabajo independiente:** documentación del laboratorio.

---

#### **Semana 11** · 5 oct – 11 oct
**Tema:** MQTT, Sparkplug B y el Unified Namespace

- MQTT: publicación/suscripción, QoS, retención, *last will*, jerarquías de tópicos.
- Sparkplug B: por qué MQTT "crudo" no basta en industria — estado, nacimiento/muerte, tipado.
- Unified Namespace (UNS): principio, diseño de la jerarquía semántica, gobierno del espacio de nombres.
- Contraste OPC UA vs. MQTT: cuándo cada uno, cuándo ambos.

**Lab 6 (práctico):** construir una cadena de datos completa — simulador de proceso → publicación MQTT → Node-RED → base de datos de series de tiempo → tablero de visualización. *Herramientas: Mosquitto, Node-RED, InfluxDB/TimescaleDB, Grafana.*

---

#### **Semana 12** · 12 oct – 18 oct · 🔴 lun 12 oct (Día de la Raza)
**Tema:** Gemelos digitales y simulación

- Taxonomía: modelo digital, sombra digital, gemelo digital. Qué diferencia realmente a cada uno.
- Ciclo de vida del gemelo: diseño, puesta en marcha, operación, retiro.
- Casos de uso: validación virtual, optimización de parámetros, entrenamiento de operarios, simulación de escenarios de falla.
- Gobierno del gemelo: propiedad del modelo, fidelidad requerida, validación, versionado, ¿quién responde si el gemelo se equivoca?

**Lab 7:** especificación funcional de un gemelo digital para el proceso del proyecto: variables, fidelidad, fuentes de datos, frecuencia de sincronización, criterios de validación.

---

#### **Semana 13** · 19 oct – 25 oct
**Tema:** Gobierno de datos industriales y analítica

- Calidad del dato en planta: exactitud, completitud, oportunidad, consistencia, linaje.
- Roles de gobierno de datos: propietario, custodio, administrador (*data steward*), consumidor.
- De la señal al indicador: OEE, MTBF, MTTR, tasa de calidad a la primera, consumo específico.
- Mantenimiento predictivo: detección de anomalías, estimación de vida útil remanente (RUL), y por qué la mayoría de pilotos no escala.
- Ética y responsabilidad algorítmica en decisiones de producción.

**Lab 8:** cálculo e interpretación de OEE a partir de un conjunto de datos real de producción; identificación de las seis grandes pérdidas.
> 📌 **ENTREGABLE 2 — "Arquitectura ciber-física e integración de datos" (15 %)**
> Fecha límite: **domingo 25 de octubre de 2026, 23:59**
> Contenido: arquitectura de referencia del sistema (ISA-95 + RAMI 4.0), diseño de integración (protocolos, flujos, UNS), modelo de datos, tablero de indicadores propuesto, evidencia funcional de los laboratorios 5–7. **Cierre de Unidad 3.**

---

### UNIDAD 4 — Gobierno del Riesgo Ciber-Físico

---

#### **Semana 14** · 26 oct – 1 nov
**Tema:** Ciberseguridad industrial (I) — amenazas y arquitectura defensiva

- Por qué la seguridad OT no es seguridad TI: prioridad Disponibilidad–Integridad–Confidencialidad invertida, ciclos de vida de 20 años, imposibilidad de parchar en caliente.
- Anatomía de incidentes reales: Stuxnet, Industroyer/CrashOverride, TRITON/TRISIS, Colonial Pipeline, Norsk Hydro.
- Modelo Purdue y segmentación: zonas, conductos, DMZ industrial.
- IEC 62443: estructura de la serie, niveles de seguridad (SL 1–4), roles (operador, integrador, fabricante).

**Actividad:** ejercicio de modelado de amenazas (STRIDE aplicado a una arquitectura OT).
**Trabajo independiente:** lectura NIST SP 800-82 Rev. 3, capítulos seleccionados.

---

#### **Semana 15** · 2 nov – 8 nov · 🔴 lun 2 nov (Todos los Santos)
**Tema:** Ciberseguridad industrial (II) — gestión del riesgo, cumplimiento y continuidad

- NIST CSF 2.0: las seis funciones (Gobernar, Identificar, Proteger, Detectar, Responder, Recuperar) y su articulación con COBIT.
- Evaluación de riesgo: probabilidad × impacto, con impacto medido en producción, seguridad física y ambiente — no solo en datos.
- Marco normativo colombiano: Ley 1581 de 2012 y Decreto 1074 de 2015 (protección de datos), CONPES 3995 (confianza y seguridad digital), obligaciones sectoriales.
- Continuidad del negocio en manufactura: RTO/RPO en líneas de producción, planes de respuesta a incidentes OT, ejercicios de mesa.

**Lab 9:** evaluación de riesgo IT/OT del proyecto — registro de riesgos, mapa de calor, controles propuestos mapeados a IEC 62443 y NIST CSF 2.0.

> 📝 **EVALUACIÓN DE CASO 2 (10 %)** — jueves 5 de noviembre.
> Cubre Unidades 2 y 3 + Semana 14. Caso de análisis: dada una planta, proponer arquitectura, integración y controles de seguridad. Se evalúa el razonamiento, no la memorización.

---

#### **Semana 16** · 9 nov – 15 nov
**Tema:** Integración final — el caso de negocio de la transformación digital industrial

- Del piloto a la escala: por qué mueren los pilotos de Industria 4.0 y qué los sostiene.
- Caso de negocio: CAPEX/OPEX, VPN, TIR, periodo de recuperación, beneficios tangibles e intangibles.
- Hoja de ruta de adopción: horizontes, dependencias, capacidades organizacionales requeridas.
- Gestión del cambio y desarrollo de competencias en planta.
- Cierre conceptual: el modelo integrado de gobierno ciber-físico construido a lo largo del curso.

**Sesión de asesoría final por equipos** para el proyecto.

---

#### **Semana de cierre** · 16 nov – 23 nov · 🔴 lun 16 nov (Independencia de Cartagena)
**Sustentaciones del proyecto final y cierre del curso**

- Sustentaciones: 20 minutos de exposición + 10 de preguntas por equipo.
- Formato dual obligatorio: (a) presentación ejecutiva de 8 minutos dirigida a junta directiva, (b) anexo técnico defendido ante preguntas del docente.
- Retroalimentación, publicación de notas definitivas y cierre — **lunes 23 de noviembre de 2026**.

> 📌 **PROYECTO FINAL — entrega escrita: domingo 15 de noviembre, 23:59** (25 %)
> **Sustentación: semana del 16 al 20 de noviembre** (10 %)

---

## 6. Sistema de evaluación

### 6.1 Distribución por cortes

| Corte | Peso | Componentes |
|---|---:|---|
| **Corte 1** | 30 % | Taller 1 (5 %) · Entregable 1 (15 %) · Evaluación de caso 1 (10 %) |
| **Corte 2** | 30 % | Labs 4–8 (10 %) · Entregable 2 (15 %) · Participación y preguntas de reflexión (5 %) |
| **Corte 3** | 40 % | Evaluación de caso 2 (10 %) · Lab 9 (5 %) · Proyecto final escrito (25 %) — sustentación incluida |

> Ajustar los porcentajes al reglamento vigente de la USB si el plan de calificación de pregrado establece una distribución obligatoria distinta (verificar antes de publicar).

### 6.2 Detalle de instrumentos

| # | Instrumento | Peso | Fecha límite | RA evaluados |
|---|---|---:|---|---|
| 1 | Taller 1 — Principios ISO/IEC 38500 | 5 % | Dom 9 ago | RA1 |
| 2 | Entregable 1 — Sistema de gobierno de TI | 15 % | Dom 30 ago | RA1, RA2 |
| 3 | Evaluación de caso 1 | 10 % | Jue 17 sep | RA1, RA2, RA3 |
| 4 | Portafolio de laboratorios 4–8 | 10 % | Continuo | RA3, RA4, RA6 |
| 5 | Entregable 2 — Arquitectura CPPS | 15 % | Dom 25 oct | RA3, RA4, RA6 |
| 6 | Participación y preguntas de reflexión | 5 % | Continuo | Transversal |
| 7 | Evaluación de caso 2 | 10 % | Jue 5 nov | RA3, RA4, RA5 |
| 8 | Lab 9 — Evaluación de riesgo IT/OT | 5 % | Dom 8 nov | RA5 |
| 9 | Proyecto final (documento) | 25 % | Dom 15 nov | RA2, RA5, RA6, RA7 |
| 10 | Sustentación del proyecto | *incluido en 9* | Sem. 16–23 nov | RA8 |

### 6.3 Proyecto final — descripción

**Título:** *Modelo de gobierno para un sistema ciber-físico de producción*

Cada equipo (3–4 estudiantes) selecciona en la Semana 1 una organización manufacturera real o un proceso productivo verosímil, y lo desarrolla de forma acumulativa durante el semestre. El documento final integra y refina los Entregables 1 y 2, y añade los componentes de la Unidad 4.

**Estructura exigida:**
1. Caracterización de la organización y del proceso productivo
2. Diagnóstico de madurez digital y de gobierno de TI
3. Sistema de gobierno propuesto (COBIT 2019 + ISO/IEC 38500)
4. Arquitectura ciber-física objetivo (ISA-95 / RAMI 4.0 / IIoT)
5. Diseño de integración de datos y tablero de indicadores
6. Evaluación de riesgo IT/OT y controles (IEC 62443 / NIST CSF 2.0)
7. Caso de negocio: costos, beneficios, VPN/TIR, análisis de sensibilidad
8. Hoja de ruta de adopción por horizontes
9. Conclusiones y limitaciones declaradas

**Rúbrica de sustentación (100 puntos):**

| Criterio | Puntos |
|---|---:|
| Rigor técnico y uso correcto de los marcos de referencia | 25 |
| Coherencia entre diagnóstico, arquitectura y decisiones de gobierno | 20 |
| Calidad del análisis de riesgo | 15 |
| Solidez del caso de negocio | 15 |
| Comunicación ejecutiva (claridad, síntesis, adecuación a la audiencia) | 15 |
| Manejo de preguntas y dominio individual del trabajo | 10 |

### 6.4 Políticas de evaluación

- **Entregas tardías:** descuento de 10 % del valor por cada día calendario de retraso, hasta 3 días; después no se recibe.
- **Trabajo en equipo:** todos los integrantes deben poder responder por cualquier parte del trabajo. Se aplica coevaluación en el proyecto final.
- **Uso de IA generativa:** permitido y esperado como herramienta de trabajo, con dos condiciones — (a) declarar en un anexo qué se usó y para qué; (b) el estudiante responde por la exactitud de todo lo entregado. Contenido incorrecto no se excusa por haber sido generado por IA.
- **Integridad académica:** el plagio se rige por el reglamento estudiantil de la USB. Se verifica originalidad en todos los entregables escritos.

---

## 7. Metodología

| Estrategia | Peso aproximado del tiempo de aula |
|---|---:|
| Clase magistral dialogada (marcos conceptuales) | 30 % |
| Estudio de casos y análisis de incidentes reales | 20 % |
| Laboratorios prácticos (herramientas y simulación) | 30 % |
| Sesiones de proyecto y asesoría por equipos | 15 % |
| Evaluación y retroalimentación | 5 % |

**Principio metodológico:** cada concepto de gobierno se ancla en un artefacto técnico concreto y cada artefacto técnico se problematiza como decisión de gobierno. No se enseñan marcos como listas de siglas para memorizar.

---

## 8. Recursos y herramientas

### 8.1 Software (todo gratuito o con licencia académica/comunidad)

| Herramienta | Uso en el curso |
|---|---|
| Python 3 + `asyncua`, `paho-mqtt`, `pandas` | Laboratorios de integración y análisis |
| Eclipse Mosquitto | Broker MQTT |
| Node-RED | Orquestación de flujos de datos |
| Prosys OPC UA Simulation Server / open62541 | Servidor OPC UA de práctica |
| UaExpert | Cliente OPC UA |
| InfluxDB o TimescaleDB | Almacenamiento de series de tiempo |
| Grafana | Tableros de visualización |
| Wireshark | Análisis de tráfico industrial |
| Draw.io / Archi | Diagramación de arquitectura |
| Factory I/O o simulador equivalente *(opcional)* | Simulación de proceso físico |

### 8.2 Requisitos de infraestructura
- Sala con equipos que permitan instalación de software o uso de contenedores Docker.
- Conectividad a internet para acceso a repositorios y documentación.
- Alternativa de contingencia: máquinas virtuales preconfiguradas distribuidas por el docente.

---

## 9. Bibliografía

### 9.1 Estándares y marcos (obligatorios)

- **ISO/IEC 38500** — *Information technology — Governance of IT for the organization*. Ginebra: ISO. (Edición vigente.)
- **ISACA (2018–2019)** — *COBIT 2019 Framework: Introduction and Methodology*; *COBIT 2019 Framework: Governance and Management Objectives*; *COBIT 2019 Design Guide*. Schaumburg, IL: ISACA.
- **ANSI/ISA-95 (IEC 62264)** — *Enterprise-Control System Integration*, Partes 1–4.
- **DIN SPEC 91345 (2016)** — *Reference Architecture Model Industrie 4.0 (RAMI 4.0)*.
- **IEC 62443** — *Industrial communication networks — IT security for networks and systems*. Serie completa; énfasis en 62443-3-2, 62443-3-3 y 62443-4-1.
- **NIST (2023)** — *SP 800-82 Rev. 3: Guide to Operational Technology (OT) Security*.
- **NIST (2024)** — *Cybersecurity Framework (CSF) 2.0*.
- **ISO/IEC 27001:2022** — *Information security management systems*.
- **AXELOS (2019)** — *ITIL Foundation: ITIL 4 Edition*.

### 9.2 Literatura académica

- Monostori, L. (2014). Cyber-physical production systems: roots, expectations and R&D challenges. *Procedia CIRP*, 17, 9–13.
- Lee, J., Bagheri, B., & Kao, H.-A. (2015). A Cyber-Physical Systems architecture for Industry 4.0-based manufacturing systems. *Manufacturing Letters*, 3, 18–23.
- Kagermann, H., Wahlster, W., & Helbig, J. (2013). *Recommendations for implementing the strategic initiative INDUSTRIE 4.0*. Acatech.
- Weill, P., & Ross, J. W. (2004). *IT Governance: How Top Performers Manage IT Decision Rights for Superior Results*. Harvard Business School Press.
- De Haes, S., & Van Grembergen, W. (2020). *Enterprise Governance of Information Technology* (3.ª ed.). Springer.
- Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019). Digital Twin in Industry: State-of-the-Art. *IEEE Transactions on Industrial Informatics*, 15(4), 2405–2415.

### 9.3 Normativa colombiana

- Ley 1581 de 2012 y Decreto 1074 de 2015 — Protección de datos personales.
- CONPES 3995 de 2020 — Política Nacional de Confianza y Seguridad Digital.
- Ley 1273 de 2009 — Delitos informáticos.

---

## 10. Resumen de fechas clave

| Fecha | Hito |
|---|---|
| Lun 27 jul | Inicio de clases |
| Dom 9 ago | Taller 1 |
| Dom 30 ago | **Entregable 1** (15 %) |
| Jue 17 sep | **Evaluación de caso 1** (10 %) |
| Dom 25 oct | **Entregable 2** (15 %) |
| Jue 5 nov | **Evaluación de caso 2** (10 %) |
| Dom 8 nov | Lab 9 — Riesgo IT/OT |
| Dom 15 nov | **Proyecto final — documento** (25 %) |
| 16–20 nov | Sustentaciones |
| Lun 23 nov | Cierre del curso y notas definitivas |

**Festivos en semana lectiva:** vie 7 ago · lun 17 ago · lun 12 oct · lun 2 nov · lun 16 nov

---

*Documento elaborado para la clase 6827 — Segundo Periodo Académico 2026. Sujeto a ajustes por calendario institucional.*
