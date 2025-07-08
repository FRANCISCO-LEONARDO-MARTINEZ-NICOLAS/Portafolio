import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import WhyHireMe from './components/WhyHireMe';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <WhyHireMe />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;