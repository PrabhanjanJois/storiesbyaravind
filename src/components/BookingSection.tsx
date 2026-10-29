"use client";

import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { StudioData } from "@/data/defaultData";

interface BookingSectionProps {
  data: StudioData;
  preselectedShoot?: string;
}

export default function BookingSection({
  data,
  preselectedShoot = "",
}: BookingSectionProps) {
  const shootChips = [
    "Traditional Wedding",
    "Maternity (Seemantham)",
    "Birthday & Kids",
    "House Warming (Gruhapravesha)",
    "Hampi Pre-Wedding",
    "Other Ceremony",
  ];

  const [selectedShoot, setSelectedShoot] = useState<string>("Traditional Wedding");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("Hospet / Hampi");
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedShoot) {
      const match = shootChips.find((c) =>
        preselectedShoot.toLowerCase().includes(c.toLowerCase().split(" ")[0])
      );
      if (match) {
        setSelectedShoot(match);
      } else {
        setSelectedShoot(preselectedShoot);
      }
    }
  }, [preselectedShoot]);

  const generateMessage = () => {
    return `Namaskara Arvind!
I would like to check availability and book a shoot with Stories by Arvind:

📸 *Shoot Type:* ${selectedShoot}
📅 *Event Date:* ${eventDate || "Dates being finalized"}
📍 *Location / Venue:* ${eventLocation || "Hospet / Hampi area"}
👤 *Name:* ${clientName || "Prospective Client"}
📞 *Contact:* ${clientPhone || "Same as this WhatsApp"}
📝 *Rituals / Notes:* ${notes || "Standard full coverage"}

Please let us know your availability and customized quotation. Thank you!`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateMessage();
    const url = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const handleCopyMessage = () => {
    const msg = generateMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-ivory/60 border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-linen border border-terracotta/20 text-terracotta text-xs font-semibold tracking-wider uppercase">
            {data.contactTag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
            {data.contactHeading}
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            {data.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Studio Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-7 rounded-2xl border border-espresso/10 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-espresso">
                Studio & Direct Contact
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${data.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3.5 group p-2 -m-2 rounded-xl hover:bg-linen transition"
                >
                  <span className="w-10 h-10 rounded-full bg-ivory text-terracotta flex items-center justify-center text-lg shrink-0">
                    📞
                  </span>
                  <div>
                    <div className="text-xs text-charcoal/70 uppercase tracking-wider font-semibold">
                      {data.lblPhone}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-espresso group-hover:text-terracotta transition">
                      {data.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-start gap-3.5 group p-2 -m-2 rounded-xl hover:bg-linen transition"
                >
                  <span className="w-10 h-10 rounded-full bg-ivory text-terracotta flex items-center justify-center text-lg shrink-0">
                    ✉️
                  </span>
                  <div>
                    <div className="text-xs text-charcoal/70 uppercase tracking-wider font-semibold">
                      {data.lblEmail}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-espresso group-hover:text-terracotta transition break-all">
                      {data.email}
                    </div>
                  </div>
                </a>

                {/* Studio Location */}
                <div className="flex items-start gap-3.5 p-2 -m-2 rounded-xl">
                  <span className="w-10 h-10 rounded-full bg-ivory text-terracotta flex items-center justify-center text-lg shrink-0">
                    📍
                  </span>
                  <div>
                    <div className="text-xs text-charcoal/70 uppercase tracking-wider font-semibold">
                      {data.lblAddress}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-espresso">
                      {data.address}
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${data.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 group p-2 -m-2 rounded-xl hover:bg-linen transition"
                >
                  <span className="w-10 h-10 rounded-full bg-ivory text-terracotta flex items-center justify-center text-lg shrink-0">
                    📸
                  </span>
                  <div>
                    <div className="text-xs text-charcoal/70 uppercase tracking-wider font-semibold">
                      {data.lblIg}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-espresso group-hover:text-terracotta transition">
                      {data.instagram}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="bg-espresso text-linen p-6 rounded-2xl shadow-lg border border-terracotta/30 space-y-2">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <span>🛡️</span>
                <span>Personal Attention To Every Client</span>
              </h4>
              <p className="text-xs text-linen/80 leading-relaxed font-light">
                Lead photographer Arvind personally shoots all major events. Because we take only one wedding per auspicious date, early inquiries are strongly recommended!
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendWhatsApp}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-lg space-y-6"
            >
              <div>
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  {data.formHeading}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 mt-1">
                  {data.formSub}
                </p>
              </div>

              {/* Step 1: Shoot Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {shootChips.map((chip) => (
                  <button
                    type="button"
                    key={chip}
                    onClick={() => setSelectedShoot(chip)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                      selectedShoot === chip
                        ? "bg-terracotta text-white shadow-sm"
                        : "bg-ivory hover:bg-espresso/10 text-espresso border border-espresso/10"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Step 2: Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Ramesh K"
                    className="w-full px-4 py-2.5 rounded-xl border border-espresso/20 bg-linen/50 text-sm focus:outline-none focus:border-terracotta transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-espresso/20 bg-linen/50 text-sm focus:outline-none focus:border-terracotta transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Expected Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-espresso/20 bg-linen/50 text-sm focus:outline-none focus:border-terracotta transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Venue or City
                  </label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="e.g. Hospet Mantapa / Hampi"
                    className="w-full px-4 py-2.5 rounded-xl border border-espresso/20 bg-linen/50 text-sm focus:outline-none focus:border-terracotta transition"
                  />
                </div>
              </div>

              {/* Step 3: Special Notes */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                  Ceremonies, Rituals or Specific Requests
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 2-day wedding with Haldi and Muhurtham, or Sunrise pre-wedding shoot at Vijaya Vittala temple..."
                  className="w-full px-4 py-2.5 rounded-xl border border-espresso/20 bg-linen/50 text-sm focus:outline-none focus:border-terracotta transition resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-full text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                  <span>Send Inquiry on WhatsApp</span>
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="bg-ivory hover:bg-espresso/10 text-espresso font-semibold py-3.5 px-5 rounded-full text-xs sm:text-sm border border-espresso/15 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{copied ? "✓ Copied!" : "📋 Copy Details"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
