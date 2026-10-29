"use client";

import React, { useState } from "react";
import { FaqItem } from "@/data/defaultData";

interface FaqSectionProps {
  tag: string;
  heading: string;
  sub: string;
  faqs: FaqItem[];
  whatsappNumber: string;
}

export default function FaqSection({
  tag,
  heading,
  sub,
  faqs,
  whatsappNumber,
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id || 1);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "deliverables", label: "Deliverables & Raw Files" },
    { id: "coverage", label: "Coverage & Travel" },
    { id: "hampi", label: "Hampi Shoots & Permits" },
    { id: "booking", label: "Booking & Deposits" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-linen border-t border-espresso/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
            {tag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
            {heading}
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            {sub}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition cursor-pointer font-medium ${
                  activeCategory === c.id
                    ? "bg-espresso text-linen"
                    : "bg-white text-charcoal/80 border border-espresso/10 hover:border-terracotta"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition overflow-hidden shadow-xs ${
                  isOpen ? "border-terracotta/50 ring-1 ring-terracotta/20" : "border-espresso/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-espresso">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition shrink-0 ${
                      isOpen
                        ? "bg-terracotta text-white rotate-180"
                        : "bg-linen text-espresso"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-charcoal/85 text-sm sm:text-[15px] leading-relaxed font-light border-t border-espresso/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-espresso/10 shadow-xs space-y-2">
          <p className="text-sm text-espresso font-semibold">
            Have a question about specific family rituals or out-of-town dates?
          </p>
          <p className="text-xs text-charcoal/70">
            Arvind is always happy to speak with parents and couples directly.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Namaskara Arvind! I have a question about my event date and photography coverage."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-terracotta hover:underline"
            >
              <span>Ask Arvind on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
