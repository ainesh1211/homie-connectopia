import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabletsIcon, Users, CreditCard, ShoppingBag, TrendingUp, HandshakeIcon, Building, Award, Shield, Calendar, BookUserIcon, Boxes } from 'lucide-react';

const franchiseSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  experience: z.string().min(2, { message: 'Please describe your business experience.' }),
  location: z.string().min(2, { message: 'Please enter your preferred location.' }),
  investment: z.string().min(1, { message: 'Please enter your investment capacity.' }),
});

const loginSchema = z.object({
  username: z.string().min(2, { message: 'Username is required.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const Franchise = () => {
  const { toast } = useToast();
  const [ref, isIntersecting] = useIntersectionObserver();
  const [activeTab, setActiveTab] = useState('info');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const franchiseForm = useForm<z.infer<typeof franchiseSchema>>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      experience: '',
      location: '',
      investment: '',
    },
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFranchiseSubmit = (data: z.infer<typeof franchiseSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "We'll contact you shortly to discuss your franchise opportunity.",
      });
      franchiseForm.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const onLoginSubmit = (data: z.infer<typeof loginSchema>) => {
    setIsLoggingIn(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: "This is a demo. Please contact support for your login credentials.",
        variant: "destructive",
      });
      setIsLoggingIn(false);
    }, 1500);
  };

  const franchiseFeatures = [
    { 
      icon: Shield,
      title: "All Licenses Procurement", 
      description: "We handle all regulatory compliance and licensing requirements." 
    },
    { 
      icon: BookUserIcon,
      title: "Doctor OPD Arrangement", 
      description: "We arrange doctor consultations and OPD services at your location." 
    },
    { 
      icon: TrendingUp,
      title: "Marketing Online/Offline Support", 
      description: "Comprehensive marketing support both online and offline." 
    },
    { 
      icon: Users,
      title: "Staff Recruitment", 
      description: "Help with recruiting qualified pharmacy staff." 
    },
    { 
      icon: ShoppingBag,
      title: "Medicine Supply", 
      description: "Regular supply of quality medicines at competitive prices." 
    },
    { 
      icon: Award,
      title: "Master Franchise in Your State", 
      description: "Opportunity to become a master franchisee in your state." 
    },
    { 
      icon: Calendar,
      title: "Expiry Management & More", 
      description: "Assistance with expiry management and other operational aspects." 
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto">
          <div 
            // @ts-ignore - TypeScript doesn't know ref can be assigned to HTMLDivElement
            ref={ref} 
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10">
              Business Opportunity
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Inaaya Healthtech Franchise
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join our growing network of successful pharmacies and healthcare centers across India.
            </p>
          </div>
        </div>
      </section>
      
      {/* Franchise Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="info" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">Franchise Information</TabsTrigger>
                <TabsTrigger value="login">Franchise Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="mt-6">
                <div className="bg-primary/5 rounded-xl p-8 mb-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Khole Apna Pharmacy</h2>
                  <p className="text-2xl md:text-3xl font-semibold mb-4">Invest 11.5 Lakh</p>
                  <p className="text-2xl md:text-3xl font-semibold mb-8">Opportunity to earn 1.5* lakh per month</p>
                  
                  <div className="max-w-4xl mx-auto mt-10">
                    <h3 className="text-xl font-bold mb-6 text-center">Our Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {franchiseFeatures.map((feature, index) => (
                        <div 
                          key={index}
                          className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
                        >
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="font-medium mb-2">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Apply for Franchise</CardTitle>
                    <CardDescription>
                      Fill out the form below to start your journey with Inaaya Healthtech.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...franchiseForm}>
                      <form onSubmit={franchiseForm.handleSubmit(onFranchiseSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={franchiseForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={franchiseForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={franchiseForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 9876543210" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={franchiseForm.control}
                            name="investment"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Investment Capacity (₹)</FormLabel>
                                <FormControl>
                                  <Input placeholder="15,00,000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={franchiseForm.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Location</FormLabel>
                              <FormControl>
                                <Input placeholder="City, State" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={franchiseForm.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Experience</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your business experience..." 
                                  className="min-h-[120px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                              Submitting...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="login" className="mt-6">
                <Card className="max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle>Franchise Partner Login</CardTitle>
                    <CardDescription>
                      Access your franchise dashboard to manage orders, check sales, and more.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...loginForm}>
                      <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                        <FormField
                          control={loginForm.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your username" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input type="password" placeholder="••••••••" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isLoggingIn}
                        >
                          {isLoggingIn ? (
                            <>
                              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                              Logging in...
                            </>
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Franchise;
