import React from "react";
import { Link } from "react-router-dom";

const Landing1 = () => {
  return (
    <section className="relative h-[95vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/73/94/93/7394935592fe3c60d9a5c877db71ec68.jpg"
          alt="Luna DecorBrand Banner"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full text-white">
        <div className="max-w-2xl space-y-8">
          <div className="overflow-hidden relative">
            {/* Promotional Hero Badge */}
            <div className="absolute -top-12 left-0 bg-vogue-500 text-black px-4 py-1 text-xs font-bold uppercase tracking-[0.5em] animate-bounce">
              Launch Special: Free Shipping
            </div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.5em] mb-4 animate-slide-up">
              Established 2012 — The Global Collective
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.85] animate-slide-up">
            Decor <br /> Essentials.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg font-light tracking-wide animate-slide-up [animation-delay:200ms]">
            A curated house of iconic labels. From high-performance activewear
            to timeless tailored linen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-slide-up [animation-delay:400ms]">
            <Link
              to="/shop"
              className="group bg-white text-black px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl flex items-center gap-3"
            >
              Shop All Collection
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
            </Link>
            <Link
              to="/shop?category=Trays"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Explore best sellers
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-40">
        <span className="text-xs font-bold uppercase tracking-[0.4em] rotate-90 mb-8 origin-left whitespace-nowrap">
          Scroll to Explore
        </span>
        <div className="w-px h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideUp_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Landing1;
