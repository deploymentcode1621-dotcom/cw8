import { cn } from "@/utils/cn";

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
  className,
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      {badge && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4",
            light
              ? "bg-white/20 text-white"
              : "bg-primary-100 text-primary-700"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight",
          light ? "text-white" : "text-slate-800"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className={light ? "text-primary-300" : "gradient-text"}>
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            center && "mx-auto",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
