
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import interior1 from '../images/interior1.jpg';


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
    imageUrl: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/490918385_122120484470731407_7753105591348525667_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OdP8n23XDYUQ7kNvwFsPBGe&_nc_oc=AdkFtaDPuo4xE1dt1fL8yd0u1UOJM3IUXb8pGILvU4z5c4e4DEcTe9-bIRS0xPAbhVQ&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=-eZzldLdT2hQOFMccjtGyQ&oh=00_AfOfalUhCvGxIwRPD0w53oZuvqLBSduHFvfo8x5Vy5ItMw&oe=684E7FA0",
    category: "Interior",
  },
  {
    title: "Exterior Makeover",
    description: "Preserve classic architectural features while breathing new life into the exterior with rich, historically accurate colors.",
    imageUrl: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/490947182_122120196374731407_7474937928120555642_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w6SSKOwu1EAQ7kNvwFG2yQW&_nc_oc=AdnMQv84rfrJt3xk0yRZrrd2ngCrz6HE1mlxLGrFLTuZXu-JfHHwfa2mhXndO_cWC2s&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=HOqQWIt_L995kdAZKcHpdg&oh=00_AfOJEVjFQD5a4hneCE15W50sC0tJXmOU4S1qAZ_tQlb3dA&oe=684E5DF8",
    category: "Exterior",
  },
  {
    title: "Home Repaint",
    description: "Simplify the front elevation with crisp lines and a neutral palette, creating a calm and inviting welcome.",
    imageUrl: "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/476059870_122107907894731407_6329636786619823361_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bUkcXjFnTVYQ7kNvwHXvOwY&_nc_oc=AdkLVVptM73BOap-7K0jtMjsIKK9SL3AIteT26fsAo1rnD1KmT8uESwfTtpXDVcALTo&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=oSgmBar4T2MSmfD1lRlZmg&oh=00_AfNA1YpAr2LXvxK4WE6g3Mx1oEnL2F31aYCR9sdHDQeGAg&oe=684E6BA3",
    category: "Exterior",
  },
  {
    title: "Office Space",
    description: "Modernise a regular office space into a vibrant, productive environment with sleek finishes, clean lines, and a professional aesthetic tailored to enhance focus and comfort.",
    imageUrl: "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/475975942_122107906376731407_7249320939665517257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2MKlWJ9uSEcQ7kNvwFVUdrJ&_nc_oc=AdlelYPob41ywKjLpppTxfMPtkB8diENnuFWBCUruaUB2g4oLSd8qB-NB-3VimQxQFY&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=V9c-MLWOrlGiIFQjq8mvoA&oh=00_AfO2mf3HY2UtCYc7ndfFjCZ811M801D2h48FnU2qAQxSJw&oe=684E5209", 
    category: "Residental & Commercial",
  },
  {
    title: "Restaurant",
    description: "Renovate a restaurant’s interior with warm tones and elegant finishes, creating a welcoming and stylish atmosphere for diners.",
    imageUrl: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/490152345_122119948706731407_3099677638770045385_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jXI-Lj0Qa_IQ7kNvwHTn4pX&_nc_oc=Adlb2ue_iGCMN5odFgbOwzeYpkEVmYbbTbmv4QlAYEAA0fj59inpcC7hGvCA_5HQ9E0&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=ibIRuuXkQyUYhEZbZ5T4TA&oh=00_AfNXlnM9BLL7OrT4SZKMt4cy3W--CQVc4ViawOTdU_4PVQ&oe=684E692C",
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
