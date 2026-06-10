import { testimonials } from "@/data/testimonials";
import { Star, Quote, MapPin } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 px-6" style={{
      background: "linear-gradient(150deg, #f0fdf4 0%, #dcfce7 45%, #f7fee7 100%)",
    }}>

      {/* Organic blobs */}
      <div className="absolute pointer-events-none" style={{ top: "-70px", left: "-70px", width: "300px", height: "300px", borderRadius: "61% 39% 52% 48% / 55% 45% 55% 45%", background: "rgba(34,197,94,0.10)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-50px", right: "-50px", width: "260px", height: "260px", borderRadius: "44% 56% 38% 62% / 60% 42% 58% 40%", background: "rgba(163,230,53,0.12)" }} />
      <div className="absolute pointer-events-none" style={{ top: "38%", left: "50%", transform: "translateX(-50%)", width: "480px", height: "180px", borderRadius: "50%", background: "rgba(21,128,61,0.04)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2" style={{
            background: "#dcfce7", border: "1px solid #86efac",
            borderRadius: "100px", padding: "6px 16px",
            fontSize: "11px", fontWeight: 700, color: "#15803d",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            Patient Stories
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "bdpulse 2s infinite" }} />
          </div>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.9rem, 4vw, 2.5rem)", fontWeight: 700,
          textAlign: "center", color: "#14532d", lineHeight: 1.15, marginBottom: "10px",
        }}>
          What Our <span style={{ color: "#65a30d" }}>Patients Say</span>
        </h2>
        <p style={{ textAlign: "center", color: "#4d7c0f", fontSize: "14.5px", maxWidth: "460px", margin: "0 auto 48px", lineHeight: 1.7 }}>
          Thousands of families trust us for their healthcare needs. Hover a card to read the full story.
        </p>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "22px", marginBottom: "42px" }}>
          {testimonials.map((t) => (
            <div key={t.id} style={{ perspective: "1000px", height: "310px" }} className="flip-wrap">
              <div className="flipper" style={{
                position: "relative", width: "100%", height: "100%",
                transformStyle: "preserve-3d", transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
              }}>

                {/* FRONT */}
                <div style={{
                  position: "absolute", inset: 0, backfaceVisibility: "hidden",
                  borderRadius: "20px 5px 20px 5px", padding: "24px 20px",
                  background: "#fff", border: "1px solid rgba(34,197,94,0.18)", overflow: "hidden",
                }}>
                  {/* Corner blob */}
                  <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "80px", height: "80px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", background: "linear-gradient(135deg,#bbf7d0,#d9f99d)", opacity: .8, pointerEvents: "none" }} />

                  {/* Diamond quote */}
                  <div style={{ width: "34px", height: "34px", background: "linear-gradient(135deg,#16a34a,#65a30d)", transform: "rotate(45deg)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 4px 12px rgba(22,163,74,0.28)" }}>
                    <Quote size={13} style={{ transform: "rotate(-45deg)", color: "#fff" }} />
                  </div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "3px", marginBottom: "9px" }}>
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} style={{ color: "#f59e0b", fill: "#f59e0b" }} />)}
                  </div>

                  {/* Treatment */}
                  <div style={{ display: "inline-flex", background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#15803d", fontSize: "11px", fontWeight: 700, borderRadius: "100px", padding: "4px 11px", marginBottom: "13px", letterSpacing: "0.04em" }}>
                    {t.treatment}
                  </div>

                  {/* Review */}
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75, fontStyle: "italic", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    "{t.review}"
                  </p>

                  {/* Wavy divider */}
                  <div style={{ height: "2px", margin: "14px 0 12px", background: "repeating-linear-gradient(90deg,#86efac 0,#86efac 6px,transparent 6px,transparent 12px)", opacity: .6, borderRadius: "2px" }} />

                  {/* Patient */}
                  <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <div style={{ width: "38px", height: "38px", flexShrink: 0, background: "linear-gradient(135deg,#16a34a,#65a30d)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "13px" }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "12.5px", color: "#14532d" }}>{t.name}</div>
                      <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "1px", display: "flex", alignItems: "center", gap: "3px" }}>
                        <MapPin size={10} /> {t.location}
                      </div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "10px", right: "14px", fontSize: "10px", color: "#86efac", fontWeight: 600, letterSpacing: ".05em" }}>↻ hover</div>
                </div>

                {/* BACK */}
                <div style={{
                  position: "absolute", inset: 0,
                  transform: "rotateY(180deg)", backfaceVisibility: "hidden",
                  borderRadius: "20px 5px 20px 5px", padding: "24px 20px",
                  background: "linear-gradient(145deg,#14532d,#1a6b3a)",
                  border: "1px solid rgba(134,239,172,0.2)",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  alignItems: "center", textAlign: "center", gap: "12px",
                }}>
                  <div style={{ fontSize: "2.5rem", color: "rgba(187,247,208,0.3)", fontFamily: "'Playfair Display',serif", lineHeight: 1 }}>"</div>
                  <p style={{ fontSize: "13.5px", color: "#bbf7d0", lineHeight: 1.8, fontStyle: "italic", padding: "0 8px" }}>"{t.review}"</p>
                  <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} style={{ color: "#facc15", fill: "#facc15" }} />)}
                  </div>
                  <div style={{ width: "40px", height: "2px", background: "rgba(134,239,172,0.4)", borderRadius: "2px" }} />
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#86efac" }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(187,247,208,0.6)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>{t.treatment}</div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Rating bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "28px", background: "#fff", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "20px", padding: "18px 32px", maxWidth: "500px", margin: "0 auto", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom,#16a34a,#65a30d)", borderRadius: "4px 0 0 4px" }} />
          <div>
            <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={17} style={{ color: "#f59e0b", fill: "#f59e0b" }} />)}
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "#14532d", lineHeight: 1 }}>
              4.9 <span style={{ fontSize: ".95rem", color: "#6b7280" }}>/5</span>
            </div>
            <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "3px" }}>Overall Rating</div>
          </div>
          <div style={{ width: "1px", height: "40px", background: "rgba(34,197,94,0.2)" }} />
          <div><div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#14532d" }}>1,000+</div><div style={{ fontSize: "11px", color: "#6b7280" }}>Google Reviews</div></div>
          <div style={{ width: "1px", height: "40px", background: "rgba(34,197,94,0.2)" }} />
          <div><div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#14532d" }}>98%</div><div style={{ fontSize: "11px", color: "#6b7280" }}>Recommend Us</div></div>
        </div>

      </div>

      <style>{`
        @keyframes bdpulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:.5} }
        .flip-wrap:hover .flipper { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}