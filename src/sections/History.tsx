import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hammer, Code, Rocket } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';

export const History = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] // Inicia cuando la sección toca arriba, termina cuando se va por arriba
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} id="historia" className="py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden relative">
      <motion.div style={{ opacity, scale, y }} className="w-full">
        <Reveal direction="up" className="mb-20">
        <div className="text-center">
          <h3 className="text-neonCyan font-mono text-sm tracking-widest mb-3 uppercase">Mi Historia</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pearl">
            De la base a la Arquitectura
          </h2>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            Un viaje único desde el trabajo manual hasta la ingeniería de software.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {/* Origin */}
        <Reveal direction="left" delay={0.1}>
          <Card hoverEffect className="h-full flex flex-col group border-slate-700/50 hover:border-neonPurple/50 transition-colors">
            <div className="w-16 h-16 bg-dark border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(192,132,252,0.2)] group-hover:shadow-[0_0_25px_rgba(192,132,252,0.4)] transition-shadow">
              <Hammer className="w-8 h-8 text-neonPurple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pearl">Origen</h3>
            <p className="text-steel leading-relaxed">
              "Desde joven trabajé como carpintero y en la instalación de cocinas integrales. 
              Allí aprendí a resolver problemas reales con precisión, planificación y atención al detalle. 
              La carpintería me enseñó la importancia de visualizar soluciones antes de construirlas."
            </p>
          </Card>
        </Reveal>

        {/* Transition */}
        <Reveal direction="up" delay={0.2}>
          <Card hoverEffect className="h-full flex flex-col group border-slate-700/50 hover:border-neonCyan/50 transition-colors">
            <div className="w-16 h-16 bg-dark border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-shadow">
              <Code className="w-8 h-8 text-neonCyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pearl">Transición Tecnológica</h3>
            <p className="text-steel leading-relaxed">
              "Soy egresado de la Licenciatura en Ciencias de la Informática en UPIICSA - IPN. 
              Mi formación combina lógica, estructura y creatividad. He desarrollado proyectos con 
              tecnologías como C#, bases de datos SQL y NoSQL (MongoDB), además de bases sólidas en Node.js, 
              React, pruebas de software y Data Warehouse."
            </p>
          </Card>
        </Reveal>

        {/* Vision */}
        <Reveal direction="right" delay={0.3}>
          <Card hoverEffect className="h-full flex flex-col group border-slate-700/50 hover:border-neonEmerald/50 transition-colors">
            <div className="w-16 h-16 bg-dark border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(52,211,153,0.2)] group-hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-shadow">
              <Rocket className="w-8 h-8 text-neonEmerald" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pearl">Visión Profesional</h3>
            <p className="text-steel leading-relaxed">
              "Soy una persona proactiva, con actitud de crecimiento y liderazgo. 
              Busco oportunidades donde pueda aportar con responsabilidad y evolucionar hacia 
              un rol de mayor impacto. Mi meta es construir soluciones que no solo funcionen, 
              sino que marquen la diferencia."
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Philosophy Statement */}
      <Reveal direction="up" delay={0.4}>
        <div className="text-center">
          <div className="bg-dark/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <blockquote className="text-2xl md:text-3xl font-light text-pearl leading-relaxed">
              "Cada línea de código es una oportunidad para construir algo que trascienda. No solo desarrollo software,
              <span className="text-neonCyan font-semibold"> construyo soluciones con propósito, lógica y visión de futuro.</span>"
            </blockquote>
            <div className="mt-6 text-right">
              <cite className="text-steel text-lg font-mono">— Francisco Leonardo Martínez</cite>
            </div>
          </div>
        </div>
      </Reveal>
      
      </motion.div>
    </section>
  );
};
