
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Search, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const productsData: Product[] = [
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
  },
  {
    id: 4,
    name: "GlucoBalance",
    category: "Diabetes",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1169",
    description: "Supports healthy blood glucose levels and metabolic function"
  },
  {
    id: 5,
    name: "ArthroFlex",
    category: "Orthopedic",
    image: "https://images.unsplash.com/photo-1617881770125-6fb0d039ecad?q=80&w=1587",
    description: "Joint support formula for improved mobility and flexibility"
  },
  {
    id: 6,
    name: "RespiClear",
    category: "Respiratory",
    image: "https://images.unsplash.com/photo-1631549917756-23a40a2f5b91?q=80&w=1170",
    description: "Respiratory support for clear breathing and lung health"
  },
  {
    id: 7,
    name: "DermaRenew",
    category: "Dermatology",
    image: "https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?q=80&w=1170",
    description: "Advanced skincare formula for rejuvenation and repair"
  },
  {
    id: 8,
    name: "OncoCare",
    category: "Oncology",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1170",
    description: "Supportive care formula for oncology patients"
  },
  {
    id: 9,
    name: "DigestEase",
    category: "Gastroenterology",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1170",
    description: "Digestive support for optimal gastrointestinal function"
  }
];

const categories = [
  "All",
  "Cardiovascular",
  "Immunity",
  "Neurology",
  "Diabetes",
  "Orthopedic",
  "Respiratory",
  "Dermatology",
  "Oncology",
  "Gastroenterology"
];

const Products = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Filter products based on search term and category
    const filtered = productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Our Solutions
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Pharmaceutical Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover our innovative pharmaceutical solutions designed to address various healthcare needs and improve quality of life.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                </div>
                <select
                  className="pl-10 pr-8 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none transition"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
                  ref={index === 0 ? ref : null}
                  className={cn(
                    "group h-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-700 hover:shadow-lg hover:scale-[1.01]",
                    isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">{product.name}</h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>
                    
                    <button className="w-full py-3 text-sm font-medium transition-all duration-300 border border-primary/20 rounded-md hover:bg-primary hover:text-white">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
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
    </main>
  );
};

export default Products;
