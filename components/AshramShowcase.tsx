"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone } from "lucide-react";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

export default function AshramShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reveals: [HTMLElement | null, number][] = [
        [imgRef.current, -60],
        [textRef.current, 60],
      ];

      reveals.forEach(([el, fromX]) => {
        if (!el) return;
        gsap.set(el, { x: fromX, opacity: 0 });
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ashram" className="w-full bg-white py-7 md:py-10">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            ref={imgRef}
            className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-gold-200 shadow-lg"
          >
            <img
              src="/assets/ashram-night.webp"
              alt="Shri Ram Maruti Dham Ashram, Varanasi"
              className="h-full w-full object-cover"
            />
          </div>

          <div ref={textRef}>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
              Padhariye
            </span>
            <h2 className="mt-1 font-heading text-3xl font-semibold text-saffron-800 md:text-5xl">
              Hamara Ashram
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-saffron-700/90">
              Shri Ram Maruti Dham, Guruji ka ashram Varanasi mein sthit hai,
              jahan har varsh satsang, yagya aur seva karyakram hote hain.
              Aapka is pavitra sthal par swagat hai.
            </p>

            <ul className="mt-6 space-y-3 font-body text-sm text-saffron-700/90">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-saffron-50 text-saffron-600">
                  <MapPin size={16} />
                </span>
                <span className="pt-1.5">
                  Upasana Nagar, G.T. Road (Bypass),
                  <br />
                  Varanasi, Uttar Pradesh - 221106
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-saffron-50 text-saffron-600">
                  <Phone size={16} />
                </span>
                <span>+91 94158 18661</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
