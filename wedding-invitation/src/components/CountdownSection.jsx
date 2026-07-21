import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

const WEDDING_DATE = new Date('2026-08-30T11:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function CountUnit({ value, label, tamilLabel, inView, delay }) {
  return (
    <div
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div
        style={{
          width: 'clamp(75px, 20vw, 115px)',
          height: 'clamp(85px, 22vw, 125px)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(80,10,10,0.95), rgba(40,5,5,0.98))',
          border: '1px solid rgba(200,146,42,0.5)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(200,146,42,0.2)',
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
          }}
        />
        {/* Corner dots */}
        <div style={{ position: 'absolute', top: 6, left: 6, width: 4, height: 4, borderRadius: '50%', background: '#C8922A', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 6, right: 6, width: 4, height: 4, borderRadius: '50%', background: '#C8922A', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: 6, left: 6, width: 4, height: 4, borderRadius: '50%', background: '#C8922A', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: 6, right: 6, width: 4, height: 4, borderRadius: '50%', background: '#C8922A', opacity: 0.5 }} />

        <span
          className="gold-shimmer"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            fontWeight: 700,
            lineHeight: 1,
            position: 'relative',
          }}
        >
          {String(value).padStart(2, '0')}
        </span>
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8922A',
            marginTop: '5px',
            position: 'relative',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: '"Noto Serif", serif',
            fontSize: '0.5rem',
            color: 'rgba(200,146,42,0.5)',
            marginTop: '2px',
          }}
        >
          {tamilLabel}
        </span>
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const { ref, inView } = useInView(0.2);
  const [time, setTime]   = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time.days,    label: 'Days',    tamilLabel: 'நாட்கள்' },
    { value: time.hours,   label: 'Hours',   tamilLabel: 'மணி'     },
    { value: time.minutes, label: 'Minutes', tamilLabel: 'நிமிடம்' },
    { value: time.seconds, label: 'Seconds', tamilLabel: 'நொடி'    },
  ];

  return (
    <section
      id="countdown"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0202 0%, #2E0606 40%, #3D0A0A 60%, #0D0202 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(200,146,42,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Large decorative text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
        style={{
          fontFamily: '"Noto Serif", serif',
          fontSize: '18rem',
          color: '#FFD700',
          lineHeight: 1,
        }}
      >
        ஓ
      </div>

      {/* Diya corner lights */}
      <div aria-hidden="true" className="absolute top-6 left-6 text-3xl opacity-25" style={{ animation: 'float 3s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(255,200,50,0.8))' }}>🪔</div>
      <div aria-hidden="true" className="absolute top-6 right-6 text-3xl opacity-25" style={{ animation: 'float 3s ease-in-out infinite 0.5s', filter: 'drop-shadow(0 0 8px rgba(255,200,50,0.8))' }}>🪔</div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Label */}
        <p
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#C8922A',
            marginBottom: '0.5rem',
          }}
        >
          ✦ திருமண நேரம் · Wedding Begins In ✦
        </p>

        <h2
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
            color: '#F5E6C8',
            fontWeight: 400,
            marginBottom: '2.5rem',
            transitionDelay: '0.15s',
          }}
        >
          The Auspicious Day Approaches
        </h2>

        {/* Countdown units */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {units.map((u, i) => (
            <React.Fragment key={u.label}>
              <CountUnit
                value={u.value}
                label={u.label}
                tamilLabel={u.tamilLabel}
                inView={inView}
                delay={`${0.1 + i * 0.1}s`}
              />
              {i < units.length - 1 && (
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    color: '#C8922A',
                    opacity: 0.7,
                    alignSelf: 'flex-start',
                    paddingTop: '12px',
                  }}
                >
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Date reminder */}
        <p
          className={`mt-8 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.1rem',
            color: '#C8922A',
            fontStyle: 'italic',
            transitionDelay: '0.6s',
          }}
        >
          🪷 30 August 2026 · Sunday · 11:00 AM 🪷
        </p>
      </div>
    </section>
  );
}
