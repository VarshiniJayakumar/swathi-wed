import React from 'react';
import useInView from '../hooks/useInView';

const photos = [
  { id:1, src:'/together2.png',   label:'Together',   },
  { id:2, src:'/engagement2.png', label:'Engagement', },
];

export default function GallerySection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="gallery" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background:'#0A0804' }}>

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* Header */}
      <div style={{
        textAlign:'center', padding:'0 1.5rem', marginBottom:'2.5rem',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s ease 0s',
      }}>
        <span className="section-label" style={{ color:'#D4AF37' }}>✦ &nbsp; Photo Gallery &nbsp; ✦</span>
        <div className="gold-line" style={{ maxWidth:140, margin:'1rem auto 0.75rem' }}/>
        <h2 style={{
          fontFamily:'"Cormorant Garamond",serif',
          fontSize:'clamp(2rem,6vw,3rem)',
          color:'#FAF6EF', fontWeight:300,
        }}>Captured Moments</h2>
      </div>

      {/* Photos — centered flex */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        padding: '0 1.5rem',
      }}>
        {photos.map((photo, i) => (
          <div key={photo.id} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
          }}>
            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              width: 'clamp(200px, 38vw, 320px)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,175,55,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'; }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                style={{ width:'100%', height:'clamp(240px,45vw,380px)', objectFit:'cover', display:'block' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
