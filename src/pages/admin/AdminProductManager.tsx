
import { productsData } from '@/data/productsData';
import AdminNavbar from '@/components/admin/AdminNavbar';
import ProductSearchAndFilters from '@/components/admin/ProductSearchAndFilters';
import ProductGrid from '@/components/admin/ProductGrid';
import ImageDialog from '@/components/admin/ImageDialog';
import ProductDialog from '@/components/admin/ProductDialog';
import DeleteDialog from '@/components/admin/DeleteDialog';
import { useProductManager } from '@/hooks/useProductManager';

interface AdminProductManagerProps {
  logout: () => void;
}

const AdminProductManager = ({ logout }: AdminProductManagerProps) => {
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

  const {
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
    editMode,
    filteredProducts,
    handleImageChange,
    handleNewProductImageChange,
    handleSaveImage,
    handleSaveProduct,
    handleDeleteProduct,
    handleEditProduct,
    handleDeleteConfirmation,
    openImageDialog,
    openNewProductDialog
  } = useProductManager(productsData);
  
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
        
        <ProductSearchAndFilters 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onAddNewProduct={openNewProductDialog}
          categories={categories}
        />
        
        <ProductGrid 
          products={filteredProducts}
          onEdit={handleEditProduct}
          onDelete={handleDeleteConfirmation}
          onImageChange={openImageDialog}
        />
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
