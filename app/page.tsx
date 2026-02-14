import { SeoContent } from "@/src/components/SeoContent";
import VidoraLanding from "@/src/components/VidoraLanding";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VidoraHub — Creator-First Video Sharing Platform from India",
  description:
    "VidoraHub is a creator-first video sharing platform where creators own their audience, content, and monetization. Discover meaningful videos beyond algorithms.",

  keywords: [
    "VidoraHub",
    "video sharing platform",
    "Indian video platform",
    "creator platform India",
    "YouTube alternative India",
    "video monetization platform",
    "creator economy India",
    "upload videos platform",
    "community video platform",
    "creator-first platform",
    "video discovery platform",
    "Vidora Hub",
    "vidorahub platform",
    "vedorhub",
    "vidorhub",
    "vidora platform",
  ],

  openGraph: {
    title: "VidoraHub — Creator-First Video Platform",
    description:
      "A video sharing platform designed for creators and communities, not algorithms.",
    url: "https://www.vidorahub.com",
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
};


export default function Home() {
  return (
    <>
    <VidoraLanding/>
    <div className="hidden">
    <SeoContent/>
    </div>
    <Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "VidoraHub",
      url: "https://www.vidorahub.com",
      description:
        "VidoraHub is a creator-first video sharing platform built for community-driven discovery and creator ownership.",
    }),
  }}
/>

      
    </>
  );
}
