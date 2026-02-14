import Image from "next/image";
import founder from '../../Images/aditya.jpeg'

export default function FounderQuote() {
  return (
    <section className="bg-[#0e0714] py-14 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Quote icon */}
        {/* <div className="text-purple-500 text-3xl mb-6">”</div> */}

        {/* Main quote */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 leading-relaxed italic">
          We aren’t just building an app; we’re building a digital legacy for a{" "}
          <span className="text-orange-400 font-bold">New India.</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          India has long been a consumer of global technology. It’s time we
          become the architects. VidoraHub is our manifesto for a future where
          Indian innovation sets the global standard.
        </p>

        {/* Author */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {/* <div className="w-8 h-8 rounded-full bg-purple-500" /> */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={founder}
              alt="Aditya Saini"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>


          <div className="text-left">
            <p className="text-sm text-white font-medium">
              Aditya Saini
            </p>
            <p className="text-xs text-purple-400">
              Founder & CEO, VidoraHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
