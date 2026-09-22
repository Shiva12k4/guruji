export default function VideoSection() {
  const placeholders = [1, 2, 3];

  return (
    <section className="bg-saffron-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
          Satsang Videos
        </h2>
        <p className="mt-3 font-body text-saffron-700/80">
          Pravachan aur satsang ki jhalkiyaan (coming soon)
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((n) => (
            <div
              key={n}
              className="aspect-video w-full rounded-xl border border-gold-200 bg-gold-50 flex items-center justify-center shadow-sm"
            >
              <span className="font-body text-sm text-gold-600">
                Video slot {n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
