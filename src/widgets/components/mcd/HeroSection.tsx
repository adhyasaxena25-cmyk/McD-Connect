'use client';

import React, { useState } from 'react';
import { CategoryBar } from './CategoryBar';

interface HeroSectionProps {
  onExploreTaste: () => void;
  onBuildMeal: () => void;
  onOrderNow: () => void;
  onSelectCategory?: (category: string) => void;
  onOpenRewards?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTaste,
  onBuildMeal,
  onOrderNow,
  onSelectCategory = () => {},
  onOpenRewards = () => {},
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [watchModalOpen, setWatchModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Burgers');

  // Interactive carousel slides data
  const carouselItems = [
    {
      name: 'Mighty McDouble',
      emoji: '🔥',
      subtext: '100% Beef. No compromises.',
      badge: '-2°C CHILLED',
      image: '/assets/food-bigmac-real.jpg',
      cravings: 'Savory & Smoky',
    },
    {
      name: 'Crispy McSpicy™',
      emoji: '🌶️',
      subtext: 'Double breaded for 78dB acoustic crunch.',
      badge: 'EXTRA CRISPY',
      image: '/assets/mcd-chicken-wraps.png',
      cravings: 'Spicy & Crispy',
    },
    {
      name: 'Triple Big Mac™ 2030',
      emoji: '⭐',
      subtext: 'Sear-locked beef with velvet special sauce.',
      badge: 'TOP RATED',
      image: '/assets/mcd-burgers-trio.png',
      cravings: 'Rich & Creamy',
    },
    {
      name: 'Golden Fries & Shake',
      emoji: '🍟',
      subtext: 'Idaho Russet Burbank with salted caramel.',
      badge: 'BEST COMBO',
      image: '/assets/mcd-nuggets-fries-feast.png',
      cravings: 'Sweet & Salty',
    },
  ];

  const currentItem = carouselItems[carouselIndex];

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    onSelectCategory(catId);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0D0B0A',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '96px',
        paddingBottom: '32px',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background Realistic Food Photography Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: "url('/assets/mcd_clean_hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95,
          zIndex: 1,
        }}
      />

      {/* Dark Vignette Overlay: Smooth fade on the left to ensure crisp text contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(90deg, #0D0B0A 0%, rgba(13, 11, 10, 0.92) 38%, rgba(13, 11, 10, 0.5) 62%, rgba(13, 11, 10, 0.1) 85%, rgba(13, 11, 10, 0.4) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Warm Embers Ambient Glow on Top */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '25%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 188, 13, 0.14) 0%, rgba(218, 41, 28, 0.08) 45%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Main Hero Grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1360px',
          margin: '0 auto',
          width: '100%',
          padding: '24px 32px 0 32px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1.2fr',
          gap: '30px',
          alignItems: 'center',
          flex: 1,
        }}
        className="mcd-hero-grid"
      >
        {/* Left Column: Authentic Brand Typography */}
        <div style={{ maxWidth: '560px', zIndex: 5 }}>
          {/* Kicker */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFBC0D',
              fontSize: '13.5px',
              fontWeight: 800,
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}
          >
            <span style={{ fontSize: '15px' }}>✨</span>
            <span>GOOD FOOD. BRIGHTER DAYS.</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(52px, 6.2vw, 84px)',
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: '-2px',
              margin: '0 0 22px 0',
              color: '#FFFFFF',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
            }}
          >
            More Than<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Just Food
              {/* Hand-drawn golden brush underline */}
              <svg
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-2%',
                  width: '104%',
                  height: '18px',
                  zIndex: -1,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
                }}
                viewBox="0 0 260 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C50 6 150 4 256 12C200 18 100 17 4 14Z"
                  fill="#FFBC0D"
                  opacity="0.95"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.55,
              color: '#D1D5DB',
              margin: '0 0 16px 0',
              fontWeight: 400,
              maxWidth: '460px',
            }}
          >
            Great taste. Brighter moments. A kinder tomorrow.<br />
            That&apos;s the McDonald&apos;s way.
          </p>

          {/* Motto Quote */}
          <p
            style={{
              fontSize: '16px',
              color: '#FFC72C',
              fontStyle: 'italic',
              fontWeight: 600,
              margin: '0 0 32px 0',
              letterSpacing: '-0.2px',
            }}
          >
            &ldquo;A menu that learns what you love.&rdquo;
          </p>

          {/* Action CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {/* Primary Golden Button */}
            <button
              onClick={onExploreTaste}
              style={{
                background: '#FFBC0D',
                color: '#1A1817',
                border: 'none',
                borderRadius: '999px',
                padding: '15px 32px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 22px rgba(255, 188, 13, 0.45)',
                transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(255, 188, 13, 0.65)';
                e.currentTarget.style.background = '#FFC72C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 22px rgba(255, 188, 13, 0.45)';
                e.currentTarget.style.background = '#FFBC0D';
              }}
            >
              <span>Explore MyTaste</span>
              <span style={{ fontSize: '16px' }}>→</span>
            </button>

            {/* Secondary Dark Glass Button */}
            <button
              onClick={onBuildMeal}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '999px',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFBC0D';
                e.currentTarget.style.color = '#FFBC0D';
                e.currentTarget.style.background = 'rgba(255, 188, 13, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '15px' }}>🛠️</span>
              <span>Build My Meal</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual Overlay Controls */}
        <div
          style={{
            position: 'relative',
            height: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mcd-hero-visual-area"
        >
          {/* 1. Watch It Made Button (positioned over the center of the burger) */}
          <button
            onClick={() => setWatchModalOpen(true)}
            style={{
              position: 'absolute',
              top: '48%',
              left: '42%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(20, 18, 16, 0.72)',
              border: '1.5px solid rgba(255, 255, 255, 0.55)',
              borderRadius: '999px',
              padding: '9px 20px',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(0,0,0,0.3)',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 15,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 188, 13, 0.92)';
              e.currentTarget.style.color = '#1A1817';
              e.currentTarget.style.borderColor = '#FFBC0D';
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 188, 13, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 18, 16, 0.72)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.55)';
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
            }}
          >
            {/* Play Icon */}
            <span style={{ fontSize: '11px', display: 'flex', alignItems: 'center' }}>▶</span>
            <span>Watch it made</span>
          </button>

          {/* 2. -2°C CHILLED Badge on the Drink (top-right) */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              right: '2%',
              background: '#DA291C',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '5px 12px',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 16px rgba(218, 41, 28, 0.6), 0 0 10px rgba(218, 41, 28, 0.3)',
              zIndex: 14,
              animation: 'mcdFloatPulse 4s ease-in-out infinite',
            }}
          >
            <span>❄️</span>
            <span>{currentItem.badge}</span>
          </div>

          {/* 3. Floating Recommendation Card (bottom-right of hero) */}
          <div
            style={{
              position: 'absolute',
              bottom: '18%',
              right: '6%',
              background: 'rgba(22, 19, 17, 0.88)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.4)',
              zIndex: 16,
              maxWidth: '310px',
              transition: 'transform 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(255, 188, 13, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: '54px',
                height: '50px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.55)',
              }}
            >
              <img
                src={currentItem.image}
                alt={currentItem.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>

            {/* Content & Customize */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
              <div style={{ color: '#FFFFFF', fontSize: '13.5px', fontWeight: 800, lineHeight: 1.2 }}>
                {currentItem.name} {currentItem.emoji}
              </div>
              <div style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 500, lineHeight: 1.2 }}>
                {currentItem.subtext}
              </div>

              <button
                onClick={onBuildMeal}
                style={{
                  marginTop: '4px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '999px',
                  padding: '4px 12px',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  width: 'fit-content',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFBC0D';
                  e.currentTarget.style.color = '#1A1817';
                  e.currentTarget.style.borderColor = '#FFBC0D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <span>🛠️</span>
                <span>Customize</span>
              </button>
            </div>
          </div>

          {/* 4. Carousel Dots + Left/Right Chevron Arrow Controls */}
          <div
            style={{
              position: 'absolute',
              bottom: '4%',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              zIndex: 15,
            }}
          >
            {/* Left Chevron */}
            <button
              onClick={handlePrevSlide}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(20, 18, 16, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#D1D5DB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFBC0D';
                e.currentTarget.style.color = '#FFBC0D';
                e.currentTarget.style.background = 'rgba(255, 188, 13, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#D1D5DB';
                e.currentTarget.style.background = 'rgba(20, 18, 16, 0.75)';
              }}
              aria-label="Previous burger"
            >
              ‹
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {carouselItems.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  onClick={() => setCarouselIndex(dotIdx)}
                  style={{
                    width: carouselIndex === dotIdx ? '24px' : '7px',
                    height: '7px',
                    borderRadius: '999px',
                    background: carouselIndex === dotIdx ? '#FFBC0D' : 'rgba(255, 255, 255, 0.35)',
                    boxShadow: carouselIndex === dotIdx ? '0 0 8px rgba(255, 188, 13, 0.7)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.28s ease',
                  }}
                />
              ))}
            </div>

            {/* Right Chevron */}
            <button
              onClick={handleNextSlide}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(20, 18, 16, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#D1D5DB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFBC0D';
                e.currentTarget.style.color = '#FFBC0D';
                e.currentTarget.style.background = 'rgba(255, 188, 13, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#D1D5DB';
                e.currentTarget.style.background = 'rgba(20, 18, 16, 0.75)';
              }}
              aria-label="Next burger"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Category Bar directly docked at the bottom of the hero scene */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          marginTop: '20px',
        }}
      >
        <CategoryBar
          onSelectCategory={handleCategorySelect}
          onOpenRewards={onOpenRewards}
          activeCategory={activeCategory}
        />
      </div>

      {/* Interactive "Watch It Made" Modal */}
      {watchModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setWatchModalOpen(false)}
        >
          <div
            style={{
              background: '#181513',
              border: '1.5px solid rgba(255, 188, 13, 0.5)',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 188, 13, 0.25)',
              color: '#FFFFFF',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setWatchModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#FFF',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px' }}>🔥</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: '#FFBC0D' }}>
                  How The Mighty McDouble™ Is Made
                </h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  Autonomous Sear-Lock Griddle • 38.4 Second Precision Cooking
                </p>
              </div>
            </div>

            {/* Stepper Graphic */}
            <div style={{ display: 'grid', gap: '14px', margin: '24px 0' }}>
              {[
                { step: '01', title: 'Sear-Lock 425°F Contact', desc: 'Two 100% pure beef patties seared on dual-platen contact grill to seal in authentic umami juices.' },
                { step: '02', title: 'Micro-Crystal Pepper Seasoning', desc: 'Aged sea salt and cracked black pepper dispensed evenly across the caramelizing meat.' },
                { step: '03', title: 'Wisconsin Aged Cheddar Melt', desc: 'Double real cheese slices melted precisely at 145°F over sizzling patties.' },
                { step: '04', title: 'Toasted Sesame Brioche & Dressing', desc: 'Crisp hand-leafed lettuce, sliced red onions, ripe tomatoes & secret velvet emulsion.' },
              ].map((s) => (
                <div
                  key={s.step}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '12px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <span style={{ color: '#FFBC0D', fontSize: '18px', fontWeight: 900 }}>{s.step}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '14px', color: '#FFF' }}>{s.title}</div>
                    <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button
                onClick={() => setWatchModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFF',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setWatchModalOpen(false);
                  onOrderNow();
                }}
                style={{
                  background: '#FFBC0D',
                  color: '#1A1817',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  fontWeight: 900,
                  fontSize: '14px',
                  boxShadow: '0 4px 18px rgba(255, 188, 13, 0.4)',
                }}
              >
                Add Mighty McDouble to Tray ($5.99)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
