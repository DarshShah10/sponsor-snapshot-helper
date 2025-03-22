
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
  variant?: 'primary' | 'secondary';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  className,
  delay = 0,
  variant = 'primary'
}) => {
  return (
    <div 
      className={cn(
        "w-full text-center mb-10 md:mb-16",
        className
      )}
      style={{ 
        opacity: 0,
        animation: `fade-in 0.8s ease-out forwards ${delay}s`
      }}
    >
      {variant === 'primary' ? (
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="section-title">{title}</span>
        </h1>
      ) : (
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          {title}
        </h2>
      )}
      
      {subtitle && (
        <p 
          className="text-sponsor-light/70 mt-4 max-w-xl mx-auto text-base md:text-lg"
          style={{ 
            opacity: 0,
            animation: `fade-in 0.8s ease-out forwards ${delay + 0.3}s`
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
