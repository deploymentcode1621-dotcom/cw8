"use client";

import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-5">

      {/* Google Maps */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Patil+Hospital"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Directions"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
          alt="Google Maps"
          className="h-9 w-9"
        />
      </a>

      {/* Phone */}
      <a
        href="tel:+918001234567"
        aria-label="Call Hospital"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4285F4] text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone size={30} strokeWidth={2.2} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918001234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="h-9 w-9"
        />
      </a>
    </div>
  );
}