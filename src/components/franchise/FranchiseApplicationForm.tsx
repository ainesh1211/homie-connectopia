
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const franchiseSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  experience: z.string().min(2, { message: 'Please describe your business experience.' }),
  location: z.string().min(2, { message: 'Please enter your preferred location.' }),
  investment: z.string().min(1, { message: 'Please enter your investment capacity.' }),
});

const FranchiseApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  return (
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
  );
};

export default FranchiseApplicationForm;
