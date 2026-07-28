import React, { useEffect, useState } from 'react';

// Floating particles
function Particles() {
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top:  `${Math.random() * 100}%`,
      size: `${4 + Math.random() * 6}px`,
      delay: `${Math.random() * 4}s`,
      dur:   `${3 + Math.random() * 4}s`,
      opacity: 0.3 + Math.random() * 0.5,
    }))
  );

  return (
    <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position:'absolute',
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          borderRadius:'50%',
          background:'radial-gradient(circle, #C9B8FF, #8B6FCC)',
          opacity: p.opacity,
          animationName:'float',
          animationDuration: p.dur,
          animationDelay: p.delay,
          animationTimingFunction:'ease-in-out',
          animationIterationCount:'infinite',
          boxShadow:`0 0 ${p.size} rgba(201,184,255,0.6)`,
        }}/>
      ))}
    </div>
  );
}

// Decorative mandala-style ring
function Ring({ size, opacity, blur = 0 }) {
  return (
    <div aria-hidden="true" style={{
      position:'absolute',
      top:'50%', left:'50%',
      transform:'translate(-50%,-50%)',
      width: size, height: size,
      borderRadius:'50%',
      border:'1px solid rgba(201,184,255,0.2)',
      opacity,
      filter: blur ? `blur(${blur}px)` : 'none',
      pointerEvents:'none',
    }}/>
  );
}

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

  const a = (delay, from = 'translateY(30px)') => ({
    opacity:   loaded ? 1 : 0,
    transform: loaded ? 'none' : from,
    transition: `opacity 1s ease ${delay}, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:9999,
      background:'linear-gradient(160deg, #06041A 0%, #0D0828 30%, #150A35 60%, #0A0620 100%)',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      overflow:'hidden',
      opacity: closing ? 0 : 1,
      transform: closing ? 'scale(1.04)' : 'scale(1)',
      transition:'opacity 1.1s ease, transform 1.1s ease',
      pointerEvents: closing ? 'none' : 'auto',
    }}>

      {/* Floating particles */}
      <Particles />

      {/* Concentric rings */}
      <Ring size="700px" opacity={0.12} />
      <Ring size="540px" opacity={0.1} />
      <Ring size="380px" opacity={0.08} />

      {/* Large radial glow — purple center */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(120,80,220,0.18) 0%, rgba(80,40,180,0.08) 40%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* Top shimmer line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2,
        background:'linear-gradient(90deg,transparent,#C9B8FF,#A78BFA,#C9B8FF,transparent)' }}/>
      {/* Bottom shimmer line */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2,
        background:'linear-gradient(90deg,transparent,#C9B8FF,#A78BFA,#C9B8FF,transparent)' }}/>

      {/* Corner ornaments */}
      {[
        { pos:{top:20,left:24}, r:'0deg' },
        { pos:{top:20,right:24}, r:'90deg' },
        { pos:{bottom:20,left:24}, r:'270deg' },
        { pos:{bottom:20,right:24}, r:'180deg' },
      ].map((c,i) => (
        <div key={i} aria-hidden="true" style={{ position:'absolute',...c.pos, width:44, height:44, pointerEvents:'none', zIndex:2 }}>
          <svg viewBox="0 0 44 44" fill="none" style={{ width:'100%', height:'100%', transform:`rotate(${c.r})` }}>
            <path d="M3 3 L3 20 M3 3 L20 3" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <circle cx="3" cy="3" r="2.5" fill="#A78BFA" opacity="0.7"/>
            <circle cx="20" cy="3" r="1" fill="#A78BFA" opacity="0.4"/>
            <circle cx="3" cy="20" r="1" fill="#A78BFA" opacity="0.4"/>
          </svg>
        </div>
      ))}

      {/* Content */}
      <div style={{ position:'relative', zIndex:5, textAlign:'center', padding:'0 1.5rem', maxWidth:600, width:'100%' }}>

        {/* Icon */}
        <div style={{ ...a('0.1s','translateY(-20px)'), marginBottom:'1.2rem' }}>
          <span style={{
            fontSize:'2.8rem', display:'block',
            filter:'drop-shadow(0 0 16px rgba(167,139,250,0.8))',
            animation:'float 4s ease-in-out infinite',
          }}>💌</span>
        </div>

        {/* Label */}
        <div style={{ ...a('0.2s') }}>
          <span style={{
            fontFamily:'Poppins', fontSize:'0.65rem',
            letterSpacing:'0.42em', textTransform:'uppercase',
            color:'#A78BFA',
          }}>✦ &nbsp; You are cordially invited &nbsp; ✦</span>
        </div>

        {/* Divider */}
        <div style={{ ...a('0.3s'), margin:'1rem 0' }}>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#A78BFA,#C9B8FF,#A78BFA,transparent)' }}/>
        </div>

        {/* Groom name */}
        <div style={{ ...a('0.45s','translateX(-40px)') }}>
          <h1 style={{
            fontFamily:'"Great Vibes",cursive',
            fontSize:'clamp(2rem,7vw,5.5rem)',
            lineHeight:1.2,
            background:'linear-gradient(90deg,#A78BFA 0%,#E0D7FF 30%,#fff 50%,#E0D7FF 70%,#A78BFA 100%)',
            backgroundSize:'200% auto',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            animation:'shimmer 4s linear infinite',
          }}>S. Nandhakumar</h1>
        </div>

        {/* and */}
        <div style={{ ...a('0.6s'), display:'flex', alignItems:'center', justifyContent:'center', gap:12, margin:'0.3rem 0' }}>
          <div style={{ height:1, flex:1, maxWidth:80, background:'linear-gradient(90deg,transparent,#A78BFA)' }}/>
          <span style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'1.3rem', color:'#C9B8FF', letterSpacing:'0.2em', fontStyle:'italic' }}>and</span>
          <div style={{ height:1, flex:1, maxWidth:80, background:'linear-gradient(90deg,#A78BFA,transparent)' }}/>
        </div>

        {/* Bride name */}
        <div style={{ ...a('0.75s','translateX(40px)') }}>
          <h1 style={{
            fontFamily:'"Great Vibes",cursive',
            fontSize:'clamp(2rem,7vw,5.5rem)',
            lineHeight:1.2,
            background:'linear-gradient(90deg,#A78BFA 0%,#E0D7FF 30%,#fff 50%,#E0D7FF 70%,#A78BFA 100%)',
            backgroundSize:'200% auto',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            animation:'shimmer 4s linear infinite',
          }}>K. Swathilakshmi</h1>
        </div>

        {/* Date */}
        <div style={{ ...a('0.95s'), marginTop:'1.5rem' }}>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#A78BFA,#C9B8FF,#A78BFA,transparent)', maxWidth:240, margin:'0 auto 1rem' }}/>
          <p style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(1.1rem,3.5vw,1.6rem)', color:'#E0D7FF', fontWeight:300, letterSpacing:'0.08em' }}>
            30 August 2026
          </p>
          <p style={{ fontFamily:'Poppins', fontSize:'0.65rem', color:'#A78BFA', letterSpacing:'0.32em', textTransform:'uppercase', marginTop:5 }}>
            Sunday &nbsp;·&nbsp; 11:00 AM &nbsp;·&nbsp; Coimbatore
          </p>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#A78BFA,#C9B8FF,#A78BFA,transparent)', maxWidth:240, margin:'1rem auto 0' }}/>
        </div>

        {/* Button */}
        <div style={{ ...a('1.2s'), marginTop:'1.8rem' }}>
          <button
            onClick={handleOpen}
            style={{
              background:'linear-gradient(135deg,#6D28D9 0%,#A78BFA 50%,#6D28D9 100%)',
              backgroundSize:'200% auto',
              color:'#fff',
              border:'1px solid rgba(167,139,250,0.5)',
              padding:'15px 48px',
              borderRadius:'50px',
              fontFamily:'Poppins',
              fontWeight:500,
              fontSize:'0.82rem',
              letterSpacing:'3px',
              textTransform:'uppercase',
              cursor:'pointer',
              boxShadow:'0 8px 32px rgba(109,40,217,0.5), 0 0 0 0 rgba(167,139,250,0.4)',
              transition:'all 0.3s ease',
              animation:'pulseGold 2.5s ease-in-out infinite',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(109,40,217,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(109,40,217,0.5)'; }}
          >
            Open Invitation
          </button>

          <p style={{ fontFamily:'Poppins', fontSize:'0.6rem', color:'rgba(167,139,250,0.45)', marginTop:'0.9rem', letterSpacing:'0.15em' }}>
            tap to reveal ✦
          </p>
        </div>
      </div>
    </div>
  );
}
