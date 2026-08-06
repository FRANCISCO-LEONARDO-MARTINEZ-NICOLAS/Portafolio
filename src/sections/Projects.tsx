import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Users, GitBranch, ExternalLink, Image as ImageIcon, X, TrendingUp, Clock, Award } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';

type ProjectImage = { src: string; alt: string; description: string; };
type ProjectImages = { after: ProjectImage[]; };
type ProjectMetric = { icon: React.ReactNode; value: string; label: string; };
type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  images?: ProjectImages;
  metrics: ProjectMetric[];
};

const PROJECTS_DATA: Project[] = [
  {
    title: "SIGCAO - Sistema Integral de Gestión Clínica",
    description: "Plataforma SaaS completa (Frontend y Backend) para clínicas oftalmológicas, manejando expedientes, control de inventarios y gestión de citas.",
    problem: "Procesos manuales basados en papel (expedientes, agendas) que generaban tiempos de espera largos, pérdida de información y descontrol en el inventario de ópticas.",
    solution: "Una arquitectura basada en microservicios que digitaliza todo el flujo del paciente, desde la recepción hasta el taller, con interfaces responsivas para 4 perfiles distintos.",
    impact: "30% Menos Tiempo",
    technologies: ["Microservicios", ".NET Core", "React 18", "TypeScript", "MongoDB", "Docker", "Azure"],
    image: "🏥",
    githubUrl: "https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS", 
    images: {
      after: [
        { src: "/images/ArqNube.jpg", alt: "Arquitectura de Microservicios", description: "Despliegue en la nube con Azure Container Apps, API Gateway y bases de datos SQL/NoSQL." },
        { src: "/images/Login.jpg", alt: "Pantalla de Autenticación", description: "Interfaz moderna con Control de Acceso Basado en Roles (RBAC)." },
        { src: "/images/DiagramaSIGCAO.png", alt: "Diagrama de Procesos", description: "Mapeo detallado de la lógica de negocio y comunicación entre módulos." }
      ]
    },
    metrics: [
      { icon: <Clock className="w-4 h-4" />, value: "30%", label: "Atención más rápida" },
      { icon: <Database className="w-4 h-4" />, value: "100%", label: "Expedientes Digitales" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "Real-time", label: "Control Inventario" }
    ]
  },
  {
    title: "Cartografía del Pensamiento Latinoamericano",
    description: "Plataforma educativa interactiva para explorar el pensamiento pedagógico latinoamericano.",
    problem: "Falta de acceso a información estructurada sobre los pensadores que moldearon la educación en la región, dificultando la comprensión de las raíces pedagógicas.",
    solution: "Una plataforma web interactiva que mapea visualmente el pensamiento educativo, conectando autores, países y conceptos de manera intuitiva y educativa.",
    impact: "13 Pensadores",
    technologies: ["React 18", "TypeScript", "Framer Motion", "Tailwind CSS"],
    image: "🗺️",
    demoUrl: "https://andrea-montes-plataformaeducativa.netlify.app/",
    githubUrl: "https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS/PlataformaEducativa.git",
    images: {
      after: [
        { src: "/images/cartografia-1.jpg", alt: "Pantalla principal", description: "Interfaz de bienvenida con búsqueda y mapa interactivo de países." },
        { src: "/images/cartografia-3.jpg", alt: "Detalle del contenido", description: "Visualización detallada de la información de los pensadores y sus aportes." }
      ]
    },
    metrics: [
      { icon: <Users className="w-4 h-4" />, value: "13", label: "Autores Mapeados" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "8", label: "Países Incluidos" },
      { icon: <Award className="w-4 h-4" />, value: "100%", label: "Interactivo" }
    ]
  }
];

const CaseStudyModal: React.FC<{ isOpen: boolean; onClose: () => void; project: Project | null }> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const getCaseStudyContent = (projectTitle: string) => {
    if (projectTitle.includes("SIGCAO")) {
      return {
        title: "Caso de Estudio: SIGCAO",
        sections: [
          {
            title: "🎯 Analista de Negocio (Requerimientos y Modelado)",
            content: "• Realicé el levantamiento de requerimientos funcionales y no funcionales, trabajando directamente con los stakeholders.\n• Definí el modelo de datos clínico (ER) adaptado para escalabilidad.\n• Diseñé los casos de uso y diagramas de procesos para asegurar la transición del papel al ecosistema digital."
          },
          {
            title: "💻 Desarrollador Full Stack (Frontend & Backend)",
            content: "• Frontend: Diseñé la SPA con React 18 y TypeScript, creando un sistema de rutas protegido por 4 roles.\n• Backend: Programé la lógica de negocio a través de microservicios en .NET Core, aislando los módulos Clínico, Punto de Venta, Taller e Inventario."
          },
          {
            title: "☁️ DevOps e Infraestructura (Cloud & Contenedores)",
            content: "• Creación de los Dockerfiles para la contenerización de las APIs y del portal web.\n• Despliegue en la nube (Azure Container Apps) configurando el API Gateway y garantizando una alta disponibilidad del servicio."
          },
          {
            title: "📊 Impacto en el Negocio",
            content: "Digitalización del 100% de los expedientes clínicos. Se redujo el tiempo de atención al paciente en un 30% y se obtuvo un control de inventario en tiempo real que redujo drásticamente las mermas."
          }
        ]
      };
    }
    return { title: "Caso de Estudio", sections: [{ title: "Información General", content: project.description }] };
  };

  const caseStudy = getCaseStudyContent(project.title);

  return (
    <div className="fixed inset-0 bg-dark/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="bg-card border border-slate-700 shadow-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="bg-slate-800/80 backdrop-blur border-b border-slate-700 p-6 md:px-8 flex justify-between items-center shrink-0">
          <h3 className="text-2xl md:text-3xl font-bold text-pearl">{caseStudy.title}</h3>
          <button onClick={onClose} className="text-steel hover:text-neonCyan transition-colors bg-dark/50 p-2 rounded-full border border-slate-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          {caseStudy.sections.map((section, index) => (
            <div key={index} className="space-y-3 bg-dark/50 p-6 rounded-2xl border border-slate-700/50 hover:border-neonPurple/30 transition-colors">
              <h4 className="text-xl font-bold text-neonCyan">{section.title}</h4>
              <p className="text-steel leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageModal: React.FC<{ isOpen: boolean; onClose: () => void; image: ProjectImage | null }> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null;
  return (
    <div className="fixed inset-0 bg-dark/90 backdrop-blur-md z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-card border border-slate-700 rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="bg-card/80 backdrop-blur border-b border-slate-700 p-4 w-full flex justify-between items-center rounded-t-2xl shrink-0">
          <span className="text-lg font-bold text-pearl">{image.alt}</span>
          <button onClick={onClose} className="text-steel hover:text-neonCyan transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center bg-dark/50 rounded-b-2xl">
          <img src={image.src} alt={image.alt} className="w-full h-auto object-contain rounded-xl mb-4 border border-slate-700/50 shadow-lg" />
          <div className="text-steel text-center text-sm">{image.description}</div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} id="proyectos" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden relative">
      <motion.div style={{ opacity, scale, y }} className="w-full">
        <Reveal direction="up" className="mb-20 text-center">
          <h3 className="text-neonEmerald font-mono text-sm tracking-widest mb-3 uppercase">Portafolio</h3>
          <h2 className="text-4xl md:text-6xl font-extrabold text-pearl mb-6">Proyectos Destacados</h2>
          <p className="text-lg md:text-xl text-steel max-w-3xl mx-auto">
            Casos de estudio donde la tecnología transformó procesos de negocio obsoletos en operaciones digitales escalables.
          </p>
        </Reveal>

        <div className="flex flex-col gap-24">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={index} direction={isEven ? "left" : "right"}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Contenido (Izquierda o Derecha dependiendo de isEven) */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-4xl">{project.image}</div>
                      <h3 className="text-3xl font-bold text-pearl leading-tight">{project.title}</h3>
                    </div>
                    
                    <Card hoverEffect={false} className="p-6 bg-dark/40 border-slate-700/50">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-red-400/90 font-bold mb-1 flex items-center gap-2 text-sm">🎯 El Problema</h4>
                          <p className="text-steel text-sm leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-neonEmerald font-bold mb-1 flex items-center gap-2 text-sm">💡 La Solución</h4>
                          <p className="text-steel text-sm leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </Card>

                    <div>
                      <h4 className="text-neonCyan font-bold mb-3 text-sm">🛠️ Stack Tecnológico</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="px-3 py-1 bg-dark/80 border border-slate-700/80 rounded-full text-xs font-mono text-pearl shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-neonEmerald to-neonCyan text-dark hover:brightness-110 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-dark border border-slate-600 hover:border-neonPurple text-pearl px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm">
                          <GitBranch className="w-4 h-4" /> Repositorio
                        </a>
                      )}
                      <button onClick={() => { setSelectedProject(project); setIsModalOpen(true); }} className="flex items-center gap-2 border border-neonCyan hover:bg-neonCyan/10 text-neonCyan px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm">
                        <ExternalLink className="w-4 h-4" /> Caso de Estudio
                      </button>
                    </div>
                  </div>

                  {/* Galería (Izquierda o Derecha) */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {project.images && (
                      <Card className="p-6 bg-dark/40 border-slate-700/50">
                        <h4 className="text-neonPurple font-bold mb-4 flex items-center gap-2 text-sm">
                          <ImageIcon className="w-4 h-4" />
                          Galería del Proyecto
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.images.after.map((img, imgIdx) => (
                            <div key={imgIdx} className={`group relative cursor-pointer ${imgIdx === 2 ? 'col-span-2' : ''}`} onClick={() => { setSelectedImage(img); setIsImageModalOpen(true); }}>
                              <div className="aspect-video bg-dark rounded-xl overflow-hidden border border-slate-700 group-hover:border-neonCyan/50 transition-colors flex items-center justify-center">
                                <img src={img.src} alt={img.alt} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = "https://via.placeholder.com/300x200/1e293b/38bdf8?text=Imagen+No+Encontrada";
                                }} />
                              </div>
                              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl backdrop-blur-sm">
                                <span className="text-xs font-bold text-pearl text-center px-2">{img.alt}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    )}
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="bg-dark/40 border border-slate-700/50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                          <div className="text-neonCyan mb-2">{metric.icon}</div>
                          <div className="font-bold text-pearl">{metric.value}</div>
                          <div className="text-[10px] text-steel mt-1 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </motion.div>

      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
      <ImageModal isOpen={isImageModalOpen} onClose={() => setIsImageModalOpen(false)} image={selectedImage} />
    </section>
  );
};
