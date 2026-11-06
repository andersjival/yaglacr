import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contacto" className="bg-[#FAF8F5] border-t border-[#E5EBDD] text-[#333E2E] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E3EAD9]">
          
          {/* Brand Column (Circular Logo) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#607D4B] ring-2 ring-[#EBF1E6] shadow-sm">
                <img
                  src="/images/yaglar-logo-square.png"
                  alt="YAGLAR Logo Circular"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-[#232B20] uppercase block leading-none">
                  YAGLAR
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#607D4B] font-semibold uppercase">
                  BOTANICAL HAIR CARE CR
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5E6D58] max-w-sm leading-relaxed">
              Cuidado capilar botánico y natural elaborado con extractos botánicos puros y la exclusiva fórmula Kera-Apple para devolver la fuerza, brillo y vitalidad a tu cabello desde la raíz.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.tiktok.com/@yaglarcr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EBF1E6] text-[#37492A] hover:bg-[#37492A] hover:text-white flex items-center justify-center transition-all shadow-xs"
                title="TikTok @yaglarcr"
              >
                <span className="font-bold text-xs">TT</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EBF1E6] text-[#37492A] hover:bg-[#37492A] hover:text-white flex items-center justify-center transition-all shadow-xs"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/50688889245"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EBF1E6] text-[#37492A] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all shadow-xs"
                title="WhatsApp Asesoría Directa"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#242F1F] uppercase">
              ENLACES RÁPIDOS
            </h4>
            <ul className="space-y-2 text-xs text-[#5A6953]">
              <li><a href="#inicio" className="hover:text-[#4E673C] transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-[#4E673C] transition-colors">Tienda & Productos</a></li>
              <li><a href="#categorias" className="hover:text-[#4E673C] transition-colors">Categorías Capilares</a></li>
              <li><a href="#kera-apple" className="hover:text-[#4E673C] transition-colors">Fórmula Kera-Apple</a></li>
              <li><a href="#promesa" className="hover:text-[#4E673C] transition-colors">Nuestra Promesa</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Costa Rica */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#242F1F] uppercase">
              ATENCIÓN AL CLIENTE
            </h4>
            <ul className="space-y-2 text-xs text-[#5A6953]">
              <li><span>Envíos por Correos de Costa Rica</span></li>
              <li><span>Envíos Express GAM</span></li>
              <li><span>Pagos con SINPE Móvil y Tarjeta</span></li>
              <li><span>Garantía de Satisfacción</span></li>
              <li><span>Preguntas Frecuentes (FAQ)</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#242F1F] uppercase">
              NEWSLETTER YAGLAR
            </h4>
            <p className="text-xs text-[#5E6D58] leading-relaxed">
              Suscríbete para recibir un 10% de descuento en tu primera compra y guías exclusivas de cuidado capilar.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#EBF1E6] rounded-md text-xs text-[#37492A] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#4E673C]" />
                <span>¡Gracias! Usa el cupón YAGLA10 al finalizar tu compra.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#CCD8C4] rounded-md px-3 py-2 text-xs text-[#2C3328] focus:outline-none focus:border-[#4E673C]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#4E673C] hover:bg-[#384A2A] text-white text-xs font-bold tracking-wider uppercase rounded-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SUSCRIBIRME</span>
                </button>
              </form>
            )}

            {/* Direct Contact mini bar */}
            <div className="pt-2 text-[11px] text-[#697962] space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4E673C]" />
                <span>Costa Rica (Envíos a todo el país)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4E673C]" />
                <span>WhatsApp: +506 8888-9245</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#73826C] gap-4">
          <p>© 2026 Yaglar CR. Todos los derechos reservados. Diseñado para la belleza y salud de tu cabello.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Hecho con amor en Costa Rica 🇨🇷</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
