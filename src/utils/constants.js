export const SITE_CONFIG = {
  name: "Patil Multispeciality Hospital",
  shortName: "Patil Hospital",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://patilhospital.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91-9876543210",
  emergencyPhone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE || "+91-9876543211",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@patilhospital.com",
  address:
    process.env.NEXT_PUBLIC_ADDRESS ||
    "Patil Multispecility Hospital in Barshi Road, Latur",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919876543210",
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://maps.google.com/maps?q=latur+hospital&output=embed",
  socialLinks: {
    facebook: "https://facebook.com/patilhospital",
    instagram: "https://instagram.com/patilhospital",
    twitter: "https://twitter.com/patilhospital",
    youtube: "https://youtube.com/patilhospital",
    linkedin: "https://linkedin.com/company/patilhospital",
  },
  established: "1998",
  tagline: "Caring for Life, Committed to Excellence",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cardiology", href: "/services/cardiology" },
      { label: "Neurology", href: "/services/neurology" },
      { label: "Orthopedics", href: "/services/orthopedics" },
      { label: "Pediatrics", href: "/services/pediatrics" },
      { label: "Gynecology", href: "/services/gynecology" },
      { label: "Oncology", href: "/services/oncology" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    label: "Doctors",
    href: "/doctors",
  },
  {
    label: "Facilities",
    href: "/facilities",
  },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { label: "Years of Excellence", value: "25+", icon: "calendar" },
  { label: "Expert Doctors", value: "150+", icon: "user-md" },
  { label: "Happy Patients", value: "1L+", icon: "smile" },
  { label: "Specializations", value: "40+", icon: "stethoscope" },
];

export const EMERGENCY_INFO = {
  phone: "+91-9876543211",
  ambulance: "+91-9876543212",
  icu: "24/7 Available",
  message: "Emergency services available round the clock. Call us immediately.",
};
