import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Veronica Gabriela Lara Martinez",
      role: "Docente de NoSQL",
      company: "UPIICSA - IPN",
      image: "👨‍🏫",
      rating: 5,
      text: "Leonardo ha demostrado ser un estudiante con mucha iniciativa y habilidad para aplicar conceptos complejos. En clase siempre participó con ideas claras, y en el proyecto final utilizó CouchBase de forma muy sólida, integrando colecciones con estructuras bien pensadas.",
      project: "Proyecto Final de Bases de Datos NoSQL"
    },
    {
      name: "José Cisneros",
      role: "Líder de equipo",
      company: "UPIICSA - Desarrollo Web",
      image: "👨‍💻",
      rating: 5,
      text: "Trabajé con Leonardo en el desarrollo de un sistema con React y Angular. Siempre estuvo dispuesto a aportar ideas claras, resolver problemas técnicos y ayudar a los demás. Tiene una gran capacidad para adaptarse y entender cómo conectar cada parte del sistema.",
      project: "Sistema de Gestión Frontend con React y Angular"
    },
    {
      name: "Rogelio García",
      role: "Compañero de equipo",
      company: "UPIICSA - Proyecto NoSQL",
      image: "👨‍🎓",
      rating: 5,
      text: "Leonardo fue el líder de nuestro proyecto y me ayudó muchísimo a entender cómo conectar el backend con una base de datos NoSQL. Me explicó conceptos como APIs, Swagger y conexiones entre servicios. Es muy paciente para enseñar y domina bien la estructura de los proyectos.",
      project: "Sistema Banco de Datos NoSQL"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Testimonios reales de profesores y compañeros que han trabajado conmigo
          </h2>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="absolute top-6 left-6 text-cyan-400 opacity-20">
              <Quote className="w-12 h-12" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Avatar & Info */}
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center text-3xl mb-4">
                  {testimonials[currentIndex].image}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-slate-400 text-sm mb-3">
                  {testimonials[currentIndex].company}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="text-xs text-emerald-400 bg-emerald-400/20 px-3 py-1 rounded-full">
                  {testimonials[currentIndex].project}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-cyan-400 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-cyan-400 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-slate-400 text-sm">Proyectos Completados</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-slate-400 text-sm">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-slate-400 text-sm">Años Experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">24h</div>
            <div className="text-slate-400 text-sm">Tiempo Respuesta</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;