// src/components/ui/ErrorBoundary.tsx
import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary para capturar errores de renderizado en el árbol de componentes.
 * Previene que un error en una feature colapse toda la aplicación.
 * Clean code: solo maneja errores, no lógica de UI compleja.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // En producción, enviar a servicio de logging (Sentry, etc.)
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div role="alert" className="p-8 text-center text-gray-500">
          <p className="font-medium">Algo salió mal en esta sección.</p>
          <button
            type="button"
            className="mt-4 text-sm text-brand underline"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Intentar de nuevo
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
