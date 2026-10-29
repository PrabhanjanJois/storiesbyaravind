"use client";

import React, { useState } from "react";
import { StudioData } from "@/data/defaultData";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface NavbarProps {
  data: StudioData;
  onOpenAdmin?: () => void;
  isAdminLoggedIn?: boolean;
}

export default function Navbar({ data, onOpenAdmin, isAdminLoggedIn = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(
    "Namaskara Arvind! I visited your website and would like to inquire about booking a shoot."
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-linen/95 backdrop-blur-md border-b border-espresso/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col group py-1 min-w-0 pr-2">
          <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-espresso group-hover:text-terracotta transition leading-tight truncate">
            {data.brandName}
          </span>
          <span className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.25em] text-terracotta font-semibold truncate">
            {data.brandSub}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-charcoal">
          <a href="#portfolio" className="hover:text-terracotta transition">
            Portfolio
          </a>
          <a href="#shoots" className="hover:text-terracotta transition">
            Shoots
          </a>
          <a href="#hampi-guide" className="hover:text-terracotta transition">
            Hampi Guide
          </a>
          <a href="#about" className="hover:text-terracotta transition">
            About Arvind
          </a>
          <a href="#reviews" className="hover:text-terracotta transition">
            Reviews
          </a>
          <a href="#estimator" className="hover:text-terracotta transition">
            Estimate
          </a>
          <a href="#packages" className="hover:text-terracotta transition">
            Packages
          </a>
          <a href="#faq" className="hover:text-terracotta transition">
            FAQs
          </a>
        </nav>

        {/* Right Controls: WhatsApp & Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {isAdminLoggedIn && onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              title="Studio Settings"
              className="text-xs text-charcoal/60 hover:text-terracotta p-1.5 rounded-lg border border-espresso/10 hover:border-terracotta/40 transition cursor-pointer"
            >
              ⚙️
            </button>
          )}

          {/* Official WhatsApp Button (Circular icon on mobile, neat pill on desktop) */}
          <a
            id="nav-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Arvind on WhatsApp"
            className="w-10 h-10 sm:w-auto sm:h-auto rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white sm:px-4 sm:py-2.5 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 active:scale-95 shrink-0"
            title="Chat with Arvind on WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0 text-white" />
            <span className="hidden sm:inline text-xs sm:text-sm font-semibold whitespace-nowrap">
              {data.navBtnText || "WhatsApp Us"}
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-full hover:bg-espresso/5 flex items-center justify-center text-espresso focus:outline-none cursor-pointer transition shrink-0"
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
        <div className="xl:hidden bg-linen border-b border-espresso/10 px-6 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            Portfolio & Real Stories
          </a>
          <a
            href="#shoots"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            Every Milestone (Shoots We Cover)
          </a>
          <a
            href="#hampi-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            Hampi Shoot Guide 🏛️
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            About Arvind
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            Client Reviews ★★★★★
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            Custom Cost Estimator 💰
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            Packages
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-charcoal hover:text-terracotta py-1"
          >
            FAQs
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-terracotta font-bold py-1"
          >
            Check Availability / Book Now →
          </a>
          <div className="pt-2 border-t border-espresso/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm shadow-sm transition active:scale-98"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
