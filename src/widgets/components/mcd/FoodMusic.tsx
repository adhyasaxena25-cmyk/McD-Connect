'use client';

import React, { useState, useEffect } from 'react';
import { CartItem } from './types';
import { IllustratedFoodVisual } from './IllustratedFood';

interface FoodMusicProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

interface PlaylistVibe {
  id: string;
  title: string;
  artist: string;
  energyLabel: string;
  bpm: number;
  matchScore: number;
  recommendationQuote: string;
  mealTitle: string;
  mealDesc: string;
  price: number;
  image: string;
  color: string;
}

const PLAYLIST_VIBES: PlaylistVibe[] = [
  {
    id: 'synthwave',
    title: 'Neon High Voltage',
    artist: 'Future Pulse Radio',
    energyLabel: 'High Energy & Hyper-Focused',
    bpm: 128,
    matchScore: 87,
    recommendationQuote: '“Your playlist is feeling energetic. Your meal should too.”',
    mealTitle: 'Spicy McCrispy™ Turbo Surge Meal',
    mealDesc: 'Fiery habanero crunch chicken fillet + large shaker peri-peri fries + chilled Sprite',
    price: 329,
    image: '/assets/mcd-chicken-wraps.png',
    color: '#FFBC0D',
  },
  {
    id: 'lofi',
    title: 'Rainy Day Coding Beats',
    artist: 'Chilled Cow Session',
    energyLabel: 'Warm, Calm & Meditative',
    bpm: 72,
    matchScore: 94,
    recommendationQuote: '“Smooth mellow chords deserve a slow-crafted comforting treat.”',
    mealTitle: 'McCafé™ Velvet Caramel & Warm Cookie',
    mealDesc: 'Rich double-shot caramel iced latte with oat milk + soft-baked chocolate chunk cookie',
    price: 249,
    image: '/assets/mcd-mccafe-desserts.png',
    color: '#3B82F6',
  },
  {
    id: 'rnb',
    title: 'Midnight Afterglow',
    artist: 'Velvet Groove Radio',
    energyLabel: 'Sensual, Deep & Late Night',
    bpm: 86,
    matchScore: 91,
    recommendationQuote: '“Late night soulful rhythms call for savory indulgence.”',
    mealTitle: 'Double Quarter Pounder™ Velvet Melt',
    mealDesc: 'Two juicy beef patties, double melted gouda, caramelized onion jam + chocolate shake',
    price: 389,
    image: '/assets/mcd-burgers-trio.png',
    color: '#EC4899',
  },
  {
    id: 'festival',
    title: 'Electro Crowd Anthems',
    artist: 'Mainstage Live 2030',
    energyLabel: 'Euphoric & Celebratory',
    bpm: 135,
    matchScore: 89,
    recommendationQuote: '“Big festival bass demands a sharing squad feast.”',
    mealTitle: '20pc Golden McNuggets™ Festival Pack',
    mealDesc: '20 crispy chicken nuggets with 4 signature dips (Habanero, Sweet Chili, BBQ, Honey)',
    price: 449,
    image: '/assets/mcd-nuggets-fries-feast.png',
    color: '#10B981',
  },
];

export const FoodMusic: React.FC<FoodMusicProps> = ({ onAddToCart }) => {
  const [activeVibeId, setActiveVibeId] = useState('synthwave');
  const [isPlaying, setIsPlaying] = useState(true);
  const [visualizerHeights, setVisualizerHeights] = useState<number[]>([40, 75, 55, 90, 60, 80, 45, 95, 70, 85, 50, 65]);

  const activeVibe = PLAYLIST_VIBES.find((v) => v.id === activeVibeId) || PLAYLIST_VIBES[0];

  // Dynamic visualizer bounce animation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setVisualizerHeights(
        Array.from({ length: 16 }, () => Math.floor(Math.random() * 70) + 25)
      );
    }, 180);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section style={{
      padding: '100px 48px',
      background: '#1A1817',
      color: '#FFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
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
            <span>🎵</span>
            <span>Feature 05 — Food × Music</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            What Are You Listening To?
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Connect your auditory wavelength. McDonald&apos;s lifestyle intelligence synchronizes
            your acoustic tempo with your appetite.
          </p>
        </div>

        {/* Music Player Console & Food Recommendation */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '32px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
        }}>
          {/* Left: Spotify/Music Player Console */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '24px',
            padding: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>🎧</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#1DB954', letterSpacing: '1px' }}>
                  AUDIO SYNC CONNECTED
                </span>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFF',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  cursor: 'pointer',
                }}
              >
                {isPlaying ? '⏸ Pause Wave' : '▶ Resume Wave'}
              </button>
            </div>

            {/* Playlist Channel Selector */}
            <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
              {PLAYLIST_VIBES.map((vibe) => (
                <button
                  key={vibe.id}
                  onClick={() => setActiveVibeId(vibe.id)}
                  style={{
                    background: activeVibe.id === vibe.id ? 'rgba(255, 188, 13, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${activeVibe.id === vibe.id ? '#FFBC0D' : 'rgba(255, 255, 255, 0.06)'}`,
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: '#FFF',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: activeVibe.id === vibe.id ? '#FFBC0D' : '#FFF' }}>
                      {vibe.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9CA3AF' }}>{vibe.artist}</div>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}>
                    {vibe.bpm} BPM
                  </span>
                </button>
              ))}
            </div>

            {/* Live Audio Visualizer Equalizer */}
            <div style={{
              height: '70px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '4px',
              padding: '10px 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}>
              {visualizerHeights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '100%',
                    height: `${isPlaying ? h : 15}%`,
                    background: `linear-gradient(180deg, ${activeVibe.color}, #DA291C)`,
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.15s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Generated Food Recommendation */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #DA291C, #FFBC0D)',
                color: '#FFF',
                fontWeight: 900,
                fontSize: '13px',
                padding: '4px 14px',
                borderRadius: '999px',
                boxShadow: '0 4px 15px rgba(218, 41, 28, 0.4)',
              }}>
                {activeVibe.matchScore}% AUDIO-FLAVOR MATCH
              </div>
              <span style={{ fontSize: '13px', color: '#9CA3AF' }}>
                Energy: <strong>{activeVibe.energyLabel}</strong>
              </span>
            </div>

            <h3 style={{
              fontSize: '26px',
              fontWeight: 800,
              fontStyle: 'italic',
              margin: '0 0 12px 0',
              color: '#FFBC0D',
              lineHeight: 1.3,
            }}>
              {activeVibe.recommendationQuote}
            </h3>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              marginBottom: '24px',
            }}>
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '16px',
                background: 'radial-gradient(circle, rgba(255, 188, 13, 0.2) 0%, rgba(20, 16, 14, 0.9) 100%)',
                border: '1px solid rgba(255, 188, 13, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <IllustratedFoodVisual
                  name={activeVibe.mealTitle}
                  type={activeVibe.id}
                  size={95}
                  animated={true}
                />
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 800, color: '#FFF' }}>
                  {activeVibe.mealTitle}
                </h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.4 }}>
                  {activeVibe.mealDesc}
                </p>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#FFBC0D' }}>
                  ₹{activeVibe.price}
                </div>
              </div>
            </div>

            <button
              onClick={() => onAddToCart({
                id: `music-${activeVibe.id}`,
                name: activeVibe.mealTitle,
                price: activeVibe.price,
                image: activeVibe.image,
                description: `Soundtrack-matched to ${activeVibe.title} (${activeVibe.bpm} BPM)`,
              })}
              style={{
                background: '#FFBC0D',
                color: '#1A1817',
                border: 'none',
                borderRadius: '999px',
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: 900,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(255, 188, 13, 0.35)',
              }}
            >
              <span>Order Harmonized Meal</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
