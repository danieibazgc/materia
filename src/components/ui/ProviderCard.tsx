import type { Provider } from "@/types";
import { Star } from "lucide-react";
import Badge from "./Badge";

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard = ({ provider }: ProviderCardProps) => {
  return (
    <article className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-brand transition-colors group">
      <div className="h-32 w-full overflow-hidden">
        <img
          alt={`Material de ${provider.name}`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={provider.image}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-brand-light text-brand-dark flex items-center justify-center text-xs font-medium shrink-0">
            {provider.avatar}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{provider.name}</h3>
            <p className="text-xs text-gray-400">{provider.city}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {provider.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {provider.badges.map((badge) => (
            <Badge key={badge} variant="brand">
              {badge}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {provider.rating}
          </span>
          <span>MOQ: {provider.moq}</span>
        </div>
      </div>
    </article>
  );
};

export default ProviderCard;
