'use client';

import React, { useState } from 'react';
import { TasteDNAScores } from './types';
import { IllustratedFoodVisual } from './IllustratedFood';

interface TasteDNAProps {
  onBuildMeal: (mealPreset?: string) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  }) => void;
}

export const TasteDNA: React.FC<TasteDNAProps> = ({ onBuildMeal, onAddToCart }) => {
  const [scores, setScores] = useState<TasteDNAScores>({
    crispy: 82,
    savory: 74,
    spicy: 61,
    sweet: 48,
    comfort: 89,
    adventurous: 56,
  });

  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null);

  const dimensions = [
    { key: 'crispy', label: 'Crispy', score: scores.crispy, color: '#FFBC0D', angle: 0 },
    { key: 'savory', label: 'Savory', score: scores.savory, color: '#DA291C', angle: 60 },
    { key: 'spicy', label: 'Spicy', score: scores.spicy, color: '#FF5722', angle: 120 },
    { key: 'sweet', label: 'Sweet', score: scores.sweet, color: '#E91E63', angle: 180 },
    { key: 'comfort', label: 'Comfort', score: scores.comfort, color: '#FF9800', angle: 240 },
    { key: 'adventurous', label: 'Adventurous', score: scores.adventurous, color: '#9C27B0', angle: 300 },
  ];

  // Calculate polygon points on 300x300 viewBox centered at (150, 150)
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 110;

  const getCoordinates = (angleDeg: number, value: number) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const r = (value / 100) * maxRadius;
    const x = centerX + r * Math.cos(angleRad);
    const y = centerY + r * Math.sin(angleRad);
    return { x, y };
  };

  const polygonPoints = dimensions
    .map((d) => {
      const pt = getCoordinates(d.angle, d.score);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  const handleScoreChange = (key: keyof TasteDNAScores, val: number) => {
    setScores((prev) => ({ ...prev, [key]: val }));
  };

  // Dynamic calculated match percentage
  const matchPercentage = Math.round(
    (scores.crispy * 0.3 + scores.spicy * 0.3 + scores.savory * 0.2 + scores.comfort * 0.2)
  );

  return (
    <section id="mytaste" style={{
      padding: '100px 48px',
      background: 'linear-gradient(180deg, #FAF5EA 0%, #FFF9F0 50%, #FAF5EA 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            <span>🧬</span>
            <span>Feature 01 — MyTaste AI</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 4.5vw, 56px)',
            fontWeight: 900,
            color: '#1A1817',
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Meet Your Taste.
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Instead of browsing generic menus, McDonald&apos;s 2030 computes your multidimensional
            sensory DNA to curate food tuned to your neuro-flavor profile.
          </p>
        </div>

        {/* 2-Column Grid: Left is Interactive Radar DNA, Right is Next Obsession Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left Column: Radial Visualization + Tuning Sliders */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '40px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
            border: '1px solid #EADBCE',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#1A1817' }}>
                  YOUR TASTE DNA
                </h3>
                <span style={{ fontSize: '13px', color: '#9CA3AF' }}>Calibrated in real-time</span>
              </div>
              <button
                onClick={() => setScores({ crispy: 82, savory: 74, spicy: 61, sweet: 48, comfort: 89, adventurous: 56 })}
                style={{
                  background: 'none',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: '#6B7280'
                }}
              >
                Reset Calibration
              </button>
            </div>

            {/* SVG Radar Chart */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <svg width="320" height="320" viewBox="0 0 300 300" style={{ overflow: 'visible' }}>
                {/* Background concentric reference webs */}
                {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={dimensions
                      .map((d) => {
                        const pt = getCoordinates(d.angle, scale * 100);
                        return `${pt.x},${pt.y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#F3EDE2"
                    strokeWidth="1.5"
                  />
                ))}

                {/* Spokes from center */}
                {dimensions.map((d) => {
                  const endPt = getCoordinates(d.angle, 100);
                  return (
                    <line
                      key={d.key}
                      x1={centerX}
                      y1={centerY}
                      x2={endPt.x}
                      y2={endPt.y}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  );
                })}

                {/* Radar Filled Shape */}
                <polygon
                  points={polygonPoints}
                  fill="url(#tasteGradient)"
                  stroke="#FFBC0D"
                  strokeWidth="3"
                  style={{
                    transition: 'all 0.35s ease',
                    filter: 'drop-shadow(0 6px 16px rgba(255, 188, 13, 0.45))',
                  }}
                />

                {/* Dynamic Gradient */}
                <defs>
                  <linearGradient id="tasteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFBC0D" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#DA291C" stopOpacity="0.45" />
                  </linearGradient>
                </defs>

                {/* Dimension Points and Interactive Labels */}
                {dimensions.map((d) => {
                  const pt = getCoordinates(d.angle, d.score);
                  const isHovered = hoveredDimension === d.key;
                  const labelPt = getCoordinates(d.angle, 122);

                  return (
                    <g
                      key={d.key}
                      onMouseEnter={() => setHoveredDimension(d.key)}
                      onMouseLeave={() => setHoveredDimension(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Pulse Circle */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? 8 : 5}
                        fill={d.color}
                        stroke="#FFF"
                        strokeWidth="2"
                        style={{ transition: 'r 0.2s ease' }}
                      />

                      {/* Text Label */}
                      <text
                        x={labelPt.x}
                        y={labelPt.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={isHovered ? d.color : '#1A1817'}
                        fontWeight={isHovered ? 800 : 700}
                        fontSize="13px"
                        style={{ transition: 'fill 0.2s' }}
                      >
                        {d.label} {d.score}%
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Interactive Dimension Sliders */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {dimensions.map((d) => (
                <div
                  key={d.key}
                  onMouseEnter={() => setHoveredDimension(d.key)}
                  onMouseLeave={() => setHoveredDimension(null)}
                  style={{
                    background: hoveredDimension === d.key ? '#FFFDF8' : '#FAF5EA',
                    border: `1px solid ${hoveredDimension === d.key ? d.color : 'transparent'}`,
                    padding: '10px 14px',
                    borderRadius: '12px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A1817' }}>{d.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: d.color }}>{d.score}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="99"
                    value={d.score}
                    onChange={(e) => handleScoreChange(d.key as keyof TasteDNAScores, parseInt(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: d.color,
                      cursor: 'pointer',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Generated "YOUR NEXT OBSESSION" */}
          <div style={{
            background: 'radial-gradient(ellipse at 80% 20%, #2A1715 0%, #171413 70%)',
            color: '#FFF',
            borderRadius: '32px',
            padding: '40px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.22)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            {/* Top Match Tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: '#FFBC0D',
              }}>
                AI RECOMMENDATION ENGINE
              </span>

              <div style={{
                background: 'linear-gradient(135deg, #DA291C, #FFBC0D)',
                color: '#FFF',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 900,
                boxShadow: '0 4px 15px rgba(218, 41, 28, 0.4)',
              }}>
                {matchPercentage}% TASTE MATCH
              </div>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <span style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 600 }}>
                YOUR NEXT OBSESSION
              </span>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 900,
                margin: '4px 0 0 0',
                letterSpacing: '-0.5px'
              }}>
                Spicy McCrispy™ Meal
              </h3>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '14px', lineHeight: 1.5, margin: '0 0 20px 0' }}>
              Targeted for your <strong>{scores.comfort}% Comfort</strong> and <strong>{scores.crispy}% Crispy</strong> profile.
              Featuring Southern-style buttermilk chicken fillet with spicy pepper sauce, crispy fries & medium drink.
            </p>

            {/* Food Visual with Subtle Bobbing Animation */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '28px',
              height: '220px',
              boxShadow: '0 16px 36px rgba(0,0,0,0.4)',
              background: 'radial-gradient(circle at 50% 50%, #382A24 0%, #1F1917 100%)',
              border: '1.5px solid rgba(255, 188, 13, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IllustratedFoodVisual
                name="Spicy McCrispy"
                type="chicken"
                size={185}
                animated={true}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                background: 'rgba(26, 24, 23, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '999px',
                color: '#FFBC0D',
                fontWeight: 800,
                fontSize: '14px',
              }}>
                ₹299
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px' }}>
              <button
                onClick={() => onBuildMeal('Spicy McCrispy')}
                style={{
                  flex: 1,
                  background: '#FFBC0D',
                  color: '#1A1817',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '14px 24px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(255, 188, 13, 0.35)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>Build This Meal</span>
                <span>→</span>
              </button>

              <button
                onClick={() => onAddToCart({
                  id: 'spicy-mccrispy-preset',
                  name: 'Spicy McCrispy™ Meal',
                  price: 299,
                  image: '/assets/food-chicken.jpg',
                  description: 'DNA-matched: Crispy chicken breast, habanero sauce, fries & drink',
                })}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '14px',
                  padding: '14px 20px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
              >
                + Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
