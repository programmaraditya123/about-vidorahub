"use client";

import { useState } from "react";
import LegalSidebar from "./LegalSidebar";
import LegalDocument from "./LegalDocument";
import LegalTabs from "./LegalTabs";

export default function LegalLayout() {
  const [active, setActive] = useState("terms");

  return (
    <>
      <LegalTabs active={active} setActive={setActive} />

      <section className="bg-gray-50 py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[240px_1fr] gap-6">
          
          {/* Sidebar hidden on mobile */}
          <div className="hidden md:block">
            <LegalSidebar active={active} />
          </div>

          <LegalDocument active={active} />
        </div>
      </section>
    </>
  );
}
