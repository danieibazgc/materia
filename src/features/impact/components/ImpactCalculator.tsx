// src/features/impact/components/ImpactCalculator.tsx
import { useState } from 'react';
import { Droplets, Wind, Bath, Car } from 'lucide-react';
import { calculateImpact, MATERIAL_OPTIONS, type MaterialKey } from '../hooks/useImpactCalculator';

/**
 * Calculadora interactiva de impacto ambiental.
 * Pure UI component: toda la lógica de cálculo está en useImpactCalculator.
 */
const ImpactCalculator = () => {
  const [material, setMaterial] = useState<MaterialKey>('Tela PET reciclada');
  const [quantity, setQuantity] = useState(10);

  const result = calculateImpact(material, quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Math.max(Number(e.target.value), 1), 10000);
    setQuantity(val);
  };

  return (
    <section
      className="py-20 px-4 md:px-10 bg-gray-50 border-y border-gray-200"
      aria-labelledby="impact-calc-title"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="impact-calc-title"
            className="text-3xl font-medium text-gray-900 tracking-tight mb-3"
          >
            Calcula tu impacto ambiental
          </h2>
          <p className="text-gray-500">
            Descubre cuánto ahorras al elegir materiales reciclados frente a sus equivalentes vírgenes.
          </p>
        </div>

        {/* Controles */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Selector de material */}
            <div className="flex flex-col gap-2">
              <label htmlFor="impact-material" className="text-sm font-medium text-gray-700">
                Tipo de material
              </label>
              <select
                id="impact-material"
                value={material}
                onChange={(e) => setMaterial(e.target.value as MaterialKey)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand"
              >
                {MATERIAL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Cantidad en kg */}
            <div className="flex flex-col gap-2">
              <label htmlFor="impact-quantity" className="text-sm font-medium text-gray-700">
                Cantidad: <strong className="text-brand">{quantity} kg</strong>
              </label>
              <input
                id="impact-quantity"
                type="range"
                min={1}
                max={1000}
                step={1}
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full accent-brand"
                aria-valuemin={1}
                aria-valuemax={1000}
                aria-valuenow={quantity}
                aria-valuetext={`${quantity} kilogramos`}
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1 kg</span>
                <span>1,000 kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              Icon: Droplets,
              value: result.waterSavedLiters.toLocaleString('es-PE'),
              unit: 'litros',
              label: 'Agua ahorrada',
              color: 'text-blue-600',
              bg: 'bg-blue-50',
            },
            {
              Icon: Wind,
              value: result.co2SavedKg.toLocaleString('es-PE'),
              unit: 'kg CO₂',
              label: 'Emisiones evitadas',
              color: 'text-green-600',
              bg: 'bg-green-50',
            },
            {
              Icon: Bath,
              value: result.equivalentShowers.toLocaleString('es-PE'),
              unit: 'duchas',
              label: 'Equivalente en',
              color: 'text-brand',
              bg: 'bg-brand-light',
            },
            {
              Icon: Car,
              value: result.equivalentCarKm.toLocaleString('es-PE'),
              unit: 'km en auto',
              label: 'Equivalente a no recorrer',
              color: 'text-amber-600',
              bg: 'bg-amber-50',
            },
          ].map(({ Icon, value, unit, label, color, bg }) => (
            <div key={label} className={`${bg} rounded-xl p-4 text-center`}>
              <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} aria-hidden="true" />
              <p className={`text-2xl font-medium ${color}`}>{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{unit}</p>
              <p className="text-xs text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          * Estimaciones basadas en datos del Higg Index y Textile Exchange. Los valores reales pueden variar.
        </p>
      </div>
    </section>
  );
};

export default ImpactCalculator;
