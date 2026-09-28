"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_COLORS = [
  "bg-saffron-600",
  "bg-gold-600",
  "bg-saffron-700",
  "bg-gold-500",
  "bg-saffron-500",
  "bg-gold-700",
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

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
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
              className="flex flex-col rounded-2xl border border-gold-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-heading text-3xl leading-none text-saffron-400">
                &#10098;
              </span>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-saffron-700/90">
                {t.quote}
                <span className="text-xl leading-none text-saffron-400">
                  &#10099;
                </span>
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-gold-100 pt-4">
                <span
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-full font-body text-sm font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-saffron-900">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-saffron-600">
                    {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
