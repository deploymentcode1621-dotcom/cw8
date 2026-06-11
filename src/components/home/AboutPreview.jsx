"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Heart, Users, Award, ShieldCheck, Clock3, Ambulance,
  BedDouble, Microscope, Play, ArrowRight, X,
  CheckCircle2, Stethoscope, Activity, Shield,
} from "lucide-react";
import { SITE_CONFIG, STATS } from "@/utils/constants";

/* ─── Animated counter ─── */
function useCounter(target, duration = 2400, active = false) {
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!active) return;
    const raw    = String(target);
    const num    = parseInt(raw.replace(/[^0-9]/g, ""), 10);
    const suffix = raw.replace(/[0-9,]/g, "");
    let t0 = null;
    const tick = (ts) => {
      if (!t0) t0 = ts;
      const p    = Math.min((ts - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      const cur  = Math.floor(ease * num);
      const fmt  = cur >= 1000 ? cur.toLocaleString("en-IN") : String(cur);
      setVal(fmt + suffix);
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

/* ─── Intersection reveal hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Data ─── */
const highlights = [
  { text: "NABH Accredited Hospital",             icon: <Award size={15} /> },
  { text: "300+ Bed Multi-speciality Facility",   icon: <BedDouble size={15} /> },
  { text: "40+ Medical Specializations",          icon: <Stethoscope size={15} /> },
  { text: "Advanced ICU & NICU",                  icon: <Activity size={15} /> },
  { text: "State-of-the-art Operation Theatres",  icon: <Shield size={15} /> },
  { text: "24/7 Emergency & Ambulance Services",  icon: <Ambulance size={15} /> },
];

const pillars = [
  { icon: Users,       title: "Elite Specialists",   desc: "40+ board-certified consultants across 15 specialties, trained at India's finest institutions." },
  { icon: Heart,       title: "Compassionate Care",  desc: "Every patient receives personalised attention — medical excellence paired with genuine empathy." },
  { icon: Award,       title: "Clinical Excellence", desc: "Evidence-based protocols, continuous quality audits, and internationally benchmarked outcomes." },
  { icon: ShieldCheck, title: "Zero-Harm Safety",    desc: "Rigorous infection-control standards and proactive patient-safety programmes, every day." },
];

const facilities = [
  { icon: BedDouble,    label: "Modern Patient Rooms",  note: "Private & shared options" },
  { icon: Microscope,   label: "Advanced Diagnostics",  note: "MRI · CT · Pathology" },
  { icon: Ambulance,    label: "24 × 7 Ambulance",      note: "Fully equipped fleet" },
  { icon: Clock3,       label: "Emergency & Trauma",    note: "Round-the-clock ICU" },
  { icon: Stethoscope,  label: "OPD Consultations",     note: "All major specialties" },
  { icon: Activity,     label: "Cardiac Monitoring",    note: "Real-time telemetry" },
  { icon: Shield,       label: "Infection Control",     note: "ISO-certified protocols" },
  { icon: CheckCircle2, label: "Surgical Suites",       note: "Modular OT complex" },
];

const missionPoints = [
  "Accessible healthcare for every economic background",
  "Cutting-edge treatments at truly affordable costs",
  "Respectful, patient-first clinical environment",
  "Continuous medical education for our entire team",
];

/* ─── Stat pill (ribbon) ─── */
function RibbonStat({ value, label, started, delay }) {
  const v = useCounter(value, 2400, started);
  return (
    <div
      className="flex flex-col items-center justify-center py-9 px-5 border-r border-white/10 last:border-r-0 text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="block text-3xl md:text-4xl font-bold leading-none mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#c8a96e" }}
      >
        {v}
      </span>
      <span className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30">
        {label}
      </span>
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE
════════════════════════════════════════════ */
export default function AboutPage() {
  const heroImgRef    = useRef(null);
  const statsRef      = useRef(null);
  const [statsOn,     setStatsOn]     = useState(false);
  const [videoOpen,   setVideoOpen]   = useState(false);
  const [heroReady,   setHeroReady]   = useState(false);
  const [heroText,    setHeroText]    = useState(false);

  const [whoRef,      whoVisible]     = useReveal();
  const [hlRef,       hlVisible]      = useReveal();
  const [pillarsRef,  pillarsVisible] = useReveal();
  const [facRef,      facVisible]     = useReveal();
  const [achieveRef,  achieveVisible] = useReveal();

  /* parallax */
  useEffect(() => {
    const fn = () => {
      if (heroImgRef.current)
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* hero text entrance */
  useEffect(() => { const t = setTimeout(() => setHeroText(true), 150); return () => clearTimeout(t); }, []);

  /* stat trigger */
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.25 });
    if (statsRef.current) io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  /* body lock */
  useEffect(() => {
    document.body.style.overflow = videoOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [videoOpen]);

  return (
    <>
      {/* ── Font + custom keyframes ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy:      #0a1628;
          --navy2:     #112240;
          --champ:     #c8a96e;
          --champ-lt:  #e8d5b0;
          --champ-pal: #f7f0e3;
          --cream:     #faf8f5;
          --border:    #e2d9cc;
          --muted:     #64748b;
        }

        .ab-font-disp { font-family: 'Cormorant Garamond', Georgia, serif !important; }
        .ab-font-body { font-family: 'DM Sans', system-ui, sans-serif !important; }

        /* parallax photo */
        .ab-hero-photo {
          position: absolute; inset: -8% 0;
          width: 100%; height: 116%;
          object-fit: cover; object-position: center 30%;
          opacity: 0; transition: opacity 1.4s ease;
          will-change: transform;
        }
        .ab-hero-photo.on { opacity: 0.3; }

        /* thin gold vertical rule */
        .ab-vline {
          position: absolute; left: clamp(32px,5vw,80px); top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, rgba(200,169,110,.35) 30%, rgba(200,169,110,.35) 75%, transparent 100%);
          pointer-events: none; z-index: 2;
        }

        /* corner bracket */
        .ab-corner {
          position: absolute; top: 40px; right: 48px;
          width: 72px; height: 72px; opacity: .3; z-index: 3; pointer-events: none;
        }
        .ab-corner::before { content:""; position:absolute; top:0; right:0; width:1px; height:100%; background:var(--champ); }
        .ab-corner::after  { content:""; position:absolute; top:0; right:0; width:100%; height:1px; background:var(--champ); }

        /* ripple on play button */
        @keyframes ab-ripple {
          0%   { opacity: .8; transform: scale(1); }
          100% { opacity: 0;  transform: scale(1.55); }
        }
        .ab-play-ripple {
          position: absolute; inset: -10px; border-radius: 50%;
          border: 1px solid rgba(200,169,110,.22);
          animation: ab-ripple 2.8s infinite;
        }

        /* scroll cue line */
        @keyframes ab-drop {
          0%,100% { opacity: .3; transform: scaleY(1); }
          50%      { opacity: .9; transform: scaleY(1.1); }
        }
        .ab-scroll-line { animation: ab-drop 2.2s infinite; }

        /* reveal helpers */
        .ab-reveal { opacity:0; transform:translateY(28px); transition: opacity .8s ease, transform .8s ease; }
        .ab-reveal.on { opacity:1; transform:none; }

        .ab-stagger > * { opacity:0; transform:translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .ab-stagger.on > *:nth-child(1) { opacity:1; transform:none; transition-delay:0ms; }
        .ab-stagger.on > *:nth-child(2) { opacity:1; transform:none; transition-delay:80ms; }
        .ab-stagger.on > *:nth-child(3) { opacity:1; transform:none; transition-delay:160ms; }
        .ab-stagger.on > *:nth-child(4) { opacity:1; transform:none; transition-delay:240ms; }
        .ab-stagger.on > *:nth-child(5) { opacity:1; transform:none; transition-delay:320ms; }
        .ab-stagger.on > *:nth-child(6) { opacity:1; transform:none; transition-delay:400ms; }
        .ab-stagger.on > *:nth-child(7) { opacity:1; transform:none; transition-delay:480ms; }
        .ab-stagger.on > *:nth-child(8) { opacity:1; transform:none; transition-delay:560ms; }

        /* hero text entrance */
        .ab-hero-enter { opacity:0; transform:translateY(20px); transition: opacity .9s ease, transform .9s ease; }
        .ab-hero-enter.on { opacity:1; transform:none; }

        /* decorative image border box */
        .ab-img-frame { position:relative; }
        .ab-img-frame::before {
          content:""; position:absolute; top:-14px; left:-14px; right:30px; bottom:30px;
          border:1px solid rgba(200,169,110,.28); border-radius:18px;
          pointer-events:none; z-index:0;
        }

        /* spinning SVG ring */
        @keyframes ab-spin { to { transform: rotate(360deg); } }
        .ab-ring-svg { animation: ab-spin 20s linear infinite; }

        /* fac card gold underline sweep */
        .ab-fac { position:relative; overflow:hidden; }
        .ab-fac::after {
          content:""; position:absolute; bottom:0; left:0; right:0; height:2px;
          background:var(--champ); transform:scaleX(0);
          transition:transform .3s; transform-origin:left;
        }
        .ab-fac:hover::after { transform:scaleX(1); }

        /* diptych watermark */
        .ab-wm {
          position:absolute; top:-16px; right:-8px;
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:160px; font-weight:700; line-height:1;
          pointer-events:none; user-select:none;
        }
      `}</style>

      {/* ══════════════════════════════════
          HERO — full-viewport
      ══════════════════════════════════ */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "100svh", background: "var(--navy)" }}
      >
        {/* Hospital background image — Unsplash hospital interior */}
        <img
          ref={heroImgRef}
          className={`ab-hero-photo${heroReady ? " on" : ""}`}
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          onLoad={() => setHeroReady(true)}
        />

        {/* layered veil */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(10,22,40,.25) 0%,rgba(10,22,40,.88) 60%,#0a1628 100%), linear-gradient(90deg,rgba(10,22,40,.7) 0%,transparent 58%)",
          }}
        />

        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "256px",
            mixBlendMode: "overlay",
          }}
        />

        <div className="ab-vline" />
        <div className="ab-corner" />

        {/* content */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 md:px-20 pb-20">

          {/* eyebrow */}
          <p
            className={`ab-hero-enter${heroText ? " on" : ""} flex items-center gap-3 mb-7`}
            style={{
              fontFamily: "'DM Sans',system-ui,sans-serif",
              fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--champ)",
              transitionDelay: "0ms",
            }}
          >
            <span className="block w-8 h-px opacity-60" style={{ background: "var(--champ)" }} />
            {SITE_CONFIG.name} · Est. 1999 · Latur, Maharashtra
          </p>

          {/* H1 */}
          <h1
            className={`ab-hero-enter ab-font-disp${heroText ? " on" : ""}`}
            style={{
              fontSize: "clamp(3.2rem,7vw,6.4rem)", fontWeight: 300,
              lineHeight: 1.02, letterSpacing: "-0.01em", color: "#fff",
              marginBottom: 0, transitionDelay: "120ms",
            }}
          >
            Healing Lives,{" "}
            <em style={{ fontStyle: "italic", color: "var(--champ-lt)", fontWeight: 400 }}>
              Earning Trust
            </em>
          </h1>
          <p
            className={`ab-hero-enter ab-font-disp${heroText ? " on" : ""}`}
            style={{
              fontSize: "clamp(1.6rem,3.5vw,3.2rem)", fontWeight: 400,
              letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)",
              marginBottom: "28px", transitionDelay: "180ms",
              fontFamily: "'Cormorant Garamond',Georgia,serif",
            }}
          >
            Since Twenty-Five Years
          </p>

          <p
            className={`ab-hero-enter${heroText ? " on" : ""}`}
            style={{
              fontSize: "clamp(0.88rem,1.3vw,1rem)", fontWeight: 300,
              lineHeight: 1.9, color: "rgba(255,255,255,0.5)",
              maxWidth: "490px", marginBottom: "44px",
              transitionDelay: "280ms",
              fontFamily: "'DM Sans',system-ui,sans-serif",
            }}
          >
            The Marathwada region's most trusted multispeciality hospital —
            where advanced medicine and genuine compassion converge in service
            of your complete wellbeing.
          </p>

          {/* CTA row */}
          <div
            className={`ab-hero-enter flex items-center gap-5 flex-wrap${heroText ? " on" : ""}`}
            style={{ transitionDelay: "380ms" }}
          >
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 rounded-[8px] font-semibold transition-all hover:-translate-y-0.5"
              style={{
                padding: "14px 28px",
                background: "var(--champ)",
                color: "var(--navy)",
                fontSize: "0.78rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'DM Sans',system-ui,sans-serif",
              }}
            >
              Book Appointment <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 text-white/60 hover:text-white/90 transition-colors border-0 bg-transparent cursor-pointer"
              style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Sans',system-ui,sans-serif" }}
            >
              <span
                className="relative flex items-center justify-center rounded-full"
                style={{ width: 50, height: 50, border: "1px solid rgba(200,169,110,0.45)" }}
              >
                <span className="ab-play-ripple" />
                <Play size={15} fill="rgba(200,169,110,0.9)" color="rgba(200,169,110,0.9)" style={{ marginLeft: 2 }} />
              </span>
              Watch Our Story
            </button>
          </div>
        </div>

        {/* scroll cue */}
        <div
          className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2"
          style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", fontFamily: "'DM Sans',system-ui,sans-serif" }}
        >
          Scroll
          <span
            className="ab-scroll-line block w-px"
            style={{ height: 48, background: "linear-gradient(180deg,rgba(200,169,110,.55) 0%,transparent 100%)" }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS RIBBON
      ══════════════════════════════════ */}
      <div ref={statsRef} style={{ background: "var(--navy2)", borderBottom: "1px solid rgba(200,169,110,.1)" }}>
        <div className="max-w-[1240px] mx-auto px-8 md:px-20 grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(200,169,110,.07)" }}>
          {STATS.map((s, i) => (
            <RibbonStat key={s.label} value={s.value} label={s.label} started={statsOn} delay={i * 90} />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          WHO WE ARE — split layout
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: image stack with spinning ring */}
          <div className="ab-img-frame">
            {/* decorative spinning ring */}
            <div className="absolute -top-10 -right-10 w-36 h-36 opacity-60 pointer-events-none z-10">
              <svg className="ab-ring-svg w-full h-full" viewBox="0 0 140 140" fill="none">
                <circle cx="70" cy="70" r="65" stroke="url(#rg1)" strokeWidth="1.2" strokeDasharray="6 5" />
                {[0,60,120,180,240,300].map((deg, i) => {
                  const r = (deg * Math.PI) / 180;
                  return <circle key={i} cx={70 + 65 * Math.cos(r)} cy={70 + 65 * Math.sin(r)} r="2.8" fill={i % 2 === 0 ? "#c8a96e" : "#0a1628"} />;
                })}
                <defs>
                  <linearGradient id="rg1" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c8a96e" />
                    <stop offset="1" stopColor="#0a1628" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <img
              className="relative z-[1] w-full object-cover rounded-[18px]"
              style={{ aspectRatio: "3/4", filter: "saturate(0.88)" }}
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=75"
              alt="Doctors at Patil Multispeciality Hospital"
            />
            <img
              className="absolute z-[2] object-cover rounded-[14px] hidden md:block"
              style={{
                bottom: "-28px", right: "-28px", width: "46%", aspectRatio: "1.1",
                border: "4px solid #fff", boxShadow: "0 16px 48px rgba(10,22,40,.18)",
                filter: "saturate(0.88)",
              }}
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=500&q=75"
              alt="Hospital interior"
            />
            {/* years badge */}
            <div
              className="absolute z-[3] rounded-[14px] text-center"
              style={{
                top: 28, left: -18,
                background: "var(--navy)", padding: "18px 22px",
                boxShadow: "0 10px 32px rgba(10,22,40,.35)",
                border: "1px solid rgba(200,169,110,.2)",
              }}
            >
              <span className="block ab-font-disp" style={{ fontSize: "2rem", fontWeight: 600, color: "var(--champ)", lineHeight: 1 }}>25+</span>
              <span className="block mt-1" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>Years of<br />Excellence</span>
            </div>
          </div>

          {/* Right: text */}
          <div ref={whoRef} className={`ab-reveal${whoVisible ? " on" : ""} flex flex-col gap-6`}>
            <p
              className="inline-flex items-center gap-2"
              style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--champ)", fontFamily: "'DM Sans',system-ui,sans-serif" }}
            >
              <span className="w-6 h-px opacity-50" style={{ background: "var(--champ)" }} />
              Who We Are
            </p>

            <h2 className="ab-font-disp" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 300, lineHeight: 1.14, color: "#1a1a2e", letterSpacing: "-0.01em" }}>
              Committed to Quality{" "}
              <em style={{ fontStyle: "italic", color: "var(--navy2)" }}>Healthcare</em>{" "}
              For All
            </h2>

            <p style={{ fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.9, color: "var(--muted)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              Patil Multispeciality Hospital is Latur's pre-eminent healthcare institution, built on a
              foundation of clinical excellence and patient-first values. With over 40 specialist
              consultants, modern diagnostic technology, and a compassionate nursing team, we deliver
              end-to-end care across 15+ medical disciplines — serving the people of Marathwada with
              integrity since 1999.
            </p>

            <ul className="flex flex-col gap-3">
              {missionPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3" style={{ fontSize: "0.87rem", fontWeight: 400, color: "#374151", lineHeight: 1.65, fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--champ)" }} />
                  {pt}
                </li>
              ))}
            </ul>

            {/* NABH highlights */}
            <div
              ref={hlRef}
              className={`ab-stagger${hlVisible ? " on" : ""} grid grid-cols-1 sm:grid-cols-2 gap-2.5`}
            >
              {highlights.map(({ text, icon }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 border transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--champ-pal)", borderColor: "rgba(200,169,110,.2)", color: "var(--navy)" }}
                >
                  <span style={{ color: "var(--champ)", flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: "12px", fontWeight: 500, fontFamily: "'DM Sans',system-ui,sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/departments"
              className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
              style={{
                fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--navy)", textDecoration: "none",
                borderBottom: "1px solid var(--champ)", paddingBottom: "3px",
                width: "fit-content", fontFamily: "'DM Sans',system-ui,sans-serif",
              }}
            >
              Explore Our Departments <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MISSION & VISION DIPTYCH
      ══════════════════════════════════ */}
      <section className="py-20 md:py-28 px-8 md:px-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1240px] mx-auto">
          {/* section header */}
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-3 mb-4" style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--champ)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              <span className="w-7 h-px opacity-50" style={{ background: "var(--champ)" }} />
              Our Purpose
              <span className="w-7 h-px opacity-50" style={{ background: "var(--champ)" }} />
            </p>
            <h2 className="ab-font-disp" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 300, color: "#1a1a2e" }}>
              Mission &amp; <em style={{ fontStyle: "italic", color: "var(--navy2)" }}>Vision</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 rounded-[18px] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {/* Mission */}
            <div className="relative p-12 md:p-14 overflow-hidden" style={{ background: "var(--navy)" }}>
              <span className="ab-wm" style={{ color: "rgba(255,255,255,.025)" }}>M</span>
              <div className="flex items-center justify-center rounded-xl mb-7" style={{ width: 50, height: 50, background: "rgba(200,169,110,.13)", color: "var(--champ)" }}>
                <Heart size={21} />
              </div>
              <span className="block mb-3" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,.6)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>Our Mission</span>
              <h3 className="ab-font-disp mb-4" style={{ fontSize: "1.8rem", fontWeight: 400, color: "#fff" }}>Care Without Compromise</h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(255,255,255,.5)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                To provide accessible, affordable, and world-class healthcare with compassion, competence, and unwavering commitment — treating every patient with dignity, respect, and the full benefit of modern medicine, regardless of their background or means.
              </p>
            </div>

            {/* Vision */}
            <div className="relative p-12 md:p-14 overflow-hidden" style={{ background: "var(--champ-pal)", borderLeft: "1px solid var(--border)" }}>
              <span className="ab-wm" style={{ color: "rgba(10,22,40,.04)" }}>V</span>
              <div className="flex items-center justify-center rounded-xl mb-7" style={{ width: 50, height: 50, background: "rgba(10,22,40,.07)", color: "var(--navy)" }}>
                <Award size={21} />
              </div>
              <span className="block mb-3" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(10,22,40,.4)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>Our Vision</span>
              <h3 className="ab-font-disp mb-4" style={{ fontSize: "1.8rem", fontWeight: 400, color: "var(--navy)" }}>Maharashtra's Most Trusted</h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(10,22,40,.55)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                To become the most trusted multispeciality hospital in Maharashtra — recognised for clinical innovation, exceptional patient outcomes, and a culture where every staff member feels empowered to deliver their very best every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US — pillars
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-3 mb-4" style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--champ)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              <span className="w-7 h-px opacity-50" style={{ background: "var(--champ)" }} />
              Why Choose Us
              <span className="w-7 h-px opacity-50" style={{ background: "var(--champ)" }} />
            </p>
            <h2 className="ab-font-disp" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 300, color: "#1a1a2e" }}>
              Care You Can <em style={{ fontStyle: "italic", color: "var(--navy2)" }}>Count On</em>
            </h2>
            <p style={{ fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.9, color: "var(--muted)", maxWidth: 460, margin: "0 auto", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              Every decision we make is guided by a single principle — your wellbeing comes before everything else.
            </p>
          </div>

          <div
            ref={pillarsRef}
            className={`ab-stagger${pillarsVisible ? " on" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px`}
            style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 18, overflow: "hidden" }}
          >
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white p-10 transition-colors duration-300 hover:bg-[var(--navy)] cursor-default"
              >
                <div
                  className="flex items-center justify-center rounded-[12px] mb-5 transition-colors duration-300 group-hover:bg-[rgba(200,169,110,.13)]"
                  style={{ width: 50, height: 50, background: "var(--champ-pal)", color: "var(--champ)" }}
                >
                  <Icon size={21} />
                </div>
                <h4
                  className="ab-font-disp mb-3 transition-colors duration-300 group-hover:text-white"
                  style={{ fontSize: "1.15rem", fontWeight: 500, color: "#1a1a2e" }}
                >
                  {title}
                </h4>
                <p
                  className="transition-colors duration-300 group-hover:text-white/45"
                  style={{ fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.8, color: "var(--muted)", fontFamily: "'DM Sans',system-ui,sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FACILITIES
      ══════════════════════════════════ */}
      <section className="py-20 md:py-28 px-8 md:px-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-3 mb-4" style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--champ)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              <span className="w-7 h-px opacity-50" style={{ background: "var(--champ)" }} />
              Facilities
              <span className="w-7 h-px opacity-50" style={{ background: "var(--champ)" }} />
            </p>
            <h2 className="ab-font-disp" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 300, color: "#1a1a2e" }}>
              Advanced Medical <em style={{ fontStyle: "italic", color: "var(--navy2)" }}>Infrastructure</em>
            </h2>
            <p style={{ fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.9, color: "var(--muted)", maxWidth: 420, margin: "0 auto", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              State-of-the-art technology paired with warm, genuinely human care.
            </p>
          </div>

          <div
            ref={facRef}
            className={`ab-stagger${facVisible ? " on" : ""} grid grid-cols-2 md:grid-cols-4 gap-4`}
          >
            {facilities.map(({ icon: Icon, label, note }) => (
              <div
                key={label}
                className="ab-fac bg-white rounded-[14px] p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--border)" }}
              >
                <div style={{ color: "var(--champ)", marginBottom: 12 }}><Icon size={28} /></div>
                <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "#1a1a2e", marginBottom: 4, fontFamily: "'DM Sans',system-ui,sans-serif" }}>{label}</div>
                <div style={{ fontSize: "0.72rem", fontWeight: 300, color: "var(--muted)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ACHIEVEMENTS — navy bg
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-20" style={{ background: "var(--navy)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-3 mb-4" style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,.65)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              <span className="w-7 h-px opacity-40" style={{ background: "var(--champ)" }} />
              Our Achievements
              <span className="w-7 h-px opacity-40" style={{ background: "var(--champ)" }} />
            </p>
            <h2 className="ab-font-disp" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 300, color: "#fff" }}>
              Trusted By <em style={{ fontStyle: "italic", color: "var(--champ-lt)" }}>Thousands</em>
            </h2>
            <p style={{ fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(255,255,255,.35)", maxWidth: 440, margin: "0 auto", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
              Numbers that reflect twenty-five years of dedication to the people of Marathwada.
            </p>
          </div>

          <div
            ref={achieveRef}
            className={`ab-stagger${achieveVisible ? " on" : ""} grid grid-cols-2 md:grid-cols-4 gap-5`}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="relative text-center rounded-[18px] py-12 px-7 border transition-all duration-300 hover:border-[rgba(200,169,110,.4)] hover:bg-white/5"
                style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(200,169,110,.12)" }}
              >
                {/* gold top rule */}
                <span
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: "linear-gradient(90deg,transparent,var(--champ),transparent)", opacity: 0.55 }}
                />
                <span className="block ab-font-disp mb-2.5" style={{ fontSize: "clamp(2.4rem,3.5vw,3.2rem)", fontWeight: 600, color: "var(--champ)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {s.value}
                </span>
                <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA BANNER
      ══════════════════════════════════ */}
      <section className="py-20 md:py-28 px-8 md:px-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 rounded-[18px] py-16 px-10 md:px-20"
            style={{ background: "var(--champ-pal)", border: "1px solid var(--border)" }}
          >
            <div>
              <h2 className="ab-font-disp mb-3" style={{ fontSize: "clamp(1.9rem,3.2vw,2.9rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--navy)" }}>
                Your Health, Our{" "}
                <em style={{ fontStyle: "italic", color: "var(--navy2)" }}>Highest Priority</em>
              </h2>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.75, color: "var(--muted)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                Speak with a specialist today. Same-day appointments available across all major departments.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-[8px] font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  padding: "14px 28px",
                  background: "var(--navy)", color: "#fff",
                  fontSize: "0.78rem", letterSpacing: "0.07em", textTransform: "uppercase",
                  textDecoration: "none", fontFamily: "'DM Sans',system-ui,sans-serif",
                  boxShadow: "0 6px 24px rgba(10,22,40,.18)",
                }}
              >
                Book Appointment <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[8px] font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  padding: "14px 28px",
                  background: "var(--champ)", color: "var(--navy)",
                  fontSize: "0.78rem", letterSpacing: "0.07em", textTransform: "uppercase",
                  textDecoration: "none", fontFamily: "'DM Sans',system-ui,sans-serif",
                }}
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          VIDEO MODAL
      ══════════════════════════════════ */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(6,14,26,.96)", animation: "ab-ripple .01s" }}
          onClick={() => setVideoOpen(false)}
        >
          <button
            className="fixed top-7 right-8 flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 46, height: 46,
              background: "rgba(200,169,110,.12)", border: "1px solid rgba(200,169,110,.3)",
              color: "var(--champ-lt)", cursor: "pointer",
            }}
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
          >
            <X size={20} />
          </button>
          <video
            className="rounded-[14px] bg-black"
            style={{ width: "min(960px,92vw)", aspectRatio: "16/9", boxShadow: "0 32px 80px rgba(0,0,0,.6)" }}
            autoPlay controls
            onClick={(e) => e.stopPropagation()}
          >
            {/* Replace with your actual video or use an <iframe> for YouTube */}
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
}