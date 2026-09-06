'use client';

import React, { useState } from 'react';

export const YourImpact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'global'>('personal');

  return (
    <section id="sustainability" style={{
      padding: '100px 48px',
      background: 'linear-gradient(180deg, #FAF5EA 0%, #FFFFFF 100%)',
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
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10B981',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            <span>🌱</span>
            <span>Feature 09 — Your Impact</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            color: '#1A1817',
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Every Meal Leaves a Trace.
          </h2>

          <p style={{
            fontSize: '17px',
            color: '#6B7280',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Food choices reverberate across communities and ecosystems.
            Track your personal sustainability ledger and our 2030 zero-waste milestones.
          </p>
        </div>

        {/* Impact Showcase Console: 3D Earth Orbit (Left) + Stats & Initiatives (Right) */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          border: '1px solid #EADBCE',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '60px',
        }}>
          {/* Left: Interactive 3D Earth Globe Visualizer */}
          <div style={{
            position: 'relative',
            height: '420px',
            background: 'radial-gradient(circle at 40% 40%, #152E28 0%, #0D1C18 70%)',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
          }}>
            {/* Spinning Globe Sphere */}
            <div
              className="animate-mcd-float"
              style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #34D399 0%, #059669 40%, #064E3B 90%)',
                boxShadow: '0 0 60px rgba(16, 185, 129, 0.4), inset -12px -12px 30px rgba(0,0,0,0.7)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '72px' }}>🌎</span>
            </div>

            {/* Orbiting Eco Rings */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              border: '1.5px dashed rgba(52, 211, 153, 0.4)',
              borderRadius: '50%',
              animation: 'mcdOrbSpin 25s linear infinite',
              pointerEvents: 'none',
            }} />

            {/* Live Indicator Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(10, 20, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              borderRadius: '12px',
              padding: '10px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '12px', color: '#6EE7B7', fontWeight: 800 }}>
                ● 100% RENEWABLE LOGISTICS
              </span>
              <span style={{ fontSize: '11px', color: '#D1FAE5' }}>
                Global Fleet Telemetry Active
              </span>
            </div>
          </div>

          {/* Right: Personal & Planetary Impact Counters */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <button
                onClick={() => setActiveTab('personal')}
                style={{
                  background: activeTab === 'personal' ? '#10B981' : '#F3F4F6',
                  color: activeTab === 'personal' ? '#FFF' : '#374151',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 20px',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                Your Personal Impact
              </button>
              <button
                onClick={() => setActiveTab('global')}
                style={{
                  background: activeTab === 'global' ? '#10B981' : '#F3F4F6',
                  color: activeTab === 'global' ? '#FFF' : '#374151',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 20px',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                Global 2030 Progress
              </button>
            </div>

            {/* Animated Counters Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
              <div style={{
                background: '#FAF5EA',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #EADBCE',
              }}>
                <span style={{ fontSize: '28px' }}>🌱</span>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#10B981', margin: '8px 0 4px 0' }}>
                  {activeTab === 'personal' ? '1.8 kg' : '420k T'}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A1817' }}>
                  Packaging Impact Avoided
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6B7280' }}>
                  100% fiber-based biodegradable compostable wrappers
                </p>
              </div>

              <div style={{
                background: '#FAF5EA',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #EADBCE',
              }}>
                <span style={{ fontSize: '28px' }}>❤️</span>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#DA291C', margin: '8px 0 4px 0' }}>
                  {activeTab === 'personal' ? '12' : '8,400+'}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A1817' }}>
                  Community Initiatives
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6B7280' }}>
                  Ronald McDonald House Charities & local food banks supported
                </p>
              </div>

              <div style={{
                background: '#FAF5EA',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #EADBCE',
              }}>
                <span style={{ fontSize: '28px' }}>📦</span>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#FFBC0D', margin: '8px 0 4px 0' }}>
                  100%
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A1817' }}>
                  Responsible Sourcing
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6B7280' }}>
                  Certified deforestation-free beef & cage-free farm eggs
                </p>
              </div>

              <div style={{
                background: '#FAF5EA',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #EADBCE',
              }}>
                <span style={{ fontSize: '28px' }}>☀️</span>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#3B82F6', margin: '8px 0 4px 0' }}>
                  94%
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A1817' }}>
                  Kitchen Clean Power
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6B7280' }}>
                  Rooftop solar and high-efficiency induction griddles
                </p>
              </div>
            </div>

            {/* Reference CTA Banner */}
            <div style={{
              background: '#FAF5EA',
              borderRadius: '20px',
              padding: '20px 24px',
              border: '1px solid #EADBCE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#1A1817' }}>
                  A Happier Planet Feels Good
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>
                  From sustainable packaging to responsible sourcing, building a brighter tomorrow — together.
                </div>
              </div>

              <button
                onClick={() => alert('📄 Opening 2030 McDonald’s ESG Global Sustainability Blueprint!')}
                style={{
                  background: '#1A1817',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>See Our Initiatives</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reference Nature Footer Ribbon: "PEOPLE PLANET BURGERS BRIGHTER DAYS :)" */}
        <div style={{
          position: 'relative',
          height: '180px',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
        }}>
          <img
            src="/assets/hero-scene-full.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(26, 24, 23, 0.7) 0%, rgba(26, 24, 23, 0.3) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 48px',
            color: '#FFF',
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#FFBC0D', letterSpacing: '1px', textTransform: 'uppercase' }}>
                GOOD CHOICES BRIGHTER TOMORROWS
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                Taste the Good in Every Step.
              </div>
            </div>

            <div style={{
              textAlign: 'right',
              fontWeight: 900,
              fontSize: '18px',
              color: '#FFBC0D',
              letterSpacing: '1px',
            }}>
              PEOPLE<br />
              PLANET<br />
              BURGERS<br />
              BRIGHTER DAYS :)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
