import React from "react";

const FlagshipStore5 = () => {
  return (
    <section className="py-14 md:py-40 bg-vogue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <span className="text-vogue-500 text-xs font-bold uppercase tracking-[0.6em]">
                Physical Destinations
              </span>
              <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[0.9]">
                Experience the <br /> Collective.
              </h2>
            </div>
            <p className="text-xl text-vogue-500 font-light leading-relaxed max-w-md font-serif italic">
              Our flagship destination in Bengaluru offers exclusive brand
              capsules, bespoke tailoring, and an in-house coffee lounge.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-3">
                  Address
                </h4>
                <p className="text-sm font-serif italic text-gray-800 leading-relaxed">
                  No. 42, Lavelle Road, <br /> Bengaluru, KA 560001
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-3">
                  Hours
                </h4>
                <p className="text-sm font-serif italic text-gray-800">
                  Mon - Sun: <br /> 11:00 AM - 9:00 PM
                </p>
              </div>
            </div>
            <button className="bg-black text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all flex items-center gap-4 active:scale-95 shadow-xl">
              <i className="fa-solid fa-location-arrow"></i>
              Request Concierge Visit
            </button>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="aspect-square overflow-hidden shadow-2xl relative">
              <img
                src="https://i.pinimg.com/736x/a7/8e/57/a78e57ded7a08e6991ceee8c3268321c.jpg"
                alt="Luna DecorFlagship Store Interior"
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipStore5;
