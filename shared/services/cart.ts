import Cookies from "js-cookie";
import { Cart, CreateCartItemValues } from "../types/cart.types";
import { axiosInstance } from "./instance";

export const getCart = async (): Promise<Cart> => {
  //const token = await Cookies.get("cartToken");

  return (
    await axiosInstance.get<Cart>("/cart", {
      // headers: {
      //   Authorization: `${token}`,
      // },
      withCredentials: true,
    })
  ).data;
};

export const updateItemQuantity = async (
  id: number,
  quantity: number
): Promise<Cart> => {
  //const token = await Cookies.get("cartToken");
  return (
    await axiosInstance.patch<Cart>(
      "/cart/" + id,
      { quantity },
      {
        // headers: {
        //   Authorization: `${token}`,
        // },
        withCredentials: true,
      }
    )
  ).data;
};

export const removeCartItem = async (id: number) => {
  //const token = await Cookies.get("cartToken");

  return (
    await axiosInstance.delete<Cart>("/cart/" + id, {
      // headers: {
      //   Authorization: `${token}`,
      // },
      withCredentials: true,
    })
  ).data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<Cart> => {
  //const token = await Cookies.get("cartToken");

  const headers: Record<string, string> = {};

  // if (token) {
  //   headers.Authorization = token;
  // }
  return (
    await axiosInstance.post<Cart>("/cart/", values, {
      //headers,
      withCredentials: true,
    })
  ).data;
};
