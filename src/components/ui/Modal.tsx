// src/components/ui/Modal.tsx
import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
} as const;

/**
 * Modal accesible con:
 * - Cierre con tecla Escape (OWASP UX safe)
 * - Trap de foco dentro del modal (WCAG 2.1 SC 2.1.2)
 * - role=dialog y aria-modal para lectores de pantalla
 * - Scroll bloqueado en body mientras está abierto
 */
const Modal = ({ isOpen, onClose, title, children, maxWidth = 'md' }: ModalProps) => {
  const titleId = `modal-title-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';

    // Cerrar con Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    // Foco inicial en el botón de cierre
    firstFocusableRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-hidden="false"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenedor del modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`
          relative bg-white rounded-xl shadow-2xl w-full
          ${maxWidthClasses[maxWidth]}
          max-h-[90vh] overflow-y-auto
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 id={titleId} className="text-lg font-medium text-gray-900">
            {title}
          </h2>
          <button
            ref={firstFocusableRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
