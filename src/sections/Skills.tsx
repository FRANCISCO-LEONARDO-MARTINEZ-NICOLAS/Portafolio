import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Bot, Code, Database, LayoutTemplate, Cpu, Smartphone, Server, PenTool, CheckCircle, Cloud, Sparkles } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Marquee } from '../components/Marquee';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const technologies = [
    // Frontend
    { name: 'React', category: 'frontend', level: 38, icon: <LayoutTemplate className="w-6 h-6 text-neonCyan" />, description: 'SPAs, componentes funcionales y hooks' },
    { name: 'Tailwind CSS', category: 'frontend', level: 37, icon: <LayoutTemplate className="w-6 h-6 text-neonCyan" />, description: 'Interfaces responsivas y diseño moderno' },
    { name: 'HTML/CSS', category: 'frontend', level: 55, icon: <LayoutTemplate className="w-6 h-6 text-neonCyan" />, description: 'Maquetado semántico y estilos avanzados' },

    // Backend
    { name: 'C#', category: 'backend', level: 43, icon: <Code className="w-6 h-6 text-neonPurple" />, description: 'POO, lógica de negocio y APIs robustas' },
    { name: '.NET Core', category: 'backend', level: 38, icon: <Code className="w-6 h-6 text-blue-400" />, description: 'Desarrollo de APIs REST con buenas prácticas' },
    { name: 'Node.js', category: 'backend', level: 36, icon: <Server className="w-6 h-6 text-neonEmerald" />, description: 'Servidores escalables y scripts' },
    { name: 'Express', category: 'backend', level: 39, icon: <Server className="w-6 h-6 text-steel" />, description: 'Creación rápida de APIs REST' },

    // Database
    { name: 'SQL Server', category: 'database', level: 38, icon: <Database className="w-6 h-6 text-red-400" />, description: 'Consultas, joins y procedimientos almacenados' },
    { name: 'PostgreSQL', category: 'database', level: 35, icon: <Database className="w-6 h-6 text-blue-400" />, description: 'Modelo relacional y optimización' },
    { name: 'MongoDB', category: 'database', level: 36, icon: <Database className="w-6 h-6 text-green-500" />, description: 'Bases NoSQL documentales' },
    { name: 'MySQL', category: 'database', level: 40, icon: <Database className="w-6 h-6 text-orange-400" />, description: 'Diseño de bases de datos y normalización' },

    // AI
    { name: 'Prompt Engineering', category: 'ai', level: 39, icon: <Bot className="w-6 h-6 text-yellow-400" />, description: 'Optimización de prompts y flujos con IA' },
    { name: 'Ollama', category: 'ai', level: 37, icon: <Sparkles className="w-6 h-6 text-neonCyan" />, description: 'Implementación de modelos locales' },

    // Tools & QA
    { name: 'Git/GitHub', category: 'tools', level: 50, icon: <Cpu className="w-6 h-6 text-pearl" />, description: 'Control de versiones y colaboración' },
    { name: 'Azure DevOps', category: 'tools', level: 35, icon: <Cloud className="w-6 h-6 text-blue-500" />, description: 'Gestión de proyectos y CI/CD' },
    { name: 'Diseño de pruebas', category: 'tools', level: 38, icon: <CheckCircle className="w-6 h-6 text-neonEmerald" />, description: 'Testing manual y metodologías de QA' },
    { name: 'Documentación Técnica', category: 'tools', level: 60, icon: <PenTool className="w-6 h-6 text-steel" />, description: 'Creación de manuales y especificaciones' },
    { name: 'Data Warehouse', category: 'tools', level: 36, icon: <Database className="w-6 h-6 text-neonPurple" />, description: 'Almacenamiento y análisis de datos' },
    { name: 'Swagger/OpenAPI', category: 'tools', level: 39, icon: <PenTool className="w-6 h-6 text-green-400" />, description: 'Documentación de endpoints en APIs REST' },
    { name: 'Postman', category: 'tools', level: 37, icon: <Cloud className="w-6 h-6 text-orange-400" />, description: 'Testing y validación de peticiones HTTP' },
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: <Code className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', name: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'ai', name: 'IA', icon: <Bot className="w-4 h-4" /> },
    { id: 'tools', name: 'DevOps & QA', icon: <PenTool className="w-4 h-4" /> }
  ];

  const filteredTechnologies = activeCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  const getLevelColor = (level: number) => {
    if (level >= 50) return 'bg-neonCyan shadow-[0_0_10px_rgba(34,211,238,0.5)]';
    if (level >= 40) return 'bg-neonPurple shadow-[0_0_10px_rgba(192,132,252,0.5)]';
    if (level >= 37) return 'bg-neonEmerald shadow-[0_0_10px_rgba(52,211,153,0.5)]';
    return 'bg-steel';
  };

  const getLevelText = (_level: number) => {
    return 'Básico';
  };

  return (
    <section ref={ref} id="habilidades" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden relative">
      <motion.div style={{ opacity, scale, y }} className="w-full">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h3 className="text-neonPurple font-mono text-sm tracking-widest mb-3 uppercase">Stack Tecnológico</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-pearl mb-6">Toolkit de Desarrollo</h2>
            <p className="text-steel text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones robustas, eficientes y escalables.
            </p>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const count = category.id === 'all' ? technologies.length : technologies.filter(t => t.category === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 border ${activeCategory === category.id
                    ? 'bg-neonCyan/10 border-neonCyan text-neonCyan shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                    : 'bg-card/50 border-slate-700/50 text-steel hover:border-neonPurple/50 hover:text-pearl'
                    }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? 'bg-neonCyan/20 text-neonCyan' : 'bg-dark text-steel'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 min-h-[400px] content-start">
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card hoverEffect className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-dark/80 rounded-xl border border-slate-700/50 shadow-inner group-hover:border-neonCyan/30 transition-colors">
                        {tech.icon}
                      </div>
                      <span className="text-xs font-mono text-neonPurple bg-neonPurple/10 px-3 py-1 rounded-full">
                        {getLevelText(tech.level)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-pearl mb-2">{tech.name}</h3>
                    <p className="text-steel text-sm leading-relaxed mb-6">
                      {tech.description}
                    </p>
                  </div>

                  {/* Skill Level Bar */}
                  <div className="mt-auto space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-steel">Dominio</span>
                      <span className="text-pearl">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-dark rounded-full h-1.5 border border-slate-700/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full ${getLevelColor(tech.level)}`}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Architecture & Patterns */}
        <Reveal direction="up">
          <Card className="mb-20 bg-gradient-to-br from-card to-dark border-slate-700/50">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-pearl flex items-center justify-center gap-3">
                <Cloud className="w-6 h-6 text-neonCyan" />
                Arquitectura & Patrones
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Clean Architecture', icon: '🏗️', desc: 'Desacoplamiento' },
                { name: 'SOLID', icon: '🔒', desc: 'Principios de diseño' },
                { name: 'API RESTful', icon: '🌐', desc: 'Servicios web' },
                { name: 'MVC', icon: '📊', desc: 'Patrón arquitectónico' },
                { name: 'Microservicios', icon: '🧩', desc: 'Conceptos básicos' },
                { name: 'CI/CD', icon: '🚀', desc: 'Integración continua' }
              ].map((pattern, idx) => (
                <div key={idx} className="bg-dark/50 border border-slate-700/30 rounded-xl p-4 text-center hover:border-neonPurple/50 transition-colors group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{pattern.icon}</div>
                  <h4 className="text-pearl font-medium text-sm mb-1">{pattern.name}</h4>
                  <p className="text-steel text-xs">{pattern.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Learning & Marquee */}
        <Reveal direction="up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-pearl mb-4">
              Aprendizaje Continuo
            </h3>
            <p className="text-steel max-w-2xl mx-auto mb-8">
              En constante evolución para mantenerme al día con las mejores prácticas y nuevas tecnologías.
            </p>
          </div>

          <div className="py-6 border-y border-slate-800 bg-card/30 overflow-hidden">
            <Marquee
              speed={40}
              direction="right"
              items={[
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonCyan transition-colors cursor-default">Docker</span>,
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonPurple transition-colors cursor-default">Next.js</span>,
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonEmerald transition-colors cursor-default">GraphQL</span>,
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonCyan transition-colors cursor-default">AWS</span>,
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonPurple transition-colors cursor-default">Kubernetes</span>,
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonEmerald transition-colors cursor-default">Clean Code</span>,
                <span className="text-lg font-mono text-steel/70 mx-6 hover:text-neonCyan transition-colors cursor-default">TDD</span>,
              ]}
            />
          </div>
        </Reveal>

      </motion.div>
    </section>
  );
};

