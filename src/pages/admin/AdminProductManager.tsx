
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Check, X, Upload, RefreshCw, Search, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Sample product data
import { productsData, Product } from '@/data/productsData';

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

interface ProductForm extends Product {
  tempImage?: string;
}

const AdminProductManager = ({ logout }: AdminProductManagerProps) => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductImage | null>(null);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [newProduct, setNewProduct] = useState<ProductForm>({
    id: products.length + 1,
    name: "",
    category: "Antibiotics",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=New+Product",
    description: "",
    volume: "",
    packing: "",
    mrp: ""
  });
  const [editMode, setEditMode] = useState(false);
  
  const categories = [
    "All",
    "Antibiotics",
    "Ortho",
    "Gastro",
    "Antihistamines, Cough & Cold",
    "Gynaecology",
    "Soft Gel",
    "Ayurvedic Products",
    "Eye & Ent Drops",
    "Dental",
    "Dermatology",
    "Multi Vitamins",
    "Cardiac",
    "Pediatrics",
    "Injections"
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || product.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });
  
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
  
  const handleNewProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create a temporary URL for preview
    const tempUrl = URL.createObjectURL(file);
    
    setNewProduct({
      ...newProduct,
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
      setIsImageDialogOpen(false);
    }, 1500);
  };
  
  const handleSaveProduct = () => {
    setIsLoading(true);
    
    const productData = {
      ...newProduct,
      id: editMode ? newProduct.id : products.length + 1,
      image: newProduct.tempImage || newProduct.image
    };
    
    setTimeout(() => {
      if (editMode) {
        // Update existing product
        setProducts(prevProducts => 
          prevProducts.map(product => 
            product.id === productData.id ? productData : product
          )
        );
        
        toast({
          title: "Product updated",
          description: `${productData.name} has been updated`,
        });
      } else {
        // Add new product
        setProducts(prevProducts => [...prevProducts, productData]);
        
        toast({
          title: "Product added",
          description: `${productData.name} has been added to your catalog`,
        });
      }
      
      setIsLoading(false);
      setIsProductDialogOpen(false);
      
      // Reset form
      setNewProduct({
        id: products.length + 2,
        name: "",
        category: "Antibiotics",
        image: "https://placehold.co/400x400/e2e8f0/64748b?text=New+Product",
        description: "",
        volume: "",
        packing: "",
        mrp: ""
      });
      
      setEditMode(false);
    }, 1500);
  };
  
  const handleDeleteProduct = () => {
    if (!selectedProduct) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      // Remove the product from the state
      setProducts(prevProducts => 
        prevProducts.filter(product => product.id !== selectedProduct.id)
      );
      
      toast({
        title: "Product deleted",
        description: `${selectedProduct.name} has been removed from your catalog`,
      });
      
      setIsLoading(false);
      setIsDeleteDialogOpen(false);
    }, 1500);
  };
  
  const handleEditProduct = (product: Product) => {
    setNewProduct({
      ...product,
      tempImage: undefined
    });
    setEditMode(true);
    setIsProductDialogOpen(true);
  };
  
  const handleDeleteConfirmation = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };
  
  const openImageDialog = (product: ProductImage) => {
    setSelectedProduct(product);
    setIsImageDialogOpen(true);
  };
  
  const openNewProductDialog = () => {
    setEditMode(false);
    setNewProduct({
      id: products.length + 1,
      name: "",
      category: "Antibiotics",
      image: "https://placehold.co/400x400/e2e8f0/64748b?text=New+Product",
      description: "",
      volume: "",
      packing: "",
      mrp: ""
    });
    setIsProductDialogOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar logout={logout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Product Management</h1>
          <p className="text-muted-foreground mt-2">
            Add, update, or remove products from your catalog
          </p>
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative max-w-xl flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button onClick={openNewProductDialog} className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add New Product
          </Button>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="flex flex-wrap h-auto p-1">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.slice(1).map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
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
                <p className="text-xs text-muted-foreground mb-3">{product.category}</p>
                
                <div className="flex items-center space-x-2 mt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1" 
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="h-3.5 w-3.5 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="flex-1" 
                    onClick={() => handleDeleteConfirmation(product)}
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-1" />
                    Delete
                  </Button>
                </div>
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
      
      {/* Image Dialog */}
      <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
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
      
      {/* Product Dialog */}
      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
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
                    onChange={handleNewProductImageChange}
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
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    placeholder="Enter product name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newProduct.category}
                    onValueChange={(value) => setNewProduct({...newProduct, category: value})}
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
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
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
                  onChange={(e) => setNewProduct({...newProduct, volume: e.target.value})}
                  placeholder="e.g., 200ml"
                />
              </div>
              
              <div>
                <Label htmlFor="packing">Packing</Label>
                <Input 
                  id="packing"
                  value={newProduct.packing || ""}
                  onChange={(e) => setNewProduct({...newProduct, packing: e.target.value})}
                  placeholder="e.g., 10x10"
                />
              </div>
              
              <div>
                <Label htmlFor="mrp">MRP (₹)</Label>
                <Input 
                  id="mrp"
                  value={newProduct.mrp || ""}
                  onChange={(e) => setNewProduct({...newProduct, mrp: e.target.value})}
                  placeholder="e.g., 150"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsProductDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveProduct} disabled={!newProduct.name || isLoading}>
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
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{selectedProduct?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteProduct}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Product
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProductManager;
