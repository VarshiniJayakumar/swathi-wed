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

        {/* Vinayagar (Ganesha) SVG */}
        <div style={{ ...a('0.25s'), marginBottom:'1rem' }}>
          <svg viewBox="0 0 120 150" width="100" height="125" style={{
            display:'block', margin:'0 auto',
            filter:'drop-shadow(0 0 20px rgba(212,175,55,0.6))',
            animation:'float 5s ease-in-out infinite',
          }}>
            <defs>
              <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#B8860B"/>
                <stop offset="40%"  stopColor="#FFD700"/>
                <stop offset="65%"  stopColor="#FFF8DC"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
              <linearGradient id="gGold2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#FFD700"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
            </defs>

            {/* ── Crown / Mukut ── */}
            <path d="M 42 28 L 38 14 L 46 20 L 60 10 L 74 20 L 82 14 L 78 28 Z"
              fill="url(#gGold)" opacity="0.95"/>
            <circle cx="60" cy="10" r="4" fill="#FFD700" opacity="0.95"/>
            <circle cx="46" cy="20" r="2.5" fill="#FFD700" opacity="0.8"/>
            <circle cx="74" cy="20" r="2.5" fill="#FFD700" opacity="0.8"/>

            {/* ── Big Left Ear ── */}
            <ellipse cx="26" cy="52" rx="18" ry="22" fill="url(#gGold)" opacity="0.88"/>
            <ellipse cx="26" cy="52" rx="11" ry="15" fill="url(#gGold2)" opacity="0.5"/>

            {/* ── Big Right Ear ── */}
            <ellipse cx="94" cy="52" rx="18" ry="22" fill="url(#gGold)" opacity="0.88"/>
            <ellipse cx="94" cy="52" rx="11" ry="15" fill="url(#gGold2)" opacity="0.5"/>

            {/* ── Head ── */}
            <ellipse cx="60" cy="48" rx="28" ry="26" fill="url(#gGold)" opacity="0.95"/>

            {/* ── Eyes ── */}
            <ellipse cx="50" cy="42" rx="5" ry="5.5" fill="#1C1008" opacity="0.85"/>
            <ellipse cx="70" cy="42" rx="5" ry="5.5" fill="#1C1008" opacity="0.85"/>
            <circle cx="51" cy="41" r="1.5" fill="#FFF8DC" opacity="0.9"/>
            <circle cx="71" cy="41" r="1.5" fill="#FFF8DC" opacity="0.9"/>

            {/* ── Third eye / tilak ── */}
            <ellipse cx="60" cy="36" rx="3" ry="4" fill="#B8860B" opacity="0.8"/>
            <circle cx="60" cy="34" r="1.5" fill="#FFD700" opacity="0.9"/>

            {/* ── Trunk curling left ── */}
            <path d="M 52 58 Q 38 68 36 82 Q 38 90 50 86 Q 56 84 54 76"
              fill="none" stroke="url(#gGold)" strokeWidth="7" strokeLinecap="round"/>
            {/* Trunk tip curl */}
            <circle cx="54" cy="76" r="5" fill="url(#gGold)" opacity="0.9"/>

            {/* ── Tusk ── */}
            <path d="M 70 60 Q 82 66 84 76 Q 82 80 78 78"
              fill="none" stroke="#FFF8DC" strokeWidth="3" strokeLinecap="round" opacity="0.85"/>

            {/* ── Neck ── */}
            <rect x="50" y="72" width="20" height="8" rx="4" fill="url(#gGold)" opacity="0.88"/>

            {/* ── Body ── */}
            <ellipse cx="60" cy="110" rx="32" ry="30" fill="url(#gGold)" opacity="0.88"/>

            {/* ── Navel / belly button ── */}
            <circle cx="60" cy="108" r="5" fill="url(#gGold2)" opacity="0.6"/>
            <circle cx="60" cy="108" r="2" fill="#FFD700" opacity="0.8"/>

            {/* ── Left arm up (blessing) ── */}
            <path d="M 30 90 Q 16 76 18 62 Q 22 56 30 60"
              fill="none" stroke="url(#gGold)" strokeWidth="9" strokeLinecap="round" opacity="0.88"/>
            {/* Left hand open */}
            <circle cx="18" cy="62" r="7" fill="url(#gGold)" opacity="0.88"/>

            {/* ── Right arm holding modak ── */}
            <path d="M 90 90 Q 106 78 104 64 Q 100 58 92 62"
              fill="none" stroke="url(#gGold)" strokeWidth="9" strokeLinecap="round" opacity="0.88"/>
            {/* Modak (sweet) */}
            <ellipse cx="104" cy="60" rx="9" ry="11" fill="url(#gGold)" opacity="0.9"/>
            <path d="M 96 54 Q 104 48 112 54" fill="none" stroke="#FFF8DC" strokeWidth="1" opacity="0.6"/>

            {/* ── Legs ── */}
            <ellipse cx="44" cy="138" rx="14" ry="10" fill="url(#gGold)" opacity="0.82"/>
            <ellipse cx="76" cy="138" rx="14" ry="10" fill="url(#gGold)" opacity="0.82"/>

            {/* ── Decorative necklace ── */}
            <path d="M 38 82 Q 60 90 82 82" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.7"/>
            {[44,52,60,68,76].map((x,i)=>(
              <circle key={i} cx={x} cy={83+(i===2?2:0)} r="2" fill="#FFD700" opacity="0.7"/>
            ))}

            {/* ── Om symbol on belly ── */}
            <text x="60" y="122" textAnchor="middle" fontSize="13"
              fill="#FFF8DC" opacity="0.55" fontFamily="serif">ॐ</text>
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
