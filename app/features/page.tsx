import FeaturesPage from "@/src/components/FeaturesPage";
import { FeaturesSeoContent } from "@/src/components/SeoContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidoraHub Features — Creator Video Platform Tools",
  description:
    "Explore VidoraHub platform features including video publishing, creator channels, community-driven discovery, and creator monetization infrastructure.",
};


export default function Features() {
    return (
        <>
        <FeaturesPage/>
        <div className="hidden">
            <FeaturesSeoContent/>
        </div>
        </>
    )
}