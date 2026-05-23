import type { MaterialRequest } from "@/types";

export const requests: MaterialRequest[] = [
  {
    id: "req-001",
    title: "Tela PET reciclada para colección SS26",
    quantity: "2,000m",
    location: "Lima, Perú",
    urgency: "alta",
    date: "Hace 2h",
    active: true,
  },
  {
    id: "req-002",
    title: "Denim 12oz 100% algodón reciclado",
    quantity: "800m",
    location: "Bogotá, Colombia",
    urgency: "media",
    date: "Hace 5h",
    active: true,
  },
  {
    id: "req-003",
    title: "Botones de coco natural sin teñir",
    quantity: "5,000 unidades",
    location: "CDMX, México",
    urgency: "baja",
    date: "Hace 1d",
    active: true,
  },
  {
    id: "req-004",
    title: "Cuero residual vegetal para accesorios",
    quantity: "150m²",
    location: "Buenos Aires, Argentina",
    urgency: "alta",
    date: "Hace 3h",
    active: true,
  },
  {
    id: "req-005",
    title: "Hilado de alpaca reciclada Nm 2/28",
    quantity: "400kg",
    location: "Arequipa, Perú",
    urgency: "media",
    date: "Hace 8h",
    active: false,
  },
];
