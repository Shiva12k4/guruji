export default function VideoSection() {
  return (
    <section id="videos" className="w-full bg-saffron-50 py-10 md:py-16">
      <video
        className="block h-auto w-full"
        src="/assets/homepage-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    </section>
  );
}
