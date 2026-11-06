export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  volume: string;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
