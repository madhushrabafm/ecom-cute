import React from "react";
import { Facebook, Twitter } from "lucide-react";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  quantity: number;
  addToCart: (
    id: string,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  setShowSizeGuide: (value: boolean) => void;
  handleBuyNow: () => void;
  handleShare: (
    platform: "facebook" | "twitter" | "pinterest" | "copy",
  ) => void;
  copySuccess: boolean;
}

const ProductInfo: React.FC<Props> = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  quantity,
  addToCart,
  setShowSizeGuide,
  handleBuyNow,
  handleShare,
  copySuccess,
}) => {
  const navigate = useNavigate();

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : null;

  return (
    <div className="lg:w-[40%]">
      <div className="lg:sticky lg:top-24 flex flex-col space-y-8">
        {/* Header */}
        <header>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-vogue-500">
              {product.subcategory}
            </span>

            {product.isBestSeller && (
              <span className="bg-black text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-widest">
                Bestseller
              </span>
            )}
          </div>

          <h1 className="text-4xl xl:text-5xl font-serif font-bold tracking-tight mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-medium tracking-tighter">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.originalPrice && (
              <div className="flex items-center gap-3">
                <span className="text-lg text-gray-300 line-through font-light italic">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>

                {discountPercentage && (
                  <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-[0.2em] shadow-sm animate-pulse">
                    {discountPercentage}% OFF
                  </span>
                )}
              </div>
            )}
          </div>
        </header>

        {/* Size Selector */}
        <div className="space-y-8 py-8 border-y border-gray-100">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">
                Select Size
              </h4>

              <button
                onClick={() => setShowSizeGuide(true)}
                className="text-[10px] font-bold uppercase tracking-widest text-vogue-500 underline underline-offset-4"
              >
                Size Guide
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-[10px] font-bold border transition-all ${
                    selectedSize === size
                      ? "bg-black text-white border-black shadow-lg"
                      : "hover:border-black text-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                addToCart(product.id, selectedSize, selectedColor, quantity)
              }
              className="flex-grow bg-white text-black border border-black py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-all"
            >
              Add to Bag
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-grow bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all shadow-xl"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Share Section */}
        <div className="pt-8 border-t border-gray-100">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-vogue-500 mb-4">
            Share with the World
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleShare("facebook")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 hover:text-blue-600 hover:border-blue-600 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleShare("twitter")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 hover:text-sky-400 hover:border-sky-400 transition-all"
            >
              <Twitter className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleShare("copy")}
              className={`flex-grow flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                copySuccess
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-100 hover:border-black"
              }`}
            >
              {copySuccess ? "Copied" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
