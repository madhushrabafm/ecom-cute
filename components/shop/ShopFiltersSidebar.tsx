import React, { useState } from "react";
import { CATEGORIES } from "../../constants";
import { Product } from "../../types";
import FilterSection from "./FilterSection";

interface Props {
  products: Product[];
  brands: string[];
  activeCategory: string;
  activeBrand: string;
  activePriceMax: number;
  updateParams: (key: string, value: string) => void;
}

const ShopFiltersSidebar: React.FC<Props> = ({
  products,
  brands,
  activeCategory,
  activeBrand,
  activePriceMax,
  updateParams,
}) => {
  const [openSections, setOpenSections] = useState<string[]>([
    "category",
    "brand",
    "price",
  ]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-28 space-y-2">
        {/* Categories */}
        <FilterSection
          title="Categories"
          id="category"
          isActive={activeCategory !== "All"}
          openSections={openSections}
          toggleSection={toggleSection}
        >
          <div className="flex flex-col gap-1">
            {["All", ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => updateParams("category", cat)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-sm transition-all text-[10px] uppercase tracking-widest ${
                  activeCategory === cat
                    ? "bg-black text-white font-bold"
                    : "hover:bg-gray-50 text-gray-500 hover:text-black"
                }`}
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

        {/* Price */}
        <FilterSection
          title="Price Limit"
          id="price"
          isActive={activePriceMax < 15000}
          openSections={openSections}
          toggleSection={toggleSection}
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
  );
};

export default ShopFiltersSidebar;
