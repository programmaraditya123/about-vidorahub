export default function FounderMessageCard() {
  return (
    <section className="bg-[#020617] py-28 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div
          className="rounded-2xl border border-white/10 
          bg-gradient-to-br from-[#0b1a2a] to-[#071428] 
          p-10 md:p-12 flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-40 h-40 rounded-xl object-cover border border-blue-500/20"
            />
          </div>

          {/* Quote content */}
          <div className="text-center md:text-left">
            
            {/* Quote mark */}
            {/* <div className="text-blue-400 text-2xl mb-4">”</div> */}

            {/* Quote */}
            <p className="text-gray-200 italic leading-relaxed max-w-xl">
              VidoraHub is more than a platform. It’s an act of digital
              sovereignty. We are building the infrastructure for the next
              billion creators to thrive on their own terms.
            </p>

            {/* Name */}
            <div className="mt-6">
              <p className="text-white font-medium">Aditya Saini</p>
              <p className="text-blue-400 text-xs tracking-wide">
                FOUNDER & CEO
              </p>
            </div>

            {/* Signature */}
            {/* <p className="mt-6 text-gray-400 italic">A. Sharma</p> */}
          </div>
        </div>

      </div>
    </section>
  );
}
