'use client'

import { useState } from 'react'
import Link from 'next/link'

const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Patil+Multispeciality+Hospital+Barshi+Road+Latur'

const departments = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics',
  'Gynecology', 'Oncology', 'General Medicine', 'Emergency',
]

/* ─── tiny reusable icon components ─────────────────────────────── */
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.79 19.79 19.79 0 01.36 2.18 2 2 0 012.33 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — warm ivory + deep green (no blue)
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#F8F6F1' }}>
        {/* faint medical-cross pattern, fades out toward the left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 21v14M21 28h14' stroke='%230F3D33' stroke-width='2' stroke-linecap='round' opacity='0.10'/%3E%3C/svg%3E\")",
            maskImage: 'linear-gradient(100deg, transparent 20%, black 85%)',
            WebkitMaskImage: 'linear-gradient(100deg, transparent 20%, black 85%)',
          }}
        />
        {/* soft sage glow behind the card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-32 h-[560px] w-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(134,188,160,0.35) 0%, transparent 65%)' }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-40 lg:px-10 lg:pt-28 lg:pb-48">
          <div className="grid items-center gap-14 lg:grid-cols-12">

            {/* LEFT — message */}
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-stone-500">
                <Link href="/" className="transition-colors hover:text-[#0F3D33]">Home</Link>
                <span aria-hidden="true">/</span>
                <span className="font-medium text-[#0F3D33]">Contact</span>
              </nav>

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-900/10 bg-white py-2 pl-4 pr-5 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                </span>
                <span className="text-sm font-medium text-[#0F3D33]">Emergency care open 24/7</span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#0F3D33] sm:text-5xl lg:text-6xl">
                Let&apos;s get you the right care
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                Whether it&apos;s a routine check-up or a specialist consultation, our team connects you to the right doctor within 2 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#0F3D33] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-[#14532D] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
                >
                  <IconCalendar />
                  Book an appointment
                </a>
                <a
                  href="tel:+18005550199"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-red-600/30 bg-white px-7 py-3.5 text-sm font-semibold text-red-700 transition hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
                >
                  <IconPhone />
                  Emergency: +1 (800) 555-0199
                </a>
              </div>

              {/* promise row */}
              <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-emerald-900/10">
                {[
                  { stat: '2 hrs', label: 'Response time' },
                  { stat: '24/7',  label: 'Emergency line' },
                  { stat: '40+',   label: 'Specialties' },
                ].map((s, i) => (
                  <div key={s.label} className={i === 0 ? 'pr-5' : 'px-5'}>
                    <dt className="text-2xl font-bold text-[#0F3D33]">{s.stat}</dt>
                    <dd className="mt-0.5 text-xs text-stone-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* RIGHT — contact card */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-25px_rgba(15,61,51,0.35)] ring-1 ring-emerald-950/10">
                {/* card header */}
                <div className="flex items-center justify-between gap-4 px-7 py-5" style={{ background: '#0F3D33' }}>
                  <div>
                    <p className="text-base font-semibold text-white">Visit or call us</p>
                    <p className="text-xs text-emerald-100/70">We&apos;re easy to reach</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-emerald-100">
                    <IconPin />
                  </span>
                </div>

                {/* rows */}
                <div className="divide-y divide-stone-100">
                  {[
                    { Icon: IconPin,   label: 'Address',   value: '123 Medical Center Drive, Healthcare City', href: MAP_URL },
                    { Icon: IconPhone, label: 'Phone',     value: 'Appointments: +1 (800) 555-0100', href: 'tel:+18005550100' },
                    { Icon: IconMail,  label: 'Email',     value: 'appointments@patilhospital.com', href: 'mailto:appointments@patilhospital.com' },
                    { Icon: IconClock, label: 'OPD hours', value: 'Mon – Sat, 8 AM – 8 PM · Emergency 24/7' },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4 px-7 py-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-stone-500">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-sm font-medium text-stone-900 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-stone-900">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* directions */}
                <div className="border-t border-stone-100 bg-stone-50 px-7 py-4">
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-900/20 bg-white py-3 text-sm font-semibold text-[#0F3D33] transition hover:bg-[#0F3D33] hover:text-white"
                  >
                    Get directions
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* curved edge into the next section (#F0F4F8) */}
        <div className="absolute bottom-0 left-0 w-full leading-none" style={{ marginBottom: '-2px' }}>
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block w-full"
            style={{ height: '100px' }}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0,120 L0,60 C200,100 380,20 580,45 C780,70 960,115 1140,90 C1280,70 1360,40 1440,55 L1440,120 Z"
              fill="#F0F4F8"
            />
            <path
              d="M0,60 C200,100 380,20 580,45 C780,70 960,115 1140,90 C1280,70 1360,40 1440,55"
              fill="none"
              stroke="#0F3D33"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — form + sidebar
          ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">

            {/* ── Sidebar ── */}
            <aside className="space-y-5">

              {/* section label */}
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 bg-[#E0EEFF] border border-[#B8D4F8] rounded-full px-4 py-1.5">
                  <span className="text-[#185FA5] text-[10px] font-semibold uppercase tracking-widest">Contact Details</span>
                </span>
                <h2 className="mt-3 text-[22px] font-bold text-[#0A1628]">We&apos;re Here to Help</h2>
              </div>

              {/* info cards */}
              {[
                { Icon: IconPin,   title: 'Address',      lines: ['123 Medical Center Drive', 'Healthcare City, HC 45678'], accent: '#EFF6FF', border: '#DBEAFE', icon: '#3B82F6', href: MAP_URL },
                { Icon: IconPhone, title: 'Phone Numbers', lines: ['Emergency: +1 (800) 555-0199', 'Appointments: +1 (800) 555-0100'], accent: '#FFF7ED', border: '#FED7AA', icon: '#F97316' },
                { Icon: IconMail,  title: 'Email',         lines: ['info@patilhospital.com', 'appointments@patilhospital.com'], accent: '#F0FDF4', border: '#BBF7D0', icon: '#16A34A' },
                { Icon: IconClock, title: 'Hours',         lines: ['Emergency: 24/7', 'OPD: Mon–Sat 8AM–8PM', 'Diagnostics: 24/7'], accent: '#FFF1F2', border: '#FECDD3', icon: '#E11D48' },
              ].map(({ Icon, title, lines, accent, border, icon, href }) => (
                <div
                  key={title}
                  className="rounded-2xl border p-5 flex gap-4 shadow-[0_1px_4px_rgba(10,22,40,0.06)] hover:shadow-[0_4px_20px_rgba(10,22,40,0.10)] transition-shadow duration-300"
                  style={{ background: accent, borderColor: border }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: border, color: icon }}>
                    <Icon />
                  </div>
                  <div>
                    <p className="text-[#0A1628] text-sm font-semibold mb-1">{title}</p>
                    {lines.map((l) => <p key={l} className="text-gray-500 text-xs leading-relaxed">{l}</p>)}
                    {href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-[#185FA5] hover:underline"
                      >
                        Get directions →
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* dept direct lines */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_4px_rgba(10,22,40,0.06)]">
                <p className="text-[#0A1628] text-sm font-semibold mb-4">Direct Department Lines</p>
                <div className="space-y-3">
                  {[
                    { d: 'Cardiology',  ext: '201' },
                    { d: 'Neurology',   ext: '214' },
                    { d: 'Orthopedics', ext: '308' },
                    { d: 'Oncology',    ext: '422' },
                  ].map(({ d, ext }) => (
                    <div key={d} className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{d}</span>
                      <span className="text-[#185FA5] text-sm font-semibold bg-[#EEF5FF] px-2.5 py-0.5 rounded-full">Ext. {ext}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Appointment form ── */}
            <div
              id="appointment"
              className="scroll-mt-24 bg-white rounded-[28px] border border-slate-100 shadow-[0_4px_40px_rgba(10,22,40,0.08)] overflow-hidden"
            >

              {/* form header band */}
              <div className="px-10 pt-10 pb-7 border-b border-slate-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-black text-[#0A1628]">Request an Appointment</h2>
                    <p className="text-gray-400 text-sm mt-1">We confirm every booking within 2 hours.</p>
                  </div>
                  {/* trust badges */}
                  <div className="flex gap-2 flex-wrap">
                    {['NABH Accredited', 'Privacy Protected'].map((b) => (
                      <span key={b} className="inline-flex items-center gap-1.5 bg-[#F0FDF4] border border-[#BBF7D0] text-[#16A34A] text-[10px] font-semibold px-3 py-1 rounded-full">
                        <IconCheck /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-10 py-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-[#F0FDF4] border-2 border-[#BBF7D0] flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
                    <h3 className="font-display text-2xl font-bold text-[#0A1628] mb-3">Appointment Requested!</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                      Our care team will call you within 2 hours to confirm your slot. Check your email for a summary.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#162340] text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors"
                    >
                      <IconCalendar /> Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" required>
                        <input
                          type="text" required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Raj Patil"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Email Address" required>
                        <input
                          type="email" required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="raj@email.com"
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    {/* row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone Number" required>
                        <input
                          type="tel" required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Preferred Date">
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    {/* department */}
                    <Field label="Department / Specialty" required>
                      <select
                        required
                        value={form.dept}
                        onChange={(e) => setForm({ ...form, dept: e.target.value })}
                        className={inputCls + ' bg-white'}
                      >
                        <option value="">Select a department</option>
                        {departments.map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </Field>

                    {/* message */}
                    <Field label="Symptoms / Message">
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Briefly describe your symptoms or reason for the visit…"
                        className={inputCls + ' resize-none'}
                      />
                    </Field>

                    {/* submit */}
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-3 bg-[#0A1628] hover:bg-[#162340] text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(10,22,40,0.18)] hover:shadow-[0_6px_28px_rgba(10,22,40,0.28)]"
                    >
                      <IconCalendar />
                      Confirm Appointment Request
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                      By submitting, you agree to our privacy policy. Your information is never shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAP STRIP
          ══════════════════════════════════════════════ */}
      <section className="bg-[#E8EEF6] border-y border-slate-200 h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">📍</div>
          <p className="text-[#0A1628] font-semibold text-sm">123 Medical Center Drive, Healthcare City</p>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#185FA5] text-sm hover:underline mt-1 inline-block"
          >
            Open in Google Maps →
          </a>
          <p className="text-xs text-gray-400 mt-3">(Replace with your Google Maps embed)</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          QUICK LINKS
          ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-[22px] font-bold text-[#0A1628]">While You&apos;re Here</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🩺', title: 'Find a Doctor',   desc: 'Browse specialists by department or condition', href: '/doctors',    cta: 'View Doctors',      bg: '#EEF5FF', border: '#DBEAFE' },
              { icon: '🏥', title: 'Our Facilities',  desc: 'Tour our state-of-the-art infrastructure',      href: '/facilities', cta: 'Explore Facilities', bg: '#F0FDF4', border: '#BBF7D0' },
              { icon: '🚨', title: 'Emergency Care',  desc: '24 / 7 emergency services for critical cases',  href: 'tel:+18005550199', cta: 'Call Emergency',  bg: '#FFF1F2', border: '#FECDD3' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-8 text-center hover:shadow-[0_6px_24px_rgba(10,22,40,0.09)] transition-shadow duration-300"
                style={{ background: item.bg, borderColor: item.border }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{item.desc}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[#0A1628] border border-[#0A1628]/20 bg-white hover:bg-[#0A1628] hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
                >
                  {item.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── helpers ──────────────────────────────────────────────────── */
const inputCls =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#185FA5] focus:ring-2 focus:ring-[#185FA5]/10 outline-none transition text-sm text-[#0A1628] placeholder:text-gray-400'

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  )
}