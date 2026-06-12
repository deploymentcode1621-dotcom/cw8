import FacilitiesClient from "./FacilitiesClient";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Facilities | World-Class Infrastructure",
  description:
    "Explore state-of-the-art facilities at Patil Multispeciality Hospital — ICU, NICU, Cath Lab, Operation Theatres, Blood Bank, 24/7 Pharmacy and more.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  return <FacilitiesClient />;
}