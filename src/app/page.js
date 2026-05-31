import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import EmergencySection from "@/components/home/EmergencySection";
import ServicesPreview from "@/components/home/ServicesPreview";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import Testimonials from "@/components/home/Testimonials";
import GallerySection from "@/components/home/GallerySection";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import JsonLd from "@/components/seo/JsonLd";
import { hospitalJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Best Multispeciality Hospital in Latur | Patil Hospital",
  description:
    "Patil Multispeciality Hospital — 150+ expert doctors, 40+ specializations, 24/7 emergency services. NABH accredited hospital in Latur, Maharashtra.",
  keywords: ["hospital latur", "best hospital latur", "multispeciality hospital maharashtra"],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={hospitalJsonLd()} />
      <HeroSection />
      <EmergencySection />
      <AboutPreview />
      <ServicesPreview />
      <DoctorsPreview />
      <FacilitiesPreview />
      <Testimonials />
      <GallerySection />
      <AppointmentCTA />
    </>
  );
}
