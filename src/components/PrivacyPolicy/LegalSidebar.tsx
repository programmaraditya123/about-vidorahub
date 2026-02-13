"use client";

import { termsSections } from "@/src/data/terms";
// import { termsSections } from "@/data/terms";
import { useScrollSpy } from "./useScrollSpy";

export default function LegalSidebar() {
  const active = useScrollSpy(termsSections.map((s) => s.id));

  return (
    <div className="sticky top-24 space-y-2">
      {termsSections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`block px-3 py-2 rounded-md text-sm transition
          ${
            active === s.id
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {s.title}
        </a>
      ))}
    </div>
  );
}
