// src/features/requests/hooks/useRequestForm.ts
import { useState } from 'react';
import { validators } from '@/lib/validators';
import { sanitizeInput } from '@/lib/sanitize';

export interface RequestFormData {
  title: string;
  quantity: string;
  location: string;
  urgency: 'alta' | 'media' | 'baja';
  description: string;
  contactEmail: string;
}

const INITIAL_FORM: RequestFormData = {
  title: '',
  quantity: '',
  location: '',
  urgency: 'media',
  description: '',
  contactEmail: '',
};

type FormErrors = Partial<Record<keyof RequestFormData, string>>;

export function useRequestForm() {
  const [formData, setFormData] = useState<RequestFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof RequestFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Limpiar error del campo cuando el usuario empieza a corregir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const titleError = validators.name(formData.title, 'El título');
    if (titleError) newErrors.title = titleError;

    const quantityError = validators.quantity(formData.quantity);
    if (quantityError) newErrors.quantity = quantityError;

    const locationError = validators.name(formData.location, 'La ubicación');
    if (locationError) newErrors.location = locationError;

    const descError = validators.textarea(formData.description, 'La descripción');
    if (descError) newErrors.description = descError;

    const emailError = validators.email(formData.contactEmail);
    if (emailError) newErrors.contactEmail = emailError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (): Promise<boolean> => {
    if (!validate()) return false;

    setIsSubmitting(true);
    try {
      // TODO: POST /api/requests con los datos sanitizados
      const sanitizedData = {
        title: sanitizeInput(formData.title),
        quantity: sanitizeInput(formData.quantity),
        location: sanitizeInput(formData.location),
        urgency: formData.urgency,
        description: sanitizeInput(formData.description),
        contactEmail: sanitizeInput(formData.contactEmail),
      };

      console.log('[RequestForm] Enviando:', sanitizedData);
      await new Promise((r) => setTimeout(r, 900));

      setFormData(INITIAL_FORM);
      return true;
    } catch {
      setErrors({ title: 'Error al enviar. Intenta de nuevo.' });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, isSubmitting, updateField, submit };
}
