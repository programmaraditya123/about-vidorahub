
export default function ComparisonSection() {
  const rows = [
    {
      feature: "Revenue Share",
      vidora: "90% to Creator",
      traditional: "45% to 55%",
    },
    {
      feature: "Data Privacy",
      vidora: "No Data Selling",
      traditional: "Ad-Tracking Driven",
      highlight: true,
    },
    {
      feature: "Reach Logic",
      vidora: "Community-First",
      traditional: "Pay-to-Play Ads",
    },
    {
      feature: "Safety Focus",
      vidora: "Localized AI + Humans",
      traditional: "Global Generic AI",
    },
    {
      feature: "Payouts",
      vidora: "Instant UPI/Bank",
      traditional: "30–60 Day Cycles",
    },
  ];

  return (
    <section className="bg-[#020617] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
          Why VidoraHub?
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          See how we stack up against traditional video platforms.
        </p>

        {/* Table Card */}
        <div className="mt-10 bg-[#071428] border border-white/10 rounded-2xl overflow-hidden">
          
          {/* Header */}
          <div className="grid grid-cols-3 text-sm text-gray-400 border-b border-white/10 p-4">
            <div className="text-left">Features</div>
            <div className="text-blue-400 font-medium">VidoraHub</div>
            <div>Traditional Sites</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 p-4 text-sm border-b border-white/5 last:border-none"
            >
              <div className="text-gray-400">{row.feature}</div>

              <div className="text-gray-200 flex items-center gap-2">
                {/* {row.highlight && (
                  <Check size={16} className="text-green-400" />
                )} */}
                {row.vidora}
              </div>

              <div className="text-gray-500">{row.traditional}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
