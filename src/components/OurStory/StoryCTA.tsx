export default function StoryCTA() {
  return (
    <section className="bg-[#020617] px-6 py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left text */}
        <div>
          <h3 className="text-xl md:text-2xl font-serif text-gray-200">
            Ready to start your story?
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Join the movement and claim your space in the creator economy.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white text-sm shadow-md">
            Launch Channel
          </button>

          <button className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-gray-200 text-sm">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
