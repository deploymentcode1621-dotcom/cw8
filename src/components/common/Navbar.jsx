"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/utils/constants";
import { cn } from "@/utils/cn";
import {
  Menu,
  X,
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

  // Only homepage gets the transparent-over-hero treatment
  const isHome = pathname === "/";

  // Transparent when: on homepage AND not scrolled
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  // ─── Color helpers based on transparent state ───────────────
  const logoTextColor   = isTransparent ? "#ffffff"         : "#1e293b"; // slate-800
  const logoSubColor    = isTransparent ? "rgba(228,185,106,0.90)" : "#0d3d4a"; // gold : teal
  const navLinkBase     = isTransparent ? "text-white/80 hover:text-white hover:bg-white/10"
                                        : "text-slate-700 hover:text-primary-600 hover:bg-slate-50";
  const navLinkActive   = isTransparent ? "text-white bg-white/15"
                                        : "text-primary-600 bg-primary-50";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent border-b border-transparent"
            : "bg-white shadow-md border-b border-slate-100"
        )}
      >
        {/* Inner container */}
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            {/* <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300"
                style={{
                  background: isTransparent
                    ? "rgba(200,151,58,0.20)"
                    : "#0d3d4a",
                  border: isTransparent
                    ? "1.5px solid rgba(200,151,58,0.45)"
                    : "none",
                }}
              >
                <span
                  className="font-bold text-lg md:text-xl transition-colors duration-300"
                  style={{ color: isTransparent ? "#e4b96a" : "#ffffff" }}
                >
                  P
                </span>
              </div>
              <div>
                <div
                  className="font-heading font-bold text-base md:text-lg leading-tight transition-colors duration-300"
                  style={{ color: logoTextColor }}
                >
                  Patil Hospital
                </div>
                <div
                  className="text-xs font-medium transition-colors duration-300"
                  style={{ color: logoSubColor }}
                >
                  Multispeciality
                </div>
              </div>
            </Link> */}
            <Link href="/" className="flex items-center gap-3 group">

  <Image
    src="/images/Hospital-logo.png"
    alt="Patil Hospital Logo"
    width={55}
    height={55}
    className="object-contain"
    priority
  />

  <div>
    <h1
      className="font-heading font-bold text-lg leading-tight transition-colors duration-300"
      style={{ color: logoTextColor }}
    >
      Patil Multispeciality Hospital
    </h1>

    <p
      className="text-xs font-medium transition-colors duration-300"
      style={{ color: logoSubColor }}
    >
      Caring for Life, Committed to Excellence
    </p>
  </div>

</Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative">
                  {link.children ? (
                    <>
                      <button
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                          pathname.startsWith(link.href) ? navLinkActive : navLinkBase
                        )}
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.href ? null : link.href)
                        }
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            activeDropdown === link.href ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {activeDropdown === link.href && (
                        <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50">
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
                        "px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                        pathname === link.href ? navLinkActive : navLinkBase
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* ── CTA Buttons ── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Emergency — always red, style adapts */}
              <a
                href={`tel:${SITE_CONFIG.emergencyPhone}`}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200",
                  isTransparent
                    ? "bg-red-500/20 border border-red-400/40 text-red-300 hover:bg-red-500/30"
                    : "btn-emergency"
                )}
              >
                <AlertCircle size={15} />
                Emergency
              </a>

              {/* Book Appointment — gold on transparent, primary on white */}
              <Link
                href="/appointment"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200",
                  isTransparent
                    ? "text-[#0a1f26] shadow-md hover:brightness-105"
                    : "btn-primary"
                )}
                style={
                  isTransparent
                    ? { background: "linear-gradient(135deg, #c8973a 0%, #b8862e 100%)" }
                    : {}
                }
              >
                <Calendar size={15} />
                Book Appointment
              </Link>
            </div>

            {/* ── Mobile menu toggle ── */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-slate-700 hover:bg-slate-100"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
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

      {/*
        ── IMPORTANT: Add this to your hero section's <section> top padding ──
        Since the navbar is now `fixed` (not sticky), the hero needs to
        account for the navbar height so content isn't hidden underneath.
        Add pt-20 (80px) to your hero section, or add this global style:
      */}
      <style>{`
        /* Compensate for fixed navbar on non-hero pages */
        body:not(.is-home) main > *:first-child {
          padding-top: 80px;
        }
      `}</style>
    </>
  );
}