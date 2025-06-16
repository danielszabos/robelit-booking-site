
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-950 text-white py-4 px-6 md:px-12 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex flex-col items-start"  onClick={() => navigate("/")}> 
 <span 
    className="text-[#b0903d] text-4xl md:text-5xl font-normal mt-4" style={{ fontFamily: 'Amsterdam Four' }}>
    Robelit
  </span>
  <span className="text-[#b0903d]   text-2xl md:text-3xl block text-center w-full">
    decor
  </span>
</div>

        
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-paintGold-light transition-colors">Home</a>
          <a href="#services" className="text-white hover:text-paintGold-light transition-colors">Services</a>
          <a href="#gallery" className="text-white hover:text-paintGold-light transition-colors">Gallery</a>
          <a href="#contact" className="text-white hover:text-paintGold-light transition-colors">Contact</a>
        </div>
        
<Link to="/About">
  <Button className="bg-paintGold hover:bg-paintGold-light text-paintBlue border-none font-medium">
    About Us
  </Button>
</Link>
      </div>
    </nav>
  );
};

export default NavBar;
