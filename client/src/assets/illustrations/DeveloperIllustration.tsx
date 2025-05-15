import { CSSProperties } from "react";

interface DeveloperIllustrationProps {
  className?: string;
  style?: CSSProperties;
}

const DeveloperIllustration = ({ className, style }: DeveloperIllustrationProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 500"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#e6e6f8" />
          <stop offset="1" stopColor="#f5f5ff" />
        </linearGradient>
      </defs>
      <rect width="600" height="500" opacity="0.8" fill="url(#linear-gradient)" />
      
      {/* Person */}
      <g transform="translate(180 120)">
        {/* Head */}
        <ellipse cx="45" cy="60" rx="35" ry="45" fill="#ffdfc4" />
        <path d="M33,120 C20,110 15,80 33,60 C50,40 75,40 87,60 C100,80 95,110 87,120" fill="#ffdfc4" />
        
        {/* Hair */}
        <path d="M25,55 C25,35 35,20 55,20 C75,20 85,35 85,55 C85,75 75,95 55,95 C35,95 25,75 25,55Z" fill="#7047EB" />
        
        {/* Body */}
        <rect x="35" y="120" width="30" height="60" fill="#4066e0" />
        <rect x="30" y="180" width="40" height="70" fill="#ffb52b" />
        
        {/* Arms */}
        <rect x="65" y="130" width="70" height="15" rx="7" fill="#4066e0" />
        <rect x="-30" y="130" width="65" height="15" rx="7" fill="#4066e0" />
        
        {/* Hands */}
        <circle cx="135" cy="137" r="12" fill="#ffdfc4" />
        <circle cx="-30" cy="137" r="12" fill="#ffdfc4" />
      </g>
      
      {/* Screen 1 */}
      <g transform="translate(330 130)">
        <rect width="180" height="120" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="3" />
        <path d="M20,40 L160,40" stroke="#e0e0e0" strokeWidth="3" />
        <path d="M20,70 L160,70" stroke="#e0e0e0" strokeWidth="3" />
        <path d="M20,100 L160,100" stroke="#e0e0e0" strokeWidth="3" />
        
        {/* Data points and chart */}
        <circle cx="40" cy="55" r="3" fill="#ffb52b" />
        <circle cx="70" cy="75" r="3" fill="#ffb52b" />
        <circle cx="100" cy="60" r="3" fill="#ffb52b" />
        <circle cx="130" cy="50" r="3" fill="#ffb52b" />
        <path d="M40,55 L70,75 L100,60 L130,50" stroke="#7047EB" strokeWidth="2" fill="none" />
      </g>
      
      {/* Screen 2 */}
      <g transform="translate(100 200)">
        <rect width="150" height="100" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="3" />
        <rect x="20" y="20" width="110" height="15" rx="3" fill="#f0f0f5" />
        <rect x="20" y="45" width="80" height="15" rx="3" fill="#f0f0f5" />
        <rect x="20" y="70" width="60" height="15" rx="3" fill="#ffb52b" />
      </g>
      
      {/* Decorative elements */}
      <g transform="translate(470 380)">
        <circle cx="0" cy="0" r="10" fill="#7047EB" opacity="0.5" />
        <circle cx="30" cy="20" r="8" fill="#ffb52b" opacity="0.5" />
        <circle cx="-20" cy="10" r="6" fill="#4066e0" opacity="0.5" />
      </g>
      
      <g transform="translate(130 100)">
        <circle cx="0" cy="0" r="8" fill="#7047EB" opacity="0.5" />
        <circle cx="20" cy="-10" r="6" fill="#ffb52b" opacity="0.5" />
        <circle cx="-10" cy="-20" r="5" fill="#4066e0" opacity="0.5" />
      </g>
    </svg>
  );
};

export default DeveloperIllustration;
