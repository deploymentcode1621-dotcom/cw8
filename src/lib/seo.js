import { SITE_CONFIG } from "@/utils/constants";

/**
 * Generate metadata for a page
 */
export function generateMetadata({ title, description, path = "", image = "/images/og-image.jpg" }) {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Generate JSON-LD for Hospital Organization
 */
export function hospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    description:
      "Patil Multispeciality Hospital provides world-class healthcare with expert doctors, advanced technology, and compassionate care.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Hospital Road",
      addressLocality: "Latur",
      addressRegion: "Maharashtra",
      postalCode: "413512",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.4088",
      longitude: "76.5604",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasMap: SITE_CONFIG.mapEmbedUrl,
    sameAs: Object.values(SITE_CONFIG.socialLinks),
    numberOfBeds: 300,
    medicalSpecialty: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Oncology",
    ],
  };
}

/**
 * Generate JSON-LD for a Doctor
 */
export function doctorJsonLd(doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: `${SITE_CONFIG.url}${doctor.image}`,
    url: `${SITE_CONFIG.url}/doctors/${doctor.slug}`,
    description: doctor.about,
    medicalSpecialty: doctor.department,
    worksFor: {
      "@type": "Hospital",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    hasCredential: doctor.qualification,
    knowsAbout: doctor.specialization,
  };
}

/**
 * Generate JSON-LD for Breadcrumb
 */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}

/**
 * Generate JSON-LD for FAQ
 */
export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
