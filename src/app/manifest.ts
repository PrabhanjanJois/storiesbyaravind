import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stories by Arvind | Wedding & Traditional Photography",
    short_name: "Stories by Arvind",
    description:
      "Authentic South Indian wedding, traditional rituals, seemantham, and Hampi pre-wedding photography by Arvind in Hospet, Karnataka.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFCFA",
    theme_color: "#C25E3E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

