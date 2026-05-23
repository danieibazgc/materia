import type { Plan } from "@/types";
import { Check } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <article
      className={`relative border rounded-xl p-6 bg-white flex flex-col ${
        plan.popular ? "border-2 border-brand" : "border-gray-200"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="brand">Más popular</Badge>
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
      <div className="mt-3 mb-2">
        <span className="text-3xl font-medium text-gray-900">{plan.price}</span>
        {plan.period && (
          <span className="text-sm text-gray-400">{plan.period}</span>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={plan.popular ? "primary" : "outline"}
        size="lg"
        className="w-full"
      >
        {plan.cta}
      </Button>
    </article>
  );
};

export default PlanCard;
