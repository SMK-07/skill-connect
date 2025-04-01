
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';
import FeaturedWorkers from '../components/FeaturedWorkers';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <HeroBanner />
        <CategorySection />
        <FeaturedWorkers />
        <HowItWorks />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
