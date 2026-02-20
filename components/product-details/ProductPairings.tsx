import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductSkeleton from "../../components/ProductSkeleton";
import { Product } from "../../types";

interface Props {
  aiCuratedPairings: Product[];
  stylingReason: string;
  loadingPairings: boolean;
}

const ProductPairings: React.FC<Props> = ({
  aiCuratedPairings,
  stylingReason,
  loadingPairings,
}) => {
  return (
    <section className="mt-12 pt-20 border-t border-gray-100">
      <div className="mb-12">
       
        <h2 className="text-4xl font-serif font-bold tracking-tight mb-4">
          Curated Pairings
        </h2>

        {stylingReason && !loadingPairings && (
          <p className="text-sm text-gray-500 font-light italic border-l-2 border-vogue-500 pl-4 max-w-2xl animate-fade-in">
            "{stylingReason}"
          </p>
        )}
      </div>

      {loadingPairings ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aiCuratedPairings.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductPairings;
