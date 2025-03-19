
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FranchiseInfo from './FranchiseInfo';
import FranchiseLogin from './FranchiseLogin';

const FranchiseTabs = () => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="info" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="info">Franchise Information</TabsTrigger>
          <TabsTrigger value="login">Franchise Login</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info" className="mt-6">
          <FranchiseInfo />
        </TabsContent>
        
        <TabsContent value="login" className="mt-6">
          <FranchiseLogin />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FranchiseTabs;
