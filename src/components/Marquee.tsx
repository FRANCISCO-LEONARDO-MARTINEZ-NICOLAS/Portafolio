import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

interface MarqueeProps {
  items: React.ReactNode[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee = ({ items, direction = 'left', speed = 30, className }: MarqueeProps) => {
  // Duplicamos los items para lograr el efecto infinito sin saltos
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className={cn("overflow-hidden flex w-full relative", className)}>
      <motion.div
        className="flex whitespace-nowrap min-w-max items-center gap-8 md:gap-16 px-4"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
