import React from 'react';
import useInView from '../hooks/useInView';

// Floral garland divider
function FloralDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', margin: '1.5rem 0' }}>
      <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C8922A)' }} />
      <span style={{ color: '#C8922A', fontSize: '0.7rem', letterSpacing: '4px' }}>◈</span>
      <span style={{ color: '#FFD700', fontSize: '1rem' }}>🌸</span>
      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>🌺</span>
      <span style={{ color: '#FFD700', fontSize: '1rem' }}>🌸</span>
      <span style={{ color: '#C8922A', fontSize: '0.7rem', letterSpacing: '4px' }}>◈</span>
      <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C8922A, transparent)' }} />
    </div>
  );
}

export default function CoupleSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      id="couple"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden kolam-border-top"
      style={{
        background: 'linear-gradient(180deg, #1A0404 0%, #2E0606 50%, #1A0404 100%)',
      }}
    >
      {/* Background OM */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
        style={{
          fontFamily: '"Noto Serif", serif',
          fontSize: '22rem',
          color: '#FFD700',
          lineHeight: 1,
        }}
      >
        ॐ
      </div>

      {/* Decorative corner diyas */}
      <div aria-hidden="true" className="absolute top-4 left-4 text-2xl opacity-30" style={{ animation: 'float 4s ease-in-out infinite' }}>🪔</div>
      <div aria-hidden="true" className="absolute top-4 right-4 text-2xl opacity-30" style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}>🪔</div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section label */}
        <p
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: '"Noto Serif", serif',
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C8922A',
            marginBottom: '0.5rem',
          }}
        >
          ✦ வாழ்க்கைத் துணை · Together Forever ✦
        </p>

        <FloralDivider />

        {/* Names row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-2">

          {/* Groom */}
          <div
            className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            {/* Groom photo placeholder */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3D0A0A, #6B1A1A)',
                border: '3px solid #C8922A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '3rem',
                boxShadow: '0 0 0 6px rgba(200,146,42,0.15), 0 8px 32px rgba(0,0,0,0.4)',
                animation: 'pulseGold 3s ease-in-out infinite',
              }}
            >
              🤵
            </div>
            <h2
              className="gold-shimmer"
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
                lineHeight: 1.1,
              }}
            >
              S. Nandhakumar
            </h2>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C8922A',
                marginTop: '6px',
              }}
            >
              மணமகன் · Groom
            </p>
          </div>

          {/* Center lotus */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: '0.45s' }}
          >
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                  display: 'block',
                  animation: 'float 3s ease-in-out infinite',
                  filter: 'drop-shadow(0 4px 16px rgba(255,100,100,0.6))',
                }}
              >
                🪷
              </span>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1rem',
                  color: '#C8922A',
                  fontStyle: 'italic',
                  marginTop: '4px',
                  letterSpacing: '0.05em',
                }}
              >
                Weds
              </p>
            </div>
          </div>

          {/* Bride */}
          <div
            className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            {/* Bride photo placeholder */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3D0A0A, #6B1A1A)',
                border: '3px solid #C8922A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '3rem',
                boxShadow: '0 0 0 6px rgba(200,146,42,0.15), 0 8px 32px rgba(0,0,0,0.4)',
                animation: 'pulseGold 3s ease-in-out infinite 0.5s',
              }}
            >
              👰
            </div>
            <h2
              className="gold-shimmer"
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
                lineHeight: 1.1,
              }}
            >
              K. Swathilakshmi
            </h2>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C8922A',
                marginTop: '6px',
              }}
            >
              மணமகள் · Bride
            </p>
          </div>
        </div>

        {/* Quote */}
        <div
          className={`mt-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          <FloralDivider />
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              color: '#EDD6A0',
              fontStyle: 'italic',
              lineHeight: 2,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            "இரு உள்ளங்கள் ஒன்றாகும் திருமண நாள் —<br />
            <span style={{ fontSize: '0.9em', color: '#C8922A' }}>Two hearts united by divine blessings.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
