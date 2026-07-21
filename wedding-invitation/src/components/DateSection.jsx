import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const calendarDays = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
];

export default function DateSection() {
  const { ref, inView } = useInView(0.2);
  const [calendarOpen, setCalendarOpen] = useState(false);

  React.useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setCalendarOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <section
      id="date"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #2E0606 0%, #1A0404 100%)',
      }}
    >
      {/* Decorative lotus watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none"
        style={{ fontSize: '18rem', lineHeight: 1 }}
      >
        🪷
      </div>

      <div className="max-w-lg mx-auto text-center relative z-10">
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
          ✦ திருமண நாள் · Wedding Date ✦
        </p>

        {/* Heading */}
        <h2
          className={`gold-shimmer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 7vw, 3.5rem)',
            fontWeight: 600,
            marginBottom: '0.25rem',
            transitionDelay: '0.15s',
          }}
        >
          30 August 2026
        </h2>
        <p
          className={`transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.82rem',
            letterSpacing: '0.22em',
            color: '#C8922A',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            transitionDelay: '0.25s',
          }}
        >
          Sunday · 11:00 AM – 3:00 PM
        </p>

        {/* Calendar Card */}
        <div
          className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            transitionDelay: '0.35s',
            border: '1px solid rgba(200,146,42,0.5)',
            background: 'rgba(30, 5, 5, 0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(200,146,42,0.1)',
          }}
        >
          {/* Calendar Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #8B1A1A, #C8922A)',
              padding: '16px 20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header top strip */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>🪷</span>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  color: '#FFF8E7',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                ஆகஸ்ட் · August 2026
              </p>
              <span style={{ fontSize: '1.2rem' }}>🪷</span>
            </div>
          </div>

          {/* Days header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              background: 'rgba(200,146,42,0.12)',
              padding: '8px 12px',
              borderBottom: '1px solid rgba(200,146,42,0.2)',
            }}
          >
            {DAYS.map((d) => (
              <div
                key={d}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  color: '#C8922A',
                  textAlign: 'center',
                  letterSpacing: '0.04em',
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div
            style={{
              padding: '8px 12px 16px',
              transformOrigin: 'top',
              transform: calendarOpen ? 'scaleY(1)' : 'scaleY(0)',
              opacity: calendarOpen ? 1 : 0,
              transition: 'transform 0.6s ease, opacity 0.6s ease',
            }}
          >
            {calendarDays.map((week, wi) => (
              <div
                key={wi}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  marginBottom: '4px',
                }}
              >
                {week.map((day, di) => (
                  <div
                    key={di}
                    style={{
                      textAlign: 'center',
                      padding: '6px 2px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: day === 30 ? '1rem' : '0.78rem',
                      fontWeight: day === 30 ? 700 : 400,
                      color: day === 30 ? '#1A0404' : day ? '#F5E6C8' : 'transparent',
                      background:
                        day === 30
                          ? 'linear-gradient(135deg, #FFD700, #C8922A)'
                          : 'transparent',
                      borderRadius: day === 30 ? '50%' : '0',
                      width: day === 30 ? '36px' : 'auto',
                      height: day === 30 ? '36px' : 'auto',
                      lineHeight: day === 30 ? '24px' : 'normal',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: day === 30 ? '0 auto' : '0',
                      boxShadow:
                        day === 30
                          ? '0 0 0 3px rgba(200,146,42,0.3), 0 4px 14px rgba(200,146,42,0.6)'
                          : 'none',
                    }}
                  >
                    {day || ''}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Muhurtham note */}
        <div
          className={`mt-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              borderRadius: '50px',
              background: 'rgba(200,146,42,0.1)',
              border: '1px solid rgba(200,146,42,0.35)',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1rem',
                color: '#C8922A',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
              }}
            >
              🕐 திருமண முகூர்த்தம் · Muhurtham: 11:00 AM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
