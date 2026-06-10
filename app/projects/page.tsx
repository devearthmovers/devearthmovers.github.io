"use client";

import Link from "next/link";
import Image from "next/image";

/* ─── Same style block as home page ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  .fd { font-family: 'Barlow Condensed', sans-serif; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation: marquee 32s linear infinite; display: inline-flex; white-space: nowrap; will-change: transform; }
  @media (prefers-reduced-motion: reduce) { .marquee { animation:none !important; } }
`;

/* ─── Icon atoms (same as home) ─── */
const ArrowIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" />
  </svg>
);

const LocationIcon = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

/* Reusable eyebrow label — identical to home */
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="fd font-bold text-orange-500 text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-3">
    {children}
  </p>
);

/* ─── Project data from actual documents ─── */
const projects = [
  {
    id: "01",
    img: "/service_excavation.png",
    client: "Decor Design",
    clientDetail: "Mrs. Tanya",
    title: "IDS HQ — Airport Police Line",
    location: "Mehram Nagar, New Delhi – 110037",
    date: "May 2026",
    tags: ["Excavation", "Breaker Work"],
    metric: "Completed",
    metricLabel: "Status",
    desc: "Poclain breaker/excavator deployment with certified operators at IDS Headquarters Site, adjacent to NSG Headquarters near Terminal 1 Airport. All foundation breaking, soil shifting, and site-prep executed to engineering drawings.",
    highlight: "Near Terminal 1, IGI Airport",
  },
  {
    id: "02",
    img: "/service_trenching.png",
    client: "RIVA POWER TECH",
    clientDetail: "Mr. Vijay Thakur",
    title: "Delhi Jal Board — Pump House",
    location: "Patel Nagar, Delhi – 110008",
    date: "2025–2026",
    tags: ["Hard Rock Excavation", "Disposal"],
    metric: "Hard Rock",
    metricLabel: "Excavation Type",
    desc: "Loading and disposal of hard rock and soft rock at Delhi Jal Board pump house site. All excavated material retained by Dev Earth Movers; hyva measurement with 50% void deduction applied on hard rock; final billing on actual pit measurement.",
    highlight: "Delhi Jal Board Site",
  },
  {
    id: "03",
    img: "/service_leveling.png",
    client: "IMMOBLO Properties Pvt. Ltd.",
    clientDetail: "North West Delhi",
    title: "Keshav Puram Residential Site",
    location: "Keshav Puram, North West Delhi – 110035",
    date: "23 May 2026",
    tags: ["Soil Excavation", "Site Development"],
    metric: "18,182 cum",
    metricLabel: "Volume Excavated",
    desc: "Large-scale soil excavation spanning 18,182 cubic metres for a residential development by Immoblo Properties. Full GST-compliant invoicing issued (Invoice No. 001). Work completed on schedule with site-verified pit measurements.",
    highlight: "Keshav Puram, North West Delhi",
  },
];

const stats = [
  ["3+",   "Active Clients"],
  ["250+", "Projects Completed"],
  ["50+",  "Fleet Units"],
  ["15+",  "Years Active"],
];

const tickers = [
  "IDS HQ Airport Police Line",
  "Delhi Jal Board Patel Nagar",
  "Keshav Puram Residential",
  "Hard Rock Excavation",
  "Soil Excavation 18K cum",
  "CPWD Certified Operators",
  "GPS Tracked Fleet",
];

/* ════════════════════════════════════════════════════ */
export default function ProjectsPage() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="bg-neutral-50 overflow-x-hidden antialiased">

        {/* ════════ HERO ════════ */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">

            {/* Top rule */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/[0.07]" />
              <Label>Portfolio</Label>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            {/* Headline split */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <h1
                className="fd font-black leading-[0.88] tracking-tight text-white"
                style={{ fontSize: "clamp(3.8rem, 12vw, 7.5rem)" }}
              >
                OUR<br />
                <span className="text-orange-500 italic">PROJECTS.</span>
              </h1>

              <div className="lg:max-w-xs lg:pb-2">
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Every project is a commitment — to schedule, to specification, and to the client who trusted us with their ground.
                </p>
                <Link
                  href="/contact"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  GET A QUOTE <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden">
              {stats.map(([n, l], i) => (
                <div
                  key={l}
                  className={`py-6 text-center ${i > 0 ? "border-l border-white/[0.07]" : ""} ${i >= 2 ? "border-t border-white/[0.07] sm:border-t-0" : ""}`}
                >
                  <div className="fd font-black text-2xl sm:text-3xl text-white leading-none mb-1">{n}</div>
                  <div className="text-white/60 text-[9px] tracking-[0.14em] uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TICKER ════════ */}
        <div className="bg-orange-600 py-4 sm:py-5 overflow-hidden">
          <div className="marquee">
            {[...tickers, ...tickers].map((t, i) => (
              <span
                key={i}
                className="fd font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-5 px-6"
              >
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ════════ PROJECTS — FEATURED CARDS ════════ */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
              <div>
                <Label>Completed Work</Label>
                <h2 className="fd font-black text-[#0a0a0a] text-4xl sm:text-5xl leading-none">
                  RECENT PROJECTS
                </h2>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm sm:max-w-[220px] sm:text-right leading-relaxed">
                Verified contracts, invoices &amp; site deliverables.
              </p>
            </div>

            {/* Project cards — one per row, full bleed */}
            <div className="flex flex-col gap-6">
              {projects.map((p, idx) => (
                <article
                  key={p.id}
                  className="group bg-white border border-stone-100 rounded-3xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50/60 transition-all duration-300 grid grid-cols-1 md:grid-cols-5"
                >
                  {/* ── Image (2 cols) ── */}
                  <div
                    className={`relative h-60 md:h-auto min-h-[260px] md:col-span-2 overflow-hidden bg-neutral-100 ${idx % 2 !== 0 ? "md:order-last" : ""}`}
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/80 via-transparent to-transparent md:opacity-0 opacity-100" />

                    {/* Ghost number */}
                    <span
                      className="fd pointer-events-none select-none absolute bottom-2 right-3 font-black leading-none text-black/[0.07]"
                      style={{ fontSize: "5rem" }}
                    >
                      {p.id}
                    </span>

                    {/* Metric badge */}
                    <div className="absolute top-4 left-4 bg-orange-600 text-white rounded-xl px-3 py-2 shadow-lg">
                      <div className="fd font-black text-lg leading-none">{p.metric}</div>
                      <div className="text-white/70 text-[9px] tracking-wide mt-0.5">{p.metricLabel}</div>
                    </div>
                  </div>

                  {/* ── Content (3 cols) ── */}
                  <div className="relative p-7 sm:p-9 md:col-span-3 flex flex-col justify-center overflow-hidden">
                    {/* Watermark */}
                    <span
                      className="fd pointer-events-none select-none absolute -bottom-2 -right-1 font-black leading-none text-stone-100 group-hover:text-orange-50 transition-colors duration-500"
                      style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
                    >
                      {p.id}
                    </span>

                    <div className="relative z-10">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="fd font-bold text-[9px] tracking-[0.18em] uppercase bg-orange-50 text-orange-600 border border-orange-100 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="fd font-black text-[#0a0a0a] leading-[0.95] mb-3 group-hover:text-orange-600 transition-colors duration-200"
                        style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
                      >
                        {p.title}
                      </h3>

                      {/* Client + location + date row */}
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
                        <span className="text-[11px] text-stone-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          <span className="font-medium text-stone-600">{p.client}</span>
                          {p.clientDetail && <span className="text-stone-400">— {p.clientDetail}</span>}
                        </span>
                        <span className="text-[11px] text-stone-400 flex items-center gap-1.5">
                          <LocationIcon />
                          {p.location}
                        </span>
                        <span className="text-[11px] text-stone-400 flex items-center gap-1.5">
                          <CalendarIcon />
                          {p.date}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-10 h-0.5 bg-orange-600 mb-4" />

                      {/* Description */}
                      <p className="text-stone-400 text-sm leading-relaxed mb-5 max-w-lg">{p.desc}</p>

                      {/* Highlight chip */}
                      <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="fd font-bold text-[10px] tracking-[0.15em] uppercase text-stone-500">{p.highlight}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ WORK EVIDENCE STRIP ════════ */}
        <section className="bg-[#0a0a0a] py-16 sm:py-20 border-y border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="text-center mb-12">
              <Label>Verified Credentials</Label>
              <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none">
                BACKED BY PAPERWORK
              </h2>
              <p className="text-white/60 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                Every project carries GST-compliant invoicing, signed work orders, and site-verified measurements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  n: "01",
                  title: "Signed Work Orders",
                  desc: "Detailed scope, unit rates, and terms signed before any machine arrives on site.",
                  svgPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  n: "02",
                  title: "GST Tax Invoices",
                  desc: "GSTIN-verified invoices with HSN codes, CGST & SGST breakdowns for every completed project.",
                  svgPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                },
                {
                  n: "03",
                  title: "Site Measurement Proof",
                  desc: "Final billing based on actual pit measurement — hyva counts and void deductions documented.",
                  svgPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="group bg-[#111111] border border-white/[0.06] rounded-2xl p-7 hover:border-orange-600/30 transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Ghost number */}
                  <span
                    className="fd pointer-events-none select-none absolute right-3 bottom-2 font-black leading-none text-white/[0.04]"
                    style={{ fontSize: "4.5rem" }}
                  >
                    {item.n}
                  </span>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-white/40 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 relative z-10">
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
                    </svg>
                  </div>
                  <h3 className="fd font-black text-white text-xl mb-2 relative z-10">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CLIENTS MARQUEE ════════ */}
        <section className="py-12 sm:py-14 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center mb-8">
            <Label>Clients We've Served</Label>
          </div>
          <div className="overflow-hidden">
            <div className="marquee" style={{ animationDuration: "22s" }}>
              {[
                "Decor Design",
                "RIVA POWER TECH",
                "IMMOBLO Properties Pvt. Ltd.",
                "Delhi Jal Board",
                "NSG Headquarters Site",
                "IDS Headquarters",
                "Decor Design",
                "RIVA POWER TECH",
                "IMMOBLO Properties Pvt. Ltd.",
                "Delhi Jal Board",
                "NSG Headquarters Site",
                "IDS Headquarters",
              ].map((name, i) => (
                <span
                  key={i}
                  className="fd font-black text-stone-200 hover:text-orange-400 transition-colors text-lg sm:text-xl tracking-[0.15em] uppercase inline-flex items-center gap-6 px-8"
                >
                  {name}
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300 flex-shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA (same as home) ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden px-8 sm:px-14 py-14 sm:py-16">
            {/* Dot texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            {/* Orange side glow */}
            <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent" />
            {/* Right accent stripe */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-1 bg-orange-600" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2
                  className="fd font-black text-white leading-[0.93] mb-3"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  WANT YOUR PROJECT<br />
                  <span className="text-orange-500">DONE RIGHT?</span>
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                  Free site quote, equipment hire, or custom consulting. We respond within 2 business hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
                >
                  FREE QUOTE <ArrowIcon />
                </Link>
                <Link
                  href="/services"
                  className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-white text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
                >
                  ALL SERVICES
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}