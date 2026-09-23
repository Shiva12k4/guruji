"use client";

import { useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = (index: number) => {
    const wrapped = ((index % VIDEOS.length) + VIDEOS.length) % VIDEOS.length;
    setCurrentIndex(wrapped);
    cardRefs.current[wrapped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - track.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    setCurrentIndex(closest);
  };

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

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          >
            {VIDEOS.map((video, i) => (
              <button
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                onClick={() => setActiveVideo(video.src)}
                className="group w-[50%] flex-none snap-start text-left sm:w-[29%] lg:w-[22%]"
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
