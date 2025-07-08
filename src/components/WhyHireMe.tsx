import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Target, Heart } from 'lucide-react';

const WhyHireMe = () => {
  const advantages = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Desarrollo profesional basado en arquitecturas reales",
      description: "No solo escribo código, diseño soluciones escalables pensando en el futuro del proyecto.",
      color: "cyan"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Adaptabilidad extrema a múltiples tecnologías",
      description: "Domino el stack completo y aprendo nuevas tecnologías según las necesidades del proyecto.",
      color: "emerald"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Documentación clara y comunicación efectiva",
      description: "Cada línea de código está documentada, facilitando el mantenimiento y la colaboración.",
      color: "purple"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trabajo autónomo con mentalidad colaborativa",
      description: "Puedo liderar proyectos independientemente o integrarme perfectamente a equipos existentes.",
      color: "orange"
    }
  ];

  const colorClasses = {
    cyan: {
      icon: "from-cyan-400 to-cyan-500",
      title: "text-cyan-400",
      border: "border-cyan-400/30"
    },
    emerald: {
      icon: "from-emerald-400 to-emerald-500",
      title: "text-emerald-400",
      border: "border-emerald-400/30"
    },
    purple: {
      icon: "from-purple-400 to-purple-500",
      title: "text-purple-400",
      border: "border-purple-400/30"
    },
    orange: {
      icon: "from-orange-400 to-orange-500",
      title: "text-orange-400",
      border: "border-orange-400/30"
    }
  };

  return (
    <section id="why-hire-me" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-[1.2] pb-2">
            ¿Por qué trabajar conmigo?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ventajas competitivas que aporto a cada proyecto y equipo de trabajo
          </p>
        </div>

        {/* Main Advantages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = colorClasses[advantage.color as keyof typeof colorClasses];
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`relative bg-slate-800 border border-slate-700 hover:${colors.border} rounded-xl p-6 h-full transition-all duration-300 transform group-hover:scale-105`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors.icon} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-3 ${colors.title}`}>
                        {advantage.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits List */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Beneficios adicionales de trabajar conmigo
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Aporte de valor real, más allá del código funcional",
              "Testing automatizado y control de calidad integrado",
              "Arquitecturas pensadas para escalar sin refactoring masivo",
              "Disponibilidad para proyectos freelance o roles full-time",
              "Experiencia en múltiples industrias (salud, fintech, e-commerce)",
              "Mentalidad DevOps: desde desarrollo hasta deployment"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Philosophy */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-cyan-400/30 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Mi Filosofía de Trabajo</h3>
            <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed italic mb-6">
              "No construyo solo por construir. Cada proyecto es una oportunidad de crear algo que 
              <span className="text-cyan-400 font-semibold"> realmente importe</span>, 
              que <span className="text-emerald-400 font-semibold">solucione problemas reales</span> 
              y que <span className="text-purple-400 font-semibold">perdure en el tiempo</span>."
            </blockquote>
            <cite className="text-slate-400">— Francisco Leonardo Martínez</cite>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-emerald-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¿Listo para el siguiente nivel?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Estoy disponible para proyectos freelance, consultorías técnicas o posiciones full-time. 
              <br />
              <span className="text-emerald-400 font-semibold leading-[1.2] pb-1 inline-block">
                ¿Hablamos? <br />
                <br />
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              >
                Iniciar Conversación
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;