export const facilities = [
  {
    id: 1,
    slug: "icu",
    name: "Intensive Care Unit (ICU)",
    shortDesc: "State-of-the-art ICU with 24/7 monitoring",
    description:
      "Our ICU is equipped with the latest critical care equipment and staffed by experienced intensivists and critical care nurses around the clock.",
    image: "/images/facilities/icu.jpg",
    icon: "monitor",
    highlights: [
      "30-bed ICU",
      "Advanced monitoring systems",
      "Ventilator support",
      "Continuous nursing care",
    ],
    available: "24/7",
  },
  {
    id: 2,
    slug: "nicu",
    name: "NICU (Neonatal ICU)",
    shortDesc: "Level III NICU for critical newborn care",
    description:
      "Our Level III NICU provides the highest level of care for premature and critically ill newborns.",
    image: "/images/facilities/nicu.jpg",
    icon: "baby",
    highlights: [
      "Level III NICU",
      "Incubators & warmers",
      "Surfactant therapy",
      "Phototherapy units",
    ],
    available: "24/7",
  },
  {
    id: 3,
    slug: "operation-theater",
    name: "Operation Theatres",
    shortDesc: "10 modular OTs with ultra-clean environment",
    description:
      "Our operation theatres are equipped with the latest surgical equipment and maintain the highest standards of sterilization.",
    image: "/images/facilities/ot.jpg",
    icon: "scissors",
    highlights: [
      "10 Modular OTs",
      "Robotic surgery",
      "Laminar airflow",
      "Integrated monitors",
    ],
    available: "24/7 Emergency",
  },
  {
    id: 4,
    slug: "cath-lab",
    name: "Cardiac Cath Lab",
    shortDesc: "Advanced catheterization lab for cardiac procedures",
    description:
      "Our state-of-the-art Cardiac Catheterization Laboratory is equipped for both diagnostic and interventional cardiac procedures.",
    image: "/images/facilities/cath-lab.jpg",
    icon: "heart",
    highlights: [
      "Biplane Cath Lab",
      "Primary angioplasty",
      "IVUS capability",
      "FFR measurement",
    ],
    available: "24/7",
  },
  {
    id: 5,
    slug: "dialysis",
    name: "Dialysis Centre",
    shortDesc: "Modern dialysis unit with individual monitoring",
    description:
      "Our Dialysis Centre provides high-quality renal replacement therapy with personalized care.",
    image: "/images/facilities/dialysis.jpg",
    icon: "droplets",
    highlights: ["20 HD stations", "HDF capability", "Online monitoring", "Home HD training"],
    available: "6 Days a Week",
  },
  {
    id: 6,
    slug: "pharmacy",
    name: "24/7 Pharmacy",
    shortDesc: "Round-the-clock pharmacy with all medications",
    description:
      "Our in-house pharmacy stocks a comprehensive range of medications and is open 24 hours a day.",
    image: "/images/facilities/pharmacy.jpg",
    icon: "pill",
    highlights: [
      "24/7 availability",
      "All medications",
      "Home delivery",
      "Generic options",
    ],
    available: "24/7",
  },
  {
    id: 7,
    slug: "blood-bank",
    name: "Blood Bank",
    shortDesc: "Licensed blood bank with all blood components",
    description:
      "Our licensed Blood Bank maintains a ready supply of all blood groups and components.",
    image: "/images/facilities/blood-bank.jpg",
    icon: "droplet",
    highlights: [
      "All blood groups",
      "Component therapy",
      "Apheresis",
      "24/7 availability",
    ],
    available: "24/7",
  },
  {
    id: 8,
    slug: "ambulance",
    name: "Ambulance Services",
    shortDesc: "Advanced life support ambulances",
    description:
      "Our fleet of advanced life support ambulances is available 24/7 with trained paramedics.",
    image: "/images/facilities/ambulance.jpg",
    icon: "ambulance",
    highlights: [
      "ALS ambulances",
      "Trained paramedics",
      "GPS tracking",
      "Telemedicine support",
    ],
    available: "24/7",
  },
];

export function getFacilityBySlug(slug) {
  return facilities.find((f) => f.slug === slug) || null;
}

export function getAllFacilitySlugs() {
  return facilities.map((f) => ({ slug: f.slug }));
}
