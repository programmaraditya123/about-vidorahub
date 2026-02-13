
export default function EcosystemPillars() {
  const pillars = [
    {
      icon: 'Wallet',
      title: "Creator Monetization",
      desc: "90/10 revenue split in favor of creators with seamless payouts.",
      bullets: [
        "Zero transaction fees for early adopters",
        "Multi-tier subscription models",
      ],
    },
    {
      icon:' Users',
      title: "Community Hubs",
      desc: "Creator-led micro-communities with direct audience ownership.",
      bullets: [
        "Private forum spaces",
        "Direct messaging for supporters",
      ],
    },
    {
      icon: 'Shield',
      title: "AI-Powered Safety",
      desc: "Advanced NLP moderation trained on Indian languages.",
      bullets: [
        "Real-time slur filtering",
        "Regional context awareness",
      ],
    },
  ];

  return (
    <section className="bg-[#020617] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
          Core Ecosystem Pillars
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          Interact with the orbs to explore our technological breakthroughs.
        </p>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <div key={i} className="text-center">
                
                {/* Orb */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-[14px] border-blue-600/40 blur-[2px]" />
                  <div className="absolute inset-4 rounded-full bg-[#020617] flex items-center justify-center">
                    {/* <Icon className="text-blue-500" size={28} /> */}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-200 font-medium mb-2">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {pillar.desc}
                </p>

                {/* Bullets */}
                <ul className="text-gray-400 text-sm space-y-1">
                  {pillar.bullets.map((b, idx) => (
                    <li key={idx}>• {b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
