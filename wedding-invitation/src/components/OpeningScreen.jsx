import React, { useEffect, useState } from 'react';

export default function OpeningScreen({ onOpen }) {
  const [loaded, setLoaded] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(() => onOpen(), 1000);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'linear-gradient(135deg, #0A0804 0%, #1C1008 40%, #2E1A0A 70%, #0A0804 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: closing ? 0 : 1,
      transition: 'opacity 1s ease',
      pointerEvents: closing ? 'none' : 'auto',
    }}>

      {/* Grain overlay */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
        backgroundSize:'200px 200px', pointerEvents:'none', zIndex:1,
      }}/>

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* Top/bottom border lines */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}/>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}/>

      {/* Corner ornaments */}
      {[
        { pos:{top:20,left:24}, r:'0deg' },
        { pos:{top:20,right:24}, r:'90deg' },
        { pos:{bottom:20,left:24}, r:'270deg' },
        { pos:{bottom:20,right:24}, r:'180deg' },
      ].map((c,i) => (
        <div key={i} aria-hidden="true" style={{ position:'absolute', ...c.pos, width:40, height:40, pointerEvents:'none', zIndex:2 }}>
          <svg viewBox="0 0 40 40" fill="none" style={{ width:'100%', height:'100%', transform:`rotate(${c.r})` }}>
            <path d="M2 2 L2 18 M2 2 L18 2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.7"/>
          </svg>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10" style={{ textAlign:'center', padding:'0 1rem', maxWidth:700, width:'100%', zIndex:3 }}>

        {/* Pre-title */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.9s ease 0.1s',
        }}>
          <span style={{ fontFamily:'Poppins', fontSize:'0.68rem', letterSpacing:'0.45em', textTransform:'uppercase', color:'#D4AF37' }}>
            ✦ &nbsp; The Wedding of &nbsp; ✦
          </span>
        </div>

        {/* Groom name */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s',
          marginTop:'1.5rem',
          padding:'0 1rem',
        }}>
          <h1 style={{
            fontFamily:'"Great Vibes", cursive',
            fontSize:'clamp(2rem, 7vw, 6rem)',
            lineHeight:1.2,
            background:'linear-gradient(90deg,#B8860B 0%,#FFD700 20%,#FFF8DC 40%,#FFD700 60%,#D4AF37 80%,#B8860B 100%)',
            backgroundSize:'200% auto',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            animation:'shimmer 4s linear infinite',
          }}>
            S. Nandhakumar
          </h1>
        </div>

        {/* and */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.5)',
          transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.65s',
          margin:'0.4rem 0',
          display:'flex', alignItems:'center', justifyContent:'center', gap:14,
        }}>
          <div style={{ height:1, flex:1, maxWidth:100, background:'linear-gradient(90deg,transparent,#D4AF37)' }}/>
          <span style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'1.5rem', color:'#D4AF37', letterSpacing:'0.2em' }}>and</span>
          <div style={{ height:1, flex:1, maxWidth:100, background:'linear-gradient(90deg,#D4AF37,transparent)' }}/>
        </div>

        {/* Bride name */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1) 0.85s',
          padding:'0 1rem',
        }}>
          <h1 style={{
            fontFamily:'"Great Vibes", cursive',
            fontSize:'clamp(2rem, 7vw, 6rem)',
            lineHeight:1.2,
            background:'linear-gradient(90deg,#B8860B 0%,#FFD700 20%,#FFF8DC 40%,#FFD700 60%,#D4AF37 80%,#B8860B 100%)',
            backgroundSize:'200% auto',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            animation:'shimmer 4s linear infinite',
          }}>
            K. Swathilakshmi
          </h1>
        </div>

        {/* Date block */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 1.1s',
          marginTop:'2rem',
        }}>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)', maxWidth:280, margin:'0 auto 1.25rem' }}/>
          <p style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(1.3rem,4vw,2rem)', color:'#FAF6EF', fontWeight:300, letterSpacing:'0.08em' }}>
            30 August 2026
          </p>
          <p style={{ fontFamily:'Poppins', fontSize:'0.72rem', color:'#D4AF37', letterSpacing:'0.35em', marginTop:4, textTransform:'uppercase' }}>
            Sunday &nbsp;·&nbsp; 11:00 AM &nbsp;·&nbsp; Coimbatore
          </p>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#D4AF37,transparent)', maxWidth:280, margin:'1.25rem auto 0' }}/>
        </div>

        {/* Open Invitation button */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease 1.4s',
          marginTop:'2rem',
        }}>
          <button
            onClick={handleOpen}
            style={{
              background:'linear-gradient(135deg,#B8860B 0%,#D4AF37 50%,#B8860B 100%)',
              backgroundSize:'200% auto',
              color:'#FFF8DC',
              border:'none',
              padding:'14px 44px',
              borderRadius:'50px',
              fontFamily:'Poppins',
              fontWeight:500,
              fontSize:'0.82rem',
              letterSpacing:'3px',
              textTransform:'uppercase',
              cursor:'pointer',
              boxShadow:'0 8px 32px rgba(184,134,11,0.45)',
              transition:'all 0.3s ease',
              animation:'pulseGold 2.5s ease-in-out infinite',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(184,134,11,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(184,134,11,0.45)'; }}
          >
            Open Invitation
          </button>
        </div>

      </div>
    </div>
  );
}
