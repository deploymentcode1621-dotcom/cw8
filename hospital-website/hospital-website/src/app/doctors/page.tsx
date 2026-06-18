'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
type Doctor = {
  name: string
  title: string
  exp: string
  initials: string
  quals: string
  rating: string
  reviews: number
  languages: string
  available: string
  about: string
}

type Department = {
  dept: string
  tagline: string
  icon: string
  accent: string
  avatarBg: string
  avatarColor: string
  accentBorder: string
  badgeBg: string
  badgeText: string
  doctors: Doctor[]
}

const departments: Department[] = [
  {
    dept: 'Cardiology',
    tagline: 'Heart care you can trust — from diagnosis to intervention.',
    icon: '🫀',
    accent: '#185FA5',
    avatarBg: '#E6F1FB',
    avatarColor: '#0C447C',
    accentBorder: '#B5D4F4',
    badgeBg: '#E6F1FB',
    badgeText: '#0C447C',
    doctors: [
      {
        name: 'Dr. Aanya Sharma',
        title: 'Chief Cardiologist',
        exp: '18 yrs',
        initials: 'AS',
        quals: 'MD, DM Cardiology, FACC',
        rating: '4.9',
        reviews: 312,
        languages: 'English, Hindi, Marathi',
        available: 'Mon – Sat, 9 AM – 5 PM',
        about:
          'Dr. Aanya Sharma is a fellowship-trained cardiologist with 18 years of experience in advanced heart failure management, cardiac imaging, and preventive cardiology. She has performed over 3,000 cardiac procedures and is a Fellow of the American College of Cardiology.',
      },
      {
        name: 'Dr. Rajan Kapoor',
        title: 'Interventional Cardiologist',
        exp: '14 yrs',
        initials: 'RK',
        quals: 'MD, DM, FSCAI',
        rating: '4.8',
        reviews: 218,
        languages: 'English, Hindi',
        available: 'Mon – Fri, 10 AM – 6 PM',
        about:
          'Dr. Rajan Kapoor specialises in complex coronary interventions, TAVI, and structural heart disease. He trained at leading centres in the UK and USA and holds fellowship from the Society for Cardiovascular Angiography and Interventions.',
      },
      {
        name: 'Dr. Lisa Chen',
        title: 'Electrophysiologist',
        exp: '10 yrs',
        initials: 'LC',
        quals: 'MD, DM, FHA',
        rating: '4.9',
        reviews: 176,
        languages: 'English, Mandarin',
        available: 'Tue – Sat, 9 AM – 4 PM',
        about:
          'Dr. Lisa Chen is an expert in cardiac arrhythmia, ablation therapy, and pacemaker implantation. She has been recognised for her research on atrial fibrillation outcomes and leads the hospital\'s electrophysiology programme.',
      },
    ],
  },
  {
    dept: 'Neurosciences',
    tagline: 'Leading-edge care for brain, spine, and nervous system.',
    icon: '🧠',
    accent: '#534AB7',
    avatarBg: '#EEEDFE',
    avatarColor: '#3C3489',
    accentBorder: '#AFA9EC',
    badgeBg: '#EEEDFE',
    badgeText: '#3C3489',
    doctors: [
      {
        name: 'Dr. Marcus Chen',
        title: 'Head of Neurology',
        exp: '15 yrs',
        initials: 'MC',
        quals: 'MD, DM Neurology, FAAN',
        rating: '4.9',
        reviews: 287,
        languages: 'English, Mandarin',
        available: 'Mon – Fri, 9 AM – 5 PM',
        about:
          'Dr. Marcus Chen heads the neurology department and specialises in movement disorders, Parkinson\'s disease, and deep brain stimulation. He is a Fellow of the American Academy of Neurology and has published over 40 peer-reviewed papers.',
      },
      {
        name: 'Dr. Anita Verma',
        title: 'Epileptologist',
        exp: '11 yrs',
        initials: 'AV',
        quals: 'MD, DM, FRCP',
        rating: '4.8',
        reviews: 194,
        languages: 'English, Hindi, Gujarati',
        available: 'Mon – Thu, 10 AM – 5 PM',
        about:
          'Dr. Anita Verma is a dedicated epileptologist with expertise in drug-resistant epilepsy, video EEG monitoring, and epilepsy surgery evaluation. She completed her subspecialty training at the National Hospital for Neurology and Neurosurgery, London.',
      },
      {
        name: 'Dr. Thomas Adeyemi',
        title: 'Stroke Specialist',
        exp: '9 yrs',
        initials: 'TA',
        quals: 'MD, DM Neurology',
        rating: '4.7',
        reviews: 153,
        languages: 'English, French',
        available: 'Mon – Sat, 8 AM – 4 PM',
        about:
          'Dr. Thomas Adeyemi leads the hospital\'s 24/7 stroke response unit and specialises in acute thrombolysis, mechanical thrombectomy, and stroke rehabilitation protocols. He has been instrumental in reducing door-to-needle times to under 30 minutes.',
      },
    ],
  },
  {
    dept: 'Orthopaedics',
    tagline: 'From joint replacements to sports injuries — move better.',
    icon: '🦴',
    accent: '#0F6E56',
    avatarBg: '#E1F5EE',
    avatarColor: '#085041',
    accentBorder: '#5DCAA5',
    badgeBg: '#E1F5EE',
    badgeText: '#085041',
    doctors: [
      {
        name: 'Dr. James Okafor',
        title: 'Director of Surgery',
        exp: '20 yrs',
        initials: 'JO',
        quals: 'MS Ortho, FRCS, FACS',
        rating: '5.0',
        reviews: 401,
        languages: 'English',
        available: 'Mon – Fri, 8 AM – 4 PM',
        about:
          'Dr. James Okafor is one of the country\'s foremost orthopaedic surgeons, with 20 years specialising in complex hip and knee arthroplasty. He introduced robotic-assisted joint replacement at this hospital and holds fellowships from the Royal College of Surgeons and American College of Surgeons.',
      },
      {
        name: 'Dr. Seema Pillai',
        title: 'Spine Surgeon',
        exp: '13 yrs',
        initials: 'SP',
        quals: 'MS Ortho, Fellowship Spine',
        rating: '4.9',
        reviews: 229,
        languages: 'English, Malayalam, Tamil',
        available: 'Tue – Sat, 9 AM – 5 PM',
        about:
          'Dr. Seema Pillai specialises in minimally invasive spine surgery, disc replacement, and scoliosis correction. She completed her spine fellowship at Cleveland Clinic and has performed over 2,500 successful spine procedures.',
      },
      {
        name: 'Dr. Alex Brandt',
        title: 'Sports Medicine',
        exp: '8 yrs',
        initials: 'AB',
        quals: 'MS Ortho, FASM',
        rating: '4.8',
        reviews: 167,
        languages: 'English, German',
        available: 'Mon – Sat, 10 AM – 6 PM',
        about:
          'Dr. Alex Brandt is the team physician for several professional sports organisations and specialises in ACL reconstruction, shoulder instability, and arthroscopic procedures. He takes a performance-first approach to injury management and return-to-sport protocols.',
      },
    ],
  },
  {
    dept: 'Paediatrics',
    tagline: 'Specialist child health from newborn to adolescent.',
    icon: '👶',
    accent: '#854F0B',
    avatarBg: '#FAEEDA',
    avatarColor: '#633806',
    accentBorder: '#FAC775',
    badgeBg: '#FAEEDA',
    badgeText: '#633806',
    doctors: [
      {
        name: 'Dr. Priya Nair',
        title: 'Paediatric Specialist',
        exp: '12 yrs',
        initials: 'PN',
        quals: 'MD Paediatrics, DCH, FRCPCH',
        rating: '4.9',
        reviews: 344,
        languages: 'English, Hindi, Malayalam',
        available: 'Mon – Sat, 9 AM – 5 PM',
        about:
          'Dr. Priya Nair is a Fellow of the Royal College of Paediatrics and Child Health with expertise in developmental paediatrics, childhood asthma, and complex multi-system conditions. She is known for her compassionate approach and clear communication with both children and parents.',
      },
      {
        name: 'Dr. Kavita Rao',
        title: 'Neonatologist',
        exp: '9 yrs',
        initials: 'KR',
        quals: 'MD, DNB Neonatology',
        rating: '4.8',
        reviews: 198,
        languages: 'English, Kannada, Hindi',
        available: 'Mon – Fri, 8 AM – 4 PM',
        about:
          'Dr. Kavita Rao leads the Level III NICU and specialises in premature infant care, respiratory distress syndrome, and neonatal surgery support. She has overseen the care of over 1,200 critically ill newborns and established the hospital\'s kangaroo mother care programme.',
      },
      {
        name: 'Dr. Ethan Woods',
        title: 'Paed Emergency',
        exp: '7 yrs',
        initials: 'EW',
        quals: 'MD Paediatrics, MRCPCH',
        rating: '4.7',
        reviews: 142,
        languages: 'English',
        available: '24/7 Emergency Cover',
        about:
          'Dr. Ethan Woods runs the paediatric emergency department and is trained in advanced paediatric life support and trauma management. He has implemented triage protocols that reduced average paediatric ER wait times by 40%.',
      },
    ],
  },
  {
    dept: 'Gynaecology & Obstetrics',
    tagline: "Women's health, maternity, and reproductive medicine.",
    icon: '🌸',
    accent: '#993556',
    avatarBg: '#FBEAF0',
    avatarColor: '#72243E',
    accentBorder: '#ED93B1',
    badgeBg: '#FBEAF0',
    badgeText: '#72243E',
    doctors: [
      {
        name: 'Dr. Sunita Mehta',
        title: 'Senior Obstetrician',
        exp: '16 yrs',
        initials: 'SM',
        quals: 'MD Obs & Gynae, FRCOG',
        rating: '4.9',
        reviews: 376,
        languages: 'English, Hindi, Punjabi',
        available: 'Mon – Sat, 9 AM – 5 PM',
        about:
          'Dr. Sunita Mehta is a Fellow of the Royal College of Obstetricians and Gynaecologists with 16 years managing high-risk pregnancies, maternal-fetal medicine, and complex obstetric cases. She has delivered over 4,000 babies and is a trusted voice in maternal wellbeing.',
      },
      {
        name: 'Dr. Fatima Al-Rashid',
        title: 'Head of Research',
        exp: '11 yrs',
        initials: 'FA',
        quals: 'MD, DGO, FACOG',
        rating: '4.9',
        reviews: 253,
        languages: 'English, Arabic',
        available: 'Mon – Thu, 10 AM – 5 PM',
        about:
          'Dr. Fatima Al-Rashid heads clinical research in gynaecological oncology and minimally invasive surgery. A Fellow of the American College of Obstetricians and Gynecologists, she has pioneered laparoscopic techniques for endometriosis and fibroids at this institution.',
      },
      {
        name: 'Dr. Helena Cruz',
        title: 'Reproductive Medicine',
        exp: '8 yrs',
        initials: 'HC',
        quals: 'MD, Fellowship IVF',
        rating: '4.8',
        reviews: 189,
        languages: 'English, Portuguese, Spanish',
        available: 'Tue – Sat, 9 AM – 4 PM',
        about:
          'Dr. Helena Cruz specialises in IVF, intrauterine insemination, and recurrent pregnancy loss. She trained at one of Europe\'s leading fertility centres and has helped over 800 couples achieve successful pregnancies through assisted reproductive technologies.',
      },
    ],
  },
  {
    dept: 'Oncology',
    tagline: 'Comprehensive cancer care — surgery, chemo, radiation, and beyond.',
    icon: '🎗️',
    accent: '#3B6D11',
    avatarBg: '#EAF3DE',
    avatarColor: '#27500A',
    accentBorder: '#97C459',
    badgeBg: '#EAF3DE',
    badgeText: '#27500A',
    doctors: [
      {
        name: 'Dr. Vivek Agarwal',
        title: 'Medical Oncologist',
        exp: '17 yrs',
        initials: 'VA',
        quals: 'MD, DM Oncology, FASCO',
        rating: '5.0',
        reviews: 421,
        languages: 'English, Hindi',
        available: 'Mon – Fri, 9 AM – 5 PM',
        about:
          'Dr. Vivek Agarwal is a Fellow of the American Society of Clinical Oncology and one of India\'s most recognised medical oncologists. He specialises in targeted therapy, immunotherapy, and personalised cancer treatment protocols, having treated over 5,000 cancer patients across 17 years.',
      },
      {
        name: 'Dr. Nadia Petrov',
        title: 'Radiation Oncologist',
        exp: '13 yrs',
        initials: 'NP',
        quals: 'MD, DNB Radiation',
        rating: '4.9',
        reviews: 267,
        languages: 'English, Russian',
        available: 'Mon – Sat, 8 AM – 4 PM',
        about:
          'Dr. Nadia Petrov leads stereotactic radiosurgery and IMRT programmes at the hospital. She trained in Russia and the UK and has pioneered ultra-hypofractionated radiotherapy protocols that reduce treatment duration while improving tumour control rates.',
      },
      {
        name: 'Dr. Samuel Boateng',
        title: 'Surgical Oncologist',
        exp: '10 yrs',
        initials: 'SB',
        quals: 'MS, MCh Surgical Onco',
        rating: '4.8',
        reviews: 198,
        languages: 'English, French',
        available: 'Tue – Sat, 9 AM – 5 PM',
        about:
          'Dr. Samuel Boateng specialises in hepatobiliary, colorectal, and breast cancer surgery. He is an advocate for organ-preserving surgical techniques and has trained at cancer centres in Ghana, France, and the United States. He leads the hospital\'s multidisciplinary tumour board.',
      },
    ],
  },
]

const heroStats = [
  { n: '150+', l: 'Specialists' },
  { n: '40+', l: 'Departments' },
  { n: '4.9★', l: 'Avg. Rating' },
  { n: '25 yrs', l: 'Excellence' },
]

const trustStats = [
  { n: '1M+', l: 'Patients treated', sub: 'since 1999' },
  { n: '98%', l: 'Satisfaction rate', sub: 'post-discharge surveys' },
  { n: '<4 min', l: 'ER response time', sub: 'guaranteed' },
  { n: '24/7', l: 'Senior specialist cover', sub: 'not just residents' },
]

/* ─────────────────────────────────────────────
   STAR SVG
───────────────────────────────────────────── */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   DOCTOR MODAL
───────────────────────────────────────────── */
type ModalProps = {
  doc: Doctor
  dept: Department
  onClose: () => void
}

function DoctorModal({ doc, dept, onClose }: ModalProps) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10, 22, 40, 0.55)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full" style={{ backgroundColor: dept.accent }} />

        {/* Header */}
        <div className="px-7 pt-6 pb-5 flex items-start gap-4 border-b border-gray-100">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold shrink-0 border-2"
            style={{
              backgroundColor: dept.avatarBg,
              color: dept.avatarColor,
              borderColor: dept.accentBorder,
            }}
          >
            {doc.initials}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[18px] font-bold text-[#0A1628] leading-tight">{doc.name}</h2>
            <p className="text-[13px] font-semibold mt-0.5" style={{ color: dept.accent }}>
              {doc.title}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 text-[#BA7517]" />
                ))}
              </div>
              <span className="text-[12px] font-semibold text-gray-700">{doc.rating}</span>
              <span className="text-[11px] text-gray-400">({doc.reviews} reviews)</span>
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0 text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-5 space-y-4 max-h-[60vh] overflow-y-auto">

          {/* About */}
          <div>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              About
            </p>
            <p className="text-[13px] text-gray-600 leading-relaxed">{doc.about}</p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-xl px-4 py-3 border"
              style={{ backgroundColor: dept.avatarBg, borderColor: dept.accentBorder }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: dept.avatarColor }}>
                Qualifications
              </p>
              <p className="text-[12px] font-medium leading-relaxed" style={{ color: dept.accent }}>
                {doc.quals}
              </p>
            </div>
            <div
              className="rounded-xl px-4 py-3 border"
              style={{ backgroundColor: dept.avatarBg, borderColor: dept.accentBorder }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: dept.avatarColor }}>
                Experience
              </p>
              <p className="text-[12px] font-medium" style={{ color: dept.accent }}>
                {doc.exp}
              </p>
            </div>
            <div className="rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Languages
              </p>
              <p className="text-[12px] text-gray-700 leading-relaxed">{doc.languages}</p>
            </div>
            <div className="rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Availability
              </p>
              <p className="text-[12px] text-gray-700 leading-relaxed">{doc.available}</p>
            </div>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="px-7 py-5 bg-gray-50 border-t border-gray-100 flex gap-3">
          <Link
            href="/contact"
            className="flex-1 text-center text-[13px] font-semibold text-white py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: dept.accent }}
          >
            Book consultation
          </Link>
          <button
            onClick={onClose}
            className="px-5 text-[13px] font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function DoctorsPage() {
  const [selectedDoc, setSelectedDoc] = useState<{ doc: Doctor; dept: Department } | null>(null)

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — with doctor-in-cabin background image
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative border-b border-gray-200 py-20 overflow-hidden"
        style={{ minHeight: '520px' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1666214280250-30548f5aef26?w=1600&q=80&fit=crop')",
          }}
        />
        {/* Overlay — white-to-white/translucent so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(245,247,250,0.97) 0%, rgba(245,247,250,0.92) 45%, rgba(245,247,250,0.60) 70%, rgba(245,247,250,0.15) 100%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#EAF3DE] border border-[#C0DD97] rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#639922]" />
            <span className="text-[#3B6D11] text-[11px] font-semibold uppercase tracking-widest">
              Meet our specialists
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div>
              <h1 className="text-[42px] xl:text-5xl font-bold leading-[1.12] text-[#0A1628] mb-4">
                The experts behind<br />
                <span className="text-[#185FA5]">every recovery</span>
              </h1>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-md mb-8">
                Our internationally trained doctors and specialists deliver exceptional care
                across 40+ departments, ensuring every patient receives world-class treatment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#185FA5] hover:bg-[#0C447C] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
                >
                  Book consultation
                </Link>
                <Link
                  href="/about"
                  className="bg-white border border-gray-200 hover:border-gray-300 text-[#0A1628] px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
                >
                  About hospital
                </Link>
              </div>
            </div>

            {/* RIGHT — stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="bg-white/90 border border-gray-100 rounded-xl p-6 text-center shadow-[0_1px_3px_rgba(10,22,40,0.06)]"
                >
                  <div className="text-[28px] font-bold text-[#185FA5] leading-none mb-1">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DEPARTMENT SECTIONS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {departments.map((dept, idx) => (
        <section
          key={dept.dept}
          className={idx % 2 === 0 ? 'py-14 bg-white' : 'py-14 bg-[#F5F7FA]'}
          style={{ borderBottom: '1px solid #E5E9EF' }}
        >
          <div className="max-w-5xl mx-auto px-6">
            {/* Dept header */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border"
                style={{ backgroundColor: dept.avatarBg, borderColor: dept.accentBorder }}
              >
                {dept.icon}
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2">
                  <h2 className="text-xl font-bold text-[#0A1628]">{dept.dept}</h2>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: dept.badgeBg,
                      color: dept.badgeText,
                      borderColor: dept.accentBorder,
                    }}
                  >
                    {dept.doctors.length} specialists
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{dept.tagline}</p>
              </div>
            </div>

            {/* Doctor cards — clickable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dept.doctors.map((doc) => (
                <button
                  key={doc.name}
                  onClick={() => setSelectedDoc({ doc, dept })}
                  className="text-left bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col shadow-[0_1px_3px_rgba(10,22,40,0.06)] hover:shadow-[0_4px_16px_rgba(10,22,40,0.10)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full"
                >
                  {/* Thin accent bar */}
                  <div className="h-[3px] w-full" style={{ backgroundColor: dept.accent }} />

                  <div className="p-5 flex flex-col flex-1">
                    {/* Avatar + name */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-[13px] font-bold shrink-0 border"
                        style={{
                          backgroundColor: dept.avatarBg,
                          color: dept.avatarColor,
                          borderColor: dept.accentBorder,
                        }}
                      >
                        {doc.initials}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A1628] text-[14px] leading-snug">
                          {doc.name}
                        </h3>
                        <p className="text-[12px] font-medium mt-0.5" style={{ color: dept.accent }}>
                          {doc.title}
                        </p>
                        <p className="text-gray-400 text-[11px] mt-0.5">{doc.exp} experience</p>
                      </div>
                    </div>

                    {/* Qualifications */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-3 mb-4">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        Qualifications
                      </p>
                      <p className="text-gray-700 text-[12px] leading-relaxed">{doc.quals}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-3 h-3 text-[#BA7517]" />
                        ))}
                      </div>
                      <span className="text-[12px] font-semibold text-gray-700">{doc.rating}</span>
                      <span className="text-[11px] text-gray-400">({doc.reviews} reviews)</span>
                    </div>

                    {/* View profile hint */}
                    <div className="mt-auto">
                      <div
                        className="flex items-center justify-center gap-1.5 w-full text-center text-[13px] font-semibold py-2.5 rounded-xl border transition-colors"
                        style={{
                          color: dept.accent,
                          borderColor: dept.accentBorder,
                          backgroundColor: dept.avatarBg,
                        }}
                      >
                        View profile
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TRUST STRIP
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-14 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[11px] uppercase tracking-widest text-gray-400 mb-6">
            Our track record
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustStats.map((s) => (
              <div
                key={s.l}
                className="bg-white border border-gray-100 rounded-xl px-5 py-5 text-center shadow-[0_1px_3px_rgba(10,22,40,0.05)]"
              >
                <div className="text-[28px] font-bold text-[#0A1628] leading-none mb-1">{s.n}</div>
                <div className="text-[12px] font-semibold text-gray-600 mb-0.5">{s.l}</div>
                <div className="text-[10px] text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — full-bleed, flex-1 to fill space above footer
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="flex-1 flex items-center justify-center bg-[#185FA5] relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative w-full py-24 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest text-white/50 mb-5">
              We&apos;re here to help
            </p>
            <h2 className="text-[32px] font-bold text-white mb-4 leading-tight">
              Can&apos;t find the right specialist?
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-10">
              Our care coordinators will match you with the right consultant for your condition
              — usually within the hour. No referral needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-[#185FA5] font-semibold text-sm px-10 py-4 rounded-xl transition-colors shadow-sm"
              >
                Contact our team
              </Link>
              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-10 py-4 rounded-xl border border-white/20 transition-colors"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DOCTOR DETAIL MODAL
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {selectedDoc && (
        <DoctorModal
          doc={selectedDoc.doc}
          dept={selectedDoc.dept}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </>
  )
}