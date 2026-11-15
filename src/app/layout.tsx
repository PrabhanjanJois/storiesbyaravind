import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C25E3E",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://storiesbyaravind.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stories by Arvind | Wedding & Heritage Photography | Hospet & Hampi",
    template: "%s | Stories by Arvind",
  },
  description:
    "Based in Hospet near the timeless stone heritage of Hampi, Stories by Arvind documents authentic South Indian weddings, Seemantham maternity, Kids' birthdays, Gruhapravesha, and royal Hampi pre-wedding shoots with cinematic grace.",
  keywords: [
    "Stories by Arvind",
    "Wedding Photography Hospet",
    "Wedding Photographer Hospet",
    "Hampi Pre-wedding Photographer",
    "Hampi Pre-wedding Shoot",
    "Traditional South Indian Wedding Photography",
    "Seemantham Photography Hospet",
    "Maternity Photographer Hospet",
    "Gruhapravesha Photography Hospet",
    "Best Photographer in Hospet Karnataka",
    "Vijayanagara District Wedding Photographer",
    "Arvind Photographer Hospet",
    "Bellary Wedding Photographer",
    "Candid Photography Hospet",
  ],
  authors: [{ name: "Gorkal Aravind", url: SITE_URL }],
  creator: "Gorkal Aravind",
  publisher: "Stories by Arvind",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Stories by Arvind | Wedding & Heritage Photography | Hospet & Hampi",
    description:
      "Every celebration has a soul. We tell its story. Authentic South Indian weddings and cinematic Hampi pre-weddings by Arvind in Hospet, Karnataka.",
    url: SITE_URL,
    siteName: "Stories by Arvind",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/shoot_traditional_wedding_shoot.jpg",
        width: 1200,
        height: 630,
        alt: "Stories by Arvind - South Indian Wedding & Hampi Heritage Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories by Arvind | Wedding & Heritage Photography | Hospet & Hampi",
    description:
      "Authentic South Indian wedding and cinematic Hampi pre-weddings by Arvind in Hospet, Karnataka.",
    images: ["/images/shoot_traditional_wedding_shoot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  category: "Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-linen text-espresso selection:bg-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
