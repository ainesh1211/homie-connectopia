
import { Link } from 'react-router-dom';
import { ImageIcon, LogOut, Package, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminNavbar from '@/components/admin/AdminNavbar';

interface AdminDashboardProps {
  logout: () => void;
}

const AdminDashboard = ({ logout }: AdminDashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar logout={logout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your website content from here
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/admin/products" className="block">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  Product Images
                </CardTitle>
                <CardDescription>Update product photos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Add, update or remove product images for your catalog
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="h-full opacity-60 cursor-not-allowed">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Products Data
              </CardTitle>
              <CardDescription>Manage product details</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Coming soon: Edit product descriptions, pricing and other details
              </p>
            </CardContent>
          </Card>
          
          <Card className="h-full opacity-60 cursor-not-allowed">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Site Settings
              </CardTitle>
              <CardDescription>Website configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Coming soon: Update contact information, company details and more
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
