import { MapPin, Phone, ArrowRight } from "lucide-react";
import Container from "./Container";

const LINKS = [
  { label: "About Us", href: "/#guru-parichay" },
  { label: "Maha Yagya", href: "/maha-yagya" },
  { label: "Donation", href: "/#donate" },
  { label: "Videos", href: "/#videos" },
  { label: "Gallery", href: "/#gallery" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-saffron-100"
      style={{
        background:
          "radial-gradient(circle at 50% -10%, #9a3312 0%, #7c2d12 35%, #3a1508 75%, #2a1006 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-300 to-transparent"
      />

      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron-600 font-heading text-lg font-semibold text-white shadow-md">
                G
              </span>
              <h3 className="font-heading text-xl font-semibold text-gold-100">
                Shri Ram Maruti Dham
              </h3>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-saffron-200/80">
              Hanuman bhakti, satsang aur seva ke madhyam se jeevan mein
              shanti aur ashirwad.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold-200">Quick Links</h4>
            <ul className="mt-4 space-y-3 font-body text-sm text-saffron-200/80">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold-100"
                  >
                    <ArrowRight
                      size={14}
                      className="text-saffron-400 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold-200">Connect</h4>
            <ul className="mt-4 space-y-4 font-body text-sm text-saffron-200/80">
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-gold-200">
                  <MapPin size={14} />
                </span>
                <span className="pt-1">
                  Upasana Nagar, G.T. Road (Bypass),
                  <br />
                  Varanasi, Uttar Pradesh - 221106
                </span>
              </li>
              <li>
                <a
                  href="tel:+919415818661"
                  className="flex items-center gap-3 transition-colors hover:text-gold-100"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-gold-200">
                    <Phone size={14} />
                  </span>
                  +91 94158 18661
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6 text-center font-body text-xs text-saffron-300/70">
        &copy; {new Date().getFullYear()} Shri Ram Maruti Dham Trust. All rights reserved.
      </div>
    </footer>
  );
}
