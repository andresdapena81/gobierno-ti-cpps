"""
Prueba de humo — corre la planta y el gemelo sin API ni front.

Sirve para dos cosas:
  · comprobar que la física y el diagnóstico funcionan tras un cambio;
  · mostrar en clase, sin interfaz de por medio, que el gemelo detecta
    cada falla y con qué evidencia lo hace.

    python prueba_rapida.py
"""

from __future__ import annotations

from planta.proceso import LineaLlenado, Nominal, Falla
from gemelo.modelo import Creencia
from gemelo.sombra import GemeloDigital
from gemelo import whatif

DT = 0.05
PERIODO = 4


def crear():
    nom = Nominal()
    linea = LineaLlenado(nom)
    gem = GemeloDigital(Creencia(
        cv_nominal=nom.cv_valvula, cv_estimado=nom.cv_valvula,
        area_tanque=nom.area_tanque, nivel_sp=nom.nivel_sp,
        k_control=nom.k_control, caudal_bomba_max=nom.caudal_bomba_max,
        volumen_objetivo=nom.volumen_objetivo, tolerancia=nom.tolerancia,
        t_set=nom.t_set, t_set_nominal=nom.t_set, t_tapado=nom.t_tapado,
        t_indexado=nom.t_indexado, nivel_min_operativo=nom.nivel_min_operativo,
    ))
    return linea, gem


def correr(linea, gem, segundos: float):
    pasos = int(segundos / DT)
    for i in range(pasos):
        linea.paso(DT)
        if i % PERIODO == 0:
            gem.observar(linea.telemetria().dict(), DT * PERIODO)


def informe(titulo, linea, gem):
    m = gem.metricas
    print(f"\n{'─' * 74}\n  {titulo}\n{'─' * 74}")
    print(f"  OEE {m.oee*100:5.1f} %   "
          f"D {m.disponibilidad*100:5.1f} %  "
          f"P {m.desempeno*100:5.1f} %  "
          f"C {m.calidad*100:5.1f} %")
    print(f"  botellas {m.botellas_totales:4d}   "
          f"buenas {m.botellas_buenas:4d}   rechazos {m.botellas_rechazadas:4d}")
    print(f"  Cv  real {linea.cv_real:.4f}  |  estimado {gem.c.cv_estimado:.4f}"
          f"  |  placa {gem.c.cv_nominal:.4f}   (desgaste est. {gem.c.desgaste_pct:.1f} %)")
    salto = (f"SÍ ({gem.analizador.salto_magnitud:+.3f} m en "
             f"t={gem.analizador.salto_t:.0f} s)"
             if gem.analizador.salto_detectado else "no")
    print(f"  nivel medido {gem.ultima_telemetria['nivel_tanque']:.3f} m  "
          f"(real {linea.nivel_real:.3f} m)   bomba máx {linea.q_bomba_max:.3f} L/s")
    print(f"  residual volumen {gem.analizador.r_volumen_ewma:+.4f} L   "
          f"balance {gem.analizador.r_balance_ewma:+.5f} m   salto enclavado: {salto}")
    print(f"  calidad ventana móvil: {gem.ventana.calidad*100:.1f} %   "
          f"volumen medio {gem.ventana.volumen_medio:.3f} L")
    print("  diagnóstico del gemelo:")
    for h in gem.diagnostico():
        print(f"     {h['confianza']*100:5.1f} %  {h['causa']}")
        print(f"             └─ {h['evidencia']}")


def escenario(nombre, falla, calentamiento=200.0, duracion=600.0):
    linea, gem = crear()
    correr(linea, gem, calentamiento)
    linea.inyectar(falla)
    correr(linea, gem, duracion)
    informe(nombre, linea, gem)
    return linea, gem


if __name__ == "__main__":
    print("\n╔" + "═" * 72 + "╗")
    print("║  PRUEBA DE HUMO · gemelo digital de línea de llenado" + " " * 20 + "║")
    print("╚" + "═" * 72 + "╝")

    # --- 1 · operación nominal -----------------------------------------
    linea, gem = crear()
    correr(linea, gem, 800.0)
    informe("1 · OPERACIÓN NOMINAL  (se espera OEE alto y sin anomalía)", linea, gem)

    # --- 2 · cada falla ------------------------------------------------
    escenario("2 · DESGASTE DE VÁLVULA  (se espera: calidad ↓, Cv estimado sigue al real)",
              Falla.DESGASTE_VALVULA)
    escenario("3 · BOMBA DEGRADADA  (se espera: nivel ↓, balance de masa negativo)",
              Falla.BOMBA_DEGRADADA)
    escenario("4 · ATASCO DE TAPADORA  (se espera: disponibilidad ↓, residuales limpios)",
              Falla.ATASCO_TAPADORA)
    lin_s, gem_s = escenario(
        "5 · TRANSMISOR DESVIADO  (se espera: violación de balance de masa)",
        Falla.SENSOR_DESVIADO, duracion=300.0)

    # --- 3 · what-if sobre la planta desgastada -------------------------
    linea, gem = crear()
    correr(linea, gem, 200.0)
    linea.inyectar(Falla.DESGASTE_VALVULA)
    correr(linea, gem, 900.0)

    nivel = gem.ultima_telemetria["nivel_tanque"]
    rec = whatif.recomendar(gem.c, nivel, horizonte_s=1800.0,
                            disponibilidad_supuesta=gem.metricas.disponibilidad)
    print(f"\n{'─' * 74}\n  6 · WHAT-IF sobre la línea desgastada\n{'─' * 74}")
    print(f"  consigna actual      t_set = {rec['actual']['t_set']:.2f} s"
          f"   →  OEE proyectado {rec['actual']['oee']*100:.1f} %"
          f"   (calidad {rec['actual']['calidad']*100:.1f} %)")
    print(f"  consigna recomendada t_set = {rec['recomendado']['t_set']:.2f} s"
          f"   →  OEE proyectado {rec['recomendado']['oee']*100:.1f} %"
          f"   (calidad {rec['recomendado']['calidad']*100:.1f} %,"
          f" desempeño {rec['recomendado']['desempeno']*100:.1f} %)")
    print(f"  ganancia esperada: {rec['ganancia_oee']*100:+.1f} puntos de OEE"
          f"   · ¿vale la pena?: {'SÍ' if rec['vale_la_pena'] else 'no'}")
    print(f"  t_set que compensa exactamente el desgaste: "
          f"{rec['t_set_compensacion']:.2f} s")
    print("  ← nótese que el óptimo NO coincide con la compensación exacta:")
    print("     compensar del todo cuesta ciclo, y el ciclo es desempeño.")

    # --- 4 · aplicar la recomendación con el deterioro AÚN AVANZANDO ----
    t_nuevo = rec["recomendado"]["t_set"]
    linea.t_set = t_nuevo
    gem.c.t_set = t_nuevo
    calidad_antes = gem.ventana.calidad
    correr(linea, gem, 400.0)
    print(f"\n  7 · APLICAR la recomendación (t_set = {t_nuevo:.2f} s) con el "
          f"desgaste AÚN progresando:")
    print(f"     calidad (ventana móvil)  {calidad_antes*100:5.1f} %"
          f"  →  {gem.ventana.calidad*100:5.1f} %")
    print(f"     volumen medio            {gem.ventana.volumen_medio:.3f} L"
          f"   (objetivo {gem.c.volumen_objetivo:.2f} ± {gem.c.tolerancia:.2f})")
    print("     → el parche no alcanza: el Cv sigue cayendo mientras se aplica.")

    # --- 5 · el mismo ajuste, con el deterioro ESTABILIZADO -------------
    linea2, gem2 = crear()
    correr(linea2, gem2, 200.0)
    linea2.inyectar(Falla.DESGASTE_VALVULA)
    correr(linea2, gem2, 900.0)
    linea2.congelar_falla()          # el desgaste se estabiliza
    correr(linea2, gem2, 200.0)      # el gemelo termina de converger

    nivel2 = gem2.ultima_telemetria["nivel_tanque"]
    rec2 = whatif.recomendar(gem2.c, nivel2, horizonte_s=1800.0,
                             disponibilidad_supuesta=gem2.metricas.disponibilidad)
    t2 = rec2["recomendado"]["t_set"]
    cal_antes2 = gem2.ventana.calidad
    linea2.t_set = t2
    gem2.c.t_set = t2
    correr(linea2, gem2, 400.0)
    print(f"\n  8 · EL MISMO AJUSTE, con el desgaste ya estabilizado "
          f"(t_set = {t2:.2f} s):")
    print(f"     Cv real {linea2.cv_real:.4f}  |  estimado {gem2.c.cv_estimado:.4f}"
          f"   (error de estimación {abs(linea2.cv_real-gem2.c.cv_estimado)/linea2.cv_real*100:.2f} %)")
    print(f"     calidad (ventana móvil)  {cal_antes2*100:5.1f} %"
          f"  →  {gem2.ventana.calidad*100:5.1f} %")
    print(f"     volumen medio            {gem2.ventana.volumen_medio:.3f} L"
          f"   (objetivo {gem2.c.volumen_objetivo:.2f} ± {gem2.c.tolerancia:.2f})")
    print("     → aquí sí funciona. La diferencia entre 7 y 8 es la lección:")
    print("       compensar un deterioro progresivo es un parche, no una solución.")
    print()
