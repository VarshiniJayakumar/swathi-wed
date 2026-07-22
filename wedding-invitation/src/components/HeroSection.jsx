import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0804 0%, #1C1008 40%, #2E1A0A 70%, #0A0804 100%)' }}
    >
      {/* Cinematic grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Radial gold glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top border line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
      {/* Bottom border line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

      {/* Corner ornaments */}
      {[
        { pos: { top: 20, left: 24 }, rotate: '0deg' },
        { pos: { top: 20, right: 24 }, rotate: '90deg' },
        { pos: { bottom: 40, left: 24 }, rotate: '270deg' },
        { pos: { bottom: 40, right: 24 }, rotate: '180deg' },
      ].map((c, i) => (
        <div key={i} aria-hidden="true" style={{ position: 'absolute', ...c.pos, width: 40, height: 40, pointerEvents: 'none', zIndex: 2 }}>
          <svg viewBox="0 0 40 40" fill="none" style={{ width: '100%', height: '100%', transform: `rotate(${c.rotate})` }}>
            <path d="M2 2 L2 18 M2 2 L18 2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.7"/>
          </svg>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Pre-title */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <span className="section-label" style={{ color: '#D4AF37', letterSpacing: '0.45em' }}>
            ✦ &nbsp; The Wedding of &nbsp; ✦
          </span>
        </div>

        {/* Groom name */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s',
          marginTop: '1.5rem',
        }}>
          <h1 className="gold-shimmer" style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 'clamp(3.5rem, 11vw, 7rem)',
            lineHeight: 1.1,
          }}>
            S. Nandhakumar
          </h1>
        </div>

        {/* And */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.5)',
          transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.65s',
          margin: '0.4rem 0',
        }}>
          <div className="ornament-divider">
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#D4AF37', letterSpacing: '0.2em' }}>and</span>
          </div>
        </div>

        {/* Bride name */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1) 0.85s',
        }}>
          <h1 className="gold-shimmer" style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 'clamp(3.5rem, 11vw, 7rem)',
            lineHeight: 1.1,
          }}>
            K. Swathilakshmi
          </h1>
        </div>

        {/* Date block */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 1.1s',
          marginTop: '2.5rem',
        }}>
          {/* Gold rule */}
          <div className="gold-line" style={{ maxWidth: 280, margin: '0 auto 1.5rem' }} />

          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.3rem, 4vw, 2rem)',
            color: '#FAF6EF',
            fontWeight: 300,
            letterSpacing: '0.1em',
          }}>
            30 August 2026
          </p>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.72rem',
            color: '#D4AF37',
            letterSpacing: '0.35em',
            marginTop: '6px',
            textTransform: 'uppercase',
          }}>
            Sunday &nbsp;·&nbsp; 11:00 AM &nbsp;·&nbsp; Coimbatore
          </p>

          <div className="gold-line" style={{ maxWidth: 280, margin: '1.5rem auto 0' }} />
        </div>

        {/* Scroll hint */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.6s',
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ fontFamily: 'Poppins', fontSize: '0.62rem', letterSpacing: '0.3em', color: '#B8860B', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: 1, height: 50,
            background: 'linear-gradient(180deg, #D4AF37, transparent)',
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}
