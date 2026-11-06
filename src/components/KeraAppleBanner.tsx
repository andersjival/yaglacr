import React from 'react';
import { ArrowRight } from 'lucide-react';

interface KeraAppleBannerProps {
  onCtaClick: () => void;
}

export const KeraAppleBanner: React.FC<KeraAppleBannerProps> = ({ onCtaClick }) => {
  return (
    <section id="kera-apple" className="py-8 sm:py-14 bg-gradient-to-b from-[#FAF8F5] via-[#EFF4EB] to-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with natural proportions and zero cropping */}
        <div
          onClick={onCtaClick}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#D5E0CC] bg-[#E8ECE2] transition-all duration-300 group cursor-pointer"
          title="Click para ver la fórmula Kera-Apple"
        >
          {/* Main Panorama Image: 100% natural scaling so the model and bottle are never cropped */}
          <div className="w-full relative overflow-hidden">
            <img
              src="/images/banner-kera-apple.png"
              alt="Cuidado Natural para un Cabello Fuerte y Hermoso - Kera-Apple Yaglar"
              className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Quick info bar below banner for enhanced clarity and action */}
          <div className="bg-[#37492A] text-white py-3 px-5 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8CA675] animate-ping" />
              <span className="font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
                Fórmula Exclusiva Yaglar Costa Rica
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-[#D7E4D0] font-medium text-[11px] sm:text-xs">
              <span>🌿 100% Extractos Naturales</span>
              <span>🐇 Libre de Crueldad</span>
              <span>💚 Hecho con Amor</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[#C9E0BC] font-semibold text-xs group-hover:translate-x-1 transition-transform ml-auto sm:ml-0">
              <span>Ver Producto Kera-Apple</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
