import React from 'react';
import useInView from '../hooks/useInView';

export default function CoupleSection() {
  const { ref, inView } = useInView(0.2);

  const animate = (delay = '0s', dir = 'up') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : dir === 'left' ? 'translateX(-40px)' : dir === 'right' ? 'translateX(40px)' : 'translateY(40px)',
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  return (
    <section
      id="couple"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF6EF 0%, #F5EDD8 100%)' }}
    >
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"Great Vibes", cursive', fontSize: 'clamp(12rem, 30vw, 22rem)',
        color: 'rgba(212,175,55,0.06)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        &amp;
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Label */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', ...animate('0s') }}>
          <span className="section-label">✦ &nbsp; Together Forever &nbsp; ✦</span>
          <div className="gold-line" style={{ maxWidth: 200, margin: '1rem auto 0' }} />
        </div>

        {/* Couple names side by side */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

          {/* Groom */}
          <div style={{ textAlign: 'center', ...animate('0.15s', 'left') }}>
            {/* Avatar ring */}
            <div style={{
              width: 140, height: 140,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FAF6EF, #F5EDD8)',
              border: '2px solid #D4AF37',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
              fontSize: '3.5rem',
              boxShadow: '0 0 0 6px rgba(212,175,55,0.1), 0 12px 40px rgba(184,134,11,0.15)',
              animation: 'pulseGold 3s ease-in-out infinite',
            }}>
              🤵
            </div>
            <h2 className="gold-shimmer" style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
              lineHeight: 1.1,
            }}>
              S. Nandhakumar
            </h2>
            <p style={{ fontFamily: 'Poppins', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8860B', marginTop: 8 }}>
              Groom
            </p>
          </div>

          {/* Ring separator */}
          <div style={{ textAlign: 'center', ...animate('0.35s') }}>
            <span style={{ fontSize: '2.5rem', display: 'block', animation: 'float 4s ease-in-out infinite', filter: 'drop-shadow(0 4px 12px rgba(212,175,55,0.5))' }}>💍</span>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: '#B8860B', fontStyle: 'italic', marginTop: 6, letterSpacing: '0.1em' }}>Weds</p>
          </div>

          {/* Bride */}
          <div style={{ textAlign: 'center', ...animate('0.15s', 'right') }}>
            <div style={{
              width: 140, height: 140,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FAF6EF, #F5EDD8)',
              border: '2px solid #D4AF37',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
              fontSize: '3.5rem',
              boxShadow: '0 0 0 6px rgba(212,175,55,0.1), 0 12px 40px rgba(184,134,11,0.15)',
              animation: 'pulseGold 3s ease-in-out infinite 0.5s',
            }}>
              👰
            </div>
            <h2 className="gold-shimmer" style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
              lineHeight: 1.1,
            }}>
              K. Swathilakshmi
            </h2>
            <p style={{ fontFamily: 'Poppins', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8860B', marginTop: 8 }}>
              Bride
            </p>
          </div>
        </div>

        {/* Quote */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', maxWidth: 560, margin: '3.5rem auto 0', ...animate('0.55s') }}>
          <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: '#2E1A0A',
            fontStyle: 'italic',
            lineHeight: 1.9,
            fontWeight: 300,
          }}>
            "Two souls, one destiny — bound by love,<br />blessed by family, celebrated by all."
          </p>
          <div className="gold-line" style={{ marginTop: '1.5rem' }} />
        </div>
      </div>
    </section>
  );
}
