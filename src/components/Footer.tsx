"use client";

import React from "react";
import { StudioData } from "@/data/defaultData";

interface FooterProps {
  data: StudioData;
  onOpenAdmin?: () => void;
  isAdminLoggedIn?: boolean;
}

export default function Footer({ data, onOpenAdmin, isAdminLoggedIn = false }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso text-linen py-14 px-4 sm:px-6 lg:px-8 border-t border-espresso/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-serif text-3xl font-bold text-white tracking-tight">
            {data.footerBrand}
          </div>
          <p className="text-xs sm:text-sm text-linen/70 font-light max-w-md">
            {data.footerTagline}
          </p>
        </div>

        {/* Quick links & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-linen/80">
          <a href="#shoots" className="hover:text-terracotta transition">
            Shoot Types
          </a>
          <a href="#portfolio" className="hover:text-terracotta transition">
            Portfolio
          </a>
          <a href="#about" className="hover:text-terracotta transition">
            About Arvind
          </a>
          <a href="#packages" className="hover:text-terracotta transition">
            Packages
          </a>
          <a href="#contact" className="hover:text-terracotta transition">
            Book Now
          </a>
          {isAdminLoggedIn && onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="text-xs text-haldi hover:underline cursor-pointer"
            >
              Master CMS
            </button>
          )}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta text-white flex items-center justify-center text-sm transition cursor-pointer"
          title="Back to top"
        >
          ↑
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-linen/50">
        <div>{data.footerCopy}</div>
        <div className="flex items-center gap-3">
          <span>Hospet • Hampi • Karnataka</span>
          <span>•</span>
          <span>Crafted with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
