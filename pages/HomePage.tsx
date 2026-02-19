import React from "react";
import Landing1 from "@/components/home/Landing1";
import LaunchSpotlight2 from "@/components/home/LaunchSpotlight2";
import StyleConcierge3 from "@/components/home/StyleConcierge3";
import FeaturedBrands4 from "@/components/home/FeaturedBrands4";
import FlagshipStore5 from "@/components/home/FlagshipStore5";
import SocialFeed6 from "@/components/home/SocialFeed6";
import TrendingCollections7 from "@/components/home/TrendingCollections7";
import TrustPillars8 from "@/components/home/TrustPillars8";

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 overflow-hidden">
      <Landing1 />
      <LaunchSpotlight2 />
      <StyleConcierge3 />
      <FeaturedBrands4 />
      <FlagshipStore5 />
      <SocialFeed6 />
      <TrendingCollections7 />
      <TrustPillars8 />
    </div>
  );
};

export default HomePage;
