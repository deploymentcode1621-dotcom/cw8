import Breadcrumb from "@/components/common/Breadcrumb";
import SectionTitle from "@/components/common/SectionTitle";
import DoctorCard from "@/components/doctors/DoctorCard";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { doctors } from "@/data/doctors";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Our Doctors | Expert Specialists",
  description: "Meet our team of 150+ expert doctors and specialists at Patil Multispeciality Hospital, Latur.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Our Doctors", href: "/doctors" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Meet Our <span className="text-primary-300">Expert Doctors</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              150+ experienced specialists dedicated to providing the highest quality care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
