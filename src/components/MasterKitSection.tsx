import React from 'react';
import { Product } from '../types/ecommerce';
import { PRODUCTS } from '../data/products';
import { Sparkles, ShoppingBag, MessageCircle, CheckCircle2, Gift, Truck, Star } from 'lucide-react';

interface MasterKitSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const MasterKitSection: React.FC<MasterKitSectionProps> = ({ onAddToCart, onQuickView }) => {
  const kitProduct = PRODUCTS.find((p) => p.id === 'kit-completo-ritual-maestro') || PRODUCTS[0];

  const kitItems = [
    { title: 'Shampoo Kera-Apple (500ml)', desc: 'Limpieza botánica profunda con keratina y manzana verde.' },
    { title: 'Acondicionador Kera-Apple (300ml)', desc: 'Nutrición sedosa y desenredo fácil sin apelmazar.' },
    { title: 'Mascarilla Shiny Bomba (500ml)', desc: 'Reparación intensiva de karité, coco y ácido hialurónico.' },
    { title: 'Perfume Desenredante (200ml)', desc: 'Bruma aromática desenredante con protección térmica.' },
    { title: 'Gotero Fórmula de Crecimiento (50ml)', desc: 'Aceites puros de romero, argán y bergamota anticaída.' },
    { title: 'Serum Shiny Oil Sellador', desc: 'Gotas de seda para sellar puntas abiertas y dar brillo espejo.' },
    { title: 'Ampolla Booster Concentrada', desc: 'Shot intensivo de nutrientes celulares para rescate capilar.' },
  ];

  const handleWhatsAppKit = () => {
    const text = `🌿 *¡Hola Yaglar Costa Rica!* Deseo ordenar el *Kit Completo Ritual Maestro Yaglar (7 Productos)* por ₡45.000 con Envío Gratis. ¿Me facilitan los datos para cancelar? ✨`;
    window.open(`https://wa.me/50688889245?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="kit-completo" className="py-16 sm:py-24 bg-[#F5F2EB] relative overflow-hidden border-b border-[#E3DDD1]">
      {/* Decorative ambient elements */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#607D4B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#8CA675]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4ECE0] border border-[#BFD3B7] text-[#2F4422] text-xs font-bold tracking-widest uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-[#4E673C]" />
            <span>LA EXPERIENCIA DEFINITIVA DE CUIDADO CAPILAR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#232B20] font-normal tracking-tight mt-3">
            El Kit Completo Ritual Maestro Yaglar
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6E56] max-w-2xl mx-auto mt-2">
            La colección botánica integral con los 7 productos esenciales para limpiar, nutrir, reparar, proteger y multiplicar el crecimiento de tu melena.
          </p>
        </div>

        {/* Master Kit Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#DFE7D8] grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Real Kit Photography (Square 1024x1024) */}
          <div className="lg:col-span-6 p-6 sm:p-10 bg-[#EDF3E8] flex items-center justify-center">
            <div
              onClick={() => onQuickView(kitProduct)}
              className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl border border-[#CBDAC2] group cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
              title="Click para ver ficha completa del Kit"
            >
              <img
                src="/images/kit-completo-yaglar.jpg"
                alt="Kit Completo Ritual Maestro Yaglar - Colección Botánica Oficial"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#37492A]/90 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Kit Completo (7 en 1)</span>
              </div>

              {/* Free Shipping Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#37492A] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#DEE7D7]">
                <Truck className="w-3.5 h-3.5 text-[#4E673C]" />
                <span>¡Envío GRATIS en CR!</span>
              </div>
            </div>
          </div>

          {/* Right Column: Breakdown of Products & Purchasing Action */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#607D4B] tracking-widest uppercase">
                <span>RITUAL DE 7 PASOS BOTÁNICOS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#232B20] mt-1 leading-snug">
                Todo lo que tu cabello necesita en un solo set
              </h3>
              <p className="text-xs sm:text-sm text-[#54644E] mt-2 leading-relaxed">
                Diseñado para restaurar cabellos procesados, quebradizos o debilitados y maximizar el brillo y longitud desde la raíz hasta las puntas.
              </p>
            </div>

            {/* 7 Items List */}
            <div className="space-y-2 border-y border-[#E9EFE4] py-4 max-h-64 overflow-y-auto pr-2 no-scrollbar">
              {kitItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2B3825]">{item.title}:</strong>{' '}
                    <span className="text-[#596B54]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Card */}
            <div className="p-4 rounded-2xl bg-[#F1F6EC] border border-[#CCDDC4] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#71826B] uppercase font-semibold block">
                  Valor Total Individual
                </span>
                <span className="text-base text-[#879781] line-through font-medium">
                  ₡65.000
                </span>
                <span className="text-[11px] text-[#2E7D32] font-bold block mt-0.5">
                  ¡Ahorras ₡20.000 comprando el Kit!
                </span>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#4E673C] font-bold uppercase block tracking-wider">
                  PRECIO ESPECIAL KIT
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2F4422]">
                  ₡45.000
                </span>
                <span className="text-[11px] text-[#55694F] font-semibold block">
                  Envío GRATIS a todo Costa Rica
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                onClick={() => onAddToCart(kitProduct)}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#4E673C] hover:bg-[#384A2A] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 group"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Añadir Kit Completo al Carrito</span>
              </button>

              <button
                onClick={handleWhatsAppKit}
                className="w-full sm:w-auto py-4 px-5 rounded-xl border border-[#25D366] text-[#1E7E34] hover:bg-[#E8F8EE] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
