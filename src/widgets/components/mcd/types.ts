export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  customization?: {
    patty?: string;
    sauce?: string;
    spice?: string;
    layers?: string[];
    side?: string;
    drink?: string;
  };
  quantity: number;
}

export interface TasteDNAScores {
  crispy: number;
  savory: number;
  spicy: number;
  sweet: number;
  comfort: number;
  adventurous: number;
}

export interface MoodOption {
  id: string;
  label: string;
  icon: string;
  quote: string;
  mealTitle: string;
  mealPrice: number;
  mealItems: string[];
  gradient: string;
  aura: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  desc: string;
  progress: number;
  max: number;
  unlocked: boolean;
  perk: string;
}

export interface PassportItem {
  id: string;
  name: string;
  category: 'Classics' | 'Spicy' | 'Desserts' | 'McCafé' | 'Breakfast' | 'Limited Edition';
  rarity: 'Classic' | 'Epic' | 'Legendary' | 'Secret';
  discovered: boolean;
  calories: string;
  tasteMatch: number;
  description: string;
  flavorNotes: string[];
  image: string;
}

export interface FoodLabItem {
  id: string;
  title: string;
  category: 'FLAVOR EXPERIMENTS' | 'FUTURE FOOD' | 'LIMITED DROPS' | 'FUTURE MENU';
  concept: string;
  description: string;
  techInnovation: string;
  votesYes: number;
  votesMaybe: number;
  votesNo: number;
  userVote?: 'YES' | 'MAYBE' | 'NO';
  image: string;
}

export interface FriendOrder {
  id: string;
  name: string;
  avatar: string;
  meal: string;
  drink: string;
  side: string;
  price: number;
  status: string;
  reactions: string[];
  image?: string;
}
