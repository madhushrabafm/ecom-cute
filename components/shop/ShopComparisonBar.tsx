import React from "react";
import { Product } from "../../types";

interface Props {
  comparisonList: string[];
  comparedProducts: Product[];
  clearComparison: () => void;
  toggleComparison: (id: string) => void;
  openModal: () => void;
}

const ShopComparisonBar: React.FC<Props> = ({
  comparisonList,
  comparedProducts,
  clearComparison,
  toggleComparison,
  openModal,
}) => {
  if (comparisonList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border-t border-gray-100 py-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
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
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto">
          <button
            onClick={clearComparison}
            className="text-sm font-bold uppercase tracking-widest text-vogue-500 hover:text-black transition-colors"
          >
            Reset Tray
          </button>

          <button
            onClick={openModal}
            disabled={comparisonList.length < 2}
            className="flex-grow md:flex-none bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <span>Compare Now</span>
            <i className="fa-solid fa-layer-group"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopComparisonBar;
