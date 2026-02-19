
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS, LAUNCH_PROMOS } from '../constants';
import ProductCard from '../components/ProductCard';
import { useApp } from '../App';

const Home: React.FC = () => {
  const { setIsStyleAssistantOpen, userStyleProfile } = useApp();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const trending = MOCK_PRODUCTS.filter(p => p.isTrending);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="animate-in fade-in duration-1000 overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="relative h-[95vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2400&auto=format&fit=crop" 
            alt="GS Brand Banner"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full text-white">
          <div className="max-w-2xl space-y-8">
            <div className="overflow-hidden relative">
              {/* Promotional Hero Badge */}
              <div className="absolute -top-12 left-0 bg-vogue-500 text-black px-4 py-1 text-[8px] font-bold uppercase tracking-[0.5em] animate-bounce">
                Launch Special: Free Shipping
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-4 animate-slide-up">
                Established 2012 — The Global Collective
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter leading-[0.85] animate-slide-up">
              Refined <br /> Essentials.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-lg font-light tracking-wide animate-slide-up [animation-delay:200ms]">
              A curated house of iconic labels. From high-performance activewear to timeless tailored linen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-slide-up [animation-delay:400ms]">
              <Link to="/shop" className="group bg-white text-black px-12 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl flex items-center gap-3">
                Shop The Collection
                <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
              </Link>
              <Link to="/shop?category=Men" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                The Men's Edit
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-40">
           <span className="text-[8px] font-bold uppercase tracking-[0.4em] rotate-90 mb-8 origin-left whitespace-nowrap">Scroll to Explore</span>
           <div className="w-px h-16 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideUp_2s_infinite]"></div>
           </div>
        </div>
      </section>

      {/* NEW LAUNCH SPOTLIGHT SECTION */}
      <section className="py-24 bg-vogue-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Limited Time Curation</span>
              <h2 className="text-5xl font-serif font-bold tracking-tight mb-8">The Indigo Heritage <br /> Launch Event</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-md italic">
                Celebrate the launch of our updated Heritage Collection. For the next 48 hours, enjoy exclusive access to archive releases and commemorative pricing.
              </p>
              
              <div className="space-y-4">
                {LAUNCH_PROMOS.slice(0, 1).map((promo) => (
                  <div key={promo.id} className="bg-white p-8 border border-gray-200 shadow-sm flex justify-between items-center group hover:border-black transition-all">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-vogue-500 mb-2">{promo.description}</p>
                      <h4 className="text-2xl font-serif font-bold italic">{promo.discount}</h4>
                    </div>
                    <button 
                      onClick={() => handleCopy(promo.code)}
                      className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${copiedCode === promo.code ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-zinc-800'}`}
                    >
                      {copiedCode === promo.code ? 'Code Copied' : `Use Code: ${promo.code}`}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                    alt="New Launch Spotlight"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-[120px] font-serif font-bold text-white/10 select-none">PEPE</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Style Concierge Entry Section */}
      <section className="py-40 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2 space-y-12">
              <div className="space-y-6">
                 <span className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.6em]">Intelligent Curation</span>
                 <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[0.9]">Meet Your <br /> Personal Stylist.</h2>
              </div>
              <p className="text-xl text-white/40 font-light leading-relaxed max-w-md italic font-serif">
                "Bespoke fashion guidance for the {userStyleProfile.aesthetic} soul. Our concierge uses heritage data and real-time trends to refine your narrative."
              </p>
              <div className="flex items-center gap-4">
                 <button 
                  onClick={() => setIsStyleAssistantOpen(true)}
                  className="group flex items-center gap-8 bg-white text-black px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-vogue-500 hover:text-white transition-all shadow-2xl"
                >
                  <span>Consult Concierge</span>
                  <i className="fa-solid fa-wand-magic-sparkles group-hover:rotate-12 transition-transform"></i>
                </button>
                <div className="hidden sm:block text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                   Tailored to: {userStyleProfile.aesthetic}
                </div>
              </div>
           </div>
           <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/3] bg-white/5 p-12 overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop" 
                   className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                   alt="Digital Styling"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                 <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-md border border-white/10">
                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-vogue-500 mb-2">Live Status</p>
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="text-xs font-light tracking-widest uppercase">Concierge is currently online</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
           <header className="mb-24 text-center space-y-6">
              <span className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.6em]">The Pillars of Excellence</span>
              <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight">Iconic Partners.</h2>
           </header>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pepe Jeans London */}
              <div className="group relative h-[700px] overflow-hidden bg-gray-100 flex items-center justify-center">
                 <img 
                    src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1200" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0" 
                    alt="Pepe Jeans"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
                 <div className="relative z-10 flex flex-col items-center text-center px-12 transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/70 mb-6 border-b border-white/20 pb-2">London Heritage</span>
                    <h3 className="text-5xl font-serif font-bold italic text-white mb-8 tracking-tighter">Pepe Jeans</h3>
                    <Link to="/shop?brand=Pepe" className="bg-white text-black px-10 py-5 text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 hover:bg-black hover:text-white">
                       Shop The Label
                    </Link>
                 </div>
                 <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700"></div>
              </div>

              {/* Turtle Signature */}
              <div className="group relative h-[700px] overflow-hidden bg-gray-100 flex items-center justify-center">
                 <img 
                    src="https://images.unsplash.com/photo-1594932224828-b4b059b6ff0f?auto=format&fit=crop&q=80&w=1200" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110" 
                    alt="Turtle"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
                 <div className="relative z-10 flex flex-col items-center text-center px-12 transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/70 mb-6 border-b border-white/20 pb-2">Refined Formals</span>
                    <h3 className="text-5xl font-serif font-bold italic text-white mb-8 tracking-tighter">Turtle Signature</h3>
                    <Link to="/shop?brand=Turtle" className="bg-white text-black px-10 py-5 text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 hover:bg-black hover:text-white">
                       View Selection
                    </Link>
                 </div>
                 <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700"></div>
              </div>

              {/* Jockey International */}
              <div className="group relative h-[700px] overflow-hidden bg-gray-100 flex items-center justify-center">
                 <img 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    alt="Jockey"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
                 <div className="relative z-10 flex flex-col items-center text-center px-12 transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/70 mb-6 border-b border-white/20 pb-2">Everlasting Comfort</span>
                    <h3 className="text-5xl font-sans font-black uppercase text-white mb-8 tracking-[0.2em]">JOCKEY</h3>
                    <Link to="/shop?brand=Jockey" className="bg-white text-black px-10 py-5 text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 hover:bg-black hover:text-white">
                       Essentials Catalog
                    </Link>
                 </div>
                 <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Flagship Store Section */}
      <section className="py-40 bg-vogue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <span className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.6em]">Physical Destinations</span>
                <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[0.9]">Experience the <br /> Collective.</h2>
              </div>
              <p className="text-xl text-vogue-500 font-light leading-relaxed max-w-md font-serif italic">
                Our flagship destination in Bengaluru offers exclusive brand capsules, bespoke tailoring, and an in-house coffee lounge.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-4">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3">Address</h4>
                  <p className="text-sm font-serif italic text-gray-800 leading-relaxed">No. 42, Lavelle Road, <br /> Bengaluru, KA 560001</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3">Hours</h4>
                  <p className="text-sm font-serif italic text-gray-800">Mon - Sun: <br /> 11:00 AM - 9:00 PM</p>
                </div>
              </div>
              <button className="bg-black text-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all flex items-center gap-4 active:scale-95 shadow-xl">
                <i className="fa-solid fa-location-arrow"></i>
                Request Concierge Visit
              </button>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-square overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop" 
                  alt="GS Flagship Store Interior"
                  className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
           <header className="mb-24 space-y-6">
              <span className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.6em]">Visual Narrative</span>
              <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight">The Lifestyle.</h2>
           </header>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1539109132314-3475d24c2475?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1475184478106-90bc0921c330?q=80&w=600&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700">
                   <img src={img} className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" alt={`Social Feed ${i}`} />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <span className="text-[9px] font-bold uppercase tracking-[0.5em] border border-white/40 px-6 py-3 backdrop-blur-md">View Post</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="py-40 bg-vogue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">The Mix.</h2>
              <p className="text-vogue-500 text-[10px] font-bold uppercase tracking-[0.5em]">Selected Styles for the {userStyleProfile.aesthetic} Enthusiast</p>
            </div>
            <Link to="/shop" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b-2 border-black pb-3 hover:text-vogue-500 hover:border-vogue-500 transition-all">
              Discover Full Archive
            </Link>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
            {trending.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-40 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          <div className="space-y-8 group">
            <div className="w-24 h-24 bg-vogue-50 flex items-center justify-center mx-auto rounded-full group-hover:bg-black group-hover:text-white transition-all duration-700 transform group-hover:rotate-[360deg]">
              <i className="fa-solid fa-shield-halved text-2xl"></i>
            </div>
            <div className="space-y-4">
               <h4 className="text-[11px] font-bold uppercase tracking-[0.4em]">Direct Lineage</h4>
               <p className="text-sm text-vogue-500 font-light leading-relaxed italic font-serif max-w-[280px] mx-auto">
                 "Direct partnerships with global houses ensure absolute authenticity."
               </p>
            </div>
          </div>
          <div className="space-y-8 group">
            <div className="w-24 h-24 bg-vogue-50 flex items-center justify-center mx-auto rounded-full group-hover:bg-black group-hover:text-white transition-all duration-700">
              <i className="fa-solid fa-paper-plane text-2xl"></i>
            </div>
            <div className="space-y-4">
               <h4 className="text-[11px] font-bold uppercase tracking-[0.4em]">Express Logistics</h4>
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
               <h4 className="text-[11px] font-bold uppercase tracking-[0.4em]">Personal Styling</h4>
               <p className="text-sm text-vogue-500 font-light leading-relaxed italic font-serif max-w-[280px] mx-auto">
                 "Expert guidance powered by GS Intelligence, tailored to your aesthetic."
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
