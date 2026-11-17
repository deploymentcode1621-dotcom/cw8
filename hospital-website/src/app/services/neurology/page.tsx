import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain, Activity, Zap, Eye, Users,
  ArrowRight, Phone, Calendar, Plus, Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neurology Department | Patil Multispeciality Hospital',
  description:
    "Patil Hospital Neurology provides expert care for brain and nervous system disorders — from stroke management to epilepsy, Parkinson's, and complex spine conditions.",
  alternates: { canonical: 'https://www.patilhospital.com/services/neurology' },
}

/* ─── data ─── */
const conditions = [
  {
    icon: Zap,
    name: 'Stroke & TIA',
    desc: 'Rapid tPA thrombolysis and mechanical thrombectomy in our dedicated 24/7 stroke unit with interventional neuroradiology.',
    color: '#FF6B35',
    bg: '#FFF0EB',
  },
  {
    icon: Activity,
    name: 'Epilepsy',
    desc: 'Comprehensive epilepsy management including EEG monitoring, long-term video EEG, medication, and surgical evaluation.',
    color: '#3B37A0',
    bg: '#F0EEFF',
  },
  {
    icon: Brain,
    name: "Parkinson's Disease",
    desc: 'Deep Brain Stimulation therapy, medication optimisation, and multidisciplinary movement disorder rehabilitation.',
    color: '#4CAF82',
    bg: '#E8F4F0',
  },
  {
    icon: Eye,
    name: 'Multiple Sclerosis',
    desc: 'Disease-modifying therapies, regular MRI monitoring, and a dedicated rehabilitation programme for MS patients.',
    color: '#8B5CF6',
    bg: '#F5F0FF',
  },
  {
    icon: Star,
    name: 'Headache & Migraine',
    desc: 'Botox therapy, CGRP monoclonal antibodies, preventive medications, and lifestyle interventions for chronic headache.',
    color: '#0EA5E9',
    bg: '#F0F8FF',
  },
  {
    icon: Users,
    name: 'Dementia & Memory',
    desc: 'Memory clinic services with cognitive assessment, PET imaging, CSF biomarkers, diagnosis, and family support.',
    color: '#EC4899',
    bg: '#FFF0F7',
  },
]

const treatments = [
  'MRI Brain & Spine (3T)',
  'EEG & Video EEG Monitoring',
  'Nerve Conduction Studies',
  'Botox for Chronic Migraine',
  'Deep Brain Stimulation (DBS)',
  'IV Thrombolysis for Stroke',
  'Mechanical Thrombectomy',
  'Lumbar Puncture & CSF Analysis',
  'Neuro-rehabilitation Programme',
  'Carotid Endarterectomy',
  'Brain Tumour Resection',
  'Spinal Cord Stimulation',
]

const doctors = [
  {
    initials: 'MC',
    name: 'Dr. Marcus Chen',
    role: 'Senior Neurologist',
    exp: '15 Years',
    speciality: 'Stroke & Vascular Neurology',
    accent: '#FF6B35',
    pal: '#FFF0EB',
  },
  {
    initials: 'AV',
    name: 'Dr. Anita Verma',
    role: 'Consultant Neurologist',
    exp: '11 Years',
    speciality: 'Epilepsy & EEG',
    accent: '#3B37A0',
    pal: '#F0EEFF',
  },
  {
    initials: 'TA',
    name: 'Dr. Thomas Adeyemi',
    role: 'Neurosurgeon',
    exp: '9 Years',
    speciality: 'Movement Disorders & DBS',
    accent: '#4CAF82',
    pal: '#E8F4F0',
  },
]

const faqs = [
  {
    q: 'What are the warning signs of a stroke?',
    a: 'Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Other signs include sudden severe headache, vision loss, and confusion. Call emergency services immediately — every minute counts.',
  },
  {
    q: 'Is epilepsy curable?',
    a: 'Many people with epilepsy achieve complete seizure control with medication. For drug-resistant cases, surgical options or neuromodulation (VNS, DBS) can significantly reduce seizure frequency and improve quality of life.',
  },
  {
    q: "How is Parkinson's disease treated?",
    a: "Parkinson's is managed with dopaminergic medications, physiotherapy, speech therapy, and for advanced cases, Deep Brain Stimulation (DBS), which can dramatically improve motor function and quality of life.",
  },
  {
    q: 'How do I prepare for an MRI scan?',
    a: 'Remove all metal objects before the scan. Inform our team about any implants, pacemakers, or claustrophobia. The 3T MRI scan is painless and typically takes 30–60 minutes depending on the area being scanned.',
  },
]

/* ─── hero illustration: neural-network rings ─── */
const CX = 240
const CY = 240
// inner ring (0-3), middle ring (4-8), outer ring (9-13)
const NODES = [
  { r: 92,  a: 15 },  { r: 92,  a: 100 }, { r: 92,  a: 200 }, { r: 92,  a: 290 },
  { r: 152, a: 50 },  { r: 152, a: 130 }, { r: 152, a: 215 }, { r: 152, a: 320 }, { r: 152, a: 0 },
  { r: 208, a: 25 },  { r: 208, a: 85 },  { r: 208, a: 160 }, { r: 208, a: 240 }, { r: 208, a: 300 },
]
const EDGES: [number, number][] = [
  [0, 4], [0, 8], [1, 4], [1, 5], [2, 6], [2, 5], [3, 7], [3, 8],
  [4, 10], [4, 9], [5, 11], [5, 10], [6, 12], [6, 11], [7, 13], [7, 12], [8, 9], [8, 13],
]
const ACCENT_NODES = [4, 11]

const pt = (n: { r: number; a: number }) => ({
  x: CX + n.r * Math.cos((n.a * Math.PI) / 180),
  y: CY + n.r * Math.sin((n.a * Math.PI) / 180),
})

function NeuroIllustration() {
  const pts = NODES.map(pt)
  return (
    <svg viewBox="0 0 480 480" width="100%" height="100%" aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="nCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#3B37A0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1E1B6A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft glow behind everything */}
      <circle cx={CX} cy={CY} r="235" fill="url(#nCore)" />

      <g className="neuro-spin">
        {/* rings */}
        {[92, 152, 208].map((r) => (
          <circle
            key={r}
            cx={CX} cy={CY} r={r}
            fill="none"
            stroke="rgba(200,185,255,.22)"
            strokeWidth="1"
            strokeDasharray="3 7"
          />
        ))}

        {/* centre → inner ring */}
        {pts.slice(0, 4).map((p, i) => (
          <line key={`c${i}`} x1={CX} y1={CY} x2={p.x} y2={p.y} stroke="rgba(200,185,255,.3)" strokeWidth="1" />
        ))}

        {/* ring-to-ring connections */}
        {EDGES.map(([a, b], i) => (
          <line
            key={`e${i}`}
            x1={pts[a].x} y1={pts[a].y}
            x2={pts[b].x} y2={pts[b].y}
            stroke="rgba(200,185,255,.28)"
            strokeWidth="1"
          />
        ))}

        {/* nodes */}
        {pts.map((p, i) => {
          const accent = ACCENT_NODES.includes(i)
          const outer = i >= 9
          return (
            <g key={`n${i}`}>
              <circle cx={p.x} cy={p.y} r={accent ? 11 : 8} fill={accent ? 'rgba(255,107,53,.2)' : 'rgba(200,185,255,.14)'} />
              <circle cx={p.x} cy={p.y} r={accent ? 5.5 : outer ? 3.5 : 4.5} fill={accent ? '#FF6B35' : '#D6C9FF'} />
            </g>
          )
        })}
      </g>

      {/* core disc */}
      <circle cx={CX} cy={CY} r="52" fill="rgba(30,27,106,.85)" stroke="rgba(214,201,255,.45)" strokeWidth="1.5" />
      <circle cx={CX} cy={CY} r="64" fill="none" stroke="rgba(139,92,246,.35)" strokeWidth="1" />
    </svg>
  )
}

export default function NeurologyPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --navy:      #1E1B6A;
          --navy2:     #2A2680;
          --navy3:     #3B37A0;
          --coral:     #FF6B35;
          --coral-lt:  #FF9A72;
          --coral-pal: #FFF0EB;
          --lavender:  #F0EEFF;
          --mint:      #E8F4F0;
          --green:     #4CAF82;
          --ink:       #1A1A3E;
          --muted:     #6B7BA4;
          --border:    #DDD8F5;
        }
        .nd { font-family:'Playfair Display',Georgia,serif; }
        .nb { font-family:'Inter',system-ui,sans-serif; }

        /* ── HERO — navy gradient + neural illustration ── */
        .neuro-hero {
          position:relative;
          isolation:isolate;
          min-height:clamp(500px,64vh,600px);
          display:flex;
          align-items:center;
          overflow:hidden;
          background:linear-gradient(120deg,#17145A 0%,#1E1B6A 45%,#2E2A8C 100%);
        }
        /* faint dot grid */
        .neuro-hero-dots {
          position:absolute;inset:0;z-index:-2;
          background-image:radial-gradient(rgba(200,185,255,.14) 1px,transparent 1px);
          background-size:28px 28px;
          -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 35%,#000 100%);
                  mask-image:linear-gradient(90deg,transparent 0%,#000 35%,#000 100%);
        }
        .neuro-hero-glow-a {
          position:absolute;z-index:-1;pointer-events:none;
          top:-160px;right:-80px;width:560px;height:560px;border-radius:50%;
          background:radial-gradient(circle,rgba(139,92,246,.28) 0%,transparent 70%);
        }
        .neuro-hero-glow-b {
          position:absolute;z-index:-1;pointer-events:none;
          bottom:-200px;left:-120px;width:480px;height:480px;border-radius:50%;
          background:radial-gradient(circle,rgba(255,107,53,.12) 0%,transparent 70%);
        }
        .neuro-hero-line {
          position:absolute;left:0;right:0;bottom:0;height:3px;
          background:linear-gradient(90deg,var(--coral) 0%,#8B5CF6 55%,transparent 100%);
        }
        .neuro-hero-inner {
          position:relative;
          max-width:1280px;margin:0 auto;width:100%;
          padding:clamp(44px,6vh,72px) clamp(24px,5vw,80px);
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:clamp(24px,4vw,56px);
          align-items:center;
        }
        @media(max-width:900px){
          .neuro-hero-inner{grid-template-columns:1fr;}
          .neuro-visual{display:none;}
        }
        .neuro-hero-copy { max-width:620px; }
        /* label pill */
        .neuro-tag {
          display:inline-flex;align-items:center;gap:9px;
          background:rgba(255,255,255,.1);
          border:1px solid rgba(255,255,255,.25);
          border-radius:100px;
          padding:8px 18px;
          font-family:'Inter',sans-serif;
          font-size:11.5px;font-weight:600;
          letter-spacing:.16em;text-transform:uppercase;
          color:#F1ECFF;
          margin-bottom:22px;
        }
        /* illustration */
        .neuro-visual {
          position:relative;
          width:100%;max-width:470px;
          aspect-ratio:1/1;
          margin-left:auto;
        }
        .neuro-spin {
          transform-origin:240px 240px;
          animation:nspin 90s linear infinite;
        }
        @keyframes nspin { to { transform:rotate(360deg); } }
        .neuro-core-icon {
          position:absolute;left:50%;top:50%;
          width:84px;height:84px;margin:-42px 0 0 -42px;
          display:flex;align-items:center;justify-content:center;
          color:#E4DAFF;
        }
        .neuro-chip {
          position:absolute;
          display:flex;align-items:center;gap:12px;
          background:rgba(255,255,255,.1);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,.22);
          border-radius:16px;
          padding:12px 18px 12px 12px;
          box-shadow:0 18px 40px rgba(10,8,50,.35);
        }
        .neuro-chip-ico {
          width:38px;height:38px;border-radius:11px;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;
        }
        @media(prefers-reduced-motion:reduce){ .neuro-spin{animation:none;} }

        /* ── SECTIONS ── */
        .neuro-section {
          padding:clamp(56px,7vw,96px) clamp(24px,5vw,80px);
        }
        .neuro-inner{max-width:1280px;margin:0 auto;}
        .neuro-eyebrow {
          display:inline-flex;align-items:center;gap:8px;
          font-family:'Inter',sans-serif;
          font-size:10px;font-weight:600;
          letter-spacing:.2em;text-transform:uppercase;
          color:var(--coral);margin-bottom:12px;
        }
        .neuro-eline{display:block;width:22px;height:1px;background:var(--coral);opacity:.5;}

        /* ── CONDITIONS GRID ── */
        .neuro-cond-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
        }
        @media(max-width:900px){.neuro-cond-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:560px){.neuro-cond-grid{grid-template-columns:1fr;}}
        .neuro-cond-card {
          background:white;
          border:1.5px solid var(--border);
          border-radius:20px;
          padding:28px 26px;
          position:relative;overflow:hidden;
          transition:transform .3s,box-shadow .3s,border-color .3s;
        }
        .neuro-cond-card:hover{
          transform:translateY(-5px);
          box-shadow:0 24px 52px rgba(30,27,106,.1);
          border-color:transparent;
        }
        .neuro-cond-bar{
          position:absolute;top:0;left:0;right:0;height:3px;border-radius:20px 20px 0 0;
        }
        .neuro-cond-ico{
          width:48px;height:48px;border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:16px;
        }

        /* ── TREATMENTS ── */
        .neuro-tx-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
        }
        @media(max-width:800px){.neuro-tx-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:500px){.neuro-tx-grid{grid-template-columns:1fr;}}
        .neuro-tx-item {
          display:flex;align-items:center;gap:10px;
          background:white;
          border:1.5px solid var(--border);
          border-radius:12px;
          padding:14px 18px;
          font-family:'Inter',sans-serif;
          font-size:.84rem;font-weight:500;
          color:var(--ink);
          transition:all .25s;
        }
        .neuro-tx-item:hover{
          border-color:rgba(139,92,246,.35);
          background:var(--lavender);
          transform:translateX(4px);
        }
        .neuro-tx-dot{
          width:8px;height:8px;border-radius:50%;
          background:linear-gradient(135deg,#8B5CF6,#3B37A0);
          flex-shrink:0;
        }

        /* ── DOCTORS ── */
        .neuro-doc-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
        }
        @media(max-width:800px){.neuro-doc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:520px){.neuro-doc-grid{grid-template-columns:1fr;}}
        .neuro-doc-card {
          background:white;
          border:1.5px solid var(--border);
          border-radius:24px;
          padding:32px 26px;
          text-align:center;
          position:relative;overflow:hidden;
          transition:transform .3s,box-shadow .3s;
        }
        .neuro-doc-card:hover{transform:translateY(-5px);box-shadow:0 24px 52px rgba(30,27,106,.1);}
        .neuro-doc-avatar {
          width:72px;height:72px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 18px;
          font-family:'Playfair Display',serif;
          font-size:1.5rem;font-weight:700;
        }
        .neuro-doc-badge {
          display:inline-block;
          background:var(--lavender);
          border:1px solid var(--border);
          border-radius:100px;
          padding:4px 12px;
          font-family:'Inter',sans-serif;
          font-size:11px;font-weight:500;
          color:var(--navy3);margin-top:10px;
        }
        .neuro-doc-book {
          display:inline-flex;align-items:center;gap:6px;
          margin-top:18px;
          background:var(--navy);color:white;
          font-family:'Inter',sans-serif;
          font-size:.76rem;font-weight:600;
          letter-spacing:.07em;text-transform:uppercase;
          text-decoration:none;border-radius:10px;
          padding:10px 20px;
          transition:all .25s;
          border:none;cursor:pointer;
        }
        .neuro-doc-book:hover{background:var(--navy3);transform:translateY(-1px);}

        /* ── FAQ ── */
        .neuro-faq-item {
          border:1.5px solid var(--border);
          border-radius:16px;
          overflow:hidden;
          background:white;
          transition:border-color .25s;
        }
        .neuro-faq-item:hover{border-color:rgba(139,92,246,.3);}
        .neuro-faq-btn {
          width:100%;display:flex;align-items:center;justify-content:space-between;
          gap:16px;
          padding:22px 24px;
          background:none;border:none;cursor:pointer;
          text-align:left;
        }
        .neuro-faq-body{
          padding:0 24px 22px;
          font-family:'Inter',sans-serif;
          font-size:.88rem;font-weight:300;
          line-height:1.8;color:var(--muted);
        }

        /* ── CTA ── */
        .neuro-cta {
          background:var(--navy);
          padding:clamp(56px,7vw,88px) clamp(24px,5vw,80px);
          position:relative;overflow:hidden;
        }
        .neuro-cta::before{
          content:"";position:absolute;top:-100px;right:-100px;
          width:420px;height:420px;border-radius:50%;
          background:radial-gradient(circle,rgba(139,92,246,.15) 0%,transparent 70%);
          pointer-events:none;
        }
        .neuro-cta::after{
          content:"";position:absolute;bottom:-80px;left:-80px;
          width:280px;height:280px;border-radius:50%;
          background:radial-gradient(circle,rgba(255,107,53,.1) 0%,transparent 70%);
          pointer-events:none;
        }
        .neuro-cta-inner{
          max-width:1280px;margin:0 auto;
          display:grid;grid-template-columns:1fr auto;
          align-items:center;gap:40px;
          position:relative;z-index:1;
        }
        @media(max-width:700px){.neuro-cta-inner{grid-template-columns:1fr;}}

        /* buttons */
        .nbtn-coral{
          display:inline-flex;align-items:center;gap:8px;
          background:var(--coral);color:white;
          font-family:'Inter',sans-serif;
          font-size:.8rem;font-weight:600;
          letter-spacing:.08em;text-transform:uppercase;
          text-decoration:none;border-radius:10px;
          padding:14px 28px;border:none;cursor:pointer;
          transition:all .25s;
        }
        .nbtn-coral:hover{background:var(--coral-lt);transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,107,53,.35);}
        .nbtn-outline{
          display:inline-flex;align-items:center;gap:8px;
          background:rgba(255,255,255,.1);color:white;
          font-family:'Inter',sans-serif;
          font-size:.8rem;font-weight:600;
          letter-spacing:.08em;text-transform:uppercase;
          text-decoration:none;border-radius:10px;
          padding:14px 28px;
          border:1.5px solid rgba(255,255,255,.4);
          backdrop-filter:blur(6px);
          transition:all .25s;
        }
        .nbtn-outline:hover{background:white;color:var(--navy);border-color:white;transform:translateY(-2px);}
      `}</style>

      {/* ══════════════════════════════════════════
          HERO — navy gradient + neural-network illustration
      ══════════════════════════════════════════ */}
      <section className="neuro-hero">
        <div className="neuro-hero-dots" />
        <div className="neuro-hero-glow-a" />
        <div className="neuro-hero-glow-b" />

        <div className="neuro-hero-inner">

          {/* left: copy */}
          <div className="neuro-hero-copy">
            <div className="neuro-tag">
              <span aria-hidden="true" style={{fontSize:16,lineHeight:1}}>🧠</span>
              Neurology Department
            </div>

            <h1 className="nd" style={{
              fontSize:'clamp(2.2rem,4.4vw,3.7rem)',
              fontWeight:600,lineHeight:1.1,
              letterSpacing:'-0.02em',color:'#fff',
              margin:'0 0 18px',
            }}>
              Precision Care for
              <span style={{display:'block',color:'#D6C9FF'}}>
                Brain &amp; Nervous System
              </span>
            </h1>

            <p className="nb" style={{
              fontSize:'1.03rem',fontWeight:400,lineHeight:1.8,
              color:'rgba(255,255,255,.85)',maxWidth:520,margin:'0 0 32px',
            }}>
              Our Neurology and Neurosurgery team delivers expert, compassionate care
              for complex neurological conditions using the latest diagnostic and
              treatment technologies available.
            </p>

            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/appointments" className="nbtn-coral">
                <Calendar size={15}/> Book a Consultation
              </Link>
              <Link href="/doctors" className="nbtn-outline">
                Meet Our Neurologists
              </Link>
            </div>
          </div>

          {/* right: illustration + floating chips */}
          <div className="neuro-visual">
            <NeuroIllustration />
            <div className="neuro-core-icon" aria-hidden="true">
              <Brain size={46} strokeWidth={1.5} />
            </div>

            <div className="neuro-chip" style={{top:'8%',right:'-2%'}}>
              <div className="neuro-chip-ico" style={{background:'rgba(255,107,53,.2)',color:'#FF9A72'}}>
                <Zap size={18}/>
              </div>
              <div>
                <div className="nb" style={{fontSize:'.84rem',fontWeight:600,color:'#fff',lineHeight:1.2}}>
                  24/7 Stroke Unit
                </div>
                <div className="nb" style={{fontSize:'.7rem',fontWeight:400,color:'rgba(255,255,255,.6)',marginTop:2}}>
                  Emergency neuro care
                </div>
              </div>
            </div>

            <div className="neuro-chip" style={{bottom:'9%',left:'-4%'}}>
              <div className="neuro-chip-ico" style={{background:'rgba(139,92,246,.25)',color:'#D6C9FF'}}>
                <Activity size={18}/>
              </div>
              <div>
                <div className="nb" style={{fontSize:'.84rem',fontWeight:600,color:'#fff',lineHeight:1.2}}>
                  3T MRI Diagnostics
                </div>
                <div className="nb" style={{fontSize:'.7rem',fontWeight:400,color:'rgba(255,255,255,.6)',marginTop:2}}>
                  Brain &amp; spine imaging
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="neuro-hero-line" />
      </section>

      {/* ══════════════════════════════════════════
          CONDITIONS WE TREAT
      ══════════════════════════════════════════ */}
      <section className="neuro-section" style={{background:'var(--lavender)'}}>
        <div className="neuro-inner">

          <div style={{textAlign:'center',marginBottom:48}}>
            <p className="neuro-eyebrow nb" style={{justifyContent:'center',display:'flex',alignItems:'center',gap:8}}>
              <span className="neuro-eline"/>
              Conditions We Treat
              <span className="neuro-eline"/>
            </p>
            <h2 className="nd" style={{
              fontSize:'clamp(2rem,3.2vw,3rem)',
              fontWeight:400,lineHeight:1.15,color:'var(--ink)',
            }}>
              Expert Care for{' '}
              <em style={{fontStyle:'italic',color:'var(--navy2)'}}>Every Condition</em>
            </h2>
            <p className="nb" style={{
              fontSize:'.92rem',fontWeight:300,lineHeight:1.8,
              color:'var(--muted)',maxWidth:440,margin:'10px auto 0',
            }}>
              From acute stroke to chronic neurological diseases — our team is trained
              to diagnose and treat the full spectrum of neurological disorders.
            </p>
          </div>

          <div className="neuro-cond-grid">
            {conditions.map(({icon:Icon,name,desc,color,bg})=>(
              <div key={name} className="neuro-cond-card">
                <div className="neuro-cond-bar" style={{background:color}}/>
                <div className="neuro-cond-ico" style={{background:bg}}>
                  <Icon size={22} color={color}/>
                </div>
                <h3 className="nd" style={{
                  fontSize:'1.1rem',fontWeight:600,
                  color:'var(--ink)',marginBottom:8,
                }}>{name}</h3>
                <p className="nb" style={{
                  fontSize:'.84rem',fontWeight:300,
                  lineHeight:1.8,color:'var(--muted)',margin:0,
                }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TREATMENTS & PROCEDURES
      ══════════════════════════════════════════ */}
      <section className="neuro-section" style={{background:'white'}}>
        <div className="neuro-inner">
          <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'clamp(32px,5vw,72px)',
            alignItems:'center',
          }}>
            {/* left: heading */}
            <div>
              <p className="neuro-eyebrow nb">
                <span className="neuro-eline"/>
                Treatments &amp; Procedures
              </p>
              <h2 className="nd" style={{
                fontSize:'clamp(2rem,3.2vw,3rem)',
                fontWeight:400,lineHeight:1.15,color:'var(--ink)',marginBottom:16,
              }}>
                State-of-the-Art{' '}
                <em style={{fontStyle:'italic',color:'var(--navy2)'}}>Neuro Interventions</em>
              </h2>
              <p className="nb" style={{
                fontSize:'.92rem',fontWeight:300,lineHeight:1.8,color:'var(--muted)',
              }}>
                We offer the full spectrum of neurological diagnostics and treatments —
                from non-invasive imaging through to complex surgical interventions,
                all under one roof.
              </p>

              {/* highlight strip */}
              <div style={{
                marginTop:28,
                background:'linear-gradient(135deg,var(--navy) 0%,var(--navy3) 100%)',
                borderRadius:18,padding:'22px 26px',
                display:'flex',alignItems:'center',gap:16,
              }}>
                <div style={{
                  width:48,height:48,borderRadius:14,flexShrink:0,
                  background:'rgba(139,92,246,.25)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color:'rgba(200,185,255,.85)',
                }}>
                  <Activity size={22}/>
                </div>
                <div>
                  <div className="nd" style={{fontSize:'1.05rem',fontWeight:600,color:'white',marginBottom:3}}>
                    24/7 Stroke Response
                  </div>
                  <div className="nb" style={{fontSize:'.8rem',fontWeight:300,color:'rgba(255,255,255,.45)'}}>
                    Door-to-needle time under 30 minutes for stroke thrombolysis
                  </div>
                </div>
              </div>
            </div>

            {/* right: treatment list */}
            <div className="neuro-tx-grid">
              {treatments.map(tx=>(
                <div key={tx} className="neuro-tx-item">
                  <span className="neuro-tx-dot"/>
                  {tx}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR DOCTORS
      ══════════════════════════════════════════ */}
      <section className="neuro-section" style={{background:'var(--lavender)'}}>
        <div className="neuro-inner">

          <div style={{
            display:'flex',alignItems:'flex-end',
            justifyContent:'space-between',
            flexWrap:'wrap',gap:20,marginBottom:44,
          }}>
            <div>
              <p className="neuro-eyebrow nb">
                <span className="neuro-eline"/>
                Our Specialists
              </p>
              <h2 className="nd" style={{
                fontSize:'clamp(2rem,3.2vw,3rem)',
                fontWeight:400,color:'var(--ink)',lineHeight:1.15,
              }}>
                Meet Your{' '}
                <em style={{fontStyle:'italic',color:'var(--navy2)'}}>Neurologists</em>
              </h2>
            </div>
            <Link href="/doctors" className="nb" style={{
              display:'inline-flex',alignItems:'center',gap:6,
              fontSize:'.8rem',fontWeight:600,
              letterSpacing:'.1em',textTransform:'uppercase',
              color:'var(--navy)',textDecoration:'none',
              borderBottom:'1.5px solid var(--coral)',paddingBottom:2,
            }}>
              View All Doctors <ArrowRight size={13}/>
            </Link>
          </div>

          <div className="neuro-doc-grid">
            {doctors.map(({initials,name,role,exp,speciality,accent,pal})=>(
              <div key={name} className="neuro-doc-card">
                {/* top accent bar */}
                <div style={{
                  position:'absolute',top:0,left:0,right:0,
                  height:3,borderRadius:'24px 24px 0 0',background:accent,
                }}/>

                <div className="neuro-doc-avatar" style={{background:pal,color:accent}}>
                  {initials}
                </div>

                <div className="nd" style={{
                  fontSize:'1.12rem',fontWeight:600,color:'var(--ink)',marginBottom:4,
                }}>{name}</div>
                <div className="nb" style={{
                  fontSize:'.82rem',fontWeight:400,color:'var(--muted)',marginBottom:2,
                }}>{role}</div>
                <div className="nb" style={{
                  fontSize:'.78rem',fontWeight:500,color:accent,
                }}>{exp} Experience</div>

                <div className="neuro-doc-badge nb">{speciality}</div>

                <div>
                  <Link href="/appointments" className="neuro-doc-book">
                    <Calendar size={13}/> Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQs
      ══════════════════════════════════════════ */}
      <section className="neuro-section" style={{background:'white'}}>
        <div className="neuro-inner" style={{maxWidth:860}}>

          <div style={{textAlign:'center',marginBottom:44}}>
            <p className="neuro-eyebrow nb" style={{justifyContent:'center',display:'flex',alignItems:'center',gap:8}}>
              <span className="neuro-eline"/>
              Frequently Asked Questions
              <span className="neuro-eline"/>
            </p>
            <h2 className="nd" style={{
              fontSize:'clamp(2rem,3.2vw,3rem)',
              fontWeight:400,color:'var(--ink)',
            }}>
              Your Questions,{' '}
              <em style={{fontStyle:'italic',color:'var(--navy2)'}}>Answered</em>
            </h2>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {faqs.map(({q,a},i)=>(
              <details key={i} className="neuro-faq-item" style={{listStyle:'none'}}>
                <summary className="neuro-faq-btn" style={{cursor:'pointer',listStyle:'none'}}>
                  <span className="nd" style={{
                    fontSize:'1.05rem',fontWeight:500,
                    color:'var(--ink)',textAlign:'left',
                  }}>{q}</span>
                  <span style={{
                    width:30,height:30,borderRadius:8,flexShrink:0,
                    background:'var(--lavender)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    color:'var(--navy3)',
                  }}>
                    <Plus size={15}/>
                  </span>
                </summary>
                <div className="neuro-faq-body">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="neuro-cta">
        <div className="neuro-cta-inner">
          <div>
            <div className="nb" style={{
              fontSize:'10px',fontWeight:600,
              letterSpacing:'.18em',textTransform:'uppercase',
              color:'rgba(200,185,255,.55)',marginBottom:10,
            }}>
              Ready to get started?
            </div>
            <h2 className="nd" style={{
              fontSize:'clamp(1.8rem,3vw,2.8rem)',
              fontWeight:400,color:'white',lineHeight:1.2,
            }}>
              Consult Our Neurologists{' '}
              <em style={{fontStyle:'italic',color:'rgba(200,185,255,.85)'}}>Today</em>
            </h2>
            <p className="nb" style={{
              fontSize:'.9rem',fontWeight:300,
              color:'rgba(255,255,255,.38)',lineHeight:1.7,
              maxWidth:440,marginTop:10,
            }}>
              Same-day consultations available. Our stroke unit operates 24/7
              for emergency neurological care.
            </p>
          </div>

          <div style={{display:'flex',gap:12,flexWrap:'wrap',flexShrink:0}}>
            <Link href="/appointments" className="nbtn-coral">
              <Calendar size={15}/> Book Appointment
            </Link>
            <Link href="/contact" className="nbtn-outline">
              <Phone size={15}/> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}