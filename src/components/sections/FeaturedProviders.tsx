import { providers } from "@/data/providers";
import ProviderCard from "@/components/ui/ProviderCard";

const FeaturedProviders = () => {
  return (
    <section
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProviders;
