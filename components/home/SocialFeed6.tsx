import React from "react";

const SocialFeed6 = () => {
  return (
    <section className="py-14 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <header className="mb-24 space-y-6">
          <span className="text-vogue-500 text-xs font-bold uppercase tracking-[0.6em]">
            Visual Narrative
          </span>
          <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight">
            The Lifestyle.
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[
            "https://i.pinimg.com/1200x/be/c9/be/bec9beb2779ddb601b2c687a729978ea.jpg",
            "https://i.pinimg.com/1200x/fe/92/37/fe92375c759d32560dc9f7dca9eeeb29.jpg",
            "https://i.pinimg.com/736x/a7/8e/57/a78e57ded7a08e6991ceee8c3268321c.jpg",
            "https://i.pinimg.com/1200x/c9/96/e5/c996e53aed6e14a6ddbaf0c530f9278a.jpg",
            "https://i.pinimg.com/1200x/be/c9/be/bec9beb2779ddb601b2c687a729978ea.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] overflow-hidden bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={img}
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                alt={`Social Feed ${i}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="text-xs font-bold uppercase tracking-[0.5em] border border-white/40 px-6 py-3 backdrop-blur-md">
                  View Post
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed6;
