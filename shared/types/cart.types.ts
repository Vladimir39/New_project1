export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  ingredients: Array<{ name: string; price: number }>;
};

export interface Cart {
  items: [];
  totalAmount: number;
  token?: string;
}

export interface CreateCartItemValues {
  productId: number;
  ingredient: number[];
}
