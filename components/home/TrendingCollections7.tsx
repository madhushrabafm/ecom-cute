import React from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { MOCK_PRODUCTS } from "@/constants";
import { useApp } from "@/App";

const TrendingCollections7 = () => {
  const { setIsStyleAssistantOpen, userStyleProfile } = useApp();
  const trending = MOCK_PRODUCTS.filter((p) => p.isTrending);

  return (
    <section className="py-14 md:py-40 bg-vogue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              The Mix.
            </h2>
            <p className="text-vogue-500 text-xs font-bold uppercase tracking-[0.5em]">
              Selected Styles for the {userStyleProfile.aesthetic} Enthusiast
            </p>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold uppercase tracking-[0.4em] border-b-2 border-black pb-3 hover:text-vogue-500 hover:border-vogue-500 transition-all"
          >
            Discover Full Archive
          </Link>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections7;
