import { GithubIcon, MailIcon, UsersIcon } from "@/src/Icons";
import Link from "next/link";
// import { Github, Mail, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0612] text-gray-400 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Left column */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-white font-semibold text-lg">
              Vidora<span className="text-purple-400">Hub</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed max-w-xs">
            Building the future of digital expression, rooted in Indian values
            and scaled for the world.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-6">
            <IconCircle>
              <GithubIcon size={16} />
            </IconCircle>
            <IconCircle>
              <UsersIcon size={16} />
            </IconCircle>
            <IconCircle>
              <MailIcon size={16} />
            </IconCircle>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="#">Platform</Link>
            <Link href="/ourstory">Our Story</Link>
            <Link href="/mission">Mission</Link>
            <Link href="#">Press Kit</Link>
          </div>
        </div>

        {/* Legal links */}
        <div>
          <h4 className="text-white font-medium mb-4">Legal</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Security</Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs">
        <p>© 2024 VidoraHub Tech Pvt Ltd. All rights reserved.</p>
        <p className="mt-2 text-gray-500">
          DESIGNED FOR BHARAT, BUILT FOR THE WORLD
        </p>
      </div>
    </footer>
  );
}

/* Icon wrapper */
function IconCircle({ children }: any) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
      {children}
    </div>
  );
}
