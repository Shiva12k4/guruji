"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import Container from "./Container";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-linear-to-b from-gold-50 via-saffron-50/40 to-white py-7 md:py-10">
      <Container>
        <div className="text-center">
          <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-saffron-100 font-heading text-lg text-saffron-600">
            &#2384;
          </span>
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-saffron-500">
            Contact
          </span>
          <h2 className="mt-1 font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
            Get in Touch
          </h2>
          <p className="mx-auto mt-2 max-w-md font-body text-saffron-700/80">
            Kisi bhi jaankari, seva ya sujhaav ke liye hume sampark karein —
            hum jald hi aapse baat karenge.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-2xl bg-saffron-600 p-8 text-white lg:col-span-2">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10" />

            <h3 className="font-heading text-2xl font-semibold">
              Contact Information
            </h3>
            <p className="mt-3 font-body text-sm text-saffron-50/90">
              Ashram se juday sawaal, seva mein sahyog, ya satsang ki
              jaankari ke liye neeche diye gaye madhyam se sampark karein.
            </p>

            <ul className="mt-8 space-y-5 font-body text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/15">
                  <MapPin size={16} />
                </span>
                <span className="pt-1.5">
                  Guruji Ashram, Mandir Marg,
                  <br />
                  Vrindavan, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/15">
                  <Phone size={16} />
                </span>
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/15">
                  <Mail size={16} />
                </span>
                <span>info@example.com</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gold-200 bg-saffron-50/40 p-6 shadow-sm sm:p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                  <Check size={26} />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-saffron-800">
                  Dhanyawad!
                </h3>
                <p className="mt-2 font-body text-sm text-saffron-700/80">
                  Aapka message mil gaya hai, hum jald hi aapse sampark
                  karenge.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Aapka naam"
                      className="mt-2 w-full rounded-xl border border-gold-200 bg-white px-4 py-3 font-body text-sm text-saffron-900 placeholder:text-saffron-400 outline-none transition-colors focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aap@example.com"
                      className="mt-2 w-full rounded-xl border border-gold-200 bg-white px-4 py-3 font-body text-sm text-saffron-900 placeholder:text-saffron-400 outline-none transition-colors focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="mt-2 w-full rounded-xl border border-gold-200 bg-white px-4 py-3 font-body text-sm text-saffron-900 placeholder:text-saffron-400 outline-none transition-colors focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Satsang, Seva, Yatra..."
                      className="mt-2 w-full rounded-xl border border-gold-200 bg-white px-4 py-3 font-body text-sm text-saffron-900 placeholder:text-saffron-400 outline-none transition-colors focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Apna sandesh yahan likhein..."
                    className="mt-2 w-full resize-none rounded-xl border border-gold-200 bg-white px-4 py-3 font-body text-sm text-saffron-900 placeholder:text-saffron-400 outline-none transition-colors focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-saffron-600 px-8 py-3.5 font-body text-sm font-semibold text-white shadow-md transition-colors hover:bg-saffron-700 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
