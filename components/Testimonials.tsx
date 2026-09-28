"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

function DevoteeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3c-1.5 2-3 2.8-3 4.8a3 3 0 0 0 6 0c0-2-1.5-2.8-3-4.8Z"
        fill="white"
      />
      <path
        d="M6.5 21c.3-3.6 2.4-6 5.5-6s5.2 2.4 5.5 6"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-saffron-300 hover:shadow-xl"
            >
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
                  <DevoteeIcon />
                </span>
                <div>
                  <p className="font-heading text-base font-semibold text-saffron-900">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-saffron-600">
                    {t.city}
                  </p>
                </div>
              </div>

              <div className="relative mt-3">
                <StarRow />
              </div>

              <p className="relative mt-4 flex-1 font-body text-sm leading-relaxed text-saffron-700/90">
                &#8220;{t.quote}&#8221;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
