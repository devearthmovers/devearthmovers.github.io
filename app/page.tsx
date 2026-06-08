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
          --bg-light: #ffffff;
          --bg-offset: #f9fafb;
          --border-light: rgba(0, 0, 0, 0.08);
        }

        /* ── Animations ── */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.03); opacity: 1; }
        }
        @keyframes borderDraw {
          0% { width: 0; }
          100% { width: 100%; }
        }

        /* ── Hero Section ── */
        .home-hero {
          position: relative;
          padding: 100px 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%);
          overflow: hidden;
          border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 1023px) {
          .home-hero {
            padding: 70px 16px;
          }
        }
        /* Decorative dot canvas */
        .hero-dots {
          position: absolute;
          top: 10%; right: 5%;
          width: 240px; height: 240px;
          background-image: radial-gradient(var(--accent) 1.5px, transparent 1.5px);
          background-size: 20px 20px;
          opacity: 0.12;
          pointer-events: none;
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
          position: relative;
          z-index: 2;
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
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
          position: relative;
          display: inline-block;
        }
        .hero-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(2.6rem, 5.5vw, 4.25rem);
          line-height: 1.08;
          color: var(--text-primary);
          margin: 0;
        }
        .hero-desc {
          font-family: 'Mulish', sans-serif;
          font-size: 1.12rem;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.65;
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
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.18);
          border: 1px solid var(--border-light);
          aspect-ratio: 4/3;
          animation: float 6s ease-in-out infinite;
        }
        .hero-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent);
          border-radius: 16px;
          pointer-events: none;
          opacity: 0.25;
        }

        /* ── Metric Stats ── */
        .stats-section {
          padding: 48px 24px;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
          position: relative;
          z-index: 10;
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
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-right: 1px solid rgba(0,0,0,0.06);
        }
        .stat-card:last-child {
          border-right: none;
        }
        @media (max-width: 767px) {
          .stat-card {
            border-right: none;
          }
        }
        .stat-num {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 3.2rem;
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
          margin: 0;
        }
        .section-desc {
          font-family: 'Mulish', sans-serif;
          font-size: 0.98rem;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Dark Alternating Block: Company Overview ── */
        .overview-section {
          padding: 110px 24px;
          background: #0c0c0d; /* Premium dark charcoal background */
          color: #ffffff;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .overview-section {
            padding: 70px 16px;
          }
        }
        /* Blueprint grid pattern overlay */
        .overview-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
          z-index: 1;
        }
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1023px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .overview-image {
          position: relative;
          background: rgba(255, 255, 255, 0.01);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 60px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 4/3;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        /* Technical corner markings */
        .overview-image::before {
          content: '';
          position: absolute;
          top: 14px; left: 14px; width: 20px; height: 20px;
          border-top: 2px solid var(--accent);
          border-left: 2px solid var(--accent);
          pointer-events: none;
        }
        .overview-image::after {
          content: '';
          position: absolute;
          bottom: 14px; right: 14px; width: 20px; height: 20px;
          border-bottom: 2px solid var(--accent);
          border-right: 2px solid var(--accent);
          pointer-events: none;
        }
        .overview-graphics {
          position: relative;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(249, 115, 22, 0.25);
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
          opacity: 0.9;
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .overview-graphics span {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
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
        .overview-content .section-title {
          color: #ffffff;
        }
        .overview-content .hero-desc {
          color: #d4d4d8;
        }
        .overview-text {
          font-family: 'Mulish', sans-serif;
          font-size: 0.88rem;
          color: #a1a1aa;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Services Section ── */
        .services-section {
          padding: 110px 24px;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
          position: relative;
        }
        @media (max-width: 767px) {
          .services-section {
            padding: 70px 16px;
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
          border-radius: 16px;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: bottom;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 48px -15px rgba(0,0,0,0.09);
          border-color: rgba(249, 115, 22, 0.28);
        }
        .service-card:hover::before {
          transform: scaleY(1);
        }
        .service-icon-box {
          width: 52px; height: 52px;
          border-radius: 10px;
          background: rgba(249, 115, 22, 0.06);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-icon-box svg {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover .service-icon-box {
          background: var(--accent);
          color: #ffffff;
          transform: scale(1.05);
        }
        .service-card:hover .service-icon-box svg {
          transform: scale(1.15) rotate(8deg);
        }
        .service-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0;
        }
        .service-text {
          font-family: 'Mulish', sans-serif;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
        }
        .service-link {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          transition: color 0.2s, gap 0.2s;
        }
        .service-card:hover .service-link {
          color: var(--accent);
          gap: 10px;
        }

        /* ── Team Section (With photography generated) ── */
        .team-section {
          padding: 110px 24px;
          background: #f9fafb; /* zinc-50 offset block */
          border-bottom: 1px solid var(--border-light);
          position: relative;
        }
        @media (max-width: 767px) {
          .team-section {
            padding: 70px 16px;
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
          border-radius: 16px;
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: 0 4px 20px -10px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 40px -15px rgba(0,0,0,0.1);
        }
        .team-image-box {
          position: relative;
          aspect-ratio: 1/1;
          background: #f3f4f6;
          overflow: hidden;
          border-bottom: 1px solid var(--border-light);
        }
        .team-image-box img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-card:hover .team-image-box img {
          transform: scale(1.08);
        }
        .team-info {
          padding: 28px 24px;
          text-align: center;
        }
        .team-name {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0 0 6px 0;
        }
        .team-role {
          font-family: 'Mulish', sans-serif;
          font-size: 0.82rem;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── Action/Contact Section ── */
        .action-section {
          padding: 110px 24px;
          background: #ffffff;
          position: relative;
        }
        @media (max-width: 767px) {
          .action-section {
            padding: 70px 16px;
          }
        }
        .action-box {
          background: #0c0c0d;
          border-radius: 20px;
          padding: 72px 64px;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.04);
        }
        @media (max-width: 1023px) {
          .action-box {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 48px 32px;
          }
        }
        .action-box::before {
          content: '';
          position: absolute;
          top: 0; right: 0; width: 45%; height: 100%;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, transparent 100%);
          transform: skewX(-15deg) translateX(15%);
          pointer-events: none;
        }
        .action-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 2;
        }
        .action-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.8vw, 3rem);
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
        }
        .action-desc {
          font-family: 'Mulish', sans-serif;
          font-size: 1rem;
          color: #a1a1aa;
          line-height: 1.65;
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
          gap: 16px;
        }
        .action-contact-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
          padding: 18px 24px;
          transition: background 0.3s, border-color 0.3s;
        }
        .action-contact-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(249, 115, 22, 0.2);
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
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .action-contact-value {
          font-size: 1rem;
          color: #ffffff;
          font-weight: 500;
          margin-top: 2px;
        }
        .action-contact-value a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .action-contact-value a:hover {
          color: var(--accent);
        }

        /* ── Button Overlays ── */
        .btn-primary {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: var(--accent);
          border: none;
          padding: 15px 36px;
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
          <div className="hero-dots" />
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

        {/* ── Company Overview Section (Dark Mode Alternating block) ── */}
        <section className="overview-section">
          <div className="home-container">
            <div className="overview-grid">
              
              {/* Left – Blueprint Visual Box */}
              <div className="overview-image">
                <div className="overview-graphics">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v18H3V3z" />
                  </svg>
                  <span>Blueprint Design Spec</span>
                </div>
              </div>

              {/* Right – Text Details */}
              <div className="overview-content">
                <p className="section-tag">Who We Are</p>
                <h2 className="section-title">Company Overview</h2>
                <p className="hero-desc">
                  Dev Earth Movers provides professional earthmoving, excavation, site development, land leveling, trenching, and construction equipment services for construction and infrastructure projects.
                </p>
                <p className="overview-text">
                  Our fleet of heavy equipment and experienced operators ensure that every project is completed safely, on time, and to precise technical specifications. Whether you require machinery rentals or end-to-end site development support, we deliver solutions engineered to construct the future.
                </p>
                <Link href="/about" className="btn-primary" style={{ marginTop: "12px", background: "#ffffff", color: "#000000" }}>
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

        {/* ── Team Section (With photography generated) ── */}
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
              
              {/* Member 1 – Rajesh Kumar */}
              <div className="team-card">
                <div className="team-image-box">
                  <Image
                    src="/team_member_1.png"
                    alt="Rajesh Kumar - Senior Excavation Manager"
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 30vw"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Rajesh Kumar</h3>
                  <span className="team-role">Senior Excavation Manager</span>
                </div>
              </div>

              {/* Member 2 – Sneha Sharma */}
              <div className="team-card">
                <div className="team-image-box">
                  <Image
                    src="/team_member_2.png"
                    alt="Sneha Sharma - Site Project Engineer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 30vw"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Sneha Sharma</h3>
                  <span className="team-role">Site Project Engineer</span>
                </div>
              </div>

              {/* Member 3 – Vikram Singh */}
              <div className="team-card">
                <div className="team-image-box">
                  <Image
                    src="/team_member_3.png"
                    alt="Vikram Singh - Equipment Operations Director"
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 30vw"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Vikram Singh</h3>
                  <span className="team-role">Equipment Operations Director</span>
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
