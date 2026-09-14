import React from "react";
import { Download } from "lucide-react";
import { projectSnapshot } from "../data";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#8bb4dd]"
    >
      {/* Background Photography - Instant High-Priority LCP Render */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source media="(max-width: 640px)" srcSet="/assets/silver_horizon/banner_mobile.webp" type="image/webp" />
          <img
            src="/assets/silver_horizon/banner.webp"
            alt="Silver Horizon Mediterranean Architectural Landmark"
            className="w-full h-full object-cover object-bottom sm:object-center"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1326"
            height="900"
          />
        </picture>

        {/* Soft subtle sky gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4b82]/45 via-transparent to-transparent pointer-events-none" />

        {/* Bottom soft misty fog transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none" />
      </div>

      {/* Upper Empty Spacer for Fixed Header */}
      <div className="h-28 sm:h-36 w-full relative z-10" />

      {/* Main Centered Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 sm:space-y-6 flex flex-col items-center justify-center my-auto pt-2 pb-16 sm:pb-32">
        
        {/* Large Central Headline */}
        <h1 
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] drop-shadow-md"
        >
          Discover your ideal <br className="hidden sm:inline" />
          elevated home today
        </h1>

        {/* Subtitle Description */}
        <p 
          className="font-body text-xs sm:text-base md:text-lg text-white/95 max-w-2xl leading-relaxed drop-shadow"
        >
          Uncover a world of 3 & 4 BHK Mediterranean inspired residences & sky duplexes. <br className="hidden md:inline" />
          Your perfect sanctuary at Silver Horizon awaits just a search away!
        </p>

        {/* Centered Sleek Dark Pill Button */}
        <div 
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto bg-[#090F1D]/90 hover:bg-black text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
          >
            Book today
          </button>

          <button
            onClick={onRequestDownload}
            className="hidden sm:inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-body text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full border border-white/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Brochure</span>
          </button>
        </div>

        {/* Quick Highlights Badge */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 text-[10px] sm:text-xs font-semibold text-white/90 drop-shadow"
        >
          <span>32 Storeys</span>
          <span>•</span>
          <span>14,962 Sq.Ft Clubhouse</span>
          <span className="hidden xs:inline">•</span>
          <span>East Bengaluru (Adjoining PRR)</span>
        </div>

      </div>

      {/* Bottom Spacer */}
      <div className="h-10 w-full relative z-10" />
    </section>
  );
}
