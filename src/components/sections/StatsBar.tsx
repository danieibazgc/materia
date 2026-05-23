import type { Stat } from "@/types";
import StatItem from "@/components/ui/StatItem";

const stats: Stat[] = [
  { id: "stat-proveedores", value: "142", label: "Proveedores Verificados" },
  { id: "stat-material", value: "38t", label: "Material Rescatado" },
  { id: "stat-departamentos", value: "7", label: "Departamentos Conectados" },
];

const StatsBar = () => {
  return (
    <section
      className="py-12 border-y border-gray-200 bg-gray-50/60"
      aria-labelledby="stats-title"
    >
      <h2 id="stats-title" className="sr-only">
        Estadísticas de la plataforma
      </h2>
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
