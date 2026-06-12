"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════
   DESIGN TOKENS — Rainbow Professional Palette
   Inspired by reference: soft pastels, vibrant
   gradient sections, white base
═══════════════════════════════════════════════ */
const T = {
  // Base
  white:       "#ffffff",
  offwhite:    "#f8f9fc",
  lightGray:   "#f0f2f7",
  darkText:    "#1a2340",
  bodyText:    "#4a5568",
  mutedText:   "#8492a6",

  // Primary brand — deep blue-purple
  primary:     "#3b5bdb",
  primaryLight:"#748ffc",
  primaryMuted:"rgba(59,91,219,0.10)",
  primaryBorder:"rgba(59,91,219,0.22)",

  // Accent — warm orange/amber
  accent:      "#f76707",
  accentLight: "#ff922b",
  accentMuted: "rgba(247,103,7,0.10)",
  accentBorder:"rgba(247,103,7,0.25)",

  // Section bg colors — rainbow pastels
  bgLavender:  "#f3f0ff",   // purple tint
  bgMint:      "#f0fff4",   // green tint  
  bgPeach:     "#fff5f5",   // red/peach tint
  bgSky:       "#e8f4fd",   // blue tint
  bgYellow:    "#fffbeb",   // yellow tint
  bgDark:      "#1a2340",   // dark navy for CTAs

  // Card accent colors — vibrant rainbow
  cardRed:     "#f03e3e",
  cardOrange:  "#f76707",
  cardYellow:  "#f59f00",
  cardGreen:   "#2f9e44",
  cardTeal:    "#0c8599",
  cardBlue:    "#1971c2",
  cardPurple:  "#7048e8",
  cardPink:    "#d6336c",

  // Gradient section backgrounds
  gradPurple:  "linear-gradient(135deg, #f3f0ff 0%, #e5dbff 100%)",
  gradGreen:   "linear-gradient(135deg, #ebfbee 0%, #d3f9d8 100%)",
  gradBlue:    "linear-gradient(135deg, #e7f5ff 0%, #d0ebff 100%)",
  gradDark:    "linear-gradient(135deg, #1a2340 0%, #2d3a6b 100%)",
  gradAccent:  "linear-gradient(135deg, #f76707 0%, #f59f00 100%)",
  gradPrimary: "linear-gradient(135deg, #3b5bdb 0%, #7048e8 100%)",
};

const FONT_DISPLAY = "'Nunito', 'Poppins', system-ui, sans-serif";
const FONT_BODY    = "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";

const SITE_CONFIG     = { name: "Patil Multispeciality Hospital" };
const EMERGENCY_INFO  = { phone: "+91 98765 43210", ambulance: "108" };

/* ─── Icons ─── */
const Icons = {
  Users:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx={9} cy={7} r={4}/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Heart:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Award:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><circle cx={12} cy={8} r={6}/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Shield:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  Clock:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><circle cx={12} cy={12} r={10}/><polyline points="12 6 12 12 16 14"/></svg>,
  Ambulance:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M10 17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M20 17h1a1 1 0 0 0 1-1v-4a6 6 0 0 0-6-6h-1"/><path d="M14 17H9"/><circle cx={7} cy={19} r={2}/><circle cx={17} cy={19} r={2}/><line x1={16} y1={9} x2={16} y2={13}/><line x1={14} y1={11} x2={18} y2={11}/></svg>,
  Bed:        () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>,
  Microscope: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>,
  Globe:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><circle cx={12} cy={12} r={10}/><line x1={2} y1={12} x2={22} y2={12}/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Badge:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>,
  Phone:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Calendar:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18}><rect x={3} y={4} width={18} height={18} rx={2} ry={2}/><line x1={16} y1={2} x2={16} y2={6}/><line x1={8} y1={2} x2={8} y2={6}/><line x1={3} y1={10} x2={21} y2={10}/></svg>,
  MapPin:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx={12} cy={10} r={3}/></svg>,
  ChevronDown:() => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}><polyline points="6 9 12 15 18 9"/></svg>,
  ArrowRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}><line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/></svg>,
  CheckCircle:() => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Zap:        () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Eye:        () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx={12} cy={12} r={3}/></svg>,
  Star:       () => <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
};

/* ─── Animated counter ─── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState("0");
  useEffect(() => {
    if (!start) return;
    const num   = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[\d]/g, "");
    let t0 = null;
    const step = ts => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(e * num) + suffix);
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count || "0";
}

/* ─── Data ─── */
const PAGE_STATS = [
  { value: "25+",  label: "Years of Excellence", Icon: Icons.Award,  color: T.cardOrange, bg: "#fff4e6" },
  { value: "50+",  label: "Expert Specialists",  Icon: Icons.Users,  color: T.cardBlue,   bg: "#e7f5ff" },
  { value: "1L+",  label: "Patients Treated",    Icon: Icons.Heart,  color: T.cardRed,    bg: "#fff5f5" },
  { value: "300+", label: "Hospital Beds",        Icon: Icons.Bed,    color: T.cardGreen,  bg: "#ebfbee" },
];

const WHY_CARDS = [
  { Icon: Icons.Users,  title: "Expert Specialists",   desc: "50+ nationally recognised doctors across 40+ specialities, each bringing decades of expertise and dedication.", color: T.cardBlue,   bg: "#e7f5ff" },
  { Icon: Icons.Heart,  title: "Compassionate Care",   desc: "Every patient is a person, not a case number. We build care around dignity, empathy, and genuine human connection.", color: T.cardRed,    bg: "#fff5f5" },
  { Icon: Icons.Award,  title: "Clinical Excellence",  desc: "Evidence-based protocols, continuous research, and NABH-accredited standards keep us at the forefront of medicine.", color: T.cardOrange, bg: "#fff4e6" },
  { Icon: Icons.Shield, title: "Patient Safety First", desc: "Rigorous infection control, digital safety checklists, and real-time monitoring ensure your protection at every step.", color: T.cardGreen,  bg: "#ebfbee" },
  { Icon: Icons.Zap,    title: "Advanced Technology",  desc: "3T MRI, robotic surgery, 128-slice CT, and fully automated diagnostics — precision tools for precise care.", color: T.cardPurple, bg: "#f3f0ff" },
  { Icon: Icons.Clock,  title: "24×7 Emergency",       desc: "Our trauma bay, ICU, and ambulance fleet are staffed round the clock so critical care is never more than minutes away.", color: T.cardTeal,   bg: "#e3fafc" },
];

const TIMELINE = [
  { year: "1999", title: "Founded",            desc: "Established in Latur with 50 beds and a mission to bring quality healthcare to Marathwada.", color: T.cardBlue   },
  { year: "2005", title: "First Expansion",    desc: "Grew to 150 beds. Added Cardiology, Neurology, and advanced surgical units.", color: T.cardGreen  },
  { year: "2012", title: "NABH Accreditation", desc: "Received prestigious NABH certification, validating our commitment to quality and safety.", color: T.cardOrange },
  { year: "2018", title: "Robotic Surgery",    desc: "Became one of the first hospitals in the region to offer robotic-assisted surgical procedures.", color: T.cardPurple },
  { year: "2024", title: "New Wing Launch",    desc: "Opened a 300-bed multi-floor tower with state-of-the-art ICU and diagnostic infrastructure.", color: T.cardRed   },
];

const ACCREDITATIONS = [
  { Icon: Icons.Badge,  title: "NABH Accredited", desc: "National Accreditation Board for Hospitals — the gold standard in Indian healthcare quality.", color: T.cardBlue,   bg: "#e7f5ff" },
  { Icon: Icons.Globe,  title: "ISO 9001:2015",   desc: "International quality management certification for consistent, reliable patient outcomes.",   color: T.cardGreen,  bg: "#ebfbee" },
  { Icon: Icons.Shield, title: "JCI Certified",   desc: "Joint Commission International — the highest benchmark in global hospital excellence.",       color: T.cardPurple, bg: "#f3f0ff" },
];

const TEAM = [
  { name: "Dr. Rajesh Patil",    role: "Chairman & Chief Surgeon",          exp: "28 yrs", dept: "Surgery",    color: T.cardOrange },
  { name: "Dr. Sunita Kulkarni", role: "Chief Cardiologist",                exp: "22 yrs", dept: "Cardiology", color: T.cardRed    },
  { name: "Dr. Anil Sharma",     role: "Head of Neurology",                 exp: "19 yrs", dept: "Neurology",  color: T.cardBlue   },
  { name: "Dr. Priya Deshmukh",  role: "Director, Gynecology & Obstetrics", exp: "17 yrs", dept: "Gynecology", color: T.cardPink   },
];

/* ─── Pill badge ─── */
const Pill = ({ label, color, bg }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 7,
    padding: "5px 16px", borderRadius: 100,
    background: bg || `${color}18`,
    border: `1.5px solid ${color}35`,
    color: color,
    fontFamily: FONT_BODY, fontSize: "11px", fontWeight: 700,
    letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
  }}>
    <span style={{ width: 5, height: 5, borderRadius: "50%", background: color, display: "inline-block" }} />
    {label}
  </div>
);

/* ─── Section header ─── */
const SectionHead = ({ tag, tagColor = T.primary, title, sub, center, light }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: 52 }}>
    <Pill label={tag} color={light ? "#fff" : tagColor} bg={light ? "rgba(255,255,255,0.12)" : undefined} />
    <h2 style={{
      fontFamily: FONT_DISPLAY,
      fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)",
      fontWeight: 800, lineHeight: 1.15,
      color: light ? "#fff" : T.darkText,
      letterSpacing: "-0.02em", margin: 0,
    }} dangerouslySetInnerHTML={{ __html: title }} />
    {sub && <p style={{
      fontFamily: FONT_BODY, fontSize: "1rem",
      color: light ? "rgba(255,255,255,0.72)" : T.bodyText,
      lineHeight: 1.8, maxWidth: 520,
      margin: center ? "14px auto 0" : "14px 0 0",
      fontWeight: 400,
    }}>{sub}</p>}
  </div>
);

/* ─── Stat card ─── */
function StatCard({ value, label, Icon, color, bg, delay, started }) {
  const count = useCounter(value, 2000 + delay, started);
  return (
    <div style={{
      padding: "36px 24px", textAlign: "center", background: T.white,
      borderRadius: 18, border: `1.5px solid ${color}22`,
      boxShadow: "0 4px 20px rgba(26,35,64,0.06)",
      transition: "transform .25s, box-shadow .25s", cursor: "default",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${color}25`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,35,64,0.06)"; }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 16, margin: "0 auto 16px",
        background: bg, color: color,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}><Icon /></div>
      <div style={{
        fontFamily: FONT_DISPLAY, fontSize: "2.4rem", fontWeight: 800,
        color: color, letterSpacing: "-0.02em", lineHeight: 1,
      }}>{count}</div>
      <div style={{
        fontFamily: FONT_BODY, fontSize: "12px", color: T.mutedText,
        textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginTop: 8,
      }}>{label}</div>
    </div>
  );
}

/* ════════════════════════════════
   PAGE COMPONENT
════════════════════════════════ */
export default function AboutPage() {
  const statsRef = useRef(null);
  const [statsOn, setStatsOn] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Nunito:wght@700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Inter',system-ui,sans-serif;background:#fff;color:${T.darkText};-webkit-font-smoothing:antialiased}

        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes cardIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:none}}
        @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(59,91,219,0.6)}70%{box-shadow:0 0 0 10px rgba(59,91,219,0)}100%{box-shadow:0 0 0 0 rgba(59,91,219,0)}}
        @keyframes cueFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}

        .a0{animation:fadeUp .8s .2s ease both}
        .a1{animation:fadeUp .8s .35s ease both}
        .a2{animation:fadeUp .8s .5s ease both}
        .a3{animation:fadeIn  .6s .65s ease both}
        .a4{animation:fadeUp .8s .75s ease both}
        .a5{animation:fadeUp .8s .9s ease both}
        .c0{animation:cardIn .7s .9s ease both}
        .c1{animation:cardIn .7s 1.05s ease both}
        .c2{animation:cardIn .7s 1.2s ease both}

        .btn-primary{transition:transform .22s,box-shadow .22s}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(59,91,219,0.4)!important}
        .btn-ghost:hover{background:rgba(255,255,255,0.18)!important;transform:translateY(-2px)}
        .why-card:hover{transform:translateY(-6px)!important;box-shadow:0 20px 48px rgba(26,35,64,0.10)!important}
        .team-card:hover{transform:translateY(-5px)!important;box-shadow:0 18px 44px rgba(26,35,64,0.10)!important}
        .accred-card:hover{transform:translateY(-4px)!important;box-shadow:0 14px 36px rgba(26,35,64,0.08)!important}
        .ec-card:hover{transform:translateY(-3px);box-shadow:0 10px 32px rgba(26,35,64,0.12)!important}
        .tl-card:hover{transform:translateY(-2px)!important}

        @media(max-width:960px){.hero-floats{display:none!important}}
        @media(max-width:780px){.about-split{grid-template-columns:1fr!important}.timeline-inner{padding:0!important}}
        @media(max-width:680px){.why-grid{grid-template-columns:1fr 1fr!important}.team-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:640px){.stats-grid{grid-template-columns:1fr 1fr!important}.accred-grid{grid-template-columns:1fr!important}}
        @media(max-width:460px){.team-grid{grid-template-columns:1fr!important}.why-grid{grid-template-columns:1fr!important}.hero-btns{flex-direction:column!important}}
      `}</style>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        overflow: "hidden", background: T.darkText,
      }}>
        {/* Parallax bg */}
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
          alt="Hospital"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "115%",
            top: "-7.5%", objectFit: "cover", objectPosition: "center 35%",
            transform: `translateY(${scrollY * 0.18}px)`, willChange: "transform",
          }}
        />
        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,20,45,0.62)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,20,45,0.3) 0%, rgba(15,20,45,0) 35%, rgba(15,20,45,0) 50%, rgba(15,20,45,0.92) 80%, rgba(15,20,45,1) 100%)" }} />
        {/* Color accent overlays — rainbow gradient washes */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(59,91,219,0.35) 0%, transparent 50%)", mixBlendMode: "screen" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "45%", height: "60%", background: "radial-gradient(ellipse at bottom right, rgba(112,72,232,0.22) 0%, transparent 70%)" }} />

        {/* Top rainbow accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, zIndex: 15, background: "linear-gradient(90deg, #3b5bdb, #7048e8, #d6336c, #f76707, #f59f00, #2f9e44, #0c8599)" }} />

        {/* Floating cards */}
        <div className="hero-floats" style={{
          position: "absolute", right: "clamp(24px,5vw,72px)", top: "50%",
          transform: "translateY(-42%)", display: "flex", flexDirection: "column", gap: 12, zIndex: 12,
        }}>
          {[
            { Icon: Icons.Users, n: "50+",  l: "Expert Specialists", color: T.cardBlue   },
            { Icon: Icons.Award, n: "25+",  l: "Years Excellence",   color: T.cardOrange },
            { Icon: Icons.Clock, n: "24/7", l: "Emergency Care",     color: T.cardGreen  },
          ].map((c, i) => (
            <div key={c.l} className={`c${i}`} style={{
              display: "flex", alignItems: "center", gap: 14, padding: "14px 20px",
              borderRadius: 16, background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(20px)",
              minWidth: 200,
            }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, flexShrink: 0, background: `${c.color}22`, border: `1.5px solid ${c.color}50`, color: c.color, display: "flex", alignItems: "center", justifyContent: "center" }}><c.Icon /></div>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.3rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{c.n}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: 3, letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.l}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", width: "100%", padding: "0 clamp(20px,4vw,52px) 96px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", fontFamily: FONT_BODY }}>Home</a>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <span style={{ color: T.primaryLight, fontSize: 13, fontWeight: 600, fontFamily: FONT_BODY }}>About Us</span>
          </nav>

          <div style={{ maxWidth: 620 }}>
            <div className="a0" style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "7px 18px 7px 12px", borderRadius: 100,
              background: "rgba(59,91,219,0.22)", border: "1px solid rgba(116,143,252,0.4)",
              color: T.primaryLight, fontFamily: FONT_BODY, fontSize: "11.5px", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.primaryLight, animation: "pulse 2.2s 1.5s infinite" }} />
              Latur's Premier Multispeciality Hospital · Since 1999
            </div>

            <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.8rem,6vw,5.2rem)", fontWeight: 900, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.025em", marginBottom: 6 }}>
              <span className="a1" style={{ display: "block" }}>Healing With</span>
              <span className="a2" style={{ display: "block" }}>Heart &amp;</span>
              <span className="a2" style={{
                display: "block", fontStyle: "italic",
                background: "linear-gradient(90deg, #748ffc, #e599f7, #ff8787)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Excellence.</span>
            </h1>

            <div className="a3" style={{ width: 64, height: 3, margin: "22px 0", background: "linear-gradient(90deg, #3b5bdb, #7048e8, transparent)", borderRadius: 4 }} />

            <p className="a4" style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.82, maxWidth: 480, fontWeight: 400 }}>
              For over 25 years, {SITE_CONFIG.name} has been the cornerstone of trusted, compassionate, and world-class healthcare for Latur and the Marathwada region.
            </p>

            <div className="hero-btns a5" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a href="/appointments" className="btn-primary" style={{
                display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 30px", borderRadius: 12,
                background: T.gradPrimary,
                color: "#fff", fontFamily: FONT_BODY, fontWeight: 700, fontSize: "0.92rem",
                textDecoration: "none", letterSpacing: "0.02em",
                boxShadow: "0 8px 28px rgba(59,91,219,0.45)",
              }}>
                <Icons.Calendar /> Book Appointment <Icons.ArrowRight />
              </a>
              <a href={`tel:${EMERGENCY_INFO.phone}`} className="btn-ghost" style={{
                display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 28px", borderRadius: 12,
                background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.22)",
                color: "#fff", fontFamily: FONT_BODY, fontWeight: 600, fontSize: "0.92rem",
                textDecoration: "none", backdropFilter: "blur(12px)", transition: "all .25s",
              }}>
                <Icons.Phone /> Call Emergency
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 15,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
          color: "rgba(255,255,255,0.4)", fontFamily: FONT_BODY, fontSize: "9.5px", letterSpacing: "0.16em",
          textTransform: "uppercase", animation: "cueFloat 2.8s 2s ease-in-out infinite",
        }}>
          <span>Scroll</span><Icons.ChevronDown />
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to bottom, transparent, #fff)", pointerEvents: "none" }} />
      </section>

      {/* ══════════════════════════
          STATS BAR
      ══════════════════════════ */}
      <div ref={statsRef} style={{ padding: "52px 0", background: T.offwhite, borderBottom: "1px solid rgba(26,35,64,0.06)" }}>
        <div className="stats-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {PAGE_STATS.map((s, i) => <StatCard key={s.label} {...s} delay={i * 110} started={statsOn} />)}
        </div>
      </div>

      {/* ══════════════════════════
          ABOUT SPLIT
      ══════════════════════════ */}
      <section style={{ padding: "100px 0", background: T.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>
          <div className="about-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(36px,6vw,80px)", alignItems: "center" }}>

            {/* Image side */}
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4/3.2" }}>
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80" alt="Hospital" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,35,64,0.55) 0%, transparent 55%)", zIndex: 1 }} />
              {/* Corner rainbow accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, zIndex: 3, background: "linear-gradient(90deg, #3b5bdb, #7048e8, #d6336c, #f76707)" }} />
              {/* Overlay badge */}
              <div style={{
                position: "absolute", bottom: 22, left: 22, zIndex: 3,
                background: "rgba(255,255,255,0.95)", borderRadius: 16,
                padding: "14px 18px", display: "flex", alignItems: "center", gap: 14,
                boxShadow: "0 8px 28px rgba(26,35,64,0.15)",
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: T.gradAccent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><Icons.Award /></div>
                <div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.25rem", fontWeight: 800, color: T.darkText, lineHeight: 1.1 }}>25+ Years</div>
                  <div style={{ fontFamily: FONT_BODY, fontSize: "11px", color: T.mutedText, marginTop: 2 }}>of Trusted Healthcare</div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <Pill label="Who We Are" color={T.primary} />
              <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.8rem,3.2vw,2.6rem)", fontWeight: 800, color: T.darkText, letterSpacing: "-0.018em", lineHeight: 1.15, marginBottom: 22 }}>
                Committed To Quality <em style={{ color: T.primary, fontStyle: "italic" }}>Healthcare</em>
              </h2>

              {/* Pull quote */}
              <div style={{ borderLeft: `3px solid ${T.primary}`, padding: "14px 20px", marginBottom: 22, background: T.primaryMuted, borderRadius: "0 12px 12px 0" }}>
                <p style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontSize: "1rem", color: T.darkText, lineHeight: 1.65, margin: 0, fontWeight: 700 }}>
                  "We don't just treat illness — we restore lives, rebuild hope, and return people to those who need them most."
                </p>
              </div>

              <p style={{ fontFamily: FONT_BODY, color: T.bodyText, lineHeight: 1.88, fontSize: "0.95rem", marginBottom: 14 }}>
                PMH Multispeciality Hospital is a leading healthcare institution in Latur, dedicated to providing advanced medical treatments with a patient-first philosophy. We combine modern infrastructure with an experienced team across 40+ specialisations.
              </p>
              <p style={{ fontFamily: FONT_BODY, color: T.bodyText, lineHeight: 1.88, fontSize: "0.95rem", marginBottom: 28 }}>
                From routine consultations to complex robotic surgeries, we deliver exceptional care — with dignity, compassion, and clinical precision at every step.
              </p>

              {/* Checklist */}
              {[
                { t: "NABH Accredited · ISO 9001:2015 Certified", c: T.cardGreen  },
                { t: "50+ Specialists across 40+ departments",    c: T.cardBlue   },
                { t: "300+ beds with modern ICU & NICU",          c: T.cardOrange },
                { t: "24×7 emergency care & ambulance fleet",     c: T.cardRed    },
              ].map(item => (
                <div key={item.t} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ color: item.c, flexShrink: 0 }}><Icons.CheckCircle /></div>
                  <span style={{ fontFamily: FONT_BODY, fontSize: "0.88rem", color: T.bodyText, fontWeight: 500 }}>{item.t}</span>
                </div>
              ))}

              {/* Mini stats */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
                {[
                  { n: "300+", l: "Hospital Beds", c: T.cardGreen  },
                  { n: "50+",  l: "Expert Doctors", c: T.cardBlue  },
                  { n: "24/7", l: "Emergency",      c: T.cardRed   },
                ].map(s => (
                  <div key={s.l} style={{
                    padding: "16px 22px", borderRadius: 14, background: `${s.c}10`,
                    border: `1.5px solid ${s.c}25`, textAlign: "center", minWidth: 90,
                    transition: "all .25s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = `${s.c}55`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = `${s.c}25`; }}
                  >
                    <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.6rem", fontWeight: 800, color: s.c, lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: "11px", color: T.mutedText, marginTop: 5, fontWeight: 500 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          MISSION & VISION
      ══════════════════════════ */}
      <section style={{ padding: "96px 0", background: T.bgLavender }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>
          <SectionHead tag="Our Purpose" tagColor={T.cardPurple} title={`Mission &amp; <em style='color:${T.cardPurple};font-style:italic'>Vision</em>`} center />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="about-split">
            {[
              { Icon: Icons.Eye,   title: "Our Mission", body: "To provide accessible, affordable, and world-class healthcare services with compassion, competence, and commitment — treating every patient with dignity, respect, and the best of modern medicine.", tag: "What We Do", color: T.cardBlue, grad: T.gradPrimary },
              { Icon: Icons.Globe, title: "Our Vision",  body: "To become the most trusted multispeciality hospital in Maharashtra — recognised for clinical excellence, continuous innovation, and outstanding patient satisfaction across every touchpoint.", tag: "Where We're Going", color: T.cardPurple, grad: "linear-gradient(135deg, #7048e8 0%, #d6336c 100%)" },
            ].map(c => (
              <div key={c.title} style={{
                borderRadius: 24, padding: "48px 40px",
                background: c.grad,
                position: "relative", overflow: "hidden",
                boxShadow: `0 16px 48px ${c.color}30`,
              }}>
                <div style={{ position: "absolute", bottom: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
                <div style={{ fontFamily: FONT_BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>{c.tag}</div>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.15)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}><c.Icon /></div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: 14 }}>{c.title}</h3>
                <p style={{ fontFamily: FONT_BODY, lineHeight: 1.82, color: "rgba(255,255,255,0.78)", fontSize: "0.94rem" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          WHY CHOOSE US
      ══════════════════════════ */}
      <section style={{ padding: "100px 0", background: T.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>
          <SectionHead tag="Why Choose Us" tagColor={T.cardOrange} title={`Care You Can <em style='color:${T.cardOrange};font-style:italic'>Trust</em>`} sub="Every decision we make is guided by one principle — your wellbeing comes first." center />
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {WHY_CARDS.map(({ Icon, title, desc, color, bg }) => (
              <div key={title} className="why-card" style={{
                background: T.white, borderRadius: 20, padding: "32px 26px",
                border: `1.5px solid ${color}18`,
                boxShadow: "0 4px 16px rgba(26,35,64,0.05)",
                transition: "transform .3s, box-shadow .3s", cursor: "default",
                position: "relative", overflow: "hidden",
              }}>
                {/* Top color strip */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, borderRadius: "20px 20px 0 0" }} />
                <div style={{ width: 52, height: 52, borderRadius: 14, background: bg, color: color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}><Icon /></div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.12rem", fontWeight: 800, color: T.darkText, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: FONT_BODY, color: T.bodyText, fontSize: "0.87rem", lineHeight: 1.78 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TIMELINE
      ══════════════════════════ */}
      <section style={{ padding: "96px 0", background: T.bgMint, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(47,158,68,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)", position: "relative", zIndex: 1 }}>
          <SectionHead tag="Our Journey" tagColor={T.cardGreen} title={`25 Years of <em style='color:${T.cardGreen};font-style:italic'>Excellence</em>`} center />

          <div className="timeline-inner" style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
            {/* Center line */}
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
              background: "linear-gradient(to bottom, transparent, rgba(26,35,64,0.12) 10%, rgba(26,35,64,0.12) 90%, transparent)",
              transform: "translateX(-50%)",
            }} />
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.year} style={{
                  display: "flex", alignItems: "center",
                  marginBottom: i < TIMELINE.length - 1 ? 36 : 0,
                  flexDirection: isLeft ? "row" : "row-reverse",
                }}>
                  <div className="tl-card" style={{
                    flex: 1, padding: "22px 26px", borderRadius: 16,
                    background: T.white, border: `1.5px solid ${item.color}22`,
                    marginRight: isLeft ? 30 : 0, marginLeft: isLeft ? 0 : 30,
                    boxShadow: "0 4px 16px rgba(26,35,64,0.05)",
                    transition: "transform .25s, box-shadow .25s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 32px ${item.color}20`; e.currentTarget.style.borderColor = `${item.color}44`; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,35,64,0.05)"; e.currentTarget.style.borderColor = `${item.color}22`; }}
                  >
                    <div style={{
                      display: "inline-block", padding: "2px 12px", borderRadius: 100,
                      background: `${item.color}15`, color: item.color,
                      fontFamily: FONT_BODY, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}>{item.year}</div>
                    <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.05rem", fontWeight: 800, color: T.darkText, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: "0.84rem", color: T.bodyText, lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                  {/* Center dot */}
                  <div style={{
                    width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                    background: item.color, border: `3px solid ${T.bgMint}`,
                    boxShadow: `0 0 0 4px ${item.color}30`,
                    zIndex: 2,
                  }} />
                  <div style={{ flex: 1 }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          LEADERSHIP TEAM
      ══════════════════════════ */}
      <section style={{ padding: "100px 0", background: T.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>
          <SectionHead tag="Our Team" tagColor={T.cardBlue} title={`Meet Our <em style='color:${T.cardBlue};font-style:italic'>Leaders</em>`} sub="Experienced specialists who combine world-class training with heartfelt commitment." center />
          <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {TEAM.map((doc, i) => {
              const initials = doc.name.split(" ").map(w => w[0]).slice(0, 2).join("");
              const bgs = ["#e7f5ff", "#fff5f5", "#fff4e6", "#f8f0fc"];
              return (
                <div key={doc.name} className="team-card" style={{
                  borderRadius: 20, overflow: "hidden",
                  border: `1.5px solid ${doc.color}20`,
                  background: T.white,
                  boxShadow: "0 4px 16px rgba(26,35,64,0.05)",
                  transition: "transform .3s, box-shadow .3s", cursor: "default",
                }}>
                  <div style={{ height: 130, background: bgs[i % bgs.length], display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    {/* Color top bar */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: doc.color }} />
                    <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, height: 28, background: T.white, borderRadius: "50% 50% 0 0 / 28px 28px 0 0" }} />
                    <div style={{ width: 68, height: 68, borderRadius: "50%", background: T.white, border: `2.5px solid ${doc.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_DISPLAY, fontSize: "1.35rem", fontWeight: 800, color: doc.color, zIndex: 1, boxShadow: `0 4px 14px ${doc.color}30` }}>{initials}</div>
                  </div>
                  <div style={{ padding: "6px 20px 26px", textAlign: "center" }}>
                    <div style={{ fontFamily: FONT_DISPLAY, fontSize: "0.98rem", fontWeight: 800, color: T.darkText, marginBottom: 4 }}>{doc.name}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: "0.77rem", color: T.bodyText, lineHeight: 1.4, marginBottom: 14 }}>{doc.role}</div>
                    <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                      <span style={{ padding: "3px 10px", borderRadius: 100, background: `${doc.color}12`, border: `1px solid ${doc.color}30`, fontFamily: FONT_BODY, fontSize: "10px", fontWeight: 700, color: doc.color }}>{doc.dept}</span>
                      <span style={{ padding: "3px 10px", borderRadius: 100, background: T.lightGray, fontFamily: FONT_BODY, fontSize: "10px", fontWeight: 600, color: T.mutedText }}>{doc.exp} exp</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          EMERGENCY SECTION
      ══════════════════════════ */}
      <section style={{ padding: "72px 0", background: T.bgSky }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <Pill label="Live Emergency Services" color={T.cardRed} />
              <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, color: T.darkText }}>
                We're <em style={{ color: T.cardRed, fontStyle: "italic" }}>Always</em> Here For You
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", border: `1.5px solid ${T.cardGreen}30`, borderRadius: 50, background: "#ebfbee" }}>
              <div style={{ color: T.cardGreen }}><Icons.Clock /></div>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.1rem", fontWeight: 800, color: T.darkText, lineHeight: 1 }}>24 / 7</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "10px", color: T.mutedText, textTransform: "uppercase", letterSpacing: "0.08em" }}>Always Open</div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="about-split">
            {/* Helpline */}
            <a href={`tel:${EMERGENCY_INFO.phone}`} className="ec-card" style={{
              display: "flex", alignItems: "center", gap: 14, padding: "1.2rem 1.4rem",
              border: `1.5px solid ${T.cardRed}22`, borderRadius: 16,
              background: T.white, textDecoration: "none", color: "inherit",
              boxShadow: "0 4px 16px rgba(26,35,64,0.06)", transition: "transform .18s, box-shadow .18s",
            }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: "#fff5f5", border: `1.5px solid ${T.cardRed}25`, display: "flex", alignItems: "center", justifyContent: "center", color: T.cardRed }}><Icons.Phone /></div>
              <div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: T.cardRed, marginBottom: 4 }}>Emergency Helpline</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.25rem", fontWeight: 800, color: T.darkText, lineHeight: 1.1 }}>{EMERGENCY_INFO.phone}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "11.5px", color: T.mutedText, marginTop: 4 }}>Tap to call instantly</div>
              </div>
            </a>

            {/* Ambulance */}
            <a href={`tel:${EMERGENCY_INFO.ambulance}`} className="ec-card" style={{
              display: "flex", alignItems: "center", gap: 14, padding: "1.2rem 1.4rem",
              border: `1.5px solid ${T.cardOrange}22`, borderRadius: 16,
              background: T.white, textDecoration: "none", color: "inherit",
              boxShadow: "0 4px 16px rgba(26,35,64,0.06)", transition: "transform .18s, box-shadow .18s",
            }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: "#fff4e6", border: `1.5px solid ${T.cardOrange}25`, display: "flex", alignItems: "center", justifyContent: "center", color: T.cardOrange }}><Icons.Ambulance /></div>
              <div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: T.cardOrange, marginBottom: 4 }}>Ambulance Service</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.25rem", fontWeight: 800, color: T.darkText, lineHeight: 1.1 }}>{EMERGENCY_INFO.ambulance}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "11.5px", color: T.mutedText, marginTop: 4 }}>Rapid response · citywide</div>
              </div>
            </a>

            {/* Location */}
            <div className="ec-card" style={{
              display: "flex", alignItems: "center", gap: 14, padding: "1.2rem 1.4rem",
              border: `1.5px solid ${T.cardTeal}22`, borderRadius: 16,
              background: T.white,
              boxShadow: "0 4px 16px rgba(26,35,64,0.06)", transition: "transform .18s, box-shadow .18s",
            }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: "#e3fafc", border: `1.5px solid ${T.cardTeal}25`, display: "flex", alignItems: "center", justifyContent: "center", color: T.cardTeal }}><Icons.MapPin /></div>
              <div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: T.cardTeal, marginBottom: 4 }}>Our Location</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "14px", fontWeight: 700, color: T.darkText, lineHeight: 1.4 }}>Latur, Maharashtra</div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONT_BODY, fontSize: "12px", color: T.cardTeal, marginTop: 4, display: "inline-block", textDecoration: "none", fontWeight: 600 }}>Get directions →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          ACCREDITATIONS
      ══════════════════════════ */}
      <section style={{ padding: "96px 0", background: T.bgLavender, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(112,72,232,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)", position: "relative", zIndex: 1 }}>
          <SectionHead tag="Recognition" tagColor={T.cardPurple} title={`Accredited &amp; <em style='color:${T.cardPurple};font-style:italic'>Recognised</em>`} center />
          <div className="accred-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {ACCREDITATIONS.map(a => (
              <div key={a.title} className="accred-card" style={{
                border: `1.5px solid ${a.color}20`, borderRadius: 20, padding: "38px 30px", textAlign: "center",
                background: T.white, transition: "transform .3s, box-shadow .3s", cursor: "default",
                boxShadow: "0 4px 16px rgba(26,35,64,0.05)",
              }}>
                {/* Top color bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: a.color, borderRadius: "20px 20px 0 0", display: "none" }} />
                <div style={{ width: 64, height: 64, borderRadius: "50%", margin: "0 auto 18px", background: a.bg, border: `1.5px solid ${a.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color }}><a.Icon /></div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.2rem", fontWeight: 800, color: T.darkText, marginBottom: 10 }}>{a.title}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "0.85rem", color: T.bodyText, lineHeight: 1.72 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA
      ══════════════════════════ */}
      <section style={{ padding: "100px 24px", textAlign: "center", background: T.gradDark, position: "relative", overflow: "hidden" }}>
        {/* Rainbow top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #3b5bdb, #7048e8, #d6336c, #f76707, #f59f00, #2f9e44, #0c8599)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", bottom: -120, left: "50%", transform: "translateX(-50%)", width: 700, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,91,219,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(112,72,232,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto" }}>
          <Pill label="Ready to Get Started?" color={T.primaryLight} bg="rgba(116,143,252,0.15)" />
          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem,3.8vw,2.9rem)", fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.15 }}>
            Your Health Journey<br />
            <em style={{ fontStyle: "italic", background: "linear-gradient(90deg, #748ffc, #e599f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Begins Here</em>
          </h2>
          <p style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.65)", lineHeight: 1.82, marginBottom: 36, fontSize: "0.97rem" }}>
            Book a consultation with our specialists today. Same-day appointments available for urgent cases.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/appointments" className="btn-primary" style={{
              padding: "14px 34px", borderRadius: 12, background: T.gradPrimary,
              color: "#fff", fontFamily: FONT_BODY, fontWeight: 700, fontSize: "0.93rem",
              textDecoration: "none", boxShadow: "0 8px 28px rgba(59,91,219,0.45)", transition: "transform .25s, box-shadow .25s",
            }}>Book Appointment</a>
            <a href={`tel:${EMERGENCY_INFO.phone}`} className="btn-ghost" style={{
              padding: "14px 34px", borderRadius: 12, background: "rgba(255,255,255,0.08)",
              color: "#fff", fontFamily: FONT_BODY, fontWeight: 600, fontSize: "0.93rem",
              textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", transition: "all .25s",
            }}>Call Emergency</a>
          </div>
        </div>
      </section>
    </>
  );
}