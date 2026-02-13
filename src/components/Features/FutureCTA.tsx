export default function FutureCTA() {
  return (
    <section className="bg-[#020617] py-24 px-6">
      <div
        className="max-w-5xl mx-auto rounded-2xl 
        bg-gradient-to-r from-blue-600 to-blue-500 
        text-center p-12 shadow-xl"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Ready to own your future?
        </h2>

        {/* Subtitle */}
        <p className="text-blue-100 mt-4 max-w-xl mx-auto">
          Join the waiting list today and be part of the first wave of creators
          shaping the Indian digital landscape.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
            I am a Creator
          </button>

          <button className="border border-blue-300 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-500/20 transition">
            I am a Viewer
          </button>
        </div>
      </div>
    </section>
  );
}
