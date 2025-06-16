
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
<div className="flex flex-col items-start"> 
 <span 
    className="text-[#b0903d] text-2xl md:text-3xl font-normal " style={{ fontFamily: 'Amsterdam Four' }}>
    Robelit
      <span className="text-[#b0903d]   text-2xl md:text-3xl block text-center w-full font-sans mb-2">
    decor
  </span>
  </span>
</div>
            
            <p className="opacity-80 mb-6">
              Professional painting & decorating services with a focus on quality, reliability, and customer satisfaction.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571942237901" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-paintGold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-paintGold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Interior Painting</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Exterior Painting</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Commercial Projects</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Decorative Finishes</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Color Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">About Us</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-paintGold-light transition-colors">Project Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3">
 <li className="flex items-center gap-3 opacity-80">
  <a
    href="https://wa.me/447719248340"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3"
  >
    {/* Clean WhatsApp icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-9 h-9 text-white-1000"
    >
      <path d="M16.002 3C9.375 3 3.999 8.375 3.999 15c0 2.625.937 5.063 2.499 7.063L5 29l7.219-1.874a12.974 12.974 0 0 0 3.78.563c6.625 0 12.002-5.375 12.002-12S22.628 3 16.002 3zm0 21.938a11.065 11.065 0 0 1-3.562-.562l-.249-.094-4.343 1.125 1.156-4.188-.125-.25a10.95 10.95 0 0 1-1.781-6.063c0-6.063 4.938-11 11.002-11s11.002 4.938 11.002 11-4.937 11-11 11zM12.44 10.5a.89.89 0 0 0-.688-.281c-.187 0-.375 0-.531.031-.156.031-.5.125-.75.406-.25.281-.968.938-.968 2.188s.938 2.5 1.063 2.688c.125.188 1.875 3.063 4.593 4.188 2.281.938 2.594.75 3.062.719.469-.031 1.5-.625 1.718-1.219.218-.594.218-1.094.156-1.219-.063-.125-.25-.188-.531-.313-.281-.125-1.688-.844-1.937-.937-.25-.094-.438-.156-.625.156-.188.312-.719.938-.875 1.125-.156.188-.312.219-.594.094-.281-.125-1.187-.438-2.25-1.406-.832-.764-1.25-1.656-1.375-1.844-.125-.187-.016-.312.094-.438.109-.125.25-.281.375-.438.125-.156.187-.25.281-.406.094-.156.062-.312.031-.438-.031-.125-.5-1.187-.688-1.625z" />
    </svg>
    <span className="text-white">(+44) 7719 248340</span>
  </a>
</li>

              <li className="flex items-center gap-3 opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="flex-shrink-0 opacity-80" viewBox="0 0 16 16">
                  <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <span>(+44) 7719 248340</span>
              </li>
<li className="flex items-center gap-3 opacity-80">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="flex-shrink-0 opacity-80"
    viewBox="0 0 16 16"
  >
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
  <a
    href="mailto:robelitdecor@gmail.com"
    className="hover:underline text-inherit"
  >
    robelitdecor@gmail.com
  </a>
</li>

            </ul>
            
            <div className="mt-6">
              <Button 
                className="bg-paintGold hover:bg-paintGold-light text-paintBlue font-medium"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Quote
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-70">
          <p>&copy; {currentYear} Robelit Decorating Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
