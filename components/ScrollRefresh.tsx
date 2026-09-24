"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    const images = Array.from(document.images).filter((img) => !img.complete);
    images.forEach((img) => img.addEventListener("load", refresh, { once: true }));

    const videos = Array.from(document.querySelectorAll("video"));
    videos.forEach((video) => video.addEventListener("loadedmetadata", refresh, { once: true }));

    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
