import Container from "./Container";

const PLACEHOLDER_VIDEOS = [1, 2, 3, 4];

export default function VideoSlider() {
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
        {PLACEHOLDER_VIDEOS.map((n) => (
          <div
            key={n}
            className="w-[78%] flex-none snap-start sm:w-[46%] lg:w-[23%]"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gold-200 bg-gold-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-saffron-700">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-3 font-body text-sm text-saffron-800">
              Video title {n}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
