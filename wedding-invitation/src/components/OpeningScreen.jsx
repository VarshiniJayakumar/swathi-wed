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

        {/* Traditional Kalash SVG */}
        <div style={{ ...a('0.25s'), marginBottom:'1rem' }}>
          <svg viewBox="0 0 120 140" width="90" height="105" style={{
            display:'block', margin:'0 auto',
            filter:'drop-shadow(0 0 20px rgba(212,175,55,0.6))',
            animation:'float 5s ease-in-out infinite',
          }}>
            <defs>
              <linearGradient id="kg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#B8860B"/>
                <stop offset="45%"  stopColor="#FFD700"/>
                <stop offset="65%"  stopColor="#FFF8DC"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
              <linearGradient id="kg2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#FFD700"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
            </defs>

            {/* Base plate */}
            <ellipse cx="60" cy="128" rx="30" ry="5" fill="url(#kg2)" opacity="0.8"/>

            {/* Pot body */}
            <path d="M 30 100 Q 20 70 28 50 Q 36 30 60 28 Q 84 30 92 50 Q 100 70 90 100 Z"
              fill="url(#kg1)" opacity="0.9"/>

            {/* Pot neck */}
            <rect x="44" y="22" width="32" height="10" rx="4" fill="url(#kg1)"/>

            {/* Pot rim */}
            <ellipse cx="60" cy="22" rx="20" ry="5" fill="url(#kg2)" opacity="0.95"/>

            {/* Pot base curve */}
            <ellipse cx="60" cy="100" rx="30" ry="8" fill="url(#kg2)" opacity="0.7"/>

            {/* Decorative band on pot */}
            <path d="M 32 72 Q 60 78 88 72" fill="none" stroke="#FFF8DC" strokeWidth="1.5" opacity="0.6"/>
            <path d="M 30 82 Q 60 88 90 82" fill="none" stroke="#FFF8DC" strokeWidth="1" opacity="0.4"/>

            {/* Small dot pattern on pot */}
            {[40,52,60,68,80].map((x,i) => (
              <circle key={i} cx={x} cy={62} r="2" fill="#FFF8DC" opacity="0.5"/>
            ))}

            {/* Coconut on top */}
            <ellipse cx="60" cy="14" rx="12" ry="10" fill="url(#kg1)" opacity="0.95"/>
            <ellipse cx="60" cy="12" rx="6" ry="5" fill="#B8860B" opacity="0.6"/>

            {/* Left mango leaf */}
            <path d="M 48 20 Q 28 8 26 -2 Q 36 4 44 16 Z" fill="url(#kg2)" opacity="0.85"/>
            <line x1="35" y1="9" x2="44" y2="16" stroke="#FFF8DC" strokeWidth="0.6" opacity="0.5"/>

            {/* Right mango leaf */}
            <path d="M 72 20 Q 92 8 94 -2 Q 84 4 76 16 Z" fill="url(#kg2)" opacity="0.85"/>
            <line x1="85" y1="9" x2="76" y2="16" stroke="#FFF8DC" strokeWidth="0.6" opacity="0.5"/>

            {/* Center leaf */}
            <path d="M 54 18 Q 60 2 66 18 Z" fill="url(#kg2)" opacity="0.9"/>

            {/* Base stand */}
            <rect x="42" y="100" width="36" height="6" rx="2" fill="url(#kg1)" opacity="0.8"/>
            <rect x="36" y="106" width="48" height="6" rx="2" fill="url(#kg1)" opacity="0.9"/>
            <rect x="30" y="112" width="60" height="6" rx="3" fill="url(#kg2)" opacity="0.85"/>

            {/* OM symbol on pot */}
            <text x="60" y="68" textAnchor="middle" fontSize="18" fill="#FFF8DC" opacity="0.7" fontFamily="serif">ॐ</text>
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
