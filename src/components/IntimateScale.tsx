import React, { useState, useEffect, useRef } from "react";
import { 
  Building2, 
  Activity, 
  Trees, 
  Cpu, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Compass
} from "lucide-react";
import { projectSnapshot } from "../data";

interface IntimateScaleProps {
  onRequestDownload?: () => void;
  onOpenEnquiry?: () => void;
}

export default function IntimateScale({ onRequestDownload, onOpenEnquiry }: IntimateScaleProps) {
  // 4 Cards directly using original brochure content & relevant icons
  const initialCards = [
    {
      id: "pavilion-clubhouse",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-[#2D2824] shadow-sm">
          <Building2 className="h-5 w-5" />
        </div>
      ),
      title: "The Pavilion: Social House",
      description: "Designed as an exclusive retreat for leisure, wellness, and connection, bringing together 14,962 sq.ft. of curated amenities.",
    },
    {
      id: "active-living",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-[#2D2824] shadow-sm">
          <Activity className="h-5 w-5" />
        </div>
      ),
      title: "Designed for Active Living",
      description: "Basketball, pickleball, futsal, cricket practice net, and cycling zones encourage movement and fitness for all ages.",
    },
    {
      id: "nature-experience",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-[#2D2824] shadow-sm">
          <Trees className="h-5 w-5" />
        </div>
      ),
      title: "Nature as an Everyday Experience",
      description: "Aroma gardens, reflexology paths, dedicated pet park, and 76% landscaped greens make nature part of daily life.",
    },
    {
      id: "smart-future",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-[#2D2824] shadow-sm">
          <Cpu className="h-5 w-5" />
        </div>
      ),
      title: "Smart Living & Built for the Future",
      description: "Biometric access, EV charging for every parking space, solar power, softened water, and rainwater harvesting.",
    },
  ];

  // Dynamic circular queue so first card is ALWAYS immediately after the last card
  const [cards, setCards] = useState(initialCards);
  const [isSliding, setIsSliding] = useState(false);
  const [isPrevPrep, setIsPrevPrep] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCard = () => {
    if (isSliding || isPrevPrep) return;
    setIsSliding(true);
  };

  const prevCard = () => {
    if (isSliding || isPrevPrep) return;
    // Move last card to front and jump track offset without animation
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setIsPrevPrep(true);
  };

  // Re-enable smooth slide to 0 on prev click
  useEffect(() => {
    if (isPrevPrep) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsPrevPrep(false);
          setIsSliding(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isPrevPrep]);

  // Smooth auto-scroll every 3.8s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!isSliding && !isPrevPrep) {
        setIsSliding(true);
      }
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, isSliding, isPrevPrep]);

  const handleTransitionEnd = () => {
    if (isSliding) {
      if (!isPrevPrep) {
        // Shift first card to end so the ring continues infinitely
        setCards((prev) => [...prev.slice(1), prev[0]]);
      }
      setIsSliding(false);
    }
  };

  // Display array has duplicate so incoming cards are always rendered
  const visibleCards = [...cards, ...cards];

  // Bottom Auto-Scrolling Images
  const autoScrollImages = [
    {
      src: "/assets/silver_horizon/hero_modern_sky.webp",
      alt: "Mediterranean Architectural Landmark",
    },
    {
      src: "/assets/silver_horizon/grand_lobby.webp",
      alt: "Grand Arrival Lobby",
    },
    {
      src: "/assets/silver_horizon/living_room_skyline.webp",
      alt: "10 Foot Ceiling Living Room",
    },
    {
      src: "/assets/silver_horizon/balcony_sunset_panorama.webp",
      alt: "Sunset Sky Balcony",
    },
    {
      src: "/assets/silver_horizon/duplex_staircase.webp",
      alt: "32nd Floor Duplex Spiral Staircase",
    },
    {
      src: "/assets/silver_horizon/indoor_pool.webp",
      alt: "Indoor Temperature Controlled Pool",
    },
    {
      src: "/assets/silver_horizon/pavilion_amphitheatre.webp",
      alt: "The Pavilion Outdoor Amphitheatre",
    },
    {
      src: "/assets/silver_horizon/pet_park.webp",
      alt: "Dedicated Pet Park",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header Grid matching reference screenshot typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              A new benchmark in elevated living
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              A select few redefine everyday living. Silver Horizon brings together Mediterranean inspired architecture, expansive residences, and curated experiences into one remarkable address.
            </p>
          </div>

        </div>

        {/* Middle Feature Cards Infinite Slider */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Empty left column offset to align with headline */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Right Cards Slider Container */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Slider Navigation Arrows */}
            <div className="flex justify-end items-center gap-2 pb-1">
              <button
                onClick={prevCard}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Previous card"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextCard}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Next card"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Sliding Cards Track with Infinite Circular Ring */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 select-none py-1"
                style={{
                  transform: isPrevPrep
                    ? isMobile
                      ? "translateX(calc(-100% - 24px))"
                      : "translateX(calc(-50% - 12px))"
                    : isSliding
                    ? isMobile
                      ? "translateX(calc(-100% - 24px))"
                      : "translateX(calc(-50% - 12px))"
                    : "translateX(0px)",
                  transition: isPrevPrep ? "none" : isSliding ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {visibleCards.map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    className="w-full sm:w-[calc(50%-12px)] shrink-0 space-y-3"
                  >
                    {card.icon}
                    <h4 className="text-base sm:text-lg font-medium text-[#161A22] tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-body leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sleek Dark Pill Explore Button */}
            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
              >
                Explore
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Full-Width Horizontal Auto-Scrolling Image Gallery */}
      <style>{`
        @keyframes autoScrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-autoscroll {
          display: flex;
          width: max-content;
          animation: autoScrollMarquee 35s linear infinite;
        }
        .animate-autoscroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden relative pt-2">
        <div className="animate-autoscroll gap-6 px-6">
          {[...autoScrollImages, ...autoScrollImages].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[620px] aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#FAF8F5] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
