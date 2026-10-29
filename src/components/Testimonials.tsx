"use client";

import React, { useState } from "react";
import { TestimonialItem } from "@/data/defaultData";

interface TestimonialsProps {
  tag: string;
  heading: string;
  sub: string;
  testimonials: TestimonialItem[];
  whatsappNumber: string;
}

export default function Testimonials({
  tag,
  heading,
  sub,
  testimonials,
  whatsappNumber,
}: TestimonialsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Wedding", "Hampi Pre-Wedding", "Maternity", "Gruhapravesha"];

  const filtered =
    activeFilter === "All"
      ? testimonials
      : testimonials.filter((t) =>
          t.shootType.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="reviews" className="py-20 md:py-28 bg-linen border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
            {tag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
            {heading}
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            {sub}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs sm:text-sm px-4 py-1.5 rounded-full font-medium transition cursor-pointer ${
                  activeFilter === cat
                    ? "bg-terracotta text-white shadow-sm"
                    : "bg-ivory text-charcoal/80 hover:text-espresso border border-espresso/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-espresso/10 shadow-sm hover:shadow-md hover:border-terracotta/30 transition flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Info */}
                <div className="flex items-center justify-between border-b border-espresso/5 pb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-terracotta bg-linen px-2.5 py-0.5 rounded-full border border-terracotta/20 inline-block mb-1">
                      {item.shootType}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso group-hover:text-terracotta transition">
                      {item.couple}
                    </h3>
                    <p className="text-xs text-charcoal/60 mt-0.5">
                      📍 {item.loc} • {item.year}
                    </p>
                  </div>
                  {/* Stars */}
                  <div className="flex text-amber-500 text-sm" aria-label={`${item.rating} stars`}>
                    {"★".repeat(item.rating)}
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="text-xs font-semibold text-espresso italic">
                  &ldquo;{item.highlight}&rdquo;
                </div>

                {/* Quote */}
                <p className="text-charcoal/85 text-sm sm:text-[15px] leading-relaxed font-light">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Stamp */}
              <div className="pt-6 mt-6 border-t border-espresso/5 flex items-center justify-between text-xs text-charcoal/60">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Verified Client Story
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Namaskara Arvind! I read ${item.couple}'s review on your website and would like to inquire about similar coverage.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:underline font-semibold flex items-center gap-1"
                >
                  Book similar shoot →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
