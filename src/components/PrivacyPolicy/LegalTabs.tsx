"use client";

import { useState } from "react";

export default function LegalTabs() {
  const [active, setActive] = useState("terms");

  const tabs = [
    { id: "terms", label: "Terms of Service" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "data", label: "Data Protection" },
  ];

  return (
    <div className="bg-gray-50 py-6 flex justify-center">
      <div className="flex gap-3">
        {tabs.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
