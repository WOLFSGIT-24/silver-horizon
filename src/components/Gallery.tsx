import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/silver_horizon/balcony_sunset_panorama.webp",
    title: "Sunset Sky Balcony",
    category: "Skyline Living",
  },
  {
    src: "/assets/silver_horizon/grand_lobby.webp",
    title: "The Grand Arrival Lobby",
    category: "Arrival Experience",
  },
  {
    src: "/assets/silver_horizon/living_room_skyline.webp",
    title: "10 Ft High Living Room",
    category: "Residences",
  },
  {
    src: "/assets/silver_horizon/duplex_staircase.webp",
    title: "Duplex Spiral Staircase",
    category: "32nd Floor Duplex",
  },
  {
    src: "/assets/silver_horizon/master_bedroom.webp",
    title: "Crafted Master Bedroom",
    category: "Interiors",
  },
  {
    src: "/assets/silver_horizon/pavilion_amphitheatre.webp",
    title: "Open Air Pavilion Amphitheatre",
    category: "Community",
  },
  {
    src: "/assets/silver_horizon/indoor_pool.webp",
    title: "Indoor Heated Pool with Deck",
    category: "Clubhouse",
  },
  {
    src: "/assets/silver_horizon/wellness_pool.webp",
    title: "Wellness Pool & Sunken Loungers",
    category: "Wellness",
  },
  {
    src: "/assets/silver_horizon/pet_park.webp",
    title: "Dedicated Pet Park",
    category: "Outdoor Spaces",
  },
  {
    src: "/assets/silver_horizon/kids_play_area.webp",
    title: "Children's Adventure Play Area",
    category: "Kids Zone",
  },
  {
    src: "/assets/silver_horizon/night_tower_landmark.webp",
    title: "Night Architectural Illumination",
    category: "Landmark Elevation",
  },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<any | null>(null);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-white text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              Curated living spaces & architecture
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              Take a visual tour through Mediterranean grandeur, 10 foot ceilings, and elevated sky balconies designed for uncompromised luxury.
            </p>
          </div>

        </div>

        {/* Marquee Animation Styles */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Marquee Row 1 */}
        <div className="w-full overflow-hidden relative py-2">
          <div className="animate-marquee gap-6">
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(img)}
                className="flex-shrink-0 w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/11] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer border border-[#E5DED3]"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-semibold text-white/80 tracking-widest">
                    {img.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Full Screen Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#090F1D]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-4 relative shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-2 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-normal text-[#161A22] tracking-tight">
                  {activePhoto.title}
                </h3>
                <span className="text-xs text-gray-500 font-normal uppercase tracking-wider">
                  {activePhoto.category}
                </span>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#E5DED3] flex items-center justify-center text-[#0E172A] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-auto flex-1 my-3 flex items-center justify-center bg-[#090F1D] rounded-xl p-2">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-w-full max-h-[68vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
