"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem, FeaturedStoryItem } from "@/data/defaultData";
import StoryModal from "./StoryModal";

interface GalleryProps {
  tag?: string;
  title?: string;
  gallery?: GalleryItem[];
  featuredStories?: FeaturedStoryItem[];
  onSelectShoot?: (shootTitle: string) => void;
}

export default function Gallery({
  tag = "NARRATIVE EDITORIAL JOURNALS",
  title = "Featured Real Wedding & Event Stories",
  featuredStories = [],
  onSelectShoot,
}: GalleryProps) {
  const [selectedStory, setSelectedStory] = useState<FeaturedStoryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stories = featuredStories && featuredStories.length > 0 ? featuredStories : [];

  // Scroll smoothly inside horizontal container only (avoids page vertical jumping)
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    if (index === 0) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      setActiveIndex(0);
      return;
    }
    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      // Calculate scroll offset relative to container
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = targetCard.getBoundingClientRect().left;
      const targetScroll = container.scrollLeft + (cardLeft - containerLeft);

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (stories.length === 0) return;
    const nextIdx = (activeIndex - 1 + stories.length) % stories.length;
    scrollToIndex(nextIdx);
  }, [activeIndex, stories.length, scrollToIndex]);

  const handleNext = useCallback(() => {
    if (stories.length === 0) return;
    const nextIdx = (activeIndex + 1) % stories.length;
    scrollToIndex(nextIdx);
  }, [activeIndex, stories.length, scrollToIndex]);

  // Update active index based on user swipe/scroll
  const handleScroll = () => {
    if (!scrollRef.current || stories.length === 0) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    let closestIdx = 0;
    let minDiff = Infinity;

    for (let i = 0; i < container.children.length; i++) {
      const card = container.children[i] as HTMLElement;
      const cardLeft = card.offsetLeft;
      const diff = Math.abs(cardLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }
  };

  // Auto-Slide Effect (every 3 seconds in infinite loop, pause on hover/touch or modal open)
  useEffect(() => {
    if (isPaused || selectedStory !== null || stories.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % stories.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, selectedStory, stories.length, scrollToIndex]);

  return (
    <section id="portfolio" className="py-14 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Header with Title and Slider Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-12 pb-6 border-b border-espresso/10">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-block px-3.5 py-1 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
            {tag || "Narrative Editorial Journals"}
          </div>
          <h2 className="font-serif text-2.5xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight leading-tight">
            {title || "Featured Real Wedding & Event Stories"}
          </h2>
          <p className="text-charcoal/80 text-xs sm:text-sm md:text-base font-light">
            Complete multi-day celebration essays and visual journeys captured with soul, intimacy, and dignity.
          </p>
        </div>

        {/* Carousel Navigation Buttons & Counter */}
        {stories.length > 1 && (
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0">
            <div className="flex items-center gap-1.5 bg-ivory px-3 py-1.5 rounded-full border border-espresso/10">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-xs font-mono font-bold text-espresso tracking-wider">
                {String(activeIndex + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous story"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-espresso/20 bg-ivory hover:bg-espresso hover:text-white text-espresso flex items-center justify-center transition active:scale-95 cursor-pointer shadow-xs"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next story"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-espresso/20 bg-ivory hover:bg-espresso hover:text-white text-espresso flex items-center justify-center transition active:scale-95 cursor-pointer shadow-xs"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stories Slider Track */}
      {stories.length > 0 ? (
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            // Resume auto-slide 2 seconds after user finishes touching
            setTimeout(() => setIsPaused(false), 2000);
          }}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full max-w-full"
          >
            {stories.map((story, idx) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`w-[85vw] max-w-[340px] sm:max-w-none sm:w-[50%] lg:w-[31.6%] shrink-0 snap-start bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  idx === activeIndex
                    ? "border-terracotta ring-1 ring-terracotta/30"
                    : "border-espresso/10"
                }`}
              >
                {/* Story Image */}
                <div className="relative aspect-[16/10] w-full bg-espresso/10 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 32vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 bg-espresso/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 shadow-sm">
                    <span>📷</span>
                    <span>{(story.photos?.length || 0) + 1} Moments</span>
                  </div>
                  {story.eventDate && (
                    <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 bg-white/90 text-espresso text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs shadow-xs">
                      {story.eventDate}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-terracotta font-bold uppercase tracking-wider">
                      <span>{story.location}</span>
                      {story.couple && (
                        <span className="text-charcoal/60 font-medium normal-case tracking-normal truncate max-w-[50%] text-right">
                          {story.couple}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-espresso group-hover:text-terracotta transition leading-snug line-clamp-2">
                      {story.title}
                    </h3>
                    {story.subtitle && (
                      <p className="text-[11px] sm:text-xs font-medium text-charcoal/70 italic line-clamp-1">
                        {story.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-charcoal/80 line-clamp-3 font-light leading-relaxed pt-0.5">
                      {story.summary}
                    </p>
                  </div>

                  {story.quote && (
                    <div className="pt-2 border-t border-espresso/10">
                      <p className="text-[11px] italic text-charcoal/70 line-clamp-2">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>
                  )}

                  <div className="pt-2 sm:pt-3 flex items-center justify-between text-xs font-bold text-terracotta group-hover:text-espresso transition">
                    <span className="flex items-center gap-1">
                      <span>Read Full Photo Essay</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-charcoal/50 group-hover:text-terracotta font-medium">
                      Tap to open
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots & Mobile Swipe Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 sm:pt-6">
            <div className="flex items-center gap-1.5">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to story ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-8 bg-terracotta"
                      : "w-2 bg-espresso/20 hover:bg-espresso/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-charcoal/60 font-light">
              <span>Auto-slides every 4s • Swipe or tap arrows</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-charcoal/60 text-sm">
          No featured stories available yet.
        </div>
      )}

      {/* Story Modal (Full Photo Essay Viewer) */}
      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onInquire={(storyTitle) => {
          if (onSelectShoot) {
            onSelectShoot(storyTitle);
          }
        }}
      />
    </section>
  );
}
