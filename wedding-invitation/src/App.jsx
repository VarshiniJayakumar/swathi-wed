import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import FloatingPetals from './components/FloatingPetals';
import MusicButton from './components/MusicButton';
import FloatingRSVP from './components/FloatingRSVP';
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
  return (
    <>
      {/* Global UI */}
      <ScrollProgress />
      <FloatingPetals />
      <MusicButton />
      <FloatingRSVP />

      {/* Sections */}
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
    </>
  );
}
