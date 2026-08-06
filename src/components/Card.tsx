import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button'; // Reutilizamos la utilidad cn

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn(
        "relative bg-card rounded-2xl border border-slate-700/50 p-6 md:p-8 overflow-hidden backdrop-blur-xl transition-colors",
        hoverEffect && "hover:border-neonPurple/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]",
        className
      )}
    >
      {/* Brillo sutil superior (Glassmorphism highlight) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
