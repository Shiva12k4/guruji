"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const PHOTOS = [
  { src: "/assets/real-guruji-flowers.jpg", span: "row-span-2", position: "object-[center_10%]" },
  { src: "/assets/real-hanuman-mandir.jpg", span: "row-span-1", position: "object-top" },
  { src: "/assets/real-yatra-procession.jpg", span: "row-span-1", position: "object-center" },
  { src: "/assets/real-durga-devi.jpg", span: "row-span-2", position: "object-[center_15%]" },
  { src: "/assets/real-guruji-studio.jpg", span: "row-span-2", position: "object-top" },
  { src: "/assets/real-jeep-yatra.jpg", span: "row-span-1", position: "object-center" },
  { src: "/assets/ashram-night.jpg", span: "row-span-1", position: "object-bottom" },
  { src: "/assets/real-guruji-police.jpg", span: "row-span-1", position: "object-center" },
  { src: "/assets/real-guruji-felicitation.jpg", span: "col-span-2 row-span-1", position: "object-center" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { y: 30, opacity: 0 });
        gsap.to(headingRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      const tiles = gridRef.current ? Array.from(gridRef.current.children) : [];
      if (tiles.length) {
        gsap.set(tiles, { y: 40, opacity: 0 });
        gsap.to(tiles, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="w-full bg-saffron-50 py-7 md:py-10">
      <Container>
        <div ref={headingRef} className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
              Gallery
            </h2>
            <p className="mt-2 font-body text-saffron-700/80">
              Satsang aur yatra ki jhalkiyaan
            </p>
          </div>
          <a
            href="#"
            className="mt-4 font-body text-sm font-medium text-saffron-700 hover:text-saffron-900 sm:mt-0"
          >
            View Full Gallery &rarr;
          </a>
        </div>

        <div ref={gridRef} className="mt-10 grid grid-flow-row-dense grid-cols-2 auto-rows-65 gap-4 sm:grid-cols-3 sm:auto-rows-80 lg:grid-cols-4 lg:auto-rows-90">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl border border-gold-200 shadow-sm transition-shadow duration-300 hover:shadow-xl ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={`Gallery photo ${i + 1}`}
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${photo.position}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
