// src/features/supplier/hooks/useSupplierForm.ts
import { useState } from 'react';
import { validators } from '@/lib/validators';
import { sanitizeInput } from '@/lib/sanitize';

export type SupplierStep = 1 | 2 | 3;

interface SupplierFormData {
  // Paso 1: Empresa
  companyName: string;
  ruc: string;
  city: string;
  website: string;
  // Paso 2: Materiales
  materialTypes: string[];
  moqMin: string;
  priceRange: string;
  description: string;
  // Paso 3: Contacto
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const INITIAL_DATA: SupplierFormData = {
  companyName: '', ruc: '', city: '', website: '',
  materialTypes: [], moqMin: '', priceRange: '', description: '',
  contactName: '', contactEmail: '', contactPhone: '',
};

const MATERIAL_OPTIONS = [
  'Tela PET reciclada', 'Denim residual', 'Fibra industrial',
  'Alpaca reciclada', 'Cuero residual', 'Avíos y botones',
  'Algodón orgánico', 'Lana reciclada',
];

export function useSupplierForm() {
  const [step, setStep] = useState<SupplierStep>(1);
  const [formData, setFormData] = useState<SupplierFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof SupplierFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof SupplierFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleMaterial = (material: string) => {
    setFormData((prev) => ({
      ...prev,
      materialTypes: prev.materialTypes.includes(material)
        ? prev.materialTypes.filter((m) => m !== material)
        : [...prev.materialTypes, material],
    }));
  };

  const validateStep1 = (): boolean => {
    const newErrors: typeof errors = {};
    const companyError = validators.name(formData.companyName, 'El nombre de empresa');
    if (companyError) newErrors.companyName = companyError;
    if (!formData.ruc.trim()) newErrors.ruc = 'El RUC es obligatorio';
    if (formData.ruc.trim().length !== 11) newErrors.ruc = 'El RUC debe tener 11 dígitos';
    const cityError = validators.name(formData.city, 'La ciudad');
    if (cityError) newErrors.city = cityError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: typeof errors = {};
    if (formData.materialTypes.length === 0)
      newErrors.description = 'Selecciona al menos un tipo de material';
    const descError = validators.textarea(formData.description, 'La descripción');
    if (descError) newErrors.description = descError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: typeof errors = {};
    const nameError = validators.name(formData.contactName, 'El nombre de contacto');
    if (nameError) newErrors.contactName = nameError;
    const emailError = validators.email(formData.contactEmail);
    if (emailError) newErrors.contactEmail = emailError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (): boolean => {
    if (step === 1 && !validateStep1()) return false;
    if (step === 2 && !validateStep2()) return false;
    setStep((s) => Math.min(s + 1, 3) as SupplierStep);
    return true;
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as SupplierStep);

  const submit = async (): Promise<boolean> => {
    if (!validateStep3()) return false;
    setIsSubmitting(true);
    try {
      const sanitizedData = {
        companyName: sanitizeInput(formData.companyName),
        ruc: sanitizeInput(formData.ruc),
        city: sanitizeInput(formData.city),
        materialTypes: formData.materialTypes,
        description: sanitizeInput(formData.description),
        contactEmail: sanitizeInput(formData.contactEmail),
        contactName: sanitizeInput(formData.contactName),
      };
      console.log('[SupplierForm] Enviando:', sanitizedData);
      await new Promise((r) => setTimeout(r, 1200));
      return true;
    } catch {
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    step, formData, errors, isSubmitting, MATERIAL_OPTIONS,
    updateField, toggleMaterial, nextStep, prevStep, submit,
  };
}
