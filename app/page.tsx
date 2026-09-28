import Navbar from "@/components/Navbar";
import ScrollRefresh from "@/components/ScrollRefresh";
import Hero from "@/components/Hero";
import GuruParichay from "@/components/GuruParichay";
import VideoSlider from "@/components/VideoSlider";
import UpcomingEvents from "@/components/UpcomingEvents";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import DonationCTA from "@/components/DonationCTA";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollRefresh />
      <Navbar />
      <Hero />
      <GuruParichay />
      <VideoSlider />
      <UpcomingEvents />
      <Gallery />
      <Testimonials />
      <DonationCTA />
      <ContactUs />
      <Footer />
    </main>
  );
}
