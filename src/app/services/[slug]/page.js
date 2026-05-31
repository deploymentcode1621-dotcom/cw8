import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetails from "@/components/services/ServiceDetails";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { SITE_CONFIG } from "@/utils/constants";

export async function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | ${SITE_CONFIG.name}`,
    description: `${service.description} Book an appointment with our ${service.name} specialists today.`,
    alternates: { canonical: `${SITE_CONFIG.url}/services/${service.slug}` },
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
            ]}
          />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3">
              {service.name}
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">{service.shortDesc}</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <ServiceDetails service={service} />
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
