
import { Product } from './types';
import { antibioticsProducts } from './categories/antibiotics';
import { gastroProducts } from './categories/gastro';
import { multiVitaminsProducts } from './categories/multi-vitamins';
import { miscellaneousProducts } from './categories/miscellaneous';
import { injectionsProducts } from './categories/injections';
import { specialtyProducts } from './categories/specialty';

// Re-export the Product type
export type { Product };

// Export the combined products data
export const productsData: Product[] = [
  ...antibioticsProducts,
  ...gastroProducts,
  ...multiVitaminsProducts,
  ...miscellaneousProducts,
  ...injectionsProducts,
  ...specialtyProducts
];

// Re-export categories from types
export { categories } from './types';
