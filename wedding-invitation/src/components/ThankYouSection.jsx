import React from 'react';
import useInView from '../hooks/useInView';

export default function ThankYouSection() {
  const { ref, inView } = useInView(0.2);

  const a = (delay='0s') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  return (
    <section id="thankyou" ref={ref} className="relative py-36 px-6 overflow-hidden"
      style={{background:'linear-gradient(135deg,#0A0804 0%,#1C1008 50%,#0A0804 100%)'}}>

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position:'absolute',inset:0,
        background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* Corner ornaments */}
      {[
        {pos:{top:24,left:28},r:'0deg'},{pos:{top:24,right:28},r:'90deg'},
        {pos:{bottom:24,left:28},r:'270deg'},{pos:{bottom:24,right:28},r:'180deg'},
      ].map((c,i)=>(
        <div key={i} aria-hidden="true" style={{position:'absolute',...c.pos,width:40,height:40,pointerEvents:'none',zIndex:1}}>
          <svg viewBox="0 0 40 40" fill="none" style={{width:'100%',height:'100%',transform:`rotate(${c.r})`}}>
            <path d="M2 2 L2 18 M2 2 L18 2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.5"/>
          </svg>
        </div>
      ))}

      {/* Top gold line */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,#D4AF37,transparent)'}}/>

      <div className="relative z-10 max-w-xl mx-auto text-center">

        {/* Ring */}
        <div style={{...a('0s')}}>
          <span style={{fontSize:'4rem',display:'block',marginBottom:'1.5rem',
            animation:'float 4s ease-in-out infinite',
            filter:'drop-shadow(0 6px 20px rgba(212,175,55,0.6))'}}>💍</span>
        </div>

        {/* Names */}
        <h2 className="gold-shimmer" style={{
          fontFamily:'"Great Vibes",cursive',
          fontSize:'clamp(3rem,10vw,5.5rem)',
          lineHeight:1.2,...a('0.15s'),
        }}>Nandha &amp; Swathi</h2>

        {/* Divider */}
        <div style={{margin:'1.5rem 0',...a('0.3s')}}>
          <div className="ornament-divider">
            <span style={{fontSize:'1.2rem',color:'#D4AF37'}}>✦</span>
          </div>
        </div>

        {/* Message */}
        <div style={{...a('0.45s')}}>
          <p style={{fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(1.1rem,3.5vw,1.45rem)',
            color:'#FAF6EF',lineHeight:1.9,fontStyle:'italic',fontWeight:300,marginBottom:'0.75rem'}}>
            We warmly invite you to celebrate our special day.
          </p>
          <p style={{fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(1rem,3vw,1.3rem)',
            color:'#D4AF37',lineHeight:1.9,fontStyle:'italic'}}>
            Your presence is our greatest blessing.
          </p>
        </div>

        {/* Date box */}
        <div style={{marginTop:'2.5rem',...a('0.6s')}}>
          <div style={{
            display:'inline-block',padding:'1.5rem 2.5rem',borderRadius:20,
            background:'rgba(212,175,55,0.08)',border:'1px solid rgba(212,175,55,0.35)',
            boxShadow:'inset 0 1px 0 rgba(212,175,55,0.15)',
          }}>
            <div style={{height:2,background:'linear-gradient(90deg,transparent,#D4AF37,transparent)',
              borderRadius:1,marginBottom:'1rem'}}/>
            <p style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'1.5rem',
              color:'#D4AF37',fontWeight:500,letterSpacing:'0.06em'}}>30 August 2026</p>
            <p style={{fontFamily:'Poppins',fontSize:'0.7rem',letterSpacing:'0.28em',
              textTransform:'uppercase',color:'rgba(212,175,55,0.6)',marginTop:6}}>
              Sunday &nbsp;·&nbsp; 11:00 AM
            </p>
          </div>
        </div>

        {/* Footer */}
        <p style={{marginTop:'3rem',fontFamily:'Poppins',fontSize:'0.68rem',
          letterSpacing:'0.2em',textTransform:'uppercase',
          color:'rgba(212,175,55,0.35)',...a('0.8s')}}>
          Made with ❤ for Nandha &amp; Swathi · 30.08.2026
        </p>
      </div>
    </section>
  );
}
