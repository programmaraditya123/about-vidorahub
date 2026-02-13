export default function BharatTimeline() {
  const items = [
    {
      title: "The Spark",
      text: "Conceived in the tech hubs of Bengaluru, VidoraHub began as a response to the need for a creator-first economy that truly understands the cultural nuances of the subcontinent.",
      image: "/timeline1.jpg",
    },
    {
      title: "Local Innovation",
      text: "We built our proprietary compression algorithms and recommendation engines from scratch on Indian soil, ensuring peak performance across diverse network conditions.",
      image: "/timeline2.jpg",
    },
    {
      title: "Global Reach",
      text: "Today, we export our innovation to the world. A platform that celebrates diversity, promotes digital sovereignty, and empowers creators from Mumbai to New York.",
      image: "/timeline3.jpg",
    },
  ];

  return (
    <section className="bg-[#0e0714] py-24 px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Bharat to World
          </h2>
          <div className="w-16 h-[2px] bg-purple-500 mx-auto mt-3" />
        </div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-24 bottom-0 w-[2px] bg-purple-600/60 -translate-x-1/2" />

        <div className="space-y-24">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-center relative"
              >
                {/* Glow Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full shadow-[0_0_18px_#a855f7]" />
                </div>

                {/* Left */}
                {isLeft ? (
                  <>
                    <div className="text-right pr-10">
                      <h3 className="text-purple-400 font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                    <img
                      src={item.image}
                      className="rounded-xl border border-white/10"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={item.image}
                      className="rounded-xl border border-white/10"
                    />

                    <div className="text-left pl-10">
                      <h3 className="text-purple-400 font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
