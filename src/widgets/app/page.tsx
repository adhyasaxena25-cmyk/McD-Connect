'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/mcd/Navbar';
import { HeroSection } from '../components/mcd/HeroSection';
import { ValuePillars } from '../components/mcd/ValuePillars';
import { TasteDNA } from '../components/mcd/TasteDNA';
import { MoodMeal } from '../components/mcd/MoodMeal';
import { MealBuilder3D } from '../components/mcd/MealBuilder3D';
import { McUniverseRewards } from '../components/mcd/McUniverseRewards';
import { FoodMusic } from '../components/mcd/FoodMusic';
import { SocialOrder } from '../components/mcd/SocialOrder';
import { FoodPassport } from '../components/mcd/FoodPassport';
import { McFoodLab } from '../components/mcd/McFoodLab';
import { YourImpact } from '../components/mcd/YourImpact';
import { AiCravingSearch } from '../components/mcd/AiCravingSearch';
import { McAIAssistant } from '../components/mcd/McAIAssistant';
import { CartDrawer } from '../components/mcd/CartDrawer';
import { Footer } from '../components/mcd/Footer';
import { CartItem } from '../components/mcd/types';

export default function McDonaldFuturePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartToast, setCartToast] = useState<string | null>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-item-1',
      name: 'Double Big Mac™ 2030',
      price: 299,
      image: '/assets/food-burger.jpg',
      description: 'Two pure sear-locked beef patties, cheddar melt & special sauce',
      quantity: 1,
    },
  ]);

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    setCartToast(`🍔 Added "${item.name}" to your tray!`);
    setTimeout(() => setCartToast(null), 3000);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main style={{ minHeight: '100vh', background: '#0D0B0A', color: '#FFFFFF', overflowX: 'hidden' }}>
      {/* Floating Navbar */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => scrollToSection('cravings')}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Section with Integrated Category Dock */}
      <HeroSection
        onExploreTaste={() => scrollToSection('mytaste')}
        onBuildMeal={() => scrollToSection('builder')}
        onOrderNow={() => setIsCartOpen(true)}
        onSelectCategory={(catId) => {
          if (catId === 'Deals') scrollToSection('rewards');
          else scrollToSection('menu');
        }}
        onOpenRewards={() => scrollToSection('rewards')}
      />

      {/* 4 Value Pillars directly matching reference */}
      <ValuePillars
        onSelectPillar={(pillarId) => {
          if (pillarId === 'menu') scrollToSection('menu');
          if (pillarId === 'rewards') scrollToSection('rewards');
          if (pillarId === 'sustainability') scrollToSection('sustainability');
          if (pillarId === 'community') scrollToSection('sustainability');
        }}
      />

      {/* Feature 01: MyTaste AI */}
      <TasteDNA
        onBuildMeal={(preset) => {
          scrollToSection('builder');
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Feature 02: Mood -> Meal */}
      <MoodMeal
        onBuildComfortMeal={(mood) => {
          scrollToSection('builder');
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Feature 03: 3D Meal Builder */}
      <MealBuilder3D
        onAddToCart={handleAddToCart}
      />

      {/* Feature 04: McRewards 2.0 (Your McUniverse) */}
      <McUniverseRewards
        onRedeemReward={(title, cost) => {
          setCartToast(`🎁 Redeemed "${title}"!`);
          setTimeout(() => setCartToast(null), 3000);
        }}
      />

      {/* Feature 05: Food × Music */}
      <FoodMusic
        onAddToCart={handleAddToCart}
      />

      {/* Feature 06: Social Order (Mimi's Food Room) */}
      <SocialOrder />

      {/* Feature 07: Food Passport */}
      <FoodPassport />

      {/* Feature 08: McFood Lab */}
      <McFoodLab />

      {/* Feature 09: Your Impact */}
      <YourImpact />

      {/* Feature 10: AI Craving Search */}
      <AiCravingSearch
        onAddToCart={handleAddToCart}
      />

      {/* Footer & Final Rotating CTA */}
      <Footer
        onExploreTaste={() => scrollToSection('mytaste')}
        onOrderNow={() => setIsCartOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Floating McAI Assistant Orb & Drawer */}
      <McAIAssistant
        onAddToCart={handleAddToCart}
        onNavigateToSection={scrollToSection}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Global Add to Cart Notification Toast */}
      {cartToast && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1A1817',
          color: '#FFBC0D',
          border: '1.5px solid #FFBC0D',
          borderRadius: '999px',
          padding: '12px 28px',
          fontWeight: 800,
          fontSize: '14px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.6), 0 0 20px rgba(255, 188, 13, 0.3)',
          zIndex: 3000,
          animation: 'mcdFloatPulse 0.3s ease-out',
        }}>
          {cartToast}
        </div>
      )}
    </main>
  );
}
