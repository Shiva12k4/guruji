"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Container";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { target: 151, suffix: "", label: "Maha Yagya" },
  { target: 21, suffix: "", label: "Varsh (2005–2026)" },
  { target: 15, suffix: "+", label: "Rajya" },
];

export default function MahaYagyaHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const counters = counterRefs.current.filter(Boolean) as HTMLSpanElement[];
      if (!counters.length) return;

      counters.forEach((el, i) => {
        const stat = STATS[i];
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stat.target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(counter.value) + stat.suffix;
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="maha-yagya-hero"
      className="relative w-full overflow-hidden bg-saffron-950"
    >
      <img
        src="/assets/yagya-hero-banner-mobile.png"
        alt="Guruji ka Sankalp - Shri Maruti Mahayagya"
        className="w-full h-auto object-contain md:hidden"
      />
      <img
        src="/assets/yagya-hero-banner.png"
        alt="Guruji ka Sankalp - Shri Maruti Mahayagya"
        className="hidden w-full h-auto object-contain md:block"
      />

      <div
        className="w-full py-10"
        style={{
          background:
            "linear-gradient(to bottom, #8a4a1f 0%, #6b3316 45%, #4a2c14 80%, #2a1408 100%)",
        }}
      >
        <Container>
          <div
            ref={statsRef}
            className="mx-auto flex w-full max-w-2xl flex-row justify-between gap-2 sm:gap-8"
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-1 flex-col items-center text-center">
                <span
                  ref={(el) => {
                    counterRefs.current[i] = el;
                  }}
                  className="font-body text-2xl font-bold text-gold-100 sm:text-4xl md:text-5xl"
                >
                  0{stat.suffix}
                </span>
                <span className="mt-1 font-body text-[11px] leading-tight text-saffron-100/80 sm:mt-2 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
