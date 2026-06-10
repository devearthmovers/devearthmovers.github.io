"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(30);
  const pathname = usePathname();
  const topbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (topbarRef.current) {
        setTopbarHeight(topbarRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (mobileMenuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --accent: #f97316;
          --accent-dark: #c2550f;
          --surface: #0c0c0d;
          --surface-mid: #ffffff;
          --surface-border: rgba(0, 0, 0, 0.08);
          --topbar-border: rgba(255, 255, 255, 0.08);
          --text-primary: #18181b;
          --text-muted: #71717a;
        }

        /* ── Topbar ── */
        .hdr-topbar {
          background: var(--surface);
          border-bottom: 1px solid var(--topbar-border);
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          position: relative;
          z-index: 102;
        }
        .hdr-topbar a,
        .hdr-topbar span {
          color: #a1a1aa;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .hdr-topbar a:hover { color: var(--accent); }
        .hdr-topbar .pipe {
          width: 1px; height: 13px;
          background: var(--topbar-border);
          flex-shrink: 0;
        }

        /* ── Sticky shell ── */
        .hdr-shell {
          position: sticky;
          top: 0;
          z-index: 110;
          background: var(--surface-mid);
          border-bottom: 1px solid var(--surface-border);
          transition: background 0.35s ease, box-shadow 0.35s ease;
        }
        .hdr-shell.menu-open {
          position: fixed;
          top: var(--menu-top, 0px);
          width: 100%;
        }
        .hdr-shell.scrolled {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.08);
        }
        /* Accent rule at very bottom of header */
        .hdr-shell::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent) 30%, var(--accent-dark) 70%, transparent);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .hdr-shell.scrolled::after { opacity: 1; }

        /* ── Inner nav row ── */
        .hdr-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 96px;
          gap: 32px;
        }
        @media (max-width: 1023px) { .hdr-nav { height: 76px; padding: 0 20px; } }

        /* ── Desktop nav links ── */
        @media (min-width: 1024px) {
          .hdr-links {
            display: flex;
            align-items: center;
            gap: 36px;
          }
        }
        .hdr-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #71717a;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .hdr-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; right: 50%;
          height: 1.5px;
          background: var(--accent);
          transition: left 0.28s cubic-bezier(.4,0,.2,1), right 0.28s cubic-bezier(.4,0,.2,1);
        }
        .hdr-link:hover {
          color: #18181b;
        }
        .hdr-link.active {
          color: var(--accent);
        }
        .hdr-link:hover::after,
        .hdr-link.active::after { left: 0; right: 0; }

        /* ── Hamburger ── */
        .hdr-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px; height: 36px;
          padding: 4px;
          background: none; border: none;
          cursor: pointer;
          flex-shrink: 0;
        }
        @media (max-width: 1023px) {
          .hdr-burger {
            display: flex;
          }
        }
        .hdr-burger span {
          display: block;
          height: 1.5px;
          background: #27272a;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, background 0.2s, width 0.2s;
        }
        .hdr-burger span:nth-child(1) { width: 100%; transform-origin: center; }
        .hdr-burger span:nth-child(2) { width: 60%; background: var(--accent); }
        .hdr-burger span:nth-child(3) { width: 80%; transform-origin: center; }
        .hdr-burger:hover span { background: #000000; }
        .hdr-burger:hover span:nth-child(2) { width: 100%; background: var(--accent); }
        
        .hdr-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); width: 100%; background: #27272a; }
        .hdr-burger.open span:nth-child(2) { opacity: 0; width: 0; }
        .hdr-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); width: 100%; background: #27272a; }

        /* ── Mobile panel ── */
        .mob-backdrop {
          position: fixed;
          left: 0; right: 0; bottom: 0;
          z-index: 100;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0s 0.3s;
        }
        .mob-backdrop.open {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s ease, visibility 0s 0s;
        }
        .mob-panel {
          position: fixed;
          right: 0; bottom: 0;
          width: 60vw;
          max-width: 320px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          z-index: 101;
          border-left: 1px solid var(--surface-border);
          transform: translateX(100%);
          visibility: hidden;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s 0.38s;
          padding-top: 76px; /* Matches hdr-nav height on mobile */
        }
        .mob-panel.open {
          transform: translateX(0);
          visibility: visible;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s 0s;
        }

        .mob-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px 28px 0;
          gap: 4px;
        }
        .mob-nav-item {
          display: flex;
          align-items: baseline;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          opacity: 0;
          transform: translateY(18px);
          transition: padding-left 0.2s ease, opacity 0.4s cubic-bezier(0.4,0,0.2,1) var(--delay, 0s), transform 0.4s cubic-bezier(0.4,0,0.2,1) var(--delay, 0s);
        }
        .mob-panel.open .mob-nav-item {
          opacity: 1;
          transform: translateY(0);
        }
        .mob-nav-item:hover { padding-left: 8px; }
        .mob-nav-item:last-child { border-bottom: none; }
        .mob-idx {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.06em;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .mob-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(1.8rem, 6vw, 2.4rem);
          line-height: 1;
          color: #52525b;
          transition: color 0.2s;
          letter-spacing: 0.02em;
        }
        .mob-nav-item:hover .mob-label { color: #18181b; }
        .mob-nav-item.active .mob-label { color: var(--accent); }

        .mob-footer {
          padding: 24px 28px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.4s cubic-bezier(0.4,0,0.2,1) var(--delay, 0s), transform 0.4s cubic-bezier(0.4,0,0.2,1) var(--delay, 0s);
        }
        .mob-panel.open .mob-footer {
          opacity: 1;
          transform: translateY(0);
        }
        .mob-contacts {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mob-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: #71717a;
        }
        .mob-contact-row svg { color: var(--accent); flex-shrink: 0; }
        .mob-contact-row a {
          color: #27272a;
          transition: color 0.2s;
        }
        .mob-contact-row a:hover { color: var(--accent); }
      `}</style>

      {/* ── Top Info Bar ── */}
      <div className="hdr-topbar" ref={topbarRef}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "6px 32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px 20px",
          }}
        >
          {/* Left – phones */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="tel:9599688718">
              <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              9599688718
            </a>
            <span className="pipe" />
            <a href="tel:9205312697">9205312697</a>
          </div>

          {/* Right – email */}
          <a href="mailto:devearthmovers9599@gmail.com">
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            devearthmovers9599@gmail.com
          </a>
        </div>
      </div>

      {/* ── Main Header ── */}
      {mobileMenuOpen && <div style={{ height: 76 }} className="lg:hidden" />}
      <header 
        className={`hdr-shell${scrolled ? " scrolled" : ""}${mobileMenuOpen ? " menu-open" : ""}`}
        style={mobileMenuOpen ? { '--menu-top': scrolled ? '0px' : `${topbarHeight}px` } as any : undefined}
      >
        <nav className="hdr-nav" aria-label="Main navigation">

          {/* Logo */}
          <Link href="/" aria-label="Dev Earth Movers – Home" className="relative flex-shrink-0 flex items-center" style={{ width: '140px', height: '66px' }}>
            <img
              src="/logo_orange.png"
              alt="Dev Earth Movers"
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                width: '90px',
                height: '90px',
                maxWidth: 'none',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hdr-links hidden lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hdr-link${pathname === item.href ? " active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
            <Link href="/contact" className="hidden lg:inline-flex items-center justify-center font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full transition-colors gap-2 uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Get a Quote <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
            </Link>

            <button
              type="button"
              className={`hdr-burger lg:hidden ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      <>
        <div
          className={`mob-backdrop lg:hidden ${mobileMenuOpen ? 'open' : ''}`}
          style={{
            top: scrolled ? "0px" : `${topbarHeight}px`,
            touchAction: "none"
          }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
          onTouchMove={(e) => e.preventDefault()}
        />

        <div
          className={`mob-panel lg:hidden ${mobileMenuOpen ? 'open' : ''}`}
          style={{
            top: scrolled ? "0px" : `${topbarHeight}px`,
            touchAction: "none"
          }}
          role="dialog"
          aria-modal={mobileMenuOpen}
          aria-label="Navigation"
          onTouchMove={(e) => e.preventDefault()}
        >

            {/* Nav items */}
            <nav className="mob-nav">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mob-nav-item${pathname === item.href ? " active" : ""}`}
                  style={{ '--delay': mobileMenuOpen ? `${0.06 + i * 0.055}s` : '0s' } as any}
                >
                  <span className="mob-idx">0{i + 1}</span>
                  <span className="mob-label">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Panel footer */}
            <div className="mob-footer" style={{ '--delay': mobileMenuOpen ? '0.35s' : '0s' } as any}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-4 rounded-full transition-colors gap-2 uppercase text-center w-full"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
              </Link>
            </div>
        </div>
      </>
    </>
  );
}