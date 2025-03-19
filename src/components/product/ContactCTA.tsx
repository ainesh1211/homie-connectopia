
const ContactCTA = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Looking for a Specific Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of pharmaceutical experts is ready to help you find the right products for your healthcare needs.
          </p>
          <a 
            href="/contact"
            className="px-8 py-3 font-medium bg-primary text-white rounded-md transition-all duration-300 hover:bg-primary/90 hover-lift"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
