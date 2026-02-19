import { useApp } from "@/App";
import React from "react";

const StyleConcierge3 = () => {
  const { setIsStyleAssistantOpen, userStyleProfile } = useApp();

  return (
    <section className="py-14 md:py-40 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <span className="text-vogue-500 text-xs font-bold uppercase tracking-[0.6em]">
              Intelligent Curation
            </span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[0.9]">
              Meet Your <br /> Personal Stylist.
            </h2>
          </div>
          <p className="text-xl text-white/40 font-light leading-relaxed max-w-md italic font-serif">
            "Bespoke fashion guidance for the {userStyleProfile.aesthetic} soul.
            Our concierge uses heritage data and real-time trends to refine your
            narrative."
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsStyleAssistantOpen(true)}
              className="group flex items-center gap-8 bg-white text-black px-12 py-6 text-xs font-bold uppercase tracking-[0.4em] hover:bg-vogue-500 hover:text-white transition-all shadow-2xl"
            >
              <span>Consult Concierge</span>
              <i className="fa-solid fa-wand-magic-sparkles group-hover:rotate-12 transition-transform"></i>
            </button>
            <div className="hidden sm:block text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              Tailored to: {userStyleProfile.aesthetic}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative group">
          <div className="aspect-[4/3] bg-white/5 p-12 overflow-hidden relative">
            <img
              src="https://i.pinimg.com/736x/a7/8e/57/a78e57ded7a08e6991ceee8c3268321c.jpg"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              alt="Digital Styling"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-md border border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-vogue-500 mb-2">
                Live Status
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-light tracking-widest uppercase">
                  Concierge is currently online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleConcierge3;
