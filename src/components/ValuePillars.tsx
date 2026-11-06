import React from 'react';
import { Droplets, Award, Globe, CheckCircle2 } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Droplets,
      title: 'Dermatológicamente Testeado',
      description: 'Fórmula suave y respetuosa con todo tipo de cuero cabelludo y cabello.',
    },
    {
      icon: Award,
      title: 'Calidad Botánica Premium',
      description: 'Ingredientes puros de alto rendimiento en los que puedes confiar siempre.',
    },
    {
      icon: Globe,
      title: 'Belleza Sostenible',
      description: 'Prácticas eco-conscientes, envases reciclables y producción costarricense.',
    },
    {
      icon: CheckCircle2,
      title: 'Resultados Visibles',
      description: 'Comprobado para otorgar brillo, suavidad y fuerza desde la primera semana.',
    },
  ];

  return (
    <section className="bg-white border-y border-[#E9EFE3] py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F1F5ED] text-[#4E673C] flex items-center justify-center shrink-0 border border-[#DEE7D7]">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#232B20] tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#5D6B57] mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
