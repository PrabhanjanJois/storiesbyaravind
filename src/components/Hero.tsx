"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { StudioData, HeroSlide } from "@/data/defaultData";

interface HeroProps {
  data: StudioData;
  onSelectShoot?: (shootTitle: string) => void;
}

export default function Hero({ data, onSelectShoot }: HeroProps) {
  const slides: HeroSlide[] = data.heroSlides && data.heroSlides.length > 0
    ? data.heroSlides
    : [
        {
          id: 1,
          title: "Sacred South Indian Muhurtham",
          tag: "Traditional Wedding",
          location: "Vijayanagara Mantapa, Hospet",
          image: data.heroImage || "/images/hero_main.jpg",
          accentText: "Raw emotion over stiff poses",
          shootLink: "Traditional Wedding Shoot",
        },
      ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 3000; // 3 seconds per slide (auto loop)
  const TICK_INTERVAL = 50; // update progress every 50ms

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, TICK_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slides.length, currentIndex]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  // Touch gesture support for mobile & tablet
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext(); // swipe left to see next
      } else {
        handlePrev(); // swipe right to see prev
      }
    }
    touchStartX.current = null;
  };

  const activeSlide = slides[currentIndex] || slides[0];

  return (
    <section className="relative py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Story, Brand & CTAs */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-6 lg:space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase shadow-xs">
            <span>✨</span>
            <span>{data.heroBadge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-espresso leading-[1.08] tracking-tight">
            {data.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-light">
            {data.heroDesc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2">
            <a
              href="#shoots"
              className="bg-espresso hover:bg-terracotta text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm hover:shadow-md inline-flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>{data.heroBtn1}</span>
              <span className="text-xs">↓</span>
            </a>
            <a
              href="#estimator"
              className="bg-ivory hover:bg-espresso/10 text-espresso border border-espresso/20 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Custom Estimator</span>
              <span className="text-xs">💰</span>
            </a>
          </div>

          {/* Experience Statistics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-espresso/10">
            <div className="group">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-terracotta group-hover:scale-105 transition-transform duration-300">
                {data.stat1Num}
              </div>
              <div className="text-[10.5px] sm:text-sm text-charcoal font-medium mt-0.5 leading-snug">
                {data.stat1Label}
              </div>
            </div>
            <div className="group">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-terracotta group-hover:scale-105 transition-transform duration-300">
                {data.stat2Num}
              </div>
              <div className="text-[10.5px] sm:text-sm text-charcoal font-medium mt-0.5 leading-snug">
                {data.stat2Label}
              </div>
            </div>
            <div className="group">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-terracotta group-hover:scale-105 transition-transform duration-300">
                {data.stat3Num}
              </div>
              <div className="text-[10.5px] sm:text-sm text-charcoal font-medium mt-0.5 leading-snug">
                {data.stat3Label}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Modern Interactive Work Showcase Slider */}
        <div
          className="lg:col-span-6 xl:col-span-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Frame Container */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[16/13] lg:aspect-[4/5] bg-espresso border-4 border-white/80 group"
          >
            {/* Slide Images with Smooth Cross-Fade & Ken Burns Zoom */}
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    className={`object-cover transition-transform duration-[6000ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  />
                  {/* Subtle Multi-Stop Vignette Gradient for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-black/30 pointer-events-none" />
                </div>
              );
            })}

            {/* Top Bar: Subtle Slide Count Pill & Pause Status */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="bg-black/40 backdrop-blur-sm text-white/95 text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <span>
                  0{currentIndex + 1} / 0{slides.length}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-amber-300 font-serif tracking-wide">{activeSlide.tag}</span>
              </div>

              {isPaused && (
                <div className="bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                  Paused
                </div>
              )}
            </div>

            {/* Prev / Next Floating Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm border border-white/15 flex items-center justify-center transition opacity-0 group-hover:opacity-100 cursor-pointer shadow-md hover:scale-105"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm border border-white/15 flex items-center justify-center transition opacity-0 group-hover:opacity-100 cursor-pointer shadow-md hover:scale-105"
              aria-label="Next slide"
            >
              ›
            </button>

            {/* Subtle Minimal Text Overlay: Transparent BG, 50% Width */}
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20 text-white space-y-1.5 max-w-[85%] sm:max-w-[55%] pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-amber-300 drop-shadow-sm">
                  📍 {activeSlide.location}
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-md">
                {activeSlide.title}
              </h3>

              {activeSlide.accentText && (
                <p className="text-xs text-linen/80 italic font-light drop-shadow-sm line-clamp-1">
                  &ldquo;{activeSlide.accentText}&rdquo;
                </p>
              )}

              {activeSlide.shootLink && (
                <div className="pt-1 pointer-events-auto">
                  <button
                    onClick={() => {
                      if (onSelectShoot) {
                        onSelectShoot(activeSlide.shootLink!);
                      } else {
                        const elem = document.getElementById("contact");
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition cursor-pointer drop-shadow-sm"
                  >
                    <span className="underline underline-offset-4 decoration-amber-400/70 group-hover:decoration-amber-300">
                      Inquire this shoot
                    </span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Hairline 2px Progress Bar at very bottom of photo */}
            <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/20">
              <div
                className="bg-amber-400 h-full transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Interactive Slide Thumbnail Strip Below */}
          <div className="flex items-center justify-between gap-2 mt-4 px-1 max-w-full">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 max-w-full">
              {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shrink-0 ${
                      isActive
                        ? "w-14 sm:w-16 h-10 ring-2 ring-terracotta shadow-md"
                        : "w-8 sm:w-10 h-10 opacity-50 hover:opacity-90"
                    }`}
                    title={slide.title}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-terracotta/20" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="text-[11px] text-charcoal/70 font-medium hidden sm:block shrink-0">
              Hover to pause • Swipe to change
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
