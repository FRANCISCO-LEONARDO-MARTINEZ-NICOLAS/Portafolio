import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
  delay?: number;
  className?: string;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = "",
  width = "100%" 
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = () => {
    switch (direction) {
      case 'left': return { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } };
      case 'up': return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } };
      case 'none': return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default: return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: delay, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
