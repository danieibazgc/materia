import type { Stat } from "@/types";

interface StatItemProps {
  stat: Stat;
}

const StatItem = ({ stat }: StatItemProps) => {
  return (
    <div className="py-4 md:py-0 text-center">
      <p className="text-4xl font-medium text-forest tracking-tight">{stat.value}</p>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-2">
        {stat.label}
      </p>
    </div>
  );
};

export default StatItem;
