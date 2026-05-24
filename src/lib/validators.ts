// src/lib/validators.ts
// Funciones puras de validación. Sin side effects. Sin dependencias externas.
// Retornan string con mensaje de error o null si es válido.

import { VALIDATION } from './constants';

export type ValidationResult = string | null;

export const validators = {
  /**
   * Valida que un email tenga formato correcto según RFC 5322 simplificado.
   */
  email(value: string): ValidationResult {
    if (!value.trim()) return 'El email es obligatorio';
    if (!VALIDATION.EMAIL_REGEX.test(value)) return 'Ingresa un email válido';
    if (value.length > VALIDATION.MAX_EMAIL_LENGTH) return 'El email es demasiado largo';
    return null;
  },

  /**
   * Valida longitud y caracteres de un nombre.
   */
  name(value: string, label = 'Este campo'): ValidationResult {
    if (!value.trim()) return `${label} es obligatorio`;
    if (value.trim().length < VALIDATION.MIN_NAME_LENGTH)
      return `${label} debe tener al menos ${VALIDATION.MIN_NAME_LENGTH} caracteres`;
    if (value.length > VALIDATION.MAX_NAME_LENGTH)
      return `${label} no puede superar ${VALIDATION.MAX_NAME_LENGTH} caracteres`;
    return null;
  },

  /**
   * Valida una contraseña. Mínimo 8 caracteres, al menos una mayúscula y un número.
   */
  password(value: string): ValidationResult {
    if (!value) return 'La contraseña es obligatoria';
    if (value.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
    if (!/[A-Z]/.test(value)) return 'Debe incluir al menos una letra mayúscula';
    if (!/[0-9]/.test(value)) return 'Debe incluir al menos un número';
    return null;
  },

  /**
   * Valida que dos contraseñas sean iguales.
   */
  passwordMatch(password: string, confirm: string): ValidationResult {
    if (password !== confirm) return 'Las contraseñas no coinciden';
    return null;
  },

  /**
   * Valida un texto de área libre (description, message).
   */
  textarea(value: string, label = 'La descripción', maxLength = 500): ValidationResult {
    if (!value.trim()) return `${label} es obligatoria`;
    if (value.length > maxLength) return `${label} no puede superar ${maxLength} caracteres`;
    return null;
  },

  /**
   * Valida un número positivo con unidad (ej. "200m", "5000 unidades").
   */
  quantity(value: string): ValidationResult {
    if (!value.trim()) return 'La cantidad es obligatoria';
    if (!/^\d+[\w\s]*$/.test(value.trim())) return 'Ingresa una cantidad válida (ej: 200m, 5000 unidades)';
    return null;
  },
} as const;
