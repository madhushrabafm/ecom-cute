import { LAUNCH_PROMOS } from "@/constants";
import React, { useState } from "react";

const LaunchSpotlight2 = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-24 bg-vogue-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-vogue-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">
              Limited Time Curation
            </span>
            <h2 className="text-5xl font-serif font-bold tracking-tight mb-8">
              The Indigo Heritage <br /> Launch Event
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-md italic">
              Celebrate the launch of our updated Heritage Collection. For the
              next 48 hours, enjoy exclusive access to archive releases and
              commemorative pricing.
            </p>

            <div className="space-y-4">
              {LAUNCH_PROMOS.slice(0, 1).map((promo) => (
                <div
                  key={promo.id}
                  className="bg-white p-8 border border-gray-200 shadow-sm flex justify-between items-center group hover:border-black transition-all"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-vogue-500 mb-2">
                      {promo.description}
                    </p>
                    <h4 className="text-2xl font-serif font-bold italic">
                      {promo.discount}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleCopy(promo.code)}
                    className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all ${copiedCode === promo.code ? "bg-green-600 text-white" : "bg-black text-white hover:bg-zinc-800"}`}
                  >
                    {copiedCode === promo.code
                      ? "Code Copied"
                      : `Use Code: ${promo.code}`}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/fe/92/37/fe92375c759d32560dc9f7dca9eeeb29.jpg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                alt="New Launch Spotlight"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-8xl font-serif font-bold text-white/10 select-none">
                  Trinkets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSpotlight2;
