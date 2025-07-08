import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Calendar, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import emailjs from 'emailjs-com'; // Importar EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState<string|null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResultMsg(null);
    try {
      // Reemplaza estos valores con los tuyos de EmailJS
      const serviceID = 'service_4wo4sa8';
      const templateID = 'template_9ru9m9f';
      const publicKey = '-mlQEqZ7KLxcMPNo1';
      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, publicKey);
      setResultMsg('¡Mensaje enviado correctamente! Te responderé pronto.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResultMsg('Ocurrió un error al enviar el mensaje. Intenta de nuevo o usa otro medio de contacto.');
    } finally {
      setSending(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola Francisco, vi tu portafolio y me interesa conocer más sobre tus servicios de desarrollo. Mi nombre es ${formData.name || '[Tu nombre]'}`);
    window.open(`https://wa.me/5613237943?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-[1.2] pb-2">
            ¿Hablamos?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance, consultorías técnicas o posiciones full-time. 
            <span className="text-emerald-400 font-semibold"> ¡Contactemos!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:leonardomtz000426@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      leonardomtz000426@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+525613237943"
                  className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Teléfono</p>
                    <p className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                      +52 56 1323 7943
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Ubicación</p>
                    <p className="text-white font-semibold">Ciudad de México, México</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Acciones Rápidas</h4>
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-3 bg-green-600 hover:bg-green-500 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Mensaje Directo WhatsApp
                </button>
                {/* Botón de Calendly eliminado */}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Redes Profesionales</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS" 
                  className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-emerald-400/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold">Disponible para nuevos proyectos</span>
              </div>
              <p className="text-slate-300 text-sm">
                Respondo mensajes en menos de 24 horas. Tiempo de inicio de proyecto: 1-2 semanas.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto, consulta o propuesta..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-60"
                disabled={sending}
              >
                <Send className="w-5 h-5" />
                {sending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
            {resultMsg && (
              <div className="mt-4 text-center">
                <p className="text-sm text-emerald-400">{resultMsg}</p>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                O si prefieres, contáctame directamente por 
                <button 
                  onClick={handleWhatsApp}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold ml-1 underline"
                >
                  WhatsApp
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¿Tienes una idea? Hablemos y la convertimos en software útil.
            </h3>
            <p className="text-slate-300 mb-6">
              Cada gran proyecto comienza con una conversación. 
              <span className="text-cyan-400 font-semibold"> ¿Cuál será la tuya?</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2025 Francisco Leonardo Martínez Nicolás. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm">
            Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;