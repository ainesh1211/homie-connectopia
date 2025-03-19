
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Eye, EyeOff, User, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

interface LoginPortalProps {
  login: (password: string) => boolean;
  isAuthenticated: boolean;
}

const LoginPortal = ({ login, isAuthenticated }: LoginPortalProps) => {
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [franchiseUsername, setFranchiseUsername] = useState('');
  const [franchisePassword, setFranchisePassword] = useState('');
  const [showFranchisePassword, setShowFranchisePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const success = login(adminPassword);
      
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to the admin portal",
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Authentication failed",
          description: "Incorrect password",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 800); // Simulate network delay
  };

  const handleFranchiseLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is just a demo - in a real app you would authenticate against a backend
    setTimeout(() => {
      toast({
        title: "Franchise login not available",
        description: "This is a demo. Please contact support for your franchise login credentials.",
        variant: "destructive",
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <img 
            src="/lovable-uploads/bae17041-2fa0-4a74-bdb6-1325e7c83377.png" 
            alt="Inaaya Healthtech Logo" 
            className="h-16 w-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Inaaya Healthtech</h1>
        </div>
        
        <Tabs defaultValue="admin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="admin" className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              Admin
            </TabsTrigger>
            <TabsTrigger value="franchise" className="flex items-center justify-center gap-2">
              <Store className="h-4 w-4" />
              Franchise
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="admin">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Admin Login</CardTitle>
                <CardDescription>Inaaya Healthtech Admin Portal</CardDescription>
              </CardHeader>
              <form onSubmit={handleAdminLogin}>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="adminPassword"
                          type={showAdminPassword ? "text" : "password"}
                          placeholder="Enter admin password"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          className="pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowAdminPassword(!showAdminPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                        >
                          {showAdminPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Login
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="franchise">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Franchise Login</CardTitle>
                <CardDescription>Inaaya Healthtech Franchise Portal</CardDescription>
              </CardHeader>
              <form onSubmit={handleFranchiseLogin}>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        id="franchiseUsername"
                        type="text"
                        placeholder="Username"
                        value={franchiseUsername}
                        onChange={(e) => setFranchiseUsername(e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="franchisePassword"
                          type={showFranchisePassword ? "text" : "password"}
                          placeholder="Password"
                          value={franchisePassword}
                          onChange={(e) => setFranchisePassword(e.target.value)}
                          className="pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowFranchisePassword(!showFranchisePassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                        >
                          {showFranchisePassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <User className="mr-2 h-4 w-4" />
                        Login
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need help? Contact our support team at gm@inaayahealthtech.com</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPortal;
