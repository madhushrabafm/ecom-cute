import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";

interface Props {
  activeCategory: string;
  activeBrand: string;
  activePriceMax: number;
  activeSort: string;
  updateParams: (key: string, value: string) => void;
  clearAllFilters: () => void;
  products: Product[];
}

const ShopHeader: React.FC<Props> = ({
  activeCategory,
  activeBrand,
  activePriceMax,
  activeSort,
  updateParams,
  clearAllFilters,
  products,
}) => {
  return (
    <div className="flex flex-col mb-12 space-y-8">
      <div className="flex flex-row lg:items-end justify-between gap-10">
        <div className="space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="opacity-30">/</span>
            <span className="text-black">Catalog</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tighter leading-tight">
            {activeCategory === "All" ? "Collections" : activeCategory}
          </h1>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-6">
          <div className="relative group border-b border-gray-100 py-2">
            <span className="absolute -top-2 left-0 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Sort By
            </span>

            <select
              value={activeSort}
              onChange={(e) => updateParams("sort", e.target.value)}
              className="appearance-none bg-transparent md:pr-8 text-sm font-bold uppercase tracking-widest outline-none cursor-pointer"
            >
              <option value="newest">Latest Arrivals</option>
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low-High</option>
              <option value="price-high">Price: High-Low</option>
            </select>

            <i className="fa-solid fa-chevron-down absolute right-0 top-1/2 -translate-y-1/2 text-[8px] text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Active Refinement Chips */}
      {(activeCategory !== "All" ||
        activeBrand !== "All" ||
        activePriceMax < 15000) && (
        <div className="flex flex-wrap items-center gap-3 md:pt-6 border-t border-gray-100 animate-slide-up">
          <span className="text-sm font-bold uppercase tracking-widest text-vogue-500 mr-2">
            Refining:
          </span>

          {activeCategory !== "All" && (
            <button
              onClick={() => updateParams("category", "All")}
              className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              {activeCategory}
              <i className="fa-solid fa-xmark ml-1"></i>
            </button>
          )}

          {activeBrand !== "All" && (
            <button
              onClick={() => updateParams("brand", "All")}
              className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              {activeBrand}
              <i className="fa-solid fa-xmark ml-1"></i>
            </button>
          )}

          {activePriceMax < 15000 && (
            <button
              onClick={() => updateParams("maxPrice", "15000")}
              className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              Under ₹{activePriceMax.toLocaleString()}
              <i className="fa-solid fa-xmark ml-1"></i>
            </button>
          )}

          <button
            onClick={clearAllFilters}
            className="text-sm font-bold uppercase tracking-widest text-black underline underline-offset-4 ml-2"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopHeader;
