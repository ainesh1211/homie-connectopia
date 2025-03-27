
export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  volume?: string;
  packing?: string;
  mrp?: string;
  tempImage?: string; // Added to make it compatible with existing code
}

// Export category names as a constant array for reuse
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
