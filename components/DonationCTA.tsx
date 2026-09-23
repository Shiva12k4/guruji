import Container from "./Container";

export default function DonationCTA() {
  return (
    <section
      id="donate"
      className="w-full bg-linear-to-r from-saffron-600 via-saffron-500 to-gold-500 py-8 md:py-10"
    >
      <Container className="text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white">
          Seva Mein Sahyog Dein
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-base text-saffron-50/90">
          Aapka daan Hanuman bhakti, satsang aur seva karyon ko aage badhane
          mein madad karta hai.
        </p>
        <button
          type="button"
          className="mt-7 rounded-full bg-white px-9 py-3 font-body text-sm font-semibold text-saffron-700 shadow-md transition-colors hover:bg-saffron-50"
        >
          Donate Now
        </button>
      </Container>
    </section>
  );
}
