import { termsSections } from "@/src/data/terms";
// import { privacySections } from "@/src/data/privacy";
// import { dataSections } from "@/src/data/dataProtection";
import { useScrollSpy } from "./useScrollSpy";
import { dataSections } from "@/src/data/dataProtectionSections";
import { privacySections } from "./privacySections";

export default function LegalSidebar({ active }: any) {
  let sections = termsSections;

  if (active === "privacy") sections = privacySections;
  if (active === "data") sections = dataSections;

  const activeSection = useScrollSpy(sections.map((s) => s.id));

  const scrollToSection = (id: string) => {
  const container = document.getElementById("legal-scroll-container");
  const target = document.getElementById(id);

  if (!container || !target) return;

  const containerRect = container.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const scrollTop =
    container.scrollTop + (targetRect.top - containerRect.top) - 20;

  container.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
};


  return (
    <div className="sticky top-24 h-[calc(100vh-160px)] overflow-y-auto space-y-2">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.id)}
          className={`block w-full text-left px-3 py-2 rounded-md text-sm transition
          ${
            activeSection === s.id
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {s.title}
        </button>
      ))}
    </div>
  );
}
