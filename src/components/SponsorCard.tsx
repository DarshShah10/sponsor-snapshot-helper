
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SponsorCardProps {
  imageUrl: string;
  title: string;
  className?: string;
  index?: number;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ 
  imageUrl, 
  title, 
  className,
  index = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const delay = 0.1 + (index * 0.1);

  return (
    <div className="flex flex-col items-center" ref={cardRef}>
      <div 
        className={cn(
          "sponsor-card w-full aspect-[16/9] mb-3",
          className
        )}
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`
        }}
      >
        <img 
          src={imageUrl} 
          alt={`${title} logo`} 
          className="w-full h-full object-contain p-6"
          loading="lazy"
        />
      </div>
      <p 
        className="text-sponsor-purple text-center font-medium tracking-wide uppercase text-sm md:text-base"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.7s ease-out ${delay + 0.2}s, transform 0.7s ease-out ${delay + 0.2}s`
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default SponsorCard;
