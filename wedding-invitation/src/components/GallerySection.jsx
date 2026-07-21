import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

// Placeholder gallery items — replace src with real photo URLs
const photos = [
  {
    id: 1,
    src: null,
    label: 'Our Story',
    tamilLabel: 'நம் கதை',
    emoji: '💑',
    bg: 'linear-gradient(135deg, #3D0A0A, #6B1A1A)',
    accent: '#C8922A',
  },
  {
    id: 2,
    src: null,
    label: 'Engagement',
    tamilLabel: 'நிச்சயதார்த்தம்',
    emoji: '💍',
    bg: 'linear-gradient(135deg, #2E0606, #8B1A1A)',
    accent: '#FFD700',
  },
  {
    id: 3,
    src: null,
    label: 'Together',
    tamilLabel: 'ஒன்றாக',
    emoji: '🪷',
    bg: 'linear-gradient(135deg, #1A0404, #6B1A1A)',
    accent: '#C8922A',
  },
  {
    id: 4,
    src: null,
    label: 'With Family',
    tamilLabel: 'குடும்பத்தினர்',
    emoji: '👨‍👩‍👦',
    bg: 'linear-gradient(135deg, #2E0606, #4A0A0A)',
    accent: '#FFD700',
  },
  {
    id: 5,
    src: null,
    label: 'Our Future',
    tamilLabel: 'நம் எதிர்காலம்',
    emoji: '🌟',
    bg: 'linear-gradient(135deg, #3D0A0A, #8B1A1A)',
    accent: '#C8922A',
  },
];

export default function GallerySection() {
  const { ref, inView } = useInView(0.15);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0D0202 0%, #1A0404 100%)',
      }}
    >
      {/* Header */}
      <div className="text-center px-6 mb-10">
        <p
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#C8922A',
            marginBottom: '0.75rem',
          }}
        >
          ✦ நினைவு தருணங்கள் · Photo Gallery ✦
        </p>
        <h2
          className={`gold-shimmer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
            fontWeight: 600,
            transitionDelay: '0.15s',
          }}
        >
          Captured Moments
        </h2>
        {/* Lotus divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '0.75rem' }}>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, #C8922A)' }} />
          <span style={{ fontSize: '1rem' }}>🪷</span>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, #C8922A, transparent)' }} />
        </div>
      </div>

      {/* Scroll arrows */}
      <div className="flex justify-center gap-3 mb-6 px-6">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="btn-gold"
          style={{ padding: '8px 20px', fontSize: '1.2rem' }}
        >
          ‹
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="btn-gold"
          style={{ padding: '8px 20px', fontSize: '1.2rem' }}
        >
          ›
        </button>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '1.25rem',
          overflowX: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: `${i * 0.1}s`,
              flexShrink: 0,
              width: 'clamp(200px, 55vw, 260px)',
            }}
          >
            <div
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                transform: `rotate(${i % 2 === 0 ? '-1.5' : '1.5'}deg)`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                border: `2px solid ${photo.accent}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.04)';
                e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.6), 0 0 20px ${photo.accent}55`;
              }}
              onMouseLeave={(e) => {
                const rot = i % 2 === 0 ? '-1.5' : '1.5';
                e.currentTarget.style.transform = `rotate(${rot}deg)`;
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';
              }}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.label}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    background: photo.bg,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    position: 'relative',
                  }}
                >
                  {/* Decorative border inside */}
                  <div style={{
                    position: 'absolute',
                    inset: '8px',
                    borderRadius: '14px',
                    border: `1px solid rgba(200,146,42,0.25)`,
                    pointerEvents: 'none',
                  }} />
                  <span style={{ fontSize: '3.5rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}>{photo.emoji}</span>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.2rem',
                      color: '#FFD700',
                      fontWeight: 600,
                    }}
                  >
                    {photo.label}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Noto Serif", serif',
                      fontSize: '0.75rem',
                      color: 'rgba(200,146,42,0.7)',
                    }}
                  >
                    {photo.tamilLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.65rem',
                      color: 'rgba(200,146,42,0.5)',
                      letterSpacing: '0.1em',
                      marginTop: '4px',
                    }}
                  >
                    Add your photo
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hint */}
      <p
        className="text-center mt-4"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.7rem',
          color: '#C8922A',
          letterSpacing: '0.12em',
          opacity: 0.7,
        }}
      >
        ← Swipe to explore →
      </p>
    </section>
  );
}
