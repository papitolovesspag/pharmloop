import React from 'react';

export default function Logo({ className = "h-9 w-9", showText = true, textClassName = "text-xl font-bold" }) {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      <div className={`relative flex items-center justify-center ${className} transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          <defs>
            <linearGradient id="logoGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="coreGlow" x1="28" y1="28" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* PharmLoop Mobius / Closed Loop Symbol */}
          <path 
            d="M22 24 C14 24 10 29 10 34 C10 39 14 44 22 44 C28 44 32 39 36 34 L42 27 C46 22 50 20 54 24" 
            stroke="url(#logoGrad)" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M42 40 C50 40 54 35 54 30 C54 25 50 20 42 20 C36 20 32 25 28 30 L22 37 C18 42 14 44 10 40" 
            stroke="url(#logoGrad)" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Central Bio-Cold Core Node */}
          <circle cx="32" cy="32" r="5" fill="url(#coreGlow)" />
          <circle cx="32" cy="32" r="8" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" className="animate-ping" style={{ transformOrigin: '32px 32px', animationDuration: '3s' }} />

          {/* Micro Telemetry Nodes */}
          <circle cx="17" cy="27" r="2.5" fill="#22D3EE" />
          <circle cx="47" cy="37" r="2.5" fill="#34D399" />
        </svg>
      </div>

      {showText && (
        <span className={`tracking-tight ${textClassName} font-extrabold tracking-[-0.03em]`}>
          <span className="text-slate-900 dark:text-white transition-colors duration-300">Pharm</span>
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">Loop</span>
        </span>
      )}
    </div>
  );
}
