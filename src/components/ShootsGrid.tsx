"use client";

import React from "react";
import Image from "next/image";
import { ShootType } from "@/data/defaultData";

interface ShootsGridProps {
  tag: string;
  heading: string;
  sub: string;
  shoots: ShootType[];
  onSelectShoot: (shootTitle: string) => void;
}

export default function ShootsGrid({
  tag,
  heading,
  sub,
  shoots,
  onSelectShoot,
}: ShootsGridProps) {
  return (
    <section id="shoots" className="py-16 md:py-24 bg-ivory/60 border-y border-espresso/10">
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

        {/* Shoots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoots.map((shoot) => (
            <div
              key={shoot.id}
              className="bg-white rounded-2xl overflow-hidden border border-espresso/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-linen">
                <Image
                  src={shoot.url}
                  alt={shoot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="bg-espresso/85 backdrop-blur-sm text-linen text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide border border-white/10 shadow-xs truncate max-w-[65%]">
                    {shoot.tag}
                  </div>
                  {shoot.price && (
                    <div className="bg-terracotta text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md shrink-0">
                      {shoot.price}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-espresso group-hover:text-terracotta transition">
                    {shoot.title}
                  </h3>
                  {shoot.price && (
                    <div className="text-xs font-bold text-terracotta tracking-wide">
                      Investment: {shoot.price}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                    {shoot.desc}
                  </p>
                </div>

                {/* Book Action */}
                <button
                  onClick={() => onSelectShoot(shoot.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition flex items-center justify-center gap-2"
                >
                  <span>Select & Check Dates</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
