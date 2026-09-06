'use client';

import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onScrollToSection,
}) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { id: 'menu', label: 'Menu' },
    { id: 'mytaste', label: 'MyTaste', badge: 'AI' },
    { id: 'rewards', label: 'McRewards' },
    { id: 'foodlab', label: 'Food Lab' },
    { id: 'social', label: 'Community' },
    { id: 'locator', label: 'Find a Restaurant' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 36px)',
        maxWidth: '1360px',
        zIndex: 1000,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 18px',
          borderRadius: '999px',
          background: 'rgba(16, 14, 13, 0.78)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3)',
          gap: '12px',
        }}
      >
        {/* Left: McDonald's Arches + Brand + 2030 Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onScrollToSection('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {/* Iconic Golden Arches */}
            <svg width="36" height="30" viewBox="0 0 109 95" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Brand Wordmark */}
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '17px',
                fontWeight: 900,
                letterSpacing: '-0.3px',
                whiteSpace: 'nowrap',
              }}
            >
              McDonald&apos;s
            </span>

            {/* 2030 Future Pill Badge */}
            <span
              style={{
                border: '1px solid rgba(255, 188, 13, 0.45)',
                color: '#FFBC0D',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '999px',
                background: 'rgba(255, 188, 13, 0.08)',
                letterSpacing: '0.4px',
              }}
            >
              2030
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
            className="mcd-nav-links"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#E5E7EB',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '6px 4px',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s, transform 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFBC0D')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 188, 13, 0.28) 0%, rgba(218, 41, 28, 0.2) 100%)',
                      border: '1px solid rgba(255, 188, 13, 0.5)',
                      color: '#FFBC0D',
                      fontSize: '9px',
                      fontWeight: 900,
                      padding: '1px 5px',
                      borderRadius: '4px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Controls: Search + Profile/VIP + Order Now */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Search Box */}
          <div
            onClick={onOpenSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.07)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '999px',
              padding: '7px 16px',
              cursor: 'pointer',
              color: '#9CA3AF',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'background 0.2s, border-color 0.2s',
              minWidth: '210px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.11)';
              e.currentTarget.style.borderColor = 'rgba(255, 188, 13, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Search cravings &amp; meals...</span>
          </div>

          {/* Profile / VIP Area */}
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: '999px',
              background: profileOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              transition: 'background 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = profileOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent')}
          >
            {/* Avatar image */}
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid #FFBC0D',
                boxShadow: '0 0 8px rgba(255, 188, 13, 0.3)',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <img
                src="/assets/avatar-adhya.png"
                alt="Adhya"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Name + VIP badge */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}>Adhya</span>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                <span
                  style={{
                    background: 'rgba(255, 188, 13, 0.16)',
                    border: '1px solid rgba(255, 188, 13, 0.6)',
                    color: '#FFBC0D',
                    fontSize: '9px',
                    fontWeight: 900,
                    padding: '0.5px 4px',
                    borderRadius: '3px',
                    letterSpacing: '0.4px',
                  }}
                >
                  VIP I
                </span>
              </div>
            </div>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '48px',
                  right: '0',
                  background: '#181513',
                  border: '1px solid rgba(255, 188, 13, 0.3)',
                  borderRadius: '16px',
                  padding: '16px',
                  width: '220px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.8)',
                  zIndex: 1100,
                  color: '#FFF',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #FFBC0D' }}>
                    <img src="/assets/avatar-adhya.png" alt="Adhya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '14px' }}>Adhya</div>
                    <div style={{ color: '#FFBC0D', fontSize: '11px', fontWeight: 700 }}>VIP Tier I • 2,450 pts</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', display: 'grid', gap: '8px', fontSize: '13px' }}>
                  <div
                    onClick={() => { setProfileOpen(false); onScrollToSection('rewards'); }}
                    style={{ cursor: 'pointer', padding: '6px', borderRadius: '6px', color: '#E5E7EB' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFBC0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                  >
                    🎁 View McRewards
                  </div>
                  <div
                    onClick={() => { setProfileOpen(false); onScrollToSection('mytaste'); }}
                    style={{ cursor: 'pointer', padding: '6px', borderRadius: '6px', color: '#E5E7EB' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFBC0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                  >
                    🧬 Taste DNA Profile
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Prominent Golden Order Now Button */}
          <button
            onClick={onOpenCart}
            style={{
              background: '#FFBC0D',
              color: '#1A1817',
              border: 'none',
              borderRadius: '999px',
              padding: '9px 20px',
              fontWeight: 900,
              fontSize: '13.5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 18px rgba(255, 188, 13, 0.45)',
              transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 188, 13, 0.65)';
              e.currentTarget.style.background = '#FFC72C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(255, 188, 13, 0.45)';
              e.currentTarget.style.background = '#FFBC0D';
            }}
          >
            {/* Tray/Bag Icon */}
            <span style={{ fontSize: '15px' }}>🛍️</span>
            <span>Order Now</span>
            {cartCount > 0 && (
              <span
                style={{
                  background: '#DA291C',
                  color: '#FFFFFF',
                  borderRadius: '999px',
                  minWidth: '18px',
                  height: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 900,
                  padding: '0 4px',
                  boxShadow: '0 2px 6px rgba(218, 41, 28, 0.5)',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
