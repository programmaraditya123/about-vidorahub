export default function PromiseSection() {
  return (
    <section className="bg-[#020617] py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <img
              src="/promise.jpg"
              alt="Creative safe sanctuary"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-blue-400 mb-6">
            The VidoraHub Promise
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            In late 2022, Use decided to pivot. VidoraHub was reborn not as a
            competitor, but as a sanctuary — a place where creators own their
            data, their audience, and their future.
          </p>

          {/* Feature cards */}
          <div className="flex flex-col sm:flex-row gap-4">
            <FeatureCard
              title="Direct Monetization"
              text="We bypass intrusive ad-revenue systems entirely."
            />

            <FeatureCard
              title="Fair Reach"
              text="Algorithms that reward depth, not just clicks."
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
