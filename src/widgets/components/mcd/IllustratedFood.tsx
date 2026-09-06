'use client';

import React from 'react';

// ─────────────────────────────────────────────────────────────────────
// REAL FOOD PHOTOGRAPHY LIBRARY
// All cartoon/SVG illustrations replaced with realistic food photos.
// Images from: generated studio shot + curated Unsplash food photography
// ─────────────────────────────────────────────────────────────────────

// Shared photo URLs — mapped to high resolution local assets
const PHOTOS = {
  // Hero-quality shots (local assets)
  bigmacHero: '/assets/food-bigmac-real.jpg',
  burgerCombo: '/assets/hero-burger-composition.png',
  heroScene: '/assets/hero-scene-full.png',

  // Reference images from McDonald's studio assets
  wraps: '/assets/mcd-chicken-wraps.png',
  breakfastBanner: '/assets/mcd-breakfast-banner.png',
  mccafeDesserts: '/assets/mcd-mccafe-desserts.png',
  burgersTrio: '/assets/mcd-burgers-trio.png',
  nuggetsFeast: '/assets/mcd-nuggets-fries-feast.png',

  // Per-food local assets
  burger: '/assets/food-burger.jpg',
  fries: '/assets/mcd_slide_fries.jpg',
  friesClose: '/assets/food-fries-close.jpg',
  coke: '/assets/food-coke.jpg',
  chicken: '/assets/food-chicken.jpg',
  nuggets: '/assets/food-nuggets.jpg',
  mcflurry: '/assets/food-mcflurry.jpg',
  icedCoffee: '/assets/food-icedcoffee.jpg',
  breakfast: '/assets/mcd-breakfast-banner.png',
  mealCombo: '/assets/mcd-nuggets-fries-feast.png',
  // Category icons — local square shots
  catBurger: '/assets/cat-burgers.jpg',
  catMeals: '/assets/cat-meals.jpg',
  catChicken: '/assets/cat-chicken.jpg',
  catBeverages: '/assets/cat-beverages.jpg',
  catDesserts: '/assets/cat-desserts.jpg',
  catDeals: '/assets/cat-deals.jpg',
  catBreakfast: '/assets/cat-breakfast.jpg',
  catMccafe: '/assets/food-icedcoffee.jpg',
};

// ─── Shared helper: renders a food photo with natural integration styles ───
interface FoodPhotoProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  style?: React.CSSProperties;
  className?: string;
  objectFit?: React.CSSProperties['objectFit'];
  objectPosition?: string;
  shadowColor?: string;
  shadowIntensity?: number;
  borderRadius?: number | string;
}

const FoodPhoto: React.FC<FoodPhotoProps> = ({
  src,
  alt,
  width,
  height,
  style,
  className = '',
  objectFit = 'cover',
  objectPosition = 'center',
  shadowColor = 'rgba(80, 30, 5, 0.35)',
  shadowIntensity = 30,
  borderRadius = 0,
}) => (
  <div
    className={className}
    style={{
      width,
      height,
      position: 'relative',
      overflow: 'hidden',
      borderRadius,
      filter: `drop-shadow(0 ${shadowIntensity * 0.6}px ${shadowIntensity}px ${shadowColor})`,
      ...style,
    }}
  >
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.src = '/assets/food-bigmac-real.jpg';
      }}
      style={{
        width: '100%',
        height: '100%',
        objectFit,
        objectPosition,
        display: 'block',
      }}
    />
  </div>
);

// ==========================================
// 1. HERO ILLUSTRATED BURGER → Real Photo
// ==========================================
export const IllustratedHeroBurger: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}> = ({ size = 460, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.bigmacHero}
      alt="McDonald's Big Mac"
      width={size}
      height={size * 0.88}
      className={className}
      objectFit="cover"
      objectPosition="center top"
      shadowColor="rgba(100, 40, 0, 0.45)"
      shadowIntensity={40}
      borderRadius={size * 0.04}
      style={style}
    />
  );
};

// ==========================================
// 2. HERO ILLUSTRATED FRIES → Real Photo
// ==========================================
export const IllustratedFries: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}> = ({ size = 230, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.friesClose}
      alt="McDonald's Golden Fries"
      width={size}
      height={size * 1.2}
      className={className}
      objectFit="cover"
      objectPosition="center top"
      shadowColor="rgba(180, 60, 10, 0.3)"
      shadowIntensity={28}
      borderRadius={size * 0.06}
      style={style}
    />
  );
};

// ==========================================
// 3. HERO ILLUSTRATED COCA-COLA → Real Photo
// ==========================================
export const IllustratedCoke: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}> = ({ size = 220, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.coke}
      alt="McDonald's Coca-Cola"
      width={size}
      height={size * 1.3}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(60, 10, 5, 0.35)"
      shadowIntensity={28}
      borderRadius={size * 0.05}
      style={style}
    />
  );
};

// ==========================================
// 4. MIGHTY McDOUBLE MINI CARD → Real Photo
// ==========================================
export const IllustratedMightyMcDouble: React.FC<{ size?: number }> = ({ size = 95 }) => {
  return (
    <FoodPhoto
      src={PHOTOS.bigmacHero}
      alt="Mighty McDouble"
      width={size}
      height={size * 0.82}
      objectFit="cover"
      objectPosition="center top"
      shadowColor="rgba(80, 30, 5, 0.4)"
      shadowIntensity={18}
      borderRadius={size * 0.12}
    />
  );
};

// ==========================================
// 5. CATEGORY PHOTO ICONS → Real Photos
// ==========================================
export const IllustratedCategoryIcon: React.FC<{
  type:
  | 'burgers'
  | 'meals'
  | 'chicken'
  | 'beverages'
  | 'desserts'
  | 'deals'
  | 'rewards'
  | 'breakfast'
  | 'mccafe';
  size?: number;
}> = ({ type, size = 68 }) => {
  const photoMap: Record<string, string> = {
    burgers: PHOTOS.catBurger,
    meals: PHOTOS.catMeals,
    chicken: PHOTOS.catChicken,
    beverages: PHOTOS.catBeverages,
    desserts: PHOTOS.catDesserts,
    deals: PHOTOS.catDeals,
    rewards: PHOTOS.catMeals,
    breakfast: PHOTOS.catBreakfast,
    mccafe: PHOTOS.catMccafe,
  };

  const src = photoMap[type] || PHOTOS.catBurger;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.45)',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={type}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </div>
  );
};

// ==========================================
// 6. ILLUSTRATED CHICKEN BURGER → Real Photo
// ==========================================
export const IllustratedChickenBurger: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 220, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.chicken}
      alt="Spicy McCrispy Chicken Burger"
      width={size}
      height={size * 0.85}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(160, 50, 10, 0.3)"
      shadowIntensity={24}
      borderRadius={size * 0.05}
      style={style}
    />
  );
};

// ==========================================
// 7. ILLUSTRATED NUGGETS → Real Photo
// ==========================================
export const IllustratedNuggets: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 200, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.nuggets}
      alt="McDonald's Chicken McNuggets"
      width={size}
      height={size * 0.8}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(150, 80, 10, 0.28)"
      shadowIntensity={22}
      borderRadius={size * 0.06}
      style={style}
    />
  );
};

// ==========================================
// 8. ILLUSTRATED DESSERT → Real Photo
// ==========================================
export const IllustratedDessert: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 200, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.mcflurry}
      alt="McDonald's McFlurry Dessert"
      width={size}
      height={size * 1.1}
      className={className}
      objectFit="cover"
      objectPosition="center top"
      shadowColor="rgba(50, 20, 5, 0.22)"
      shadowIntensity={22}
      borderRadius={size * 0.08}
      style={style}
    />
  );
};

// ==========================================
// 9. ILLUSTRATED BEVERAGE → Real Photo
// ==========================================
export const IllustratedBeverage: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 200, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.icedCoffee}
      alt="McDonald's McCafé Iced Beverage"
      width={size}
      height={size * 1.2}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(40, 15, 5, 0.3)"
      shadowIntensity={24}
      borderRadius={size * 0.06}
      style={style}
    />
  );
};

// ==========================================
// 10. ILLUSTRATED BREAKFAST → Real Photo
// ==========================================
export const IllustratedBreakfast: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 210, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.breakfast}
      alt="McDonald's Egg McMuffin Breakfast"
      width={size}
      height={size * 0.82}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(100, 50, 10, 0.28)"
      shadowIntensity={22}
      borderRadius={size * 0.05}
      style={style}
    />
  );
};

// ==========================================
// 11. ILLUSTRATED MEAL COMBO → Real Photo
// ==========================================
export const IllustratedMealCombo: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 240, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.mealCombo}
      alt="McDonald's Meal Combo"
      width={size}
      height={size * 0.7}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(80, 30, 5, 0.35)"
      shadowIntensity={28}
      borderRadius={size * 0.05}
      style={style}
    />
  );
};

// ==========================================
// 12. ILLUSTRATED CHICKEN WRAPS → Real Photo
// ==========================================
export const IllustratedWraps: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 220, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.wraps}
      alt="McDonald's Crispy Chicken Wraps"
      width={size}
      height={size * 0.85}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(218, 41, 28, 0.3)"
      shadowIntensity={26}
      borderRadius={size * 0.06}
      style={style}
    />
  );
};

// ==========================================
// 13. ILLUSTRATED BURGERS TRIO → Real Photo
// ==========================================
export const IllustratedTrio: React.FC<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  animated?: boolean;
}> = ({ size = 240, style, className = '' }) => {
  return (
    <FoodPhoto
      src={PHOTOS.burgersTrio}
      alt="McDonald's Burgers Trio"
      width={size}
      height={size * 0.75}
      className={className}
      objectFit="cover"
      objectPosition="center"
      shadowColor="rgba(255, 188, 13, 0.3)"
      shadowIntensity={24}
      borderRadius={size * 0.05}
      style={style}
    />
  );
};

// ==========================================
// 14. MASTER FOOD VISUAL DISPATCHER
// ==========================================
export const IllustratedFoodVisual: React.FC<{
  name?: string;
  type?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
}> = ({ name = '', type = '', size = 140, className = '', style, animated = true }) => {
  const query = `${name} ${type}`.toLowerCase();

  if (query.includes('wrap')) {
    return <IllustratedWraps size={size} className={className} style={style} animated={animated} />;
  }
  if (query.includes('nugget') || query.includes('habanero bites')) {
    return <IllustratedNuggets size={size} className={className} style={style} animated={animated} />;
  }
  if (
    query.includes('fry') ||
    query.includes('fries') ||
    query.includes('wedges') ||
    query.includes('crisscut')
  ) {
    return <IllustratedFries size={size * 0.9} className={className} style={style} />;
  }
  if (
    query.includes('chicken') ||
    query.includes('mccrispy') ||
    query.includes('wasabi crisp')
  ) {
    return (
      <IllustratedChickenBurger size={size} className={className} style={style} animated={animated} />
    );
  }
  if (
    query.includes('mccafe') ||
    query.includes('latte') ||
    query.includes('coffee') ||
    query.includes('chiller') ||
    query.includes('mocha') ||
    query.includes('float')
  ) {
    return (
      <IllustratedBeverage size={size * 0.95} className={className} style={style} animated={animated} />
    );
  }
  if (
    query.includes('beverage') ||
    query.includes('coke') ||
    query.includes('cola') ||
    query.includes('drink') ||
    query.includes('fizz') ||
    query.includes('shake')
  ) {
    return <IllustratedCoke size={size * 0.95} className={className} style={style} />;
  }
  if (
    query.includes('dessert') ||
    query.includes('mcflurry') ||
    query.includes('fudge') ||
    query.includes('cookie') ||
    query.includes('oreo') ||
    query.includes('pie')
  ) {
    return (
      <IllustratedDessert size={size} className={className} style={style} animated={animated} />
    );
  }
  if (
    query.includes('breakfast') ||
    query.includes('mcmuffin') ||
    query.includes('egg') ||
    query.includes('sunrise')
  ) {
    return (
      <IllustratedBreakfast size={size} className={className} style={style} animated={animated} />
    );
  }
  if (query.includes('trio') || query.includes('stack') || query.includes('wagyu')) {
    return (
      <IllustratedTrio size={size} className={className} style={style} animated={animated} />
    );
  }
  if (
    query.includes('combo') ||
    query.includes('meal') ||
    query.includes('pack') ||
    query.includes('collection') ||
    query.includes('box')
  ) {
    return (
      <IllustratedMealCombo size={size * 1.2} className={className} style={style} animated={animated} />
    );
  }

  // Default: realistic burger photo
  return <IllustratedHeroBurger size={size} className={className} style={style} />;
};
