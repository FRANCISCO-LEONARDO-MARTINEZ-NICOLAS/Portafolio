import React, { useState } from 'react';
import { Code, Server, Database, Cloud, PenTool as Tool, Smartphone } from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const technologies = [
    // Frontend
    { name: 'React', category: 'frontend', level: 75, icon: '⚛️', description: 'SPAs, componentes funcionales y manejo de estado' },
    { name: 'Angular', category: 'frontend', level: 60, icon: '🅰️', description: 'Fundamentos para apps modulares empresariales' },
    { name: 'TypeScript', category: 'frontend', level: 72, icon: '🔷', description: 'JavaScript tipado para proyectos más robustos' },
    { name: 'Tailwind CSS', category: 'frontend', level: 78, icon: '🎨', description: 'Interfaces responsivas y limpias' },
    { name: 'HTML5/CSS3', category: 'frontend', level: 80, icon: '🌐', description: 'Buenas prácticas en maquetado web' },

    // Backend
    { name: '.NET Core', category: 'backend', level: 78, icon: '🔵', description: 'Desarrollo de APIs REST con buenas prácticas' },
    { name: 'C#', category: 'backend', level: 75, icon: '💜', description: 'POO, control de errores, lógica de negocio' },
    { name: 'Node.js', category: 'backend', level: 65, icon: '💚', description: 'Scripts y servidores simples con Express' },
    { name: 'PHP', category: 'backend', level: 60, icon: '🐘', description: 'CRUDs y APIs básicas' },

    // Database
    { name: 'SQL Server', category: 'database', level: 80, icon: '🗄️', description: 'Consultas, joins y procedimientos almacenados' },
    { name: 'PostgreSQL', category: 'database', level: 75, icon: '🐘', description: 'Modelo relacional en proyectos con Node/.NET' },
    { name: 'MongoDB', category: 'database', level: 65, icon: '🍃', description: 'Modelo documental y operaciones CRUD' },
    { name: 'Couchbase', category: 'database', level: 60, icon: '📊', description: 'Bases NoSQL distribuidas (conceptual y pruebas)' },
    { name: 'MySQL', category: 'database', level: 78, icon: '🐬', description: 'Diseño de BD y normalización' },

    // DevOps & Tools
    { name: 'Git', category: 'tools', level: 80, icon: '📝', description: 'Control de versiones con ramas y GitHub' },
    { name: 'Docker', category: 'tools', level: 65, icon: '🐳', description: 'Contenedores para ambientes controlados' },
    { name: 'Azure DevOps', category: 'tools', level: 60, icon: '☁️', description: 'Pipelines y gestión de tareas (aprendizaje en curso)' },
    { name: 'Swagger/OpenAPI', category: 'tools', level: 75, icon: '📋', description: 'Documentación de endpoints en APIs REST' },
    { name: 'Postman', category: 'tools', level: 78, icon: '🚀', description: 'Testing y validación de peticiones HTTP' }
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: <Code className="w-4 h-4" />, count: technologies.length },
    { id: 'frontend', name: 'Frontend', icon: <Smartphone className="w-4 h-4" />, count: technologies.filter(t => t.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" />, count: technologies.filter(t => t.category === 'backend').length },
    { id: 'database', name: 'Databases', icon: <Database className="w-4 h-4" />, count: technologies.filter(t => t.category === 'database').length },
    { id: 'tools', name: 'DevOps & Tools', icon: <Tool className="w-4 h-4" />, count: technologies.filter(t => t.category === 'tools').length }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-emerald-400 to-emerald-500';
    if (level >= 80) return 'from-cyan-400 to-cyan-500';
    if (level >= 70) return 'from-blue-400 to-blue-500';
    return 'from-purple-400 to-purple-500';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Experto';
    if (level >= 80) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Básico';
  };

  return (
    <section id="tech-stack" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-[1.2] pb-2">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tecnologías que domino y utilizo para crear soluciones robustas y escalables
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                  : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-white'
              }`}
            >
              {category.icon}
              {category.name}
              <span className="bg-slate-700 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTechnologies.map((tech, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl p-6 transition-all duration-300 transform group-hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                    <p className="text-sm text-slate-400">{getLevelText(tech.level)}</p>
                  </div>
                </div>
                
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {tech.description}
                </p>
                
                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Dominio</span>
                    <span className="text-white font-semibold">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(tech.level)} transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Patterns */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Cloud className="w-6 h-6 text-cyan-400" />
            Arquitectura & Patrones de Diseño
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Clean Architecture', icon: '🏗️', description: 'Separación de responsabilidades y dependencias' },
              { name: 'Hexagonal Architecture', icon: '⬡', description: 'Puertos y adaptadores para flexibilidad' },
              { name: 'Vertical Slice', icon: '📚', description: 'Organización por características del negocio' },
              { name: 'SOLID Principles', icon: '🔒', description: 'Principios fundamentales de diseño' },
              { name: 'Domain Driven Design', icon: '🎯', description: 'Modelado orientado al dominio del negocio' },
              { name: 'Unit Testing', icon: '🧪', description: 'Pruebas automatizadas y TDD' }
            ].map((pattern, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center hover:border-emerald-400/50 transition-colors duration-300">
                <div className="text-2xl mb-2">{pattern.icon}</div>
                <h4 className="text-white font-semibold mb-2">{pattern.name}</h4>
                <p className="text-slate-400 text-sm">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning & Growth */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Aprendizaje Continuo
            </h3>
            <p className="text-slate-300 mb-6">
              La tecnología evoluciona constantemente, y yo evoluciono con ella. 
              Siempre estoy aprendiendo nuevas herramientas y mejorando las existentes.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['AI/ML', 'Kubernetes', 'GraphQL', 'Next.js', 'Rust', 'Go'].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-slate-700 border border-emerald-400/30 text-emerald-400 rounded-full text-sm">
                  📚 {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;