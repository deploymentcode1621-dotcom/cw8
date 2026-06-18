import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Facilities',
  description:
    "Explore Patil Hospital's state-of-the-art facilities — ICUs, robotic surgery suites, advanced diagnostics, maternity wards, and comprehensive patient amenities.",
  alternates: { canonical: 'https://www.patilhospital.com/facilities' },
}

const facilities = [
  {
    icon: '🏥',
    name: 'Emergency & Trauma Centre',
    color: 'from-red-50 to-rose-50 border-red-100',
    desc: 'Our 24/7 Emergency and Level I Trauma Centre is equipped with resuscitation bays, rapid-response teams, and direct access to CT scanning within minutes of arrival.',
    features: ['24/7 Triage & Resuscitation', 'Dedicated Trauma Theatre', 'Rapid CT & X-Ray', 'Helicopter Landing Pad'],
  },
  {
    icon: '🔬',
    name: 'Diagnostic Imaging Centre',
    color: 'from-blue-50 to-cyan-50 border-blue-100',
    desc: 'Featuring MRI 3T, 128-slice CT, digital mammography, PET-CT, and ultrasound — all housed under one roof for seamless, same-day diagnostics.',
    features: ['MRI 3 Tesla', '128-Slice CT Scanner', 'PET-CT Imaging', 'Digital Mammography'],
  },
  {
    icon: '🤖',
    name: 'Robotic Surgery Suite',
    color: 'from-purple-50 to-violet-50 border-purple-100',
    desc: 'Our da Vinci robotic surgical system enables surgeons to perform complex procedures with unmatched precision, resulting in smaller incisions and faster recovery.',
    features: ['da Vinci Xi System', 'Laparoscopic Theatres', 'Neuro-navigation', 'Intraoperative MRI'],
  },
  {
    icon: '❤️',
    name: 'Cardiac Catheterisation Lab',
    color: 'from-rose-50 to-pink-50 border-rose-100',
    desc: 'Two fully equipped cath labs provide 24/7 primary PCI for heart attacks, electrophysiology studies, and structural heart interventions.',
    features: ['2 Cath Lab Suites', '24/7 Primary PCI', 'Electrophysiology Lab', 'Hybrid OR'],
  },
  {
    icon: '🛏️',
    name: 'Intensive Care Units',
    color: 'from-teal-50 to-emerald-50 border-teal-100',
    desc: 'Separate ICUs for Medical, Surgical, Cardiac, Neuro, and Neonatal patients, each staffed by dedicated intensivists and critical care nurses around the clock.',
    features: ['Medical & Surgical ICU', 'Cardiac ICU (CICU)', 'Neurological ICU', 'Level III NICU'],
  },
  {
    icon: '🌸',
    name: "Women's Health & Maternity",
    color: 'from-pink-50 to-fuchsia-50 border-pink-100',
    desc: 'Our birthing suites offer a calm, hotel-like environment with en-suite bathrooms, partner accommodation, and direct access to the NICU if needed.',
    features: ['Private Birthing Suites', 'Water Birth Option', 'Partner Stay Available', 'Postnatal Ward'],
  },
  {
    icon: '🎗️',
    name: 'Comprehensive Cancer Centre',
    color: 'from-amber-50 to-orange-50 border-amber-100',
    desc: 'From diagnosis to survivorship, our Cancer Centre integrates medical, surgical, radiation oncology with psychological support and palliative care in one building.',
    features: ['Linear Accelerator (LINAC)', 'Chemotherapy Day Unit', 'Brachytherapy Suite', 'Psycho-oncology'],
  },
  {
    icon: '💪',
    name: 'Rehabilitation & Physiotherapy',
    color: 'from-green-50 to-emerald-50 border-green-100',
    desc: 'A fully equipped gym, hydrotherapy pool, and specialist therapy suites support recovery after surgery, stroke, orthopaedic procedures, and cardiac events.',
    features: ['Hydrotherapy Pool', 'Cardiac Rehab Gym', 'Speech & Language Therapy', 'Occupational Therapy'],
  },
  {
    icon: '🔭',
    name: 'Research & Academic Centre',
    color: 'from-sky-50 to-blue-50 border-sky-100',
    desc: 'Our Clinical Research Institute runs 50+ active trials, attracts international faculty, and drives evidence-based improvements across all specialties.',
    features: ['50+ Active Clinical Trials', 'Ethics Committee', 'Medical Education Unit', 'Conference Facilities'],
  },
]

const amenities = [
  { icon: '🍽️', label: 'Therapeutic Nutrition' },
  { icon: '🛜', label: 'Free Hospital Wi-Fi' },
  { icon: '🅿️', label: 'Ample Parking' },
  { icon: '🏧', label: 'ATM & Banking' },
  { icon: '🌿', label: 'Healing Garden' },
  { icon: '🙏', label: 'Multi-Faith Chapel' },
]

export default function FacilitiesPage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">

        {/* ── Background image ── */}
        <div className="absolute inset-0">
          <Image
            src="/images/facility1.jpeg"
            alt="Modern hospital facility interior"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Minimal directional scrim — only enough to keep left-side text legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.25) 50%, rgba(10,22,40,0.00) 100%)',
            }}
          />
        </div>

        {/* ── Decorative ambient glows ── */}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/90">
                World-Class Infrastructure
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white mb-6">
              Where Technology<br />
              Meets <span className="text-[#7FD8F0]">Healing</span>
            </h1>

            {/* Accent divider */}
            <div className="w-24 h-1 bg-[#F59E0B] rounded-full mb-8" />

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-12">
              Our advanced healthcare campus combines cutting-edge technology,
              specialised critical care units, modern operation theatres and
              world-class diagnostic facilities — delivering exceptional patient
              experiences every day.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { n: '500+', l: 'Beds' },
                { n: '12',   l: 'OT Suites' },
                { n: '9',    l: 'ICU Units' },
                { n: '1M+',  l: 'Sq. Ft Campus' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-5"
                >
                  <div className="font-display text-[32px] font-black text-[#F59E0B] leading-none mb-1">
                    {s.n}
                  </div>
                  <div className="text-white/55 text-sm">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-7 text-white/55 text-sm">
              {['NABH Accredited', '24×7 Emergency Care', 'Advanced Diagnostics', 'Smart ICU Monitoring'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-[#F59E0B] font-bold">✓</span> {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FACILITY GRID
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E6F1FB] border border-[#B5D4F4] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#185FA5] text-[11px] font-semibold uppercase tracking-widest">
                Our Infrastructure
              </span>
            </div>
            <h2 className="text-[30px] font-bold text-[#0A1628] mb-3">World-Class Facilities</h2>
            <p className="text-gray-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Every department is designed and equipped to deliver the best possible clinical
              outcomes in a comfortable, patient-centred environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f) => (
              <div
                key={f.name}
                className={`rounded-2xl p-6 bg-gradient-to-br ${f.color} border shadow-[0_1px_4px_rgba(10,22,40,0.06)]`}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#0A1628] text-[17px] mb-2">{f.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                <ul className="space-y-2">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-[#185FA5] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PATIENT AMENITIES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EAF3DE] border border-[#C0DD97] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#3B6D11] text-[11px] font-semibold uppercase tracking-widest">
                Patient Comfort
              </span>
            </div>
            <h2 className="text-[28px] font-bold text-[#0A1628]">Amenities Designed for Dignity</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5 text-center hover:shadow-[0_4px_16px_rgba(10,22,40,0.08)] transition-shadow"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <p className="text-gray-600 text-[12px] font-medium leading-tight">{a.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — flex-1 so it fills all space above the footer
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="flex-1 flex items-center justify-center bg-[#0A1628] relative overflow-hidden">

        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Ambient glow accents */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-blue-500/10 blur-[110px] pointer-events-none" />

        <div className="relative w-full py-28 px-6 text-center">
          <div className="max-w-xl mx-auto">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/70">
                Visit Us Today
              </span>
            </div>

            <h2 className="font-display text-[34px] font-black text-white mb-4 leading-tight">
              Experience the Difference
            </h2>

            <p className="text-white/55 text-[15px] leading-relaxed mb-10">
              Schedule a facility tour, book your consultation, or speak with our care
              coordinators — we&apos;re here every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A1628] font-bold text-sm px-10 py-4 rounded-xl transition-colors shadow-sm"
              >
                Book an Appointment
              </Link>
              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-10 py-4 rounded-xl border border-white/20 transition-colors"
              >
                Learn About Us
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}