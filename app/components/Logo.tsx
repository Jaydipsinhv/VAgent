import Link from "next/link";

interface LogoProps {
  variant?: "default" | "icon-only" | "footer";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  href?: string;
}

export default function Logo({ 
  variant = "default", 
  size = "md", 
  showText = true,
  className = "",
  href = "/"
}: LogoProps) {
  const sizeClasses = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-2xl" },
  };

  const currentSize = sizeClasses[size];

  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Circuit Tech Logo Icon */}
      <div className={`${currentSize.icon} bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group ${variant === "footer" ? "shadow-teal-500/20" : ""}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            {/* Circuit board pattern */}
            <rect x="4" y="4" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="16" y="4" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="4" y="16" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="16" y="16" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
            <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="6" y1="8" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="18" y1="8" x2="18" y2="16" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        </div>
      </div>
      {/* Text */}
      {showText && (
        <span className={`${currentSize.text} font-bold ${
          variant === "footer" || className.includes("text-white")
            ? "text-white"
            : "bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
        }`}>
          VAgent
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center">{content}</div>;
}
