import React from "react";
import Link from "next/link";
import { Coffee, Shirt, Palette, Sparkles, Laptop, Leaf } from "lucide-react";

// Types
interface Category {
  id: number;
  title: string;
  categoryDescriptions: string;
  description: string;
  icon: string;
}

interface CategoryCardProps {
  category: Category;
  index: number;
}

// Icon mapping
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Coffee,
  Shirt,
  Palette,
  Sparkles,
  Laptop,
  Leaf,
};

// CategoryCard Component (Reusable)
const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const Icon = iconMap[category.icon] ?? Coffee;

  return (
    <div
      className="flex-shrink-0 w-80 sm:w-96 group animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* wrap clickable area with Link -> navigasi ke pageListUmkm dengan query */}
      <Link
        href={`/pageListUmkm?category=${encodeURIComponent(category.title)}`}
        className="block"
        aria-label={`Lihat UMKM kategori ${category.title}`}
      >
        <div className="relative rounded-2xl p-8 sm:p-8 h-72 sm:h-80 transition-all duration-500 ease-out cursor-pointer bg-white hover:bg-[#13569C] shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          </div>

          {/* Icon Container */}
          <div className="mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-gray-100 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500">
              <Icon
                className="w-8 h-8 text-[#13569C] group-hover:text-white transition-colors duration-300"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 dark-text group-hover:text-white transition-colors duration-300 leading-tight">
              {category.title}
            </h3>
            {/* Category Description */}
            <p
              className="text-base leading-relaxed text-[#515151] group-hover:text-white/90 transition-colors duration-300"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                overflow: "hidden",
              }}
            >
              {category.categoryDescriptions}
            </p>
            <p className="text-base leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-300">
              {category.description}
            </p>
          </div>

          {/* Animated Bottom Border */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/50 to-white transition-all duration-500 w-0 group-hover:w-full"></div>

          {/* Corner Accent with Pulse */}
          <div className="absolute top-6 right-6">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#13569C] group-hover:bg-white transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#13569C] group-hover:bg-white opacity-0 group-hover:opacity-50 group-hover:scale-[2] transition-all duration-700"></div>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;
