import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 overflow-hidden bg-[#0e0714]">

      {/* Background gradient glow */}
      <div className="inset-0 bg-[radial-gradient(circle_at_top,#2a103a,transparent_60%)] opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mt-30">

        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-xs tracking-wider text-orange-300 border border-orange-400/30 rounded-full bg-orange-400/10">
          PROUDLY MADE IN INDIA
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
          Empowering Global Creators,
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Born in India.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          From the heart of Bharat, we are building the next frontier of
          digital expression. A platform designed for the world, rooted in
          Indian values.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link href={'/features'}>
          <button className="px-6 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition shadow-lg cursor-pointer">
            Explore the Features 
          </button>
          </Link>
          
          <Link href={'/ourstory'}>
          <button className="px-6 py-3 text-sm font-medium text-gray-300 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
            Our Story
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
