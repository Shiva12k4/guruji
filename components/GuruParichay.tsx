import Container from "./Container";

export default function GuruParichay() {
  return (
    <section id="guru-parichay" className="w-full bg-white py-14 md:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 h-full w-full border-4 border-saffron-600" aria-hidden="true" />
          <img
            src="/assets/guruji-cutout.png"
            alt="Guruji"
            className="relative aspect-4/5 w-full object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
            Guru Parichay
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-saffron-700/90">
            Guruji ne apna jeevan Hanuman bhakti, satsang aur samaj seva ko
            samarpit kiya hai. Varshon ki sadhna aur anubhav ke madhyam se
            unhone hazaaron shraddhaluon ko dharm ke path par agrasar kiya
            hai. Unka jeevan tyaag, karuna aur bhakti ka jeeta jaagta udaharan
            hai.
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-saffron-700/90">
            Aaj bhi wo desh-videsh mein satsang, pravachan aur yatra ke
            madhyam se logon tak Hanuman ji ka ashirwad pahunchate hain.
          </p>

          <button
            type="button"
            className="mt-6 rounded-full bg-saffron-600 px-8 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-saffron-700"
          >
            Read More
          </button>
        </div>
      </Container>
    </section>
  );
}
