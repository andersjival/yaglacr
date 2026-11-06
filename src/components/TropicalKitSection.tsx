import React from 'react';
import { Product } from '../types/ecommerce';
import { PRODUCTS } from '../data/products';
import { Sun, Waves, ShoppingBag, MessageCircle, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface TropicalKitSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const TropicalKitSection: React.FC<TropicalKitSectionProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const tropicalProduct = PRODUCTS.find((p) => p.id === 'kit-playa-proteccion-tropical') || PRODUCTS[0];

  const handleWhatsAppTropical = () => {
    const text = `🌊 *¡Hola Yaglar Costa Rica!* Me interesa el *Kit Playa & Protección Tropical (Edición Costa)* por ₡42.000 con Envío Gratis. ¿Tienen disponible para envío? ☀️`;
    window.open(`https://wa.me/50688889245?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="kit-playa" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] relative overflow-hidden border-b border-[#E2DDD2]">
      {/* Decorative ambient elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#607D4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8EFE5] border border-[#CCD8C8] text-[#2F4422] text-xs font-bold tracking-widest uppercase shadow-xs">
            <Sun className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '12s' }} />
            <span>EDICIÓN ESPECIAL COSTA RICA • VACACIONES & VERANO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#232B20] font-normal tracking-tight mt-3">
            Kit Playa & Protección Tropical Yaglar
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6E56] max-w-2xl mx-auto mt-2">
            El escudo botánico imprescindible para proteger tu melena del sol, la sal marina, el cloro de la piscina y la humedad tropical.
          </p>
        </div>

        {/* Tropical Card Layout */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#DFE5D8] grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Real Beach Photography */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F0EBE0] flex items-center justify-center">
            <div
              onClick={() => onQuickView(tropicalProduct)}
              className="relative max-w-sm w-full rounded-2xl overflow-hidden shadow-xl border border-[#D5CDBC] group cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
              title="Click para ver ficha del Kit Playa"
            >
              <img
                src="/images/kit-playa-tropical.jpg"
                alt="Kit Playa & Protección Tropical Yaglar en la Costa"
                className="w-full h-auto block select-none transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Tropical Badge */}
              <div className="absolute top-4 left-4 bg-[#232B20]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Waves className="w-3.5 h-3.5 text-cyan-300" />
                <span>Edición Playa CR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4E673C] tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 text-[#4E673C]" />
                <span>BLINDAJE TOTAL CONTRA EL CLIMA TROPICAL</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#232B20] leading-snug">
                Disfruta de la playa y el sol sin maltratar tu cabello
              </h3>

              <p className="text-xs sm:text-sm text-[#54644E] leading-relaxed">
                El agua de mar y el sol deshidratan la cutícula capilar, generando frizz, quiebre y aspereza. Este kit combina el <strong className="text-[#2C3826]">Perfume Desenredante Termoprotector</strong>, la <strong className="text-[#2C3826]">Mascarilla Shiny Bomba</strong>, el <strong className="text-[#2C3826]">Shiny Oil</strong> y el ritual completo para mantener tu cabello suave, brillante y manejable antes, durante y después del mar.
              </p>
            </div>

            {/* Tropical Protection Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#44523F] pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B3825]">Escudo Anti-Salitre:</strong>{' '}
                  <span>Evita que la sal marina reseque la hebra.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B3825]">Filtro Termo-Solar:</strong>{' '}
                  <span>Protege la pigmentación y brillo natural.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B3825]">Desenredo Instantáneo:</strong>{' '}
                  <span>Peina sin tirones al salir del agua.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E673C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B3825]">Nutrición Post-Sol:</strong>{' '}
                  <span>Regeneración profunda con Shiny Bomba.</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-[#F2F6ED] border border-[#CCDBC3] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#71826B] uppercase font-semibold block">
                  Precio Regular
                </span>
                <span className="text-base text-[#879781] line-through font-medium">
                  ₡60.000
                </span>
                <span className="text-[11px] text-[#2E7D32] font-bold block mt-0.5">
                  ¡Ahorras ₡18.000 en el Kit Playa!
                </span>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#4E673C] font-bold uppercase block tracking-wider">
                  PRECIO ESPECIAL PLAYA
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2F4422]">
                  ₡42.000
                </span>
                <span className="text-[11px] text-[#55694F] font-semibold block">
                  Envío GRATIS a todo Costa Rica
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                onClick={() => onAddToCart(tropicalProduct)}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#4E673C] hover:bg-[#384A2A] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 group"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Añadir Kit Playa al Carrito</span>
              </button>

              <button
                onClick={handleWhatsAppTropical}
                className="w-full sm:w-auto py-4 px-5 rounded-xl border border-[#25D366] text-[#1E7E34] hover:bg-[#E8F8EE] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Pedir Kit por WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
