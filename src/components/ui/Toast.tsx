// src/components/ui/Toast.tsx
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import type { ToastType } from '@/hooks/useToast';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const toastConfig = {
  success: {
    Icon: CheckCircle,
    containerClass: 'bg-green-50 border-green-200 text-green-800',
    iconClass: 'text-green-500',
  },
  error: {
    Icon: XCircle,
    containerClass: 'bg-red-50 border-red-200 text-red-800',
    iconClass: 'text-red-500',
  },
  info: {
    Icon: Info,
    containerClass: 'bg-blue-50 border-blue-200 text-blue-800',
    iconClass: 'text-blue-500',
  },
} as const;

/**
 * Notificación temporal accesible.
 * Usa role="status" para anuncios no disruptivos (success/info)
 * y role="alert" para errores (WCAG 4.1.3).
 */
const Toast = ({ message, type, onClose }: ToastProps) => {
  const { Icon, containerClass, iconClass } = toastConfig[type];
  const role = type === 'error' ? 'alert' : 'status';

  return (
    <div
      role={role}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className={`
        fixed bottom-6 right-6 z-50 flex items-start gap-3
        px-4 py-3 rounded-lg border shadow-lg max-w-sm
        animate-in slide-in-from-right-4 fade-in duration-300
        ${containerClass}
      `}
    >
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconClass}`} aria-hidden="true" />
      <p className="text-sm font-medium flex-1">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar notificación"
        className="p-0.5 rounded opacity-70 hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Toast;
