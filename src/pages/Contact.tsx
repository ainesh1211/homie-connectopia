
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Plot No 229, Industrial Area Phase 1, Panchkula, Haryana',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+919297887888, +917009178460, +918054188881',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'gm@inaayahealthtech.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM',
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div 
            // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
            ref={ref} 
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us with any questions, inquiries, or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className={cn(
                "transition-all duration-700 delay-150",
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}>
                <div className="glass-morphism rounded-xl p-8 md:p-10 shadow-sm">
                  <div className="flex items-center mb-8">
                    <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  </div>
                  
                  <ContactForm />
                </div>
              </div>
              
              {/* Contact Information */}
              <div className={cn(
                "lg:mt-12 transition-all duration-700 delay-300",
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={item.title}
                      className={cn(
                        "flex transition-all duration-700",
                        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                    >
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Map or Image */}
                <div 
                  className={cn(
                    "w-full h-[300px] rounded-xl overflow-hidden bg-secondary transition-all duration-700",
                    isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `900ms` }}
                >
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577017040065-650ee4d43339')` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What areas do you serve?",
                  answer: "We primarily serve the greater Los Angeles area, including Beverly Hills, Malibu, Santa Monica, and surrounding neighborhoods."
                },
                {
                  question: "How much does an initial consultation cost?",
                  answer: "Our initial consultations are complimentary. During this meeting, we'll discuss your needs, preferences, and budget to determine how we can best serve you."
                },
                {
                  question: "How long does a typical interior design project take?",
                  answer: "Project timelines vary depending on scope and complexity. A room refresh might take 4-6 weeks, while a complete home redesign could take 3-6 months or more."
                },
                {
                  question: "Do you offer virtual design services?",
                  answer: "Yes, we offer virtual design consultations and services for clients who prefer remote collaboration or are located outside our service area."
                },
                {
                  question: "Can you work with my existing furniture and decor?",
                  answer: "Absolutely! We're happy to incorporate your existing pieces into a new design. We'll help you determine what to keep, what to repurpose, and what new items might enhance your space."
                },
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="glass-morphism rounded-xl overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
