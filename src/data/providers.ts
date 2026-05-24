import type { Provider } from "@/types";

export const providers: Provider[] = [
  {
    id: "ecofiber-peru",
    name: "EcoFiber Perú",
    city: "Lima, Perú",
    avatar: "EF",
    image: "/images/categoria-tela-pet.webp",
    description:
      "Especialistas en fibras PET recicladas post-consumo. Capacidad de producción de 5 toneladas mensuales con certificación GRS.",
    badges: ["PET Reciclado", "Certificado GRS"],
    rating: 4.8,
    moq: "500m",
  },
  {
    id: "textiles-andinos",
    name: "Textiles Andinos",
    city: "Arequipa, Perú",
    avatar: "TA",
    image: "/images/categoria-alpaca.webp",
    description:
      "Hilados de alpaca reciclada de alta calidad. Proveedores directos de comunidades altoandinas con comercio justo.",
    badges: ["Alpaca Reciclada", "Comercio Justo"],
    rating: 4.9,
    moq: "200m",
  },
  {
    id: "denim-circular",
    name: "Denim Circular",
    city: "Medellín, Colombia",
    avatar: "DC",
    image: "/images/categoria-denim.webp",
    description:
      "Excedentes de denim pre-consumo de fábricas premium. Lotes disponibles de 12oz y 14oz en múltiples acabados.",
    badges: ["Denim Pre-consumo", "Excedente"],
    rating: 4.7,
    moq: "300m",
  },
];
