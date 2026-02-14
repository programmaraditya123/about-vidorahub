import PrivacyPolicyPage from "@/src/components/PrivacyPolicyPage";
import { PrivacySeoContent } from "@/src/components/SeoContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — VidoraHub",
  description:
    "Read the VidoraHub Privacy Policy to understand how user data is collected, used, and protected on our creator-first video sharing platform.",
};


export default function PrivacyPolicy(){
    return (
        <>
        <PrivacyPolicyPage/>
        <div className="hidden">
            <PrivacySeoContent/>
        </div>
        </>
    )
}