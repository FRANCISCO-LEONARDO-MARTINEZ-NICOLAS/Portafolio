import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Cambiar el fondo si ha bajado un poco para que no se pierda el texto
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-widest text-neonCyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          L. MARTÍNEZ
        </span>
        <div className="hidden md:flex gap-6 text-sm font-semibold tracking-wide text-steel">
          <a href="#historia" className="hover:text-neonCyan transition-colors">HISTORIA</a>
          <a href="#experiencia" className="hover:text-neonPurple transition-colors">SOBRE MÍ</a>
          <a href="#habilidades" className="hover:text-neonEmerald transition-colors">HABILIDADES</a>
          <a href="#servicios" className="hover:text-neonCyan transition-colors">SERVICIOS</a>
          <a href="#proyectos" className="hover:text-neonPurple transition-colors">PROYECTOS</a>
          <a href="#contacto" className="hover:text-pearl transition-colors">CONTACTO</a>
        </div>
      </div>
    </nav>
  );
};
