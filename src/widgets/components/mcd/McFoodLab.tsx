'use client';

import React, { useState } from 'react';
import { FoodLabItem } from './types';


export const McFoodLab: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const [items, setItems] = useState<FoodLabItem[]>([
    {
      id: 'lab-1',
      title: 'Wasabi Citrus Hot-Honey Crispy Chicken',
      category: 'FLAVOR EXPERIMENTS',
      concept: 'Bio-Fermented Honey & Shizuoka Wasabi Emulsion',
      description: 'Double-breaded crispy chicken dunked in an artisan hot honey infused with cold-grated mountain wasabi and yuzu peel.',
      techInnovation: 'Micro-encapsulated heat particles that release progressively upon mastication.',
      votesYes: 482,
      votesMaybe: 91,
      votesNo: 34,
      image: '/assets/mcd-chicken-wraps.png',
    },
    {
      id: 'lab-2',
      title: 'Cellular Plant-Sculpted Micro Nuggets',
      category: 'FUTURE FOOD',
      concept: '3D Precision-Printed Plant Fiber & Mycoprotein',
      description: 'Zero-livestock chicken nuggets sculpted with identical microscopic grain alignment to deliver standard McNugget mouthfeel.',
      techInnovation: 'Reduces lifecycle water consumption by 94% with zero loss in crispy crust fidelity.',
      votesYes: 620,
      votesMaybe: 145,
      votesNo: 52,
      image: '/assets/food-nuggets.jpg',
    },
    {
      id: 'lab-3',
      title: 'Truffle-Infused Cyber Gold Fries Drop',
      category: 'LIMITED DROPS',
      concept: 'Black Winter Truffle & 24K Edible Gold Salt Flakes',
      description: 'Exclusive 48-hour metropolitan drop. Hand-cut Idaho potatoes dusted with shaved Italian black truffle and mineral gold shimmer.',
      techInnovation: 'Served in temperature-locking vacuum graphene sleeves.',
      votesYes: 890,
      votesMaybe: 42,
      votesNo: 18,
      image: '/assets/food-fries-close.jpg',
    },
    {
      id: 'lab-4',
      title: 'Solar Nitro Cold-Brew McFloat',
      category: 'FUTURE MENU',
      concept: 'Continuous Nitrogen Aeration with Vanilla Soft-Serve Cloud',
      description: 'Single-origin Ethiopian coffee cold-brewed via concentrated solar stills, topped with lactose-free oat milk cloud foam.',
      techInnovation: 'Zero electricity refrigeration during transit.',
      votesYes: 374,
      votesMaybe: 88,
      votesNo: 29,
      image: '/assets/mcd-mccafe-desserts.png',
    },
  ]);

  const categories = ['ALL', 'FLAVOR EXPERIMENTS', 'FUTURE FOOD', 'LIMITED DROPS', 'FUTURE MENU'];

  const filteredItems = activeCategory === 'ALL'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handleVote = (id: string, vote: 'YES' | 'MAYBE' | 'NO') => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.userVote) return item; // already voted
          return {
            ...item,
            userVote: vote,
            votesYes: vote === 'YES' ? item.votesYes + 1 : item.votesYes,
            votesMaybe: vote === 'MAYBE' ? item.votesMaybe + 1 : item.votesMaybe,
            votesNo: vote === 'NO' ? item.votesNo + 1 : item.votesNo,
          };
        }
        return item;
      })
    );
  };

  return (
    <section id="foodlab" style={{
      padding: '100px 48px',
      background: 'radial-gradient(circle at 50% 20%, #201918 0%, #131010 80%)',
      color: '#FFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Sci-fi Glow Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(255, 188, 13, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 188, 13, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.4,
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
            <span>🧪</span>
            <span>Feature 08 — McFood Lab</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Welcome to the Food Lab.
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Step inside our culinary engineering test-chamber. Preview cutting-edge formulas,
            taste prototypes, and vote on what makes the worldwide 2030 menu.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? '#FFBC0D' : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === cat ? '#1A1817' : '#FFF',
                border: `1px solid ${activeCategory === cat ? '#FFBC0D' : 'rgba(255, 255, 255, 0.1)'}`,
                borderRadius: '999px',
                padding: '8px 20px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: '0.5px',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Lab Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          {filteredItems.map((item) => {
            const totalVotes = item.votesYes + item.votesMaybe + item.votesNo;
            const yesPercent = Math.round((item.votesYes / totalVotes) * 100) || 0;
            const maybePercent = Math.round((item.votesMaybe / totalVotes) * 100) || 0;
            const noPercent = Math.round((item.votesNo / totalVotes) * 100) || 0;

            return (
              <div
                key={item.id}
                className="mcd-3d-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div>
                  {/* Category Pill */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{
                      background: 'rgba(218, 41, 28, 0.2)',
                      color: '#FFBC0D',
                      fontSize: '11px',
                      fontWeight: 900,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      letterSpacing: '1px',
                    }}>
                      {item.category}
                    </span>

                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>
                      {totalVotes} Total Votes
                    </span>
                  </div>

                  {/* Real Food Photo */}
                  <div style={{
                    height: '180px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255, 188, 13, 0.25)',
                  }}>
                    <img
                      src={item.image}
                      alt={item.title}
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
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 900, margin: '0 0 8px 0', color: '#FFF' }}>
                    {item.title}
                  </h3>

                  <div style={{ fontSize: '12px', color: '#FFBC0D', fontWeight: 700, marginBottom: '10px' }}>
                    🔬 {item.concept}
                  </div>

                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                    {item.description}
                  </p>

                  <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    color: '#9CA3AF',
                    marginBottom: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}>
                    💡 <strong style={{ color: '#FFF' }}>Tech Innovation:</strong> {item.techInnovation}
                  </div>
                </div>

                {/* Community Voting Section */}
                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '16px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>
                    WOULD YOU TRY THIS?
                  </div>

                  {/* Vote Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px' }}>
                    <button
                      onClick={() => handleVote(item.id, 'YES')}
                      disabled={!!item.userVote}
                      style={{
                        background: item.userVote === 'YES' ? '#10B981' : 'rgba(16, 185, 129, 0.15)',
                        color: item.userVote === 'YES' ? '#FFF' : '#10B981',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '8px',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: item.userVote ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      YES ({yesPercent}%)
                    </button>

                    <button
                      onClick={() => handleVote(item.id, 'MAYBE')}
                      disabled={!!item.userVote}
                      style={{
                        background: item.userVote === 'MAYBE' ? '#FFBC0D' : 'rgba(255, 188, 13, 0.15)',
                        color: item.userVote === 'MAYBE' ? '#1A1817' : '#FFBC0D',
                        border: '1px solid rgba(255, 188, 13, 0.3)',
                        borderRadius: '8px',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: item.userVote ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      MAYBE ({maybePercent}%)
                    </button>

                    <button
                      onClick={() => handleVote(item.id, 'NO')}
                      disabled={!!item.userVote}
                      style={{
                        background: item.userVote === 'NO' ? '#DA291C' : 'rgba(218, 41, 28, 0.15)',
                        color: item.userVote === 'NO' ? '#FFF' : '#DA291C',
                        border: '1px solid rgba(218, 41, 28, 0.3)',
                        borderRadius: '8px',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: item.userVote ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      NO ({noPercent}%)
                    </button>
                  </div>

                  {/* Live Progress Bar */}
                  <div style={{
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    display: 'flex',
                  }}>
                    <div style={{ width: `${yesPercent}%`, background: '#10B981' }} />
                    <div style={{ width: `${maybePercent}%`, background: '#FFBC0D' }} />
                    <div style={{ width: `${noPercent}%`, background: '#DA291C' }} />
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
