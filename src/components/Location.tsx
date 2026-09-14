import React, { useState, useEffect } from "react";
import { locationsData, nearbyPointsOfInterest } from "../data";

interface LocationProps {
  onOpenEnquiry: () => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadMap(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const renderMap = () => {
    if (!loadMap) {
      return (
        <div className="w-full h-full bg-[#E5DED3]/40 animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#0E172A]/70 font-body uppercase tracking-wider font-semibold">
            Loading East Bengaluru Map...
          </span>
        </div>
      );
    }
    return (
      <iframe
        src="https://maps.google.com/maps?q=Green+Edge+Infracon,+Khajisonnanahalli,+Bengaluru,+Karnataka+560115&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Silver Horizon | Green Edge Infracon Location"
        className="w-full h-full"
      />
    );
  };

  return (
    <section id="location" className="w-full py-16 md:py-24 bg-[#FAF8F5] text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              Strategic East Bengaluru connectivity
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              Adjoining the upcoming 65 meter Peripheral Ring Road with direct signal free arterial connectivity to Whitefield, ITPL, and Kempegowda International Airport.
            </p>
          </div>

        </div>

        {/* 4 Infrastructure Highlights Grid from Page 25 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {nearbyPointsOfInterest.infrastructure.map((infra, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#090F1D]">
                <img
                  src={infra.img}
                  alt={infra.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 right-3 bg-[#0A1120]/85 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                  {infra.badge}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <h4 className="font-medium text-sm sm:text-base text-[#161A22] leading-tight tracking-tight">
                  {infra.title}
                </h4>
                <p className="font-body text-xs text-gray-500 leading-relaxed">
                  {infra.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column: Commute Matrix & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Major Commercial & Transit Hubs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-base sm:text-lg font-medium text-[#161A22] tracking-tight mb-2">
              Major Commercial & Transit Hubs
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {locationsData.map((dest) => (
                <div
                  key={dest.id}
                  className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl shadow-xs border border-gray-200/80 hover:border-gray-300 transition-all"
                >
                  <div>
                    <span className="block font-body text-sm font-medium text-[#161A22]">
                      {dest.name}
                    </span>
                    <span className="text-[11px] text-gray-500 font-normal">
                      {dest.distance}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-light text-xl sm:text-2xl text-[#161A22] block">
                      {dest.times.driving}
                    </span>
                    <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider -mt-1 block">
                      Minutes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-200/80 w-full h-[300px] sm:h-[420px] lg:h-[480px] bg-white">
              {renderMap()}
            </div>
            <a
              href="https://maps.app.goo.gl/6TbV3FTZdvuHnmDD9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold tracking-wide py-3.5 rounded-full transition-all shadow-md flex items-center justify-center text-center cursor-pointer"
            >
              Open location in Google Maps
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
