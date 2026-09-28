"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
  {
    day: "12",
    month: "Oct",
    year: "2026",
    time: "6:00 AM – 9:00 PM",
    city: "Delhi",
    venue: "Hanuman Mandir, Connaught Place",
    title: "Maha Rudrabhishek Puja",
    photo: "/assets/event1.jpg",
  },
  {
    day: "26",
    month: "Oct",
    year: "2026",
    time: "5:30 PM – 8:30 PM",
    city: "Mumbai",
    venue: "Shree Ashram Hall, Andheri",
    title: "Guruji Satsang Sabha",
    photo: "/assets/parmarth-niketan-ashram.jpg",
  },
  {
    day: "08",
    month: "Nov",
    year: "2026",
    time: "7:00 AM – 12:00 PM",
    city: "Jaipur",
    venue: "Birla Mandir Prangan",
    title: "Hanuman Chalisa Path (108 Baar)",
    photo: "/assets/event2.jpg",
  },
  {
    day: "22",
    month: "Nov",
    year: "2026",
    time: "4:00 PM – 9:00 PM",
    city: "Varanasi",
    venue: "Ganga Ghat, Assi Ghat",
    title: "Sandhya Aarti aur Bhajan Sandhya",
    photo: "/assets/event3.jpg",
  },
  {
    day: "05",
    month: "Dec",
    year: "2026",
    time: "6:00 AM – 6:00 PM",
    city: "Ayodhya",
    venue: "Ram Janmabhoomi Path",
    title: "Maha Yatra aur Darshan",
    photo: "/assets/event4.jpg",
  },
  {
    day: "19",
    month: "Dec",
    year: "2026",
    time: "5:00 PM – 8:00 PM",
    city: "Haridwar",
    venue: "Har Ki Pauri",
    title: "Ganga Aarti Sammelan",
    photo: "/assets/event5.jpg",
  },
  {
    day: "02",
    month: "Jan",
    year: "2027",
    time: "9:00 AM – 1:00 PM",
    city: "Ujjain",
    venue: "Mahakaleshwar Prangan",
    title: "Naya Varsh Ashirwad Samaroh",
    photo: "/assets/event6.jpg",
  },
  {
    day: "16",
    month: "Jan",
    year: "2027",
    time: "6:30 PM – 9:30 PM",
    city: "Pune",
    venue: "Shivaji Nagar Community Hall",
    title: "Satsang aur Prasad Vitran",
    photo: "/assets/event7.jpg",
  },
];

export default function UpcomingEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(() => Math.floor(EVENTS.length / 2));
  const [offset, setOffset] = useState(0);

  const updateOffset = (index: number) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];
    if (!viewport || !card) return;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    setOffset(cardCenter - viewport.clientWidth / 2);
  };

  const goTo = (index: number) => {
    const range = EVENTS.length;
    const wrapped = ((index % range) + range) % range;
    setActiveIndex(wrapped);
    updateOffset(wrapped);
  };

  useEffect(() => {
    updateOffset(activeIndex);
    const handleResize = () => updateOffset(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      if (carouselRef.current) {
        gsap.set(carouselRef.current, { y: 40, opacity: 0 });
        gsap.to(carouselRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="events" className="w-full bg-white py-7 md:py-10">
      <Container>
        <div ref={headingRef} className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
              Calendar
            </span>
            <h2 className="mt-1 font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
              Upcoming Events
            </h2>
            <p className="mt-2 max-w-md font-body text-saffron-700/80">
              Aane wale satsang, yatra aur puja karyakram — apne shehar ki
              tareekh yaad rakhiye.
            </p>
          </div>
          <a
            href="#"
            className="group mt-2 flex items-center gap-1.5 font-body text-sm font-semibold text-saffron-700 hover:text-saffron-900 sm:mt-0"
          >
            View Full Calendar
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

        <div ref={carouselRef} className="relative mt-10">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous event"
            className="absolute left-1 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md transition-colors hover:bg-saffron-50 sm:-left-4 sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 sm:h-5 sm:w-5">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next event"
            className="absolute right-1 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold-200 bg-white text-saffron-700 shadow-md transition-colors hover:bg-saffron-50 sm:-right-4 sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 sm:h-5 sm:w-5">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div ref={viewportRef} className="overflow-hidden py-6">
            <div
              className="flex items-center gap-5 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {EVENTS.map((event, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    onClick={() => goTo(i)}
                    className={`group w-[74vw] flex-none cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-500 ease-out sm:w-72 md:w-80 ${
                      isActive
                        ? "scale-100 border-saffron-300 opacity-100 shadow-2xl sm:scale-110"
                        : "scale-90 border-gold-200 opacity-50 shadow-sm"
                    }`}
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img
                        src={event.photo}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                      <div className="absolute left-3 top-3 flex h-14 w-14 flex-none flex-col items-center justify-center rounded-xl bg-saffron-600 text-white shadow-md">
                        <span className="font-heading text-lg font-semibold leading-none">
                          {event.day}
                        </span>
                        <span className="mt-0.5 font-body text-[10px] uppercase tracking-wide">
                          {event.month}
                        </span>
                      </div>

                      {i === 0 && (
                        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-saffron-700 shadow-md">
                          Next Event
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <span className="flex items-center gap-1 font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                        </svg>
                        {event.city}
                      </span>
                      <h3 className="mt-1 font-heading text-lg font-semibold text-saffron-900">
                        {event.title}
                      </h3>
                      <p className="mt-1 font-body text-sm text-saffron-700/80">
                        {event.venue}
                      </p>
                      <p className="mt-1 font-body text-xs text-gold-600">
                        {event.time} &middot; {event.year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {EVENTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to event ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-saffron-600" : "w-2.5 bg-gold-200"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
