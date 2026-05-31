import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceCard from "@/components/services/ServiceCard";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { services } from "@/data/services";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Our Services | 40+ Medical Specializations",
  description: "Comprehensive medical services at Patil Multispeciality Hospital — Cardiology, Neurology, Orthopedics, Gynecology, Pediatrics, Oncology and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Services", href: "/services" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our <span className="text-primary-300">Medical Services</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              40+ specializations under one roof — comprehensive healthcare for your entire family.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
