import { termsSections } from "@/src/data/terms";

export default function LegalDocument() {
  return (
    <div className="bg-white border rounded-xl p-8 space-y-10">
      <h1 className="text-2xl font-semibold">Terms of Service</h1>

      {termsSections.map((section, i) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="font-semibold mb-2">
            {i + 1}. {section.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {section.content}
          </p>
        </section>
      ))}

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-sm text-blue-700">
        Hey takeaway: We only use permissions required to show your content.
      </div>
    </div>
  );
}
