import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../App";
import { LAUNCH_PROMOS } from "../constants";
import { X, Search, ShoppingBag, User, Sparkles } from "lucide-react";

const logo = "/lunadecora.jpeg";

const Navbar: React.FC = () => {
  const { cart, wishlist, user, setIsStyleAssistantOpen } = useApp();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleProtectedNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (!user) {
      navigate("/auth", { state: { from: { pathname: path } } });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <div className="w-full bg-zinc-950 text-white py-2 overflow-hidden whitespace-nowrap z-[60] relative">
        <div className="animate-infinite-scroll inline-block">
          {LAUNCH_PROMOS.map((promo, idx) => (
            <span
              key={idx}
              className="mx-12 text-[9px] font-bold uppercase tracking-[0.4em]"
            >
              {promo.discount}: Use Code{" "}
              <span className="text-vogue-500">{promo.code}</span> —{" "}
              {promo.description}
            </span>
          ))}
          {LAUNCH_PROMOS.map((promo, idx) => (
            <span
              key={`dup-${idx}`}
              className="mx-12 text-[9px] font-bold uppercase tracking-[0.4em]"
            >
              {promo.discount}: Use Code{" "}
              <span className="text-vogue-500">{promo.code}</span> —{" "}
              {promo.description}
            </span>
          ))}
        </div>
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-sm shadow-sm py-2 translate-y-0 text-white" : "text-white bg-black py-4 md:translate-y-6 max-md:mt-6"}`}
      >
        <div className="  md:px-12 px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors duration-500 text-white`}
            >
              {/* Luna Decor */}
              <img
                src={logo}
                alt="Luna Decor Logo"
                className="rounded-full w-16 md:w-20 h-16 md:h-20"
              />
            </Link>

            <div
              className={`hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 text-white`}
            >
              <Link to="/shop" className="hover:opacity-50 transition-all">
                New Arrivals
              </Link>
              <Link
                to="/shop?category=Women"
                className="hover:opacity-50 transition-all"
              >
                Women
              </Link>
              <Link
                to="/shop?category=Trays"
                className="hover:opacity-50 transition-all"
              >
                Trays
              </Link>
              <Link
                to="/shop?category=Accessories"
                className="hover:opacity-50 transition-all"
              >
                Essentials
              </Link>
            </div>

            <div
              className={`flex items-center space-x-4 md:space-x-8 transition-colors duration-500 text-white`}
            >
              <button
                onClick={() => setIsStyleAssistantOpen(true)}
                className="hover:scale-110 transition-transform group relative"
                title="Style Concierge"
              >
                <Sparkles className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping group-hover:hidden"></span>
              </button>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:scale-110 transition-transform"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* <Link
                to="/profile?tab=wishlist"
                onClick={(e) => handleProtectedNavigation(e, "/profile")}
                className="hover:scale-110 transition-transform relative"
              >
                <i className="fa-regular fa-heart text-lg"></i>
                {wishlist.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-black text-white text-[8px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white">
                    {wishlist.length}
                  </span>
                )}
              </Link> */}
              <Link
                to="/cart"
                className="hover:scale-110 transition-transform relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-3 -right-3 bg-white text-black text-[8px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-black">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                to="/profile"
                onClick={(e) => handleProtectedNavigation(e, "/profile")}
                className="hover:scale-110 transition-transform relative"
              >
                <User className="w-5 h-5" />
                {user && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-black"></span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {searchOpen && (
          <div className="absolute top-0 left-0 w-full bg-white z-[60] h-screen flex flex-col p-8 md:p-24 animate-fade-in">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex justify-between items-center mb-16">
                <span className="text-4xl font-serif font-bold">
                  Luna Decor Search
                </span>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <X className="w-10 h-10 text-red-600" />
                </button>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search brands (Pepe Jeans, Jockey, Turtle...)"
                  className="w-full text-4xl md:text-6xl font-serif border-b-4 border-gray-100 focus:border-black transition-all outline-none py-10 placeholder:text-gray-100"
                  autoFocus
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    (setSearchOpen(false), navigate("/shop"))
                  }
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
