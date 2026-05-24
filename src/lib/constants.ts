// src/lib/constants.ts
// Constantes globales de validación, límites y mensajes de error.
// Centralizadas aquí para facilitar ajustes sin buscar en todo el código.

export const VALIDATION = {
  EMAIL_REGEX: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
  MAX_EMAIL_LENGTH: 254,       // RFC 5321
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,
  MAX_SEARCH_LENGTH: 100,
  DEBOUNCE_MS: 300,
} as const;

export const TOAST_DURATION_MS = 4000;

export const URGENCY_LABELS: Record<string, string> = {
  alta: 'Urgente',
  media: 'Normal',
  baja: 'Baja',
};

export const ROLES = {
  BUYER: 'comprador',
  SUPPLIER: 'proveedor',
} as const;
