import React, { useEffect } from "react";
import { X } from "lucide-react";
import { projectSnapshot } from "../data";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#090F1D]/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-[#E5DED3] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-[#E5DED3] bg-[#FAF8F5] shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#0E172A] font-bold">Terms & Conditions</h2>
            <p className="font-body text-xs text-[#A88758] mt-1 uppercase tracking-widest font-semibold">
              Silver Horizon by GreenEdge Infracon
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E5DED3] text-[#4A5260] hover:text-[#0E172A] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-[#4A5260] leading-relaxed space-y-6">
          <p>
            Welcome to the official digital portal for <strong>Silver Horizon</strong>, developed by <strong>GreenEdge Infracon</strong>. By accessing this portal, you agree to comply with the terms and statutory guidelines outlined herein.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">1. Project Representation</h3>
            <p>
              Silver Horizon is a 32 storey residential landmark comprising 3 & 4 BHK residences and sky duplexes situated at KhajiSonnenahalli, Bidarahalli Hobli, Bangalore East. All architectural representations, master plans, floor layouts, and 3D visual renderings are artistic impressions.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">2. Statutory Compliance & Approvals</h3>
            <p>
              The project is sanctioned with BDA Approval, Environmental Clearances (SEIAA), KSPCB, Fire Safety NOC, and Karnataka RERA Registration. All dimensions adhere to RERA carpet area standards.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">3. Contact & Inquiries</h3>
            <ul className="list-none space-y-1.5 text-xs text-[#161A22] bg-[#FAF8F5] p-4 rounded-xl border border-[#E5DED3]">
              <li><strong>Developer:</strong> GreenEdge Infracon</li>
              <li><strong>Contact:</strong> {projectSnapshot.phonePrimary} / {projectSnapshot.phoneSecondary}</li>
              <li><strong>Email:</strong> {projectSnapshot.email}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#E5DED3] bg-[#FAF8F5] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-[#0E172A] text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-[#1E2D4A] transition-colors cursor-pointer"
          >
            I Agree & Understand
          </button>
        </div>
      </div>
    </div>
  );
}
