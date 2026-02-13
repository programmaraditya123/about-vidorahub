import LegalSidebar from "./LegalSidebar";
import LegalDocument from "./LegalDocument";

export default function LegalLayout() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[240px_1fr] gap-6">
        <LegalSidebar />
        <LegalDocument />
      </div>
    </section>
  );
}
