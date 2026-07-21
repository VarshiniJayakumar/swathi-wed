import React, { useEffect, useState } from 'react';

// Decorative temple-inspired SVG border
function TempleTopBorder() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        {/* Top decorative arch strip */}
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C8922A" stopOpacity="0" />
            <stop offset="30%"  stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#F5C842" stopOpacity="1" />
            <stop offset="70%"  stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8922A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect y="0" width="1200" height="2" fill="url(#goldGrad)" />
        <rect y="6" width="1200" height="1" fill="url(#goldGrad)" opacity="0.5" />
        {/* Mini arch motifs */}
        {Array.from({ length: 24 }, (_, i) => (
          <g key={i} transform={`translate(${i * 50 + 0}, 8)`}>
            <path
              d="M0,30 Q25,0 50,30"
              fill="none"
              stroke="#C8922A"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="25" cy="28" r="2" fill="#FFD700" opacity="0.6" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function TempleBottomBorder() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        height: '40px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C8922A" stopOpacity="0" />
            <stop offset="50%"  stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C8922A" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 24 }, (_, i) => (
          <g key={i} transform={`translate(${i * 50}, 0)`}>
            <path
              d="M0,0 Q25,30 50,0"
              fill="none"
              stroke="#C8922A"
              strokeWidth="1"
              opacity="0.45"
            />
          </g>
        ))}
        <rect y="38" width="1200" height="2" fill="url(#goldGrad2)" />
      </svg>
    </div>
  );
}

// Lamp decoration (diyas on either side)
function Diya({ side }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '50%',
        [side]: '1.5rem',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.7,
      }}
    >
      <span style={{ fontSize: '2.2rem', animation: 'float 3s ease-in-out infinite', filter: 'drop-shadow(0 0 10px rgba(255,200,50,0.9))' }}>🪔</span>
      <span style={{ fontSize: '1.4rem', animation: 'float 4s ease-in-out infinite 0.5s', filter: 'drop-shadow(0 0 8px rgba(255,200,50,0.7))' }}>🪔</span>
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #3D0A0A 0%, #1A0404 45%, #0D0202 100%)',
      }}
    >
      {/* Temple border decorations */}
      <TempleTopBorder />
      <TempleBottomBorder />

      {/* Diya lamps on sides — hidden on small screens */}
      <div className="hidden sm:block">
        <Diya side="left" />
        <Diya side="right" />
      </div>

      {/* Background large OM symbol */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontFamily: '"Noto Serif", serif',
          fontSize: 'clamp(16rem, 40vw, 28rem)',
          color: 'rgba(200, 146, 42, 0.04)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ॐ
      </div>

      {/* Corner ornaments — temple gopuram style */}
      {['top-4 left-4', 'top-4 right-4', 'bottom-20 left-4', 'bottom-20 right-4'].map((pos, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`absolute ${pos} opacity-40 select-none text-2xl`}
          style={{
            color: '#C8922A',
            transform: i === 1 ? 'scaleX(-1)' : i === 2 ? 'scaleY(-1)' : i === 3 ? 'scale(-1)' : 'none',
          }}
        >
          🔱
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        {/* Tamil blessing */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
          style={{ transitionDelay: '0.05s' }}
        >
          <p
            style={{
              fontFamily: '"Noto Serif", serif',
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              color: '#FFD700',
              letterSpacing: '0.25em',
              marginBottom: '0.5rem',
              textShadow: '0 0 20px rgba(255,215,0,0.4)',
            }}
          >
            ॐ நமச்சிவாய
          </p>
        </div>

        {/* Save the Date badge */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <span
            className="inline-block text-xs tracking-[0.35em] uppercase mb-6 px-5 py-2 rounded-full"
            style={{
              background: 'rgba(200,146,42,0.15)',
              border: '1px solid rgba(200,146,42,0.55)',
              color: '#FFD700',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 0 20px rgba(200,146,42,0.2)',
            }}
          >
            ✦ திருமண அழைப்பிதழ் · Wedding Invitation ✦
          </span>
        </div>

        {/* Groom Name */}
        <div
          className={`transition-all duration-900 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <h1
            className="gold-shimmer leading-tight"
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            }}
          >
            S. Nandhakumar
          </h1>
        </div>

        {/* Ampersand with kolam dots */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '4px 0' }}>
            <span style={{ color: 'rgba(200,146,42,0.5)', fontSize: '0.6rem', letterSpacing: '6px' }}>• • •</span>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: '#FFD700',
                letterSpacing: '0.15em',
                textShadow: '0 0 20px rgba(255,215,0,0.5)',
              }}
            >
              &amp;
            </p>
            <span style={{ color: 'rgba(200,146,42,0.5)', fontSize: '0.6rem', letterSpacing: '6px' }}>• • •</span>
          </div>
        </div>

        {/* Bride Name */}
        <div
          className={`transition-all duration-900 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          <h1
            className="gold-shimmer leading-tight"
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            }}
          >
            K. Swathilakshmi
          </h1>
        </div>

        {/* Date */}
        <div
          className={`mt-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.95s' }}
        >
          {/* Kolam-style ornament line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ color: '#C8922A', fontSize: '0.5rem', letterSpacing: '4px' }}>◆ ◆ ◆</span>
            <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>🌺</span>
            <span style={{ color: '#C8922A', fontSize: '0.5rem', letterSpacing: '4px' }}>◆ ◆ ◆</span>
          </div>

          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
              color: '#F5E6C8',
              fontWeight: 500,
              letterSpacing: '0.08em',
            }}
          >
            30 August 2026
          </p>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.82rem',
              color: '#C8922A',
              letterSpacing: '0.22em',
              marginTop: '4px',
              textTransform: 'uppercase',
            }}
          >
            Sunday · 11:00 AM
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
            <span style={{ color: '#C8922A', fontSize: '0.5rem', letterSpacing: '4px' }}>◆ ◆ ◆</span>
            <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>🌺</span>
            <span style={{ color: '#C8922A', fontSize: '0.5rem', letterSpacing: '4px' }}>◆ ◆ ◆</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1.3s' }}
      >
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: '#C8922A',
            textTransform: 'uppercase',
          }}
        >
          Scroll ↓
        </p>
        <div
          className="w-px h-10 mx-auto"
          style={{
            background: 'linear-gradient(180deg, #FFD700, transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
