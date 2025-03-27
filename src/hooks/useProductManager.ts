
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/data/productsData';

export interface ProductForm extends Product {}

export const useProductManager = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [newProduct, setNewProduct] = useState<Product>({
    id: initialProducts.length + 1,
    name: "",
    category: "Antibiotics",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=New+Product",
    description: "",
    volume: "",
    packing: "",
    mrp: ""
  });
  const [editMode, setEditMode] = useState(false);
  
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
  
  const openImageDialog = (product: Product) => {
    setSelectedProduct({
      ...product,
      tempImage: undefined
    });
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
  
  const getFilteredProducts = () => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeTab === 'all' || product.category === activeTab;
      
      return matchesSearch && matchesCategory;
    });
  };

  return {
    products,
    searchQuery,
    setSearchQuery,
    selectedProduct,
    isImageDialogOpen,
    setIsImageDialogOpen,
    isProductDialogOpen,
    setIsProductDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    isLoading,
    activeTab,
    setActiveTab,
    newProduct,
    setNewProduct,
    editMode,
    filteredProducts: getFilteredProducts(),
    handleImageChange,
    handleNewProductImageChange,
    handleSaveImage,
    handleSaveProduct,
    handleDeleteProduct,
    handleEditProduct,
    handleDeleteConfirmation,
    openImageDialog,
    openNewProductDialog
  };
};
