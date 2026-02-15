import OurStoryPage from "@/src/components/OurStoryPage";
import { OurStorySeoContent } from "@/src/components/SeoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://about.vidorahub.com"),

  title: "Our Story — VidoraHub Creator-First Video Platform",
  description:
    "Learn the story behind VidoraHub — a creator-first video platform built to help creators share content, grow audiences, and build communities across India and the world.",

  keywords: [
    "VidoraHub story",
    "creator platform journey",
    "video platform India",
    "VidoraHub founders",
    "startup story",
    "creator-first platform",
  ],

  openGraph: {
    title: "Our Story — VidoraHub",
    description:
      "Discover how VidoraHub began and the mission behind building a creator-first video platform.",
    url: "https://about.vidorahub.com/ourstory",
    siteName: "VidoraHub",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Story — VidoraHub",
    description:
      "The journey behind VidoraHub and our vision for creator-driven video sharing.",
  },

  alternates: {
    canonical: "https://about.vidorahub.com/ourstory",
  },
};

export default function OurStory() {
  return (
    <>
      <OurStoryPage />
      <div className="hidden">
        <OurStorySeoContent />
      </div>
    </>
  );
}
