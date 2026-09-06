'use client';

import React, { useState } from 'react';
import { FriendOrder } from './types';

export const SocialOrder: React.FC = () => {
  const [roomCode] = useState('MCD-2030-ROOM-7');
  const [copied, setCopied] = useState(false);

  const [orders, setOrders] = useState<FriendOrder[]>([
    {
      id: '1',
      name: 'Mimi (Host)',
      avatar: '👩‍🎤',
      meal: 'Spicy Paneer Wrap Deluxe',
      drink: 'McCafé Iced Vanilla Latte',
      side: 'Crisscut Fries',
      price: 299,
      status: 'Ready to order',
      reactions: ['🔥', '😋'],
      image: '/assets/mcd-chicken-wraps.png',
    },
    {
      id: '2',
      name: 'Alex',
      avatar: '👨‍💻',
      meal: 'Double Big Mac™ (Extra Pickles)',
      drink: 'Coca-Cola Zero Sugar',
      side: 'Golden Fries (Large)',
      price: 349,
      status: 'Customizing burger',
      reactions: ['🍔', '❤️'],
      image: '/assets/food-bigmac-real.jpg',
    },
    {
      id: '3',
      name: 'Sarah',
      avatar: '👩‍🎨',
      meal: '9pc Spicy McNuggets™ Box',
      drink: 'Sprite Chill Lime',
      side: 'Cheesy Herb Dippers',
      price: 289,
      status: 'Locked in',
      reactions: ['⚡', '🔥'],
      image: '/assets/food-nuggets.jpg',
    },
    {
      id: '4',
      name: 'You',
      avatar: '🚀',
      meal: 'Custom 3D Burger Stack',
      drink: 'Coca-Cola Original',
      side: 'Peri Peri Shaker Fries',
      price: 319,
      status: 'Ready to order',
      reactions: ['👑'],
      image: '/assets/food-burger.jpg',
    },
  ]);

  const [voteCount, setVoteCount] = useState(3);
  const totalRoomBill = orders.reduce((sum, o) => sum + o.price, 0);
  const perPersonShare = Math.round(totalRoomBill / orders.length);

  const handleAddReaction = (orderId: string, emoji: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, reactions: [...o.reactions, emoji] } : o
      )
    );
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSurpriseMe = () => {
    alert('🎲 Shuffling room selection with McAI secret combo!');
  };

  return (
    <section id="social" style={{
      padding: '100px 48px',
      background: 'linear-gradient(180deg, #FAF5EA 0%, #FFF9F0 100%)',
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
            background: 'rgba(218, 41, 28, 0.1)',
            color: '#DA291C',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            <span>👥</span>
            <span>Feature 06 — Social Order</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            color: '#1A1817',
            letterSpacing: '-1.5px',
            margin: '0 0 16px 0',
          }}>
            Eat Together. Even From Apart.
          </h2>

          <p style={{
            fontSize: '17px',
            color: '#6B7280',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Gather in a virtual food room. Dine together across distance with synchronized trays,
            instant emoji reactions, bill-splitting, and collaborative order consensus.
          </p>
        </div>

        {/* Mimi's Food Room Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          border: '1px solid #EADBCE',
          padding: '36px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
        }}>
          {/* Room Header Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingBottom: '24px',
            borderBottom: '1px solid #EADBCE',
            marginBottom: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 10px #10B981',
              }} />
              <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: '#1A1817' }}>
                MIMI&apos;S FOOD ROOM
              </h3>
              <span style={{
                background: '#FAF5EA',
                color: '#6B7280',
                fontSize: '12px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
              }}>
                4 Members Active
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={handleCopyCode}
                style={{
                  background: '#FAF5EA',
                  border: '1px solid #EADBCE',
                  borderRadius: '999px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#1A1817',
                }}
              >
                {copied ? '✓ Room Code Copied!' : `🔗 Invite Code: #${roomCode}`}
              </button>

              <button
                onClick={handleSurpriseMe}
                style={{
                  background: '#FFBC0D',
                  color: '#1A1817',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                🎲 Surprise Me
              </button>
            </div>
          </div>

          {/* Virtual 3D Dining Table Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '36px',
          }}>
            {orders.map((order) => (
              <div
                key={order.id}
                className="mcd-3d-card"
                style={{
                  background: order.name === 'You' ? '#FFFDF8' : '#FAF5EA',
                  border: `2px solid ${order.name === 'You' ? '#FFBC0D' : '#EADBCE'}`,
                  borderRadius: '24px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '28px' }}>{order.avatar}</span>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#1A1817' }}>
                          {order.name}
                        </div>
                        <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>
                          ● {order.status}
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: 900, color: '#DA291C' }}>
                      ₹{order.price}
                    </span>
                  </div>

                  {/* Meal Plate items with food photo */}
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '12px',
                    marginBottom: '14px',
                    border: '1px solid #EADBCE',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}>
                    {order.image && (
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: '1px solid #EADBCE',
                      }}>
                        <img
                          src={order.image}
                          alt={order.meal}
                          onError={(e) => { e.currentTarget.src = '/assets/food-burger.jpg'; }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A1817', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        🍽️ {order.meal}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                        🥤 {order.drink}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                        🍟 {order.side}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reactions Section */}
                <div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    {order.reactions.map((emoji, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#FFFFFF',
                          padding: '3px 8px',
                          borderRadius: '999px',
                          fontSize: '12px',
                          border: '1px solid #EADBCE',
                        }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {['🔥', '😋', '🍔', '❤️'].map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleAddReaction(order.id, emoji)}
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid #EADBCE',
                          borderRadius: '8px',
                          padding: '4px 8px',
                          cursor: 'pointer',
                          fontSize: '13px',
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Room Bill Splitting & Group Consensus */}
          <div style={{
            background: '#1A1817',
            color: '#FFF',
            borderRadius: '24px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 800, textTransform: 'uppercase' }}>
                SPLIT BILL CALCULATOR
              </div>
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#FFBC0D' }}>
                ₹{perPersonShare} <span style={{ fontSize: '14px', color: '#FFF' }}>/ person</span>
                <span style={{ fontSize: '14px', color: '#9CA3AF', marginLeft: '12px' }}>
                  (Total: ₹{totalRoomBill})
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Consensus Votes</span>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFF' }}>
                  {voteCount} of 4 Ready
                </div>
              </div>

              <button
                onClick={() => setVoteCount(4)}
                style={{
                  background: '#10B981',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                ✓ Cast Vote
              </button>

              <button
                onClick={() => alert('🚀 Collaborative order submitted to the kitchen for immediate group drone delivery!')}
                style={{
                  background: '#FFBC0D',
                  color: '#1A1817',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '12px 28px',
                  fontSize: '14px',
                  fontWeight: 900,
                  cursor: 'pointer',
                }}
              >
                Place Group Order →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
