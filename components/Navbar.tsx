"use client";

import { useEffect, useState } from "react";
import { Menu, X, Home, Info, Flame, Video, Heart, Phone } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/#home", icon: Home },
  { label: "About Us", href: "/#guru-parichay", icon: Info },
  { label: "Maha Yagya", href: "/maha-yagya", icon: Flame },
  { label: "Videos", href: "/#videos", icon: Video },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-linear-to-b from-black/50 via-black/20 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-330 items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
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
            href="/#donate"
            className="rounded-full bg-saffron-600 px-6 py-2.5 font-body text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-saffron-700 hover:shadow-lg"
          >
            Donate Now
          </a>
        </div>

        <button
          type="button"
          className={`relative z-10 md:hidden ${scrolled ? "text-saffron-800" : "text-gold-100"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Menu size={26} />
        </button>
      </nav>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col text-saffron-100 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% -10%, #9a3312 0%, #7c2d12 35%, #3a1508 75%, #2a1006 100%)",
        }}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron-600 font-heading text-lg font-semibold text-white">
              G
            </span>
            <span className="font-heading text-xl font-semibold text-gold-100">
              Guruji
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gold-100"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1 px-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-xl px-3 py-3 font-body text-base text-gold-100/90 transition-colors hover:bg-white/10 hover:text-gold-50"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/10 text-saffron-300 transition-colors group-hover:bg-saffron-600 group-hover:text-white">
                <link.icon size={16} />
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4 px-6 pb-8">
          <a
            href="/#donate"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-saffron-600 px-6 py-3.5 font-body text-sm font-semibold text-white shadow-md transition-colors hover:bg-saffron-700"
          >
            <Heart size={16} />
            Donate Now
          </a>
          <a
            href="tel:+919415818661"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-body text-sm font-medium text-saffron-200/90 transition-colors hover:bg-white/10"
          >
            <Phone size={14} />
            +91 94158 18661
          </a>
        </div>
      </div>
    </header>
  );
}
