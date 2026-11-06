import React from 'react';
import { Product } from '../types/ecommerce';
import { PRODUCTS } from '../data/products';
import { Sparkles, ShoppingBag, MessageCircle, CheckCircle2, Clock, Flame, ArrowRight } from 'lucide-react';

interface SpecialPromoProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const SpecialPromo: React.FC<SpecialPromoProps> = ({ onAddToCart, onQuickView }) => {
  const promoProduct = PRODUCTS.find((p) => p.id === 'duo-crecimiento-promo') || PRODUCTS[0];

  const handleWhatsAppBuy = () => {
    const text = `🌿 *¡Hola Yaglar Costa Rica!* Deseo aprovechar la *¡SUPER PROMOCIÓN de 2 Fórmulas de Crecimiento por ₡10.000!* 🔥 ¿Tienen stock disponible para envío?`;
    window.open(`https://wa.me/50688889245?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="promocion" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#EFF5EB] to-[#FAF8F5] relative overflow-hidden border-y border-[#DEE7D7]">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#607D4B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C8DEB8]/25 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header Pill */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3EEDC] border border-[#BFD5B4] text-[#2F4422] text-xs font-bold tracking-widest uppercase shadow-xs">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
            <span>OFERTA ESPECIAL FLASH DE LA SEMANA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#232B20] font-normal tracking-tight mt-3">
            ¡Super Promoción Exclusiva Yaglar!
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6E56] max-w-xl mx-auto mt-2">
            Aprovecha este combo promocional único para acelerar el crecimiento, densificar y frenar la caída de tu cabello.
          </p>
        </div>

        {/* Featured Promo Card Grid */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#D5E1CC] grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Official Promo Flyer Image */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex items-center justify-center bg-[#F4F8F1]">
            <div
              onClick={() => onQuickView(promoProduct)}
              className="relative max-w-sm w-full rounded-2xl overflow-hidden shadow-lg border border-[#D0DFC6] group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
              title="Click para ver detalles de la Super Promoción"
            >
              <img
                src="/images/promo-crecimiento.png"
                alt="Super Promoción 2 Fórmulas de Crecimiento Yaglar 10.000"
                className="w-full h-auto block select-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
          </div>

          {/* Right Column: Offer Details & CTAs */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D97706]">
                <Clock className="w-4 h-4" />
                <span className="uppercase tracking-wider">Válido solo esta semana o hasta agotar existencias</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#232B20] leading-snug">
                2x Fórmulas de Crecimiento & Nutrición Folicular
              </h3>

              <p className="text-xs sm:text-sm text-[#54644E] leading-relaxed">
                Llévate dos frascos goteros de 50ml de nuestra cotizada fórmula botánica rica en <strong className="text-[#2C3826]">Argán, Romero, Almendras Dulces y Bergamota</strong>. Estimula el folículo piloso, frena la caída y despierta el nacimiento de nuevo cabello fuerte y sano.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#44523F] pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0" />
                <span>2 Frascos x 50ml (100ml total)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0" />
                <span>Ahorras ₡10.000 (50% OFF)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0" />
                <span>100% Botánico y Libre de Tóxicos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0" />
                <span>Envío a todo Costa Rica</span>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="p-4 rounded-2xl bg-[#F0F6EC] border border-[#CFDFCB] flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#71826B] uppercase font-semibold block">
                  Precio Regular por 2 unidades
                </span>
                <span className="text-sm text-[#879781] line-through font-medium">
                  ₡20.000
                </span>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#4E673C] font-bold uppercase block tracking-wider">
                  ¡SUPER PRECIO PROMO!
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2F4422]">
                  ₡10.000
                </span>
                <span className="text-xs text-[#52644B] font-semibold block mt-0.5">
                  por los 2 frascos
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onAddToCart(promoProduct)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#4E673C] hover:bg-[#384A2A] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 group"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Añadir Super Promo al Carrito</span>
              </button>

              <button
                onClick={handleWhatsAppBuy}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-[#25D366] text-[#1E7E34] hover:bg-[#E8F8EE] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
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
