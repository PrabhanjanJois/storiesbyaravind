export interface ShootType {
  id: number;
  title: string;
  tag: string;
  price?: string;
  desc: string;
  url: string;
}

export interface CustomServiceTag {
  id: string;
  name: string;
  tag: string;
  price: number;
  desc?: string;
}

export interface CustomEventTag {
  id: string;
  name: string;
  base: number;
}

export interface HeroSlide {
  id: number;
  title: string;
  tag: string;
  location: string;
  image: string;
  accentText?: string;
  shootLink?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  loc: string;
  cat: string;
  url: string;
  storyId?: number;
}

export interface PackageTier {
  name: string;
  price: string;
  badge?: string;
  features: string[];
}

export interface TestimonialItem {
  id: number;
  couple: string;
  shootType: string;
  loc: string;
  quote: string;
  rating: number;
  year: string;
  highlight: string;
}

export interface HampiLocationItem {
  id: number;
  name: string;
  tagline: string;
  description: string;
  bestTime: string;
  vibe: string;
  recommendedOutfits: string;
  image: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: "booking" | "deliverables" | "hampi" | "coverage";
}

export interface StoryPhoto {
  url: string;
  caption: string;
}

export interface FeaturedStoryItem {
  id: number;
  title: string;
  subtitle: string;
  couple: string;
  location: string;
  eventDate: string;
  coverImage: string;
  summary: string;
  quote: string;
  photos: StoryPhoto[];
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
  hampiGuideTag: string;
  hampiGuideHeading: string;
  hampiGuideSub: string;
  testimonialsTag: string;
  testimonialsHeading: string;
  testimonialsSub: string;
  estimatorTag: string;
  estimatorHeading: string;
  estimatorSub: string;
  faqTag: string;
  faqHeading: string;
  faqSub: string;
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
  heroSlides: HeroSlide[];
  founderImage: string;
  shootTypes: ShootType[];
  gallery: GalleryItem[];
  packages: PackageTier[];
  testimonials: TestimonialItem[];
  hampiLocations: HampiLocationItem[];
  faqs: FaqItem[];
  featuredStories: FeaturedStoryItem[];
  customServiceTags?: CustomServiceTag[];
  customEventTags?: CustomEventTag[];
}

export const DEFAULT_STUDIO_DATA: StudioData = {
  "editMode": false,
  "brandName": "Stories by Arvind",
  "brandSub": "Hospet • Hampi • Karnataka",
  "nav1": "Choose Your Shoot",
  "nav2": "Portfolio",
  "nav3": "About Arvind",
  "nav4": "Packages",
  "nav5": "Book Now",
  "navBtnText": "WhatsApp Us",
  "heroBadge": "Authentic Rituals • Unfiltered Emotions",
  "heroTitle": "Every celebration has a soul. We tell its story.",
  "heroDesc": "Based in Hospet near the timeless stone heritage of Hampi, Stories by Arvind documents authentic South Indian weddings, Maternity (Seemantham), and sacred family milestones with editorial grace.",
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
  "shootsSub": "Select the celebration you are planning below—we customize our photography style to match your family's traditions and rituals.",
  "galleryTag": "Portfolio Gallery",
  "galleryTitle": "Captured Moments & Real Stories",
  "founderName": "Gorkal Aravind (Arvind)",
  "founderRole": "Founder & Lead Photographer • Stories by Arvind",
  "aboutTag": "Meet The Storyteller",
  "aboutHeading": "More Than Poses—I Freeze the Feeling Inside the Moment.",
  "aboutP1": "Namaskara! I'm Arvind from Hospet, Karnataka. Over the past 5+ years of documenting weddings and traditional family ceremonies, I realized that the most unforgettable photographs aren't stiff studio poses—they are a father's quiet tear during Kanyadaan, a mother's glowing smile during her Seemantham (Maternity), and the joyful laughter of a child's first birthday.",
  "aboutP2": "Whether we are shooting a grand wedding mantapa, a sacred Gruhapravesha (House Warming) pooja at dawn, or a cinematic pre-wedding amidst the ancient ruins of Hampi, I blend into your family so everyone feels relaxed, natural, and truly themselves.",
  "aboutBox1Label": "Our Shoots",
  "aboutSpec": "Weddings, Maternity, Birthdays, House Warming, Naming Ceremonies & Hampi Pre-Weddings",
  "aboutBox2Label": "Base & Travel",
  "aboutLoc": "Hospet (Hosapete), Vijayanagara • Available Across Karnataka",
  "hampiGuideTag": "Native Insider Insight",
  "hampiGuideHeading": "Arvind's Hampi Heritage Shoot Guide",
  "hampiGuideSub": "Living right here in Hospet, Arvind knows the secret sunrise boulder vistas, riverbank reflections, and local monument protocols that metro photographers miss.",
  "testimonialsTag": "Words of Love",
  "testimonialsHeading": "What Families Say About Our Work",
  "testimonialsSub": "Real reviews from couples, parents, and families across Hospet, Bellary, and Bangalore who trusted Arvind with their most precious milestones.",
  "estimatorTag": "Interactive Pricing Tool",
  "estimatorHeading": "Custom Shoot Investment Estimator",
  "estimatorSub": "Choose your event days, rituals, and deliverables to get an instant transparent estimate and launch a 1-tap WhatsApp consultation.",
  "faqTag": "Got Questions?",
  "faqHeading": "Frequently Asked Questions",
  "faqSub": "Everything you need to know about deliverables, travel, raw files, Hampi permits, and locking your wedding dates.",
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
  "footerTagline": "Weddings • Maternity • Birthdays • House Warming • Pre-Weddings | Hospet, Karnataka",
  "footerCopy": "© 2026 Stories by Arvind. All rights reserved.",
  "heroImage": "/images/hero_main.jpg",
  "heroSlides": [
    {
      "id": 1,
      "title": "Sacred South Indian Muhurtham",
      "tag": "Traditional Wedding",
      "location": "Vijayanagara Mantapa, Hospet",
      "image": "/images/gallery_sacred_muhurtham_rituals.jpg",
      "accentText": "Raw emotion over stiff poses",
      "shootLink": "Traditional Wedding Shoot"
    },
    {
      "id": 2,
      "title": "Timeless Golden Hour Amidst Ancient Boulders",
      "tag": "Hampi Pre-Wedding",
      "location": "Hemakuta Hill & Tungabhadra, Hampi",
      "image": "/images/gallery_sunrise_by_the_stone_ruins.jpg",
      "accentText": "Cinematic heritage romance",
      "shootLink": "Hampi Heritage Pre-Wedding"
    },
    {
      "id": 3,
      "title": "Motherhood & Sacred Jasmine Blessings",
      "tag": "Traditional Seemantham",
      "location": "Hospet",
      "image": "/images/gallery_traditional_seemantham_glow.jpg",
      "accentText": "Warmth of family generations",
      "shootLink": "Maternity & Seemantham Shoot"
    },
    {
      "id": 4,
      "title": "Milestone First Birthday Joy & Smiles",
      "tag": "Birthday & Family Celebration",
      "location": "Vijayanagara",
      "image": "/images/gallery_first_birthday_joy.jpg",
      "accentText": "Unscripted childhood innocence",
      "shootLink": "Birthday & Kids Celebration"
    },
    {
      "id": 5,
      "title": "Heritage South Indian Bridal Splendor",
      "tag": "Kanyadaan & Mantapa",
      "location": "Hospet, Karnataka",
      "image": "/images/hero_main.jpg",
      "accentText": "Preserved with timeless dignity",
      "shootLink": "Traditional Wedding Shoot"
    }
  ],
  "founderImage": "/images/founder.jpg",
  "shootTypes": [
    {
      "id": 101,
      "title": "Traditional Wedding Shoot",
      "tag": "Candid • Muhurtham • Reception",
      "price": "From ₹45,000",
      "desc": "Complete coverage of sacred South Indian wedding rituals, candid family emotions, and grand mantapa celebrations.",
      "url": "/images/shoot_traditional_wedding_shoot.jpg"
    },
    {
      "id": 102,
      "title": "Maternity & Seemantham Shoot",
      "tag": "Candid • Traditional Seemantham",
      "price": "From ₹18,000",
      "desc": "Warm, emotional portraits celebrating motherhood—whether a traditional home Seemantham ritual or a scenic outdoor shoot.",
      "url": "/images/shoot_maternity_and_seemantham_shoot.jpg"
    },
    {
      "id": 103,
      "title": "Birthday & Kids Celebration",
      "tag": "Candid • Cake Smash • 1st Birthday",
      "price": "From ₹15,000",
      "desc": "Fun, lively candid coverage of your child's milestone birthday, family blessings, and joyful candid smiles.",
      "url": "/images/shoot_birthday_and_kids_celebration.jpg"
    },
    {
      "id": 104,
      "title": "House Warming (Gruhapravesha)",
      "tag": "Candid Pooja • Family Blessings",
      "price": "From ₹16,000",
      "desc": "Documenting your new home's auspicious Gruhapravesha rituals, Punyahavachanam, and proud family portraits.",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 105,
      "title": "Hampi Heritage Pre-Wedding",
      "tag": "Candid Romance • Sunrise Ruins",
      "price": "From ₹25,000",
      "desc": "Romantic, movie-style couple portraits and reels shot across Hampi's historic temples, boulders, and Tungabhadra river.",
      "url": "/images/shoot_hampi_heritage_prewedding.jpg"
    },
    {
      "id": 106,
      "title": "Naming Ceremony & Engagement",
      "tag": "Candid Namakarana • Ring Exchange",
      "price": "From ₹15,000",
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
      "url": "/images/gallery_sacred_muhurtham_rituals.jpg",
      "storyId": 1
    },
    {
      "id": 2,
      "title": "Traditional Seemantham Glow",
      "loc": "Hospet",
      "cat": "Maternity",
      "url": "/images/gallery_traditional_seemantham_glow.jpg",
      "storyId": 3
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
      "url": "/images/gallery_sunrise_by_the_stone_ruins.jpg",
      "storyId": 2
    }
  ],
  "packages": [
    {
      "name": "Traditional Events (Maternity / Birthday / House Warming)",
      "price": "₹25,000",
      "badge": "Family Favorites",
      "features": [
        "Up to 4-5 Hours Complete Ritual & Candid Coverage",
        "Unlimited Raw + 150+ Color-Graded High-Res Photos",
        "1 Cinematic Highlight Reel"
      ]
    },
    {
      "name": "Muhurtham & Traditional Wedding Coverage",
      "price": "₹35,000",
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
      "price": "₹99,000",
      "badge": "Most Popular",
      "features": [
        "Haldi, Mehendi, Reception & Muhurtham",
        "Candid + Traditional Photo & Cinematic Video",
        "600+ Edited High-Res Photographs",
        "Full HD Wedding Highlight Film + 2 Reels",
        "Luxury Designer Family Albums"
      ]
    }
  ],
  "testimonials": [
    {
      "id": 1,
      "couple": "Priyanka & Chethan",
      "shootType": "2-Day Wedding & Reception",
      "loc": "Vijayanagara Kalyana Mantapa, Hospet",
      "rating": 5,
      "year": "2025",
      "highlight": "Frozen tears and pure joy",
      "quote": "Arvind became like family during our 2-day wedding! He captured every subtle glance, my father's tears during the Kanyadaan, and the grand Muhurtham without making anyone feel awkward or pose unnaturally. The photo album is a treasure."
    },
    {
      "id": 2,
      "couple": "Meghana & Naveen",
      "shootType": "Hampi Heritage Pre-Wedding",
      "loc": "Hemakuta Hill & Tungabhadra River, Hampi",
      "rating": 5,
      "year": "2025",
      "highlight": "Cinema in ancient stones",
      "quote": "We travelled from Bangalore specifically for a Hampi shoot. Arvind knew every hidden boulder path, the exact minute when the sunrise light hits the temple arches, and how to avoid the tourist crowds. Our friends thought our photos were movie stills!"
    },
    {
      "id": 3,
      "couple": "Anusha & Shrinivas",
      "shootType": "Traditional Seemantham (Maternity)",
      "loc": "Hospet",
      "rating": 5,
      "year": "2026",
      "highlight": "Gentle, respectful & so graceful",
      "quote": "During my maternity shoot, Arvind was extremely patient and gentle. He ensured I was always comfortable and took breathtaking shots of our family blessing rituals. Truly an artist who understands South Indian traditions."
    },
    {
      "id": 4,
      "couple": "Dr. Rohit & Dr. Swathi",
      "shootType": "Gruhapravesha & Muhurtham",
      "loc": "Toranagallu / Hospet",
      "rating": 5,
      "year": "2025",
      "highlight": "Colors and morning sacred light",
      "quote": "Arvind was present right from 5:00 AM for our Ganapati homa and house warming. The morning sunlight filtering through the smoke and rangoli was captured like poetry. He delivered the edited photos ahead of schedule!"
    }
  ],
  "hampiLocations": [
    {
      "id": 1,
      "name": "Hemakuta Hill Temple Complex",
      "tagline": "Golden Sunrise • Ancient Stone Arches",
      "description": "Scattered triple-chambered shrines, double-storied gateways, and sweeping views of the Virupaksha valley. Arvind’s favorite morning spot for quiet, majestic couple frames bathed in dawn light.",
      "bestTime": "6:00 AM – 7:30 AM (Soft sunrise light, zero crowds)",
      "vibe": "Majestic, spiritual, and timelessly royal",
      "recommendedOutfits": "Ivory Kanjivaram silk, mustard yellow, or flowing crimson saree",
      "image": "/images/gallery_sunrise_by_the_stone_ruins.jpg"
    },
    {
      "id": 2,
      "name": "Granite Boulder Trails & Sunset Ridge",
      "tagline": "Earthy Rustic Drama • Dramatic Silhouettes",
      "description": "Massive monolithic granite boulders formed over billions of years. Wide cinematic angles dwarf the couple against the dramatic Deccan sky during the magical golden hour.",
      "bestTime": "4:30 PM – 6:15 PM (Deep warm golden glow)",
      "vibe": "Rustic, adventurous, and visually striking",
      "recommendedOutfits": "Terracotta, rust orange, olive green, or breezy beige linen",
      "image": "/images/shoot_hampi_heritage_prewedding.jpg"
    },
    {
      "id": 3,
      "name": "Tungabhadra River & Coracle Boating",
      "tagline": "Water Reflections • Ethereal Romance",
      "description": "The sacred Tungabhadra river curling around ancient ruins. Gentle circular coracle boat rides create dreamy water reflections and intimate, candid couple moments.",
      "bestTime": "3:30 PM – 5:00 PM (Gentle breeze & sparkling water)",
      "vibe": "Poetic, romantic, and deeply calming",
      "recommendedOutfits": "Pastel silks, floral lehenga, or contrast traditional kurta",
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
    },
    {
      "id": 4,
      "name": "Anegundi & Rural Banana Groves",
      "tagline": "Lush Greenery • Ancient Village Heritage",
      "description": "Across the river in mythological Kishkindha. Vibrant emerald green banana plantations and rustic stone cottages provide a refreshing, lush contrast to the rocky terrain.",
      "bestTime": "Morning 8:00 AM – 10:00 AM",
      "vibe": "Lush, authentic rural Karnataka heritage",
      "recommendedOutfits": "Bright contrast silk sarees with jasmine flowers, classic dhoti",
      "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80"
    }
  ],
  "faqs": [
    {
      "id": 1,
      "category": "deliverables",
      "question": "How soon will we receive our edited photos and wedding album?",
      "answer": "We provide a curated 'Sneak Peek' album of 30-40 color-graded highlights within 3 to 5 days so you can share them with family and on Instagram immediately. The complete set of edited high-resolution digital photographs is delivered within 3 weeks via a secure private cloud gallery. Physical handcrafted luxury albums are delivered within 4 to 6 weeks after your photo selection is confirmed."
    },
    {
      "id": 2,
      "category": "coverage",
      "question": "Do you travel outside Hospet and Vijayanagara district?",
      "answer": "Yes, absolutely! While Arvind is natively based in Hospet and Hampi, we frequently travel across Karnataka (Bellary, Bangalore, Hubli, Dharwad, Davangere, Mysore) and beyond for destination weddings. Travel and accommodation logistics are quoted transparently without hidden surcharges."
    },
    {
      "id": 3,
      "category": "deliverables",
      "question": "Do we get all the raw unedited photos?",
      "answer": "Yes! We believe your memories belong to you. We provide the complete set of original raw JPEG files from every event, alongside your specially color-graded and retouched signature master gallery."
    },
    {
      "id": 4,
      "category": "hampi",
      "question": "Are permissions or tickets required for pre-wedding shoots in Hampi?",
      "answer": "Because Arvind is local to Hospet and Hampi, he knows all current ASI (Archaeological Survey of India) guidelines. We plan our routes through open scenic temple hills, boulder trails, and peripheral heritage vistas where commercial tripods and crews operate smoothly without causing disruptions or permit fines."
    },
    {
      "id": 5,
      "category": "booking",
      "question": "How do we lock our event date?",
      "answer": "Dates during the auspicious Muhurtham season are booked on a strictly first-come, first-served basis. A nominal 30% advance deposit secures Arvind and his team exclusively for your dates. Reach out on WhatsApp or call us directly to check your date's calendar status."
    },
    {
      "id": 6,
      "category": "coverage",
      "question": "What is the difference between your candid and traditional coverage?",
      "answer": "Traditional photography captures the formal stage line-ups, rituals, and family group portraits with even lighting. Candid photography is documentary-style—Arvind quietly captures real emotional moments, laughter, tears, and unscripted expressions without interrupting the flow of your rituals."
    }
  ],
  "featuredStories": [
    {
      "id": 1,
      "title": "A Sacred Vijayanagar Wedding",
      "subtitle": "Muhurtham, Kanyadaan & Grand Reception",
      "couple": "Aditi & Varun",
      "location": "Hospet, Karnataka",
      "eventDate": "November 2025",
      "coverImage": "/images/gallery_sacred_muhurtham_rituals.jpg",
      "summary": "From the fragrant early morning suprabhata pooja to the emotional Jeerakadava (talambralu) and late evening reception, this wedding captured the depth of traditional Kannada Brahmin rituals.",
      "quote": "Arvind made our parents feel so respected and captured our traditions with such dignity.",
      "photos": [
        {
          "url": "/images/gallery_sacred_muhurtham_rituals.jpg",
          "caption": "The auspicious Muhurtham sacred fire and mantras"
        },
        {
          "url": "/images/shoot_traditional_wedding_shoot.jpg",
          "caption": "Bride entering the mantapa surrounded by family blessings"
        },
        {
          "url": "/images/hero_main.jpg",
          "caption": "Quiet portrait of the bride adorned in heritage gold and temple silk"
        }
      ]
    },
    {
      "id": 2,
      "title": "Timeless Romance Amidst Hampi Ruins",
      "subtitle": "Dawn at Hemakuta Hill & Sunset on the Tungabhadra",
      "couple": "Sneha & Rahul",
      "location": "Hampi Heritage, Karnataka",
      "eventDate": "January 2026",
      "coverImage": "/images/gallery_sunrise_by_the_stone_ruins.jpg",
      "summary": "Starting at 5:45 AM before any tourists arrived, we climbed the stone steps of Hemakuta Hill. The golden morning mist wrapped around ancient 14th-century temple pillars created a movie-like atmosphere.",
      "quote": "We felt like characters in an epic historical love story. Arvind's eye for light is extraordinary.",
      "photos": [
        {
          "url": "/images/gallery_sunrise_by_the_stone_ruins.jpg",
          "caption": "Hemakuta Hill temple gateways bathed in dawn golden hour"
        },
        {
          "url": "/images/shoot_hampi_heritage_prewedding.jpg",
          "caption": "Cinematic couple portrait on the dramatic granite boulders"
        }
      ]
    },
    {
      "id": 3,
      "title": "A Mother's Traditional Seemantham",
      "subtitle": "Bangles, Jasmine & Ancestral Blessings",
      "couple": "Pooja & Family",
      "location": "Hospet",
      "eventDate": "December 2025",
      "coverImage": "/images/gallery_traditional_seemantham_glow.jpg",
      "summary": "Documenting the sacred sound of green glass bangles, the fragrance of fresh jasmine, and the loving smiles of three generations of women blessing an expectant mother.",
      "quote": "Arvind captured the tenderness of my pregnancy with so much warmth.",
      "photos": [
        {
          "url": "/images/gallery_traditional_seemantham_glow.jpg",
          "caption": "The traditional green glass bangles ceremony"
        },
        {
          "url": "/images/shoot_maternity_and_seemantham_shoot.jpg",
          "caption": "Serene outdoor maternity portrait in natural evening light"
        }
      ]
    },
    {
      "id": 4,
      "title": "First Birthday Joy & Family Blessings",
      "subtitle": "Unscripted Childhood Innocence & Grandparents' Smiles",
      "couple": "Baby Aarav & Parents",
      "location": "Vijayanagara",
      "eventDate": "October 2025",
      "coverImage": "/images/gallery_first_birthday_joy.jpg",
      "summary": "From the playful cake smash to the quiet, tearful blessings of elder grandparents placing gold chains on the baby, capturing the unrestrained laughter and joy of a one-year milestone.",
      "quote": "Arvind didn't just take photos, he captured our baby's genuine laughter without any annoying flash or fuss.",
      "photos": [
        {
          "url": "/images/gallery_first_birthday_joy.jpg",
          "caption": "Pure, unscripted toddler joy during the cake ceremony"
        },
        {
          "url": "/images/shoot_birthday_and_kids_celebration.jpg",
          "caption": "Surrounded by cousins and loving family blessings"
        }
      ]
    },
    {
      "id": 5,
      "title": "Sacred Gruhapravesha Homam",
      "subtitle": "Morning Boiling Milk Ritual & Vastu Pooja",
      "couple": "The Kulkarni Family",
      "location": "Hospet, Karnataka",
      "eventDate": "January 2026",
      "coverImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "summary": "Stepping into a new home with sacred Vedic chants, the auspicious overflowing of milk at sunrise, and the warmth of extended family gathering under one roof for the first time.",
      "quote": "Every sacred Vedic moment of our housewarming was documented with deep reverence.",
      "photos": [
        {
          "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          "caption": "The auspicious boiling milk ritual at dawn"
        },
        {
          "url": "/images/gallery_sacred_muhurtham_rituals.jpg",
          "caption": "Vastu homam sacred fire and family offerings"
        }
      ]
    }
  ],
  "customServiceTags": [
    {
      "id": "candid",
      "name": "Candid Photography",
      "tag": "Candid",
      "price": 8000,
      "desc": "Unscripted documentary captures of raw emotions, laughter, and tearful blessings."
    },
    {
      "id": "traditional",
      "name": "Traditional Photography",
      "tag": "Traditional",
      "price": 6000,
      "desc": "Crisply lit stage rituals, formal family line-ups, and sacred pooja ceremonies."
    },
    {
      "id": "film",
      "name": "Cinematic 4K Highlight Film & Reels",
      "tag": "Cinematic 4K",
      "price": 15000,
      "desc": "Color-graded movie-style teaser film, 60s Instagram reels, and master video."
    },
    {
      "id": "drone",
      "name": "Drone Aerial Cinematography",
      "tag": "Drone Aerial",
      "price": 7000,
      "desc": "Grand panoramic bird's-eye views of the temple mantapa, baraat, and landscape."
    },
    {
      "id": "album",
      "name": "Luxury Handcrafted Album (30-40 Sheets)",
      "tag": "Handcrafted Album",
      "price": 9000,
      "desc": "Hardbound, premium silk matte lay-flat memory album with personalized leather box."
    },
    {
      "id": "teaser",
      "name": "Hampi Sunset Couple Teaser",
      "tag": "Hampi Teaser",
      "price": 10000,
      "desc": "Golden hour cliff and Tungabhadra coracle boat cinematic visual sequence."
    }
  ],
  "customEventTags": [
    { "id": "muhurtham", "name": "Muhurtham & Sacred Rituals", "base": 18000 },
    { "id": "reception", "name": "Reception & Evening Sangeet", "base": 15000 },
    { "id": "haldi", "name": "Haldi & Mehendi Ceremony", "base": 12000 },
    { "id": "prewedding", "name": "Hampi Heritage Pre-Wedding", "base": 20000 },
    { "id": "traditional", "name": "Maternity / Birthday / Gruhapravesha", "base": 14000 }
  ]
};

