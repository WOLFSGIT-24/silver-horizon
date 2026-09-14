import React, { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, ZoomIn, Lock, X } from "lucide-react";
import { floorPlansData } from "../data";
import { FloorPlanUnit } from "../types";

interface FloorPlansProps {
  onSelectUnit: (unitType: string) => void;
  isUnlocked: boolean;
  onUnlockRequest: () => void;
  onOpenBooking?: () => void;
}

export default function FloorPlans({
  onSelectUnit,
  isUnlocked,
  onUnlockRequest,
  onOpenBooking,
}: FloorPlansProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<FloorPlanUnit | null>(null);

  // Residence cards with exact floor plan blueprint images and brochure data
  const residenceCards = [
    {
      unitData: floorPlansData[0], // Unit 01
      image: "/assets/silver_horizon/unit_plan_01.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 01 Residence",
      location: "West Facing • 10-Ft Ceilings",
      sizeBadge: "1,890 SQFT",
    },
    {
      unitData: floorPlansData[1], // Unit 02
      image: "/assets/silver_horizon/unit_plan_02.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 02 Residence",
      location: "North Facing • Daylight Deck",
      sizeBadge: "1,990 SQFT",
    },
    {
      unitData: floorPlansData[2], // Unit 03
      image: "/assets/silver_horizon/unit_plan_03.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 03 Grand",
      location: "North Facing • Lalbagh View",
      sizeBadge: "2,015 SQFT",
    },
    {
      unitData: floorPlansData[3], // Unit 04
      image: "/assets/silver_horizon/unit_plan_04.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 04 Corner",
      location: "North Facing • Triple Airflow",
      sizeBadge: "1,905 SQFT",
    },
    {
      unitData: floorPlansData[4], // Unit 05
      image: "/assets/silver_horizon/unit_plan_05.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 05 East",
      location: "East Facing • Morning Sun",
      sizeBadge: "1,990 SQFT",
    },
    {
      unitData: floorPlansData[5] || floorPlansData[0], // Unit 06
      image: "/assets/silver_horizon/unit_plan_06.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 06 East",
      location: "East Facing • Buffer Separation",
      sizeBadge: "1,975 SQFT",
    },
    {
      unitData: floorPlansData[6] || floorPlansData[0], // Unit 07
      image: "/assets/silver_horizon/unit_plan_07.png",
      tag: "3 Bedrooms / 3 Bath",
      name: "Unit 07 East",
      location: "East Facing • Vastu Compliant",
      sizeBadge: "1,985 SQFT",
    },
    {
      unitData: floorPlansData[7] || floorPlansData[0], // Typical Floor Plate
      image: "/assets/silver_horizon/typical_floor_plate.png",
      tag: "7 Units / Floor Plate",
      name: "Typical Tower Plate",
      location: "G + 32 Storeys • 4 High-Speed Lifts",
      sizeBadge: "Master Layout",
    },
  ];

  const totalCards = residenceCards.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalCards - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 2 : prev - 1));
  };

  const handleCardClick = (plan: FloorPlanUnit) => {
    if (!isUnlocked) {
      onUnlockRequest();
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <section id="floor-plans" className="w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#161A22] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              Explore your dream residence
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              Expansive 3 & 4 BHK residences and 32nd-floor sky duplexes crafted with 10-foot ceiling heights, three-side ventilation, and sunlit private decks.
            </p>
            <div>
              <button
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                  else onUnlockRequest();
                }}
                className="bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center"
              >
                View all floor plans
              </button>
            </div>
          </div>

        </div>

        {/* Sliding Portrait Cards Track matching screenshot */}
        <div className="relative overflow-hidden pb-4">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (typeof window !== "undefined" && window.innerWidth < 640 ? 88 : window.innerWidth < 1024 ? 46 : 32.5)}%)`,
            }}
          >
            {residenceCards.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(item.unitData)}
                className="w-[85vw] sm:w-[44vw] lg:w-[calc(33.333%-16px)] shrink-0 aspect-[4/5] sm:aspect-[3/4] relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group bg-white border border-gray-200/80 flex flex-col justify-between p-4 sm:p-5"
              >
                {/* Top-Right Floating Pill Badge */}
                <div className="relative z-10 flex justify-end">
                  <span className="bg-[#0E172A] text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Floor Plan Blueprint Image Container */}
                <div className="absolute inset-0 flex items-center justify-center p-6 pt-12 pb-24 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Floating Card matching screenshot */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-200/60 flex items-center justify-between gap-3 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-medium text-[#161A22] tracking-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5 truncate">
                      <MapPin className="h-3.5 w-3.5 text-[#161A22] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>

                  <div className="shrink-0 bg-[#E8E1CE] text-[#42392E] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs">
                    {item.sizeBadge}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Centered Circular Arrow Navigation Controls matching screenshot */}
        <div className="flex justify-center items-center gap-3 pt-8 sm:pt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous residences"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next residences"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>

      {/* Blueprint Detail & Dimension Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 flex flex-col gap-6 relative shadow-2xl max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-2xl font-normal text-[#161A22] tracking-tight">
                  {selectedPlan.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase mt-0.5">
                  SBUA: {selectedPlan.sbua} • Carpet Area: {selectedPlan.carpetArea} ({selectedPlan.facing})
                </p>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[48vh] p-4 bg-[#FAF8F5] rounded-2xl border border-gray-100 flex items-center justify-center overflow-auto">
              <img
                src={selectedPlan.imageUrl}
                alt={selectedPlan.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Key Architectural Inclusions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {selectedPlan.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body border-t border-gray-100 pt-4">
              <span className="text-gray-400 italic">
                *Dimension standards adhere to RERA carpet guidelines.
              </span>
              <button
                onClick={() => {
                  onSelectUnit(selectedPlan.type);
                  setSelectedPlan(null);
                }}
                className="bg-black hover:bg-neutral-800 text-white font-body text-xs font-semibold tracking-wide px-8 py-3 rounded-full transition-all shadow-md cursor-pointer"
              >
                Request Unit Pricing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
