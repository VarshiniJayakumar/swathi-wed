import React, { useEffect, useState } from 'react';

// South Indian floral & auspicious symbols
const PETALS = ['🌸', '🌺', '🪷', '✿', '🌼', '❀'];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const count = window.innerWidth < 640 ? 10 : 18;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
      left: `${randomBetween(0, 100)}%`,
      delay: `${randomBetween(0, 12)}s`,
      duration: `${randomBetween(9, 20)}s`,
      size: `${randomBetween(0.9, 1.7)}rem`,
    }));
    setPetals(generated);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
            filter: 'drop-shadow(0 2px 4px rgba(200,146,42,0.3))',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
