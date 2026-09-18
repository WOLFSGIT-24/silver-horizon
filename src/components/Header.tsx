import React, { useState, useEffect } from "react";

interface HeaderProps {
  onOpenBooking: () => void;
  onToggleAdmin: () => void;
  isAdminActive: boolean;
  onRequestDownload?: () => void;
}

export default function Header({ onOpenBooking, onRequestDownload }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Landmark", id: "landmark" },
    { label: "Master Plan", id: "master-plan" },
    { label: "Amenities", id: "amenities" },
    { label: "Floor Plans", id: "floor-plans" },
    { label: "Location", id: "location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090F1D]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left Brand: Clean Vector Logo */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-2 group focus:outline-none z-10"
          >
            <img
              src="/assets/silver_horizon/SH_logo.svg"
              alt="Silver Horizon Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-md group-hover:opacity-90 transition-opacity"
              width="160"
              height="64"
            />
          </a>

          {/* Center Navigation Links matching the reference structure */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-body text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}

            {/* Dropdown Menu for Extra Pages */}
            <div className="relative">
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className="flex items-center gap-1 font-body text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide cursor-pointer focus:outline-none"
              >
                <span>More</span>
                <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0E172A] rounded-xl shadow-2xl border border-white/10 py-2 animate-fade-in z-50">
                  <a
                    href="#gallery"
                    onClick={(e) => handleLinkClick(e, "gallery")}
                    className="block px-4 py-2 text-xs font-body text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Living Gallery
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Button: Sleek Dark Pill button matching the reference */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex bg-[#090F1D]/90 hover:bg-black text-white font-body text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-md cursor-pointer tracking-wide"
            >
              Get started
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer bg-[#090F1D]/60 backdrop-blur-md"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#090F1D]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 sm:p-8 space-y-4 animate-fade-in border-t border-white/10 overflow-y-auto">
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <img
              src="/assets/silver_horizon/sh_logo.svg"
              alt="Silver Horizon Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold">
              3 & 4 BHK Luxury
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="font-body text-base font-medium text-white/90 hover:text-[#C5A880] tracking-wide py-2.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#090F1D] text-white font-body text-sm font-semibold py-3.5 rounded-full border border-white/30 shadow-lg"
            >
              Book a Site Visit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
