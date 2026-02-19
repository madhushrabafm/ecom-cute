import React from "react";

const TrustPillars8 = () => {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
        <div className="space-y-8 group">
          <div className="w-24 h-24 bg-vogue-50 flex items-center justify-center mx-auto rounded-full group-hover:bg-black group-hover:text-white transition-all duration-700 transform group-hover:rotate-[360deg]">
            <i className="fa-solid fa-shield-halved text-2xl"></i>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.4em]">
              Direct Lineage
            </h4>
            <p className="text-sm text-vogue-500 font-light leading-relaxed italic font-serif max-w-[280px] mx-auto">
              "Direct partnerships with global houses ensure absolute
              authenticity."
            </p>
          </div>
        </div>
        <div className="space-y-8 group">
          <div className="w-24 h-24 bg-vogue-50 flex items-center justify-center mx-auto rounded-full group-hover:bg-black group-hover:text-white transition-all duration-700">
            <i className="fa-solid fa-paper-plane text-2xl"></i>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.4em]">
              Express Logistics
            </h4>
            <p className="text-sm text-vogue-500 font-light leading-relaxed italic font-serif max-w-[280px] mx-auto">
              "White-glove pan-India delivery for the discerning collector."
            </p>
          </div>
        </div>
        <div className="space-y-8 group">
          <div className="w-24 h-24 bg-vogue-50 flex items-center justify-center mx-auto rounded-full group-hover:bg-black group-hover:text-white transition-all duration-700">
            <i className="fa-solid fa-sparkles text-2xl"></i>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.4em]">
              Personal Styling
            </h4>
            <p className="text-sm text-vogue-500 font-light leading-relaxed italic font-serif max-w-[280px] mx-auto">
              "Expert guidance powered by Luna DecorIntelligence, tailored to
              your aesthetic."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPillars8;
