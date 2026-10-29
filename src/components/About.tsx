"use client";

import React from "react";
import Image from "next/image";
import { StudioData } from "@/data/defaultData";

interface AboutProps {
  data: StudioData;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-ivory/50 border-y border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Portrait */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-linen border-4 border-white group">
              <Image
                src={data.founderImage}
                alt={data.founderName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 backdrop-blur-sm bg-black/35 rounded-xl border border-white/15">
                <h4 className="font-serif text-xl font-bold">{data.founderName}</h4>
                <p className="text-xs text-linen/80 mt-0.5">{data.founderRole}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-block px-3.5 py-1 rounded-full bg-linen border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
              {data.aboutTag}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-tight tracking-tight">
              {data.aboutHeading}
            </h2>

            <div className="space-y-4 text-charcoal/90 text-sm sm:text-base leading-relaxed font-light">
              <p>{data.aboutP1}</p>
              <p>{data.aboutP2}</p>
            </div>

            {/* Info Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-white border border-espresso/10 shadow-sm space-y-1">
                <span className="text-xs uppercase font-semibold text-terracotta tracking-wider">
                  📌 {data.aboutBox1Label}
                </span>
                <p className="text-xs sm:text-sm text-charcoal font-medium">
                  {data.aboutSpec}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-espresso/10 shadow-sm space-y-1">
                <span className="text-xs uppercase font-semibold text-terracotta tracking-wider">
                  📍 {data.aboutBox2Label}
                </span>
                <p className="text-xs sm:text-sm text-charcoal font-medium">
                  {data.aboutLoc}
                </p>
              </div>
            </div>

            {/* Contact quick CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="bg-espresso hover:bg-terracotta text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center gap-2 shadow"
              >
                <span>Plan Your Shoot With Arvind</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
