import React, { useState } from "react";
import { ZoomIn, X, Lock } from "lucide-react";

interface MasterPlanProps {
  onSelectUnit?: (unitType: string) => void;
  onOpenBooking?: () => void;
  isUnlocked: boolean;
  onUnlockRequest: () => void;
}

export default function MasterPlan({
  onSelectUnit,
  onOpenBooking,
  isUnlocked,
  onUnlockRequest,
}: MasterPlanProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenMasterPlan = () => {
    if (!isUnlocked) {
      onUnlockRequest();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section id="master-plan" className="w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#161A22] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header matching above sections (Left headline, Right description) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 sm:mb-14">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              A masterplan designed with purpose
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              Thoughtfully configured across expansive landscaped grounds with 76% open space, pedestrian walkways, dedicated recreational zones, and seamless access to the upcoming 65 meter Peripheral Ring Road.
            </p>
            <div>
              <button
                onClick={handleOpenMasterPlan}
                className="bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
              >
                {!isUnlocked ? (
                  <>
                    <Lock className="h-4 w-4 text-[#C5A880]" />
                    <span>Unlock Master Plan</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="h-4 w-4" />
                    <span>Enlarge Master Plan</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Big Minimalist Master Plan Image Showcase Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative group overflow-hidden">
          
          {/* Main Master Plan Image Container */}
          <div
            onClick={handleOpenMasterPlan}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-[#FAF8F5] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer border border-gray-100"
          >
            <img
              src="/assets/silver_horizon/master_plan_layout.webp"
              alt="Silver Horizon Master Plan Blueprint"
              loading="lazy"
              className={`w-full h-full object-contain p-2 sm:p-6 transition-all duration-700 ease-out ${
                !isUnlocked 
                  ? "filter blur-md md:blur-lg scale-110 opacity-55 select-none pointer-events-none" 
                  : "group-hover:scale-[1.02]"
              }`}
            />

            {/* If Locked, show sleek Unlock prompt overlay */}
            {!isUnlocked ? (
              <div className="absolute inset-0 bg-[#090F1D]/30 backdrop-blur-[1px] flex items-center justify-center p-4">
                <div className="bg-[#0E172A]/90 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center text-center max-w-sm sm:max-w-md group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-3">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    Site Master Plan Blueprint
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-body mt-1.5 leading-relaxed">
                    Enter your details to instantly unlock the full master layout, 76% landscaped open zones, and regional road connectivity.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUnlockRequest();
                    }}
                    className="mt-4 bg-[#C5A880] hover:bg-[#D4BC98] text-[#0E172A] font-body text-xs font-bold uppercase tracking-wider px-7 py-3 rounded-full transition-all shadow-md cursor-pointer hover:scale-105"
                  >
                    Unlock Master Plan
                  </button>
                </div>
              </div>
            ) : (
              /* Subtle Zoom Hint on Hover when Unlocked */
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <ZoomIn className="h-4 w-4" />
                  <span>Click to expand full blueprint</span>
                </div>
              </div>
            )}
          </div>

          {/* Road Connectivity Footnotes */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#161A22]" />
              Adjoining 65 Meter (213 FT) Peripheral Ring Road / Bangalore Business Corridor
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C7A6B]" />
              Fronting 40 to 60 Feet Primary Access Road
            </span>
          </div>

        </div>

      </div>

      {/* High-Resolution Fullscreen Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full p-4 sm:p-6 relative shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#161A22] tracking-tight">
                  Silver Horizon: Site Master Plan
                </h3>
                <p className="text-xs text-gray-500">
                  76% Open Landscaped Grounds & Key Architectural Layout
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-auto flex-1 my-4 flex items-center justify-center bg-[#FAF8F5] p-2 sm:p-6 rounded-xl border border-gray-100">
              <img
                src="/assets/silver_horizon/master_plan_layout.webp"
                alt="Silver Horizon Full Master Plan"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-gray-400 hidden sm:block">
                All layouts subject to final approvals
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
