import React, { useState } from 'react';
import { Product } from '../types/ecommerce';
import { X, Star, ShoppingBag, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const getSingleProductWhatsAppUrl = () => {
    const text = `🌿 *¡Hola Yaglar Costa Rica!* Me interesa adquirir el producto *${product.name}* (₡${product.price.toLocaleString('es-CR')}) con fórmula Kera-Apple. ¿Tienen disponible para envío?`;
    return `https://wa.me/50688889245?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#DDE6D7] transition-all my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2C3328] transition-colors shadow-sm"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-[#F0F5EC] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#37492A] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#607D4B] tracking-widest uppercase">
                  {product.category}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#232B20] mt-1 leading-snug">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#2C3328]">{product.rating.toFixed(1)}</span>
                  <span className="text-[#6D7D68]">({product.reviewCount} opiniones verificadas)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#37492A]">
                  ₡{product.price.toLocaleString('es-CR')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#899783] line-through">
                    ₡{product.originalPrice.toLocaleString('es-CR')}
                  </span>
                )}
                <span className="text-xs font-medium text-[#64745F] ml-auto">
                  {product.volume}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#505D4A] leading-relaxed">
                {product.description}
              </p>

              {/* Key Benefits */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[#2E3C26] uppercase tracking-wider">
                  Beneficios Clave:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#52604D]">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#607D4B] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients & Usage */}
              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E9EFE3] text-[11px] text-[#556350] space-y-1.5">
                <p><strong className="text-[#2C3827]">Ingredientes destacados:</strong> {product.ingredients}</p>
                <p><strong className="text-[#2C3827]">Modo de uso:</strong> {product.usage}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#EAEFE5]">
              <div className="flex items-center gap-3">
                {/* Quantity selector */}
                <div className="flex items-center border border-[#CCD8C4] rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-[#37492A] hover:bg-[#F0F5EC]"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-[#2C3328]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-[#37492A] hover:bg-[#F0F5EC]"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#4E673C] hover:bg-[#394C2B] text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir al Carrito (₡{(product.price * quantity).toLocaleString('es-CR')})</span>
                </button>
              </div>

              {/* Consult via WhatsApp */}
              <a
                href={getSingleProductWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-lg border border-[#25D366] text-[#1E7E34] hover:bg-[#E8F8EE] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consultar por WhatsApp con una Asesora</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
