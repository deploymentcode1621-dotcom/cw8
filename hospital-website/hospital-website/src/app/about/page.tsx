'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

// ── DATA ─────────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: '1999',
    short: 'Founded',
    title: 'Doors Open',
    desc: 'Patil Hospital opened with 50 beds and 20 specialist physicians, with one clear mission: serve the community with world-class care.',
    icon: '🏥',
    accent: '#0A1628',
    tag: 'The Beginning',
  },
  {
    year: '2005',
    short: 'NABH',
    title: 'National Accreditation',
    desc: 'Earned NABH accreditation, setting new benchmarks in patient safety and quality care — one of the first hospitals in the region to do so.',
    icon: '🏅',
    accent: '#0891B2',
    tag: 'Recognition',
  },
  {
    year: '2011',
    short: 'Oncology',
    title: 'Cancer Centre Launched',
    desc: 'Opened a dedicated oncology wing with PET-CT and advanced radiation therapy capabilities, bringing life-saving cancer care closer to home.',
    icon: '🎗️',
    accent: '#0F6E56',
    tag: 'Expansion',
  },
  {
    year: '2016',
    short: 'Robotics',
    title: 'Robotic Surgery',
    desc: 'Introduced robotic-assisted surgery — a first in the region — redefining precision in minimally invasive procedures and surgical outcomes.',
    icon: '🤖',
    accent: '#533AB7',
    tag: 'Innovation',
  },
  {
    year: '2020',
    short: 'Digital',
    title: 'Digital Health Platform',
    desc: 'Launched tele-consultation, digital health records, and AI-aided diagnostics, ensuring seamless care even during the most challenging times.',
    icon: '💻',
    accent: '#0C6E91',
    tag: 'Technology',
  },
  {
    year: '2024',
    short: 'Expansion',
    title: '500-Bed Milestone',
    desc: 'Completed a landmark expansion: new ICU towers, a dedicated trauma centre, and a women & child wing — growing to meet every community need.',
    icon: '🏗️',
    accent: '#B45309',
    tag: 'Growth',
  },
]

const values = [
  { icon: '💙', title: 'Compassion', desc: 'Every interaction is guided by empathy, dignity, and genuine care for the whole person.' },
  { icon: '🔬', title: 'Innovation', desc: 'We continuously invest in cutting-edge medical technology and evidence-based research.' },
  { icon: '🌟', title: 'Excellence', desc: 'Our clinical outcomes consistently exceed national benchmarks across all specialties.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent communication and ethical practice form the bedrock of everything we do.' },
]

const leadership = [
  { name: 'Dr. Rajiv Mehta', title: 'Chief Medical Officer', dept: 'Hospital Leadership', initials: 'RM', bg: '#0A1628' },
  { name: 'Ms. Leena Joshi', title: 'CEO & Administrator', dept: 'Hospital Management', initials: 'LJ', bg: '#0891B2' },
  { name: 'Dr. Samuel White', title: 'Director of Surgery', dept: 'Surgical Division', initials: 'SW', bg: '#0F6E56' },
  { name: 'Dr. Fatima Al-Rashid', title: 'Head of Research', dept: 'Medical Research', initials: 'FA', bg: '#533AB7' },
]

const badges = ['NABH Accredited', 'ISO 9001:2015', 'JCI Standards', 'NABL Lab', 'WHO Certified']

const stats = [
  { value: '500+', label: 'Expert Doctors' },
  { value: '40+', label: 'Specialties' },
  { value: '1M+', label: 'Patients Served' },
  { value: '25', label: 'Years of Excellence' },
]

// ── ZIGZAG TIMELINE ───────────────────────────────────────────────────────────

function ZigzagTimeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    itemRefs.current.forEach((el) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tl-visible')
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="w-full py-28 bg-white overflow-hidden">
      <style>{`
        .tl-item { opacity: 0; transition: opacity 0.65s ease, transform 0.65s ease; }
        .tl-item.tl-left  { transform: translateX(-48px); }
        .tl-item.tl-right { transform: translateX(48px); }
        .tl-item.tl-visible { opacity: 1; transform: translateX(0); }
        .tl-item.tl-visible .year-badge { animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.3s both; }
        @keyframes popIn { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .connector-line { position: absolute; top: 50%; width: 48px; height: 2px; }
        @media (prefers-reduced-motion: reduce) {
          .tl-item { opacity: 1 !important; transform: none !important; transition: none !important; }
          .tl-item.tl-visible .year-badge { animation: none !important; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight">Milestones That Shaped Us</h2>
          <p className="text-gray-400 text-[15px] mt-3 max-w-xl mx-auto">
            A quarter-century of growth, innovation, and unwavering commitment to patient care.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #0A1628 0%, #0891B2 40%, #533AB7 70%, #B45309 100%)' }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-16">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={m.year}
                  ref={(el) => { itemRefs.current[i] = el }}
                  className={`tl-item ${isLeft ? 'tl-left' : 'tl-right'} relative flex flex-col md:flex-row items-center gap-0`}
                  style={{ flexDirection: isLeft ? undefined : 'row-reverse' }}
                >
                  <div className={`w-full md:w-[calc(50%-44px)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div
                      className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      style={{ borderTop: `3px solid ${m.accent}` }}
                    >
                      <div className={`flex items-center gap-2 mb-4 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: `${m.accent}18`, color: m.accent }}>{m.tag}</span>
                        <span className="text-2xl" role="img" aria-hidden="true">{m.icon}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0A1628] mb-2 leading-tight">{m.title}</h3>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col items-center justify-center w-[88px] shrink-0 z-10">
                    {isLeft && <div className="connector-line" style={{ right: '100%', background: `linear-gradient(90deg, #e5e7eb, ${m.accent}55)` }} aria-hidden="true" />}
                    <div className="year-badge w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-md text-white" style={{ backgroundColor: m.accent }}>
                      <span className="text-[13px] font-extrabold leading-tight">{m.year}</span>
                      <span className="text-[8px] font-semibold tracking-wider mt-0.5 opacity-60">{m.short}</span>
                    </div>
                    {!isLeft && <div className="connector-line" style={{ left: '100%', background: `linear-gradient(90deg, ${m.accent}55, #e5e7eb)` }} aria-hidden="true" />}
                  </div>
                  <div className="md:hidden flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full text-white text-xs font-bold" style={{ backgroundColor: m.accent }}>
                    <span>{m.year}</span><span className="opacity-60">·</span><span className="opacity-80">{m.short}</span>
                  </div>
                  <div className="hidden md:block w-[calc(50%-44px)]" />
                </div>
              )
            })}
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-3 w-6 h-6 rounded-full border-4 border-white shadow-md items-center justify-center" style={{ backgroundColor: '#B45309' }} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* ══════════════════════════════════════════
          HERO — split layout, no stats block
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[90vh] overflow-hidden flex items-center"
        style={{ background: 'linear-gradient(135deg, #EFF8FF 0%, #DBEAFE 40%, #E0F2FE 70%, #F0FAFB 100%)' }}
      >
        {/* Background glow blobs */}
        <div className="absolute top-[-140px] left-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(125,211,252,0.30) 0%, transparent 68%)' }} />
        <div className="absolute bottom-[-100px] right-[-80px] w-[440px] h-[440px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 68%)' }} />
        <div className="absolute top-[40%] right-[20%] w-[280px] h-[280px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.18) 0%, transparent 70%)' }} />

        {/* Top shining border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.4) 25%, rgba(14,165,233,0.85) 50%, rgba(56,189,248,0.4) 75%, transparent 100%)' }} />

        {/* Faint dot grid pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #0891B2 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Text ── */}
            <div className="flex flex-col">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7 self-start">
                <div className="h-px w-10 bg-sky-400/50" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-sky-600">
                  Est. 1999 · NABH Accredited
                </span>
                <div className="h-px w-10 bg-sky-400/50" />
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A1628] leading-[1.08] tracking-tight mb-6">
                25 Years of{' '}
                <span className="relative inline-block">
                  <span className="text-sky-500">Healing</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 6" fill="none" aria-hidden="true">
                    <path d="M0 4 Q50 0 100 4 Q150 8 200 4" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" />
                  </svg>
                </span>
                <br />
                <span className="text-[#0C6E91]">Humanity</span>
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
                From a 50-bed clinic to a 500-bed tertiary care centre — every milestone driven by one purpose: world-class care, delivered with compassion.
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {['NABH Accredited', '150+ Specialists', '25 yrs Experience', '40+ Departments'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-100 text-sky-700 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-xl tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-white"
                  style={{ background: 'linear-gradient(135deg, #0891B2 0%, #0C6E91 100%)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book an Appointment
                </Link>
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-xl tracking-wide transition-all duration-200 border border-sky-200 bg-white/70 text-sky-700 hover:bg-white hover:shadow-md"
                >
                  Meet Our Doctors
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Visual card stack ── */}
            <div className="hidden lg:flex flex-col gap-4 relative">

              {/* Doctor image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100/60 w-full h-[340px]">
                <Image
                  src="/images/doctor-team.png"
                  alt="Patil Hospital medical team"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.45) 100%)' }} />

                {/* Overlay label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-base leading-tight">Patil Hospital</p>
                    <p className="text-white/65 text-xs mt-0.5">Tertiary Care Centre · Est. 1999</p>
                  </div>
                  <span className="bg-emerald-400 text-emerald-900 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse" />
                    Open 24 / 7
                  </span>
                </div>
              </div>

              {/* Two small info cards side-by-side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-sky-100 rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl mb-2">🏅</div>
                  <p className="text-[#0A1628] font-extrabold text-base leading-tight">NABH</p>
                  <p className="text-slate-400 text-xs mt-0.5">Nationally Accredited</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-sky-100 rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-[#0A1628] font-extrabold text-base leading-tight">Robotic Surgery</p>
                  <p className="text-slate-400 text-xs mt-0.5">First in the region</p>
                </div>
              </div>

              {/* Floating accent badge */}
              <div
                className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-lg text-white rotate-6"
                style={{ background: 'linear-gradient(135deg, #0891B2 0%, #0C6E91 100%)' }}
              >
                <span className="text-2xl font-extrabold leading-none">25</span>
                <span className="text-[9px] font-semibold tracking-widest opacity-75 mt-0.5">YEARS</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-14 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #f1f5f9)' }} />
      </section>


      {/* ══════════════════════════════════════════
          STATS STRIP
          ══════════════════════════════════════════ */}
      <section className="w-full bg-[#F59E0B] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[40px] font-extrabold text-[#0A1628] leading-none">{s.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#0A1628]/60 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          MISSION / VISION / PHILOSOPHY
          ══════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight">Mission, Vision &amp; Philosophy</h2>
            <p className="text-gray-400 text-[15px] mt-3 max-w-xl mx-auto">Three pillars that shape every decision, every treatment, and every interaction at Patil Hospital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', label: 'Our Mission', accent: '#0A1628', content: 'To provide accessible, compassionate, and technologically advanced healthcare that improves lives and strengthens communities across the region.' },
              { icon: '🔭', label: 'Our Vision', accent: '#0891B2', content: 'To be the most trusted name in healthcare — setting the standard for clinical outcomes, patient experience, and medical education.' },
              { icon: '💡', label: 'Our Philosophy', accent: '#F59E0B', content: "We treat the whole person, not just the condition. Every care plan is individualised, every voice is heard, and every patient is family." },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-3xl p-9 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: item.accent }} />
                <div className="absolute -bottom-4 -right-4 text-[120px] opacity-[0.04] select-none pointer-events-none">{item.icon}</div>
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-extrabold text-[#0A1628] mb-3">{item.label}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          ZIGZAG TIMELINE
          ══════════════════════════════════════════ */}
      <ZigzagTimeline />


      {/* ══════════════════════════════════════════
          CORE VALUES
          ══════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#7FD8F0] bg-white/10 px-4 py-1.5 rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Our Core Values</h2>
            <p className="text-white/40 text-[15px] mt-3 max-w-xl mx-auto">The principles that guide every team member, every day, in every interaction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-x-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#0891B2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="text-xl font-extrabold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-[14px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          LEADERSHIP
          ══════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight">Guided by the Best</h2>
            <p className="text-gray-400 text-[15px] mt-3 max-w-xl mx-auto">Visionary leaders with decades of expertise, driving excellence at every level.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l) => (
              <div key={l.name} className="bg-white border border-gray-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold text-white shadow-md" style={{ backgroundColor: l.bg }}>
                  {l.initials}
                </div>
                <h3 className="font-extrabold text-[#0A1628] text-base mb-1">{l.name}</h3>
                <p className="text-[#0891B2] text-xs font-bold tracking-wide uppercase mb-1">{l.title}</p>
                <p className="text-gray-400 text-xs">{l.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          ACCREDITATIONS
          ══════════════════════════════════════════ */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-5">
            Certifications
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">Accreditations &amp; Recognitions</h2>
          <p className="text-gray-400 text-[15px] mb-10">Trusted and certified by leading national and international healthcare bodies.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2.5 bg-green-50 border border-green-200 rounded-full px-6 py-2.5 text-[13px] font-semibold text-green-800 hover:bg-green-100 transition-colors duration-200">
                <span className="text-green-500 text-base">✓</span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CTA
          ══════════════════════════════════════════ */}
      <section className="w-full py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0C6E91 100%)' }}>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[60px] border-white/[0.03] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-[40px] border-white/[0.04] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#7FD8F0] bg-white/10 px-4 py-1.5 rounded-full mb-6">
            Get Started
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Ready to Experience<br />Better Care?
          </h2>
          <p className="text-white/55 text-[15px] mb-10 max-w-lg mx-auto leading-relaxed">
            Join thousands of patients who trust Patil Hospital with their health. Our specialists are ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A1628] font-bold text-sm px-10 py-4 rounded-xl tracking-wide transition-colors duration-200 shadow-lg">
              Book an Appointment
            </Link>
            <Link href="/departments" className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-10 py-4 rounded-xl tracking-wide transition-colors duration-200">
              View Specialties →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}