
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../App';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { supabase } from '../services/supabase';
import { StyleProfile } from '../types';

const Profile: React.FC = () => {
  const { user, wishlist, logout, products, userStyleProfile, setUserStyleProfile } = useApp();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'orders');

  // Form State
  const [updating, setUpdating] = useState(false);
  const [fullName, setFullName] = useState('');
  const [aesthetic, setAesthetic] = useState<string>(userStyleProfile.aesthetic);
  const [preferredColors, setPreferredColors] = useState<string[]>(userStyleProfile.preferredColors);
  const [sizePreference, setSizePreference] = useState<'Slim' | 'Regular' | 'Oversized'>(userStyleProfile.sizePreference);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    } else {
      setFullName(user.user_metadata?.full_name || '');
      setAesthetic(userStyleProfile.aesthetic);
      setPreferredColors(userStyleProfile.preferredColors);
      setSizePreference(userStyleProfile.sizePreference);
    }
  }, [user, navigate, userStyleProfile]);

  if (!user) return null;

  const catalog = products.length > 0 ? products : MOCK_PRODUCTS;
  const wishlistProducts = catalog.filter(p => wishlist.includes(p.id));

  const userName = user.user_metadata?.full_name || user.email.split('@')[0];
  const userAvatar = user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=f9f9f9&color=111`;

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    
    const newStyleProfile: StyleProfile = {
      aesthetic,
      preferredColors,
      sizePreference
    };

    try {
      const { error } = await supabase.auth.updateUser({
        data: { 
          full_name: fullName,
          style_profile: newStyleProfile
        }
      });

      if (error) throw error;
      
      // Update local Redux state immediately
      setUserStyleProfile(newStyleProfile);
      alert("Profile and Style Preferences updated successfully.");
    } catch (err: any) {
      alert("Error updating profile: " + err.message);
    } finally {
      setUpdating(false);
    }
  };

  const toggleColor = (color: string) => {
    setPreferredColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <img src={userAvatar} className="w-24 h-24 rounded-full border-4 border-white shadow-xl group-hover:opacity-80 transition-opacity object-cover" alt={userName} />
            <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold uppercase bg-black/40 rounded-full">Change</button>
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">Bonjour, {userName.split(' ')[0]}</h1>
            <p className="text-gray-500 font-light">{user.email}</p>
          </div>
        </div>
        <button 
          onClick={logout} 
          className="mt-6 md:mt-0 text-[10px] font-bold uppercase tracking-widest underline hover:text-red-500 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        <nav className="md:w-64 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-4 md:space-y-4 border-b md:border-none border-gray-100 pb-4 md:pb-0 scroll-smooth no-scrollbar">
          {[
            { id: 'orders', label: 'Order History', icon: 'fa-box' },
            { id: 'wishlist', label: 'My Wishlist', icon: 'fa-heart' },
            { id: 'addresses', label: 'Saved Addresses', icon: 'fa-location-dot' },
            { id: 'settings', label: 'Account Settings', icon: 'fa-gear' },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-4 border-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-black text-white border-black shadow-xl scale-105 z-10' : 'bg-white text-gray-400 border-transparent hover:border-gray-100 hover:text-black'}`}
            >
              <i className={`fa-solid ${tab.icon} w-4 text-center`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex-grow">
          {activeTab === 'orders' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-sm">
                <i className="fa-solid fa-clock-rotate-left text-4xl text-gray-200 mb-4"></i>
                <p className="text-gray-400 text-sm font-light uppercase tracking-widest">No previous history found</p>
                <button onClick={() => navigate('/shop')} className="mt-6 text-[10px] font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 hover:text-black">Return to Store</button>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-100 pb-4 mb-8">Curated Favorites</h2>
              {wishlistProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                  {wishlistProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              ) : (
                <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-sm">
                  <p className="text-gray-400 text-sm font-light uppercase tracking-widest">Your wishlist is looking empty</p>
                  <button onClick={() => navigate('/shop')} className="mt-4 text-[10px] font-bold uppercase tracking-widest underline decoration-2 underline-offset-4">Explore Brands</button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-100 pb-4 mb-8">Personal Details</h2>
              <form onSubmit={handleUpdateProfile} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-3">Full Name</label>
                        <input 
                          type="text" 
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm transition-colors" 
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-3">Email Address</label>
                        <input type="email" readOnly defaultValue={user.email} className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm transition-colors opacity-50 cursor-not-allowed" />
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 space-y-10">
                   <h2 className="text-lg font-bold uppercase tracking-widest">Style Preferences</h2>
                   
                   {/* Aesthetic Selector */}
                   <div className="space-y-4">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-vogue-500">Core Aesthetic</label>
                      <div className="flex flex-wrap gap-2">
                        {['Minimalist', 'Avant-Garde', 'Streetwear', 'Old Money', 'Bohemian'].map(style => (
                          <button 
                            key={style}
                            type="button"
                            onClick={() => setAesthetic(style)}
                            className={`px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest border transition-all ${aesthetic === style ? 'bg-black text-white border-black' : 'border-gray-100 hover:border-black'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Color Selector */}
                   <div className="space-y-4">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-vogue-500">Preferred Color Palettes</label>
                      <div className="flex flex-wrap gap-2">
                        {['Monochrome', 'Earth Tones', 'Pastels', 'Vibrant', 'Dark', 'Neutrals'].map(palette => (
                          <button 
                            key={palette}
                            type="button"
                            onClick={() => toggleColor(palette)}
                            className={`px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest border transition-all flex items-center gap-2 ${preferredColors.includes(palette) ? 'bg-black text-white border-black' : 'border-gray-100 hover:border-black'}`}
                          >
                            {preferredColors.includes(palette) && <i className="fa-solid fa-check text-[8px]"></i>}
                            {palette}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Size Preference */}
                   <div className="space-y-4">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-vogue-500">Preferred Silhouette</label>
                      <div className="grid grid-cols-3 gap-4">
                        {(['Slim', 'Regular', 'Oversized'] as const).map(fit => (
                          <button 
                            key={fit}
                            type="button"
                            onClick={() => setSizePreference(fit)}
                            className={`px-4 py-4 text-[9px] font-bold uppercase tracking-widest border transition-all ${sizePreference === fit ? 'bg-black text-white border-black shadow-lg' : 'border-gray-100 hover:border-black'}`}
                          >
                            {fit}
                          </button>
                        ))}
                      </div>
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={updating}
                  className="w-full md:w-auto bg-black text-white px-12 py-5 text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-4"
                >
                  {updating && <i className="fa-solid fa-spinner animate-spin"></i>}
                  {updating ? 'Persisting Changes...' : 'Save All Updates'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
