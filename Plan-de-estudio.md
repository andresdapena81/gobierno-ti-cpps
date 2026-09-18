# Plan de estudio — Gobierno de TI y Sistemas Ciber-Físicos de Producción

> **Documento canónico.** Manda sobre el contenido del material (ver `CLAUDE.md`).
> El calendario semanal detallado (temas por semana, festivos, lecturas) vive en `SYLLABUS.md`,
> que es el anexo de este plan. Si el material contradice este plan, se corrige el material.

Universidad de San Buenaventura · Sede Bello — Campus Medellín · Clase 6827 · ID 027227
Pregrado · obligatoria · 3 créditos (144 h: 48 de acompañamiento + 96 autónomas) · 2026-2
Docente: Jorge Andrés Dapena — MSc.

## 1. Resultados de aprendizaje (RA)

| RA | El estudiante será capaz de… |
|---|---|
| **RA1** | Distinguir gobierno de gestión de TI y aplicar los principios de ISO/IEC 38500 a un caso industrial. |
| **RA2** | Construir una cascada de objetivos COBIT 2019 y priorizar objetivos según factores de diseño. |
| **RA3** | Modelar la arquitectura de un sistema de producción con ISA-95/RAMI 4.0 y sus flujos de información. |
| **RA4** | Implementar una integración IIoT funcional (sensor → broker/servidor → almacenamiento → visualización) con OPC UA y/o MQTT. |
| **RA5** | Evaluar el riesgo cibernético de una arquitectura IT/OT y proponer controles (IEC 62443, NIST SP 800-82/CSF 2.0). |
| **RA6** | Definir un modelo de gobierno de datos y un tablero de indicadores (KPI/KRI) para manufactura. |
| **RA7** | Formular el caso de negocio de una iniciativa de digitalización industrial (costos, beneficios, riesgos, ruta). |
| **RA8** | Comunicar decisiones de gobierno tecnológico a audiencias directivas y técnicas. |

## 2. Sesiones (objetivo · laboratorio/actividad · trabajo autónomo · evidencia)

| # | Sesión | Objetivo | Lab / actividad | Trabajo autónomo | Evidencia |
|---|---|---|---|---|---|
| S01 | Fundamentos de Gobierno de TI | Distinguir gobierno de gestión; ubicar el CPPS como problema de gobierno | Taller: construir la empresa del proyecto | Elegir empresa y equipo | Ficha de empresa |
| S02 | ISO/IEC 38500 | Aplicar los 6 principios a decisiones reales | Matriz principios×decisiones | Lectura 38500 | Taller 1 (5 %) |
| S03 | COBIT 2019 I — cascada | Construir la cascada de objetivos | Lab: cascada del proyecto | Lectura COBIT Intro | Insumo Entregable 1 |
| S04 | COBIT 2019 II — diseño a medida | Priorizar con los 11 factores; capacidad/madurez | Taller factores de diseño | Avance Entregable 1 | Mapa de calor + brechas |
| S05 | Valor, Riesgo, Recursos e ITIL 4 | Gobernar valor/riesgo/recursos; SVS | Registro de riesgos + tablero | Cierre Entregable 1 | **Entregable 1 (15 %)** |
| S06 | Industria 4.0 y CPS | Definir CPPS, 5C y madurez digital | Diagnóstico de madurez (autoguiado) | Lecturas Acatech/Monostori | Ficha de diagnóstico 4.0 |
| S07 | ISA-95 y la pirámide | Modelar niveles 0–4 y flujos IT/OT | Lab 3: modelado ISA-95 | Preparación Evaluación de caso 1 | Diagramas de arquitectura |
| S08 | RAMI 4.0 y el AAS | Mapear el proyecto en el cubo RAMI | Mapeo RAMI + AAS | — | **Evaluación de caso 1 (10 %)** |
| S09 | IIoT, Edge y Nube | Diseñar la arquitectura IIoT; borde vs nube | Lab 4: arquitectura de referencia | Documentación del lab | Diagrama + decisiones |
| S10 | OPC UA y protocolos | Operar OPC UA (modelo, seguridad) | Lab 5: servidor/cliente OPC UA | Documentación del lab | Evidencia OPC UA |
| S11 | MQTT, Sparkplug B y UNS | Construir una cadena de datos completa | Lab 6: MQTT→Node-RED→BD→tablero | — | Tablero funcionando |
| S12 | Gemelos digitales | Especificar y gobernar un gemelo | Lab 7: gemelo (código ejecutable) | — | Especificación + demo |
| S13 | Gobierno de datos y OEE | Calcular OEE; gobernar el dato | Lab 8: cálculo de OEE | Cierre Entregable 2 | **Entregable 2 (15 %)** |
| S14 | Ciberseguridad industrial I | Modelar amenazas OT; Purdue/62443 | Modelado STRIDE | Lectura NIST 800-82 | Modelo de amenazas |
| S15 | Ciberseguridad industrial II | Evaluar riesgo IT/OT; CSF 2.0; continuidad | Lab 9: evaluación de riesgo | Preparación Evaluación de caso 2 | **Lab 9 (5 %) · Evaluación de caso 2 (10 %)** |
| S16 | Caso de negocio y hoja de ruta | Formular caso de negocio y roadmap | Asesoría de proyecto | Documento final | **Proyecto (25 %)** |
| — | Sustentaciones (sem. cierre) | Comunicar a junta y a técnicos | Sustentación dual | — | **Sustentación (10 %)** |

## 3. Matriz RA ↔ sesiones

| Sesión | RA1 | RA2 | RA3 | RA4 | RA5 | RA6 | RA7 | RA8 |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| S01 | ● | | | | | | | |
| S02 | ● | | | | | | | |
| S03 | | ● | | | | | | |
| S04 | | ● | | | | | | |
| S05 | | ● | | | | ○ | ○ | |
| S06 | | | ○ | ○ | | | | |
| S07 | | | ● | | | | | |
| S08 | | | ● | | | | | |
| S09 | | | ○ | ● | | | | |
| S10 | | | | ● | | | | |
| S11 | | | | ● | | ○ | | |
| S12 | | | | ○ | | ● | | |
| S13 | | | | | | ● | | |
| S14 | | | | | ● | | | |
| S15 | | | | | ● | | | |
| S16 | | | | | | ○ | ● | ● |

● = RA principal de la sesión · ○ = RA reforzado. Cobertura: los 8 RA tienen ≥2 sesiones y una evidencia calificable.

## 4. Proyecto integrador

*Modelo de gobierno para un sistema ciber-físico de producción.* Una empresa (real o ficticia verosímil)
elegida en S01 y desarrollada de forma acumulativa. Entregas: **E1** (sem 5, gobierno), **E2** (sem 13,
arquitectura+datos), **documento final** (sem 15) y **sustentación** (sem 16). Estructura de 9 secciones y
rúbrica de sustentación: ver `SYLLABUS.md` §6.3 y el Taller S01.

## 5. Sistema de evaluación

| Corte | Peso | Componentes |
|---|--:|---|
| Corte 1 | 30 % | Taller 1 (5 %) · Entregable 1 (15 %) · Evaluación de caso 1 (10 %) |
| Corte 2 | 30 % | Portafolio Labs 4–8 (10 %) · Entregable 2 (15 %) · Participación y preguntas de reflexión (5 %) |
| Corte 3 | 40 % | Evaluación de caso 2 (10 %) · Lab 9 (5 %) · Proyecto final escrito (25 %) — sustentación incluida |

> **Modelo de evaluación:** por proyectos, casos y talleres con casos, más preguntas de reflexión y análisis. No se aplican quizzes de memorización ni ítems de selección múltiple; las "evaluaciones de caso" son análisis abiertos de una situación de planta.

Políticas (tardíos, trabajo en equipo, uso de IA, integridad): ver `SYLLABUS.md` §6.4.
`⚠ CONFIRMAR` que la distribución de cortes coincide con el Plan de Calificación de Pregrado vigente de la USB.

## 6. Trazabilidad con el material producido

Cada sesión SNN tiene: presentación `presentaciones/SNN …​.pptx` (fuente `build/sessions/sNN.js`) y guía de
ejercicios `ejercicios/SNN …​.pdf` (fuente `build/exercises_data.py`). S01 y S06 tienen además taller/actividad
autoguiada en PPTX. S12 tiene laboratorio ejecutable en `gemelo-digital/`. Estado de brechas frente al
estándar: ver `PENDIENTES.md`.
