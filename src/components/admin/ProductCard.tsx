
import { useState } from 'react';
import { Image, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/data/productsData';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  onImageChange: (product: Product) => void;
}

const ProductCard = ({ product, onEdit, onDelete, onImageChange }: ProductCardProps) => {
  return (
    <Card key={product.id} className="overflow-hidden">
      <div className="aspect-square relative bg-gray-100 overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/400x400/e2e8f0/64748b?text=Product+Image";
          }}
        />
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute bottom-2 right-2"
          onClick={() => onImageChange(product)}
        >
          <Image className="h-4 w-4 mr-1" />
          Change
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium mb-1 truncate">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{product.category}</p>
        
        <div className="flex items-center space-x-2 mt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1" 
            onClick={() => onEdit(product)}
          >
            <Edit className="h-3.5 w-3.5 mr-1" />
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            className="flex-1" 
            onClick={() => onDelete(product)}
          >
            <Trash2 className="h-3.5 w-3.5 mr-1" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
