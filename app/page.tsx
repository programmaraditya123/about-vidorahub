import { SeoContent } from "@/src/components/SeoContent";
import VidoraLanding from "@/src/components/VidoraLanding";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://about.vidorahub.com"),

  title: "VidoraHub — Creator-First Video Sharing Platform",
  description:
    "VidoraHub is a creator-first video sharing platform where creators own their audience, content, and monetization. Discover meaningful videos beyond algorithms.",

  keywords: [
    "VidoraHub",
    "creator video platform",
    "video sharing platform",
    "creator economy India",
    "video discovery platform",
    "creator monetization platform",
    "community video platform",
  ],

  openGraph: {
    title: "VidoraHub — Creator-First Video Platform",
    description:
      "A video sharing platform designed for creators and communities, not algorithms.",
    url: "https://about.vidorahub.com/",
    siteName: "VidoraHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VidoraHub",
    description:
      "Creator-first video sharing platform built for community and ownership.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://about.vidorahub.com/",
  },
};

export default function Home() {
  return (
    <>
      <VidoraLanding />

      <div className="hidden">
        <SeoContent />
      </div>

      {/* Structured Data */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "VidoraHub",
            url: "https://about.vidorahub.com/",
            description:
              "VidoraHub is a creator-first video sharing platform built for community-driven discovery and creator ownership.",
          }),
        }}
      />
    </>
  );
}
