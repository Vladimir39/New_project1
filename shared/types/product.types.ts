export interface IProduct {
  id: number;
  name: string;
  slug: string;
  images: string;
  description: string;
  price: number;
  categoryId: number;
  amount: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  popular: boolean;
  countPopular: string;
  ingredients: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };
}
