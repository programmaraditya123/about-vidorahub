import { PlatformSafetyIcon, PrivacyIcon, SecureInfrastructureIcon } from "@/src/Icons";

export default function DataProtectionSection() {
  const items = [
  {
    icon : SecureInfrastructureIcon,
    title: "Secure Infrastructure",
    text: "VidoraHub runs on trusted cloud infrastructure providers that use modern encryption and security practices to protect user data.",
  },
  {
    icon : PrivacyIcon,
    title: "Privacy-First Design",
    text: "We collect only the data required to operate the platform and do not sell personal information.",
  },
  {
    icon : PlatformSafetyIcon,
    title: "Responsible Platform Development",
    text: "Security and data protection are built into VidoraHub from the beginning as the platform continues to evolve.",
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
                  <Icon size={20} />
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
