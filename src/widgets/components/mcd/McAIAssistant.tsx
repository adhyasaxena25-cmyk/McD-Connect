'use client';

import React, { useState } from 'react';
import { CartItem } from './types';

interface McAIAssistantProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onNavigateToSection: (sectionId: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  recommendation?: {
    name: string;
    price: number;
    image: string;
    actionLabel: string;
    sectionTarget?: string;
  };
}

export const McAIAssistant: React.FC<McAIAssistantProps> = ({
  onAddToCart,
  onNavigateToSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Hey there! I am McAI, your personal food intelligence companion. What are we craving today?',
    },
  ]);

  const quickActions = [
    'Surprise me',
    'Something spicy',
    'Under ₹250',
    'What’s new?',
    'Build my meal',
  ];

  const handleQuickAction = (action: string) => {
    // Add user message
    const userMsg: ChatMessage = { id: String(Date.now()), sender: 'user', text: action };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let aiResponse: ChatMessage;

      if (action === 'Surprise me') {
        aiResponse = {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'I detected a craving for crunch with a hint of smoky heat! Here is our Chef Secret combo:',
          recommendation: {
            name: 'Spicy McCrispy™ & Peri-Peri Fries',
            price: 289,
            image: '/assets/mcd-chicken-wraps.png',
            actionLabel: '+ Add Surprise to Cart',
          },
        };
      } else if (action === 'Something spicy') {
        aiResponse = {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'Dialing spice to max! Try our Ghost Habanero Trial wings and Peri-Peri dip.',
          recommendation: {
            name: 'Fiery Ghost Habanero Bites (8pc)',
            price: 249,
            image: '/assets/food-nuggets.jpg',
            actionLabel: '+ Add Spicy Meal',
          },
        };
      } else if (action === 'Under ₹250') {
        aiResponse = {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'Budget-perfect flavor efficiency! Here is our Value Master combo:',
          recommendation: {
            name: 'McAloo Tikki Double Meal + Fries',
            price: 199,
            image: '/assets/food-mealcombo.jpg',
            actionLabel: '+ Add ₹199 Meal',
          },
        };
      } else if (action === 'What’s new?') {
        aiResponse = {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'The Food Lab just unveiled Truffle-Infused Cyber Gold Fries! Want to check out the Food Lab?',
          recommendation: {
            name: 'Truffle-Infused Cyber Gold Fries',
            price: 249,
            image: '/assets/food-fries-close.jpg',
            actionLabel: 'Jump to Food Lab 🧪',
            sectionTarget: 'foodlab',
          },
        };
      } else {
        aiResponse = {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'Let us craft your dream architectural burger together in the 3D studio!',
          recommendation: {
            name: '3D Burger Architecture Studio',
            price: 299,
            image: '/assets/food-bigmac-real.jpg',
            actionLabel: 'Launch 3D Builder 🛠️',
            sectionTarget: 'builder',
          },
        };
      }

      setMessages((prev) => [...prev, aiResponse]);
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const userMsg: ChatMessage = { id: String(Date.now()), sender: 'user', text: inputVal };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    setTimeout(() => {
      const aiReply: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: `Got it! Mapping your request to our kitchen neural net. Would you like to customize this in the 3D Builder or add our best-selling match directly?`,
        recommendation: {
          name: 'Personalized Chef Curation',
          price: 299,
          image: '/assets/food-burger.jpg',
          actionLabel: '+ Add Curated Meal (₹299)',
        },
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 700);
  };

  return (
    <>
      {/* Floating Glowing Orb Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 1100,
          cursor: 'pointer',
        }}
      >
        <div
          className="animate-mcd-orb"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #FFF0BA 0%, #FFBC0D 40%, #DA291C 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 8px 30px rgba(255, 188, 13, 0.6), 0 0 40px rgba(218, 41, 28, 0.4)',
            transition: 'transform 0.25s ease',
          }}
        >
          <span style={{ fontSize: '28px' }}>🤖</span>

          {/* Glowing Aura Ring */}
          <div style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 188, 13, 0.6)',
            animation: 'mcdOrbSpin 12s linear infinite',
            pointerEvents: 'none',
          }} />

          {/* AI Badge */}
          <div style={{
            position: 'absolute',
            top: '-6px',
            right: '-6px',
            background: '#1A1817',
            color: '#FFBC0D',
            fontSize: '10px',
            fontWeight: 900,
            padding: '2px 6px',
            borderRadius: '999px',
            border: '1px solid #FFBC0D',
          }}>
            McAI
          </div>
        </div>
      </div>

      {/* Slide-out McAI Assistant Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '105px',
            right: '28px',
            width: '380px',
            maxHeight: '560px',
            background: '#1A1817',
            border: '2px solid rgba(255, 188, 13, 0.5)',
            borderRadius: '28px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 188, 13, 0.25)',
            zIndex: 1100,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            color: '#FFF',
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(218, 41, 28, 0.4) 0%, rgba(255, 188, 13, 0.2) 100%)',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFBC0D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}>
                🤖
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFF' }}>McAI Concierge</div>
                <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>● Neural Taste Net Active</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#FFF',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                }}
              >
                <div style={{
                  background: msg.sender === 'user' ? '#DA291C' : 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  fontSize: '13px',
                  lineHeight: 1.4,
                  border: msg.sender === 'ai' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                }}>
                  {msg.text}
                </div>

                {/* Optional Recommended Food Card in Chat */}
                {msg.recommendation && (
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #FFBC0D',
                    borderRadius: '14px',
                    padding: '10px',
                    marginTop: '8px',
                  }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                      <img
                        src={msg.recommendation.image}
                        alt={msg.recommendation.name}
                        style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#FFF' }}>
                          {msg.recommendation.name}
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 900, color: '#FFBC0D' }}>
                          ₹{msg.recommendation.price}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (msg.recommendation?.sectionTarget) {
                          onNavigateToSection(msg.recommendation.sectionTarget);
                          setIsOpen(false);
                        } else if (msg.recommendation) {
                          onAddToCart({
                            id: `ai-rec-${Date.now()}`,
                            name: msg.recommendation.name,
                            price: msg.recommendation.price,
                            image: msg.recommendation.image,
                            description: 'Recommended by McAI Neural Concierge',
                          });
                        }
                      }}
                      style={{
                        width: '100%',
                        background: '#FFBC0D',
                        color: '#1A1817',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      {msg.recommendation.actionLabel}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Action Chips */}
          <div style={{
            padding: '8px 16px',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            background: 'rgba(0, 0, 0, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            {quickActions.map((action) => (
              <button
                key={action}
                onClick={() => handleQuickAction(action)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFBC0D',
                  border: '1px solid rgba(255, 188, 13, 0.3)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '11px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask McAI what to eat..."
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '999px',
                padding: '8px 14px',
                fontSize: '12px',
                color: '#FFF',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#FFBC0D',
                border: 'none',
                color: '#1A1817',
                borderRadius: '999px',
                padding: '8px 14px',
                fontWeight: 800,
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};
