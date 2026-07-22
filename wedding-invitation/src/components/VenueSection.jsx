import React from 'react';
import useInView from '../hooks/useInView';

export default function VenueSection() {
  const { ref, inView } = useInView(0.2);
  const mapsUrl = 'https://www.google.com/maps/search/Thelungupalayam+Vaithiyasalai+Coimbatore';

  const a = (delay = '0s') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  return (
    <section
      id="venue"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#FAF6EF' }}
    >
      {/* Decorative large text watermark */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily:'"Cormorant Garamond", serif', fontSize:'clamp(8rem,20vw,16rem)',
        color:'rgba(212,175,55,0.05)', letterSpacing:'0.1em', pointerEvents:'none', userSelect:'none',
      }}>
        VENUE
      </div>

      <div className="max-w-lg mx-auto text-center relative z-10">
        <div style={a('0s')}>
          <span className="section-label">✦ &nbsp; Venue &amp; Location &nbsp; ✦</span>
          <div className="gold-line" style={{ maxWidth: 160, margin: '1rem auto 0' }} />
        </div>

        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2rem,7vw,3rem)',
          color: '#1C1008', fontWeight: 400,
          marginTop: '1rem', marginBottom: '2.5rem',
          ...a('0.15s'),
        }}>
          Where Love Begins
        </h2>

        {/* Venue card */}
        <div style={{
          background: '#fff',
          border: '1px solid rgba(212,175,55,0.35)',
          borderRadius: 24,
          padding: 'clamp(2rem,6vw,3rem)',
          boxShadow: '0 20px 60px rgba(184,134,11,0.1), 0 4px 20px rgba(0,0,0,0.06)',
          ...a('0.3s'),
        }}>
          {/* Top gold accent */}
          <div style={{ height:3, background:'linear-gradient(90deg,transparent,#D4AF37,#FFD700,#D4AF37,transparent)', borderRadius:2, marginBottom:'2rem' }} />

          {/* Icon */}
          <div style={{
            width:72, height:72, borderRadius:'50%',
            background:'linear-gradient(135deg,#B8860B,#D4AF37)',
            display:'flex', alignItems:'center', justifyContent:'center',
            margin:'0 auto 1.5rem',
            fontSize:'1.8rem',
            boxShadow:'0 8px 24px rgba(184,134,11,0.3), 0 0 0 4px rgba(212,175,55,0.15)',
          }}>🏛️</div>

          <h3 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'2rem', color:'#1C1008', fontWeight:600, marginBottom:6 }}>
            Thelungupalayam
          </h3>
          <p style={{ fontFamily:'Poppins', fontSize:'0.9rem', color:'#5C3D1E', lineHeight:1.8 }}>
            Vaithiyasalai Near, Coimbatore
          </p>

          <div className="gold-line" style={{ margin:'1.5rem 0' }} />

          {/* Date & time chips */}
          <div style={{ display:'flex', justifyContent:'center', gap:'1rem', marginBottom:'2rem', flexWrap:'wrap' }}>
            {[
              { icon:'📅', label:'30 August 2026', sub:'Sunday' },
              { icon:'🕐', label:'11:00 AM – 3:00 PM', sub:'Muhurtham' },
            ].map(({ icon, label, sub }) => (
              <div key={label} style={{
                padding:'10px 18px', borderRadius:12,
                background:'rgba(212,175,55,0.08)',
                border:'1px solid rgba(212,175,55,0.25)',
                textAlign:'center',
              }}>
                <span style={{ fontSize:'1.2rem', display:'block', marginBottom:4 }}>{icon}</span>
                <p style={{ fontFamily:'Poppins', fontSize:'0.75rem', color:'#B8860B', fontWeight:500 }}>{label}</p>
                <p style={{ fontFamily:'Poppins', fontSize:'0.62rem', color:'rgba(184,134,11,0.6)', marginTop:2, letterSpacing:'0.1em', textTransform:'uppercase' }}>{sub}</p>
              </div>
            ))}
          </div>

          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <span>📍</span> Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
