// vite.config.ts — con cabeceras de seguridad OWASP
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    headers: {
      // Evita clickjacking
      'X-Frame-Options': 'DENY',
      // Previene MIME sniffing
      'X-Content-Type-Options': 'nosniff',
      // Política de referencia segura
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Restringe features del navegador
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      // Content Security Policy básica para desarrollo
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",  // unsafe-inline requerido por Vite HMR en dev
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob:",
        "connect-src 'self' ws: wss:",
      ].join('; '),
    },
  },
});
