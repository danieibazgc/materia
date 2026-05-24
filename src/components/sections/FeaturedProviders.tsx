import { useState } from "react";
import ProviderCard from "@/components/ui/ProviderCard";
import ProviderDetailModal from "@/features/catalog/components/ProviderDetailModal";
import type { Provider } from "@/types";

interface FeaturedProvidersProps {
  providers: Provider[];
  isFiltering: boolean;
  resultCount: number;
  onShowToast: (message: string) => void;
}

const FeaturedProviders = ({ providers, isFiltering, resultCount, onShowToast }: FeaturedProvidersProps) => {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const hasResults = providers.length > 0;

  return (
    <section
      id="proveedores"
      className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="featured-providers-title"
    >
      <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
        <h2
          id="featured-providers-title"
          className="text-3xl font-medium text-gray-900 tracking-tight"
        >
          Proveedores destacados
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-brand hover:underline"
        >
          Ver todos →
        </a>
      </div>

      {isFiltering && (
        <p className="text-sm text-gray-500 mb-4">
          {hasResults
            ? `${resultCount} proveedor${resultCount !== 1 ? 'es' : ''} encontrado${resultCount !== 1 ? 's' : ''}`
            : 'Sin resultados para tu búsqueda'}
        </p>
      )}

      {!hasResults && isFiltering && (
        <div className="text-center py-16 border border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-400 mb-2">No encontramos proveedores para esa búsqueda.</p>
          <p className="text-sm text-gray-300">Intenta con otro material o ciudad.</p>
        </div>
      )}

      {hasResults && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onSelect={setSelectedProvider}
            />
          ))}
        </div>
      )}

      <ProviderDetailModal
        provider={selectedProvider}
        isOpen={selectedProvider !== null}
        onClose={() => setSelectedProvider(null)}
        onContactSent={() => onShowToast('¡Mensaje enviado! El proveedor te contactará pronto.')}
      />
    </section>
  );
};

export default FeaturedProviders;
