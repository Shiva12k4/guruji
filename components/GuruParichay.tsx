"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const BLOB = "63% 37% 54% 46% / 55% 48% 52% 45%";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GuruParichay() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const devarahaImgRef = useRef<HTMLDivElement>(null);
  const devarahaTextRef = useRef<HTMLDivElement>(null);
  const gurujiTextRef = useRef<HTMLDivElement>(null);
  const gurujiImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { y: 30, opacity: 0 });
        gsap.to(headingRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

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
      className="w-full overflow-x-hidden bg-white py-7 md:py-10"
    >
      <Container>
        <div ref={headingRef} className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
            Sant Parichay
          </h2>
          <p className="mt-2 font-body text-saffron-700/80">
            Hamare pujya santon ka jeevan parichay
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
        {/* Devraha Baba */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div ref={devarahaImgRef} className="relative mx-auto w-full max-w-xs lg:col-span-4">
            <img
              src="/assets/baba-bg.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] max-w-none object-contain opacity-50"
            />
            <div
              className="relative aspect-4/5 w-full overflow-hidden shadow-lg"
              style={{ borderRadius: BLOB }}
            >
              <img
                src="/assets/homepage-devara.png"
                alt="Yogiraj Shri Devraha Baba"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div ref={devarahaTextRef} className="text-center lg:col-span-5 lg:text-left">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
              &mdash; Sant Parichay
            </span>
            <h3 className="mt-2 font-heading text-3xl font-semibold leading-tight text-saffron-900 md:text-4xl">
              Yogiraj Shri Devraha Baba
            </h3>
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
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-saffron-600 px-7 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-saffron-700"
            >
              Discover More
              <ArrowIcon />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-xs flex-col justify-center rounded-2xl border border-gold-200 bg-gold-50/60 p-6 lg:col-span-3 lg:max-w-none">
            <span className="font-heading text-3xl leading-none text-saffron-400">&#10098;</span>
            <p className="mt-2 font-heading text-base italic leading-relaxed text-saffron-800">
              Sant ka sharir to chala jata hai, par unki urja hamesha rehti
              hai.
              <span className="text-2xl leading-none text-saffron-400">&#10099;</span>
            </p>
            <span className="mt-3 font-body text-xs text-saffron-500">&mdash; Sant Vachan</span>
          </div>
        </div>

        {/* Guruji */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="order-3 mx-auto flex w-full max-w-xs flex-col justify-center rounded-2xl border border-gold-200 bg-gold-50/60 p-6 lg:order-1 lg:col-span-3 lg:max-w-none">
            <span className="font-heading text-3xl leading-none text-saffron-400">&#10098;</span>
            <p className="mt-2 font-heading text-base italic leading-relaxed text-saffron-800">
              Guru ki kripa se hi jeevan mein sacchi shanti aur disha milti
              hai.
              <span className="text-2xl leading-none text-saffron-400">&#10099;</span>
            </p>
            <span className="mt-3 font-body text-xs text-saffron-500">&mdash; Guruji</span>
          </div>

          <div ref={gurujiTextRef} className="order-2 text-center lg:col-span-5 lg:text-left">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
              &mdash; Sant Parichay
            </span>
            <h3 className="mt-2 font-heading text-3xl font-semibold leading-tight text-saffron-900 md:text-4xl">
              Guru Parichay
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-saffron-700/90">
              Guruji ne apna jeevan Hanuman bhakti, satsang aur samaj seva ko
              samarpit kiya hai. Varshon ki sadhna aur anubhav ke madhyam se
              unhone hazaaron shraddhaluon ko dharm ke path par agrasar kiya
              hai. Unka jeevan tyaag, karuna aur bhakti ka jeeta jaagta
              udaharan hai.
            </p>
            <p className="mt-3 font-body text-base leading-relaxed text-saffron-700/90">
              Aaj bhi wo desh-videsh mein satsang, pravachan aur yatra ke
              madhyam se logon tak Hanuman ji ka ashirwad pahunchate hain.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-saffron-600 px-7 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-saffron-700"
            >
              Discover More
              <ArrowIcon />
            </button>
          </div>

          <div ref={gurujiImgRef} className="relative order-1 mx-auto w-full max-w-xs lg:order-3 lg:col-span-4">
            <img
              src="/assets/baba-2bg.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] max-w-none object-contain"
            />
            <div
              className="relative aspect-4/5 w-full overflow-hidden shadow-lg"
              style={{ borderRadius: BLOB }}
            >
              <img
                src="/assets/guruji-cutout.png"
                alt="Guruji"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
