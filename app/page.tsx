"use client";

import Link from "next/link";
import Image from "next/image";

/* ─── Minimal style block: only keyframes + font import ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  .fd { font-family: 'Barlow Condensed', sans-serif; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation: marquee 32s linear infinite; display: inline-flex; white-space: nowrap; will-change: transform; }
  @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  .bob { animation: bob 5.5s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) { .marquee,.bob { animation:none !important; } }
`;

/* ─── Icon atoms ─── */
const ArrowIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" fill="none" stroke="#ea580c" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* Reusable eyebrow label */
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="fd font-bold text-orange-500 text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-3">
    {children}
  </p>
);

/* ─── Page ─── */
export default function Home() {
  /* ── Data ── */
  const services = [
    { img: "/service_excavation.png", n: "01", title: "Earth Excavation",    desc: "Precision trenching, foundation digging, and large-scale soil displacement to exact specs." },
    { img: "/service_leveling.png",   n: "02", title: "Site Development",    desc: "Full clearing, grading, and levelling for safe, level structural foundations." },
    { img: "/service_jcb.png",        n: "03", title: "JCB & Equipment Hire",desc: "High-performance JCBs and crawler excavators for short- or long-term hire." },
    { img: "/service_trenching.png",  n: "04", title: "Trenching & Backfill",desc: "Deep utility trenching, pipe-laying, and compacted backfill done precisely." },
    { img: "/service_road.png",       n: "05", title: "Road Construction",   desc: "Sub-base prep, aggregate spreading, and precision grading for commercial roadways." },
    { img: "/service_equipment.png",  n: "06", title: "Equipment Logistics", desc: "Transport, operators, safety checks, and full support for every machine on site." },
    { img: "/service_demolition.png", n: "07", title: "Building Demolition", desc: "Safe, controlled structural demolition with complete site clearance and debris removal." },
    { img: "/service_piling.png",     n: "08", title: "Piling Services",     desc: "Heavy-duty foundation piling, sheet piling, and structural support for deep foundations." },
    { img: "/service_barricading.png",n: "09", title: "Barricading Work",    desc: "Secure, heavy metal barricading and site fencing for active construction safety." },
    { img: "/service_dewatering.png", n: "10", title: "Dewatering Services", desc: "High-capacity pumping and trench water management for dry, safe excavation sites." },
    { img: "/service_civil.png", n: "11", title: "Construction & Civil Engineering", desc: "End-to-end structural construction, concrete work, and comprehensive civil engineering solutions." },
  ];

  const pillars = [
    {
      n: "01", title: "Safety First",
      desc: "Every operator is CPWD-certified. Every machine GPS-tracked. Strict protocols on every site — no exceptions.",
      svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      n: "02", title: "On-Time Delivery",
      desc: "Our dispatch and fleet management are built to keep your project on schedule — every time, no excuses.",
      svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      n: "03", title: "Precision Results",
      desc: "We work to engineering drawings and deliver surfaces that pass survey on the very first check.",
      svgPath: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    },
  ];

  const team = [
    { img: "/Rohit_Founder.jpeg", imgPosition: "50% 50%", name: "Rohit Dev", role: "Founder & Director",  bio: "18 years of expertise in excavation management, site preparation, and foundation engineering across Delhi NCR." },
    { img: "/Ritik_Engineer.jpeg", imgPosition: "50% 20%", name: "Ritik Dev", role: "Engineering Lead",    bio: "Specialist in civil site design, structural levelling, and local government compliance standards." },
  ];

  const tickers = ["Earth Excavation", "Site Leveling", "Trenching & Backfill", "JCB Hire", "Road Preparation", "Excavator Rental", "Equipment Logistics", "Site Development", "Piling Services", "Barricading Work", "Dewatering Services"];

  const checks = [
    "Licensed & insured operators on every job",
    "GPS-equipped fleet with live dispatch tracking",
    "24 / 7 support for critical site operations",
    "CPWD safety compliance on every site",
  ];

  /* ── JSX ── */
  return (
    <>
      <style>{STYLES}</style>
      <div className="bg-neutral-50 overflow-x-hidden antialiased">

      

        {/* ════════ HERO ════════ */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 sm:py-16 lg:py-20">

              {/* Left — text */}
              <div>
                <Label>Delhi NCR's Trusted Earthmovers</Label>

                <h1 className="fd font-black leading-[0.88] tracking-tight mb-5"
                  style={{ fontSize: "clamp(3.8rem, 11vw, 6.5rem)" }}>
                  MOVING<br />
                  <span className="text-orange-500 italic">EARTH.</span><br />
                  BUILDING<br />
                  FUTURES.
                </h1>

                <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-7 max-w-sm">
                  Professional earthmoving, excavation, and heavy equipment rental — engineered for precision, built for scale.
                </p>

                {/* Buttons — properly sized on mobile */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link href="/contact"
                    className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    FREE QUOTE <ArrowIcon />
                  </Link>
                  <Link href="/services"
                    className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-orange-500 hover:text-orange-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    OUR SERVICES
                  </Link>
                </div>

                {/* ── Stats live INSIDE hero — no ticker overlap ── */}
                <div className="flex items-stretch border-t border-white/[0.08] pt-7">
                  {[["15+", "Years Active"], ["250+", "Projects Done"], ["50+", "Fleet Units"]].map(([n, l], i) => (
                    <div key={l}
                      className={`flex-1 text-center ${i > 0 ? "border-l border-white/[0.08]" : ""} px-2`}>
                      <div className="fd font-black text-2xl sm:text-3xl text-white leading-none mb-0.5">{n}</div>
                      <div className="text-white/30 text-[9px] sm:text-[10px] tracking-[0.12em] uppercase">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — image */}
              <div className="bob relative">
                {/* Main image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[3/4]">
                  <Image
                    src="/hero_excavator.png" alt="Heavy Excavator at work"
                    fill sizes="(max-width: 1024px) 100vw, 50vw" priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Floating satisfaction badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-orange-600 text-white rounded-2xl p-4 shadow-2xl z-10">
                  <div className="fd font-black text-3xl leading-none">100%</div>
                  <div className="text-white/75 text-[10px] tracking-wide mt-0.5">Satisfaction Rate</div>
                </div>

                {/* Dot-grid accent */}
                <div className="pointer-events-none absolute -top-3 -right-3 w-16 h-16 opacity-25"
                  style={{ backgroundImage: "radial-gradient(circle, #ea580c 1.5px, transparent 1.5px)", backgroundSize: "9px 9px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TICKER ════════ — cleanly below hero, no z-index conflict */}
        <div className="bg-orange-600 py-4 sm:py-5 overflow-hidden">
          <div className="marquee">
            {[...tickers, ...tickers].map((t, i) => (
              <span key={i} className="fd font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-5 px-6">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ════════ ABOUT ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Image collage */}
            <div className="relative h-64 sm:h-80 lg:h-[440px]">
              <div className="absolute top-0 left-0 w-[65%] h-[73%] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/service_excavation.png" alt="Excavation work" fill className="object-cover" sizes="30vw" />
              </div>
              <div className="absolute bottom-0 right-0 w-[52%] h-[57%] rounded-2xl overflow-hidden shadow-xl border-[3px] border-neutral-50">
                <Image src="/service_road.png" alt="Road construction" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="absolute top-[54%] left-[54%] z-10 bg-orange-600 text-white rounded-xl px-4 py-2.5 shadow-lg">
                <div className="fd font-black text-xl leading-none">250+</div>
                <div className="text-white/70 text-[10px] tracking-wide mt-0.5">Projects Done</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <Label>Who We Are</Label>
              <h2 className="fd font-black text-[#0a0a0a] leading-[0.93] mb-5 text-4xl sm:text-5xl">
                PRECISION-<br />ENGINEERED<br />GROUNDWORK
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-3">
                With over 15 years in Delhi NCR's construction industry, Dev Earth Movers has built its reputation on one principle: every cubic metre of earth moved must be moved right.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed mb-7">
                Our GPS-equipped fleet and certified operators deliver excavation, levelling, and site development that holds to schedule and to spec — every time.
              </p>

              {/* Checklist */}
              <div className="flex flex-col gap-2 mb-8">
                {checks.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-neutral-100 rounded-xl px-4 py-3">
                    <CheckIcon />
                    <span className="text-xs sm:text-sm text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about"
                className="fd font-black tracking-widest text-xs bg-[#0a0a0a] hover:bg-orange-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300">
                ABOUT US <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ SERVICES ════════ */}
        <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
              <div>
                <Label>Core Capabilities</Label>
                <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none">OUR SERVICES</h2>
              </div>
              <p className="text-white/30 text-xs sm:text-sm leading-relaxed sm:text-right sm:max-w-[240px]">
                Commercial, residential & infrastructure solutions across Delhi NCR.
              </p>
            </div>

            {/* 1-col mobile → 2-col tablet → 3-col desktop */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <Link key={s.n} href="/services"
                  className="group block bg-[#111111] border border-white/[0.06] rounded-xl overflow-hidden hover:border-orange-600/30 transition-colors duration-300">
                  {/* Card image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-black/50">
                    <Image src={s.img} alt={s.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
                    {/* Ghost number watermark */}
                    <span className="fd pointer-events-none select-none absolute top-2 right-3 font-black leading-none text-white/[0.07]"
                      style={{ fontSize: "4.5rem" }}>
                      {s.n}
                    </span>
                  </div>
                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="fd font-black text-white text-xl mb-1.5 group-hover:text-orange-500 transition-colors duration-200">
                      {s.title}
                    </h3>
                    <p className="text-white/30 text-xs leading-relaxed mb-4">{s.desc}</p>
                    <span className="fd text-[10px] font-black tracking-[0.15em] uppercase text-orange-600 inline-flex items-center gap-1.5">
                      LEARN MORE <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ════════ THREE PILLARS ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              <Label>Why Choose Us</Label>
              <h2 className="fd font-black text-[#0a0a0a] text-4xl sm:text-5xl leading-none">THREE PILLARS</h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm sm:max-w-[240px] sm:text-right leading-relaxed">
              The principles that guide every project we take on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <div key={p.n}
                className="group relative bg-white border border-stone-100 rounded-2xl p-7 overflow-hidden hover:border-orange-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-50/80 transition-all duration-300">
                {/* Ghost number — the signature design element */}
                <span
                  className="fd pointer-events-none select-none absolute right-2 bottom-2 font-black text-stone-100 group-hover:text-orange-50/80 transition-colors leading-none"
                  style={{ fontSize: "4.5rem" }}>
                  {p.n}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 text-stone-500 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.svgPath} />
                    </svg>
                  </div>
                  <h3 className="fd font-black text-[#0a0a0a] text-2xl mb-2">{p.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ TEAM ════════ */}
        <section className="bg-[#111111] py-16 sm:py-20 lg:py-24 border-y border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="text-center mb-12">
              <Label>Leadership</Label>
              <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none">THE TEAM</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              {team.map((m, i) => (
                <div key={m.name}
                  className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl overflow-hidden hover:border-orange-500/30 transition-colors duration-300 grid grid-cols-1 md:grid-cols-3">
                  
                  {/* Photo Side (1 column) */}
                  <div className="relative h-80 md:h-auto min-h-[350px] md:col-span-1 overflow-hidden bg-white/[0.02]">
                    <Image src={m.img} alt={m.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: m.imgPosition }}
                      sizes="(max-width: 768px) 100vw, 33vw" />
                    {/* Subtle gradient overlay to blend edges */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80 md:opacity-60" />
                  </div>
                  
                  {/* Details Side (2 columns) */}
                  <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden md:col-span-2">
                    {/* Watermark Number */}
                    <div className="pointer-events-none absolute -bottom-4 -right-4 md:top-4 md:right-4 text-[#111111] group-hover:text-white/[0.03] transition-colors duration-500 fd font-black leading-none"
                      style={{ fontSize: "clamp(8rem, 15vw, 15rem)" }}>
                      0{i + 1}
                    </div>

                    <div className="relative z-10">
                      <span className="fd text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-orange-500 mb-4 block">
                        {m.role}
                      </span>
                      <h3 className="fd font-black text-white text-4xl sm:text-5xl mb-6">{m.name}</h3>
                      <div className="w-12 h-1 bg-orange-600 mb-6" />
                      <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden px-8 sm:px-14 py-14 sm:py-16">
            {/* Dot texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            {/* Orange side glow */}
            <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent" />
            {/* Right accent stripe */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-1 bg-orange-600" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="fd font-black text-white leading-[0.93] mb-3"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  READY TO START YOUR<br />
                  <span className="text-orange-500">NEXT PROJECT?</span>
                </h2>
                <p className="text-white/35 text-sm leading-relaxed max-w-sm">
                  Free site quote, equipment hire, or custom consulting. We respond within 2 business hours.
                </p>
              </div>

              {/* CTA buttons — column on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <Link href="/contact"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors">
                  FREE QUOTE <ArrowIcon />
                </Link>
                <Link href="/services"
                  className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-white text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors">
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