'use client';

import React from 'react';

interface ValuePillarsProps {
  onSelectPillar: (pillarId: string) => void;
}

export const ValuePillars: React.FC<ValuePillarsProps> = ({ onSelectPillar }) => {
  const pillars = [
    {
      id: 'menu',
      title: 'Delicious Choices',
      desc: 'All your favorites, and more to explore.',
      icon: (
        <span style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(255, 188, 13, 0.12)',
          border: '1px solid rgba(255, 188, 13, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px'
        }}>
          🍔
        </span>
      ),
      badge: '2030 FRESH',
    },
    {
      id: 'rewards',
      title: 'Rewards That Matter',
      desc: 'Eat. Earn. Enjoy exclusive offers with MyMcDonald’s.',
      icon: (
        <span style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(218, 41, 28, 0.15)',
          border: '1px solid rgba(218, 41, 28, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px'
        }}>
          👥
        </span>
      ),
      badge: '2,450 PTS',
    },
    {
      id: 'sustainability',
      title: 'A Greener Tomorrow',
      desc: 'Better food choices. A brighter planet.',
      icon: (
        <span style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px'
        }}>
          🍃
        </span>
      ),
      badge: '100% RECYCLED',
    },
    {
      id: 'community',
      title: 'Stronger Communities',
      desc: 'Real change, one neighborhood at a time.',
      icon: (
        <span style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(255, 188, 13, 0.12)',
          border: '1px solid rgba(255, 188, 13, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px'
        }}>
          ❤️
        </span>
      ),
      badge: '12 INITIATIVES',
    },
  ];

  return (
    <section style={{
      background: '#12100E',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      position: 'relative',
      zIndex: 10,
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '28px 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
      }}>
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => onSelectPillar(pillar.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '14px 18px',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.borderColor = 'rgba(255, 188, 13, 0.35)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>{pillar.icon}</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{
                  margin: 0,
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.2px'
                }}>
                  {pillar.title}
                </h4>
                <span style={{
                  fontSize: '9px',
                  fontWeight: 900,
                  color: '#FFBC0D',
                  background: 'rgba(255, 188, 13, 0.12)',
                  border: '1px solid rgba(255, 188, 13, 0.35)',
                  padding: '2px 6px',
                  borderRadius: '999px',
                  letterSpacing: '0.4px',
                }}>
                  {pillar.badge}
                </span>
              </div>
              <p style={{
                margin: 0,
                fontSize: '13px',
                color: '#9CA3AF',
                lineHeight: 1.4
              }}>
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
