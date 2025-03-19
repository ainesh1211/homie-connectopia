
import { LucideIcon } from "lucide-react";

interface FranchiseFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FranchiseFeature = ({ icon: Icon, title, description }: FranchiseFeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FranchiseFeature;
