import OurStoryPage from "@/src/components/OurStoryPage";
import { OurStorySeoContent } from "@/src/components/SeoContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — VidoraHub Creator-First Video Platform",
  description:
    "Learn the story behind VidoraHub, a creator-first video sharing platform built to give creators ownership, transparency, and community-driven discovery.",
};


export default function OurStory(){
    return (
        <>
        <OurStoryPage/>
        <div className="hidden">
            <OurStorySeoContent/>
        </div>
        </>
    )
} 