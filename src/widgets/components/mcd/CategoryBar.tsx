'use client';

import React, { useState } from 'react';

interface CategoryBarProps {
  onSelectCategory: (category: string) => void;
  onOpenRewards: () => void;
  activeCategory?: string;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  onSelectCategory,
  onOpenRewards,
  activeCategory: propActiveCategory,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState('Burgers');
  const activeTab = propActiveCategory || internalActiveTab;

  const categories = [
    {
      id: 'Burgers',
      label: 'Burgers',
      icon: '/assets/cat-burgers.jpg',
    },
    {
      id: 'Meals',
      label: 'Meals',
      icon: '/assets/cat-meals.jpg',
    },
    {
      id: 'Chicken',
      label: 'Chicken',
      icon: '/assets/cat-chicken.jpg',
    },
    {
      id: 'Beverages',
      label: 'Beverages',
      icon: '/assets/cat-beverages.jpg',
    },
    {
      id: 'Desserts',
      label: 'Desserts',
      icon: '/assets/cat-desserts.jpg',
    },
    {
      id: 'Deals',
      label: 'Deals',
      icon: '/assets/cat-deals.jpg',
    },
  ];

  const handleCategoryClick = (catId: string) => {
    setInternalActiveTab(catId);
    onSelectCategory(catId);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '0 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Category Cards */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px',
            scrollbarWidth: 'none',
          }}
          className="mcd-category-scroll"
        >
          {categories.map((cat) => {
            const isActive = activeTab.toLowerCase() === cat.id.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                style={{
                  background: isActive
                    ? 'rgba(28, 25, 23, 0.95)'
                    : 'rgba(20, 18, 16, 0.72)',
                  border: isActive
                    ? '1.5px solid rgba(255, 188, 13, 0.7)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '10px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  position: 'relative',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: isActive
                    ? '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(255, 188, 13, 0.2)'
                    : '0 4px 14px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  minWidth: '120px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(32, 28, 26, 0.88)';
                    e.currentTarget.style.borderColor = 'rgba(255, 188, 13, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(20, 18, 16, 0.72)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Icon Photo */}
                <div
                  style={{
                    width: '38px',
                    height: '34px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.45)',
                  }}
                >
                  <img
                    src={cat.icon}
                    alt={cat.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: isActive ? 800 : 700,
                    color: isActive ? '#FFFFFF' : '#E5E7EB',
                    letterSpacing: '-0.2px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat.label}
                </span>

                {/* Active Gold Indicator Bar underneath label */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0px',
                      left: '18px',
                      right: '18px',
                      height: '3px',
                      background: '#FFBC0D',
                      borderRadius: '999px',
                      boxShadow: '0 0 8px rgba(255, 188, 13, 0.8)',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: My McRewards Card */}
        <div
          onClick={onOpenRewards}
          style={{
            background: 'rgba(20, 18, 16, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
            transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            minWidth: '240px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(32, 28, 26, 0.95)';
            e.currentTarget.style.borderColor = 'rgba(255, 188, 13, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 188, 13, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(20, 18, 16, 0.85)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.45)';
          }}
        >
          {/* Gift Icon */}
          <div
            style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/icon-gift.png"
              alt="Rewards"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(255, 188, 13, 0.4))',
              }}
              onError={(e) => {
                // SVG fallback
                e.currentTarget.style.display = 'none';
              }}
            />
            <span style={{ fontSize: '20px' }}>🎁</span>
          </div>

          {/* Rewards Text */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600 }}>
              My McRewards
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
              <span style={{ fontSize: '15px', fontWeight: 900, color: '#FFBC0D' }}>
                2,450 <span style={{ fontSize: '11px', fontWeight: 700, color: '#D1D5DB' }}>pts</span>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  fontSize: '10px',
                  fontWeight: 800,
                  color: '#FFBC0D',
                  background: 'rgba(255, 188, 13, 0.12)',
                  border: '1px solid rgba(255, 188, 13, 0.3)',
                  padding: '1px 6px',
                  borderRadius: '999px',
                }}
              >
                <span>⭐</span>
                <span>Gold Tier</span>
              </span>
            </div>
          </div>

          {/* Chevron */}
          <div
            style={{
              marginLeft: 'auto',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D1D5DB',
              fontSize: '12px',
            }}
          >
            ›
          </div>
        </div>
      </div>
    </div>
  );
};
