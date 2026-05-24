// src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

/**
 * Retrasa la actualización de un valor hasta que el usuario deja de escribir.
 * Previene búsquedas excesivas (rate limiting friendly, OWASP A10).
 * @param value - Valor a debounce
 * @param delay - Tiempo en ms (default: 300ms)
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
