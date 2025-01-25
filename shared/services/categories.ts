import { IMenu } from "../../shared/types/menu.types";
import { axiosInstance } from "./instance";

export const getAll = async (
  restaurantId: number | undefined
): Promise<IMenu[]> => {
  return (
    await axiosInstance.get<IMenu[]>("/category", {
      params: {
        restaurantId,
      },
    })
  ).data;
};
