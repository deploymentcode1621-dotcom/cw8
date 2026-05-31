import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import FacilityDetails from "@/components/facilities/FacilityDetails";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { getFacilityBySlug, getAllFacilitySlugs } from "@/data/facilities";
import { SITE_CONFIG } from "@/utils/constants";

export async function generateStaticParams() {
  return getAllFacilitySlugs();
}

export async function generateMetadata({ params }) {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) return {};
  return {
    title: `${facility.name} | ${SITE_CONFIG.name}`,
    description: facility.description,
    alternates: { canonical: `${SITE_CONFIG.url}/facilities/${facility.slug}` },
  };
}

export default function FacilityPage({ params }) {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: "Facilities", href: "/facilities" },
              { label: facility.name, href: `/facilities/${facility.slug}` },
            ]}
          />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3">{facility.name}</h1>
            <p className="text-primary-200 text-lg">{facility.shortDesc}</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <FacilityDetails facility={facility} />
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
