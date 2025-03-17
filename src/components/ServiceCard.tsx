
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div
      // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
      ref={ref}
      className={cn(
        "group relative p-8 rounded-xl overflow-hidden transition-all duration-700 glass-morphism hover-lift",
        isIntersecting 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
      
      <div className="absolute bottom-0 left-0 h-1 bg-primary/80 w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
    </div>
  );
};

export default ServiceCard;
