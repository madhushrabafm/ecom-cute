import { useApp } from "@/App";
import ComparisonModal from "@/components/ComparisonModal";
import ShopComparisonBar from "@/components/shop/ShopComparisonBar";
import ShopFiltersSidebar from "@/components/shop/ShopFiltersSidebar";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopProductGrid from "@/components/shop/ShopProductGrid";
import { Product } from "@/types";
import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const ShopPage: React.FC = () => {
  const {
    products,
    isLoadingProducts,
    comparisonList,
    clearComparison,
    toggleComparison,
  } = useApp();

  const [searchParams, setSearchParams] = useSearchParams();
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

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-12 animate-fade-in relative">
      <ShopHeader
        activeCategory={activeCategory}
        activeBrand={activeBrand}
        activePriceMax={activePriceMax}
        activeSort={activeSort}
        updateParams={updateParams}
        clearAllFilters={clearAllFilters}
        products={products}
      />

      <div className="flex flex-col lg:flex-row gap-16">
        <ShopFiltersSidebar
          products={products}
          brands={brands}
          activeCategory={activeCategory}
          activeBrand={activeBrand}
          activePriceMax={activePriceMax}
          updateParams={updateParams}
        />

        <ShopProductGrid
          isLoadingProducts={isLoadingProducts}
          filteredProducts={filteredProducts}
          clearAllFilters={clearAllFilters}
        />
      </div>

      <ShopComparisonBar
        comparisonList={comparisonList}
        comparedProducts={comparedProducts}
        clearComparison={clearComparison}
        toggleComparison={toggleComparison}
        openModal={() => setIsCompareModalOpen(true)}
      />

      {isCompareModalOpen && (
        <ComparisonModal
          products={comparedProducts}
          onClose={() => setIsCompareModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ShopPage;
