import React, { useState } from 'react';

export default function OpeningScreen({ onOpen }) {
  const [clicked, setClicked] = useState(false);

  const handleOpen = () => {
    setClicked(true);
    setTimeout(() => onOpen(), 1200);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'linear-gradient(135deg, #0A0804 0%, #1C1008 50%, #0A0804 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 1s ease, transform 1s ease',
      opacity: clicked ? 0 : 1,
      transform: clicked ? 'scale(1.05)' : 'scale(1)',
      pointerEvents: clicked ? 'none' : 'auto',
    }}>

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      {/* Top gold line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}/>
      {/* Bottom gold line */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}/>

      {/* Corner ornaments */}
      {[
        { pos:{ top:20, left:24 }, r:'0deg' },
        { pos:{ top:20, right:24 }, r:'90deg' },
        { pos:{ bottom:20, left:24 }, r:'270deg' },
        { pos:{ bottom:20, right:24 }, r:'180deg' },
      ].map((c,i) => (
        <div key={i} aria-hidden="true" style={{ position:'absolute', ...c.pos, width:40, height:40, pointerEvents:'none' }}>
          <svg viewBox="0 0 40 40" fill="none" style={{ width:'100%', height:'100%', transform:`rotate(${c.r})` }}>
            <path d="M2 2 L2 18 M2 2 L18 2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.6"/>
          </svg>
        </div>
      ))}

      {/* Content */}
      <div style={{ textAlign:'center', padding:'0 2rem', maxWidth:480 }}>

        {/* Ring icon */}
        <div style={{
          fontSize:'3.5rem', marginBottom:'1.5rem',
          animation:'float 4s ease-in-out infinite',
          filter:'drop-shadow(0 6px 20px rgba(212,175,55,0.6))',
        }}>💍</div>

        {/* Together */}
        <p style={{
          fontFamily:'"Cormorant Garamond", serif',
          fontSize:'0.8rem', letterSpacing:'0.45em',
          textTransform:'uppercase', color:'#D4AF37',
          marginBottom:'1rem',
        }}>
          ✦ &nbsp; Wedding Invitation &nbsp; ✦
        </p>

        {/* Names */}
        <h1 style={{
          fontFamily:'"Great Vibes", cursive',
          fontSize:'clamp(2.8rem, 10vw, 5rem)',
          lineHeight: 1.2,
          background:'linear-gradient(90deg,#B8860B 0%,#FFD700 30%,#FFF8DC 50%,#FFD700 70%,#B8860B 100%)',
          backgroundSize:'200% auto',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent',
          backgroundClip:'text',
          animation:'shimmer 4s linear infinite',
          marginBottom:'0.25rem',
        }}>
          Nandha &amp; Swathi
        </h1>

        {/* Date */}
        <div style={{ margin:'1.5rem 0' }}>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)', maxWidth:200, margin:'0 auto 1rem' }}/>
          <p style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'1.1rem', color:'#FAF6EF', letterSpacing:'0.08em' }}>
            30 August 2026
          </p>
          <p style={{ fontFamily:'Poppins', fontSize:'0.68rem', color:'#B8860B', letterSpacing:'0.28em', textTransform:'uppercase', marginTop:4 }}>
            Sunday &nbsp;·&nbsp; Coimbatore
          </p>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)', maxWidth:200, margin:'1rem auto 0' }}/>
        </div>

        {/* Open button */}
        <button
          onClick={handleOpen}
          style={{
            marginTop:'0.5rem',
            background:'linear-gradient(135deg,#B8860B 0%,#D4AF37 50%,#B8860B 100%)',
            backgroundSize:'200% auto',
            color:'#FFF8DC',
            border:'none',
            padding:'16px 48px',
            borderRadius:'50px',
            fontFamily:'Poppins',
            fontWeight:500,
            fontSize:'0.85rem',
            letterSpacing:'3px',
            textTransform:'uppercase',
            cursor:'pointer',
            boxShadow:'0 8px 32px rgba(184,134,11,0.5)',
            transition:'all 0.3s ease',
            animation:'pulseGold 2.5s ease-in-out infinite',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundPosition='right center'; e.currentTarget.style.transform='translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundPosition='left center'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          Open Invitation
        </button>

        <p style={{ fontFamily:'Poppins', fontSize:'0.62rem', color:'rgba(212,175,55,0.4)', marginTop:'1.25rem', letterSpacing:'0.15em' }}>
          tap to reveal
        </p>
      </div>
    </div>
  );
}
