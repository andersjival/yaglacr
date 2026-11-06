import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface KeraAppleBannerProps {
  onCtaClick: () => void;
}

export const KeraAppleBanner: React.FC<KeraAppleBannerProps> = ({ onCtaClick }) => {
  return (
    <section id="kera-apple" className="py-12 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#EFF4EB] to-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with high-end editorial frame */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D5E0CC] bg-[#E5ECE0] transition-all duration-500 hover:shadow-2xl group">
          
          {/* Main Panorama Image Provided by User */}
          <div className="relative w-full aspect-[2.8/1] min-h-[300px] sm:min-h-[420px] lg:min-h-[480px]">
            <img
              src="/images/banner-kera-apple.png"
              alt="Cuidado Natural para un Cabello Fuerte y Hermoso - Kera-Apple Yaglar"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Clickable Overlay Link covering the "COMPRAR AHORA" area on left side */}
            <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 lg:p-16">
              <div className="max-w-xl">
                {/* Interactive Action Button aligned with the banner button */}
                <button
                  onClick={onCtaClick}
                  className="mt-4 sm:mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-md bg-[#4E673C] hover:bg-[#384C2A] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 group/btn"
                >
                  <Sparkles className="w-4 h-4 text-[#C9E0BC]" />
                  <span>COMPRAR LÍNEA KERA-APPLE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick info bar below banner for enhanced clarity on mobile */}
          <div className="bg-[#37492A] text-white py-4 px-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8CA675] animate-ping" />
              <span className="font-semibold tracking-wider uppercase">Fórmula Exclusiva Yaglar Costa Rica</span>
            </div>
            <div className="flex items-center gap-6 text-[#D7E4D0] font-medium">
              <span>🌿 100% Extractos Naturales</span>
              <span>🐇 Libre de Crueldad Animal</span>
              <span>💚 Hecho con Amor</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
