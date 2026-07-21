import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919999999999'; // Replace with actual number
const WHATSAPP_MSG    = encodeURIComponent(
  "Vanakkam! I'll be attending the wedding of S. Nandhakumar & K. Swathilakshmi on 30 August 2026. 🪷"
);
const PHONE_NUMBER = 'tel:+919999999999'; // Replace with actual number
const MAPS_URL     = 'https://www.google.com/maps/search/Thelungupalayam+Vaithiyasalai+Coimbatore';

export default function FloatingRSVP() {
  const [open, setOpen] = useState(false);

  const actions = [
    { icon: '💬', label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, color: '#25D366' },
    { icon: '📞', label: 'Call',      href: PHONE_NUMBER,                                            color: '#C8922A' },
    { icon: '📍', label: 'Maps',      href: MAPS_URL,                                                color: '#EA4335' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}
    >
      {/* Sub-actions */}
      {actions.map((action, i) => (
        <a
          key={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={action.label}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: action.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            textDecoration: 'none',
            transform: open ? 'scale(1) translateY(0)' : 'scale(0) translateY(10px)',
            opacity: open ? 1 : 0,
            transition: `all 0.25s ease ${(actions.length - 1 - i) * 0.07}s`,
            pointerEvents: open ? 'auto' : 'none',
            border: '1px solid rgba(200,146,42,0.4)',
          }}
          title={action.label}
        >
          {action.icon}
        </a>
      ))}

      {/* Main RSVP button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close RSVP menu' : 'Open RSVP menu'}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: open
            ? 'linear-gradient(135deg, #6B0F0F, #8B1A1A)'
            : 'linear-gradient(135deg, #8B1A1A, #C8922A)',
          border: '2px solid rgba(200,146,42,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(0,0,0,0.5), 0 0 0 0 rgba(200,146,42,0.4)',
          transition: 'all 0.3s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          animation: 'pulseGold 2.5s ease-in-out infinite',
        }}
      >
        {open ? '✕' : '🪷'}
      </button>

      {/* Label */}
      {!open && (
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#C8922A',
            textAlign: 'center',
          }}
        >
          Join Us
        </p>
      )}
    </div>
  );
}
