import { Search } from "lucide-react";
import Button from "@/components/ui/Button";

interface HeroProps {
  query: string;
  onSearch: (value: string) => void;
}

const Hero = ({ query, onSearch }: HeroProps) => {
  const handleSearchSubmit = () => {
    document.getElementById('proveedores')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12"
      aria-labelledby="hero-title"
    >
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1
          id="hero-title"
          className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-gray-900"
        >
          Encuentra{" "}
          <span className="text-brand">materiales reciclados</span> para tu
          próxima colección
        </h1>
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
          Conecta directamente con proveedores de textiles sostenibles,
          excedentes de fábrica y fibras recicladas. Transparencia en cada hilo.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 max-w-xl">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand transition-colors"
              placeholder="Buscar 'denim 100% algodón'..."
              type="text"
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
              maxLength={100}
              autoComplete="off"
            />
          </div>
          <Button variant="primary" size="lg" onClick={handleSearchSubmit}>
            Buscar materiales
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 bg-white">
        <img
          alt="Materiales textiles apilados mostrando variedad de telas sostenibles"
          className="w-full h-full object-cover"
          src="/images/hero-materiales.webp"
        />
      </div>
    </section>
  );
};

export default Hero;
