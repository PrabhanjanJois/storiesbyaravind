"use client";

import React, { useState, useEffect } from "react";
import {
  StudioData,
  HeroSlide,
  ShootType,
  GalleryItem,
  PackageTier,
  HampiLocationItem,
  TestimonialItem,
  FaqItem,
  CustomServiceTag,
  CustomEventTag,
  FeaturedStoryItem,
  StoryPhoto,
} from "@/data/defaultData";
import ImageInputControl from "./ImageInputControl";
import StoryModal from "../StoryModal";

interface StudioDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  data: StudioData;
  onSave: (newData: StudioData) => void;
  onReset: () => void;
  onLogout: () => void;
}

export default function StudioDashboard({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
  onLogout,
}: StudioDashboardProps) {
  const [formData, setFormData] = useState<StudioData>(data);
  const [activeTab, setActiveTab] = useState<
    "hero" | "pricing" | "shoots" | "gallery" | "hampi" | "stories" | "testimonials" | "faqs" | "profile"
  >("hero");
  const [savedAlert, setSavedAlert] = useState(false);
  const [previewStory, setPreviewStory] = useState<FeaturedStoryItem | null>(null);

  // Keep formData synchronized with current studio data whenever dashboard is opened
  useEffect(() => {
    if (isOpen) {
      setFormData(data);
    }
  }, [isOpen, data]);

  if (!isOpen) return null;

  const handleChange = (key: keyof StudioData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  // -------------------- HERO SLIDES --------------------
  const handleSlideChange = (index: number, field: keyof HeroSlide, val: string) => {
    setFormData((prev) => {
      const updated = [...(prev.heroSlides || [])];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, heroSlides: updated };
    });
  };

  const handleAddHeroSlide = () => {
    const newSlide: HeroSlide = {
      id: Date.now(),
      title: "New Featured Celebration",
      tag: "Wedding & Celebrations",
      location: "Hospet, Karnataka",
      image: "/images/hero_main.jpg",
      accentText: "Captured with authentic emotion",
      shootLink: "Traditional Wedding Shoot",
    };
    setFormData((prev) => ({
      ...prev,
      heroSlides: [...(prev.heroSlides || []), newSlide],
    }));
  };

  const handleRemoveHeroSlide = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      heroSlides: (prev.heroSlides || []).filter((_, i) => i !== index),
    }));
  };

  // -------------------- PRICING & PACKAGES --------------------
  const handlePackageChange = (index: number, field: keyof PackageTier, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.packages];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, packages: updated };
    });
  };

  const handleAddPackageFeature = (pkgIndex: number) => {
    setFormData((prev) => {
      const updated = [...prev.packages];
      if (updated[pkgIndex]) {
        updated[pkgIndex] = {
          ...updated[pkgIndex],
          features: [...updated[pkgIndex].features, "New deliverable or coverage item"],
        };
      }
      return { ...prev, packages: updated };
    });
  };

  const handleUpdatePackageFeature = (pkgIndex: number, featIndex: number, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.packages];
      if (updated[pkgIndex]) {
        const feats = [...updated[pkgIndex].features];
        feats[featIndex] = val;
        updated[pkgIndex] = {
          ...updated[pkgIndex],
          features: feats,
        };
      }
      return { ...prev, packages: updated };
    });
  };

  const handleRemovePackageFeature = (pkgIndex: number, featIndex: number) => {
    setFormData((prev) => {
      const updated = [...prev.packages];
      if (updated[pkgIndex]) {
        updated[pkgIndex] = {
          ...updated[pkgIndex],
          features: updated[pkgIndex].features.filter((_, i) => i !== featIndex),
        };
      }
      return { ...prev, packages: updated };
    });
  };

  const handleAddPackage = () => {
    const newPkg: PackageTier = {
      name: "Custom Celebration Package",
      price: "₹45,000",
      badge: "Custom Tier",
      features: [
        "Full day event photography coverage",
        "Unlimited high-resolution color-graded photos",
        "Handcrafted designer photo album",
      ],
    };
    setFormData((prev) => ({
      ...prev,
      packages: [...prev.packages, newPkg],
    }));
  };

  const handleRemovePackage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      packages: prev.packages.filter((_, i) => i !== index),
    }));
  };

  // -------------------- CUSTOM SERVICE TAGS (Candid, Drone, etc) --------------------
  const handleServiceTagChange = (
    index: number,
    field: keyof CustomServiceTag,
    val: string | number
  ) => {
    setFormData((prev) => {
      const updated = [...(prev.customServiceTags || [])];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, customServiceTags: updated };
    });
  };

  const handleAddServiceTag = () => {
    const newTag: CustomServiceTag = {
      id: `service_${Date.now()}`,
      name: "Candid Moments Teaser",
      tag: "Candid Teaser",
      price: 8000,
      desc: "Unscripted documentary captures of raw emotions, laughter, and tearful blessings.",
    };
    setFormData((prev) => ({
      ...prev,
      customServiceTags: [...(prev.customServiceTags || []), newTag],
    }));
  };

  const handleRemoveServiceTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      customServiceTags: (prev.customServiceTags || []).filter((_, i) => i !== index),
    }));
  };

  // -------------------- CUSTOM EVENT TAGS --------------------
  const handleEventTagChange = (
    index: number,
    field: keyof CustomEventTag,
    val: string | number
  ) => {
    setFormData((prev) => {
      const updated = [...(prev.customEventTags || [])];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, customEventTags: updated };
    });
  };

  const handleAddEventTag = () => {
    const newEvent: CustomEventTag = {
      id: `event_${Date.now()}`,
      name: "Special Ritual / Sangeet Night",
      base: 15000,
    };
    setFormData((prev) => ({
      ...prev,
      customEventTags: [...(prev.customEventTags || []), newEvent],
    }));
  };

  const handleRemoveEventTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      customEventTags: (prev.customEventTags || []).filter((_, i) => i !== index),
    }));
  };

  // -------------------- SHOOTS GRID --------------------
  const handleShootChange = (index: number, field: keyof ShootType, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.shootTypes];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, shootTypes: updated };
    });
  };

  // -------------------- GALLERY --------------------
  const handleGalleryChange = (index: number, field: keyof GalleryItem, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.gallery];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, gallery: updated };
    });
  };

  const handleAddGalleryItem = () => {
    const newItem: GalleryItem = {
      id: Date.now(),
      title: "New Captured Milestone",
      loc: "Hospet / Hampi",
      cat: "Weddings",
      url: "/images/hero_main.jpg",
    };
    setFormData((prev) => ({
      ...prev,
      gallery: [newItem, ...prev.gallery],
    }));
  };

  const handleRemoveGalleryItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
  };

  // -------------------- HAMPI LOCATIONS --------------------
  const handleHampiLocChange = (index: number, field: keyof HampiLocationItem, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.hampiLocations];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, hampiLocations: updated };
    });
  };

  const handleAddHampiLoc = () => {
    const newLoc: HampiLocationItem = {
      id: Date.now(),
      name: "New Hampi Heritage Spot",
      tagline: "Sacred Stone Temples & Tungabhadra River Sunset",
      description: "Atmospheric ancient boulders, secluded temple pillared corridors, and golden hour reflections.",
      bestTime: "Sunrise (5:45 AM – 8:00 AM) or Sunset (4:30 PM – 6:15 PM)",
      vibe: "Timeless Heritage & Mystical Granite Boulders",
      recommendedOutfits: "Traditional Kanjeevaram Saree / Kurta Pajama in warm earthy tones",
      image: "/images/gallery_sunrise_by_the_stone_ruins.jpg",
    };
    setFormData((prev) => ({
      ...prev,
      hampiLocations: [...(prev.hampiLocations || []), newLoc],
    }));
  };

  const handleRemoveHampiLoc = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      hampiLocations: (prev.hampiLocations || []).filter((_, i) => i !== index),
    }));
  };

  // -------------------- TESTIMONIALS --------------------
  const handleTestimonialChange = (index: number, field: keyof TestimonialItem, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.testimonials];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, testimonials: updated };
    });
  };

  // -------------------- FAQS --------------------
  const handleFaqChange = (index: number, field: keyof FaqItem, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.faqs];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, faqs: updated };
    });
  };

  // -------------------- STORIES & PHOTO ESSAYS --------------------
  const handleStoryChange = (index: number, field: keyof FeaturedStoryItem, val: any) => {
    setFormData((prev) => {
      const updated = [...(prev.featuredStories || [])];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, featuredStories: updated };
    });
  };

  const handleAddStory = () => {
    const newStory: FeaturedStoryItem = {
      id: Date.now(),
      title: "New Celebration Story",
      subtitle: "Auspicious Rituals & Joyful Family Moments",
      couple: "Couple / Family",
      location: "Hospet, Karnataka",
      eventDate: "Recent Celebration",
      coverImage: "/images/hero_main.jpg",
      summary: "Documenting authentic South Indian traditions, candid smiles, and heartfelt blessings.",
      quote: "Arvind documented our special day with timeless warmth and artistry.",
      photos: [
        {
          url: "/images/gallery_sacred_muhurtham_rituals.jpg",
          caption: "Sacred rituals and family blessings",
        },
      ],
    };
    setFormData((prev) => ({
      ...prev,
      featuredStories: [...(prev.featuredStories || []), newStory],
    }));
  };

  const handleRemoveStory = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      featuredStories: (prev.featuredStories || []).filter((_, i) => i !== index),
    }));
  };

  const handleAddStoryPhoto = (storyIndex: number) => {
    setFormData((prev) => {
      const updated = [...(prev.featuredStories || [])];
      if (updated[storyIndex]) {
        const newPhoto: StoryPhoto = {
          url: "/images/hero_main.jpg",
          caption: "A special moment from the celebration",
        };
        updated[storyIndex] = {
          ...updated[storyIndex],
          photos: [...(updated[storyIndex].photos || []), newPhoto],
        };
      }
      return { ...prev, featuredStories: updated };
    });
  };

  const handleUpdateStoryPhoto = (
    storyIndex: number,
    photoIndex: number,
    field: keyof StoryPhoto,
    val: string
  ) => {
    setFormData((prev) => {
      const updated = [...(prev.featuredStories || [])];
      if (updated[storyIndex] && updated[storyIndex].photos[photoIndex]) {
        const updatedPhotos = [...updated[storyIndex].photos];
        updatedPhotos[photoIndex] = {
          ...updatedPhotos[photoIndex],
          [field]: val,
        };
        updated[storyIndex] = {
          ...updated[storyIndex],
          photos: updatedPhotos,
        };
      }
      return { ...prev, featuredStories: updated };
    });
  };

  const handleRemoveStoryPhoto = (storyIndex: number, photoIndex: number) => {
    setFormData((prev) => {
      const updated = [...(prev.featuredStories || [])];
      if (updated[storyIndex]) {
        updated[storyIndex] = {
          ...updated[storyIndex],
          photos: updated[storyIndex].photos.filter((_, i) => i !== photoIndex),
        };
      }
      return { ...prev, featuredStories: updated };
    });
  };

  const navTabs = [
    { id: "hero", label: "Hero Slider Images", icon: "🖼️", count: formData.heroSlides?.length },
    { id: "gallery", label: "Portfolio Stories & Gallery", icon: "🎨", count: formData.featuredStories?.length },
    { id: "shoots", label: "Shoots Grid (6 Milestones)", icon: "📸", count: formData.shootTypes?.length },
    { id: "pricing", label: "Pricing & Packages", icon: "💰", count: formData.packages?.length },
    { id: "hampi", label: "Hampi Heritage Guide", icon: "🏛️", count: formData.hampiLocations?.length },
    { id: "testimonials", label: "Client Testimonials", icon: "💬", count: formData.testimonials?.length },
    { id: "faqs", label: "Frequently Asked Questions", icon: "❓", count: formData.faqs?.length },
    { id: "profile", label: "Studio Profile & Contact", icon: "⚙️" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF7F2] text-espresso flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* Top Header Bar */}
      <header className="min-h-16 py-3 bg-espresso text-linen px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-terracotta/30 shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0 border border-white/10">
            📸
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-base sm:text-xl font-bold text-white tracking-tight">
                Studio Manager
              </h2>
              <span className="text-[9px] bg-terracotta text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                CMS
              </span>
            </div>
            <p className="text-[11px] text-linen/70 font-light hidden md:block">
              Paste Google Drive links, upload device images, and alter packages & pricing
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
          {savedAlert && (
            <span className="text-xs text-amber-300 font-bold animate-bounce hidden sm:inline">
              ✓ Saved & Synced!
            </span>
          )}

          <button
            type="button"
            onClick={handleSave}
            className="px-3.5 sm:px-4 py-2 rounded-xl bg-terracotta hover:bg-amber-600 text-white text-xs font-bold transition cursor-pointer shadow-md flex items-center gap-1.5"
          >
            <span>💾</span>
            <span>Save All</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-semibold transition cursor-pointer flex items-center gap-1.5"
            title="Return to website preview"
          >
            <span>👁️</span>
            <span>Live Site</span>
          </button>

          <button
            type="button"
            onClick={onLogout}
            className="px-2.5 py-2 text-xs text-linen/60 hover:text-red-400 transition cursor-pointer font-medium"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Horizontal Tabs Switcher (visible < lg screens) */}
      <div className="lg:hidden bg-ivory/95 border-b border-espresso/15 px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 shadow-xs">
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                isActive
                  ? "bg-espresso text-linen shadow-xs ring-1 ring-terracotta/40"
                  : "bg-white text-charcoal border border-espresso/10 hover:bg-linen"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label.split("(")[0].trim()}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-terracotta text-white" : "bg-linen text-charcoal/70"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Workspace: Sidebar + Content Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Navigation (Desktop only) */}
        <aside className="hidden lg:flex w-72 bg-ivory/80 border-r border-espresso/10 flex-col justify-between p-4 overflow-y-auto shrink-0 shadow-inner">
          <div className="space-y-1.5">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-charcoal/60">
              Customizer Sections
            </div>
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-[13px] font-semibold transition cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-espresso text-linen shadow-sm ring-1 ring-terracotta/40"
                      : "text-charcoal hover:bg-white hover:text-espresso"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive ? "bg-terracotta text-white" : "bg-linen text-charcoal/70"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Reset Defaults Control */}
          <div className="pt-4 border-t border-espresso/10 mt-4 px-2">
            <button
              type="button"
              onClick={() => {
                if (confirm("Reset ALL images, packages, and copy back to default studio settings?")) {
                  onReset();
                  onClose();
                }
              }}
              className="w-full py-2.5 text-xs text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition cursor-pointer font-medium text-center border border-red-200/60"
            >
              🔄 Reset to Studio Defaults
            </button>
          </div>
        </aside>

        {/* Right Form Content Pane */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 max-w-5xl w-full mx-auto">
          {/* ==================== TAB 1: HERO SLIDER ==================== */}
          {activeTab === "hero" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-espresso">
                    Hero Showcase Slider Images
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                    Add or edit the sliding photographs displayed prominently in the homepage hero. Supports Google Drive sharing links and direct computer uploads.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddHeroSlide}
                  className="px-4 py-2 bg-terracotta hover:bg-espresso text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
                >
                  <span>➕ Add Hero Slide</span>
                </button>
              </div>

              <div className="space-y-6">
                {(formData.heroSlides || []).map((slide, idx) => (
                  <div
                    key={slide.id || idx}
                    className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-5"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-espresso/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                        Slide 0{idx + 1} • {slide.tag}
                      </span>
                      {(formData.heroSlides || []).length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveHeroSlide(idx)}
                          className="text-xs text-red-600 hover:underline cursor-pointer font-medium"
                        >
                          Delete Slide
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Slide Title
                        </label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => handleSlideChange(idx, "title", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Category Badge Tag
                        </label>
                        <input
                          type="text"
                          value={slide.tag}
                          onChange={(e) => handleSlideChange(idx, "tag", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Location Tag
                        </label>
                        <input
                          type="text"
                          value={slide.location}
                          onChange={(e) => handleSlideChange(idx, "location", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Accent Text / Sub-quote
                        </label>
                        <input
                          type="text"
                          value={slide.accentText || ""}
                          onChange={(e) => handleSlideChange(idx, "accentText", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label={`Hero Slide 0${idx + 1} Image`}
                      value={slide.image}
                      onChange={(newUrl) => handleSlideChange(idx, "image", newUrl)}
                      recommendedSize="Recommended: 1200 x 1500 px (4:5 Portrait)"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 2: PRICING & PACKAGES ==================== */}
          {activeTab === "pricing" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-espresso">
                    Pricing & Celebration Packages
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                    Customize your pricing tiers, investment figures, badges, and included deliverables line by line.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddPackage}
                  className="px-4 py-2 bg-terracotta hover:bg-espresso text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
                >
                  <span>➕ Add Package Tier</span>
                </button>
              </div>

              <div className="space-y-6">
                {formData.packages.map((pkg, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-5"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-espresso/10">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                          Tier 0{pIdx + 1}
                        </span>
                        <span className="text-sm font-serif font-bold text-espresso">
                          • {pkg.name}
                        </span>
                      </div>
                      {formData.packages.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemovePackage(pIdx)}
                          className="text-xs text-red-600 hover:underline cursor-pointer font-medium"
                        >
                          Delete Tier
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Package Name
                        </label>
                        <input
                          type="text"
                          value={pkg.name}
                          onChange={(e) => handlePackageChange(pIdx, "name", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Display Price (e.g. ₹35,000)
                        </label>
                        <input
                          type="text"
                          value={pkg.price}
                          onChange={(e) => handlePackageChange(pIdx, "price", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs font-bold text-terracotta rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Highlight Badge (Optional)
                        </label>
                        <input
                          type="text"
                          value={pkg.badge || ""}
                          onChange={(e) => handlePackageChange(pIdx, "badge", e.target.value)}
                          placeholder="e.g. Most Popular"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    {/* Features & Deliverables Checklist */}
                    <div className="p-4 bg-linen/60 rounded-2xl border border-espresso/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-espresso uppercase tracking-wider">
                          Included Deliverables & Features ({pkg.features.length})
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAddPackageFeature(pIdx)}
                          className="text-xs text-terracotta hover:underline font-bold cursor-pointer"
                        >
                          + Add Line Item
                        </button>
                      </div>

                      <div className="space-y-2">
                        {pkg.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <span className="text-xs text-terracotta font-bold">✓</span>
                            <input
                              type="text"
                              value={feat}
                              onChange={(e) => handleUpdatePackageFeature(pIdx, fIdx, e.target.value)}
                              className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-espresso/15 bg-white focus:border-terracotta outline-none"
                            />
                            {pkg.features.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleRemovePackageFeature(pIdx, fIdx)}
                                className="text-charcoal/50 hover:text-red-600 text-sm px-1 cursor-pointer"
                                title="Remove line item"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 2: Custom Service Tags & Add-on Prices (Candid, Drone, Albums, Films) */}
              <div className="pt-8 border-t border-espresso/15 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-espresso/10">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-espresso">
                      Custom Service & Tag Pricing (Candid, Drone, Albums, Film)
                    </h4>
                    <p className="text-xs text-charcoal/70 font-light mt-0.5">
                      Add and alter custom services like Candid Photography, Drone, and Luxury Albums with their live calculation price tags.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddServiceTag}
                    className="px-3.5 py-1.5 bg-terracotta hover:bg-espresso text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <span>➕ Add Custom Tag & Price</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(formData.customServiceTags || []).map((srv, sIdx) => (
                    <div
                      key={srv.id || sIdx}
                      className="p-5 rounded-2xl bg-white border border-espresso/15 shadow-xs space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-espresso/10">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-full">
                            {srv.tag || "TAG"}
                          </span>
                          <span className="text-xs font-serif font-bold text-espresso truncate max-w-[150px]">
                            {srv.name}
                          </span>
                        </div>
                        {(formData.customServiceTags || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveServiceTag(sIdx)}
                            className="text-xs text-red-500 hover:text-red-700 cursor-pointer font-medium"
                          >
                            ✕ Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                            Service Name
                          </label>
                          <input
                            type="text"
                            value={srv.name}
                            onChange={(e) => handleServiceTagChange(sIdx, "name", e.target.value)}
                            placeholder="e.g. Candid Photography"
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                            Tag / Badge Label
                          </label>
                          <input
                            type="text"
                            value={srv.tag}
                            onChange={(e) => handleServiceTagChange(sIdx, "tag", e.target.value)}
                            placeholder="e.g. Candid"
                            className="w-full px-3 py-1.5 text-xs font-bold text-terracotta rounded-lg border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                            Price (₹ in INR)
                          </label>
                          <input
                            type="number"
                            value={srv.price}
                            onChange={(e) =>
                              handleServiceTagChange(sIdx, "price", parseInt(e.target.value, 10) || 0)
                            }
                            className="w-full px-3 py-1.5 text-xs font-extrabold text-terracotta rounded-lg border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                            Short Benefit
                          </label>
                          <input
                            type="text"
                            value={srv.desc || ""}
                            onChange={(e) => handleServiceTagChange(sIdx, "desc", e.target.value)}
                            placeholder="e.g. Unscripted candid laughter & tears"
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Event Rituals & Base Estimator Rates */}
              <div className="pt-8 border-t border-espresso/15 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-espresso/10">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-espresso">
                      Event Rituals & Base Rates
                    </h4>
                    <p className="text-xs text-charcoal/70 font-light mt-0.5">
                      Set base ceremony rates for weddings, sangeet, pre-wedding, and maternity celebrations.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddEventTag}
                    className="px-3.5 py-1.5 bg-espresso hover:bg-terracotta text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <span>➕ Add Event Ritual</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {(formData.customEventTags || []).map((ev, eIdx) => (
                    <div
                      key={ev.id || eIdx}
                      className="p-4 rounded-xl bg-white border border-espresso/15 shadow-xs space-y-2 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider">
                          Ritual 0{eIdx + 1}
                        </span>
                        {(formData.customEventTags || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveEventTag(eIdx)}
                            className="text-[11px] text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          value={ev.name}
                          onChange={(e) => handleEventTagChange(eIdx, "name", e.target.value)}
                          placeholder="Event Ceremony Name"
                          className="w-full px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-espresso/20 bg-linen/30 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-charcoal/70 font-bold">Base ₹</span>
                        <input
                          type="number"
                          value={ev.base}
                          onChange={(e) =>
                            handleEventTagChange(eIdx, "base", parseInt(e.target.value, 10) || 0)
                          }
                          className="flex-1 px-2.5 py-1 text-xs font-extrabold text-terracotta rounded-lg border border-espresso/20 bg-linen/30 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==================== TAB 3: SHOOTS GRID ==================== */}
          {activeTab === "shoots" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="pb-4 border-b border-espresso/10">
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  Celebration Shoot Categories
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                  Customize the 6 milestone celebration cards on the homepage with custom tags and pricing.
                </p>
              </div>

              <div className="space-y-6">
                {formData.shootTypes.map((shoot, idx) => (
                  <div
                    key={shoot.id}
                    className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta block border-b border-espresso/10 pb-2">
                      0{idx + 1} • {shoot.title}
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Category Title
                        </label>
                        <input
                          type="text"
                          value={shoot.title}
                          onChange={(e) => handleShootChange(idx, "title", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Custom Tags (e.g. Candid • Drone)
                        </label>
                        <input
                          type="text"
                          value={shoot.tag}
                          onChange={(e) => handleShootChange(idx, "tag", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Starting Price (e.g. From ₹45,000)
                        </label>
                        <input
                          type="text"
                          value={shoot.price || ""}
                          onChange={(e) => handleShootChange(idx, "price", e.target.value)}
                          placeholder="From ₹45,000"
                          className="w-full px-3.5 py-2 text-xs font-bold text-terracotta rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={shoot.desc}
                          onChange={(e) => handleShootChange(idx, "desc", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label={`${shoot.title} Cover Photo`}
                      value={shoot.url}
                      onChange={(newUrl) => handleShootChange(idx, "url", newUrl)}
                      recommendedSize="Recommended: 800 x 1000 px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 4: PORTFOLIO GALLERY & STORIES ==================== */}
          {(activeTab === "gallery" || activeTab === "stories") && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-espresso/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-espresso">
                    Portfolio Gallery &amp; Narrative Stories ({(formData.featuredStories || []).length})
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                    Edit the celebration stories shown in the Portfolio Gallery carousel. Tap &quot;👁️ View / Preview Story Modal&quot; on any story to open and view the full interactive story viewer.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddStory}
                  className="bg-espresso hover:bg-terracotta text-white px-4 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95 shrink-0 self-start sm:self-auto"
                >
                  <span>+ Add New Story</span>
                </button>
              </div>

              {/* Section Header Customization */}
              <div className="p-5 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso">
                  Portfolio Section Badge &amp; Heading
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Section Badge / Tag
                    </label>
                    <input
                      type="text"
                      value={formData.galleryTag || ""}
                      onChange={(e) => handleChange("galleryTag", e.target.value)}
                      placeholder="NARRATIVE EDITORIAL JOURNALS"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Section Title / Heading
                    </label>
                    <input
                      type="text"
                      value={formData.galleryTitle || ""}
                      onChange={(e) => handleChange("galleryTitle", e.target.value)}
                      placeholder="Featured Real Wedding & Event Stories"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Stories Cards List */}
              <div className="space-y-8">
                {(formData.featuredStories || []).map((story, idx) => (
                  <div
                    key={story.id}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-6"
                  >
                    {/* Story Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-espresso/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-terracotta/10 text-terracotta text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                          Story 0{idx + 1}
                        </span>
                        <span className="font-serif text-lg font-bold text-espresso truncate">
                          {story.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => setPreviewStory(story)}
                          className="bg-ivory hover:bg-espresso hover:text-white text-espresso border border-espresso/25 px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                          title="Open full interactive Story Modal to view"
                        >
                          <span>👁️ View / Preview Story Modal</span>
                        </button>
                        {(formData.featuredStories || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveStory(idx)}
                            className="text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition font-medium cursor-pointer"
                          >
                            ✕ Remove Story
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Story Title
                        </label>
                        <input
                          type="text"
                          value={story.title}
                          onChange={(e) => handleStoryChange(idx, "title", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Subtitle / Journal Occasion
                        </label>
                        <input
                          type="text"
                          value={story.subtitle}
                          onChange={(e) => handleStoryChange(idx, "subtitle", e.target.value)}
                          placeholder="e.g. Auspicious Rituals & Joyful Family Moments"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Couple / Family Name
                        </label>
                        <input
                          type="text"
                          value={story.couple}
                          onChange={(e) => handleStoryChange(idx, "couple", e.target.value)}
                          placeholder="e.g. Karthik & Sneha"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Location (e.g. Hospet / Hampi)
                        </label>
                        <input
                          type="text"
                          value={story.location}
                          onChange={(e) => handleStoryChange(idx, "location", e.target.value)}
                          placeholder="e.g. Hospet / Hampi"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Event Date (e.g. November 2025)
                        </label>
                        <input
                          type="text"
                          value={story.eventDate}
                          onChange={(e) => handleStoryChange(idx, "eventDate", e.target.value)}
                          placeholder="e.g. November 2025"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Couple Quote / Highlight (In Story Modal)
                        </label>
                        <input
                          type="text"
                          value={story.quote}
                          onChange={(e) => handleStoryChange(idx, "quote", e.target.value)}
                          placeholder="e.g. Arvind documented our special day with timeless warmth..."
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div className="md:col-span-2 lg:col-span-3">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Story Narrative Summary (The Story &amp; Emotion in Modal)
                        </label>
                        <textarea
                          rows={3}
                          value={story.summary}
                          onChange={(e) => handleStoryChange(idx, "summary", e.target.value)}
                          placeholder="Prose describing the couple's celebration, traditions, and memories..."
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 focus:border-terracotta outline-none leading-relaxed"
                        />
                      </div>
                    </div>

                    {/* Cover Image */}
                    <div className="pt-2 border-t border-espresso/10">
                      <ImageInputControl
                        label={`${story.title} Cover Image (Shown on Slider & Story Modal Hero)`}
                        value={story.coverImage}
                        onChange={(newUrl) => handleStoryChange(idx, "coverImage", newUrl)}
                        recommendedSize="Recommended: 1200 x 800 px (3:2)"
                      />
                    </div>

                    {/* Inner Story Gallery Photos */}
                    <div className="pt-4 border-t border-espresso/10 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-serif text-base font-bold text-espresso">
                            Captured Moments &amp; Rituals (Story Modal Photo Gallery)
                          </h4>
                          <p className="text-[11px] text-charcoal/60">
                            These photographs and captions appear chronologically inside the story modal when clients click &quot;Read Full Photo Essay&quot;.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleAddStoryPhoto(idx)}
                          className="bg-ivory hover:bg-espresso hover:text-white text-espresso border border-espresso/20 px-3 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto"
                        >
                          <span>+ Add Photo to Story</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(story.photos || []).map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-4 rounded-2xl bg-linen/50 border border-espresso/10 space-y-3 relative group/photo"
                          >
                            <div className="flex items-center justify-between border-b border-espresso/10 pb-1.5">
                              <span className="text-[10px] font-bold text-terracotta uppercase">
                                Moment 0{pIdx + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleRemoveStoryPhoto(idx, pIdx)}
                                className="text-[11px] text-red-500 hover:text-red-700 hover:underline cursor-pointer"
                              >
                                ✕ Delete
                              </button>
                            </div>

                            <ImageInputControl
                              label={`Moment 0${pIdx + 1} Photo`}
                              value={photo.url}
                              onChange={(newUrl) =>
                                handleUpdateStoryPhoto(idx, pIdx, "url", newUrl)
                              }
                              recommendedSize="Recommended: 1200 x 900 px (4:3)"
                            />

                            <div>
                              <label className="block text-[11px] font-bold text-espresso uppercase mb-1">
                                Caption / Moment Description
                              </label>
                              <input
                                type="text"
                                value={photo.caption}
                                onChange={(e) =>
                                  handleUpdateStoryPhoto(idx, pIdx, "caption", e.target.value)
                                }
                                placeholder="e.g. Sacred fire rituals at Muhurtham"
                                className="w-full px-3 py-1.5 text-xs rounded-xl border border-espresso/20 bg-white focus:border-terracotta outline-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Add Story Button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleAddStory}
                  className="bg-espresso hover:bg-terracotta text-white px-5 py-3 rounded-2xl font-bold text-xs transition cursor-pointer inline-flex items-center gap-2 shadow-md active:scale-95"
                >
                  <span>+ Add Another Celebration Story</span>
                </button>
              </div>

              {/* Optional Collapsible for Legacy Standalone Photos */}
              <details className="mt-8 border border-espresso/15 rounded-3xl p-5 bg-white shadow-xs">
                <summary className="text-xs font-bold text-espresso uppercase tracking-wider cursor-pointer flex items-center justify-between select-none">
                  <span>📁 Legacy Standalone Photos Grid ({formData.gallery.length} items)</span>
                  <span className="text-[11px] text-charcoal/50 font-normal">Click to expand</span>
                </summary>
                <div className="pt-5 space-y-6 border-t border-espresso/10 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-charcoal/70">
                      Standalone photo items preserved from initial setup.
                    </p>
                    <button
                      type="button"
                      onClick={handleAddGalleryItem}
                      className="px-3 py-1.5 bg-terracotta hover:bg-espresso text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1"
                    >
                      <span>➕ Add Photo</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formData.gallery.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-linen/30 border border-espresso/15 space-y-3"
                      >
                        <div className="flex items-center justify-between pb-1 border-b border-espresso/10">
                          <span className="text-xs font-bold text-espresso">Photo #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryItem(idx)}
                            className="text-xs text-red-600 hover:underline cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handleGalleryChange(idx, "title", e.target.value)}
                            placeholder="Title"
                            className="px-2 py-1 text-xs rounded border border-espresso/20 bg-white"
                          />
                          <input
                            type="text"
                            value={item.loc}
                            onChange={(e) => handleGalleryChange(idx, "loc", e.target.value)}
                            placeholder="Location"
                            className="px-2 py-1 text-xs rounded border border-espresso/20 bg-white"
                          />
                        </div>
                        <ImageInputControl
                          label="Image"
                          value={item.url}
                          onChange={(newUrl) => handleGalleryChange(idx, "url", newUrl)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          )}

          {/* ==================== TAB 5: HAMPI GUIDE ==================== */}
          {activeTab === "hampi" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-espresso/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-espresso">
                    Hampi Heritage Locations Spotlight
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                    Showcase the signature photoshoot spots in Hampi and Vijayanagar.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddHampiLoc}
                  className="bg-espresso hover:bg-terracotta text-white px-4 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95 shrink-0 self-start sm:self-auto"
                >
                  <span>+ Add New Heritage Spot</span>
                </button>
              </div>

              <div className="space-y-6">
                {(formData.hampiLocations || []).map((loc, idx) => (
                  <div
                    key={loc.id}
                    className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-espresso/10 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-terracotta block">
                        Spot 0{idx + 1} • {loc.name}
                      </span>
                      {(formData.hampiLocations || []).length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveHampiLoc(idx)}
                          className="text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1 rounded-lg transition font-medium cursor-pointer"
                        >
                          ✕ Remove Spot
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Location Name
                        </label>
                        <input
                          type="text"
                          value={loc.name}
                          onChange={(e) => handleHampiLocChange(idx, "name", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Tagline
                        </label>
                        <input
                          type="text"
                          value={loc.tagline}
                          onChange={(e) => handleHampiLocChange(idx, "tagline", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Photography Secret / Advice
                        </label>
                        <textarea
                          rows={2}
                          value={loc.description}
                          onChange={(e) => handleHampiLocChange(idx, "description", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label={`${loc.name} Photograph`}
                      value={loc.image}
                      onChange={(newUrl) => handleHampiLocChange(idx, "image", newUrl)}
                      recommendedSize="Recommended: 1200 x 800 px (3:2)"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}



          {/* ==================== TAB 7: TESTIMONIALS ==================== */}
          {activeTab === "testimonials" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="pb-4 border-b border-espresso/10">
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  Client Testimonials & Reviews
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                  Manage the verified reviews shown in the &quot;Words of Love&quot; section.
                </p>
              </div>

              <div className="space-y-6">
                {formData.testimonials.map((t, idx) => (
                  <div
                    key={t.id}
                    className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta block border-b border-espresso/10 pb-2">
                      Review 0{idx + 1} • {t.couple} ({t.shootType})
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Client / Couple Name
                        </label>
                        <input
                          type="text"
                          value={t.couple}
                          onChange={(e) => handleTestimonialChange(idx, "couple", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Celebration Type
                        </label>
                        <input
                          type="text"
                          value={t.shootType}
                          onChange={(e) => handleTestimonialChange(idx, "shootType", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Review Quote
                        </label>
                        <textarea
                          rows={3}
                          value={t.quote}
                          onChange={(e) => handleTestimonialChange(idx, "quote", e.target.value)}
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 8: FAQS ==================== */}
          {activeTab === "faqs" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="pb-4 border-b border-espresso/10">
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-6">
                {formData.faqs.map((faq, idx) => (
                  <div
                    key={faq.id}
                    className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-3"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta block border-b border-espresso/10 pb-2">
                      Q 0{idx + 1}
                    </span>
                    <div>
                      <label className="block text-xs font-bold text-espresso uppercase mb-1">
                        Question
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => handleFaqChange(idx, "question", e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-espresso uppercase mb-1">
                        Answer
                      </label>
                      <textarea
                        rows={3}
                        value={faq.answer}
                        onChange={(e) => handleFaqChange(idx, "answer", e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 9: PROFILE & GENERAL ==================== */}
          {activeTab === "profile" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="pb-4 border-b border-espresso/10">
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  Studio Profile, Channels & Founder Bio
                </h3>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-espresso/15 shadow-sm space-y-5">
                <h4 className="font-bold text-xs uppercase tracking-wider text-espresso">
                  Core Brand Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => handleChange("brandName", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Tagline / Location Badge
                    </label>
                    <input
                      type="text"
                      value={formData.brandSub}
                      onChange={(e) => handleChange("brandSub", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      WhatsApp Direct Number
                    </label>
                    <input
                      type="text"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-espresso uppercase mb-1">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      value={formData.instagram}
                      onChange={(e) => handleChange("instagram", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-espresso/20 bg-linen/40"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-espresso/10">
                  <ImageInputControl
                    label="Founder Portrait Photo (About Section)"
                    value={formData.founderImage}
                    onChange={(newUrl) => handleChange("founderImage", newUrl)}
                    recommendedSize="Recommended: 800 x 1000 px"
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Live Interactive Story Modal Preview */}
      {previewStory && (
        <StoryModal
          story={previewStory}
          onClose={() => setPreviewStory(null)}
          onInquire={(storyTitle) => {
            setPreviewStory(null);
          }}
        />
      )}
    </div>
  );
}
