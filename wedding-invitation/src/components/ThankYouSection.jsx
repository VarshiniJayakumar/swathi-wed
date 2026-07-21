import React from 'react';
import useInView from '../hooks/useInView';

// Kolam-inspired SVG border decoration
function KolamBorder() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '60px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="kolamGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C8922A" stopOpacity="0" />
            <stop offset="30%"  stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="50%"  stopColor="#C8922A" stopOpacity="1" />
            <stop offset="70%"  stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C8922A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect y="0" width="1200" height="2" fill="url(#kolamGold)" />
        {/* Arch motifs top */}
        {Array.from({ length: 24 }, (_, i) => (
          <g key={i} transform={`translate(${i * 50}, 2)`}>
            <path d="M0,30 Q25,0 50,30" fill="none" stroke="#C8922A" strokeWidth="0.8" opacity="0.4" />
            <circle cx="25" cy="28" r="1.5" fill="#FFD700" opacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function ThankYouSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      id="thankyou"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0202 0%, #2E0606 40%, #3D0A0A 70%, #0D0202 100%)',
      }}
    >
      <KolamBorder />

      {/* Radial gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(200,146,42,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Corner Trident decorations */}
      {[
        { pos: 'top-4 left-4',     transform: 'none' },
        { pos: 'top-4 right-4',    transform: 'scaleX(-1)' },
        { pos: 'bottom-4 left-4',  transform: 'scaleY(-1)' },
        { pos: 'bottom-4 right-4', transform: 'scale(-1)' },
      ].map(({ pos, transform }, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`absolute ${pos} opacity-20 text-4xl select-none pointer-events-none`}
          style={{ color: '#C8922A', transform }}
        >
          🔱
        </div>
      ))}

      {/* Floating diya lamps */}
      <div aria-hidden="true" className="absolute top-8 left-8 text-2xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(255,180,20,0.6))' }}>🪔</div>
      <div aria-hidden="true" className="absolute top-8 right-8 text-2xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite 0.7s', filter: 'drop-shadow(0 0 8px rgba(255,180,20,0.6))' }}>🪔</div>
      <div aria-hidden="true" className="absolute bottom-8 left-8 text-2xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite 0.3s', filter: 'drop-shadow(0 0 8px rgba(255,180,20,0.6))' }}>🪔</div>
      <div aria-hidden="true" className="absolute bottom-8 right-8 text-2xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite 1s', filter: 'drop-shadow(0 0 8px rgba(255,180,20,0.6))' }}>🪔</div>

      <div className="relative z-10 max-w-xl mx-auto text-center">

        {/* Lotus icon */}
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        >
          <span
            style={{
              fontSize: '4rem',
              display: 'block',
              marginBottom: '1.5rem',
              animation: 'float 4s ease-in-out infinite',
              filter: 'drop-shadow(0 6px 16px rgba(200,146,42,0.6))',
            }}
          >
            🪷
          </span>
        </div>

        {/* Tamil blessing */}
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <p
            style={{
              fontFamily: '"Noto Serif", serif',
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              color: '#FFD700',
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
              textShadow: '0 0 20px rgba(255,215,0,0.4)',
            }}
          >
            ॐ நமச்சிவாய 🔱 திருமண வாழ்த்துக்கள்
          </p>
        </div>

        {/* Names */}
        <h2
          className={`gold-shimmer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 'clamp(2.8rem, 9vw, 4.5rem)',
            lineHeight: 1.2,
            transitionDelay: '0.2s',
          }}
        >
          Nandha &amp; Swathi
        </h2>

        {/* Floral divider */}
        <div
          className={`mt-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.35s' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0.75rem 0' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C8922A)' }} />
            <span style={{ fontSize: '1.2rem' }}>🌺</span>
            <span style={{ fontSize: '1.4rem' }}>🪷</span>
            <span style={{ fontSize: '1.2rem' }}>🌺</span>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C8922A, transparent)' }} />
          </div>
        </div>

        {/* Message */}
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
              color: '#F5E6C8',
              lineHeight: 1.9,
              fontStyle: 'italic',
              marginBottom: '0.75rem',
            }}
          >
            உங்கள் இனிய வருகை எங்களுக்கு மிகவும் மகிழ்ச்சி.
          </p>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: '#C8922A',
              lineHeight: 1.9,
              fontStyle: 'italic',
            }}
          >
            We warmly invite you to celebrate our special day.<br />
            <span style={{ color: '#EDD6A0' }}>Your presence is our greatest blessing.</span>
          </p>
        </div>

        {/* Date box */}
        <div
          className={`mt-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.65s' }}
        >
          <div
            className="inline-block px-8 py-5 rounded-2xl"
            style={{
              background: 'rgba(200,146,42,0.1)',
              border: '1px solid rgba(200,146,42,0.45)',
              boxShadow: 'inset 0 1px 0 rgba(200,146,42,0.2), 0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Top accent */}
            <div style={{
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
              marginBottom: '12px',
              borderRadius: '1px',
            }} />
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.5rem',
                color: '#FFD700',
                fontWeight: 600,
                letterSpacing: '0.06em',
              }}
            >
              30 August 2026
            </p>
            <p
              style={{
                fontFamily: '"Noto Serif", serif',
                fontSize: '0.9rem',
                color: '#C8922A',
                marginTop: '4px',
              }}
            >
              ஆகஸ்ட் 30, 2026
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(200,146,42,0.7)',
                marginTop: '6px',
              }}
            >
              Sunday · 11:00 AM
            </p>
          </div>
        </div>

        {/* Footer */}
        <p
          className={`mt-12 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(200,146,42,0.4)',
            transitionDelay: '0.8s',
          }}
        >
          Made with ❤ for Nandha &amp; Swathi · 30.08.2026
        </p>
      </div>
    </section>
  );
}
