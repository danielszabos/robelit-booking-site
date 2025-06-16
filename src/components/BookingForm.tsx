import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_q3xzlkl';
const TEMPLATE_ID = 'template_jprahiv';
const CLIENTTEMPLATE_ID = 'template_pa19o8f';
const PUBLIC_KEY = 'cJdZrT2-8kdGnnv7d';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'Interior',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // First send notification email to service (your team)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        // After first email succeeds, send confirmation email to client
        return emailjs.send(SERVICE_ID, CLIENTTEMPLATE_ID, formData, PUBLIC_KEY);
      })
      .then(() => {
        toast({
          title: "Quote Request Sent!",
          description: "We'll contact you within 24 hours to schedule your free consultation.",
          action: (
            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
          ),
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: 'Interior',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast({
          title: "Error!",
          description: "There was an error sending your request. Please try again later.",
          action: (
            <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
          ),
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="booking-form" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-paintOffWhite">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Quote</h2>
          <div className="w-24 h-2 bg-paintTerracotta mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Fill out the form below, and we'll get back to you within 24 hours to schedule your free, no-obligation consultation.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-blue-950 p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                {[
                  { title: "Free Quotes", text: "No obligation, detailed quotes for your project." },
                  { title: "Expert Team", text: "Professional painters with years of experience." },
                  { title: "Quality Materials", text: "We use only premium paints and materials." },
                  { title: "Clean & Tidy", text: "We leave your space spotless when we finish." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-paintTerracotta rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-paintOffWhite">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type</Label>
                    <select 
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-paintTerracotta focus:border-transparent"
                      required
                    >
                      <option value="Interior">Interior Painting</option>
                      <option value="Exterior">Exterior Painting</option>
                      <option value="Commercial">Commercial Painting</option>
                      <option value="Decorative">Decorative Finishes</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input 
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, Postcode"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project. What rooms need painting? Any specific colors in mind?"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-blue-950 text-white w-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Free Quote"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

