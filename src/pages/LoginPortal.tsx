
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface LoginPortalProps {
  login: (password: string) => boolean;
  isAuthenticated: boolean;
}

const LoginPortal = ({ login, isAuthenticated }: LoginPortalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('admin');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  if (isAuthenticated) {
    navigate('/admin/dashboard');
    return null;
  }
  
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Use the login prop function for admin login
    setTimeout(() => {
      const success = login(password);
      
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard.",
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };
  
  const handleFranchiseLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate franchise login (this would connect to a real API in production)
    setTimeout(() => {
      toast({
        title: "Franchise login unavailable",
        description: "This is a demo. Please contact support for your login credentials.",
        variant: "destructive",
      });
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <a href="/">
              <img 
                src="/lovable-uploads/bae17041-2fa0-4a74-bdb6-1325e7c83377.png" 
                alt="Inaaya Healthtech Logo" 
                className="h-16 w-16"
              />
            </a>
          </div>
          <h1 className="text-2xl font-bold">Inaaya Healthtech Portal</h1>
          <p className="text-sm text-muted-foreground mt-2">Sign in to access your account</p>
        </div>
        
        <Tabs defaultValue="admin" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="admin" className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Admin
            </TabsTrigger>
            <TabsTrigger value="franchise" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Franchise
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>
                  Access the admin dashboard to manage products, orders, and more.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleAdminLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-username">Username</Label>
                    <Input
                      id="admin-username"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                        Logging in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="franchise">
            <Card>
              <CardHeader>
                <CardTitle>Franchise Partner Login</CardTitle>
                <CardDescription>
                  Access your franchise dashboard to place orders, check sales, and more.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleFranchiseLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="franchise-username">Franchise ID</Label>
                    <Input
                      id="franchise-username"
                      type="text"
                      placeholder="Enter your franchise ID"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="franchise-password">Password</Label>
                    <Input
                      id="franchise-password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                        Logging in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPortal;
