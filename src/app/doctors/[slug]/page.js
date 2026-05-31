import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import DoctorProfile from "@/components/doctors/DoctorProfile";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import JsonLd from "@/components/seo/JsonLd";
import { doctors, getDoctorBySlug, getAllDoctorSlugs } from "@/data/doctors";
import { doctorJsonLd } from "@/lib/seo";
import { SITE_CONFIG } from "@/utils/constants";

export async function generateStaticParams() {
  return getAllDoctorSlugs();
}

export async function generateMetadata({ params }) {
  const doctor = getDoctorBySlug(params.slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} - ${doctor.designation} | ${SITE_CONFIG.name}`,
    description: `${doctor.name} is an expert ${doctor.department} specialist at ${SITE_CONFIG.name}. ${doctor.experience} of experience. Book appointment online.`,
    alternates: { canonical: `${SITE_CONFIG.url}/doctors/${doctor.slug}` },
  };
}

export default function DoctorPage({ params }) {
  const doctor = getDoctorBySlug(params.slug);
  if (!doctor) notFound();

  return (
    <>
      <JsonLd data={doctorJsonLd(doctor)} />
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: "Doctors", href: "/doctors" },
              { label: doctor.name, href: `/doctors/${doctor.slug}` },
            ]}
          />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <DoctorProfile doctor={doctor} />
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
