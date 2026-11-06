import React, { useState } from 'react';
import { useCartState } from './hooks/useCart';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValuePillars } from './components/ValuePillars';
import { CategoryGrid } from './components/CategoryGrid';
import { KeraAppleBanner } from './components/KeraAppleBanner';
import { ProductGrid } from './components/ProductGrid';
import { OurPromise } from './components/OurPromise';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickView } from './components/ProductQuickView';
import { PRODUCTS } from './data/products';

export const App: React.FC = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    discountAmount,
    finalTotal,
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
  } = useCartState();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleScrollToProducts = (categorySlug?: string) => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    }
    const elem = document.getElementById('productos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenKeraAppleProduct = () => {
    const keraApple = PRODUCTS.find((p) => p.id === 'kera-apple-shampoo') || PRODUCTS[0];
    setQuickViewProduct(keraApple);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242E20] font-sans antialiased selection:bg-[#607D4B] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        totalItems={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleScrollToProducts}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onCtaClick={() => handleScrollToProducts()} />

        {/* 2. 4 Value Pillars */}
        <ValuePillars />

        {/* 3. Explore by Category */}
        <CategoryGrid onSelectCategory={handleScrollToProducts} />

        {/* 4. Mid-Banner: Feature Banner with the girl holding Kera-Apple */}
        <KeraAppleBanner onCtaClick={handleOpenKeraAppleProduct} />

        {/* 5. Best Sellers Product Grid */}
        <ProductGrid
          onAddToCart={(p) => addToCart(p, 1)}
          onQuickView={(p) => setQuickViewProduct(p)}
          selectedCategorySlug={selectedCategory}
        />

        {/* 6. Our Promise Bar */}
        <OurPromise />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        subtotal={subtotal}
        discountAmount={discountAmount}
        finalTotal={finalTotal}
        freeShippingLeft={freeShippingLeft}
        freeShippingPct={freeShippingPct}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        promoMessage={promoMessage}
        applyPromo={applyPromo}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        getWhatsAppUrl={getWhatsAppCheckoutUrl}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty) => addToCart(p, qty)}
      />
    </div>
  );
};

export default App;
