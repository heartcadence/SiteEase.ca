
import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20 border border-blue-400/20",
    secondary: "bg-white text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm",
    outline: "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    accent: "bg-blue-500 text-white hover:bg-blue-400 shadow-xl shadow-blue-500/30 border border-blue-400/30"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
