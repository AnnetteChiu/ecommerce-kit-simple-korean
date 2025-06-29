export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  category: 'Tops' | 'Bottoms' | 'Dresses' | 'Outerwear' | 'Accessories';
  image: string;
  dataAiHint: string;
}
