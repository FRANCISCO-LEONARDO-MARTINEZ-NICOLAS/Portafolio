import React from 'react';
import { Hammer, Code, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Mi Historia
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Un viaje único desde el trabajo manual hasta la arquitectura de software
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Origin */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-slate-800 border border-slate-700 hover:border-amber-400/50 rounded-xl p-8 h-full transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Origen</h3>
              <p className="text-slate-300 leading-relaxed">
                "Desde joven trabajé como carpintero y en la instalación de cocinas integrales. 
                Allí aprendí a resolver problemas reales con precisión, planificación y atención al detalle. 
                La carpintería me enseñó la importancia de visualizar soluciones antes de construirlas."
              </p>
            </div>
          </div>

          {/* Transition */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl p-8 h-full transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Transición a la tecnología</h3>
              <p className="text-slate-300 leading-relaxed">
                "Hoy, estudio la Licenciatura en Ciencias de la Informática en UPIICSA - IPN, donde acabo 
                de concluir el 6º semestre y estoy por iniciar el 7º. Mi formación combina lógica, estructura y creatividad.
                He desarrollado proyectos con tecnologías como C#, bases de datos SQL y NoSQL, además de bases en Node.js, 
                React, pruebas de software, redes y Data Warehouse. Mi optativa actual es NoSQL, lo que me ha acercado al manejo 
                moderno de datos con MongoDB y otras tecnologías emergentes."
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-slate-800 border border-slate-700 hover:border-emerald-400/50 rounded-xl p-8 h-full transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Visión profesional</h3>
              <p className="text-slate-300 leading-relaxed">
                "Soy una persona proactiva, con actitud de crecimiento, capacidad de liderazgo y facilidad para socializar y adaptarme a equipos diversos.
                Busco oportunidades donde pueda aportar con responsabilidad, aprender constantemente y evolucionar hacia un rol de mayor impacto. Mi meta 
                es construir soluciones que no solo funcionen, sino que marquen la diferencia"
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-slate-200 leading-relaxed">
              "Cada línea de código es una oportunidad para construir algo que trascienda. No solo desarrollo software
              <span className="text-cyan-400 font-semibold"> construyo soluciones con propósito, lógica y visión de futuro.</span>"
            </blockquote>
            <div className="mt-6 text-right">
              <cite className="text-slate-400 text-lg">— Francisco Leonardo Martínez</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;