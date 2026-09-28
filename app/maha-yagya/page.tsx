import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollRefresh from "@/components/ScrollRefresh";
import MahaYagyaHero from "@/components/mahayagya/MahaYagyaHero";
import YagyaDataWall from "@/components/mahayagya/YagyaDataWall";
import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maha Yagya | Guruji",
  description:
    "2005 se 2026 tak Guruji dwara sankalpit 151 Shri Maruti Mahayagya ki yatra.",
};

export default function MahaYagyaPage() {
  return (
    <main>
      <ScrollRefresh />
      <Navbar />
      <MahaYagyaHero />
      <YagyaDataWall />
      <DonationCTA />
      <Footer />
    </main>
  );
}
