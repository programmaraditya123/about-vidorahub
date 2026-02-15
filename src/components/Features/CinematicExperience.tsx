export default function CinematicExperience() {
  return (
    <section className="bg-[#020617] py-16 md:py-28 px-5 md:px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center lg:pl-25">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-4 md:mb-6">
            Video Experience, Designed for Real Networks
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            VidoraHub focuses on smooth playback, fast loading, and a clean video
            interface that works well across smartphones, laptops, and everyday
            internet connections.
          </p>

          {/* Metrics */}
          <div className="flex justify-center md:justify-start gap-10 md:gap-12">
            <div>
              <p className="text-blue-500 text-xl md:text-2xl font-semibold">
                HD
              </p>
              <p className="text-gray-500 text-[10px] md:text-xs tracking-widest">
                VIDEO STREAMING
              </p>
            </div>

            <div>
              <p className="text-blue-500 text-xl md:text-2xl font-semibold">
                Fast
              </p>
              <p className="text-gray-500 text-[10px] md:text-xs tracking-widest">
                VIDEO LOADING
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="bg-gray-200 rounded-2xl p-6 md:p-12 shadow-2xl">
            
            {/* Inner mock element */}
            <div className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="w-20 h-16 md:w-28 md:h-24 bg-gray-100 rounded-xl shadow-inner flex items-center justify-center">
                <div className="w-0 h-0 border-l-[10px] md:border-l-[12px] border-l-gray-400 border-y-[7px] md:border-y-[8px] border-y-transparent ml-1" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
