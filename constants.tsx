
import { Product, Review } from './types';

export const CATEGORIES = ['Men', 'Women', 'Kids', 'Accessories'] as const;

export const LAUNCH_PROMOS = [
  { id: 'p1', code: 'GSLAUNCH25', discount: '25% OFF', description: 'On your first order from the Heritage Collection' },
  { id: 'p2', code: 'FREESHIP', discount: 'FREE DELIVERY', description: 'Complimentary shipping on all launch items' },
  { id: 'p3', code: 'HERITAGE10', discount: 'EXTRA 10% OFF', description: 'When you buy 2 or more items from the same brand' }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    userId: 'u1',
    userName: 'Rahul M.',
    rating: 5,
    date: 'Oct 12, 2023',
    comment: 'The quality of the denim is exceptional. Pepe Jeans never disappoints with the fit. Highly recommended for daily wear.',
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=60&w=200'],
    helpfulCount: 24
  },
  {
    id: 'r2',
    userId: 'u2',
    userName: 'Anjali S.',
    rating: 4,
    date: 'Nov 05, 2023',
    comment: 'Very comfortable, but the color is slightly darker than the pictures. Still, a great purchase!',
    helpfulCount: 12
  },
  {
    id: 'r3',
    userId: 'u3',
    userName: 'Vikram K.',
    rating: 5,
    date: 'Dec 01, 2023',
    comment: 'Perfect delivery speed. The packaging was premium. GS is now my go-to for branded wear.',
    helpfulCount: 45
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'pj-1',
    name: 'Pepe Jeans Slim-Fit Indigo Denim',
    category: 'Men',
    subcategory: 'Denim',
    price: 3499,
    originalPrice: 4999,
    description: 'Iconic Pepe Jeans London slim-fit denim. Crafted with premium stretch cotton for the perfect balance of comfort and style. Features traditional 5-pocket styling and signature branding.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: ['Deep Indigo', 'Light Wash', 'Midnight Black'],
    rating: 4.8,
    reviewsCount: 1240,
    stock: { '30': 15, '32': 25, '34': 10, '36': 5 },
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: 'jock-1',
    name: 'Jockey Performance Active Tee',
    category: 'Men',
    subcategory: 'Sportswear',
    price: 1299,
    originalPrice: 1599,
    description: 'Stay focused with Jockey Sport. This performance tee features stay-dry technology that wicks sweat away from the body. Lightweight fabric ensures maximum mobility.',
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy Blue', 'Olive'],
    rating: 4.7,
    reviewsCount: 3500,
    stock: { S: 50, M: 45, L: 60, XL: 20 },
    isNewArrival: true
  },
  {
    id: 'turt-1',
    name: 'Turtle Signature Linen Blazer',
    category: 'Men',
    subcategory: 'Formal Wear',
    price: 5999,
    originalPrice: 7999,
    description: 'Redefine elegance with Turtle. This lightweight linen-blend blazer is perfect for summer weddings or sharp office wear. Featuring a modern tailored fit and breathable lining.',
    images: [
      'https://images.unsplash.com/photo-1594932224828-b4b059b6ff0f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['Beige', 'Powder Blue', 'Slate'],
    rating: 4.9,
    reviewsCount: 850,
    stock: { '38': 8, '40': 12, '42': 5, '44': 3 },
    isTrending: true,
    isNewArrival: true
  },
  {
    id: 'lux-1',
    name: 'Lux Cozi Premium Cotton Vest (Pack of 3)',
    category: 'Men',
    subcategory: 'Innerwear',
    price: 899,
    description: 'Everyday comfort redefined. Lux Cozi premium vests are made from 100% combed cotton, providing superior softness and durability for all-day wear.',
    images: [
      'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['80cm', '85cm', '90cm', '95cm'],
    colors: ['White'],
    rating: 4.6,
    reviewsCount: 15200,
    stock: { '80cm': 100, '85cm': 150, '90cm': 200, '95cm': 80 },
    isBestSeller: true
  },
  {
    id: 'loman-1',
    name: 'Loman High-Street Fusion Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 4500,
    originalPrice: 5500,
    description: 'Loman brings high-street global trends to your wardrobe. This fusion dress blends bohemian silhouettes with contemporary prints, perfect for brunch or evening outings.',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Marigold', 'Azure'],
    rating: 4.8,
    reviewsCount: 520,
    stock: { XS: 10, S: 15, M: 20, L: 8 },
    isNewArrival: true
  },
  {
    id: 'acc-1',
    name: 'Titanium Edge Smart Watch',
    category: 'Accessories',
    subcategory: 'Watches',
    price: 12999,
    originalPrice: 15999,
    description: 'A masterpiece of precision. The Titanium Edge features a sapphire crystal display and a genuine Italian leather strap. Syncs seamlessly with the GS styling app.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544117518-3b21648a3e74?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['One Size'],
    colors: ['Space Grey', 'Rose Gold'],
    rating: 4.9,
    reviewsCount: 2100,
    stock: { 'One Size': 45 },
    isBestSeller: true
  },
  {
    id: 'kids-1',
    name: 'Giggles Organic Cotton Dungarees',
    category: 'Kids',
    subcategory: 'Playwear',
    price: 1899,
    description: 'Softness guaranteed for your little ones. Made with 100% GOTS certified organic cotton. Features adjustable straps and nickel-free snaps.',
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bbe197c90b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519457431-7551af2d81f1?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['2Y', '3Y', '4Y', '5Y'],
    colors: ['Sky Blue', 'Peach'],
    rating: 4.7,
    reviewsCount: 120,
    stock: { '2Y': 20, '3Y': 15, '4Y': 10, '5Y': 10 },
    isNewArrival: true
  }
];
