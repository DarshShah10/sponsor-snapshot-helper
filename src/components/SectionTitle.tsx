
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  className?: string;
  delay?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  className,
  delay = 0 
}) => {
  return (
    <div 
      className={cn(
        "w-full text-center mb-16",
        className
      )}
      style={{ 
        opacity: 0,
        animation: `fade-in 0.8s ease-out forwards ${delay}s`
      }}
    >
      <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
