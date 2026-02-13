export default function JoinMovement() {
  return (
    <section className="bg-[#0e0714] py-24 px-6">
      <div
        className="max-w-4xl mx-auto rounded-2xl border border-white/10 
        bg-gradient-to-br from-[#1a0d2b] to-[#2a123d] 
        p-12 text-center shadow-lg"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Join the Movement
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto">
          Be part of the platform that’s redefining how India creates and
          shares with the world. Early creator access is now open.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 
            text-sm text-white w-full md:w-80 outline-none 
            focus:border-purple-500"
          />

          <button
            className="px-6 py-3 rounded-lg text-white text-sm font-medium
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:opacity-90 transition shadow-md"
          >
            Secure Early Access
          </button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-6 tracking-widest">
          SAFE • SECURE • SOVEREIGNTY
        </p>
      </div>
    </section>
  );
}
