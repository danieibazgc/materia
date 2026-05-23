import type { Category } from "@/types";
import { Factory, CircleDot } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const placeholderIcons: Record<string, React.ReactNode> = {
  "fibra-industrial": <Factory className="w-12 h-12 text-gray-300" />,
  "avios-botones": <CircleDot className="w-12 h-12 text-gray-300" />,
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const hasImage = category.image.length > 0;

  return (
    <a
      href="#"
      className="group block relative h-64 rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-brand transition-colors"
    >
      {hasImage ? (
        <img
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={category.image}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          {placeholderIcons[category.id] ?? (
            <Factory className="w-12 h-12 text-gray-300" />
          )}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-2xl font-medium">{category.name}</h3>
        <p className="text-sm opacity-80 mt-1">
          {category.providerCount} proveedores
        </p>
      </div>
    </a>
  );
};

export default CategoryCard;
