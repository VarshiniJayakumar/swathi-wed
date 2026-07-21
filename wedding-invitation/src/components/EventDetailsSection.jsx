import React from 'react';
import useInView from '../hooks/useInView';

const events = [
  {
    time: '11:00 AM',
    title: 'Reception',
    tamilTitle: 'வரவேற்பு',
    desc: 'Welcome guests and begin the sacred celebrations',
    icon: '🌸',
  },
  {
    time: '12:00 PM',
    title: 'Lunch',
    tamilTitle: 'பந்தி சாப்பாடு',
    desc: 'A traditional feast with family and friends',
    icon: '🍽️',
  },
  {
    time: '01:00 PM',
    title: 'Blessings',
    tamilTitle: 'ஆசீர்வாதம்',
    desc: 'Sacred ceremonies and heartfelt blessings',
    icon: '🙏',
  },
  {
    time: '02:00 PM',
    title: 'Family Photos',
    tamilTitle: 'குடும்ப புகைப்படம்',
    desc: 'Capture memories with your loved ones',
    icon: '📷',
  },
];

function EventCard({ event, index, inView }) {
  return (
    <div
      className={`relative flex gap-4 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Timeline connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B1A1A, #C8922A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4), 0 0 0 3px rgba(200,146,42,0.2)',
            flexShrink: 0,
            border: '1px solid rgba(200,146,42,0.5)',
          }}
        >
          {event.icon}
        </div>
        {index < events.length - 1 && (
          <div
            style={{
              width: '2px',
              flex: 1,
              minHeight: '40px',
              background: 'linear-gradient(180deg, #C8922A, rgba(200,146,42,0.05))',
              margin: '6px 0',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="flex-1 mb-2 rounded-2xl p-5"
        style={{
          background: 'linear-gradient(135deg, rgba(60,10,10,0.9), rgba(30,5,5,0.95))',
          border: '1px solid rgba(200,146,42,0.35)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        {/* Top accent line */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, #C8922A, transparent)',
          marginBottom: '10px',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <div>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#FFD700',
              }}
            >
              {event.title}
            </h3>
            <p
              style={{
                fontFamily: '"Noto Serif", serif',
                fontSize: '0.65rem',
                color: 'rgba(200,146,42,0.6)',
                marginTop: '2px',
              }}
            >
              {event.tamilTitle}
            </p>
          </div>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#C8922A',
              letterSpacing: '0.04em',
              background: 'rgba(200,146,42,0.12)',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(200,146,42,0.35)',
              flexShrink: 0,
              marginLeft: '8px',
            }}
          >
            {event.time}
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.8rem',
            color: '#EDD6A0',
            lineHeight: 1.7,
          }}
        >
          {event.desc}
        </p>
      </div>
    </div>
  );
}

export default function EventDetailsSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="events"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #2E0606 0%, #1A0404 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
        style={{ fontSize: '16rem', lineHeight: 1 }}
      >
        🪷
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            ✦ நிகழ்ச்சி விவரங்கள் · Event Details ✦
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
            Day Schedule
          </h2>
          {/* Diya decorative row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '0.75rem' }}>
            {['🪔', '🌸', '🪷', '🌸', '🪔'].map((e, i) => (
              <span key={i} style={{ fontSize: '1rem', opacity: 0.6, animation: `float ${3 + i * 0.3}s ease-in-out infinite ${i * 0.2}s` }}>{e}</span>
            ))}
          </div>
        </div>

        {/* Event cards */}
        <div>
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
