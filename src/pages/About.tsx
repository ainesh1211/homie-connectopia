
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
      bio: "With over 15 years of experience in real estate and interior design, Sarah founded Homes N Homies with a vision to create living spaces that reflect the unique personalities of each client."
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Michael brings his innovative approach and creative eye to every project, ensuring that each space is both functional and aesthetically pleasing."
    },
    {
      name: "Emma Rodriguez",
      role: "Real Estate Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Emma's expertise in the real estate market helps clients find their perfect property in the ideal location, considering both current needs and future growth."
    },
    {
      name: "David Williams",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "David ensures that every project runs smoothly from concept to completion, maintaining timelines and exceeding client expectations."
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
              Creating Spaces That Inspire
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              At Homes N Homies, we believe that a well-designed home is the foundation for a well-lived life. 
              Our passion is creating spaces that reflect your unique personality and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={cn(
              "transition-all duration-700 delay-300",
              isHeroIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" 
                  alt="Interior design living room" 
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
                Founded in 2015, Homes N Homies started with a simple mission: to create beautiful, functional 
                spaces that enhance our clients' everyday lives. What began as a small operation has grown into 
                a full-service design and real estate company.
              </p>
              <p className="text-muted-foreground">
                Our team of experienced designers, real estate experts, and renovation specialists work 
                collaboratively to deliver exceptional results. We pride ourselves on our attention to detail, 
                commitment to quality, and personalized approach to each project.
              </p>
              <p className="text-muted-foreground">
                Whether you're looking for your dream home, want to renovate your current space, or need 
                professional staging to sell your property, we're here to guide you through every step of the process.
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
                title: "Design Excellence",
                description: "We believe in creating spaces that are not only beautiful but also functional and tailored to each client's unique needs and lifestyle."
              },
              {
                title: "Client-Centered Approach",
                description: "Our clients are at the heart of everything we do. We listen carefully to your vision and work collaboratively to bring it to life."
              },
              {
                title: "Integrity & Transparency",
                description: "We operate with honesty and transparency throughout every project, ensuring clear communication and trustworthy service."
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
              Meet the Experts Behind Homes N Homies
            </h2>
            <p className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300",
              isTeamIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Our talented team brings together expertise in design, real estate, and project management 
              to deliver exceptional results for our clients.
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let our expert team help you create the home you've always dreamed of.
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
