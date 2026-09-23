import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-saffron-900 text-saffron-100">
      <Container className="grid grid-cols-1 gap-10 py-7 sm:grid-cols-3">
        <div>
          <h3 className="font-heading text-2xl text-gold-200">Guruji Ashram</h3>
          <p className="mt-3 font-body text-sm text-saffron-200/80">
            Hanuman bhakti, satsang aur seva ke madhyam se jeevan mein shanti
            aur ashirwad.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg text-gold-200">Quick Links</h4>
          <ul className="mt-3 space-y-2 font-body text-sm text-saffron-200/80">
            <li>
              <a href="#guru-parichay" className="hover:text-gold-100">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-100">Maha Yagya</a>
            </li>
            <li>
              <a href="#donate" className="hover:text-gold-100">Donation</a>
            </li>
            <li>
              <a href="#videos" className="hover:text-gold-100">Videos</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gold-100">Gallery</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg text-gold-200">Connect</h4>
          <ul className="mt-3 space-y-2 font-body text-sm text-saffron-200/80">
            <li>Email: info@example.com</li>
            <li>Phone: +91 00000 00000</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-saffron-700/60 py-6 text-center font-body text-xs text-saffron-300/70">
        &copy; {new Date().getFullYear()} Guruji Ashram. All rights reserved.
      </div>
    </footer>
  );
}
