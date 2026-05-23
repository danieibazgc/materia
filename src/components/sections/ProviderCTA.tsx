import Button from "@/components/ui/Button";

const ProviderCTA = () => {
  return (
    <section
      id="proveedor-cta"
      className="py-20 px-4 md:px-10 bg-gray-50"
      aria-labelledby="provider-cta-title"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          <h2
            id="provider-cta-title"
            className="text-3xl font-medium text-gray-900 tracking-tight"
          >
            ¿Tienes excedentes de material?
          </h2>
          <p className="text-base text-gray-500 max-w-md leading-relaxed">
            Únete a la red de proveedores de Materia y conecta con cientos de
            marcas que buscan materiales sostenibles. Publica tu inventario en
            minutos.
          </p>
          <Button variant="primary" size="lg">
            Registrarme como proveedor
          </Button>
          <p className="text-sm text-gray-400">
            Sin costo de registro · Aprobación en 24h
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-3 gap-3 h-64">
          <div className="rounded-xl overflow-hidden">
            <img
              alt="Telas sostenibles apiladas en almacén"
              className="w-full h-full object-cover"
              src="/images/categoria-tela-pet.jpg"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              alt="Rollos de denim reciclado"
              className="w-full h-full object-cover"
              src="/images/categoria-denim.jpg"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              alt="Fibras de alpaca reciclada"
              className="w-full h-full object-cover"
              src="/images/categoria-alpaca.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderCTA;
