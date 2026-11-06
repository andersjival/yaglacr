import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative w-full bg-[#F4EFE6] overflow-hidden border-b border-[#E9E4DC]">
      {/* Background ambient lighting matching the photo's cream tones */}
      <div className="max-w-7xl mx-auto relative">
        <div
          onClick={onCtaClick}
          className="relative w-full cursor-pointer group"
          title="Click para explorar productos Yaglar"
        >
          {/* Main Hero Banner: 100% natural scaling so text, icons and bottles are perfectly visible */}
          <img
            src="/images/hero-yaglar.png"
            alt="Belleza Natural para tu Cabello - Cuidado Capilar YAGLAR"
            className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.005]"
            loading="eager"
          />

          {/* Invisible interactive hotspot aligned directly over the COMPRAR AHORA button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onCtaClick();
            }}
            aria-label="Comprar Ahora"
            className="absolute left-[5%] top-[55%] w-[16%] h-[13%] min-w-[120px] min-h-[36px] rounded-md opacity-0 hover:opacity-15 bg-white transition-opacity cursor-pointer focus:opacity-30"
          />
        </div>
      </div>
    </section>
  );
};
