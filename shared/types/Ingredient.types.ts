export interface Iingredients {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface IngredientsProps {
  items: Iingredients[];
}
