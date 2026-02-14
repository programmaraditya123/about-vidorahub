export default function BrokenEcosystem() {
  return (
    <section className=" bg-[#020617] py-7 px-6 overflow-hidden">

      {/* Background gradient */}
      <div className=" inset-0 bg-gradient-to-br from-[#0b1a2a] via-[#020617] to-[#020617]" />

      <div className=" z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mb-6">
            The System Isn’t Built for Creators
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            For years, creators have depended on platforms they don’t control —
where visibility can change overnight, revenue is unpredictable,
and audience relationships are owned by the platform.

Creators build communities, but platforms own the connection.
          </p>

          {/* Warning Box */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 space-y-3">
            <Bullet text="No transparency in reach and visibility" />
            <Bullet text="Revenue models that favor platforms over creators" />
            <Bullet text="No direct ownership of audience relationships" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="">
          <div className="rounded-xl border border-white/10 bg-[#020617] p-12 h-[368px] flex items-center justify-center text-center overflow-hidden">

            {/* Glow */}
            <div className="absolute w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            <p className="relative italic text-gray-300 max-w-xs">
              “The Attention Economy” was eating its creators alive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Bullet item */
function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-300">
      <div className="w-4 h-4 rounded-full border border-red-400 flex items-center justify-center text-red-400 text-xs">
        !
      </div>
      {text}
    </div>
  );
}
