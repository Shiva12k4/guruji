import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GuruParichay from "@/components/GuruParichay";
import VideoSlider from "@/components/VideoSlider";
import UpcomingEvents from "@/components/UpcomingEvents";
import Gallery from "@/components/Gallery";
import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GuruParichay />
      <VideoSlider />
      <UpcomingEvents />
      <Gallery />
      <DonationCTA />
      <Footer />
    </main>
  );
}
