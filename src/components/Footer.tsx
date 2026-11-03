import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { projectSnapshot } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#090F1D] text-white pt-14 sm:pt-20 pb-36 md:pb-16 border-t border-white/10 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Top Minimal Brand & CTA Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-10 sm:pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-xl">
            <img
              src="/assets/silver_horizon/SH_logo.svg"
              alt="Silver Horizon"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-normal text-white/90 tracking-tight leading-snug">
              A new benchmark in elevated living. 32 storeys of curated Mediterranean luxury.
            </p>
          </div>

          <div>
            <button
              onClick={() => handleScrollTo("lead-capture-section")}
              className="bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center gap-2"
            >
              <span>Book a private tour</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Middle Clean 3-Column Info Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 sm:py-14 border-b border-white/10">
          
          {/* Col 1: Address & Developer */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-gray-400 block">
              Project Location
            </span>
            <p className="text-sm text-white/80 leading-relaxed">
              {projectSnapshot.address}
            </p>
            <p className="text-xs text-gray-400">
              Developed by <strong className="text-white font-medium">GreenEdge Infracon</strong>
            </p>
            <p className="text-xs text-[#C5A880] font-mono tracking-wide pt-0.5">
              RERA: {projectSnapshot.reraNumber}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-gray-400 block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
              {[
                { label: "Overview", id: "overview" },
                { label: "Amenities", id: "amenities" },
                { label: "Master Plan", id: "master-plan" },
                { label: "Floor Plans", id: "floor-plans" },
                { label: "Location", id: "location" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-gray-400 block">
              Contact
            </span>
            <div className="space-y-2 text-sm text-white/80">
              <a
                href={`tel:${projectSnapshot.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-white/60 shrink-0" />
                <span>{projectSnapshot.phonePrimary}</span>
              </a>
              <a
                href={`mailto:${projectSnapshot.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-white/60 shrink-0" />
                <span>{projectSnapshot.email}</span>
              </a>
              <p className="flex items-start gap-2 text-white/70 text-xs pt-1">
                <MapPin className="h-4 w-4 text-white/60 shrink-0 mt-0.5" />
                <span>Adjoining upcoming 65M Peripheral Ring Road</span>
              </p>
            </div>
          </div>

        </div>

        {/* RERA Approval Strip */}
        <div className="my-8 py-4 px-5 sm:px-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse shrink-0" />
            <span className="text-white/70 font-medium">Karnataka RERA Registration No:</span>
            <strong className="text-white font-mono tracking-wider font-semibold text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
              {projectSnapshot.reraNumber}
            </strong>
          </div>
          <span className="text-[11px] text-white/50">
            Available at{" "}
            <a
              href="https://rera.karnataka.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A880] hover:underline font-medium"
            >
              rera.karnataka.gov.in
            </a>
          </span>
        </div>

        {/* Bottom Compliance & Legal Row */}
        <div className="pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50 border-t border-white/5">
          <div>
            <p className="text-[11px] text-white/40 max-w-2xl">
              All plans, images, and dimensions are for conceptual illustration purposes only and subject to regulatory approvals. RERA No: {projectSnapshot.reraNumber}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span>© {new Date().getFullYear()} GreenEdge Infracon</span>
            <span>•</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
