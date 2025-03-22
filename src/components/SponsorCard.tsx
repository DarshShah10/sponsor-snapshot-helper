
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
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

  const delay = isMobile ? 0.05 + (index * 0.05) : 0.1 + (index * 0.1);

  return (
    <div className="flex flex-col items-center" ref={cardRef}>
      <div 
        className={cn(
          "sponsor-card w-full aspect-[16/9] mb-4 relative overflow-hidden rounded-xl border border-white/10",
          className
        )}
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sponsor-purple/5 to-transparent z-0"></div>
        <img 
          src={imageUrl} 
          alt={`${title} logo`} 
          className="w-full h-full object-contain p-6 relative z-10"
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
