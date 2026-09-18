# Lab S10 — OPC UA (IEC 62541)

Implementa piezas centrales de OPC UA —el **NodeId**, la **selección de modo de
seguridad** y un **AddressSpace** navegable— sin servidor real, con lógica pura.

## Qué hay aquí

- `andamiaje/opcua_lab.py` — **tu punto de partida**: funciones/clase con `TODO`.
- `solucion/opcua_lab.py` — implementación de referencia.
- `tests/test_opcua.py` — pruebas.
- `conftest.py` — elige la implementación según `IMPL`.

## Lo que vas a construir

- `parse_nodeid(s)` / `construir_nodeid(ns, tipo, valor)` — ida y vuelta del
  identificador `ns=<n>;<t>=<valor>` (tipos `i`, `s`, `g`, `b`).
- `modo_seguridad(politica)` — política `None` → `None` (inseguro, solo pruebas);
  políticas reales (Basic256Sha256, Aes…) → `SignAndEncrypt`.
- `AddressSpace` — nodos con referencias jerárquicas y `browse()` de hijos.

## Cómo trabajar

```bash
python -m pytest -q   # corre TU versión (andamiaje): deben FALLAR al inicio
# ...completa andamiaje/opcua_lab.py hasta que TODO pase...
```

> La **solución de referencia** (`solucion/`) la conserva el docente; no viene en este repositorio.
> Si dispones de ella, contrástala con `IMPL=solucion python -m pytest -q`
> (en Windows PowerShell: `$env:IMPL="solucion"; python -m pytest -q`).
