import React, { useState, useEffect } from "react";
import { Download, CheckCircle, ArrowRight } from "lucide-react";
import { LeadSubmission } from "../types";

interface BrochureFormProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  preselectedUnit?: string | null;
}

export default function BrochureForm({ onAddLead, preselectedUnit }: BrochureFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    source: "Website Landing Page",
    unitType: preselectedUnit || "3 BHK Luxury",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedUnit) {
      setFormData((prev) => ({ ...prev, unitType: preselectedUnit }));
      const el = document.getElementById("lead-capture-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preselectedUnit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    let sanitizedValue = value;
    if (id === "phone") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (id === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    }
    
    setFormData((prev) => ({ ...prev, [id]: sanitizedValue }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name should only contain letters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      onAddLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate || undefined,
        preferredTime: formData.preferredTime || undefined,
        source: formData.source,
        notes: `Unit preference: ${formData.unitType}`,
      });

      setLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const handleDownloadBrochure = () => {
    try {
      window.open("/Brochure.pdf", "_blank");
      const link = document.createElement("a");
      link.href = "/Brochure.pdf";
      link.setAttribute("download", "Silver_Horizon_Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Error downloading brochure", e);
    }
  };

  return (
    <section id="lead-capture-section" className="w-full relative min-h-[540px] md:min-h-[600px] overflow-hidden flex items-center py-10 md:py-16">
      {/* Full-bleed Background Image with tower clearly visible on the left */}
      <img
        src="/assets/silver_horizon/tower_day_view.webp"
        alt="Silver Horizon Luxury Architecture"
        className="absolute inset-0 w-full h-full object-cover object-[20%_center] sm:object-[25%_center] lg:object-[35%_center]"
        loading="lazy"
        decoding="async"
      />
      {/* Subtle right gradient overlay for card readability */}
      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-black/60 via-black/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10 flex justify-center lg:justify-end">
        {/* Floating White Card */}
        <div className="w-full max-w-[450px] bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-7 shadow-2xl border border-white/60">
          
          {!formSubmitted ? (
            <>
              <div className="mb-4 space-y-1.5">
                <h3 className="text-2xl font-normal text-[#161A22] leading-tight tracking-tight">
                  Schedule your private tour
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  Experience the 32-storey landmark, Mediterranean architectural finesse, and 14,962 sq.ft. Pavilion Clubhouse in person.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                    Full Name*
                  </label>
                  <div className="border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] focus-within:border-[#0E172A] focus-within:bg-white transition-all">
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      pattern="[A-Za-z\s]+"
                      title="Please enter letters only"
                      className="w-full bg-transparent text-xs sm:text-sm font-body outline-none placeholder:text-gray-400"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-[10px]">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                    Email Address*
                  </label>
                  <div className="border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] focus-within:border-[#0E172A] focus-within:bg-white transition-all">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent text-xs sm:text-sm font-body outline-none placeholder:text-gray-400"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-[10px]">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                    Phone Number*
                  </label>
                  <div className="flex items-center gap-2 border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] focus-within:border-[#0E172A] focus-within:bg-white transition-all">
                    <span className="text-xs font-bold text-[#0E172A] border-r border-[#E5DED3] pr-2 shrink-0">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full bg-transparent text-xs sm:text-sm font-body outline-none placeholder:text-gray-400"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-[10px]">{errors.phone}</p>}
                </div>

                {/* Unit Preference */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                    Residence Preference
                  </label>
                  <select
                    id="unitType"
                    value={formData.unitType}
                    onChange={handleChange}
                    className="w-full border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] text-xs sm:text-sm font-body outline-none focus:border-[#0E172A] focus:bg-white"
                  >
                    <option value="3 BHK (1890 - 2015 SQFT)">3 BHK Residences (1890 – 2015 SQFT)</option>
                    <option value="4 BHK Duplex (2975 - 3480 SQFT)">4 BHK Duplex Sky Collection (32nd Floor)</option>
                    <option value="Both Options">Explore All Configurations</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold tracking-wide py-3.5 rounded-full shadow-md disabled:opacity-50 cursor-pointer transition-all hover:scale-[1.01] active:scale-98"
                  >
                    {loading ? (
                      <>
                        <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Connecting...</span>
                      </>
                    ) : (
                      <>
                        <span>Schedule private visit</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-[10px] text-[#4A5260] font-body pt-0.5">
                  Verified SSL Encryption • Direct from GreenEdge Infracon
                </p>
              </form>
            </>
          ) : (
              <div className="text-center py-6 space-y-5 animate-fade-in">
                <div className="h-14 w-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm">
                  <CheckCircle className="h-7 w-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0E172A]">
                    Registration Confirmed
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#4A5260] leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. The Silver Horizon catalog and layout details are ready.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={handleDownloadBrochure}
                    className="flex items-center justify-center gap-2 bg-[#0E172A] hover:bg-[#1E2D4A] text-[#EFE4D2] font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    <Download className="h-4 w-4 text-[#C5A880]" />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="border border-[#0E172A] text-[#0E172A] hover:bg-[#0E172A] hover:text-white font-body text-xs font-bold tracking-widest uppercase px-5 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    NEW INQUIRY
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
