// src/features/catalog/components/ProviderDetailModal.tsx
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Star, MapPin, Clock, Shield, Send } from 'lucide-react';
import type { Provider } from '@/types';
import { validators } from '@/lib/validators';
import { sanitizeInput } from '@/lib/sanitize';

interface ProviderDetailModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
  onContactSent: () => void;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const INITIAL_CONTACT: ContactForm = { name: '', email: '', message: '' };

const ProviderDetailModal = ({ provider, isOpen, onClose, onContactSent }: ProviderDetailModalProps) => {
  const [contact, setContact] = useState<ContactForm>(INITIAL_CONTACT);
  const [contactErrors, setContactErrors] = useState<Partial<ContactForm>>({});
  const [isSending, setIsSending] = useState(false);

  if (!provider) return null;

  const updateContact = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact((prev) => ({ ...prev, [field]: e.target.value }));
    if (contactErrors[field]) {
      setContactErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<ContactForm> = {};
    const nameError = validators.name(contact.name, 'Tu nombre');
    if (nameError) errors.name = nameError;

    const emailError = validators.email(contact.email);
    if (emailError) errors.email = emailError;

    const msgError = validators.textarea(contact.message, 'El mensaje', 300);
    if (msgError) errors.message = msgError;

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setIsSending(true);
    try {
      // TODO: POST /api/providers/{id}/contact con datos sanitizados
      const payload = {
        providerID: sanitizeInput(provider.id),
        senderName: sanitizeInput(contact.name),
        senderEmail: sanitizeInput(contact.email),
        message: sanitizeInput(contact.message),
      };
      console.log('[ProviderContact] Enviando:', payload);
      await new Promise((r) => setTimeout(r, 800));

      setContact(INITIAL_CONTACT);
      onContactSent();
      onClose();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={provider.name} maxWidth="lg">
      <div className="flex flex-col gap-6">
        {/* Imagen y header */}
        <div className="h-40 w-full rounded-lg overflow-hidden bg-gray-100">
          <img
            src={provider.image}
            alt={`Material de ${provider.name}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info básica */}
        <div className="flex flex-wrap gap-3 items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>{provider.city}</span>
            </div>
            {provider.responseTime && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Responde en {provider.responseTime}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            <span className="font-medium">{provider.rating}</span>
            <span className="text-gray-400">/ 5</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-600 leading-relaxed">{provider.description}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {provider.badges.map((badge) => (
            <Badge key={badge} variant="brand">
              <Shield className="w-3 h-3 mr-1 inline" aria-hidden="true" />
              {badge}
            </Badge>
          ))}
        </div>

        {/* Info de negocio */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg text-sm">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">MOQ</p>
            <p className="font-medium text-gray-900">{provider.moq}</p>
          </div>
          {provider.priceRange && (
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Precio ref.</p>
              <p className="font-medium text-gray-900">{provider.priceRange}</p>
            </div>
          )}
        </div>

        {/* Formulario de contacto */}
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Send className="w-4 h-4 text-brand" aria-hidden="true" />
            Contactar al proveedor
          </h3>
          <form onSubmit={handleContactSubmit} noValidate className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Tu nombre"
                type="text"
                value={contact.name}
                onChange={updateContact('name')}
                error={contactErrors.name}
                required
                placeholder="Tu nombre"
                maxLength={100}
              />
              <Input
                label="Tu email"
                type="email"
                value={contact.email}
                onChange={updateContact('email')}
                error={contactErrors.email}
                required
                placeholder="tu@marca.com"
                maxLength={254}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Mensaje <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea
                value={contact.message}
                onChange={updateContact('message')}
                rows={3}
                maxLength={300}
                placeholder="Cuéntale al proveedor qué necesitas: cantidad, specs, fecha de entrega..."
                className={`
                  w-full px-3 py-2.5 text-sm bg-white border rounded-lg resize-none
                  focus:outline-none focus:ring-2 transition-colors
                  ${contactErrors.message ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}
                `}
              />
              {contactErrors.message && (
                <p role="alert" className="text-xs text-red-500">⚠ {contactErrors.message}</p>
              )}
              <p className="text-xs text-gray-400 text-right">{contact.message.length}/300</p>
            </div>

            <Button type="submit" variant="primary" size="md" className="w-full">
              {isSending ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ProviderDetailModal;
