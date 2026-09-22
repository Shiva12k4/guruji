"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PetalsBackground from "./PetalsBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hanumanRef = useRef<HTMLImageElement>(null);
  const gurujiRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          const pinDistance = isMobile ? "+=150%" : "+=250%";

          gsap.set(hanumanRef.current, { filter: "brightness(0.15) saturate(0.3)", opacity: 0.45 });
          gsap.set(gurujiRef.current, { opacity: 0, scale: 0.9, y: 40 });
          gsap.set(glowRef.current, { opacity: 0 });
          gsap.set(overlayRef.current, { opacity: 1 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: pinDistance,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          const pulseTween = gsap.to(glowRef.current, {
            scale: 1.15,
            opacity: 0.7,
            duration: 2.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            paused: true,
          });

          tl.addLabel("overlay-fade")
            .to(overlayRef.current, { opacity: 0, duration: 1, ease: "none" }, "overlay-fade")
            .addLabel("hanuman-brighten", "overlay-fade+=0.2")
            .to(
              hanumanRef.current,
              {
                filter: "brightness(1) saturate(1)",
                opacity: 1,
                duration: 1.4,
                ease: "none",
              },
              "hanuman-brighten"
            )
            .addLabel("guruji-reveal", "hanuman-brighten+=1.1")
            .to(
              gurujiRef.current,
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
              },
              "guruji-reveal"
            )
            .to(
              glowRef.current,
              {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                onComplete: () => pulseTween.play(),
                onReverseComplete: () => pulseTween.pause(),
              },
              "guruji-reveal"
            );
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-saffron-900"
    >
      <img
        src="/assets/bg-temple-clouds.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(10,5,2,0.15) 0%, rgba(10,5,2,0.92) 60%)",
        }}
        aria-hidden="true"
      />

      <img
        ref={hanumanRef}
        src="/assets/hanuman-cutout.png"
        alt="Hanuman ji"
        className="absolute left-1/2 bottom-0 h-[85%] -translate-x-1/2 object-contain"
      />

      <div
        ref={glowRef}
        className="absolute left-1/2 bottom-[8%] h-[45%] w-[45%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,110,0.85) 0%, rgba(255,150,40,0.3) 55%, rgba(255,150,40,0) 75%)",
        }}
        aria-hidden="true"
      />

      <img
        ref={gurujiRef}
        src="/assets/guruji-cutout.png"
        alt="Guruji"
        className="absolute left-1/2 bottom-0 h-[70%] -translate-x-1/2 object-contain"
      />

      <PetalsBackground />

      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-20 px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-semibold text-gold-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Jai Hanuman, Jai Guruji
        </h1>
        <p className="mt-4 max-w-xl font-body text-base md:text-lg text-saffron-100/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          Ashirwad, satsang aur seva ke path par aapka swagat hai
        </p>
      </div>
    </section>
  );
}
