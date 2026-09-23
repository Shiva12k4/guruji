import Container from "./Container";

const PHOTOS = [
  "/assets/gallery1.jpeg",
  "/assets/gallery2.jpeg",
  "/assets/gallery3.jpeg",
  "/assets/gallery4.jpeg",
  "/assets/gallery5.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-saffron-50 py-7 md:py-10">
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
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-xl border border-gold-200"
            >
              <img
                src={src}
                alt={`Gallery photo ${i + 1}`}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
