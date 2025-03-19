
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Check, X, Upload, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import AdminNavbar from '@/components/admin/AdminNavbar';

// Sample product data
import { productsData } from '@/data/productsData';

interface AdminProductManagerProps {
  logout: () => void;
}

interface ProductImage {
  id: number;
  name: string;
  category: string;
  image: string;
  tempImage?: string;
}

const AdminProductManager = ({ logout }: AdminProductManagerProps) => {
  const [products, setProducts] = useState<ProductImage[]>(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedProduct) return;
    
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create a temporary URL for preview
    const tempUrl = URL.createObjectURL(file);
    
    setSelectedProduct({
      ...selectedProduct,
      tempImage: tempUrl
    });
  };
  
  const handleSaveImage = () => {
    if (!selectedProduct || !selectedProduct.tempImage) return;
    
    setIsLoading(true);
    
    // In a real application, you would upload the image to a server here
    setTimeout(() => {
      // Update the product in the state
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.id === selectedProduct.id 
            ? { ...product, image: selectedProduct.tempImage as string } 
            : product
        )
      );
      
      toast({
        title: "Image updated",
        description: `${selectedProduct.name} image has been updated`,
      });
      
      setIsLoading(false);
      setIsDialogOpen(false);
    }, 1500);
  };
  
  const handleCancelEdit = () => {
    setSelectedProduct(null);
  };
  
  const openImageDialog = (product: ProductImage) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar logout={logout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Product Images</h1>
          <p className="text-muted-foreground mt-2">
            Update product photos in your catalog
          </p>
        </div>
        
        <div className="mb-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
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
                  onClick={() => openImageDialog(product)}
                >
                  <Image className="h-4 w-4 mr-1" />
                  Change
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1 truncate">{product.name}</h3>
                <p className="text-xs text-muted-foreground">{product.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </main>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  onChange={handleImageChange}
                />
                <div className="border border-dashed border-gray-300 rounded flex items-center justify-center h-10 bg-gray-50 hover:bg-gray-100 transition-all">
                  <Upload className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Select Image</span>
                </div>
              </label>
              
              <Button
                onClick={handleSaveImage}
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
    </div>
  );
};

export default AdminProductManager;
