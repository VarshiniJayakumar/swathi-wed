import React, { useState, useRef } from 'react';
import OpeningScreen from './components/OpeningScreen';
import ScrollProgress from './components/ScrollProgress';
import FloatingPetals from './components/FloatingPetals';
import MusicButton from './components/MusicButton';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import DateSection from './components/DateSection';
import VenueSection from './components/VenueSection';
import CountdownSection from './components/CountdownSection';
import JourneySection from './components/JourneySection';
import GallerySection from './components/GallerySection';
import EventDetailsSection from './components/EventDetailsSection';
import ThankYouSection from './components/ThankYouSection';

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    // auto-play music when invitation opens
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* Background music (shared with MusicButton) */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" id="bg-audio" />

      {/* Opening cover screen */}
      {!opened && <OpeningScreen onOpen={handleOpen} />}

      {/* Main invitation — hidden until opened */}
      <div style={{
        opacity: opened ? 1 : 0,
        transition: 'opacity 0.8s ease 0.3s',
        pointerEvents: opened ? 'auto' : 'none',
      }}>
        <ScrollProgress />
        <FloatingPetals />
        <MusicButton audioRef={audioRef} />

        <main>
          <HeroSection />
          <CoupleSection />
          <DateSection />
          <VenueSection />
          <CountdownSection />
          <JourneySection />
          <GallerySection />
          <EventDetailsSection />
          <ThankYouSection />
        </main>
      </div>
    </>
  );
}
