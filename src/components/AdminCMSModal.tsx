"use client";

import React, { useState } from "react";
import { StudioData } from "@/data/defaultData";

interface AdminCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: StudioData;
  onSave: (newData: StudioData) => void;
  onReset: () => void;
}

export default function AdminCMSModal({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}: AdminCMSModalProps) {
  const [formData, setFormData] = useState<StudioData>(data);
  const [activeTab, setActiveTab] = useState<"general" | "hero" | "about" | "contact">("general");

  if (!isOpen) return null;

  const handleChange = (key: keyof StudioData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-espresso/20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-espresso text-linen px-6 py-4 flex items-center justify-between border-b border-terracotta/30">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Studio CMS & Master Settings</h3>
              <p className="text-[11px] text-linen/70">Edit studio info, text, and contact channels in real time</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-linen/70 hover:text-white text-2xl font-light cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-espresso/10 bg-ivory/50 px-6 pt-3 gap-2 overflow-x-auto">
          {(["general", "hero", "about", "contact"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 px-3 text-xs font-semibold capitalize border-b-2 transition cursor-pointer ${
                activeTab === tab
                  ? "border-terracotta text-terracotta"
                  : "border-transparent text-charcoal/70 hover:text-espresso"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeTab === "general" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => handleChange("brandName", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Tagline / Location Tag
                </label>
                <input
                  type="text"
                  value={formData.brandSub}
                  onChange={(e) => handleChange("brandSub", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Footer Tagline
                </label>
                <input
                  type="text"
                  value={formData.footerTagline}
                  onChange={(e) => handleChange("footerTagline", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
            </div>
          )}

          {activeTab === "hero" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Hero Badge Text
                </label>
                <input
                  type="text"
                  value={formData.heroBadge}
                  onChange={(e) => handleChange("heroBadge", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Hero Title (Main Headline)
                </label>
                <input
                  type="text"
                  value={formData.heroTitle}
                  onChange={(e) => handleChange("heroTitle", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Hero Description
                </label>
                <textarea
                  rows={3}
                  value={formData.heroDesc}
                  onChange={(e) => handleChange("heroDesc", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-espresso mb-1">Stat 1</label>
                  <input
                    type="text"
                    value={formData.stat1Num}
                    onChange={(e) => handleChange("stat1Num", e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded border border-espresso/20"
                  />
                  <input
                    type="text"
                    value={formData.stat1Label}
                    onChange={(e) => handleChange("stat1Label", e.target.value)}
                    className="w-full px-2.5 py-1 text-[11px] rounded border border-espresso/10 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-espresso mb-1">Stat 2</label>
                  <input
                    type="text"
                    value={formData.stat2Num}
                    onChange={(e) => handleChange("stat2Num", e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded border border-espresso/20"
                  />
                  <input
                    type="text"
                    value={formData.stat2Label}
                    onChange={(e) => handleChange("stat2Label", e.target.value)}
                    className="w-full px-2.5 py-1 text-[11px] rounded border border-espresso/10 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-espresso mb-1">Stat 3</label>
                  <input
                    type="text"
                    value={formData.stat3Num}
                    onChange={(e) => handleChange("stat3Num", e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded border border-espresso/20"
                  />
                  <input
                    type="text"
                    value={formData.stat3Label}
                    onChange={(e) => handleChange("stat3Label", e.target.value)}
                    className="w-full px-2.5 py-1 text-[11px] rounded border border-espresso/10 mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Lead Photographer Name
                </label>
                <input
                  type="text"
                  value={formData.founderName}
                  onChange={(e) => handleChange("founderName", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Role Title
                </label>
                <input
                  type="text"
                  value={formData.founderRole}
                  onChange={(e) => handleChange("founderRole", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Story Paragraph 1
                </label>
                <textarea
                  rows={3}
                  value={formData.aboutP1}
                  onChange={(e) => handleChange("aboutP1", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Story Paragraph 2
                </label>
                <textarea
                  rows={3}
                  value={formData.aboutP2}
                  onChange={(e) => handleChange("aboutP2", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  WhatsApp Direct Number (No + sign)
                </label>
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  placeholder="9449606163"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Display Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
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
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso uppercase mb-1">
                  Studio Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
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
                  className="w-full px-3 py-2 text-sm rounded-lg border border-espresso/20 bg-linen/50 focus:border-terracotta outline-none"
                />
              </div>
            </div>
          )}

          {/* Footer controls */}
          <div className="pt-4 border-t border-espresso/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                if (confirm("Reset all settings to default studio data?")) {
                  onReset();
                  onClose();
                }
              }}
              className="text-xs text-red-600 hover:underline cursor-pointer"
            >
              Reset to Defaults
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-espresso/20 text-xs font-semibold text-charcoal hover:bg-linen transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-terracotta hover:bg-espresso text-white text-xs font-semibold transition cursor-pointer shadow"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
