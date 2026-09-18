# Laboratorios de código con pruebas

Ejercicios de programación con **pruebas automáticas** (pytest). Cada lab trae un
`andamiaje/` con `TODO` para que lo completes y una `solucion/` de referencia.
El patrón es siempre el mismo:

```bash
python -m pytest -q   # corre TU versión (andamiaje): deben FALLAR hasta que completes los TODO
```
> La **solución de referencia** (`solucion/`) la conserva el docente y no se distribuye con este
> repositorio. Quien la tenga puede contrastar con `IMPL=solucion python -m pytest -q`
> (Windows PowerShell: `$env:IMPL="solucion"; python -m pytest -q`).

## Labs disponibles

| Lab | Sesión | Tema | Pruebas |
|-----|--------|------|---------|
| [`s10-opcua`](s10-opcua/) | S10 | OPC UA: NodeId, seguridad, AddressSpace | 11 |
| [`s11-mqtt`](s11-mqtt/)   | S11 | MQTT/Sparkplug y Namespace Unificado    | 8  |
| [`s13-oee`](s13-oee/)     | S13 | OEE (Eficiencia Global del Equipo)      | 7  |

El **gemelo digital** (demo ejecutable con backend) está en
[`../../gemelo-digital`](../../gemelo-digital) con sus propias instrucciones.

## Requisitos

- Python 3.10+ y `pytest` (`pip install pytest`).
- Sin dependencias de hardware ni brokers: toda la lógica es pura y local.
