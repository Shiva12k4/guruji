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
  opacity: number;
};

const PETAL_COUNT = 16;

function buildPetals(count: number): PetalConfig[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = i / count;
    return {
      left: `${(seed * 92 + (i % 3) * 2).toFixed(1)}%`,
      size: 14 + ((i * 7) % 20),
      duration: 14 + ((i * 5) % 12),
      delay: (i * 0.9) % 10,
      swayDuration: 3 + ((i * 3) % 4),
      swayDistance: 20 + ((i * 11) % 40),
      rotate: 180 + ((i * 47) % 180),
      opacity: 0.5 + ((i % 4) * 0.1),
    };
  });
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

        gsap.set(petal, { top: "-10%", opacity: cfg.opacity });

        gsap.to(petal, {
          top: "110%",
          rotation: cfg.rotate,
          duration: cfg.duration,
          delay: cfg.delay,
          ease: "none",
          repeat: -1,
        });

        gsap.to(petal, {
          x: `+=${cfg.swayDistance}`,
          duration: cfg.swayDuration,
          delay: cfg.delay * 0.5,
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
          style={{
            position: "absolute",
            left: cfg.left,
            width: cfg.size,
            height: cfg.size,
          }}
        />
      ))}
    </div>
  );
}
