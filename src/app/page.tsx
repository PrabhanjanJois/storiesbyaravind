"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShootsGrid from "@/components/ShootsGrid";
import Gallery from "@/components/Gallery";
import HampiGuide from "@/components/HampiGuide";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CostEstimator from "@/components/CostEstimator";
import Packages from "@/components/Packages";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import StudioDashboard from "@/components/admin/StudioDashboard";
import AdminLoginModal from "@/components/admin/AdminLoginModal";
import { DEFAULT_STUDIO_DATA, StudioData } from "@/data/defaultData";

const STORAGE_KEY = "storiesbyaravind_data_v2";
const AUTH_STORAGE_KEY = "storiesbyaravind_admin_auth";

export default function Home() {
  const [data, setData] = useState<StudioData>(DEFAULT_STUDIO_DATA);
  const [adminOpen, setAdminOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [selectedShootForBooking, setSelectedShootForBooking] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hydrate custom edits from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((prev) => {
          const mergedShootTypes = (parsed.shootTypes || prev.shootTypes || []).map(
            (shoot: any, i: number) => {
              const defaultShoot = DEFAULT_STUDIO_DATA.shootTypes[i] || {};
              return {
                ...defaultShoot,
                ...shoot,
                price: shoot.price || defaultShoot.price,
                tag: shoot.tag || defaultShoot.tag,
              };
            }
          );

          const featuredStories =
            parsed.featuredStories && parsed.featuredStories.length > 0
              ? parsed.featuredStories
              : DEFAULT_STUDIO_DATA.featuredStories;

          const heroSlides =
            parsed.heroSlides && parsed.heroSlides.length > 0
              ? parsed.heroSlides
              : DEFAULT_STUDIO_DATA.heroSlides;

          const hampiLocations =
            parsed.hampiLocations && parsed.hampiLocations.length > 0
              ? parsed.hampiLocations
              : DEFAULT_STUDIO_DATA.hampiLocations;

          return {
            ...prev,
            ...parsed,
            heroSlides,
            hampiLocations,
            shootTypes: mergedShootTypes,
            featuredStories,
            customServiceTags:
              parsed.customServiceTags && parsed.customServiceTags.length > 0
                ? parsed.customServiceTags
                : DEFAULT_STUDIO_DATA.customServiceTags,
            customEventTags:
              parsed.customEventTags && parsed.customEventTags.length > 0
                ? parsed.customEventTags
                : DEFAULT_STUDIO_DATA.customEventTags,
          };
        });
      }
    } catch {
      // Fallback to default
    }

    // Check existing auth state
    try {
      const authed = sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
      if (authed) {
        setIsAdminLoggedIn(true);
      }

      // Check ?login or ?admin in URL
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("login") || urlParams.has("admin")) {
          if (authed) {
            setAdminOpen(true);
          } else {
            setLoginModalOpen(true);
          }
        }
      }
    } catch {
      // Ignore
    }

    // Secret shortcut: Ctrl+Shift+A or Cmd+Shift+A opens login/admin
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        const authed = sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
        if (authed) {
          setAdminOpen(true);
        } else {
          setLoginModalOpen(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveData = (newData: StudioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      showToast("✓ Studio changes saved successfully!");
    } catch (err) {
      console.error("Failed to save state", err);
    }
  };

  const handleResetData = () => {
    setData(DEFAULT_STUDIO_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
      showToast("✓ Studio reset to defaults.");
    } catch (err) {
      console.error("Failed to reset state", err);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    setLoginModalOpen(false);
    setAdminOpen(true);
    showToast("✓ Welcome Arvind! Studio CMS is now active.");

    // Clean up ?login from URL without page reload
    if (typeof window !== "undefined" && window.history.replaceState) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setAdminOpen(false);
    showToast("✓ Signed out from Studio CMS.");
  };

  const handleSelectShoot = (shootTitle: string) => {
    setSelectedShootForBooking(shootTitle);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-linen text-espresso overflow-x-clip w-full max-w-full">
      {/* Navigation */}
      <Navbar
        data={data}
        onOpenAdmin={() => setAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Hero Section */}
      <Hero data={data} onSelectShoot={handleSelectShoot} />

      {/* Portfolio Gallery Section with Real Stories & Lightbox */}
      <Gallery
        tag={data.galleryTag}
        title={data.galleryTitle}
        gallery={data.gallery}
        featuredStories={data.featuredStories}
        onSelectShoot={handleSelectShoot}
      />

      {/* Every Milestone Matters (Choose Your Shoot Section) */}
      <ShootsGrid
        tag={data.shootsTag}
        heading={data.shootsHeading}
        sub={data.shootsSub}
        shoots={data.shootTypes}
        onSelectShoot={handleSelectShoot}
      />

      {/* Hampi Heritage Shoot Guide & Location Spotlight */}
      <HampiGuide
        tag={data.hampiGuideTag}
        heading={data.hampiGuideHeading}
        sub={data.hampiGuideSub}
        locations={data.hampiLocations}
        onSelectShoot={handleSelectShoot}
      />

      {/* About Arvind Section */}
      <About data={data} />

      {/* Words of Love (Client Testimonials & Reviews) */}
      <Testimonials
        tag={data.testimonialsTag}
        heading={data.testimonialsHeading}
        sub={data.testimonialsSub}
        testimonials={data.testimonials}
        whatsappNumber={data.whatsapp}
      />

      {/* Interactive Shoot Investment Estimator */}
      <CostEstimator
        tag={data.estimatorTag}
        heading={data.estimatorHeading}
        sub={data.estimatorSub}
        whatsappNumber={data.whatsapp}
        customServiceTags={data.customServiceTags}
        customEventTags={data.customEventTags}
      />

      {/* Transparent Packages Section */}
      <Packages
        tag={data.pkgTag}
        heading={data.pkgHeading}
        packages={data.packages}
        whatsappNumber={data.whatsapp}
      />

      {/* Frequently Asked Questions (FAQ) */}
      <FaqSection
        tag={data.faqTag}
        heading={data.faqHeading}
        sub={data.faqSub}
        faqs={data.faqs}
        whatsappNumber={data.whatsapp}
      />

      {/* Interactive Booking & WhatsApp Inquiry */}
      <BookingSection
        data={data}
        preselectedShoot={selectedShootForBooking}
      />

      {/* Footer */}
      <Footer
        data={data}
        onOpenAdmin={() => setAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Secret Admin Login Modal */}
      <AdminLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Full-Screen Studio Admin & Settings Dashboard */}
      <StudioDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
        onLogout={handleLogout}
      />

      {/* Discreet Floating Pill for Logged-In Admin */}
      {isAdminLoggedIn && (
        <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-espresso/95 text-white backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border border-terracotta/40 shadow-2xl flex items-center gap-2.5 sm:gap-3 text-xs max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-4 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="font-semibold hidden sm:inline text-linen">Admin Logged In</span>
          <button
            onClick={() => setAdminOpen(true)}
            className="bg-terracotta hover:bg-white hover:text-espresso px-2.5 sm:px-3 py-1 rounded-xl font-bold text-[11px] transition cursor-pointer shadow-xs whitespace-nowrap"
          >
            🛠️ Settings
          </button>
          <button
            onClick={handleLogout}
            title="Sign Out of Studio Admin"
            className="text-linen/60 hover:text-amber-300 text-xs px-1 cursor-pointer font-medium"
          >
            Logout
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-espresso text-linen px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl shadow-2xl border border-terracotta/40 text-xs sm:text-sm font-semibold flex items-center gap-2 max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-5 duration-200">
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
