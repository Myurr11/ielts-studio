import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <StatsSection />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Index;