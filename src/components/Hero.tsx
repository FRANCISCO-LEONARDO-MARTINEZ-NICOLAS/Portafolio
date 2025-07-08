import React from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Francisco, vi tu portafolio y me interesa conocer más sobre tus servicios de desarrollo.");
    window.open(`https://wa.me/5613237943?text=${message}`, '_blank');
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download
    alert('CV descargando... (implementar enlace real al PDF)');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23059669%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src="/images/Leonardo.jpg"
                alt="Foto de perfil de Francisco Leonardo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-emerald-400 bg-clip-text text-transparent">
          Francisco Leonardo
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
        Full-Stack Developer en formación | Futuro Arquitecto de Software | Apasionado por la tecnología y la innovación
        </h2>

        {/* Hero Statement */}
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          <span className="text-cyan-400 font-semibold">Construyo soluciones digitales que escalan, con código limpio y pasión por el detalle.</span> 
          <br />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects"
            className="group bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            Ver Proyectos Clave
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/Leonardo_Martinez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            download
          >
            <Download className="w-5 h-5" />
            Descargar CV
          </a>
          
          <button
            onClick={handleWhatsApp}
            className="group border-2 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar Ahora
          </button>
        </div>

        {/* Location & Contact Info */}
        <div className="mt-16 text-slate-500 text-sm">
          <p>📍 Ciudad de México | 📧 leonardomtz000426@gmail.com | 📱 +52 56 1323 7943</p>
        </div>

        {/* Scroll Indicator mejor acomodado */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <div className="text-slate-400 text-sm animate-pulse">
            Scroll para explorar
          </div>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;