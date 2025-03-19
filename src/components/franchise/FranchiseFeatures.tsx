
import { Shield, BookUserIcon, TrendingUp, Users, ShoppingBag, Award, Calendar } from "lucide-react";
import FranchiseFeature from "./FranchiseFeature";

const FranchiseFeatures = () => {
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
    <div className="max-w-4xl mx-auto mt-10">
      <h3 className="text-xl font-bold mb-6 text-center">Our Support</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {franchiseFeatures.map((feature, index) => (
          <FranchiseFeature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FranchiseFeatures;
