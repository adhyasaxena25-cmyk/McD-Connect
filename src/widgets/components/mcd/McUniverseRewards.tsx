'use client';

import React, { useState } from 'react';
import { Achievement } from './types';

interface McUniverseRewardsProps {
  onRedeemReward: (title: string, cost: number) => void;
}

export const McUniverseRewards: React.FC<McUniverseRewardsProps> = ({ onRedeemReward }) => {
  const [points, setPoints] = useState(2450);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: 'fry-architect',
      icon: '🍟',
      title: 'Fry Architect',
      desc: 'Crafted over 15 custom seasoning combinations and perfected the fry dip ratio.',
      progress: 15,
      max: 15,
      unlocked: true,
      perk: 'Unlimited Peri-Peri shakers on all orders',
    },
    {
      id: 'spice-explorer',
      icon: '🔥',
      title: 'Spice Explorer',
      desc: 'Completed the Ghost Habanero trial and conquered level 4 spice.',
      progress: 4,
      max: 4,
      unlocked: true,
      perk: 'Secret Spicy Sambal Dip unlocked',
    },
    {
      id: 'big-mac-loyalist',
      icon: '🍔',
      title: 'Big Mac Loyalist',
      desc: 'Assembled and savored 25 custom Big Mac architectures.',
      progress: 21,
      max: 25,
      unlocked: false,
      perk: 'Free Double Patty Upgrade',
    },
    {
      id: 'planet-friendly',
      icon: '🌱',
      title: 'Planet Friendly',
      desc: 'Saved 2.5kg carbon footprint by opting for bio-fiber packaging and plant bases.',
      progress: 8,
      max: 10,
      unlocked: false,
      perk: 'Earn 1.5x Eco-Points per meal',
    },
    {
      id: 'mc-legend',
      icon: '👑',
      title: 'McLegend',
      desc: 'Reachable by the top 1% of food explorers who unlock the 2030 secret menu.',
      progress: 3,
      max: 5,
      unlocked: false,
      perk: 'Invitation to McDonald’s Food Lab Tasting Panel',
    },
  ];

  const rewardPerks = [
    { id: 'mcflurry', title: 'Oreo Double Fudge McFlurry', points: 600, icon: '🍦', image: '/assets/food-mcflurry.jpg' },
    { id: 'burger-up', title: 'Free Bacon & Triple Cheese Stack', points: 900, icon: '🧀', image: '/assets/food-burger.jpg' },
    { id: 'secret-drop', title: 'Cyber-Sauce Tasting Flask Drop', points: 1500, icon: '🧪', image: '/assets/mcd-chicken-wraps.png' },
    { id: 'vip-pass', title: 'Priority Fast-Lane Drone Delivery Pass', points: 2200, icon: '🛸', image: '/assets/mcd-nuggets-fries-feast.png' },
  ];

  const handleClaim = (reward: { title: string; points: number }) => {
    if (points >= reward.points) {
      setPoints((p) => p - reward.points);
      onRedeemReward(reward.title, reward.points);
      alert(`🎉 Claimed "${reward.title}"! Points deducted.`);
    } else {
      alert(`⚠️ You need ${reward.points - points} more points to claim this perk!`);
    }
  };

  return (
    <section id="rewards" style={{
      padding: '100px 48px',
      background: 'radial-gradient(circle at 50% 30%, #1D1827 0%, #110E18 70%, #0A080E 100%)',
      color: '#FFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Star Particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #FFF, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 140px, #FFBC0D, rgba(0,0,0,0)), radial-gradient(1px 1px at 220px 70px, #FFF, rgba(0,0,0,0))',
        backgroundSize: '280px 280px',
        opacity: 0.35,
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
            <span>🪐</span>
            <span>Feature 04 — McRewards 2.0</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Your McUniverse.
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Points are no longer flat numbers. Your appetite builds a living celestial system.
            Unlock orbital badges, expand your planet, and harvest legendary perks.
          </p>
        </div>

        {/* McUniverse Main Grid: 3D Celestial World (Left) + Achievements & Perks (Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left Column: Interactive 3D Planet Celestial System */}
          <div style={{
            position: 'relative',
            height: '460px',
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 188, 13, 0.08) 0%, rgba(0, 0, 0, 0.5) 75%)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {/* Live Point HUD */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              background: 'rgba(25, 20, 30, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 188, 13, 0.4)',
              borderRadius: '16px',
              padding: '12px 20px',
              zIndex: 10,
            }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                CURRENT BALANCE
              </span>
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#FFBC0D' }}>
                {points.toLocaleString()} <span style={{ fontSize: '14px', color: '#FFF' }}>PTS</span>
              </div>
            </div>

            {/* Central 3D Golden Planet */}
            <div
              className="animate-mcd-orb"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #FFBC0D 0%, #D97706 60%, #78350F 100%)',
                boxShadow: '0 0 60px rgba(255, 188, 13, 0.6), inset -10px -10px 30px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 4,
              }}
            >
              <span style={{ fontSize: '42px' }}>🍔</span>
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#1A1817', letterSpacing: '1px' }}>
                LEVEL 4 TIER
              </span>
            </div>

            {/* Orbit Ring 1 */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              border: '1.5px dashed rgba(255, 188, 13, 0.35)',
              borderRadius: '50%',
              animation: 'mcdOrbSpin 22s linear infinite',
              pointerEvents: 'none',
            }}>
              {/* Satellite Icon 1 */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#DA291C',
                padding: '8px',
                borderRadius: '50%',
                fontSize: '18px',
                boxShadow: '0 0 16px rgba(218, 41, 28, 0.8)',
              }}>
                🍟
              </div>
            </div>

            {/* Orbit Ring 2 */}
            <div style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              animation: 'mcdOrbSpin 35s linear reverse infinite',
              pointerEvents: 'none',
            }}>
              {/* Satellite Icon 2 */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#10B981',
                padding: '8px',
                borderRadius: '50%',
                fontSize: '18px',
                boxShadow: '0 0 16px rgba(16, 185, 129, 0.8)',
              }}>
                🌱
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '20px',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '1px',
            }}>
              ✦ ORBITAL SYNC ACTIVE: 5 MILESTONES
            </div>
          </div>

          {/* Right Column: Achievements & Claimable Perks */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 14px 0', color: '#FFF' }}>
                McUNIVERSE ACHIEVEMENTS
              </h3>

              <div style={{ display: 'grid', gap: '10px' }}>
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    onClick={() => setSelectedAchievement(ach)}
                    style={{
                      background: ach.unlocked ? 'rgba(255, 188, 13, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${ach.unlocked ? 'rgba(255, 188, 13, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '16px',
                      padding: '12px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{ fontSize: '24px' }}>{ach.icon}</span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '15px', fontWeight: 800, color: ach.unlocked ? '#FFBC0D' : '#FFF' }}>
                            {ach.title}
                          </span>
                          {ach.unlocked && (
                            <span style={{
                              background: '#FFBC0D',
                              color: '#1A1817',
                              fontSize: '10px',
                              fontWeight: 900,
                              padding: '1px 6px',
                              borderRadius: '4px',
                            }}>
                              UNLOCKED
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '12px', color: '#9CA3AF' }}>{ach.desc}</div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', minWidth: '70px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: ach.unlocked ? '#FFBC0D' : '#9CA3AF' }}>
                        {ach.progress}/{ach.max}
                      </span>
                      <div style={{
                        width: '64px',
                        height: '4px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '2px',
                        marginTop: '4px',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          width: `${(ach.progress / ach.max) * 100}%`,
                          height: '100%',
                          background: ach.unlocked ? '#FFBC0D' : '#6B7280',
                        }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redeemable Perks Row */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#9CA3AF', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                INSTANT REWARDS CATALOG
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {rewardPerks.map((reward) => (
                  <div
                    key={reward.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '14px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: '1px solid rgba(255, 188, 13, 0.25)',
                      }}>
                        <img
                          src={reward.image}
                          alt={reward.title}
                          onError={(e) => { e.currentTarget.src = '/assets/food-burger.jpg'; }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFF' }}>
                        {reward.title}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 900, color: '#FFBC0D' }}>
                        {reward.points} PTS
                      </span>
                      <button
                        onClick={() => handleClaim(reward)}
                        style={{
                          background: points >= reward.points ? '#FFBC0D' : 'rgba(255, 255, 255, 0.1)',
                          color: points >= reward.points ? '#1A1817' : '#6B7280',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '5px 10px',
                          fontSize: '11px',
                          fontWeight: 800,
                          cursor: points >= reward.points ? 'pointer' : 'not-allowed',
                        }}
                      >
                        Claim
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
