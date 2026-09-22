import Container from "./Container";

export default function VideoSection() {
  return (
    <section id="videos" className="w-full bg-saffron-50 py-6 md:py-8">
      <Container className="mb-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
          Satsang Video
        </h2>
        <p className="mt-3 font-body text-saffron-700/80">
          Latest pravachan ki jhalki
        </p>
      </Container>

      <div className="aspect-8/3 w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/assets/homepage-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    </section>
  );
}
