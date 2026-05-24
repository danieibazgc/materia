// src/components/ui/Input.tsx
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  hint?: string;
}

/**
 * Input accesible con label, error y hint integrados.
 * Vincula label e input con id generado automáticamente para asegurar
 * accesibilidad (WCAG 1.3.1).
 */
const Input = ({ label, error, hint, id, className = '', ...rest }: InputProps) => {
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  const borderClass = error
    ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
    : 'border-gray-200 focus:border-brand focus:ring-brand/20';

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
        {rest.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>

      <input
        {...rest}
        id={inputId}
        aria-describedby={[error ? errorId : '', hint ? hintId : ''].filter(Boolean).join(' ') || undefined}
        aria-invalid={error ? 'true' : undefined}
        className={`
          w-full px-3 py-2.5 text-sm bg-white border rounded-lg
          transition-colors duration-200 outline-none
          focus:ring-2 placeholder:text-gray-400
          disabled:bg-gray-50 disabled:cursor-not-allowed
          ${borderClass} ${className}
        `}
      />

      {hint && !error && (
        <p id={hintId} className="text-xs text-gray-400">{hint}</p>
      )}

      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500 flex items-center gap-1">
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
