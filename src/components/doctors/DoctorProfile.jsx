import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Clock,
  Globe,
  Star,
  Calendar,
  Phone,
  CheckCircle,
  Stethoscope,
} from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

export default function DoctorProfile({ doctor }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Sidebar */}
      <div className="lg:col-span-1">
        {/* Doctor Card */}
        <div className="card p-6 text-center mb-6">
          <div className="relative w-36 h-36 mx-auto mb-4 rounded-2xl overflow-hidden bg-primary-100 flex items-center justify-center">
            {doctor.image ? (
              <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
            ) : (
              <span className="text-7xl">👨‍⚕️</span>
            )}
          </div>
          <h1 className="font-heading font-bold text-slate-800 text-xl mb-1">
            {doctor.name}
          </h1>
          <p className="text-primary-600 font-semibold text-sm mb-1">
            {doctor.designation}
          </p>
          <p className="text-slate-500 text-sm mb-3">{doctor.department}</p>
          {doctor.available && (
            <span className="badge-green mb-4 inline-flex">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse mr-1" />
              Available for Consultation
            </span>
          )}
          <div className="border-t border-slate-100 pt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock size={14} className="text-primary-500" />
              {doctor.timing}
            </div>
            {doctor.consultationFee && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="text-primary-500 font-bold">₹</span>
                Consultation Fee: ₹{doctor.consultationFee}
              </div>
            )}
          </div>
        </div>

        {/* Book Appointment */}
        <div className="bg-primary-600 text-white rounded-2xl p-6 mb-6">
          <h3 className="font-heading font-bold text-lg mb-3">Book Appointment</h3>
          <p className="text-primary-200 text-sm mb-4">
            Consult with {doctor.name.split(" ")[0]} today
          </p>
          <Link
            href={`/appointment?doctor=${doctor.slug}`}
            className="w-full bg-white text-primary-700 hover:bg-primary-50 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={16} />
            Book Now
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="w-full mt-2 border border-white/30 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call Hospital
          </a>
        </div>

        {/* Languages */}
        <div className="card p-5">
          <h3 className="font-heading font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
            <Globe size={15} className="text-primary-500" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {doctor.languages?.map((lang) => (
              <span key={lang} className="badge-blue text-xs">{lang}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* About */}
        <div className="card p-6">
          <h2 className="font-heading font-bold text-slate-800 text-xl mb-4 flex items-center gap-2">
            <Stethoscope size={20} className="text-primary-600" />
            About Dr. {doctor.name.split(" ").slice(1).join(" ")}
          </h2>
          <p className="text-slate-600 leading-relaxed">{doctor.about}</p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">{doctor.experience}</div>
              <div className="text-xs text-slate-500 mt-1">Experience</div>
            </div>
            <div className="bg-secondary-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-secondary-700">
                {doctor.specialization?.length}+
              </div>
              <div className="text-xs text-slate-500 mt-1">Specializations</div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="card p-6">
          <h2 className="font-heading font-bold text-slate-800 text-xl mb-4 flex items-center gap-2">
            <Award size={20} className="text-primary-600" />
            Qualifications
          </h2>
          <div className="flex flex-wrap gap-2">
            {doctor.qualification.split(", ").map((qual) => (
              <span key={qual} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                {qual}
              </span>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="card p-6">
          <h2 className="font-heading font-bold text-slate-800 text-xl mb-4">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {doctor.specialization?.map((spec) => (
              <div key={spec} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        {doctor.awards?.length > 0 && (
          <div className="card p-6">
            <h2 className="font-heading font-bold text-slate-800 text-xl mb-4 flex items-center gap-2">
              <Star size={20} className="text-yellow-500 fill-yellow-500" />
              Awards & Recognition
            </h2>
            <div className="space-y-3">
              {doctor.awards.map((award, i) => (
                <div key={i} className="flex items-start gap-3 bg-yellow-50 rounded-xl p-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-sm text-slate-700">{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
