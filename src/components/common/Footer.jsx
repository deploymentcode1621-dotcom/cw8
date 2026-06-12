import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ArrowRight,
  Heart,
} from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
    { label: "Book Appointment", href: "/appointment" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Cardiology", href: "/services/cardiology" },
    { label: "Neurology", href: "/services/neurology" },
    { label: "Orthopedics", href: "/services/orthopedics" },
    { label: "Gynecology", href: "/services/gynecology" },
    { label: "Pediatrics", href: "/services/pediatrics" },
    { label: "Oncology", href: "/services/oncology" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-condition" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            {/* <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">
                  Patil Hospital
                </div>
                <div className="text-xs text-primary-400">
                  Multispeciality
                </div>
              </div>
            </Link> */}
            <Link href="/" className="flex items-center gap-3 mb-5">

  <Image
    src="/images/Hospital-logo.png"
    alt="Patil Hospital Logo"
    width={65}
    height={65}
    className="object-contain"
  />

  <div>
    <h2 className="font-heading font-bold text-white text-lg">
      Patil Multispeciality Hospital
    </h2>

    <p className="text-xs text-primary-400">
      Caring for Life, Committed to Excellence
    </p>
  </div>

</Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {SITE_CONFIG.tagline}. Providing world-class healthcare with compassionate care since {SITE_CONFIG.established}.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: SITE_CONFIG.socialLinks.facebook, label: "Facebook" },
                { icon: Instagram, href: SITE_CONFIG.socialLinks.instagram, label: "Instagram" },
                { icon: Twitter, href: SITE_CONFIG.socialLinks.twitter, label: "Twitter" },
                { icon: Youtube, href: SITE_CONFIG.socialLinks.youtube, label: "YouTube" },
                { icon: Linkedin, href: SITE_CONFIG.socialLinks.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-slate-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-400">{SITE_CONFIG.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors block"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.emergencyPhone}`}
                    className="text-sm text-red-400 hover:text-red-300 transition-colors block mt-0.5"
                  >
                    Emergency: {SITE_CONFIG.emergencyPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary-400 flex-shrink-0" />
                <div className="text-sm text-slate-400">
                  <div>OPD: Mon-Sat 8AM - 8PM</div>
                  <div className="text-green-400">Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.policies.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Made with <Heart size={11} className="text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
