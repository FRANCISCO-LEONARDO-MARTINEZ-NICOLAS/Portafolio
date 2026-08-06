import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Database, Brain, Code2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Marquee } from '../components/Marquee';

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} id="experiencia" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden relative">
      <motion.div style={{ opacity, scale, y }} className="w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full mb-24">
        {/* Lado Visual (Izquierda) */}
        <Reveal direction="right" className="order-2 md:order-1">
          <div className="relative h-[400px] rounded-2xl bg-card border border-slate-700/50 p-8 flex flex-col justify-center items-center shadow-[0_0_40px_rgba(34,211,238,0.1)] backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonCyan to-transparent rounded-t-2xl"></div>
            <Server className="text-neonCyan w-24 h-24 mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            <div className="flex flex-wrap justify-center gap-3 w-full">
              <span className="px-5 py-2 bg-dark rounded-lg text-neonEmerald font-mono text-sm border border-slate-700">C# / .NET</span>
              <span className="px-5 py-2 bg-dark rounded-lg text-neonPurple font-mono text-sm border border-slate-700">Node.js</span>
              <span className="px-5 py-2 bg-dark rounded-lg text-blue-400 font-mono text-sm border border-slate-700">Python</span>
              <span className="px-5 py-2 bg-dark rounded-lg text-yellow-400 font-mono text-sm border border-slate-700">SQL</span>
            </div>
          </div>
        </Reveal>

        {/* Lado Texto (Derecha) */}
        <Reveal direction="left" className="order-1 md:order-2">
          <div>
            <h3 className="text-neonCyan font-mono text-sm tracking-widest mb-3 uppercase">Perfil & Background</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pearl leading-tight">
              Ingeniería de <br /> Software Robusta
            </h2>
            <p className="text-lg text-steel mb-6 leading-relaxed">
              Pasante de la Licenciatura en Ciencias de la Informática en <span className="text-pearl font-medium">UPIICSA, IPN</span>. Mi enfoque principal es la construcción de arquitecturas sólidas, escalables y seguras desde la capa de datos hasta la lógica de negocio.
            </p>
            <p className="text-lg text-steel mb-6 leading-relaxed">
              Actualmente aporto mi experiencia desarrollando soluciones empresariales en <span className="text-neonCyan">MDM Centro de Servicios Empresariales</span> como Full-Stack.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-card rounded border border-slate-700"><Database className="w-4 h-4 text-neonPurple" /></div>
                <div>
                  <h4 className="text-pearl font-medium">IDEII (Servicio Social)</h4>
                  <p className="text-sm text-steel">Implementación de CMS (Frontend y Backend)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-card rounded border border-slate-700"><Brain className="w-4 h-4 text-neonEmerald" /></div>
                <div>
                  <h4 className="text-pearl font-medium">Coperva (Becario)</h4>
                  <p className="text-sm text-steel">Soporte Técnico y gestión de infraestructura</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Marquee Separador */}
      <Reveal direction="up" delay={0.2}>
        <div className="py-10 border-y border-slate-800 bg-dark/50">
          <Marquee 
            speed={40}
            direction="left"
            items={[
              <span className="text-2xl font-black text-steel/30 uppercase flex items-center gap-4"><Code2 className="text-neonCyan/50"/> ARQUITECTURA LIMPIA</span>,
              <span className="text-2xl font-black text-steel/30 uppercase flex items-center gap-4"><Code2 className="text-neonPurple/50"/> CÓDIGO ESCALABLE</span>,
              <span className="text-2xl font-black text-steel/30 uppercase flex items-center gap-4"><Code2 className="text-neonEmerald/50"/> TRABAJO EN EQUIPO</span>,
              <span className="text-2xl font-black text-steel/30 uppercase flex items-center gap-4"><Code2 className="text-neonCyan/50"/> PENSAMIENTO CRÍTICO</span>,
              <span className="text-2xl font-black text-steel/30 uppercase flex items-center gap-4"><Code2 className="text-neonPurple/50"/> SOLUCIONES EFICIENTES</span>
            ]} 
          />
        </div>
      </Reveal>
      
      </motion.div>
    </section>
  );
};
