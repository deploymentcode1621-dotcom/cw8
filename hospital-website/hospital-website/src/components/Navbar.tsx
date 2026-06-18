'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image"

const services = [
  { name: 'Cardiology', href: '/services/cardiology', icon: '❤️' },
  { name: 'Neurology', href: '/services/neurology', icon: '🧠' },
  { name: 'Orthopedics', href: '/services/orthopedics', icon: '🦴' },
  { name: 'Pediatrics', href: '/services/pediatrics', icon: '👶' },
  { name: 'Gynecology', href: '/services/gynecology', icon: '🌸' },
  { name: 'Oncology', href: '/services/oncology', icon: '🎗️' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services/cardiology', hasDropdown: true },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const isHeroPage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = isHeroPage && !isScrolled

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
        }`}
      >
        {!isTransparent && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
        )}

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`w-12 h-12 overflow-hidden rounded-xl group-hover:scale-105 transition-all duration-300 ${
                  isTransparent
                    ? 'bg-white/10 backdrop-blur-md border border-white/25 ring-1 ring-white/10 shadow-lg shadow-black/10'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <Image
                  src="/photo/Hospital-logo.png"
                  alt="Patil Hospital Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <span
                  className={`font-display font-bold text-lg leading-tight block transition-colors duration-300 ${
                    isTransparent ? 'text-white' : 'text-navy'
                  }`}
                >
                  Patil Hospital
                </span>
                <span
                  className={`text-xs tracking-wide transition-colors duration-300 ${
                    isTransparent ? 'text-white/60' : 'text-gray-400'
                  }`}
                >
                  HOSPITAL & MEDICAL CENTER
                </span>
              </div>
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-medium flex items-center gap-1 rounded-lg transition-all duration-200 ${
                        isTransparent
                          ? 'text-white/90 hover:text-white hover:bg-white/15'
                          : pathname.startsWith('/services')
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 animate-fade-in">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                              pathname === s.href
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="text-base">{s.icon}</span>
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isTransparent
                        ? pathname === link.href
                          ? 'text-white bg-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/15'
                        : pathname === link.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* ── CTA buttons ── */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Emergency number */}
              <a
                href="tel:+918001234567"
                className={`flex items-center gap-2.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                  isTransparent
                    ? 'bg-red-500/80 hover:bg-red-500 text-white border border-red-400/40 backdrop-blur-sm'
                    : 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-100'
                }`}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] font-medium opacity-80 tracking-wide uppercase">Emergency</span>
                  <span className="text-sm font-bold tracking-tight">+91 800 123 4567</span>
                </span>
              </a>

              {/* Book Appointment */}
              {isTransparent ? (
                <Link
                  href="/contact"
                  className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-white text-primary-800 hover:bg-white/90 transition-all duration-200 shadow-md"
                >
                  Book Appointment
                </Link>
              ) : (
                <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                  Book Appointment
                </Link>
              )}
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isTransparent ? 'hover:bg-white/15 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {isMobileOpen && (
          <div
            className={`lg:hidden border-t px-4 pb-6 pt-4 ${
              isTransparent
                ? 'bg-black/60 backdrop-blur-md border-white/10'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isTransparent
                            ? 'text-white/90 hover:bg-white/10'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Services
                        <svg
                          className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                                isTransparent
                                  ? 'text-white/80 hover:bg-white/10 hover:text-white'
                                  : 'text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                              }`}
                            >
                              <span>{s.icon}</span> {s.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isTransparent
                          ? pathname === link.href
                            ? 'bg-white/20 text-white'
                            : 'text-white/90 hover:bg-white/10 hover:text-white'
                          : pathname === link.href
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="tel:+918001234567"
                  className="flex items-center justify-center gap-2 w-full text-sm font-semibold px-5 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-colors"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  Emergency Call
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for non-hero pages only */}
      {!isHeroPage && <div className="h-16 md:h-20" />}
    </>
  )
}