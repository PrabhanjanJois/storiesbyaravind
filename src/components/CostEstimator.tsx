"use client";

import React, { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

import { CustomServiceTag, CustomEventTag } from "@/data/defaultData";

interface CostEstimatorProps {
  tag: string;
  heading: string;
  sub: string;
  whatsappNumber: string;
  customServiceTags?: CustomServiceTag[];
  customEventTags?: CustomEventTag[];
}

export default function CostEstimator({
  tag,
  heading,
  sub,
  whatsappNumber,
  customServiceTags,
  customEventTags,
}: CostEstimatorProps) {
  const [days, setDays] = useState<number>(1);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    "Muhurtham & Sacred Rituals",
  ]);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    "Candid Photography",
    "Traditional Photography",
    "Luxury Handcrafted Album",
  ]);

  const defaultEvents: CustomEventTag[] = [
    { id: "muhurtham", name: "Muhurtham & Sacred Rituals", base: 18000 },
    { id: "reception", name: "Reception & Evening Sangeet", base: 15000 },
    { id: "haldi", name: "Haldi & Mehendi Ceremony", base: 12000 },
    { id: "prewedding", name: "Hampi Heritage Pre-Wedding", base: 20000 },
    { id: "traditional", name: "Maternity / Birthday / Gruhapravesha", base: 14000 },
  ];

  const defaultDeliverables: CustomServiceTag[] = [
    { id: "candid", name: "Candid Photography", tag: "Candid", price: 8000, desc: "Unscripted documentary captures of raw emotions, laughter, and tearful blessings." },
    { id: "traditional", name: "Traditional Photography", tag: "Traditional", price: 6000, desc: "Crisply lit stage rituals, formal family line-ups, and sacred pooja ceremonies." },
    { id: "film", name: "Cinematic 4K Highlight Film & Reels", tag: "Cinematic 4K", price: 15000, desc: "Color-graded movie-style teaser film, 60s Instagram reels, and master video." },
    { id: "drone", name: "Drone Aerial Cinematography", tag: "Drone Aerial", price: 7000, desc: "Grand panoramic bird's-eye views of the temple mantapa, baraat, and landscape." },
    { id: "album", name: "Luxury Handcrafted Album (30-40 Sheets)", tag: "Handcrafted Album", price: 9000, desc: "Hardbound, premium silk matte lay-flat memory album with personalized leather box." },
  ];

  const availableEvents = (customEventTags && customEventTags.length > 0) ? customEventTags : defaultEvents;
  const availableDeliverables = (customServiceTags && customServiceTags.length > 0) ? customServiceTags : defaultDeliverables;

  const toggleEvent = (name: string) => {
    setSelectedEvents((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    );
  };

  const toggleDeliverable = (name: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  // Calculate estimated price range
  const calculateEstimate = () => {
    let total = 0;
    availableEvents.forEach((ev) => {
      if (selectedEvents.includes(ev.name)) {
        total += ev.base;
      }
    });

    availableDeliverables.forEach((del) => {
      if (selectedDeliverables.includes(del.name)) {
        total += del.price;
      }
    });

    // Multi-day scaling factor
    if (days === 2) total *= 1.45;
    if (days >= 3) total *= 1.85;

    if (total === 0) return { min: "₹15,000", max: "₹25,000" };

    const min = Math.round(total * 0.9 / 1000) * 1000;
    const max = Math.round(total * 1.15 / 1000) * 1000;
    return {
      min: `₹${min.toLocaleString("en-IN")}`,
      max: `₹${max.toLocaleString("en-IN")}`,
    };
  };

  const estimate = calculateEstimate();

  const handleWhatsAppInquiry = () => {
    const text = `Namaskara Arvind!
I used your website's Custom Package Estimator:

📅 Event Duration: ${days} Day(s)
🎉 Selected Events: ${selectedEvents.join(", ") || "None specified"}
📦 Deliverables: ${selectedDeliverables.join(", ") || "Standard"}
💰 Estimated Range: ${estimate.min} – ${estimate.max}

Could you please confirm your availability and provide an exact quotation?`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-white border-t border-espresso/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-linen border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
            {tag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
            {heading}
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            {sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 bg-linen/60 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-espresso/10">
            {/* Step 1: Duration */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal block mb-3">
                1. Select Celebration Days
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[1, 2, 3].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-semibold transition cursor-pointer text-center ${
                      days === d
                        ? "bg-espresso text-linen border-espresso shadow-sm"
                        : "bg-white text-espresso border-espresso/15 hover:border-terracotta/50"
                    }`}
                  >
                    {d} {d === 1 ? "Day Event" : "Days Event"}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Events */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal block mb-3">
                2. Select Your Specific Events & Rituals
              </label>
              <div className="space-y-2.5">
                {availableEvents.map((ev) => {
                  const isChecked = selectedEvents.includes(ev.name);
                  return (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => toggleEvent(ev.name)}
                      className={`w-full p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? "bg-white border-terracotta text-espresso shadow-xs ring-1 ring-terracotta/20"
                          : "bg-white/60 border-espresso/10 text-charcoal/80 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                            isChecked
                              ? "bg-terracotta text-white"
                              : "border border-espresso/20 bg-linen"
                          }`}
                        >
                          {isChecked && "✓"}
                        </div>
                        <span className="text-sm font-medium">{ev.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-charcoal/70 bg-linen px-2 py-0.5 rounded-md ml-2 shrink-0">
                        From ₹{ev.base.toLocaleString("en-IN")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Deliverables & Add-on Services */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal block mb-3">
                3. Choose Deliverables & Crew Needs
              </label>
              <div className="space-y-2.5">
                {availableDeliverables.map((del) => {
                  const isChecked = selectedDeliverables.includes(del.name);
                  return (
                    <button
                      key={del.id}
                      type="button"
                      onClick={() => toggleDeliverable(del.name)}
                      className={`w-full p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? "bg-white border-terracotta text-espresso shadow-xs ring-1 ring-terracotta/20"
                          : "bg-white/60 border-espresso/10 text-charcoal/80 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                            isChecked
                              ? "bg-terracotta text-white"
                              : "border border-espresso/20 bg-linen"
                          }`}
                        >
                          {isChecked && "✓"}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-espresso">{del.name}</span>
                            {del.tag && (
                              <span className="text-[10px] bg-terracotta/10 border border-terracotta/20 text-terracotta font-bold px-2 py-0.5 rounded-full uppercase">
                                {del.tag}
                              </span>
                            )}
                          </div>
                          {del.desc && (
                            <p className="text-[11px] text-charcoal/70 font-light mt-0.5 hidden sm:block">
                              {del.desc}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="text-xs font-bold text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-md">
                          +₹{del.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Sticky Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-espresso text-linen p-7 sm:p-8 rounded-3xl border border-terracotta/30 shadow-2xl space-y-6">
              <div className="border-b border-linen/15 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Estimated Investment Range
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {estimate.min} – {estimate.max}
                </div>
                <p className="text-xs text-linen/70 mt-1 font-light">
                  Tailored specifically for {days} day(s) with {selectedEvents.length} event(s)
                </p>
              </div>

              {/* Summary Checklist */}
              <div className="space-y-3 text-xs text-linen/85">
                <div className="font-bold uppercase tracking-wider text-amber-300/90 text-[11px]">
                  Included in this Estimate:
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta">✓</span>
                    <span>Arvind&apos;s direct presence as lead storyteller</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta">✓</span>
                    <span>All raw JPEG files delivered within 3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta">✓</span>
                    <span>Curated sneak peeks within 3-5 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta">✓</span>
                    <span>Color-grading & signature retouches</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full bg-terracotta hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                  <span>Lock Quote via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-linen/60 mt-2.5">
                  Sends this exact configuration directly to Arvind&apos;s phone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
