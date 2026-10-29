"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/defaultData";

interface GalleryProps {
  tag: string;
  title: string;
  gallery: GalleryItem[];
}

export default function Gallery({ tag, title, gallery }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: "All Celebrations", value: "all" },
    { label: "Weddings", value: "weddings" },
    { label: "Maternity", value: "maternity" },
    { label: "Birthdays", value: "birthdays" },
    { label: "House Warming", value: "housewarming" },
    { label: "Hampi Pre-Wedding", value: "prewedding" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? gallery
      : gallery.filter((item) => item.cat.toLowerCase() === activeFilter.toLowerCase());

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-block px-3.5 py-1 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
          {tag}
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
          {title}
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setActiveFilter(cat.value);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
              activeFilter === cat.value
                ? "bg-terracotta text-white shadow-sm"
                : "bg-ivory hover:bg-espresso/10 text-charcoal border border-espresso/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-ivory border border-espresso/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={item.url}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                {item.loc}
              </span>
              <h4 className="font-serif text-2xl font-bold leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-linen/70 mt-1">Tap to enlarge 🔍</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl font-light p-2 cursor-pointer transition"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="text-center mt-4 text-white space-y-1">
              <h3 className="font-serif text-2xl font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-linen/70">
                {filteredItems[lightboxIndex].loc} • {filteredItems[lightboxIndex].cat}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
