import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none";

  const variants = {
    primary:
      "bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-primary-500",
    secondary:
      "bg-white hover:bg-primary-50 text-primary-600 border-2 border-primary-600 hover:-translate-y-0.5 active:translate-y-0 focus:ring-primary-500",
    outline:
      "bg-transparent hover:bg-slate-50 text-slate-700 border-2 border-slate-300 hover:border-primary-400 hover:text-primary-600 focus:ring-slate-400",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-primary-600 focus:ring-slate-400",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-red-500",
    success:
      "bg-secondary-600 hover:bg-secondary-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-secondary-500",
    emergency:
      "bg-red-600 hover:bg-red-700 text-white font-bold shadow-md hover:shadow-lg animate-pulse-slow focus:ring-red-500",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
    xl: "py-5 px-10 text-xl",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
}
