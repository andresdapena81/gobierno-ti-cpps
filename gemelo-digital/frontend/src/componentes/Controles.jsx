/*
  Cabecera e inyección de fallas — la consola del docente.

  La inyección de fallas actúa sobre la PLANTA, nunca sobre el gemelo. Es una
  distinción que conviene repetir en voz alta cada vez que se pulsa un botón:
  se está rompiendo el proceso, no manipulando el diagnóstico. Si el gemelo
  acierta, es porque lo dedujo.
*/

import { api } from "../api.js";

export function Encabezado({ sistema, conectado, onAccion }) {
  const vel = sistema?.velocidad ?? 1;
  return (
    <div className="cabecera">
      <div>
        <div className="titulo">
          GEMELO <span>DIGITAL</span> · línea de llenado y tapado
        </div>
        <div className="curso">
          GOBIERNO DE TI Y SISTEMAS CIBER-FÍSICOS DE PRODUCCIÓN · USB BELLO ·
          LAB 7 (S12)
        </div>
      </div>

      <div className="controles">
        <span className="chip">
          <i className={`punto ${conectado ? "vivo" : "muerto"}`} />
          {conectado ? "conectado" : "sin conexión"}
        </span>
        <span className="chip">transporte: {sistema?.transporte ?? "?"}</span>

        {[1, 2, 4, 8].map((v) => (
          <button key={v} className={vel === v ? "activo" : ""}
                  onClick={() => api.velocidad(v).then(onAccion)}>
            {v}×
          </button>
        ))}
        <button className={sistema?.pausado ? "activo" : ""}
                onClick={() => api.pausa().then(onAccion)}>
          {sistema?.pausado ? "▶ SEGUIR" : "❚❚ PAUSA"}
        </button>
        <button className="peligro" onClick={() => api.reiniciar().then(onAccion)}>
          ⟲ TURNO NUEVO
        </button>
      </div>
    </div>
  );
}

export function PanelFallas({ fallas, activa, onAccion }) {
  return (
    <div className="tarjeta">
      <h2>Inyección de fallas · en la planta</h2>
      <p className="sub">
        Esto rompe el <strong>proceso</strong>, no el gemelo. El gemelo no recibe
        aviso de nada: si acierta el diagnóstico, es porque lo dedujo de los
        residuales.
      </p>
      <div className="fallas">
        {(fallas ?? []).map((f) => (
          <button key={f.clave}
                  className={`falla-btn ${activa === f.clave ? "activo" : ""}`}
                  onClick={() => api.inyectarFalla(f.clave).then(onAccion)}>
            <div className="nom">{f.nombre}</div>
            <div className="ef">{f.efecto}</div>
            <div className="comp">afecta: {f.componente_oee}</div>
          </button>
        ))}
      </div>
      <p className="sub" style={{ marginTop: 10, marginBottom: 0 }}>
        Las fallas progresivas (válvula, bomba) tardan minutos en manifestarse.
        Subí la velocidad a 4× u 8× para verlas dentro de una clase.
      </p>
    </div>
  );
}
