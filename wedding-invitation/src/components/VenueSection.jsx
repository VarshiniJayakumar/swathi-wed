import React from 'react';
import useInView from '../hooks/useInView';

export default function VenueSection() {
  const { ref, inView } = useInView(0.2);

  const mapsUrl =
    'https://www.google.com/maps/search/Thelungupalayam+Vaithiyasalai+Coimbatore';

  return (
    <section
      id="venue"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A0404 0%, #2A0808 50%, #1A0404 100%)',
      }}
    >
      {/* Background kolam pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{ overflow: 'hidden' }}
      >
        {/* Subtle repeating dots (kolam-like) */}
        {Array.from({ length: 6 }, (_, row) =>
          Array.from({ length: 12 }, (_, col) => (
            <div
              key={`${row}-${col}`}
              style={{
                position: 'absolute',
                left: `${col * 8.5 + 4}%`,
                top: `${row * 18 + 9}%`,
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: '#C8922A',
                opacity: 0.08,
              }}
            />
          ))
        )}
      </div>

      <div className="max-w-md mx-auto text-center relative z-10">
        {/* Label */}
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
          ✦ திருமண இடம் · Venue ✦
        </p>

        <h2
          className={`gold-shimmer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
            fontWeight: 600,
            marginBottom: '2rem',
            transitionDelay: '0.15s',
          }}
        >
          Venue &amp; Location
        </h2>

        {/* Venue Card */}
        <div
          className={`rounded-2xl p-8 shadow-2xl transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            transitionDelay: '0.3s',
            border: '1px solid rgba(200,146,42,0.5)',
            background: 'linear-gradient(135deg, rgba(60,10,10,0.9), rgba(30,5,5,0.95))',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,146,42,0.2)',
          }}
        >
          {/* Top gold accent line */}
          <div style={{
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #FFD700, #C8922A, #FFD700, transparent)',
            borderRadius: '2px',
            marginBottom: '1.5rem',
          }} />

          {/* Temple gopuram icon */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B1A1A, #C8922A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 0 4px rgba(200,146,42,0.2), 0 8px 24px rgba(0,0,0,0.4)',
              fontSize: '1.8rem',
            }}
          >
            🏛️
          </div>

          <h3
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.8rem',
              color: '#FFD700',
              fontWeight: 600,
              marginBottom: '0.5rem',
              textShadow: '0 0 20px rgba(255,215,0,0.3)',
            }}
          >
            Thelungupalayam
          </h3>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.88rem',
              color: '#EDD6A0',
              lineHeight: 1.8,
              marginBottom: '0.25rem',
            }}
          >
            Vaithiyasalai Near
          </p>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.88rem',
              color: '#EDD6A0',
              marginBottom: '1.75rem',
            }}
          >
            Coimbatore
          </p>

          {/* Gold divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C8922A, transparent)',
            marginBottom: '1.5rem',
          }} />

          {/* Time & Date chips */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: '📅', label: '30 August 2026', sub: 'ஆகஸ்ட் 30' },
              { icon: '🕐', label: '11:00 AM – 3:00 PM', sub: 'முகூர்த்தம்' },
            ].map(({ icon, label, sub }) => (
              <div
                key={label}
                style={{
                  textAlign: 'center',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  background: 'rgba(200,146,42,0.12)',
                  border: '1px solid rgba(200,146,42,0.3)',
                }}
              >
                <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '4px' }}>{icon}</span>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: '#C8922A', fontWeight: 500 }}>
                  {label}
                </p>
                <p style={{ fontFamily: '"Noto Serif", serif', fontSize: '0.65rem', color: 'rgba(200,146,42,0.6)', marginTop: '2px' }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Maps Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
            style={{ textDecoration: 'none', fontSize: '0.88rem' }}
          >
            <span>📍</span>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
