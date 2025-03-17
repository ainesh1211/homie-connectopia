import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import ServiceCard from '@/components/ServiceCard';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Home, Paintbrush, Users, Key, Settings, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Find your dream home with our extensive portfolio of properties in prime locations.',
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services tailored to your style.',
    },
    {
      icon: Users,
      title: 'Home Staging',
      description: 'Present your property in the best light with our professional home staging.',
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Comprehensive property management services for homeowners and investors.',
    },
    {
      icon: Settings,
      title: 'Renovation',
      description: 'Upgrade your space with our high-quality renovation and remodeling services.',
    },
    {
      icon: RefreshCw,
      title: 'Home Styling',
      description: 'Refresh your space with our styling expertise to create a cohesive and inviting atmosphere.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Properties */}
      <FeaturedSection />
      
      {/* Services Section */}
      <section className="py-20 px-4 md:py-32 bg-secondary/50">
        <div className="container mx-auto">
          <div 
            // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
            ref={ref}
            className={cn(
              "max-w-xl mx-auto text-center mb-16 transition-all duration-700",
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Exceptional Services for Your Home
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a wide range of professional services to help you find, design, 
              and maintain your perfect living space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-16 text-center transition-all duration-700",
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            <Link 
              to="/services"
              className="px-8 py-3 font-medium transition-all duration-300 border border-primary rounded-md hover:bg-primary hover:text-white hover-lift"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 px-4 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="p-8 rounded-xl glass-morphism hover-lift"
              >
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "Working with Homes N Homies was an absolute pleasure. They truly understood our vision and brought it to life in ways we couldn't have imagined. The attention to detail and professionalism was outstanding."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jane Cooper</h4>
                    <p className="text-sm text-muted-foreground">Happy Homeowner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:py-32 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let us help you discover the perfect space that matches your lifestyle and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-3 font-medium bg-white text-primary rounded-md transition-all duration-300 hover:bg-white/90 hover-lift"
              >
                Get Started
              </Link>
              <Link 
                to="/about"
                className="px-8 py-3 font-medium bg-white/10 text-white rounded-md transition-all duration-300 hover:bg-white/20 hover-lift"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
