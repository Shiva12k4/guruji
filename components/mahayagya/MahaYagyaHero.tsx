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
      <div className="relative flex min-h-[60vh] w-full items-end overflow-hidden md:min-h-[75vh]">
        <img
          src="/assets/real-yagya-havan.jpg"
          alt="Guruji conducting Shri Maruti Mahayagya"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,10,4,0.55) 0%, rgba(26,10,4,0.35) 40%, rgba(26,10,4,0.85) 100%)",
          }}
        />

        <Container className="relative z-10 w-full pb-10 pt-28 text-center md:pb-14">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold-200/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Guruji ka Sankalp
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-gold-100 drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] md:text-6xl">
            Shri Maruti Mahayagya
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-saffron-100/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] md:text-lg">
            2005 se 2026 tak, Guruji dwara desh ke alag-alag rajyon mein
            sankalpit 151 Maha Yagya ki divya yatra.
          </p>
        </Container>
      </div>

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
