import { useApp } from "@/App";
import ProductBrandPartners from "@/components/product-details/ProductBrandPartners";
import ProductGallery from "@/components/product-details/ProductGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductPairings from "@/components/product-details/ProductPairings";
import ProductReviews from "@/components/product-details/ProductReviews";
import ProductSizeGuideModal from "@/components/product-details/ProductSizeGuideModal";
import { MOCK_PRODUCTS, MOCK_REVIEWS } from "@/constants";
import { getRelatedPairings } from "@/services/gemini";
import { Product, Review } from "@/types";
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductsDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    addToCart,
    toggleWishlist,
    wishlist,
    setSharedProduct,
    setIsStyleAssistantOpen,
    userStyleProfile,
    user,
  } = useApp();

  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [is360Active, setIs360Active] = useState(false);

  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);

  const [aiCuratedPairings, setAiCuratedPairings] = useState<Product[]>([]);
  const [stylingReason, setStylingReason] = useState<string>("");
  const [loadingPairings, setLoadingPairings] = useState(false);

  const estimatedDeliveryDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }, []);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setActiveImg(0);
      setQuantity(1);
      setIs360Active(false);
      fetchAiPairings(product);
    }
  }, [product, id]);

  const fetchAiPairings = async (currentProd: Product) => {
    setLoadingPairings(true);
    const result = await getRelatedPairings(
      currentProd,
      MOCK_PRODUCTS,
      userStyleProfile,
    );

    if (result && result.recommendedIds) {
      const recommended = MOCK_PRODUCTS.filter((p) =>
        result.recommendedIds.includes(p.id),
      );
      setAiCuratedPairings(recommended);
      setStylingReason(result.stylingReason);
    } else {
      setAiCuratedPairings(
        MOCK_PRODUCTS.filter((p) => p.id !== currentProd.id).slice(0, 4),
      );
    }

    setLoadingPairings(false);
  };

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-serif mb-4">Product not found.</h2>
        <button onClick={() => navigate("/shop")} className="underline">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 animate-fade-in">
      <ProductSizeGuideModal
        showSizeGuide={showSizeGuide}
        setShowSizeGuide={setShowSizeGuide}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center mb-10 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <Link to="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <span className="mx-3 opacity-30">/</span>
        <Link
          to={`/shop?category=${product.category}`}
          className="hover:text-black transition-colors"
        >
          {product.category}
        </Link>
        <span className="mx-3 opacity-30">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <ProductGallery
          product={product}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
          isZoomed={isZoomed}
          setIsZoomed={setIsZoomed}
          is360Active={is360Active}
          setIs360Active={setIs360Active}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />

        <ProductInfo
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          quantity={quantity}
          addToCart={addToCart}
          navigate={navigate}
          setShowSizeGuide={setShowSizeGuide}
          copySuccess={copySuccess}
          setCopySuccess={setCopySuccess}
        />
      </div>

      <ProductReviews
        product={product}
        reviews={reviews}
        setReviews={setReviews}
        user={user}
        navigate={navigate}
      />

      <ProductBrandPartners />

      <ProductPairings
        aiCuratedPairings={aiCuratedPairings}
        stylingReason={stylingReason}
        loadingPairings={loadingPairings}
      />
    </div>
  );
};

export default ProductsDetailsPage;
