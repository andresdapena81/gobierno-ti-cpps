# Lab S11 — MQTT, Sparkplug y UNS

Implementa la lógica del **Namespace Unificado (UNS)** y de la mensajería
industrial MQTT/Sparkplug, sin necesidad de un broker real.

## Qué hay aquí

- `andamiaje/uns.py` — **tu punto de partida**: funciones con `TODO`.
- `solucion/uns.py` — implementación de referencia.
- `tests/test_uns.py` — pruebas.
- `conftest.py` — elige la implementación según `IMPL`.

## Lo que vas a construir

- `construir_topico(...)` — arma un tópico UNS de 5 niveles (ISA-95):
  `empresa/sitio/area/linea/metrica`, normalizado a minúsculas.
- `validar_topico(t)` — valida estructura y forma del tópico.
- `coincide(suscripcion, topico)` — coincidencia de suscripción con comodines
  MQTT: `+` (un nivel) y `#` (multinivel, solo al final).
- `estado_sparkplug(eventos)` — a partir de eventos *BIRTH*/*DEATH*, devuelve
  qué dispositivos están **vivos**.

## Cómo trabajar

```bash
python -m pytest -q   # corre TU versión (andamiaje): deben FALLAR al inicio
# ...completa andamiaje/uns.py hasta que TODO pase...
```

> La **solución de referencia** (`solucion/`) la conserva el docente; no viene en este repositorio.
> Si dispones de ella, contrástala con `IMPL=solucion python -m pytest -q`
> (en Windows PowerShell: `$env:IMPL="solucion"; python -m pytest -q`).
