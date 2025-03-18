
import { useState } from 'react';
import { useIntersectionObserver, useImageLoader } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const isImageLoaded = useImageLoader(product.image);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <div
      // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
      ref={ref}
      className={cn(
        "group h-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-700",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isHovered ? "shadow-xl scale-[1.01]" : "hover:shadow-lg hover:scale-[1.005]"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <AspectRatio ratio={16/9} className="bg-muted h-64">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              className={cn(
                "h-full w-full object-cover transition-all duration-700",
                isImageLoaded ? "blur-0 scale-100" : "blur-md scale-110",
                isHovered ? "scale-110" : "group-hover:scale-105"
              )}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full bg-muted">
              <span className="text-muted-foreground">{product.name}</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
        </AspectRatio>
      </div>
      
      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">{product.name}</h3>
        
        <p className="text-muted-foreground mb-6">
          {product.description}
        </p>
        
        <button className="flex items-center text-sm font-medium text-primary group-hover:underline transition-all duration-300">
          Learn More
          <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
