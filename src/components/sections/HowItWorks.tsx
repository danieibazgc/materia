import type { Step } from "@/types";

const steps: Step[] = [
  {
    id: "step-busca",
    number: "01",
    title: "Busca o solicita",
    description:
      "Explora el catálogo o publica un requerimiento específico en nuestro tablero de búsqueda activa.",
    image: "/images/paso-busca.webp",
  },
  {
    id: "step-contacta",
    number: "02",
    title: "Contacta al proveedor",
    description:
      "Comunícate directamente, negocia precios y solicita muestras de manera estructurada.",
    image: "/images/paso-contacta.webp",
  },
  {
    id: "step-cierra",
    number: "03",
    title: "Cierra la transacción",
    description:
      "Gestiona el pago y la logística obteniendo un certificado de trazabilidad del material.",
    image: "/images/paso-cierra.webp",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="py-24 bg-white border-y border-gray-200"
      aria-labelledby="how-it-works-title"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="how-it-works-title"
            className="text-3xl font-medium text-gray-900 tracking-tight mb-4"
          >
            Eficiencia en la cadena de suministro
          </h2>
          <p className="text-base text-gray-500">
            Conectamos la oferta de materiales subutilizados con la demanda de
            marcas conscientes en tres pasos simples.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-start">
              <span className="text-5xl font-medium text-gray-200 mb-4 tracking-tight">
                {step.number}
              </span>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                {step.description}
              </p>
              <div className="h-32 w-full bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <img
                  alt={`Ilustración del paso: ${step.title}`}
                  className="w-full h-full object-cover opacity-80"
                  src={step.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
