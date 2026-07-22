import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const calendarDays = [
  [null,null,null,null,null,null,1],
  [2,3,4,5,6,7,8],
  [9,10,11,12,13,14,15],
  [16,17,18,19,20,21,22],
  [23,24,25,26,27,28,29],
  [30,31,null,null,null,null,null],
];

export default function DateSection() {
  const { ref, inView } = useInView(0.2);
  const [calOpen, setCalOpen] = useState(false);

  React.useEffect(() => {
    if (inView) { const t = setTimeout(() => setCalOpen(true), 600); return () => clearTimeout(t); }
  }, [inView]);

  const a = (delay='0s') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  return (
    <section id="date" ref={ref} className="relative py-32 px-6 overflow-hidden"
      style={{ background:'linear-gradient(180deg,#F5EDD8 0%,#FAF6EF 100%)' }}>

      <div aria-hidden="true" style={{
        position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
        fontFamily:'"Cormorant Garamond",serif',fontSize:'clamp(8rem,20vw,16rem)',
        color:'rgba(212,175,55,0.05)',pointerEvents:'none',userSelect:'none',letterSpacing:'0.05em',
      }}>2026</div>

      <div className="max-w-lg mx-auto text-center relative z-10">
        <div style={a('0s')}>
          <span className="section-label">✦ &nbsp; Save the Date &nbsp; ✦</span>
          <div className="gold-line" style={{maxWidth:140,margin:'1rem auto 0'}}/>
        </div>

        <h2 className="gold-shimmer" style={{
          fontFamily:'"Cormorant Garamond",serif',
          fontSize:'clamp(2.2rem,8vw,4rem)',fontWeight:600,
          marginTop:'1rem',marginBottom:'0.25rem',...a('0.15s'),
        }}>30 August 2026</h2>

        <p style={{fontFamily:'Poppins',fontSize:'0.75rem',letterSpacing:'0.28em',
          color:'#B8860B',textTransform:'uppercase',marginBottom:'2.5rem',...a('0.25s')}}>
          Sunday &nbsp;·&nbsp; 11:00 AM – 3:00 PM
        </p>

        {/* Calendar */}
        <div style={{
          background:'#fff',border:'1px solid rgba(212,175,55,0.35)',
          borderRadius:20,overflow:'hidden',
          boxShadow:'0 20px 60px rgba(184,134,11,0.1)',
          ...a('0.35s'),
        }}>
          {/* Header */}
          <div style={{background:'linear-gradient(135deg,#B8860B,#D4AF37)',padding:'18px 24px',
            display:'flex',alignItems:'center',justifyContent:'center',gap:12}}>
            <span style={{fontSize:'1.2rem'}}>✦</span>
            <p style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'1.5rem',
              color:'#FFF8DC',fontWeight:600,letterSpacing:'0.1em'}}>August 2026</p>
            <span style={{fontSize:'1.2rem'}}>✦</span>
          </div>

          {/* Day headers */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',
            background:'rgba(212,175,55,0.08)',padding:'8px 12px',
            borderBottom:'1px solid rgba(212,175,55,0.15)'}}>
            {DAYS.map(d => (
              <div key={d} style={{fontFamily:'Poppins',fontSize:'0.6rem',fontWeight:600,
                color:'#B8860B',textAlign:'center',letterSpacing:'0.05em'}}>{d}</div>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            padding:'8px 12px 16px',
            transformOrigin:'top',
            transform: calOpen ? 'scaleY(1)' : 'scaleY(0)',
            opacity: calOpen ? 1 : 0,
            transition:'transform 0.6s ease, opacity 0.6s ease',
          }}>
            {calendarDays.map((week,wi) => (
              <div key={wi} style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',marginBottom:4}}>
                {week.map((day,di) => (
                  <div key={di} style={{
                    textAlign:'center',padding:'6px 2px',
                    fontFamily:'Poppins',
                    fontSize: day===30 ? '1rem' : '0.78rem',
                    fontWeight: day===30 ? 700 : 400,
                    color: day===30 ? '#fff' : day ? '#1C1008' : 'transparent',
                    background: day===30 ? 'linear-gradient(135deg,#B8860B,#D4AF37)' : 'transparent',
                    borderRadius: day===30 ? '50%' : 0,
                    width: day===30 ? 36 : 'auto',
                    height: day===30 ? 36 : 'auto',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    margin: day===30 ? '0 auto' : 0,
                    boxShadow: day===30 ? '0 4px 14px rgba(184,134,11,0.5)' : 'none',
                  }}>{day||''}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Muhurtham note */}
        <div style={{marginTop:'1.5rem',...a('0.8s')}}>
          <div style={{
            display:'inline-block',padding:'10px 24px',borderRadius:50,
            background:'rgba(212,175,55,0.1)',border:'1px solid rgba(212,175,55,0.3)',
          }}>
            <p style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'1rem',
              color:'#B8860B',fontStyle:'italic',letterSpacing:'0.05em'}}>
              🕐 Muhurtham: 11:00 AM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
