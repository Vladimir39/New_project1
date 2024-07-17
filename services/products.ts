import { IProduct } from "../types/product.types";
import { axiosInstance } from "./instance";

export const getAll = async (): Promise<IProduct[]> => {
  return (await axiosInstance.get<IProduct[]>("/products")).data;
};
