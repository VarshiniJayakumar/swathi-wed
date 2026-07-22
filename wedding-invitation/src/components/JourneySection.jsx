import React from 'react';
import useInView from '../hooks/useInView';

const milestones = [
  { icon:'👀', year:'2022', title:'First Meeting',  desc:'Two hearts crossed paths and a beautiful story began.' },
  { icon:'🤝', year:'2023', title:'Friendship',     desc:'Laughter, trust and countless memories shared together.' },
  { icon:'❤️', year:'2025', title:'Families United',desc:'Two families came together, blessings were given.' },
  { icon:'💍', year:'2026', title:'Wedding Day',    desc:'Forever begins on 30 August 2026.' },
];

function Card({ item, index }) {
  const { ref, inView } = useInView(0.3);
  const isLeft = index % 2 === 0;
  return (
    <div ref={ref} style={{
      display:'flex', alignItems:'center', justifyContent:'center',
      marginBottom: index < milestones.length - 1 ? '2rem' : 0,
      position:'relative',
    }}>
      {/* Card */}
      <div style={{
        background:'#fff',
        border:'1px solid rgba(212,175,55,0.3)',
        borderRadius:20, padding:'1.5rem',
        width:'100%', maxWidth:300,
        boxShadow:'0 8px 32px rgba(184,134,11,0.08)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : isLeft ? 'translateX(-40px)' : 'translateX(40px)',
        transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${index*0.1}s`,
      }}
        className={`md:${isLeft ? 'mr-auto md:ml-0 md:mr-[calc(50%+1.5rem)]' : 'ml-auto md:mr-0 md:ml-[calc(50%+1.5rem)]'}`}
      >
        {/* top accent */}
        <div style={{height:2,background:'linear-gradient(90deg,#B8860B,#D4AF37)',borderRadius:1,marginBottom:'1rem'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <div style={{
            width:44,height:44,borderRadius:'50%',flexShrink:0,
            background:'linear-gradient(135deg,#B8860B,#D4AF37)',
            display:'flex',alignItems:'center',justifyContent:'center',
            fontSize:'1.2rem',
            boxShadow:'0 4px 12px rgba(184,134,11,0.3)',
          }}>{item.icon}</div>
          <div>
            <p style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'1.2rem',fontWeight:600,color:'#1C1008'}}>{item.title}</p>
            <p style={{fontFamily:'Poppins',fontSize:'0.62rem',letterSpacing:'0.2em',color:'#B8860B',textTransform:'uppercase'}}>{item.year}</p>
          </div>
        </div>
        <p style={{fontFamily:'Poppins',fontSize:'0.82rem',color:'#5C3D1E',lineHeight:1.7}}>{item.desc}</p>
      </div>

      {/* Center dot */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2" style={{
        width:16,height:16,borderRadius:'50%',zIndex:2,
        background:'linear-gradient(135deg,#D4AF37,#B8860B)',
        boxShadow:'0 0 0 4px rgba(212,175,55,0.2), 0 0 12px rgba(212,175,55,0.4)',
      }}/>
    </div>
  );
}

export default function JourneySection() {
  const { ref, inView } = useInView(0.15);
  return (
    <section id="journey" ref={ref} className="relative py-32 px-6 overflow-hidden"
      style={{background:'linear-gradient(180deg,#FAF6EF 0%,#F5EDD8 100%)'}}>

      <div className="max-w-2xl mx-auto">
        <div style={{textAlign:'center',marginBottom:'3.5rem',
          opacity:inView?1:0,transform:inView?'translateY(0)':'translateY(30px)',
          transition:'all 0.9s ease 0s'}}>
          <span className="section-label">✦ &nbsp; Our Story &nbsp; ✦</span>
          <div className="gold-line" style={{maxWidth:140,margin:'1rem auto 0.75rem'}}/>
          <h2 style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'clamp(2rem,6vw,3rem)',
            color:'#1C1008',fontWeight:400}}>A Journey of Love</h2>
        </div>

        <div className="relative">
          <div className="timeline-line hidden md:block"/>
          <div className="relative z-10">
            {milestones.map((item,i) => <Card key={item.title} item={item} index={i}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}
