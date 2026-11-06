import React from 'react';
import { CATEGORIES } from '../data/categories';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (slug: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#607D4B] uppercase block mb-2">
              EXPLORAR POR CATEGORÍA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232B20] font-normal tracking-tight">
              Encuentra lo Esencial para tu Cabello
            </h2>
          </div>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#37492A] hover:text-[#607D4B] uppercase border-b border-[#37492A] pb-1 hover:border-[#607D4B] transition-all self-start sm:self-auto"
          >
            <span>VER TODOS LOS PRODUCTOS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              {/* Category Image Box */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#EAEFE6] mb-3.5 border border-[#DEE6D8] shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-[#607D4B]/50">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#37492A]/0 group-hover:bg-[#37492A]/10 transition-colors duration-300" />
              </div>

              {/* Title & Link */}
              <h3 className="text-sm font-semibold text-[#283323] group-hover:text-[#607D4B] transition-colors leading-snug">
                {cat.name}
              </h3>
              <p className="text-[11px] text-[#71806C] mt-0.5">
                {cat.subtitle}
              </p>
              
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4E673C] mt-2 group-hover:translate-x-0.5 transition-transform">
                <span>Comprar Ahora</span>
                <span className="text-xs">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
