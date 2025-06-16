
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-paintBlue text-white overflow-hidden">
      <div className="bg-gradient-to-r from-paintBlue to-paintBlue-light absolute inset-0 opacity-90"></div>
      
      {/* Elegant Design Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-paintGold rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-paintSilver rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-40 left-1/4 w-24 h-24 bg-paintBlue-light rounded-full opacity-30 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-elegant-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Transform Your Space</span>
              <span className="block text-paintGold mt-2">With Refined Elegance</span>
            </h1>
            
            <p className="text-lg opacity-90 mb-8 max-w-lg">
              Professional painting & decorating services that bring your vision to life with quality, precision, and sophisticated design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-paintGold hover:bg-paintGold-light text-paintBlue text-lg px-6 py-6 font-medium"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block animate-paint-slide">
            <div className="w-full h-[400px] bg-paintOffWhite rounded-lg overflow-hidden shadow-xl relative transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80" 
                alt="Painter at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paintBlue/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-2/3 h-32 bg-paintGold rounded-lg shadow-lg transform -rotate-6 flex items-center justify-center p-4">
              <p className="font-bold text-xl text-paintBlue">Refined Craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
