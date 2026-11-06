import { useState, useEffect } from 'react';
import { Product, CartItem } from '../types/ecommerce';
import confetti from 'canvas-confetti';

const CART_STORAGE_KEY = 'yaglar_cart_v1';
export const FREE_SHIPPING_THRESHOLD = 25000;

export function useCartState() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#607D4B', '#8CA675', '#A4C28A'],
      });
    } catch {
      // ignore
    }

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const applyPromo = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'YAGLA10' || trimmed === 'GLOW20') {
      const pct = trimmed === 'GLOW20' ? 0.20 : 0.10;
      setAppliedDiscount(pct);
      setPromoMessage(`¡Cupón ${trimmed} aplicado! ${pct * 100}% de descuento.`);
    } else {
      setAppliedDiscount(0);
      setPromoMessage('Cupón inválido. Prueba con YAGLA10');
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const finalTotal = Math.max(0, subtotal - discountAmount);
  const freeShippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingPct = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  const getWhatsAppCheckoutUrl = () => {
    const phone = '50688889245'; // Costa Rica number
    let message = `🌿 *¡Hola Yaglar Costa Rica!* Deseo realizar el siguiente pedido desde la web:\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (x${item.quantity}) - ₡${(item.product.price * item.quantity).toLocaleString('es-CR')}\n`;
    });

    message += `\n*Subtotal:* ₡${subtotal.toLocaleString('es-CR')}`;
    if (discountAmount > 0) {
      message += `\n*Descuento (${appliedDiscount * 100}%):* -₡${discountAmount.toLocaleString('es-CR')}`;
    }
    message += `\n*Total a pagar:* ₡${finalTotal.toLocaleString('es-CR')}\n`;
    message += subtotal >= FREE_SHIPPING_THRESHOLD
      ? `📦 *Envío:* ¡GRATIS! (Supera ₡25.000)\n`
      : `📦 *Envío:* Por calcular con Correos de CR / Mensajería\n`;
    message += `\n¿Me indican los datos para cancelar por SINPE Móvil o Tarjeta? ¡Muchas gracias! ✨`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    discountAmount,
    finalTotal,
    appliedDiscount,
    promoCode,
    setPromoCode,
    promoMessage,
    applyPromo,
    freeShippingLeft,
    freeShippingPct,
    isCartOpen,
    setIsCartOpen,
    quickViewProduct,
    setQuickViewProduct,
    getWhatsAppCheckoutUrl,
  };
}
