"use client";

import clinicData from "@/config/clinicData";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#before-after" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricings" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                  ? "bg-white/95 backdrop-blur border-b border-gray-200 py-3"
                  : "bg-white py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>

              <div>
              <span className="font-display text-xl font-semibold text-gray-900 block leading-none">
                {clinicData.clinicName}
              </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-blue-500">
                Dental Care
              </span>
              </div>
            </Link>

            {/* NAV */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition"
                  >
                    {link.label}
                  </a>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center gap-4">

              {/* PHONE */}
              <a
                  href={`tel:${clinicData.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Phone size={14} />
                {clinicData.phoneDisplay}
              </a>

              {/* CTA */}
              <a
                  href="#contact"
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded-sm hover:bg-blue-700 transition"
              >
                Book Appointment
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-700"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
            className={`lg:hidden transition-all duration-300 ${
                mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
        >
          <div className="bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-2">

            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-gray-700 py-2"
                >
                  {link.label}
                </a>
            ))}

            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2">

              <a
                  href={`tel:${clinicData.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-700"
              >
                <Phone size={14} />
                {clinicData.phoneDisplay}
              </a>

              <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-blue-600 text-white text-center py-2 rounded-sm text-sm"
              >
                Book Appointment
              </a>

            </div>
          </div>
        </div>
      </header>
  );
}