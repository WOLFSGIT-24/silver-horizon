import React from "react";

interface ProjectHighlightsProps {
  onRequestDownload?: () => void;
  onOpenBooking?: () => void;
}

export default function ProjectHighlights({ onRequestDownload, onOpenBooking }: ProjectHighlightsProps) {
  return (
    <section id="highlights" className="w-full relative bg-white text-[#161A22] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP & ULTRA-WIDE SCREENS (lg: >= 1024px) - Full Bleed Edge-to-Edge */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full aspect-[1672/941] overflow-hidden select-none">
        
        {/* Background Image spanning 100% full width */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none">
          <source srcSet="/assets/silver_horizon/second-sec.webp" type="image/webp" />
          <img
            src="/assets/silver_horizon/second-sec.webp"
            alt="Silver Horizon Luxury Landmark & Living"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </picture>

        {/* Soft Dark Overlay on Left Sky Area */}
        <div className="absolute top-0 left-0 w-[50%] h-[35%] bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-10" />

        {/* ----------------- LEFT SIDE: SKY TYPOGRAPHY ----------------- */}
        
        {/* LUXURY Title + Subtitle */}
        <div className="absolute top-[5%] left-[4.5%] z-20">
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl 2xl:text-[68px] font-normal tracking-[0.06em] text-white leading-none drop-shadow-md">
            LUXURY
          </h2>
          <p className="text-[10px] lg:text-[10.5px] xl:text-xs 2xl:text-[13px] font-semibold tracking-[0.22em] text-white/95 uppercase mt-2 lg:mt-2.5 leading-snug drop-shadow-sm font-body">
            DOESN'T NEED<br />
            TO ANNOUNCE<br />
            ITSELF.
          </p>
        </div>

        {/* Narrative Paragraph in the Sky */}
        <div className="absolute top-[6.5%] left-[23.5%] xl:left-[24%] 2xl:left-[24.5%] w-[22%] max-w-[220px] lg:max-w-[250px] xl:max-w-[280px] z-20">
          <p className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] 2xl:text-[12.5px] text-white/95 font-light leading-relaxed drop-shadow-sm font-body">
            True luxury is experienced quietly through thoughtful planning, natural light, generous proportions and enduring quality.
          </p>
        </div>

        {/* ----------------- RIGHT SIDE: MODERN LIVING & PILLS ----------------- */}
        
        {/* Header: DESIGNED FOR MODERN LIVING. */}
        <div 
          className="absolute top-[6.5%] z-20 -translate-x-1/2 text-center w-[340px] xl:w-[400px] 2xl:w-[440px]"
          style={{ left: "75%" }}
        >
          <h3 className="text-[11px] lg:text-xs xl:text-sm font-semibold tracking-[0.3em] text-[#161A22] uppercase font-body">
            DESIGNED FOR MODERN LIVING.
          </h3>
        </div>

        {/* 10 Architectural Capsules Centered at 75% with subtle stagger */}
        <div 
          className="absolute top-[13.5%] bottom-[4.5%] z-20 flex flex-col justify-between items-center py-1 -translate-x-1/2 w-[340px] xl:w-[400px] 2xl:w-[440px]"
          style={{ left: "75%" }}
        >
          
          {/* 1. 32 STOREY LANDMARK */}
          <div className="w-auto translate-x-3 xl:translate-x-5 px-6 lg:px-7 xl:px-8 py-1 lg:py-1.5 xl:py-2 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="font-display text-xl lg:text-2xl xl:text-3xl text-[#161A22] font-normal leading-tight">
              32
            </span>
            <span className="text-[8px] lg:text-[8.5px] xl:text-[9.5px] font-medium uppercase tracking-[0.2em] text-[#333]">
              STOREY LANDMARK
            </span>
          </div>

          {/* 2. 3 & 4 BHK RESIDENCES */}
          <div className="w-auto translate-x-8 lg:translate-x-10 xl:translate-x-13 px-7 lg:px-8 xl:px-10 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="font-display text-xl lg:text-2xl xl:text-3xl text-[#161A22] font-normal leading-tight">
              3 & 4 BHK
            </span>
            <span className="text-[8px] lg:text-[8.5px] xl:text-[9.5px] font-medium uppercase tracking-[0.2em] text-[#333]">
              RESIDENCES
            </span>
          </div>

          {/* 3. DUPLEX COLLECTION */}
          <div className="w-auto -translate-x-6 lg:-translate-x-8 xl:-translate-x-11 px-6 lg:px-7 xl:px-8 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-medium uppercase tracking-[0.2em] text-[#161A22] leading-tight">
              DUPLEX<br />COLLECTION
            </span>
          </div>

          {/* 4. 10-FOOT CEILING HEIGHT */}
          <div className="w-auto translate-x-4 lg:translate-x-5 xl:translate-x-7 px-6 lg:px-7 xl:px-8 py-1 lg:py-1.5 xl:py-2 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <div className="flex items-baseline justify-center gap-1 leading-none">
              <span className="font-display text-xl lg:text-2xl xl:text-3xl text-[#161A22] font-normal">
                10
              </span>
              <span className="text-[9px] lg:text-[10px] xl:text-xs font-semibold uppercase tracking-wider text-[#161A22]">
                -FOOT
              </span>
            </div>
            <span className="text-[8px] lg:text-[8.5px] xl:text-[9.5px] font-medium uppercase tracking-[0.2em] text-[#333] mt-0.5">
              CEILING HEIGHT
            </span>
          </div>

          {/* 5. TRIPLE BASEMENT PARKING */}
          <div className="w-auto -translate-x-8 lg:-translate-x-10 xl:-translate-x-14 px-6 lg:px-7 xl:px-8 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-medium uppercase tracking-[0.2em] text-[#161A22] leading-tight">
              TRIPLE BASEMENT<br />PARKING
            </span>
          </div>

          {/* 6. PREMIUM CLUBHOUSE */}
          <div className="w-auto translate-x-3 lg:translate-x-4 xl:translate-x-6 px-6 lg:px-7 xl:px-8 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-medium uppercase tracking-[0.2em] text-[#161A22] leading-tight">
              PREMIUM<br />CLUBHOUSE
            </span>
          </div>

          {/* 7. MEDITERRANEAN ARCHITECTURE */}
          <div className="w-auto -translate-x-7 lg:-translate-x-9 xl:-translate-x-12 px-6 lg:px-7 xl:px-8 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-medium uppercase tracking-[0.2em] text-[#161A22] leading-tight">
              MEDITERRANEAN<br />ARCHITECTURE
            </span>
          </div>

          {/* 8. INDOOR POOL */}
          <div className="w-auto translate-x-5 lg:translate-x-7 xl:translate-x-10 px-7 lg:px-8 xl:px-10 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex items-center justify-center text-center">
            <span className="text-[10px] lg:text-[11px] xl:text-[12px] font-medium uppercase tracking-[0.2em] text-[#161A22]">
              INDOOR POOL
            </span>
          </div>

          {/* 9. EV CHARGING FOR EVERY PARKING SPACE */}
          <div className="w-auto -translate-x-9 lg:-translate-x-11 xl:-translate-x-15 px-5 lg:px-6 xl:px-7 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] lg:text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.18em] text-[#161A22] leading-tight">
              EV CHARGING FOR<br />EVERY PARKING SPACE
            </span>
          </div>

          {/* 10. RAINWATER HARVESTING */}
          <div className="w-auto translate-x-3 lg:translate-x-4 xl:translate-x-6 px-6 lg:px-7 xl:px-8 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm hover:shadow hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-medium uppercase tracking-[0.2em] text-[#161A22] leading-tight">
              RAINWATER<br />HARVESTING
            </span>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE & TABLET VIEW (< lg screens) - 3 Equal-Sized Points Per Row */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative w-full aspect-[941/1672] overflow-hidden select-none bg-white">
        
        {/* Vertical Portrait Background Image (second-mob.webp) */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none">
          <source srcSet="/assets/silver_horizon/second-mob.webp" type="image/webp" />
          <img
            src="/assets/silver_horizon/second-mob.webp"
            alt="Silver Horizon Luxury Landmark & Living"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </picture>

        {/* Soft Dark Sky Overlay on Top */}
        <div className="absolute top-0 left-0 right-0 h-[22%] bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none z-10" />

        {/* ----------------- TOP SKY TEXT ----------------- */}
        <div className="absolute top-[3%] left-[5%] right-[5%] z-20 flex flex-col justify-start text-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-[0.06em] text-white leading-none drop-shadow-md">
                LUXURY
              </h2>
              <p className="text-[9px] sm:text-[11px] font-semibold tracking-[0.22em] text-white uppercase mt-1.5 leading-snug drop-shadow-sm">
                DOESN'T NEED<br />
                TO ANNOUNCE<br />
                ITSELF.
              </p>
            </div>

            <div className="max-w-[170px] sm:max-w-[240px] pt-1">
              <p className="text-[9px] sm:text-[11px] text-white/95 font-light leading-relaxed drop-shadow-sm">
                True luxury is experienced quietly through thoughtful planning, natural light, generous proportions and enduring quality.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------- BOTTOM WHITE SATIN AREA: 3 POINTS PER ROW ----------------- */}
        
        {/* Header: DESIGNED FOR MODERN LIVING. */}
        <div className="absolute top-[65.2%] left-0 right-0 z-20 text-center px-4">
          <h3 className="text-[10.5px] sm:text-xs font-semibold tracking-[0.25em] text-[#161A22] uppercase font-body">
            DESIGNED FOR MODERN LIVING.
          </h3>
        </div>

        {/* 3 Columns Equal-Sized Badges Grid (Strictly inside 68.5% to 98% height) */}
        <div className="absolute top-[68.5%] bottom-[2%] left-[3%] right-[3%] z-20 flex flex-col justify-between">
          
          {/* Row 1: 3 Equal Items */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full h-[22%]">
            
            {/* Item 1 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="font-display text-sm sm:text-lg text-[#161A22] font-normal leading-none">32</span>
              <span className="text-[6.5px] sm:text-[8px] font-semibold uppercase tracking-wider text-[#2D3748] mt-0.5 leading-tight">STOREY LANDMARK</span>
            </div>

            {/* Item 2 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="font-display text-xs sm:text-base text-[#161A22] font-normal leading-none">3 & 4 BHK</span>
              <span className="text-[6.5px] sm:text-[8px] font-semibold uppercase tracking-wider text-[#2D3748] mt-0.5 leading-tight">RESIDENCES</span>
            </div>

            {/* Item 3 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[7px] sm:text-[8.5px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">DUPLEX<br />COLLECTION</span>
            </div>

          </div>

          {/* Row 2: 3 Equal Items */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full h-[22%]">
            
            {/* Item 4 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline justify-center gap-0.5 leading-none">
                <span className="font-display text-xs sm:text-base text-[#161A22] font-normal">10</span>
                <span className="text-[7px] sm:text-[8.5px] font-semibold uppercase tracking-wider text-[#161A22]">-FT</span>
              </div>
              <span className="text-[6.5px] sm:text-[8px] font-semibold uppercase tracking-wider text-[#2D3748] mt-0.5 leading-tight">CEILING HEIGHT</span>
            </div>

            {/* Item 5 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[7px] sm:text-[8.5px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">TRIPLE BASEMENT<br />PARKING</span>
            </div>

            {/* Item 6 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[7px] sm:text-[8.5px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">PREMIUM<br />CLUBHOUSE</span>
            </div>

          </div>

          {/* Row 3: 3 Equal Items */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full h-[22%]">
            
            {/* Item 7 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[6.5px] sm:text-[8px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">MEDITERRANEAN<br />ARCHITECTURE</span>
            </div>

            {/* Item 8 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[7.5px] sm:text-[9px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">INDOOR<br />POOL</span>
            </div>

            {/* Item 9 */}
            <div className="h-full px-1 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[6.5px] sm:text-[8px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">EV CHARGING<br />PROVISION</span>
            </div>

          </div>

          {/* Row 4: Centered 10th Item */}
          <div className="w-full flex justify-center h-[20%]">
            <div className="w-auto min-w-[150px] sm:min-w-[180px] h-full px-4 py-1 rounded-xl sm:rounded-2xl border border-neutral-300/85 bg-white/85 backdrop-blur-md shadow-sm flex items-center justify-center text-center">
              <span className="text-[7px] sm:text-[8.5px] font-semibold uppercase tracking-wider text-[#161A22] leading-tight">RAINWATER HARVESTING</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
