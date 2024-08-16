import { IProduct } from "./product.types";

export interface IMenu {
  id: number;
  name: string;
  slug: string;
  products: IProduct[];
}
