import SectionTitle from "@/components/common/SectionTitle";

const galleryItems = [
  { id: 1, label: "ICU", emoji: "🏥", bg: "from-blue-100 to-blue-200" },
  { id: 2, label: "Operation Theatre", emoji: "🔬", bg: "from-green-100 to-green-200" },
  { id: 3, label: "NICU", emoji: "👶", bg: "from-pink-100 to-pink-200" },
  { id: 4, label: "Cath Lab", emoji: "❤️", bg: "from-red-100 to-red-200" },
  { id: 5, label: "Pharmacy", emoji: "💊", bg: "from-purple-100 to-purple-200" },
  { id: 6, label: "Diagnostics", emoji: "🩺", bg: "from-orange-100 to-orange-200" },
];

export default function GallerySection() {
  return (
    <section className="section-padding section-bg-light">
      <div className="container-custom">
        <SectionTitle
          badge="Our Hospital"
          title="World-Class"
          highlight="Infrastructure"
          subtitle="Take a glimpse of our state-of-the-art hospital facilities."
          center
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bg} rounded-2xl aspect-video flex flex-col items-center justify-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <span className="text-5xl md:text-6xl">{item.emoji}</span>
              <span className="font-semibold text-slate-700 text-sm md:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          * Replace placeholder images with real hospital photographs for production use
        </p>
      </div>
    </section>
  );
}
