interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  className?: string;
}

const sizes = {
  sm: { mark: 30, fontSize: 13 },
  md: { mark: 38, fontSize: 16 },
  lg: { mark: 50, fontSize: 21 },
};

export function Logo({ size = "md", variant = "default", className = "" }: LogoProps) {
  const { mark, fontSize } = sizes[size];

  return (
    <span className={`inline-flex items-center select-none ${className}`} aria-label="Alunera">
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Badge with subtle gradient */}
        <defs>
          <linearGradient id="badgeBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f1f4a" />
            <stop offset="100%" stopColor="#0a1530" />
          </linearGradient>
          <linearGradient id="dotAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2dd4a8" />
            <stop offset="100%" stopColor="#0fba8e" />
          </linearGradient>
        </defs>

        <rect width="48" height="48" rx="12" fill="url(#badgeBg)" />

        {/* Subtle teal glow behind text area */}
        <ellipse cx="24" cy="26" rx="18" ry="12" fill="#0fba8e" fillOpacity="0.07" />

        {/* "a" letterform — clean, bold, lowercase */}
        <text
          x="11"
          y="34"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize={fontSize + 4}
          fill="url(#dotAccent)"
          letterSpacing="-0.5"
        >
          a
        </text>

        {/* Period — teal dot, offset right */}
        <circle cx="38" cy="34" r="3.2" fill="url(#dotAccent)" />
      </svg>
    </span>
  );
}
