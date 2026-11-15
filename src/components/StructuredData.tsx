import React from "react";

export default function StructuredData() {
  const baseUrl = "https://storiesbyaravind.co.in";

  // 1. LocalBusiness / ProfessionalService / Photographer Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "Photographer"],
    "@id": `${baseUrl}/#localbusiness`,
    name: "Stories by Arvind",
    alternateName: "Arvind Photography Hospet",
    description:
      "Authentic South Indian wedding, traditional rituals, Seemantham maternity, and Hampi heritage pre-wedding photography by Gorkal Aravind based in Hospet, Vijayanagara District, Karnataka.",
    url: baseUrl,
    logo: `${baseUrl}/images/founder.jpg`,
    image: [
      `${baseUrl}/images/shoot_traditional_wedding_shoot.jpg`,
      `${baseUrl}/images/shoot_hampi_heritage_prewedding.jpg`,
      `${baseUrl}/images/hero_main.jpg`,
      `${baseUrl}/images/founder.jpg`,
    ],
    telephone: "+918088422533",
    email: "contact@storiesbyaravind.co.in",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Station Road / College Road",
      addressLocality: "Hospet",
      addressRegion: "Karnataka",
      postalCode: "583201",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.2741",
      longitude: "76.3888",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Hospet" },
      { "@type": "Place", name: "Hampi" },
      { "@type": "City", name: "Bellary" },
      { "@type": "City", name: "Hubli" },
      { "@type": "City", name: "Dharwad" },
      { "@type": "City", name: "Davangere" },
      { "@type": "City", name: "Koppal" },
      { "@type": "AdministrativeArea", name: "Vijayanagara District" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    founder: {
      "@type": "Person",
      name: "Gorkal Aravind",
      jobTitle: "Lead Wedding & Heritage Photographer",
      image: `${baseUrl}/images/founder.jpg`,
      sameAs: [
        "https://www.instagram.com/storiesbyaravind",
      ],
    },
    sameAs: [
      "https://www.instagram.com/storiesbyaravind",
      "https://wa.me/918088422533",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Celebration Photography Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Traditional South Indian Wedding Photography",
            description:
              "Complete coverage of sacred Muhurtham rituals, candid family emotions, and grand evening receptions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hampi Heritage Pre-Wedding Shoot",
            description:
              "Cinematic couple portraits among ancient 14th-century boulder trails, Hemakuta Hill, and the Tungabhadra river in Hampi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maternity & Seemantham Photography",
            description:
              "Documenting motherly grace, traditional bangles rituals, and warm intimate family portraits.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gruhapravesha & Housewarming Photography",
            description:
              "Sacred morning homa, milk-boiling ceremony, rangoli, and family blessings documented with warmth.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kids Birthday & Milestone Celebrations",
            description:
              "Candid baby smiles, first birthday cake smashes, and candid guest interactions.",
          },
        },
      ],
    },
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Stories by Arvind",
    url: baseUrl,
    inLanguage: "en-IN",
    description:
      "Stories by Arvind - Premium Wedding & Heritage Pre-wedding Photography in Hospet & Hampi, Karnataka.",
    publisher: {
      "@id": `${baseUrl}/#localbusiness`,
    },
  };

  // 3. FAQPage Schema for Rich Snippets in Google Search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How soon will we receive our edited photos and wedding album?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide a curated 'Sneak Peek' album of 30-40 color-graded highlights within 3 to 5 days so you can share them with family and on Instagram immediately. The complete set of edited high-resolution digital photographs is delivered within 3 weeks via a secure private cloud gallery. Physical handcrafted luxury albums are delivered within 4 to 6 weeks after your photo selection is confirmed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you travel outside Hospet and Vijayanagara district?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely! While Arvind is natively based in Hospet and Hampi, we frequently travel across Karnataka (Bellary, Bangalore, Hubli, Dharwad, Davangere, Mysore) and beyond for destination weddings. Travel and accommodation logistics are quoted transparently without hidden surcharges.",
        },
      },
      {
        "@type": "Question",
        name: "Do we get all the raw unedited photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We believe your memories belong to you. We provide the complete set of original raw JPEG files from every event, alongside your specially color-graded and retouched signature master gallery.",
        },
      },
      {
        "@type": "Question",
        name: "How do we book a pre-wedding shoot in Hampi with Arvind?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly via WhatsApp (+91 80884 22533) or the website booking estimator. Arvind handles sunrise/sunset timing guidance and spot planning around Hemakuta Hill, boulders, and Tungabhadra river to ensure a smooth, fine-free experience.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

