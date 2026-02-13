export default function EvolutionTimeline() {
  const timeline = [
    {
      title: "Oct 2022: The Spark",
      text: "Founded in a small room in Bengaluru. Three creators, one whiteboard, and a shared frustration.",
    },
    {
      title: "March 2023: Beta Launch",
      text: "Opened doors to the first 500 creators. Feedback was raw, brutal, and incredibly helpful.",
    },
    {
      title: "Sept 2023: 1M Milestone",
      text: "Hit our first million views with zero ad spend. The community became our marketing engine.",
    },
    {
      title: "Now: The Scale-Up",
      text: "Serving 50k+ active creators across India and expanding into regional hubs.",
    },
  ];

  return (
    <section className="bg-[#020617] py-28 px-6">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-200">
            Our Evolution
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-4" />
        </div>

        {/* Vertical line */}
        <div className="absolute left-1/2 top-24 bottom-0 w-[2px] bg-blue-500/30 -translate-x-1/2" />

        <div className="space-y-20">
          {timeline.map((item, index) => {
            const left = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 items-center relative"
              >
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]" />
                </div>

                {left ? (
                  <>
                    <div className="text-right pr-10">
                      <h3 className="text-blue-400 font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.text}
                      </p>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="text-left pl-10">
                      <h3 className="text-blue-400 font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
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
