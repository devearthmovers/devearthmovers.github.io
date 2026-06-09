import Link from "next/link";
import Image from "next/image";

const navigation = {
  services: [
    { name: "Earth Excavation", href: "/services" },
    { name: "Site Development", href: "/services" },
    { name: "JCB / Excavator Rental", href: "/services" },
    { name: "Trenching & Backfilling", href: "/services" },
    { name: "Road Construction Support", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <>
      <style>{`
        .ftr-container {
          background: #0a0a0a; /* dark theme background consistent with home page */
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 80px 0 32px 0;
        }
        @media (max-width: 767px) {
          .ftr-container {
            padding: 60px 16px 24px 16px;
          }
        }
        .ftr-inner {
          max-width: 80rem; /* max-w-7xl */
          margin: 0 auto;
          padding: 0 16px;
        }
        @media (min-width: 640px) { .ftr-inner { padding: 0 24px; } }
        @media (min-width: 1024px) { .ftr-inner { padding: 0 40px; } }
        .ftr-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }
        @media (max-width: 1023px) {
          .ftr-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }
        @media (max-width: 639px) {
          .ftr-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        .ftr-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ftr-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 1.15rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }
        .ftr-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ftr-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a1a1aa;
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
          align-self: flex-start;
        }
        .ftr-link:hover {
          color: #ea580c; /* text-orange-600 */
          padding-left: 4px;
        }
        .ftr-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: #a1a1aa;
          line-height: 1.6;
          margin: 0;
        }
        .ftr-socials {
          display: flex;
          gap: 16px;
          margin-top: 4px;
        }
        .ftr-social-link {
          color: #a1a1aa;
          transition: color 0.2s;
        }
        .ftr-social-link:hover {
          color: #ea580c;
        }
        .ftr-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ftr-contact-row {
          display: flex;
          gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #a1a1aa;
          line-height: 1.5;
        }
        .ftr-contact-row svg {
          color: #ea580c;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ftr-contact-row a {
          color: #e4e4e7;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-contact-row a:hover {
          color: #ea580c;
        }
        .ftr-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: 64px;
          padding-top: 32px;
        }
        @media (max-width: 767px) {
          .ftr-bottom {
            margin-top: 48px;
            padding-top: 24px;
          }
        }
        .ftr-copyright {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: #71717a;
          text-align: center;
          margin: 0;
        }
      `}</style>

      <footer className="ftr-container" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="ftr-inner">
          <div className="ftr-grid">
            
            {/* Col 1 – Brand / About */}
            <div className="ftr-col">
              <Link href="/" className="inline-block bg-white p-2.5 rounded-lg" style={{ lineHeight: 0, alignSelf: "flex-start" }}>
                <Image
                  src="/logo_removed_bg.png"
                  alt="Dev Earth Movers"
                  width={180}
                  height={70}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="ftr-text">
                Moving Earth. Building Future. Professional earthmoving, excavation, and site development services.
              </p>
              <div className="ftr-socials">
                <a href="#" className="ftr-social-link" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2 – Services */}
            <div className="ftr-col">
              <h3 className="ftr-title">Services</h3>
              <nav className="ftr-links" aria-label="Footer services navigation">
                {navigation.services.map((item) => (
                  <Link key={item.name} href={item.href} className="ftr-link">
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3 – Company */}
            <div className="ftr-col">
              <h3 className="ftr-title">Company</h3>
              <nav className="ftr-links" aria-label="Footer company navigation">
                {navigation.company.map((item) => (
                  <Link key={item.name} href={item.href} className="ftr-link">
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 4 – Contact Info */}
            <div className="ftr-col">
              <h3 className="ftr-title">Contact Us</h3>
              <div className="ftr-contact-list">
                <div className="ftr-contact-row">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>C-137, Sanjay Colony, Bhatti Mines,<br />New Delhi - 110074</span>
                </div>
                <div className="ftr-contact-row">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href="tel:9599688718">9599688718</a>
                    <a href="tel:9205312697">9205312697</a>
                  </div>
                </div>
                <div className="ftr-contact-row">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:devearthmovers9599@gmail.com" className="break-all">devearthmovers9599@gmail.com</a>
                </div>
              </div>
            </div>

          </div>

          <div className="ftr-bottom">
            <p className="ftr-copyright">&copy; {new Date().getFullYear()} Dev Earth Movers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
