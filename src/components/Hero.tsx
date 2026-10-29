"use client";

import React from "react";
import Image from "next/image";
import { StudioData } from "@/data/defaultData";

interface HeroProps {
  data: StudioData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Story text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
            <span>✨</span>
            <span>{data.heroBadge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-espresso leading-[1.08] tracking-tight">
            {data.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed max-w-2xl font-light">
            {data.heroDesc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#shoots"
              className="bg-espresso hover:bg-terracotta text-white px-7 py-3.5 rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <span>{data.heroBtn1}</span>
              <span>↓</span>
            </a>
            <a
              href="#portfolio"
              className="bg-ivory hover:bg-espresso/10 text-espresso border border-espresso/15 px-7 py-3.5 rounded-full text-sm font-semibold transition inline-flex items-center gap-2"
            >
              <span>{data.heroBtn2}</span>
              <span>→</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-espresso/10 max-w-lg">
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-terracotta">
                {data.stat1Num}
              </div>
              <div className="text-xs sm:text-sm text-charcoal font-medium mt-0.5">
                {data.stat1Label}
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-terracotta">
                {data.stat2Num}
              </div>
              <div className="text-xs sm:text-sm text-charcoal font-medium mt-0.5">
                {data.stat2Label}
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-terracotta">
                {data.stat3Num}
              </div>
              <div className="text-xs sm:text-sm text-charcoal font-medium mt-0.5">
                {data.stat3Label}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Main Photo */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-ivory border-4 border-white group">
            <Image
              src={data.heroImage}
              alt="Stories by Arvind Featured Photography"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle aesthetic gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-white p-3 backdrop-blur-sm bg-black/30 rounded-xl border border-white/20">
              <p className="font-serif text-lg font-semibold italic">
                Capturing authentic moments in Hospet & Hampi
              </p>
              <p className="text-xs text-linen/80">Every family milestone, preserved forever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
