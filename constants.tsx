import { Product, Review } from "./types";

export const CATEGORIES = ["Womens", "Trays", "Accessories"] as const;

export const LAUNCH_PROMOS = [
  {
    id: "p1",
    code: "GSLAUNCH25",
    discount: "25% OFF",
    description: "On your first order from the Heritage Collection",
  },
  {
    id: "p2",
    code: "FREESHIP",
    discount: "FREE DELIVERY",
    description: "Complimentary shipping on all launch items",
  },
  {
    id: "p3",
    code: "HERITAGE10",
    discount: "EXTRA 10% OFF",
    description: "When you buy 2 or more items from the same brand",
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: "r1",
    userId: "u1",
    userName: "Rahul M.",
    rating: 5,
    date: "Oct 12, 2023",
    comment:
      "The quality of the denim is exceptional. Pepe Jeans never disappoints with the fit. Highly recommended for daily wear.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=60&w=200",
    ],
    helpfulCount: 24,
  },
  {
    id: "r2",
    userId: "u2",
    userName: "Anjali S.",
    rating: 4,
    date: "Nov 05, 2023",
    comment:
      "Very comfortable, but the color is slightly darker than the pictures. Still, a great purchase!",
    helpfulCount: 12,
  },
  {
    id: "r3",
    userId: "u3",
    userName: "Vikram K.",
    rating: 5,
    date: "Dec 01, 2023",
    comment:
      "Perfect delivery speed. The packaging was premium. Luna Decor is now my go-to for branded wear.",
    helpfulCount: 45,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "fc-1",
    name: "Floral Crochet Bag - Cutie Bloom",
    category: "Accessories",
    subcategory: "Bags",
    price: 3499,
    originalPrice: 4999,
    description:
      "Handcrafted floral crochet bag with premium yarn finish. Lightweight, aesthetic, and perfect for brunch, vacations, or gifting.",
    images: [
      "https://i.pinimg.com/1200x/be/c9/be/bec9beb2779ddb601b2c687a729978ea.jpg",
      "https://i.pinimg.com/1200x/fe/92/37/fe92375c759d32560dc9f7dca9eeeb29.jpg",
      "https://i.pinimg.com/736x/a7/8e/57/a78e57ded7a08e6991ceee8c3268321c.jpg",
      "https://i.pinimg.com/1200x/c9/96/e5/c996e53aed6e14a6ddbaf0c530f9278a.jpg",
    ],
    sizes: ["One Size"],
    colors: ["Pastel Pink", "Cream", "Lavender"],
    rating: 4.8,
    reviewsCount: 1240,
    stock: { "One Size": 25 },
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "fc-2",
    name: "Floral Crochet Bag - Cutie Daisy",
    category: "Accessories",
    subcategory: "Bags",
    price: 2999,
    originalPrice: 3999,
    description:
      "Soft crochet handbag featuring delicate floral patterns. Perfect everyday accessory with secure inner lining.",
    images: [
      "https://i.pinimg.com/736x/73/94/93/7394935592fe3c60d9a5c877db71ec68.jpg",
      "https://i.pinimg.com/736x/34/0a/97/340a97c6589c1e408f34b7419b02eee8.jpg",
      "https://i.pinimg.com/736x/82/af/9c/82af9c7669c3d1212467f21cd4d580e9.jpg",
    ],
    sizes: ["One Size"],
    colors: ["Ivory", "Baby Blue"],
    rating: 4.7,
    reviewsCount: 860,
    stock: { "One Size": 40 },
    isNewArrival: true,
  },
  {
    id: "fc-3",
    name: "Floral Crochet Bag - Cutie Petal",
    category: "Accessories",
    subcategory: "Bags",
    price: 3799,
    originalPrice: 4599,
    description:
      "Premium handcrafted crochet tote with intricate floral stitch work. Spacious interior for essentials.",
    images: [
      "https://i.pinimg.com/1200x/9a/d1/43/9ad1438d2b3513916b7d5ca278878014.jpg",
      "https://i.pinimg.com/1200x/c7/d0/78/c7d0783dbf18aeea6da6c352a5bd4dcb.jpg",
      "https://i.pinimg.com/736x/33/61/23/3361235431b4e3472f03bfece577e8fb.jpg",
    ],
    sizes: ["One Size"],
    colors: ["Blush Pink", "Mint"],
    rating: 4.9,
    reviewsCount: 520,
    stock: { "One Size": 18 },
    isTrending: true,
  },
  {
    id: "fc-4",
    name: "Floral Crochet Bag - Cutie Rose",
    category: "Accessories",
    subcategory: "Bags",
    price: 2599,
    originalPrice: 3299,
    description:
      "Chic mini crochet sling bag with handcrafted floral detailing. Lightweight and stylish.",
    images: [
      "https://i.pinimg.com/736x/d6/9e/00/d69e00e3f3d148231665005627e64c7c.jpg",
      "https://i.pinimg.com/1200x/96/71/ee/9671eef5fae40cc6d66f79b5ca068b22.jpg",
    ],
    sizes: ["One Size"],
    colors: ["Peach", "Soft Yellow"],
    rating: 4.6,
    reviewsCount: 310,
    stock: { "One Size": 50 },
    isBestSeller: true,
  },
];
