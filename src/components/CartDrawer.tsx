import React from 'react';
import { CartItem } from '../types/ecommerce';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, MessageCircle, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  subtotal: number;
  discountAmount: number;
  finalTotal: number;
  freeShippingLeft: number;
  freeShippingPct: number;
  promoCode: string;
  setPromoCode: (val: string) => void;
  promoMessage: string;
  applyPromo: (code: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
  onRemoveItem: (id: string) => void;
  getWhatsAppUrl: () => string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  subtotal,
  discountAmount,
  finalTotal,
  freeShippingLeft,
  freeShippingPct,
  promoCode,
  setPromoCode,
  promoMessage,
  applyPromo,
  onUpdateQuantity,
  onRemoveItem,
  getWhatsAppUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-[#E6EDE1] bg-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#4E673C] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg font-bold text-[#232B20]">
                Tu Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#5D6B57] hover:text-[#232B20] rounded-full hover:bg-[#EAEFE5] transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#EFF5EA] p-3.5 border-b border-[#D8E6CE] text-xs">
            <div className="flex items-center justify-between text-[#37492A] font-semibold mb-1.5">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#4E673C]" />
                <span>
                  {freeShippingLeft === 0
                    ? '🎉 ¡Felicidades! Tienes ENVÍO GRATIS'
                    : `Faltan ₡${freeShippingLeft.toLocaleString('es-CR')} para Envío Gratis`}
                </span>
              </div>
              <span>{freeShippingPct}%</span>
            </div>
            <div className="w-full bg-[#D4E3C9] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#4E673C] h-full transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingPct}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F1F5ED] flex items-center justify-center text-[#7A8E6E]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#232B20]">Tu carrito está vacío</h3>
                  <p className="text-xs text-[#6B7B65] mt-1 max-w-xs">
                    Agrega tus fórmulas botánicas favoritas Kera-Apple para comenzar a revitalizar tu cabello.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-md bg-[#4E673C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3B4E2E] transition-all"
                >
                  Explorar Productos
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl border border-[#E9EFE4] bg-[#FAF8F5] transition-all hover:border-[#CCDBC2]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-white shrink-0 border border-[#DEE7D7]"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-[#232B20] leading-snug line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#96A490] hover:text-red-500 transition-colors p-1"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#697962]">
                        ₡{item.product.price.toLocaleString('es-CR')} c/u
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#CCD8C4] rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#37492A] hover:bg-[#F0F5EC]"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-[#2C3328]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#37492A] hover:bg-[#F0F5EC]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#37492A]">
                        ₡{(item.product.price * item.quantity).toLocaleString('es-CR')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Promo code & Checkout section */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#E6EDE1] bg-[#FAF8F5] space-y-4">
              
              {/* Promo input */}
              <div className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cupón (ej. YAGLA10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-white border border-[#CCD8C4] rounded-md px-3 py-1.5 text-xs uppercase focus:outline-none focus:border-[#4E673C]"
                  />
                  <button
                    onClick={() => applyPromo(promoCode)}
                    className="px-3 py-1.5 bg-[#4E673C] text-white text-xs font-semibold rounded-md hover:bg-[#384A2A] transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
                {promoMessage && (
                  <p className="text-[11px] text-[#4E673C] font-medium">{promoMessage}</p>
                )}
              </div>

              {/* Totals Breakdown */}
              <div className="space-y-1.5 text-xs border-t border-[#E6EDE1] pt-3">
                <div className="flex justify-between text-[#556350]">
                  <span>Subtotal</span>
                  <span>₡{subtotal.toLocaleString('es-CR')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2E7D32] font-semibold">
                    <span>Descuento aplicado</span>
                    <span>-₡{discountAmount.toLocaleString('es-CR')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#556350]">
                  <span>Envío estimado</span>
                  <span>{subtotal >= 25000 ? 'GRATIS' : 'Por calcular con Mensajería'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#232B20] pt-2 border-t border-[#E6EDE1]">
                  <span>Total</span>
                  <span>₡{finalTotal.toLocaleString('es-CR')}</span>
                </div>
              </div>

              {/* WhatsApp Checkout CTA */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-md bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>COMPLETAR PEDIDO POR WHATSAPP</span>
              </a>

              {/* Trust payment info */}
              <div className="flex items-center justify-center gap-4 text-[10px] text-[#71806C] pt-1">
                <span>✓ SINPE Móvil</span>
                <span>✓ Tarjetas</span>
                <span>✓ Correos de Costa Rica</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
