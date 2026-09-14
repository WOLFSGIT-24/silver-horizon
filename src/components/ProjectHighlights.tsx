import React from "react";
import { keyHighlights } from "../data";

interface ProjectHighlightsProps {
  onRequestDownload?: () => void;
  onOpenBooking?: () => void;
}

export default function ProjectHighlights({ onRequestDownload, onOpenBooking }: ProjectHighlightsProps) {
  return (
    <section id="highlights" className="w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header matching reference typographic structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              Where elevated scale meets thoughtful design
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              Set in Bengaluru’s fast-emerging North-East corridor between Whitefield and Hoskote, adjoining the upcoming 65-meter Peripheral Ring Road (PRR).
            </p>
          </div>

        </div>

        {/* 8-Grid Minimalist Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/80 hover:border-gray-400 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[40px] font-light tracking-tight text-[#161A22] leading-none mb-2 sm:mb-3">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[#161A22] mb-1">
                  {item.label}
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400 font-body mt-1.5 sm:mt-2">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
