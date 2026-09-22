export default function VideoSection() {
  return (
    <section id="videos" className="bg-saffron-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
          Satsang Video
        </h2>
        <p className="mt-3 font-body text-saffron-700/80">
          Latest pravachan ki jhalki (coming soon)
        </p>

        <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-gold-200 bg-gold-50 flex items-center justify-center shadow-sm">
          <span className="font-body text-sm text-gold-600">
            Video coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
