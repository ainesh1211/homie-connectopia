
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/lib/animations";

const FranchiseHero = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-transparent">
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
            Business Opportunity
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Inaaya Healthtech Franchise
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join our growing network of successful pharmacies and healthcare centers across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;
