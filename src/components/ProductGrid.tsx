import React, { useState } from 'react';
import { Product } from '../types/ecommerce';
import { PRODUCTS } from '../data/products';
import { Eye, Plus, ShoppingBag, Star, Sparkles } from 'lucide-react';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  selectedCategorySlug?: string | null;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onAddToCart,
  onQuickView,
  selectedCategorySlug,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategorySlug || 'todos');

  const filterTabs = [
    { label: 'Todos', slug: 'todos' },
    { label: 'Shampoos', slug: 'shampoos' },
    { label: 'Acondicionadores', slug: 'acondicionadores' },
    { label: 'Mascarillas', slug: 'mascarillas' },
    { label: 'Serums & Óleos', slug: 'serums' },
    { label: 'Tónicos', slug: 'tonicos' },
    { label: 'Kits', slug: 'kits' },
  ];

  const filteredProducts = activeTab === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === activeTab);

  return (
    <section id="productos" className="py-16 sm:py-24 bg-white border-t border-[#EAEFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Purevia Botanicals Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#607D4B] uppercase block mb-2">
              LOS MÁS VENDIDOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232B20] font-normal tracking-tight">
              Los Favoritos de Nuestras Clientas
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-[#5D6B57]">
            <Sparkles className="w-4 h-4 text-[#607D4B]" />
            <span>Fórmulas 100% Botánicas Kera-Apple</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(tab.slug)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.slug
                  ? 'bg-[#4E673C] text-white shadow-sm'
                  : 'bg-[#F2F6EF] text-[#3D4936] hover:bg-[#E3EDDD]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E6ECE0] transition-all duration-300 hover:shadow-xl hover:border-[#607D4B]/40"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EDF3E9]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge if available */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#37492A]/90 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {product.badge}
                  </div>
                )}

                {/* Quick View Button on Hover */}
                <button
                  onClick={() => onQuickView(product)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#232B20] hover:bg-[#4E673C] hover:text-white transition-all duration-300 shadow-md transform sm:translate-y-12 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-medium px-3"
                  title="Vista Rápida"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Vista Rápida</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#607D4B] font-semibold uppercase tracking-wider text-[11px]">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating.toFixed(1)}</span>
                      <span className="text-[#899783] text-[11px]">({product.reviewCount})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onQuickView(product)}
                    className="font-serif text-lg font-bold text-[#232B20] hover:text-[#607D4B] transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#5D6B57] line-clamp-2 leading-relaxed">
                    {product.subtitle}
                  </p>
                </div>

                {/* Price and Add to Cart Button */}
                <div className="pt-2 border-t border-[#EAEFE5] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-lg font-bold text-[#2E3C26]">
                        ₡{product.price.toLocaleString('es-CR')}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-[#899783] line-through">
                          ₡{product.originalPrice.toLocaleString('es-CR')}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-[#7A8A73]">
                      {product.volume}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full py-3 px-4 rounded-md border border-[#4E673C] text-[#4E673C] hover:bg-[#4E673C] hover:text-white transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 group/btn shadow-xs active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                    <span>AÑADIR AL CARRITO</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
