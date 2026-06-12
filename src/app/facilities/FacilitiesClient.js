"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { facilities } from "@/data/facilities";

/* ─── Icon Paths ─────────────────────────────────────────────────────────── */
const ICONS = {
  ICU: "M22 12h-4l-3 9L9 3l-3 9H2",
  NICU: "M9 12s1 2 3 2 3-2 3-2M9 9h.01M15 9h.01",
  CathLab:
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  OT: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  BloodBank: "M12 2s-6 6.5-6 10a6 6 0 0 0 12 0C18 8.5 12 2 12 2z",
  Pharmacy: "M3 3h18v4H3zM3 7v14h18V7M9 12h6M12 9v6",
  Lab: "M9 3v11l-4 6h14l-4-6V3M6 3h12",
  Radiology:
    "M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  Default: "M22 12h-4l-3 9L9 3l-3 9H2",
};

function getIcon(name) {
  const key =
    Object.keys(ICONS).find((k) =>
      name?.toLowerCase().includes(k.toLowerCase())
    ) || "Default";
  return ICONS[key];
}

/* ─── Animated Counter ───────────────────────────────────────────────────── */
function Counter({ end, suffix = "", decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !ran.current) {
          ran.current = true;
          const dur = 2000;
          const step = 16;
          const total = dur / step;
          let i = 0;
          const t = setInterval(() => {
            i++;
            const progress = i / total;
            const ease = 1 - Math.pow(1 - progress, 4);
            setVal(parseFloat((ease * end).toFixed(decimals)));
            if (i >= total) clearInterval(t);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
      {suffix}
    </span>
  );
}

/* ─── Tilt Card ──────────────────────────────────────────────────────────── */
function TiltCard({ children, className = "", style = {} }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateZ(6px)`;
    el.style.transition = "transform 0.05s linear";
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
    el.style.transition = "transform 0.6s cubic-bezier(0.23,1,0.32,1)";
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform", ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

/* ─── Card accent palette — muted, earthy, all light-friendly ─────────────── */
const CARD_ACCENTS = [
  "#B8922A", // warm gold
  "#5C7A6B", // sage green
  "#7A6B5C", // warm taupe
  "#5C6B7A", // slate blue
  "#6B7A5C", // olive
  "#7A5C6B", // dusty mauve
  "#5C7A7A", // teal
  "#7A6B44", // amber-brown
];

/* ─── Facility Card ──────────────────────────────────────────────────────── */
function FacilityCard({ facility, index }) {
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
  const iconPath = getIcon(facility.name);
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard
      className="fac-card-wrap"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`fac-card ${hovered ? "is-hovered" : ""}`}
        style={{ "--accent": accent }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="card-shimmer" />
        <div className="card-left-bar" />

        <div className="card-icon-wrap">
          <div className="card-icon-box">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="card-svg"
            >
              <path d={iconPath} />
              {facility.name?.toLowerCase().includes("nicu") && (
                <circle cx="12" cy="12" r="10" />
              )}
              {facility.name?.toLowerCase().includes("radiology") && (
                <circle cx="12" cy="12" r="3" />
              )}
            </svg>
          </div>
          <div className="icon-number">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <h3 className="card-name">{facility.name}</h3>
        <p className="card-blurb">
          {facility.description || facility.shortDescription}
        </p>

        <div className="card-footer">
          <div className="card-line" />
          <div className="card-cta">
            <span>Learn More</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              width="13"
              height="13"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="card-watermark">+</div>
      </div>
    </TiltCard>
  );
}

/* ─── Marquee ────────────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "500+ Bed Capacity",
  "18+ Specialities",
  "24/7 Emergency Care",
  "50,000+ Patients Served",
  "NABH Accredited",
  "State-of-the-Art OTs",
  "Advanced NICU",
  "Cardiac Cath Lab",
];

function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-cross">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── SVG Scalpel Line ───────────────────────────────────────────────────── */
function ScalpelLine() {
  return (
    <svg
      className="scalpel-svg"
      viewBox="0 0 900 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line
        x1="0" y1="1" x2="900" y2="1"
        stroke="url(#scalpelGrad)"
        strokeWidth="1"
        className="scalpel-line"
      />
      <defs>
        <linearGradient id="scalpelGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#B8922A" stopOpacity="0" />
          <stop offset="30%"  stopColor="#B8922A" stopOpacity="0.6" />
          <stop offset="70%"  stopColor="#D4AE5A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#B8922A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Stats ──────────────────────────────────────────────────────────────── */
const STATS = [
  { value: 500,   suffix: "+",  label: "Licensed Beds",     sub: "Across all wards"   },
  { value: 18,    suffix: "+",  label: "Specialities",      sub: "Expert departments"  },
  { value: 50000, suffix: "+",  label: "Patients Treated",  sub: "Annually"            },
  { value: 99,    suffix: "%",  label: "Satisfaction",      sub: "Patient-reported", decimals: 0 },
];

/* ─── Main Page ──────────────────────────────────────────────────────────── */
export default function FacilitiesPage() {
  const heroRef = useRef(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        /* ══ TOKENS ══════════════════════════════ */
        :root {
          --cream:      #F5EDD6;
          --cream-deep: #EDE3C4;
          --cream-lt:   #FAF7EE;
          --parchment:  #EFE7CE;

          --sage:       #4E6B5E;
          --sage-mid:   #6E9080;
          --sage-lt:    #A8C4B8;
          --sage-dim:   rgba(78,107,94,0.08);

          --gold:       #A67C2A;
          --gold-mid:   #C9973A;
          --gold-lt:    #D9B96A;
          --gold-dim:   rgba(166,124,42,0.10);

          --ink:        #2C2618;
          --ink-2:      #3E3828;
          --muted:      #7A7060;
          --muted-lt:   #A09080;

          --border:     rgba(78,107,94,0.12);
          --border-g:   rgba(166,124,42,0.15);

          --r-sm: 8px;
          --r-md: 14px;
        }

        /* ══ BASE ════════════════════════════════ */
        .fp {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          background: var(--cream);
          color: var(--ink);
          overflow-x: hidden;
        }
        .fp *, .fp *::before, .fp *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ══ HERO ════════════════════════════════
           Soft warm cream, no dark at all
        ════════════════════════════════════════ */
        .fp-hero {
          position: relative;
          background: var(--cream-lt);
          overflow: hidden;
          min-height: 700px;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--border-g);
        }

        /* Subtle paper texture */
        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }

        /* Soft sage-gold radial glow */
        .hero-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 60% at 80% 10%, rgba(166,124,42,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 5%  90%, rgba(78,107,94,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 70% 40% at 50% 50%, rgba(245,237,214,0.6) 0%, transparent 80%);
          pointer-events: none;
        }

        /* Fine horizontal rules */
        .hero-rules {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 79px,
            rgba(166,124,42,0.035) 80px
          );
          pointer-events: none;
        }

        /* Scalpel line */
        .scalpel-svg {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          transform: translateY(-50%);
          pointer-events: none;
          overflow: visible;
          opacity: 0.6;
        }
        .scalpel-line {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: drawLine 2.4s 0.5s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }

        /* Hero layout */
        .hero-body {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          padding: 88px 40px 80px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 72px;
          align-items: center;
        }

        /* Eyebrow */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          animation: fadeUp 0.7s 0.1s both;
        }
        .eyebrow-rule {
          width: 32px;
          height: 1px;
          background: var(--sage);
          opacity: 0.6;
        }
        .eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sage);
        }

        /* Heading */
        .hero-heading {
          font-family: 'Times New Roman', 'Times', Georgia, serif;
          font-size: clamp(3rem, 5.6vw, 5.4rem);
          font-weight: 400;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 26px;
          animation: fadeUp 0.8s 0.18s both;
        }
        .hero-heading .gold-word {
          color: var(--gold);
          font-style: italic;
        }
        .hero-heading .rule-under {
          position: relative;
          display: inline-block;
        }
        .hero-heading .rule-under::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 2px;
          height: 1px;
          background: linear-gradient(90deg, var(--sage), transparent);
        }

        /* Sub */
        .hero-sub {
          font-size: 1rem;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
          max-width: 440px;
          margin-bottom: 48px;
          animation: fadeUp 0.8s 0.26s both;
        }

        /* Actions */
        .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
          animation: fadeUp 0.8s 0.34s both;
        }

        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--sage);
          color: var(--cream-lt);
          padding: 14px 30px;
          border-radius: 2px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .btn-gold:hover::before { transform: translateX(100%); }
        .btn-gold:hover {
          background: #3D5A4F;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(78,107,94,0.22);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--muted);
          padding: 14px 30px;
          border-radius: 2px;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid var(--border-g);
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .btn-outline:hover {
          border-color: var(--sage-mid);
          color: var(--sage);
          background: var(--sage-dim);
        }

        /* Stats right panel */
        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: fadeRight 0.9s 0.3s both;
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .stat-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 24px 28px;
          background: var(--cream);
          border: 1px solid transparent;
          border-bottom-color: var(--border);
          transition: background 0.3s, border-color 0.3s;
          cursor: default;
        }
        .stat-row:first-child { border-top-color: var(--border); }
        .stat-row:hover {
          background: var(--parchment);
          border-color: var(--border-g);
        }
        .stat-index {
          font-family: 'Times New Roman', serif;
          font-size: 0.68rem;
          color: var(--gold);
          opacity: 0.6;
          letter-spacing: 0.1em;
          min-width: 20px;
        }
        .stat-num {
          font-family: 'Times New Roman', 'Times', Georgia, serif;
          font-size: 2.6rem;
          font-weight: 400;
          color: var(--ink);
          line-height: 1;
          min-width: 110px;
        }
        .stat-text .stat-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--ink-2);
          letter-spacing: 0.02em;
        }
        .stat-text .stat-sub {
          font-size: 0.73rem;
          color: var(--muted-lt);
          margin-top: 3px;
          letter-spacing: 0.04em;
        }
        .stat-row-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--sage);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }
        .stat-row:hover .stat-row-bar { transform: scaleY(1); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ══ MARQUEE ══════════════════════════════ */
        .marquee-wrap {
          position: relative;
          z-index: 10;
          border-top: 1px solid var(--border-g);
          background: var(--parchment);
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          animation: marqueeScroll 32s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 13px 36px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
          border-right: 1px solid var(--border);
          transition: color 0.2s;
        }
        .marquee-item:hover { color: var(--sage); }
        .marquee-cross {
          font-size: 8px;
          color: var(--gold-mid);
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* ══ BAND ════════════════════════════════ */
        .band {
          background: var(--cream-deep);
          padding: 48px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border-g);
          border-bottom: 1px solid var(--border-g);
        }
        .band-item { text-align: center; }
        .band-num {
          font-family: 'Times New Roman', serif;
          font-size: 1.9rem;
          color: var(--sage);
          line-height: 1;
          display: block;
        }
        .band-label {
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 6px;
          display: block;
        }
        .band-divider {
          width: 1px;
          height: 40px;
          background: var(--border-g);
        }

        /* ══ CARDS SECTION ═══════════════════════ */
        .grid-section {
          padding: 104px 0 128px;
          background: var(--cream-lt);
          position: relative;
        }
        .grid-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-g), transparent);
        }
        .grid-section::after {
          content: '';
          position: absolute;
          top: 80px; right: -60px;
          width: 400px; height: 400px;
          border: 1px solid rgba(166,124,42,0.06);
          border-radius: 50%;
          pointer-events: none;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .section-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--sage);
          opacity: 0.6;
        }
        .section-eyebrow-text {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sage);
        }

        .section-heading {
          font-family: 'Times New Roman', 'Times', Georgia, serif;
          font-size: clamp(2.4rem, 4.2vw, 3.5rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.018em;
          color: var(--ink);
          max-width: 580px;
          margin-bottom: 16px;
        }
        .section-heading em {
          font-style: italic;
          color: var(--gold);
        }

        .section-sub {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.8;
          max-width: 480px;
          margin-bottom: 72px;
        }

        /* Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .fac-card-wrap {
          background: var(--cream-lt);
          animation: cardReveal 0.6s ease both;
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fac-card {
          position: relative;
          background: var(--cream-lt);
          padding: 36px 32px 32px;
          height: 300px;
          display: flex;
          flex-direction: column;
          transition: background 0.3s;
          cursor: pointer;
          overflow: hidden;
        }
        .fac-card.is-hovered {
          background: #FFFDF5;
        }

        /* Shimmer */
        .card-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 35%,
            rgba(166,124,42,0.055) 50%,
            transparent 65%
          );
          transform: translateX(-100%);
          pointer-events: none;
        }
        .fac-card.is-hovered .card-shimmer {
          transform: translateX(100%);
          transition: transform 0.55s ease;
        }

        /* Left bar */
        .card-left-bar {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: var(--accent, var(--sage));
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .fac-card.is-hovered .card-left-bar { transform: scaleY(1); }

        /* Icon */
        .card-icon-wrap {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 22px;
        }
        .card-icon-box {
          width: 50px; height: 50px;
          border: 1px solid var(--border);
          border-radius: var(--r-sm);
          display: flex; align-items: center; justify-content: center;
          background: var(--cream);
          transition: border-color 0.3s, background 0.3s;
        }
        .fac-card.is-hovered .card-icon-box {
          border-color: var(--accent, var(--sage));
          background: color-mix(in srgb, var(--accent, var(--sage)) 9%, var(--cream-lt));
        }
        .card-svg {
          width: 24px; height: 24px;
          color: var(--muted-lt);
          transition: color 0.3s;
        }
        .fac-card.is-hovered .card-svg {
          color: var(--accent, var(--sage));
        }
        .icon-number {
          font-family: 'Times New Roman', serif;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: var(--muted-lt);
          opacity: 0.5;
          padding-top: 4px;
        }

        .card-name {
          font-family: 'Times New Roman', 'Times', Georgia, serif;
          font-size: 1.12rem;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 10px;
          letter-spacing: 0.01em;
          line-height: 1.3;
          transition: color 0.3s;
        }
        .card-blurb {
          font-size: 0.83rem;
          color: var(--muted);
          line-height: 1.75;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .card-line {
          flex: 1; height: 1px;
          background: var(--border);
          transition: background 0.3s;
        }
        .fac-card.is-hovered .card-line {
          background: color-mix(in srgb, var(--accent, var(--sage)) 28%, transparent);
        }
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted-lt);
          transition: color 0.3s, gap 0.25s;
        }
        .fac-card.is-hovered .card-cta {
          color: var(--accent, var(--sage));
          gap: 11px;
        }

        .card-watermark {
          position: absolute;
          bottom: 20px; right: 24px;
          font-family: 'Times New Roman', serif;
          font-size: 3.5rem; line-height: 1;
          color: rgba(166,124,42,0.05);
          pointer-events: none;
          transition: color 0.3s;
          user-select: none;
        }
        .fac-card.is-hovered .card-watermark {
          color: rgba(166,124,42,0.09);
        }

        /* ══ PHILOSOPHY STRIP ════════════════════
           Warm parchment — still fully light
        ════════════════════════════════════════ */
        .philosophy-strip {
          background: var(--parchment);
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--border-g);
          border-bottom: 1px solid var(--border-g);
        }
        .philosophy-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(78,107,94,0.04), transparent 70%);
          pointer-events: none;
        }
        .philosophy-quote {
          font-family: 'Times New Roman', 'Times', Georgia, serif;
          font-size: clamp(1.5rem, 2.8vw, 2.2rem);
          font-weight: 400;
          font-style: italic;
          color: var(--ink-2);
          opacity: 0.8;
          max-width: 680px;
          margin: 0 auto 20px;
          line-height: 1.55;
          letter-spacing: 0.01em;
          position: relative; z-index: 2;
        }
        .philosophy-attr {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sage);
          opacity: 0.7;
          position: relative; z-index: 2;
        }
        .philosophy-rule {
          width: 40px; height: 1px;
          background: var(--gold);
          opacity: 0.35;
          margin: 20px auto;
          position: relative; z-index: 2;
        }

        /* ══ RESPONSIVE ══════════════════════════ */
        @media (max-width: 960px) {
          .hero-body {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 32px 64px;
          }
          .hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2px;
          }
          .stat-row:first-child { border-top-color: var(--border); }
        }
        @media (max-width: 640px) {
          .hero-body { padding: 56px 20px 48px; }
          .container { padding: 0 20px; }
          .hero-stats { grid-template-columns: 1fr; }
          .cards-grid { grid-template-columns: 1fr; }
          .grid-section { padding: 72px 0 88px; }
          .band { gap: 32px; padding: 40px 24px; }
          .band-divider { display: none; }
          .fac-card { height: auto; min-height: 260px; }
          .philosophy-strip { padding: 56px 24px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .scalpel-line, .fac-card-wrap,
          .card-shimmer, .btn-gold::before {
            animation: none !important;
            transition: none !important;
          }
          .fac-card-wrap { opacity: 1; transform: none; }
          .scalpel-line { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="fp">

        {/* ─── HERO ──────────────────────────── */}
        <section className="fp-hero" ref={heroRef}>
          <div className="hero-noise" />
          <div className="hero-glow" />
          <div className="hero-rules" />
          <ScalpelLine />

          <div className="hero-body">

            {/* LEFT */}
            <div className="hero-left">
              <Breadcrumb items={[{ label: "Facilities", href: "/facilities" }]} />

              <div className="hero-eyebrow" style={{ marginTop: "32px" }}>
                <div className="eyebrow-rule" />
                <span className="eyebrow-text">World-Class Infrastructure</span>
              </div>

              <h1 className="hero-heading">
                Where <span className="gold-word">Precision</span><br />
                Meets <span className="rule-under">Compassion</span>
              </h1>

              <p className="hero-sub">
                State-of-the-art facilities and distinguished medical expertise,
                united in service of every patient — with the same dedication
                every hour of every day.
              </p>

              <div className="hero-actions">
                <button className="btn-gold">
                  Book Appointment
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="btn-outline">Our Departments</button>
              </div>
            </div>

            {/* RIGHT: Stats */}
            <div className="hero-stats">
              {STATS.map((s, i) => (
                <div className="stat-row" key={i}>
                  <div className="stat-row-bar" />
                  <span className="stat-index">0{i + 1}</span>
                  <div className="stat-num">
                    <Counter end={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                  </div>
                  <div className="stat-text">
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <Marquee />
        </section>

        {/* ─── BAND ──────────────────────────── */}
        <div className="band">
          <div className="band-item">
            <span className="band-num">NABH</span>
            <span className="band-label">Accredited</span>
          </div>
          <div className="band-divider" />
          <div className="band-item">
            <span className="band-num">24/7</span>
            <span className="band-label">Emergency & ICU</span>
          </div>
          <div className="band-divider" />
          <div className="band-item">
            <span className="band-num">ISO</span>
            <span className="band-label">Certified</span>
          </div>
          <div className="band-divider" />
          <div className="band-item">
            <span className="band-num">5 ★</span>
            <span className="band-label">Patient Rating</span>
          </div>
        </div>

        {/* ─── CARDS GRID ────────────────────── */}
        <section className="grid-section">
          <div className="container">
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Our Infrastructure</span>
            </div>

            <h2 className="section-heading">
              Every Facility,<br />
              <em>Precisely Delivered</em>
            </h2>

            <p className="section-sub">
              From critical care to diagnostics, our infrastructure is built
              to the highest clinical standards — serving patients with
              excellence and dignity.
            </p>

            <div className="cards-grid">
              {facilities.map((f, i) => (
                <FacilityCard key={f.id || i} facility={f} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── PHILOSOPHY STRIP ──────────────── */}
        <div className="philosophy-strip">
          <p className="philosophy-quote">
            "The art of medicine consists of amusing the patient while nature
            cures the disease."
          </p>
          <div className="philosophy-rule" />
          <p className="philosophy-attr">Our Guiding Philosophy</p>
        </div>

        <AppointmentCTA />
      </div>
    </>
  );
}