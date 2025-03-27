
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductSearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeTab: string;
  onTabChange: (value: string) => void;
  onAddNewProduct: () => void;
  categories: string[];
}

const ProductSearchAndFilters = ({
  searchQuery,
  onSearchChange,
  activeTab,
  onTabChange,
  onAddNewProduct,
  categories
}: ProductSearchAndFiltersProps) => {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative max-w-xl flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button onClick={onAddNewProduct} className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add New Product
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={onTabChange} className="mb-6">
        <TabsList className="flex flex-wrap h-auto p-1">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.slice(1).map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
};

export default ProductSearchAndFilters;
