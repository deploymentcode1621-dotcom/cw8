import Breadcrumb from "@/components/common/Breadcrumb";
import FacilityCard from "@/components/facilities/FacilityCard";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { facilities } from "@/data/facilities";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Facilities | World-Class Infrastructure",
  description: "Explore state-of-the-art facilities at Patil Multispeciality Hospital — ICU, NICU, Cath Lab, Operation Theatres, Blood Bank, 24/7 Pharmacy and more.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Facilities", href: "/facilities" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              World-Class <span className="text-primary-300">Facilities</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              State-of-the-art infrastructure and equipment to deliver the highest quality of care.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((f) => <FacilityCard key={f.id} facility={f} />)}
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
