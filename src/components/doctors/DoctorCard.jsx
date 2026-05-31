import Link from "next/link";
import Image from "next/image";
import { Clock, Award, ArrowRight } from "lucide-react";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card group overflow-hidden hover:-translate-y-1">
      {/* Doctor Image */}
      <div className="relative h-52 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden">
        {doctor.image ? (
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-6xl">👨‍⚕️</div>
        )}
        {doctor.available && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Available
          </div>
        )}
      </div>

      {/* Doctor Info */}
      <div className="p-5">
        <span className="badge-blue mb-2 text-xs">{doctor.department}</span>
        <h3 className="font-heading font-bold text-slate-800 text-base mb-0.5">
          {doctor.name}
        </h3>
        <p className="text-sm text-slate-500 mb-3">{doctor.designation}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Award size={13} className="text-primary-500" />
            {doctor.qualification.split(",")[0]}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Clock size={13} className="text-secondary-500" />
            {doctor.experience} Experience
          </div>
        </div>

        <Link
          href={`/doctors/${doctor.slug}`}
          className="w-full btn-primary text-sm py-2.5 justify-center"
        >
          View Profile
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
