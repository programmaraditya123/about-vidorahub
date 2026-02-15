import Image from "next/image";
import a from '../../Images/aditya.jpeg'
import b from '../../Images/preet.jpeg'

export default function FoundersSection() {
  const founders = [
    {
      name: "Aditya Saini",
      role: "Founder, VidoraHub",
      image: a,
      highlight: true,
    },
    {
      name: "Preet Saini",
      role: "Co-Founder & CEO",
      image: b,
      highlight: true,
    },

    // {
    //   name: "Daniel Park",
    //   role: "CO-FOUNDER",
    //   image: "/founder3.jpg",
    //   highlight: false,
    // },
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a0626] to-[#14041f] py-40 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-200">
          Meet the Founders of {" "}
          <span className="text-purple-400 font-semibold">
            VidoraHub
          </span>
        </h2>

        <p className="text-gray-400 text-sm mt-3 mb-16">
          The team building a creator-first video platform focused on discovery, community, and creator ownership.
        </p>

        {/* Founders */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {founders.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${f.highlight ? "scale-110" : "opacity-90"
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
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-200">
  <Image
    src={f.image}
    alt={f.name}
    width={144}
    height={144}
    quality={100}
    className="rounded-full object-cover"
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
