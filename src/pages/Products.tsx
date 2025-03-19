
import { useState, useEffect } from 'react';
import { productsData } from '@/data/productsData';
import ProductsHeader from '@/components/product/ProductsHeader';
import ProductSearch from '@/components/product/ProductSearch';
import CategoryFilters from '@/components/product/CategoryFilters';
import ProductsGrid from '@/components/product/ProductsGrid';
import ContactCTA from '@/components/product/ContactCTA';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
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
          <ProductsHeader />
          <ProductSearch 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </section>
      
      <CategoryFilters 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <ProductsGrid products={filteredProducts} />
      
      <ContactCTA />
    </main>
  );
};

export default Products;
