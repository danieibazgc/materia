// src/features/auth/components/AuthModal.tsx
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuth } from '../hooks/useAuth';
import type { LoginFormData, RegisterFormData } from '../types';

type AuthTab = 'login' | 'register';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: AuthTab;
  onSuccess: (message: string) => void;
}

const AuthModal = ({ isOpen, onClose, initialTab = 'login', onSuccess }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<AuthTab>(initialTab);
  const { login, register, isLoading, errors } = useAuth();

  const handleLogin = async (data: LoginFormData): Promise<boolean> => {
    const success = await login(data);
    if (success) {
      onClose();
      onSuccess('¡Bienvenido de vuelta!');
    }
    return success;
  };

  const handleRegister = async (data: RegisterFormData): Promise<boolean> => {
    const success = await register(data);
    if (success) {
      onClose();
      onSuccess('¡Cuenta creada exitosamente!');
    }
    return success;
  };

  const title = activeTab === 'login' ? 'Iniciar sesión' : 'Crear cuenta';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="sm">
      {activeTab === 'login' ? (
        <LoginForm
          onSubmit={handleLogin}
          onSwitchToRegister={() => setActiveTab('register')}
          isLoading={isLoading}
          errors={errors}
        />
      ) : (
        <RegisterForm
          onSubmit={handleRegister}
          onSwitchToLogin={() => setActiveTab('login')}
          isLoading={isLoading}
          errors={errors}
        />
      )}
    </Modal>
  );
};

export default AuthModal;
