// import { Shield, Wallet, Cpu } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: '',
      title: "Data Sovereignty",
      description:
        "Your data stays where it belongs. We host infrastructure exclusively on Indian servers, complying with the highest standards of national digital security.",
    },
    {
      icon: '',
      title: "Creator Economy",
      description:
        "Democratizing monetization for the next billion creators. Our direct-to-creator payment systems eliminate middlemen and maximize local earnings.",
    },
    {
      icon: "",
      title: "Tech Excellence",
      description:
        "Proprietary AI and ML models developed by Indian engineers, optimized for low-latency streaming even in remote corners of the globe.",
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
                {/* <Icon className="text-purple-400" size={18} /> */}
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
