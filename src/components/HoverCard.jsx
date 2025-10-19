// @ts-ignore;
import React, { useState } from 'react';

const HoverCard = ({
  children,
  className = '',
  childrenClassName = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className={`relative transition-all duration-500 ease-out transform ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'} ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-2xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`relative transition-all duration-500 ${isHovered ? 'border-cyan-400/50 shadow-2xl' : 'border-white/20 shadow-xl'} ${childrenClassName}`}>
        {children}
      </div>
    </div>;
};
export default HoverCard;