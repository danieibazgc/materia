// src/hooks/useToast.ts
import { useState, useCallback } from 'react';
import { TOAST_DURATION_MS } from '@/lib/constants';

export type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  id: number;
  message: string;
  type: ToastType;
}

/**
 * Hook para gestionar notificaciones temporales (toasts).
 * Retorna el estado del toast activo y la función para mostrarlo.
 */
export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Date.now();
    setToast({ id, message, type });

    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, TOAST_DURATION_MS);
  }, []);

  const hideToast = useCallback(() => setToast(null), []);

  return { toast, showToast, hideToast };
}
