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
      {/* Background Photography with slow zoom entrance animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/silver_horizon/banner.png"
          alt="Silver Horizon Mediterranean Architectural Landmark"
          className="w-full h-full object-cover object-bottom sm:object-center transform scale-105 animate-[heroScale_2.2s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          fetchPriority="high"
        />

        {/* Soft subtle sky gradient overlay to ensure perfect contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4b82]/45 via-transparent to-transparent pointer-events-none animate-[fadeIn_1.2s_ease-out_forwards]" />

        {/* Bottom soft misty fog transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none" />
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes heroScale {
          0% { transform: scale(1.12); opacity: 0.7; }
          100% { transform: scale(1.0); opacity: 1; }
        }
        @keyframes heroFadeUp {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* Upper Empty Spacer for Fixed Header */}
      <div className="h-28 sm:h-36 w-full relative z-10" />

      {/* Main Centered Content positioned in the upper open sky area with staggered entrance */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 sm:space-y-6 flex flex-col items-center justify-center my-auto pt-2 pb-16 sm:pb-32">
        
        {/* Large Central Headline with Entrance Animation */}
        <h1 
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] drop-shadow-md opacity-0 animate-[heroFadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
        >
          Discover your ideal <br className="hidden sm:inline" />
          elevated home today
        </h1>

        {/* Subtitle Description with Staggered Entrance */}
        <p 
          className="font-body text-xs sm:text-base md:text-lg text-white/95 max-w-2xl leading-relaxed drop-shadow opacity-0 animate-[heroFadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]"
        >
          Uncover a world of 3 & 4 BHK Mediterranean-inspired residences & sky duplexes. <br className="hidden md:inline" />
          Your perfect sanctuary at Silver Horizon awaits just a search away!
        </p>

        {/* Centered Sleek Dark Pill Button with Entrance Animation & Micro-interactions */}
        <div 
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto opacity-0 animate-[heroFadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]"
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

        {/* Quick Highlights Badge with Subtle Staggered Entrance */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 text-[10px] sm:text-xs font-semibold text-white/90 drop-shadow opacity-0 animate-[heroFadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]"
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
