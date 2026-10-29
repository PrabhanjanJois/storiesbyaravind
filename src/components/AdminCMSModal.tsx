"use client";

import React, { useState, useEffect } from "react";
import {
  StudioData,
  HeroSlide,
  ShootType,
  GalleryItem,
  HampiLocationItem,
  FeaturedStoryItem,
  StoryPhoto,
} from "@/data/defaultData";
import ImageInputControl from "./admin/ImageInputControl";
import StoryModal from "./StoryModal";

interface AdminCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: StudioData;
  onSave: (newData: StudioData) => void;
  onReset: () => void;
  onLogout?: () => void;
}

export default function AdminCMSModal({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
  onLogout,
}: AdminCMSModalProps) {
  const [formData, setFormData] = useState<StudioData>(data);
  const [activeTab, setActiveTab] = useState<
    "hero" | "shoots" | "gallery" | "hampi" | "stories" | "general"
  >("hero");
  const [previewStory, setPreviewStory] = useState<FeaturedStoryItem | null>(null);

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

  // Hero Slide Handlers
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
      accentText: "Captured with natural emotion",
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

  // Shoot Category Handlers
  const handleShootChange = (index: number, field: keyof ShootType, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.shootTypes];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, shootTypes: updated };
    });
  };

  // Gallery Item Handlers
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
      title: "New Celebration Moment",
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

  // Hampi Location Handlers
  const handleHampiLocChange = (index: number, field: keyof HampiLocationItem, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.hampiLocations];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: val };
      }
      return { ...prev, hampiLocations: updated };
    });
  };

  // Story Handlers
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-espresso/20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-espresso text-linen px-6 sm:px-8 py-5 flex items-center justify-between border-b border-terracotta/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl border border-white/10">
              🛠️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Studio Media & Site Customizer
                </h3>
                <span className="text-[10px] bg-terracotta text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Admin Active
                </span>
              </div>
              <p className="text-xs text-linen/70 font-light mt-0.5">
                Paste Google Drive links or upload files directly for any image on your website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onLogout && (
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="text-xs text-linen/60 hover:text-amber-300 px-3 py-1.5 rounded-lg border border-white/10 hover:border-amber-300/40 transition cursor-pointer"
              >
                Sign Out
              </button>
            )}
            <button
              onClick={onClose}
              className="text-linen/70 hover:text-white text-2xl font-light cursor-pointer px-2"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-espresso/10 bg-ivory/60 px-6 sm:px-8 pt-3 gap-1 overflow-x-auto">
          {[
            { id: "hero", label: "🖼️ Hero Slider", count: formData.heroSlides?.length },
            { id: "shoots", label: "📸 Shoots Grid", count: formData.shootTypes?.length },
            { id: "gallery", label: "🎨 Portfolio Gallery", count: formData.gallery?.length },
            { id: "hampi", label: "🏛️ Hampi Guide", count: formData.hampiLocations?.length },
            { id: "stories", label: "📖 Real Stories", count: formData.featuredStories?.length },
            { id: "general", label: "⚙️ Studio & Bio" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`pb-3 px-4 text-xs font-bold transition cursor-pointer border-b-2 shrink-0 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? "border-terracotta text-terracotta bg-white/70 rounded-t-lg"
                  : "border-transparent text-charcoal/70 hover:text-espresso"
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className="text-[10px] bg-espresso/10 px-1.5 py-0.2 rounded-full font-semibold">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* TAB 1: HERO SLIDER IMAGES */}
          {activeTab === "hero" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-espresso/10">
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso">
                    Hero Showcase Slides
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    These slides cycle smoothly in the right frame of your homepage hero.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddHeroSlide}
                  className="px-3.5 py-1.5 bg-terracotta hover:bg-espresso text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <span>➕ Add Slide</span>
                </button>
              </div>

              <div className="space-y-5">
                {(formData.heroSlides || []).map((slide, idx) => (
                  <div
                    key={slide.id || idx}
                    className="p-5 rounded-2xl bg-white border border-espresso/15 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-espresso/10">
                      <span className="text-xs font-bold text-terracotta uppercase tracking-wider">
                        Slide 0{idx + 1}: {slide.tag}
                      </span>
                      {(formData.heroSlides || []).length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveHeroSlide(idx)}
                          className="text-xs text-red-600 hover:underline cursor-pointer"
                        >
                          Remove Slide
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Category / Event Tag
                        </label>
                        <input
                          type="text"
                          value={slide.tag}
                          onChange={(e) => handleSlideChange(idx, "tag", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Accent Quote / Philosophy
                        </label>
                        <input
                          type="text"
                          value={slide.accentText || ""}
                          onChange={(e) => handleSlideChange(idx, "accentText", e.target.value)}
                          placeholder="e.g. Raw emotion over stiff poses"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    {/* Image Input with Google Drive & File Upload */}
                    <ImageInputControl
                      label={`Hero Slide 0${idx + 1} Image`}
                      value={slide.image}
                      onChange={(newUrl) => handleSlideChange(idx, "image", newUrl)}
                      recommendedSize="Recommended: 1200 x 1500 px (Vertical 4:5 or 3:4)"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SHOOTS GRID IMAGES */}
          {activeTab === "shoots" && (
            <div className="space-y-6">
              <div className="pb-2 border-b border-espresso/10">
                <h4 className="font-serif text-lg font-bold text-espresso">
                  Celebration Shoot Categories
                </h4>
                <p className="text-xs text-charcoal/70">
                  Customize the 6 celebration category cards that clients browse and select.
                </p>
              </div>

              <div className="space-y-5">
                {formData.shootTypes.map((shoot, idx) => (
                  <div
                    key={shoot.id}
                    className="p-5 rounded-2xl bg-white border border-espresso/15 shadow-xs space-y-4"
                  >
                    <span className="text-xs font-bold text-terracotta uppercase tracking-wider block border-b border-espresso/10 pb-2">
                      0{idx + 1} • {shoot.title}
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Shoot Title
                        </label>
                        <input
                          type="text"
                          value={shoot.title}
                          onChange={(e) => handleShootChange(idx, "title", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Tag / Subtitle
                        </label>
                        <input
                          type="text"
                          value={shoot.tag}
                          onChange={(e) => handleShootChange(idx, "tag", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={shoot.desc}
                          onChange={(e) => handleShootChange(idx, "desc", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label={`${shoot.title} Cover Image`}
                      value={shoot.url}
                      onChange={(newUrl) => handleShootChange(idx, "url", newUrl)}
                      recommendedSize="Recommended: 800 x 1000 px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PORTFOLIO GALLERY IMAGES */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-espresso/10">
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso">
                    Portfolio Gallery Photos
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    Add new photos, paste Google Drive links, or upload from your device.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddGalleryItem}
                  className="px-3.5 py-1.5 bg-terracotta hover:bg-espresso text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <span>➕ Add Gallery Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {formData.gallery.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border border-espresso/15 shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-espresso/10">
                      <span className="text-xs font-bold text-espresso">
                        Photo #{idx + 1}: {item.title}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryItem(idx)}
                        className="text-xs text-red-600 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleGalleryChange(idx, "title", e.target.value)}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-espresso/20 bg-linen/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                          Category
                        </label>
                        <select
                          value={item.cat}
                          onChange={(e) => handleGalleryChange(idx, "cat", e.target.value)}
                          className="w-full px-2 py-1.5 text-xs rounded border border-espresso/20 bg-white"
                        >
                          <option value="Weddings">Weddings</option>
                          <option value="Maternity">Maternity</option>
                          <option value="Birthday">Birthday</option>
                          <option value="House Warming">House Warming</option>
                          <option value="Pre-Wedding">Pre-Wedding</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[10px] font-bold text-espresso uppercase mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          value={item.loc}
                          onChange={(e) => handleGalleryChange(idx, "loc", e.target.value)}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-espresso/20 bg-linen/50"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label="Gallery Image"
                      value={item.url}
                      onChange={(newUrl) => handleGalleryChange(idx, "url", newUrl)}
                      recommendedSize="Recommended: 1000 x 1250 px (4:5)"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: HAMPI GUIDE IMAGES */}
          {activeTab === "hampi" && (
            <div className="space-y-6">
              <div className="pb-2 border-b border-espresso/10">
                <h4 className="font-serif text-lg font-bold text-espresso">
                  Hampi Heritage Locations Spotlight
                </h4>
                <p className="text-xs text-charcoal/70">
                  Update photography spots in Hampi with custom images and insider tips.
                </p>
              </div>

              <div className="space-y-5">
                {formData.hampiLocations.map((loc, idx) => (
                  <div
                    key={loc.id}
                    className="p-5 rounded-2xl bg-white border border-espresso/15 shadow-xs space-y-4"
                  >
                    <span className="text-xs font-bold text-terracotta uppercase tracking-wider block border-b border-espresso/10 pb-2">
                      Spot 0{idx + 1} • {loc.name}
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Location Name
                        </label>
                        <input
                          type="text"
                          value={loc.name}
                          onChange={(e) => handleHampiLocChange(idx, "name", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Photography Secret / Description
                        </label>
                        <textarea
                          rows={2}
                          value={loc.description}
                          onChange={(e) => handleHampiLocChange(idx, "description", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label={`${loc.name} Photography Image`}
                      value={loc.image}
                      onChange={(newUrl) => handleHampiLocChange(idx, "image", newUrl)}
                      recommendedSize="Recommended: 1200 x 800 px (Landscape 3:2)"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: REAL STORIES */}
          {activeTab === "stories" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-espresso/10">
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso">
                    Portfolio Gallery &amp; Narrative Stories ({(formData.featuredStories || []).length})
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    Edit the narrative visual essays shown in the Portfolio Gallery. Click &quot;👁️ View / Preview Story&quot; to test the live story modal.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddStory}
                  className="bg-espresso hover:bg-terracotta text-white px-3.5 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer shrink-0"
                >
                  + Add New Story
                </button>
              </div>

              <div className="space-y-6">
                {(formData.featuredStories || []).map((story, idx) => (
                  <div
                    key={story.id}
                    className="p-5 rounded-2xl bg-white border border-espresso/15 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-espresso/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-terracotta uppercase tracking-wider">
                          Story 0{idx + 1}
                        </span>
                        <span className="font-serif text-sm font-bold text-espresso">
                          {story.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewStory(story)}
                          className="text-xs bg-ivory hover:bg-espresso hover:text-white text-espresso border border-espresso/20 px-2.5 py-1 rounded-lg transition font-medium cursor-pointer"
                        >
                          👁️ View / Preview Story
                        </button>
                        {(formData.featuredStories || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveStory(idx)}
                            className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            ✕ Remove
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Story Title
                        </label>
                        <input
                          type="text"
                          value={story.title}
                          onChange={(e) => handleStoryChange(idx, "title", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Subtitle / Occasion
                        </label>
                        <input
                          type="text"
                          value={story.subtitle}
                          onChange={(e) => handleStoryChange(idx, "subtitle", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
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
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-espresso uppercase mb-1">
                          Story Narrative Prose (The Story &amp; Emotion in Modal)
                        </label>
                        <textarea
                          rows={2}
                          value={story.summary}
                          onChange={(e) => handleStoryChange(idx, "summary", e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-espresso/20 bg-linen/50"
                        />
                      </div>
                    </div>

                    <ImageInputControl
                      label={`${story.title} Cover Photo`}
                      value={story.coverImage}
                      onChange={(newUrl) => handleStoryChange(idx, "coverImage", newUrl)}
                      recommendedSize="Recommended: 1200 x 800 px"
                    />

                    {/* Inner Photos */}
                    <div className="pt-3 border-t border-espresso/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-espresso">
                          Captured Moments &amp; Rituals (Modal Photos: {(story.photos || []).length})
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAddStoryPhoto(idx)}
                          className="text-xs bg-ivory hover:bg-espresso hover:text-white text-espresso border border-espresso/20 px-2 py-1 rounded-lg transition font-medium cursor-pointer"
                        >
                          + Add Photo
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(story.photos || []).map((photo, pIdx) => (
                          <div key={pIdx} className="p-3 bg-linen/40 rounded-xl space-y-2 border border-espresso/10">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-terracotta">Moment 0{pIdx + 1}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveStoryPhoto(idx, pIdx)}
                                className="text-[10px] text-red-500 hover:underline cursor-pointer"
                              >
                                ✕ Delete
                              </button>
                            </div>
                            <ImageInputControl
                              label={`Moment 0${pIdx + 1} Photo`}
                              value={photo.url}
                              onChange={(newUrl) => handleUpdateStoryPhoto(idx, pIdx, "url", newUrl)}
                            />
                            <input
                              type="text"
                              value={photo.caption}
                              onChange={(e) => handleUpdateStoryPhoto(idx, pIdx, "caption", e.target.value)}
                              placeholder="Photo caption"
                              className="w-full px-2 py-1 text-xs rounded border border-espresso/20 bg-white"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: GENERAL STUDIO INFO & FOUNDER PHOTO */}
          {activeTab === "general" && (
            <div className="space-y-5">
              <div className="pb-2 border-b border-espresso/10">
                <h4 className="font-serif text-lg font-bold text-espresso">
                  Studio Info & Channels
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-espresso uppercase mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => handleChange("brandName", e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-espresso uppercase mb-1">
                    Tagline / Subtext
                  </label>
                  <input
                    type="text"
                    value={formData.brandSub}
                    onChange={(e) => handleChange("brandSub", e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50"
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
                    placeholder="9449606163"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50"
                  />
                </div>
              </div>

              {/* Founder Portrait Photo Input */}
              <div className="pt-2">
                <ImageInputControl
                  label="Founder Portrait Photo (About Section)"
                  value={formData.founderImage}
                  onChange={(newUrl) => handleChange("founderImage", newUrl)}
                  recommendedSize="Recommended: 800 x 1000 px"
                />
              </div>
            </div>
          )}

          {/* Footer controls */}
          <div className="pt-5 border-t border-espresso/10 flex flex-wrap items-center justify-between gap-3 bg-white sticky bottom-0">
            <button
              type="button"
              onClick={() => {
                if (confirm("Reset all settings and images to default studio data?")) {
                  onReset();
                  onClose();
                }
              }}
              className="text-xs text-red-600 hover:underline cursor-pointer"
            >
              Reset to Studio Defaults
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-espresso/20 text-xs font-semibold text-charcoal hover:bg-linen transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-terracotta hover:bg-espresso text-white text-xs sm:text-sm font-bold transition cursor-pointer shadow-md"
              >
                💾 Save All Changes
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Live Story Modal Preview */}
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
