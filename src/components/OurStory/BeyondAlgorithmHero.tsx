export default function BeyondAlgorithmHero() {
  return (
    <section className="h-screen flex items-center justify-center text-center overflow-hidden bg-[#020617]">

      {/* Background gradient */}
      <div className=" inset-0 bg-gradient-to-br from-[#0b1a2a] via-[#020617] to-[#020617]" />

      {/* Light streak overlay */}
      <div className="inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.2)_50%,transparent_60%)] blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        {/* Small label */}
        <p className="text-xs tracking-widest text-blue-400 mb-6">
          OUR MISSION
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-serif text-gray-200 leading-tight">
          Beyond the
          <br />
          <span className="bg-gradient-to-r from-gray-200 to-blue-400 bg-clip-text text-transparent">
            Algorithm.
          </span>
        </h1>

        {/* Quote */}
        <p className="mt-6 text-gray-400 italic text-sm md:text-base">
          "We didn’t set out to build another app. We set out to give Indian
          creators back their voice in an era of digital noise."
        </p>

        {/* Scroll indicator */}
        {/* <div className="mt-10 animate-bounce text-blue-400 text-xl">
          ↓
        </div> */}

      </div>
    </section>
  );
}
