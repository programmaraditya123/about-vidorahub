export default function CinematicExperience() {
  return (
    <section className="bg-[#020617] py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Video Experience, Designed for Real Networks
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            VidoraHub focuses on smooth playback, fast loading, and a clean video
            interface that works well across smartphones, laptops, and everyday
            internet connections.
          </p>

          {/* Metrics */}
          <div className="flex gap-12">
            <div>
              <p className="text-blue-500 text-2xl font-semibold">HD</p>
              <p className="text-gray-500 text-xs tracking-widest">
                VIDEO STREAMING
              </p>
            </div>

            <div>
              <p className="text-blue-500 text-2xl font-semibold">Fast</p>
              <p className="text-gray-500 text-xs tracking-widest">
                VIDEO LOADING
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="bg-gray-200 rounded-2xl p-12 shadow-2xl">

            {/* Inner mock element */}
            <div className="w-56 h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="w-28 h-24 bg-gray-100 rounded-xl shadow-inner flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-gray-400 border-y-[8px] border-y-transparent ml-1" />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
