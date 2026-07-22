import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919999999999';
const WHATSAPP_MSG    = encodeURIComponent("Hi! I'll be attending the wedding of S. Nandhakumar & K. Swathilakshmi on 30 August 2026 🎉");
const MAPS_URL        = 'https://www.google.com/maps/search/Thelungupalayam+Vaithiyasalai+Coimbatore';

export default function FloatingRSVP() {
  const [open, setOpen] = useState(false);

  const actions = [
    { icon:'💬', label:'WhatsApp', href:`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, bg:'#25D366' },
    { icon:'📞', label:'Call',     href:'tel:+919999999999',                                      bg:'#B8860B' },
    { icon:'📍', label:'Maps',     href:MAPS_URL,                                                 bg:'#EA4335' },
  ];

  return (
    <div style={{position:'fixed',bottom:'1.5rem',right:'1.5rem',zIndex:1000,
      display:'flex',flexDirection:'column',alignItems:'flex-end',gap:10}}>

      {actions.map((a,i) => (
        <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer"
          aria-label={a.label}
          style={{
            width:48,height:48,borderRadius:'50%',background:a.bg,
            display:'flex',alignItems:'center',justifyContent:'center',
            fontSize:'1.2rem',boxShadow:'0 4px 16px rgba(0,0,0,0.25)',
            textDecoration:'none',
            transform: open ? 'scale(1) translateY(0)' : 'scale(0) translateY(10px)',
            opacity: open ? 1 : 0,
            transition:`all 0.25s ease ${(actions.length-1-i)*0.07}s`,
            pointerEvents: open ? 'auto' : 'none',
            border:'1px solid rgba(255,255,255,0.2)',
          }}>
          {a.icon}
        </a>
      ))}

      <button onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close menu' : 'Open RSVP menu'}
        style={{
          width:60,height:60,borderRadius:'50%',border:'none',cursor:'pointer',
          background:'linear-gradient(135deg,#B8860B,#D4AF37)',
          display:'flex',alignItems:'center',justifyContent:'center',
          fontSize:'1.5rem',
          boxShadow:'0 6px 24px rgba(184,134,11,0.5)',
          transition:'all 0.3s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          animation:'pulseGold 2.5s ease-in-out infinite',
        }}>
        {open ? '✕' : '💌'}
      </button>

      {!open && (
        <p style={{fontFamily:'Poppins',fontSize:'0.58rem',letterSpacing:'0.12em',
          textTransform:'uppercase',color:'#B8860B',textAlign:'center'}}>
          Join Us
        </p>
      )}
    </div>
  );
}
