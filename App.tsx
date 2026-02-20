import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { Product } from "./types";
import { supabase } from "./services/supabase";
import { MOCK_PRODUCTS } from "./constants";

// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import QuickViewModal from "./components/QuickViewModal";
import StyleAssistant from "./components/StyleAssistant";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import TrackOrder from "./pages/TrackOrder";
import HomePage from "./pages/yasss/HomePage";
import ShopPage from "./pages/yasss/ShopPage";
import ProductsDetailsPage from "./pages/yasss/ProductsDetailsPage";

// Fallback useApp hook to prevent component breakage after context removal
export const useApp = () => {
  return {
    user: null,
    setUser: () => {},
    cart: [],
    wishlist: [],
    comparisonList: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateCartQuantity: () => {},
    toggleWishlist: () => {},
    toggleComparison: () => {},
    clearComparison: () => {},
    products: MOCK_PRODUCTS,
    isLoadingProducts: false,
    setProducts: () => {},
    setLoadingProducts: () => {},
    quickViewProduct: null,
    sharedProduct: null,
    isStyleAssistantOpen: false,
    userStyleProfile: {
      aesthetic: 'Minimalist',
      preferredColors: ['Monochrome', 'Earth Tones'],
      sizePreference: 'Regular'
    },
    userLocation: null,
    setQuickViewProduct: () => {},
    setSharedProduct: () => {},
    setIsStyleAssistantOpen: () => {},
    setUserStyleProfile: () => {},
    setUserLocation: () => {},
    logout: async () => { await supabase.auth.signOut(); }
  };
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [sessionUser, setSessionUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessionUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return null;

  if (!sessionUser) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/auth" element={<Auth />} />

            {/* Freely view products */}
            <Route path="/product/:id" element={<ProductsDetailsPage />} />

            {/* Freely manage bag */}
            <Route path="/cart" element={<Cart />} />

            {/* Authenticated routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route path="/about" element={<OurStory />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/track-order" element={<TrackOrder />} />
          </Routes>
        </main>
        <Footer />
        <QuickViewModal />
        <StyleAssistant />
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return <AppContent />;
}


