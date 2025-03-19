
import { useEffect } from 'react';
import FranchiseHero from '@/components/franchise/FranchiseHero';
import FranchiseTabs from '@/components/franchise/FranchiseTabs';

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* Hero Section */}
      <FranchiseHero />
      
      {/* Franchise Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <FranchiseTabs />
        </div>
      </section>
    </main>
  );
};

export default Franchise;
