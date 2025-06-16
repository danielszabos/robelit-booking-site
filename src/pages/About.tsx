import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import logo from '../images/logo.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero-style banner for About Us */}
        <section className="bg-paintBlue text-white py-20 px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Robelit</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-paintOffWhite">
            Crafting beautiful spaces with a personal touch — over 20 years of trusted painting & decorating excellence.
          </p>
        </section>

        {/* Mission and values section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              At Robelit, we believe every home deserves to feel special. With decades of experience and a commitment to high-quality finishes, we help customers bring their vision to life — whether it’s a fresh coat of paint or a full transformation.
            </p>
          </div>
        </section>

        {/* Experience and history */}
        <section className="py-16 px-6 md:px-12 bg-paintOffWhite">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Robelit was founded by Rob, a passionate painter and decorator with over two decades of hands-on experience. Built on word-of-mouth and customer satisfaction, Robelit has grown into a name trusted for professionalism, quality, and care.
              </p>
              <p className="text-gray-800 text-lg mt-4 leading-relaxed">
                Whether it's a single room or a full property, we treat every project with the same level of attention and respect.
              </p>
            </div>
            <div>
              <img src={logo} alt="Logo" className="rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Team or values section (optional) */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
            <ul className="space-y-6 text-lg text-gray-700 list-disc list-inside max-w-2xl mx-auto">
              <li>Free, no-obligation quotes tailored to your needs</li>
              <li>Meticulous attention to detail and tidy workmanship</li>
              <li>Friendly, reliable, and punctual service</li>
              <li>High-quality materials and professional tools</li>
              <li>Genuine care for customer satisfaction</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
