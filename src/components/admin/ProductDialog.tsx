
import { RefreshCw, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/data/productsData';

interface ProductForm extends Product {
  tempImage?: string;
}

interface ProductDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  newProduct: ProductForm;
  editMode: boolean;
  isLoading: boolean;
  categories: string[];
  onNewProductChange: (product: ProductForm) => void;
  onNewProductImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveProduct: () => void;
}

const ProductDialog = ({ 
  isOpen, 
  onOpenChange, 
  newProduct, 
  editMode,
  isLoading,
  categories,
  onNewProductChange,
  onNewProductImageChange,
  onSaveProduct
}: ProductDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{editMode ? "Edit Product" : "Add New Product"}</DialogTitle>
          <DialogDescription>
            {editMode ? "Update the product details in your catalog" : "Add a new product to your catalog"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                <img 
                  src={newProduct.tempImage || newProduct.image}
                  alt="Product preview"
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x400/e2e8f0/64748b?text=Product+Image";
                  }}
                />
              </div>
              <label className="cursor-pointer block mt-2">
                <Input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={onNewProductImageChange}
                />
                <div className="border border-dashed border-gray-300 rounded flex items-center justify-center h-8 bg-gray-50 hover:bg-gray-100 transition-all">
                  <Upload className="h-3 w-3 mr-1 text-gray-500" />
                  <span className="text-xs text-gray-600">Select Image</span>
                </div>
              </label>
            </div>
            
            <div className="col-span-3 space-y-4">
              <div>
                <Label htmlFor="name">Product Name</Label>
                <Input 
                  id="name"
                  value={newProduct.name}
                  onChange={(e) => onNewProductChange({...newProduct, name: e.target.value})}
                  placeholder="Enter product name"
                />
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newProduct.category}
                  onValueChange={(value) => onNewProductChange({...newProduct, category: value})}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description"
              value={newProduct.description}
              onChange={(e) => onNewProductChange({...newProduct, description: e.target.value})}
              placeholder="Enter product description"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="volume">Volume/Size</Label>
              <Input 
                id="volume"
                value={newProduct.volume || ""}
                onChange={(e) => onNewProductChange({...newProduct, volume: e.target.value})}
                placeholder="e.g., 200ml"
              />
            </div>
            
            <div>
              <Label htmlFor="packing">Packing</Label>
              <Input 
                id="packing"
                value={newProduct.packing || ""}
                onChange={(e) => onNewProductChange({...newProduct, packing: e.target.value})}
                placeholder="e.g., 10x10"
              />
            </div>
            
            <div>
              <Label htmlFor="mrp">MRP (₹)</Label>
              <Input 
                id="mrp"
                value={newProduct.mrp || ""}
                onChange={(e) => onNewProductChange({...newProduct, mrp: e.target.value})}
                placeholder="e.g., 150"
              />
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onSaveProduct} disabled={!newProduct.name || isLoading}>
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                {editMode ? "Updating..." : "Adding..."}
              </>
            ) : (
              <>
                <Check className="h-4 w-4 mr-2" />
                {editMode ? "Update Product" : "Add Product"}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
