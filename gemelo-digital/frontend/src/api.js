// Cliente de la API. Todo pasa por el proxy de Vite (ver vite.config.js),
// así que el front no conoce ni el host ni el puerto del backend.

async function post(ruta, cuerpo) {
  const r = await fetch(ruta, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo ?? {}),
  });
  if (!r.ok) throw new Error(`${ruta} → HTTP ${r.status}`);
  return r.json();
}

async function get(ruta) {
  const r = await fetch(ruta);
  if (!r.ok) throw new Error(`${ruta} → HTTP ${r.status}`);
  return r.json();
}

export const api = {
  listarFallas: () => get("/api/fallas"),
  inyectarFalla: (falla) => post("/api/falla", { falla }),
  velocidad: (velocidad) => post("/api/velocidad", { velocidad }),
  pausa: () => post("/api/pausa"),
  reiniciar: () => post("/api/reiniciar"),

  // EVALUAR
  whatif: (horizonte_min) => post("/api/whatif", { horizonte_min }),

  // DIRIGIR
  derechos: () => get("/api/derechos"),
  autorizar: (cuerpo) => post("/api/autorizar", cuerpo),

  // MONITOREAR
  bitacora: () => get("/api/bitacora"),
};

/**
 * Conexión WebSocket con reintento automático.
 *
 * El reintento no es cosmético: durante una clase el backend se reinicia
 * varias veces, y una pantalla que se queda congelada sin avisar es peor
 * que una que dice claramente que perdió la conexión. Por eso `onEstado`
 * recibe también los cambios de conectividad.
 */
export function conectar(onDatos, onConexion) {
  let sock = null;
  let temporizador = null;
  let cerrado = false;

  const abrir = () => {
    if (cerrado) return;
    const proto = location.protocol === "https:" ? "wss:" : "ws:";
    sock = new WebSocket(`${proto}//${location.host}/ws`);

    sock.onopen = () => onConexion(true);
    sock.onmessage = (ev) => {
      try {
        onDatos(JSON.parse(ev.data));
      } catch {
        /* trama incompleta: se ignora y se espera la siguiente */
      }
    };
    sock.onclose = () => {
      onConexion(false);
      if (!cerrado) temporizador = setTimeout(abrir, 1200);
    };
    sock.onerror = () => sock && sock.close();
  };

  abrir();

  return () => {
    cerrado = true;
    clearTimeout(temporizador);
    if (sock) sock.close();
  };
}
