import React from 'react';
import { Server, Globe, Database, Building, TestTube, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Desarrollo Full-Stack",
      description: "De backend robusto (C#, .NET) a frontends dinámicos (React). Arquitecturas limpias y documentadas.",
      tech: [".NET", "C#", "React", "Angular", "Node.js"],
      color: "cyan"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Aplicaciones Web Modernas",
      description: "Interfaces responsivas y experiencias de usuario excepcionales con las últimas tecnologías.",
      tech: ["React", "Angular", "TypeScript", "Tailwind", "Responsive"],
      color: "emerald"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de Datos & Performance",
      description: "Desde SQL Server hasta NoSQL: diseño esquemas que aceleran consultas en un 40%.",
      tech: ["SQL Server", "PostgreSQL", "MongoDB", "Couchbase", "MySQL"],
      color: "purple"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Arquitectura de Software",
      description: "Arquitectura Hexagonal, Vertical Slicing, patrones de diseño y código mantenible.",
      tech: ["Clean Architecture", "SOLID", "DDD", "Microservicios", "APIs REST"],
      color: "orange"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & Calidad",
      description: "Unit Testing, integración continua y documentación técnica de alto nivel.",
      tech: ["Unit Tests", "Integration Tests", "Swagger", "DevOps", "CI/CD"],
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentoring & Code Review",
      description: "Enseño a equipos a escribir código mantenible, escalable y bien documentado.",
      tech: ["Clean Code", "Best Practices", "Team Leading", "Documentation", "Training"],
      color: "pink"
    }
  ];

  const colorClasses = {
    cyan: {
      border: "border-cyan-400/50",
      bg: "from-cyan-500/20 to-cyan-600/20",
      icon: "from-cyan-400 to-cyan-500",
      title: "text-cyan-400",
      hover: "hover:border-cyan-400"
    },
    emerald: {
      border: "border-emerald-400/50",
      bg: "from-emerald-500/20 to-emerald-600/20",
      icon: "from-emerald-400 to-emerald-500",
      title: "text-emerald-400",
      hover: "hover:border-emerald-400"
    },
    purple: {
      border: "border-purple-400/50",
      bg: "from-purple-500/20 to-purple-600/20",
      icon: "from-purple-400 to-purple-500",
      title: "text-purple-400",
      hover: "hover:border-purple-400"
    },
    orange: {
      border: "border-orange-400/50",
      bg: "from-orange-500/20 to-orange-600/20",
      icon: "from-orange-400 to-orange-500",
      title: "text-orange-400",
      hover: "hover:border-orange-400"
    },
    blue: {
      border: "border-blue-400/50",
      bg: "from-blue-500/20 to-blue-600/20",
      icon: "from-blue-400 to-blue-500",
      title: "text-blue-400",
      hover: "hover:border-blue-400"
    },
    pink: {
      border: "border-pink-400/50",
      bg: "from-pink-500/20 to-pink-600/20",
      icon: "from-pink-400 to-pink-500",
      title: "text-pink-400",
      hover: "hover:border-pink-400"
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Servicios especializados para transformar tu visión en software funcional y escalable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`relative bg-slate-800 border border-slate-700 ${colors.hover} rounded-xl p-6 h-full transition-all duration-300 transform group-hover:scale-105`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.icon} rounded-full flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${colors.title}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-slate-700 ${colors.border} border rounded-full text-sm text-slate-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-slate-300 mb-6">
              Combinemos tu visión con mi experiencia técnica para crear algo extraordinario.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;