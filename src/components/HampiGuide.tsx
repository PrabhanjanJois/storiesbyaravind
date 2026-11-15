"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { HampiLocationItem } from "@/data/defaultData";

interface HampiGuideProps {
  tag: string;
  heading: string;
  sub: string;
  locations: HampiLocationItem[];
  onSelectShoot: (shootTitle: string) => void;
}

export default function HampiGuide({
  tag,
  heading,
  sub,
  locations,
  onSelectShoot,
}: HampiGuideProps) {
  const [activeLocId, setActiveLocId] = useState<number>(locations[0]?.id || 1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalLoc, setModalLoc] = useState<HampiLocationItem | null>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const selectedLoc = locations.find((l) => l.id === activeLocId) || locations[0];

  const handleOpenExplore = (loc: HampiLocationItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveLocId(loc.id);
    setModalLoc(loc);
    setIsModalOpen(true);
  };

  const handleTabClick = (loc: HampiLocationItem) => {
    setActiveLocId(loc.id);
    if (spotlightRef.current) {
      spotlightRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleNextSpot = () => {
    if (!modalLoc || locations.length === 0) return;
    const currentIndex = locations.findIndex((l) => l.id === modalLoc.id);
    const nextIndex = (currentIndex + 1) % locations.length;
    setModalLoc(locations[nextIndex]);
    setActiveLocId(locations[nextIndex].id);
  };

  const handlePrevSpot = () => {
    if (!modalLoc || locations.length === 0) return;
    const currentIndex = locations.findIndex((l) => l.id === modalLoc.id);
    const prevIndex = (currentIndex - 1 + locations.length) % locations.length;
    setModalLoc(locations[prevIndex]);
    setActiveLocId(locations[prevIndex].id);
  };

  return (
    <section id="hampi-guide" className="py-20 md:py-28 bg-ivory/40 border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Location Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {locations.map((loc, idx) => {
            const isActive = loc.id === activeLocId;
            return (
              <div
                key={loc.id}
                onClick={() => handleTabClick(loc)}
                className={`p-4 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-espresso text-linen border-espresso shadow-md ring-2 ring-terracotta/30"
                    : "bg-white text-espresso border-espresso/10 hover:border-terracotta/40"
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      isActive ? "text-amber-400" : "text-terracotta"
                    }`}
                  >
                    Spot 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold leading-tight">
                    {loc.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleOpenExplore(loc, e)}
                  className={`text-xs mt-3 font-semibold flex items-center justify-between gap-1 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    isActive
                      ? "bg-linen text-espresso hover:bg-white shadow-xs"
                      : "bg-espresso/5 text-espresso hover:bg-terracotta hover:text-white"
                  }`}
                >
                  <span>Explore view</span>
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Location Feature Card */}
        {selectedLoc && (
          <div
            ref={spotlightRef}
            className="bg-white rounded-3xl border border-espresso/10 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 scroll-mt-24"
          >
            {/* Visual Column */}
            <div
              onClick={() => handleOpenExplore(selectedLoc)}
              className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[340px] bg-espresso/5 cursor-pointer group"
            >
              <Image
                src={selectedLoc.image}
                alt={selectedLoc.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-1 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                      {selectedLoc.tagline}
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white font-medium flex items-center gap-1 group-hover:bg-terracotta transition">
                      🔍 Tap to Open Full View
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    {selectedLoc.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta bg-linen px-3 py-1 rounded-full border border-terracotta/20 inline-block">
                    Local Photography Secret
                  </span>
                  <p className="text-charcoal/90 text-sm sm:text-base leading-relaxed font-light">
                    {selectedLoc.description}
                  </p>
                </div>

                {/* Info Points */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <div className="bg-linen p-3.5 rounded-xl border border-espresso/5 flex items-start gap-3">
                    <span className="text-lg">⏰</span>
                    <div>
                      <span className="font-bold text-espresso block">Optimal Lighting Time</span>
                      <span className="text-charcoal/80">{selectedLoc.bestTime}</span>
                    </div>
                  </div>

                  <div className="bg-linen p-3.5 rounded-xl border border-espresso/5 flex items-start gap-3">
                    <span className="text-lg">✨</span>
                    <div>
                      <span className="font-bold text-espresso block">Visual Mood & Vibe</span>
                      <span className="text-charcoal/80">{selectedLoc.vibe}</span>
                    </div>
                  </div>

                  <div className="bg-linen p-3.5 rounded-xl border border-espresso/5 flex items-start gap-3">
                    <span className="text-lg">👗</span>
                    <div>
                      <span className="font-bold text-espresso block">Recommended Attire & Palettes</span>
                      <span className="text-charcoal/80">{selectedLoc.recommendedOutfits}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-espresso/10 space-y-2.5">
                <button
                  type="button"
                  onClick={() => handleOpenExplore(selectedLoc)}
                  className="w-full bg-linen hover:bg-linen/80 text-espresso font-semibold py-3 px-6 rounded-xl border border-espresso/20 transition flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Explore Full View & Photography Guide</span>
                  <span>🔍</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectShoot("Hampi Heritage Pre-Wedding")}
                  className="w-full bg-terracotta hover:bg-espresso text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                >
                  <span>Plan Hampi Shoot At This Spot</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Local Logistics Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-linen border border-terracotta/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="text-2xl">🏛️</span>
            <div>
              <h4 className="font-bold text-espresso text-sm sm:text-base">
                Zero Stress with Monument Permits & Gear Guidelines
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/80 font-light">
                Arvind knows all ASI protected zones and guides couples safely to majestic peripheral viewpoints without fines or gear delays.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectShoot("Hampi Heritage Pre-Wedding")}
            className="whitespace-nowrap px-4 py-2 rounded-full border border-espresso text-xs font-bold text-espresso hover:bg-espresso hover:text-white transition cursor-pointer"
          >
            Ask Arvind on WhatsApp
          </button>
        </div>
      </div>

      {/* ==================== EXPLORE VIEW MODAL ==================== */}
      {isModalOpen && modalLoc && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-linen text-espresso rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-terracotta/20 flex flex-col relative"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 bg-espresso/80 hover:bg-espresso text-white rounded-full w-10 h-10 flex items-center justify-center text-lg transition cursor-pointer shadow-md"
              aria-label="Close location explorer"
            >
              ✕
            </button>

            {/* Modal Hero Image */}
            <div className="relative w-full h-72 sm:h-96 shrink-0 bg-espresso/10">
              <Image
                src={modalLoc.image}
                alt={modalLoc.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-300 font-bold mb-1">
                  Spot 0{locations.findIndex((l) => l.id === modalLoc.id) + 1} • {modalLoc.tagline}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  {modalLoc.name}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-6">
              {/* Navigation Between Spots */}
              <div className="flex items-center justify-between pb-4 border-b border-espresso/10 text-xs font-semibold text-charcoal">
                <button
                  type="button"
                  onClick={handlePrevSpot}
                  className="px-3 py-1.5 rounded-lg border border-espresso/20 hover:bg-white transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>←</span>
                  <span>Previous Spot</span>
                </button>
                <span className="text-terracotta font-bold">
                  {locations.findIndex((l) => l.id === modalLoc.id) + 1} of {locations.length} Hampi Spots
                </span>
                <button
                  type="button"
                  onClick={handleNextSpot}
                  className="px-3 py-1.5 rounded-lg border border-espresso/20 hover:bg-white transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Spot</span>
                  <span>→</span>
                </button>
              </div>

              {/* Secret & Overview */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta bg-white px-3 py-1 rounded-full border border-terracotta/20 inline-block">
                  Arvind&apos;s Photography Secret
                </span>
                <p className="text-charcoal/90 text-sm sm:text-base leading-relaxed font-light">
                  {modalLoc.description}
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-espresso/10 space-y-1">
                  <div className="flex items-center gap-2 text-base">
                    <span>⏰</span>
                    <span className="font-bold text-xs uppercase text-espresso tracking-wide">
                      Optimal Time
                    </span>
                  </div>
                  <p className="text-xs text-charcoal/80 font-light leading-snug">
                    {modalLoc.bestTime}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-espresso/10 space-y-1">
                  <div className="flex items-center gap-2 text-base">
                    <span>✨</span>
                    <span className="font-bold text-xs uppercase text-espresso tracking-wide">
                      Visual Vibe
                    </span>
                  </div>
                  <p className="text-xs text-charcoal/80 font-light leading-snug">
                    {modalLoc.vibe}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-espresso/10 space-y-1">
                  <div className="flex items-center gap-2 text-base">
                    <span>👗</span>
                    <span className="font-bold text-xs uppercase text-espresso tracking-wide">
                      Outfits
                    </span>
                  </div>
                  <p className="text-xs text-charcoal/80 font-light leading-snug">
                    {modalLoc.recommendedOutfits}
                  </p>
                </div>
              </div>

              {/* Modal Booking CTA */}
              <div className="pt-4 border-t border-espresso/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    onSelectShoot("Hampi Heritage Pre-Wedding");
                  }}
                  className="flex-1 bg-terracotta hover:bg-espresso text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Plan Shoot At This Spot</span>
                  <span>→</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 rounded-xl border border-espresso/20 text-charcoal hover:bg-white transition cursor-pointer text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
