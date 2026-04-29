import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChatQuest — Find your people. Live the quest.",
  description:
    "ChatQuest is a social discovery PWA that uses AI to match you with nearby people for real-life quests — runs, climbs, art crawls, coffee dates, and more. Voice previews before you meet.",
  applicationName: "ChatQuest",
  keywords: [
    "social discovery",
    "AI matching",
    "quests",
    "fitness meetups",
    "voice chat",
    "PWA",
    "dating alternative",
  ],
  authors: [{ name: "ChatQuest" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ChatQuest",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#07060d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
