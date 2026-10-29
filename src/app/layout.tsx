import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Stories by Arvind | Wedding & Traditional Photography | Hospet",
  description:
    "Based in Hospet near the timeless heritage of Hampi, Stories by Arvind documents authentic South Indian weddings, Maternity (Seemantham), Kids' Birthdays, Gruhapravesha, and family emotions.",
  keywords: [
    "Stories by Arvind",
    "Wedding Photography Hospet",
    "Hampi Pre-wedding Photographer",
    "Traditional Photography Karnataka",
    "Seemantham Maternity Shoot",
    "Gruhapravesha Photography",
    "Vijayanagara photographer",
  ],
  authors: [{ name: "Gorkal Aravind" }],
  openGraph: {
    title: "Stories by Arvind | Wedding & Traditional Photography",
    description:
      "I capture raw emotions more than just a photo. Based in Hospet & Hampi, Karnataka.",
    url: "https://storiesbyaravind.github.io",
    siteName: "Stories by Arvind",
    locale: "en_IN",
    type: "website",
  },
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
      <body className="min-h-screen flex flex-col bg-linen text-espresso selection:bg-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
