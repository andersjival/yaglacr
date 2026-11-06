import React from 'react';
import { Leaf, Heart, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle organic background foliage glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#607D4B]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A4C28A]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Pillars */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E6] border border-[#CCDBC0] text-[#37492A] text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#607D4B]" />
              <span>NUEVA LÍNEA BOTÁNICA EN COSTA RICA</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#232B20] font-normal tracking-tight leading-[1.15]">
                Pureza y Fuerza <br />
                <span className="italic font-serif text-[#607D4B] font-semibold">Desde la Raíz</span>
              </h1>
              <p className="text-base sm:text-lg text-[#556350] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed pt-2">
                Descubre el auténtico poder botánico de nuestra fórmula natural <span className="font-semibold text-[#37492A]">Kera-Apple</span>. Diseñada en Costa Rica para restaurar el brillo, suavidad y resistencia capilar que siempre soñaste.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#4E673C] hover:bg-[#3B4E2E] text-white font-medium text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 group"
              >
                <span>COMPRAR AHORA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#kera-apple"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-md border border-[#CCD5C5] text-[#37492A] hover:bg-[#EBF1E6] font-medium text-sm tracking-wider uppercase transition-colors"
              >
                Ver Fórmula Kera-Apple
              </a>
            </div>

            {/* 4 Trust Badges under hero text (Exact reference Purevia) */}
            <div className="pt-6 border-t border-[#E5EADF] grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF1E6] flex items-center justify-center text-[#4E673C]">
                  <Leaf className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#2E3B27] uppercase">
                  INGREDIENTES <br className="hidden sm:inline" />NATURALES
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF1E6] flex items-center justify-center text-[#4E673C]">
                  <Heart className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#2E3B27] uppercase">
                  LIBRE DE <br className="hidden sm:inline" />CRUELDAD
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF1E6] flex items-center justify-center text-[#4E673C]">
                  <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#2E3B27] uppercase">
                  SIN <br className="hidden sm:inline" />PARABENOS
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF1E6] flex items-center justify-center text-[#4E673C]">
                  <Sparkles className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#2E3B27] uppercase">
                  SIN <br className="hidden sm:inline" />SULFATOS
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: High Aesthetic Botanical Hero Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Product Showcase Card with Warm Shadows */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E3E8DC] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1608248597359-5f210515152a?auto=format&fit=crop&w=1200&q=85"
                  alt="Línea Botánica Yaglar Kera-Apple"
                  className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge on image */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#607D4B] animate-pulse" />
                  <span className="text-xs font-bold text-[#2E3B27] tracking-wider uppercase">Fórmula Kera-Apple</span>
                </div>

                {/* Bottom Overlay Card info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#E4ECE0] shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#232B20]">Ritual Botánico Completo</h3>
                    <p className="text-xs text-[#5D6B57]">Shampoo, Acondicionador & Mascarilla Kera-Apple</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-[#7B8B74] line-through">₡40.000</span>
                    <span className="text-base font-bold text-[#4E673C]">₡36.000</span>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#25331C] text-white p-4 rounded-xl shadow-xl max-w-xs items-center gap-3 border border-[#3E4E32]">
                <div className="w-10 h-10 rounded-full bg-[#607D4B] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                  <p className="text-[11px] text-[#D8E4D0] mt-0.5 leading-snug">
                    "Mi cabello recuperó el brillo y la fuerza en sólo 2 semanas"
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
