export default function CinematicExperience() {
  return (
    <section className="bg-[#020617] py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Cinematic Experience, Built for India.
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Our interface is designed for the modern smartphone user,
            optimized for high-performance video delivery even on 4G
            networks across Tier-2 and Tier-3 cities.
          </p>

          {/* Metrics */}
          <div className="flex gap-12">
            <div>
              <p className="text-blue-500 text-2xl font-semibold">4K</p>
              <p className="text-gray-500 text-xs tracking-widest">
                RESOLUTION
              </p>
            </div>

            <div>
              <p className="text-blue-500 text-2xl font-semibold">0.2s</p>
              <p className="text-gray-500 text-xs tracking-widest">
                AVG LATENCY
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="bg-gray-200 rounded-2xl p-12 shadow-2xl">
            
            {/* Inner mock element */}
            <div className="w-56 h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="w-28 h-24 bg-gray-100 rounded-xl shadow-inner" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
