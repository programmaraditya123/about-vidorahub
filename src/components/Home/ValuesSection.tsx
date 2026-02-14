import { CreatorIcon ,GrowthIcon,VideoIcon} from "@/src/Icons";

export default function ValuesSection() {
  const values = [
    {
      icon: CreatorIcon,
      title: "Creator-First Platform",
      description:
        "VidoraHub is designed to help small and growing creators share videos, express ideas, and build an audience without relying only on viral reach.",
    },
    {
      icon: VideoIcon,
      title: "Smooth Video Experience",
      description:
        "We focus on reliable uploads, fast playback, and a clean viewing experience that works well across devices and different internet speeds.",
    },
    {
      icon: GrowthIcon,
      title: "Built for Growth",
      description:
        "VidoraHub is continuously improving with better discovery, creator tools, and community features to support creators as the platform grows.",
    },
  ];


  return (
    <section className="bg-[#0e0714] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {values.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl p-8 bg-white/5 border border-white/10 
              backdrop-blur-md hover:border-purple-500/40 transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-5">
                <Icon size={18} />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
