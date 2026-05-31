"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AppointmentSticky() {
  const pathname = usePathname();
  if (pathname === "/appointment") return null;

  return (
    <div className="appointment-sticky">
      <Link
        href="/appointment"
        className="btn-primary shadow-glow text-sm"
        aria-label="Book an appointment"
      >
        <Calendar size={16} />
        <span className="hidden sm:inline">Book Appointment</span>
      </Link>
    </div>
  );
}
