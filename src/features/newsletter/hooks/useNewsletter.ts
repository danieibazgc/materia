// src/features/newsletter/hooks/useNewsletter.ts
import { useState } from 'react';
import { validators } from '@/lib/validators';
import { sanitizeInput } from '@/lib/sanitize';

export function useNewsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validators.email(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: POST /api/newsletter con email sanitizado
      const sanitized = sanitizeInput(email);
      console.log('[Newsletter] Suscribiendo:', sanitized);
      await new Promise((r) => setTimeout(r, 600));
      setIsSubscribed(true);
      setEmail('');
    } catch {
      setError('Error al suscribirte. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { email, error, isSubmitting, isSubscribed, handleChange, subscribe };
}
