import React from "react";
import { personalInfo } from "../data/portfolio";
import "./styles/Logo.css";

interface LogoProps {
  className?: string;
  showBadge?: boolean;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  showBadge = true,
  showText = true,
}) => {
  return (
    <div className={`brand-logo ${className}`}>
      <div className="brand-logo-icon">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-logo-svg"
        >
          <defs>
            <linearGradient
              id="brand-m-gradient"
              x1="6"
              y1="9"
              x2="26"
              y2="23"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#e8dcff" />
              <stop offset="50%" stopColor="#c2a4ff" />
              <stop offset="100%" stopColor="#8d56f3" />
            </linearGradient>
            <linearGradient
              id="brand-core-gradient"
              x1="11"
              y1="23"
              x2="21"
              y2="19"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c2a4ff" />
              <stop offset="100%" stopColor="#00e5ff" />
            </linearGradient>
            <filter id="brand-node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Primary Geometric M Ribbon */}
          <path
            d="M 7 23 L 7 9 L 16 17 L 25 9 L 25 23"
            stroke="url(#brand-m-gradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Neural Node Connector */}
          <path
            d="M 11 23 L 16 19 L 21 23"
            stroke="url(#brand-core-gradient)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />

          {/* Neural Nodes / AI Vertices */}
          <circle cx="7" cy="9" r="1.6" fill="#f1e9ff" />
          <circle cx="25" cy="9" r="1.6" fill="#f1e9ff" />
          <circle
            cx="16"
            cy="17"
            r="1.9"
            fill="#00e5ff"
            filter="url(#brand-node-glow)"
          />
          <circle cx="7" cy="23" r="1.4" fill="#c2a4ff" />
          <circle cx="25" cy="23" r="1.4" fill="#c2a4ff" />
        </svg>
      </div>

      {showText && (
        <span className="brand-logo-text">
          {personalInfo.logo}
          {showBadge && <span className="brand-logo-badge">AI</span>}
        </span>
      )}
    </div>
  );
};

export default Logo;
