import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neonCyan focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-neonCyan text-dark hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]",
      secondary: "bg-card text-pearl border border-slate-700 hover:border-neonPurple hover:text-neonPurple",
      outline: "border-2 border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-dark",
      ghost: "text-steel hover:text-pearl hover:bg-card"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
