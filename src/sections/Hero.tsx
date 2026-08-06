import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Terminal, ArrowRight, Download, MessageCircle } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';

export const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.85]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Francisco, vi tu portafolio y me interesa conocer más sobre tus servicios de desarrollo.");
    window.open(`https://wa.me/5613237943?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Fondo de Burbujas / Gradiente Parallax */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-dark to-dark pointer-events-none z-0" />
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="text-center z-10 w-full px-4 max-w-4xl mx-auto"
      >
        {/* Profile Avatar */}
        <Reveal direction="up" delay={0.1}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-neonCyan to-neonEmerald p-1 animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border-2 border-dark">
                <img
                  src="/images/Leonardo.jpg"
                  alt="Foto de perfil de Francisco Leonardo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main Title */}
        <Reveal direction="up" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-pearl">
            Francisco <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonEmerald">Leonardo</span>
          </h1>
        </Reveal>
        
        <Reveal direction="up" delay={0.3}>
          <h2 className="text-xl md:text-2xl text-steel font-light mb-6 flex items-center justify-center gap-3">
            <Terminal className="text-neonEmerald w-6 h-6" /> 
            Full-Stack Developer en formación | Futuro Arquitecto de Software
          </h2>
        </Reveal>

        {/* Hero Statement */}
        <Reveal direction="up" delay={0.4}>
          <p className="text-lg md:text-xl text-steel mb-10 max-w-3xl mx-auto leading-relaxed">
            <span className="text-neonCyan font-semibold">Construyo soluciones digitales que escalan, con código limpio y pasión por el detalle.</span> 
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#proyectos">
              <Button size="lg" className="flex items-center gap-2 group">
                Ver Proyectos Clave
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            <a href="/CV_Leonardo_Martinez_Nicolas.pdf" target="_blank" rel="noopener noreferrer" download>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Descargar CV
              </Button>
            </a>
            
            <Button variant="secondary" size="lg" onClick={handleWhatsApp} className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-neonEmerald" />
              Contactar Ahora
            </Button>
          </div>
        </Reveal>

        {/* Location & Contact Info */}
        <Reveal direction="up" delay={0.6}>
          <div className="mt-16 text-slate-500 text-sm font-mono">
            <p>📍 Ciudad de México | 📧 leonardomtz000426@gmail.com | 📱 +52 56 1323 7943</p>
          </div>
        </Reveal>
      </motion.div>
      
      {/* Indicador de Scroll */}
      <motion.div 
        className="absolute bottom-6 z-10 text-steel flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest opacity-50">Explorar</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};
