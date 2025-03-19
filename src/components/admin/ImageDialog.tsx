
import { RefreshCw, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ProductImage {
  id: number;
  name: string;
  category: string;
  image: string;
  tempImage?: string;
}

interface ImageDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProduct: ProductImage | null;
  isLoading: boolean;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveImage: () => void;
}

const ImageDialog = ({ 
  isOpen, 
  onOpenChange, 
  selectedProduct, 
  isLoading, 
  onImageChange, 
  onSaveImage 
}: ImageDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Product Image</DialogTitle>
          <DialogDescription>
            {selectedProduct?.name} - {selectedProduct?.category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
            <img 
              src={selectedProduct?.tempImage || selectedProduct?.image}
              alt={selectedProduct?.name}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/400x400/e2e8f0/64748b?text=Product+Image";
              }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <label className="cursor-pointer">
              <Input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={onImageChange}
              />
              <div className="border border-dashed border-gray-300 rounded flex items-center justify-center h-10 bg-gray-50 hover:bg-gray-100 transition-all">
                <Upload className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">Select Image</span>
              </div>
            </label>
            
            <Button
              onClick={onSaveImage}
              disabled={!selectedProduct?.tempImage || isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
