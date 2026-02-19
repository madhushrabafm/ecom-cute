import React, { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CATEGORIES } from "../constants";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { useApp } from "../App";
import { Product } from "../types";
import ComparisonModal from "../components/ComparisonModal";

const Shop: React.FC = () => {
  const {
    products,
    isLoadingProducts,
    comparisonList,
    clearComparison,
    toggleComparison,
  } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openSections, setOpenSections] = useState<string[]>([
    "category",
    "brand",
    "price",
  ]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "All";
  const activeSort = searchParams.get("sort") || "newest";
  const activePriceMax = parseInt(searchParams.get("maxPrice") || "15000");
  const activeBrand = searchParams.get("brand") || "All";

  const brands = useMemo<string[]>(() => {
    const allBrands = products.map((p: Product) => p.name.split(" ")[0]);
    return Array.from(new Set(allBrands));
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "All")
      result = result.filter((p) => p.category === activeCategory);
    if (activeBrand !== "All")
      result = result.filter((p) =>
        p.name.toLowerCase().includes(activeBrand.toLowerCase()),
      );
    result = result.filter((p) => p.price <= activePriceMax);

    if (activeSort === "price-low") result.sort((a, b) => a.price - b.price);
    if (activeSort === "price-high") result.sort((a, b) => b.price - a.price);
    if (activeSort === "popular") result.sort((a, b) => b.rating - a.rating);
    if (activeSort === "newest") result.reverse();
    return result;
  }, [products, activeCategory, activeSort, activePriceMax, activeBrand]);

  const comparedProducts = useMemo(() => {
    return products.filter((p) => comparisonList.includes(p.id));
  }, [products, comparisonList]);

  const updateParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "All" || !value) newParams.delete(key);
    else newParams.set(key, value);
    setSearchParams(newParams);
  };

  const clearAllFilters = () => setSearchParams({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const FilterSection = ({
    title,
    id,
    isActive,
    children,
  }: {
    title: string;
    id: string;
    isActive?: boolean;
    children?: React.ReactNode;
  }) => (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center group"
      >
        <div className="flex items-center gap-3">
          <span
            className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${openSections.includes(id) ? "text-black" : "text-gray-400 group-hover:text-black"}`}
          >
            {title}
          </span>
          {isActive && (
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          )}
        </div>
        <i
          className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-500 ${openSections.includes(id) ? "rotate-180 text-black" : "text-gray-300"}`}
        ></i>
      </button>
      <div
        className={`mt-6 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${openSections.includes(id) ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-12 animate-fade-in relative">
      <div className="flex flex-col mb-12 space-y-8">
        <div className="flex flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4">
            <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
              <Link to="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <span className="opacity-30">/</span>
              <span className="text-black">Catalog</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tighter leading-tight">
              {activeCategory === "All" ? "Collections" : activeCategory}
            </h1>
          </div>

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
                {activeCategory} <i className="fa-solid fa-xmark ml-1"></i>
              </button>
            )}
            {activeBrand !== "All" && (
              <button
                onClick={() => updateParams("brand", "All")}
                className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
              >
                {activeBrand} <i className="fa-solid fa-xmark ml-1"></i>
              </button>
            )}
            {activePriceMax < 15000 && (
              <button
                onClick={() => updateParams("maxPrice", "15000")}
                className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
              >
                Under ₹{activePriceMax.toLocaleString()}{" "}
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

      <div className="flex flex-col lg:flex-row gap-16">
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-28 space-y-2">
            <FilterSection
              title="Categories"
              id="category"
              isActive={activeCategory !== "All"}
            >
              <div className="flex flex-col gap-1">
                {["All", ...CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateParams("category", cat)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-sm transition-all text-[10px] uppercase tracking-widest ${activeCategory === cat ? "bg-black text-white font-bold" : "hover:bg-gray-50 text-gray-500 hover:text-black"}`}
                  >
                    <span>{cat}</span>
                    <span className="opacity-40 text-[8px]">
                      {cat === "All"
                        ? products.length
                        : products.filter((p) => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Heritage Brands"
              id="brand"
              isActive={activeBrand !== "All"}
            >
              <div className="grid grid-cols-1 gap-1 max-h-48 overflow-y-auto no-scrollbar pr-2">
                {["All", ...brands].map((brand) => (
                  <button
                    key={brand}
                    onClick={() => updateParams("brand", brand)}
                    className={`text-left py-2 px-3 text-[10px] uppercase tracking-widest transition-all ${activeBrand === brand ? "text-black font-bold" : "text-gray-400 hover:text-black hover:bg-gray-50"}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Price Limit"
              id="price"
              isActive={activePriceMax < 15000}
            >
              <div className="px-2 pt-2">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-sm font-bold text-gray-300 tracking-widest uppercase text-left">
                    Max Spend
                  </span>
                  <span className="text-xl font-serif font-bold italic text-right">
                    ₹{activePriceMax.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="500"
                  value={activePriceMax}
                  onChange={(e) => updateParams("maxPrice", e.target.value)}
                  className="w-full h-1 bg-gray-100 appearance-none cursor-pointer accent-black"
                />
              </div>
            </FilterSection>
          </div>
        </aside>

        <div className="flex-grow">
          {isLoadingProducts ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {[...Array(6)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 mb-24">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="md:py-40 py-12 text-center animate-fade-in">
              <i className="fa-solid fa-magnifying-glass text-3xl text-gray-100 mb-8"></i>
              <h3 className="text-2xl font-serif font-bold italic mb-4">
                No pieces match your search.
              </h3>
              <p className="text-sm text-gray-400 font-light mb-8">
                Try adjusting your filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest"
              >
                Reset Catalog
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Comparison Bar */}
      {comparisonList.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border-t border-gray-100 py-6 animate-in slide-in-from-bottom duration-500">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-6">
              <div className="hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-vogue-500 mb-1">
                  Comparison Tray
                </p>
                <p className="text-xs font-serif italic">
                  {comparisonList.length} of 4 items selected
                </p>
              </div>
              <div className="flex gap-4">
                {comparedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative group w-12 h-16 sm:w-16 sm:h-20 bg-gray-50 rounded-sm overflow-hidden border border-gray-100 shadow-sm"
                  >
                    <img
                      src={product.images[0]}
                      className="w-full h-full object-cover"
                      alt={product.name}
                    />
                    <button
                      onClick={() => toggleComparison(product.id)}
                      className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <i className="fa-solid fa-xmark text-xs"></i>
                    </button>
                  </div>
                ))}
                {comparisonList.length < 4 && (
                  <div className="w-12 h-16 sm:w-16 sm:h-20 border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-200">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto">
              <button
                onClick={clearComparison}
                className="text-sm font-bold uppercase tracking-widest text-vogue-500 hover:text-black transition-colors"
              >
                Reset Tray
              </button>
              <button
                onClick={() => setIsCompareModalOpen(true)}
                disabled={comparisonList.length < 2}
                className="flex-grow md:flex-none bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>Compare Now</span>
                <i className="fa-solid fa-layer-group"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Modal Overlay */}
      {isCompareModalOpen && (
        <ComparisonModal
          products={comparedProducts}
          onClose={() => setIsCompareModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Shop;
