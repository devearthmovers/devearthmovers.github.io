import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Mulish:wght@300;400;500;600&display=swap');

        :root {
          --accent: #f97316;
          --accent-dark: #c2550f;
          --text-primary: #18181b;
          --text-muted: #71717a;
          --bg-light: #f9fafb;
          --border-light: rgba(0, 0, 0, 0.08);
        }

        /* ── Hero Section ── */
        .home-hero {
          position: relative;
          padding: 80px 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          overflow: hidden;
          border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 1023px) {
          .home-hero {
            padding: 60px 16px;
          }
        }
        .home-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .hero-left {
          grid-column: span 7;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (max-width: 1023px) {
          .hero-left {
            grid-column: span 1;
            text-align: center;
            align-items: center;
          }
        }
        .hero-tag {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
        }
        .hero-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0;
        }
        .hero-desc {
          font-family: 'Mulish', sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 580px;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 8px;
        }
        @media (max-width: 639px) {
          .hero-actions {
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }
        }
        .hero-right {
          grid-column: span 5;
          position: relative;
        }
        @media (max-width: 1023px) {
          .hero-right {
            grid-column: span 1;
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
        .hero-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.15);
          border: 1px solid var(--border-light);
          aspect-ratio: 4/3;
        }
        .hero-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 3px solid var(--accent);
          border-radius: 12px;
          pointer-events: none;
          opacity: 0.2;
        }

        /* ── Metric Stats ── */
        .stats-section {
          padding: 48px 24px;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 767px) {
          .stats-section {
            padding: 40px 16px;
          }
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: center;
        }
        @media (max-width: 767px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
        @media (max-width: 479px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .stat-card {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stat-num {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 2.8rem;
          color: var(--accent);
          line-height: 1;
        }
        .stat-label {
          font-family: 'Mulish', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-primary);
          letter-spacing: 0.08em;
        }

        /* ── Section Headings ── */
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .section-header {
            margin-bottom: 40px;
          }
        }
        .section-tag {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
        }
        .section-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: var(--text-primary);
          margin: 0;
        }
        .section-desc {
          font-family: 'Mulish', sans-serif;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Company Overview ── */
        .overview-section {
          padding: 100px 24px;
          background: #f9fafb; /* zinc-50 */
          border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 767px) {
          .overview-section {
            padding: 60px 16px;
          }
        }
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 1023px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .overview-image {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          padding: 60px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.04);
          aspect-ratio: 4/3;
        }
        .overview-graphics {
          position: relative;
          width: 100%;
          height: 100%;
          border: 2px dashed rgba(249, 115, 22, 0.2);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 220px;
        }
        .overview-graphics svg {
          color: var(--accent);
          opacity: 0.85;
        }
        .overview-graphics span {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-primary);
        }
        .overview-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 1023px) {
          .overview-content {
            text-align: center;
            align-items: center;
          }
        }

        /* ── Services Section ── */
        .services-section {
          padding: 100px 24px;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 767px) {
          .services-section {
            padding: 60px 16px;
          }
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .service-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 20px -10px rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: var(--accent);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: bottom;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px -15px rgba(0,0,0,0.08);
          border-color: rgba(249, 115, 22, 0.25);
        }
        .service-card:hover::before {
          transform: scaleY(1);
        }
        .service-icon-box {
          width: 48px; height: 48px;
          border-radius: 8px;
          background: rgba(249, 115, 22, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          flex-shrink: 0;
        }
        .service-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
          margin: 0;
        }
        .service-text {
          font-family: 'Mulish', sans-serif;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
        .service-link {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          transition: color 0.2s;
        }
        .service-card:hover .service-link {
          color: var(--accent);
        }

        /* ── Team Section ── */
        .team-section {
          padding: 100px 24px;
          background: #f9fafb;
          border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 767px) {
          .team-section {
            padding: 60px 16px;
          }
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 767px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        .team-card {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: 0 4px 20px -10px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
        }
        .team-image-placeholder {
          aspect-ratio: 1/1;
          background: #f3f4f6;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #9ca3af;
          border-bottom: 1px solid var(--border-light);
          position: relative;
        }
        .team-image-placeholder span {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .team-info {
          padding: 24px;
          text-align: center;
        }
        .team-name {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
          margin: 0 0 4px 0;
        }
        .team-role {
          font-family: 'Mulish', sans-serif;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ── Action/Contact Section ── */
        .action-section {
          padding: 100px 24px;
          background: #ffffff;
          position: relative;
        }
        @media (max-width: 767px) {
          .action-section {
            padding: 60px 16px;
          }
        }
        .action-box {
          background: #0c0c0d;
          border-radius: 16px;
          padding: 64px;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.3);
        }
        @media (max-width: 1023px) {
          .action-box {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 24px;
          }
        }
        .action-box::before {
          content: '';
          position: absolute;
          top: 0; right: 0; width: 40%; height: 100%;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.07) 0%, transparent 100%);
          transform: skewX(-15deg) translateX(20%);
          pointer-events: none;
        }
        .action-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 2;
        }
        .action-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
        }
        .action-desc {
          font-family: 'Mulish', sans-serif;
          font-size: 0.95rem;
          color: #a1a1aa;
          line-height: 1.6;
          margin: 0;
        }
        .action-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 2;
        }
        .action-contacts {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .action-contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          padding: 16px 20px;
        }
        .action-contact-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .action-contact-details {
          display: flex;
          flex-direction: column;
          font-family: 'Mulish', sans-serif;
        }
        .action-contact-label {
          font-size: 0.72rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .action-contact-value {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 500;
        }
        .action-contact-value a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .action-contact-value a:hover {
          color: var(--accent);
        }

        /* ── Buttons ── */
        .btn-primary {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: var(--accent);
          border: none;
          padding: 14px 32px;
          position: relative;
          overflow: hidden;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          transition: background 0.25s;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          align-self: flex-start;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-110%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .btn-primary:hover { background: var(--accent-dark); }
        .btn-primary:hover::before { transform: translateX(110%) skewX(-15deg); }

        .btn-secondary {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 4px;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-secondary:hover {
          color: var(--accent);
          border-color: var(--accent-dark);
        }
        @media (max-width: 639px) {
          .btn-primary {
            width: 100%;
            align-self: stretch;
          }
          .btn-secondary {
            align-self: center;
          }
        }
      `}</style>

      <main className="flex-1 flex flex-col">
        
        {/* ── Hero Section ── */}
        <section className="home-hero">
          <div className="home-container">
            <div className="hero-grid">
              
              {/* Hero Left Content */}
              <div className="hero-left">
                <p className="hero-tag">Moving Earth. Building Future.</p>
                <h1 className="hero-title">
                  Heavy Excavation & Construction Services
                </h1>
                <p className="hero-desc">
                  Providing professional earthmoving, excavation, site development, land leveling, trenching, and premium construction equipment rental solutions.
                </p>
                <div className="hero-actions">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Quote &rarr;
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    Explore Services &rarr;
                  </Link>
                </div>
              </div>

              {/* Hero Right Image (Generated & Copied) */}
              <div className="hero-right">
                <div className="hero-image-wrapper">
                  <Image
                    src="/hero_excavator.png"
                    alt="Dev Earth Movers - Yellow Heavy Excavator on Site"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1023px) 100vw, 40vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Metric Stats Section ── */}
        <section className="stats-section">
          <div className="home-container">
            <div className="stats-grid">
              
              <div className="stat-card">
                <span className="stat-num">15+</span>
                <span className="stat-label">Years of Experience</span>
              </div>

              <div className="stat-card">
                <span className="stat-num">250+</span>
                <span className="stat-label">Projects Completed</span>
              </div>

              <div className="stat-card">
                <span className="stat-num">50+</span>
                <span className="stat-label">Modern Fleet Units</span>
              </div>

              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>

            </div>
          </div>
        </section>

        {/* ── Company Overview Section ── */}
        <section className="overview-section">
          <div className="home-container">
            <div className="overview-grid">
              
              {/* Left – Illustrated Visual Box */}
              <div className="overview-image">
                <div className="overview-graphics">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v18H3V3z" />
                  </svg>
                  <span>Dev Earth Movers Overview</span>
                </div>
              </div>

              {/* Right – Text Details */}
              <div className="overview-content">
                <p className="section-tag">Who We Are</p>
                <h2 className="section-title">Company Overview</h2>
                <p className="hero-desc">
                  Dev Earth Movers provides professional earthmoving, excavation, site development, land leveling, trenching, and construction equipment services for construction and infrastructure projects.
                </p>
                <p className="service-text">
                  Our fleet of heavy equipment and experienced operators ensure that every project is completed safely, on time, and to precise technical specifications. Whether you require machinery rentals or end-to-end site development support, we deliver solutions engineered to construct the future.
                </p>
                <Link href="/about" className="btn-primary" style={{ marginTop: "12px" }}>
                  Learn More About Us
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section className="services-section">
          <div className="home-container">
            
            <div className="section-header">
              <p className="section-tag">Core Capabilities</p>
              <h2 className="section-title">Our Services</h2>
              <p className="section-desc">
                From structural excavation to heavy machinery hire, we provide comprehensive, robust solutions for commercial, residential, and road infrastructure projects.
              </p>
            </div>

            <div className="services-grid">
              
              {/* Card 1: Earth Excavation */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="service-title">Earth Excavation</h3>
                <p className="service-text">
                  Precision trenching, foundation digging, and soil moving tailored to strict engineering designs.
                </p>
                <Link href="/services" className="service-link">
                  Details <span>&rarr;</span>
                </Link>
              </div>

              {/* Card 2: Site Development & Land Leveling */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="service-title">Site Development & Land Leveling</h3>
                <p className="service-text">
                  Complete clearing, grading, and leveling of surfaces to prepare sites for structural building foundations.
                </p>
                <Link href="/services" className="service-link">
                  Details <span>&rarr;</span>
                </Link>
              </div>

              {/* Card 3: JCB & Excavator Rentals */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="service-title">JCB / Excavator Rental Services</h3>
                <p className="service-text">
                  High-performance heavy equipment, including JCB loaders and crawler excavators, available for hire with operators.
                </p>
                <Link href="/services" className="service-link">
                  Details <span>&rarr;</span>
                </Link>
              </div>

              {/* Card 4: Trenching & Backfilling */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="service-title">Trenching & Backfilling</h3>
                <p className="service-text">
                  Safe, deep utility line trenching, pipe-laying excavation, and backfill compaction services.
                </p>
                <Link href="/services" className="service-link">
                  Details <span>&rarr;</span>
                </Link>
              </div>

              {/* Card 5: Road Construction Support */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="service-title">Road Construction Support</h3>
                <p className="service-text">
                  Sub-base preparation, dirt clearing, aggregate spreading, and leveling operations for roadways and highways.
                </p>
                <Link href="/services" className="service-link">
                  Details <span>&rarr;</span>
                </Link>
              </div>

              {/* Card 6: Equipment Services */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="service-title">Construction Equipment Services</h3>
                <p className="service-text">
                  Specialized logistics, transportation, operator staffing, and support services for complex machinery layouts.
                </p>
                <Link href="/services" className="service-link">
                  Details <span>&rarr;</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── Team Section (With requested placeholders) ── */}
        <section className="team-section">
          <div className="home-container">
            
            <div className="section-header">
              <p className="section-tag">Leadership</p>
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-desc">
                Our team consists of certified heavy machinery operators, logistics experts, and site supervisors who drive every project to completion.
              </p>
            </div>

            <div className="team-grid">
              
              {/* Member 1 Placeholder */}
              <div className="team-card">
                <div className="team-image-placeholder">
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>Team Image Placeholder</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">[NAME PLACEHOLDER]</h3>
                  <span className="team-role">[ROLE PLACEHOLDER]</span>
                </div>
              </div>

              {/* Member 2 Placeholder */}
              <div className="team-card">
                <div className="team-image-placeholder">
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>Team Image Placeholder</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">[NAME PLACEHOLDER]</h3>
                  <span className="team-role">[ROLE PLACEHOLDER]</span>
                </div>
              </div>

              {/* Member 3 Placeholder */}
              <div className="team-card">
                <div className="team-image-placeholder">
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>Team Image Placeholder</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">[NAME PLACEHOLDER]</h3>
                  <span className="team-role">[ROLE PLACEHOLDER]</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Call to Action / Contact Us Info Section ── */}
        <section className="action-section">
          <div className="action-box">
            
            <div className="action-left">
              <h2 className="action-title">Ready to Start Your Next Project?</h2>
              <p className="action-desc">
                Contact Dev Earth Movers today. Request a free quote, hire excavation machinery, or get in touch for custom site development consulting.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: "#ffffff", color: "#000000" }}>
                Contact Us &rarr;
              </Link>
            </div>

            <div className="action-right">
              <div className="action-contacts">
                
                {/* Phone Numbers */}
                <div className="action-contact-card">
                  <svg className="action-contact-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="action-contact-details">
                    <span className="action-contact-label">Call Us Directly</span>
                    <span className="action-contact-value">
                      <a href="tel:9599688718">9599688718</a> · <a href="tel:9205312697">9205312697</a>
                    </span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="action-contact-card">
                  <svg className="action-contact-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="action-contact-details">
                    <span className="action-contact-label">Email Support</span>
                    <span className="action-contact-value">
                      <a href="mailto:devearthmovers9599@gmail.com">devearthmovers9599@gmail.com</a>
                    </span>
                  </div>
                </div>

                {/* Main Office Address */}
                <div className="action-contact-card">
                  <svg className="action-contact-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="action-contact-details">
                    <span className="action-contact-label">Main Address</span>
                    <span className="action-contact-value">
                      C-137, Sanjay Colony, Bhatti Mines, New Delhi - 110074
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
