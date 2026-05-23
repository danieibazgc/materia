export type Category = {
  id: string;
  name: string;
  image: string;
  providerCount: number;
};

export type Provider = {
  id: string;
  name: string;
  city: string;
  avatar: string;
  image: string;
  description: string;
  badges: string[];
  rating: number;
  moq: string;
};

export type MaterialRequest = {
  id: string;
  title: string;
  quantity: string;
  location: string;
  urgency: "alta" | "media" | "baja";
  date: string;
  active: boolean;
};

export type Testimonial = {
  id: string;
  text: string;
  name: string;
  role: string;
  initials: string;
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export type Step = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
};
