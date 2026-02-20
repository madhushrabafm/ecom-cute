import React from "react";

const ProductBrandPartners = () => {
  return (
    <section className="mt-24 py-20 border-t border-gray-100">
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-vogue-500 mb-2 block">
          The Heritage Collective
        </span>
        <h2 className="text-3xl font-serif font-bold tracking-tight">
          Our Premium Brand Partners
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {["Pepe Jeans", "Jockey", "Turtle", "Loman"].map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center h-32 border border-gray-100 hover:border-black hover:bg-white transition-all group"
          >
            <span className="text-lg font-bold uppercase tracking-[0.3em] group-hover:scale-105 transition-transform">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductBrandPartners;
