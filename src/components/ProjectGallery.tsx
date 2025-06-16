
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import interior1 from '../images/interior1.jpg';
import interior2 from '../images/interior2.jpg';
import exterior1 from '../images/exterior1.jpg';
import exterior2 from '../images/exterior2.jpg';
import commercial1 from '../images/commercial1.jpg';
import commercial2 from '../images/commercial2.jpg';


const projects = [
  {
    title: "Hallway",
    description: "Elevate the hallway with subtle textures and contrasting accents, turning a once-overlooked space into a visually engaging transition area.",
    imageUrl: interior1,
    category: "Interior",
  },
  {
    title: "Dining & Living Room",
    description: "Bring warmth and character to the living room with stylish paintwork and a fresh, inviting feel perfect for relaxing or entertaining.",
    imageUrl: interior2,
    category: "Interior",
  },
  {
    title: "Exterior Makeover",
    description: "Preserve classic architectural features while breathing new life into the exterior with rich, historically accurate colors.",
    imageUrl: exterior1,
    category: "Exterior",
  },
  {
    title: "Home Repaint",
    description: "Simplify the front elevation with crisp lines and a neutral palette, creating a calm and inviting welcome.",
    imageUrl: exterior2,
    category: "Exterior",
  },
  {
    title: "Office Space",
    description: "Modernise a regular office space into a vibrant, productive environment with sleek finishes, clean lines, and a professional aesthetic tailored to enhance focus and comfort.",
    imageUrl: commercial1, 
    category: "Residental & Commercial",
  },
  {
    title: "Restaurant",
    description: "Renovate a restaurant’s interior with warm tones and elegant finishes, creating a welcoming and stylish atmosphere for diners.",
    imageUrl: commercial2,
    category: "Residental & Commercial",
  },
];

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="gallery" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Recent Projects</h2>
        <div className="w-24 h-2 bg-paintTerracotta mx-auto mb-12 rounded-full"></div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', 'Interior', 'Exterior', 'Residental & Commercial', 'Wallpapering'].map(category => (
              <Button 
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category 
                  ? "bg-paintBlue hover:bg-paintBlue-light" 
                  : "border-paintBlue text-paintBlue hover:bg-paintBlue/10"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold text-paintTerracotta">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-paintTerracotta transition-colors">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription className="text-paintTerracotta font-medium">
                    {project.category}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <p className="mt-6 text-lg">{project.description}</p>
                  <div className="mt-4">
                    <h4 className="font-bold">Project Details:</h4>
                    <ul className="mt-2 space-y-2">
                      <li>• Premium {project.category === 'Exterior' ? 'weather-resistant' : 'low-VOC'} paints</li>
                      <li>• Professional preparation and finishing</li>
                      <li>• Completed in {Math.floor(Math.random() * 5) + 4} days</li>
                      <li>• Client satisfaction rating: ⭐⭐⭐⭐⭐</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
