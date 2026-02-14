import { UploadIcon, PlayPlatformIcon, DiscoveryIcon, TickIcon } from "@/src/Icons";

export default function EcosystemPillars() {


  const pillars = [
    {
      icon: UploadIcon,
      title: "Simple Video Publishing",
      desc: "Uploading and sharing videos on VidoraHub is designed to be fast and straightforward for creators of all levels.",
      bullets: [
        "Easy video uploads",
        "Clean creator dashboard",
        "Cross-device compatibility",
      ],
    },
    {
      icon: DiscoveryIcon,
      title: "Discovery & Community",
      desc: "VidoraHub helps viewers discover new creators while enabling creators to build meaningful audiences.",
      bullets: [
        "Creator discovery features",
        "Viewer engagement tools",
        "Growing creator community",
      ],
    },
    {
      icon: PlayPlatformIcon,
      title: "Reliable Video Platform",
      desc: "We focus on smooth playback, stable uploads, and a consistent viewing experience across networks and devices.",
      bullets: [
        "Optimized video playback",
        "Mobile-friendly streaming",
        "Performance-focused platform",
      ],
    },
  ];


  return (
    <section className="bg-[#020617] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
          Built for Creators and Viewers
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          The core features that make sharing and watching videos simple on VidoraHub.
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
                    <Icon size={28} />
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
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-green-500/10 p-1 rounded-full">
                        <TickIcon />
                      </div>
                      <span>{b}</span>
                    </li>
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
