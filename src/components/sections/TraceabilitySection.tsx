import { Droplets, Leaf, QrCode } from "lucide-react";

const TraceabilitySection = () => {
  return (
    <section
      id="trazabilidad"
      className="py-24 bg-forest text-white overflow-hidden relative"
      aria-labelledby="traceability-title"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="text-sm font-medium uppercase tracking-widest text-brand mb-4 block">
            Transparencia Radical
          </span>
          <h2
            id="traceability-title"
            className="text-3xl font-medium mb-6 tracking-tight"
          >
            Cada metro cuenta una historia
          </h2>
          <p className="text-base opacity-80 mb-8 max-w-md leading-relaxed">
            Nuestra plataforma genera automáticamente fichas de trazabilidad
            para cada transacción, documentando el origen, la composición y el
            impacto ambiental reducido.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <Droplets className="w-5 h-5 text-forest-accent shrink-0" />
              <div>
                <p className="text-sm font-medium text-forest-muted">
                  Ahorro hídrico calculado
                </p>
                <p className="text-base font-medium">1,240L por cada 10m</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <Leaf className="w-5 h-5 text-forest-accent shrink-0" />
              <div>
                <p className="text-sm font-medium text-forest-muted">
                  Reducción de huella de carbono
                </p>
                <p className="text-base font-medium">-4.5kg CO₂ equivalente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] flex items-center justify-center z-10">
          <div className="bg-white text-gray-900 p-8 rounded-xl w-80 shadow-2xl rotate-2 border border-gray-200">
            <div className="flex justify-between items-start mb-6 border-b border-gray-200 pb-4">
              <h4 className="text-2xl font-medium tracking-tight">
                materi<span className="text-brand">a</span>
              </h4>
              <span className="text-xs text-gray-500 uppercase">
                Certificado #842
              </span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Material</span>
                <span className="font-medium">Denim 12oz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Composición</span>
                <span className="font-medium">100% Algodón Reciclado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Origen</span>
                <span className="font-medium">Lima, Perú</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Condición</span>
                <span className="font-medium">Excedente Pre-consumo</span>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200 text-center">
              <QrCode className="w-8 h-8 text-brand mx-auto" />
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-50 pointer-events-none -z-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+\")",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TraceabilitySection;
