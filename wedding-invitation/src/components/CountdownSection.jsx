import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

const WEDDING_DATE = new Date('2026-08-30T11:00:00');

function getTimeLeft() {
  const diff = WEDDING_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Unit({ value, label, inView, delay }) {
  return (
    <div style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}`,
      textAlign: 'center',
    }}>
      <div style={{
        width: 'clamp(80px,20vw,120px)',
        height: 'clamp(90px,22vw,130px)',
        background: 'rgba(255,252,245,0.06)',
        border: '1px solid rgba(212,175,55,0.4)',
        borderRadius: 16,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.15)',
      }}>
        {/* top shimmer line */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />
        <span className="gold-shimmer" style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2rem,6vw,3.2rem)',
          fontWeight: 600, lineHeight: 1,
        }}>
          {String(value).padStart(2, '0')}
        </span>
        <span style={{
          fontFamily: 'Poppins', fontSize: '0.58rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#D4AF37', marginTop: 6,
        }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const { ref, inView } = useInView(0.2);
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const units = [
    { value: time.days,    label: 'Days'    },
    { value: time.hours,   label: 'Hours'   },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ];

  return (
    <section
      id="countdown"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0804 0%, #1C1008 50%, #0A0804 100%)' }}
    >
      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)',
        pointerEvents:'none',
      }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease 0s',
        }}>
          <span className="section-label" style={{ color: '#D4AF37' }}>✦ &nbsp; Wedding Begins In &nbsp; ✦</span>
        </div>

        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(1.8rem,6vw,2.8rem)',
          color: '#FAF6EF', fontWeight: 300,
          marginTop: '1rem', marginBottom: '2.5rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease 0.15s',
        }}>
          The Auspicious Day Approaches
        </h2>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(8px,2vw,20px)', flexWrap:'wrap' }}>
          {units.map((u, i) => (
            <React.Fragment key={u.label}>
              <Unit {...u} inView={inView} delay={`${0.1 + i * 0.1}s`} />
              {i < units.length - 1 && (
                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(1.5rem,4vw,2.2rem)',
                  color: '#D4AF37', opacity: 0.6,
                  alignSelf: 'flex-start', paddingTop: 14,
                }}>:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.1rem', color: '#D4AF37',
          fontStyle: 'italic', marginTop: '2rem',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.9s ease 0.6s',
        }}>
          30 August 2026 &nbsp;·&nbsp; Sunday &nbsp;·&nbsp; 11:00 AM
        </p>
      </div>
    </section>
  );
}
