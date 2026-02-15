import { GenerativeFluxIcon, GlobalHubIcon, NeuralHarmonyIcon } from "@/src/Icons";

export default function VisionSection() {
  const visionItems = [
    {
      title: "Generative Flux",
      text: "Redefining static content into living, breathing assets that adapt to user interaction in real-time.",
      icon: GenerativeFluxIcon,
    },
    {
      title: "Neural Harmony",
      text: "Seamless integration between human creative intent and AI-driven execution through empathetic UI.",
      icon: NeuralHarmonyIcon,
    },
    {
      title: "Global Hub",
      text: "Establishing a decentralized network for creators to collaborate on kinetic visual projects worldwide.",
      icon: GlobalHubIcon,
    },
  ];

  return (
    <section className="bg-[#0b0213] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
            The Vision
          </h2>
          <div className="w-14 h-[2px] bg-purple-500 mx-auto mt-3" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visionItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  p-6 rounded-xl
                  bg-[#12041d]
                  border border-purple-500/20
                  hover:border-purple-500/40
                  transition
                  shadow-[0_0_25px_rgba(168,85,247,0.08)]
                "
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-600/20 mb-4">
                  <Icon size={18}  />
                </div>

                {/* Title */}
                <h3 className="text-gray-200 font-medium mb-2">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
