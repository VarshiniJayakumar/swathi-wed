import React, { useRef, useState } from 'react';

const MUSIC_SRC = '/music.mp3';

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play().catch(()=>{});
    setPlaying(v => !v);
  };

  return (
    <div style={{position:'fixed',top:'1rem',right:'1rem',zIndex:1000}}>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="none"/>
      <button onClick={toggle} aria-label={playing ? 'Mute music' : 'Play music'}
        style={{
          width:46,height:46,borderRadius:'50%',cursor:'pointer',border:'none',
          background: playing ? 'linear-gradient(135deg,#B8860B,#D4AF37)' : 'rgba(10,8,4,0.75)',
          backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',
          display:'flex',alignItems:'center',justifyContent:'center',
          fontSize:'1.1rem',
          boxShadow: playing ? '0 4px 20px rgba(184,134,11,0.5)' : '0 2px 12px rgba(0,0,0,0.4)',
          outline: playing ? 'none' : '1px solid rgba(212,175,55,0.35)',
          transition:'all 0.3s ease',
        }}>
        <span style={{animation: playing ? 'float 1.5s ease-in-out infinite' : 'none'}}>
          {playing ? '🎵' : '🔇'}
        </span>
      </button>
    </div>
  );
}
