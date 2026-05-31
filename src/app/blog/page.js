import Breadcrumb from "@/components/common/Breadcrumb";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = genMeta({
  title: "Health Blog | Tips & Medical Insights",
  description: "Read expert health tips, medical insights, and wellness advice from the doctors of Patil Multispeciality Hospital.",
  path: "/blog",
});

const blogPosts = [
  {
    id: 1, slug: "heart-health-tips",
    title: "10 Tips to Keep Your Heart Healthy",
    excerpt: "Cardiologist Dr. Rajesh Patil shares expert advice on maintaining a healthy heart through diet, exercise and lifestyle changes.",
    category: "Cardiology", author: "Dr. Rajesh Patil",
    date: "2024-05-10", readTime: "5 min read", emoji: "❤️",
  },
  {
    id: 2, slug: "diabetes-management",
    title: "Managing Diabetes: A Complete Guide",
    excerpt: "Everything you need to know about managing Type 2 diabetes with medication, diet and regular monitoring.",
    category: "General Health", author: "Dr. Anita Desai",
    date: "2024-04-22", readTime: "8 min read", emoji: "🩺",
  },
  {
    id: 3, slug: "maternal-health-during-pregnancy",
    title: "Maternal Health: What to Expect During Pregnancy",
    excerpt: "A trimester-by-trimester guide to staying healthy during pregnancy, from prenatal care to delivery.",
    category: "Gynecology", author: "Dr. Anita Desai",
    date: "2024-04-05", readTime: "7 min read", emoji: "👶",
  },
  {
    id: 4, slug: "stroke-warning-signs",
    title: "Recognizing Stroke: Act FAST",
    excerpt: "Learn the early warning signs of a stroke and why immediate action can save lives and prevent disability.",
    category: "Neurology", author: "Dr. Priya Sharma",
    date: "2024-03-18", readTime: "4 min read", emoji: "🧠",
  },
  {
    id: 5, slug: "joint-pain-remedies",
    title: "Living with Joint Pain: Treatment Options",
    excerpt: "From physiotherapy to joint replacement — explore the full spectrum of orthopedic treatments available today.",
    category: "Orthopedics", author: "Dr. Suresh Kulkarni",
    date: "2024-03-01", readTime: "6 min read", emoji: "🦴",
  },
  {
    id: 6, slug: "childhood-vaccinations",
    title: "Complete Childhood Vaccination Schedule",
    excerpt: "A parent's guide to all essential vaccines for children from birth to age 15, recommended by IAP guidelines.",
    category: "Pediatrics", author: "Dr. Vikram Joshi",
    date: "2024-02-14", readTime: "5 min read", emoji: "💉",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Health <span className="text-primary-300">Blog</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              Expert health tips, medical insights, and wellness advice from our specialist doctors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group overflow-hidden hover:-translate-y-1">
                {/* Thumbnail */}
                <div className="h-44 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-6xl">
                  {post.emoji}
                </div>
                <div className="p-5">
                  <span className="badge-blue mb-3 inline-flex">{post.category}</span>
                  <h2 className="font-heading font-bold text-slate-800 text-base mb-2 leading-snug group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
