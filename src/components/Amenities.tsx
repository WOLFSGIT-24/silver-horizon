import React, { useState, useEffect } from "react";

interface AmenitiesProps {
  onOpenBooking?: () => void;
  onRequestDownload?: () => void;
}

export default function Amenities({ onOpenBooking, onRequestDownload }: AmenitiesProps) {
  // Curated slider items covering all key amenities across the project
  const sliderItems = [
    {
      src: "/assets/silver_horizon/indoor_pool.webp",
      title: "The Pavilion Clubhouse",
      subtitle: "Indoor Temperature-Controlled Heated Pool & Sun Deck",
      category: "14,962 SQFT OF LUXURY",
    },
    {
      src: "/assets/silver_horizon/pavilion_amphitheatre.webp",
      title: "Nature & Community",
      subtitle: "Open-Air Amphitheatre with Giant Outdoor LED Screen",
      category: "SERENITY & CONNECTION",
    },
    {
      src: "/assets/silver_horizon/grand_lobby.webp",
      title: "Grand Arrival Lobby",
      subtitle: "Triple-Height Welcoming Lounge with Mediterranean Aesthetics",
      category: "UNDERSTATED LUXURY",
    },
    {
      src: "/assets/silver_horizon/sport_basketball.webp",
      title: "Active Living Arena",
      subtitle: "Full-Sized Multipurpose Basketball & Pickleball Court",
      category: "HEALTH & MOVEMENT",
    },
    {
      src: "/assets/silver_horizon/pet_park.webp",
      title: "Dedicated Pet Park",
      subtitle: "Where Every Paw Finds Its Place Amidst 76% Open Greenery",
      category: "SERENITY & CONNECTION",
    },
    {
      src: "/assets/silver_horizon/coworking_space.webp",
      title: "Co-Working & Business Lounge",
      subtitle: "Quiet Meeting Pods, High-Speed Connectivity & Private Workstations",
      category: "14,962 SQFT SOCIAL HOUSE",
    },
    {
      src: "/assets/silver_horizon/indoor_gym.webp",
      title: "Strength & Cardio Gymnasium",
      subtitle: "State-of-the-Art Fitness Equipment with Open Landscape Views",
      category: "HEALTH & WELLNESS",
    },
    {
      src: "/assets/silver_horizon/ev_charging.webp",
      title: "Smart Living & Future Ready",
      subtitle: "EV Charging for Every Parking Space & Biometric Access",
      category: "SUSTAINABILITY",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth auto-slide every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderItems.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isPaused, sliderItems.length]);

  return (
    <section id="amenities" className="w-full py-16 sm:py-24 bg-white text-[#161A22] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header matching reference screenshot (Left large headline, Right description + Book now button) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              35+ thoughtfully curated amenities
            </h2>
          </div>

          {/* Right Description & Book Now CTA */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              From the expansive 14,962 sq.ft. Pavilion Clubhouse to active sports arenas and quiet nature trails, every space is designed around daily joy, wellness, and community warmth.
            </p>
            <div>
              <button
                onClick={onOpenBooking}
                className="bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center"
              >
                Book now
              </button>
            </div>
          </div>

        </div>

        {/* Large Smooth Auto-Sliding Image Banner matching screenshot */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] bg-[#0E172A] shadow-xl border border-gray-100 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Stack with smooth fade cross-dissolve */}
          {sliderItems.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover transform transition-transform duration-7000 ease-out scale-100 hover:scale-105"
              />
              {/* Subtle ambient bottom gradient for captions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />
            </div>
          ))}

          {/* Floating Left Slide Caption & Category Pill */}
          <div className="absolute bottom-3.5 sm:bottom-6 left-3.5 sm:left-6 z-20 flex flex-col items-start gap-1 sm:gap-1.5 text-white max-w-md pr-4">
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] font-semibold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
              {sliderItems[currentIdx].category}
            </span>
            <h3 className="text-base sm:text-2xl font-medium tracking-tight drop-shadow-md">
              {sliderItems[currentIdx].title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-normal hidden sm:block drop-shadow">
              {sliderItems[currentIdx].subtitle}
            </p>
          </div>

          {/* Slide Progress Dots */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-white/10">
            {sliderItems.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIdx(dotIdx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentIdx ? "w-5 sm:w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
