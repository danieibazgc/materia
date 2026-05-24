// src/features/newsletter/components/NewsletterForm.tsx
import { Mail, CheckCircle } from 'lucide-react';
import { useNewsletter } from '../hooks/useNewsletter';

/**
 * Formulario de suscripción al newsletter.
 * OWASP A03: maxLength explícito en el input para limitar datos enviados.
 * Accesibilidad: aria-live para anunciar el estado de éxito.
 */
const NewsletterForm = () => {
  const { email, error, isSubmitting, isSubscribed, handleChange, subscribe } = useNewsletter();

  if (isSubscribed) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-3 rounded-lg"
      >
        <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        ¡Listo! Te notificaremos las novedades de Materia.
      </div>
    );
  }

  return (
    <form onSubmit={subscribe} noValidate>
      <label htmlFor="newsletter-email" className="text-sm font-medium text-gray-700 block mb-2">
        Novedades de Materia
      </label>
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="tu@email.com"
            maxLength={254}
            autoComplete="email"
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? 'newsletter-error' : undefined}
            className={`
              w-full pl-9 pr-3 py-2.5 text-sm bg-white border rounded-lg
              focus:outline-none focus:ring-2 transition-colors
              ${error ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}
            `}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2.5 text-sm bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors disabled:opacity-70 whitespace-nowrap"
        >
          {isSubmitting ? '...' : 'Suscribirse'}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" role="alert" className="text-xs text-red-500 mt-1">
          ⚠ {error}
        </p>
      )}
      <p className="text-xs text-gray-400 mt-1">Sin spam. Cancela cuando quieras.</p>
    </form>
  );
};

export default NewsletterForm;
