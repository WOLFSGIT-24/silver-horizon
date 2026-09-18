import React from "react";

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
            className="w-full h-full object-cover object-[center_top] sm:object-[center_top]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1326"
            height="900"
          />
        </picture>

        {/* Soft subtle sky gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4b82]/45 via-transparent to-transparent pointer-events-none" />


      </div>

      {/* Upper Empty Spacer for Fixed Header */}
      <div className="h-28 sm:h-36 w-full relative z-10" />

      {/* Main Content: Hidden on Mobile, Left-Aligned on Desktop */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 justify-start my-auto pt-2 pb-16 sm:pb-32">
        <div className="max-w-xl lg:max-w-2xl text-left flex flex-col items-start space-y-4 sm:space-y-6">
          
          {/* Large Headline */}
          <h1 
            className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] drop-shadow-md capitalize"
          >
            Discover Your Ideal <br className="hidden sm:inline" />
            Elevated Home Today
          </h1>

          {/* Location, Specification, Price (One Line Each, without label names) */}
          <div className="space-y-1 sm:space-y-1.5 text-white/95 font-body text-sm sm:text-base md:text-lg drop-shadow">
            <p>East Bengaluru (Adjoining PRR)</p>
            <p>3 & 4 BHK Luxury Residences & Sky Duplexes</p>
            <p>Price On Request</p>
          </div>

          {/* Action Buttons */}
          <div 
            className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 w-full sm:w-auto"
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
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-10 w-full relative z-10" />
    </section>
  );
}
