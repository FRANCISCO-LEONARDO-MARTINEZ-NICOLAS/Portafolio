import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { History } from './sections/History';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-pearl selection:bg-neonCyan selection:text-dark">
      <Navbar />
      
      <main>
        <Hero />
        <History />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
