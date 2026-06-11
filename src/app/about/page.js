"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   MOCK stubs – replace with your real imports
   ─────────────────────────────────────────*/
const Breadcrumb = ({ items }) => (
  <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <a href="/" style={{ color: "rgba(212,175,95,0.6)", fontSize: 13, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>Home</a>
    <span style={{ color: "rgba(212,175,95,0.35)", fontSize: 13 }}>/</span>
    {items.map((it) => (
      <span key={it.label} style={{ color: "#D4AF5F", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}>{it.label}</span>
    ))}
  </nav>
);

const AppointmentCTA = () => (
  <section style={{
    background: "linear-gradient(135deg,#0a1628 0%,#0f2044 50%,#0a1628 100%)",
    padding: "90px 24px", textAlign: "center", position: "relative", overflow: "hidden"
  }}>
    {/* Gold dot grid */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "radial-gradient(rgba(212,175,95,0.08) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }} />
    {/* Gold arc accent */}
    <div style={{
      position: "absolute", bottom: -120, left: "50%", transform: "translateX(-50%)",
      width: 600, height: 240, borderRadius: "50%",
      border: "1px solid rgba(212,175,95,0.1)", pointerEvents: "none"
    }} />
    <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 100, background: "rgba(212,175,95,0.1)", border: "1px solid rgba(212,175,95,0.25)", color: "#D4AF5F", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>Ready to Get Started?</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.8vw,3rem)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.15 }}>
        Your Health Journey<br /><em style={{ color: "#D4AF5F", fontStyle: "italic" }}>Begins Here</em>
      </h2>
      <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 36, fontSize: "0.97rem", fontFamily: "'DM Sans', sans-serif" }}>
        Book a consultation with our specialists today. Same-day appointments available for urgent cases.
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/appointments" style={{
          padding: "14px 34px", borderRadius: 8,
          background: "linear-gradient(135deg,#C9A84C,#D4AF5F,#E8C97A)",
          color: "#0a1628", fontWeight: 700, fontSize: "0.92rem",
          textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 8px 28px rgba(212,175,95,0.35)", letterSpacing: "0.03em"
        }}>Book Appointment</a>
        <a href="tel:+912482XXXXXX" style={{
          padding: "14px 34px", borderRadius: 8,
          background: "rgba(255,255,255,0.05)", color: "#fff",
          fontWeight: 600, fontSize: "0.92rem", textDecoration: "none",
          border: "1px solid rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif",
          backdropFilter: "blur(10px)"
        }}>Call Emergency</a>
      </div>
    </div>
  </section>
);

const SITE_CONFIG = { name: "PMH Multispeciality Hospital" };
const STATS = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Expert Specialists" },
  { value: "1L+", label: "Patients Treated" },
  { value: "30+", label: "Departments" },
];

/* ─────────────────────────────────────────
   Inline SVG Icons
   ─────────────────────────────────────────*/
const Icons = {
  Users: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx={9} cy={7} r={4}/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Heart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Award: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><circle cx={12} cy={8} r={6}/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Shield: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  Clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><circle cx={12} cy={12} r={10}/><polyline points="12 6 12 12 16 14"/></svg>,
  Ambulance: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><path d="M10 17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M20 17h1a1 1 0 0 0 1-1v-4a6 6 0 0 0-6-6h-1"/><path d="M14 17H9"/><circle cx={7} cy={19} r={2}/><circle cx={17} cy={19} r={2}/><line x1={16} y1={9} x2={16} y2={13}/><line x1={14} y1={11} x2={18} y2={11}/></svg>,
  Bed: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>,
  Microscope: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={22} height={22}><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>,
  ChevronDown: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}><polyline points="6 9 12 15 18 9"/></svg>,
  Star: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={14} height={14}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={14} height={14}><circle cx={12} cy={12} r={10}/><line x1={2} y1={12} x2={22} y2={12}/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Badge: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={14} height={14}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>,
  Trending: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={14} height={14}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={20} height={20}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} width={20} height={20}><rect x={3} y={4} width={18} height={18} rx={2} ry={2}/><line x1={16} y1={2} x2={16} y2={6}/><line x1={8} y1={2} x2={8} y2={6}/><line x1={3} y1={10} x2={21} y2={10}/></svg>,
  Plus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}><line x1={12} y1={5} x2={12} y2={19}/><line x1={5} y1={12} x2={19} y2={12}/></svg>,
};

/* ─────────────────────────────────────────
   Animated Counter Hook
   ─────────────────────────────────────────*/
function useCounter(target, duration = 2200, start = false) {
  const [count, setCount] = useState("0");
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[\d]/g, "");
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({ value, label, icon: Icon, delay = 0, started }) {
  const count = useCounter(value, 2200 + delay, started);
  return (
    <div className="stat-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-icon"><Icon /></div>
      <div className="stat-value">{count || "0"}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Data
   ─────────────────────────────────────────*/
const whyChooseUs = [
  { icon: Icons.Users, title: "Experienced Doctors", desc: "50+ nationally recognised specialists across every major discipline, bringing decades of combined expertise to your care.", color: "#C9A84C", bg: "rgba(201,168,76,0.08)", border: "rgba(201,168,76,0.2)" },
  { icon: Icons.Heart, title: "Compassionate Care", desc: "Patient-centred treatment built on empathy, dignity, and respect — because you're a person, not a case number.", color: "#5B8FD4", bg: "rgba(91,143,212,0.08)", border: "rgba(91,143,212,0.2)" },
  { icon: Icons.Award, title: "Clinical Excellence", desc: "Evidence-based medicine, continuous education, and a culture of quality that keeps us at the forefront of healthcare.", color: "#C9A84C", bg: "rgba(201,168,76,0.08)", border: "rgba(201,168,76,0.2)" },
  { icon: Icons.Shield, title: "Patient Safety First", desc: "Rigorous infection control, digital safety protocols, and NABH-grade standards that protect you at every touchpoint.", color: "#5B8FD4", bg: "rgba(91,143,212,0.08)", border: "rgba(91,143,212,0.2)" },
];

const facilities = [
  { icon: Icons.Bed, title: "Modern Patient Rooms", desc: "Private & semi-private rooms with 24×7 nursing and dedicated attendant support." },
  { icon: Icons.Microscope, title: "Advanced Diagnostics", desc: "3T MRI, 128-slice CT, digital X-ray, and a fully automated pathology lab on-site." },
  { icon: Icons.Ambulance, title: "24×7 Ambulance", desc: "ALS-equipped ambulances with trained paramedics for emergency transport." },
  { icon: Icons.Clock, title: "Emergency & Trauma", desc: "Dedicated trauma bay and ICU beds for critical care round the clock." },
];

const values = [
  { icon: Icons.Star, label: "Excellence" },
  { icon: Icons.Heart, label: "Compassion" },
  { icon: Icons.Globe, label: "Accessibility" },
  { icon: Icons.Badge, label: "Integrity" },
  { icon: Icons.Trending, label: "Innovation" },
];

const statIcons = [Icons.Users, Icons.Heart, Icons.Award, Icons.Shield];

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animations on mount
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{
          font-family:'DM Sans',sans-serif;
          background:#f4f6fb;
          color:#0a1628;
          -webkit-font-smoothing:antialiased;
        }

        :root{
          --navy:#0a1628;
          --navy2:#0f2044;
          --navy3:#162954;
          --blue:#1a3a7a;
          --blue2:#5B8FD4;
          --gold:#D4AF5F;
          --gold2:#C9A84C;
          --gold3:#E8C97A;
          --gold-dark:#9A7C2E;
          --cream:#fdf8ee;
          --ivory:#f8f5ec;
          --slate:#4a5e7a;
          --border:#dde4f0;
          --border-gold:rgba(212,175,95,0.25);
        }

        /* ─── NAV ─── */
        .pnav{
          position:fixed;top:0;left:0;right:0;z-index:200;
          display:flex;align-items:center;justify-content:space-between;
          padding:0 clamp(16px,4vw,52px);
          height:74px;
          transition:background 0.4s,box-shadow 0.4s,border-bottom 0.4s;
        }
        .pnav.scrolled{
          background:rgba(10,22,40,0.96);
          backdrop-filter:blur(24px);
          border-bottom:1px solid rgba(212,175,95,0.12);
          box-shadow:0 4px 32px rgba(0,0,0,0.25);
        }
        .pnav-logo{display:flex;align-items:center;gap:13px;text-decoration:none}
        .pnav-logo-mark{
          width:42px;height:42px;border-radius:10px;
          background:linear-gradient(135deg,var(--gold2),var(--gold3));
          display:flex;align-items:center;justify-content:center;flex-shrink:0;
        }
        .pnav-logo-mark svg{width:22px;height:22px;fill:var(--navy)}
        .pnav-logo-text{font-family:'Cormorant Garamond',serif;color:#fff;font-size:1.2rem;font-weight:700;line-height:1}
        .pnav-logo-sub{font-size:0.6rem;color:rgba(212,175,95,0.5);letter-spacing:0.14em;text-transform:uppercase;font-family:'DM Sans',sans-serif;margin-top:2px}
        .pnav-links{display:flex;gap:32px;list-style:none}
        .pnav-links a{color:rgba(255,255,255,0.65);font-size:0.86rem;font-weight:500;text-decoration:none;letter-spacing:0.02em;transition:color 0.2s}
        .pnav-links a:hover{color:#fff}
        .pnav-links a.active{color:var(--gold)}
        .pnav-cta{
          padding:9px 24px;border-radius:7px;
          background:linear-gradient(135deg,var(--gold2),var(--gold3));
          color:var(--navy);font-weight:700;font-size:0.84rem;
          border:none;cursor:pointer;text-decoration:none;
          letter-spacing:0.03em;
          box-shadow:0 4px 16px rgba(212,175,95,0.3);
          transition:transform 0.2s,box-shadow 0.2s;
        }
        .pnav-cta:hover{transform:translateY(-1px);box-shadow:0 6px 22px rgba(212,175,95,0.5)}
        @media(max-width:860px){.pnav-links{display:none}}

        /* ─── HERO ─── */
        .hero-outer{
          position:relative;
          height:100vh;min-height:680px;max-height:960px;
          display:flex;flex-direction:column;justify-content:flex-end;
          overflow:hidden;background:var(--navy);
        }

        /* Background image with parallax */
        .hero-bg{
          position:absolute;inset:0;width:100%;height:115%;top:-7.5%;
          object-fit:cover;object-position:center 40%;
          will-change:transform;
        }

        /* Layered overlays for cinematic effect */
        .hero-ol-base{
          position:absolute;inset:0;
          background:rgba(5,12,28,0.55);
        }
        .hero-ol-gradient{
          position:absolute;inset:0;
          background:
            linear-gradient(to bottom,
              rgba(10,22,40,0.4) 0%,
              rgba(10,22,40,0.0) 25%,
              rgba(10,22,40,0.0) 45%,
              rgba(10,22,40,0.82) 75%,
              rgba(10,22,40,1) 100%
            );
        }
        .hero-ol-side{
          position:absolute;inset:0;
          background:linear-gradient(105deg, rgba(15,32,68,0.5) 0%, transparent 55%);
        }

        /* Elegant gold line at very bottom */
        .hero-gold-line{
          position:absolute;bottom:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent 0%,var(--gold2) 30%,var(--gold3) 50%,var(--gold2) 70%,transparent 100%);
          opacity:0.8;z-index:15;
        }

        /* Floating info cards — right side */
        .hero-cards{
          position:absolute;right:clamp(20px,5vw,80px);top:50%;transform:translateY(-40%);
          display:flex;flex-direction:column;gap:14px;z-index:12;
        }
        .hero-card{
          display:flex;align-items:center;gap:14px;
          padding:14px 20px;border-radius:14px;
          background:rgba(10,22,40,0.72);
          border:1px solid rgba(212,175,95,0.22);
          backdrop-filter:blur(20px);
          min-width:200px;
          opacity:0;transform:translateX(40px);
          animation:cardSlideIn 0.7s ease forwards;
        }
        .hero-card:nth-child(1){animation-delay:1.0s}
        .hero-card:nth-child(2){animation-delay:1.2s}
        .hero-card:nth-child(3){animation-delay:1.4s}
        @keyframes cardSlideIn{to{opacity:1;transform:translateX(0)}}
        .hero-card-icon{
          width:40px;height:40px;border-radius:10px;flex-shrink:0;
          background:rgba(212,175,95,0.12);color:var(--gold);
          display:flex;align-items:center;justify-content:center;
          border:1px solid rgba(212,175,95,0.2);
        }
        .hero-card-n{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:700;color:#fff;line-height:1}
        .hero-card-l{font-size:0.67rem;color:rgba(255,255,255,0.45);margin-top:3px;letter-spacing:0.06em;text-transform:uppercase}
        @media(max-width:960px){.hero-cards{display:none}}

        /* Vertical gold rule decoration */
        .hero-rule{
          position:absolute;left:clamp(20px,4vw,52px);top:50%;transform:translateY(-50%);
          width:1px;height:140px;
          background:linear-gradient(to bottom,transparent,var(--gold2),transparent);
          opacity:0.4;z-index:12;
          display:none;
        }
        @media(min-width:1100px){.hero-rule{display:block}}

        /* Main hero text content */
        .hero-content{
          position:relative;z-index:10;
          max-width:1200px;margin:0 auto;width:100%;
          padding:0 clamp(20px,4vw,52px) 88px;
        }

        /* Animated text elements */
        .hero-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          padding:7px 18px 7px 12px;
          border-radius:100px;
          background:rgba(212,175,95,0.1);
          border:1px solid rgba(212,175,95,0.28);
          color:var(--gold);
          font-size:11.5px;font-weight:600;
          letter-spacing:0.1em;text-transform:uppercase;
          font-family:'DM Sans',sans-serif;
          margin-bottom:26px;
          opacity:0;
          animation:fadeUp 0.8s 0.4s ease forwards;
        }
        .gold-dot{
          width:7px;height:7px;border-radius:50%;
          background:var(--gold);
          box-shadow:0 0 0 0 rgba(212,175,95,0.7);
          animation:goldPulse 2.2s 1.5s infinite;
        }
        @keyframes goldPulse{
          0%{box-shadow:0 0 0 0 rgba(212,175,95,0.7)}
          70%{box-shadow:0 0 0 9px rgba(212,175,95,0)}
          100%{box-shadow:0 0 0 0 rgba(212,175,95,0)}
        }

        /* Large cinematic headline */
        .hero-h1{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(3rem,6.5vw,5.8rem);
          font-weight:700;
          line-height:1.04;
          color:#fff;
          letter-spacing:-0.02em;
          margin:0 0 10px;
          max-width:700px;
        }
        .hero-line1{
          display:block;opacity:0;
          animation:fadeUp 0.9s 0.55s ease forwards;
        }
        .hero-line2{
          display:block;opacity:0;
          animation:fadeUp 0.9s 0.72s ease forwards;
        }
        .hero-line3{
          display:block;opacity:0;font-style:italic;
          color:var(--gold);
          animation:fadeUp 0.9s 0.9s ease forwards;
        }

        /* Thin gold divider line */
        .hero-divider{
          width:60px;height:1.5px;
          background:linear-gradient(90deg,var(--gold),transparent);
          margin:22px 0;
          opacity:0;
          animation:fadeIn 0.6s 1.1s ease forwards;
        }

        .hero-sub{
          font-size:clamp(0.95rem,1.4vw,1.08rem);
          line-height:1.82;
          color:rgba(255,255,255,0.62);
          max-width:480px;
          font-weight:300;
          opacity:0;
          animation:fadeUp 0.8s 1.15s ease forwards;
        }

        .hero-btns{
          display:flex;gap:14px;flex-wrap:wrap;
          margin-top:34px;
          opacity:0;
          animation:fadeUp 0.8s 1.3s ease forwards;
        }
        .btn-gold{
          padding:14px 32px;border-radius:8px;
          background:linear-gradient(135deg,var(--gold2),var(--gold3));
          color:var(--navy);font-weight:700;font-size:0.92rem;
          border:none;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:9px;
          box-shadow:0 8px 28px rgba(212,175,95,0.35);
          letter-spacing:0.03em;
          transition:transform 0.25s,box-shadow 0.25s;
          font-family:'DM Sans',sans-serif;
        }
        .btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 36px rgba(212,175,95,0.55)}
        .btn-outline{
          padding:14px 32px;border-radius:8px;
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.2);
          color:#fff;font-weight:500;font-size:0.92rem;
          cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:9px;
          backdrop-filter:blur(12px);
          letter-spacing:0.02em;
          font-family:'DM Sans',sans-serif;
          transition:background 0.25s,border-color 0.25s,transform 0.25s;
        }
        .btn-outline:hover{background:rgba(255,255,255,0.12);border-color:rgba(212,175,95,0.4);transform:translateY(-2px)}

        /* Scroll cue */
        .scroll-cue{
          position:absolute;bottom:30px;left:50%;transform:translateX(-50%);
          z-index:15;display:flex;flex-direction:column;align-items:center;gap:6px;
          color:rgba(212,175,95,0.45);font-size:9.5px;letter-spacing:0.16em;
          text-transform:uppercase;font-family:'DM Sans',sans-serif;
          animation:cueFloat 2.8s 2s ease-in-out infinite;
          opacity:0;
        }
        .scroll-cue.visible{opacity:1;transition:opacity 1s 2s ease}
        @keyframes cueFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}

        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}

        /* ─── STATS BAR ─── */
        .stats-bar{
          background:var(--navy2);
          border-bottom:1px solid rgba(212,175,95,0.08);
          position:relative;z-index:20;
        }
        .stats-bar::after{
          content:"";position:absolute;bottom:0;left:5%;right:5%;height:1px;
          background:linear-gradient(90deg,transparent,rgba(212,175,95,0.2),transparent);
        }
        .stats-inner{
          max-width:1200px;margin:0 auto;
          display:grid;grid-template-columns:repeat(4,1fr);
        }
        .stat-card{
          padding:38px 24px;text-align:center;
          border-right:1px solid rgba(255,255,255,0.05);
          animation:fadeUp 0.8s ease both;
          cursor:default;
          transition:background 0.3s;
        }
        .stat-card:last-child{border-right:none}
        .stat-card:hover{background:rgba(212,175,95,0.04)}
        .stat-icon{
          width:50px;height:50px;border-radius:14px;
          background:rgba(212,175,95,0.1);color:var(--gold);
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 16px;
          border:1px solid rgba(212,175,95,0.18);
        }
        .stat-value{
          font-family:'Cormorant Garamond',serif;
          font-size:2.6rem;font-weight:700;color:#fff;
          letter-spacing:-0.02em;line-height:1;
        }
        .stat-label{
          margin-top:8px;font-size:0.7rem;
          color:rgba(255,255,255,0.38);
          text-transform:uppercase;letter-spacing:0.12em;font-weight:500;
        }
        @media(max-width:640px){.stats-inner{grid-template-columns:repeat(2,1fr)}}

        /* ─── SHARED ─── */
        .sp{padding:104px 0}
        .sp-sm{padding:80px 0}
        .container{max-width:1200px;margin:0 auto;padding:0 clamp(20px,4vw,52px)}
        .bg-ivory{background:var(--ivory)}
        .bg-navy{background:var(--navy)}
        .bg-white{background:#fff}

        .sec-tag{
          display:inline-flex;align-items:center;gap:6px;
          padding:5px 16px;border-radius:100px;
          background:rgba(212,175,95,0.1);border:1px solid rgba(212,175,95,0.25);
          color:var(--gold2);font-size:10.5px;font-weight:700;
          letter-spacing:0.14em;text-transform:uppercase;margin-bottom:14px;
          font-family:'DM Sans',sans-serif;
        }
        .sec-tag-dot{width:5px;height:5px;border-radius:50%;background:var(--gold2)}
        .sec-tag.navy{background:rgba(26,58,122,0.08);border-color:rgba(26,58,122,0.2);color:var(--blue)}
        .sec-tag.navy .sec-tag-dot{background:var(--blue)}

        .sec-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.9rem,3.4vw,2.85rem);
          font-weight:700;color:var(--navy);
          letter-spacing:-0.02em;line-height:1.15;
        }
        .sec-title.light{color:#fff}
        .sec-title .hl{color:var(--gold2)}
        .sec-title .hl-light{color:var(--gold3)}
        .sec-title .hl-italic{color:var(--gold2);font-style:italic}
        .sec-sub{color:var(--slate);margin-top:14px;font-size:0.96rem;line-height:1.8;max-width:520px;font-weight:300}
        .sec-sub.light{color:rgba(255,255,255,0.55)}

        /* ─── ABOUT SPLIT ─── */
        .about-split{
          display:grid;grid-template-columns:1fr 1fr;
          gap:clamp(36px,6vw,80px);align-items:center;
        }
        @media(max-width:780px){.about-split{grid-template-columns:1fr}}

        .img-frame{
          position:relative;border-radius:20px;overflow:hidden;
          aspect-ratio:4/3.2;
        }
        .img-frame img{width:100%;height:100%;object-fit:cover;display:block}
        /* Gold corner accents */
        .img-frame::before{
          content:"";position:absolute;top:0;left:0;
          width:60px;height:60px;border-top:2px solid var(--gold2);border-left:2px solid var(--gold2);
          border-radius:20px 0 0 0;z-index:2;pointer-events:none;
        }
        .img-frame::after{
          content:"";position:absolute;bottom:0;right:0;
          width:60px;height:60px;border-bottom:2px solid var(--gold2);border-right:2px solid var(--gold2);
          border-radius:0 0 20px 0;z-index:2;pointer-events:none;
        }
        /* Dark overlay on image */
        .img-overlay{
          position:absolute;inset:0;
          background:linear-gradient(to top,rgba(10,22,40,0.5) 0%,transparent 60%);
          z-index:1;
        }
        .img-floating-badge{
          position:absolute;bottom:22px;left:22px;z-index:3;
          background:rgba(10,22,40,0.88);border-radius:14px;
          padding:14px 18px;
          display:flex;align-items:center;gap:14px;
          border:1px solid rgba(212,175,95,0.25);
          backdrop-filter:blur(16px);
          max-width:230px;
        }
        .badge-dot{
          width:44px;height:44px;border-radius:12px;flex-shrink:0;
          background:linear-gradient(135deg,var(--gold2),var(--gold3));
          display:flex;align-items:center;justify-content:center;color:var(--navy);
        }
        .badge-n{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:700;color:#fff;line-height:1.1}
        .badge-l{font-size:0.7rem;color:rgba(255,255,255,0.45);margin-top:2px;letter-spacing:0.04em}

        .about-lead{font-size:0.75rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold2);margin-bottom:12px;font-family:'DM Sans',sans-serif}
        .about-body p{color:var(--slate);line-height:1.88;font-size:0.96rem;margin-bottom:14px;font-weight:300}

        /* Elegant blockquote */
        .pull-quote{
          border-left:2px solid var(--gold2);
          padding:18px 22px;margin:26px 0;
          background:linear-gradient(90deg,rgba(212,175,95,0.05),transparent);
          border-radius:0 12px 12px 0;
        }
        .pull-quote p{
          font-family:'Cormorant Garamond',serif;
          font-style:italic;font-size:1.12rem;
          color:var(--navy);line-height:1.65;margin:0;font-weight:500;
        }

        .values-strip{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
        .val-pill{
          display:inline-flex;align-items:center;gap:7px;
          padding:8px 18px;border-radius:100px;
          background:rgba(212,175,95,0.08);border:1px solid rgba(212,175,95,0.22);
          color:var(--gold-dark);font-size:0.8rem;font-weight:600;
          transition:all 0.28s;cursor:default;font-family:'DM Sans',sans-serif;
          letter-spacing:0.02em;
        }
        .val-pill:hover{background:var(--gold2);color:var(--navy);border-color:var(--gold2);transform:translateY(-2px)}

        .mini-stats{display:flex;gap:20px;flex-wrap:wrap;margin-top:32px}
        .mini-stat{
          padding:18px 24px;border-radius:12px;
          background:#fff;border:1px solid var(--border);
          box-shadow:0 4px 16px rgba(10,22,40,0.05);
          text-align:center;min-width:100px;
        }
        .mini-stat-n{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:700;color:var(--gold2);line-height:1}
        .mini-stat-l{font-size:0.68rem;color:var(--slate);margin-top:4px;font-weight:500;letter-spacing:0.04em}

        /* ─── MISSION / VISION ─── */
        .mv-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        @media(max-width:600px){.mv-grid{grid-template-columns:1fr}}

        .mv-card{
          border-radius:22px;padding:52px 44px;
          position:relative;overflow:hidden;
          border:1px solid rgba(255,255,255,0.06);
        }
        .mv-card.mission{background:linear-gradient(145deg,var(--navy) 0%,var(--navy2) 100%)}
        .mv-card.vision{background:linear-gradient(145deg,var(--navy2) 0%,var(--navy3) 100%)}
        /* Gold orb decoration */
        .mv-card::before{
          content:"";position:absolute;bottom:-80px;right:-80px;
          width:260px;height:260px;border-radius:50%;
          background:radial-gradient(circle,rgba(212,175,95,0.08) 0%,transparent 70%);
        }
        .mv-card::after{
          content:"";position:absolute;top:0;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(212,175,95,0.25),transparent);
        }
        .mv-icon{
          width:56px;height:56px;border-radius:16px;
          background:rgba(212,175,95,0.1);border:1px solid rgba(212,175,95,0.2);
          display:flex;align-items:center;justify-content:center;color:var(--gold);
          margin-bottom:22px;
        }
        .mv-card h3{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:700;color:#fff;margin-bottom:14px}
        .mv-card p{line-height:1.82;color:rgba(255,255,255,0.65);font-size:0.95rem;font-weight:300;position:relative;z-index:1}

        /* ─── WHY CHOOSE ─── */
        .choose-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:22px;
        }
        .choose-card{
          background:#fff;border-radius:20px;padding:38px 30px;
          border:1px solid var(--border);
          transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;
          position:relative;overflow:hidden;cursor:default;
        }
        .choose-card::after{
          content:"";position:absolute;bottom:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,var(--gold2),var(--gold3));
          transform:scaleX(0);transform-origin:left;transition:transform 0.35s ease;
        }
        .choose-card:hover{transform:translateY(-6px);box-shadow:0 24px 56px rgba(10,22,40,0.1);border-color:rgba(212,175,95,0.25)}
        .choose-card:hover::after{transform:scaleX(1)}
        .c-ic{
          width:58px;height:58px;border-radius:16px;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:22px;border:1px solid;
        }
        .choose-card h3{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:700;color:var(--navy);margin-bottom:10px}
        .choose-card p{color:var(--slate);font-size:0.87rem;line-height:1.78;font-weight:300}

        /* ─── FACILITIES ─── */
        .fac-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px}
        .fac-card{
          background:#fff;border-radius:18px;padding:38px 26px;
          text-align:center;border:1px solid var(--border);
          position:relative;overflow:hidden;
          transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;cursor:default;
        }
        .fac-card::before{
          content:"";position:absolute;bottom:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,var(--gold2),var(--gold3));
          transform:scaleX(0);transform-origin:center;transition:transform 0.35s ease;
        }
        .fac-card:hover{transform:translateY(-5px);box-shadow:0 20px 48px rgba(10,22,40,0.1);border-color:rgba(212,175,95,0.3)}
        .fac-card:hover::before{transform:scaleX(1)}
        .fac-card:hover .fac-icon{color:var(--gold2);background:rgba(212,175,95,0.1);border-color:rgba(212,175,95,0.25)}
        .fac-icon{
          width:58px;height:58px;border-radius:16px;
          background:rgba(26,58,122,0.07);color:var(--blue);
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 16px;border:1px solid rgba(26,58,122,0.12);
          transition:all 0.3s;
        }
        .fac-title{font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:8px}
        .fac-desc{font-size:0.82rem;color:var(--slate);line-height:1.7;font-weight:300}

        /* ─── BIG STATS ─── */
        .bstat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:22px}
        .bstat-card{
          background:#fff;border:1px solid var(--border);border-radius:20px;
          padding:46px 28px;text-align:center;position:relative;overflow:hidden;
          transition:transform 0.3s,box-shadow 0.3s;cursor:default;
        }
        .bstat-card::before{
          content:"";position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,var(--gold2),transparent);
        }
        .bstat-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(10,22,40,0.08)}
        .bstat-n{font-family:'Cormorant Garamond',serif;font-size:3.2rem;font-weight:700;color:var(--gold2);letter-spacing:-0.03em;line-height:1;margin-bottom:8px}
        .bstat-l{font-size:0.75rem;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.1em}

        /* ─── ACCREDITATIONS ─── */
        .accred-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        @media(max-width:640px){.accred-grid{grid-template-columns:1fr}}
        .accred-card{
          border:1px solid rgba(212,175,95,0.12);border-radius:18px;padding:36px 30px;
          text-align:center;transition:border-color 0.3s,background 0.3s;cursor:default;
          background:rgba(255,255,255,0.03);position:relative;overflow:hidden;
        }
        .accred-card::after{
          content:"";position:absolute;bottom:0;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(212,175,95,0.3),transparent);
        }
        .accred-card:hover{border-color:rgba(212,175,95,0.35);background:rgba(212,175,95,0.04)}
        .accred-ic{
          width:62px;height:62px;border-radius:50%;margin:0 auto 18px;
          background:rgba(212,175,95,0.1);border:1px solid rgba(212,175,95,0.22);
          display:flex;align-items:center;justify-content:center;color:var(--gold);
        }
        .accred-t{font-family:'Cormorant Garamond',serif;font-size:1.18rem;font-weight:700;color:#fff;margin-bottom:10px}
        .accred-d{font-size:0.82rem;color:rgba(255,255,255,0.48);line-height:1.68;font-weight:300}

        /* ─── Gold divider ─── */
        .gold-divider{
          display:flex;align-items:center;gap:14px;
          margin-bottom:18px;
        }
        .gold-divider-line{flex:1;height:1px;background:linear-gradient(90deg,var(--gold2),transparent)}

        @keyframes fadeUp2{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
      `}</style>

      {/* ══════════════════════════════════
          NAVBAR
      ══════════════════════════════════ */}
      {/* <nav className={`pnav${scrollY > 40 ? " scrolled" : ""}`}>
        <a href="/" className="pnav-logo">
          <div className="pnav-logo-mark">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
          </div>
          <div>
            <div className="pnav-logo-text">PMH Hospital</div>
            <div className="pnav-logo-sub">Multispeciality • Since 1999</div>
          </div>
        </a>
        <ul className="pnav-links">
          {["Home","About","Departments","Doctors","Services","Contact"].map(n => (
            <li key={n}><a href={`/${n.toLowerCase()}`} className={n==="About"?"active":""}>{n}</a></li>
          ))}
        </ul>
        <a href="/appointments" className="pnav-cta">Book Appointment</a>
      </nav> */}

      {/* ══════════════════════════════════
          HERO — FULL SCREEN CINEMATIC
      ══════════════════════════════════ */}
      <section className="hero-outer">
        {/* Parallax bg image */}
        <img
          className="hero-bg"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
          alt="PMH Multispeciality Hospital"
          style={{ transform: `translateY(${scrollY * 0.22}px)` }}
        />

        {/* Layered overlays */}
        <div className="hero-ol-base" />
        <div className="hero-ol-gradient" />
        <div className="hero-ol-side" />

        {/* Gold line at bottom */}
        <div className="hero-gold-line" />

        {/* Vertical rule */}
        <div className="hero-rule" />

        {/* Floating info cards — right */}
        <div className="hero-cards">
          {[
            { icon: Icons.Users, n: "50+", l: "Expert Specialists" },
            { icon: Icons.Award, n: "25+", l: "Years of Excellence" },
            { icon: Icons.Clock, n: "24/7", l: "Emergency Care" },
          ].map(c => (
            <div key={c.l} className="hero-card">
              <div className="hero-card-icon"><c.icon /></div>
              <div>
                <div className="hero-card-n">{c.n}</div>
                <div className="hero-card-l">{c.l}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="hero-content">
          <Breadcrumb items={[{ label: "About Us", href: "/about" }]} />

          <div style={{ maxWidth: 680, marginTop: 28 }}>
            {/* Eyebrow pill */}
            <div className="hero-eyebrow">
              <span className="gold-dot" />
              Latur's Premier Multispeciality Hospital since 1999
            </div>

            {/* Cinematic headline */}
            <h1 className="hero-h1">
              <span className="hero-line1">Healing With</span>
              <span className="hero-line2">Heart &amp;</span>
              <span className="hero-line3">Excellence.</span>
            </h1>

            {/* Gold divider */}
            <div className="hero-divider" />

            {/* Subtext */}
            <p className="hero-sub">
              For over 25 years, {SITE_CONFIG.name} has been the cornerstone of trusted,
              compassionate, and world-class healthcare for Latur and the entire Marathwada region.
            </p>

            {/* CTA Buttons */}
            <div className="hero-btns">
              <a href="/appointments" className="btn-gold">
                <Icons.Calendar /> Book Appointment
              </a>
              <a href="tel:+912482XXXXXX" className="btn-outline">
                <Icons.Phone /> Call Emergency
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className={`scroll-cue${heroVisible ? " visible" : ""}`}>
          <span>Scroll</span>
          <Icons.ChevronDown />
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <div className="stats-bar" ref={statsRef}>
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <StatCounter
              key={s.label}
              value={s.value}
              label={s.label}
              icon={statIcons[i % statIcons.length]}
              delay={i * 120}
              started={statsVisible}
            />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          ABOUT SPLIT
      ══════════════════════════════════ */}
      <section className="sp bg-white">
        <div className="container">
          <div className="about-split">
            {/* Image */}
            <div className="img-frame">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80"
                alt="PMH Hospital Building"
              />
              <div className="img-overlay" />
              <div className="img-floating-badge">
                <div className="badge-dot"><Icons.Award /></div>
                <div>
                  <div className="badge-n">25+ Years</div>
                  <div className="badge-l">of Trusted Healthcare</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="about-lead">Who We Are</div>
              <h2 className="sec-title">
                Committed To Quality<br />
                <span className="hl-italic">Healthcare</span>
              </h2>

              <div className="pull-quote" style={{ marginTop: 24 }}>
                <p>"We don't just treat illness — we restore lives, rebuild hope, and return people to those who need them most."</p>
              </div>

              <div className="about-body">
                <p>
                  PMH Multispeciality Hospital is a leading healthcare institution in Latur, dedicated
                  to providing advanced medical treatments with a patient-first philosophy. We combine
                  modern infrastructure with an experienced team of healthcare professionals.
                </p>
                <p>
                  From routine consultations to complex surgeries, we deliver exceptional care that improves
                  quality of life — with dignity, compassion, and clinical precision at every step.
                </p>
              </div>

              <div className="values-strip">
                {values.map(({ icon: Icon, label }) => (
                  <div key={label} className="val-pill">
                    <Icon />{label}
                  </div>
                ))}
              </div>

              <div className="mini-stats">
                {[
                  { n: "300+", l: "Hospital Beds" },
                  { n: "50+", l: "Expert Doctors" },
                  { n: "24/7", l: "Emergency Care" },
                ].map(s => (
                  <div key={s.l} className="mini-stat">
                    <div className="mini-stat-n">{s.n}</div>
                    <div className="mini-stat-l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════ */}
      <section className="sp-sm bg-ivory">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span className="sec-tag"><span className="sec-tag-dot"/>Our Purpose</span>
            <h2 className="sec-title">Mission &amp; <span className="hl-italic">Vision</span></h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon"><Icons.Award /></div>
              <h3>Our Mission</h3>
              <p>To provide accessible, affordable, and world-class healthcare services with compassion, competence, and commitment — treating every patient with dignity, respect, and the best of modern medicine.</p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon"><Icons.Globe /></div>
              <h3>Our Vision</h3>
              <p>To become the most trusted multispeciality hospital in Maharashtra — known for clinical excellence, continuous innovation, and outstanding patient satisfaction in every department and specialty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section className="sp bg-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 58 }}>
            <span className="sec-tag navy"><span className="sec-tag-dot"/>Why Choose Us</span>
            <h2 className="sec-title">Providing Care <span className="hl">You Can Trust</span></h2>
            <p className="sec-sub" style={{ margin: "12px auto 0" }}>
              Every decision we make is guided by one principle — your wellbeing comes first.
            </p>
          </div>
          <div className="choose-grid">
            {whyChooseUs.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div key={title} className="choose-card">
                <div className="c-ic" style={{ background: bg, borderColor: border, color }}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FACILITIES
      ══════════════════════════════════ */}
      <section className="sp-sm bg-ivory">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span className="sec-tag"><span className="sec-tag-dot"/>Infrastructure</span>
            <h2 className="sec-title">Advanced Medical <span className="hl-italic">Infrastructure</span></h2>
            <p className="sec-sub" style={{ margin: "12px auto 0" }}>
              Equipped with state-of-the-art technology to deliver the finest medical care.
            </p>
          </div>
          <div className="fac-grid">
            {facilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="fac-card">
                <div className="fac-icon"><Icon /></div>
                <div className="fac-title">{title}</div>
                <div className="fac-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ACHIEVEMENTS
      ══════════════════════════════════ */}
      <section className="sp bg-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span className="sec-tag navy"><span className="sec-tag-dot"/>Our Achievements</span>
            <h2 className="sec-title">Trusted By <span className="hl">Thousands of Patients</span></h2>
          </div>
          <div className="bstat-grid">
            {STATS.map(s => (
              <div key={s.label} className="bstat-card">
                <div className="bstat-n">{s.value}</div>
                <div className="bstat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ACCREDITATIONS
      ══════════════════════════════════ */}
      <section className="sp-sm bg-navy">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span className="sec-tag"><span className="sec-tag-dot"/>Recognition</span>
            <h2 className="sec-title light">Nationally Accredited,<br /><span className="hl-light">Globally Recognised</span></h2>
          </div>
          <div className="accred-grid">
            {[
              { t: "NABH Accredited", d: "National Accreditation Board for Hospitals — the gold standard in Indian healthcare quality assurance." },
              { t: "ISO 9001:2015", d: "International certification for quality management systems ensuring consistent, reliable patient care." },
              { t: "JCI Certified", d: "Joint Commission International certification representing the highest standard in global hospital excellence." },
            ].map(a => (
              <div key={a.t} className="accred-card">
                <div className="accred-ic"><Icons.Shield /></div>
                <div className="accred-t">{a.t}</div>
                <div className="accred-d">{a.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <AppointmentCTA />
    </>
  );
}