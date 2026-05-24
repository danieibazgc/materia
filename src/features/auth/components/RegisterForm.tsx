// src/features/auth/components/RegisterForm.tsx
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { ROLES } from '@/lib/constants';
import type { RegisterFormData } from '../types';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<boolean>;
  onSwitchToLogin: () => void;
  isLoading: boolean;
  errors: Record<string, string>;
}

const RegisterForm = ({ onSubmit, onSwitchToLogin, isLoading, errors }: RegisterFormProps) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'comprador',
  });

  const handleChange = (field: keyof RegisterFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        label="Nombre completo"
        type="text"
        value={formData.name}
        onChange={handleChange('name')}
        error={errors.name}
        required
        autoComplete="name"
        placeholder="María García"
        maxLength={100}
      />

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

      {/* Selector de rol — define permisos futuros */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Soy <span className="text-red-500 ml-1" aria-hidden="true">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: ROLES.BUYER, label: 'Comprador / Marca' },
            { value: ROLES.SUPPLIER, label: 'Proveedor' },
          ].map((option) => (
            <label
              key={option.value}
              className={`
                flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors text-sm
                ${formData.role === option.value
                  ? 'border-brand bg-brand-light text-brand-dark font-medium'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'}
              `}
            >
              <input
                type="radio"
                name="role"
                value={option.value}
                checked={formData.role === option.value}
                onChange={handleChange('role')}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <Input
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={handleChange('password')}
        error={errors.password}
        required
        autoComplete="new-password"
        placeholder="Mínimo 8 caracteres"
        hint="Al menos 8 caracteres, una mayúscula y un número"
      />

      <Input
        label="Confirmar contraseña"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        error={errors.confirmPassword}
        required
        autoComplete="new-password"
        placeholder="Repite tu contraseña"
      />

      <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
        {isLoading ? 'Creando cuenta...' : 'Crear cuenta gratis'}
      </Button>

      <p className="text-center text-sm text-gray-500">
        ¿Ya tienes cuenta?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-brand font-medium underline hover:no-underline"
        >
          Inicia sesión
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
