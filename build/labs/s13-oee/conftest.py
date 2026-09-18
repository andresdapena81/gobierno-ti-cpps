# Selecciona la implementación a probar según la variable de entorno IMPL.
#   IMPL=solucion pytest   -> deben PASAR todas las pruebas
#   IMPL=andamiaje pytest  -> deben FALLAR hasta completar los TODO
import os, sys
_impl = os.environ.get("IMPL", "andamiaje")
sys.path.insert(0, os.path.join(os.path.dirname(__file__), _impl))
