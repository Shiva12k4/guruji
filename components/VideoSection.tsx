export default function VideoSection() {
  return (
    <section id="videos" className="w-full bg-black">
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
