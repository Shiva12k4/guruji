"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

export default function DonationCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      className="relative w-full overflow-hidden bg-linear-to-r from-saffron-600 via-saffron-500 to-gold-500 py-8 md:py-10"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,247,214,0.55) 0%, rgba(255,200,110,0.25) 55%, rgba(255,200,110,0) 75%)",
        }}
      />

      <Container className="relative text-center">
        <div ref={contentRef}>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white">
            Seva Mein Sahyog Dein
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-base text-saffron-50/90">
            Aapka daan Hanuman bhakti, satsang aur seva karyon ko aage badhane
            mein madad karta hai.
          </p>
          <button
            type="button"
            className="mt-7 rounded-full bg-white px-9 py-3 font-body text-sm font-semibold text-saffron-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-saffron-50 hover:shadow-lg"
          >
            Donate Now
          </button>
        </div>
      </Container>
    </section>
  );
}
