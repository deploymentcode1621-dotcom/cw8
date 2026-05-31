"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/utils/constants";
import { cn } from "@/utils/cn";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  AlertCircle,
  Calendar,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-800 text-white text-sm py-1.5 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
            >
              <Phone size={13} />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-primary-400">|</span>
            <span className="text-primary-200">{SITE_CONFIG.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/appointment"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
            >
              <Calendar size={13} />
              <span>Book Appointment</span>
            </Link>
            <a
              href={`tel:${SITE_CONFIG.emergencyPhone}`}
              className="flex items-center gap-1.5 text-red-300 hover:text-red-200 transition-colors font-semibold"
            >
              <AlertCircle size={13} />
              <span>Emergency: {SITE_CONFIG.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg md:text-xl">P</span>
              </div>
              <div>
                <div className="font-heading font-bold text-slate-800 text-base md:text-lg leading-tight">
                  Patil Hospital
                </div>
                <div className="text-xs text-primary-600 font-medium">
                  Multispeciality
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              ref={dropdownRef}
            >
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative">
                  {link.children ? (
                    <>
                      <button
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                          pathname.startsWith(link.href)
                            ? "text-primary-600 bg-primary-50"
                            : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                        )}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.href ? null : link.href
                          )
                        }
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform",
                            activeDropdown === link.href ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {activeDropdown === link.href && (
                        <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-slate-100 py-1.5 z-50">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                        pathname === link.href
                          ? "text-primary-600 bg-primary-50"
                          : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.emergencyPhone}`}
                className="btn-emergency text-sm py-2 px-4"
              >
                <AlertCircle size={15} />
                Emergency
              </a>
              <Link href="/appointment" className="btn-primary text-sm py-2 px-4">
                <Calendar size={15} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="container-custom py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                      pathname === link.href
                        ? "text-primary-600 bg-primary-50"
                        : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.slice(0, -1).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 space-y-2 border-t border-slate-100">
                <a
                  href={`tel:${SITE_CONFIG.emergencyPhone}`}
                  className="btn-emergency w-full justify-center text-sm"
                >
                  <AlertCircle size={15} />
                  Emergency: {SITE_CONFIG.emergencyPhone}
                </a>
                <Link
                  href="/appointment"
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Calendar size={15} />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
