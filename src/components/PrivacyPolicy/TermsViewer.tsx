"use client";

import { useState } from "react";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "rights", title: "Your Content & Rights" },
  { id: "conduct", title: "User Conduct" },
  { id: "liability", title: "Liability & Disputes" },
];

export default function TermsViewer() {
  const [active, setActive] = useState("acceptance");
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr] gap-6">

        {/* LEFT PANEL */}
        <div className="space-y-4">
          <SidebarCard title="Ownership" text="You keep 100% ownership of your content." />
          <SidebarCard title="Data Usage" text="We never sell personal data." />
          <SidebarCard title="No Intrusive Ads" text="Creator-first monetization." />
          <SidebarCard title="Indian Law Priority" text="Stored in India for compliance." />

          <div className="bg-[#0f172a] text-white rounded-xl p-4 mt-4">
            <p className="text-sm mb-3">Need a PDF version?</p>
            <button className="bg-white text-black text-sm px-3 py-2 rounded-md w-full">
              Download Legal Pack
            </button>
          </div>
        </div>

        {/* DOCUMENT VIEWER */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            <input
              placeholder="Search legal terms..."
              className="text-sm px-3 py-1 border rounded-md w-56"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Document content */}
          <div className="p-8 max-h-[600px] overflow-y-auto space-y-8">
            <h2 className="text-xl font-semibold">Terms of Service</h2>

            {sections.map((section, i) => (
              <div key={section.id} id={section.id}>
                <h3 className="font-semibold mb-2">
                  {i + 1}. {section.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This section explains how VidoraHub operates and defines
                  expectations between creators and the platform. These terms
                  are written in human-readable language to maintain
                  transparency and clarity.
                </p>
              </div>
            ))}

            {/* Info highlight */}
            <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-md text-sm">
              Hey takeaway: We need these permissions solely to show your videos
              to your audience worldwide from different devices.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function SidebarCard({ title, text }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-500">{text}</p>
    </div>
  );
}
