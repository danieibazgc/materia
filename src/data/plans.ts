import type { Plan } from "@/types";

export const plans: Plan[] = [
  {
    id: "plan-starter",
    name: "Starter",
    price: "Gratis",
    period: "",
    description: "Para marcas que están explorando materiales sostenibles.",
    features: [
      "Acceso al catálogo completo",
      "3 contactos por mes",
      "Filtros básicos de búsqueda",
      "Soporte por email",
    ],
    popular: false,
    cta: "Comenzar gratis",
  },
  {
    id: "plan-premium",
    name: "Premium",
    price: "$49",
    period: "/mes",
    description:
      "Para marcas con necesidades de sourcing frecuentes y trazabilidad.",
    features: [
      "Contactos ilimitados",
      "Tablero de búsqueda activa",
      "Certificados de trazabilidad",
      "Filtros avanzados y alertas",
      "Soporte prioritario",
      "Acceso a proveedores exclusivos",
    ],
    popular: true,
    cta: "Empezar prueba gratis",
  },
  {
    id: "plan-enterprise",
    name: "Enterprise",
    price: "$199",
    period: "/mes",
    description:
      "Para empresas con cadenas de suministro complejas y equipos grandes.",
    features: [
      "Todo en Premium",
      "API de integración",
      "Dashboard de impacto ambiental",
      "Múltiples usuarios",
      "Account manager dedicado",
      "Reportes personalizados",
    ],
    popular: false,
    cta: "Contactar ventas",
  },
];
