// src/lib/sanitize.ts
// Escapa caracteres HTML peligrosos antes de mostrar datos del usuario en el DOM.
// Se usa en cualquier componente que renderice texto proveniente de formularios.

const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
};

/**
 * Sanitiza una cadena escapando caracteres HTML especiales.
 * @param input - Texto a sanitizar
 * @returns Texto seguro para mostrar en el DOM
 */
export function sanitizeHtml(input: string): string {
  return input.replace(/[&<>"'/]/g, (char) => HTML_ESCAPE_MAP[char] ?? char);
}

/**
 * Sanitiza un input eliminando caracteres de control y espacios extremos.
 * @param input - Texto crudo del formulario
 * @returns Texto limpio
 */
export function sanitizeInput(input: string): string {
  // eslint-disable-next-line no-control-regex
  return input.replace(/[\x00-\x1F\x7F]/g, '').trim();
}
