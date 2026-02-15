export default function MissionSection() {
  return (
    <section className="bg-[#14041f] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          
          {/* Tag */}
          <div className="inline-block bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full mb-5">
            OUR MISSION
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-200 leading-tight">
            Democratizing
            <br />
            <span className="text-purple-400 font-semibold italic">
              Visual Intelligence
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed text-sm md:text-base">
            We are building the next generation of visual tools to empower
            creators worldwide. Through kinetic design and neural interfaces,
            we transform how the world perceives digital information.
          </p>

          <button className="mt-8 bg-purple-600 hover:bg-purple-500 transition px-5 py-3 rounded-lg text-white text-sm shadow-lg">
            Explore Our Tech →
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-xl border border-purple-500/20 bg-[#0b0213] flex items-center justify-center overflow-hidden">
            
            {/* Glow background */}
            <div className="absolute w-[300px] h-[300px] bg-purple-700/20 blur-3xl rounded-full" />

            {/* Stat Card */}
            <div className="relative bg-purple-900/60 backdrop-blur-md px-10 py-6 rounded-xl border border-purple-400/20 text-center shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <p className="text-3xl md:text-4xl font-semibold text-purple-300">
                99.9%
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Neural processing accuracy in
                <br />
                kinetic environments
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
