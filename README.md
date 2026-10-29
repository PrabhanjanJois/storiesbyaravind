# Stories by Arvind — Wedding & Traditional Photography (Next.js)

A photography studio web application for **Stories by Arvind**, based in Hospet near Hampi, Karnataka.

Converted from a static single-page website into a high-performance, modular **Next.js 16 (App Router)** application with **Tailwind CSS v4**, **TypeScript**, and interactive booking workflows.

---

## 🌟 Key Features

- **Warm Aesthetic Design System**: Tailored palette reflecting South Indian tradition and Hampi stone architecture: Linen (`#FAF6F0`), Ivory (`#F3EDE2`), Terracotta (`#B85D3B`), Haldi (`#D99B26`), and Espresso (`#231F1E`).
- **Typography**: Google Fonts *Cormorant Garamond* (Serif) & *Plus Jakarta Sans* (Sans).
- **Shoot Selection & Booking**:
  - 6 dedicated shoot categories: Traditional Weddings, Maternity (Seemantham), Kids & Birthdays, Gruhapravesha (House Warming), Hampi Heritage Pre-Weddings, and Naming/Engagement ceremonies.
  - Interactive shoot chips that pre-fill the inquiry form and smooth-scroll to booking.
- **Interactive Portfolio Gallery**:
  - Filter by celebration category (*All*, *Weddings*, *Maternity*, *Birthdays*, *House Warming*, *Hampi Pre-Wedding*).
  - Full-screen Lightbox with image navigation and location captions.
- **WhatsApp Direct Booking Engine**:
  - Instant WhatsApp inquiry builder (`wa.me/+919449606163`) that formats event date, venue, rituals, and client details into a clean message.
- **Master Studio CMS**:
  - Accessible via the `⚙️` button in the header or the footer link.
  - Allows live editing of studio info, hero copy, photographer bio, contact numbers, and packages with LocalStorage persistence.
- **Asset Optimization**: High-resolution photography extracted into web-optimized local images in `public/images/`, replacing multi-megabyte inline base64 blobs for lightning-fast page loads.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: `next/font/google` (*Cormorant Garamond* & *Plus Jakarta Sans*)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
storiesbyaravind-next/
├── public/
│   └── images/              # Optimized studio photography assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind v4 theme tokens
│   │   ├── layout.tsx       # Root layout & Google fonts
│   │   └── page.tsx         # Studio homepage & CMS state management
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with WhatsApp CTA
│   │   ├── Hero.tsx          # Hero visual, story headline, and stats
│   │   ├── ShootsGrid.tsx    # Shoot types & booking selection
│   │   ├── Gallery.tsx       # Portfolio grid with filter tabs & lightbox
│   │   ├── About.tsx         # Storyteller bio & photographer portrait
│   │   ├── Packages.tsx      # Pricing tiers & feature checklist
│   │   ├── BookingSection.tsx# Interactive WhatsApp inquiry builder
│   │   ├── Footer.tsx        # Studio branding & navigation
│   │   └── AdminCMSModal.tsx # Live studio content editor
│   └── data/
│       └── defaultData.ts    # Typed studio data models & defaults
```

---

© 2026 Stories by Arvind. All rights reserved.
