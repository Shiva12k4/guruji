"use client";

import { useState } from "react";
import Container from "./Container";

const VIDEOS = [
  { src: "/assets/homepage-video.mp4", title: "Video 1" },
  { src: "/assets/homepage-video2.mp4", title: "Video 2" },
  { src: "/assets/homepage-video3.mp4", title: "Video 3" },
  { src: "/assets/homepage-video4.mp4", title: "Video 4" },
];

export default function VideoSlider() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {VIDEOS.map((video, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveVideo(video.src)}
              className="group w-[72%] flex-none snap-start text-left sm:w-[42%] lg:w-[31%]"
            >
              <div className="relative aspect-9/16 overflow-hidden rounded-2xl border border-gold-200 bg-black shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-saffron-700">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="mt-3 font-body text-sm font-medium text-saffron-800 transition-colors group-hover:text-saffron-600">
                {video.title}
              </p>
            </button>
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
