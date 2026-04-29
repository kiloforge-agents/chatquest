import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChatQuest — AI Quest Matching",
    short_name: "ChatQuest",
    description:
      "AI-matched real-life quests with voice previews. Find your people, level up your week.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#07060d",
    theme_color: "#07060d",
    categories: ["social", "lifestyle", "fitness"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
