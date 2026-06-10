"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import { facilities } from "@/data/facilities";

const FACILITY_META = [
  { emoji: "🏥", color: "#a855f7", light: "rgba(168,85,247,0.1)", dark: "#9333ea", num: "01" },
  { emoji: "👶", color: "#6366f1", light: "rgba(99,102,241,0.1)", dark: "#4f46e5", num: "02" },
  { emoji: "🔬", color: "#9333ea", light: "rgba(147,51,234,0.1)", dark: "#7e22ce", num: "03" },
  { emoji: "❤️", color: "#a855f7", light: "rgba(168,85,247,0.1)", dark: "#9333ea", num: "04" },
  { emoji: "💧", color: "#6366f1", light: "rgba(99,102,241,0.1)", dark: "#4f46e5", num: "05" },
  { emoji: "💊", color: "#9333ea", light: "rgba(147,51,234,0.1)", dark: "#7e22ce", num: "06" },
];

function FacilityCard({ facility, meta, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/facilities/${facility.slug}`}
      className={`fac-card fac-anim ${visible ? "in" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="fac-glow" style={{ opacity: hovered ? 1 : 0, background: `linear-gradient(135deg, ${meta.color}18, ${meta.dark}0c)` }} />
      <div className="fac-strip" style={{ background: `linear-gradient(180deg, ${meta.color}, ${meta.dark})`, opacity: hovered ? 1 : 0.6 }} />
      <span className="fac-num" style={{ color: `${meta.color}18` }}>{meta.num}</span>

      <div className="fac-icon-wrap">
        <div
          className="fac-blob"
          style={{
            background: hovered ? `linear-gradient(135deg, ${meta.color}, ${meta.dark})` : meta.light,
            transform: hovered ? "scale(1.13) rotate(-6deg)" : "scale(1) rotate(0deg)",
          }}
        >
          <span className="fac-emoji">{meta.emoji}</span>
        </div>
      </div>

      <div className="fac-body">
        <h3 className="fac-name" style={{ color: hovered ? meta.color : "#2e1065" }}>{facility.name}</h3>
        <div className="fac-avail" style={{ color: meta.color }}>
          <Clock size={11} strokeWidth={2.5} />
          {facility.available}
        </div>
        <p className="fac-desc">{facility.shortDesc}</p>
        <div className="fac-more" style={{ color: meta.color }}>
          Know More
          <ChevronRight size={14} strokeWidth={2.5} style={{ transform: hovered ? "translateX(4px)" : "none", transition: "transform .2s" }} />
        </div>
      </div>
    </Link>
  );
}

export default function FacilitiesPreview() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const featured = facilities.slice(0, 6);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        .fac-section {
          position: relative; padding: 96px 0;
          background: #faf5ff;
          font-family: 'Sora', sans-serif; overflow: hidden;
        }

        /* Dot pattern */
        .fac-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(168,85,247,0.07) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }

        /* Soft orbs */
        .fac-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); opacity: 0.18; pointer-events: none;
          animation: facOrb 10s ease-in-out infinite alternate;
        }
        .fac-orb-1 { width: 480px; height: 480px; background: #c084fc; top: -130px; left: -100px; }
        .fac-orb-2 { width: 360px; height: 360px; background: #818cf8; bottom: -80px; right: -80px; animation-delay: -5s; }
        .fac-orb-3 { width: 200px; height: 200px; background: #e879f9; top: 42%; left: 46%; animation-delay: -8s; }
        @keyframes facOrb { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(22px,15px) scale(1.1)} }

        .fac-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 2; }

        /* Header */
        .fac-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 24px; margin-bottom: 56px; flex-wrap: wrap;
        }
        .fac-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.28);
          color: #9333ea; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: .12em;
          padding: 5px 14px; border-radius: 100px; width: fit-content; margin-bottom: 12px;
        }
        .fac-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #a855f7; animation: facPulse 1.6s ease-in-out infinite; }
        @keyframes facPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }

        .fac-title { font-size: clamp(32px,3.8vw,48px); font-weight: 700; line-height: 1.15; letter-spacing: 0px; color: #2e1065; margin: 0 0 8px; font-family: 'Times New Roman', Times, Georgia, serif; font-style: italic; }
        .fac-title-hl {
          background: linear-gradient(100deg, #a855f7 0%, #6366f1 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-family: 'Times New Roman', Times, Georgia, serif; font-style: italic;
        }
        .fac-subtitle { color: #7e22ce; opacity: 0.6; font-size: 15px; line-height: 1.7; margin: 0; max-width: 400px; }

        .fac-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          color: #fff; font-size: 13px; font-weight: 700;
          padding: 13px 26px; border-radius: 100px; text-decoration: none;
          box-shadow: 0 6px 24px rgba(168,85,247,0.32);
          transition: opacity .2s, transform .2s; flex-shrink: 0;
          font-family: 'Sora', sans-serif;
        }
        .fac-cta:hover { opacity: .88; transform: translateY(-2px); }

        /* Grid */
        .fac-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 860px) { .fac-grid { grid-template-columns: 1fr; } }

        /* Card */
        .fac-card {
          position: relative; display: flex; align-items: stretch;
          background: #fff;
          border: 1px solid rgba(168,85,247,0.13);
          border-radius: 20px; overflow: hidden;
          text-decoration: none; min-height: 128px;
          box-shadow: 0 2px 16px rgba(168,85,247,0.07);
          transition: transform .32s cubic-bezier(.34,1.56,.64,1), box-shadow .28s, border-color .28s, background .28s;
        }
        .fac-card:hover {
          transform: translateY(-7px) scale(1.018);
          box-shadow: 0 22px 52px rgba(168,85,247,0.17);
          border-color: rgba(168,85,247,0.3);
          background: #fff;
        }
        .fac-glow { position: absolute; inset: 0; pointer-events: none; transition: opacity .3s; border-radius: 20px; z-index: 0; }
        .fac-strip { width: 4px; flex-shrink: 0; align-self: stretch; transition: opacity .25s; position: relative; z-index: 1; }
        .fac-num {
          position: absolute; top: 10px; right: 14px; z-index: 0;
          font-size: 42px; font-weight: 800; letter-spacing: -2px; line-height: 1;
          pointer-events: none; font-family: 'Sora', sans-serif;
        }
        .fac-icon-wrap { padding: 20px 16px 20px 20px; flex-shrink: 0; display: flex; align-items: center; position: relative; z-index: 1; }
        .fac-blob {
          width: 62px; height: 62px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          transition: background .3s, transform .32s cubic-bezier(.34,1.6,.64,1);
        }
        .fac-emoji { font-size: 26px; line-height: 1; }
        .fac-body { flex: 1; padding: 18px 18px 18px 4px; display: flex; flex-direction: column; gap: 5px; position: relative; z-index: 1; }
        .fac-name { font-size: 14.5px; font-weight: 700; margin: 0; line-height: 1.25; transition: color .2s; }
        .fac-avail { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; }
        .fac-desc { color: #7c6a8a; font-size: 12.5px; line-height: 1.6; margin: 0; }
        .fac-more { display: flex; align-items: center; gap: 3px; font-size: 12px; font-weight: 700; margin-top: 2px; }

        /* Scroll-in */
        .fac-header-anim { opacity: 0; transform: translateY(20px); transition: opacity .6s ease, transform .6s ease; }
        .fac-header-anim.in { opacity: 1; transform: none; }
        .fac-anim { opacity: 0; transform: translateY(32px) scale(.97); transition: opacity .55s ease, transform .55s cubic-bezier(.34,1.4,.64,1); }
        .fac-anim.in { opacity: 1; transform: none; }
      `}</style>

      <section className="fac-section" ref={ref}>
        <div className="fac-orb fac-orb-1" />
        <div className="fac-orb fac-orb-2" />
        <div className="fac-orb fac-orb-3" />

        <div className="fac-container">
          <div className={`fac-header fac-header-anim ${visible ? "in" : ""}`}>
            <div>
              <span className="fac-badge"><span className="fac-badge-dot" />Facilities</span>
              <h2 className="fac-title">World-Class <span className="fac-title-hl">Infrastructure</span></h2>
              <p className="fac-subtitle">State-of-the-art equipment and facilities to ensure the highest quality of care.</p>
            </div>
            <Link href="/facilities" className="fac-cta">All Facilities <ArrowRight size={15} /></Link>
          </div>

          <div className="fac-grid">
            {featured.map((facility, index) => (
              <FacilityCard key={facility.id} facility={facility} meta={FACILITY_META[index % FACILITY_META.length]} index={index} visible={visible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}