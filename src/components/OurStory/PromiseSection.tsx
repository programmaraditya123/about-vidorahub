import Image from 'next/image';
import a from '../../Images/promise.png'

export default function PromiseSection() {
  return (
    <section className="bg-[#020617] py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <Image
              src={a}
              alt="Creative safe sanctuary"
              className="w-full h-[470px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-blue-400 mb-6">
            The VidoraHub Promise
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            VidoraHub is built on a simple promise:
            creators should own their audience, their content,
            and the value they create.

            We’re building infrastructure designed for creators first —
            not advertisers, not algorithms, and not platform lock-in.
          </p>

          {/* Feature cards */}
          <div className="flex flex-col sm:flex-row gap-4">
            <FeatureCard
              title="Creator-First Monetization"
              text="Creators earn directly from their audience —
without relying on ad-driven revenue models"
            />

            <FeatureCard
              title="Transparent Discovery"
              text="Content is surfaced based on value and community,
not manipulation or engagement hacks."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* Feature Card */
function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#071428] border border-blue-500/20 rounded-xl p-5 w-full">
      <h4 className="text-white text-sm font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-xs leading-relaxed">{text}</p>
    </div>
  );
}
