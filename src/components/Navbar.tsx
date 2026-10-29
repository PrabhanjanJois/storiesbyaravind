"use client";

import React, { useState } from "react";
import { StudioData } from "@/data/defaultData";

interface NavbarProps {
  data: StudioData;
  onOpenAdmin?: () => void;
}

export default function Navbar({ data, onOpenAdmin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(
    "Namaskara Arvind! I visited your website and would like to inquire about booking a shoot."
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-linen/95 backdrop-blur-md border-b border-espresso/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-espresso group-hover:text-terracotta transition">
            {data.brandName}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta font-semibold -mt-1">
            {data.brandSub}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-charcoal">
          <a href="#shoots" className="hover:text-terracotta transition">
            {data.nav1}
          </a>
          <a href="#portfolio" className="hover:text-terracotta transition">
            {data.nav2}
          </a>
          <a href="#about" className="hover:text-terracotta transition">
            {data.nav3}
          </a>
          <a href="#packages" className="hover:text-terracotta transition">
            {data.nav4}
          </a>
          <a href="#contact" className="hover:text-terracotta transition">
            {data.nav5}
          </a>
        </nav>

        {/* Right CTA & Admin Trigger */}
        <div className="flex items-center gap-3">
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              title="Studio Settings"
              className="text-xs text-charcoal/60 hover:text-terracotta p-1.5 rounded-lg border border-espresso/10 hover:border-terracotta/40 transition"
            >
              ⚙️
            </button>
          )}

          <a
            id="nav-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta hover:bg-espresso text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition shadow-sm inline-flex items-center gap-1.5"
          >
            <span>💬</span>
            <span>{data.navBtnText}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-espresso p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-linen border-b border-espresso/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#shoots"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            {data.nav1}
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            {data.nav2}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            {data.nav3}
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            {data.nav4}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            {data.nav5}
          </a>
        </div>
      )}
    </header>
  );
}
