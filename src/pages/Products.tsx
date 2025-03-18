import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Search, Filter, Pill, TestTube, Heart, Microscope, Stethoscope, PillBottle, Tablets, Droplet } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

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
    name: "Apixaban",
    category: "Cardiovascular",
    image: "https://inaayahealthtech.com/images/apixaban.jpg",
    description: "Oral anticoagulant for preventing blood clots in various conditions"
  },
  {
    id: 2,
    name: "Brivaracetam",
    category: "Neurology",
    image: "https://inaayahealthtech.com/images/briva.jpg",
    description: "Anti-epileptic medication for treating partial-onset seizures"
  },
  {
    id: 3,
    name: "Dapagliflozin",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/dapagliflozin.jpg",
    description: "SGLT2 inhibitor for improving glycemic control in type 2 diabetes"
  },
  {
    id: 4,
    name: "Empagliflozin",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/Empagliflozin.jpg",
    description: "SGLT2 inhibitor that reduces blood sugar levels in type 2 diabetes"
  },
  {
    id: 5,
    name: "Ivabradine",
    category: "Cardiovascular",
    image: "https://inaayahealthtech.com/images/Ivabradine.jpg",
    description: "Heart rate lowering agent for treating chronic heart failure"
  },
  {
    id: 6,
    name: "Tofacitinib",
    category: "Rheumatology",
    image: "https://inaayahealthtech.com/images/tofacitinib.jpg",
    description: "JAK inhibitor for treating rheumatoid arthritis and other inflammatory conditions"
  },
  {
    id: 7,
    name: "Levetiracetam",
    category: "Neurology",
    image: "https://inaayahealthtech.com/images/Levetiracetam.jpg",
    description: "Anti-epileptic drug for treating epilepsy and seizure disorders"
  },
  {
    id: 8,
    name: "Linagliptin",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/Linagliptin.jpg",
    description: "DPP-4 inhibitor that helps control blood sugar levels in type 2 diabetes"
  },
  {
    id: 9,
    name: "Nintedanib",
    category: "Respiratory",
    image: "https://inaayahealthtech.com/images/Nintedanib.jpg",
    description: "Treatment for idiopathic pulmonary fibrosis and other interstitial lung diseases"
  },
  {
    id: 10,
    name: "Pirfenidone",
    category: "Respiratory",
    image: "https://inaayahealthtech.com/images/Pirfenidone.jpg",
    description: "Anti-fibrotic medication used to treat idiopathic pulmonary fibrosis"
  },
  {
    id: 11,
    name: "Sitagliptin",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/sitagliptin.jpg",
    description: "Oral medication that helps control blood sugar levels in type 2 diabetes"
  },
  {
    id: 12,
    name: "Vildagliptin",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/Vildagliptin.jpg",
    description: "DPP-4 inhibitor for improving glycemic control in type 2 diabetes"
  },
  {
    id: 13,
    name: "Vorapaxar",
    category: "Cardiovascular",
    image: "https://inaayahealthtech.com/images/vorapaxar.jpg",
    description: "Antiplatelet medication for reducing thrombotic cardiovascular events"
  },
  {
    id: 14,
    name: "Acarbose",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/acarbose.jpg",
    description: "Alpha-glucosidase inhibitor that slows the digestion of carbohydrates"
  },
  {
    id: 15,
    name: "Teneligliptin",
    category: "Diabetes",
    image: "https://inaayahealthtech.com/images/teneleg.png",
    description: "DPP-4 inhibitor for treating type 2 diabetes mellitus"
  },
  {
    id: 16,
    name: "Dabigatran",
    category: "Cardiovascular",
    image: "https://inaayahealthtech.com/images/DABIG.jpg",
    description: "Direct thrombin inhibitor used to prevent blood clots and stroke"
  },
  {
    id: 17,
    name: "Rivaroxaban",
    category: "Cardiovascular",
    image: "https://inaayahealthtech.com/images/rivaroxaban.jpg",
    description: "Factor Xa inhibitor anticoagulant for preventing blood clots"
  },
  {
    id: 18,
    name: "Baricitinib",
    category: "Rheumatology",
    image: "https://inaayahealthtech.com/images/BARIC.jpg",
    description: "JAK inhibitor used to treat rheumatoid arthritis and other conditions"
  },
  {
    id: 19,
    name: "Edoxaban",
    category: "Cardiovascular",
    image: "https://inaayahealthtech.com/images/Edoxaban.jpg",
    description: "Factor Xa inhibitor for treatment and prevention of blood clots"
  },
  {
    id: 20,
    name: "Vortioxetine",
    category: "Neurology",
    image: "https://inaayahealthtech.com/images/vortioxetine.jpg",
    description: "Multimodal antidepressant for treating major depressive disorder"
  }
];

const categories = [
  "All",
  "Cardiovascular",
  "Neurology",
  "Diabetes",
  "Respiratory",
  "Rheumatology"
];

const categoryIcons = {
  "Cardiovascular": Heart,
  "Neurology": TestTube,
  "Diabetes": PillBottle,
  "Respiratory": Droplet,
  "Rheumatology": Stethoscope
};

const Products = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
      
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent = category !== "All" ? categoryIcons[category as keyof typeof categoryIcons] : null;
              return (
                <button
                  key={category}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-primary/10 hover:bg-primary/20"
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  delay={index * 100}
                />
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
