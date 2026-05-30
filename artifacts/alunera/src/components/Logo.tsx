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
            <stop offset="0%" stopColor="#1e0744" />
            <stop offset="100%" stopColor="#2d0b5e" />
          </linearGradient>
          <linearGradient id="aGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="dotGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        <rect width="48" height="48" rx="12" fill="url(#badgeBg)" />

        {/* Subtle purple glow */}
        <ellipse cx="24" cy="26" rx="18" ry="12" fill="#a855f7" fillOpacity="0.1" />

        {/* "a" letterform — purple */}
        <text
          x="11"
          y="34"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize={fontSize + 4}
          fill="url(#aGrad)"
          letterSpacing="-0.5"
        >
          a
        </text>

        {/* Period — pink dot */}
        <circle cx="38" cy="34" r="3.2" fill="url(#dotGrad)" />
      </svg>
    </span>
  );
}
