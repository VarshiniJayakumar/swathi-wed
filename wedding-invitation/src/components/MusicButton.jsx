import React, { useState, useEffect } from 'react';

export default function MusicButton({ audioRef }) {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!audioRef?.current) return;
    const audio = audioRef.current;
    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('play',  onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play',  onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [audioRef]);

  const toggle = () => {
    if (!audioRef?.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play().catch(() => {});
  };

  return (
    <div style={{ position:'fixed', top:'1rem', right:'1rem', zIndex:1000 }}>
      <button onClick={toggle} aria-label={playing ? 'Mute music' : 'Play music'}
        style={{
          width:46, height:46, borderRadius:'50%', cursor:'pointer',
          background: playing ? 'linear-gradient(135deg,#B8860B,#D4AF37)' : 'rgba(10,8,4,0.75)',
          backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'1.1rem',
          boxShadow: playing ? '0 4px 20px rgba(184,134,11,0.5)' : '0 2px 12px rgba(0,0,0,0.4)',
          outline: playing ? 'none' : '1px solid rgba(212,175,55,0.35)',
          border: 'none',
          transition:'all 0.3s ease',
        }}>
        <span style={{ animation: playing ? 'float 1.5s ease-in-out infinite' : 'none' }}>
          {playing ? '🎵' : '🔇'}
        </span>
      </button>
    </div>
  );
}
