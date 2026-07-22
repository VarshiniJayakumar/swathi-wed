import React, { useEffect, useState } from 'react';

const PETALS = ['🌸', '🌼', '✿', '❀', '🌺'];

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const count = window.innerWidth < 640 ? 8 : 14;
    setPetals(Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
      left:     `${Math.random() * 100}%`,
      delay:    `${Math.random() * 12}s`,
      duration: `${10 + Math.random() * 12}s`,
      size:     `${0.8 + Math.random() * 0.8}rem`,
    })));
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {petals.map(p => (
        <span key={p.id} className="petal" style={{
          left: p.left,
          animationDelay: p.delay,
          animationDuration: p.duration,
          fontSize: p.size,
          filter: 'drop-shadow(0 2px 4px rgba(212,175,55,0.25))',
        }}>{p.emoji}</span>
      ))}
    </div>
  );
}
