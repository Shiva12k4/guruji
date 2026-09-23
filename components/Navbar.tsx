"use client";

import { useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#guru-parichay" },
  { label: "Maha Yagya", href: "#" },
  { label: "Videos", href: "#videos" },
  { label: "Donation", href: "#donate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/50 via-black/20 to-transparent">
      <nav className="mx-auto flex max-w-330 items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-heading text-2xl font-semibold text-gold-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
        >
          Guruji
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm text-gold-100/90 transition-colors hover:text-gold-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-gold-100"
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
          {LINKS.map((link) => (
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
