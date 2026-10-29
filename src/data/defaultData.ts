export interface ShootType {
  id: number;
  title: string;
  tag: string;
  desc: string;
  url: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  loc: string;
  cat: string;
  url: string;
}

export interface PackageTier {
  name: string;
  price: string;
  badge?: string;
  features: string[];
}

export interface StudioData {
  editMode: boolean;
  brandName: string;
  brandSub: string;
  nav1: string;
  nav2: string;
  nav3: string;
  nav4: string;
  nav5: string;
  navBtnText: string;
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  heroBtn1: string;
  heroBtn2: string;
  stat1Num: string;
  stat1Label: string;
  stat2Num: string;
  stat2Label: string;
  stat3Num: string;
  stat3Label: string;
  shootsTag: string;
  shootsHeading: string;
  shootsSub: string;
  galleryTag: string;
  galleryTitle: string;
  founderName: string;
  founderRole: string;
  aboutTag: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutBox1Label: string;
  aboutSpec: string;
  aboutBox2Label: string;
  aboutLoc: string;
  pkgTag: string;
  pkgHeading: string;
  contactTag: string;
  contactHeading: string;
  contactSub: string;
  lblPhone: string;
  phone: string;
  whatsapp: string;
  lblEmail: string;
  email: string;
  lblAddress: string;
  address: string;
  lblIg: string;
  instagram: string;
  formHeading: string;
  formSub: string;
  footerBrand: string;
  footerTagline: string;
  footerCopy: string;
  heroImage: string;
  founderImage: string;
  shootTypes: ShootType[];
  gallery: GalleryItem[];
  packages: PackageTier[];
}

export const DEFAULT_STUDIO_DATA: StudioData = {
  "editMode": false,
  "brandName": "Stories by Arvind",
  "brandSub": "Hospet \u2022 Hampi \u2022 Karnataka",
  "nav1": "Choose Your Shoot",
  "nav2": "Portfolio",
  "nav3": "About Arvind",
  "nav4": "Packages",
  "nav5": "Book Now",
  "navBtnText": "WhatsApp Us",
  "heroBadge": "Wedding & Traditional Celebrations \u2022 Hospet",
  "heroTitle": "I capture raw emotions more than just a photo.",
  "heroDesc": "Based in Hospet near the timeless heritage of Hampi, Stories by Arvind documents authentic South Indian weddings, Maternity (Seemantham), Kids' Birthdays, Gruhapravesha (House Warming), and unscripted family emotions.",
  "heroBtn1": "Choose Your Shoot Type",
  "heroBtn2": "View Portfolio Gallery",
  "stat1Num": "5+ Years",
  "stat1Label": "Dedicated Experience",
  "stat2Num": "All Events",
  "stat2Label": "Weddings & Family Rituals",
  "stat3Num": "Hospet",
  "stat3Label": "Hampi & All Karnataka",
  "shootsTag": "Every Milestone Matters",
  "shootsHeading": "Which Shoot Are You Planning For?",
  "shootsSub": "Select the celebration you are planning below\u2014we customize our photography style to match your family's traditions and rituals.",
  "galleryTag": "Portfolio Gallery",
  "galleryTitle": "Captured Moments & Emotions",
  "founderName": "Gorkal Aravind (Arvind)",
  "founderRole": "Founder & Lead Photographer \u2022 Stories by Arvind",
  "aboutTag": "Meet The Storyteller",
  "aboutHeading": "More Than Poses\u2014I Freeze the Feeling Inside the Moment.",
  "aboutP1": "Namaskara! I'm Arvind from Hospet, Karnataka. Over the past 5+ years of documenting weddings and traditional family ceremonies, I realized that the most unforgettable photographs aren't stiff studio poses\u2014they are a father's quiet tear during Kanyadaan, a mother's glowing smile during her Seemantham (Maternity), and the joyful laughter of a child's first birthday.",
  "aboutP2": "Whether we are shooting a grand wedding mantapa, a sacred Gruhapravesha (House Warming) pooja at dawn, or a cinematic pre-wedding amidst the ancient ruins of Hampi, I blend into your family so everyone feels relaxed, natural, and truly themselves.",
  "aboutBox1Label": "Our Shoots",
  "aboutSpec": "Weddings, Maternity, Birthdays, House Warming, Naming Ceremonies & Hampi Pre-Weddings",
  "aboutBox2Label": "Base & Travel",
  "aboutLoc": "Hospet (Hosapete), Vijayanagara \u2022 Available Across Karnataka",
  "pkgTag": "Transparent Investment",
  "pkgHeading": "Packages & Custom Quotes",
  "contactTag": "Let's Connect",
  "contactHeading": "Tell Me Which Shoot You Are Planning",
  "contactSub": "Whether it's a Wedding, Maternity shoot, Birthday party, or House Warming ceremony, pick your shoot type and send us a quick message on WhatsApp to check dates and pricing.",
  "lblPhone": "Phone / WhatsApp",
  "phone": "+91 9449606163",
  "whatsapp": "9449606163",
  "lblEmail": "Email Address",
  "email": "gorkalaravind3312@gmail.com",
  "lblAddress": "Studio Location",
  "address": "Hospet (Hosapete), Vijayanagara District, Karnataka",
  "lblIg": "Instagram",
  "instagram": "@stories_by_arvind",
  "formHeading": "Book Your Shoot / Check Availability",
  "formSub": "1. Tap the shoot you are planning for below:",
  "footerBrand": "Stories by Arvind",
  "footerTagline": "Weddings \u2022 Maternity \u2022 Birthdays \u2022 House Warming \u2022 Pre-Weddings | Hospet, Karnataka",
  "footerCopy": "\u00a9 2026 Stories by Arvind. All rights reserved.",
  "heroImage": "/images/hero_main.jpg",
  "founderImage": "/images/founder.jpg",
  "shootTypes": [
    {
      "id": 101,
      "title": "Traditional Wedding Shoot",
      "tag": "Muhurtham \u2022 Haldi \u2022 Reception",
      "desc": "Complete coverage of sacred South Indian wedding rituals, candid family emotions, and grand mantapa celebrations.",
      "url": "/images/shoot_traditional_wedding_shoot.jpg"
    },
    {
      "id": 102,
      "title": "Maternity & Seemantham Shoot",
      "tag": "Traditional Seemantham \u2022 Outdoor Maternity",
      "desc": "Warm, emotional portraits celebrating motherhood\u2014whether a traditional home Seemantham ritual or a scenic outdoor shoot.",
      "url": "/images/shoot_maternity_and_seemantham_shoot.jpg"
    },
    {
      "id": 103,
      "title": "Birthday & Kids Celebration",
      "tag": "1st Birthday \u2022 Cake Smash \u2022 Family Party",
      "desc": "Fun, lively candid coverage of your child's milestone birthday, family blessings, and joyful candid smiles.",
      "url": "/images/shoot_birthday_and_kids_celebration.jpg"
    },
    {
      "id": 104,
      "title": "House Warming (Gruhapravesha)",
      "tag": "Sacred Pooja \u2022 Family Blessings",
      "desc": "Documenting your new home's auspicious Gruhapravesha rituals, Punyahavachanam, and proud family portraits.",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 105,
      "title": "Hampi Heritage Pre-Wedding",
      "tag": "Sunrise Ruins \u2022 Coracle \u2022 Cinematic",
      "desc": "Romantic, movie-style couple portraits and reels shot across Hampi's historic temples, boulders, and Tungabhadra river.",
      "url": "/images/shoot_hampi_heritage_prewedding.jpg"
    },
    {
      "id": 106,
      "title": "Naming Ceremony & Engagement",
      "tag": "Namakarana \u2022 Cradle Ceremony \u2022 Ring Exchange",
      "desc": "Intimate traditional coverage for baby naming ceremonies, engagements, and half-saree functions.",
      "url": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "gallery": [
    {
      "id": 1,
      "title": "Sacred Muhurtham Rituals",
      "loc": "Hospet",
      "cat": "Weddings",
      "url": "/images/gallery_sacred_muhurtham_rituals.jpg"
    },
    {
      "id": 2,
      "title": "Traditional Seemantham Glow",
      "loc": "Hospet",
      "cat": "Maternity",
      "url": "/images/gallery_traditional_seemantham_glow.jpg"
    },
    {
      "id": 3,
      "title": "First Birthday Joy",
      "loc": "Vijayanagara",
      "cat": "Birthday",
      "url": "/images/gallery_first_birthday_joy.jpg"
    },
    {
      "id": 4,
      "title": "Auspicious Gruhapravesha Pooja",
      "loc": "Hospet",
      "cat": "House Warming",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },
    {
      "id": 5,
      "title": "Sunrise by the Stone Ruins",
      "loc": "Hampi Heritage",
      "cat": "Pre-Wedding",
      "url": "/images/gallery_sunrise_by_the_stone_ruins.jpg"
    }
  ],
  "packages": [
    {
      "name": "Traditional Events (Maternity / Birthday / House Warming)",
      "price": "\u20b925,000",
      "badge": "Family Favorites",
      "features": [
        "Up to 4-5 Hours Complete Ritual & Candid Coverage",
        "Unlimited Raw + 150+ Color-Graded High-Res Photos",
        "1 Cinematic Highlight Reel"
      ]
    },
    {
      "name": "Muhurtham & Traditional Wedding Coverage",
      "price": "\u20b935,000",
      "badge": "Wedding Essential",
      "features": [
        "Full Muhurtham & Rituals Coverage",
        "Traditional + Candid Photography",
        "350+ Color-Graded High-Res Photos",
        "1 Luxury Hardcover Wedding Album"
      ]
    },
    {
      "name": "The Complete 2-Day Wedding Story",
      "price": "\u20b999,000",
      "badge": "Most Popular",
      "features": [
        "Haldi, Mehendi, Reception & Muhurtham",
        "Candid + Traditional Photo & Cinematic Video",
        "600+ Edited High-Res Photographs",
        "Full HD Wedding Highlight Film + 2 Reels",
        "Luxury Designer Family Albums"
      ]
    }
  ]
};
