// src/features/impact/hooks/useImpactCalculator.ts
// Datos basados en estudios del Higg Index y Textile Exchange.
// Fuentes: https://textileexchange.org/

const IMPACT_FACTORS = {
  'Tela PET reciclada':   { water: 96,  co2: 5.5 },  // litros/kg y kg CO₂/kg
  'Denim residual':       { water: 7600, co2: 11.2 },
  'Alpaca reciclada':     { water: 340,  co2: 8.4 },
  'Cuero residual':       { water: 2000, co2: 17.0 },
  'Fibra industrial':     { water: 120,  co2: 3.2 },
} as const;

export type MaterialKey = keyof typeof IMPACT_FACTORS;

export interface ImpactResult {
  waterSavedLiters: number;
  co2SavedKg: number;
  equivalentShowers: number;     // litros ahorrados / 60L por ducha
  equivalentCarKm: number;       // kg CO₂ ahorrados / 0.21 kg CO₂/km promedio auto
}

/**
 * Calcula el impacto ambiental estimado al usar materiales reciclados.
 * Los factores son porcentajes de ahorro vs. material virgen equivalente.
 */
export function calculateImpact(
  material: MaterialKey,
  quantityKg: number
): ImpactResult {
  const factor = IMPACT_FACTORS[material];
  const waterSavedLiters = Math.round(factor.water * quantityKg);
  const co2SavedKg = Math.round(factor.co2 * quantityKg * 10) / 10;

  return {
    waterSavedLiters,
    co2SavedKg,
    equivalentShowers: Math.round(waterSavedLiters / 60),
    equivalentCarKm: Math.round(co2SavedKg / 0.21),
  };
}

export const MATERIAL_OPTIONS = Object.keys(IMPACT_FACTORS) as MaterialKey[];
