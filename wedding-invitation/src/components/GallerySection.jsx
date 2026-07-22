import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const photos = [
  { id:1, src:null, label:'Our Story',    emoji:'💑', bg:'linear-gradient(135deg,#F5EDD8,#EDD9B0)' },
  { id:2, src:null, label:'Engagement',   emoji:'💍', bg:'linear-gradient(135deg,#EDD9B0,#D4AF37)' },
  { id:3, src:null, label:'Together',     emoji:'🌸', bg:'linear-gradient(135deg,#FAF6EF,#F5EDD8)' },
  { id:4, src:null, label:'With Family',  emoji:'👨‍👩‍👦', bg:'linear-gradient(135deg,#F5EDD8,#EDD9B0)' },
  { id:5, src:null, label:'Our Future',   emoji:'⭐', bg:'linear-gradient(135deg,#EDD9B0,#F5EDD8)' },
];

export default function GallerySection() {
  const { ref, inView } = useInView(0.15);
  const scrollRef = useRef(null);
  const scroll = dir => scrollRef.current?.scrollBy({ left: dir * 280, behavior:'smooth' });

  return (
    <section id="gallery" ref={ref} className="relative py-28 overflow-hidden"
      style={{background:'#0A0804'}}>

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position:'absolute',inset:0,
        background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{textAlign:'center',paddingLeft:'1.5rem',paddingRight:'1.5rem',marginBottom:'2.5rem',
        opacity:inView?1:0,transform:inView?'translateY(0)':'translateY(30px)',
        transition:'all 0.9s ease 0s'}}>
        <span className="section-label" style={{color:'#D4AF37'}}>✦ &nbsp; Photo Gallery &nbsp; ✦</span>
        <div className="gold-line" style={{maxWidth:140,margin:'1rem auto 0.75rem'}}/>
        <h2 style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'clamp(2rem,6vw,3rem)',
          color:'#FAF6EF',fontWeight:300}}>Captured Moments</h2>
      </div>

      {/* Arrows */}
      <div style={{display:'flex',justifyContent:'center',gap:12,marginBottom:'1.5rem',padding:'0 1.5rem'}}>
        {['‹','›'].map((a,i) => (
          <button key={a} onClick={()=>scroll(i===0?-1:1)} aria-label={i===0?'prev':'next'}
            className="btn-gold" style={{padding:'8px 20px',fontSize:'1.3rem',lineHeight:1}}>{a}</button>
        ))}
      </div>

      {/* Scroll strip */}
      <div ref={scrollRef} style={{
        display:'flex',gap:'1.25rem',
        overflowX:'auto',paddingLeft:'1.5rem',paddingRight:'1.5rem',paddingBottom:'1rem',
        scrollbarWidth:'none',msOverflowStyle:'none',WebkitOverflowScrolling:'touch',
      }}>
        {photos.map((p,i) => (
          <div key={p.id} style={{
            flexShrink:0,width:'clamp(200px,55vw,260px)',
            opacity:inView?1:0,transform:inView?'translateY(0)':'translateY(40px)',
            transition:`all 0.8s cubic-bezier(0.16,1,0.3,1) ${i*0.08}s`,
          }}>
            <div style={{
              borderRadius:'1.25rem',overflow:'hidden',
              border:'1px solid rgba(212,175,55,0.4)',
              transform:`rotate(${i%2===0?'-1.5':'1.5'}deg)`,
              transition:'transform 0.3s ease, box-shadow 0.3s ease',
              cursor:'pointer',
              boxShadow:'0 8px 32px rgba(0,0,0,0.4)',
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform='rotate(0) scale(1.04)';e.currentTarget.style.boxShadow='0 16px 48px rgba(212,175,55,0.25)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform=`rotate(${i%2===0?'-1.5':'1.5'}deg)`;e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.4)';}}
            >
              {p.src ? (
                <img src={p.src} alt={p.label} style={{width:'100%',height:300,objectFit:'cover',display:'block'}}/>
              ) : (
                <div style={{width:'100%',height:300,background:p.bg,
                  display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10,position:'relative'}}>
                  <div style={{position:'absolute',inset:8,borderRadius:14,border:'1px solid rgba(212,175,55,0.25)',pointerEvents:'none'}}/>
                  <span style={{fontSize:'3.5rem'}}>{p.emoji}</span>
                  <p style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'1.2rem',color:'#1C1008',fontWeight:500}}>{p.label}</p>
                  <p style={{fontFamily:'Poppins',fontSize:'0.65rem',color:'#B8860B',letterSpacing:'0.1em'}}>Add your photo</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p style={{textAlign:'center',marginTop:'1rem',fontFamily:'Poppins',
        fontSize:'0.68rem',color:'rgba(212,175,55,0.5)',letterSpacing:'0.15em'}}>
        ← Swipe to explore →
      </p>
    </section>
  );
}
