"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

export default function GuruParichay() {
  const sectionRef = useRef<HTMLElement>(null);
  const devarahaImgRef = useRef<HTMLDivElement>(null);
  const devarahaTextRef = useRef<HTMLDivElement>(null);
  const gurujiTextRef = useRef<HTMLDivElement>(null);
  const gurujiImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reveals: [HTMLElement | null, number][] = [
        [devarahaImgRef.current, -80],
        [devarahaTextRef.current, 80],
        [gurujiTextRef.current, -80],
        [gurujiImgRef.current, 80],
      ];

      reveals.forEach(([el, fromX]) => {
        if (!el) return;
        gsap.set(el, { x: fromX, opacity: 0 });
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="guru-parichay"
      className="w-full bg-white py-14 md:py-20"
    >
      <Container className="space-y-16 md:space-y-24">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
            Sant Parichay
          </h2>
          <p className="mt-2 font-body text-saffron-700/80">
            Hamare pujya santon ka jeevan parichay
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div ref={devarahaImgRef} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-4 -top-4 h-full w-full border-4 border-saffron-600" aria-hidden="true" />
            <img
              src="/assets/homepage-devara.png"
              alt="Yogiraj Shri Devraha Baba"
              className="relative aspect-4/5 w-full bg-saffron-50 object-contain"
            />
          </div>

          <div ref={devarahaTextRef} className="text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
              Yogiraj Shri Devraha Baba
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-saffron-700/90">
              Yogiraj Shri Devraha Baba was a great Siddha Yogi saint of
              India, renowned as the &quot;ageless Yogi.&quot; He spent his
              early years on a machan by the Sarayu river in Deoria, Uttar
              Pradesh, and later lived atop a machan by the Yamuna in
              Vrindavan, dedicated to his spiritual practice. He left his
              mortal body on 19th June 1990 in Vrindavan. His Samadhi Sthal
              in Vrindavan remains a revered site for devotees to this day.
            </p>

            <button
              type="button"
              className="mt-6 rounded-full bg-saffron-600 px-8 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-saffron-700"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div ref={gurujiTextRef} className="order-2 text-center md:order-1 md:text-left">
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

          <div ref={gurujiImgRef} className="relative order-1 mx-auto w-full max-w-sm md:order-2">
            <div className="absolute -left-4 -top-4 h-full w-full border-4 border-saffron-600" aria-hidden="true" />
            <img
              src="/assets/guruji-cutout.png"
              alt="Guruji"
              className="relative aspect-4/5 w-full object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
