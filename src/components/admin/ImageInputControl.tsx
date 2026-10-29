"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { normalizeImageUrl, compressImageFile } from "@/utils/imageUtils";

interface ImageInputControlProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  recommendedSize?: string;
  placeholder?: string;
}

export default function ImageInputControl({
  label,
  value,
  onChange,
  recommendedSize = "e.g. 1200 x 900 px",
  placeholder = "Paste Google Drive share link or direct URL...",
}: ImageInputControlProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const normalized = normalizeImageUrl(raw);
    onChange(normalized);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setErrorMsg(null);
      const compressed = await compressImageFile(file, 1600, 0.82);
      onChange(compressed);
    } catch {
      setErrorMsg("Failed to process image. Please try another file.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const isGoogleDrive = value.includes("googleusercontent.com") || value.includes("drive.google.com");
  const isUpload = value.startsWith("data:image");

  return (
    <div className="p-3.5 bg-linen/70 rounded-xl border border-espresso/15 space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <label className="font-bold text-espresso uppercase tracking-wider">
          {label}
        </label>
        {recommendedSize && (
          <span className="text-[10px] text-charcoal/60">{recommendedSize}</span>
        )}
      </div>

      <div className="flex items-start gap-3">
        {/* Thumbnail Preview */}
        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white border border-espresso/20 shrink-0 shadow-xs flex items-center justify-center">
          {value ? (
            <Image
              src={value}
              alt="Preview"
              fill
              unoptimized
              className="object-cover"
              onError={() => {
                // If broken link, let user know
              }}
            />
          ) : (
            <span className="text-2xl text-charcoal/30">📷</span>
          )}
        </div>

        {/* Input Controls */}
        <div className="flex-1 space-y-2">
          {/* URL Input */}
          <div className="relative">
            <input
              type="text"
              value={isUpload ? "[Uploaded Local Image File]" : value}
              disabled={isUpload}
              onChange={handleUrlChange}
              placeholder={placeholder}
              className={`w-full px-3 py-1.5 text-xs rounded-lg border bg-white focus:border-terracotta outline-none transition ${
                isUpload
                  ? "bg-linen/50 text-charcoal/60 italic border-espresso/10"
                  : "border-espresso/20 text-espresso"
              }`}
            />
            {isGoogleDrive && !isUpload && (
              <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                ✓ Google Drive direct link active
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Upload Button */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="px-3 py-1 bg-espresso hover:bg-terracotta text-white rounded-md text-[11px] font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>{isUploading ? "⏳ Compressing..." : "📁 Upload from Device"}</span>
            </button>

            {/* Clear / Reset button */}
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="px-2.5 py-1 text-[11px] text-charcoal/70 hover:text-red-600 transition cursor-pointer border border-espresso/15 rounded-md hover:bg-white"
              >
                Clear Image
              </button>
            )}

            {isUpload && (
              <span className="text-[10px] text-emerald-700 font-medium">
                ✓ Stored locally
              </span>
            )}
          </div>

          {errorMsg && (
            <p className="text-[11px] text-red-600">{errorMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}
