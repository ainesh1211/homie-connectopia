
import { useState, useEffect } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  
  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with blur effect on load */}
      <div className="absolute inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-all duration-2000",
            isLoaded ? "blur-0 scale-100" : "blur-2xl scale-110"
          )}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span 
            className={cn(
              "inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide uppercase rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Innovative Healthcare Solutions
          </span>
          
          <h1 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight transition-all duration-700 delay-150",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Advancing Health <br /> Through Innovation
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            At Inaaya Healthtech, we're committed to developing pharmaceutical solutions 
            that improve quality of life and address critical healthcare challenges.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-450",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button 
              className="px-8 py-6 font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-all duration-300 hover-lift"
            >
              Our Products
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-md transition-all duration-300 hover-lift"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('featured')}
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white flex flex-col items-center transition-all duration-700 delay-600",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDownIcon className="animate-bounce w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
