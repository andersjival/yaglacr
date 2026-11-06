import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  totalItems: number;
  onOpenCart: () => void;
  onSelectCategory?: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ totalItems, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'TIENDA', href: '#productos' },
    { name: 'CATEGORÍAS', href: '#categorias' },
    { name: 'SUPER PROMO 🔥', href: '#promocion' },
    { name: 'KIT COMPLETO ✨', href: '#kit-completo' },
    { name: 'KERA-APPLE', href: '#kera-apple' },
    { name: 'NUESTRA PROMESA', href: '#promesa' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Anuncio de envío" className="bg-[#37492A] text-[#F1F5ED] text-xs font-medium py-2 px-4 text-center tracking-wider transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#A4C28A]" />
          <span>ENVÍO GRATIS EN COSTA RICA EN PEDIDOS DE ₡25.000 O MÁS | CUPÓN: <span className="font-bold underline text-[#C7DCB8]">YAGLA10</span></span>
        </div>
      </aside>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8EDE2] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#37492A] hover:text-[#607D4B] transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo (Circular as requested) */}
            <div className="flex items-center">
              <a href="#inicio" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm border-2 border-[#607D4B] ring-2 ring-[#EBF1E6] transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/yaglar-logo-square.png"
                    alt="YAGLAR Logo Circular"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-wider text-[#25331C] uppercase leading-none">
                    YAGLAR
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-[#607D4B] uppercase font-semibold mt-1">
                    CUIDADO BOTÁNICO CR
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest text-[#3B4536] hover:text-[#607D4B] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#607D4B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Icons Right */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-[#3B4536] hover:text-[#607D4B] transition-colors rounded-full hover:bg-[#F1F5ED]"
                aria-label="Buscar productos"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* Wishlist / Favorites */}
              <a
                href="#productos"
                className="hidden sm:flex p-2 text-[#3B4536] hover:text-[#607D4B] transition-colors rounded-full hover:bg-[#F1F5ED]"
                title="Favoritos"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
              </a>

              {/* User Account / Profile */}
              <a
                href="#contacto"
                className="p-2 text-[#3B4536] hover:text-[#607D4B] transition-colors rounded-full hover:bg-[#F1F5ED]"
                title="Mi Cuenta / Asesoría"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </a>

              {/* Cart Drawer Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 bg-[#607D4B] hover:bg-[#4E673C] text-white rounded-full transition-all duration-300 shadow-sm hover:shadow active:scale-95 flex items-center justify-center"
                aria-label="Ver carrito de compras"
              >
                <ShoppingBag className="w-5 h-5 stroke-[2]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#D97706] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Collapsible */}
        {searchOpen && (
          <div className="border-t border-[#E8EDE2] bg-[#FAF8F5] py-3 px-4 transition-all">
            <div className="max-w-2xl mx-auto flex items-center gap-2">
              <Search className="w-4 h-4 text-[#607D4B]" />
              <input
                type="text"
                placeholder="Buscar por Kera-Apple, Shampoo, Acondicionador, Serum..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-[#CCD5C5] focus:border-[#607D4B] focus:outline-none text-sm py-1.5 text-[#2C3328]"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs text-[#607D4B] font-semibold hover:underline"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-t border-[#E8EDE2] px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold tracking-wider text-[#2C3328] hover:text-[#607D4B] py-2 border-b border-[#F0EBE1]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://www.tiktok.com/@yaglarcr"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-md bg-[#25331C] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2"
              >
                <span>Síguenos en TikTok @yaglarcr</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
