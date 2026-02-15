import PrivacyPolicyPage from "@/src/components/PrivacyPolicyPage";
import { PrivacySeoContent } from "@/src/components/SeoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://about.vidorahub.com"),

  title: "Privacy Policy — VidoraHub",
  description:
    "Read the VidoraHub Privacy Policy to understand how we collect, use, and protect user data on our creator-first video sharing platform.",

  keywords: [
    "VidoraHub privacy policy",
    "user data protection",
    "creator platform privacy",
    "data protection policy",
    "video platform privacy policy",
  ],

  openGraph: {
    title: "Privacy Policy — VidoraHub",
    description:
      "Learn how VidoraHub protects user data and ensures transparency in data usage.",
    url: "https://about.vidorahub.com/privacypolicy",
    siteName: "VidoraHub",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "Privacy Policy — VidoraHub",
    description:
      "Understand how VidoraHub handles and protects user data.",
  },

  alternates: {
    canonical: "https://about.vidorahub.com/privacypolicy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyPage />
      <div className="hidden">
        <PrivacySeoContent />
      </div>
    </>
  );
}
