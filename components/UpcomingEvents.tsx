import Container from "./Container";

const PLACEHOLDER_EVENTS = [
  { city: "Delhi", date: "12 Oct 2026" },
  { city: "Mumbai", date: "26 Oct 2026" },
  { city: "Jaipur", date: "08 Nov 2026" },
  { city: "Varanasi", date: "22 Nov 2026" },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="w-full bg-white py-14 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-saffron-800">
            Upcoming Events
          </h2>
          <p className="mt-2 font-body text-saffron-700/80">
            Aane wale satsang aur yatra ke karyakram
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLACEHOLDER_EVENTS.map((event, i) => (
            <div
              key={i}
              className="rounded-xl border border-gold-200 bg-saffron-50 p-6 text-center shadow-sm"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-wide text-saffron-600">
                {event.city}
              </span>
              <p className="mt-2 font-body text-sm text-gold-700">{event.date}</p>
              <h3 className="mt-3 font-heading text-lg text-saffron-800">
                Event title placeholder
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
