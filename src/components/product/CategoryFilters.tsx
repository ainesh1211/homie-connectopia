
import { cn } from "@/lib/utils";
import { Pill, Heart, Bone, CookingPot, Droplet, Flower, Circle, Leaf, Eye, Ear, ShowerHead, Star, Baby, Syringe } from 'lucide-react';

// Define the icon mapping as a separate object
export const categoryIcons = {
  "Antibiotics": Pill,
  "Ortho": Bone,
  "Gastro": CookingPot,
  "Antihistamines, Cough & Cold": Droplet,
  "Gynaecology": Flower,
  "Soft Gel": Circle,
  "Ayurvedic Products": Leaf,
  "Eye & Ent Drops": Eye,
  "Dental": Ear,
  "Dermatology": ShowerHead,
  "Multi Vitamins": Star,
  "Cardiac": Heart,
  "Pediatrics": Baby,
  "Injections": Syringe
};

// Define categories as a constant that can be imported elsewhere
export const categories = [
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

interface CategoryFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilters = ({ selectedCategory, setSelectedCategory }: CategoryFiltersProps) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const IconComponent = category !== "All" ? categoryIcons[category as keyof typeof categoryIcons] : null;
            return (
              <button
                key={category}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-primary/10 hover:bg-primary/20"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilters;
