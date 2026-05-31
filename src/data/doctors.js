export const doctors = [
  {
    id: 1,
    slug: "dr-rajesh-patil-cardiologist",
    name: "Dr. Rajesh Patil",
    designation: "Senior Cardiologist & HOD",
    department: "Cardiology",
    experience: "20+ Years",
    qualification: "MBBS, MD (Cardiology), DM (Cardiology), FACC",
    specialization: [
      "Interventional Cardiology",
      "Echocardiography",
      "Heart Failure Management",
      "Cardiac Catheterization",
    ],
    image: "/images/doctors/dr-rajesh-patil.jpg",
    available: true,
    timing: "Mon-Sat: 9:00 AM - 2:00 PM",
    languages: ["English", "Hindi", "Marathi"],
    awards: [
      "Best Cardiologist Award 2022 - Maharashtra Medical Association",
      "Excellence in Healthcare 2020",
    ],
    about:
      "Dr. Rajesh Patil is a highly experienced cardiologist with over 20 years of expertise in interventional cardiology and complex cardiac procedures. He has successfully performed over 5000 cardiac procedures and is known for his patient-centric approach.",
    consultationFee: 800,
  },
  {
    id: 2,
    slug: "dr-priya-sharma-neurologist",
    name: "Dr. Priya Sharma",
    designation: "Consultant Neurologist",
    department: "Neurology",
    experience: "15+ Years",
    qualification: "MBBS, MD (Neurology), DM (Neurology)",
    specialization: [
      "Stroke Management",
      "Epilepsy",
      "Movement Disorders",
      "Neuromuscular Diseases",
    ],
    image: "/images/doctors/dr-priya-sharma.jpg",
    available: true,
    timing: "Mon-Fri: 10:00 AM - 4:00 PM",
    languages: ["English", "Hindi", "Marathi"],
    awards: ["Young Neurologist Award 2019"],
    about:
      "Dr. Priya Sharma is a renowned neurologist specializing in stroke management and epilepsy treatment. She has been instrumental in establishing the stroke unit at Patil Hospital.",
    consultationFee: 700,
  },
  {
    id: 3,
    slug: "dr-suresh-kulkarni-orthopedic",
    name: "Dr. Suresh Kulkarni",
    designation: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: "18+ Years",
    qualification: "MBBS, MS (Ortho), DNB, MRCS",
    specialization: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Arthroscopy",
    ],
    image: "/images/doctors/dr-suresh-kulkarni.jpg",
    available: true,
    timing: "Tue-Sun: 11:00 AM - 5:00 PM",
    languages: ["English", "Hindi", "Marathi"],
    awards: ["Excellence in Orthopedic Surgery 2021"],
    about:
      "Dr. Suresh Kulkarni is an expert orthopedic surgeon with specialization in minimally invasive joint replacement surgeries. He has performed over 3000 successful joint replacement procedures.",
    consultationFee: 700,
  },
  {
    id: 4,
    slug: "dr-anita-desai-gynecologist",
    name: "Dr. Anita Desai",
    designation: "Senior Gynecologist & Obstetrician",
    department: "Gynecology & Obstetrics",
    experience: "22+ Years",
    qualification: "MBBS, MS (OB-GYN), FRCOG",
    specialization: [
      "High-Risk Pregnancy",
      "Laparoscopic Surgery",
      "Infertility Treatment",
      "Menopause Management",
    ],
    image: "/images/doctors/dr-anita-desai.jpg",
    available: true,
    timing: "Mon-Sat: 9:00 AM - 1:00 PM",
    languages: ["English", "Hindi", "Marathi"],
    awards: ["Best Gynecologist Award 2023"],
    about:
      "Dr. Anita Desai is a distinguished gynecologist with 22 years of experience in managing complex obstetric cases and gynecological surgeries.",
    consultationFee: 600,
  },
  {
    id: 5,
    slug: "dr-vikram-joshi-pediatrician",
    name: "Dr. Vikram Joshi",
    designation: "Senior Pediatrician & Neonatologist",
    department: "Pediatrics & Neonatology",
    experience: "16+ Years",
    qualification: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
    specialization: [
      "Neonatal Care",
      "Pediatric Critical Care",
      "Developmental Pediatrics",
      "Pediatric Nutrition",
    ],
    image: "/images/doctors/dr-vikram-joshi.jpg",
    available: true,
    timing: "Mon-Sat: 8:00 AM - 12:00 PM",
    languages: ["English", "Hindi", "Marathi"],
    awards: ["Best Pediatrician Award 2022"],
    about:
      "Dr. Vikram Joshi is a compassionate pediatrician with expertise in neonatology and critical pediatric care. He has established the advanced NICU at Patil Hospital.",
    consultationFee: 600,
  },
  {
    id: 6,
    slug: "dr-meena-reddy-oncologist",
    name: "Dr. Meena Reddy",
    designation: "Senior Medical Oncologist",
    department: "Oncology",
    experience: "14+ Years",
    qualification: "MBBS, MD (Medicine), DM (Oncology), ECMO",
    specialization: [
      "Breast Cancer",
      "Gastrointestinal Oncology",
      "Chemotherapy",
      "Targeted Therapy",
    ],
    image: "/images/doctors/dr-meena-reddy.jpg",
    available: true,
    timing: "Mon-Fri: 10:00 AM - 3:00 PM",
    languages: ["English", "Hindi", "Telugu", "Marathi"],
    awards: ["Excellence in Oncology Care 2023"],
    about:
      "Dr. Meena Reddy is a dedicated oncologist with expertise in treating various types of cancer using the latest evidence-based protocols.",
    consultationFee: 900,
  },
];

export function getDoctorBySlug(slug) {
  return doctors.find((d) => d.slug === slug) || null;
}

export function getDoctorsByDepartment(department) {
  return doctors.filter((d) =>
    d.department.toLowerCase().includes(department.toLowerCase())
  );
}

export function getAllDoctorSlugs() {
  return doctors.map((d) => ({ slug: d.slug }));
}
