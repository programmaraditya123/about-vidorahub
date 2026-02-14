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
  className="bg-white border rounded-xl p-8 space-y-10
             h-[calc(100vh-160px)] overflow-y-auto"
>
    <h1 className="text-2xl font-semibold">{title}</h1>

    {sections.map((section, i) => (
      <section key={section.id} id={section.id}>
        <h2 className="font-semibold mb-2">
          {i + 1}. {section.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {section.content}
        </p>
      </section>
    ))}
  </div>
);

}
