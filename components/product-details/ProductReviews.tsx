import React, { useState, useRef } from "react";
import { Star, ThumbsUp, X, PenTool, Camera } from "lucide-react";
import { Product, Review } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  user: any;
}

const ProductReviews: React.FC<Props> = ({
  product,
  reviews,
  setReviews,
  user,
}) => {
  const navigate = useNavigate();

  const [isWritingReview, setIsWritingReview] = useState(false);

  const [newReview, setNewReview] = useState<{
    rating: number;
    comment: string;
    images: string[];
  }>({
    rating: 5,
    comment: "",
    images: [],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helpful button
  const handleHelpful = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? { ...r, helpfulCount: (r.helpfulCount || 0) + 1 }
          : r,
      ),
    );
  };

  // Upload images
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setNewReview((prev) => ({
          ...prev,
          images: [...prev.images, reader.result as string],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  // Submit review
  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      navigate("/auth");
      return;
    }

    const review: Review = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user.id,
      userName:
        user.user_metadata?.full_name ||
        user.email?.split("@")[0] ||
        "Collector",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date()),
      images: newReview.images,
      helpfulCount: 0,
    };

    setReviews((prev) => [review, ...prev]);

    setNewReview({ rating: 5, comment: "", images: [] });
    setIsWritingReview(false);
  };

  return (
    <section className="mt-24 pt-24 border-t border-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="space-y-4">
          <span className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.5em]">
            Collective Feedback
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Community Reviews
          </h2>

          <div className="flex items-center gap-4">
            <div className="flex text-black text-sm">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-black text-black"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm font-bold">{product.rating} / 5.0</span>

            <span className="text-sm text-gray-400 font-light">
              ({reviews.length} Reviews)
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsWritingReview(!isWritingReview)}
          className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-3 shadow-xl"
        >
          {isWritingReview ? (
            <X className="w-4 h-4" />
          ) : (
            <PenTool className="w-4 h-4" />
          )}
          {isWritingReview ? "Cancel Review" : "Write a Review"}
        </button>
      </div>

      {/* Review Form */}
      {isWritingReview && (
        <div className="mb-20 p-10 bg-gray-50 border border-gray-100 rounded-sm animate-in slide-in-from-top duration-500">
          <form onSubmit={submitReview} className="space-y-8 max-w-2xl">
            {/* Rating */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                Rating
              </label>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setNewReview((prev) => ({
                        ...prev,
                        rating: star,
                      }))
                    }
                    className={`text-xl transition-colors ${
                      newReview.rating >= star ? "text-black" : "text-gray-200"
                    }`}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        newReview.rating >= star
                          ? "fill-black text-black"
                          : "text-gray-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                Comment
              </label>

              <textarea
                required
                rows={4}
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview((prev) => ({
                    ...prev,
                    comment: e.target.value,
                  }))
                }
                placeholder="Share your experience with this heritage piece..."
                className="w-full bg-white border border-gray-200 p-5 text-sm outline-none focus:border-black transition-all resize-none"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                Visual Evidence
              </label>

              <div className="flex flex-wrap gap-4">
                {newReview.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 border border-gray-100 group"
                  >
                    <img src={img} className="w-full h-full object-cover" />

                    <button
                      type="button"
                      onClick={() =>
                        setNewReview((prev) => ({
                          ...prev,
                          images: prev.images.filter((_, idx) => idx !== i),
                        }))
                      }
                      className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-20 h-20 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all"
                >
                  <Camera className="w-5 h-5 mb-1" />
                  <span className="text-[8px] font-bold uppercase">Upload</span>
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-12 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl"
            >
              Submit Collective Feedback
            </button>
          </form>
        </div>
      )}

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="space-y-6 group animate-in fade-in duration-500"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-tight">
                  {review.userName}
                </h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                  {review.date}
                </p>
              </div>

              <div className="flex text-black text-[9px]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < review.rating
                        ? "fill-black text-black"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600 font-light italic leading-relaxed">
              "{review.comment}"
            </p>

            {review.images && review.images.length > 0 && (
              <div className="flex gap-2">
                {review.images.map((img, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gray-50 overflow-hidden border border-gray-100"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <button
                onClick={() => handleHelpful(review.id)}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-vogue-500 hover:text-black transition-colors"
              >
                <ThumbsUp className="w-4 h-4" />
                Helpful ({review.helpfulCount || 0})
              </button>

              <span className="text-[9px] font-bold uppercase tracking-widest text-vogue-100 group-hover:text-vogue-500 transition-colors">
                Verified Collector
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;
