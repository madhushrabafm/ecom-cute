import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductSkeleton from "../../components/ProductSkeleton";
import { Product } from "../../types";

interface Props {
  isLoadingProducts: boolean;
  filteredProducts: Product[];
  clearAllFilters: () => void;
}

const ShopProductGrid: React.FC<Props> = ({
  isLoadingProducts,
  filteredProducts,
  clearAllFilters,
}) => {
  if (isLoadingProducts) {
    return (
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
        {[...Array(6)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
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
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 mb-24">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopProductGrid;
