import Link from "next/link";
import { Home, Phone, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="container-custom text-center">
        <div className="text-8xl mb-6">🏥</div>
        <h1 className="font-heading font-bold text-6xl text-primary-700 mb-3">404</h1>
        <h2 className="font-heading font-bold text-2xl text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={17} />
            Go Home
          </Link>
          <Link href="/appointment" className="btn-secondary">
            <Calendar size={17} />
            Book Appointment
          </Link>
          <a href={`tel:${SITE_CONFIG.emergencyPhone}`} className="btn-emergency">
            <Phone size={17} />
            Emergency
          </a>
        </div>
      </div>
    </section>
  );
}
