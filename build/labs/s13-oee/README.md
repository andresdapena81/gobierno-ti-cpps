# Lab S13 — OEE (Eficiencia Global del Equipo)

Implementa el cálculo de **OEE = Disponibilidad × Rendimiento × Calidad** y
verifícalo con pruebas automáticas.

## Qué hay aquí

- `andamiaje/oee.py` — **tu punto de partida**: funciones con `TODO` que debes completar.
- `solucion/oee.py` — implementación de referencia (mírala solo si te atascas).
- `tests/test_oee.py` — pruebas. Ejemplo trabajado: turno de 480 min, 60 de
  paradas, 6000 unidades ideales, 5000 producidas, 4800 buenas → **OEE = 70 %**.
- `conftest.py` — elige qué implementación se prueba según `IMPL`.

## Cómo trabajar

```bash
# 1) Ve el reto (deben FALLAR): tu código aún tiene los TODO
python -m pytest -q

# 2) Completa los TODO en andamiaje/oee.py y repite hasta que TODO pase.
```

> La **solución de referencia** (`solucion/`) la conserva el docente; no viene en este repositorio.
> Si dispones de ella, contrástala con `IMPL=solucion python -m pytest -q`
> (en Windows PowerShell: `$env:IMPL="solucion"; python -m pytest -q`).

## Meta

Que `python -m pytest -q` pase al 100 %. Ahí habrás implementado el indicador
de planta más usado del mundo, con validaciones incluidas.
