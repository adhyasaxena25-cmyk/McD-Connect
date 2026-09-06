'use client';

import React from 'react';
import { IllustratedFoodVisual } from './IllustratedFood';

interface FooterProps {
  onExploreTaste: () => void;
  onOrderNow: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExploreTaste,
  onOrderNow,
  onScrollToSection,
}) => {
  return (
    <footer id="locator" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* FINAL IMMERSIVE CTA SECTION */}
      <section style={{
        background: 'radial-gradient(ellipse at 50% 40%, #2A1715 0%, #151110 80%)',
        color: '#FFF',
        padding: '120px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 188, 13, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Rotating Illustrated Centerpiece */}
          <div
            className="animate-mcd-float"
            style={{
              width: '180px',
              height: '180px',
              margin: '0 auto 36px auto',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 188, 13, 0.4)',
              border: '3px solid #FFBC0D',
              background: 'radial-gradient(circle at 50% 50%, #3B2B24 0%, #171210 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IllustratedFoodVisual
              name="Double Big Mac"
              type="burger"
              size={150}
              animated={true}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            fontWeight: 900,
            letterSpacing: '-2px',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
          }}>
            Your Next Favorite Meal Is Waiting.
          </h2>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '560px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6,
          }}>
            Step into the next evolution of flavor. Calibrated for your taste DNA,
            assembled with precision, and delivered in moments.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onExploreTaste}
              style={{
                background: '#FFBC0D',
                color: '#1A1817',
                border: 'none',
                borderRadius: '999px',
                padding: '16px 36px',
                fontSize: '16px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 30px rgba(255, 188, 13, 0.4)',
              }}
            >
              <span>Discover MyTaste</span>
              <span>→</span>
            </button>

            <button
              onClick={onOrderNow}
              style={{
                background: '#DA291C',
                color: '#FFF',
                border: 'none',
                borderRadius: '999px',
                padding: '16px 36px',
                fontSize: '16px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 30px rgba(218, 41, 28, 0.4)',
              }}
            >
              <span>Order Now</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SIGNATURE DEEP McDONALD'S RED FOOTER */}
      <div style={{
        background: '#DA291C',
        color: '#FFF',
        padding: '80px 48px 40px 48px',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Top Row: Brand & Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(3, 1fr)',
            gap: '48px',
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
            {/* Brand column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <svg width="44" height="38" viewBox="0 0 109 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M54.5 93.5C47.8 93.5 42 75.5 42 53C42 30.5 47.8 12.5 54.5 12.5C61.2 12.5 67 30.5 67 53C67 75.5 61.2 93.5 54.5 93.5Z"
                    fill="#FFBC0D"
                  />
                  <path
                    d="M26.5 93.5C11.9 93.5 0 72.8 0 47.2C0 21.6 11.9 1 26.5 1C39.5 1 50.3 17.5 52.6 39.5C48.8 28.5 41.5 20.8 32.8 20.8C20.2 20.8 10 32.6 10 47.2C10 61.8 20.2 73.6 32.8 73.6C37.8 73.6 42.4 70.8 46.1 66C41.2 82.5 34.4 93.5 26.5 93.5Z"
                    fill="#FFBC0D"
                  />
                  <path
                    d="M82.5 93.5C74.6 93.5 67.8 82.5 62.9 66C66.6 70.8 71.2 73.6 76.2 73.6C88.8 73.6 99 61.8 99 47.2C99 32.6 88.8 20.8 76.2 20.8C67.5 20.8 60.2 28.5 56.4 39.5C58.7 17.5 69.5 1 82.5 1C97.1 1 109 21.6 109 47.2C109 72.8 97.1 93.5 82.5 93.5Z"
                    fill="#FFBC0D"
                  />
                </svg>
                <span style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                  McDonald&apos;s
                </span>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '320px', margin: '0 0 20px 0' }}>
                Reimagining the future of food through spatial UI, computational flavor intelligence,
                and regenerative agricultural practices.
              </p>

              <div style={{
                fontSize: '22px',
                fontFamily: 'cursive',
                color: '#FFBC0D',
                fontWeight: 700,
              }}>
                i&apos;m lovin&apos; it ♡
              </div>
            </div>

            {/* Col 1: Explore */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFBC0D', marginBottom: '16px', letterSpacing: '0.5px' }}>
                EXPLORE
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px', fontSize: '14px' }}>
                <li><a href="#menu" onClick={(e) => { e.preventDefault(); onScrollToSection('menu'); }} style={{ color: '#FFF', textDecoration: 'none' }}>Full Menu</a></li>
                <li><a href="#mytaste" onClick={(e) => { e.preventDefault(); onScrollToSection('mytaste'); }} style={{ color: '#FFF', textDecoration: 'none' }}>MyTaste DNA</a></li>
                <li><a href="#builder" onClick={(e) => { e.preventDefault(); onScrollToSection('builder'); }} style={{ color: '#FFF', textDecoration: 'none' }}>3D Meal Builder</a></li>
                <li><a href="#rewards" onClick={(e) => { e.preventDefault(); onScrollToSection('rewards'); }} style={{ color: '#FFF', textDecoration: 'none' }}>McUniverse Rewards</a></li>
                <li><a href="#social" onClick={(e) => { e.preventDefault(); onScrollToSection('social'); }} style={{ color: '#FFF', textDecoration: 'none' }}>Food Room</a></li>
              </ul>
            </div>

            {/* Col 2: Innovation */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFBC0D', marginBottom: '16px', letterSpacing: '0.5px' }}>
                INNOVATION
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px', fontSize: '14px' }}>
                <li><a href="#foodlab" onClick={(e) => { e.preventDefault(); onScrollToSection('foodlab'); }} style={{ color: '#FFF', textDecoration: 'none' }}>McFood Lab</a></li>
                <li><a href="#passport" onClick={(e) => { e.preventDefault(); onScrollToSection('passport'); }} style={{ color: '#FFF', textDecoration: 'none' }}>Food Passport</a></li>
                <li><a href="#sustainability" onClick={(e) => { e.preventDefault(); onScrollToSection('sustainability'); }} style={{ color: '#FFF', textDecoration: 'none' }}>Sustainability Ledger</a></li>
                <li><a href="#cravings" onClick={(e) => { e.preventDefault(); onScrollToSection('cravings'); }} style={{ color: '#FFF', textDecoration: 'none' }}>AI Craving Engine</a></li>
              </ul>
            </div>

            {/* Col 3: Find & Connect */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFBC0D', marginBottom: '16px', letterSpacing: '0.5px' }}>
                LOCATIONS & APPS
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px', fontSize: '14px' }}>
                <li>Find a Smart Restaurant</li>
                <li>Autonomous Pod Tracking</li>
                <li>Download for iOS / VisionOS</li>
                <li>Download for Android</li>
                <li>Ronald McDonald House</li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div style={{
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.75)',
          }}>
            <div>
              © 2030 McDonald&apos;s Corporation. Built on NitroStack &amp; NitroStudio.
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <span>Privacy Center</span>
              <span>Terms &amp; Conditions</span>
              <span>Nutritional Transparency</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
