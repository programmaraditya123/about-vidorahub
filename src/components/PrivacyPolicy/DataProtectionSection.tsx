
export default function DataProtectionSection() {
  const items = [
    {
      icon: '',
      title: "AES-256 Encryption",
      text: "All video files and user metadata are encrypted at rest and in transit using industry-standard protocols.",
    },
    {
      icon: '',
      title: "Local Indian Servers",
      text: "We utilize data centers in Mumbai and Chennai to ensure your data stays within national boundaries.",
    },
    {
      icon: '',
      title: "ISO 27001 Certified",
      text: "Our security practices are audited annually to maintain international standards for information security.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Advanced Data Protection
        </h2>

        <p className="text-gray-500 mt-2">
          How we keep your information safe in the digital age.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {/* <Icon size={20} className="text-blue-600" /> */}
                </div>

                {/* Title */}
                <h3 className="font-medium text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
