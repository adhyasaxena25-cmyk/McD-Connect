'use client';

import React, { useState } from 'react';
import { CartItem } from './types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const total = Math.max(0, subtotal + tax + deliveryFee - discount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'MCD2030' || promoCode.toUpperCase() === 'FUTURE') {
      setDiscount(100);
      alert('🎉 Promo Code MCD2030 Applied! ₹100 discount added.');
    } else {
      alert('⚠️ Invalid code. Try "MCD2030" for ₹100 off!');
    }
  };

  const handlePlaceOrder = () => {
    setIsOrdered(true);
  };

  const handleResetOrder = () => {
    setIsOrdered(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        zIndex: 2500,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '460px',
          maxWidth: '100%',
          height: '100%',
          background: '#1A1817',
          borderLeft: '2px solid rgba(255, 188, 13, 0.3)',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.8)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🛍️</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900 }}>
                Your McTray 2030
              </h3>
              <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#FFF',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            ✕
          </button>
        </div>

        {/* Order Successful Screen */}
        {isOrdered ? (
          <div style={{
            flex: 1,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '46px',
              marginBottom: '20px',
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)',
            }}>
              ✓
            </div>

            <h3 style={{ fontSize: '26px', fontWeight: 900, margin: '0 0 10px 0', color: '#FFF' }}>
              Order Confirmed!
            </h3>

            <div style={{
              background: 'rgba(255, 188, 13, 0.15)',
              color: '#FFBC0D',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 800,
              marginBottom: '20px',
            }}>
              Order ID: #MCD-2030-9842
            </div>

            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, margin: '0 0 30px 0' }}>
              Your order has been dispatched via autonomous electric pod.
              Estimated delivery to your table or doorstep in <strong>14 minutes</strong>.
            </p>

            <button
              onClick={handleResetOrder}
              style={{
                background: '#FFBC0D',
                color: '#1A1817',
                border: 'none',
                borderRadius: '999px',
                padding: '14px 32px',
                fontWeight: 900,
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              Order More →
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {cartItems.length === 0 ? (
                <div style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B7280',
                  textAlign: 'center',
                }}>
                  <span style={{ fontSize: '48px', marginBottom: '12px' }}>🍔</span>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFF' }}>
                    Your tray is empty
                  </div>
                  <p style={{ fontSize: '13px', margin: '6px 0 0 0' }}>
                    Explore MyTaste or build a custom 3D burger to add items.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '16px',
                      padding: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      gap: '14px',
                    }}
                  >
                    <img
                      src={item.image || '/assets/food-burger.jpg'}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.src = '/assets/food-burger.jpg';
                      }}
                      style={{
                        width: '72px',
                        height: '72px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#FFF' }}>
                          {item.name}
                        </h4>
                        <span style={{ fontSize: '15px', fontWeight: 900, color: '#FFBC0D' }}>
                          ₹{item.price * item.quantity}
                        </span>
                      </div>

                      <p style={{ margin: '4px 0 8px 0', fontSize: '12px', color: '#9CA3AF', lineHeight: 1.3 }}>
                        {item.description}
                      </p>

                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            color: '#FFF',
                            fontWeight: 800,
                            cursor: 'pointer',
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '13px', fontWeight: 800, minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            color: '#FFF',
                            fontWeight: 800,
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div style={{
                padding: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(0, 0, 0, 0.4)',
              }}>
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. MCD2030)"
                    style={{
                      flex: 1,
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      color: '#FFF',
                      fontSize: '12px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      color: '#FFF',
                      borderRadius: '10px',
                      padding: '8px 14px',
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    Apply
                  </button>
                </form>

                {/* Price Breakdown */}
                <div style={{ display: 'grid', gap: '6px', fontSize: '13px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF' }}>
                    <span>Subtotal:</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF' }}>
                    <span>GST (5%):</span>
                    <span>₹{tax}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF' }}>
                    <span>Autonomous Delivery:</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  {discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 800 }}>
                      <span>MCD2030 Discount:</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '18px',
                    fontWeight: 900,
                    color: '#FFBC0D',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
                    <span>Total:</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handlePlaceOrder}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #FFBC0D 0%, #F59E0B 100%)',
                    color: '#1A1817',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 24px rgba(255, 188, 13, 0.4)',
                  }}
                >
                  <span>Pay via McPay 2030 →</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
