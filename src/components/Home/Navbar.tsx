"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/ourstory", label: "Our Story" },
    { href: "/privacypolicy", label: "Privacy Policy" },
    { href: "/aboutus", label: "About Us" },
  ];

  /* Close when clicking outside */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav className="w-full flex justify-center pt-6 fixed top-0 z-50">
      <div className="w-[92%] max-w-7xl" ref={dropdownRef}>
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition ${
                    active
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href={"https://www.vidorahub.com/"}
            target="_blank"
            className="hidden md:block"
          >
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 rounded-full text-white text-sm font-medium shadow-[0_0_18px_rgba(59,130,246,0.4)]">
              Visit Platform
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Animated Mobile Dropdown */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              rounded-xl border border-white/10
              bg-[#0b1220]/95 backdrop-blur-xl
              shadow-[0_8px_40px_rgba(0,0,0,0.45)]
              p-4 flex flex-col gap-4
            "
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    active
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href={"https://www.vidorahub.com/"}
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <button className="w-full bg-blue-600 py-2 rounded-lg text-white">
                Visit Platform
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
