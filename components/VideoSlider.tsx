"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";

const VIDEOS = [
  { src: "/assets/homepage-video.mp4", title: "Video 1" },
  { src: "/assets/homepage-video2.mp4", title: "Video 2" },
  { src: "/assets/homepage-video3.mp4", title: "Video 3" },
  { src: "/assets/homepage-video4.mp4", title: "Video 4" },
];

export default function VideoSlider() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const updateOffset = (index: number) => {
    setOffset(cardRefs.current[index]?.offsetLeft ?? 0);
  };

  const goTo = (index: number) => {
    const wrapped = ((index % VIDEOS.length) + VIDEOS.length) % VIDEOS.length;
    setCurrentIndex(wrapped);
    updateOffset(wrapped);
  };

  useEffect(() => {
    const handleResize = () => updateOffset(currentIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <section id="videos" className="w-full bg-saffron-50 py-14 md:py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
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
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            aria-label="Previous video"
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md transition-colors hover:bg-saffron-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            aria-label="Next video"
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md transition-colors hover:bg-saffron-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 pb-1 transition-transform duration-500 ease-out"
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
                  className="group w-[calc((100%-1.5rem)/2)] flex-none text-left sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
                >
                  <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-gold-200 bg-black shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <video
                      src={video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <p className="mt-3 font-body text-sm font-medium text-saffron-800 transition-colors group-hover:text-saffron-600">
                    {video.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to video ${i + 1}`}
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
