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
  const rayBeamRef = useRef<HTMLImageElement>(null);
  const rayDotRef = useRef<HTMLDivElement>(null);

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
          gsap.set(rayBeamRef.current, { opacity: 0, scaleY: 0, rotation: -36, transformOrigin: "50% 0%" });
          gsap.set(rayDotRef.current, { opacity: 0, scale: 0.4 });

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

          const glowPulseTween = gsap.to(glowRef.current, {
            scale: 1.15,
            opacity: 0.7,
            duration: 2.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            paused: true,
          });

          const dotPulseTween = gsap.to(rayDotRef.current, {
            scale: 1.3,
            opacity: 0.6,
            duration: 1.4,
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
            .addLabel("ray-draw", "hanuman-brighten+=1.4")
            .to(
              rayBeamRef.current,
              { opacity: 0.9, scaleY: 1, duration: 0.9, ease: "none" },
              "ray-draw"
            )
            .addLabel("guruji-reveal", "ray-draw+=0.6")
            .to(
              rayDotRef.current,
              {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power1.out",
                onComplete: () => dotPulseTween.play(),
                onReverseComplete: () => dotPulseTween.pause(),
              },
              "ray-draw+=0.75"
            )
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
                onComplete: () => glowPulseTween.play(),
                onReverseComplete: () => glowPulseTween.pause(),
              },
              "guruji-reveal"
            )
            .to(
              rayBeamRef.current,
              { opacity: 0.35, duration: 0.6, ease: "none" },
              "guruji-reveal+=0.5"
            );
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
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
            "radial-gradient(circle at 50% 20%, rgba(10,5,2,0.15) 0%, rgba(10,5,2,0.92) 60%)",
        }}
        aria-hidden="true"
      />

      {/* Bust portrait, anchored from the top so the blessing hand lands mid-screen, above Guruji */}
      <img
        ref={hanumanRef}
        src="/assets/hanuman-cutout.png"
        alt="Hanuman ji"
        className="absolute left-1/2 top-[16%] h-[70%] -translate-x-1/2 object-contain"
      />

      <div
        ref={glowRef}
        className="absolute left-1/2 top-[54%] h-[30%] w-[55%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,110,0.85) 0%, rgba(255,150,40,0.3) 55%, rgba(255,150,40,0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Anchored from the bottom so it overlaps Hanuman's lower/hand area, reading as "standing before him" */}
      <img
        ref={gurujiRef}
        src="/assets/guruji-cutout.png"
        alt="Guruji"
        className="absolute left-1/2 bottom-0 h-[46%] -translate-x-1/2 object-contain"
      />

      {/* Blessing beam: grows down from Hanuman's hand toward Guruji's head via scaleY */}
      <img
        ref={rayBeamRef}
        src="/assets/beam.png"
        alt=""
        className="absolute left-[calc(50%-9.33vh)] top-[46%] h-[13%] w-auto -translate-x-1/2 mix-blend-screen"
        aria-hidden="true"
      />

      <div
        ref={rayDotRef}
        className="absolute left-[50%] top-[58%] h-[3.5%] w-[3.5%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,247,214,0.95) 0%, rgba(255,179,71,0.7) 55%, rgba(255,179,71,0) 75%)",
          boxShadow: "0 0 20px 6px rgba(255,200,110,0.6)",
        }}
        aria-hidden="true"
      />

      <PetalsBackground />

      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-28 md:pt-32 px-6 text-center">
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
