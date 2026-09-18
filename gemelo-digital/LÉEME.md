# Gemelo digital de una línea de llenado y tapado

**Lab 7 · Semana 12** — Gobierno de TI y Sistemas Ciber-Físicos de Producción
Universidad de San Buenaventura · Sede Bello

Demo funcional de un gemelo digital: simulador de proceso en Python, gemelo con
modelo predictivo y diagnóstico, y front en React. Alimenta el **Lab 8** (OEE,
S13) con datos generados por los propios estudiantes.

---

## 1. Por qué existe

El 90 % de los "gemelos digitales" que se entregan en un curso son **tableros de
telemetría**: leen sensores y los pintan. Eso no es un gemelo.

Este laboratorio está construido para hacer visible la diferencia. Un gemelo
necesita cuatro cosas, y si le quitás cualquiera lo que queda es un dashboard:

| # | Capacidad | Dónde está | Qué se ve en pantalla |
|---|---|---|---|
| 1 | **Un modelo que predice** | `gemelo/modelo.py` | Cv estimado ≠ Cv de placa |
| 2 | **Un residual** que compara predicción con realidad | `gemelo/residual.py` | La gráfica de residual y su umbral |
| 3 | **What-if** más rápido que tiempo real | `gemelo/whatif.py` | La curva de barrido de consignas |
| 4 | **Un camino de vuelta** al proceso, gobernado | `gemelo/gobierno.py` | La bitácora de decisiones |

La cuarta es la que casi nunca aparece en los pilotos reales, y es exactamente lo
que exige ISO/IEC 38500.

---

## 2. Cómo se corre

Requisitos: **Python 3.10+** y **Node 18+**. Nada más — sin Docker, sin broker.

**Terminal 1 — el backend:**

```bash
cd backend && pip install -r requirements.txt && python main.py
```

**Terminal 2 — el front:**

```bash
cd frontend && npm install && npm run dev
```

Abrí <http://localhost:5173>.

> **Si el puerto 8000 está ocupado** (pasa más de lo que uno espera), el backend
> te lo dice y te da la salida. Levantalo en otro puerto y avisale al front:
>
> ```bash
> python main.py --api-puerto 8021
> ```
>
> y en la otra terminal, `API_PUERTO=8021 npm run dev` (en PowerShell:
> `$env:API_PUERTO=8021; npm run dev`).

**Otras banderas útiles:**

```bash
python main.py --velocidad 8
```

Acelera la simulación 8× — necesario para que las fallas progresivas se
manifiesten dentro de una clase. También se cambia desde los botones del front.

```bash
python main.py --mqtt
```

Usa un broker Mosquitto real en vez del transporte en memoria (ver §6).

**Prueba de humo, sin interfaz:**

```bash
cd backend && python prueba_rapida.py
```

Corre los cinco escenarios de falla y el what-if en la terminal, con el
diagnóstico y la evidencia de cada uno. Sirve para verificar el modelo después
de tocarlo, y también como demostración en sí misma.

---

## 3. Guía de lectura del código

Leelo en este orden. Cada archivo abre con un comentario que explica su papel y
las decisiones de diseño que hay detrás.

### La frontera, primero

| Archivo | Qué mirar |
|---|---|
| **`planta/proceso.py`** | **EL ACTIVO FÍSICO, no el gemelo.** Física del tanque, llenadora volumétrica por tiempo, lazo P de nivel y los cinco modos de falla. Fijate en `telemetria()`: es lo *único* que sale hacia el gemelo. `verdad_oculta()` es la vista de clase y el gemelo nunca la consulta. |

Si un estudiante puede señalar dónde termina la realidad y dónde empieza el
modelo, entendió el concepto. Todo lo demás es detalle.

### El gemelo

| Archivo | Qué mirar |
|---|---|
| `gemelo/modelo.py` | La misma física, pero con parámetros **de placa**. `cv_implicito()` resuelve el problema inverso: dado el volumen que salió, ¿qué Cv lo explica? |
| `gemelo/residual.py` | El corazón. La tabla de **firmas de falla** y —importante— el apartado que explica qué fallas **no** se pueden distinguir con esta instrumentación. |
| `gemelo/sombra.py` | Orquesta todo. Mirá `_cerrar_botella()`: el residual se calcula contra el Cv **de placa**, nunca contra el estimado. Un modelo que se adapta a todo nunca detecta nada. |
| `gemelo/oee.py` | Las tres componentes salen del mismo modelo físico. Acumulado del turno vs. ventana móvil. |
| `gemelo/whatif.py` | Barrido de consignas. Devuelve la **curva completa**, no sólo el óptimo, y declara sus supuestos. |
| `gemelo/gobierno.py` | La matriz de derechos de decisión (S01) y la bitácora. Donde el laboratorio se vuelve gobierno. |

### El pegamento

| Archivo | Qué mirar |
|---|---|
| `transporte/` | Interfaz común, dos implementaciones. Que se cambien con una bandera es la demostración práctica del desacoplamiento de S09/S11. |
| `main.py` | Tres bucles concurrentes: planta, gemelo, API. Planta y gemelo hablan **sólo** por el transporte — se podrían separar en dos máquinas sin tocar lógica. |
| `frontend/src/` | React sin librería de gráficas: las de `Grafica.jsx` son SVG a mano. Paleta y tipografía idénticas a las 16 presentaciones del curso. |

---

## 4. Guion sugerido de clase (≈ 45 min)

**1 · Arrancar en nominal (5 min).** Mostrar el mímico. OEE ~95 %. Preguntar:
*"¿esto es un gemelo digital?"* — No: hasta acá es un SCADA.

**2 · Mostrar el residual (5 min).** Está en cero. Explicar qué significa: el
modelo describe bien a la planta. **Ahora sí** hay un gemelo, porque hay algo con
qué comparar.

**3 · Inyectar desgaste de válvula (10 min).** Con velocidad 4× u 8×.
Observar en orden:
- el volumen por botella empieza a caer y aparecen puntos rojos;
- el **residual se sale del umbral** *antes* de que el OEE acumulado se mueva;
- el **Cv estimado sigue al Cv real** sin que ningún sensor lo mida.

Abrir el "ojo de Dios" y comparar estimado contra real. Ése es el momento en que
se entiende qué hace un gemelo.

**4 · What-if y decisión (15 min).** Simular. Discutir la curva:
- alargar la consigna **gana calidad y pierde desempeño** — no hay almuerzo gratis;
- el óptimo **no coincide** con la compensación exacta del desgaste;
- ¿por qué el gemelo entrega la curva y no sólo el número?

Después, intentar autorizar **como operador**. La matriz lo rechaza. Discutir por
qué esa fricción es correcta y no un defecto de la interfaz. Autorizar como
supervisor, con justificación. Dejar correr 150 s de simulación y volver a la
bitácora: el veredicto se cierra solo. Ése es el ciclo EDM completo.

**5 · El transmisor desviado (10 min).** El plato fuerte.
- La producción no se detiene, el OEE tarda en moverse: **un tablero no ve nada**.
- El gemelo dispara el **salto enclavado** y propone dos hipótesis.
- Y declara que **no puede distinguirlas**, diciendo qué evidencia externa haría falta.
- Abrir el "ojo de Dios": el tanque tiene 0.765 m y la pantalla dice 1.115 m.
- Rematar: *el lazo de control lee ese mismo transmisor*. Un instrumento mal
  calibrado no sólo informa mal — **mueve el proceso**.

---

## 5. Los cinco modos de falla

| Falla | Qué toca | Componente del OEE | Qué debe ver el estudiante |
|---|---|---|---|
| Desgaste de válvula | Cv cae ~0.6 %/min | Calidad | El residual avisa antes que el OEE |
| Bomba degradada | Capacidad de reposición | Calidad → Disponibilidad | **Falla latente**: el lazo la enmascara hasta que satura |
| Atasco de tapadora | Micro-paradas | Disponibilidad | Residuales limpios: la pérdida no es de física |
| Transmisor desviado | +0.35 m en el sensor | *Ninguna, al principio* | Un tablero no lo ve; el gemelo sí. Y el diagnóstico es ambiguo |
| Sin falla | — | — | Línea base |

---

## 6. Modo MQTT (laboratorio de la S11)

```bash
docker run -it --rm -p 1883:1883 eclipse-mosquitto:2 mosquitto -c /mosquitto-no-auth.conf
cd backend && pip install paho-mqtt && python main.py --mqtt
```

Para espiar el tráfico:

```bash
mosquitto_sub -h localhost -t 'spBv1.0/#' -v
```

**Alcance honesto:** se usa el **nombrado** de Sparkplug B (jerarquía de tópicos,
DBIRTH, LWT), pero la carga va en **JSON, no protobuf**, y no se llevan los
contadores de secuencia. Esto es *nombrado* Sparkplug, **no** *conformidad*
Sparkplug. Decirlo en voz alta en clase: un proveedor que hiciera esta misma
simplificación y la vendiera como "compatible con Sparkplug B" estaría faltando a
la verdad, y detectarlo es la clase de escrutinio que exige el principio de
adquisición de la S02.

> ⚠ **Seguridad (S14–S15).** Ese broker no tiene autenticación y escucha en todas
> las interfaces. Aceptable en un laboratorio en red aislada, inaceptable en
> cualquier otro sitio: un broker MQTT abierto en una red de planta es acceso de
> escritura a los datos de proceso. Vale la pena buscar "1883" en Shodan durante
> la S14 — el resultado suele bastar como argumento.

---

## 7. Limitaciones declaradas

Se listan a propósito. Un gemelo que no declara sus límites no es confiable, y
pedirle a los estudiantes que las encuentren es un buen ejercicio en sí mismo.

1. **Sensor desviado y desgaste son indistinguibles en régimen permanente.** Sólo
   se separan si se atrapa el salto. Es un problema de *observabilidad*, no de
   algoritmo: con esta instrumentación no hay forma. Está documentado en
   `residual.py` y el diagnóstico lo dice en pantalla.
2. **La estimación de Cv tiene un sesgo de ~0.5 %** por la diferencia de paso de
   integración entre planta (50 ms) y modelo (10 ms). Es análogo al error de
   modelo que existe siempre en un gemelo real.
3. **El what-if no simula las paradas**: arrastra la disponibilidad observada. Es
   un supuesto declarado, no un descuido — inventarle un modelo a un proceso
   estocástico ajeno a la consigna daría falsa precisión.
4. **La bitácora vive en memoria.** Se pierde al reiniciar el backend. En una
   implantación real sería un registro append-only persistido y auditable (S15).
5. **CORS abierto y sin autenticación** en la API. En producción sería un hallazgo
   de seguridad; acá es aceptable porque todo escucha en localhost sin datos
   reales.

---

## 8. Cómo se conecta con el resto del curso

| Sesión | Conexión |
|---|---|
| **S01** | La matriz de derechos de decisión de Weill & Ross, implementada en `gobierno.py` |
| **S02** | El ciclo EDM completo: what-if (Evaluar) → autorización (Dirigir) → veredicto (Monitorear). La bitácora es evidencia directa para el Taller 1 |
| **S09** | Planta y gemelo separables en dos máquinas sin tocar lógica: la frontera borde/nube |
| **S11** | Transporte MQTT con nombrado Sparkplug B y UNS |
| **S12** | El laboratorio en sí: fidelidad, sincronización y criterios de validación |
| **S13** | El OEE que produce alimenta el Lab 8, con datos que los estudiantes generaron |
| **S14–15** | Broker sin autenticar, CORS abierto, y un transmisor mal calibrado que mueve el proceso |
