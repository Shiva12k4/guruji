export default function VideoSection() {
  return (
    <section id="videos" className="w-full bg-saffron-50 py-6 md:py-8">
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
