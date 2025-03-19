
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';

const About = () => {
  const [heroRef, isHeroIntersecting] = useIntersectionObserver();
  const [missionRef, isMissionIntersecting] = useIntersectionObserver();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                As one of the esteemed PCD Pharma companies in India, we pride ourselves on our team of highly qualified and skilled professionals dedicated to providing top-quality PCD pharma products, including the latest DCGI-approved molecules.
              </p>
              <p className="text-muted-foreground">
                Our products are formulated using premium materials sourced from trusted and reliable manufacturers with WHO, ISO, and GMP-certified units. We ensure the use of hygienic ingredients from authentic vendors with extensive expertise in the industry.
              </p>
              <p className="text-muted-foreground">
                Additionally, we offer Exclusive Monopoly Rights, expanding our business into untapped areas by appointing new franchises, distributors, sole distributors, and PCD franchise partners.
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
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Interested in Our Healthcare Solutions?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let our expert team help you find the right pharmaceutical products for your healthcare needs. Contact us at +919297887888, +917009178460, +918054188881.
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
