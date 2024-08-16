import { IProduct } from "../shared/types/product.types";
import { axiosInstance } from "./instance";

const PRODUCTS = "products";

export const getAll = async (): Promise<IProduct[]> => {
  return (await axiosInstance.get<IProduct[]>("/products")).data;
};
export const getID = async ({ id }: { id: string }): Promise<IProduct> => {
  return (await axiosInstance.get<IProduct>(`/${PRODUCTS}/${id}`)).data;
};
