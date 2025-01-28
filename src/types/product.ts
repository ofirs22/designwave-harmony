export interface Product {
  id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

export interface Package extends Product {
  description: string;
  items: Product[];
}

export interface UserFavorite {
  userId: string;
  productId: string;
  type: 'product' | 'package';
  createdAt: string;
}

export interface ProductState {
  products: Product[];
  packages: Package[];
  favorites: UserFavorite[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
