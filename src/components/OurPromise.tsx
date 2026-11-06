import React from 'react';
import { Heart, ShieldCheck, Sparkles, Sprout, Recycle } from 'lucide-react';

export const OurPromise: React.FC = () => {
  const promises = [
    { icon: Heart, title: 'Libre de Crueldad', subtitle: '100% Cruelty Free' },
    { icon: ShieldCheck, title: 'Sin Parabenos', subtitle: 'Fórmulas Seguras' },
    { icon: Sparkles, title: 'Sin Sulfatos Agresivos', subtitle: 'Cuidado Delicado' },
    { icon: Sprout, title: 'Fórmula Vegana', subtitle: 'Extractos Botánicos' },
    { icon: Recycle, title: 'Empaque Reciclable', subtitle: 'Eco-Consciente' },
  ];

  return (
    <section id="promesa" className="bg-[#37492A] text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#A4C28A] uppercase">
            NUESTRO COMPROMISO
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-1 tracking-tight text-[#FAF8F5]">
            La Promesa Yaglar
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-[#2D3C23]/60 border border-[#485B38] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#4E673C] flex items-center justify-center text-[#C9E0BC] mb-3 shadow-inner">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold tracking-wide text-[#F3EFEA]">
                  {p.title}
                </h3>
                <p className="text-[11px] text-[#A4C28A] mt-0.5">
                  {p.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
