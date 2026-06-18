'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

// ── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '150+', label: 'Expert Specialists' },
  { value: '50K+', label: 'Patients Treated' },
  { value: '98%', label: 'Patient Satisfaction' },
]

const services = [
  {
    name: 'Cardiology',
    icon: '❤️',
    desc: 'Heart care from diagnosis to interventional procedures.',
    href: '/services/cardiology',
    color: 'from-red-50 to-rose-50',
    border: 'border-red-100',
    accent: 'text-red-500',
  },
  {
    name: 'Neurology',
    icon: '🧠',
    desc: 'Comprehensive brain and nervous system treatments.',
    href: '/services/neurology',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-100',
    accent: 'text-purple-500',
  },
  {
    name: 'Orthopedics',
    icon: '🦴',
    desc: 'Joint replacement, sports injury & spine care.',
    href: '/services/orthopedics',
    color: 'from-blue-50 to-cyan-50',
    border: 'border-blue-100',
    accent: 'text-blue-500',
  },
  {
    name: 'Pediatrics',
    icon: '👶',
    desc: 'Dedicated child healthcare in a warm, safe environment.',
    href: '/services/pediatrics',
    color: 'from-yellow-50 to-amber-50',
    border: 'border-yellow-100',
    accent: 'text-yellow-600',
  },
  {
    name: 'Gynecology',
    icon: '🌸',
    desc: "Women's health, maternity, and reproductive care.",
    href: '/services/gynecology',
    color: 'from-pink-50 to-rose-50',
    border: 'border-pink-100',
    accent: 'text-pink-500',
  },
  {
    name: 'Oncology',
    icon: '🎗️',
    desc: 'Multidisciplinary cancer diagnosis and treatment.',
    href: '/services/oncology',
    color: 'from-teal-50 to-emerald-50',
    border: 'border-teal-100',
    accent: 'text-teal-600',
  },
]

const doctors = [
  {
    name: 'Dr. Aanya Sharma',
    specialty: 'Chief Cardiologist',
    exp: '18 yrs',
    initials: 'AS',
    bg: 'bg-red-100',
    text: 'text-red-700',
    avatarHex: { bg: '#FEE2E2', color: '#991B1B' },
    patients: '4,200+',
    languages: 'English, Hindi',
    fee: '₹800',
    badges: [
      { label: 'Cardiologist', style: 'bg-blue-50 text-blue-700' },
      { label: 'NABH Certified', style: 'bg-green-50 text-green-700' },
      { label: '18 yrs exp', style: 'bg-amber-50 text-amber-700' },
    ],
    tags: ['Interventional cardiology', 'Heart failure', 'Echocardiography', 'Arrhythmia', 'Preventive care'],
    bio: "Dr. Sharma is a nationally recognised cardiologist with 18 years of experience in interventional and preventive cardiac care. She leads Patil Hospital's cardiac catheterisation lab and has performed over 3,000 successful procedures.",
    available: true,
    schedule: 'Mon – Sat, 10 AM – 2 PM',
  },
  {
    name: 'Dr. Marcus Chen',
    specialty: 'Head of Neurology',
    exp: '15 yrs',
    initials: 'MC',
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    avatarHex: { bg: '#EDE9FE', color: '#5B21B6' },
    patients: '3,500+',
    languages: 'English, Marathi',
    fee: '₹900',
    badges: [
      { label: 'Neurologist', style: 'bg-blue-50 text-blue-700' },
      { label: 'NABH Certified', style: 'bg-green-50 text-green-700' },
      { label: '15 yrs exp', style: 'bg-amber-50 text-amber-700' },
    ],
    tags: ['Epilepsy', 'Stroke management', 'Movement disorders', 'Neuropathy', 'Headache clinic'],
    bio: 'Dr. Chen leads the Neurology Department with a focus on stroke prevention, epilepsy management, and neurodegenerative diseases.',
    available: true,
    schedule: 'Mon – Fri, 11 AM – 3 PM',
  },
  {
    name: 'Dr. Priya Nair',
    specialty: 'Pediatric Specialist',
    exp: '12 yrs',
    initials: 'PN',
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    avatarHex: { bg: '#FEF9C3', color: '#854D0E' },
    patients: '5,800+',
    languages: 'English, Hindi, Marathi',
    fee: '₹600',
    badges: [
      { label: 'Pediatrician', style: 'bg-blue-50 text-blue-700' },
      { label: 'NABH Certified', style: 'bg-green-50 text-green-700' },
      { label: '12 yrs exp', style: 'bg-amber-50 text-amber-700' },
    ],
    tags: ['Newborn care', 'Child development', 'Vaccinations', 'Respiratory illness', 'Nutrition'],
    bio: 'Dr. Nair is a compassionate paediatrician dedicated to child health from newborn to adolescence. She trained at KEM Hospital Mumbai.',
    available: false,
    schedule: 'Tue – Sat, 9 AM – 1 PM',
  },
  {
    name: 'Dr. James Okafor',
    specialty: 'Orthopedic Surgeon',
    exp: '20 yrs',
    initials: 'JO',
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    avatarHex: { bg: '#DBEAFE', color: '#1E40AF' },
    patients: '6,100+',
    languages: 'English, Hindi',
    fee: '₹1,000',
    badges: [
      { label: 'Orthopedic', style: 'bg-blue-50 text-blue-700' },
      { label: 'NABH Certified', style: 'bg-green-50 text-green-700' },
      { label: '20 yrs exp', style: 'bg-amber-50 text-amber-700' },
    ],
    tags: ['Joint replacement', 'Sports injuries', 'Spine surgery', 'Trauma', 'Arthroscopy'],
    bio: 'Dr. Okafor is a senior orthopedic surgeon specialising in minimally invasive joint replacement and complex spinal procedures.',
    available: true,
    schedule: 'Mon – Thu, 12 PM – 5 PM',
  },
]

const testimonials = [
  { name: 'Sarah M.', text: 'The cardiac team at Patil Hospital literally saved my life. The doctors were brilliant and the nurses were incredibly attentive throughout my recovery.', rating: 5 },
  { name: 'Robert K.', text: "My mother's hip replacement was a complete success. The orthopedic team's expertise and the rehab facilities are second to none.", rating: 5 },
  { name: 'Priya S.', text: "Delivering my baby here was the most supported I've ever felt. The maternity ward is beautiful and the staff made everything so smooth.", rating: 5 },
]

// ── STAR COMPONENT ───────────────────────────────────────────────────────────

function Stars({ count = 5, size = 'w-3.5 h-3.5' }: { count?: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`${size} text-yellow-400 fill-yellow-400`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// ── DOCTOR MODAL ─────────────────────────────────────────────────────────────

type Doctor = (typeof doctors)[number]

function DoctorModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="px-6 pt-8 pb-6" style={{ background: `linear-gradient(135deg, ${doctor.avatarHex.bg} 0%, #fff 100%)` }}>
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-sm" style={{ background: doctor.avatarHex.bg, color: doctor.avatarHex.color }}>
              {doctor.initials}
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <h3 className="text-xl font-bold text-[#0A1628] truncate">{doctor.name}</h3>
              <p className="text-[#0891B2] text-sm font-semibold mb-2">{doctor.specialty}</p>
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${doctor.available ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
                {doctor.available ? 'Available for consultation' : 'Currently unavailable'}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {doctor.badges.map((b) => (
              <span key={b.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${b.style}`}>{b.label}</span>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Experience', value: `${doctor.exp} experience`, icon: '🏅' },
              { label: 'Patients treated', value: doctor.patients, icon: '👥' },
              { label: 'Languages', value: doctor.languages, icon: '🌐' },
              { label: 'Consult fee', value: doctor.fee, icon: '💳' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400 font-medium mb-0.5 uppercase tracking-wide">{item.label}</p>
                <p className="text-sm font-semibold text-[#0A1628]">{item.icon} {item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-blue-50 rounded-xl px-4 py-2.5">
            <svg className="w-4 h-4 text-[#0891B2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-[#0891B2]">OPD Schedule:</span>
            <span>{doctor.schedule}</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Areas of expertise</p>
            <div className="flex flex-wrap gap-2">
              {doctor.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{doctor.bio}</p>
          <div className="flex gap-3 pt-1">
            <Link href="/contact" onClick={onClose} className="flex-1 bg-[#0A1628] hover:bg-[#0C1F3A] text-white text-center text-sm font-bold py-3 rounded-xl transition-colors">
              Book Consultation
            </Link>
            <button onClick={onClose} className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold py-3 rounded-xl transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── DOCTORS SPOTLIGHT ─────────────────────────────────────────────────────────

// function DoctorsSpotlight() {
//   const [current, setCurrent] = useState(0)
//   const [modalOpen, setModalOpen] = useState(false)
//   const doc = doctors[current]
//   const prev = () => setCurrent((c) => (c - 1 + doctors.length) % doctors.length)
//   const next = () => setCurrent((c) => (c + 1) % doctors.length)

//   return (
//     <section className="py-24 bg-[#F8FAFC]" aria-label="Featured Doctors">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
//           <div>
//             <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-4">Our Specialists</span>
//             <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight">Meet the Doctors<br />Behind Your Care</h2>
//           </div>
//           <Link href="/doctors" className="inline-flex items-center gap-2 border border-gray-200 text-[#0A1628] font-bold text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
//             View All Doctors
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>
//         <div className="flex flex-col items-center gap-8">
//           <div
//             className="bg-white border border-gray-100 rounded-2xl p-8 text-center cursor-pointer w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
//             onClick={() => setModalOpen(true)}
//           >
//             <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-5" style={{ background: doc.avatarHex.bg, color: doc.avatarHex.color }}>
//               {doc.initials}
//             </div>
//             <h3 className="font-bold text-[#0A1628] text-xl mb-1">{doc.name}</h3>
//             <p className="text-[#0891B2] text-sm font-semibold mb-1">{doc.specialty}</p>
//             <p className="text-gray-400 text-xs mb-3">{doc.exp} Experience</p>
//             <div className="flex justify-center mb-4"><Stars /></div>
//             <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-5 ${doc.available ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
//               <span className={`w-1.5 h-1.5 rounded-full ${doc.available ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
//               {doc.available ? 'Available' : 'Unavailable'}
//             </span>
//             <div className="flex flex-wrap justify-center gap-1.5 mb-5">
//               {doc.tags.slice(0, 2).map((tag) => (
//                 <span key={tag} className="text-xs text-gray-500 border border-gray-200 rounded-full px-2.5 py-0.5">{tag}</span>
//               ))}
//             </div>
//             <button className="w-full text-center text-xs font-semibold text-[#0891B2] border border-[#BAE6FD] rounded-xl py-2.5 hover:bg-[#F0F9FF] transition-colors">
//               View Profile & Book
//             </button>
//           </div>
//           <div className="flex items-center gap-5">
//             <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <div className="flex gap-2">
//               {doctors.map((_, i) => (
//                 <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2.5 bg-[#0891B2]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`} />
//               ))}
//             </div>
//             <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//           <p className="text-xs text-gray-400 font-medium">{current + 1} / {doctors.length} specialists</p>
//         </div>
//       </div>
//       {modalOpen && <DoctorModal doctor={doc} onClose={() => setModalOpen(false)} />}
//     </section>
//   )
// }
function DoctorsSpotlight() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT SIDE */}
            <div className="p-10 lg:p-14">

              <span className="inline-block bg-blue-50 text-[#0891B2] text-sm font-semibold px-4 py-2 rounded-full mb-5">
                Featured Specialist
              </span>

              <h2 className="text-4xl font-bold text-[#0A1628] mb-2">
                Dr. Aanya Sharma
              </h2>

              <p className="text-xl text-[#0891B2] font-semibold mb-6">
                Chief Cardiologist
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  18 Years Experience
                </span>

                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  4200+ Patients
                </span>

                <span className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                  NABH Certified
                </span>
              </div>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Dr. Aanya Sharma is a nationally recognised cardiologist with
                more than 18 years of experience in interventional and preventive
                cardiac care. She has successfully performed thousands of procedures
                and leads the Cardiology Department at Patil Hospital.
              </p>

              <div className="space-y-3 mb-8">
                <div>
                  <span className="font-bold text-[#0A1628]">
                    Languages:
                  </span>
                  <span className="text-gray-500 ml-2">
                    English, Hindi
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#0A1628]">
                    Consultation Fee:
                  </span>
                  <span className="text-gray-500 ml-2">
                    ₹800
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#0A1628]">
                    OPD Timing:
                  </span>
                  <span className="text-gray-500 ml-2">
                    Mon – Sat, 10 AM – 2 PM
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-[#0A1628] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#13223b]"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/doctors"
                  className="border border-gray-300 px-8 py-4 rounded-xl font-bold text-[#0A1628]"
                >
                  View Profile
                </Link>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center bg-[#F8FAFC] p-8">

              <img
                src="/doctors/dr-aanya-sharma.jpg"
                alt="Dr. Aanya Sharma"
                className="w-[400px] h-[500px] object-cover rounded-3xl shadow-2xl"
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          HERO — reduced text sizes + redesigned right card
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-screen flex items-center">

        {/* Background video */}
        <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
>
  <source src="/video/Patil-video.mp4" type="video/mp4" />
</video>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/65 via-black/45 to-black/25" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* ── LEFT: Text block ── */}
            <div className="flex flex-col">

              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 self-start bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-[10px] font-semibold tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Accredited Centre of Excellence
              </div>

              {/* Main headline — reduced from text-4xl/5xl/6xl */}
              <h1 className="text-[34px] md:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight mb-5">
                Healing With{' '}
                <span className="text-[#7FD8F0]">Science.</span>
                <br />
                Caring With{' '}
                <span className="text-emerald-400">Heart.</span>
              </h1>

              {/* Description — reduced from text-base/lg */}
              <p className="text-[15px] md:text-[16px] text-white/75 leading-relaxed mb-8 max-w-lg">
                At Patil Hospital, 150+ specialists combine cutting-edge technology
                with genuine compassion — so every patient receives care that goes
                beyond medicine.
              </p>

              {/* CTA buttons — reduced padding */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-50 text-[#0A1628] px-8 py-4 rounded-xl font-bold text-[15px] transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </Link>
                <Link
                  href="/about"
                  className="border border-white/40 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-colors inline-flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/15 mb-7" />

              {/* Stats row — reduced text */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="text-3xl md:text-4xl font-extrabold text-white leading-none">{s.value}</span>
                    <span className="text-xs text-white/60 leading-snug">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Redesigned professional info card ── */}
            <div className="hidden lg:block">
              <div className="relative">

                {/* Main card */}
                <div className="bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl max-w-lg ml-auto">

                  {/* Card header */}
                  {/* Card header */}
<div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">

  {/* Hospital Icon */}
  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-lg flex-shrink-0">
    🏥
  </div>

  {/* Title */}
  <div>
    <p className="font-bold text-white text-[16px] leading-tight">
      24/7 Emergency Care
    </p>
    <p className="text-white/60 text-[12px] mt-0.5">
      Always here when you need us
    </p>
  </div>

  {/* Live Badge */}
  <div className="ml-auto flex items-center gap-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-2 py-0.5">
    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
    <span className="text-emerald-400 text-[9px] font-bold uppercase">
      Live
    </span>
  </div>

</div>

                  {/* Live stats */}
                  <div className="space-y-2.5 mb-6">
                    {[
                      { label: 'Emergency Response', value: '< 5 min', dot: 'bg-emerald-400', valueBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/20' },
                      { label: 'ICU Bed Availability', value: '94%', dot: 'bg-[#7FD8F0]', valueBg: 'bg-[#7FD8F0]/10 text-[#7FD8F0] border-[#7FD8F0]/20' },
                      { label: 'Surgeries This Month', value: '420+', dot: 'bg-amber-400', valueBg: 'bg-amber-400/15 text-amber-300 border-amber-400/20' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                          <span className="text-white/75 text-[14px]">{item.label}</span>
                        </div>
                        <span className={`text-[5px] font-bold px-2.5 py-0.5 rounded-full border ${item.valueBg}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick-access tiles */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '🩺', label: 'OPD Consult', sub: 'Mon – Sat' },
                      { icon: '🔬', label: 'Diagnostics', sub: '24 / 7' },
                    ].map((tile) => (
                      <div key={tile.label} className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="text-2xl mb-2">{tile.icon}</div>
                        <p className="text-white text-[12px] font-semibold leading-tight">{tile.label}</p>
                        <p className="text-white/45 text-[10px] mt-0.5">{tile.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Redesigned NABH badge (top-right, attached to card) ── */}
                <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-[11px] font-bold px-4 py-2.5 rounded-2xl shadow-lg shadow-emerald-500/30 border border-emerald-300/40">
                  {/* Shield icon */}
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="leading-none">NABH Accredited</div>
                    <div className="text-emerald-100/70 text-[9px] font-medium mt-0.5 tracking-wide">Certified Quality Care</div>
                  </div>
                </div>

                {/* ── Floating patient count badge (bottom-left) ── */}
                <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 bg-[#0A1628] border border-white/10 text-white px-4 py-2.5 rounded-2xl shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-[#0891B2]/20 flex items-center justify-center text-base">👥</div>
                  <div>
                    <div className="text-[13px] font-extrabold text-[#7FD8F0] leading-none">50,000+</div>
                    <div className="text-white/50 text-[9px] font-medium mt-0.5">Patients Treated</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#F8FAFC]" aria-label="Our Medical Specialties">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-4">What We Treat</span>
            <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight mb-3">Specialties Built Around You</h2>
            <p className="text-gray-400 text-[15px] max-w-2xl mx-auto leading-relaxed">Each department is staffed by nationally recognised specialists who combine the latest research with individualised treatment plans.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.name} href={s.href} className={`group bg-gradient-to-br ${s.color} border ${s.border} rounded-2xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{s.icon}</div>
                  <svg className={`w-4 h-4 ${s.accent} opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-[#0A1628] text-[17px] mb-2">{s.name}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
                <span className={`inline-block mt-4 text-xs font-semibold ${s.accent}`}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-5">Why Patil Hospital</span>
            <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight mb-4">Care That Goes Further<br />Than Treatment</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8">We believe great healthcare is both a science and a human connection. From your first appointment to full recovery, our multidisciplinary team walks every step with you.</p>
            <div className="space-y-4">
              {[
                { icon: '🔬', title: 'Advanced Diagnostic Technology', desc: 'MRI 3T, PET-CT, robotic surgery suites, and AI-aided diagnostics for pinpoint accuracy.' },
                { icon: '🩺', title: 'Multidisciplinary Tumour Boards', desc: 'Complex cases reviewed by teams of specialists to find the optimal care pathway.' },
                { icon: '🌍', title: 'International Patient Services', desc: 'Dedicated coordinators for visa assistance, travel, translation, and lodging support.' },
                { icon: '💙', title: 'Holistic Wellness Programs', desc: 'Nutrition counselling, physiotherapy, mental health, and post-care follow-up plans.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#0A1628] text-[14px] mb-0.5">{item.title}</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0C6E91 100%)' }}>
              <h3 className="text-2xl font-extrabold text-white mb-6">At a Glance</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: '500+', lbl: 'Beds', icon: '🛏️' },
                  { val: '20+', lbl: 'Departments', icon: '🏢' },
                  { val: '24/7', lbl: 'Emergency', icon: '🚨' },
                  { val: 'NABH', lbl: 'Accredited', icon: '🏅' },
                ].map((item) => (
                  <div key={item.lbl} className="bg-white/10 rounded-2xl p-5 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-extrabold text-white">{item.val}</div>
                    <div className="text-white/55 text-xs mt-0.5">{item.lbl}</div>
                  </div>
                ))}
              </div>
              <Link href="/facilities" className="block w-full text-center bg-white hover:bg-gray-50 text-[#0A1628] font-bold text-sm py-3 rounded-xl transition-colors">
                Explore Our Facilities
              </Link>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl" />
          </div>
        </div>
      </section>

      {/* ── DOCTORS SPOTLIGHT ── */}
      <DoctorsSpotlight />

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white" aria-label="Patient Testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0891B2] bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-4">Patient Stories</span>
            <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight">Real People. Real Recovery.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md transition-shadow duration-200">
                <div className="flex gap-1 mb-4"><Stars count={t.rating} size="w-4 h-4" /></div>
                <p className="text-gray-500 leading-relaxed mb-5 text-[14px] italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#EFF6FF] text-[#0891B2] rounded-full flex items-center justify-center text-sm font-bold">{t.name[0]}</div>
                  <span className="font-bold text-[#0A1628] text-[13px]">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0C6E91 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Your Health Is Our Priority</h2>
          <p className="text-white/65 text-[15px] mb-10 leading-relaxed">Book an appointment today and take the first step toward better health.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A1628] font-bold text-sm px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </Link>
            <a href="tel:+918001234567" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Emergency
            </a>
          </div>
        </div>
      </section>
    </>
  )
}