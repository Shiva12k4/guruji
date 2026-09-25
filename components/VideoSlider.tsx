"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const VIDEOS = [
  { src: "/assets/homepage-video.mp4", title: "Maha Aarti Darshan" },
  { src: "/assets/homepage-video2.mp4", title: "Satsang Pravachan" },
  { src: "/assets/homepage-video3.mp4", title: "Bhajan Sandhya" },
  { src: "/assets/homepage-video4.mp4", title: "Yatra Jhalkiyaan" },
];

export default function VideoSlider() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(VIDEOS.length);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const currentIndexRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const getMaxIndex = () => {
    const viewport = viewportRef.current;
    const firstCard = cardRefs.current[0];
    const secondCard = cardRefs.current[1];
    if (!viewport || !firstCard) return VIDEOS.length - 1;

    const cardWidth = firstCard.offsetWidth;
    const gap = secondCard ? secondCard.offsetLeft - firstCard.offsetLeft - cardWidth : 24;
    // Floor (not round) so any partial overflow correctly counts as "doesn't fully fit",
    // otherwise a nearly-full row rounds up to "all fit" and navigation locks to a single page.
    const visibleCount = Math.max(1, Math.floor((viewport.clientWidth + gap) / (cardWidth + gap)));
    return Math.max(0, VIDEOS.length - visibleCount);
  };

  const updateOffset = (index: number) => {
    setOffset(cardRefs.current[index]?.offsetLeft ?? 0);
  };

  const goTo = (index: number) => {
    const maxIndex = getMaxIndex();
    const range = maxIndex + 1;
    setPageCount(range);
    const wrapped = ((index % range) + range) % range;
    currentIndexRef.current = wrapped;
    setCurrentIndex(wrapped);
    updateOffset(wrapped);
  };

  useEffect(() => {
    setPageCount(getMaxIndex() + 1);
    const handleResize = () => {
      const maxIndex = getMaxIndex();
      goTo(Math.min(currentIndexRef.current, maxIndex));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      const cards = cardRefs.current.filter(Boolean);
      if (cards.length) {
        gsap.set(cards, { y: 40, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: viewportRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="videos" className="w-full bg-saffron-50 py-7 md:py-10">
      <Container>
        <div ref={headingRef} className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
              Media
            </span>
            <h2 className="mt-1 font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
              Satsang Videos
            </h2>
            <p className="mt-2 max-w-md font-body text-saffron-700/80">
              Pravachan, bhajan aur yatra ki jhalkiyaan — dekhiye Guruji ke
              satsang ke chuninda video.
            </p>
          </div>
          <a
            href="#"
            className="group mt-2 flex items-center gap-1.5 font-body text-sm font-semibold text-saffron-700 hover:text-saffron-900 sm:mt-0"
          >
            View All Videos
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

        <div className="relative mt-10">
          {pageCount > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                aria-label="Previous video"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 sm:-left-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md transition-colors hover:bg-saffron-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                aria-label="Next video"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 sm:-right-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md transition-colors hover:bg-saffron-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <div ref={viewportRef} className="overflow-hidden">
            <div
              className="flex gap-6 pb-8 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {VIDEOS.map((video, i) => (
                <button
                  key={i}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => setActiveVideo(video.src)}
                  className="group relative w-[calc((100%-1.5rem)/2)] flex-none text-left transition-transform duration-300 ease-out hover:scale-[1.04] sm:w-[calc((100%-3rem)/3)]"
                >
                  <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-gold-200 bg-black shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <video
                      src={video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="absolute inset-x-4 bottom-0 translate-y-1/2 rounded-xl border border-gold-200 bg-white px-2 py-1 text-center shadow-md transition-colors duration-300 group-hover:border-saffron-300 sm:px-4 sm:py-2.5">
                    <p className="font-body text-[11px] font-medium text-saffron-800 transition-colors group-hover:text-saffron-600 sm:text-sm">
                      {video.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-4 flex items-center justify-center gap-2 ${pageCount <= 1 ? "hidden" : ""}`}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-saffron-600" : "w-2.5 bg-gold-200"
              }`}
            />
          ))}
        </div>
      </Container>

      {activeVideo && (
        <div
          className="fixed inset-0 z-100 grid h-screen w-screen place-items-center bg-black/85 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <video
            key={activeVideo}
            src={activeVideo}
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="mx-auto block max-h-[85vh] w-auto max-w-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
