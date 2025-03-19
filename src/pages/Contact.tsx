
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
              {/* Contact Form - Fixed the visibility issue */}
              <div>
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
                "lg:mt-12",
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={item.title}
                      className={cn(
                        "flex",
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
                <div className="w-full h-[300px] rounded-xl overflow-hidden bg-secondary">
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
                  question: "What is Inaaya Healthtech Pvt. Ltd.?",
                  answer: "Inaaya Healthtech Pvt. Ltd. is a prominent PCD Pharma company in India, dedicated to providing high-quality pharmaceutical products, including the latest DCGI-approved molecules."
                },
                {
                  question: "What types of products does Inaaya Healthtech offer?",
                  answer: "We offer a comprehensive range of pharmaceutical products, including antibiotics, gastrointestinal medicines, multivitamins, ayurvedic products, dermatological care, and more. All our liquid products and protein powders are 100% sugar-free."
                },
                {
                  question: "How can I apply for a franchise with Inaaya Healthtech?",
                  answer: "We offer exclusive monopoly rights and are expanding our business into untapped areas. To apply for a franchise, visit our 'Apply for Franchise' page and fill out the application form."
                },
                {
                  question: "What are key Features of the PCD Pharma Franchise?",
                  answer: "Exclusive Geographical Rights: Inaaya Healthtech grants franchise partners exclusive rights to market and distribute its pharmaceutical products within a designated geographical area, ensuring minimal competition and maximum market potential. Low Investment, High Returns: Partnering with Inaaya Healthtech requires a low initial investment compared to setting up an independent pharma business. Franchisees benefit from eliminating costs related to R&D, manufacturing, and product registration, making it a cost-effective opportunity with high-profit potential. Comprehensive Marketing Support: Inaaya Healthtech provides its franchise partners with full marketing support, including promotional materials, training, and strategic assistance to help maximize sales and market penetration. High-Profit Margins: The PCD Pharma Franchise model offers high-profit margins due to low operational costs and strong product demand. Access to WHO-GMP Certified Products: Franchisees gain access to a premium range of pharmaceutical products, all of which are WHO-GMP and ISO certified. Regulatory Compliance & Hassle-Free Operations: Inaaya Healthtech ensures that all manufacturing, packaging, labeling, and distribution processes adhere to strict regulatory standards. Flexible Business Model: Franchise partners can operate from a home office or a small rented space, allowing for greater flexibility in managing the business."
                },
                {
                  question: "In which regions does Inaaya Healthtech operate?",
                  answer: "We have a presence across multiple states and union territories in India, including Maharashtra, Bihar, Gujarat, Delhi, Karnataka, Uttar Pradesh, Haryana, Punjab, Tamil Nadu, Chandigarh, Himachal Pradesh, Andra Pradesh and many more."
                },
                {
                  question: "How can I contact Inaaya Healthtech for more information?",
                  answer: "You can reach us via phone at +91 9297887888 / +91 7009178460 / +91 8054188881 or visit our 'Contact Us' page."
                },
                {
                  question: "What is the mission and vision of Inaaya Healthtech?",
                  answer: "Our mission is to be recognized as a leading PCD Pharma company, delivering superior quality products while fostering long-term partnerships with suppliers and the healthcare community."
                },
                {
                  question: "What is the earning potential for the franchise model?",
                  answer: "On an investment of 11.5 lakh, franchise partner can start earning 1.5 lakh/monthly and as they scale up, there is potential to reach as much as 5 lakh/month if the franchise partner progresses and wanted to become a super stockiest for a region/state with Inaaya Healthtech."
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
