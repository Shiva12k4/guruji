"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#guru-parichay" },
  { label: "Maha Yagya", href: "#" },
  { label: "Videos", href: "#videos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-linear-to-b from-black/50 via-black/20 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-330 items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full font-heading text-lg font-semibold transition-colors ${
              scrolled ? "bg-saffron-600 text-white" : "bg-white/15 text-gold-100"
            }`}
          >
            G
          </span>
          <span
            className={`font-heading text-2xl font-semibold transition-colors ${
              scrolled ? "text-saffron-800" : "text-gold-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
            }`}
          >
            Guruji
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`group relative font-body text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-saffron-800/90 hover:text-saffron-600"
                    : "text-gold-100/90 hover:text-gold-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-saffron-600" : "bg-gold-100"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#donate"
            className="rounded-full bg-saffron-600 px-6 py-2.5 font-body text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-saffron-700 hover:shadow-lg"
          >
            Donate Now
          </a>
        </div>

        <button
          type="button"
          className={`md:hidden ${scrolled ? "text-saffron-800" : "text-gold-100"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-5 bg-saffron-900/95 backdrop-blur-sm py-8">
          {[...LINKS, { label: "Donation", href: "#donate" }].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-base text-gold-100/90 hover:text-gold-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
