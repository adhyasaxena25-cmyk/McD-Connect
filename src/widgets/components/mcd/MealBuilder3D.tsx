'use client';

import React, { useState } from 'react';
import { CartItem } from './types';

interface MealBuilder3DProps {
  initialPreset?: string;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

interface BurgerLayer {
  id: string;
  name: string;
  category: 'bun' | 'sauce' | 'cheese' | 'patty' | 'veggie';
  enabled: boolean;
  price: number;
  height: number;
  color: string;
  icon: string;
}

export const MealBuilder3D: React.FC<MealBuilder3DProps> = ({ initialPreset, onAddToCart }) => {
  const [isExplodedView, setIsExplodedView] = useState(true);
  const [isFlyingToCart, setIsFlyingToCart] = useState(false);

  // Layers state
  const [layers, setLayers] = useState<BurgerLayer[]>([
    { id: 'top-bun', name: 'Sesame Brioche Top Bun', category: 'bun', enabled: true, price: 20, height: 42, color: '#E8A34F', icon: '🍞' },
    { id: 'sauce', name: 'Special Big Mac™ 2030 Sauce', category: 'sauce', enabled: true, price: 25, height: 16, color: '#FF7043', icon: '🥫' },
    { id: 'pickles', name: 'Crunchy Dill Pickles & Onions', category: 'veggie', enabled: true, price: 15, height: 18, color: '#689F38', icon: '🥒' },
    { id: 'cheese-1', name: 'Aged Cheddar Melted Slice', category: 'cheese', enabled: true, price: 35, height: 16, color: '#FFB300', icon: '🧀' },
    { id: 'patty', name: '100% Pure Sear-Locked Beef Patty', category: 'patty', enabled: true, price: 95, height: 38, color: '#4E2614', icon: '🥩' },
    { id: 'lettuce', name: 'Shredded Hydroponic Crisp Lettuce', category: 'veggie', enabled: true, price: 15, height: 20, color: '#7CB342', icon: '🥬' },
    { id: 'tomato', name: 'Vine-Ripened Juicy Tomato', category: 'veggie', enabled: true, price: 20, height: 22, color: '#E53935', icon: '🍅' },
    { id: 'bottom-bun', name: 'Golden Toasted Heel Bun', category: 'bun', enabled: true, price: 20, height: 34, color: '#D28637', icon: '🍞' },
  ]);

  const [selectedSauce, setSelectedSauce] = useState('Special Big Mac™ Sauce');
  const [selectedPattyType, setSelectedPattyType] = useState<'Beef' | 'Spicy Chicken' | 'McPlant'>('Beef');
  const [spiceLevel, setSpiceLevel] = useState<'Mild' | 'Medium' | 'Fiery' | 'Ghost'>('Medium');
  const [selectedSide, setSelectedSide] = useState('Golden World Famous Fries');
  const [selectedDrink, setSelectedDrink] = useState('Coca-Cola Chilled');

  const toggleLayer = (id: string) => {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, enabled: !l.enabled } : l))
    );
  };

  // Base price + active layer costs + side + drink
  const baseMealPrice = 249;
  const layersTotal = layers.reduce((acc, l) => (l.enabled ? acc + l.price : acc), 0);
  const totalMealPrice = baseMealPrice + (selectedPattyType === 'Spicy Chicken' ? 30 : selectedPattyType === 'McPlant' ? 40 : 0);

  const handleAddToCart = () => {
    setIsFlyingToCart(true);
    setTimeout(() => {
      onAddToCart({
        id: `custom-burger-${Date.now()}`,
        name: `Custom 3D Burger (${selectedPattyType})`,
        price: totalMealPrice,
        image: '/assets/food-burger.jpg',
        description: `${selectedPattyType} Patty, ${selectedSauce}, ${spiceLevel} Spice, Side: ${selectedSide}, Drink: ${selectedDrink}`,
        customization: {
          patty: selectedPattyType,
          sauce: selectedSauce,
          spice: spiceLevel,
          layers: layers.filter((l) => l.enabled).map((l) => l.name),
          side: selectedSide,
          drink: selectedDrink,
        },
      });
      setIsFlyingToCart(false);
    }, 900);
  };

  return (
    <section id="builder" style={{
      padding: '100px 48px',
      background: 'radial-gradient(ellipse at 50% 50%, #251B19 0%, #151110 80%)',
      color: '#FFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 188, 13, 0.15) 0%, rgba(218, 41, 28, 0.08) 50%, transparent 75%)',
        filter: 'blur(90px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <span>🍔</span>
            <span>Feature 03 — 3D Meal Builder</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Build It Your Way.
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}>
            Experience physical modular gastronomy. Add, remove, swap layers, recalibrate spice,
            and send your bespoke creation straight to your tray.
          </p>
        </div>

        {/* Builder Workspace: Left is Layer Controls, Center is 3D Burger, Right is Sides & Checkout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr 340px',
          gap: '32px',
          alignItems: 'center',
        }}>
          {/* Left Column: Layer Toggles & Patty Selection */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '24px',
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 800, color: '#FFBC0D' }}>
              PATTY ARCHITECTURE
            </h3>

            {/* Patty selector */}
            <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
              {(['Beef', 'Spicy Chicken', 'McPlant'] as const).map((patty) => (
                <button
                  key={patty}
                  onClick={() => setSelectedPattyType(patty)}
                  style={{
                    background: selectedPattyType === patty ? 'rgba(255, 188, 13, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${selectedPattyType === patty ? '#FFBC0D' : 'rgba(255, 255, 255, 0.1)'}`,
                    color: selectedPattyType === patty ? '#FFBC0D' : '#FFF',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s',
                  }}
                >
                  <span>{patty === 'Beef' ? '🥩 Pure Beef' : patty === 'Spicy Chicken' ? '🍗 Crispy Chicken' : '🌱 McPlant'}</span>
                  <span>{patty === 'Beef' ? 'Included' : patty === 'Spicy Chicken' ? '+₹30' : '+₹40'}</span>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#FFF' }}>
                BURGER LAYERS
              </h3>
              <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Toggle On/Off</span>
            </div>

            {/* Layers list */}
            <div style={{ display: 'grid', gap: '8px', maxHeight: '300px', overflowY: 'auto' }}>
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: layer.enabled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${layer.enabled ? 'rgba(255, 188, 13, 0.4)' : 'rgba(255, 255, 255, 0.05)'}`,
                    opacity: layer.enabled ? 1 : 0.45,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{layer.icon}</span>
                    <span style={{ fontSize: '12px', fontWeight: 600 }}>{layer.name}</span>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: layer.enabled ? '#FFBC0D' : '#6B7280',
                    fontWeight: 700
                  }}>
                    {layer.enabled ? '✓' : '✗'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: 3D Layer Stack View */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '480px',
          }}>
            {/* View Mode Toggle Button */}
            <div style={{
              position: 'absolute',
              top: '10px',
              display: 'flex',
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '999px',
              padding: '4px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              zIndex: 10,
            }}>
              <button
                onClick={() => setIsExplodedView(true)}
                style={{
                  background: isExplodedView ? '#FFBC0D' : 'transparent',
                  color: isExplodedView ? '#1A1817' : '#FFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                💥 Exploded 3D View
              </button>
              <button
                onClick={() => setIsExplodedView(false)}
                style={{
                  background: !isExplodedView ? '#FFBC0D' : 'transparent',
                  color: !isExplodedView ? '#1A1817' : '#FFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                🍔 Assembled Bite
              </button>
            </div>

            {/* 3D Burger Stack */}
            <div
              className={isFlyingToCart ? 'animate-fly-to-cart' : ''}
              style={{
                position: 'relative',
                width: '280px',
                height: '380px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transformStyle: 'preserve-3d',
                transform: isExplodedView
                  ? 'rotateX(20deg) rotateY(-12deg) scale(0.95)'
                  : 'rotateX(10deg) rotateY(-5deg) scale(1)',
                transition: 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
              }}
            >
              {layers
                .filter((l) => l.enabled)
                .map((layer, index, arr) => {
                  const spacing = isExplodedView ? (arr.length - index) * 28 : (arr.length - index) * 6;
                  return (
                    <div
                      key={layer.id}
                      style={{
                        position: 'relative',
                        width: layer.id.includes('bun') ? '240px' : layer.id === 'patty' ? '250px' : '230px',
                        height: `${layer.height}px`,
                        background: `linear-gradient(180deg, ${layer.color}, ${adjustColor(layer.color, -30)})`,
                        borderRadius: layer.id === 'top-bun'
                          ? '120px 120px 20px 20px'
                          : layer.id === 'bottom-bun'
                          ? '20px 20px 60px 60px'
                          : '16px',
                        boxShadow: `0 ${isExplodedView ? '14px 28px' : '4px 8px'} rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)`,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        marginBottom: `${isExplodedView ? '14px' : '2px'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: `translateZ(${spacing}px)`,
                        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                        cursor: 'pointer',
                      }}
                      title={`${layer.name} (Click to remove)`}
                      onClick={() => toggleLayer(layer.id)}
                    >
                      {/* Top Bun Sesame Seeds */}
                      {layer.id === 'top-bun' && (
                        <div style={{
                          position: 'absolute',
                          inset: '6px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '12px',
                          justifyContent: 'center',
                          opacity: 0.8
                        }}>
                          {[...Array(12)].map((_, i) => (
                            <span key={i} style={{
                              width: '4px',
                              height: '7px',
                              background: '#FFF3E0',
                              borderRadius: '40%',
                              transform: `rotate(${i * 25}deg)`
                            }} />
                          ))}
                        </div>
                      )}

                      {/* Patty Texture Details */}
                      {layer.id === 'patty' && (
                        <div style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: 'rgba(255, 255, 255, 0.75)',
                          letterSpacing: '1px'
                        }}>
                          {selectedPattyType.toUpperCase()} SEAR
                        </div>
                      )}

                      {/* Cheese Melt Drips */}
                      {layer.id === 'cheese-1' && (
                        <div style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '20%',
                          width: '18px',
                          height: '14px',
                          background: '#FFB300',
                          borderRadius: '0 0 10px 10px',
                        }} />
                      )}

                      {isExplodedView && (
                        <span style={{
                          position: 'absolute',
                          right: '-140px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#FFBC0D',
                          whiteSpace: 'nowrap',
                          background: 'rgba(0,0,0,0.6)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          pointerEvents: 'none',
                        }}>
                          {layer.icon} {layer.name.split(' ')[0]}
                        </span>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Right Column: Sauces, Spice, Sides, Drink & Checkout */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '24px',
          }}>
            {/* Sauce Swapper */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                SIGNATURE SAUCE
              </label>
              <select
                value={selectedSauce}
                onChange={(e) => setSelectedSauce(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                <option value="Special Big Mac™ Sauce" style={{ background: '#1A1817' }}>Special Big Mac™ Sauce</option>
                <option value="Spicy Habanero Fire" style={{ background: '#1A1817' }}>Spicy Habanero Fire</option>
                <option value="Smokey Hickory BBQ" style={{ background: '#1A1817' }}>Smokey Hickory BBQ</option>
                <option value="Creamy Roasted Garlic Mayo" style={{ background: '#1A1817' }}>Creamy Roasted Garlic Mayo</option>
              </select>
            </div>

            {/* Spice Index */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF' }}>SPICE CALIBRATION</span>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFBC0D' }}>{spiceLevel}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {(['Mild', 'Medium', 'Fiery', 'Ghost'] as const).map((sp) => (
                  <button
                    key={sp}
                    onClick={() => setSpiceLevel(sp)}
                    style={{
                      background: spiceLevel === sp ? '#DA291C' : 'rgba(255, 255, 255, 0.06)',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {sp}
                  </button>
                ))}
              </div>
            </div>

            {/* Side Selection */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                CHOOSE COMPANION SIDE
              </label>
              <select
                value={selectedSide}
                onChange={(e) => setSelectedSide(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                <option value="Golden World Famous Fries" style={{ background: '#1A1817' }}>🍟 World Famous Fries (Medium)</option>
                <option value="Peri Peri Shaker Fries" style={{ background: '#1A1817' }}>🌶️ Peri Peri Shaker Fries</option>
                <option value="Cheesy Herb Dippers" style={{ background: '#1A1817' }}>🧀 Cheesy Herb Dippers (4pc)</option>
                <option value="Fresh Apple Slices" style={{ background: '#1A1817' }}>🍏 Crisp Apple Slices</option>
              </select>
            </div>

            {/* Drink Selection */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                CHOOSE DRINK
              </label>
              <select
                value={selectedDrink}
                onChange={(e) => setSelectedDrink(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                <option value="Coca-Cola Chilled" style={{ background: '#1A1817' }}>🥤 Coca-Cola Original</option>
                <option value="Coca-Cola Zero Sugar" style={{ background: '#1A1817' }}>🥤 Coca-Cola Zero Sugar</option>
                <option value="McCafé Iced Latte" style={{ background: '#1A1817' }}>☕ McCafé Iced Latte (+₹20)</option>
                <option value="Sprite Chill Zero" style={{ background: '#1A1817' }}>🍋 Sprite Zero</option>
              </select>
            </div>

            {/* Price & Fly to Cart CTA */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
                <span style={{ fontSize: '13px', color: '#9CA3AF' }}>YOUR CREATION</span>
                <span style={{ fontSize: '28px', fontWeight: 900, color: '#FFBC0D' }}>
                  ₹{totalMealPrice}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isFlyingToCart}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #FFBC0D 0%, #F59E0B 100%)',
                  color: '#1A1817',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: 900,
                  cursor: isFlyingToCart ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 25px rgba(255, 188, 13, 0.4)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <span>{isFlyingToCart ? '🚀 Flying to Cart...' : 'Add to Cart →'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function adjustColor(hex: string, percent: number) {
  let num = parseInt(hex.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}
