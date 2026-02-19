import React from "react";
import { Link } from "react-router-dom";

const FeaturedBrands4 = () => {
  return (
    <section className="py-14 md:py-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <header className="mb-12 text-center space-y-6">
          <span className="text-vogue-500 text-xs font-bold uppercase tracking-[0.6em]">
            The Pillars of Excellence
          </span>
          <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight">
            Iconic Partners.
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pepe Jeans London */}
          <div className="group relative h-[600px] overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src="https://i.pinimg.com/1200x/c9/96/e5/c996e53aed6e14a6ddbaf0c530f9278a.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0"
              alt="Pepe Jeans"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col items-center text-center px-12 transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-white/70 mb-6 border-b border-white/20 pb-2">
                London Heritage
              </span>
              <h3 className="text-5xl font-serif font-bold italic text-white mb-8 tracking-tighter">
                Pepe Jeans
              </h3>
              <Link
                to="/shop?brand=Pepe"
                className="bg-white text-black px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 hover:bg-black hover:text-white"
              >
                Shop The Label
              </Link>
            </div>
            <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700"></div>
          </div>

          {/* Turtle Signature */}
          <div className="group relative h-[600px] overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src="https://i.pinimg.com/1200x/be/c9/be/bec9beb2779ddb601b2c687a729978ea.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110"
              alt="Turtle"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col items-center text-center px-12 transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-white/70 mb-6 border-b border-white/20 pb-2">
                Refined Formals
              </span>
              <h3 className="text-5xl font-serif font-bold italic text-white mb-8 tracking-tighter">
                Turtle Signature
              </h3>
              <Link
                to="/shop?brand=Turtle"
                className="bg-white text-black px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 hover:bg-black hover:text-white"
              >
                View Selection
              </Link>
            </div>
            <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700"></div>
          </div>

          {/* Jockey International */}
          <div className="group relative h-[600px] overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src="https://i.pinimg.com/1200x/fe/92/37/fe92375c759d32560dc9f7dca9eeeb29.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
              alt="Jockey"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col items-center text-center px-12 transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-white/70 mb-6 border-b border-white/20 pb-2">
                Everlasting Comfort
              </span>
              <h3 className="text-5xl font-sans font-black uppercase text-white mb-8 tracking-[0.2em]">
                JOCKEY
              </h3>
              <Link
                to="/shop?brand=Jockey"
                className="bg-white text-black px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 hover:bg-black hover:text-white"
              >
                Essentials Catalog
              </Link>
            </div>
            <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands4;
