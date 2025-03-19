
export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  volume?: string;
  packing?: string;
  mrp?: string;
}

export const productsData: Product[] = [
  // Antibiotics
  {
    id: 1,
    name: "INAACURE-200 LB",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inaacure-200-lb.jpg",
    description: "Cefixime & Lactic acid Dispersible Tablets 200mg | Packing: 10x10 | MRP: ₹1600.00"
  },
  {
    id: 2,
    name: "INAACURE-100",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inaacure-100.jpg",
    description: "Cefixime Dispersible Tablets 100mg | Packing: 10x10 | MRP: ₹1100.00"
  },
  {
    id: 3,
    name: "INAACURE-O",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inaacure-o.jpg",
    description: "Cefixime & Ofloxacin Tablets | Packing: 10x10 | MRP: ₹1900.00"
  },
  {
    id: 4,
    name: "AMOXINYA-CV 625 LB",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/amoxinya-cv-625-lb.jpg",
    description: "Amoxycillin, Potassium clavulanate &Lactic acid Tablet IP 625mg | Packing: 10x1x10 | MRP: ₹2800.00"
  },
  {
    id: 5,
    name: "INAAYACILLIN-500",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inaayacillin-500.jpg",
    description: "Amoxycillin 500mg | Packing: 10x10 | MRP: ₹823.20"
  },
  {
    id: 6,
    name: "AZICAN-250",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/azican-250.jpg",
    description: "Azithromycin Tablet 250mg | Packing: 10x6 | MRP: ₹690.00"
  },
  {
    id: 7,
    name: "AZICAN-500",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/azican-500.jpg",
    description: "Azithromycin Tablet 500mg | Packing: 10x10 | MRP: ₹700.00"
  },
  {
    id: 8,
    name: "INAAYDOXY-LB",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inaaydoxy-lb.jpg",
    description: "Doxycycline & Lactic acid Bacillus Capsules | Packing: 10x10 | MRP: ₹750.00"
  },
  {
    id: 9,
    name: "OFFLXCAN-200",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/offlxcan-200.jpg",
    description: "Ofloxacin Tablet 200mg | Packing: 10x10 | MRP: ₹680.00"
  },
  {
    id: 10,
    name: "OFFLXCAN-OZ",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/offlxcan-oz.jpg",
    description: "Ofloxacin &Ornidazole Tablet | Packing: 10x10 | MRP: ₹1350.00"
  },
  {
    id: 11,
    name: "INAYA-LID",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inaya-lid.jpg",
    description: "Linezolid 600mg | Packing: 10x10 | MRP: ₹2500.00"
  },
  {
    id: 12,
    name: "INAPOD-200",
    category: "Antibiotics",
    image: "https://inaayahealthtech.com/images/inapod-200.jpg",
    description: "Cefpodoxime Tablets IP 200mg | Packing: 10x10 | MRP: ₹3650.00"
  },
  // Syrups from the image
  {
    id: 101,
    name: "INAYALIV-DS SYRUP",
    category: "Gastro",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYALIV-DS",
    description: "Liver DS syrup (Special pack)",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹145"
  },
  {
    id: 102,
    name: "INAYALIV-DS SYRUP",
    category: "Gastro",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYALIV-DS",
    description: "Liver DS syrup",
    volume: "100ml",
    packing: "CTN",
    mrp: "₹82"
  },
  {
    id: 103,
    name: "INAYALIV-ZYME Syrup",
    category: "Gastro",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYALIV-ZYME",
    description: "Liver Enzyme Syrup",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹173"
  },
  {
    id: 104,
    name: "INAYALIV-ZYME SYRUP",
    category: "Gastro",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYALIV-ZYME",
    description: "Liver Enzyme Syrup",
    volume: "100ml",
    packing: "CTN",
    mrp: "₹85"
  },
  {
    id: 105,
    name: "ACNAIYA-CLEAR SYRUP",
    category: "Multi Vitamins",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=ACNAIYA-CLEAR",
    description: "Blood Purifier Syrup",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹185"
  },
  {
    id: 106,
    name: "BREN-TECH",
    category: "Multi Vitamins",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=BREN-TECH",
    description: "Brain Tonic",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹190"
  },
  {
    id: 107,
    name: "INAAYASTO-NIL",
    category: "Ayurvedic Products",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYASTO-NIL",
    description: "Stone Alkalyzer Syrup",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹160"
  },
  {
    id: 108,
    name: "INAAYA-UTRO",
    category: "Gynaecology",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYA-UTRO",
    description: "Ladies Tonic Syrup (sugar free)",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹140"
  },
  {
    id: 109,
    name: "INAAYAHEPA Syrup",
    category: "Gastro",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYAHEPA",
    description: "Sylimarin with Multivitamins Syrup",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹148"
  },
  {
    id: 110,
    name: "INAAYA-IMMUNITY BOOSTER",
    category: "Multi Vitamins",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYA-IMMUNITY",
    description: "Caricca Papaya, Giloy &Tulsi Syrup",
    volume: "200ml",
    packing: "CTN",
    mrp: "₹218"
  },
  {
    id: 111,
    name: "INAYACOF-HONEY",
    category: "Antihistamines, Cough & Cold",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYACOF-HONEY",
    description: "Herbal Honey Base Cough Syrup",
    volume: "100ml",
    packing: "CTN",
    mrp: "₹73"
  },
  {
    id: 112,
    name: "INAYA-ORTHO Oil",
    category: "Ortho",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYA-ORTHO",
    description: "Pain Oil",
    volume: "50ml",
    packing: "CTN",
    mrp: "₹105"
  },
  {
    id: 113,
    name: "INAYAOX-POWER",
    category: "Multi Vitamins",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYAOX-POWER",
    description: "Vigour & Vitality",
    volume: "10x10",
    packing: "Blister",
    mrp: "₹950"
  },
  // Injections
  {
    id: 114,
    name: "INAYACEFS-1g",
    category: "Injections",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYACEFS-1g",
    description: "Ceftriaxone Injection IP 1000mg",
    packing: "Vial with WFI",
    mrp: "₹67"
  },
  {
    id: 115,
    name: "INAYACEFS-SB 1.5g",
    category: "Injections",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYACEFS-SB",
    description: "Ceftriaxone &Sulbactam Injection 1500mg",
    packing: "Vial with WFI",
    mrp: "₹185"
  },
  {
    id: 116,
    name: "ONDAWATT-MD",
    category: "Injections",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=ONDAWATT-MD",
    description: "Ondansetron 4mg",
    volume: "2mlx10",
    packing: "Vial",
    mrp: "₹65"
  },
  // Adding Eye & ENT Drops category
  {
    id: 201,
    name: "INAAYA-VISOL Eye Drops",
    category: "Eye & Ent Drops",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYA-VISOL",
    description: "Lubricating Eye Drops",
    volume: "10ml",
    packing: "Bottle",
    mrp: "₹85"
  },
  // Cardiac products
  {
    id: 301,
    name: "INAYACARD-5",
    category: "Cardiac",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYACARD-5",
    description: "Amlodipine 5mg Tablets",
    packing: "10x10",
    mrp: "₹220"
  },
  {
    id: 302,
    name: "INAYACARD-AT",
    category: "Cardiac",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYACARD-AT",
    description: "Amlodipine & Atenolol Tablets",
    packing: "10x10",
    mrp: "₹360"
  },
  // Pediatrics
  {
    id: 401,
    name: "INAYAPEP-DZ",
    category: "Pediatrics",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYAPEP-DZ",
    description: "Pediatric Digestive Enzyme Drops",
    volume: "15ml",
    packing: "Bottle",
    mrp: "₹95"
  },
  // Dental products
  {
    id: 501,
    name: "INAAYA-DENT",
    category: "Dental",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYA-DENT",
    description: "Anti-cavity & Gum Care Toothpaste",
    volume: "100g",
    packing: "Tube",
    mrp: "₹75"
  },
  // Dermatology products
  {
    id: 601,
    name: "INAAYA-DERM",
    category: "Dermatology",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAAYA-DERM",
    description: "Anti-fungal & Anti-bacterial Skin Cream",
    volume: "20g",
    packing: "Tube",
    mrp: "₹110"
  },
  // Soft Gel products
  {
    id: 701,
    name: "INAYA-OMEGA",
    category: "Soft Gel",
    image: "https://placehold.co/400x400/e2e8f0/64748b?text=INAYA-OMEGA",
    description: "Omega 3 Fatty Acids Soft Gelatin Capsules",
    packing: "10x10",
    mrp: "₹395"
  }
];
