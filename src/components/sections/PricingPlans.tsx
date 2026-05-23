import { plans } from "@/data/plans";
import PlanCard from "@/components/ui/PlanCard";

const PricingPlans = () => {
  return (
    <section
      id="planes"
      className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="pricing-title"
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2
          id="pricing-title"
          className="text-3xl font-medium text-gray-900 tracking-tight mb-4"
        >
          Planes que crecen contigo
        </h2>
        <p className="text-base text-gray-500">
          Desde exploración gratuita hasta sourcing enterprise con trazabilidad
          completa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
