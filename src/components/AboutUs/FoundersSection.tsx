import Image from "next/image";

export default function FoundersSection() {
  const founders = [
    {
      name: "Aisha Lee",
      role: "CO-FOUNDER",
      image: "/founder1.jpg",
      highlight: false,
    },
    {
      name: "Arjun Sharma",
      role: "FOUNDER & CEO",
      image: "/founder2.jpg",
      highlight: true,
    },
    {
      name: "Daniel Park",
      role: "CO-FOUNDER",
      image: "/founder3.jpg",
      highlight: false,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a0626] to-[#14041f] py-40 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-200">
          The Architects of{" "}
          <span className="text-purple-400 font-semibold">
            Future Vision
          </span>
        </h2>

        <p className="text-gray-400 text-sm mt-3 mb-16">
          Meet the minds behind the kinetic revolution in visual intelligence.
        </p>

        {/* Founders */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {founders.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                f.highlight ? "scale-110" : "opacity-90"
              }`}
            >
              {/* Avatar glow */}
              <div
                className={`
                  relative rounded-full p-1
                  ${f.highlight ? "bg-purple-500" : "bg-purple-500/40"}
                  shadow-[0_0_40px_rgba(168,85,247,0.5)]
                `}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <p className="mt-5 text-white font-medium">
                {f.name}
              </p>

              {/* Role */}
              <p className="text-purple-400 text-xs tracking-widest">
                {f.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
