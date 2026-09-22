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
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
              Satsang Videos
            </h2>
            <p className="mt-2 font-body text-saffron-700/80">
              Pravachan aur satsang ki jhalkiyaan
            </p>
          </div>
          <a
            href="#"
            className="mt-4 font-body text-sm font-medium text-saffron-700 hover:text-saffron-900 sm:mt-0"
          >
            View All Videos &rarr;
          </a>
        </div>
      </Container>

      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
        {VIDEOS.map((video, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveVideo(video.src)}
            className="w-[60%] flex-none snap-start text-left sm:w-[32%] lg:w-[22%]"
          >
            <div className="relative aspect-9/16 overflow-hidden rounded-xl border border-gold-200 bg-black">
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-saffron-700">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-3 font-body text-sm text-saffron-800">{video.title}</p>
          </button>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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
            className="max-h-[85vh] max-w-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
