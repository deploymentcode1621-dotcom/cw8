import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Neurology Department',
  description: "MediCare Plus Neurology provides expert care for brain and nervous system disorders — from stroke management to epilepsy, Parkinson's, and complex spine conditions.",
  alternates: { canonical: 'https://www.medicareplus.com/services/neurology' },
}

export default function NeurologyPage() {
  return (
    <ServicePageTemplate
      icon="🧠"
      name="Neurology"
      tagline="Precision Care for Brain & Nervous System"
      description="Our Neurology and Neurosurgery team delivers expert, compassionate care for complex neurological conditions using the latest diagnostic and treatment technologies."
      heroGradient="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-700"
      accentColor="bg-purple-600"
      stats={[
        { value: '5K+', label: 'Neuro Cases Annually' },
        { value: '12+', label: 'Neurologists' },
        { value: '3T', label: 'MRI Scanner' },
        { value: '24/7', label: 'Stroke Unit' },
      ]}
      conditions={[
        { name: 'Stroke & TIA', desc: 'Rapid tPA thrombolysis and mechanical thrombectomy in our dedicated 24/7 stroke unit.' },
        { name: 'Epilepsy', desc: 'Comprehensive epilepsy management including EEG monitoring, medication, and surgical options.' },
        { name: "Parkinson's Disease", desc: 'DBS therapy, medication management, and multidisciplinary support for movement disorders.' },
        { name: 'Multiple Sclerosis', desc: 'Disease-modifying therapies, MRI monitoring, and rehabilitation for MS patients.' },
        { name: 'Headache & Migraine', desc: 'Botox therapy, preventive medications, and lifestyle interventions for chronic headache.' },
        { name: 'Dementia & Memory Disorders', desc: 'Memory clinic services with cognitive assessment, diagnosis, and family support.' },
      ]}
      treatments={[
        'MRI Brain & Spine', 'EEG & Video EEG', 'Nerve Conduction Studies', 'Botox for Migraine',
        'Deep Brain Stimulation', 'Thrombolysis for Stroke', 'Lumbar Puncture', 'Neuro-rehabilitation',
        'Carotid Endarterectomy', 'Brain Tumour Resection', 'Spinal Cord Stimulation',
      ]}
      doctors={[
        { name: 'Dr. Marcus Chen', exp: '15 yrs', initials: 'MC' },
        { name: 'Dr. Anita Verma', exp: '11 yrs', initials: 'AV' },
        { name: 'Dr. Thomas Adeyemi', exp: '9 yrs', initials: 'TA' },
      ]}
      faqs={[
        { q: 'What are the warning signs of a stroke?', a: 'Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Other signs include sudden severe headache, vision loss, and confusion. Call 911 immediately.' },
        { q: 'Is epilepsy curable?', a: 'Many people with epilepsy achieve complete seizure control with medication. For drug-resistant cases, surgical options or neuromodulation (VNS, DBS) can significantly reduce seizure frequency.' },
        { q: 'How is Parkinson\'s disease treated?', a: "Parkinson's is managed with dopaminergic medications, physiotherapy, speech therapy, and for advanced cases, Deep Brain Stimulation (DBS), which can dramatically improve quality of life." },
      ]}
    />
  )
}
