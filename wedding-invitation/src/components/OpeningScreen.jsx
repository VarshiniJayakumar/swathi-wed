import React, { useEffect, useState } from 'react';

export default function OpeningScreen({ onOpen }) {
  const [loaded, setLoaded] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(() => onOpen(), 1100);
  };

  const a = (delay, from = 'translateY(24px)') => ({
    opacity:   loaded ? 1 : 0,
    transform: loaded ? 'none' : from,
    transition: `opacity 1s ease ${delay}, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:9999,
      background:'linear-gradient(160deg,#0A0804 0%,#1C1008 40%,#2A1A06 70%,#0A0804 100%)',
      display:'flex', alignItems:'center', justifyContent:'center',
      overflow:'hidden',
      opacity: closing ? 0 : 1,
      transform: closing ? 'scale(1.04)' : 'scale(1)',
      transition:'opacity 1.1s ease, transform 1.1s ease',
      pointerEvents: closing ? 'none' : 'auto',
    }}>

      {/* Radial warm glow */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(212,175,55,0.13) 0%, rgba(184,134,11,0.05) 45%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* Outer ornamental border frame */}
      <div style={{
        position:'absolute',
        inset:'clamp(16px,3vw,32px)',
        border:'1px solid rgba(212,175,55,0.35)',
        borderRadius:4,
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute',
        inset:'clamp(22px,4vw,44px)',
        border:'1px solid rgba(212,175,55,0.15)',
        borderRadius:2,
        pointerEvents:'none',
      }}/>

      {/* Corner diamonds */}
      {[
        { top:'clamp(16px,3vw,32px)', left:'clamp(16px,3vw,32px)', transform:'none' },
        { top:'clamp(16px,3vw,32px)', right:'clamp(16px,3vw,32px)', transform:'none' },
        { bottom:'clamp(16px,3vw,32px)', left:'clamp(16px,3vw,32px)', transform:'none' },
        { bottom:'clamp(16px,3vw,32px)', right:'clamp(16px,3vw,32px)', transform:'none' },
      ].map((pos,i) => (
        <div key={i} aria-hidden="true" style={{
          position:'absolute', ...pos,
          width:10, height:10,
          background:'#D4AF37',
          transform:'rotate(45deg)',
          opacity:0.8,
          pointerEvents:'none',
        }}/>
      ))}

      {/* Top center ornament */}
      <div aria-hidden="true" style={{
        position:'absolute', top:'clamp(10px,2vw,20px)', left:'50%', transform:'translateX(-50%)',
        display:'flex', alignItems:'center', gap:8, pointerEvents:'none',
      }}>
        <div style={{ width:60, height:1, background:'linear-gradient(90deg,transparent,#D4AF37)' }}/>
        <span style={{ color:'#D4AF37', fontSize:'1rem' }}>✦</span>
        <div style={{ width:60, height:1, background:'linear-gradient(90deg,#D4AF37,transparent)' }}/>
      </div>

      {/* Bottom center ornament */}
      <div aria-hidden="true" style={{
        position:'absolute', bottom:'clamp(10px,2vw,20px)', left:'50%', transform:'translateX(-50%)',
        display:'flex', alignItems:'center', gap:8, pointerEvents:'none',
      }}>
        <div style={{ width:60, height:1, background:'linear-gradient(90deg,transparent,#D4AF37)' }}/>
        <span style={{ color:'#D4AF37', fontSize:'1rem' }}>✦</span>
        <div style={{ width:60, height:1, background:'linear-gradient(90deg,#D4AF37,transparent)' }}/>
      </div>

      {/* Main content */}
      <div style={{ position:'relative', zIndex:5, textAlign:'center', padding:'0 2rem', maxWidth:580, width:'100%' }}>

        {/* Top label */}
        <div style={{ ...a('0.1s','translateY(-16px)'), marginBottom:'1rem' }}>
          <span style={{
            fontFamily:'Poppins', fontSize:'0.62rem',
            letterSpacing:'0.45em', textTransform:'uppercase', color:'#B8860B',
          }}>✦ &nbsp; Together in Love &nbsp; ✦</span>
        </div>

        {/* Krishna Radha silhouette SVG */}
        <div style={{ ...a('0.25s'), marginBottom:'1rem' }}>
          <svg viewBox="0 0 160 180" width="130" height="145" style={{
            display:'block', margin:'0 auto',
            filter:'drop-shadow(0 0 22px rgba(212,175,55,0.55))',
            animation:'float 5s ease-in-out infinite',
          }}>
            <defs>
              <linearGradient id="silGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#B8860B"/>
                <stop offset="40%"  stopColor="#FFD700"/>
                <stop offset="65%"  stopColor="#FFF8DC"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
              <linearGradient id="silGold2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#B8860B"/>
                <stop offset="50%"  stopColor="#FFD700"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
            </defs>

            {/* ── RADHA (left figure) ── */}
            {/* Radha head */}
            <ellipse cx="52" cy="28" rx="13" ry="14" fill="url(#silGold)" opacity="0.92"/>
            {/* Radha hair bun */}
            <ellipse cx="52" cy="16" rx="7" ry="5" fill="url(#silGold)" opacity="0.9"/>
            {/* Radha bun decoration */}
            <circle cx="52" cy="12" r="3" fill="#FFD700" opacity="0.85"/>
            {/* Radha neck */}
            <rect x="48" y="41" width="8" height="7" rx="3" fill="url(#silGold)" opacity="0.88"/>
            {/* Radha body/saree */}
            <path d="M 36 48 Q 32 70 30 95 Q 34 110 52 112 Q 70 110 72 95 Q 72 70 66 48 Z"
              fill="url(#silGold)" opacity="0.88"/>
            {/* Radha saree drape */}
            <path d="M 32 70 Q 20 75 18 88 Q 22 95 30 90" fill="url(#silGold)" opacity="0.7"/>
            {/* Radha left arm raised holding flute end */}
            <path d="M 38 55 Q 28 45 24 38" fill="none" stroke="url(#silGold)" strokeWidth="5" strokeLinecap="round" opacity="0.88"/>
            {/* Radha right arm toward Krishna */}
            <path d="M 64 58 Q 76 60 84 58" fill="none" stroke="url(#silGold)" strokeWidth="5" strokeLinecap="round" opacity="0.88"/>
            {/* Radha legs */}
            <ellipse cx="46" cy="128" rx="7" ry="18" fill="url(#silGold)" opacity="0.82"/>
            <ellipse cx="58" cy="130" rx="7" ry="16" fill="url(#silGold)" opacity="0.82"/>

            {/* ── KRISHNA (right figure) ── */}
            {/* Krishna head */}
            <ellipse cx="108" cy="24" rx="13" ry="14" fill="url(#silGold2)" opacity="0.92"/>
            {/* Krishna crown / mukut */}
            <path d="M 96 18 Q 100 8 108 6 Q 116 8 120 18" fill="url(#silGold2)" opacity="0.9"/>
            <path d="M 100 12 Q 108 4 116 12" fill="url(#silGold2)" opacity="0.85"/>
            <circle cx="108" cy="5" r="3.5" fill="#FFD700" opacity="0.9"/>
            {/* Peacock feather on crown */}
            <path d="M 108 5 Q 112 -4 114 -10" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.8"/>
            <ellipse cx="114" cy="-11" rx="4" ry="6" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.7"/>
            <circle cx="114" cy="-11" r="2" fill="#FFD700" opacity="0.8"/>
            {/* Krishna neck */}
            <rect x="104" y="37" width="8" height="7" rx="3" fill="url(#silGold2)" opacity="0.88"/>
            {/* Krishna body */}
            <path d="M 90 44 Q 86 66 88 92 Q 92 108 108 110 Q 124 108 128 92 Q 130 66 126 44 Z"
              fill="url(#silGold2)" opacity="0.88"/>
            {/* Krishna dhoti drape */}
            <path d="M 128 68 Q 140 72 142 85 Q 138 92 130 88" fill="url(#silGold2)" opacity="0.7"/>
            {/* Krishna right arm raised playing flute */}
            <path d="M 122 52 Q 134 44 140 38" fill="none" stroke="url(#silGold2)" strokeWidth="5" strokeLinecap="round" opacity="0.88"/>
            {/* Krishna left arm toward Radha */}
            <path d="M 92 56 Q 80 58 74 56" fill="none" stroke="url(#silGold2)" strokeWidth="5" strokeLinecap="round" opacity="0.88"/>
            {/* Flute */}
            <path d="M 24 38 Q 80 50 140 38" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            {/* Krishna legs — tribhanga pose (slight bend) */}
            <path d="M 98 110 Q 96 128 100 148" fill="none" stroke="url(#silGold2)" strokeWidth="10" strokeLinecap="round" opacity="0.82"/>
            <path d="M 118 110 Q 122 126 118 148" fill="none" stroke="url(#silGold2)" strokeWidth="10" strokeLinecap="round" opacity="0.82"/>

            {/* ── Joining hands in center ── */}
            <circle cx="80" cy="58" r="6" fill="#FFD700" opacity="0.85"/>

            {/* ── Heart above ── */}
            <path d="M 80 -8 C 75 -14 68 -12 68 -6 C 68 0 80 8 80 8 C 80 8 92 0 92 -6 C 92 -12 85 -14 80 -8 Z"
              fill="#FFD700" opacity="0.7"/>

            {/* Ground line */}
            <line x1="20" y1="150" x2="140" y2="150" stroke="url(#silGold)" strokeWidth="1" opacity="0.4"/>
            {/* Decorative dots on ground */}
            {[30,50,70,80,90,110,130].map((x,i)=>(
              <circle key={i} cx={x} cy="154" r="1.5" fill="#D4AF37" opacity="0.4"/>
            ))}
          </svg>
        </div>

        {/* Wedding of label */}
        <div style={{ ...a('0.35s'), marginBottom:'0.5rem' }}>
          <span style={{
            fontFamily:'Poppins', fontSize:'0.62rem',
            letterSpacing:'0.45em', textTransform:'uppercase', color:'#B8860B',
          }}>— Wedding Invitation —</span>
        </div>

        {/* Gold rule with diamond */}
        <div style={{ ...a('0.4s'), display:'flex', alignItems:'center', gap:10, justifyContent:'center', margin:'0.5rem 0 1.2rem' }}>
          <div style={{ height:1, flex:1, maxWidth:100, background:'linear-gradient(90deg,transparent,#D4AF37)' }}/>
          <div style={{ width:7, height:7, background:'#D4AF37', transform:'rotate(45deg)', flexShrink:0 }}/>
          <div style={{ height:1, flex:1, maxWidth:100, background:'linear-gradient(90deg,#D4AF37,transparent)' }}/>
        </div>

        {/* Full names stacked */}
        <div style={{ ...a('0.5s','translateX(-30px)'), marginBottom:'0.2rem' }}>
          <p style={{
            fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(1rem,3.5vw,1.6rem)',
            color:'#FAF6EF', fontWeight:300, letterSpacing:'0.1em',
          }}>S. Nandhakumar</p>
        </div>

        <div style={{ ...a('0.55s'), marginBottom:'0.2rem' }}>
          <span style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'1rem', color:'#B8860B', fontStyle:'italic', letterSpacing:'0.15em' }}>&amp;</span>
        </div>

        <div style={{ ...a('0.6s','translateX(30px)'), marginBottom:'1.4rem' }}>
          <p style={{
            fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(1rem,3.5vw,1.6rem)',
            color:'#FAF6EF', fontWeight:300, letterSpacing:'0.1em',
          }}>K. Swathilakshmi</p>
        </div>

        {/* Gold rule */}
        <div style={{ ...a('0.7s'), display:'flex', alignItems:'center', gap:10, justifyContent:'center', marginBottom:'1.2rem' }}>
          <div style={{ height:1, flex:1, maxWidth:80, background:'linear-gradient(90deg,transparent,#D4AF37)' }}/>
          <span style={{ color:'#D4AF37', fontSize:'0.7rem', letterSpacing:'4px' }}>◆◆◆</span>
          <div style={{ height:1, flex:1, maxWidth:80, background:'linear-gradient(90deg,#D4AF37,transparent)' }}/>
        </div>

        {/* Date & place */}
        <div style={{ ...a('0.8s') }}>
          <p style={{
            fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(1.1rem,3vw,1.45rem)',
            color:'#D4AF37', fontWeight:400, letterSpacing:'0.06em',
          }}>30 August 2026</p>
          <p style={{
            fontFamily:'Poppins', fontSize:'0.65rem',
            color:'rgba(212,175,55,0.6)', letterSpacing:'0.3em',
            textTransform:'uppercase', marginTop:5,
          }}>Sunday &nbsp;·&nbsp; Arjun Mahal, Coimbatore</p>
        </div>

        {/* Button */}
        <div style={{ ...a('1s'), marginTop:'2rem' }}>
          <button
            onClick={handleOpen}
            style={{
              background:'transparent',
              color:'#D4AF37',
              border:'1px solid #D4AF37',
              padding:'13px 44px',
              borderRadius:'50px',
              fontFamily:'Poppins',
              fontWeight:500,
              fontSize:'0.78rem',
              letterSpacing:'3px',
              textTransform:'uppercase',
              cursor:'pointer',
              boxShadow:'0 0 20px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.05)',
              transition:'all 0.35s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background='rgba(212,175,55,0.12)';
              e.currentTarget.style.transform='translateY(-2px)';
              e.currentTarget.style.boxShadow='0 8px 32px rgba(212,175,55,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background='transparent';
              e.currentTarget.style.transform='translateY(0)';
              e.currentTarget.style.boxShadow='0 0 20px rgba(212,175,55,0.15)';
            }}
          >
            Open Invitation
          </button>
        </div>

      </div>
    </div>
  );
}
