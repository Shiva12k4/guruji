"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_GRADIENTS = [
  "from-saffron-500 to-gold-500",
  "from-gold-500 to-saffron-600",
  "from-saffron-600 to-gold-400",
  "from-gold-600 to-saffron-500",
  "from-saffron-500 to-gold-600",
  "from-gold-500 to-saffron-700",
];

const TESTIMONIALS = [
  {
    name: "Ramesh Chandra Tiwari",
    city: "Varanasi",
    quote:
      "Guruji ke satsang mein pehli baar gaya tha aur wahan jo shanti mili, wo shabdon mein bayan nahi kar sakta. Unka ashirwad hamesha mehsoos hota hai.",
  },
  {
    name: "Sunita Devi",
    city: "Ghaziabad",
    quote:
      "Maha Yagya mein participate karne ka avsar mila, poora parivar aaj bhi us anubhav ko yaad karta hai. Guruji ka margdarshan bahut hi seedha aur asardar hai.",
  },
  {
    name: "Anil Kumar Sharma",
    city: "Jaipur",
    quote:
      "15 saal se Guruji se juda hua hoon. Unki bataayi hui baatein zindagi ke har mushkil pal mein raah dikhati hain.",
  },
  {
    name: "Meena Rathi",
    city: "Mumbai",
    quote:
      "Hanuman Chalisa path ke karyakram mein shamil hokar jo bhaav jaga, wo mere jeevan ka sabse yaadgar din tha. Dhanyawad Guruji.",
  },
  {
    name: "Vijay Prasad Yadav",
    city: "Prayagraj",
    quote:
      "Magh Mela mein har saal Guruji ke sannidhya mein rehna mera saubhagya hai. Unka aashirwad hamesha sath rehta hai.",
  },
  {
    name: "Kavita Singh",
    city: "Lucknow",
    quote:
      "Ashram mein pehli visit se hi mann ko ek gehri shanti mili. Guruji ke pravachan seedhe dil tak pahunchte hain.",
  },
];

const PAGE_SIZE = 2;
const PAGE_COUNT = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);

function StarRow() {
  return (
    <div className="flex gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

function TestimonialCard({ t, i }: { t: (typeof TESTIMONIALS)[number]; i: number }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-saffron-300 hover:shadow-xl">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 select-none font-heading text-8xl leading-none text-saffron-50"
      >
        &#10098;
      </span>

      <div className="relative flex items-center gap-3">
        <span
          className={`flex h-12 w-12 flex-none items-center justify-center rounded-full bg-linear-to-br shadow-md ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]}`}
        >
          <User size={20} color="white" />
        </span>
        <div>
          <p className="font-heading text-base font-semibold text-saffron-900">
            {t.name}
          </p>
          <p className="font-body text-xs text-saffron-600">{t.city}</p>
        </div>
      </div>

      <div className="relative mt-3">
        <StarRow />
      </div>

      <p className="relative mt-4 flex-1 font-body text-sm leading-relaxed text-saffron-700/90">
        &#8220;{t.quote}&#8221;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const goTo = (index: number) => {
    setPage(((index % PAGE_COUNT) + PAGE_COUNT) % PAGE_COUNT);
  };

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

      const cards = gridRef.current ? Array.from(gridRef.current.children) : [];
      if (cards.length) {
        gsap.set(cards, { y: 40, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      if (mobileRef.current) {
        gsap.set(mobileRef.current, { y: 40, opacity: 0 });
        gsap.to(mobileRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mobileRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full bg-saffron-50 py-7 md:py-10"
    >
      <Container>
        <div ref={headingRef} className="text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
            Anubhav
          </span>
          <h2 className="mt-1 font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
            Devotees ke Anubhav
          </h2>
          <p className="mx-auto mt-2 max-w-md font-body text-saffron-700/80">
            Guruji ke satsang aur ashirwad se juday kuch anubhav, unhi ke
            shabdon mein
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

        <div ref={mobileRef} className="mt-10 sm:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {Array.from({ length: PAGE_COUNT }).map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="flex w-full flex-none flex-col gap-4"
                  >
                    {TESTIMONIALS.slice(
                      pageIndex * PAGE_SIZE,
                      pageIndex * PAGE_SIZE + PAGE_SIZE
                    ).map((t, i) => (
                      <TestimonialCard
                        key={t.name}
                        t={t}
                        i={pageIndex * PAGE_SIZE + i}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label="Previous testimonials"
              className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label="Next testimonials"
              className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: PAGE_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonials page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-saffron-600" : "w-2.5 bg-gold-200"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
