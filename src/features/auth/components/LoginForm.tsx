// src/features/auth/components/LoginForm.tsx
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import type { LoginFormData } from '../types';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<boolean>;
  onSwitchToRegister: () => void;
  isLoading: boolean;
  errors: Record<string, string>;
}

const LoginForm = ({ onSubmit, onSwitchToRegister, isLoading, errors }: LoginFormProps) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {errors.general && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
          {errors.general}
        </p>
      )}

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
        error={errors.email}
        required
        autoComplete="email"
        placeholder="tu@email.com"
        maxLength={254}
      />

      <Input
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={handleChange('password')}
        error={errors.password}
        required
        autoComplete="current-password"
        placeholder="••••••••"
      />

      <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
        {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </Button>

      <p className="text-center text-sm text-gray-500">
        ¿No tienes cuenta?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-brand font-medium underline hover:no-underline"
        >
          Regístrate gratis
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
