
export interface Product {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'Accessories';
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviewsCount: number;
  stock: { [size: string]: number };
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
}

export interface Message {
  role: 'ai' | 'user';
  text: string;
  attachedProduct?: Product;
  type?: 'text' | 'styling-tip' | 'weather-alert';
}

export interface StyleProfile {
  aesthetic: string;
  preferredColors: string[];
  sizePreference: 'Slim' | 'Regular' | 'Oversized';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
  helpfulCount?: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  addresses: Address[];
  orders: Order[];
  styleProfile?: StyleProfile;
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export type AuthMode = 'login' | 'signup' | 'forgot-password';
