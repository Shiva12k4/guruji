"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Container";
import YagyaCard from "./YagyaCard";
import IndiaMap from "./IndiaMap";
import { mahaYagyaData, type StateCode } from "@/constants/mahaYagyaData";

gsap.registerPlugin(ScrollTrigger);

const YEARS = Array.from(new Set(mahaYagyaData.map((e) => e.year))).sort(
  (a, b) => a - b
);

export default function YagyaDataWall() {
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");
  const [selectedState, setSelectedState] = useState<StateCode | "All">("All");
  const sectionRef = useRef<HTMLElement>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);

  const stateCounts = useMemo(() => {
    const counts = {} as Record<StateCode, number>;
    for (const entry of mahaYagyaData) {
      counts[entry.state] = (counts[entry.state] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filtered = useMemo(
    () =>
      mahaYagyaData.filter(
        (e) =>
          (selectedYear === "All" || e.year === selectedYear) &&
          (selectedState === "All" || e.state === selectedState)
      ),
    [selectedYear, selectedState]
  );

  // Desktop-only vertical timeline fill, scrubbed once across the whole grid.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (!lineFillRef.current) return;
      gsap.fromTo(
        lineFillRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: gridWrapperRef.current,
            start: "top 65%",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Batched reveal of cards, recreated whenever the filtered list changes.
  useEffect(() => {
    const cards = gridRef.current ? Array.from(gridRef.current.children) : [];
    if (!cards.length) return;

    gsap.set(cards, { y: 30, opacity: 0 });
    const triggers = ScrollTrigger.batch(cards, {
      start: "top 92%",
      onEnter: (els) =>
        gsap.to(els, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
          overwrite: true,
        }),
      once: true,
    });
    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, [selectedYear, selectedState]);

  return (
    <section
      ref={sectionRef}
      id="yagya-list"
      className="w-full bg-linear-to-b from-saffron-50 to-white py-14 md:py-20"
    >
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-saffron-800 md:text-5xl">
            Yagya Yatra &mdash; 2005 se Ab Tak
          </h2>
          <p className="mt-2 font-body text-saffron-700/80">
            Saal ke hisaab se dekhiye, Guruji ke sankalp ki poori yatra
          </p>
        </div>

        <div className="mt-8 lg:flex lg:items-start lg:gap-10">
          <div className="hidden shrink-0 lg:sticky lg:top-24 lg:block lg:w-64">
            <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
              Rajya se Filter Karein
            </p>
            <IndiaMap
              selectedState={selectedState}
              onSelect={setSelectedState}
              counts={stateCounts}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="sticky top-16 z-30 -mx-4 overflow-x-auto bg-linear-to-b from-white via-white to-transparent px-4 py-3 no-scrollbar">
              <div className="flex w-max items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedYear("All")}
                  className={`shrink-0 rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                    selectedYear === "All"
                      ? "bg-saffron-600 text-white"
                      : "border border-gold-200 text-saffron-700 hover:bg-saffron-50"
                  }`}
                >
                  All
                </button>
                {YEARS.map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    className={`shrink-0 rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                      selectedYear === year
                        ? "bg-saffron-600 text-white"
                        : "border border-gold-200 text-saffron-700 hover:bg-saffron-50"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div ref={gridWrapperRef} className="relative mt-6 lg:pl-8">
              <div
                aria-hidden="true"
                className="absolute -left-1 top-0 bottom-0 hidden w-px bg-gold-200/50 lg:block"
              >
                <div
                  ref={lineFillRef}
                  className="absolute left-0 top-0 w-px bg-linear-to-b from-saffron-600 to-gold-400"
                  style={{ height: "0%" }}
                >
                  <div className="absolute -left-1.25 bottom-0 h-3 w-3 rounded-full bg-saffron-500 shadow-[0_0_12px_4px_rgba(249,115,22,0.55)]" />
                </div>
              </div>

              <div
                ref={gridRef}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filtered.map((entry) => (
                  <YagyaCard key={entry.sno} entry={entry} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
