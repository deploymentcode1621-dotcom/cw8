import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {allItems.map((item, index) => (
          <li key={item.href || index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
            )}
            {index === allItems.length - 1 ? (
              <span className="text-primary-600 font-semibold" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home size={13} />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
