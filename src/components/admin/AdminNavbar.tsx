
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, LayoutDashboard, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { toast } from '@/components/ui/use-toast';

interface AdminNavbarProps {
  logout: () => void;
}

const AdminNavbar = ({ logout }: AdminNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };
  
  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/admin/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    { 
      name: 'Product Images', 
      path: '/admin/products',
      icon: <ImageIcon className="h-5 w-5" />
    }
  ];
  
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Link to="/admin/dashboard" className="font-bold text-lg flex items-center">
            <span className="text-primary">Inaaya</span>
            <span className="ml-1">Admin</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
          
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="ml-2 text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
              
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="mt-4 text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default AdminNavbar;
