import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

const highlights = [
  "NABH Accredited Hospital",
  "300+ Bed Multi-speciality Facility",
  "40+ Medical Specializations",
  "Advanced ICU & NICU",
  "State-of-the-art Operation Theatres",
  "24/7 Emergency & Ambulance Services",
];

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Established", value: SITE_CONFIG.established, color: "bg-primary-600" },
                  { label: "Specializations", value: "40+", color: "bg-secondary-600" },
                  { label: "Expert Doctors", value: "150+", color: "bg-accent-500" },
                  { label: "Beds", value: "300+", color: "bg-slate-700" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-5 shadow-card text-center">
                    <div className={`text-3xl font-heading font-bold text-white ${item.color} rounded-xl p-2 mb-2`}>
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
              {/* Accreditation badge */}
              <div className="mt-6 bg-primary-600 text-white rounded-2xl p-4 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <div className="font-bold text-sm">NABH Accredited</div>
                  <div className="text-primary-200 text-xs">National Accreditation Board for Hospitals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <SectionTitle
              badge="About Us"
              title="Trusted Healthcare"
              highlight="Since 1998"
              subtitle={`${SITE_CONFIG.name} has been a beacon of hope and healing for the people of Latur and surrounding districts. With cutting-edge technology and a team of expert doctors, we provide compassionate, world-class healthcare.`}
            />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={17} className="text-secondary-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
