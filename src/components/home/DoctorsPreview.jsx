import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import DoctorCard from "@/components/doctors/DoctorCard";
import { doctors } from "@/data/doctors";
import { ArrowRight } from "lucide-react";

export default function DoctorsPreview() {
  const featuredDoctors = doctors.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            badge="Our Team"
            title="Expert"
            highlight="Specialists"
            subtitle="150+ experienced doctors across all specializations, committed to providing the best care."
          />
          <Link href="/doctors" className="btn-secondary flex-shrink-0">
            Meet All Doctors
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
