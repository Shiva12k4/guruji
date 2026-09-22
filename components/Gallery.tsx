import Container from "./Container";

const TILE_HEIGHTS = ["h-40", "h-56", "h-48", "h-64", "h-40", "h-56", "h-48", "h-40"];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-saffron-50 py-14 md:py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
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

        <div className="mt-10 columns-2 gap-4 sm:columns-3 md:columns-4">
          {TILE_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className={`mb-4 ${h} w-full break-inside-avoid rounded-xl border border-gold-200 bg-gradient-to-br from-gold-100 to-saffron-100 flex items-center justify-center`}
            >
              <span className="font-body text-xs text-gold-600">Photo {i + 1}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
