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
    <div className={`flex items-center gap-0.5 ${className}`}>
      {/* Loqua Logo Icon */}
      <div className={`${currentSize.icon} flex items-center justify-center relative group`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="loquaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="50%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          {/* LQ continuous conversational mark */}
          <path
            d="
              M70 40
              V120
              C70 145 95 160 120 150
              C145 140 150 115 135 95
              C125 80 105 80 95 90
            "
            fill="none"
            stroke="url(#loquaGradient)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[22] transition-all duration-300"
          />
        </svg>
      </div>
      {/* Text */}
      {showText && (
        <span className={`${currentSize.text} font-bold ${
          variant === "footer" || className.includes("text-white")
            ? "text-white"
            : "bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
        }`}>
          Loqua
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
