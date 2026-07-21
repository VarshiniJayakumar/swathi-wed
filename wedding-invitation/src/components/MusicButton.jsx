import React, { useRef, useState } from 'react';

// Replace with your actual music file path under /public/music.mp3
const MUSIC_SRC = '/music.mp3';

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((v) => !v);
  };

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Mute music' : 'Play music'}
        title={playing ? 'Mute music' : 'Play background music'}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: playing
            ? 'linear-gradient(135deg, #8B1A1A, #C8922A)'
            : 'rgba(30, 5, 5, 0.75)',
          border: `1.5px solid ${playing ? 'rgba(200,146,42,0.8)' : 'rgba(200,146,42,0.4)'}`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.15rem',
          cursor: 'pointer',
          boxShadow: playing
            ? '0 4px 20px rgba(200,146,42,0.5)'
            : '0 2px 10px rgba(0,0,0,0.4)',
          transition: 'all 0.3s ease',
        }}
      >
        <span style={{ animation: playing ? 'float 1.5s ease-in-out infinite' : 'none' }}>
          {playing ? '🎵' : '🔇'}
        </span>
      </button>
    </div>
  );
}
