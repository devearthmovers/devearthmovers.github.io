"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
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
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Mulish:wght@300;400;500;600&display=swap');

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
          font-family: 'Mulish', sans-serif;
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
          z-index: 50;
          background: var(--surface-mid);
          border-bottom: 1px solid var(--surface-border);
          transition: background 0.35s ease, box-shadow 0.35s ease;
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
          height: 76px;
          gap: 32px;
        }
        @media (max-width: 1023px) { .hdr-nav { height: 64px; padding: 0 20px; } }

        /* ── Desktop nav links ── */
        @media (min-width: 1024px) {
          .hdr-links {
            display: flex;
            align-items: center;
            gap: 36px;
          }
        }
        .hdr-link {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
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

        /* ── CTA Button ── */
        .hdr-cta {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: var(--accent);
          border: none;
          padding: 11px 26px;
          position: relative;
          overflow: hidden;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          transition: background 0.25s;
          cursor: pointer;
          white-space: nowrap;
        }
        .hdr-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-110%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .hdr-cta:hover { background: var(--accent-dark); }
        .hdr-cta:hover::before { transform: translateX(110%) skewX(-15deg); }

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
          transition: background 0.2s, width 0.2s;
        }
        .hdr-burger span:nth-child(1) { width: 100%; }
        .hdr-burger span:nth-child(2) { width: 60%; background: var(--accent); }
        .hdr-burger span:nth-child(3) { width: 80%; }
        .hdr-burger:hover span { background: #000000; }
        .hdr-burger:hover span:nth-child(2) { width: 100%; background: var(--accent); }

        /* ── Mobile panel ── */
        .mob-backdrop {
          position: fixed;
          left: 0; right: 0; bottom: 0;
          z-index: 100;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: fadeInBd 0.3s ease forwards;
        }
        @keyframes fadeInBd {
          from { opacity: 0; } to { opacity: 1; }
        }
        .mob-panel {
          position: fixed;
          right: 0; bottom: 0;
          width: min(420px, 100vw);
          background: #ffffff;
          display: flex;
          flex-direction: column;
          animation: slidePanel 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          z-index: 101;
          border-left: 1px solid var(--surface-border);
        }
        @keyframes slidePanel {
          from { transform: translateX(100%); }
          to  { transform: translateX(0); }
        }

        .mob-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 64px;
          border-bottom: 1px solid var(--surface-border);
        }
        .mob-close {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 50%;
          color: #71717a;
          background: none;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .mob-close:hover { border-color: var(--accent); color: #18181b; }

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
          animation: fadeUp 0.4s cubic-bezier(0.4,0,0.2,1) both;
          transition: padding-left 0.2s ease;
        }
        .mob-nav-item:hover { padding-left: 8px; }
        .mob-nav-item:last-child { border-bottom: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mob-idx {
          font-family: 'Mulish', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.06em;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .mob-label {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 5vw, 2rem);
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
          animation: fadeUp 0.4s 0.35s cubic-bezier(0.4,0,0.2,1) both;
        }
        .mob-cta {
          display: block;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: var(--accent);
          padding: 14px 24px;
          text-align: center;
          border-radius: 3px;
          transition: background 0.2s;
        }
        .mob-cta:hover { background: var(--accent-dark); }
        .mob-contacts {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mob-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Mulish', sans-serif;
          font-size: 0.72rem;
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
      <header className={`hdr-shell${scrolled ? " scrolled" : ""}`}>
        <nav className="hdr-nav" aria-label="Main navigation">

          {/* Logo */}
          <Link href="/" aria-label="Dev Earth Movers – Home" style={{ flexShrink: 0, lineHeight: 0 }}>
            <Image
              src="/logo.png"
              alt="Dev Earth Movers"
              width={220}
              height={80}
              className="h-14 md:h-[60px] w-auto object-contain"
              priority
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
            <Link href="/contact" className="hdr-cta hidden lg:block">
              Get a Quote &rarr;
            </Link>

            <button
              type="button"
              className="hdr-burger lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <>
          <div
            className="mob-backdrop lg:hidden"
            style={{
              top: scrolled ? "0px" : `${topbarHeight}px`,
              touchAction: "none"
            }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
            onTouchMove={(e) => e.preventDefault()}
          />

          <div
            className="mob-panel lg:hidden"
            style={{
              top: scrolled ? "0px" : `${topbarHeight}px`,
              touchAction: "none"
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            onTouchMove={(e) => e.preventDefault()}
          >

            {/* Panel top */}
            <div className="mob-header">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ lineHeight: 0 }}>
                <Image
                  src="/logo.png"
                  alt="Dev Earth Movers"
                  width={170}
                  height={56}
                  className="h-11 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                className="mob-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="mob-nav">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mob-nav-item${pathname === item.href ? " active" : ""}`}
                  style={{ animationDelay: `${0.06 + i * 0.055}s` }}
                >
                  <span className="mob-idx">0{i + 1}</span>
                  <span className="mob-label">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Panel footer */}
            <div className="mob-footer">
              <Link
                href="/contact"
                className="mob-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote &rarr;
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}