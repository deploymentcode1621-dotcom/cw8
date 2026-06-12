"use client";

import { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import FacilityCard from "@/components/facilities/FacilityCard";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { facilities } from "@/data/facilities";


// ─── Icon Map ────────────────────────────────────────────────────────────────
const Icons = {
  ICU: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  NICU: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" />
      <path d="M9 12s1 2 3 2 3-2 3-2" strokeLinecap="round" />
      <path d="M9 9h.01M15 9h.01" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  CathLab: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  OT: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  BloodBank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M12 2s-6 6.5-6 10a6 6 0 0 0 12 0C18 8.5 12 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Pharmacy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M3 3h18v4H3zM3 7v14h18V7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12h6M12 9v6" strokeLinecap="round" />
    </svg>
  ),
  Lab: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M9 3v11l-4 6h14l-4-6V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 3h12" strokeLinecap="round" />
    </svg>
  ),
  Radiology: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
    </svg>
  ),
  Default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ─── Stat Counter ─────────────────────────────────────────────────────────────
function StatCounter({ end, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-item">
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

// ─── Facility Card (Enhanced) ─────────────────────────────────────────────────
function EnhancedFacilityCard({ facility, index }) {
  const iconKey = Object.keys(Icons).find(k =>
    facility.name?.toLowerCase().includes(k.toLowerCase())
  ) || "Default";
  const icon = Icons[iconKey];

  const colors = [
    { bg: "#0ea5e9", glow: "#38bdf8" },
    { bg: "#6366f1", glow: "#818cf8" },
    { bg: "#10b981", glow: "#34d399" },
    { bg: "#f59e0b", glow: "#fbbf24" },
    { bg: "#ef4444", glow: "#f87171" },
    { bg: "#8b5cf6", glow: "#a78bfa" },
    { bg: "#14b8a6", glow: "#2dd4bf" },
    { bg: "#f97316", glow: "#fb923c" },
  ];
  const c = colors[index % colors.length];

  return (
    <div className="facility-card" style={{ "--card-color": c.bg, "--card-glow": c.glow, animationDelay: `${index * 60}ms` }}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-icon-wrap">
            <div className="card-icon">{icon}</div>
            <div className="icon-ring" />
          </div>
          <h3 className="card-title">{facility.name}</h3>
          <p className="card-desc">{facility.description || facility.shortDescription}</p>
          <div className="card-tag">Learn more →</div>
        </div>
        <div className="card-shine" />
        <div className="card-particles">
          {[...Array(4)].map((_, i) => <span key={i} className="particle" style={{ "--i": i }} />)}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────


export default function FacilitiesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Syne:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        :root {
          --bg-base: #050b14;
          --bg-surface: #0a1628;
          --bg-card: #0d1f35;
          --accent-cyan: #00d4ff;
          --accent-violet: #7c3aed;
          --accent-emerald: #10b981;
          --text-primary: #f0f8ff;
          --text-muted: #7fa8c9;
          --border: rgba(0,212,255,0.12);
        }

        .fac-page { font-family: 'DM Sans', sans-serif; background: var(--bg-base); color: var(--text-primary); min-height: 100vh; }

        /* ── Hero ── */
        .fac-hero {
          position: relative;
          padding: 100px 0 80px;
          overflow: hidden;
          background: radial-gradient(ellipse 120% 80% at 50% -10%, rgba(0,212,255,0.08) 0%, transparent 65%),
                      radial-gradient(ellipse 60% 60% at 90% 50%, rgba(124,58,237,0.07) 0%, transparent 60%),
                      var(--bg-base);
        }
        .fac-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,212,255,0.04) 40px),
                            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,212,255,0.04) 40px);
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: orbFloat 8s ease-in-out infinite;
        }
        .orb1 { width: 500px; height: 500px; background: rgba(0,212,255,0.06); top: -150px; right: -100px; animation-delay: 0s; }
        .orb2 { width: 400px; height: 400px; background: rgba(124,58,237,0.08); bottom: -100px; left: -80px; animation-delay: 3s; }
        @keyframes orbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-30px) scale(1.05)} }

        .hero-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2);
          border-radius: 100px; padding: 6px 16px; font-size: 13px; font-weight: 500;
          color: var(--accent-cyan); margin-bottom: 24px; letter-spacing: 0.05em; text-transform: uppercase;
          animation: fadeUp 0.6s ease both;
        }
        .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-cyan); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }

        .hero-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 700; line-height: 1.05; letter-spacing: -0.02em;
          margin: 0 0 20px; color: var(--text-primary);
          animation: fadeUp 0.7s 0.1s ease both;
        }
        .hero-title em { font-style: normal; color: transparent; background: linear-gradient(135deg, var(--accent-cyan), #7c3aed); -webkit-background-clip: text; background-clip: text; }
        .hero-sub {
          font-size: 1.15rem; color: var(--text-muted); max-width: 520px; line-height: 1.7;
          animation: fadeUp 0.7s 0.2s ease both;
        }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

        /* Stats bar */
        .stats-bar {
          display: flex; flex-wrap: wrap; gap: 0;
          background: rgba(13,31,53,0.8); border: 1px solid var(--border);
          border-radius: 20px; margin-top: 60px; overflow: hidden;
          backdrop-filter: blur(20px);
          animation: fadeUp 0.7s 0.35s ease both;
        }
        .stat-item {
          flex: 1; min-width: 160px; padding: 28px 32px;
          border-right: 1px solid var(--border); text-align: center;
          position: relative; transition: background 0.3s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: rgba(0,212,255,0.04); }
        .stat-num { display: block; font-family: 'Clash Display', sans-serif; font-size: 2.4rem; font-weight: 700; color: var(--accent-cyan); line-height: 1; }
        .stat-label { display: block; font-size: 0.82rem; color: var(--text-muted); margin-top: 6px; text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── Grid Section ── */
        .fac-grid-section { padding: 80px 0 100px; background: var(--bg-base); }
        .section-header { text-align: center; margin-bottom: 64px; }
        .section-eyebrow {
          font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--accent-cyan); margin-bottom: 12px;
        }
        .section-heading {
          font-family: 'Clash Display', sans-serif; font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700; color: var(--text-primary); margin: 0;
        }
        .section-heading span { color: var(--accent-cyan); }

        /* ── Facility Cards ── */
        .fac-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }

        .facility-card {
          perspective: 1000px;
          animation: cardIn 0.5s ease both;
        }
        @keyframes cardIn { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }

        .card-inner {
          position: relative; height: 260px; cursor: pointer;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 20px; padding: 32px 28px;
          transition: transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.4s ease, border-color 0.3s;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        .facility-card:hover .card-inner {
          transform: translateY(-8px) rotateX(4deg) rotateY(-2deg);
          box-shadow: 0 24px 60px -12px color-mix(in srgb, var(--card-color) 35%, transparent),
                      0 0 0 1px color-mix(in srgb, var(--card-color) 40%, transparent);
          border-color: color-mix(in srgb, var(--card-color) 50%, transparent);
        }
        .card-front { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; }

        .card-icon-wrap {
          position: relative; width: 56px; height: 56px; margin-bottom: 20px;
        }
        .card-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: color-mix(in srgb, var(--card-color) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--card-color) 30%, transparent);
          display: flex; align-items: center; justify-content: center;
          color: var(--card-color);
          transition: transform 0.4s ease, background 0.3s;
        }
        .facility-card:hover .card-icon {
          transform: scale(1.15) rotate(-5deg);
          background: color-mix(in srgb, var(--card-color) 25%, transparent);
        }
        .icon-ring {
          position: absolute; inset: -6px; border-radius: 22px;
          border: 1px dashed color-mix(in srgb, var(--card-color) 25%, transparent);
          animation: ringRotate 12s linear infinite;
        }
        @keyframes ringRotate { to{transform:rotate(360deg)} }

        .card-title { font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 0 0 8px; }
        .card-desc { font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .card-tag {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.05em;
          color: var(--card-color); margin-top: 12px;
          transition: gap 0.2s;
        }

        /* Shine effect */
        .card-shine {
          position: absolute; inset: 0; z-index: 3; border-radius: 20px; pointer-events: none;
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%);
          opacity: 0; transition: opacity 0.3s;
        }
        .facility-card:hover .card-shine { opacity: 1; }

        /* Particles */
        .card-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
        .particle {
          position: absolute;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--card-color); opacity: 0;
          bottom: 20px;
          left: calc(20% + var(--i) * 20%);
        }
        .facility-card:hover .particle {
          animation: particleFloat 1.2s ease-out calc(var(--i) * 0.15s) both;
        }
        @keyframes particleFloat { 0%{opacity:0.8;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-60px) scale(0.3)} }

        /* Bottom glow line */
        .card-inner::after {
          content: '';
          position: absolute; bottom: 0; left: 20%; right: 20%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--card-color), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .facility-card:hover .card-inner::after { opacity: 0.6; }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .fac-hero { padding: 70px 0 60px; }
          .stats-bar { flex-direction: column; }
          .stat-item { border-right: none; border-bottom: 1px solid var(--border); }
          .stat-item:last-child { border-bottom: none; }
          .fac-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fac-page">
        {/* ─── Hero ─────────────────────────────────────── */}
        <section className="fac-hero">
          <div className="hero-orb orb1" />
          <div className="hero-orb orb2" />
          <div className="hero-inner">
            <Breadcrumb items={[{ label: "Facilities", href: "/facilities" }]} />

            <div style={{ marginTop: "24px" }}>
              <div className="hero-badge">
                <span className="badge-dot" />
                World-Class Infrastructure
              </div>

              <h1 className="hero-title">
                Advanced<br />
                <em>Medical Facilities</em>
              </h1>

              <p className="hero-sub">
                State-of-the-art infrastructure and equipment, delivering the highest standard of patient care — 24 hours a day, every day.
              </p>
            </div>

            <div className="stats-bar">
              <StatCounter end={500} suffix="+" label="Bed Capacity" />
              <StatCounter end={18} suffix="+" label="Specialities" />
              <StatCounter end={24} suffix="/7" label="Emergency Care" />
              <StatCounter end={50000} suffix="+" label="Patients Served" />
            </div>
          </div>
        </section>

        {/* ─── Facilities Grid ───────────────────────────── */}
        <section className="fac-grid-section">
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header">
              <p className="section-eyebrow">Our Infrastructure</p>
              <h2 className="section-heading">
                Everything You Need,<br /><span>Under One Roof</span>
              </h2>
            </div>

            <div className="fac-grid">
              {facilities.map((f, i) => (
                <EnhancedFacilityCard key={f.id} facility={f} index={i} />
              ))}
            </div>
          </div>
        </section>

        <AppointmentCTA />
      </div>
    </>
  );
}