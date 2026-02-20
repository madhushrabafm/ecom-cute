import React from "react";
import { RotateCcw, ZoomIn, Heart } from "lucide-react";
import Product360View from "../../components/Product360View";
import { Product } from "../../types";

interface Props {
  product: Product;
  activeImg: number;
  setActiveImg: (i: number) => void;
  isZoomed: boolean;
  setIsZoomed: (v: boolean) => void;
  is360Active: boolean;
  setIs360Active: (v: boolean) => void;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
}

const ProductGallery: React.FC<Props> = ({
  product,
  activeImg,
  setActiveImg,
  isZoomed,
  setIsZoomed,
  is360Active,
  setIs360Active,
  toggleWishlist,
  wishlist,
}) => {
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="lg:w-[60%]">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveImg(i);
                setIs360Active(false);
              }}
              className={`flex-shrink-0 w-16 lg:w-20 aspect-[3/4] overflow-hidden transition-all duration-300 border-2 ${activeImg === i && !is360Active ? "border-black scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`${product.name} view ${i + 1}`}
              />
            </button>
          ))}
          {product.images.length > 3 && (
            <button
              onClick={() => setIs360Active(true)}
              className={`flex-shrink-0 w-16 lg:w-20 aspect-[3/4] flex flex-col items-center justify-center gap-2 border-2 transition-all ${is360Active ? "border-black bg-black text-white shadow-md" : "border-gray-100 bg-gray-50 text-gray-400 hover:border-black hover:text-black"}`}
            >
              <RotateCcw className="w-5 h-5 mb-1" />
              <span className="text-[8px] font-bold uppercase tracking-widest">
                360° View
              </span>
            </button>
          )}
        </div>

        <div className="flex-grow aspect-[3/4] bg-vogue-50 overflow-hidden relative group rounded-sm shadow-inner">
          {is360Active ? (
            <Product360View
              images={product.images}
              onExit={() => setIs360Active(false)}
            />
          ) : (
            <>
              <div
                className={`w-full h-full overflow-hidden ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={product.images[activeImg]}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isZoomed ? "scale-150" : "group-hover:scale-105"}`}
                  alt={product.name}
                />
              </div>

              <div className="absolute bottom-6 left-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 text-white text-[8px] font-bold uppercase tracking-widest flex items-center gap-3 rounded-full">
                  <ZoomIn className="w-4 h-4" />
                  Click to Zoom
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-black"}`}
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
