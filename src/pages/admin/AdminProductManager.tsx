
import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/admin/ProductCard';
import ImageDialog from '@/components/admin/ImageDialog';
import ProductDialog from '@/components/admin/ProductDialog';
import DeleteDialog from '@/components/admin/DeleteDialog';

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
            <ProductCard 
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteConfirmation}
              onImageChange={openImageDialog}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </main>
      
      {/* Image Dialog */}
      <ImageDialog
        isOpen={isImageDialogOpen}
        onOpenChange={setIsImageDialogOpen}
        selectedProduct={selectedProduct}
        isLoading={isLoading}
        onImageChange={handleImageChange}
        onSaveImage={handleSaveImage}
      />
      
      {/* Product Dialog */}
      <ProductDialog
        isOpen={isProductDialogOpen}
        onOpenChange={setIsProductDialogOpen}
        newProduct={newProduct}
        editMode={editMode}
        isLoading={isLoading}
        categories={categories}
        onNewProductChange={setNewProduct}
        onNewProductImageChange={handleNewProductImageChange}
        onSaveProduct={handleSaveProduct}
      />
      
      {/* Delete Confirmation Dialog */}
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        selectedProduct={selectedProduct}
        isLoading={isLoading}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default AdminProductManager;
