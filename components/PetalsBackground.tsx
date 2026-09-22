"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type PetalConfig = {
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayDuration: number;
  swayDistance: number;
  rotate: number;
  peakOpacity: number;
  hue: number;
  mobileHidden: boolean;
};

const PETAL_COUNT = 20;

function buildPetals(count: number): PetalConfig[] {
  return Array.from({ length: count }, (_, i) => ({
    left: `${((i * 61 + 7) % 92) + 2}%`,
    size: 16 + ((i * 13) % 26),
    duration: 15 + ((i * 7) % 16),
    delay: (i * 1.7) % 12,
    swayDuration: 3.5 + ((i * 5) % 5),
    swayDistance: 22 + ((i * 17) % 48),
    rotate: 140 + ((i * 53) % 260),
    peakOpacity: 0.45 + ((i % 5) * 0.08),
    hue: -25 + ((i * 29) % 65),
    mobileHidden: i % 2 === 1,
  }));
}

const PETALS = buildPetals(PETAL_COUNT);

export default function PetalsBackground({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const petals = container.querySelectorAll<HTMLElement>("[data-petal]");

      petals.forEach((petal, i) => {
        const cfg = PETALS[i];
        if (!cfg) return;

        gsap.set(petal, { top: "-10%", opacity: 0, rotation: 0 });

        const fallTl = gsap.timeline({ repeat: -1, delay: cfg.delay });
        fallTl
          .to(petal, { opacity: cfg.peakOpacity, duration: cfg.duration * 0.1, ease: "sine.out" }, 0)
          .to(petal, { top: "108%", duration: cfg.duration, ease: "none" }, 0)
          .to(petal, { rotation: cfg.rotate, duration: cfg.duration, ease: "sine.inOut" }, 0)
          .to(petal, { opacity: 0, duration: cfg.duration * 0.15, ease: "sine.in" }, cfg.duration * 0.82);

        gsap.to(petal, {
          x: `+=${cfg.swayDistance}`,
          duration: cfg.swayDuration,
          delay: cfg.delay * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {PETALS.map((cfg, i) => (
        <img
          key={i}
          data-petal
          src="/assets/petals-sheet.png"
          alt=""
          className={cfg.mobileHidden ? "hidden sm:block" : ""}
          style={{
            position: "absolute",
            left: cfg.left,
            width: cfg.size,
            height: cfg.size,
            filter: `hue-rotate(${cfg.hue}deg) drop-shadow(0 2px 4px rgba(120,50,10,0.25))`,
          }}
        />
      ))}
    </div>
  );
}
