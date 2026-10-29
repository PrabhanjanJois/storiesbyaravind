"use client";

import React from "react";
import Image from "next/image";
import { FeaturedStoryItem } from "@/data/defaultData";

interface StoryModalProps {
  story: FeaturedStoryItem | null;
  onClose: () => void;
  onInquire: (storyTitle: string) => void;
}

export default function StoryModal({
  story,
  onClose,
  onInquire,
}: StoryModalProps) {
  if (!story) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-linen text-espresso rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-terracotta/20 flex flex-col relative"
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-espresso/80 hover:bg-espresso text-white rounded-full w-10 h-10 flex items-center justify-center text-lg transition cursor-pointer shadow-md"
          aria-label="Close story"
        >
          ✕
        </button>

        {/* Hero Cover */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 shrink-0 bg-espresso/10">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent flex flex-col justify-end p-5 sm:p-8 md:p-10 text-white">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-300 font-bold mb-1.5">
              Real Wedding & Celebration Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              {story.title}
            </h2>
            <p className="text-xs sm:text-base text-linen/90 mt-1 font-light">
              {story.couple} • {story.location} • {story.eventDate}
            </p>
          </div>
        </div>

        {/* Story Prose & Quote */}
        <div className="p-4 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
          {/* Couple Quote Highlight */}
          <div className="border-l-4 border-terracotta pl-5 py-2 bg-ivory/60 rounded-r-xl">
            <p className="font-serif text-lg sm:text-xl italic text-espresso">
              &ldquo;{story.quote}&rdquo;
            </p>
            <span className="text-xs text-terracotta font-semibold uppercase tracking-wider block mt-2">
              — {story.couple}
            </span>
          </div>

          {/* Narrative Summary */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-espresso">
              The Story & Emotion
            </h3>
            <p className="text-charcoal/90 text-sm sm:text-base leading-relaxed font-light">
              {story.summary}
            </p>
          </div>

          {/* Curated Chronological Photo Grid */}
          <div className="space-y-4 pt-4 border-t border-espresso/10">
            <h3 className="font-serif text-xl font-bold text-espresso">
              Captured Moments & Rituals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {story.photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-espresso/10 bg-ivory shadow-xs space-y-2 pb-3"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={photo.url}
                      alt={photo.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-charcoal/80 px-3.5 font-light">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquire Footer Banner */}
          <div className="pt-6 border-t border-espresso/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-ivory p-6 rounded-2xl">
            <div>
              <h4 className="font-serif text-lg font-bold text-espresso">
                Inspired by {story.couple}&apos;s story?
              </h4>
              <p className="text-xs text-charcoal/70">
                Arvind can create a timeless visual essay for your celebration.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onInquire(story.title);
              }}
              className="bg-terracotta hover:bg-espresso text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer shadow-md"
            >
              Check Availability For Your Date →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
