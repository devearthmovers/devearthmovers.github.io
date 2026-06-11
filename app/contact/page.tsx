// Web3Forms configuration update
"use client";

import Link from "next/link";
import { useState } from "react";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  .fd { font-family: 'Barlow Condensed', sans-serif; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation: marquee 32s linear infinite; display: inline-flex; white-space: nowrap; will-change: transform; }
  @media (prefers-reduced-motion: reduce) { .marquee { animation:none !important; } }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #f5f5f4 inset !important;
    -webkit-text-fill-color: #1c1917 !important;
    caret-color: #1c1917;
  }
`;

const ArrowIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" />
  </svg>
);

const Label = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`fd font-bold text-orange-500 text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-3`}>
    {children}
  </p>
);

/* Info card — light theme */
const InfoCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all duration-300">
    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-orange-600 flex items-center justify-center mb-4 transition-all duration-300 text-stone-400 group-hover:text-white">
      {icon}
    </div>
    <p className="fd font-black text-stone-400 text-[10px] tracking-[0.18em] uppercase mb-2">{title}</p>
    {children}
  </div>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
  access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
  name: form.name,
  phone: form.phone,
  email: form.email,
  service: form.service,
  message: form.message,
};

const response = await fetch(
  "https://api.web3forms.com/submit",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

const result = await response.json();

if (result.success) {
  setSubmitted(true);
}

setLoading(false);
  };

  

  const tickers = ["Earth Excavation", "Site Leveling", "Trenching & Backfill", "JCB Hire", "Road Preparation", "Excavator Rental", "Equipment Logistics", "Site Development", "Piling Services", "Barricading Work", "Dewatering Services"];

  const services = [
    "Earth Excavation", "Site Development", "JCB & Equipment Hire",
    "Trenching & Backfill", "Road Construction", "Equipment Logistics",
    "Building Demolition", "Piling Services", "Barricading Work",
    "Dewatering Services", "Construction & Civil Engineering", "Other / General Inquiry",
  ];

  const inputBase =
    "w-full bg-neutral-100 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400/40 transition-colors duration-200";

  /* Google Maps embed URL for C-137 Sanjay Colony Bhatti Mines New Delhi */
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1!2d77.1780!3d28.5050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f3700000001%3A0x1!2sC-137%2C+Sanjay+Colony%2C+Bhatti+Mines%2C+New+Delhi%2C+Delhi+110074!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <>
      <style>{STYLES}</style>
      <div className="bg-neutral-50 antialiased">

        {/* ════════ HERO ════════ */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">
              <div>
                <Label>Get In Touch</Label>
                <h1 className="fd font-black leading-[0.88] tracking-tight mb-5"
                  style={{ fontSize: "clamp(3.8rem, 11vw, 6.5rem)" }}>
                  LET'S BUILD<br />
                  <span className="text-orange-500 italic">TOGETHER.</span>
                </h1>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm">
                  Free site quotes, equipment hire enquiries, or project consultations — we respond within 2 business hours.
                </p>
              </div>
              <div className="flex items-stretch border-t border-white/[0.08] pt-7 lg:pb-1">
                {[["2hr", "Response Time"], ["24/7", "Site Support"], ["Delhi NCR", "Service Area"]].map(([n, l], i) => (
                  <div key={l} className={`flex-1 text-center ${i > 0 ? "border-l border-white/[0.08]" : ""} px-2`}>
                    <div className="fd font-black text-2xl sm:text-3xl text-white leading-none mb-0.5">{n}</div>
                    <div className="text-white/60 text-[9px] sm:text-[10px] tracking-[0.12em] uppercase">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TICKER ════════ */}
        <div className="bg-orange-600 py-4 sm:py-5 overflow-hidden" style={{overflowX:"hidden"}}>
          <div className="marquee">
            {[...tickers, ...tickers].map((t, i) => (
              <span key={i} className="fd font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-5 px-6">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ════════ MAIN CONTENT — light theme ════════ */}
        <section className="bg-neutral-50 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.55fr] gap-10 lg:gap-16 items-start">

              {/* ── LEFT: contact info (scrolls normally) ── */}
              <div>
                <Label>Reach Us Directly</Label>
                <h2 className="fd font-black text-[#0a0a0a] text-3xl sm:text-4xl leading-none mb-8">
                  CONTACT<br />DETAILS
                </h2>

                <div className="flex flex-col gap-4 mb-6">

                  {/* Phone */}
                  <InfoCard title="Phone" icon={
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }>
                    <a href="tel:9599688718" className="block text-stone-800 text-sm leading-relaxed hover:text-orange-600 transition-colors font-medium">+91 95996 88718</a>
                    <a href="tel:9205312697" className="block text-stone-800 text-sm leading-relaxed hover:text-orange-600 transition-colors font-medium">+91 92053 12697</a>
                  </InfoCard>

                  {/* Email */}
                  <InfoCard title="Email" icon={
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }>
                    <a href="mailto:devearthmovers9599@gmail.com" className="block text-stone-800 text-sm leading-relaxed hover:text-orange-600 transition-colors font-medium break-all">devearthmovers9599@gmail.com</a>
                  </InfoCard>

                  {/* Address */}
                  <InfoCard title="Office Address" icon={
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }>
                    <p className="text-stone-800 text-sm leading-relaxed">C-137, Sanjay Colony,</p>
                    <p className="text-stone-800 text-sm leading-relaxed">Bhatti Mines, New Delhi — 110074</p>
                  </InfoCard>

                  {/* Hours */}
                  <InfoCard title="Working Hours" icon={
                    <svg width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }>
                    <p className="text-stone-800 text-sm leading-relaxed">Mon – Sat: 7:00 AM – 7:00 PM</p>
                    <p className="text-stone-500 text-sm leading-relaxed">Emergency support: 24 / 7</p>
                  </InfoCard>
                </div>

                {/* Service area */}
                <div className="bg-white border border-stone-200 rounded-2xl p-5">
                  <p className="text-stone-400 text-[10px] tracking-[0.16em] uppercase font-semibold mb-3" style={{fontFamily:"Inter, sans-serif"}}>Service Area</p>
                  <div className="flex flex-wrap gap-2">
                    {["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida"].map((city) => (
                      <span key={city} className="text-[11px] font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-3 py-1" style={{fontFamily:"Inter, sans-serif"}}>
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: STICKY FORM ── */}
              <div className="lg:sticky lg:top-[120px] self-start" style={{position: "sticky", top: "120px"}}>
                <div className="bg-white border border-stone-200 rounded-3xl p-7 sm:p-10 shadow-sm">
                  {!submitted ? (
                    <>
                      <Label>Free Site Quote</Label>
                      <h3 className="fd font-black text-[#0a0a0a] text-3xl sm:text-4xl leading-none mb-8">
                        SEND A<br />MESSAGE
                      </h3>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="fd font-black text-stone-400 text-[10px] tracking-[0.15em] uppercase">
                              Full Name <span className="text-orange-600">*</span>
                            </label>
                            <input type="text" name="name" required value={form.name} onChange={handleChange}
                              placeholder="Rajesh Kumar" className={inputBase} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="fd font-black text-stone-400 text-[10px] tracking-[0.15em] uppercase">
                              Phone Number <span className="text-orange-600">*</span>
                            </label>
                            <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                              placeholder="+91 98100 00000" className={inputBase} />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="fd font-black text-stone-400 text-[10px] tracking-[0.15em] uppercase">Email Address</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange}
                            placeholder="you@example.com" className={inputBase} />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="fd font-black text-stone-400 text-[10px] tracking-[0.15em] uppercase">
                            Service Required <span className="text-orange-600">*</span>
                          </label>
                          <div className="relative">
                            <select name="service" required value={form.service} onChange={handleChange}
                              className={`${inputBase} appearance-none cursor-pointer pr-10 ${form.service === "" ? "text-stone-400" : "text-stone-900"}`}>
                              <option value="" disabled>Select a service…</option>
                              {services.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">
                              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="fd font-black text-stone-400 text-[10px] tracking-[0.15em] uppercase">
                            Project Details <span className="text-orange-600">*</span>
                          </label>
                          <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                            placeholder="Describe your site, scope of work, location, and any timeline requirements…"
                            className={`${inputBase} resize-none`} />
                        </div>

                        <p className="text-stone-400 text-[10px] leading-relaxed">
                          By submitting this form you agree to be contacted by Dev Earth Movers regarding your enquiry. We never share your details with third parties.
                        </p>

                        <button type="submit"
                          className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors mt-1 w-full sm:w-auto self-start">
                          {loading ? "SENDING..." : "SEND ENQUIRY"} <ArrowIcon />
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center py-12 min-h-[420px]">
                      <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-6">
                        <svg width="28" height="28" fill="none" stroke="#ea580c" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <Label>Message Received</Label>
                      <h3 className="fd font-black text-[#0a0a0a] text-3xl sm:text-4xl leading-none mb-4">
                        WE'LL BE IN<br />TOUCH SOON.
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-8">
                        Our team typically responds within 2 business hours. Check your inbox — or give us a call directly.
                      </p>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                        className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-stone-200 hover:ring-orange-500 hover:text-orange-500 text-stone-700 px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                        SEND ANOTHER
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════ FULL-WIDTH MAP ════════ */}
        <section className="bg-neutral-50 pb-10 sm:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
              <iframe
                title="Dev Earth Movers Location"
                src="/map.html"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
              />
              <div className="bg-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" fill="none" stroke="#ea580c" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-stone-500 text-sm">C-137, Sanjay Colony, Bhatti Mines, New Delhi — 110074</p>
                </div>
                <a
                  href="https://maps.google.com/?q=28.4349162,77.2272436&t=k&z=17"
                  target="_blank" rel="noopener noreferrer"
                  className="fd font-black tracking-widest text-[10px] text-orange-600 hover:text-orange-500 inline-flex items-center gap-1.5 transition-colors shrink-0">
                  OPEN IN MAPS <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="bg-neutral-50 pt-0 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden px-8 sm:px-14 py-14 sm:py-16">
              <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent" />
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-1 bg-orange-600" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div>
                  <h2 className="fd font-black text-white leading-[0.93] mb-3"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                    NEED A QUICK<br />
                    <span className="text-orange-500">ESTIMATE?</span>
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    Call us directly for urgent jobs or same-day equipment dispatch across Delhi NCR.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                  <a href="tel:9599688718"
                    className="fd font-black tracking-widest text-xs bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors">
                    CALL NOW <ArrowIcon />
                  </a>
                  <Link href="/services"
                    className="fd font-black tracking-widest text-xs ring-1 ring-inset ring-white/15 hover:ring-white text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors">
                    ALL SERVICES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}