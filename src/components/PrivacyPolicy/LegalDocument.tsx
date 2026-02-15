import { termsSections } from "@/src/data/terms";
import { dataSections } from "@/src/data/dataProtectionSections";
import { privacySections } from "./privacySections";
// import { dataSections } from "@/src/data/dataProtection";

export default function LegalDocument({ active }: any) {
  let sections = termsSections;
  let title = "Terms of Service";

  if (active === "privacy") {
    sections = privacySections;
    title = "Privacy Policy";
  }

  if (active === "data") {
    sections = dataSections;
    title = "Data Protection";
  }

  return (
    <div
      id="legal-scroll-container"
      className="
        bg-white border rounded-xl
        p-5 md:p-8 space-y-8 md:space-y-10
        md:h-[calc(100vh-160px)] md:overflow-y-auto
      "
    >
      <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>

      {sections.map((section, i) => (
        <section key={section.id} id={section.id}>
          <h2 className="font-semibold mb-2 text-sm md:text-base">
            {i + 1}. {section.title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {section.content}
          </p>
        </section>
      ))}
    </div>
  );
}
