import Container from "./Container";

const PHOTOS = [
  { src: "/assets/gallery1.jpeg", span: "md:col-span-2 md:row-span-2" },
  { src: "/assets/gallery2.jpeg", span: "md:col-span-2 md:row-span-1" },
  { src: "/assets/gallery3.jpeg", span: "md:col-span-1 md:row-span-1" },
  { src: "/assets/gallery4.jpeg", span: "md:col-span-1 md:row-span-1" },
  { src: "/assets/gallery5.png", span: "md:col-span-4 md:row-span-1" },
];

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

        <div className="mt-10 grid grid-cols-2 auto-rows-40 gap-4 md:grid-cols-4 md:auto-rows-50">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl border border-gold-200 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={`Gallery photo ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
