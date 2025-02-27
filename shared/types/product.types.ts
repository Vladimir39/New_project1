import { Iingredients } from "./Ingredient.types";

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
  availability: boolean;
  ingredients: Iingredients[];
}
