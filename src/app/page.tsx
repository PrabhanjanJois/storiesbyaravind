"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShootsGrid from "@/components/ShootsGrid";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Packages from "@/components/Packages";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import AdminCMSModal from "@/components/AdminCMSModal";
import { DEFAULT_STUDIO_DATA, StudioData } from "@/data/defaultData";

const STORAGE_KEY = "storiesbyaravind_data_v1";

export default function Home() {
  const [data, setData] = useState<StudioData>(DEFAULT_STUDIO_DATA);
  const [adminOpen, setAdminOpen] = useState(false);
  const [selectedShootForBooking, setSelectedShootForBooking] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hydrate custom edits from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((prev) => ({
          ...prev,
          ...parsed,
        }));
      }
    } catch {
      // Fallback to default
    }
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

  const handleSelectShoot = (shootTitle: string) => {
    setSelectedShootForBooking(shootTitle);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-linen text-espresso">
      {/* Navigation */}
      <Navbar data={data} onOpenAdmin={() => setAdminOpen(true)} />

      {/* Hero Section */}
      <Hero data={data} />

      {/* Choose Your Shoot Section */}
      <ShootsGrid
        tag={data.shootsTag}
        heading={data.shootsHeading}
        sub={data.shootsSub}
        shoots={data.shootTypes}
        onSelectShoot={handleSelectShoot}
      />

      {/* Portfolio Gallery Section with Filter Tabs & Lightbox */}
      <Gallery
        tag={data.galleryTag}
        title={data.galleryTitle}
        gallery={data.gallery}
      />

      {/* About Arvind Section */}
      <About data={data} />

      {/* Transparent Packages Section */}
      <Packages
        tag={data.pkgTag}
        heading={data.pkgHeading}
        packages={data.packages}
        whatsappNumber={data.whatsapp}
      />

      {/* Interactive Booking & WhatsApp Inquiry */}
      <BookingSection
        data={data}
        preselectedShoot={selectedShootForBooking}
      />

      {/* Footer */}
      <Footer data={data} onOpenAdmin={() => setAdminOpen(true)} />

      {/* Master Studio Admin CMS Modal */}
      <AdminCMSModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-espresso text-linen px-4 py-3 rounded-xl shadow-2xl border border-terracotta/40 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-200">
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
