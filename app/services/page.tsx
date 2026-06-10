"use client";

import Link from "next/link";
import Image from "next/image";

/* ─── Same style block as home & projects pages ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500&display=swap');
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
  <svg width="12" height="12" fill="none" stroke="#ea580c" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0 mt-[1px]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ─── Reusable eyebrow label ─── */
const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`fd font-bold text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-3 ${light ? "text-orange-400" : "text-orange-500"}`}>
    {children}
  </p>
);

/* ─── All 11 services with full detail ─── */
const services = [
  {
    n: "01",
    img: "/service_excavation.png",
    title: "Earth Excavation",
    tagline: "Moving ground to engineering drawings — nothing more, nothing less.",
    desc: "Our Poclain and JCB excavators handle any scale of earthwork — from single-plot foundation pits to multi-acre bulk earthworks. Every job is scoped in advance, cut to grade, and handed over survey-ready.",
    features: [
      "Foundation pit excavation to depth",
      "Bulk cut & fill earthworks",
      "Topsoil strip & stockpile",
      "Hard rock breaking & removal",
    ],
    category: "Core Earthworks",
  },
  {
    n: "02",
    img: "/service_leveling.png",
    title: "Site Development",
    tagline: "From rough ground to a level, compacted platform ready for structure.",
    desc: "We clear, grade, and compact sites to your engineer's formation level. Whether it's a greenfield plot or a redevelopment, our fleet delivers the flat, stable base that every subsequent trade depends on.",
    features: [
      "Vegetation & debris clearance",
      "Terrain grading & levelling",
      "Plate & roller compaction",
      "Drainage & fall preparation",
    ],
    category: "Core Earthworks",
  },
  {
    n: "03",
    img: "/service_jcb.png",
    title: "JCB & Equipment Hire",
    tagline: "High-performance machines, certified operators — on your schedule.",
    desc: "Short-term or long-term hire of JCBs, crawler excavators, dozers, and tippers — with or without operator. All machines are GPS-tracked, daily-inspected, and fully insured, so you only pay for productive hours.",
    features: [
      "JCBs, crawlers & dozers available",
      "Operator-inclusive or bare hire",
      "GPS tracking on every unit",
      "Short-term & long-term contracts",
    ],
    category: "Equipment",
  },
  {
    n: "04",
    img: "/service_trenching.png",
    title: "Trenching & Backfill",
    tagline: "Precise utility trenches, properly bedded and compacted.",
    desc: "We excavate utility trenches to exact widths and depths, place sand bedding, support pipe-laying crews, and backfill with compacted granular material — passing plate-test on the first attempt.",
    features: [
      "Utility & drainage trenching",
      "Sand & granular bedding",
      "Coordinated pipe-laying support",
      "Compacted backfill & plate-test",
    ],
    category: "Specialist Works",
  },
  {
    n: "05",
    img: "/service_road.png",
    title: "Road Construction",
    tagline: "Sub-base to surface — roads built to carry the load.",
    desc: "From sub-grade preparation to aggregate base layers and final grading, we deliver roadway formation for commercial estates, industrial yards, and infrastructure projects across Delhi NCR.",
    features: [
      "Sub-grade cut & formation",
      "GSB / WMM aggregate laying",
      "Precision motor-grader work",
      "Kerb formation & edge prep",
    ],
    category: "Infrastructure",
  },
  {
    n: "06",
    img: "/service_equipment.png",
    title: "Equipment Logistics",
    tagline: "The right machine, at the right site, on time — fully supported.",
    desc: "We handle the full logistics chain: low-loader transport, permits, site induction, operator deployment, daily safety checks, and fuel management. You focus on your project; we manage the plant.",
    features: [
      "Low-loader delivery & collection",
      "Route permit coordination",
      "Certified operator deployment",
      "Daily pre-start safety checks",
    ],
    category: "Equipment",
  },
  {
    n: "07",
    img: "/service_demolition.png",
    title: "Building Demolition",
    tagline: "Controlled structural demolition, safely executed and fully cleared.",
    desc: "Our breakers and excavators demolish structures safely, with pre-demolition surveys, methodical working sequences, and complete site clearance including debris sorting and responsible disposal.",
    features: [
      "Pre-demolition structural survey",
      "Controlled progressive demolition",
      "Salvage material separation",
      "Full debris removal & clearance",
    ],
    category: "Specialist Works",
  },
  {
    n: "08",
    img: "/service_piling.png",
    title: "Piling Services",
    tagline: "Deep foundations for structures that cannot afford to move.",
    desc: "We provide bored piling, sheet piling, and micro-piling for residential and commercial foundations. Our rigs work to structural engineer drawings, with load test documentation on request.",
    features: [
      "Bored cast-in-situ piling",
      "Sheet & soldier piling",
      "Micro & mini piling",
      "Load test documentation",
    ],
    category: "Specialist Works",
  },
  {
    n: "09",
    img: "/service_barricading.png",
    title: "Barricading Work",
    tagline: "Secure perimeters that keep sites safe and compliant.",
    desc: "We install heavy-gauge metal barricading, hoarding panels, and security fencing around active construction sites. All installations meet CPWD and municipal safety requirements.",
    features: [
      "Heavy metal barricade panels",
      "Perimeter hoarding installation",
      "Gate & access point fitting",
      "CPWD-compliant standards",
    ],
    category: "Site Safety",
  },
  {
    n: "10",
    img: "/service_dewatering.png",
    title: "Dewatering Services",
    tagline: "Dry excavations, safe working conditions — whatever the water table.",
    desc: "High-capacity electric and diesel submersible pumps, wellpoint systems, and sump management keep your excavation dry. We size the system to your inflow, monitoring continuously throughout the dig.",
    features: [
      "Submersible pump deployment",
      "Wellpoint dewatering systems",
      "Trench sump management",
      "Continuous inflow monitoring",
    ],
    category: "Specialist Works",
  },
  {
    n: "11",
    img: "/service_civil.png",
    title: "Construction & Civil Engineering",
    tagline: "End-to-end civil solutions, from ground to structure.",
    desc: "Beyond earthworks, our civil team delivers RCC structural work, concrete slabs, retaining walls, drainage structures, and full project management — a single contractor for the complete below-ground package.",
    features: [
      "RCC & concrete structure work",
      "Retaining walls & basements",
      "Drainage & culvert construction",
      "Full civil project management",
    ],
    category: "Infrastructure",
  },
];

/* ─── Process steps ─── */
const steps = [
  {
    n: "01",
    title: "Site Assessment",
    desc: "We visit the site, review drawings, and scope the exact equipment and crew needed.",
    svgPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    n: "02",
    title: "Quotation & Sign-off",
    desc: "Detailed work order with scope, unit rates, timeline, and T&Cs — signed before machines move.",
    svgPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    n: "03",
    title: "Mobilisation",
    desc: "GPS-tracked machines and certified operators on site within 1–2 days of sign-off.",
    svgPath: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  },
  {
    n: "04",
    title: "Execution & Handover",
    desc: "Work completed to spec, measured, documented, and handed over survey-ready.",
    svgPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];



/* ════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="bg-neutral-50 overflow-x-hidden antialiased">

        {/* ════════ HERO ════════ */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-28 pb-0">

            {/* Top rule */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/[0.07]" />
              <Label light>Core Capabilities</Label>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            {/* Headline + intro */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
              <div>
                <h1
                  className="fd font-black leading-[0.88] tracking-tight text-white"
                  style={{ fontSize: "clamp(3.8rem, 12vw, 7.5rem)" }}
                >
                  WHAT<br />
                  WE<br />
                  <span className="text-orange-500 italic">DO.</span>
                </h1>
              </div>
              <div className="lg:pb-2">
                <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
                  Eleven specialist services covering every stage of earthmoving and site preparation — from the first machine on site to final handover.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    FREE QUOTE <ArrowIcon />
                  </Link>
                  <Link href="/projects"
                    className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-orange-500 hover:text-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    OUR PROJECTS
                  </Link>
                </div>
              </div>
            </div>

            {/* Service count bar */}
            <div className="grid grid-cols-3 sm:grid-cols-5 border border-white/[0.07] rounded-t-2xl overflow-hidden">
              {[
                ["11", "Services"],
                ["50+", "Fleet Units"],
                ["15+", "Years Active"],
                ["250+", "Projects Done"],
                ["CPWD", "Certified"],
              ].map(([n, l], i) => (
                <div key={l}
                  className={`py-5 text-center ${i > 0 ? "border-l border-white/[0.07]" : ""} ${i >= 3 ? "hidden sm:block" : ""}`}>
                  <div className="fd font-black text-xl sm:text-2xl text-white leading-none mb-0.5">{n}</div>
                  <div className="text-white/20 text-[9px] tracking-[0.14em] uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TICKER ════════ */}
        <div className="bg-orange-600 py-4 sm:py-5 overflow-hidden">
          <div className="marquee">
            {[
              "Earth Excavation", "Site Development", "JCB Hire", "Trenching & Backfill",
              "Road Construction", "Equipment Logistics", "Building Demolition", "Piling Services",
              "Barricading Work", "Dewatering", "Civil Engineering",
              "Earth Excavation", "Site Development", "JCB Hire", "Trenching & Backfill",
              "Road Construction", "Equipment Logistics", "Building Demolition", "Piling Services",
              "Barricading Work", "Dewatering", "Civil Engineering",
            ].map((t, i) => (
              <span key={i} className="fd font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-5 px-6">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ════════ SERVICES GRID ════════ */}
        <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
              <div>
                <Label light>All Services</Label>
                <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none">11 CAPABILITIES</h2>
              </div>
              <p className="text-white/25 text-xs sm:text-sm leading-relaxed sm:text-right sm:max-w-[220px]">
                Commercial, residential &amp; infrastructure — across Delhi NCR.
              </p>
            </div>

            {/* 3-col grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <div key={s.n}
                  className="group bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-orange-600/30 transition-all duration-300 flex flex-col">

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-black/40 flex-shrink-0">
                    <Image src={s.img} alt={s.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />

                    {/* Ghost number */}
                    <span className="fd pointer-events-none select-none absolute top-2 right-3 font-black leading-none text-white/[0.07]"
                      style={{ fontSize: "4.5rem" }}>
                      {s.n}
                    </span>

                    {/* Category chip */}
                    <span className="absolute bottom-3 left-4 fd font-bold text-[9px] tracking-[0.18em] uppercase bg-orange-600/90 text-white rounded-full px-3 py-1">
                      {s.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="fd font-black text-white text-2xl leading-tight mb-2 group-hover:text-orange-500 transition-colors duration-200">
                      {s.title}
                    </h3>
                    <p className="text-orange-400 text-xs fd font-bold tracking-[0.1em] uppercase mb-3 italic">
                      {s.tagline}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>

                    {/* Features */}
                    <div className="flex flex-col gap-2.5 mb-5 flex-1">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckIcon />
                          <span className="text-white/75 text-sm leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="border-t border-white/[0.08] pt-4 mt-auto">
                      <Link href="/contact"
                        className="fd text-xs font-black tracking-[0.15em] uppercase text-orange-500 hover:text-orange-400 inline-flex items-center gap-1.5 transition-colors">
                        GET A QUOTE <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ HOW WE WORK ════════ */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12">
              <div>
                <Label>Process</Label>
                <h2 className="fd font-black text-[#0a0a0a] text-4xl sm:text-5xl leading-none">
                  HOW IT WORKS
                </h2>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm sm:max-w-[220px] sm:text-right leading-relaxed">
                From first call to final handover — a clear, four-step process.
              </p>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {steps.map((step, idx) => (
                <div key={step.n} className="relative">
                  {/* Card — no overflow-hidden so arrow badge isn't clipped */}
                  <div className="group bg-white border border-stone-100 rounded-2xl p-7 hover:border-orange-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-50/80 transition-all duration-300 h-full overflow-hidden">

                    {/* Ghost number watermark */}
                    <span className="fd pointer-events-none select-none absolute right-2 bottom-1 font-black leading-none text-stone-100 group-hover:text-orange-50 transition-colors"
                      style={{ fontSize: "4.5rem" }}>
                      {step.n}
                    </span>

                    {/* Icon circle */}
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-neutral-100 text-stone-500 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                      <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.svgPath} />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <span className="fd font-bold text-[9px] tracking-[0.2em] uppercase text-orange-500 mb-2 block">
                        Step {step.n}
                      </span>
                      <h3 className="fd font-black text-[#0a0a0a] text-xl mb-2">{step.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Arrow connector — rendered outside card, centered in the gap */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-9 -right-[17px] w-8 h-8 bg-orange-600 rounded-full items-center justify-center z-20 shadow-lg shadow-orange-200/60">
                      <svg width="12" height="12" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ EQUIPMENT STRIP ════════ */}
        <section className="bg-[#111111] py-14 sm:py-16 border-y border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              {/* Left — text */}
              <div>
                <Label light>Our Fleet</Label>
                <h2 className="fd font-black text-white text-4xl sm:text-5xl leading-none mb-5">
                  50+ MACHINES,<br />
                  <span className="text-orange-500 italic">READY NOW.</span>
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-7 max-w-sm">
                  Every machine GPS-tracked, daily-inspected, and dispatched with a CPWD-certified operator. We mobilise within 1–2 days of work order sign-off.
                </p>
                <Link href="/fleet"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                  OUR FLEET <ArrowIcon />
                </Link>
              </div>

              {/* Right — machine list grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Poclain Excavator", detail: "Tata Hitachi EX200" },
                  { label: "JCB Excavator",     detail: "JCB 3DX Super" },
                  { label: "Hyva Tipper Truck",  detail: "Tata Signa 2823" },
                  { label: "Piling Machine Rig", detail: "Sany SR155 Rig" },
                ].map((m) => (
                  <div key={m.label}
                    className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-4 hover:border-orange-600/30 transition-colors group">
                    <div className="fd font-black text-white text-base leading-tight group-hover:text-orange-500 transition-colors">
                      {m.label}
                    </div>
                    <div className="text-white/60 text-[10px] tracking-[0.15em] uppercase mt-0.5">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ CTA (identical to home & projects) ════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden px-8 sm:px-14 py-14 sm:py-16">
            {/* Dot texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            {/* Orange glow */}
            <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent" />
            {/* Right stripe */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-1 bg-orange-600" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="fd font-black text-white leading-[0.93] mb-3"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  READY TO START YOUR<br />
                  <span className="text-orange-500">NEXT PROJECT?</span>
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                  Free site quote, equipment hire, or custom consulting. We respond within 2 business hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <Link href="/contact"
                  className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors">
                  FREE QUOTE <ArrowIcon />
                </Link>
                <Link href="/projects"
                  className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-white text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors">
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}