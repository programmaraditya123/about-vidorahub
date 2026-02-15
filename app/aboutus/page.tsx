import type { Metadata } from "next";
import AboutUsPage from "@/src/components/AboutUsPage";

export const metadata: Metadata = {
  title: "About VidoraHub | Our Story, Vision & Mission",
  description:
    "Learn about VidoraHub — our mission to empower creators, build a creator-first video platform, and enable discovery for voices across India and the world.",

  keywords: [
    "VidoraHub",
    "about VidoraHub",
    "creator video platform",
    "creator economy India",
    "video sharing platform",
    "startup story",
    "VidoraHub mission",
  ],

  metadataBase: new URL("https://about.vidorahub.com"),

  openGraph: {
    title: "About VidoraHub",
    description:
      "Discover the story behind VidoraHub and our vision for a creator-first video platform.",
    url: "https://about.vidorahub.com/",
    siteName: "VidoraHub",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About VidoraHub",
    description:
      "Meet the team and vision behind VidoraHub — a creator-first video platform.",
  },

  alternates: {
    canonical: "https://about.vidorahub.com/",
  },
};

const Aboutus = () => {
  return <AboutUsPage />;
};

export default Aboutus;
