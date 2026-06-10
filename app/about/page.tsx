"use client";

import Link from "next/link";
import Image from "next/image";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  .fd { font-family: 'Barlow Condensed', sans-serif; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation: marquee 32s linear infinite; display: inline-flex; white-space: nowrap; will-change: transform; }
  @keyframes count-up { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  @media (prefers-reduced-motion: reduce) { .marquee { animation:none !important; } }
`;

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

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="fd font-bold text-orange-500 text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-3">
    {children}
  </p>
);

export default function AboutPage() {

  const tickers = ["15+ Years Experience", "250+ Projects Delivered", "50+ Fleet Units", "CPWD Certified", "GPS-Tracked Fleet", "24/7 Site Support", "Delhi NCR Based", "Licensed & Insured"];

  const timeline = [
    { year: "2009", title: "Founded", desc: "Rohit Dev started Dev Earth Movers with a single JCB and a commitment to precision groundwork in South Delhi." },
    { year: "2013", title: "Fleet Expansion", desc: "Grew to 10+ machines including crawler excavators and tipper trucks, taking on larger residential and commercial projects." },
    { year: "2017", title: "CPWD Empanelment", desc: "Achieved CPWD certification, opening the door to government and infrastructure contracts across Delhi NCR." },
    { year: "2020", title: "GPS Fleet Tracking", desc: "Deployed live GPS tracking across all machines, enabling real-time dispatch and on-schedule delivery for every site." },
    { year: "2024", title: "50+ Unit Fleet", desc: "Crossed 50 active fleet units and 250 completed projects, serving clients across Delhi, Noida, Gurugram, and beyond." },
  ];

  const values = [
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
    {
      n: "04", title: "Client Partnership",
      desc: "We treat every site as if it were our own project — transparent communication, no surprises, full accountability.",
      svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ];

  const team = [
    {
      img: "/Rohit_Founder.jpeg", imgPosition: "50% 50%",
      name: "Rohit Dev", role: "Founder & Director",
      bio: "18 years of expertise in excavation management, site preparation, and foundation engineering across Delhi NCR.",
      detail: "Rohit founded Dev Earth Movers in 2009 with a vision to bring engineering precision to earthmoving. Under his leadership, the company has grown from a single machine to a 50+ unit fleet trusted by developers, contractors, and government agencies across the region.",
    },
    {
      img: "/Ritik_Engineer.jpeg", imgPosition: "50% 20%",
      name: "Ritik Dev", role: "Engineering Lead",
      bio: "Specialist in civil site design, structural levelling, and local government compliance standards.",
      detail: "Ritik leads all technical operations at Dev Earth Movers — from reading engineering drawings to ensuring every surface passes survey on the first pass. He oversees operator training, machine maintenance schedules, and CPWD compliance across all active sites.",
    },
  ];

  const checks = [
    "Licensed & insured operators on every job",
    "GPS-equipped fleet with live dispatch tracking",
    "24 / 7 support for critical site operations",
    "CPWD safety compliance on every site",
    "Work to engineering drawings and survey specs",
    "Full site clearance and debris management",
  ];

  const stats = [
    ["15+", "Years Active"],
    ["250+", "Projects Done"],
    ["50+", "Fleet Units"],
    ["100%", "Satisfaction Rate"],
  ];

  return (
    <>
      <style>{STYLES}</style>
      <div className="bg-neutral-50 antialiased">

        {/* ════════ HERO ════════ */}
        <section className="bg-[#0a0a0a] text-white" style={{overflowX:"hidden"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              {/* Left */}
              <div>
                <Label>Delhi NCR's Trusted Earthmovers</Label>
                <h1 className="fd font-black leading-[0.88] tracking-tight mb-5"
                  style={{ fontSize: "clamp(3.8rem, 11vw, 6.5rem)" }}>
                  BUILT ON<br />
                  <span className="text-orange-500 italic">GROUND.</span><br />
                  PROVEN BY<br />
                  RESULTS.
                </h1>
                <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
                  Over 15 years of precision earthmoving, excavation, and site development across Delhi NCR — built on one principle: every cubic metre moved right.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    GET A QUOTE <ArrowIcon />
                  </Link>
                  <Link href="/services"
                    className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-orange-500 hover:text-orange-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    OUR SERVICES
                  </Link>
                </div>
              </div>

              {/* Right — stat grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(([n, l], i) => (
                  <div key={l}
                    className={`rounded-2xl p-6 flex flex-col justify-between min-h-[130px] ${i === 0 ? "bg-orange-600" : "bg-[#111111] border border-white/[0.06]"}`}>
                    <div className={`fd font-black leading-none mb-2 ${i === 0 ? "text-white" : "text-white"}`}
                      style={{ fontSize: "clamp(2.4rem, 6vw, 3.5rem)" }}>
                      {n}
                    </div>
                    <div className={`text-[10px] tracking-[0.14em] uppercase ${i === 0 ? "text-white/75" : "text-white/30"}`}
                      style={{ fontFamily: "Inter, sans-serif" }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════ TICKER ════════ */}
        <div className="bg-orange-600 py-4 sm:py-5" style={{overflowX:"hidden"}}>
          <div className="marquee">
            {[...tickers, ...tickers].map((t, i) => (
              <span key={i} className="fd font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-5 px-6">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ════════ WHO WE ARE ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Image collage */}
            <div className="relative h-64 sm:h-80 lg:h-[460px]">
              <div className="absolute top-0 left-0 w-[65%] h-[73%] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/service_excavation.png" alt="Excavation work" fill className="object-cover" sizes="30vw" />
              </div>
              <div className="absolute bottom-0 right-0 w-[52%] h-[57%] rounded-2xl overflow-hidden shadow-xl border-[3px] border-neutral-50">
                <Image src="/service_road.png" alt="Road construction" fill className="object-cover" sizes="25vw" />
              </div>
              {/* Floating badge */}
              <div className="absolute top-[54%] left-[54%] z-10 bg-[#0a0a0a] text-white rounded-xl px-4 py-2.5 shadow-lg">
                <div className="fd font-black text-xl leading-none">15+</div>
                <div className="text-white/50 text-[10px] tracking-wide mt-0.5">Years Active</div>
              </div>
              {/* Dot accent */}
              <div className="pointer-events-none absolute -bottom-3 -left-3 w-16 h-16 opacity-20"
                style={{ backgroundImage: "radial-gradient(circle, #ea580c 1.5px, transparent 1.5px)", backgroundSize: "9px 9px" }} />
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
                Founded by Rohit Dev in 2009, we've grown from a single JCB to a 50+ unit GPS-equipped fleet. Our certified operators deliver excavation, levelling, and site development that holds to schedule and to spec — every time.
              </p>

              <div className="flex flex-col gap-2 mb-8">
                {checks.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-neutral-100 rounded-xl px-4 py-3">
                    <CheckIcon />
                    <span className="text-xs sm:text-sm text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TIMELINE ════════ */}
        <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12">
              <div>
                <Label>Our Journey</Label>
                <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none">HOW WE GREW</h2>
              </div>
              <p className="text-white/30 text-xs sm:text-sm leading-relaxed sm:text-right sm:max-w-[220px]">
                From one machine to Delhi NCR's trusted fleet.
              </p>
            </div>

            {/* Timeline — vertical on mobile, horizontal feel on desktop via stagger */}
            <div className="relative">
              {/* Vertical line on desktop */}
              <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-white/[0.06]" />

              <div className="flex flex-col gap-0">
                {timeline.map((t, i) => (
                  <div key={t.year}
                    className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center py-8 border-b border-white/[0.05] last:border-0 ${i % 2 === 0 ? "" : "lg:direction-rtl"}`}>

                    {/* Year side */}
                    <div className={`flex items-center gap-5 ${i % 2 !== 0 ? "lg:order-2 lg:flex-row-reverse lg:text-right" : ""}`}>
                      {/* Dot */}
                      <div className="hidden lg:flex w-3 h-3 rounded-full bg-orange-600 ring-4 ring-orange-600/20 shrink-0 relative z-10" />
                      <div>
                        <div className="fd font-black text-orange-500 text-5xl sm:text-6xl leading-none mb-1">{t.year}</div>
                        <div className="fd font-black text-white text-xl">{t.title}</div>
                      </div>
                    </div>

                    {/* Desc side */}
                    <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ VALUES / PILLARS ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              <Label>What We Stand For</Label>
              <h2 className="fd font-black text-[#0a0a0a] text-4xl sm:text-5xl leading-none">OUR VALUES</h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm sm:max-w-[240px] sm:text-right leading-relaxed">
              The principles that guide every project we take on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.n}
                className="group relative bg-white border border-stone-100 rounded-2xl p-7 overflow-hidden hover:border-orange-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-50/80 transition-all duration-300">
                <span className="fd pointer-events-none select-none absolute right-2 bottom-2 font-black text-stone-100 group-hover:text-orange-50/80 transition-colors leading-none"
                  style={{ fontSize: "4.5rem" }}>
                  {v.n}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 text-stone-500 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.svgPath} />
                    </svg>
                  </div>
                  <h3 className="fd font-black text-[#0a0a0a] text-2xl mb-2">{v.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{v.desc}</p>
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

                  {/* Photo */}
                  <div className="relative h-80 md:h-auto min-h-[350px] md:col-span-1 overflow-hidden bg-white/[0.02]">
                    <Image src={m.img} alt={m.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: m.imgPosition }}
                      sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80 md:opacity-60" />
                  </div>

                  {/* Details */}
                  <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden md:col-span-2">
                    <div className="pointer-events-none absolute -bottom-4 -right-4 md:top-4 md:right-4 text-[#111111] group-hover:text-white/[0.03] transition-colors duration-500 fd font-black leading-none"
                      style={{ fontSize: "clamp(8rem, 15vw, 15rem)" }}>
                      0{i + 1}
                    </div>
                    <div className="relative z-10">
                      <span className="fd text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-orange-500 mb-4 block">
                        {m.role}
                      </span>
                      <h3 className="fd font-black text-white text-4xl sm:text-5xl mb-4">{m.name}</h3>
                      <div className="w-12 h-1 bg-orange-600 mb-5" />
                      <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-2xl mb-4">
                        {m.bio}
                      </p>
                      <p className="text-white/25 text-sm leading-relaxed max-w-2xl">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ WHY CHOOSE US — full dark strip ════════ */}
        <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: big stat */}
              <div>
                <Label>By The Numbers</Label>
                <div className="fd font-black text-white leading-none mb-2"
                  style={{ fontSize: "clamp(5rem, 16vw, 11rem)" }}>
                  250<span className="text-orange-500">+</span>
                </div>
                <p className="fd font-black text-white/20 text-2xl sm:text-3xl mb-6 tracking-wide">PROJECTS DELIVERED</p>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                  From single-plot foundation digs to multi-phase infrastructure contracts — every one completed on time and to spec.
                </p>
              </div>

              {/* Right: breakdown list */}
              <div className="flex flex-col gap-3">
                {[
                  ["Residential Projects", "120+"],
                  ["Commercial Sites", "70+"],
                  ["Infrastructure Contracts", "40+"],
                  ["Government / CPWD Jobs", "20+"],
                ].map(([label, val]) => (
                  <div key={label}
                    className="flex items-center justify-between bg-[#111111] border border-white/[0.05] rounded-2xl px-6 py-5 hover:border-orange-600/20 transition-colors">
                    <span className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                    <span className="fd font-black text-white text-2xl">{val}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden px-8 sm:px-14 py-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent" />
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