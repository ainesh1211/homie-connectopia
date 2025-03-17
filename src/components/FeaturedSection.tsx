
import { useState } from 'react';
import { useIntersectionObserver, useImageLoader } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  image: string;
  location: string;
  features: string[];
}

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    type: "Villa",
    price: "$1,250,000",
    image: "https://images.unsplash.com/photo-1619115722548-601beb2b1b24",
    location: "Beverly Hills, CA",
    features: ["4 Beds", "3 Baths", "2,400 sqft", "2 Garages"]
  },
  {
    id: 2,
    title: "Downtown Apartment",
    type: "Apartment",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    location: "Downtown Miami, FL",
    features: ["2 Beds", "2 Baths", "1,200 sqft", "1 Parking"]
  },
  {
    id: 3,
    title: "Coastal Beach House",
    type: "House",
    price: "$875,000",
    image: "https://images.unsplash.com/photo-1613553508048-2813d787e15c",
    location: "Malibu, CA",
    features: ["3 Beds", "2 Baths", "1,800 sqft", "Ocean View"]
  }
];

const PropertyCard = ({ property }: { property: Property }) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const isImageLoaded = useImageLoader(property.image);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
      ref={ref}
      className={cn(
        "group h-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-700",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isHovered ? "shadow-xl scale-[1.01]" : "hover:shadow-lg hover:scale-[1.005]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Property Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className={cn(
            "h-full w-full bg-cover bg-center transition-all duration-700",
            isImageLoaded ? "blur-0 scale-100" : "blur-md scale-110",
            isHovered ? "scale-110" : "group-hover:scale-105"
          )}
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
      </div>
      
      {/* Property Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{property.title}</h3>
          <span className="text-lg font-bold text-primary">{property.price}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <button className="w-full py-3 text-sm font-medium transition-all duration-300 border border-primary/20 rounded-md hover:bg-primary hover:text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <section id="featured" className="py-20 px-4 md:py-32">
      <div className="container mx-auto">
        <div 
          // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
          ref={ref} 
          className={cn(
            "max-w-xl mx-auto text-center mb-16 transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-secondary">
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Discover Our Premium Selection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collection of exceptional properties that combine
            elegant design with comfortable living spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-16 text-center transition-all duration-700 delay-300",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <button className="px-8 py-3 font-medium transition-all duration-300 bg-primary text-white rounded-md hover:bg-primary/90 hover-lift">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
