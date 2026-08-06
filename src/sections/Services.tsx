import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Globe, Database, Building, TestTube, Users } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const services = [
    {
      icon: <Server className="w-8 h-8 text-neonCyan" />,
      title: "Desarrollo Full-Stack",
      description: "De backend robusto (C#, .NET) a frontends dinámicos (React). Arquitecturas limpias y documentadas.",
      tech: [".NET", "C#", "React", "Angular", "Node.js"],
      colorType: "cyan"
    },
    {
      icon: <Globe className="w-8 h-8 text-neonEmerald" />,
      title: "Aplicaciones Web Modernas",
      description: "Interfaces responsivas y experiencias de usuario excepcionales con las últimas tecnologías.",
      tech: ["React", "Angular", "TypeScript", "Tailwind", "Responsive"],
      colorType: "emerald"
    },
    {
      icon: <Database className="w-8 h-8 text-neonPurple" />,
      title: "Bases de Datos & Performance",
      description: "Desde SQL Server hasta NoSQL: diseño esquemas que aceleran consultas en un 40%.",
      tech: ["SQL Server", "PostgreSQL", "MongoDB", "Couchbase"],
      colorType: "purple"
    },
    {
      icon: <Building className="w-8 h-8 text-orange-400" />,
      title: "Arquitectura de Software",
      description: "Arquitectura Hexagonal, Vertical Slicing, patrones de diseño y código mantenible.",
      tech: ["Clean Architecture", "SOLID", "DDD", "Microservicios"],
      colorType: "orange"
    },
    {
      icon: <TestTube className="w-8 h-8 text-blue-400" />,
      title: "Testing & Calidad",
      description: "Unit Testing, integración continua y documentación técnica de alto nivel.",
      tech: ["Unit Tests", "Integration Tests", "Swagger", "DevOps"],
      colorType: "blue"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Mentoring & Code Review",
      description: "Enseño a equipos a escribir código mantenible, escalable y bien documentado.",
      tech: ["Clean Code", "Best Practices", "Team Leading", "Training"],
      colorType: "pink"
    }
  ];

  const getColorClasses = (type: string) => {
    switch (type) {
      case 'cyan': return { border: 'hover:border-neonCyan/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]' };
      case 'emerald': return { border: 'hover:border-neonEmerald/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]' };
      case 'purple': return { border: 'hover:border-neonPurple/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(192,132,252,0.3)]' };
      case 'orange': return { border: 'hover:border-orange-400/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(251,146,60,0.3)]' };
      case 'blue': return { border: 'hover:border-blue-400/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(96,165,250,0.3)]' };
      case 'pink': return { border: 'hover:border-pink-400/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(244,114,182,0.3)]' };
      default: return { border: 'hover:border-slate-500/50', shadow: 'group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]' };
    }
  };

  return (
    <section ref={ref} id="servicios" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden relative">
      <motion.div style={{ opacity, scale, y }} className="w-full">
      
      <Reveal direction="up" className="mb-20">
        <div className="text-center">
          <h3 className="text-neonEmerald font-mono text-sm tracking-widest mb-3 uppercase">Servicios Especializados</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pearl">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            Transformando visiones en software funcional, escalable y con calidad empresarial.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => {
          const colors = getColorClasses(service.colorType);
          return (
            <Reveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <Card hoverEffect className={`h-full flex flex-col group border-slate-700/50 transition-colors ${colors.border}`}>
                <div className={`w-16 h-16 bg-dark border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-shadow ${colors.shadow}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-pearl group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-steel mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-dark border border-slate-700/50 rounded-md text-xs font-mono text-steel group-hover:border-slate-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      {/* CTA Section */}
      <Reveal direction="up" delay={0.4}>
        <div className="text-center">
          <div className="bg-dark/50 backdrop-blur-md border border-neonCyan/30 rounded-2xl p-8 max-w-3xl mx-auto shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <h3 className="text-2xl font-bold mb-4 text-pearl">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-steel mb-8 text-lg">
              Combinemos tu visión con mi experiencia técnica para crear algo extraordinario.
            </p>
            <a href="#contacto">
              <Button size="lg" className="shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                Hablemos de tu proyecto
              </Button>
            </a>
          </div>
        </div>
      </Reveal>

      </motion.div>
    </section>
  );
};
