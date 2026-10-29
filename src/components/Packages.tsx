"use client";

import React from "react";
import { PackageTier } from "@/data/defaultData";

interface PackagesProps {
  tag: string;
  heading: string;
  packages: PackageTier[];
  whatsappNumber: string;
}

export default function Packages({
  tag,
  heading,
  packages,
  whatsappNumber,
}: PackagesProps) {
  const getPackageWhatsAppUrl = (pkgName: string) => {
    const text = `Namaskara Arvind! I am interested in inquiring about the "${pkgName}" package for our upcoming family event. Could you share the details, dates, and customized quote?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-block px-3.5 py-1 rounded-full bg-ivory border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
          {tag}
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-charcoal/80 font-light">
          Every celebration is unique. Choose a base package below or talk to us for a custom package tailored to your family traditions.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, index) => {
          const isFeatured = index === 1; // Middle wedding package is featured
          return (
            <div
              key={index}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                isFeatured
                  ? "bg-espresso text-linen shadow-2xl scale-100 md:-translate-y-2 border-2 border-haldi/60"
                  : "bg-white text-espresso border border-espresso/10 shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-wider font-bold px-3.5 py-1 rounded-full shadow ${
                    isFeatured
                      ? "bg-haldi text-espresso"
                      : "bg-terracotta text-white"
                  }`}
                >
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3
                    className={`font-serif text-2xl font-bold ${
                      isFeatured ? "text-white" : "text-espresso"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span
                      className={`text-2xl sm:text-3xl font-extrabold ${
                        isFeatured ? "text-haldi" : "text-terracotta"
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="border-t border-current/15 pt-5 space-y-3">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="text-terracotta font-bold">✓</span>
                      <span
                        className={
                          isFeatured ? "text-linen/90 font-light" : "text-charcoal font-light"
                        }
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <a
                  href={getPackageWhatsAppUrl(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 shadow ${
                    isFeatured
                      ? "bg-haldi hover:bg-amber-400 text-espresso font-bold"
                      : "bg-terracotta hover:bg-espresso text-white"
                  }`}
                >
                  <span>💬 Check Dates & Pricing</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
