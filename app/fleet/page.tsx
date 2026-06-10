"use client";

import Link from "next/link";
import Image from "next/image";

/* ─── Same style block as home, services & projects pages ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  .fd { font-family: 'Barlow Condensed', sans-serif; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation: marquee 32s linear infinite; display: inline-flex; white-space: nowrap; will-change: transform; }
  @media (prefers-reduced-motion: reduce) { .marquee { animation:none !important; } }
`;

/* ─── Icon atoms ─── */
const ArrowIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" fill="none" stroke="#ea580c" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0 mt-[2px]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ─── Reusable eyebrow label ─── */
const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`fd font-bold text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-3 ${light ? "text-orange-400" : "text-orange-500"}`}>
    {children}
  </p>
);

/* ─── Fleet Machinery Data ─── */
const fleet = [
  {
    id: "01",
    name: "Tata Hitachi EX200 / EX210 (Poclain)",
    img: "/fleet_poclain.png",
    category: "Heavy Excavation",
    tagline: "Unmatched digging power for bulk earthworks and rock breaking.",
    specs: [
      { label: "Operating Weight", value: "20,000 kg (20 Tons)" },
      { label: "Bucket Capacity", value: "1.0 m³" },
      { label: "Max Digging Depth", value: "6.5 meters" },
      { label: "Attachments", value: "Hydraulic Breaker, Clamshell Bucket" },
    ],
    highlights: [
      "Excellent efficiency in hard rock and granite breaking",
      "GPS-equipped for precise contour excavation and grade checks",
      "Dispatched with a CPWD-certified operator with 5+ years experience",
      "Optimized for high-volume earth loading into tipper trucks",
    ],
    modelCode: "EX200-LC",
  },
  {
    id: "02",
    name: "JCB 3DX Super Backhoe Loader",
    img: "/fleet_jcb.png",
    category: "Versatile Loader & Excavator",
    tagline: "The backbone of site development, trenching, and utility works.",
    specs: [
      { label: "Engine Power", value: "76 HP @ 2200 RPM" },
      { label: "Loader Bucket Capacity", value: "1.1 m³" },
      { label: "Backhoe Bucket Capacity", value: "0.26 m³" },
      { label: "Max Digging Depth", value: "4.77 meters" },
    ],
    highlights: [
      "Extremely mobile, ideal for narrow city lanes in Delhi NCR",
      "Dual purpose: front loading shovel and rear trenching arm",
      "Fitted with rock breaker or auger attachment on request",
      "Perfect for sand backfilling, levelling, and foundation cleanup",
    ],
    modelCode: "JCB 3DX Super",
  },
  {
    id: "03",
    name: "Tata Signa / Ashok Leyland Dumper (Hyva)",
    img: "/fleet_hyva.png",
    category: "Bulk Material Transport",
    tagline: "High-capacity tipper trucks for swift loading, disposal, and hauling.",
    specs: [
      { label: "Payload Capacity", value: "16 m³ (Approx. 25 Tons)" },
      { label: "Wheel Configuration", value: "10-Wheeler (6x4)" },
      { label: "Hydraulic System", value: "Hyva Front-End Tipping Cylinder" },
      { label: "Gross Vehicle Weight", value: "28,000 kg" },
    ],
    highlights: [
      "High-tensile steel tipping body designed to carry hard rock debris",
      "Real-time GPS tracking with live dispatch status on customer portal",
      "Compliant with Delhi NCR commercial vehicle entry guidelines",
      "Fast tipping speed reduces cycle times and improves productivity",
    ],
    modelCode: "TATA 2823.K",
  },
  {
    id: "04",
    name: "Hydraulic Bored Piling Rig",
    img: "/fleet_piling.png",
    category: "Deep Foundation Piling",
    tagline: "Precision deep-drilling for bridge piers, metros, and heavy structures.",
    specs: [
      { label: "Max Drilling Diameter", value: "1500 mm" },
      { label: "Max Drilling Depth", value: "40 meters" },
      { label: "Max Rotary Torque", value: "135 kNm" },
      { label: "Carrier Mounting", value: "Heavy Crawler Undercarriage" },
    ],
    highlights: [
      "Bored cast-in-situ piling for commercial basements and bridge footings",
      "Works strictly to structural engineering drawings and survey guides",
      "Highly stable crawler platform for uneven or wet excavation soil",
      "Regularly certified and pressure-tested hydraulic cables & augers",
    ],
    modelCode: "SANY SR155 / MAIT HR120",
  },
];

const stats = [
  ["50+", "Fleet Units"],
  ["100%", "GPS-Tracked"],
  ["CPWD", "Certified Rigs"],
  ["24/7", "Site Support"],
];

const tickers = [
  "Tata Hitachi EX200 Poclain",
  "JCB 3DX Super Backhoe",
  "Tata Signa 2823 Hyva Dumper",
  "Sany SR155 Foundation Piling Rig",
  "CPWD Certified Operators",
  "GPS Tracked Logistics",
  "24/7 Site Dispatch",
];

export default function FleetPage() {
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
              <Label light>Our Fleet & Equipment</Label>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            {/* Headline split */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <h1
                className="fd font-black leading-[0.88] tracking-tight text-white"
                style={{ fontSize: "clamp(3.8rem, 12vw, 7.5rem)" }}
              >
                OUR<br />
                <span className="text-orange-500 italic">MACHINES.</span>
              </h1>

              <div className="lg:max-w-xs lg:pb-2">
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  High-performance machinery, certified operators, and robust maintenance protocols. Available for short or long-term contracts.
                </p>
                <Link
                  href="/contact"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  HIRE MACHINERY <ArrowIcon />
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

        {/* ════════ FLEET LIST ════════ */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
              <div>
                <Label>Heavy Fleet</Label>
                <h2 className="fd font-black text-[#0a0a0a] text-4xl sm:text-5xl leading-none">
                  AVAILABLE MACHINERY
                </h2>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm sm:max-w-[240px] sm:text-right leading-relaxed">
                Regularly-serviced, safety-inspected, and fully-insured machinery for instant mobilization.
              </p>
            </div>

            {/* Alternating Machinery Rows */}
            <div className="flex flex-col gap-8">
              {fleet.map((item, idx) => (
                <article
                  key={item.id}
                  className="group bg-white border border-stone-100 rounded-3xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50/60 transition-all duration-300 grid grid-cols-1 md:grid-cols-5"
                >
                  
                  {/* Image (2 columns) */}
                  <div
                    className={`relative h-64 md:h-auto min-h-[300px] md:col-span-2 overflow-hidden bg-neutral-100 ${idx % 2 !== 0 ? "md:order-last" : ""}`}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/80 via-transparent to-transparent md:opacity-0 opacity-100" />
                    
                    {/* Model Watermark */}
                    <span
                      className="fd pointer-events-none select-none absolute bottom-2 right-3 font-black leading-none text-black/[0.06]"
                      style={{ fontSize: "3.5rem" }}
                    >
                      {item.modelCode}
                    </span>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-orange-600 text-white rounded-xl px-3 py-2 shadow-lg">
                      <div className="fd font-black text-xs tracking-wider leading-none uppercase">{item.category}</div>
                    </div>
                  </div>

                  {/* Content (3 columns) */}
                  <div className="relative p-7 sm:p-9 md:col-span-3 flex flex-col justify-center overflow-hidden">
                    {/* Watermark Index */}
                    <span
                      className="fd pointer-events-none select-none absolute -bottom-2 -right-1 font-black leading-none text-stone-100 group-hover:text-orange-50 transition-colors duration-500"
                      style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
                    >
                      0{item.id}
                    </span>

                    <div className="relative z-10">
                      
                      {/* Name */}
                      <h3
                        className="fd font-black text-[#0a0a0a] leading-[0.95] mb-2 group-hover:text-orange-600 transition-colors duration-200"
                        style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
                      >
                        {item.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-orange-500 text-xs fd font-bold tracking-[0.1em] uppercase mb-4 italic">
                        {item.tagline}
                      </p>

                      {/* Specifications Table */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-b border-stone-100 py-3.5 mb-5 max-w-lg">
                        {item.specs.map((spec) => (
                          <div key={spec.label} className="text-xs">
                            <span className="text-stone-400 block uppercase tracking-wider mb-0.5">{spec.label}</span>
                            <span className="font-semibold text-stone-800">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-col gap-2 mb-6 max-w-lg">
                        {item.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2.5">
                            <CheckIcon />
                            <span className="text-stone-500 text-xs sm:text-sm leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Call-to-action button */}
                      <Link
                        href="/contact"
                        className="fd font-black tracking-widest text-[10px] sm:text-xs bg-[#0a0a0a] hover:bg-orange-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors duration-300"
                      >
                        ENQUIRE HIRE <ArrowIcon />
                      </Link>

                    </div>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ════════ SAFETY STANDARDS STRIP ════════ */}
        <section className="bg-[#0a0a0a] py-16 sm:py-20 border-y border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="text-center mb-12">
              <Label light>Fleet Compliance</Label>
              <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none">
                SAFETY & RELIABILITY FIRST
              </h2>
              <p className="text-white/60 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                Our fleet is subject to strict inspections and checks before and during every single project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  n: "01",
                  title: "GPS-Tracked Dispatch",
                  desc: "Every excavator and tipper truck has active GPS tracking for real-time site productivity and route compliance.",
                  svgPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                },
                {
                  n: "02",
                  title: "CPWD-Certified Operators",
                  desc: "We do not hire raw operators. Every driver on our team has certified heavy equipment licenses and CPWD safety clearance.",
                  svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  n: "03",
                  title: "Preventive Maintenance",
                  desc: "Zero down-time. Our internal hydraulic mechanics service each machine every 250 operating hours.",
                  svgPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                },
              ].map((item) => (
                <div
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

        {/* ════════ CTA ════════ */}
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
                  NEED HEAVY EQUIPMENT<br />
                  <span className="text-orange-500">FOR YOUR SITE?</span>
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                  Available for rent or contract hire in Delhi NCR. Get a quote within 2 business hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
                >
                  GET A QUOTE <ArrowIcon />
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
