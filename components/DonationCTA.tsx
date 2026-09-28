"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const AMOUNTS = [501, 1100, 2100];

const STATS = [
  { value: "151", label: "Maha Yagya" },
  { value: "21", label: "Varsh (2005–2026)" },
  { value: "15+", label: "Rajya" },
];

export default function DonationCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedAmount, setSelectedAmount] = useState(1100);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.8,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      if (contentRef.current) {
        const children = Array.from(contentRef.current.children);
        gsap.set(children, { y: 30, opacity: 0 });
        gsap.to(children, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="donate"
      className="relative w-full overflow-hidden py-12 md:py-16"
    >
      <img
        src="/assets/bg-temple-clouds.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(124,45,18,0.88) 0%, rgba(58,21,8,0.9) 55%, rgba(26,10,4,0.94) 100%)",
        }}
      />

      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,247,214,0.55) 0%, rgba(255,200,110,0.25) 55%, rgba(255,200,110,0) 75%)",
        }}
      />

      <Container className="relative text-center">
        <div ref={contentRef}>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-gold-100">
            Seva Mein Sahyog Dein
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-base text-saffron-100/90">
            Aapka daan Hanuman bhakti, satsang aur seva karyon ko aage badhane
            mein madad karta hai.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-row justify-between gap-2 border-y border-gold-200/20 py-5 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-1 flex-col items-center">
                <span className="font-body text-xl font-bold text-gold-100 sm:text-2xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-body text-[11px] leading-tight text-saffron-100/70 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSelectedAmount(amt)}
                  className={`rounded-full px-5 py-2 font-body text-sm font-semibold transition-all ${
                    selectedAmount === amt
                      ? "bg-white text-saffron-700 shadow-md"
                      : "border border-gold-200/40 text-gold-100 hover:bg-white/10"
                  }`}
                >
                  &#8377;{amt}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="rounded-full bg-saffron-600 px-9 py-3.5 font-body text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-saffron-700 hover:shadow-lg"
            >
              &#8377;{selectedAmount} Donate Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
