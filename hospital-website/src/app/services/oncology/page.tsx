import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Oncology & Cancer Centre',
  description: 'MediCare Plus Cancer Centre provides multidisciplinary cancer care — from early detection to advanced chemotherapy, radiation, and surgical oncology — with full psychosocial support.',
  alternates: { canonical: 'https://www.medicareplus.com/services/oncology' },
}

export default function OncologyPage() {
  return (
    <ServicePageTemplate
      icon="🎗️"
      name="Oncology"
      tagline="Fighting Cancer. Restoring Hope."
      description="Our comprehensive Cancer Centre brings together surgical oncologists, medical oncologists, radiation specialists, and psychosocial support teams in a unified, patient-centred approach."
      heroGradient="bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600"
      accentColor="bg-teal-600"
      stats={[
        { value: '3K+', label: 'Cancer Cases / Year' },
        { value: 'Tumour', label: 'Board Reviews Weekly' },
        { value: 'PET-CT', label: 'Advanced Imaging' },
        { value: '360°', label: 'Psychosocial Support' },
      ]}
      conditions={[
        { name: 'Breast Cancer', desc: 'Mammography screening, breast-conserving surgery, sentinel lymph node biopsy, and targeted therapy.' },
        { name: 'Lung Cancer', desc: 'CT-guided biopsy, VATS surgery, immunotherapy, and targeted molecular therapies.' },
        { name: 'Colorectal Cancer', desc: 'Colonoscopy screening, laparoscopic resection, and adjuvant chemotherapy protocols.' },
        { name: 'Head & Neck Cancers', desc: 'Multidisciplinary management combining surgery, radiation, and speech-language therapy.' },
        { name: 'Haematologic Cancers', desc: 'Leukaemia, lymphoma, and myeloma management including bone marrow transplantation.' },
        { name: 'Gynaecologic Oncology', desc: 'Cervical, ovarian, and endometrial cancer treated by dedicated gynaecologic oncologists.' },
      ]}
      treatments={[
        'Chemotherapy', 'Radiation Therapy (LINAC)', 'Immunotherapy', 'Targeted Therapy',
        'Bone Marrow Transplant', 'Surgical Oncology', 'PET-CT Imaging', 'Brachytherapy',
        'Palliative & Supportive Care', 'Cancer Genetic Counselling', 'Psycho-oncology Support',
      ]}
      doctors={[
        { name: 'Dr. Vivek Agarwal', exp: '17 yrs', initials: 'VA' },
        { name: 'Dr. Nadia Petrov', exp: '13 yrs', initials: 'NP' },
        { name: 'Dr. Samuel Boateng', exp: '10 yrs', initials: 'SB' },
      ]}
      faqs={[
        { q: 'What is a Tumour Board?', a: 'A Tumour Board is a weekly multidisciplinary meeting where oncologists, surgeons, radiologists, pathologists, and nurses collectively review complex cancer cases to determine the most effective treatment plan for each patient.' },
        { q: 'What is the difference between chemotherapy and immunotherapy?', a: 'Chemotherapy uses cytotoxic drugs to kill rapidly dividing cancer cells. Immunotherapy harnesses the body\'s own immune system to recognise and destroy cancer cells. Many patients now receive both as part of a combined regimen.' },
        { q: 'Is cancer screening available for healthy individuals?', a: 'Yes. We offer comprehensive cancer screening packages including mammography, colonoscopy, PSA testing, Pap smear, low-dose CT for lung cancer, and genetic risk assessment for hereditary cancers.' },
      ]}
    />
  )
}
