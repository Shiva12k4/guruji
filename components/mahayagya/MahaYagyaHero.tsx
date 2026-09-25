"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Container";
import FlameIcon from "./FlameIcon";

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
            start: "top 85%",
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
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-saffron-950 pt-24"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #7c2d12 0%, #3a1508 55%, #1a0a04 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[38%] h-[45%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(255,180,90,0.55) 0%, rgba(255,120,30,0.25) 55%, rgba(255,120,30,0) 75%)",
        }}
      />

      <FlameIcon className="animate-flame pointer-events-none absolute left-1/2 top-[16%] h-16 w-16 -translate-x-1/2 opacity-90 md:h-20 md:w-20" />

      <Container className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold-200/80">
          Guruji ka Sankalp
        </span>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-gold-100 drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)] md:text-6xl">
          Shri Maruti Mahayagya
        </h1>
        <p className="mt-4 max-w-xl font-body text-base text-saffron-100/90 md:text-lg">
          2005 se 2026 tak, Guruji dwara desh ke alag-alag rajyon mein
          sankalpit 151 Maha Yagya ki divya yatra.
        </p>

        <div
          ref={statsRef}
          className="mt-12 flex w-full max-w-2xl flex-col gap-8 sm:flex-row sm:justify-between"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span
                ref={(el) => {
                  counterRefs.current[i] = el;
                }}
                className="font-heading text-4xl font-semibold text-gold-100 md:text-5xl"
              >
                0{stat.suffix}
              </span>
              <span className="mt-2 font-body text-sm text-saffron-100/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
