// src/features/auth/hooks/useAuth.ts
// OWASP A07: Nunca almacenar passwords en el cliente.
// OWASP A02: No guardar tokens de sesión en localStorage (solo sessionStorage o cookies HttpOnly).
// Este hook simula la autenticación; en producción llamaría a un API segura.

import { useState } from 'react';
import type { AuthUser, LoginFormData, RegisterFormData } from '../types';
import { validators } from '@/lib/validators';
import { sanitizeInput } from '@/lib/sanitize';

type AuthError = Record<string, string>;

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<AuthError>({});

  /**
   * Valida y procesa el login.
   * En producción: llamar a POST /api/auth/login con HTTPS.
   * @returns true si el login fue exitoso
   */
  const login = async (data: LoginFormData): Promise<boolean> => {
    const newErrors: AuthError = {};

    const emailError = validators.email(data.email);
    if (emailError) newErrors.email = emailError;

    if (!data.password) newErrors.password = 'La contraseña es obligatoria';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // TODO: Reemplazar con fetch real al backend
      await simulateApiDelay(800);

      setUser({
        id: 'user-001',
        name: sanitizeInput('Usuario Demo'),
        email: sanitizeInput(data.email),
        role: 'comprador',
      });

      return true;
    } catch {
      setErrors({ general: 'Error al iniciar sesión. Intenta de nuevo.' });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Valida y procesa el registro.
   * @returns true si el registro fue exitoso
   */
  const register = async (data: RegisterFormData): Promise<boolean> => {
    const newErrors: AuthError = {};

    const nameError = validators.name(data.name, 'El nombre');
    if (nameError) newErrors.name = nameError;

    const emailError = validators.email(data.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validators.password(data.password);
    if (passwordError) newErrors.password = passwordError;

    const confirmError = validators.passwordMatch(data.password, data.confirmPassword);
    if (confirmError) newErrors.confirmPassword = confirmError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await simulateApiDelay(1000);

      setUser({
        id: 'user-' + Date.now(),
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        role: data.role,
      });

      return true;
    } catch {
      setErrors({ general: 'Error al registrarte. Intenta de nuevo.' });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => setUser(null);

  return { user, isLoading, errors, login, register, logout };
}

/** Simula latencia de red. Eliminar cuando exista backend real. */
function simulateApiDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
