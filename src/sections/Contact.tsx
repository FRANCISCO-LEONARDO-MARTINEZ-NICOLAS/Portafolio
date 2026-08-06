import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, GitBranch } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResultMsg(null);
    try {
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
    window.open(`https://wa.me/525613237943?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} id="contacto" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto relative overflow-hidden">
      <motion.div style={{ opacity, scale, y }} className="w-full">
        
        <Reveal direction="up" className="mb-16 text-center">
          <h3 className="text-neonEmerald font-mono text-sm tracking-widest mb-3 uppercase">Contacto</h3>
          <h2 className="text-4xl md:text-6xl font-extrabold text-pearl mb-6">¿Hablamos?</h2>
          <p className="text-lg md:text-xl text-steel max-w-3xl mx-auto">
            Estoy disponible para proyectos freelance, consultorías técnicas o posiciones full-time. 
            <span className="text-neonCyan font-bold"> ¡Contactemos!</span>
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Reveal direction="left" delay={0.1}>
              <Card className="p-8 bg-dark/40 border-slate-700/50">
                <h3 className="text-2xl font-bold text-pearl mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:leonardomtz000426@gmail.com"
                    className="flex items-center gap-4 p-4 bg-dark border border-slate-700 hover:border-neonCyan/50 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-neonCyan/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-neonCyan" />
                    </div>
                    <div>
                      <p className="text-steel text-sm">Email</p>
                      <p className="text-pearl font-bold group-hover:text-neonCyan transition-colors">
                        leonardomtz000426@gmail.com
                      </p>
                    </div>
                  </a>

                  <a 
                    href="tel:+525613237943"
                    className="flex items-center gap-4 p-4 bg-dark border border-slate-700 hover:border-neonEmerald/50 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-neonEmerald/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-neonEmerald" />
                    </div>
                    <div>
                      <p className="text-steel text-sm">Teléfono</p>
                      <p className="text-pearl font-bold group-hover:text-neonEmerald transition-colors">
                        +52 56 1323 7943
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-dark border border-slate-700 rounded-xl">
                    <div className="w-12 h-12 bg-neonPurple/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-neonPurple" />
                    </div>
                    <div>
                      <p className="text-steel text-sm">Ubicación</p>
                      <p className="text-pearl font-bold">Ciudad de México, México</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <Card className="p-6 bg-dark/40 border-slate-700/50">
                  <h4 className="text-lg font-bold text-pearl mb-4">Acciones Rápidas</h4>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center gap-3 bg-dark hover:bg-neonEmerald/10 border border-neonEmerald/50 hover:border-neonEmerald px-4 py-3 rounded-xl font-bold text-neonEmerald transition-all duration-300 justify-center shadow-[0_0_15px_rgba(52,211,153,0.1)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </Card>

                {/* Social Links */}
                <Card className="p-6 bg-dark/40 border-slate-700/50">
                  <h4 className="text-lg font-bold text-pearl mb-4">Redes Profesionales</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/FRANCISCO-LEONARDO-MARTINEZ-NICOLAS" 
                      className="w-12 h-12 bg-dark border border-slate-700 hover:border-neonCyan rounded-full flex items-center justify-center text-steel hover:text-neonCyan transition-all duration-300 shadow-sm"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitBranch className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </div>
            </Reveal>

            {/* Availability Status */}
            <Reveal direction="left" delay={0.3}>
              <div className="bg-gradient-to-r from-dark to-dark/50 border border-neonEmerald/30 rounded-2xl p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-neonEmerald rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                  <span className="text-neonEmerald font-bold tracking-wide">Disponible para nuevos proyectos</span>
                </div>
                <p className="text-steel text-sm leading-relaxed">
                  Respondo mensajes en menos de 24 horas. Tiempo de inicio de proyecto: 1-2 semanas.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal direction="right" delay={0.2}>
            <Card className="p-8 md:p-10 bg-card border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-pearl mb-8">Envíame un mensaje</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-steel mb-2 uppercase tracking-wide">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/80 border border-slate-700 rounded-xl text-pearl placeholder-slate-500 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all duration-300 shadow-inner"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-steel mb-2 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/80 border border-slate-700 rounded-xl text-pearl placeholder-slate-500 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all duration-300 shadow-inner"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-steel mb-2 uppercase tracking-wide">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark/80 border border-slate-700 rounded-xl text-pearl placeholder-slate-500 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all duration-300 resize-none shadow-inner"
                      placeholder="Cuéntame sobre tu proyecto, consulta o propuesta..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neonEmerald to-neonCyan hover:brightness-110 px-6 py-4 rounded-xl font-bold text-dark transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:translate-y-0"
                    disabled={sending}
                  >
                    <Send className="w-5 h-5" />
                    {sending ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              </div>

              {resultMsg && (
                <div className="mt-6 text-center p-3 rounded-lg bg-neonEmerald/10 border border-neonEmerald/30">
                  <p className="text-sm font-bold text-neonEmerald">{resultMsg}</p>
                </div>
              )}

              <div className="mt-8 text-center pt-6 border-t border-slate-700/50">
                <p className="text-steel text-sm">
                  O si prefieres, contáctame directamente por 
                  <button 
                    onClick={handleWhatsApp}
                    className="text-neonEmerald hover:text-neonCyan font-bold ml-1 transition-colors"
                  >
                    WhatsApp
                  </button>
                </p>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Final CTA */}
        <Reveal direction="up" delay={0.4} className="mt-20">
          <Card className="p-10 max-w-3xl mx-auto text-center border-neonCyan/30 bg-gradient-to-br from-dark to-dark/50">
            <h3 className="text-3xl font-bold mb-4 text-pearl">
              ¿Tienes una idea? Hablemos y la convertimos en software útil.
            </h3>
            <p className="text-steel text-lg">
              Cada gran proyecto comienza con una conversación. 
              <span className="text-neonCyan font-bold"> ¿Cuál será la tuya?</span>
            </p>
          </Card>
        </Reveal>

      </motion.div>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-slate-700/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-steel mb-2 font-medium">
            © 2026 Francisco Leonardo Martínez Nicolás. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-sm font-mono">
            Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  );
};
