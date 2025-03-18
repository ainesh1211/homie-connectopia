
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';

const About = () => {
  const [heroRef, isHeroIntersecting] = useIntersectionObserver();
  const [missionRef, isMissionIntersecting] = useIntersectionObserver();
  const [teamRef, isTeamIntersecting] = useIntersectionObserver();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "With over 15 years of experience in pharmaceutical development, Sarah founded Inaaya Healthtech with a vision to create innovative healthcare solutions accessible to all."
    },
    {
      name: "Michael Chen",
      role: "Lead Researcher",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Michael brings his innovative approach and pharmaceutical expertise to every project, ensuring that each product meets the highest standards of efficacy and safety."
    },
    {
      name: "Emma Rodriguez",
      role: "Quality Assurance Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Emma's expertise in pharmaceutical quality assurance helps maintain rigorous standards across all our products, ensuring compliance with international regulations."
    },
    {
      name: "David Williams",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "David ensures that every production run meets our exacting standards, maintaining timelines while ensuring product quality and consistency."
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
            "max-w-3xl mx-auto transition-all duration-700",
            isHeroIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Advancing Healthcare Through Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              At Inaaya Healthtech, we believe that quality healthcare solutions are fundamental to improving lives. 
              Our passion is developing pharmaceutical products that enhance health outcomes worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={cn(
              "transition-all duration-700 delay-300",
              isHeroIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1631549916768-4119b4123a21" 
                  alt="Pharmaceutical laboratory" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className={cn(
              "space-y-6 transition-all duration-700 delay-300",
              isHeroIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2015, Inaaya Healthtech started with a simple mission: to create effective, affordable 
                pharmaceutical solutions that enhance healthcare delivery and patient outcomes. What began as a small operation has grown into 
                a full-service pharmaceutical company.
              </p>
              <p className="text-muted-foreground">
                Our team of experienced researchers, quality assurance experts, and pharmaceutical specialists work 
                collaboratively to deliver exceptional products. We pride ourselves on our attention to detail, 
                commitment to quality, and patient-centered approach to every formulation.
              </p>
              <p className="text-muted-foreground">
                Based in Panchkula, Haryana, we serve healthcare providers and patients nationwide with our 
                growing portfolio of antibiotics and other pharmaceutical products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div 
          // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
          ref={missionRef} 
          className="container mx-auto"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 tracking-tight transition-all duration-700",
              isMissionIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Our Mission & Values
            </h2>
            <p className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-150",
              isMissionIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              We are guided by a set of core principles that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                description: "We believe in creating pharmaceutical products that meet the highest standards of quality, efficacy, and safety to improve patient outcomes."
              },
              {
                title: "Patient-Centered Approach",
                description: "Patients are at the heart of everything we do. We develop solutions with their needs in mind, focusing on accessibility and effectiveness."
              },
              {
                title: "Integrity & Transparency",
                description: "We operate with honesty and transparency throughout our processes, ensuring clear communication and trustworthy products."
              },
            ].map((value, index) => (
              <div 
                key={value.title}
                className={cn(
                  "p-8 glass-morphism rounded-xl transition-all duration-700 hover-lift",
                  isMissionIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-4">
        <div 
          // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
          ref={teamRef} 
          className="container mx-auto"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className={cn(
              "inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 transition-all duration-700",
              isTeamIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Our Team
            </span>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 tracking-tight transition-all duration-700 delay-150",
              isTeamIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Meet the Experts Behind Inaaya Healthtech
            </h2>
            <p className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300",
              isTeamIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Our talented team brings together expertise in pharmaceutical research, development, and quality assurance 
              to deliver exceptional healthcare solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={cn(
                  "rounded-xl overflow-hidden glass-morphism hover-lift transition-all duration-700",
                  isTeamIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
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
              Interested in Our Healthcare Solutions?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let our expert team help you find the right pharmaceutical products for your healthcare needs.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 font-medium bg-white text-primary rounded-md transition-all duration-300 hover:bg-white/90 hover-lift"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
