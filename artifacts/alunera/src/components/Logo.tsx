interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  showWordmark?: boolean;
  className?: string;
}

const sizes = {
  sm: { mark: 28, text: "text-base" },
  md: { mark: 36, text: "text-xl" },
  lg: { mark: 48, text: "text-2xl" },
};

export function Logo({
  size = "md",
  variant = "default",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const { mark, text } = sizes[size];
  const wordmarkColor = variant === "light" ? "#ffffff" : "#1e1347";

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`} aria-label="Alunera">
      {/* Mark */}
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Badge background — deep navy */}
        <rect width="40" height="40" rx="10" fill="#1e1347" />

        {/* Geometric A — two converging strokes from base to apex */}
        <path
          d="M10.5 30 L20 10 L29.5 30"
          stroke="#c8f020"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Crossbar */}
        <line
          x1="14.5"
          y1="23"
          x2="25.5"
          y2="23"
          stroke="#c8f020"
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        {/* Apex accent dot — pops the peak */}
        <circle cx="20" cy="10" r="2" fill="#c8f020" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span
          className={`font-extrabold tracking-tight leading-none ${text}`}
          style={{ color: wordmarkColor, letterSpacing: "-0.02em" }}
        >
          Alunera
        </span>
      )}
    </span>
  );
}
