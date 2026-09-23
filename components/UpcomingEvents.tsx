import Container from "./Container";

const EVENTS = [
  {
    day: "12",
    month: "Oct",
    year: "2026",
    time: "6:00 AM – 9:00 PM",
    city: "Delhi",
    venue: "Hanuman Mandir, Connaught Place",
    title: "Maha Rudrabhishek Puja",
  },
  {
    day: "26",
    month: "Oct",
    year: "2026",
    time: "5:30 PM – 8:30 PM",
    city: "Mumbai",
    venue: "Shree Ashram Hall, Andheri",
    title: "Guruji Satsang Sabha",
  },
  {
    day: "08",
    month: "Nov",
    year: "2026",
    time: "7:00 AM – 12:00 PM",
    city: "Jaipur",
    venue: "Birla Mandir Prangan",
    title: "Hanuman Chalisa Path (108 Baar)",
  },
  {
    day: "22",
    month: "Nov",
    year: "2026",
    time: "4:00 PM – 9:00 PM",
    city: "Varanasi",
    venue: "Ganga Ghat, Assi Ghat",
    title: "Sandhya Aarti aur Bhajan Sandhya",
  },
  {
    day: "05",
    month: "Dec",
    year: "2026",
    time: "6:00 AM – 6:00 PM",
    city: "Ayodhya",
    venue: "Ram Janmabhoomi Path",
    title: "Maha Yatra aur Darshan",
  },
  {
    day: "19",
    month: "Dec",
    year: "2026",
    time: "5:00 PM – 8:00 PM",
    city: "Haridwar",
    venue: "Har Ki Pauri",
    title: "Ganga Aarti Sammelan",
  },
  {
    day: "02",
    month: "Jan",
    year: "2027",
    time: "9:00 AM – 1:00 PM",
    city: "Ujjain",
    venue: "Mahakaleshwar Prangan",
    title: "Naya Varsh Ashirwad Samaroh",
  },
  {
    day: "16",
    month: "Jan",
    year: "2027",
    time: "6:30 PM – 9:30 PM",
    city: "Pune",
    venue: "Shivaji Nagar Community Hall",
    title: "Satsang aur Prasad Vitran",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="w-full bg-white py-7 md:py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="group relative flex items-stretch gap-5 overflow-hidden rounded-2xl border border-gold-200 bg-saffron-50/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
            >
              {i === 0 && (
                <span className="absolute right-4 top-4 rounded-full bg-saffron-600 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-white">
                  Next Event
                </span>
              )}

              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-xl bg-saffron-600 text-white shadow-md transition-colors duration-300 group-hover:bg-saffron-700">
                <span className="font-heading text-2xl font-semibold leading-none">
                  {event.day}
                </span>
                <span className="mt-1 font-body text-xs uppercase tracking-wide">
                  {event.month}
                </span>
              </div>

              <div className="flex flex-col justify-center">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
