
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Pill, Microscope, TestTube, Stethoscope, BarChart3, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Pill,
      title: 'Pharmaceutical Development',
      description: 'Developing innovative and effective pharmaceutical formulations for better healthcare.',
    },
    {
      icon: Microscope,
      title: 'Clinical Research',
      description: 'Conducting groundbreaking research to advance medical knowledge and therapeutic options.',
    },
    {
      icon: TestTube,
      title: 'Quality Control',
      description: 'Ensuring the highest standards of safety and efficacy in all our pharmaceutical products.',
    },
    {
      icon: Stethoscope,
      title: 'Medical Consulting',
      description: 'Expert consulting services for healthcare providers and facilities.',
    },
    {
      icon: BarChart3,
      title: 'Healthcare Analytics',
      description: 'Data-driven insights to improve healthcare delivery and patient outcomes.',
    },
    {
      icon: HeartPulse,
      title: 'Patient-Centric Solutions',
      description: 'Developing healthcare solutions with the patient experience at the center.',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Cardiocare Plus",
      category: "Cardiovascular",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1160",
      description: "Advanced formula for cardiovascular health support"
    },
    {
      id: 2,
      name: "ImmunoBoost Pro",
      category: "Immunity",
      image: "https://images.unsplash.com/photo-1626701328626-64a3ad9eb5c9?q=80&w=1170",
      description: "Enhanced immune system support with vital nutrients"
    },
    {
      id: 3,
      name: "NeuroVital",
      category: "Neurology",
      image: "https://images.unsplash.com/photo-1631549916768-4119b4123a51?q=80&w=1179",
      description: "Specialized formula for cognitive function and brain health"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products */}
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
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-secondary/20">
              Featured Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Innovative Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our leading pharmaceutical products designed to improve health outcomes and quality of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-16 text-center transition-all duration-700 delay-300",
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Link to="/products" className="px-8 py-3 font-medium transition-all duration-300 bg-primary text-white rounded-md hover:bg-primary/90 hover-lift">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4 md:py-32 bg-secondary/10">
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
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a wide range of pharmaceutical services focused on improving health outcomes and advancing medical science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "group relative p-8 rounded-xl overflow-hidden transition-all duration-700 glass-morphism hover-lift",
                  isIntersecting 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 h-1 bg-primary/80 w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
              </div>
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
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4 md:py-32 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
                About Inaaya Healthtech
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Committed to Advancing Healthcare
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Inaaya Healthtech, we believe in the power of innovation to transform healthcare. 
                With decades of experience in pharmaceutical research and development, we're dedicated 
                to creating solutions that address critical health challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of scientists, researchers, and healthcare professionals work tirelessly to 
                develop products that meet the highest standards of safety and efficacy, all while 
                keeping the patient at the center of everything we do.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 font-medium bg-primary text-white rounded-md transition-all duration-300 hover:bg-primary/90 hover-lift"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-cddd95e52abd?q=80&w=1170" 
                  alt="Pharmaceutical lab" 
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="bg-secondary/20 p-2 rounded-full mr-3">
                    <HeartPulse className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold">Our Mission</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  To improve global health through innovative pharmaceutical solutions that enhance quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:py-32 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Discover how Inaaya Healthtech's innovative pharmaceutical solutions can help address your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-3 font-medium bg-white text-primary rounded-md transition-all duration-300 hover:bg-white/90 hover-lift"
              >
                Contact Us
              </Link>
              <Link 
                to="/products"
                className="px-8 py-3 font-medium bg-white/10 text-white rounded-md transition-all duration-300 hover:bg-white/20 hover-lift"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
