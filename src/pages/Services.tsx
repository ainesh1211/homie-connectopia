
import { useEffect } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Flask, PillBottle, Users, Microscope, Stethoscope, Tablets, Sparkles, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver();
  const [processRef, isProcessVisible] = useIntersectionObserver();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesList = [
    {
      icon: PillBottle,
      title: 'Antibiotics',
      description: 'Access our comprehensive range of antibiotics designed to treat various bacterial infections effectively and safely.',
      features: [
        'Broad-spectrum antibiotics',
        'Cephalosporins and penicillins',
        'Macrolide antibiotics',
        'Combination antibiotic therapies'
      ]
    },
    {
      icon: Flask,
      title: 'Pharmaceutical Research',
      description: 'Our dedicated research team works to develop innovative pharmaceutical solutions for evolving healthcare challenges.',
      features: [
        'New formulation development',
        'Drug stability studies',
        'Bioavailability enhancement',
        'Excipient compatibility studies'
      ]
    },
    {
      icon: Microscope,
      title: 'Quality Control',
      description: 'We maintain rigorous quality control processes to ensure our products meet the highest standards of safety and efficacy.',
      features: [
        'Raw material testing',
        'In-process quality checks',
        'Finished product analysis',
        'Stability monitoring'
      ]
    },
    {
      icon: Tablets,
      title: 'Contract Manufacturing',
      description: 'Our state-of-the-art manufacturing facilities provide reliable contract manufacturing services for pharmaceutical companies.',
      features: [
        'Tablet and capsule production',
        'Liquid formulations',
        'Packaging solutions',
        'Regulatory documentation'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Consulting',
      description: 'Our pharmaceutical experts offer consulting services to healthcare providers and institutions on optimal medication use.',
      features: [
        'Formulary development',
        'Medication protocols',
        'Antibiotic stewardship',
        'Pharmacovigilance support'
      ]
    },
    {
      icon: Users,
      title: 'Medical Education',
      description: 'We provide educational resources and training for healthcare professionals on the appropriate use of our pharmaceutical products.',
      features: [
        'Continuing education programs',
        'Product information sessions',
        'Clinical application guidance',
        'Research updates and publications'
      ]
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Research & Development',
      description: 'We begin with extensive research to develop pharmaceutical formulations that address specific healthcare needs.',
      icon: Sparkles
    },
    {
      number: '02',
      title: 'Testing & Quality Assurance',
      description: 'Our products undergo rigorous testing to ensure they meet all safety, efficacy, and regulatory standards.',
      icon: Search
    },
    {
      number: '03',
      title: 'Manufacturing',
      description: 'We manufacture our products in state-of-the-art facilities following strict Good Manufacturing Practices (GMP).',
      icon: PillBottle
    },
    {
      number: '04',
      title: 'Distribution & Support',
      description: 'We ensure reliable distribution of our products and provide ongoing support to healthcare providers and patients.',
      icon: Users
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div 
          // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
          ref={heroRef} 
          className="container mx-auto"
        >
          <div className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              From innovative antibiotic formulations to pharmaceutical research and development, 
              we offer a complete range of services to address healthcare challenges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div 
                key={service.title} 
                className="flex flex-col"
              >
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                  delay={index * 100}
                />
                
                <div className="mt-6 px-8 py-6 bg-secondary/30 rounded-xl flex-1">
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Features Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 text-primary">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div 
          // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
          ref={processRef} 
          className="container mx-auto"
        >
          <div className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isProcessVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure that every product we develop meets the highest 
              standards of quality, safety, and efficacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={cn(
                  "relative p-8 glass-morphism rounded-xl transition-all duration-700 hover-lift",
                  isProcessVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
                
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <div className="text-4xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your pharmaceutical needs and discover how our products and services can 
              help address your healthcare challenges.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 font-medium bg-white text-primary rounded-md transition-all duration-300 hover:bg-white/90 hover-lift"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
