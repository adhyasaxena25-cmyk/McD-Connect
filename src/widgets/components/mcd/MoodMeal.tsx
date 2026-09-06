'use client';
import React, { useState } from 'react';
import { MoodOption, CartItem } from './types';
import {
  IllustratedCategoryIcon,
  IllustratedHeroBurger,
  IllustratedFries,
  IllustratedCoke,
  IllustratedFoodVisual,
} from './IllustratedFood';

interface MoodMealProps {
  onBuildComfortMeal: (mood: string) => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const MOODS: MoodOption[] = [
  {
    id: 'comfort',
    label: 'Comfort',
    icon: '🥹',
    quote: '“We know exactly what you need.”',
    mealTitle: 'Ultimate Big Mac™ Comfort Feast',
    mealPrice: 349,
    mealItems: ['Double Big Mac (Extra Cheese)', 'World Famous Golden Fries (Large)', 'Chilled Coca-Cola Original'],
    gradient: 'linear-gradient(135deg, #FFBC0D 0%, #EA580C 100%)',
    aura: 'rgba(255, 188, 13, 0.25)',
  },
  {
    id: 'chill',
    label: 'Chill',
    icon: '😌',
    quote: '“Slow down, breathe in, savor every sip.”',
    mealTitle: 'McCafé™ Mindful Serenity Combo',
    mealPrice: 289,
    mealItems: ['Iced Vanilla Latte with Oat Milk', 'Fresh Warm Chocolate Chip Cookie', 'Apple Slices'],
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
    aura: 'rgba(59, 130, 246, 0.25)',
  },
  {
    id: 'energized',
    label: 'Energized',
    icon: '⚡',
    quote: '“Power your peak hours with explosive crunch.”',
    mealTitle: 'Turbo Spicy McCrispy™ Surge',
    mealPrice: 329,
    mealItems: ['Double Spicy McCrispy Fillet', 'Peri Peri Fries (Shaker Bag)', 'Red Bull Energy Slush'],
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    aura: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 'adventurous',
    label: 'Adventurous',
    icon: '🔥',
    quote: '“Push the flavor frontier into unknown territories.”',
    mealTitle: 'Ghost Habanero Samurai Box',
    mealPrice: 379,
    mealItems: ['Fiery Wasabi & Ghost Pepper Double Burger', 'Truffle Parmesan Wedges', 'Yuzu Mint Fizz'],
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    aura: 'rgba(139, 92, 246, 0.3)',
  },
  {
    id: 'datenight',
    label: 'Date Night',
    icon: '💘',
    quote: '“Double straws, shared fries, pure romance.”',
    mealTitle: 'Lovers Duo Deluxe Collection',
    mealPrice: 599,
    mealItems: ['2x Quarter Pounder with Cheese', 'Sharing Box Fries + 4 Dips', '2x Oreo McFlurry with Fudge'],
    gradient: 'linear-gradient(135deg, #EC4899 0%, #DA291C 100%)',
    aura: 'rgba(236, 72, 153, 0.3)',
  },
  {
    id: 'focus',
    label: 'Focus',
    icon: '🧠',
    quote: '“Zero-distraction brain fuel for your deep work sprint.”',
    mealTitle: 'Bio-Stack Protein Wrap Meal',
    mealPrice: 299,
    mealItems: ['Grilled Herb Chicken Wrap', 'Fresh Garden Salad with Sesame Dressing', 'Americano Black with MCT Oil'],
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    aura: 'rgba(6, 182, 212, 0.25)',
  },
  {
    id: 'celebrate',
    label: 'Celebrate',
    icon: '🎉',
    quote: '“A golden victory calls for golden arches.”',
    mealTitle: 'Party McNuggets™ Royal Mega-Bucket',
    mealPrice: 649,
    mealItems: ['24pc Crispy Golden McNuggets', 'All 6 Signature Sauces', '2x Cheesy Fries & 4 Drinks'],
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)',
    aura: 'rgba(245, 158, 11, 0.35)',
  },
  {
    id: 'latenight',
    label: 'Late Night',
    icon: '🌙',
    quote: '“When the world sleeps, the grill stays hot.”',
    mealTitle: 'Midnight Craver Supreme',
    mealPrice: 369,
    mealItems: ['Double McSpicy Chicken', 'Loaded Cheesy Jalapeno Fries', 'Midnight Chocolate Milkshake'],
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)',
    aura: 'rgba(67, 56, 202, 0.35)',
  },
];

// Reference Menu Category Cards with Illustrated Food Style
const REFERENCE_CATEGORIES = [
  {
    title: 'Burgers',
    sub: 'Iconic. Irresistible. Always a good idea.',
    type: 'burgers' as const,
    tag: 'Classic'
  },
  {
    title: 'Meals',
    sub: 'The perfect combo for any craving.',
    type: 'meals' as const,
    tag: 'Popular'
  },
  {
    title: 'Breakfast',
    sub: 'Bright mornings start here.',
    type: 'breakfast' as const,
    tag: 'Fresh'
  },
  {
    title: 'McCafé',
    sub: 'Great coffee. Brighter days.',
    type: 'mccafe' as const,
    tag: 'Artisan'
  },
  {
    title: 'Desserts',
    sub: 'Sweet moments, made better.',
    type: 'desserts' as const,
    tag: 'Decadent'
  },
  {
    title: 'Snacks & Sides',
    sub: 'Little bites. Big smiles.',
    type: 'chicken' as const,
    tag: 'Crunchy'
  },
];

export const MoodMeal: React.FC<MoodMealProps> = ({ onBuildComfortMeal, onAddToCart }) => {
  const [activeMoodId, setActiveMoodId] = useState<string>('comfort');

  const selectedMood = MOODS.find((m) => m.id === activeMoodId) || MOODS[0];

  return (
    <section id="menu" style={{
      padding: '100px 48px',
      background: '#FAF5EA',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.5s ease',
    }}>
      {/* Dynamic Ambient Mood Aura */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        width: '900px',
        height: '450px',
        background: selectedMood.aura,
        filter: 'blur(100px)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'background 0.6s ease',
      }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Reference Subtitle & Title */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            color: '#DA291C',
            fontSize: '13px',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            EXPLORE THE EXPERIENCE
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(38px, 5vw, 60px)',
                fontWeight: 900,
                color: '#1A1817',
                letterSpacing: '-2px',
                margin: 0,
                lineHeight: 1.1,
              }}>
                Good Food{' '}
                <span className="mcd-brush-underline">Fits</span>{' '}
                Every Mood
              </h2>
              <p style={{
                fontSize: '17px',
                color: '#6B7280',
                maxWidth: '640px',
                margin: '16px 0 0 0',
                lineHeight: 1.5,
              }}>
                Whether you&apos;re craving a classic, discovering something new, or sharing with your crew —
                there&apos;s a McDonald&apos;s moment for you.
              </p>
            </div>

            <button
              onClick={() => onBuildComfortMeal(selectedMood.label)}
              style={{
                background: '#DA291C',
                color: '#FFF',
                border: 'none',
                borderRadius: '999px',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(218, 41, 28, 0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <span>View Full Menu</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Feature 02: Interactive Floating Mood Selector */}
        <div style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '48px',
        }}>
          {MOODS.map((m) => {
            const isActive = m.id === activeMoodId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMoodId(m.id)}
                style={{
                  background: isActive ? '#1A1817' : '#FFFFFF',
                  color: isActive ? '#FFBC0D' : '#1A1817',
                  border: `2px solid ${isActive ? '#FFBC0D' : '#EADBCE'}`,
                  borderRadius: '999px',
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 8px 24px rgba(0, 0, 0, 0.18)' : '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s cubic-bezier(0.2, 0, 0.3, 1)',
                  transform: isActive ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                }}
              >
                <span style={{ fontSize: '18px' }}>{m.icon}</span>
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Mood Ambient Showcase Banner */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '40px',
          border: '1px solid #EADBCE',
          boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#DA291C',
              fontWeight: 800,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
            }}>
              <span>{selectedMood.icon}</span>
              <span>MOOD CALIBRATION: {selectedMood.label.toUpperCase()}</span>
            </div>

            <h3 style={{
              fontSize: '32px',
              fontWeight: 900,
              color: '#1A1817',
              margin: '0 0 8px 0',
              letterSpacing: '-0.5px'
            }}>
              {selectedMood.mealTitle}
            </h3>

            <p style={{
              fontSize: '18px',
              fontStyle: 'italic',
              color: '#4B5563',
              margin: '0 0 24px 0',
              fontWeight: 500,
            }}>
              {selectedMood.quote}
            </p>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#9CA3AF', marginBottom: '10px' }}>
                INCLUDED IN THIS COMBO:
              </div>
              <div style={{ display: 'grid', gap: '8px' }}>
                {selectedMood.mealItems.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1A1817',
                  }}>
                    <span style={{ color: '#FFBC0D', fontSize: '16px' }}>✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => onBuildComfortMeal(selectedMood.label)}
                style={{
                  background: '#FFBC0D',
                  color: '#1A1817',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(255, 188, 13, 0.4)',
                }}
              >
                <span>Build My {selectedMood.label} Meal</span>
                <span>→</span>
              </button>

              <button
                onClick={() => onAddToCart({
                  id: `mood-${selectedMood.id}`,
                  name: selectedMood.mealTitle,
                  price: selectedMood.mealPrice,
                  image: '/assets/food-mealcombo.jpg',
                  description: selectedMood.mealItems.join(', '),
                })}
                style={{
                  background: '#FAF5EA',
                  color: '#1A1817',
                  border: '1px solid #EADBCE',
                  borderRadius: '999px',
                  padding: '14px 24px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                + Add Combo (₹{selectedMood.mealPrice})
              </button>
            </div>
          </div>

          {/* Right Visual of Mood Meal */}
          <div style={{
            position: 'relative',
            height: '320px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
            background: '#110D0A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid rgba(255, 188, 13, 0.3)',
          }}>
            <IllustratedFoodVisual
              name={selectedMood.mealTitle}
              type={selectedMood.id}
              size={300}
              animated={true}
            />
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(26, 24, 23, 0.85)',
              backdropFilter: 'blur(8px)',
              color: '#FFBC0D',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '13px',
              fontWeight: 800,
            }}>
              Curated for You
            </div>
          </div>
        </div>

        {/* 6 Category Cards directly matching reference image */}
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: 800,
            color: '#6B7280',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            EXPLORE SIGNATURE CATEGORIES
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
          }}>
            {REFERENCE_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                onClick={() => onBuildComfortMeal(cat.title)}
                className="mcd-3d-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #EADBCE',
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '280px',
                }}
              >
                <div style={{
                  height: '140px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  marginBottom: '12px',
                  background: '#1A1410',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <IllustratedFoodVisual
                    type={cat.type}
                    name={cat.title}
                    size={180}
                    animated={true}
                  />
                </div>

                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 800, color: '#1A1817' }}>
                    {cat.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', lineHeight: 1.4 }}>
                    {cat.sub}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#FAF5EA',
                    border: '1px solid #EADBCE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    color: '#DA291C',
                    fontWeight: 900
                  }}>
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
