import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Users, Clock, Award, Image as ImageIcon, X } from 'lucide-react';

// Types
interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  description: string;
}

interface ProjectImages {
  after: ProjectImage[];
}

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  images?: ProjectImages;
  metrics: Metric[];
  featured: boolean;
  demoUrl?: string;
}

// Constants
const PROJECTS_DATA: Project[] = [
  {
    title: "Sistema de Diagnóstico Óptico",
    description: "Plataforma completa para clínicas de optometría para diagnósticos visuales automatizados.",
    problem: "Las clínicas tardaban 45 minutos promedio por consulta, limitando la cantidad de pacientes atendidos.",
    solution: "Este sistema reduce tiempo de consulta a 30 minutos y mejorando precisión.",
    impact: "35% reducción en tiempo de atención",
    technologies: [".NET", "React", "MongoDB", "Clean Architecture", "DDD", "SOLID"],
    image: "🏥",
    images: {
      after: [
        {
          src: "/src/assets/images/despues-1.jpg",
          alt: "Panel de administración de OptiCare",
          description: "Dashboard moderno y centralizado para gestión óptica"
        },
        {
          src: "/src/assets/images/despues-2.jpg",
          alt: "Modelo de datos NoSQL",
          description: "Diagrama de entidades y relaciones del sistema"
        }
      ]
    },
    metrics: [
      { icon: <TrendingUp className="w-4 h-4" />, value: "35%", label: "Tiempo reducido" },
      { icon: <Users className="w-4 h-4" />, value: "500+", label: "Pacientes/mes" },
      { icon: <Award className="w-4 h-4" />, value: "98%", label: "Precisión" }
    ],
    featured: true
  },

  {
    title: "Cartografía del Pensamiento Latinoamericano",
    description: "Plataforma educativa interactiva para explorar el pensamiento pedagógico latinoamericano.",
    problem: "La falta de acceso a información estructurada sobre los pensadores latinoamericanos que han moldeado la educación en la región, dificultando la comprensión de las raíces pedagógicas de América Latina.",
    solution: "Una plataforma web interactiva que mapea visualmente el pensamiento educativo latinoamericano, conectando autores, países y conceptos de manera intuitiva y educativa.",
    impact: "13 pensadores mapeados visualmente",
    technologies: ["React 18", "TypeScript", "Framer Motion", "Tailwind CSS", "Lucide React", "Vite"],
    image: "🗺️",
    demoUrl: "https://andrea-montes-plataformaeducativa.netlify.app/",
    images: {
      after: [
        {
          src: "/src/assets/images/cartografia-1.jpg",
          alt: "Pantalla principal de la Cartografía del Pensamiento Latinoamericano",
          description: "Interfaz de bienvenida con búsqueda y mapa interactivo de países."
        },
        {
          src: "/src/assets/images/cartografia-2.jpg",
          alt: "Detalle de pensador latinoamericano",
          description: "Panel de información de José Vasconcelos, México, con aportes y frase clave."
        },
        {
          src: "/src/assets/images/cartografia-3.jpg",
          alt: "Mapa interactivo y panel lateral",
          description: "Visualización del mapa y panel lateral con información de pensadores."
        }
      ]
    },
    metrics: [
      { icon: <Users className="w-4 h-4" />, value: "13", label: "Pensadores mapeados" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "8", label: "Países representados" },
      { icon: <Award className="w-4 h-4" />, value: "100%", label: "Contenido multimedia" }
    ],
    featured: true
  }
];

// Subcomponents
const ProjectHeader: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex items-center gap-4">
    <div className="text-4xl">{project.image}</div>
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-300">{project.description}</p>
    </div>
  </div>
);

const ProblemSolution: React.FC<{ project: Project }> = ({ project }) => (
  <div className="space-y-4">
    <div>
      <h4 className="text-red-400 font-semibold mb-2">🎯 Problema:</h4>
      <p className="text-slate-300 text-sm">{project.problem}</p>
    </div>
    <div>
      <h4 className="text-emerald-400 font-semibold mb-2">💡 Solución:</h4>
      <p className="text-slate-300 text-sm">{project.solution}</p>
    </div>
  </div>
);

const TechnologyStack: React.FC<{ technologies: string[] }> = ({ technologies }) => (
  <div>
    <h4 className="text-cyan-400 font-semibold mb-3">🛠️ Stack Tecnológico:</h4>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-sm text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// Modal para imagen expandida
const ImageModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  image: ProjectImage | null;
}> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col items-center">
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 w-full flex justify-between items-center z-10">
          <span className="text-lg font-semibold text-white">{image.alt}</span>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
          <img src={image.src} alt={image.alt} className="object-contain max-h-[60vh] w-full rounded-lg mb-4" />
          <div className="text-slate-300 text-center text-sm mb-2">{image.description}</div>
        </div>
      </div>
    </div>
  );
};

const ProjectImages: React.FC<{ images: ProjectImages; onImageClick: (image: ProjectImage) => void }> = ({ images, onImageClick }) => {
  const [errores, setErrores] = React.useState<{ [key: number]: boolean }>({});

  const handleImgError = (index: number) => {
    setErrores((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="space-y-4">
      <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2 justify-center">
        <ImageIcon className="w-5 h-5" />
        Imágenes del Proyecto
      </h4>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          {images.after.map((img, index) => (
            <div key={index} className="group relative cursor-pointer" onClick={() => !errores[index] && onImageClick(img)}>
              <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden border border-slate-600 hover:border-emerald-400/50 transition-colors flex items-center justify-center">
                {errores[index] ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-2xl mb-2">📷</div>
                      <div className="text-xs text-slate-400">{img.alt}</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-contain w-full h-full"
                    onError={() => handleImgError(index)}
                  />
                )}
              </div>
              <div className="mt-2 text-xs text-slate-400 text-center">
                {img.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectActions: React.FC<{ project: Project; onCaseStudyClick: (project: Project) => void }> = ({ project, onCaseStudyClick }) => {
  const getGithubUrl = (projectTitle: string) => {
    switch (projectTitle) {
      case "Cartografía del Pensamiento Latinoamericano":
        return "https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS/PlataformaEducativa.git";
      case "Sistema de Diagnóstico Óptico":
        return "https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS/NoSQL.git";
      default:
        return "#";
    }
  };

  return (
    <div className="flex gap-4 pt-4 flex-wrap">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          Ver Demo
        </a>
      )}
      <a 
        href={getGithubUrl(project.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 text-sm"
      >
        <Github className="w-4 h-4" />
        Ver Código
      </a>
      <button 
        onClick={() => onCaseStudyClick(project)}
        className="flex items-center gap-2 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
      >
        <ExternalLink className="w-4 h-4" />
        Caso de Estudio
      </button>
    </div>
  );
};

const ProjectMetrics: React.FC<{ project: Project }> = ({ project }) => (
  <div className="space-y-6">
    <div className="bg-slate-700/50 rounded-xl p-6">
      <h4 className="text-emerald-400 font-bold text-xl mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Impacto Medible
      </h4>
      <div className="text-3xl font-bold text-white mb-2">{project.impact}</div>
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        {project.metrics.map((metric, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
            <div className="text-cyan-400">
              {metric.icon}
            </div>
            <div>
              <div className="text-white font-bold">{metric.value}</div>
              <div className="text-slate-400 text-sm">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; index: number; onCaseStudyClick: (project: Project) => void; onImageClick: (image: ProjectImage) => void }> = ({ project, index, onCaseStudyClick, onImageClick }) => (
  <div className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:scale-[1.02]">
      <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6 p-8`}>
        
        {/* Project Info */}
        <div className="space-y-6">
          <ProjectHeader project={project} />
          <ProblemSolution project={project} />
          <TechnologyStack technologies={project.technologies} />
          
          {project.images && <ProjectImages images={project.images} onImageClick={onImageClick} />}
          <ProjectActions project={project} onCaseStudyClick={onCaseStudyClick} />
        </div>

        {/* Metrics */}
        {project.featured && <ProjectMetrics project={project} />}
      </div>
    </div>
  </div>
);

const MoreProjectsCTA: React.FC = () => (
  <div className="mt-16 text-center">
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-white">
        ¿Quieres ver más proyectos?
      </h3>
      <p className="text-slate-300 mb-6">
        Tengo más casos de estudio y proyectos que demuestran mi experiencia en diferentes industrias.
      </p>
      <a
        href="https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
      >
        <Github className="w-5 h-5" />
        Ver Portfolio Completo
      </a>
    </div>
  </div>
);

// Case Study Modal Component
const CaseStudyModal: React.FC<{ isOpen: boolean; onClose: () => void; project: Project | null }> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const getCaseStudyContent = (projectTitle: string) => {
    switch (projectTitle) {
      case "Sistema de Diagnóstico Óptico":
        return {
          title: "Caso de Estudio: Sistema de Diagnóstico Óptico",
          sections: [
            {
              title: "🎯 Contexto del Problema",
              content: "Las clínicas de optometría enfrentaban un proceso manual que tomaba 45 minutos promedio por consulta, limitando significativamente la cantidad de pacientes que podían atender diariamente. Los formularios en papel y el archivo manual generaban errores y retrasos en el diagnóstico."
            },
            {
              title: "💡 Solución Implementada",
              content: "Desarrollamos una plataforma completa con Clean Architecture y DDD, utilizando .NET para el backend y React para el frontend. El sistema automatiza el proceso de diagnóstico, reduce el tiempo de consulta a 30 minutos y mejora la precisión del diagnóstico."
            },
            {
              title: "🛠️ Arquitectura Técnica",
              content: "• Backend: .NET Core con Clean Architecture\n• Frontend: React con TypeScript\n• Base de datos: MongoDB para flexibilidad\n• Patrones: DDD, SOLID, Repository Pattern\n• Testing: Unit tests y Integration tests"
            },
            {
              title: "📊 Resultados Obtenidos",
              content: "• 35% reducción en tiempo de atención\n• 500+ pacientes atendidos mensualmente\n• 98% de precisión en diagnósticos\n• Eliminación completa de formularios en papel"
            },
            {
              title: "🎓 Lecciones Aprendidas",
              content: "La implementación de Clean Architecture facilitó el mantenimiento y escalabilidad del sistema. El uso de MongoDB permitió flexibilidad en el esquema de datos, mientras que React proporcionó una experiencia de usuario moderna e intuitiva."
            }
          ]
        };
      case "Cartografía del Pensamiento Latinoamericano":
        return {
          title: "Caso de Estudio: Cartografía del Pensamiento Latinoamericano",
          sections: [
            {
              title: "🎯 Contexto del Problema",
              content: "La falta de acceso a información estructurada sobre los pensadores latinoamericanos dificultaba la comprensión de las raíces pedagógicas de América Latina. Los estudiantes y educadores no tenían una herramienta visual e interactiva para explorar este conocimiento."
            },
            {
              title: "💡 Solución Implementada",
              content: "Creamos una plataforma web interactiva que mapea visualmente el pensamiento educativo latinoamericano, conectando autores, países y conceptos de manera intuitiva y educativa. El sistema incluye 13 pensadores fundamentales de 8 países."
            },
            {
              title: "🛠️ Tecnologías Utilizadas",
              content: "• Frontend: React 18 con TypeScript\n• Animaciones: Framer Motion\n• Estilos: Tailwind CSS\n• Iconos: Lucide React\n• Build Tool: Vite\n• Arquitectura: Componentes modulares"
            },
            {
              title: "📊 Características Principales",
              content: "• Mapa interactivo SVG de Latinoamérica\n• Panel de autores con información detallada\n• Sistema de búsqueda en tiempo real\n• Videos educativos integrados\n• Modo oscuro/claro\n• Diseño completamente responsivo"
            },
            {
              title: "🎓 Impacto Educativo",
              content: "La plataforma facilita el acceso al conocimiento de los pensadores que han moldeado la educación en la región, conectando el pasado pedagógico latinoamericano con las necesidades educativas actuales."
            }
          ]
        };
      default:
        return {
          title: "Caso de Estudio",
          sections: [
            {
              title: "Información",
              content: "Caso de estudio en desarrollo..."
            }
          ]
        };
    }
  };

  const caseStudy = getCaseStudyContent(project.title);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {caseStudy.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-xl font-semibold text-cyan-400">{section.title}</h4>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleImageClick = (image: ProjectImage) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones reales que han transformado negocios y mejorado procesos
          </p>
        </div>

        <div className="grid gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onCaseStudyClick={handleCaseStudyClick}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        <MoreProjectsCTA />
      </div>

      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />
      <ImageModal 
        isOpen={isImageModalOpen} 
        onClose={closeImageModal} 
        image={selectedImage} 
      />
    </section>
  );
};

export default Projects;