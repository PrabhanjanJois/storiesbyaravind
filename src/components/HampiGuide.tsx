"use client";

import React, { useState } from "react";
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

  const selectedLoc = locations.find((l) => l.id === activeLocId) || locations[0];

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
              <button
                key={loc.id}
                onClick={() => setActiveLocId(loc.id)}
                className={`p-4 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-espresso text-linen border-espresso shadow-md ring-2 ring-terracotta/30"
                    : "bg-white text-espresso border-espresso/10 hover:border-terracotta/40"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                    isActive ? "text-amber-400" : "text-terracotta"
                  }`}>
                    Spot 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold leading-tight">
                    {loc.name}
                  </h4>
                </div>
                <span className={`text-xs mt-3 font-medium flex items-center gap-1 ${
                  isActive ? "text-linen/80" : "text-charcoal/60"
                }`}>
                  Explore view →
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Location Feature Card */}
        {selectedLoc && (
          <div className="bg-white rounded-3xl border border-espresso/10 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[340px] bg-espresso/5">
              <Image
                src={selectedLoc.image}
                alt={selectedLoc.name}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                    {selectedLoc.tagline}
                  </span>
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

              {/* Action Button */}
              <div className="pt-4 border-t border-espresso/10">
                <button
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
    </section>
  );
}
