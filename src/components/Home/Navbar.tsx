"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/ourstory", label: "Our Story" },
    { href: "/privacypolicy", label: "Privacy Policy" },
  ];

  return (
    <nav className="w-full flex justify-center pt-6 fixed top-0 z-50">
      <div className="w-[92%] max-w-7xl">
        <div
          className="
          flex items-center justify-between px-6 py-3 rounded-xl
          bg-gradient-to-r from-[#0b1220]/90 via-[#0a1630]/90 to-[#0b1220]/90
          border border-white/10
          backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        "
        >
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center text-white font-bold">
                V
              </div>
              <span className="text-white font-semibold text-lg">
                Vidora<span className="text-blue-400">Hub</span>
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition
                  ${
                    active
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* Active glow underline */}
                  {active && (
                    <span
                      className="absolute left-0 -bottom-2 h-[2px] w-full
                      bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link href={'https://www.vidorahub.com/'} target="_blank">
          <button
            className="
            bg-gradient-to-r from-blue-600 to-blue-500
            hover:opacity-90
            transition
            px-5 py-2 rounded-full text-white text-sm font-medium
            shadow-[0_0_18px_rgba(59,130,246,0.4)]
            cursor-pointer
          "
          >
            Visit Platform
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
