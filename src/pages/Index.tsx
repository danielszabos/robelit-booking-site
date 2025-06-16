
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import ProjectGallery from '@/components/ProjectGallery';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <Hero />
        <ServiceCards />
        <ProjectGallery />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
