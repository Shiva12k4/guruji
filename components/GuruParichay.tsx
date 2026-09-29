"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const BLOB = "63% 37% 54% 46% / 55% 48% 52% 45%";

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
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-8">
          <div ref={devarahaImgRef} className="relative mx-auto hidden w-full lg:block lg:max-w-xs lg:col-span-4">
            <img
              src="/assets/baba-bg.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] max-w-none object-contain opacity-50"
            />
            <div
              className="relative aspect-4/5 w-full overflow-hidden shadow-lg"
              style={{ borderRadius: BLOB }}
            >
              <img
                src="/assets/homepage-devara.webp"
                alt="Yogiraj Shri Devraha Baba"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div ref={devarahaTextRef} className="lg:col-span-5 lg:text-left">
            <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-saffron-500 lg:text-xs">
              &mdash; Sant Parichay
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold leading-tight text-saffron-900 lg:text-4xl">
              Yogiraj Shri Devraha Baba
            </h3>

            <div className="relative float-right ml-3 mb-1 w-24 lg:hidden">
              <img
                src="/assets/baba-bg.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] max-w-none object-contain opacity-50"
              />
              <div
                className="relative aspect-4/5 w-full overflow-hidden shadow-lg"
                style={{ borderRadius: BLOB }}
              >
                <img
                  src="/assets/homepage-devara.webp"
                  alt="Yogiraj Shri Devraha Baba"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-2 font-body text-xs leading-relaxed text-saffron-700/90 lg:mt-4 lg:text-base">
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
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-saffron-600 px-4 py-2 font-body text-xs font-medium text-white transition-colors hover:bg-saffron-700 lg:mt-6 lg:gap-2 lg:px-7 lg:py-3 lg:text-sm"
            >
              Discover More
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="hidden lg:flex mx-auto w-full max-w-xs flex-col justify-center rounded-2xl border border-gold-200 bg-gold-50/60 p-6 lg:col-span-3 lg:max-w-none">
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
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:order-1 lg:flex mx-auto w-full max-w-xs flex-col justify-center rounded-2xl border border-gold-200 bg-gold-50/60 p-6 lg:col-span-3 lg:max-w-none">
            <span className="font-heading text-3xl leading-none text-saffron-400">&#10098;</span>
            <p className="mt-2 font-heading text-base italic leading-relaxed text-saffron-800">
              Guru ki kripa se hi jeevan mein sacchi shanti aur disha milti
              hai.
              <span className="text-2xl leading-none text-saffron-400">&#10099;</span>
            </p>
            <span className="mt-3 font-body text-xs text-saffron-500">&mdash; Guruji</span>
          </div>

          <div ref={gurujiTextRef} className="lg:order-2 lg:col-span-5 lg:text-left">
            <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-saffron-500 lg:text-xs">
              &mdash; Sant Parichay
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold leading-tight text-saffron-900 lg:text-4xl">
              Guru Parichay
            </h3>

            <div className="relative float-left mr-3 mb-1 w-36 lg:hidden">
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  src="/assets/guruji-portrait.webp"
                  alt="Guruji"
                  className="h-full w-full object-cover object-[center_25%]"
                />
              </div>
            </div>

            <p className="mt-2 font-body text-xs leading-relaxed text-saffron-700/90 lg:mt-4 lg:text-base">
              Guruji ne apna jeevan Hanuman bhakti, satsang aur samaj seva ko
              samarpit kiya hai. Varshon ki sadhna aur anubhav ke madhyam se
              unhone hazaaron shraddhaluon ko dharm ke path par agrasar kiya
              hai. Unka jeevan tyaag, karuna aur bhakti ka jeeta jaagta
              udaharan hai.
            </p>
            <p className="mt-2 font-body text-xs leading-relaxed text-saffron-700/90 lg:mt-3 lg:text-base">
              Aaj bhi wo desh-videsh mein satsang, pravachan aur yatra ke
              madhyam se logon tak Hanuman ji ka ashirwad pahunchate hain.
            </p>

            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-saffron-600 px-4 py-2 font-body text-xs font-medium text-white transition-colors hover:bg-saffron-700 lg:mt-6 lg:gap-2 lg:px-7 lg:py-3 lg:text-sm"
            >
              Discover More
              <ArrowRight size={16} />
            </button>
          </div>

          <div ref={gurujiImgRef} className="relative mx-auto hidden w-full lg:order-3 lg:block lg:col-span-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img
                src="/assets/guruji-portrait.webp"
                alt="Guruji"
                className="h-full w-full object-cover object-[center_25%]"
              />
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
