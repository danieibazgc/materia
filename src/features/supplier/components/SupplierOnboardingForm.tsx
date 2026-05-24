// src/features/supplier/components/SupplierOnboardingForm.tsx
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useSupplierForm } from '../hooks/useSupplierForm';

interface SupplierOnboardingFormProps {
  onSuccess: () => void;
  onShowToast: (message: string) => void;
}

const STEP_TITLES = {
  1: 'Datos de tu empresa',
  2: 'Tus materiales',
  3: 'Contacto',
};

const SupplierOnboardingForm = ({ onSuccess, onShowToast }: SupplierOnboardingFormProps) => {
  const {
    step, formData, errors, isSubmitting, MATERIAL_OPTIONS,
    updateField, toggleMaterial, nextStep, prevStep, submit,
  } = useSupplierForm();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submit();
    if (success) {
      onSuccess();
      onShowToast('¡Solicitud enviada! Te contactaremos en 24 horas para verificar tu cuenta.');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Indicador de pasos */}
      <div className="flex items-center gap-2">
        {([1, 2, 3] as const).map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`
              w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors
              ${s === step ? 'bg-brand text-white' : s < step ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}
            `}>
              {s < step ? '✓' : s}
            </div>
            {s < 3 && <div className={`flex-1 h-0.5 ${s < step ? 'bg-brand' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <h3 className="text-base font-medium text-gray-900">{STEP_TITLES[step]}</h3>

      {/* Paso 1 */}
      {step === 1 && (
        <form onSubmit={handleNext} noValidate className="flex flex-col gap-4">
          <Input
            label="Nombre de la empresa"
            type="text"
            value={formData.companyName}
            onChange={updateField('companyName')}
            error={errors.companyName}
            required
            placeholder="Ej: EcoFiber Perú S.A.C."
            maxLength={100}
          />
          <Input
            label="RUC"
            type="text"
            value={formData.ruc}
            onChange={updateField('ruc')}
            error={errors.ruc}
            required
            placeholder="20123456789"
            maxLength={11}
            hint="11 dígitos sin guiones"
          />
          <Input
            label="Ciudad"
            type="text"
            value={formData.city}
            onChange={updateField('city')}
            error={errors.city}
            required
            placeholder="Lima, Perú"
            maxLength={100}
          />
          <Input
            label="Sitio web (opcional)"
            type="url"
            value={formData.website}
            onChange={updateField('website')}
            placeholder="https://tuempresa.com"
            maxLength={200}
          />
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Continuar →
          </Button>
        </form>
      )}

      {/* Paso 2 */}
      {step === 2 && (
        <form onSubmit={handleNext} noValidate className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Tipos de material que ofreces <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {MATERIAL_OPTIONS.map((material) => (
                <label
                  key={material}
                  className={`
                    flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-colors
                    ${formData.materialTypes.includes(material)
                      ? 'border-brand bg-brand-light text-brand-dark font-medium'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'}
                  `}
                >
                  <input
                    type="checkbox"
                    checked={formData.materialTypes.includes(material)}
                    onChange={() => toggleMaterial(material)}
                    className="sr-only"
                  />
                  {material}
                </label>
              ))}
            </div>
            {errors.description && (
              <p role="alert" className="text-xs text-red-500">⚠ {errors.description}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Descripción de tu oferta <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={updateField('description')}
              rows={4}
              maxLength={500}
              placeholder="Describe tu catálogo de materiales, capacidad de producción, certificaciones y lo que te hace especial..."
              className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <p className="text-xs text-gray-400 text-right">{formData.description.length}/500</p>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" size="lg" className="flex-1" onClick={prevStep}>
              ← Atrás
            </Button>
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              Continuar →
            </Button>
          </div>
        </form>
      )}

      {/* Paso 3 */}
      {step === 3 && (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <Input
            label="Nombre del responsable"
            type="text"
            value={formData.contactName}
            onChange={updateField('contactName')}
            error={errors.contactName}
            required
            placeholder="Tu nombre completo"
            maxLength={100}
          />
          <Input
            label="Email de contacto"
            type="email"
            value={formData.contactEmail}
            onChange={updateField('contactEmail')}
            error={errors.contactEmail}
            required
            autoComplete="email"
            placeholder="contacto@tuempresa.com"
            maxLength={254}
          />
          <Input
            label="Teléfono (opcional)"
            type="tel"
            value={formData.contactPhone}
            onChange={updateField('contactPhone')}
            placeholder="+51 999 888 777"
            maxLength={20}
          />

          <div className="p-3 bg-brand-light rounded-lg text-sm text-brand-dark">
            ✓ Tu perfil será revisado por nuestro equipo en máximo 24 horas.
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" size="lg" className="flex-1" onClick={prevStep}>
              ← Atrás
            </Button>
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SupplierOnboardingForm;
