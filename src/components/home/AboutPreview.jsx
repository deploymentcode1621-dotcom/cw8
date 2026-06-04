"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "@/utils/constants";

const highlights = [
  { text: "NABH Accredited Hospital", icon: "🏆" },
  { text: "300+ Bed Multi-speciality Facility", icon: "🏥" },
  { text: "40+ Medical Specializations", icon: "🩺" },
  { text: "Advanced ICU & NICU", icon: "💊" },
  { text: "State-of-the-art Operation Theatres", icon: "⚕️" },
  { text: "24/7 Emergency & Ambulance Services", icon: "🚑" },
];

const stats = [
  { label: "Year Founded", value: SITE_CONFIG.established, suffix: "" },
  { label: "Specializations", value: 40, suffix: "+" },
  { label: "Expert Doctors", value: 150, suffix: "+" },
  { label: "Beds Available", value: 300, suffix: "+" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isYear = target > 1000;
    const startVal = isYear ? target - 20 : 0;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ label, value, suffix, animate }) {
  const numeric = parseInt(String(value).replace(/\D/g, ""), 10);
  const counted = useCountUp(numeric, 1800, animate);
  return (
    <div className="about-stat-card">
      <span className="about-stat-num">{counted}{suffix}</span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
}

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700;800&display=swap');

        .about-section {
          position: relative;
          overflow: hidden;
          padding: 96px 0;
          background: #f0f7ff;
          font-family: 'Sora', 'Segoe UI', sans-serif;
        }

        .about-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.22;
          animation: aboutOrb 10s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .about-bg-orb:nth-child(1) { width: 480px; height: 480px; background: #0891b2; top: -120px; left: -80px; animation-delay: 0s; }
        .about-bg-orb:nth-child(2) { width: 360px; height: 360px; background: #334155; bottom: -80px; right: -60px; animation-delay: -4s; }
        .about-bg-orb:nth-child(3) { width: 240px; height: 240px; background: #7dd3fc; top: 38%; left: 42%; animation-delay: -7s; }
        @keyframes aboutOrb {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(28px, 18px) scale(1.1); }
        }

        .about-grid-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(8,145,178,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,145,178,0.06) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .about-container {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        @media (max-width: 900px) {
          .about-container { grid-template-columns: 1fr; gap: 48px; }
        }

        /* LEFT */
        .about-left { display: flex; flex-direction: column; gap: 24px; }

        .about-ring-wrap {
          position: relative; width: 100%; aspect-ratio: 1;
          max-width: 380px; margin: 0 auto;
        }
        .about-ring-svg {
          width: 100%; height: 100%;
          animation: aboutSpin 18s linear infinite;
        }
        @keyframes aboutSpin { to { transform: rotate(360deg); } }
        .about-ring-inner {
          position: absolute; inset: 16%;
          background: #ffffff;
          border-radius: 50%;
          border: 1.5px solid rgba(8,145,178,0.2);
          box-shadow: 0 4px 32px rgba(8,145,178,0.1);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px; padding: 16px; text-align: center;
        }
        .about-ring-badge {
          background: linear-gradient(135deg, #0891b2, #334155);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 52px; font-weight: 800; line-height: 1; letter-spacing: -2px;
        }
        .about-ring-sub {
          color: #64748b; font-size: 12px; font-weight: 400; letter-spacing: 0.04em; line-height: 1.5;
        }
        .about-ring-line {
          width: 36px; height: 2px;
          background: linear-gradient(90deg, #0891b2, #334155);
          border-radius: 2px;
        }

        .about-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .about-stat-card {
          background: #ffffff;
          border: 1px solid rgba(8,145,178,0.15);
          border-radius: 16px; padding: 20px 16px;
          display: flex; flex-direction: column; gap: 4px;
          box-shadow: 0 2px 12px rgba(8,145,178,0.07);
          transition: border-color .25s, box-shadow .25s, transform .2s;
        }
        .about-stat-card:hover {
          border-color: rgba(8,145,178,0.45);
          box-shadow: 0 6px 24px rgba(8,145,178,0.14);
          transform: translateY(-2px);
        }
        .about-stat-num {
          font-size: 28px; font-weight: 800; letter-spacing: -1px;
          background: linear-gradient(135deg, #0891b2, #334155);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }
        .about-stat-label {
          color: #94a3b8; font-size: 11px;
          font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em;
        }

        /* RIGHT */
        .about-right { display: flex; flex-direction: column; gap: 28px; }

        .about-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(8,145,178,0.08);
          border: 1px solid rgba(8,145,178,0.25);
          color: #0891b2; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          padding: 5px 14px; border-radius: 100px; width: fit-content;
        }
        .about-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #0891b2; animation: badgePulse 1.6s ease-in-out infinite;
        }
        @keyframes badgePulse { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.6);} }

        .about-heading {
          font-size: clamp(36px, 4vw, 52px); font-weight: 800;
          line-height: 1.1; letter-spacing: -1.5px; color: #0f172a; margin: 0;
        }
        .about-heading-hl {
          background: linear-gradient(100deg, #0891b2 20%, #334155 80%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-desc {
          color: #475569; font-size: 15px; line-height: 1.8; margin: 0; max-width: 460px;
        }

        .about-divider {
          height: 1px; border: none;
          background: linear-gradient(90deg, transparent, rgba(8,145,178,0.2), transparent);
          margin: 0;
        }

        .about-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media (max-width: 520px) { .about-highlights { grid-template-columns: 1fr; } }
        .about-hl-item {
          display: flex; align-items: center; gap: 10px;
          background: #ffffff;
          border: 1px solid rgba(8,145,178,0.12);
          border-radius: 12px; padding: 10px 14px;
          box-shadow: 0 1px 6px rgba(8,145,178,0.05);
          transition: all .2s;
        }
        .about-hl-item:hover {
          background: rgba(8,145,178,0.05);
          border-color: rgba(8,145,178,0.35);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(8,145,178,0.1);
        }
        .about-hl-emoji { font-size: 15px; line-height: 1; flex-shrink: 0; }
        .about-hl-text { color: #334155; font-size: 12.5px; font-weight: 500; }

        .about-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .about-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #0891b2, #334155);
          color: #fff; font-size: 14px; font-weight: 700;
          padding: 14px 28px; border-radius: 100px;
          text-decoration: none; transition: opacity .2s, transform .2s;
          letter-spacing: 0.02em; font-family: 'Sora', sans-serif;
          box-shadow: 0 4px 20px rgba(8,145,178,0.3);
        }
        .about-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(8,145,178,0.35); }
        .about-btn-arrow { transition: transform .2s; }
        .about-btn-primary:hover .about-btn-arrow { transform: translateX(4px); }
        .about-btn-ghost {
          color: #64748b; font-size: 13px; font-weight: 500;
          text-decoration: none; transition: color .2s;
          font-family: 'Sora', sans-serif;
        }
        .about-btn-ghost:hover { color: #0f172a; }

        /* Scroll-in animations */
        .about-anim-left {
          opacity: 0; transform: translateX(-32px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .about-anim-left.in { opacity: 1; transform: none; }
        .about-anim {
          opacity: 0; transform: translateY(24px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .about-anim.in { opacity: 1; transform: none; }
        .d1{transition-delay:.1s} .d2{transition-delay:.22s}
        .d3{transition-delay:.34s} .d4{transition-delay:.46s} .d5{transition-delay:.58s}
      `}</style>

      <section className="about-section" ref={sectionRef}>
        <div className="about-bg-orb" />
        <div className="about-bg-orb" />
        <div className="about-bg-orb" />
        <div className="about-grid-overlay" />

        <div className="about-container">
          {/* LEFT */}
          <div className={`about-left about-anim-left ${visible ? "in" : ""}`}>
            <div className="about-ring-wrap">
              <svg className="about-ring-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="95" stroke="url(#ringGrad1)" strokeWidth="1.5" strokeDasharray="8 6" />
                <circle cx="100" cy="100" r="74" stroke="rgba(8,145,178,0.2)" strokeWidth="1" strokeDasharray="3 9" />
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 100 + 95 * Math.cos(rad);
                  const y = 100 + 95 * Math.sin(rad);
                  return <circle key={i} cx={x} cy={y} r="3.5" fill={i % 2 === 0 ? "#0891b2" : "#334155"} />;
                })}
                <defs>
                  <linearGradient id="ringGrad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0891b2" />
                    <stop offset="1" stopColor="#334155" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="about-ring-inner">
                <span className="about-ring-badge">25+</span>
                <div className="about-ring-line" />
                <span className="about-ring-sub">Years of<br />Trusted Care</span>
              </div>
            </div>

            <div className={`about-stats-grid about-anim d3 ${visible ? "in" : ""}`}>
              {stats.map((s) => (
                <StatCard key={s.label} {...s} animate={visible} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <div className={`about-anim d1 ${visible ? "in" : ""}`}>
              <span className="about-badge">
                <span className="about-badge-dot" />
                About Us
              </span>
            </div>

            <div className={`about-anim d2 ${visible ? "in" : ""}`}>
              <h2 className="about-heading">
                Trusted Healthcare<br />
                <span className="about-heading-hl">Since 1998</span>
              </h2>
            </div>

            <p className={`about-desc about-anim d3 ${visible ? "in" : ""}`}>
              {SITE_CONFIG.name} has been a beacon of hope and healing for the people of Latur and
              surrounding districts. With cutting-edge technology and a team of expert doctors, we
              provide compassionate, world-class healthcare.
            </p>

            <hr className="about-divider" />

            <div className={`about-highlights about-anim d4 ${visible ? "in" : ""}`}>
              {highlights.map((item) => (
                <div className="about-hl-item" key={item.text}>
                  <span className="about-hl-emoji">{item.icon}</span>
                  <span className="about-hl-text">{item.text}</span>
                </div>
              ))}
            </div>

            <div className={`about-cta-row about-anim d5 ${visible ? "in" : ""}`}>
              <Link href="/about" className="about-btn-primary">
                Learn More About Us
                <svg className="about-btn-arrow" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="about-btn-ghost">
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}