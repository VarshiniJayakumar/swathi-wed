import React from 'react';
import useInView from '../hooks/useInView';

const events = [
  { time:'11:00 AM', title:'Reception',     desc:'Welcome guests and begin the celebrations.',        icon:'🌸' },
  { time:'12:00 PM', title:'Lunch',         desc:'A traditional feast with family and friends.',      icon:'🍽️' },
  { time:'01:00 PM', title:'Blessings',     desc:'Sacred ceremonies and heartfelt blessings.',        icon:'🙏' },
  { time:'02:00 PM', title:'Family Photos', desc:'Capture precious memories with your loved ones.',   icon:'📷' },
];

function Card({ event, index, inView }) {
  return (
    <div style={{
      display:'flex',gap:'1rem',
      opacity:inView?1:0,
      transform:inView?'translateX(0)':'translateX(-30px)',
      transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${index*0.12}s`,
    }}>
      {/* Timeline col */}
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
        <div style={{
          width:52,height:52,borderRadius:'50%',
          background:'linear-gradient(135deg,#B8860B,#D4AF37)',
          display:'flex',alignItems:'center',justifyContent:'center',
          fontSize:'1.3rem',flexShrink:0,
          boxShadow:'0 4px 16px rgba(184,134,11,0.3), 0 0 0 3px rgba(212,175,55,0.15)',
        }}>{event.icon}</div>
        {index < events.length - 1 && (
          <div style={{width:1,flex:1,minHeight:40,background:'linear-gradient(180deg,#D4AF37,rgba(212,175,55,0.1))',margin:'6px 0'}}/>
        )}
      </div>

      {/* Content card */}
      <div style={{
        flex:1,marginBottom:8,borderRadius:16,padding:'1.2rem 1.4rem',
        background:'#fff',border:'1px solid rgba(212,175,55,0.25)',
        boxShadow:'0 4px 20px rgba(184,134,11,0.06)',
      }}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:6}}>
          <h3 style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'1.3rem',fontWeight:600,color:'#1C1008'}}>{event.title}</h3>
          <span style={{
            fontFamily:'Poppins',fontSize:'0.7rem',fontWeight:600,color:'#B8860B',
            background:'rgba(212,175,55,0.1)',padding:'4px 12px',borderRadius:20,
            border:'1px solid rgba(212,175,55,0.3)',flexShrink:0,marginLeft:8,
          }}>{event.time}</span>
        </div>
        <p style={{fontFamily:'Poppins',fontSize:'0.82rem',color:'#5C3D1E',lineHeight:1.7}}>{event.desc}</p>
      </div>
    </div>
  );
}

export default function EventDetailsSection() {
  const { ref, inView } = useInView(0.15);
  return (
    <section id="events" ref={ref} className="relative py-32 px-6 overflow-hidden"
      style={{background:'linear-gradient(180deg,#F5EDD8 0%,#FAF6EF 100%)'}}>

      <div className="max-w-lg mx-auto">
        <div style={{textAlign:'center',marginBottom:'3rem',
          opacity:inView?1:0,transform:inView?'translateY(0)':'translateY(30px)',
          transition:'all 0.9s ease 0s'}}>
          <span className="section-label">✦ &nbsp; Event Schedule &nbsp; ✦</span>
          <div className="gold-line" style={{maxWidth:140,margin:'1rem auto 0.75rem'}}/>
          <h2 style={{fontFamily:'"Cormorant Garamond",serif',fontSize:'clamp(2rem,6vw,3rem)',color:'#1C1008',fontWeight:400}}>
            Day Schedule
          </h2>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:0}}>
          {events.map((e,i) => <Card key={e.title} event={e} index={i} inView={inView}/>)}
        </div>
      </div>
    </section>
  );
}
