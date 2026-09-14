import React, { useState, useEffect, Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { LeadSubmission } from "./types";
import { projectSnapshot } from "./data";

// Lazy-load below-the-fold components to maximize mobile FCP / LCP performance
const IntimateScale = lazy(() => import("./components/IntimateScale"));
const ProjectHighlights = lazy(() => import("./components/ProjectHighlights"));
const Amenities = lazy(() => import("./components/Amenities"));
const MasterPlan = lazy(() => import("./components/MasterPlan"));
const FloorPlans = lazy(() => import("./components/FloorPlans"));
const Specifications = lazy(() => import("./components/Specifications"));
const Location = lazy(() => import("./components/Location"));
const BrochureForm = lazy(() => import("./components/BrochureForm"));
const Footer = lazy(() => import("./components/Footer"));
const Gallery = lazy(() => import("./components/Gallery"));

// Lazy load dialog modals to reduce initial JavaScript execution
const BookingModal = lazy(() => import("./components/BookingModal"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const PrivacyPolicyModal = lazy(() => import("./components/PrivacyPolicyModal"));
const TermsModal = lazy(() => import("./components/TermsModal"));
const OfferModal = lazy(() => import("./components/OfferModal"));
const DownloadModal = lazy(() => import("./components/DownloadModal"));

const LOCAL_STORAGE_KEY = "silver_horizon_leads";

export default function App() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [preselectedUnit, setPreselectedUnit] = useState<string | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [triggerDownload, setTriggerDownload] = useState(false);
  const [floorPlansUnlocked, setFloorPlansUnlocked] = useState(() => {
    try {
      return localStorage.getItem("silver_horizon_floor_plans_unlocked") === "true";
    } catch {
      return false;
    }
  });

  // Read initial cache
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        const initialSeeds = generateMockLeads();
        setLeads(initialSeeds);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialSeeds));
      }
    } catch (e) {
      console.error("Error reading localized storage cache", e);
    }
  }, []);

  const saveLeadsToCache = (newLeads: LeadSubmission[]) => {
    setLeads(newLeads);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLeads));
    } catch (e) {
      console.error("Error saving lead entries to localized storage", e);
    }
  };

  const handleAddLead = (rawLead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => {
    const isoTimestamp = new Date().toISOString();
    const localTimestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    
    const newLead: LeadSubmission = {
      ...rawLead,
      id: "SH-" + Math.floor(1000 + Math.random() * 9000),
      submittedAt: isoTimestamp,
      status: "Pending",
    };

    // Post to Make.com Webhook if configured
    fetch("https://hook.us1.make.com/2bmmq21zo8ocu9itedtq5oyhu5sg5zad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project: "Silver Horizon",
        developer: "GreenEdge Infracon",
        id: newLead.id,
        fullName: newLead.fullName,
        email: newLead.email,
        phone: newLead.phone,
        source: newLead.source,
        notes: newLead.notes || "",
        submittedAt: isoTimestamp,
        localTimestamp: localTimestamp,
        status: newLead.status,
      }),
    }).catch((err) => {
      console.error("Webhook submission failed:", err);
    });

    const updated = [newLead, ...leads];
    saveLeadsToCache(updated);
    try {
      localStorage.setItem("silver_horizon_floor_plans_unlocked", "true");
    } catch (e) {
      console.error(e);
    }
    setFloorPlansUnlocked(true);

    if (triggerDownload) {
      try {
        window.open("/Brochure.pdf", "_blank");
        const link = document.createElement("a");
        link.href = "/Brochure.pdf";
        link.setAttribute("download", "Silver_Horizon_Brochure.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error("Error triggering PDF download", e);
      }
      setTriggerDownload(false);
    }
  };

  const handleRequestDownload = () => {
    setTriggerDownload(true);
    setDownloadModalOpen(true);
  };

  const handleUpdateStatus = (id: string, status: LeadSubmission["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    saveLeadsToCache(updated);
  };

  const handleClearLeads = () => {
    saveLeadsToCache([]);
  };

  const handleAddMockLeads = () => {
    const extraSeeds = generateMockLeads();
    saveLeadsToCache([...extraSeeds, ...leads]);
  };

  const handleSelectUnitType = (unitType: string) => {
    setPreselectedUnit(unitType);
    setOfferOpen(true);
  };

  const handleHeroEnquiry = () => {
    setOfferOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#090F1D] text-[#161A22] overflow-x-hidden w-full font-body">
      {/* Upper Navigation Header */}
      <Header
        onOpenBooking={() => {
          setPreselectedUnit(null);
          setOfferOpen(true);
        }}
        onToggleAdmin={() => setAdminOpen(!adminOpen)}
        isAdminActive={adminOpen}
        onRequestDownload={handleRequestDownload}
      />

      {/* Hero Entrance Banner */}
      <Hero
        onOpenEnquiry={handleHeroEnquiry}
        onRequestDownload={handleRequestDownload}
      />

      {/* Below-the-fold sections loaded asynchronously */}
      <Suspense fallback={<div className="min-h-screen bg-[#090F1D]" />}>
        {/* Property Architecture & Landmark Overview */}
        <IntimateScale 
          onRequestDownload={handleRequestDownload} 
          onOpenEnquiry={handleHeroEnquiry}
        />

        {/* Project Highlights 8-Key Stats Grid */}
        <ProjectHighlights
          onRequestDownload={handleRequestDownload}
          onOpenBooking={handleHeroEnquiry}
        />

        {/* Integrated Architectural Master Plan */}
        <MasterPlan 
          onSelectUnit={handleSelectUnitType} 
          onOpenBooking={handleHeroEnquiry}
        />

        {/* Curated Amenities Showcase (Clubhouse, Sports, Nature, Smart Living) */}
        <Amenities 
          onOpenBooking={handleHeroEnquiry} 
          onRequestDownload={handleRequestDownload}
        />

        {/* Interactive Floor Drafting Plans (Units 01-07, 4 BHK Duplex) */}
        <FloorPlans 
          onSelectUnit={handleSelectUnitType} 
          isUnlocked={floorPlansUnlocked}
          onUnlockRequest={() => setBookingOpen(true)}
          onOpenBooking={handleHeroEnquiry}
        />

        {/* Comprehensive Premium & Room Specifications */}
        <Specifications />

        {/* Visual Living Spaces Gallery */}
        <Gallery />

        {/* Location Connectivity Grid & Regional Infrastructure */}
        <Location onOpenEnquiry={handleHeroEnquiry} />

        {/* Brochure / Lead Intake Form Section */}
        <BrochureForm 
          onAddLead={handleAddLead} 
          preselectedUnit={preselectedUnit} 
        />

        {/* Global Footer */}
        <Footer 
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
          onOpenBooking={handleHeroEnquiry}
          onRequestDownload={handleRequestDownload}
        />
      </Suspense>

      {/* Legal & CRM Modals - Conditionally Loaded via Suspense */}
      <Suspense fallback={null}>
        {bookingOpen && (
          <BookingModal
            isOpen={bookingOpen}
            onClose={() => {
              setBookingOpen(false);
              setPreselectedUnit(null);
            }}
            onAddLead={handleAddLead}
            initialUnitType={preselectedUnit}
          />
        )}

        {downloadModalOpen && (
          <DownloadModal
            isOpen={downloadModalOpen}
            onClose={() => setDownloadModalOpen(false)}
            onAddLead={handleAddLead}
          />
        )}

        {adminOpen && (
          <AdminDashboard
            isOpen={adminOpen}
            onClose={() => setAdminOpen(false)}
            leads={leads}
            onUpdateStatus={handleUpdateStatus}
            onClearLeads={handleClearLeads}
            onAddMockLeads={handleAddMockLeads}
          />
        )}

        {privacyOpen && (
          <PrivacyPolicyModal 
            isOpen={privacyOpen} 
            onClose={() => setPrivacyOpen(false)} 
          />
        )}

        {termsOpen && (
          <TermsModal 
            isOpen={termsOpen} 
            onClose={() => setTermsOpen(false)} 
          />
        )}

        {offerOpen && (
          <OfferModal
            isOpen={offerOpen}
            onClose={() => setOfferOpen(false)}
            onAddLead={handleAddLead}
          />
        )}
      </Suspense>
    </div>
  );
}

function generateMockLeads(): LeadSubmission[] {
  return [];
}
