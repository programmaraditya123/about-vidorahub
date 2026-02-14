import Image from 'next/image';
import a from '../../Images/timeline1.jpg.png'
import b from '../../Images/timeline2.png'
import c from '../../Images/timeline3.png'


export default function BharatTimeline() {
  const items = [
    {
      title: "The Spark",
      text: "VidoraHub started from a simple frustration — small and growing creators struggle to get discovered on most video platforms. We’re building a space where new voices, including regional creators across India, can share content and find their audience",
      image: a,
    },
    {
      title: "Local Innovation",
      text: "We’re building VidoraHub step by step in India, focusing on smooth video playback, reliable uploads, and simple discovery features that work well even on slower networks. Our goal is to make video sharing accessible for creators across different devices and internet conditions.",
      image: c,
    },
    {
      title: "Global Reach",
      text: "VidoraHub is built for creators everywhere. While rooted in India, the platform is designed so creators from any country can share videos, connect with audiences, and grow their communities.",
      image: b,
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

                    <div className="relative w-full h-56">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-xl border border-white/10"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative w-full h-56">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-xl border border-white/10"
                      />
                    </div>

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
