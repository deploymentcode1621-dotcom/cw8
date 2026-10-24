import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain, Activity, Zap, Eye, Clock, Users, Award,
  ChevronRight, ArrowRight, Phone, Calendar,
  CheckCircle, Plus, Minus, Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neurology Department | Patil Multispeciality Hospital',
  description:
    "Patil Hospital Neurology provides expert care for brain and nervous system disorders — from stroke management to epilepsy, Parkinson's, and complex spine conditions.",
  alternates: { canonical: 'https://www.patilhospital.com/services/neurology' },
}

/* ─── data ─── */
const stats = [
  { value: '5,000+', label: 'Neuro Cases Annually',  icon: Brain },
  { value: '12+',    label: 'Expert Neurologists',    icon: Users },
  { value: '3T MRI', label: 'Advanced Scanner',       icon: Activity },
  { value: '24/7',   label: 'Stroke Emergency Unit',  icon: Clock },
]

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

export default function NeurologyPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

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

        /* ── HERO ── */
        .neuro-hero {
          position:relative;
          min-height:96vh;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          overflow:hidden;
          background:var(--navy);
        }
        .neuro-hero-bg {
          position:absolute;inset:0;
          width:100%;height:100%;
          object-fit:cover;object-position:center 25%;
          opacity:.22;
          z-index:0;
        }
        .neuro-hero-veil {
          position:absolute;inset:0;z-index:1;
          background:
            linear-gradient(180deg,rgba(30,27,106,.4) 0%,rgba(30,27,106,.78) 55%,rgba(30,27,106,.98) 100%),
            linear-gradient(100deg,rgba(30,27,106,.9) 0%,rgba(30,27,106,.1) 60%,transparent 100%);
        }
        /* purple brain-wave accent blob */
        .neuro-blob {
          position:absolute;
          border-radius:50%;
          pointer-events:none;
          z-index:2;
        }
        /* vertical accent line */
        .neuro-rule {
          position:absolute;
          left:clamp(28px,4vw,64px);
          top:0;bottom:0;width:1px;
          background:linear-gradient(180deg,transparent 0%,rgba(139,92,246,.45) 30%,rgba(139,92,246,.45) 72%,transparent 100%);
          z-index:3;pointer-events:none;
        }
        /* watermark */
        .neuro-wm {
          position:absolute;
          bottom:-20px;right:-16px;
          font-family:'Playfair Display',serif;
          font-size:clamp(120px,18vw,220px);
          font-weight:900;line-height:1;
          color:rgba(139,92,246,.05);
          pointer-events:none;user-select:none;
          letter-spacing:-0.04em;z-index:2;
          white-space:nowrap;
        }
        /* hero content */
        .neuro-hero-inner {
          position:relative;z-index:4;
          max-width:1280px;margin:0 auto;
          width:100%;
          padding:0 clamp(24px,5vw,80px) clamp(56px,7vh,88px);
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:48px;
          align-items:flex-end;
        }
        @media(max-width:860px){
          .neuro-hero-inner{grid-template-columns:1fr;}
          .neuro-hero-right{display:none;}
        }
        /* hero top breadcrumb area */
        .neuro-hero-top {
          position:relative;z-index:4;
          max-width:1280px;margin:0 auto;
          padding:32px clamp(24px,5vw,80px) 0;
        }
        /* tag pill */
        .neuro-tag {
          display:inline-flex;align-items:center;gap:8px;
          background:rgba(139,92,246,.18);
          border:1px solid rgba(139,92,246,.35);
          border-radius:100px;
          padding:6px 14px;
          font-family:'Inter',sans-serif;
          font-size:10px;font-weight:600;
          letter-spacing:.18em;text-transform:uppercase;
          color:rgba(200,185,255,.85);
          margin-bottom:20px;
        }
        /* stat pills on hero */
        .neuro-hero-stat {
          display:flex;align-items:center;gap:14px;
          background:rgba(255,255,255,.06);
          backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,.1);
          border-radius:14px;
          padding:16px 20px;
          transition:background .25s,border-color .25s;
        }
        .neuro-hero-stat:hover{
          background:rgba(255,255,255,.1);
          border-color:rgba(139,92,246,.35);
        }
        /* wave */
        .neuro-wave{display:block;width:100%;margin-bottom:-2px;}

        /* ── STATS BAND ── */
        .neuro-stats {
          background:var(--navy2);
          padding:0;
        }
        .neuro-stats-grid {
          max-width:1280px;margin:0 auto;
          display:grid;grid-template-columns:repeat(4,1fr);
        }
        @media(max-width:700px){.neuro-stats-grid{grid-template-columns:repeat(2,1fr);}}
        .neuro-stat-cell {
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          padding:40px 20px;
          border-right:1px solid rgba(139,92,246,.12);
          text-align:center;
        }
        .neuro-stat-cell:last-child{border-right:none;}

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
          background:transparent;color:white;
          font-family:'Inter',sans-serif;
          font-size:.8rem;font-weight:600;
          letter-spacing:.08em;text-transform:uppercase;
          text-decoration:none;border-radius:10px;
          padding:14px 28px;
          border:1.5px solid rgba(255,255,255,.2);
          transition:all .25s;
        }
        .nbtn-outline:hover{border-color:rgba(255,255,255,.5);transform:translateY(-2px);}

        /* @keyframes pulse used in breadcrumb */
        @keyframes ndrop{0%,100%{opacity:.3;transform:scaleY(1);}50%{opacity:.8;transform:scaleY(1.1);}}
      `}</style>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="neuro-hero">

        {/* bg photo — hospital / brain scan room */}
        <img
          className="neuro-hero-bg"
          src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
        />
        <div className="neuro-hero-veil" />

        {/* purple glow blobs */}
        <div className="neuro-blob" style={{
          width:500,height:500,
          top:-200,right:-120,
          background:'radial-gradient(circle,rgba(139,92,246,.14) 0%,transparent 70%)',
        }}/>
        <div className="neuro-blob" style={{
          width:300,height:300,
          bottom:80,left:'30%',
          background:'radial-gradient(circle,rgba(59,55,160,.2) 0%,transparent 70%)',
        }}/>

        <div className="neuro-rule"/>
        <span className="neuro-wm" aria-hidden="true">Neuro</span>

        {/* breadcrumb */}
        <div className="neuro-hero-top">
          <nav aria-label="Breadcrumb">
            <ol className="nb" style={{
              display:'flex',alignItems:'center',gap:6,
              listStyle:'none',margin:0,padding:0,
              fontSize:'12px',fontWeight:400,
              color:'rgba(255,255,255,.35)',
            }}>
              <li><Link href="/" style={{color:'rgba(255,255,255,.35)',textDecoration:'none'}}>Home</Link></li>
              <li><ChevronRight size={12}/></li>
              <li><Link href="/services" style={{color:'rgba(255,255,255,.35)',textDecoration:'none'}}>Services</Link></li>
              <li><ChevronRight size={12}/></li>
              <li style={{color:'rgba(255,255,255,.65)'}}>Neurology</li>
            </ol>
          </nav>
        </div>

        {/* main content */}
        <div className="neuro-hero-inner">

          {/* left */}
          <div>
            <div className="neuro-tag nb">
              <span style={{
                display:'inline-block',width:6,height:6,borderRadius:'50%',
                background:'rgba(200,185,255,.8)',
              }}/>
              Department of Neurology &amp; Neurosurgery
            </div>

            <div style={{
              width:72,height:72,borderRadius:20,
              background:'rgba(139,92,246,.2)',
              border:'1px solid rgba(139,92,246,.3)',
              display:'flex',alignItems:'center',justifyContent:'center',
              marginBottom:24,fontSize:34,
            }}>
              🧠
            </div>

            <h1 className="nd" style={{
              fontSize:'clamp(2.6rem,5.5vw,5rem)',
              fontWeight:400,lineHeight:1.04,
              letterSpacing:'-0.02em',color:'#fff',
              marginBottom:10,
            }}>
              Precision Care for<br/>
              <em style={{fontStyle:'italic',color:'rgba(200,185,255,.85)',fontWeight:400}}>
                Brain &amp; Nervous System
              </em>
            </h1>

            <p className="nb" style={{
              fontSize:'.95rem',fontWeight:300,lineHeight:1.9,
              color:'rgba(255,255,255,.45)',maxWidth:430,marginBottom:36,
            }}>
              Our Neurology and Neurosurgery team delivers expert, compassionate care
              for complex neurological conditions using the latest diagnostic and
              treatment technologies available.
            </p>

            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/appointments" className="nbtn-coral">
                <Calendar size={15}/> Book a Consultation
              </Link>
              <Link href="/contact" className="nbtn-outline">
                <Phone size={15}/> Call Us Now
              </Link>
            </div>
          </div>

          {/* right: floating stat cards */}
          <div className="neuro-hero-right" style={{display:'flex',flexDirection:'column',gap:12}}>
            {stats.map(({value,label,icon:Icon})=>(
              <div key={label} className="neuro-hero-stat">
                <div style={{
                  width:42,height:42,borderRadius:12,flexShrink:0,
                  background:'rgba(139,92,246,.2)',
                  border:'1px solid rgba(139,92,246,.3)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color:'rgba(200,185,255,.85)',
                }}>
                  <Icon size={18}/>
                </div>
                <div>
                  <div className="nd" style={{
                    fontSize:'1.4rem',fontWeight:700,
                    color:'white',lineHeight:1,marginBottom:2,
                    letterSpacing:'-0.02em',
                  }}>{value}</div>
                  <div className="nb" style={{
                    fontSize:'10px',fontWeight:500,
                    letterSpacing:'.12em',textTransform:'uppercase',
                    color:'rgba(255,255,255,.3)',
                  }}>{label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* wave bottom */}
        <svg className="neuro-wave" viewBox="0 0 1440 60" preserveAspectRatio="none"
          style={{height:60,position:'relative',zIndex:4}}>
          <path d="M0,60 C480,8 960,52 1440,18 L1440,60 Z" fill="#F0EEFF"/>
        </svg>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════ */}
      <div className="neuro-stats">
        <div className="neuro-stats-grid">
          {stats.map(({value,label,icon:Icon})=>(
            <div key={label} className="neuro-stat-cell">
              <div style={{
                width:44,height:44,borderRadius:12,
                background:'rgba(139,92,246,.15)',
                display:'flex',alignItems:'center',justifyContent:'center',
                color:'rgba(180,160,255,.8)',marginBottom:12,
              }}>
                <Icon size={19}/>
              </div>
              <div className="nd" style={{
                fontSize:'clamp(1.6rem,2.5vw,2.2rem)',fontWeight:700,
                color:'white',lineHeight:1,marginBottom:6,letterSpacing:'-0.02em',
              }}>{value}</div>
              <div className="nb" style={{
                fontSize:'10px',fontWeight:500,letterSpacing:'.14em',
                textTransform:'uppercase',color:'rgba(255,255,255,.28)',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

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