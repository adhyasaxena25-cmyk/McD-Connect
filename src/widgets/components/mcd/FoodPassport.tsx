'use client';

import React, { useState } from 'react';
import { PassportItem } from './types';

export const FoodPassport: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [discoveredCount, setDiscoveredCount] = useState(12);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<string | null>(null);

  const [items, setItems] = useState<PassportItem[]>([
    {
      id: 'bigmac',
      name: 'Big Mac™ Double Original',
      category: 'Classics',
      rarity: 'Classic',
      discovered: true,
      calories: '550 kcal',
      tasteMatch: 95,
      description: 'Two 100% pure beef patties, special sauce, crisp lettuce, melted cheese, pickles, onions on a toasted sesame seed bun.',
      flavorNotes: ['Savory Umami', 'Pickle Tang', 'Char-Seared'],
      image: '/assets/food-bigmac-real.jpg',
    },
    {
      id: 'spicy-mccrispy',
      name: 'Spicy McCrispy™ Deluxe',
      category: 'Spicy',
      rarity: 'Epic',
      discovered: true,
      calories: '490 kcal',
      tasteMatch: 88,
      description: 'Southern style buttermilk chicken breast with spicy habanero glaze, crinkle-cut pickles on a toasted potato roll.',
      flavorNotes: ['Fiery Crunch', 'Buttermilk Velvet', 'Habanero Zing'],
      image: '/assets/mcd-chicken-wraps.png',
    },
    {
      id: 'mcflurry-fudge',
      name: 'Oreo® Double Fudge Swirl',
      category: 'Desserts',
      rarity: 'Classic',
      discovered: true,
      calories: '480 kcal',
      tasteMatch: 92,
      description: 'Creamy vanilla soft serve spun with crushed Oreo cookies and warm chocolate fudge ripples.',
      flavorNotes: ['Sweet Cream', 'Dark Cocoa Crunch', 'Velvet Fudge'],
      image: '/assets/food-mcflurry.jpg',
    },
    {
      id: 'mccafe-latte',
      name: 'McCafé™ Artisan Iced Latte',
      category: 'McCafé',
      rarity: 'Epic',
      discovered: true,
      calories: '180 kcal',
      tasteMatch: 90,
      description: 'Rainforest Alliance Certified espresso blended with organic milk over crystallised ice.',
      flavorNotes: ['Toasted Hazelnut', 'Silky Crema', 'Mild Acidity'],
      image: '/assets/food-icedcoffee.jpg',
    },
    {
      id: 'mcmuffin-egg',
      name: 'Egg McMuffin™ Sunrise',
      category: 'Breakfast',
      rarity: 'Classic',
      discovered: true,
      calories: '310 kcal',
      tasteMatch: 87,
      description: 'Fresh cracked Grade A egg, Canadian bacon, melted American cheese on a toasted English muffin.',
      flavorNotes: ['Smoky Bacon', 'Warm Yolk', 'Toasted Wheat'],
      image: '/assets/mcd-breakfast-banner.png',
    },
    {
      id: 'cyber-drop',
      name: 'Cyber Wasabi Wagyu Stack',
      category: 'Limited Edition',
      rarity: 'Legendary',
      discovered: false,
      calories: '610 kcal',
      tasteMatch: 98,
      description: 'Experimental A5 Miyazaki wagyu patty with wasabi citrus glaze, fermented scallions, and gold dust brioche.',
      flavorNotes: ['Wagyu Richness', 'Nasal Cleansing Heat', 'Crisp Scallion'],
      image: '/assets/mcd-burgers-trio.png',
    },
  ]);

  const categories = ['All', 'Classics', 'Spicy', 'Desserts', 'McCafé', 'Breakfast', 'Limited Edition'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handleUnlockNew = () => {
    const undiscovered = items.find((i) => !i.discovered);
    if (undiscovered) {
      setItems((prev) =>
        prev.map((i) => (i.id === undiscovered.id ? { ...i, discovered: true } : i))
      );
      setDiscoveredCount((c) => c + 1);
      setRecentlyUnlocked(undiscovered.name);
      setTimeout(() => setRecentlyUnlocked(null), 4000);
    } else {
      alert('🏆 Master Food Explorer! You have unlocked every passport item in this sector!');
    }
  };

  return (
    <section id="passport" style={{
      padding: '100px 48px',
      background: '#FAF5EA',
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
            background: 'rgba(218, 41, 28, 0.1)',
            color: '#DA291C',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            <span>🛂</span>
            <span>Feature 07 — Food Passport</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            color: '#1A1817',
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Your Food Passport.
          </h2>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#FFFFFF',
            border: '2px solid #FFBC0D',
            padding: '8px 24px',
            borderRadius: '999px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            marginBottom: '16px',
          }}>
            <span style={{ fontSize: '18px', fontWeight: 900, color: '#DA291C' }}>
              {discoveredCount} / 40 DISCOVERED
            </span>
            <div style={{
              width: '120px',
              height: '8px',
              background: '#F3EDE2',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${(discoveredCount / 40) * 100}%`,
                height: '100%',
                background: '#DA291C',
              }} />
            </div>
          </div>

          <p style={{
            fontSize: '17px',
            color: '#6B7280',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Every meal is an archival collectible stamp. Flip cards to reveal flavor science,
            nutritional metrics, and rare culinary patents.
          </p>
        </div>

        {/* Recently Unlocked Toast */}
        {recentlyUnlocked && (
          <div style={{
            maxWidth: '480px',
            margin: '0 auto 30px auto',
            background: '#1A1817',
            color: '#FFBC0D',
            padding: '12px 24px',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            animation: 'mcdFloatPulse 0.4s ease-out',
            fontSize: '14px',
            fontWeight: 800,
          }}>
            <span>✦ NEW DISCOVERY UNLOCKED:</span>
            <span>{recentlyUnlocked}</span>
          </div>
        )}

        {/* Filter Category Tabs + Unlock Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '36px',
        }}>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#1A1817' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFBC0D' : '#1A1817',
                  border: `1px solid ${activeCategory === cat ? '#1A1817' : '#EADBCE'}`,
                  borderRadius: '999px',
                  padding: '8px 18px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={handleUnlockNew}
            style={{
              background: '#DA291C',
              color: '#FFF',
              border: 'none',
              borderRadius: '999px',
              padding: '10px 22px',
              fontSize: '13px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 15px rgba(218, 41, 28, 0.3)',
            }}
          >
            <span>✦ Stamp New Discovery</span>
          </button>
        </div>

        {/* Collectible Cards Grid with 3D Flip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {filteredItems.map((item) => {
            const isFlipped = flippedCardId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setFlippedCardId(isFlipped ? null : item.id)}
                className="mcd-3d-card"
                style={{
                  height: '360px',
                  perspective: '1000px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  textAlign: 'left',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>
                  {/* FRONT OF CARD */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    border: `2px solid ${item.discovered ? '#EADBCE' : '#DA291C'}`,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  }}>
                    <div>
                      {/* Top Badges */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{
                          background: item.rarity === 'Legendary' ? '#DA291C' : item.rarity === 'Epic' ? '#8B5CF6' : '#FFBC0D',
                          color: item.rarity === 'Classic' ? '#1A1817' : '#FFF',
                          fontSize: '10px',
                          fontWeight: 900,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          letterSpacing: '1px',
                        }}>
                          {item.rarity.toUpperCase()}
                        </span>

                        <span style={{ fontSize: '12px', fontWeight: 800, color: item.discovered ? '#10B981' : '#9CA3AF' }}>
                          {item.discovered ? 'COLLECTED ✓' : 'LOCKED 🔒'}
                        </span>
                      </div>

                      {/* Card Visual with Real Food Photo */}
                      <div style={{
                        height: '160px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                        marginBottom: '14px',
                        background: '#111',
                        filter: item.discovered ? 'none' : 'grayscale(1) brightness(0.5)',
                        border: '1px solid rgba(60, 40, 20, 0.4)',
                      }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.currentTarget.src = '/assets/food-burger.jpg';
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                          }}
                        />
                        {!item.discovered && (
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0,0,0,0.55)',
                            color: '#FFF',
                            fontSize: '24px'
                          }}>
                            🔒
                          </div>
                        )}
                      </div>

                      <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 900, color: '#1A1817' }}>
                        {item.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', lineHeight: 1.4 }}>
                        {item.category} • {item.calories}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid #F3EDE2',
                      paddingTop: '10px'
                    }}>
                      <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600 }}>
                        Click card to flip ↺
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#DA291C' }}>
                        {item.tasteMatch}% Match
                      </span>
                    </div>
                  </div>

                  {/* BACK OF CARD (Flipped Details) */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: '#1A1817',
                    color: '#FFF',
                    borderRadius: '24px',
                    border: '2px solid #FFBC0D',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#FFBC0D', fontWeight: 900, letterSpacing: '1px', marginBottom: '8px' }}>
                        ✦ PASSPORT DOSSIER #{item.id.toUpperCase()}
                      </div>
                      <h4 style={{ fontSize: '18px', fontWeight: 900, margin: '0 0 10px 0', color: '#FFF' }}>
                        {item.name}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                        {item.description}
                      </p>

                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', marginBottom: '8px' }}>
                        SIGNATURE FLAVOR NOTES:
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {item.flavorNotes.map((fn, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: 'rgba(255, 188, 13, 0.15)',
                              color: '#FFBC0D',
                              border: '1px solid rgba(255, 188, 13, 0.3)',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 700,
                            }}
                          >
                            {fn}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center' }}>
                      Click again to flip back ↺
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
