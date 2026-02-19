
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useApp } from '../App';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart, setQuickViewProduct, user, comparisonList, toggleComparison } = useApp();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  
  const isWishlisted = wishlist.includes(product.id);
  const isCompared = comparisonList.includes(product.id);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : null;

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(q => q + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(q => Math.max(1, q - 1));
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product.id, selectedSize, selectedColor, quantity);
    setQuantity(1);
  };

  const handleNavigateToDetail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/auth', { state: { from: `/shop` } });
      return;
    }
    toggleWishlist(product.id);
  };

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleComparison(product.id);
  };

  return (
    <div 
      className="group relative flex flex-col h-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleNavigateToDetail}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm">
        <div className="block w-full h-full">
          <img 
            src={hovered && product.images[1] ? product.images[1] : product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none"></div>
        </div>
        
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isNewArrival && (
            <span className="bg-black text-white text-[9px] uppercase font-bold px-2 py-1 tracking-widest">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-white text-black text-[9px] uppercase font-bold px-2 py-1 shadow-sm tracking-widest">Bestseller</span>
          )}
          {discountPercentage && (
            <span className="bg-red-600 text-white text-[9px] uppercase font-black px-2 py-1 shadow-lg tracking-widest animate-pulse">
              {discountPercentage}% OFF
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
          <button 
            onClick={handleWishlistToggle}
            className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:bg-white"
            aria-label="Add to wishlist"
          >
            <i className={`${isWishlisted ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart text-sm`}></i>
          </button>
          
          <button 
            onClick={handleCompareToggle}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 ${isCompared ? 'bg-black text-white' : 'bg-white/90 text-black hover:bg-white'}`}
            title={isCompared ? "Remove from comparison" : "Add to comparison"}
          >
            <i className={`fa-solid ${isCompared ? 'fa-check' : 'fa-plus'} text-xs`}></i>
          </button>
        </div>

        <div className={`absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-4 border-t border-gray-100 transition-all duration-500 ease-out transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 z-30`} onClick={e => e.stopPropagation()}>
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.slice(0, 4).map(size => (
                  <button
                    key={size}
                    onClick={(e) => { e.preventDefault(); setSelectedSize(size); }}
                    className={`text-[8px] font-bold w-7 h-7 flex items-center justify-center border transition-all ${selectedSize === size ? 'bg-black text-white border-black shadow-md' : 'bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={(e) => { e.preventDefault(); setSelectedColor(color); }}
                    title={color}
                    className={`w-3.5 h-3.5 rounded-full border ring-offset-2 transition-all ${selectedColor === color ? 'ring-1 ring-black scale-110' : 'border-gray-200'}`}
                    style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                  ></button>
                ))}
              </div>

              <div className="flex items-center justify-between bg-vogue-50 px-2 py-1.5 rounded-sm">
                <span className="text-[8px] font-bold uppercase tracking-widest text-vogue-500">Qty</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleDecrement}
                    className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                  >
                    <i className="fa-solid fa-minus text-[8px]"></i>
                  </button>
                  <span className="text-[10px] font-bold w-4 text-center">{quantity}</span>
                  <button 
                    onClick={handleIncrement}
                    className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                  >
                    <i className="fa-solid fa-plus text-[8px]"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={(e) => { e.preventDefault(); setQuickViewProduct(product); }}
                className="flex-grow bg-white text-black text-[9px] uppercase font-bold py-3 tracking-widest hover:bg-gray-100 transition-colors border border-black shadow-sm"
              >
                Refine
              </button>
              <button 
                onClick={handleQuickAdd}
                className="flex-[2] bg-black text-white text-[9px] uppercase font-bold py-3 tracking-widest hover:bg-zinc-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-plus text-[8px]"></i>
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col space-y-1 px-1">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium hover:underline line-clamp-1 tracking-tight text-gray-900">{product.name}</span>
        </div>

        {/* Enhanced Star Rating Display */}
        <div className="flex items-center gap-2 py-1">
          <div className="flex text-zinc-900 text-[9px] gap-0.5">
            {[...Array(5)].map((_, i) => {
              const full = i + 1 <= Math.floor(product.rating);
              const half = !full && (i + 0.5 <= product.rating);
              return (
                <i key={i} className={`${full ? 'fa-solid fa-star' : half ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star text-zinc-200'}`}></i>
              );
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black text-zinc-900">{product.rating.toFixed(1)}</span>
            <span className="text-[10px] text-zinc-300 font-light tracking-tight">({product.reviewsCount.toLocaleString()} Verified Reviews)</span>
          </div>
        </div>

        <p className="text-[10px] text-vogue-500 uppercase tracking-widest font-bold pt-0.5">{product.subcategory}</p>
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-sm font-bold text-gray-900 tracking-tight">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-300 line-through font-normal">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
