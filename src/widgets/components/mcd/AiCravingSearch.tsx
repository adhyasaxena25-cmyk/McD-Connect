'use client';

import React, { useState, useMemo } from 'react';
import { CartItem } from './types';
import { IllustratedFoodVisual } from './IllustratedFood';

interface AiCravingSearchProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onClose?: () => void;
}

interface SearchFoodItem {
  id: string;
  name: string;
  category: string;
  price: number;
  tags: string[];
  spiceLevel: number;
  calories: string;
  image: string;
  reason: string;
}

const SEARCH_CATALOG: SearchFoodItem[] = [
  {
    id: 'crav-1',
    name: 'Spicy McCrispy™ Turbo Combo',
    category: 'Spicy / Crispy',
    price: 299,
    tags: ['spicy', 'under 300', 'crispy', 'filling'],
    spiceLevel: 3,
    calories: '620 kcal',
    image: '/assets/mcd-chicken-wraps.png',
    reason: 'Matches your craving for high crunch and spicy pepper glaze under ₹300.',
  },
  {
    id: 'crav-2',
    name: 'Double Big Mac™ Supreme',
    category: 'Burgers / Filling',
    price: 349,
    tags: ['filling', 'beef', 'comfort', 'classic'],
    spiceLevel: 1,
    calories: '740 kcal',
    image: '/assets/food-bigmac-real.jpg',
    reason: 'Four sear-locked pure beef patties for peak hearty satiety.',
  },
  {
    id: 'crav-3',
    name: 'Fiery Peri-Peri Crisscut Fries',
    category: 'Snacks / Sides',
    price: 189,
    tags: ['spicy', 'under 300', 'crispy', 'snack'],
    spiceLevel: 4,
    calories: '380 kcal',
    image: '/assets/food-fries-close.jpg',
    reason: 'Ultra-crisp lattice cut tossed in African bird’s eye chili dusting.',
  },
  {
    id: 'crav-4',
    name: 'Warm Lava Fudge McFlurry™',
    category: 'Dessert / Sweet',
    price: 199,
    tags: ['sweet', 'after dinner', 'under 300', 'dessert'],
    spiceLevel: 0,
    calories: '420 kcal',
    image: '/assets/food-mcflurry.jpg',
    reason: 'Molten Belgian dark chocolate lava swirled inside rich soft serve.',
  },
  {
    id: 'crav-5',
    name: 'McCafé™ Double Mocha Chiller',
    category: 'McCafé / Sweet',
    price: 249,
    tags: ['sweet', 'under 300', 'coffee'],
    spiceLevel: 0,
    calories: '320 kcal',
    image: '/assets/food-icedcoffee.jpg',
    reason: 'Silky espresso blend topped with chocolate chips and whipped cream.',
  },
  {
    id: 'crav-6',
    name: '9pc Spicy Habanero Nuggets',
    category: 'Snacks / Spicy',
    price: 279,
    tags: ['spicy', 'under 300', 'crispy', 'filling'],
    spiceLevel: 3,
    calories: '490 kcal',
    image: '/assets/food-nuggets.jpg',
    reason: 'Tempura-battered crispy bites with smoky pepper crunch.',
  },
];

export const AiCravingSearch: React.FC<AiCravingSearchProps> = ({ onAddToCart, onClose }) => {
  const [query, setQuery] = useState('Something spicy under ₹300');

  const promptPills = [
    'Something spicy under ₹300',
    'I want something filling',
    'Surprise me',
    'Something sweet after dinner',
    'Crispy and cheesy snacks',
  ];

  const matchedResults = useMemo(() => {
    const q = query.toLowerCase();
    if (q.includes('surprise')) {
      return [SEARCH_CATALOG[0], SEARCH_CATALOG[1], SEARCH_CATALOG[3]];
    }
    if (q.includes('spicy') || q.includes('under 300')) {
      return SEARCH_CATALOG.filter((item) =>
        item.tags.includes('spicy') && item.price <= 300
      );
    }
    if (q.includes('filling')) {
      return SEARCH_CATALOG.filter((item) => item.tags.includes('filling'));
    }
    if (q.includes('sweet') || q.includes('dinner')) {
      return SEARCH_CATALOG.filter((item) => item.tags.includes('sweet'));
    }
    return SEARCH_CATALOG.slice(0, 3);
  }, [query]);

  return (
    <section id="cravings" style={{
      padding: '100px 48px',
      background: '#1A1817',
      color: '#FFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 188, 13, 0.15)',
            color: '#FFBC0D',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            <span>✨</span>
            <span>Feature 10 — AI Craving Search</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Tell Us What You&apos;re Craving…
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Skip keywords. Speak in feelings, cravings, late-night impulses, or strict budgets.
            Our neural matching model maps your intention to the grill.
          </p>
        </div>

        {/* Big Search Input Field */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto 24px auto',
          position: 'relative',
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '2px solid rgba(255, 188, 13, 0.5)',
            borderRadius: '999px',
            padding: '8px 12px 8px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 188, 13, 0.2)',
          }}>
            <span style={{ fontSize: '20px' }}>🔮</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Something spicy under ₹300, or a late night sweet treat..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: '#FFF',
                fontSize: '17px',
                fontWeight: 600,
                outline: 'none',
              }}
            />
            <button
              onClick={() => {}}
              style={{
                background: '#FFBC0D',
                color: '#1A1817',
                border: 'none',
                borderRadius: '999px',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Analyze Craving
            </button>
          </div>
        </div>

        {/* Prompt Suggestion Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '50px',
        }}>
          {promptPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setQuery(pill)}
              style={{
                background: query === pill ? 'rgba(255, 188, 13, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${query === pill ? '#FFBC0D' : 'rgba(255, 255, 255, 0.1)'}`,
                color: query === pill ? '#FFBC0D' : 'rgba(255, 255, 255, 0.8)',
                borderRadius: '999px',
                padding: '8px 18px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              «“{pill}”»
            </button>
          ))}
        </div>

        {/* AI Match Reasoning Bar */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '16px 24px',
          marginBottom: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              background: '#FFBC0D',
              color: '#1A1817',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 900,
            }}>
              {matchedResults.length} MATCHES FOUND
            </span>
            <span style={{ fontSize: '15px', color: '#FFF', fontStyle: 'italic' }}>
              «“We picked these because you asked for <strong>{query}</strong>.”»
            </span>
          </div>
          <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Confidence Index: 96.4%</span>
        </div>

        {/* Results Cards with 3D Spring Tilt */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
        }}>
          {matchedResults.map((item) => (
            <div
              key={item.id}
              className="mcd-3d-card"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
              }}
            >
              <div>
                <div style={{
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '16px',
                  background: 'radial-gradient(circle at 50% 50%, #2E2420 0%, #171312 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 188, 13, 0.2)',
                }}>
                  <IllustratedFoodVisual
                    name={item.name}
                    type={item.category}
                    size={140}
                    animated={true}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(26, 24, 23, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFBC0D',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 800,
                  }}>
                    {item.category}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 900, color: '#FFF' }}>
                    {item.name}
                  </h3>
                  <span style={{ fontSize: '20px', fontWeight: 900, color: '#FFBC0D' }}>
                    ₹{item.price}
                  </span>
                </div>

                <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                  💡 {item.reason}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button
                  onClick={() => onAddToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    description: item.reason,
                  })}
                  style={{
                    flex: 1,
                    background: '#FFBC0D',
                    color: '#1A1817',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontSize: '14px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <span>Add to Order</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
