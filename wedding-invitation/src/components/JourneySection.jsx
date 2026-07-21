import React from 'react';
import useInView from '../hooks/useInView';

const milestones = [
  {
    icon: '👀',
    title: 'First Meeting',
    tamilTitle: 'முதல் சந்திப்பு',
    desc: 'Two hearts crossed paths and a beautiful story began.',
    year: '2022',
  },
  {
    icon: '🤝',
    title: 'Friends',
    tamilTitle: 'நட்பு',
    desc: 'Laughter, trust, and countless memories shared.',
    year: '2023',
  },
  {
    icon: '❤️',
    title: 'Family',
    tamilTitle: 'குடும்பம்',
    desc: 'Families came together, blessings were given.',
    year: '2025',
  },
  {
    icon: '💍',
    title: 'Wedding Day',
    tamilTitle: 'திருமண நாள்',
    desc: 'Forever begins on 30 August 2026.',
    year: '2026',
  },
];

function MilestoneCard({ item, index, total }) {
  const { ref, inView } = useInView(0.25);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ marginBottom: index < total - 1 ? '2rem' : '0' }}
    >
      {/* Card */}
      <div
        className={`
          rounded-2xl p-5 shadow-xl
          w-full max-w-xs
          transition-all duration-700
          ${inView ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'}
          md:${isLeft ? 'mr-auto md:ml-0 md:mr-[calc(50%+1rem)]' : 'ml-auto md:mr-0 md:ml-[calc(50%+1rem)]'}
        `}
        style={{
          transitionDelay: `${index * 0.15}s`,
          background: 'linear-gradient(135deg, rgba(60,10,10,0.9), rgba(30,5,5,0.95))',
          border: '1px solid rgba(200,146,42,0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Top accent */}
        <div style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #C8922A, transparent)',
          marginBottom: '12px',
          borderRadius: '1px',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <span
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B1A1A, #C8922A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3), 0 0 0 2px rgba(200,146,42,0.2)',
            }}
          >
            {item.icon}
          </span>
          <div>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#FFD700',
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontFamily: '"Noto Serif", serif',
                fontSize: '0.65rem',
                color: 'rgba(200,146,42,0.7)',
              }}
            >
              {item.tamilTitle}
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#C8922A',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}
            >
              {item.year}
            </p>
          </div>
        </div>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.8rem',
            color: '#EDD6A0',
            lineHeight: 1.7,
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Center lotus dot (desktop) */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center"
        style={{ zIndex: 2 }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD700, #C8922A)',
            boxShadow: '0 0 0 4px rgba(200,146,42,0.2), 0 0 12px rgba(200,146,42,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.55rem',
          }}
        >
          ✦
        </div>
      </div>
    </div>
  );
}

export default function JourneySection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A0404 0%, #2E0606 50%, #1A0404 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
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
            ✦ நம் காதல் கதை · Our Journey ✦
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
            A Story of Love
          </h2>
          {/* Lotus divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C8922A)' }} />
            <span style={{ fontSize: '1.4rem' }}>🪷</span>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C8922A, transparent)' }} />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="timeline-line hidden md:block" />

          {/* Cards */}
          <div className="relative z-10">
            {milestones.map((item, i) => (
              <MilestoneCard
                key={item.title}
                item={item}
                index={i}
                total={milestones.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
