import { IMenu } from "../shared/types/menu.types";
import { axiosInstance } from "./instance";

export const getAll = async (): Promise<IMenu[]> => {
  return (await axiosInstance.get<IMenu[]>("/category")).data;
};
