import FeaturesPage from "@/src/components/FeaturesPage";
import { FeaturesSeoContent } from "@/src/components/SeoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://about.vidorahub.com"),

  title: "VidoraHub Features — Creator Video Platform Tools",
  description:
    "Explore VidoraHub features including video publishing, creator channels, discovery systems, and tools designed to help creators grow their audience.",

  keywords: [
    "VidoraHub features",
    "video publishing platform",
    "creator tools",
    "video platform India",
    "creator discovery platform",
    "video monetization tools",
  ],

  openGraph: {
    title: "VidoraHub Features",
    description:
      "Discover the tools powering VidoraHub — video publishing, creator channels, and community-driven discovery.",
    url: "https://about.vidorahub.com/features",
    siteName: "VidoraHub",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VidoraHub Features",
    description:
      "Explore the creator-first features that power VidoraHub.",
  },

  alternates: {
    canonical: "https://about.vidorahub.com/features",
  },
};

export default function Features() {
  return (
    <>
      <FeaturesPage />
      <div className="hidden">
        <FeaturesSeoContent />
      </div>
    </>
  );
}
