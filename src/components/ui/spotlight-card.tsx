"use client";

import React, { useRef, useState, type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap: Record<string, string> = {
  blue: '220, 80%, 60%',
  purple: '280, 80%, 60%',
  green: '120, 60%, 50%',
  red: '0, 80%, 60%',
  orange: '30, 90%, 55%'
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const hsl = glowColorMap[glowColor] || glowColorMap.blue;

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const inlineStyle: React.CSSProperties = {
    position: 'relative',
    touchAction: 'pan-y',
  };

  if (width !== undefined) inlineStyle.width = typeof width === 'number' ? `${width}px` : width;
  if (height !== undefined) inlineStyle.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerMove={onPointerMove}
      style={inlineStyle}
      className={`
        ${getSizeClasses()}
        ${!customSize ? 'aspect-[3/4]' : ''}
        rounded-3xl 
        relative 
        grid 
        grid-rows-[1fr_auto] 
        shadow-lg
        p-6
        gap-4 
        border border-neutral-200/50
        bg-white/60
        ${className}
      `}
    >
      {/* Simple spotlight overlay — no pseudo-elements, no blur */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, hsla(${hsl}, 0.12), transparent 60%)`,
          }}
        />
      )}
      {/* Simple border glow */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{
            boxShadow: `inset 0 0 0 1.5px hsla(${hsl}, 0.3), 0 0 30px -10px hsla(${hsl}, 0.2)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export { GlowCard };
