
import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import SponsorCard from '@/components/SponsorCard';

interface SponsorData {
  imageUrl: string;
  title: string;
}

interface SponsorSection {
  sectionTitle: string;
  sponsors: SponsorData[];
  cols?: number;
}

const SponsorPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sponsorSections: SponsorSection[] = [
    {
      sectionTitle: "E-SUMMIT '25",
      sponsors: [
        {
          imageUrl: "public/lovable-uploads/1a6ed487-d190-47ff-975a-4576a942a8b8.png",
          title: "TITLE SPONSOR"
        },
        {
          imageUrl: "public/lovable-uploads/5b86f3e2-c0ad-4c3b-bfa4-23450f1daa10.png",
          title: "TITLE SPONSOR"
        }
      ],
      cols: 2
    },
    {
      sectionTitle: "SPONSORS",
      sponsors: [
        {
          imageUrl: "/placeholder.svg",
          title: "CO-TITLE SPONSOR"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "ASSOCIATE TITLE SPONSOR"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "DEBT FINANCING PARTNER"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "POWERED BY PARTNER"
        }
      ],
      cols: 4
    },
    {
      sectionTitle: "EUREKA! SPONSORS",
      sponsors: [
        {
          imageUrl: "/placeholder.svg",
          title: "ASSOCIATE TITLE SPONSOR"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "POWERED BY SPONSOR"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "VENTURE STUDIO PARTNER"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "SOCIAL PARTNER"
        }
      ],
      cols: 4
    },
    {
      sectionTitle: "FNB PARTNERS",
      sponsors: [
        {
          imageUrl: "public/lovable-uploads/a85e0cd6-9e16-4e0d-9c72-f12acd9f05e0.png",
          title: "BURGER PARTNER"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "FRIES PARTNER"
        }
      ],
      cols: 2
    },
    {
      sectionTitle: "MEDIA ASSOCIATES",
      sponsors: [
        {
          imageUrl: "/placeholder.svg",
          title: "MEDIA PARTNER"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "MEDIA PARTNER"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "MEDIA PARTNER"
        },
        {
          imageUrl: "/placeholder.svg",
          title: "MEDIA PARTNER"
        }
      ],
      cols: 4
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-sponsor-black bg-hero-pattern">
      {/* Background gradient effects */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${scrollY % 100}% ${scrollY % 100}%, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`,
          transition: 'background 0.3s ease-out'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 py-20 max-w-screen-xl">
        <SectionTitle 
          title="SPONSORS" 
          className="mb-24"
        />

        {sponsorSections.map((section, sectionIndex) => (
          <div key={section.sectionTitle} className="mb-20">
            {sectionIndex > 0 && (
              <div className="section-divider" />
            )}
            
            <SectionTitle 
              title={section.sectionTitle} 
              delay={0.2}
            />
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${section.cols} gap-8 md:gap-10 lg:gap-12`}>
              {section.sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={`${section.sectionTitle}-${index}`}
                  imageUrl={sponsor.imageUrl}
                  title={sponsor.title}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorPage;
