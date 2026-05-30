import { useEffect, useRef } from "react";

export function IndustriesMarquee() {
  const industries = [
    "Aesthetic Clinics",
    "Dental Practices",
    "Law Firms",
    "Accounting Firms",
    "Security Companies",
    "Electricians",
    "Plumbers",
    "Private Schools",
    "Consultants",
    "Wellness Clinics",
    "Medical Practices",
    "Construction Companies",
    "Professional Services"
  ];

  return (
    <div className="w-full overflow-hidden bg-background py-6 border-y border-border">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center whitespace-nowrap group-hover:animate-play-state-paused">
          {industries.map((industry, i) => (
            <span key={i} className="mx-8 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              {industry}
            </span>
          ))}
          {industries.map((industry, i) => (
            <span key={`clone-${i}`} className="mx-8 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              {industry}
            </span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-play-state-paused {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
