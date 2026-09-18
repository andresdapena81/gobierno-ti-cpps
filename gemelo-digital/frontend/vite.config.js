import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Puerto del backend. Si el 8000 ya está ocupado en tu equipo (pasa más de
// lo que uno espera), levantá la API en otro y avisale al front:
//
//     python main.py --api-puerto 8010          (en backend/)
//     API_PUERTO=8010 npm run dev               (en frontend/)
//
// En PowerShell:  $env:API_PUERTO=8010; npm run dev
const PUERTO_API = process.env.API_PUERTO || "8000";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Se usa proxy en vez de rutas absolutas para que el front no tenga que
    // saber dónde vive la API — el mismo desacoplamiento que se predica en
    // la capa de transporte del backend.
    proxy: {
      "/api": { target: `http://localhost:${PUERTO_API}`, changeOrigin: true },
      "/ws": { target: `ws://localhost:${PUERTO_API}`, ws: true },
    },
  },
});
