
import ProductCard from '@/components/admin/ProductCard';
import { Product } from '@/data/productsData';

interface ProductGridProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  onImageChange: (product: Product) => void;
}

const ProductGrid = ({ products, onEdit, onDelete, onImageChange }: ProductGridProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
            onImageChange={onImageChange}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found matching your search.</p>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
