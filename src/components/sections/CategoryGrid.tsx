import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/ui/CategoryCard";

const CategoryGrid = () => {
  return (
    <section
      id="categorias"
      className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="categorias-title"
    >
      <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
        <h2
          id="categorias-title"
          className="text-3xl font-medium text-gray-900 tracking-tight"
        >
          Explorar por material
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-brand hover:underline flex items-center gap-1"
        >
          Ver todo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
