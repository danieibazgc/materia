// src/features/requests/components/RequestForm.tsx
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRequestForm } from '../hooks/useRequestForm';

interface RequestFormProps {
  onSuccess: () => void;
  onShowToast: (message: string) => void;
}

const urgencyOptions = [
  { value: 'alta', label: 'Urgente (< 1 semana)' },
  { value: 'media', label: 'Normal (2–4 semanas)' },
  { value: 'baja', label: 'Sin prisa (> 1 mes)' },
] as const;

const RequestForm = ({ onSuccess, onShowToast }: RequestFormProps) => {
  const { formData, errors, isSubmitting, updateField, submit } = useRequestForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submit();
    if (success) {
      onSuccess();
      onShowToast('¡Solicitud publicada! Los proveedores podrán responderte.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <Input
        label="¿Qué material buscas?"
        type="text"
        value={formData.title}
        onChange={updateField('title')}
        error={errors.title}
        required
        placeholder="Ej: Tela PET reciclada blanco óptico"
        maxLength={100}
        hint="Sé específico: tipo de fibra, color, acabado"
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Cantidad estimada"
          type="text"
          value={formData.quantity}
          onChange={updateField('quantity')}
          error={errors.quantity}
          required
          placeholder="Ej: 500m, 200kg"
          maxLength={50}
        />

        <Input
          label="Ubicación"
          type="text"
          value={formData.location}
          onChange={updateField('location')}
          error={errors.location}
          required
          placeholder="Ej: Lima, Perú"
          maxLength={100}
        />
      </div>

      {/* Select de urgencia */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Urgencia <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          value={formData.urgency}
          onChange={updateField('urgency')}
          className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        >
          {urgencyOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Textarea de descripción */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Descripción adicional <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={updateField('description')}
          rows={3}
          maxLength={500}
          placeholder="Especificaciones técnicas, uso final, condiciones especiales..."
          aria-invalid={errors.description ? 'true' : undefined}
          className={`
            w-full px-3 py-2.5 text-sm bg-white border rounded-lg resize-none
            focus:outline-none focus:ring-2 transition-colors
            ${errors.description ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}
          `}
        />
        {errors.description && (
          <p role="alert" className="text-xs text-red-500">⚠ {errors.description}</p>
        )}
        <p className="text-xs text-gray-400 text-right">{formData.description.length}/500</p>
      </div>

      <Input
        label="Tu email de contacto"
        type="email"
        value={formData.contactEmail}
        onChange={updateField('contactEmail')}
        error={errors.contactEmail}
        required
        autoComplete="email"
        placeholder="proveedor@tuempresa.com"
        maxLength={254}
        hint="Solo visible para proveedores verificados"
      />

      <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
        {isSubmitting ? 'Publicando...' : 'Publicar solicitud'}
      </Button>
    </form>
  );
};

export default RequestForm;
