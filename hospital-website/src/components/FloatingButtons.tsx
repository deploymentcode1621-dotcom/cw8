"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">

      {/* Phone */}
      <a
        href="tel:+918001234567"
        className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-110 transition duration-300"
      >
        <Phone size={28} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:scale-110 transition duration-300"
      >
        <MessageCircle size={28} />
      </a>

      {/* Location */}
      <a
        href="https://maps.google.com/?q=Patil+Hospital"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.6)] hover:scale-110 transition duration-300"
      >
        <MapPin size={28} />
      </a>

    </div>
  );
}